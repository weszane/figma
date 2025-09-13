import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { getI18nString } from "../905/303541";
import { DashboardSection, MemberView, BillingSectionEnum, FigResourceType, WorkspaceTab } from "../figma_app/650409";
export function $$o0(e, t) {
  switch (e) {
    case DashboardSection.ACTIVITY:
      return getI18nString("org_admin_tab.activity");
    case DashboardSection.DASHBOARD:
      return getI18nString("org_admin_tab.dashboard");
    case DashboardSection.WORKSPACES:
      return getI18nString("org_admin_tab.workspaces");
    case DashboardSection.TEAMS:
      return getI18nString("org_admin_tab.teams");
    case DashboardSection.MEMBERS:
      if (!getFeatureFlags().user_groups) return getI18nString("org_admin_tab.members");
      switch (t) {
        case MemberView.ALL_MEMBERS:
          return getI18nString("org_admin_tab.all_members");
        case MemberView.USER_GROUPS:
          return getI18nString("org_admin_tab.user_groups");
        default:
          return getI18nString("org_admin_tab.people");
      }
    case DashboardSection.BILLING:
      switch (t) {
        case BillingSectionEnum.OVERVIEW:
          return getI18nString("org_admin_tab.overview");
        case BillingSectionEnum.BILLING_GROUPS:
          return getI18nString("org_admin_tab.billing_groups");
        case BillingSectionEnum.INVOICES:
          return getI18nString("org_admin_tab.invoices");
        default:
          return getI18nString("org_admin_tab.billing");
      }
    case DashboardSection.RESOURCES:
      switch (t) {
        case FigResourceType.LIBRARIES:
          return getI18nString("resources_tab.libraries");
        case FigResourceType.SHARED_FONTS:
          return getI18nString("resources_tab.fonts");
        case FigResourceType.APPROVED_PLUGINS:
          return getI18nString("resources_tab.approved_plugins");
        case FigResourceType.APPROVED_WIDGETS:
          return getI18nString("resources_tab.approved_widgets");
        default:
          return getI18nString("org_admin_tab.resources");
      }
    case DashboardSection.SETTINGS:
      return getI18nString("org_admin_tab.settings");
    case DashboardSection.CONTENT:
      switch (t) {
        case WorkspaceTab.WORKSPACES:
          return getI18nString("org_admin_tab.workspaces");
        case WorkspaceTab.TEAMS:
          return getI18nString("org_admin_tab.teams");
        case WorkspaceTab.ABANDONED_DRAFTS:
          return getI18nString("org_admin_tab.abandoned_drafts");
        case WorkspaceTab.CONNECTED_PROJECTS:
          return getI18nString("org_admin_tab.connected_projects");
        case WorkspaceTab.FILE_LIST_BETA:
          return "File list (beta)";
        case WorkspaceTab.ACCESS_INSIGHT:
          return "Access insights (beta)";
        default:
          return getI18nString("org_admin_tab.content");
      }
    default:
      throwTypeError(e);
  }
}
export const O = $$o0;