import { getI18nString } from '../905/303541'
import { getUserOrTeamById } from '../905/491186'
import { AccessLevelEnum } from '../905/557142'
import { getFeatureFlags } from '../905/601108'
import { findTeamById } from '../905/613917'
import { isExternalRestricted, mapUserRoleToOrgUserRoleAlias } from '../figma_app/12796'
import { OrgUserRoleEnum } from '../figma_app/35887'
import { getGracePeriodAccessForKey, isStudentValidated } from '../figma_app/141320'
import { FAccessLevelType, FBasicPermissionType, FOrganizationRoleType, FPermissionLevelType, FResourceCategoryType } from '../figma_app/191312'
import { getOrgIdFromFolderOrTeam } from '../figma_app/528509'
import { memoizeByArgs } from '../figma_app/815945'

/**
 * PermissionsState type for grouping related permission data.
 */
export interface PermissionsState extends Record<string, any> {
  currentUserOrgId: string | null
  user: any
  fileByKey: Record<string, any>
  repos: Record<string, any>
  folders: Record<string, any>
  teams: Record<string, any>
  roles: any
  orgById: Record<string, any>
  orgUsersByOrgId: Record<string, any>
  teamUserByTeamId: Record<string, any>
  userEduGracePeriods: any
  licenseGroups: any
  orgTeams: any
  openFile: any
  currentTeamId: string | null
}

/**
 * Creates a PermissionsState object from provided arguments.
 * @param currentUserOrgId
 * @param user
 * @param fileByKey
 * @param repos
 * @param folders
 * @param teams
 * @param roles
 * @param orgById
 * @param orgUsersByOrgId
 * @param teamUserByTeamId
 * @param userEduGracePeriods
 * @param licenseGroups
 * @param orgTeams
 * @param openFile
 * @param currentTeamId
 * @returns PermissionsState
 */
// h
function createPermissionsState(
  currentUserOrgId: string | null,
  user: any,
  fileByKey: Record<string, any>,
  repos: Record<string, any>,
  folders: Record<string, any>,
  teams: Record<string, any>,
  roles: any,
  orgById: Record<string, any>,
  orgUsersByOrgId: Record<string, any>,
  teamUserByTeamId: Record<string, any>,
  userEduGracePeriods: any,
  licenseGroups: any,
  orgTeams: any,
  openFile: any,
  currentTeamId: string | null,
): PermissionsState {
  return {
    currentUserOrgId,
    user,
    fileByKey,
    repos,
    folders,
    teams,
    roles,
    orgById,
    orgUsersByOrgId,
    teamUserByTeamId,
    userEduGracePeriods,
    licenseGroups,
    orgTeams,
    openFile,
    currentTeamId,
  }
}

const memoizedCreatePermissionsState = memoizeByArgs(createPermissionsState)

/**
 * Returns a PermissionsState object from a source object.
 * @param state
 * @returns PermissionsState
 */
// getPermissionsState
export function getPermissionsState(state: any): PermissionsState {
  return createPermissionsState(
    state.currentUserOrgId,
    state.user,
    state.fileByKey,
    state.repos,
    state.folders,
    state.teams,
    state.roles,
    state.orgById,
    state.orgUsersByOrgId,
    state.teamUserByTeamId,
    state.userEduGracePeriods,
    state.licenseGroups,
    state.orgTeams,
    state.openFile,
    state.currentTeamId,
  )
}

/**
 * Returns a memoized PermissionsState object from a source object.
 * @param state
 * @returns PermissionsState
 */
// getPermissionsStateMemoized
export function getPermissionsStateMemoized(state: any): PermissionsState {
  return memoizedCreatePermissionsState(
    state.currentUserOrgId,
    state.user,
    state.fileByKey,
    state.repos,
    state.folders,
    state.teams,
    state.roles,
    state.orgById,
    state.orgUsersByOrgId,
    state.teamUserByTeamId,
    state.userEduGracePeriods,
    state.licenseGroups,
    state.orgTeams,
    state.openFile,
    state.currentTeamId,
  )
}

/**
 * Gets the team ID for a resource.
 * @param resource
 * @param state
 * @returns teamId or null
 */
// getResourceTeamId
export function getResourceTeamId(resource: { resource_type: FResourceCategoryType, resource_id_or_key: string }, state: PermissionsState): string | null {
  switch (resource.resource_type) {
    case FResourceCategoryType.FILE: {
      const file = state.fileByKey[resource.resource_id_or_key]
      return file?.team_id ?? null
    }
    case FResourceCategoryType.FILE_REPO: {
      const repo = state.repos[resource.resource_id_or_key]
      const folder = state.folders[repo?.folder_id]
      return folder?.team_id ?? null
    }
    case FResourceCategoryType.FOLDER: {
      const folder = state.folders[resource.resource_id_or_key]
      return folder?.team_id ?? null
    }
    case FResourceCategoryType.TEAM:
      return resource.resource_id_or_key
    default:
      return null
  }
}

/**
 * Checks if any role in the array meets or exceeds the minimum level.
 * @param roles
 * @param minLevel
 * @returns boolean
 */
// hasMinRole
export function hasMinRole(roles: any[], minLevel: number): boolean {
  return roles.some(role => role.level >= minLevel)
}

/**
 * Gets roles for a user and team.
 * @param teamId
 * @param state
 * @returns array of roles
 */
// getRolesForUserAndTeam
export function getRolesForUserAndTeam(teamId: string, state: PermissionsState): any[] {
  const userId = state.user?.id
  const roles = state.roles
  return teamId in roles.byTeamId && userId && userId in roles.byTeamId[teamId]
    ? [roles.byTeamId[teamId][userId]]
    : []
}

/**
 * Gets roles for a user and folder.
 * @param folderId
 * @param state
 * @returns array of roles
 */
// T
function getRolesForUserAndFolder(folderId: string, state: PermissionsState): any[] {
  const userId = state.user?.id
  const roles = state.roles
  let result: any[] = []
  if (folderId in roles.byFolderId && userId && userId in roles.byFolderId[folderId]) {
    result.push(roles.byFolderId[folderId][userId])
  }
  const folder = state.folders[folderId]
  if (folder && folder.team_id && !folder.is_invite_only) {
    result = result.concat(getRolesForUserAndTeam(folder.team_id, state))
  }
  return result
}

/**
 * Gets roles for a user and file repo.
 * @param repoId
 * @param state
 * @returns array of roles
 */
// I
function getRolesForUserAndRepo(repoId: string, state: PermissionsState): any[] {
  const userId = state.user?.id
  const roles = state.roles
  let result: any[] = []
  if (repoId in roles.byRepoId && userId && userId in roles.byRepoId[repoId]) {
    result.push(roles.byRepoId[repoId][userId])
  }
  const repo = state.repos[repoId]
  if (repo) {
    result = [...result, ...getRolesForUserAndFolder(repo.folder_id, state)]
  }
  return result
}

/**
 * Gets explicit role for user and file.
 * @param fileKey
 * @param state
 * @returns role or null
 */
// getExplicitRoleForUserAndFile
export function getExplicitRoleForUserAndFile(fileKey: string, state: PermissionsState): any | null {
  const userId = state.user?.id
  const roles = state.roles
  return fileKey in roles.byFileKey && userId && userId in roles.byFileKey[fileKey]
    ? roles.byFileKey[fileKey][userId]
    : null
}

/**
 * Gets all roles for a resource.
 * @param resourceType
 * @param resourceIdOrKey
 * @param state
 * @returns array of roles
 */
// getRolesForResource
export function getRolesForResource(resourceType: FResourceCategoryType, resourceIdOrKey: string, state: PermissionsState): any[] {
  switch (resourceType) {
    case FResourceCategoryType.FILE: {
      const roles: any[] = []
      const explicitRole = getExplicitRoleForUserAndFile(resourceIdOrKey, state)
      if (explicitRole !== null)
        roles.push(explicitRole)
      const file = state.fileByKey[resourceIdOrKey]
      if (file?.folder_id)
        roles.push(...getRolesForUserAndFolder(file.folder_id, state))
      if (file?.file_repo_id)
        roles.push(...getRolesForUserAndRepo(file.file_repo_id, state))
      return roles
    }
    case FResourceCategoryType.FILE_REPO:
      return getRolesForUserAndRepo(resourceIdOrKey, state)
    case FResourceCategoryType.FOLDER:
      return getRolesForUserAndFolder(resourceIdOrKey, state)
    case FResourceCategoryType.TEAM:
      return getRolesForUserAndTeam(resourceIdOrKey, state)
    default:
      return []
  }
}

/**
 * Checks if user is restricted from accessing a team due to education grace period.
 * @param teamId
 * @param minLevel
 * @param state
 * @returns boolean
 */
// A
function isEduTeamAccessRestricted(teamId: string, minLevel: number, state: PermissionsState): boolean {
  if (state.user && !isStudentValidated(state.user))
    return false
  const team = findTeamById(teamId, state)
  if (!team)
    return false
  const restricted = !!state.user
    && getGracePeriodAccessForKey(
      state.userEduGracePeriods,
      isStudentValidated(state.user),
      team.id,
      team.student_team,
    ).showAccessRestricted
  return minLevel > AccessLevelEnum.VIEWER && restricted
}

/**
 * Checks if user has minimum role on a team, considering org/team access.
 * @param teamId
 * @param minLevel
 * @param state
 * @returns boolean
 */
// N
function hasTeamRoleAccess(teamId: string, minLevel: number, state: PermissionsState): boolean {
  return hasMinRole(getRolesForUserAndTeam(teamId, state), minLevel)
    && !isEduTeamAccessRestricted(teamId, minLevel, state)
}

/**
 * Checks if user can view/edit/admin/own a team.
 * @param teamId
 * @param minLevel
 * @param state
 * @returns boolean
 */
// x
function canAccessTeam(teamId: string, minLevel: number, state: PermissionsState): boolean {
  const team = findTeamById(teamId, state)
  if (!team)
    return false
  const userId = state.user?.id
  const orgId = team.org_id
  const openTeamDeprecation = getFeatureFlags().sc_open_team_deprecation
  const sharingAudienceControl = team.sharing_audience_control

  if (orgId) {
    const isPublicOrgEdit
      = !openTeamDeprecation
        && minLevel <= AccessLevelEnum.EDITOR
        && canMemberOrg(orgId, state)
        && team.org_access === FAccessLevelType.PUBLIC
        && team.default_permission === FBasicPermissionType.EDIT

    const hasMin = hasMinRole(getRolesForUserAndTeam(teamId, state), minLevel)
    const canManage = minLevel <= AccessLevelEnum.ADMIN
      && (hasMin || canManageNonSecretOrgTeam(team, state, userId))

    const isPublicOrgView
      = !openTeamDeprecation
        && minLevel <= AccessLevelEnum.VIEWER
        && canMemberOrg(orgId, state)
        && team.org_access === FAccessLevelType.PUBLIC

    const orgSharing
      = canMemberOrg(orgId, state)
        && (
          (minLevel <= AccessLevelEnum.VIEWER && sharingAudienceControl === FPermissionLevelType.ORG_VIEW)
          || (minLevel <= AccessLevelEnum.EDITOR && sharingAudienceControl === FPermissionLevelType.ORG_EDIT)
        )

    return (canManage || isPublicOrgView || hasMin || isPublicOrgEdit || orgSharing)
      && canGuestOrg(orgId, state)
  }
  return hasTeamRoleAccess(teamId, minLevel, state)
}

/**
 * Checks if user can view a folder (deprecated).
 * @param folderId
 * @param state
 * @returns boolean
 */
// canViewFolder_DEPRECATED
export function canViewFolder_DEPRECATED(folderId: string, state: PermissionsState): boolean {
  const userId = state.user?.id
  const folder = state.folders[folderId]
  if (!userId || !folder)
    return false
  const orgId = getOrgIdFromFolderOrTeam(folder.id, state)
  if (orgId && !canGuestOrg(orgId, state))
    return false
  const team = folder.team_id && state.teams[folder.team_id]
  const openTeamDeprecation = getFeatureFlags().sc_open_team_deprecation
  const sharingAudienceControl = folder.sharing_audience_control

  if (
    (!openTeamDeprecation && orgId && canMemberOrg(orgId, state)

      && team && team.org_access === FAccessLevelType.PUBLIC && !folder.is_invite_only)
    || (!openTeamDeprecation && orgId && canMemberOrg(orgId, state)
      && AccessLevelEnum.VIEWER <= AccessLevelEnum.EDITOR
      && team && team.org_access === FAccessLevelType.PUBLIC && !folder.is_invite_only
      && !folder.is_view_only && team.default_permission === FBasicPermissionType.EDIT)
    || (orgId && canMemberOrg(orgId, state)
      && (AccessLevelEnum.VIEWER <= AccessLevelEnum.EDITOR && sharingAudienceControl === FPermissionLevelType.ORG_EDIT
        || sharingAudienceControl === FPermissionLevelType.ORG_VIEW))
  ) {
    return true
  }

  let folderRole: any | undefined
  const roles = getRolesForUserAndFolder(folderId, state)
  roles.forEach((role) => {
    if (role.resource_type === FResourceCategoryType.FOLDER)
      folderRole = role
  })

  if (!folder.team_id || folder.is_invite_only || (folder.is_view_only && AccessLevelEnum.VIEWER >= AccessLevelEnum.EDITOR)) {
    return !!folderRole && folderRole.level >= AccessLevelEnum.VIEWER
  }
  return hasMinRole(roles, AccessLevelEnum.VIEWER)
}

/**
 * Checks if user can view a team.
 * @param teamId
 * @param state
 * @returns boolean
 */
// canViewTeam
export function canViewTeam(teamId: string, state: PermissionsState): boolean {
  return canAccessTeam(teamId, AccessLevelEnum.VIEWER, state)
}

/**
 * Checks if user can edit a team.
 * @param teamId
 * @param state
 * @returns boolean
 */
// canEditTeam
export function canEditTeam(teamId: string, state: PermissionsState): boolean {
  return canAccessTeam(teamId, AccessLevelEnum.EDITOR, state)
}

/**
 * Checks if user can admin a team.
 * @param teamId
 * @param state
 * @returns boolean
 */
// canAdminTeam
export function canAdminTeam(teamId: string, state: PermissionsState): boolean {
  return canAccessTeam(teamId, AccessLevelEnum.ADMIN, state)
}

/**
 * Checks if user can own a team.
 * @param teamId
 * @param state
 * @returns boolean
 */
// canOwnTeam
export function canOwnTeam(teamId: string, state: PermissionsState): boolean {
  return canAccessTeam(teamId, AccessLevelEnum.OWNER, state)
}

/**
 * Checks if user has viewer role access on a team.
 * @param teamId
 * @param state
 * @returns boolean
 */
// hasViewerRoleAccessOnTeam
export function hasViewerRoleAccessOnTeam(teamId: string, state: PermissionsState): boolean {
  return hasTeamRoleAccess(teamId, AccessLevelEnum.VIEWER, state)
}

/**
 * Checks if user has editor role access on a team.
 * @param teamId
 * @param state
 * @returns boolean
 */
// hasEditorRoleAccessOnTeam
export function hasEditorRoleAccessOnTeam(teamId: string, state: PermissionsState): boolean {
  return hasTeamRoleAccess(teamId, AccessLevelEnum.EDITOR, state)
}

/**
 * Checks if user has admin role access on a team (deprecated).
 * @param teamId
 * @param state
 * @param userId
 * @returns boolean
 */
// hasAdminRoleAccessOnTeam__DEPRECATED
export function hasAdminRoleAccessOnTeam__DEPRECATED(teamId: string, state: PermissionsState, userId: string): boolean {
  const roles = (() => {
    const r = state.roles
    return teamId in r.byTeamId && userId && userId in r.byTeamId[teamId]
      ? [r.byTeamId[teamId][userId]]
      : []
  })()
  return hasMinRole(roles, AccessLevelEnum.ADMIN) && !isEduTeamAccessRestricted(teamId, AccessLevelEnum.ADMIN, state)
}

/**
 * Checks if user has admin role access on a team.
 * @param teamId
 * @param state
 * @returns boolean
 */
// hasAdminRoleAccessOnTeam
export function hasAdminRoleAccessOnTeam(teamId: string, state: PermissionsState): boolean {
  return hasTeamRoleAccess(teamId, AccessLevelEnum.ADMIN, state)
}

/**
 * Gets org user object for a given org and user.
 * @param state
 * @param orgId
 * @param userId
 * @returns org user object or null
 */
// F
function getOrgUser(state: PermissionsState, orgId: string, userId: string): any | null {
  return userId
    ? state.orgUsersByOrgId[orgId]?.[userId] ?? getUserOrTeamById(state, 'org_user', orgId)
    : null
}

/**
 * Checks if user is a guest in an org.
 * @param orgId
 * @param state
 * @returns boolean
 */
// canGuestOrg
export function canGuestOrg(orgId: string, state: PermissionsState): boolean {
  const user = state.user
  if (!orgId || !user)
    return false
  const org = state.orgById[orgId] ?? getUserOrTeamById(state, 'org', orgId)
  return hasOrgAccess(getOrgUser(state, orgId, user.id), org, OrgUserRoleEnum.GUEST)
}

/**
 * Checks if user is a member in an org.
 * @param orgId
 * @param state
 * @param userId
 * @returns boolean
 */
// canMemberOrg
export function canMemberOrg(orgId: string, state: PermissionsState, userId?: string): boolean {
  if (!orgId)
    return false
  userId = userId || state.user?.id
  const org = state.orgById[orgId] ?? getUserOrTeamById(state, 'org', orgId)
  return hasOrgAccess(getOrgUser(state, orgId, userId), org, OrgUserRoleEnum.MEMBER)
}

/**
 * Checks if user is an admin in an org.
 * @param orgId
 * @param state
 * @param userId
 * @returns boolean
 */
// canAdminOrg
export function canAdminOrg(orgId: string, state: PermissionsState, userId?: string): boolean {
  if (!orgId)
    return false
  const org = state.orgById[orgId] ?? getUserOrTeamById(state, 'org', orgId)
  userId = userId || state.user?.id
  return hasOrgAccess(getOrgUser(state, orgId, userId), org, OrgUserRoleEnum.ADMIN)
}

/**
 * Checks if org user has access at a given role level.
 * @param orgUser
 * @param org
 * @param minRole
 * @returns boolean
 */
// hasOrgAccess
export function hasOrgAccess(orgUser: any, org: any, minRole: number): boolean {
  return !!org && !!orgUser && mapUserRoleToOrgUserRoleAlias(orgUser.permission) >= minRole
}

/**
 * Checks if user can manage a non-secret org team.
 * @param team
 * @param state
 * @param userId
 * @returns boolean
 */
// canManageNonSecretOrgTeam
export function canManageNonSecretOrgTeam(team: any, state: PermissionsState, userId?: string): boolean {
  return team.org_access !== FAccessLevelType.SECRET
    && (() => {
      userId = userId || state.user?.id
      if (!userId || !team || !state.currentUserOrgId)
        return false
      let orgUser
      = state.currentUserOrgId
        && state.user
        && state.orgUsersByOrgId[state.currentUserOrgId]
        ? state.orgUsersByOrgId[state.currentUserOrgId][userId]
        : null
      if (orgUser === null)
        orgUser = getUserOrTeamById(state, 'org_user', state.currentUserOrgId)
      const foundTeam = findTeamById(team.id, state)
      if (!foundTeam || !orgUser || state.currentUserOrgId !== foundTeam.org_id)
        return false
      if (hasAdminRoleAccessOnTeam(team.id, state))
        return true
      const isAdminOrg = canAdminOrg(state.currentUserOrgId, state, userId)
      return (
        foundTeam.org_access !== FAccessLevelType.SECRET
        && (isAdminOrg
          || !!(
            foundTeam.workspace_id
            && (() => {
              userId = userId || state.user?.id
              const orgId = state.currentUserOrgId
              return !!(
                foundTeam.workspace_id
                && userId
                && orgId
                && state.orgUsersByOrgId?.[orgId]?.[userId].workspace_users?.find(
                  wu =>
                    wu.permission === FOrganizationRoleType.ADMIN
                    && wu.workspace_id === foundTeam.workspace_id,
                )
              )
            })()
          ))
      )
    })()
}

/**
 * Checks if org user is externally restricted from state.
 * @param state
 * @returns boolean
 */
// isOrgUserExternallyRestrictedFromState
export function isOrgUserExternallyRestrictedFromState(state: PermissionsState): boolean {
  return isExternalRestricted(state.user, state.currentUserOrgId)
}

/**
 * Checks if user has any active education teams.
 * @param state
 * @param userId
 * @returns boolean
 */
// hasActiveEduTeam
export function hasActiveEduTeam(state: PermissionsState, userId: string): boolean {
  return !!userId
    && Object.entries(state.teamUserByTeamId ?? {}).some(([teamId, teamUsers]) => {
      const team = state.teams[teamId]
      return !!team?.student_team_at && teamUsers[userId] != null
    })
}

/**
 * Gets read-only override message for a folder.
 * @param role
 * @param state
 * @returns string | null
 */
// getReadOnlyOverrideMessageForFolder
export function getReadOnlyOverrideMessageForFolder(role: any, state: PermissionsState): string | null {
  if (
    role.level !== AccessLevelEnum.VIEWER
    && role.level !== AccessLevelEnum.VIEW_PROTOTYPES
  ) {
    return null
  }
  const folder = state.folders[role.resource_id_or_key]
  if (!folder)
    return null
  const teamRole
    = role.user_id
      && folder.team_id
      && state.roles.byTeamId[folder.team_id]
      && state.roles.byTeamId[folder.team_id][role.user_id]
  const canEdit = !folder.is_invite_only && !folder.is_view_only
  return teamRole && teamRole.level > AccessLevelEnum.VIEWER && canEdit
    ? getI18nString('permissions.can_still_edit_team_project_is_in')
    : null
}
// export const canAdminOrg = canAdminOrg
// export const canAdminTeam = canAdminTeam
// export const canEditTeam = canEditTeam
// export const canGuestOrg = canGuestOrg
// export const canManageNonSecretOrgTeam = canManageNonSecretOrgTeam
// export const canMemberOrg = canMemberOrg
// export const canOwnTeam = canOwnTeam
// export const canViewFolder_DEPRECATED = canViewFolder_DEPRECATED
// export const canViewTeam = canViewTeam
// export const getExplicitRoleForUserAndFile = getExplicitRoleForUserAndFile
// export const getPermissionsState = getPermissionsState
// export const getPermissionsStateMemoized = getPermissionsStateMemoized
// export const getReadOnlyOverrideMessageForFolder = getReadOnlyOverrideMessageForFolder
// export const getResourceTeamId = getResourceTeamId
// export const getRolesForResource = getRolesForResource
// export const getRolesForUserAndTeam = getRolesForUserAndTeam
// export const hasActiveEduTeam = hasActiveEduTeam
// export const hasAdminRoleAccessOnTeam = hasAdminRoleAccessOnTeam
// export const hasAdminRoleAccessOnTeam__DEPRECATED = hasAdminRoleAccessOnTeam__DEPRECATED
// export const hasEditorRoleAccessOnTeam = hasEditorRoleAccessOnTeam
// export const hasMinRole = hasMinRole
// export const hasOrgAccess = hasOrgAccess
// export const hasViewerRoleAccessOnTeam = hasViewerRoleAccessOnTeam
// export const isOrgUserExternallyRestrictedFromState = isOrgUserExternallyRestrictedFromState
