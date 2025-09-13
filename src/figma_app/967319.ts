import { FUserRoleType } from '../figma_app/191312'



/**
 * Enum for last edit periods.
 * @originalName $$g12
 */
export const LastEditPeriod = {
  '3mo': '3mo',
  '6mo': '6mo',
  '1yr': '1yr',
} as const


/**
 * Enum for sort directions.
 * @originalName $$i9
 */
export const SortDirection = {
  ASC: 'asc',
  DESC: 'desc',
} as const

/**
 * Enum for column names.
 * @originalName $$a4
 */
export const ColumnName = {
  NAME: 'name',
  LAST_ACTIVE: 'last_active',
  LAST_DESIGN_ACTIVE: 'last_design_active',
  LAST_WHITEBOARD_ACTIVE: 'last_whiteboard_active',
  LAST_EDIT: 'last_edit',
  LAST_DESIGN_EDIT: 'last_design_edit',
  LAST_WHITEBOARD_EDIT: 'last_whiteboard_edit',
  DESIGN_ROLE: 'design_role',
  DESIGN_UPGRADE_DATE: 'design_upgrade_date',
  WHITEBOARD_ROLE: 'whiteboard_role',
  WHITEBOARD_UPGRADE_DATE: 'whiteboard_upgrade_date',
  LICENSE_GROUP: 'license_group',
  WORKSPACE: 'workspace',
  SCIM_DATA: 'scim_data',
  DESIGN_UPGRADE_REASON: 'design_upgrade_reason',
  WHITEBOARD_UPGRADE_REASON: 'whiteboard_upgrade_reason',
  BILLABLE_PRODUCT_SEAT: 'seat',
  SEARCH_SCORE: 'score',
  DEV_MODE_ROLE: 'dev_mode_role',
  DEV_MODE_UPGRADE_DATE: 'dev_mode_upgrade_date',
  UPGRADE_REASON: 'upgrade_reason',
  UPGRADE_DATE: 'upgrade_date',
} 

/**
 * List of date-related columns.
 * @originalName $$s2
 */
export const DateColumns = [
  'last_active',
  'last_design_active',
  'last_whiteboard_active',
  'last_edit',
  'last_design_edit',
  'last_whiteboard_edit',
  'design_upgrade_date',
  'whiteboard_upgrade_date',
  'dev_mode_upgrade_date',
  'upgrade_date',
]

/**
 * Default sort configuration.
 * @originalName $$o11
 */
export const DefaultSortConfig = {
  columnName: 'name',
  isReversed: false,
}

/**
 * Enum for filter keys.
 * @originalName $$l10
 */
export const FilterKeys = {
  licenseGroupFilter: 'licenseGroupFilter',
  workspaceFilter: 'workspaceFilter',
  idpGroupFilter: 'idpGroupFilter',
  permissionFilter: 'permissionFilter',
  lastEditFilter: 'lastEditFilter',
  newEditorFilter: 'newEditorFilter',
  seatTypeFilter: 'seatTypeFilter',
  seatChangesFilter: 'seatChangesFilter',
} as const

/**
 * Enum for group keys.
 * @originalName $$d5
 */
export const GroupKeys = {
  workspace: 'workspace',
  billingGroup: 'billingGroup',
  idpGroup: 'idpGroup',
  accountType: 'accountType',
  lastEdit: 'lastEdit',
  newEditor: 'newEditor',
  seatType: 'seatType',
  seatChanges: 'seatChanges',
} as const

/**
 * Default filter values.
 * @originalName $$c1
 */
export const DefaultFilters = {
  licenseGroupFilter: null,
  workspaceFilter: null,
  idpGroupFilter: null,
  permissionFilter: null,
  lastEditFilter: null,
  newEditorFilter: false,
  seatTypeFilter: null,
  seatChangesFilter: null,
}

/**
 * Mapping from group keys to filter keys.
 * @originalName $$u0
 */
export const GroupToFilterMap = {
  billingGroup: 'licenseGroupFilter',
  workspace: 'workspaceFilter',
  idpGroup: 'idpGroupFilter',
  accountType: 'permissionFilter',
  lastEdit: 'lastEditFilter',
  newEditor: 'newEditorFilter',
  seatType: 'seatTypeFilter',
  seatChanges: 'seatChangesFilter',
}

/**
 * Mapping from filter keys to group keys.
 * @originalName $$p8
 */
export const FilterToGroupMap = {
  licenseGroupFilter: 'billingGroup',
  workspaceFilter: 'workspace',
  idpGroupFilter: 'idpGroup',
  permissionFilter: 'accountType',
  lastEditFilter: 'lastEdit',
  newEditorFilter: 'newEditor',
  seatTypeFilter: 'seatType',
  seatChangesFilter: 'seatChanges',
}

/**
 * Returns default permission and lastEdit counts.
 * @originalName $$_3
 */
export function getDefaultCounts() {
  return {
    permission: {
      guest: 0,
      member: 0,
      admin: 0,
      provisional: 0,
      unverified: 0,
    },
    lastEdit: {
      [LastEditPeriod['3mo']]: 0,
      [LastEditPeriod['6mo']]: 0,
      [LastEditPeriod['1yr']]: 0,
    },
  }
}

/**
 * Special user types.
 * @originalName $$h7
 */
export const SpecialUserTypes = {
  IDP: 'provisional',
  UNVERIFIED: 'unverified',
}

/**
 * User role mapping.
 * @originalName $$m6
 */
export const UserRoleMap = {
  [FUserRoleType.ADMIN]: FUserRoleType.ADMIN,
  [FUserRoleType.GUEST]: FUserRoleType.GUEST,
  [FUserRoleType.MEMBER]: FUserRoleType.MEMBER,
  [SpecialUserTypes.IDP]: SpecialUserTypes.IDP,
  [SpecialUserTypes.UNVERIFIED]: SpecialUserTypes.UNVERIFIED,
}


/**
 * Checks if an object is a user object.
 * @param obj - Object to check.
 * @returns True if object has a user_id property.
 * @originalName $$f13
 */
export function isUserObject(obj: any): boolean {
  return 'user_id' in obj && obj.user_id !== undefined
}

// Export aliases for backward compatibility and refactored names
export const GX = GroupToFilterMap
export const J0 = DefaultFilters
export const LU = DateColumns
export const MF = getDefaultCounts
export const Od = ColumnName
export const Oo = GroupKeys
export const U9 = UserRoleMap
export const WH = SpecialUserTypes
export const cC = FilterToGroupMap
export const dy = SortDirection
export const e5 = FilterKeys
export const oU = DefaultSortConfig
export const rk = LastEditPeriod
export const wQ = isUserObject
