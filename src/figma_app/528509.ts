import { AccessLevelEnum } from '../905/557142'
import { ConfigGroups, isReduxDeprecationCutover } from '../figma_app/121751'
import { adminPermissionConfig, setupShadowRead } from '../figma_app/391338'
import { getDraftsSidebarString } from '../figma_app/633080'
import { canViewTeam } from '../figma_app/642025'
import { SortField } from '../figma_app/756995'

/**
 * Prefix for temporary IDs
 * @original $$d
 */
const TEMP_PREFIX = 'temp-'

/**
 * Returns the value at key `t` in object `e` after processing.
 * @original $$c1
 */
export function getProcessedValueByKey(obj: any, key: string): any {
  return isRootPath(obj[key])
}

/**
 * Checks if the object has a root path.
 * @original $$u6
 */
export function hasRootPath(obj: any): boolean {
  return !!obj && obj.path === ''
}

/**
 * Checks if the object has a root path.
 * @original $$p2
 */
export function isRootPath(obj: any): boolean {
  return !!obj && obj.path === ''
}

/**
 * Checks if the string starts with TEMP_PREFIX.
 * @original $$_15
 */
export function isTempId(str: string): boolean {
  return str.startsWith(TEMP_PREFIX)
}

/**
 * Generates a new temporary ID.
 * @original $$h10
 */
export function generateTempId(): string {
  return `${TEMP_PREFIX}${+new Date()}`
}

/**
 * Checks if the object has a root path.
 * @original $$m7
 */
export function hasRootPathOptional(obj: any): boolean {
  return obj?.path === ''
}

/**
 * Finds a folder with OWNER access level.
 * @original $$g11
 */
export function findOwnerFolder(userId: string, folders: Record<string, any>, permissions: Record<string, any>, options?: { drafts_folder_id?: string }): any | null {
  if (!userId)
    return null
  if (options)
    return folders[options.drafts_folder_id!] || null
  for (const folderId in folders) {
    const folder = folders[folderId]
    const perm = permissions[folderId] ? permissions[folderId][userId] : null
    if (
      !folder.teamId
      && folder.path === ''
      && folder.orgId == null
      && perm
      && perm.level === AccessLevelEnum.OWNER
    ) {
      return folder
    }
  }
  return null
}

/**
 * Checks if the folder is an org folder (not a team folder, has org_id, and path is not root).
 * @original $$f16
 */
export function isOrgFolder(folder: any): boolean {
  return folder && !folder.team_id && folder.path !== '' && !!folder.org_id
}

/**
 * Checks if the folder is an org folder (not a team folder, has orgId, and path is not root).
 * @original $$E13
 */
export function isOrgFolderV2(folder: any): boolean {
  return folder && !folder.teamId && folder.path !== '' && !!folder.orgId
}

/**
 * Returns the drafts sidebar string if path is root, else returns path.
 * @original $$y0
 */
export function getSidebarPath(folder: any): string {
  return folder?.path === '' ? getDraftsSidebarString() : folder?.path
}

/**
 * Returns the drafts sidebar string if input is undefined or empty, else returns input.
 * @original $$b4
 */
export function getSidebarStringOrValue(value?: string): string | null {
  return value === undefined
    ? null
    : value === ''
      ? getDraftsSidebarString()
      : value
}

/**
 * Checks if key exists in object.
 * @original $$T3
 */
export function hasKey(obj: any, key: string): boolean {
  return key != null && key in obj
}

/**
 * Gets org_id from folder or team.
 * @original $$I14
 */
export function getOrgIdFromFolderOrTeam(folderId: string, data: { folders: Record<string, any>, teams: Record<string, any> }): string | undefined {
  const folder = data.folders[folderId]
  if (folder && folder.org_id)
    return folder.org_id
  if (folder && folder.team_id) {
    const team = data.teams[folder.team_id]
    if (team && team.org_id)
      return team.org_id
  }
}

/**
 * Validates folder name.
 * @original $$$$S5
 */
export function validateFolderName(name: string): string | undefined {
  if (name.length <= 0)
    return 'Please provide a name'
  if (name.length > 255)
    return 'Sorry, name must be at max 255 characters.'
  if (name.match(/[/\\:?*"|]/))
    return 'The following characters are not allowed:  / : ? * " |'
}

/**
 * Returns sort filter config and sort keys for a folder.
 * @original $$v8
 */
export function getSortFilterConfig(folderId: string, data: { folders: { byId: Record<string, any>, $$default: any } }): { tileSortFilterConfig: any, sortKeys: SortField[] } {
  return {
    tileSortFilterConfig: data.folders.byId[folderId] || data.folders.$$default,
    sortKeys: [SortField.NAME, SortField.CREATED_AT, SortField.TOUCHED_AT],
  }
}

/**
 * Generates a project URL based on access and context.
 * @original $$A9
 */
export function getProjectUrl(folderId: string, projectId: string | null, teamId: string | null, context: any, hasAccess: boolean, callsite: string, enableShadowRead: boolean): string {
  const canView = teamId && canViewTeam(teamId, context)
  const shadowReadUrl = setupShadowRead({
    label: adminPermissionConfig.planBasedFolderUrl.hasTeamAccess,
    oldValue: canView,
    newValue: hasAccess,
    enableShadowRead,
    enableFullRead: isReduxDeprecationCutover(ConfigGroups.GROUP_7),
    maxReports: 5,
    contextArgs: {
      currentTeamId: context.currentTeamId,
      currentOrgId: context.currentUserOrgId,
      currentUserId: context.user?.id ?? null,
      openFileKey: context.openFile?.key ?? null,
      teamIdArg: teamId,
      folderId,
      openFileLoadedFromLiveGraph: enableShadowRead,
      callsite,
    },
  })
  if (projectId)
    return `${location.origin}/files/${projectId}/project/${folderId}`
  if (shadowReadUrl)
    return `${location.origin}/files/team/${teamId}/project/${folderId}`
  if (context.user?.personal_drafts_folder_id === folderId)
    return `${location.origin}/files/drafts-to-move`
  return `${location.origin}/files/project/${folderId}`
}

/**
 * Checks if folder is a team folder (has team_id, no path).
 * @original $$x17
 */
export function isTeamFolder(folder: any): boolean {
  return !!folder && !!folder.team_id && !folder.path
}

/**
 * Checks if folder is a team folder (has teamId, no path).
 * @original $$N12
 */
export function isTeamFolderV2(folder: any): boolean {
  return !!folder && !!folder.teamId && !folder.path
}

// Exported aliases for backward compatibility
export const CI = getSidebarPath
export const D = getProcessedValueByKey
export const Gi = isRootPath
export const N5 = hasKey
export const S = getSidebarStringOrValue
export const SS = validateFolderName
export const T9 = hasRootPath
export const VA = hasRootPathOptional
export const ZN = getSortFilterConfig
export const cU = getProjectUrl
export const d = generateTempId
export const gj = findOwnerFolder
export const jd = isTeamFolderV2
export const n3 = isOrgFolderV2
export const oq = getOrgIdFromFolderOrTeam
export const qF = isTempId
export const sp = isOrgFolder
export const ye = isTeamFolder
