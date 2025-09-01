import { xb } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { t as _$$t } from "../905/303541";
import { J7, M7, G_, _d, SN } from "../figma_app/650409";
export function $$o0(e, t) {
  switch (e) {
    case J7.ACTIVITY:
      return _$$t("org_admin_tab.activity");
    case J7.DASHBOARD:
      return _$$t("org_admin_tab.dashboard");
    case J7.WORKSPACES:
      return _$$t("org_admin_tab.workspaces");
    case J7.TEAMS:
      return _$$t("org_admin_tab.teams");
    case J7.MEMBERS:
      if (!getFeatureFlags().user_groups) return _$$t("org_admin_tab.members");
      switch (t) {
        case M7.ALL_MEMBERS:
          return _$$t("org_admin_tab.all_members");
        case M7.USER_GROUPS:
          return _$$t("org_admin_tab.user_groups");
        default:
          return _$$t("org_admin_tab.people");
      }
    case J7.BILLING:
      switch (t) {
        case G_.OVERVIEW:
          return _$$t("org_admin_tab.overview");
        case G_.BILLING_GROUPS:
          return _$$t("org_admin_tab.billing_groups");
        case G_.INVOICES:
          return _$$t("org_admin_tab.invoices");
        default:
          return _$$t("org_admin_tab.billing");
      }
    case J7.RESOURCES:
      switch (t) {
        case _d.LIBRARIES:
          return _$$t("resources_tab.libraries");
        case _d.SHARED_FONTS:
          return _$$t("resources_tab.fonts");
        case _d.APPROVED_PLUGINS:
          return _$$t("resources_tab.approved_plugins");
        case _d.APPROVED_WIDGETS:
          return _$$t("resources_tab.approved_widgets");
        default:
          return _$$t("org_admin_tab.resources");
      }
    case J7.SETTINGS:
      return _$$t("org_admin_tab.settings");
    case J7.CONTENT:
      switch (t) {
        case SN.WORKSPACES:
          return _$$t("org_admin_tab.workspaces");
        case SN.TEAMS:
          return _$$t("org_admin_tab.teams");
        case SN.ABANDONED_DRAFTS:
          return _$$t("org_admin_tab.abandoned_drafts");
        case SN.CONNECTED_PROJECTS:
          return _$$t("org_admin_tab.connected_projects");
        case SN.FILE_LIST_BETA:
          return "File list (beta)";
        case SN.ACCESS_INSIGHT:
          return "Access insights (beta)";
        default:
          return _$$t("org_admin_tab.content");
      }
    default:
      xb(e);
  }
}
export const O = $$o0;