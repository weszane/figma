import { shallowEqual, useSelector } from 'react-redux'
import { reportError } from '../905/11'
import { sha1BytesFromHex, sha1Hex } from '../905/125019'
import { ServiceCategories } from '../905/165054'
import { resolveMessage } from '../905/231762'
import { readImageBytes } from '../905/289751'
import { getI18nString } from '../905/303541'
import { debugState } from '../905/407919'
import { hubFileAPI } from '../905/473998'
import { encodeBase64 } from '../905/561685'
import { getFeatureFlags } from '../905/601108'
import { profileServiceAPI } from '../905/608932'
import { uploadVideoToPresignedPost } from '../905/623179'
import { generateVideoThumbnail } from '../905/659729'
import { liveStoreInstance } from '../905/713695'
import { uploadMultiple, uploadRequest } from '../905/827765'
import { VideoUploadService } from '../905/871922'
import { getValueOrFallback } from '../905/872825'
import { sendWithRetry } from '../905/910117'
import { IMAGE_TYPES, VIDEO_TYPE_VALUES } from '../905/966582'
import { isSameWorkspaceIdentity } from '../905/967587'
import { detectMimeType } from '../905/970229'
import { TeamOrgType } from '../figma_app/10554'
import { hasClientMeta, hasFigFileMetadata, hasMonetizedResourceMetadata, isPlugin, isWidget } from '../figma_app/45218'
import { PublisherType } from '../figma_app/155287'
import { isPublicLinkBanned } from '../figma_app/246699'
import { hasHubFile, isPluginOrWidget } from '../figma_app/427318'
import { canAdminOrg, hasAdminRoleAccessOnTeam } from '../figma_app/642025'
import { getPluginPublisherStatus, isPublisherAcceptedOrAdmin } from '../figma_app/711113'
import { findPublishedProfileForUser, getAcceptedPublisherProfile, getAdminUserForProfile, getAssociatedProfiles, getAuthedPublisherProfile, isOrgOrTeamExport, MAX_COVER_IMAGE_SIZE, MAX_PLUGIN_SIZE } from '../figma_app/740025'
import { isResourcePendingPublishing, isUserAcceptedPublisher } from '../figma_app/777551'
import { getCurrentUserOrgUser } from '../figma_app/951233'

// Define PublisherStatus enum for better type safety and readability
enum PublisherStatus {
  NONE = 0,
  PENDING = 1,
  DISPLAY_ONLY = 2,
  ADMIN_IN_DIFFERENT_WORKSPACE = 3,
  ADMIN = 4,
  NONE_WITH_INHERITED_ADMIN = 5,
  PENDING_WITH_INHERITED_ADMIN = 6,
  DISPLAY_ONLY_WITH_INHERITED_ADMIN = 7,
  EXPLICIT_ADMIN = 8,
}

// Status arrays for quick lookup
export const PENDING_STATUSES = [PublisherStatus.PENDING, PublisherStatus.PENDING_WITH_INHERITED_ADMIN] as const
export const DISPLAY_ONLY_STATUSES = [PublisherStatus.DISPLAY_ONLY, PublisherStatus.DISPLAY_ONLY_WITH_INHERITED_ADMIN] as const

/**
 * Checks if a publisher status indicates admin privileges
 * @param status - The publisher status to check
 * @returns True if the status indicates admin privileges
 */
export function isAdminStatus(status: PublisherStatus): boolean {
  return status >= PublisherStatus.ADMIN
}

/**
 * Checks if a creator is an accepted publisher in the given context
 * @param state - Application state
 * @param resource - The resource to check
 * @returns True if the creator is an accepted publisher
 */
export function isCreatorAcceptedPublisher(state: any, resource: any): boolean {
  const associatedProfiles = getAssociatedProfiles(state)
  const isCreatorInProfiles = !!(resource.creator.id && associatedProfiles.some((profile: any) => profile.id === resource.creator.id))

  if (isCreatorInProfiles && isOrgOrTeamExport(state.authedActiveCommunityProfile)) {
    const acceptedProfile = getAcceptedPublisherProfile(resource)
    return acceptedProfile?.id === state.authedActiveCommunityProfile?.id
  }

  return isCreatorInProfiles
}

/**
 * Custom hook to determine if current user is a publisher for a resource
 * @param resource - The resource to check
 * @returns Boolean indicating if user is publisher
 */
export function useIsPublisher(resource: any): boolean {
  const publisherStatus = useSelector((state: any) => getPublisherStatus(state, resource))
  const isAcceptedPublisher = useSelector((state: any) =>
    hasClientMeta(resource)
      ? isAdminStatus(publisherStatus)
      : isCreatorAcceptedPublisher(state, resource),
  )

  const pluginPublisherStatus = useSelector((state: any) =>
    isPlugin(resource) || isWidget(resource)
      ? getPluginPublisherStatus(state, resource)
      : null,
  )

  const fileKey = hasFigFileMetadata(resource) ? resource.fig_file_metadata?.key : null
  const fileData = liveStoreInstance.File.useValue(fileKey)
  const hasFileData = !!fileKey && !!fileData

  return hasClientMeta(resource)
    ? isAcceptedPublisher && hasFileData
    : !!(isPlugin(resource) || isWidget(resource)) && (isAcceptedPublisher || isPublisherAcceptedOrAdmin(pluginPublisherStatus))
}

/**
 * Determines the publisher status for a user and resource
 * @param state - Application state
 * @param resource - The resource to check
 * @returns PublisherStatus enum value
 */
export function getPublisherStatus(state: any, resource: any): PublisherStatus {
  const authedProfile = getAuthedPublisherProfile(state, resource)
  const hasWorkspace = !!(authedProfile?.org_id || authedProfile?.team_id)
  const adminUser = authedProfile && getAdminUserForProfile(authedProfile, state)
  const isSameWorkspace = adminUser && state.user && isSameWorkspaceIdentity(state, adminUser)

  // Plugin/widget specific logic
  if (isPluginOrWidget(resource)
    && (!adminUser || adminUser.userId === state.user?.id)
    && resource.creator.id === state.user?.id) {
    return PublisherStatus.EXPLICIT_ADMIN
  }

  // Accepted publishers logic
  const isAcceptedPublisher = resource.community_publishers?.accepted.some(
    (publisher: any) => publisher.id === state.user?.community_profile_id,
  )

  if (isAcceptedPublisher) {
    if (!hasWorkspace && hasHubFile(resource)) {
      return PublisherStatus.EXPLICIT_ADMIN
    }

    if (adminUser) {
      return isSameWorkspace
        ? (hasWorkspace ? PublisherStatus.DISPLAY_ONLY_WITH_INHERITED_ADMIN : PublisherStatus.DISPLAY_ONLY)
        : PublisherStatus.ADMIN_IN_DIFFERENT_WORKSPACE
    }

    return PublisherStatus.DISPLAY_ONLY
  }

  // Pending publishers logic
  const isPendingPublisher = resource.community_publishers?.pending?.some(
    (publisher: any) => publisher.id === state.user?.community_profile_id,
  )

  if (isPendingPublisher) {
    return adminUser && isSameWorkspace
      ? PublisherStatus.PENDING_WITH_INHERITED_ADMIN
      : PublisherStatus.PENDING
  }

  // Default cases
  if (adminUser) {
    return isSameWorkspace
      ? PublisherStatus.NONE_WITH_INHERITED_ADMIN
      : PublisherStatus.ADMIN_IN_DIFFERENT_WORKSPACE
  }

  return PublisherStatus.NONE
}

/**
 * Gets the primary user ID status
 * @param state - Application state
 * @param profile - The profile to check
 * @returns Status code for primary user
 */
export function getPrimaryUserIdStatus(state: any, profile: any): number {
  if ('user' in state) {
    if (profile.primary_user_id === state.user?.id) {
      return 4 // ADMIN
    }

    if (isOrgOrTeamExport(profile)) {
      const adminUser = getAdminUserForProfile(profile, state)
      const isSameIdentity = adminUser && state.user && isSameWorkspaceIdentity(state, adminUser)

      if (adminUser && isSameIdentity) {
        return 4 // ADMIN
      }

      if (adminUser && !isSameIdentity) {
        return 3 // ADMIN_IN_DIFFERENT_WORKSPACE
      }
    }
  }

  return 0 // NONE
}

// Helper function to check if roles are public
const isPublicRole = (roles: any): boolean => !!(roles?.is_public || roles?.org)

/**
 * Determines the publisher type for a resource
 * @param resource - The resource to check
 * @param teamId - Team ID if applicable
 * @param state - Application state
 * @param isPublic - Whether explicitly public
 * @returns PublisherType enum value
 */
export function determinePublisherType(
  resource: any,
  teamId: string | null,
  state: any,
  isPublic: boolean,
): PublisherType {
  if (hasMonetizedResourceMetadata(resource) || isPublic) {
    return PublisherType.PUBLIC
  }

  if (isPublicRole(resource.roles)) {
    return resource.roles.is_public || isResourcePendingPublishing(resource)
      ? PublisherType.PUBLIC
      : PublisherType.ORG
  }

  return teamId != null && state ? PublisherType.ORG : PublisherType.PUBLIC
}

/**
 * Gets the default author for a Hub file
 * @param state - Application state
 * @param hubFile - The Hub file
 * @param authState - Authentication state
 * @param preferredAuthor - Preferred author if available
 * @returns Selected author workspace
 */
export function getDefaultHubFileAuthor(
  state: any,
  hubFile: any,
  authState: any,
  preferredAuthor: any,
): any {
  const validAuthors = getValidAuthorsForHubFile(
    hubFile.team_id,
    authState,
    state,
    hubFile.parent_org_id || null,
  )

  if (validAuthors.length === 0) {
    throw new Error('Called getDefaultHubFilePublishingMetadataAuthor when no valid author exists')
  }

  return selectDefaultAuthor(
    state,
    validAuthors,
    authState.authedProfilesById,
    authState.user?.id,
    preferredAuthor,
  )
}

/**
 * Checks if user is accepted as an author
 * @param metadata - Resource metadata
 * @param userId - User ID to check
 * @returns True if user is accepted author
 */
export function isUserAcceptedAsAuthor(metadata: any, userId: string): boolean {
  if (!metadata)
    return false

  const authorId = metadata.author.id
  return isUserAcceptedPublisher(authorId, userId)
}

/**
 * Checks if a user is the creator of a resource
 * @param resource - The resource to check
 * @param userId - User ID to compare
 * @returns True if user is creator
 */
export function isCreator(resource: any, userId: string): boolean {
  return resource.creator.id === userId
}

/**
 * Gets the default author for a plugin
 * @param state - Application state
 * @param plugin - The plugin resource
 * @returns Selected author workspace
 */
export function getDefaultPluginAuthor(state: any, plugin: any): any {
  if (state) {
    const publisherWorkspace = getPublisherWorkspace(plugin, state)
    if (publisherWorkspace) {
      return publisherWorkspace
    }
  }

  const validAuthors = getValidAuthorsForPlugin(plugin, state)
  if (validAuthors.length === 0) {
    throw new Error('Called getDefaultPluginPublishingMetadataAuthor when no valid author exists')
  }

  return selectDefaultAuthor(
    state,
    validAuthors,
    plugin.authedProfilesById,
    plugin.user?.id,
  )
}

/**
 * Gets publisher workspace information
 * @param resource - The resource
 * @param profiles - Authenticated profiles
 * @param userId - Current user ID
 * @returns Workspace information or null
 */
export function getPublisherWorkspaceInfo(resource: any, profiles: any, userId: string): any {
  if (!resource?.id || Object.keys(resource.versions).length === 0) {
    return null
  }

  if ((resource.community_publishers?.accepted || []).length > 0) {
    const acceptedProfile = getAcceptedPublisherProfile(resource)
    const profileData = acceptedProfile && profiles[acceptedProfile.id]

    if (profileData?.team_id) {
      return { team_id: profileData.team_id }
    }

    if (profileData?.org_id) {
      return { org_id: profileData.org_id }
    }

    return { user_id: userId || resource.creator.id }
  }

  const publisherData = profiles[resource.publisher.id]

  if (publisherData?.org_id) {
    return { org_id: publisherData.org_id }
  }

  if (publisherData?.team_id) {
    return { team_id: publisherData.team_id }
  }

  return { user_id: publisherData?.primary_user_id || resource.creator.id }
}

/**
 * Extracts workspace ID information
 * @param workspace - Workspace object
 * @returns Extracted ID object or undefined
 */
export function extractWorkspaceId(workspace: any): any {
  if (workspace?.team_id) {
    return { team_id: workspace.team_id }
  }

  if (workspace?.org_id) {
    return { org_id: workspace.org_id }
  }

  return undefined
}

/**
 * Selects the default author from valid authors
 * @param state - Application state
 * @param validAuthors - Array of valid authors
 * @param profiles - Authenticated profiles
 * @param userId - Current user ID
 * @param preferredAuthor - Preferred author if available
 * @returns Selected author
 */
function selectDefaultAuthor(
  state: any,
  validAuthors: any[],
  profiles: any,
  userId: string | undefined,
  preferredAuthor?: any,
): any {
  if (validAuthors.length === 0) {
    throw new Error('Called getDefaultPublishingMetadataAuthor when no valid author exists')
  }

  const publisherInfo = getPublisherWorkspaceInfo(state, profiles, userId)

  if (publisherInfo && validAuthors.some(author => isSameWorkspace(author, publisherInfo))) {
    return publisherInfo
  }

  if (preferredAuthor && validAuthors.find(author => shallowEqual(author, preferredAuthor))) {
    return preferredAuthor
  }

  const userWorkspace = validAuthors.find(isUserWorkspace)
  if (userWorkspace)
    return userWorkspace

  const orgWorkspace = validAuthors.find(isOrgWorkspace)
  if (orgWorkspace)
    return orgWorkspace

  const teamWorkspace = validAuthors.find(isTeamWorkspace)
  if (teamWorkspace)
    return teamWorkspace

  return validAuthors[0]
}

/**
 * Checks if two workspaces are the same
 * @param workspace1 - First workspace
 * @param workspace2 - Second workspace
 * @returns True if workspaces are the same
 */
export function isSameWorkspace(workspace1: any, workspace2: any): boolean {
  if ('team_id' in workspace1) {
    return 'team_id' in workspace2 && workspace1.team_id === workspace2.team_id
  }

  if ('org_id' in workspace1) {
    return 'org_id' in workspace2 && workspace1.org_id === workspace2.org_id
  }

  if ('user_id' in workspace1) {
    return 'user_id' in workspace2 && workspace1.user_id === workspace2.user_id
  }

  return false
}

/**
 * Type guard for org workspace
 * @param workspace - Workspace to check
 * @returns True if org workspace
 */
const isOrgWorkspace = (workspace: any): boolean => 'org_id' in workspace

/**
 * Type guard for team workspace
 * @param workspace - Workspace to check
 * @returns True if team workspace
 */
const isTeamWorkspace = (workspace: any): boolean => 'team_id' in workspace

/**
 * Type guard for user workspace
 * @param workspace - Workspace to check
 * @returns True if user workspace
 */
const isUserWorkspace = (workspace: any): boolean => 'user_id' in workspace

/**
 * Gets valid authors for a Hub file
 * @param teamId - Team ID
 * @param state - Application state
 * @param hubFile - Hub file
 * @param orgId - Organization ID
 * @returns Array of valid authors
 */
export function getValidAuthorsForHubFile(
  teamId: string | null,
  state: any,
  hubFile: any,
  orgId: string | null,
): any[] {
  const result: any[] = []

  if ((hubFile?.community_publishers?.accepted || []).length > 0) {
    if (!teamId && !orgId) {
      return [{ user_id: state.user.id }]
    }

    const acceptedProfile = hubFile && getAcceptedPublisherProfile(hubFile)
    const profileData = acceptedProfile ? state.authedProfilesById[acceptedProfile.id] : null

    if (profileData?.team_id) {
      return hasAdminRoleAccessOnTeam(profileData.team_id, state)
        ? [{ team_id: profileData.team_id }]
        : []
    }

    if (profileData?.org_id) {
      return canAdminOrg(profileData.org_id, state)
        ? [{ org_id: profileData.org_id }]
        : []
    }
  }

  if (state.currentUserOrgId) {
    const orgData = state.orgById[state.currentUserOrgId]
    if (!orgData)
      return []

    if (canAdminOrg(state.currentUserOrgId, state)) {
      result.push({ org_id: state.currentUserOrgId })

      if (orgData.cmty_publish_as_user_enabled) {
        result.push({ user_id: state.user.id })
      }
    }

    if (teamId && state.teams[teamId]) {
      if (state.teams[teamId]?.org_access === 'secret') {
        return []
      }

      const canAccessTeam = isPublicLinkBanned(orgData.shared_container_setting)
        ? canAdminOrg(state.currentUserOrgId, state)
        : hasAdminRoleAccessOnTeam(teamId, state)

      if (canAccessTeam) {
        result.push({ team_id: teamId })
      }
    }

    return result
  }

  if (teamId) {
    if (hasAdminRoleAccessOnTeam(teamId, state)) {
      result.push({ team_id: teamId })
    }
    result.push({ user_id: state.user.id })
    return result
  }

  return [{ user_id: state.user.id }]
}

/**
 * Fetches editors for a file
 * @param file - File object with key
 * @returns Promise resolving to editors data
 */
export async function getEditors(file: { key: string }): Promise<any> {
  const { data, status } = await profileServiceAPI.getEditors({
    fileKey: file.key,
  })

  if (status === 200) {
    return data.meta
  }

  return undefined
}

/**
 * Gets publisher workspace information
 * @param state - Application state
 * @param resource - Resource object
 * @returns Publisher workspace or null
 */
export function getPublisherWorkspace(state: any, resource: any): any {
  if (resource.publisher.id && state.user) {
    switch (resource.publisher.entity_type) {
      case TeamOrgType.ORG: {
        const org = Object.values<ObjectOf>(state.orgById).find(
          (o: any) => o.community_profile_id === resource.publisher.id,
        )
        return { org_id: org?.id ?? state.currentUserOrgId ?? '' }
      }

      case TeamOrgType.TEAM: {
        const team = Object.values<ObjectOf>(state.teams).find(
          (t: any) => t.community_profile_id === resource.publisher.id,
        )
        return { team_id: team?.id || '' }
      }

      default:
        return { user_id: resource.creator.id }
    }
  }

  return null
}

/**
 * Gets valid authors for a plugin
 * @param state - Application state
 * @param plugin - Plugin resource
 * @param checkPublisherWorkspace - Whether to check publisher workspace
 * @returns Array of valid authors
 */
export function getValidAuthorsForPlugin(
  state: any,
  plugin: any,
  checkPublisherWorkspace: boolean = true,
): any[] {
  const result: any[] = []
  const publisherWorkspace = checkPublisherWorkspace && plugin
    ? getPublisherWorkspace(plugin, state)
    : null

  if (state.currentUserOrgId && canAdminOrg(state.currentUserOrgId, state)) {
    result.push({ org_id: state.currentUserOrgId })
  }

  Object.keys(state.teams).forEach((teamId) => {
    const team = state.teams[teamId]
    if (team && team.org_access !== 'secret' && hasAdminRoleAccessOnTeam(teamId, state)) {
      result.push({ team_id: teamId })
    }
  })

  result.push({ user_id: state.user.id })

  if (publisherWorkspace && !result.some(ws => isSameWorkspace(ws, publisherWorkspace))) {
    result.unshift(publisherWorkspace)
  }

  return result
}

/**
 * Checks if workspace matches criteria
 * @param workspace - Workspace to check
 * @param criteria - Matching criteria
 * @returns True if workspace matches
 */
export function isWorkspaceMatch(workspace: any, criteria: any): boolean {
  if (!workspace)
    return false

  const { team_id, org_id } = workspace

  if ('user_id' in criteria) {
    const associatedUsers = workspace.associated_users
    return !!(criteria.user_id && criteria.user_id === workspace.primary_user_id)
      || !!(associatedUsers?.some((user: any) => user.user_id === criteria.user_id))
  }

  return ('team_id' in criteria && team_id === criteria.team_id)
    || ('org_id' in criteria && org_id === criteria.org_id)
}

/**
 * Gets debug workspace information
 * @param workspace - Workspace object
 * @returns Debug information
 */
export function getDebugWorkspaceInfo(workspace: any): any {
  const state = debugState.getState()

  if ('user_id' in workspace) {
    return state.authedUsers.byId[workspace.user_id]
  }

  if ('org_id' in workspace) {
    return state.orgById[workspace.org_id]
  }

  if ('team_id' in workspace) {
    return state.teams[workspace.team_id]
  }

  return undefined
}

/**
 * Gets workspace name
 * @param workspace - Workspace object
 * @param state - Application state
 * @returns Workspace name or null
 */
export function getWorkspaceName(workspace: any, state: any): string | null {
  if ('org_id' in workspace) {
    return state.orgById[workspace.org_id]?.name ?? null
  }

  if ('team_id' in workspace) {
    return state.teams[workspace.team_id]?.name ?? null
  }

  const user = state.user && findPublishedProfileForUser(state.user, state.authedProfilesById)
  if (user?.public_at && user?.name) {
    return user.name
  }

  if (user?.public_at && user?.profile_handle) {
    return `@${user.profile_handle}`
  }

  return state.user?.handle || null
}

/**
 * Gets workspace display name
 * @param workspace - Workspace object
 * @param state - Application state
 * @returns Display name
 */
export function getWorkspaceDisplayName(workspace: any, state: any): string {
  if ('org_id' in workspace) {
    const org = state.orgById[workspace.org_id]
    return org
      ? getI18nString('community.publishing.org_name', { org: org.name })
      : getI18nString('general.fallback_org_name')
  }

  if ('team_id' in workspace) {
    const team = state.teams[workspace.team_id]
    return team
      ? getI18nString('community.publishing.team_name', { team: team.name })
      : getI18nString('general.fallback_team_name')
  }

  const user = state.authedUsers.byId[workspace.user_id] ?? state.user
  const profile = findPublishedProfileForUser(user, state.authedProfilesById)

  return profile
    ? profile.name
    : user?.name || getI18nString('general.fallback_user_name')
}

/**
 * Gets workspace handle
 * @param workspace - Workspace object
 * @param state - Application state
 * @returns Handle or null
 */
export function getWorkspaceHandle(workspace: any, state: any): string | null {
  if ('org_id' in workspace) {
    const org = state.orgById[workspace.org_id]
    return org?.community_profile_handle || null
  }

  if ('team_id' in workspace) {
    const team = state.teams[workspace.team_id]
    return team?.community_profile_handle || null
  }

  const user = state.authedUsers.byId[workspace.user_id] ?? state.user
  const profile = findPublishedProfileForUser(user, state.authedProfilesById)

  return profile
    ? profile.profile_handle
    : user?.handle || null
}

// Supported image types
const SUPPORTED_IMAGE_TYPES = [IMAGE_TYPES.PNG, IMAGE_TYPES.JPEG]

/**
 * Validates an image file
 * @param file - File to validate
 * @param filename - Filename for error messages
 * @returns File size
 */
export function validateImage(file: File, filename: string = 'Image'): number {
  if (!file) {
    throw new Error(getI18nString('community.publishing.error_thumbnail_image_not_found', {
      filename,
    }))
  }

  const fileType = getValueOrFallback(file.type, IMAGE_TYPES)
  if (!fileType || !SUPPORTED_IMAGE_TYPES.includes(fileType)) {
    throw new Error(getI18nString('community.publishing.error_thumbnail_image_wrong_format', {
      filename,
    }))
  }

  if (file.size > MAX_COVER_IMAGE_SIZE) {
    throw new Error(getI18nString('community.publishing.error_thumbnail_image_too_large', {
      filename,
      max_size: Math.floor(MAX_COVER_IMAGE_SIZE / 1e6),
    }))
  }

  return file.size
}

/**
 * Loads an image from URL
 * @param url - Image URL
 * @returns Promise resolving to HTMLImageElement
 */
export function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = url
  })
}

// Track loaded object URLs for cleanup
const loadedObjectUrls = new Set<string>()

/**
 * Processes thumbnail image
 * @param event - File input event
 * @param previousUrl - Previous URL to clean up
 * @returns Processed image data
 */
export async function processThumbnailImage(event: any, previousUrl: string): Promise<any> {
  if (event.files === null || !event.files[0]) {
    throw new Error(getI18nString('community.publishing.error_thumbnail_image_not_found_no_filename'))
  }

  if (previousUrl) {
    cleanupObjectUrl(previousUrl)
  }

  const file = event.files[0]
  validateImage(file, getI18nString('community.publishing.thumbnail_image'))

  const [image, imageData] = await Promise.all([
    loadImage(URL.createObjectURL(file)),
    readImageBytes(file),
  ])

  loadedObjectUrls.add(image.src)

  return {
    url: image.src,
    buffer: new Uint8Array(imageData),
  }
}

/**
 * Processes carousel media files
 * @param files - Media files to process
 * @param allowVideos - Whether to allow video files
 * @param maxFiles - Maximum number of files to process
 * @returns Processed media data
 */
export async function processCarouselMedia(
  files: FileList,
  allowVideos: boolean,
  maxFiles: number = 10,
): Promise<any[]> {
  const result: any[] = []

  for (const file of Array.from(files).slice(0, maxFiles)) {
    if (allowVideos && file.type.startsWith('video/')) {
      // Validate video
      if (!file) {
        throw new Error(getI18nString('community.publishing.error_thumbnail_image_not_found', {
          filename: file.name,
        }))
      }

      if (!VIDEO_TYPE_VALUES.includes(file.type)) {
        throw new Error(getI18nString('community.publishing.error_video_wrong_format', {
          filename: file.name,
        }))
      }

      if (file.size > MAX_PLUGIN_SIZE) {
        throw new Error(getI18nString('community.publishing.error_thumbnail_image_too_large', {
          filename: file.name,
          max_size: Math.floor(MAX_PLUGIN_SIZE / 1e6),
        }))
      }

      const videoUrl = URL.createObjectURL(file)
      const [videoData, thumbnailData, _] = await Promise.all([
        readVideoData(file),
        generateVideoThumbnail(videoUrl),
        validateVideoLength(videoUrl, file.name),
      ])

      const thumbnailUrl = URL.createObjectURL(new Blob([thumbnailData]))
      loadedObjectUrls.add(videoUrl)
      loadedObjectUrls.add(thumbnailUrl)

      result.push({
        url: videoUrl,
        buffer: videoData.bytes,
        sha1: videoData.sha1,
        type: 'video',
        thumbnail_url: thumbnailUrl,
        thumbnail_buffer: thumbnailData,
        thumbnail_sha1: sha1Hex(thumbnailData),
      })
    }
    else {
      // Process as image
      validateImage(file, getI18nString('community.publishing.carousel_media_image'))

      const [image, imageData] = await Promise.all([
        loadImage(URL.createObjectURL(file)),
        readImageBytes(file),
      ])

      loadedObjectUrls.add(image.src)
      const buffer = new Uint8Array(imageData)

      result.push({
        url: image.src,
        buffer,
        sha1: sha1Hex(buffer),
        type: 'image',
      })
    }
  }

  return result
}

/**
 * Processes carousel files from event
 * @param event - File input event
 * @param allowVideos - Whether to allow video files
 * @returns Promise resolving to processed media
 */
export async function processCarouselFiles(event: any, allowVideos: boolean): Promise<any[]> {
  return event.files === null || event.files.length === 0
    ? Promise.resolve([])
    : await processCarouselMedia(event.files, allowVideos)
}

/**
 * Validates carousel images
 * @param images - Images to validate
 * @returns Error message or undefined
 */
export function validateCarouselImages(images: any[]): string | undefined {
  if (!images || !images.length) {
    return getI18nString('community.publishing.upload_at_least_one_image')
  }

  return undefined
}

/**
 * Validates video length
 * @param url - Video URL
 * @param filename - Filename for error messages
 */
async function validateVideoLength(url: string, filename: string): Promise<void> {
  const duration = await new Promise<number>((resolve, reject) => {
    const video = document.createElement('video')
    video.preload = 'metadata'

    video.addEventListener('error', (e) => {
      reject((e as any).message)
    })

    video.addEventListener('loadedmetadata', () => {
      resolve(video.duration)
    })

    video.src = url
    video.currentTime = 0
    video.load()

    setTimeout(() => {
      reject('Video load timeout during video length validation')
    }, 10000)
  })

  if (duration > 30) {
    throw new Error(getI18nString('community.publishing.error_video_too_long', {
      filename,
      max_length: 30,
    }))
  }
}

/**
 * Prepares media upload data
 * @param media - Media array
 * @returns Upload data structure
 */
export function prepareMediaUploadData(media: any[]): any {
  const uploadImages: any[] = []
  const uploadVideos: any[] = []
  const allMedia: any[] = []

  media?.forEach((item, index) => {
    if ('buffer' in item) {
      if (item.type === 'video') {
        if (!item.thumbnail_buffer) {
          throw new Error(getI18nString('community.publishing.error_video_thumbnail_not_found'))
        }

        const videoData = {
          carousel_position: index,
          sha1: sha1Hex(item.buffer),
          bytes: item.buffer,
          video_thumbnail_buffer: item.thumbnail_buffer,
          video_thumbnail_sha1: sha1Hex(item.thumbnail_buffer),
        }

        uploadVideos.push(videoData)
      }
      else {
        const imageData = {
          carousel_position: index,
          sha1: sha1Hex(item.buffer),
        }

        uploadImages.push(imageData)
        allMedia.push(imageData)
      }
    }
    else if ('id' in item) {
      const existingData = item.type === 'video'
        ? {
            carousel_position: index,
            sha1: item.sha1,
            video_file_uuid: item.video_file_uuid,
            video_thumbnail_sha1: item.thumbnail_sha1,
          }
        : {
            carousel_position: index,
            sha1: item.sha1,
          }

      allMedia.push(existingData)
    }
  })

  return {
    uploadImages,
    uploadVideos,
    allMedia,
  }
}

/**
 * Uploads carousel images
 * @param uploadUrls - Upload URL data
 * @param media - Media to upload
 * @returns Array of upload promises
 */
export function uploadCarouselImages(uploadUrls: any[], media: any[]): Promise<any>[] {
  if (!media?.length || !uploadUrls?.length) {
    return []
  }

  return uploadUrls.map(async ({
    url,
    fields,
    carouselPosition,
    signedCloudfrontUrl,
  }) => {
    const mediaItem = media[carouselPosition]

    if (!mediaItem || !('buffer' in mediaItem) || !mediaItem.buffer) {
      return false
    }

    const formData = new FormData()
    Object.entries(fields).forEach(([key, value]) => formData.append(key, value as any))
    formData.set('content-type', detectMimeType(mediaItem.buffer) ?? 'image/png')

    const blob = new Blob([mediaItem.buffer])

    try {
      if (signedCloudfrontUrl && getFeatureFlags().ext_s3_url_use_figma_domains) {
        const imageData = await readImageBytes(blob)
        await sendWithRetry.crossOriginPut(signedCloudfrontUrl, imageData, {
          raw: true,
          headers: {
            'Content-Type': blob.type,
            'x-amz-acl': 'bucket-owner-full-control',
          },
        })
      }
      else {
        const formData = new FormData()
        Object.entries(fields).forEach(([key, value]) => formData.append(key, value as any))
        formData.set('content-type', detectMimeType(mediaItem.buffer) ?? 'image/png')
        formData.append('file', blob)
        await uploadRequest(url, formData)
      }
    }
    catch (error: any) {
      reportError(ServiceCategories.COMMUNITY, error)
      return new Error(getI18nString('community.actions.error_uploading_carousel_image_error', {
        error: resolveMessage(error, error.data?.message || 'unknown error'),
      }))
    }

    return true
  })
}

/**
 * Creates form data for file upload
 * @param fields - Form fields
 * @param buffer - File buffer
 * @returns FormData object
 */
function createFormData(fields: any, buffer: Uint8Array): FormData {
  const formData = new FormData()
  Object.entries(fields).forEach(([key, value]) => formData.append(key, value as any))
  formData.set('content-type', detectMimeType(buffer) ?? 'image/png')
  formData.append('file', new Blob([buffer]))
  return formData
}

/**
 * Uploads Hub file images
 * @param coverImageBuffer - Cover image buffer
 * @param carouselMedia - Carousel media
 * @param fileVersionId - File version ID
 * @param hubFileId - Hub file ID
 * @returns Upload result
 */
export async function uploadHubFileImages(
  coverImageBuffer: Uint8Array | null,
  carouselMedia: any[],
  fileVersionId: string,
  hubFileId?: string,
): Promise<any> {
  let uploadData: any
  const { uploadImages, allMedia } = prepareMediaUploadData(carouselMedia)

  if (!coverImageBuffer?.length && !uploadImages?.length) {
    return {
      cover_image: {
        cover_image_uploaded: false,
        signature: null,
      },
      carousel_images: allMedia,
    }
  }

  try {
    uploadData = (await hubFileAPI.setupMultiImageUploadForHubFile({
      file_version_id: fileVersionId,
      hub_file_id: hubFileId,
      images_sha1: uploadImages,
    })).data.meta
  }
  catch (error: any) {
    reportError(ServiceCategories.COMMUNITY, error)
    return new Error(resolveMessage(error, getI18nString('community.actions.could_not_connect_to_the_server')))
  }

  const uploadTasks: any[] = []

  for (const carouselImage of uploadData.carousel_images) {
    const mediaItem = carouselMedia[carouselImage.carousel_position]
    if (mediaItem && 'buffer' in mediaItem && mediaItem.buffer) {
      uploadTasks.push({
        url: carouselImage.url,
        formData: createFormData(carouselImage.fields, mediaItem.buffer),
      })
    }
  }

  if (coverImageBuffer?.length) {
    uploadTasks.push({
      url: uploadData.cover_image.cover_image_upload_url,
      formData: createFormData(uploadData.cover_image.fields, coverImageBuffer),
    })
  }

  try {
    await uploadMultiple(uploadTasks)
    return {
      cover_image: {
        cover_image_uploaded: !!coverImageBuffer?.length,
        signature: uploadData.cover_image.signature,
      },
      carousel_images: allMedia,
    }
  }
  catch (error: any) {
    reportError(ServiceCategories.COMMUNITY, error)
    return new Error(resolveMessage(error, getI18nString('community.actions.error_connecting_to_server_to_upload_file_images')))
  }
}

/**
 * Finds media index by SHA1 hash
 * @param mediaArray - Media array
 * @param mediaItem - Media item to find
 * @returns Index of media item or -1
 */
export function findMediaIndexBySha1(mediaArray: any[], mediaItem: any): number {
  return mediaItem
    ? mediaArray.findIndex(item => item.sha1 === mediaItem.sha1)
    : -1
}

/**
 * Cleans up object URL
 * @param url - URL to clean up
 */
function cleanupObjectUrl(url: string): void {
  if (loadedObjectUrls.has(url)) {
    URL.revokeObjectURL(url)
    loadedObjectUrls.delete(url)
  }
}

/**
 * Cleans up media object URLs
 * @param media - Media object
 */
export function cleanupMediaObjectUrls(media: any): void {
  if (media) {
    if (media.url) {
      cleanupObjectUrl(media.url)
    }

    if ('type' in media && media.type === 'video' && media.thumbnail_url) {
      cleanupObjectUrl(media.thumbnail_url)
    }
  }
}

/**
 * Reads video data
 * @param file - Video file
 * @returns Video data with SHA1 hash
 */
async function readVideoData(file: File): Promise<any> {
  const bytes = new Uint8Array(await readImageBytes(file))
  return {
    sha1: sha1Hex(bytes),
    bytes,
  }
}

/**
 * Checks if user needs to accept community TOS
 * @param state - Application state
 * @returns True if TOS acceptance needed
 */
export function needsToAcceptCommunityTOS(state: any): boolean {
  if (!state.currentUserOrgId)
    return false

  const orgUser = getCurrentUserOrgUser(state)
  return !(orgUser && orgUser.agreed_to_community_tos_at)
}

/**
 * Counts enabled features
 * @param enabledFeatures - Array of enabled features
 * @param featureFlags - Feature flags object
 * @returns Count of enabled features
 */
export function countEnabledFeatures(enabledFeatures: string[], featureFlags: any): number {
  return Object.entries(featureFlags).reduce(
    (count, [feature, isEnabled]) =>
      count + Number(enabledFeatures.includes(feature) && !!isEnabled),
    0,
  )
}

/**
 * Checks if object is a presigned URL object
 * @param obj - Object to check
 * @returns True if presigned URL object
 */
function isPresignedUrlObject(obj: any): boolean {
  return typeof obj === 'object' && 'fields' in obj && 'imagePath' in obj
}

/**
 * Uploads image with presigned URL
 * @param presignedUrl - Presigned URL data
 * @param file - File to upload
 * @param buffer - File buffer
 * @returns Upload promise
 */
export function uploadImageWithPresignedUrl(
  presignedUrl: any,
  file: File,
  buffer: ArrayBuffer,
): Promise<any> {
  if (isPresignedUrlObject(presignedUrl)) {
    const { fields, imagePath, signedCloudfrontUrl } = presignedUrl

    if (signedCloudfrontUrl && getFeatureFlags().ext_s3_url_use_figma_domains) {
      return sendWithRetry.crossOriginPut(signedCloudfrontUrl, buffer, {
        raw: true,
        headers: {
          'Content-Type': file.type,
          'x-amz-acl': 'bucket-owner-full-control',
        },
      })
    }

    const formData = new FormData()
    Object.entries(fields).forEach(([key, value]) => formData.append(key, value as any))
    formData.set('Content-Type', file.type)
    formData.append('file', file)

    return sendWithRetry.crossOriginPost(imagePath, formData, {
      raw: true,
      headers: {
        'Content-Type': file.type,
      },
    })
  }

  if (typeof presignedUrl === 'string') {
    return sendWithRetry.crossOriginPut(presignedUrl, buffer, {
      raw: true,
      headers: {
        ...sendWithRetry.defaults.headers,
        'Content-Type': file.type,
      },
    })
  }

  return Promise.reject(new Error('Invalid presigned_url'))
}

/**
 * Uploads blob with presigned URL
 * @param presignedUrl - Presigned URL data
 * @param buffer - Blob buffer
 * @returns Upload promise
 */
export function uploadBlobWithPresignedUrl(presignedUrl: any, buffer: Uint8Array): Promise<any> {
  const mimeType = detectMimeType(buffer) ?? 'image/png'

  if (isPresignedUrlObject(presignedUrl)) {
    const { fields, imagePath, signedCloudfrontUrl } = presignedUrl

    if (signedCloudfrontUrl && getFeatureFlags().ext_s3_url_use_figma_domains) {
      return sendWithRetry.crossOriginPut(signedCloudfrontUrl, buffer, {
        raw: true,
        headers: {
          'Content-Type': mimeType,
          'x-amz-acl': 'bucket-owner-full-control',
        },
      })
    }

    const formData = new FormData()
    Object.entries(fields).forEach(([key, value]) => formData.append(key, value as any))
    formData.set('Content-Type', mimeType)
    formData.append('file', new Blob([buffer]))

    return sendWithRetry.crossOriginPost(imagePath, formData, {
      raw: true,
      headers: {
        'Content-Type': mimeType,
      },
    })
  }

  if (typeof presignedUrl === 'string') {
    return sendWithRetry.crossOriginPut(presignedUrl, buffer, {
      raw: true,
      headers: {
        ...sendWithRetry.defaults.headers,
        'Content-Type': mimeType,
      },
    })
  }

  return Promise.reject(new Error('Invalid presigned_url'))
}

/**
 * Uploads video with thumbnail
 * @param resourceType - Resource type
 * @param resourceId - Resource ID
 * @param videoData - Video data
 * @param thumbnailBuffer - Thumbnail buffer
 * @param thumbnailSha1 - Thumbnail SHA1
 * @returns Upload result
 */
export async function uploadVideoWithThumbnail(
  resourceType: string,
  resourceId: string,
  videoData: any,
  thumbnailBuffer: ArrayBuffer,
  thumbnailSha1: string,
): Promise<any> {
  const { video, videoThumbnail } = await VideoUploadService.getVideoUploadUrl({
    resourceType,
    id: resourceId,
    sha1: videoData.sha1,
    thumbnail_sha1: thumbnailSha1,
  })

  let videoUploadPromise: Promise<any> | null = null

  if (video) {
    const { url, fields, signedCloudfrontUrl } = video

    if (signedCloudfrontUrl
      && getFeatureFlags().ext_s3_url_use_figma_domains
      && getFeatureFlags().ext_s3_url_videos_use_figma_domains) {
      const checksum = encodeBase64(sha1BytesFromHex(videoData.sha1))
      videoUploadPromise = sendWithRetry.crossOriginPut(signedCloudfrontUrl, videoData.bytes, {
        raw: true,
        headers: {
          'Content-Type': 'video/mp4',
          'x-amz-acl': 'bucket-owner-full-control',
          'x-amz-checksum-sha1': checksum,
        },
      }).then(() => fields.key || '')
    }
    else {
      videoUploadPromise = uploadVideoToPresignedPost(url, fields, videoData, 'video/mp4')
    }
  }

  const thumbnailBlob = new Blob([thumbnailBuffer], { type: 'image/png' })

  const thumbnailUploadPromise = uploadImageWithPresignedUrl(
    {
      imagePath: videoThumbnail.url,
      fields: videoThumbnail.fields,
      signedCloudfrontUrl: videoThumbnail.signedCloudfrontUrl,
    },
    thumbnailBlob as any,
    thumbnailBuffer,
  ).catch((error: any) => {
    throw new Error(getI18nString('community.actions.error_uploading_plugin_video_thumbnail_error', {
      error: resolveMessage(error, error.data?.message || 'unknown error'),
    }))
  })

  const [uploadPath] = await Promise.all([videoUploadPromise, thumbnailUploadPromise])

  return await commitVideoUpload(
    videoData.sha1,
    resourceId,
    resourceType,
    uploadPath ?? '',
    thumbnailSha1,
    video?.blobUploadCommitKey || '',
  )
}

/**
 * Commits video upload
 * @param sha1 - Video SHA1
 * @param resourceId - Resource ID
 * @param resourceType - Resource type
 * @param uploadPath - Upload path
 * @param thumbnailSha1 - Thumbnail SHA1
 * @param blobUploadCommitKey - Commit key
 * @returns Commit result
 */
async function commitVideoUpload(
  sha1: string,
  resourceId: string,
  resourceType: string,
  uploadPath: string,
  thumbnailSha1: string,
  blobUploadCommitKey: string,
): Promise<any> {
  const params = new URLSearchParams()
  params.append('sha1', sha1)
  params.append('uploadPath', uploadPath)
  params.append('resourceId', resourceId)
  params.append('resourceType', resourceType)
  params.append('blobUploadCommitKey', blobUploadCommitKey)

  return {
    videoFileUuid: (await sendWithRetry.post(`/api/upnode/video?${params.toString()}`)).data.meta.video_file_uuid,
    sha1,
    videoThumbnailSha1: thumbnailSha1,
  }
}
export const $W = countEnabledFeatures
export const $x = processThumbnailImage
export const Ac = uploadImageWithPresignedUrl
export const CW = SUPPORTED_IMAGE_TYPES
export const Cw = PublisherStatus
export const Dd = isCreator
export const En = getDefaultPluginAuthor
export const Gf = uploadVideoWithThumbnail
export const Gl = DISPLAY_ONLY_STATUSES
export const Gp = processCarouselMedia
export const Ii = isWorkspaceMatch
export const Kg = prepareMediaUploadData
export const M0 = uploadBlobWithPresignedUrl
export const MK = getPublisherStatus
export const MO = isOrgWorkspace
export const N8 = processCarouselFiles
export const PR = isUserAcceptedAsAuthor
export const Q4 = isPublicRole
export const R1 = uploadHubFileImages
export const RB = useIsPublisher
export const Rd = uploadCarouselImages
export const Rv = getValidAuthorsForHubFile
export const T$ = getPublisherWorkspaceInfo
export const Tn = extractWorkspaceId
export const UU = getValidAuthorsForPlugin
export const Wd = isCreatorAcceptedPublisher
export const Wl = validateImage
export const Z2 = findMediaIndexBySha1
export const Z7 = isTeamWorkspace
export const cN = isAdminStatus
export const f7 = isSameWorkspace
export const gO = getDefaultHubFileAuthor
export const j4 = getDebugWorkspaceInfo
export const jr = isUserWorkspace
export const kJ = getPrimaryUserIdStatus
export const kN = getWorkspaceName
export const l8 = loadImage
export const mH = getWorkspaceHandle
export const mN = getEditors
export const nK = cleanupMediaObjectUrls
export const o1 = getWorkspaceDisplayName
export const oB = determinePublisherType
export const of = getPublisherWorkspace
export const ot = PENDING_STATUSES
export const vC = validateCarouselImages
export const xw = needsToAcceptCommunityTOS
