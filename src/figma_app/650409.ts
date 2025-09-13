/**
 * Enum for dashboard sections.
 * Original variable: $$n1
 */
export enum DashboardSection {
  DASHBOARD = "",
  WORKSPACES = "workspaces",
  TEAMS = "teams",
  MEMBERS = "members",
  CONTENT = "content",
  ACTIVITY = "activity",
  BILLING = "billing",
  RESOURCES = "resources",
  SETTINGS = "settings",
}

/**
 * Enum for workspace tabs.
 * Original variable: $$i3
 */
export enum WorkspaceTab {
  WORKSPACES = "workspaces",
  TEAMS = "teams",
  ABANDONED_DRAFTS = "abandoned-drafts",
  CONNECTED_PROJECTS = "connected-projects",
  FILE_LIST_BETA = "file-list-beta",
  ACCESS_INSIGHT = "access-insight",
}

/**
 * Enum for resource types.
 * Original variable: $$a4
 */
export enum FigResourceType {
  LIBRARIES = "libraries",
  SHARED_FONTS = "fonts",
  APPROVED_PLUGINS = "plugins",
  APPROVED_WIDGETS = "widgets",
}

/**
 * Enum for billing sections.
 * Original variable: $$s0
 */
export enum BillingSectionEnum {
  OVERVIEW = "overview",
  INVOICES = "invoices",
  BILLING_GROUPS = "billing-groups",
}

/**
 * Enum for member views.
 * Original variable: $$o2
 */
export enum MemberView {
  ALL_MEMBERS = "all-members",
  USER_GROUPS = "user-groups",
}

// Refactored exports to match new enum names
export const G_ = BillingSectionEnum; // $$s0
export const J7 = DashboardSection; // $$n1
export const M7 = MemberView; // $$o2
export const SN = WorkspaceTab; // $$i3
export const _d = FigResourceType; // $$a4
