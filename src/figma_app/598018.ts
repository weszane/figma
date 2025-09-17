import { useSelector } from 'react-redux'
import { createReduxSubscriptionAtomWithState } from '../905/270322'
import { getI18nString } from '../905/303541'
import { extractPropertyFromNestedObjects } from '../905/504360'
import { resolveTeamId } from '../905/515860'
import { BillingSections, DashboardSections, MemberSections } from '../905/548208'
import { subscribeAndAwaitData } from '../905/553831'
import { AccessLevelEnum } from '../905/557142'
import { getFeatureFlags } from '../905/601108'
import { liveStoreInstance } from '../905/713695'
import { getResourceDataOrFallback } from '../905/723791'
import { createLoadedResource } from '../905/957591'
import { TeamFileLimitsInfo, TeamFileLimitsInfoByProject } from '../figma_app/43951'
import { ConfigGroups, isReduxDeprecationCutover } from '../figma_app/121751'
import { UserFieldEnum } from '../figma_app/135698'
import { FFileType, FPaymentHealthStatusType, FPlanLimitationType } from '../figma_app/191312'
import { hasTeamStatePaidAccess, STANDARD_LIMIT } from '../figma_app/345997'
import { adminPermissionConfig, setupShadowRead } from '../figma_app/391338'
import { throwTypeError } from '../figma_app/465776'
import { isTeamFolder } from '../figma_app/528509'
import { canAdminTeam } from '../figma_app/642025'
import { filterNotNullish } from '../figma_app/656233'
import { memoizeByArgs } from '../figma_app/815945'

/**
 * Fetches trashed files and checks team file limits for each file's team.
 * @param fileIds - Array of file IDs to process
 * @returns Team ID that has file limit restrictions, or undefined if none
 */
export async function checkTrashedFilesTeamLimits(fileIds: string[]) {
  const trashedFiles = []
  const teamInfoMap = {}

  await Promise.all(fileIds.map(async (fileId) => {
    const file = await liveStoreInstance.fetchFile(fileId)
    if (!file?.trashed_at || !file?.team_id)
      return

    trashedFiles.push(file)

    const teamData = (await subscribeAndAwaitData(TeamFileLimitsInfo, {
      teamId: file.team_id,
    })).team

    if (teamData?.id) {
      teamInfoMap[teamData.id] = teamData
    }
  }))

  return await validateTeamFileLimits(trashedFiles, teamInfoMap)
}

/**
 * Default team file counts structure
 */
export const DEFAULT_TEAM_FILE_COUNTS = Object.freeze({
  designFileCount: 0,
  whiteboardFileCount: 0,
  slideFileCount: '0',
  sitesFileCount: '0',
  totalFileCount: createLoadedResource(0),
})

/**
 * Fetches files with folder information and checks team file limits.
 * @param fileRequests - Array of objects containing file key and folder ID
 * @returns Team ID that has file limit restrictions, or undefined if none
 */
export async function checkFilesWithFolderLimits(fileRequests: { key: string, folderId: string }[]) {
  const filesWithFolders = []
  const teamInfoMap = {}

  await Promise.all(fileRequests.map(async (request) => {
    const file = {
      ...(await liveStoreInstance.fetchFile(request.key)),
      folder_id: request.folderId,
    }

    if (file) {
      filesWithFolders.push(file)
    }

    if (!request.folderId)
      return

    const projectData = await subscribeAndAwaitData(TeamFileLimitsInfoByProject, {
      projectId: request.folderId,
    })

    const team = projectData.project?.team
    if (team?.id) {
      teamInfoMap[team.id] = team
    }
  }))

  return await validateTeamFileLimits(filesWithFolders, teamInfoMap)
}

/**
 * Validates team file limits based on file types and counts.
 * @param files - Array of files to check
 * @param teamInfoMap - Map of team information
 * @returns Team ID that has restrictions, or undefined if none
 */
async function validateTeamFileLimits(files: any[], teamInfoMap: Record<string, any>) {
  const teamFileCounts = {}
  const folderCache = {}

  for (const file of files) {
    const {
      folder_id,
      team_id,
      editor_type,
    } = file

    if (!folder_id || !team_id || !editor_type)
      continue

    const folder = folderCache[folder_id] ?? (await liveStoreInstance.fetchFolder(folder_id))
    folderCache[folder_id] = folder

    teamFileCounts[team_id] = teamFileCounts[team_id] ?? {}
    teamFileCounts[team_id][editor_type] = teamFileCounts[team_id][editor_type] ?? {
      draft: 0,
      nonDraft: 0,
    }

    isTeamFolder(folder)
      ? teamFileCounts[team_id][editor_type].draft += 1
      : teamFileCounts[team_id][editor_type].nonDraft += 1
  }

  const restrictedTeam = Object.entries(teamFileCounts).find(([teamId, fileTypeCounts]) => {
    const teamInfo = teamInfoMap[teamId]
    return !!teamInfo && Object.entries(fileTypeCounts).some(([fileType, counts]) =>
      !isTeamAllowedToAddFiles(teamInfo, {
        type: 3, // ADD_N_FILES
        editorType: fileType,
        teamFileCounts: teamInfo.teamFileCounts || DEFAULT_TEAM_FILE_COUNTS,
        nNonDraftFilesToAdd: (counts as any).nonDraft,
      }),
    )
  })

  return restrictedTeam?.[0]
}

/**
 * Checks if user has any team role or edit/view permissions
 * @param user - User object to check
 * @returns True if user has any permissions
 */
export function hasTeamPermissions(user: any): boolean {
  return !!(user.team_role
    || (user?.edit_roles?.design_files?.length || 0) > 0
    || (user?.edit_roles?.whiteboard_files?.length || 0) > 0
    || (user?.edit_roles?.folders?.length || 0) > 0
    || (user?.view_roles?.file_count || 0) > 0
    || (user?.view_roles?.folder_count || 0) > 0)
}

/**
 * Checks if team has legacy files limitation
 * @param team - Team object to check
 * @returns True if team has legacy files limitation
 */
function hasLegacyFilesLimitation(team: any): boolean {
  return !!team?.restrictions_list?.includes(FPlanLimitationType.FILES_LIMITED_LEGACY)
}

/**
 * Checks if team has whiteboard files beta limitation
 * @param team - Team object to check
 * @returns True if team has whiteboard files beta limitation
 */
function hasWhiteboardFilesBetaLimitation(team: any): boolean {
  return !!team?.restrictions_list?.includes(FPlanLimitationType.WHITEBOARD_FILES_LIMITED_BETA)
}

/**
 * Enum for different add operations
 */
export enum AddOperationType {
  ADD_PROJECT = 0,
  ADD_EDITOR = 1,
  ADD_FILE = 2,
  ADD_N_FILES = 3,

}

/**
 * Restriction types
 */
export enum RestrictionType {
  NO_RESTRICTIONS = 'noRestrictions',
  FULLY_RESTRICTED = 'fullyRestricted',
  FILE_COUNT_LIMIT = 'fileCountLimit',
}

/**
 * Gets file type configuration based on editor type
 * @param editorType - File editor type
 * @returns Configuration object for the file type
 */
function getFileTypeConfig(editorType: FFileType) {
  switch (editorType) {
    case FFileType.DESIGN:
      return {
        starterRestrictionType: RestrictionType.FILE_COUNT_LIMIT,
        teamRestrictions: new Set([
          FPlanLimitationType.FILES_LIMITED_LEGACY,
          FPlanLimitationType.FILES_LIMITED,
          FPlanLimitationType.GLOBAL_FILES_LIMITED,
          FPlanLimitationType.GLOBAL_FILES_LIMITED_LEGACY,
        ]),
        teamFileCountsKey: 'designFileCount',
      }
    case FFileType.WHITEBOARD:
      return {
        starterRestrictionType: RestrictionType.FILE_COUNT_LIMIT,
        teamRestrictions: new Set([
          FPlanLimitationType.WHITEBOARD_FILES_LIMITED_BETA,
          FPlanLimitationType.WHITEBOARD_FILES_LIMITED,
          FPlanLimitationType.GLOBAL_FILES_LIMITED,
          FPlanLimitationType.GLOBAL_FILES_LIMITED_LEGACY,
        ]),
        teamFileCountsKey: 'whiteboardFileCount',
      }
    case FFileType.SLIDES:
      return {
        starterRestrictionType: RestrictionType.FILE_COUNT_LIMIT,
        teamRestrictions: new Set([
          FPlanLimitationType.SLIDE_FILES_LIMITED_BETA,
          FPlanLimitationType.SLIDE_FILES_LIMITED,
          FPlanLimitationType.GLOBAL_FILES_LIMITED,
          FPlanLimitationType.GLOBAL_FILES_LIMITED_LEGACY,
        ]),
        teamFileCountsKey: 'slideFileCount',
      }
    case FFileType.SITES:
      if (!getFeatureFlags().sts_starter_enabled) {
        return {
          starterRestrictionType: RestrictionType.FULLY_RESTRICTED,
        }
      }
      if (getFeatureFlags().sites_design_starter_combined_file_limit) {
        return {
          starterRestrictionType: RestrictionType.FILE_COUNT_LIMIT,
          teamRestrictions: new Set([
            FPlanLimitationType.FILES_LIMITED_LEGACY,
            FPlanLimitationType.FILES_LIMITED,
            FPlanLimitationType.GLOBAL_FILES_LIMITED,
            FPlanLimitationType.GLOBAL_FILES_LIMITED_LEGACY,
          ]),
          teamFileCountsKey: 'sitesFileCount',
        }
      }
      return {
        starterRestrictionType: RestrictionType.FILE_COUNT_LIMIT,
        teamRestrictions: new Set([
          FPlanLimitationType.GLOBAL_FILES_LIMITED,
          FPlanLimitationType.GLOBAL_FILES_LIMITED_LEGACY,
        ]),
        teamFileCountsKey: 'totalFileCount',
      }
    case FFileType.COOPER:
      return getFeatureFlags().cooper
        ? {
            starterRestrictionType: RestrictionType.FILE_COUNT_LIMIT,
            teamRestrictions: new Set([
              FPlanLimitationType.GLOBAL_FILES_LIMITED,
              FPlanLimitationType.GLOBAL_FILES_LIMITED_LEGACY,
            ]),
            teamFileCountsKey: 'totalFileCount',
          }
        : {
            starterRestrictionType: RestrictionType.FULLY_RESTRICTED,
          }
    case FFileType.FIGMAKE:
      return getFeatureFlags().bake_starter_limit
        ? {
            starterRestrictionType: RestrictionType.FILE_COUNT_LIMIT,
            teamRestrictions: new Set([
              FPlanLimitationType.GLOBAL_FILES_LIMITED,
              FPlanLimitationType.GLOBAL_FILES_LIMITED_LEGACY,
            ]),
            teamFileCountsKey: 'totalFileCount',
          }
        : {
            starterRestrictionType: RestrictionType.FULLY_RESTRICTED,
          }
    default:
      throwTypeError(editorType)
  }
}

/**
 * Checks if team is allowed to perform an operation based on restrictions
 * @param team - Team information
 * @param operation - Operation details
 * @returns True if team is allowed to perform the operation
 */
export function isTeamAllowedToAddFiles(team: any, operation: any) {
  if (!team || team.restrictionsList?.includes(FPlanLimitationType.LOCKED))
    return false

  if (hasTeamStatePaidAccess(team))
    return true

  switch (operation.type) {
    case AddOperationType.ADD_PROJECT:
      return !team.restrictionsList?.includes(FPlanLimitationType.PROJECTS_LIMITED)
        && !team.restrictionsList?.includes(FPlanLimitationType.PROJECTS_LIMITED_LEGACY)
    case AddOperationType.ADD_EDITOR:
      return !team.restrictionsList?.includes(FPlanLimitationType.EDITORS_LIMITED)
    case AddOperationType.ADD_FILE:
    {
      const config = getFileTypeConfig(operation.editorType)
      switch (config.starterRestrictionType) {
        case RestrictionType.FULLY_RESTRICTED:
          return false
        case RestrictionType.NO_RESTRICTIONS:
          return true
        case RestrictionType.FILE_COUNT_LIMIT:
          if (operation.isDestinationTeamDrafts)
            return true
          if (team.restrictionsList?.some((restriction: FPlanLimitationType) => config.teamRestrictions.has(restriction))
            || (FPlanLimitationType.GLOBAL_FILES_MUST_CHECK
              && team.restrictionsList?.includes(FPlanLimitationType.GLOBAL_FILES_MUST_CHECK)
              && operation.teamFileCounts
              && (getResourceDataOrFallback(operation.teamFileCounts.totalFileCount) as number ?? 0) >= STANDARD_LIMIT)) {
            return false
          }
          if (operation.teamFileCounts) {
            let fileCount = Number(operation.teamFileCounts[config.teamFileCountsKey])
            if (getFeatureFlags().sites_design_starter_combined_file_limit
              && operation.editorType === FFileType.DESIGN) {
              fileCount += Number(operation.teamFileCounts.sitesFileCount ?? 0)
            }
            else if (getFeatureFlags().sites_design_starter_combined_file_limit
              && operation.editorType === FFileType.SITES) {
              fileCount += Number(operation.teamFileCounts.designFileCount ?? 0)
            }

            if (fileCount >= STANDARD_LIMIT) {
              return false
            }
          }
          return true
        default:
          throwTypeError(config)
      }
    }
    case AddOperationType.ADD_N_FILES:
    {
      const config = getFileTypeConfig(operation.editorType)
      switch (config.starterRestrictionType) {
        case RestrictionType.FULLY_RESTRICTED:
          return false
        case RestrictionType.NO_RESTRICTIONS:
          return true
        case RestrictionType.FILE_COUNT_LIMIT:
        {
          if (operation.nNonDraftFilesToAdd === 0)
            return true
          if (team.restrictionsList?.some((restriction: FPlanLimitationType) => config.teamRestrictions.has(restriction))
            || (FPlanLimitationType.GLOBAL_FILES_MUST_CHECK
              && team.restrictionsList?.includes(FPlanLimitationType.GLOBAL_FILES_MUST_CHECK)
              && operation.teamFileCounts
              && (getResourceDataOrFallback(operation.teamFileCounts.totalFileCount) as number ?? 0) >= STANDARD_LIMIT)) {
            return false
          }
          let fileCount = Number(operation.teamFileCounts[config.teamFileCountsKey])
          if (getFeatureFlags().sites_design_starter_combined_file_limit
            && operation.editorType === FFileType.DESIGN) {
            fileCount += Number(operation.teamFileCounts.sitesFileCount ?? 0)
          }
          else if (getFeatureFlags().sites_design_starter_combined_file_limit
            && operation.editorType === FFileType.SITES) {
            fileCount += Number(operation.teamFileCounts.designFileCount ?? 0)
          }

          if (fileCount + operation.nNonDraftFilesToAdd > STANDARD_LIMIT) {
            return false
          }
          return true
        }
        default:
      }
      break
    }
    default:
      throwTypeError(operation)
  }
}

/**
 * Wrapper function for checking team file restrictions
 * @param team - Team information
 * @param operation - Operation details
 * @returns True if team is allowed to perform the operation
 */
export function checkTeamFileRestrictions(team: any, operation: any) {
  return isTeamAllowedToAddFiles({
    subscription: team.subscription,
    restrictionsList: team.restrictions_list || [],
    studentTeamAt: team.student_team ? new Date() : null,
    gracePeriodEnd: team.grace_period_end ? new Date(team.grace_period_end) : null,
  }, operation)
}

/**
 * Gets the appropriate team based on user permissions
 * @param state - Application state
 * @param team - Team information
 * @returns Team object or null
 */
export function getAuthorizedTeam(state: any, team: any) {
  if (!state.teams || !state.authedTeamsById)
    return null

  const teams = Object.values(state.teams)
  const authedTeams = Object.values(state.authedTeamsById)

  if (setupShadowRead({
    oldValue: teams.length === 1 && canAdminTeam((teams[0] as any).id, state),
    newValue: team?.canAdmin,
    label: adminPermissionConfig.gen0OnboardingOnlyTeam.canAdmin,
    enableFullRead: isReduxDeprecationCutover(ConfigGroups.GROUP_7),
    maxReports: 1,
    contextArgs: {
      currentTeamId: team?.id,
      userId: state.user?.id,
      teams: String(teams.map((t: any) => t.id)),
    },
  })) {
    return setupShadowRead({
      oldValue: teams[0],
      newValue: teams.find((t: any) => t.id === team?.id) || null,
      label: adminPermissionConfig.gen0OnboardingOnlyTeam.currentTeamFromState,
      enableFullRead: isReduxDeprecationCutover(ConfigGroups.GROUP_7),
      maxReports: 1,
      contextArgs: {
        currentTeamId: team?.id,
        userId: state.user?.id,
        teams: String(teams.map((t: any) => t.id)),
      },
    })
  }

  if (teams.length === 0 && authedTeams.length === 1) {
    const userId = state.user?.id
    if (userId) {
      return state.teamAdminRolesForAuthedUsers
        && state.teamAdminRolesForAuthedUsers[userId].find((role: any) => role.team_id === (authedTeams[0] as any).id)
        ? authedTeams[0]
        : null
    }
  }

  return null
}

/**
 * Checks if team has valid payment status
 * @param team - Team object to check
 * @returns True if team has valid payment status
 */
export function hasValidTeamPaymentStatus(team: any): boolean {
  return !!team.student_team
    || !!team
    && !!team.subscription
    && [FPaymentHealthStatusType.OK, FPaymentHealthStatusType.GRACE_PERIOD].includes(team.subscription)
}

/**
 * Gets team user information for the open file
 * @param state - Application state
 * @returns Team user information or null
 */
export function getCurrentTeamUserInfo(state: any) {
  const userId = state.user?.id
  const fileKey = state.openFile?.key

  if (!userId || !fileKey)
    return null

  const teamId = state.fileByKey?.[fileKey]?.team_id
  return teamId ? state.teamUserByTeamId?.[teamId]?.[userId] : null
}

/**
 * Gets localized string for user field
 * @param field - User field enum
 * @returns Localized string
 */
export function getUserFieldLabel(field: UserFieldEnum) {
  switch (field) {
    case UserFieldEnum.NAME:
      return getI18nString('team_view.team_members_table_column.name')
    case UserFieldEnum.ACTIVE_AT:
      return getI18nString('team_view.team_members_table_column.active_at')
    case UserFieldEnum.DESIGN_PAID_STATUS:
      return getI18nString('team_view.team_members_table_column.design_role.seat_rename')
    case UserFieldEnum.FIGJAM_PAID_STATUS:
      return getI18nString('team_view.team_members_table_column.figjam_role.seat_rename')
    case UserFieldEnum.BILLING_INTERVAL:
      return getI18nString('team_view.team_members_table_column.billing_interval')
  }
}

/**
 * Gets localized string for dashboard section
 * @param section - Dashboard section
 * @param subSection - Sub-section (optional)
 * @returns Localized string
 */
export function getDashboardSectionLabel(section: DashboardSections, subSection?: MemberSections | BillingSections) {
  switch (section) {
    case DashboardSections.DASHBOARD:
      return getI18nString('team_view.toolbar.dashboard')
    case DashboardSections.MEMBERS:
      return getI18nString('team_view.toolbar.members')
    case DashboardSections.DRAFTS:
      return getI18nString('team_view.toolbar.drafts')
    case DashboardSections.CONTENT:
      switch (subSection) {
        case MemberSections.ABANDONED_DRAFTS:
          return getI18nString('team_view.toolbar.drafts')
        case MemberSections.CONNECTED_PROJECTS:
          return getI18nString('team_view.toolbar.connected_projects')
        default:
          return getI18nString('team_view.toolbar.content')
      }
    case DashboardSections.SETTINGS:
      return getI18nString('team_view.toolbar.settings')
    case DashboardSections.BILLING:
      switch (subSection) {
        case BillingSections.OVERVIEW:
          return getI18nString('team_view.toolbar.billing.overview')
        case BillingSections.INVOICES:
          return getI18nString('team_view.toolbar.billing.invoices')
        default:
          return getI18nString('team_view.toolbar.billing')
      }
    default:
      throwTypeError(section)
  }
}

// URL patterns for team file links
const TEAM_FILE_URL_PATTERN = /[htps?:/]?[a-z.]*figma[\-.\da-z:]*\/files\/[A-Za-z0-9]*\/team\/\d+/
const TEAM_URL_PATTERN = /[htps?:/]?[a-z.]*figma[\-.\da-z:]*\/files\/team\/\d+/

/**
 * Checks if URL matches team file pattern
 * @param url - URL to check
 * @returns True if URL matches pattern
 */
export function isTeamFileUrl(url: string): boolean {
  return TEAM_FILE_URL_PATTERN.test(url)
}

/**
 * Checks if URL matches team pattern
 * @param url - URL to check
 * @returns True if URL matches pattern
 */
export function isTeamUrl(url: string): boolean {
  return TEAM_URL_PATTERN.test(url)
}

/**
 * Extracts team ID from URL
 * @param url - URL to parse
 * @returns Team ID or null
 */
export function extractTeamIdFromUrl(url: string): string | null {
  const match = new URL(url).pathname.match('team/([A-z0-9]*)')
  return match ? match[1] : null
}

/**
 * Gets current team ID from Redux state
 * @returns Team ID
 */
export function getCurrentTeamId(): string {
  return useSelector((state: any) => resolveTeamId(state)) || ''
}

/**
 * Gets current team from Redux state
 * @returns Team object or null
 */
export function getCurrentTeam(): any {
  return useSelector((state: any) => {
    const teamId = resolveTeamId(state)
    return teamId === '' || state.teams == null ? null : state.teams[teamId]
  }) || null
}

/**
 * Redux subscription atom for current team
 */
export const currentTeamAtom = createReduxSubscriptionAtomWithState(state => state.teams[resolveTeamId(state)] || null)

/**
 * Gets team by ID from state
 * @param state - Application state
 * @returns Team object or null
 */
export function getTeamById(state: any) {
  return state.teams[resolveTeamId(state)] || null
}

/**
 * Gets filtered team member IDs
 * @param team - Team object
 * @param membersData - Members data
 * @param filter - Filter function
 * @returns Array of member IDs
 */
export function getFilteredTeamMemberIds(team: any, membersData: any, filter: (id: string) => boolean) {
  return team ? Object.keys(extractPropertyFromNestedObjects(membersData.byTeamId, team.id)).filter(filter) : []
}

/**
 * Memoized function to get filtered team members
 */
export const getFilteredTeamMembers = memoizeByArgs((team: any, membersData: any, filter: (id: string) => boolean) => {
  return team ? getFilteredTeamMemberIds(team, membersData, filter).map(id => filter[id]) : []
})

/**
 * Sorts items by specified order
 * @param items - Array of items to sort
 * @param order - Array of item IDs defining the order
 * @returns Array of sorted item IDs
 */
export function sortItemsByOrder(items: any[], order: string[]) {
  const itemMap = {}
  const itemIds = []

  for (const item of items) {
    if (item) {
      itemMap[item.id] = item
      itemIds.push(item.id)
    }
  }

  items.sort((a, b) => {
    const indexA = order.indexOf(a.id)
    const indexB = order.indexOf(b.id)

    return indexA === -1 && indexB === -1
      ? a.createdAt < b.createdAt ? 1 : -1
      : indexA - indexB
  })

  return items.map(item => item.id)
}

/**
 * Gets active team members
 * @param membersData - Members data
 * @param teamId - Team ID
 * @returns Array of active members
 */
export function getActiveTeamMembers(membersData: any, teamId: string) {
  const teamMembers = membersData.byTeamId[teamId] || {}
  return filterNotNullish(Object.keys(teamMembers).map((memberId) => {
    const member = teamMembers[memberId]
    return member ? !true === member.pending ? null : member.user : null
  }))
}

/**
 * Checks if team has multiple owners
 * @param roleType - Role type to check
 * @param users - Array of users
 * @param roles - User roles
 * @returns True if team has multiple owners
 */
export function hasMultipleOwners(roleType: any, users: any[], roles: any) {
  let ownerCount = 0
  const userMap = {}

  users.forEach(user => userMap[user.id] = user)

  for (const userId of Object.keys(roles)) {
    const user = userMap[userId]
    const userRole = roles[userId][roleType]

    if (user && userRole) {
      if (user.pro_team || user.org_access || user.student_team)
        return false

      if (userRole.level === AccessLevelEnum.OWNER) {
        ownerCount++
      }
    }
  }

  return ownerCount > 1
}

/**
 * Checks if string is numeric
 * @param value - String to check
 * @returns True if string contains only digits
 */
export function isNumericString(value: string): boolean {
  return !!value && !!value.match(/^\d+$/)
}

// Export aliases (keeping original names on the right)
export const BU = hasTeamPermissions
export const Cl = isTeamUrl
export const Ct = hasMultipleOwners
export const Cz = DEFAULT_TEAM_FILE_COUNTS
export const Eq = extractTeamIdFromUrl
export const FQ = getAuthorizedTeam
export const H7 = getTeamById
export const HE = isTeamFileUrl
export const Me = currentTeamAtom
export const PS = hasValidTeamPaymentStatus
export const R5 = checkTrashedFilesTeamLimits
export const Rq = getUserFieldLabel
export const UQ = getCurrentTeamUserInfo
export const _L = getFilteredTeamMemberIds
export const aW = isTeamAllowedToAddFiles
export const cD = getCurrentTeamId
export const cU = hasWhiteboardFilesBetaLimitation
export const dE = getFilteredTeamMembers
export const jv = isNumericString
export const mx = checkFilesWithFolderLimits
export const n$ = sortItemsByOrder
export const ol = getCurrentTeam
export const pG = getActiveTeamMembers
export const pe = getDashboardSectionLabel
export const rR = checkTeamFileRestrictions
export const sK = AddOperationType
export const zs = hasLegacyFilesLimitation
