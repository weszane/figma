import { useSelector } from 'react-redux'
import { getAssociatedUserProfiles } from '../905/11536'
import { getI18nString, getTranslatedDynamicContent } from '../905/303541'
import { selectCurrentUser } from '../905/372672'
import { deepEqual } from '../905/382883'
import { trackEventAnalytics } from '../905/449184'
import { FDocumentType } from '../905/862883'
import { UploadStatusEnum } from '../figma_app/10554'
import { isOrgOrTeam } from '../figma_app/11961'
import { OrgUserRoleEnum } from '../figma_app/35887'
import { HubTypeEnum, ResourceTypeNoComment, ResourceTypeNoComment2 } from '../figma_app/45218'
import { FEditorType } from '../figma_app/53721'
import { DropdownEnableState } from '../figma_app/188152'
import { FPublicationStatusType, FTemplateCategoryType } from '../figma_app/191312'
import { AdminMenuEvent } from '../figma_app/350203'
import { canAdminOrg, hasAdminRoleAccessOnTeam, hasAdminRoleAccessOnTeam__DEPRECATED, hasOrgAccess } from '../figma_app/642025'
import { memoizeByArgs } from '../figma_app/815945'

/**
 * Utility to merge versions from two objects.
 * Original: $$b29
 */
export function mergeVersions(obj1: any, obj2: any) {
  return {
    ...(obj1?.versions || {}),
    ...(obj2?.versions || {}),
  }
}

/**
 * Returns value from object or fallback.
 * Original: $$T11
 */
export function getValueOrDefault(key: string, obj: any, fallback: any) {
  return obj?.[key] ?? fallback
}

/**
 * Trims string or returns empty string.
 * Original: $$I26
 */
export const trimOrEmpty = (str?: string) => str?.trim() ?? ''

/**
 * Returns status or default upload status.
 * Original: $$S44
 */
export function getStatusOrDefault(obj: any) {
  return obj?.status ?? { code: UploadStatusEnum.EDIT }
}

/**
 * Validates profile handle.
 * Original: $$v54
 */
export function validateProfileHandle(handle: string, _unused?: any) {
  const prefix = getI18nString('community.profiles.your_handle_text')
  if (!handle || handle.length === 0)
    return getI18nString('community.publishing.profile_handle_cannot_be_empty', { errorStringPrefix: prefix })
  if (handle.length > 15)
    return getI18nString('community.profiles.profile_max_15_characters_in_length', { errorStringPrefix: prefix })
  if (/^\w{1,15}$/.test(handle))
    return null
  return getI18nString('community.profiles.profile_cannot_contain_special_characters', { errorStringPrefix: prefix })
}

/**
 * Checks if profile is authed active.
 * Original: $$A4
 */
export function isAuthedActiveProfile(profile: any, state: any) {
  return state?.authedActiveCommunityProfile?.id === profile.id
}

/**
 * Checks if user is associated with profile.
 * Original: $$x45
 */
export function isUserAssociatedWithProfile(profileId: string, state: any) {
  if (!('user' in state))
    return false
  const profile = state.authedProfilesById[profileId]
  if (profile?.primary_user_id)
    return !!state.user && !!profile.associated_users?.find(u => u.user_id === state.user.id)
  if (profile?.team_id) {
    return !!(state.user && state.teamAdminRolesForAuthedUsers[state.user.id].some(t => t.team_id === profile.team_id))
      || hasAdminRoleAccessOnTeam(profile.team_id, state)
  }
  return !!profile?.org_id && canAdminOrg(profile.org_id, state)
}

/**
 * Memoized org admin info getter.
 * Original: N
 */
const getOrgAdminInfo = memoizeByArgs((orgId, orgById, user, orgUsersByOrgId) => {
  if (orgId && orgById[orgId]) {
    const org = orgById[orgId]
    return {
      isAdmin: canAdminOrg(orgId, {
        currentUserOrgId: orgId,
        user,
        orgById,
        orgUsersByOrgId,
        fileByKey: {},
      } as any),
      id: org.id,
      name: org.name,
    }
  }
  return null
})

/**
 * Gets current org admin info from state.
 * Original: $$C5
 */
export function getCurrentOrgAdminInfo(state: any) {
  return getOrgAdminInfo(state.currentUserOrgId, state.orgById, state.user, state.orgUsersByOrgId)
}

/**
 * Gets current org admin info using selectors.
 * Original: $$w61
 */
export function useCurrentOrgAdminInfo() {
  const orgId = useSelector<ObjectOf<string>>(s => s.currentUserOrgId)
  const orgById = useSelector<ObjectOf>(s => 'orgById' in s ? s.orgById : {})
  const user = useSelector<ObjectOf>(s => s.user)
  const orgUsersByOrgId = useSelector<ObjectOf>(s => 'orgUsersByOrgId' in s ? s.orgUsersByOrgId : {})
  return getOrgAdminInfo(orgId, orgById, user, orgUsersByOrgId)
}

/**
 * Memoized plugin version getter.
 * Original: $$O37
 */
export const getPluginVersions = memoizeByArgs((editorType, state, localPlugins) => {
  let docType
  switch (editorType) {
    case FEditorType.Design: docType = FDocumentType.Design; break
    case FEditorType.DevHandoff: docType = FDocumentType.Handoff; break
    case FEditorType.Slides: docType = FDocumentType.Slides; break
    case FEditorType.Cooper: docType = FDocumentType.Cooper; break
    default: docType = FDocumentType.FigJam
  }
  const versions: any[] = []
  for (const plugin of state.plugins[docType]) {
    const fetched = state.plugins.fetchedResources[plugin.id]
    if (fetched?.version) {
      versions.push(fetched.version)
      continue
    }
    const local = localPlugins[plugin.id]
    if (local)
      versions.push(local)
  }
  return versions
})

/**
 * Gets plugin versions for selected view.
 * Original: $$R0
 */
export function getSelectedViewPluginVersions(state: any) {
  return getPluginVersions(state.selectedView.editorType, state.recentlyUsed, state.localPlugins)
}

/**
 * Validates cover image.
 * Original: $$L25
 */
export function validateCoverImage(file: File) {
  if (!file)
    throw new Error(getI18nString('community.publishing.cover_image_not_found'))
  if (!['image/jpeg', 'image/png'].includes(file.type))
    throw new Error(getI18nString('community.publishing.cover_image_requirements'))
  if (file.size > MAX_COVER_IMAGE_SIZE) {
    throw new Error(getI18nString('community.publishing.cover_image_exceeds_max_size', {
      maxResourceSize: Math.floor(MAX_COVER_IMAGE_SIZE / 1e6),
    }))
  }
  return file.size
}
const MAX_COVER_IMAGE_SIZE = 5242880 // $$B22

/**
 * Gets tags for resource.
 * Original: $$P23
 */
export function getResourceTags(resources: any[], id: string) {
  return resources.find(r => r.id === id)?.tags ?? []
}

/**
 * Gets translated dynamic content.
 * Original: $$$$D52
 */
export function getDynamicContentTranslation(obj: any) {
  return getTranslatedDynamicContent(obj.i18n_meta?.text, obj.text)
}

/**
 * Normalizes string for search.
 * Original: $$k1
 */
export function normalizeSearchString(str: string) {
  return str.replace(/[\s_-]+/g, ' ').trim().toLocaleLowerCase()
}

/**
 * Validates tag string.
 * Original: $$M58
 */
export function validateTagString(tag: string) {
  if (!tag.match(/^[\P{Script_Extensions=Common} _\-0-9]*$/gu))
    return getI18nString('community.publishing.tags_can_only_contain_certain_characters')
  if (!tag.match(/^[\P{Script_Extensions=Common}0-9](.*[\P{Script_Extensions=Common}0-9])?$/gu))
    return getI18nString('community.publishing.tags_must_begin_and_end_with_a_letter_or_number')
  if (tag.toLocaleLowerCase() !== tag)
    return getI18nString('community.publishing.tags_can_only_contain_lowercase_characters')
  if (tag.length > 25)
    return getI18nString('community.publishing.tags_can_only_have_up_to_25_characters')
  if (tag.match(/[ _-]{2,}/))
    return getI18nString('community.publishing.tags_cannot_have_consecutive_dashes_underscores_or_spaces')
  if ((tag.match(/[ _-]/g) || []).length > 2)
    return getI18nString('community.publishing.tags_cannot_be_longer_than_3_words')
  return null
}

/**
 * Validates tagline length.
 * Original: $$F16
 */
export function validateTaglineLength(tagline: string) {
  return tagline.length > MAX_TAGLINE_LENGTH
    ? getI18nString('community.publishing.tagline_must_be_at_most_100_characters_long')
    : null
}
const MAX_TAGLINE_LENGTH = 100 // $$Z9

/**
 * Default template object.
 * Original: $$j30
 */
export const defaultTemplate = {
  name: '',
  description: '',
  tags: [],
  categoryId: null,
  creatorPolicy: '',
  viewerMode: FTemplateCategoryType.CANVAS,
  scalingMode: null,
  author: { user_id: '' },
  commentsSetting: DropdownEnableState.ENABLED,
  publishers: { inputValue: '', tokens: [], errorMessage: '' },
  blockPublishingOnToS: false,
}

/**
 * Keyboard keys for publisher input.
 * Original: $$U8
 */
export const PUBLISHER_INPUT_KEYS = ['Tab', 'Enter', ',']

/**
 * Various constants.
 * Original: $$G57, $$V7, $$H46, $$z38, $$W56, $$K17, $$Y28, $$$40, $$X36, $$q24, $$J3
 */
export const MAX_RESOURCE_SIZE = 0xF00000
export const MAX_PLUGIN_SIZE = 0x6400000
export const MAX_IMAGE_DIMENSION = 100
export const MAX_IMAGE_WIDTH = 240
export const MAX_IMAGE_HEIGHT = 240
export const MAX_DESCRIPTION_LENGTH = 4096
export const MAX_TAGS_PER_RESOURCE = 1024
export const MAX_PUBLISHERS_PER_RESOURCE = 10
export const MAX_FEED_ITEMS = 5
export const MAX_PROFILE_HANDLE_LENGTH = 15
export const MAX_TAGLINE_LENGTH_CONST = 100
export const MAX_TAGS_LENGTH = 5
export const MAX_TAGS_WORDS = 3
export const MAX_TAGS_CHARACTERS = 25
export const MAX_TAGS_CONSECUTIVE = 2
export const MAX_TAGS_TOTAL = 10
export const MAX_TAGS_PER_FEED = 60

/**
 * Gets resource type.
 * Original: Q
 */
function getResourceType(obj: any) {
  if ('is_widget' in obj && obj.is_widget)
    return ResourceTypeNoComment.WIDGET
  if ('current_plugin_version_id' in obj)
    return ResourceTypeNoComment.PLUGIN
  return ResourceTypeNoComment.HUB_FILE
}

/**
 * Gets resource type (v2).
 * Original: $$ee55
 */
export function getResourceTypeV2(obj: any) {
  const type = getResourceType(obj)
  if (type === ResourceTypeNoComment.HUB_FILE)
    return ResourceTypeNoComment2.HUB_FILE
  if (type === ResourceTypeNoComment.WIDGET)
    return ResourceTypeNoComment2.WIDGET
  return ResourceTypeNoComment2.PLUGIN
}

/**
 * Validates publisher count.
 * Original: $$et12
 */
export function validatePublisherCount(count: number) {
  return count >= MAX_PUBLISHERS_PER_RESOURCE - 1
    ? getI18nString('community.publishing.cannot_have_more_than_max_publishers', {
        MAX_PUBLISHERS_PER_RESOURCE,
      })
    : null
}

/**
 * Maps comments and authors by id.
 * Original: $$er10
 */
export function mapCommentsAndAuthors(comments: any[]) {
  const commentsById: Record<string, any> = {}
  const authorsById: Record<string, any> = {}
  const feed: string[] = comments.map((comment) => {
    commentsById[comment.id] = comment
    authorsById[comment.author.id] = comment.author
    return comment.id
  })
  return { commentsById, authorsById, feed }
}

/**
 * Checks if resource is public and comments enabled.
 * Original: $$en35
 */
export function isResourcePublicWithComments(resource: any) {
  return resource.publishing_status === FPublicationStatusType.APPROVED_PUBLIC
    && resource.comments_setting !== DropdownEnableState.ALL_DISABLED
}

/**
 * Checks if commenting is enabled.
 * Original: $$ei15
 */
export function isCommentingEnabled(resource: any, profile: any) {
  return !!(profile.comments_setting !== DropdownEnableState.ALL_DISABLED
    && !profile.commenting_is_restricted
    && !resource?.community_commenting_blocked_at)
}

/**
 * Checks if profile is published.
 * Original: $$ea31
 */
export function isProfilePublished(profile: any) {
  return !!(profile && profile.primary_user_id && profile.public_at)
}

/**
 * Export isOrgOrTeam directly.
 * Original: $$es33
 */
export const isOrgOrTeamExport = isOrgOrTeam

/**
 * Selector for authed active community profile.
 * Original: $$eo41
 */
export function useAuthedActiveCommunityProfile() {
  return useSelector<ObjectOf>(s => s.authedActiveCommunityProfile)
}

/**
 * Gets active profile user or org.
 * Original: $$el50
 */
export function getActiveProfileUserOrOrg() {
  const profile: ObjectOf = useSelector<ObjectOf>(s => s.authedActiveCommunityProfile)
  const profilesById = useSelector<ObjectOf>(s => s.authedProfilesById)
  const usersById = useSelector<ObjectOf>(s => s.authedUsers.byId)
  const orgById = useSelector<ObjectOf>(s => 'orgById' in s ? s.orgById : {})
  if (!profile)
    return null
  if (!profile.public_at) {
    if (profile.primary_user_id)
      return usersById[profile.primary_user_id]
    if (profile.org_id)
      return orgById[profile.org_id]
  }
  return profilesById[profile.id]
}

/**
 * Checks if user has access to profile.
 * Original: $$ed51
 */
export function hasUserAccessToProfile(profile: any) {
  const currentUser: ObjectOf = selectCurrentUser()
  const teamAccess = useSelector(s => getTeamAdminAccess(s), deepEqual)
  const orgAccess = useSelector(s => getOrgAdminAccess(s))
  const profilesById = useSelector<ObjectOf>(s => 'authedProfilesById' in s ? s.authedProfilesById : {})
  if (!profile)
    return false
  const profileObj = profilesById[profile.id]
  return !!profileObj
    && (currentUser?.community_profile_id === profileObj.id
      || (!!profileObj.team_id && !!teamAccess[profileObj.team_id])
      || !!(profileObj.org_id && orgAccess[profileObj.org_id]))
}

/**
 * Gets orgs user can admin.
 * Original: $$ec20
 */
export function getOrgAdminAccess(state: any) {
  if (!('orgById' in state))
    return {}
  const orgById = state.orgById
  const result: Record<string, any> = {}
  Object.keys(orgById).forEach((orgId) => {
    if (canAdminOrg(orgId, state))
      result[orgId] = orgById[orgId]
  })
  return result
}

/**
 * Gets teams user can admin.
 * Original: $$eu39
 */
export function getTeamAdminAccess(state: any) {
  if (!('user' in state) || !state.user)
    return {}
  const roles = state.teamAdminRolesForAuthedUsers[state.user.id]
  if (!roles)
    return {}
  const result: Record<string, any> = {}
  roles.forEach((role) => {
    if (state.authedTeamsById[role.team_id])
      result[role.team_id] = state.authedTeamsById[role.team_id]
  })
  return result
}

/**
 * Finds profile by id, org, team, or associated user.
 * Original: $$ep19
 */
export function findProfile({
  authedProfilesById,
  profileId,
  userId,
  orgId,
  teamId,
}: {
  authedProfilesById: ObjectOf
  profileId?: string
  userId?: string
  orgId?: string
  teamId?: string
}) {
  if (profileId)
    return authedProfilesById[profileId]
  if (orgId)
    return Object.values(authedProfilesById).find(p => p.org_id === orgId) || null
  if (teamId)
    return Object.values(authedProfilesById).find(p => p.team_id === teamId) || null
  if (userId)
    return Object.values(authedProfilesById).find(p => p.associated_users?.find(u => u.user_id === userId)) || null
  return null
}

/**
 * Finds published profile for user.
 * Original: $$e_49
 */
export function findPublishedProfileForUser(user: any, profilesById: ObjectOf) {
  return user && Object.values(profilesById).find(p => p.associated_users?.find(u => u.user_id === user.id && p.public_at)) || null
}

/**
 * Selector for community hub view.
 * Original: $$eh21
 */
export function useIsCommunityHubView() {
  return useSelector<ObjectOf>(s => isCommunityHubView(s.selectedView))
}

/**
 * Checks if view is community hub.
 * Original: $$em34
 */
export function isCommunityHubView(view: any) {
  return view.view === 'communityHub' || isCommunitySearchView(view) || false
}

/**
 * Checks if view is community search.
 * Original: $$eg59
 */
export function isCommunitySearchView(view: any) {
  return view.view === 'search'
    && (view.entryPoint === 'url:community'
      || view.entryPoint === 'community'
      || view.entryPoint === 'community:header')
}

/**
 * Checks if view is monetization redirect.
 * Original: $$ef53
 */
export function isMonetizationRedirectView(view: any) {
  return view.view === 'communityHub' && view.subView === 'monetizationRedirectView'
}

/**
 * Checks if view is hub file embed.
 * Original: $$eE47
 */
export function isHubFileEmbedView(view: any) {
  return view.view === 'communityHub' && view.subView === 'hubFileEmbed'
}

/**
 * Checks if view is handle.
 * Original: $$ey2
 */
export function isHandleView(view: any) {
  return view.view === 'communityHub' && view.subView === 'handle'
}

/**
 * Gets associated user profiles.
 * Original: $$eb6
 */
export const getAssociatedProfiles = getAssociatedUserProfiles

/**
 * Gets accepted publisher profile.
 * Original: $$eT32
 */
export function getAcceptedPublisherProfile(resource: any) {
  return resource.community_publishers?.accepted.find(isOrgOrTeamExport) || null
}

/**
 * Gets authed publisher profile.
 * Original: $$eI48
 */
export function getAuthedPublisherProfile(state: any, resource: any) {
  const accepted = getAcceptedPublisherProfile(resource)
  if (accepted)
    return state.authedProfilesById[accepted.id] || null
  const userProfile: ObjectOf = state.user && findPublishedProfileForUser(state.user, state.authedProfilesById)
  return userProfile && resource.community_publishers?.accepted.find(p => p.id === userProfile.id) ? userProfile : null
}

/**
 * Gets admin user for profile.
 * Original: $$eS27
 */
export function getAdminUserForProfile(profile: any, state: any) {
  if (!state.user)
    return null
  const associated = getAssociatedProfiles(state)
  const user = state.user
  const profileObj = state.authedProfilesById[profile.id]
  if (associated.length < 0)
    return null
  if (profileObj?.org_id) {
    const found = [...associated, user].find((u) => {
      const orgId = profileObj.org_id
      if (!orgId)
        return false
      const org = state.orgById[orgId]
      const orgUser = state.orgUsersByOrgId[orgId][u.id]
      return hasOrgAccess(orgUser, org, OrgUserRoleEnum.ADMIN)
    }) || null
    return found ? { userId: found.id, orgId: profileObj.org_id } : null
  }
  if (profileObj?.team_id) {
    const found = associated.find(u => hasAdminRoleAccessOnTeam__DEPRECATED(profileObj.team_id, state, u.id)) || null
    const orgId = state.teams[profileObj.team_id]?.org_id || null
    return found ? { userId: found.id, orgId } : null
  }
  const found = associated.find(u => u.id === profile.primary_user_id)
  return found ? { userId: found.id, orgId: null } : null
}

/**
 * Gets hub type string.
 * Original: $$ev42
 */
export function getHubTypeString(type: HubTypeEnum) {
  switch (type) {
    case HubTypeEnum.PLUGIN: return 'plugins'
    case HubTypeEnum.WIDGET: return 'widgets'
    case HubTypeEnum.COMMENT: return 'comments'
    case HubTypeEnum.HUB_FILE: return 'hub_files'
    default: throw new Error('Unsupported Type')
  }
}

/**
 * Fuse.js config objects.
 * Original: $$eA18, $$ex14, $$eN13, $$eC60
 */
export const FUSE_CONFIG_DEFAULT = {
  threshold: 0.1,
  matchAllTokens: true,
  tokenize: false,
  distance: 300,
}
export const FUSE_KEYS_PROFILE = [
  { name: 'name', weight: 1 },
  { name: 'description', weight: 1 },
]
export const FUSE_CONFIG_PROFILE = {
  ...FUSE_CONFIG_DEFAULT,
  keys: [
    { name: 'name', weight: 1 },
    { name: 'localFilePath', weight: 0.5 },
  ],
}
export const FUSE_CONFIG_COMMENT = {
  ...FUSE_CONFIG_DEFAULT,
  keys: [{ name: 'text', weight: 1 }],
}

/**
 * Tracks profile admin menu open event.
 * Original: $$ew43
 */
export function trackProfileAdminMenuOpen(source: string, view: string) {
  trackEventAnalytics(AdminMenuEvent.PROFILE_ADMIN_MENU_OPEN, { source, view })
}

// Exported variables (refactored names)
export const CR = getSelectedViewPluginVersions
export const CW = normalizeSearchString
export const Cj = isHandleView
export const D = MAX_TAGS_PER_FEED
export const E1 = isAuthedActiveProfile
export const EL = getCurrentOrgAdminInfo
export const Gg = getAssociatedProfiles
export const Gq = MAX_PLUGIN_SIZE
export const HE = PUBLISHER_INPUT_KEYS
export const HN = MAX_TAGLINE_LENGTH
export const HR = mapCommentsAndAuthors
export const Hc = getValueOrDefault
export const IZ = validatePublisherCount
export const Ih = FUSE_CONFIG_PROFILE
export const Kj = FUSE_KEYS_PROFILE
export const LI = isCommentingEnabled
export const Lg = validateTaglineLength
export const M0 = MAX_DESCRIPTION_LENGTH
export const Pk = FUSE_CONFIG_DEFAULT
export const T9 = findProfile
export const Tm = getOrgAdminAccess
export const UP = useIsCommunityHubView
export const Uc = MAX_COVER_IMAGE_SIZE
export const V4 = getResourceTags
export const Wi = MAX_PUBLISHERS_PER_RESOURCE
export const YU = validateCoverImage
export const Yp = trimOrEmpty
export const Zi = getAdminUserForProfile
export const Zs = MAX_TAGS_PER_RESOURCE
export const ax = mergeVersions
export const b = defaultTemplate
export const cJ = isProfilePublished
export const cV = getAcceptedPublisherProfile
export const cs = isOrgOrTeamExport
export const d9 = isCommunityHubView
export const e5 = isResourcePublicWithComments
export const eL = MAX_TAGS_LENGTH
export const gS = getPluginVersions
export const gZ = MAX_IMAGE_WIDTH
export const gc = getTeamAdminAccess
export const jI = MAX_FEED_ITEMS
export const kc = useAuthedActiveCommunityProfile
export const n = getHubTypeString
export const nR = trackProfileAdminMenuOpen
export const oH = getStatusOrDefault
export const ou = isUserAssociatedWithProfile
export const pH = MAX_IMAGE_DIMENSION
export const pK = isHubFileEmbedView
export const qA = getAuthedPublisherProfile
export const sD = findPublishedProfileForUser
export const s_ = getActiveProfileUserOrOrg
export const si = hasUserAccessToProfile
export const uS = getDynamicContentTranslation
export const uz = isMonetizationRedirectView
export const vr = validateProfileHandle
export const x1 = getResourceTypeV2
export const xj = MAX_IMAGE_HEIGHT
export const yO = MAX_RESOURCE_SIZE
export const z7 = validateTagString
export const zU = isCommunitySearchView
export const zd = FUSE_CONFIG_COMMENT
export const zp = useCurrentOrgAdminInfo
