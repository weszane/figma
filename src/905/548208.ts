/**
 * Enum for navigation routes in the app.
 * Original variable: $$n0
 */
export enum NavigationRoutes {
  HOME = "",
  MEMBERS = "members",
  SETTINGS = "settings",
  PROFILE = "profile",
  BILLING = "billing",
}

/**
 * Enum for dashboard sections.
 * Original variable: $$r2
 */
export enum DashboardSections {
  DASHBOARD = "dashboard",
  MEMBERS = "members",
  DRAFTS = "drafts",
  BILLING = "billing",
  SETTINGS = "settings",
  CONTENT = "content",
}

/**
 * Enum for member-related sections.
 * Original variable: $$a1
 */
export enum MemberSections {
  ABANDONED_DRAFTS = "abandoned-drafts",
  CONNECTED_PROJECTS = "connected-projects",
}

/**
 * Enum for billing-related sections.
 * Original variable: $$s3
 */
export enum BillingSections {
  OVERVIEW = "overview",
  INVOICES = "invoices",
}

// Refactored exports with original export names for traceability
export const A$ = NavigationRoutes;
export const F9 = MemberSections;
export const Iv = DashboardSections;
export const pu = BillingSections;
