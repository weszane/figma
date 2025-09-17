/**
 * Dropdown types for community profile actions.
 * @original $$n3
 */
export enum DropdownCommunityType {
  COMMUNITY = 'community',
}

/**
 * Dropdown menu types.
 * @original $$a1, $$s0
 */
export const DROPDOWN_TYPE_GENERIC_COMMENT_MENU = 'DROPDOWN_TYPE_GENERIC_COMMENT_MENU'
export const DROPDOWN_TYPE_COMMUNITY_PROFILE_MORE_ACTIONS_MENU = 'DROPDOWN_TYPE_COMMUNITY_PROFILE_MORE_ACTIONS_MENU'

/**
 * Dropdown enable states.
 * @original $$o2
 */
export enum DropdownEnableState {
  ALL_DISABLED = 'all_disabled',
  PINNED_DISABLED = 'pinned_disabled',
  ENABLED = 'enabled',
}

/**
 * Dropdown report actions.
 * @original $$l4
 */
export enum DropdownReportAction {
  REPORT = 'report',
  REPORT_AND_HIDE = 'report_and_hide',
}

/**
 * Timeout value for dropdown actions.
 * @original $$i5
 */
export const DROPDOWN_ACTION_TIMEOUT = 2000

// Export refactored names for external usage
export const ej = DropdownCommunityType
export const Ng = DROPDOWN_TYPE_GENERIC_COMMENT_MENU
export const N9 = DROPDOWN_TYPE_COMMUNITY_PROFILE_MORE_ACTIONS_MENU
export const Ni = DropdownEnableState
export const nI = DropdownReportAction
export const wT = DROPDOWN_ACTION_TIMEOUT
