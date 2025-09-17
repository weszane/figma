import { getI18nString, renderI18nText } from "../905/303541";
import { UpgradeAction } from "../905/370443";
import { FPlanNameType } from "../figma_app/191312";
import { STANDARD_LIMIT, PRIMARY_LIMIT } from "../figma_app/345997";
import { UpsellModalType } from "../905/165519";
import { jsx } from "react/jsx-runtime";
import { s as _$$s } from "../cssbuilder/589278";
import { ex } from "../905/524523";
let u = ex("plan_comparison_feature_custom_color_palettes", function () {
  let e = jsx("span", {
    className: _$$s.colorTextFigjam.fontMedium.$,
    children: getI18nString("plan_comparison.chart.callout.figjam_board")
  });
  return jsx("div", {
    className: _$$s.alignCenter.$,
    children: renderI18nText("plan_comparison.chart.custom_color_palettes.details_with_callout", {
      figJamCallout: e
    })
  });
});
let p = ex("plan_comparison_feature_custom_templates", function () {
  let e = jsx("span", {
    className: _$$s.colorTextFigjam.fontMedium.$,
    children: getI18nString("plan_comparison.chart.callout.figjam")
  });
  return jsx("div", {
    className: _$$s.alignCenter.$,
    children: renderI18nText("plan_comparison.chart.custom_templates_v2.details_with_callout", {
      figJamCallout: e
    })
  });
});
let m = ex("plan_comparison_feature_open_sessions", function () {
  let e = jsx("span", {
    className: _$$s.colorTextFigjam.fontMedium.$,
    children: getI18nString("plan_comparison.chart.callout.figjam_board")
  });
  return jsx("div", {
    className: _$$s.alignCenter.$,
    children: renderI18nText("plan_comparison.chart.open_sessions.details_with_callout", {
      figJamCallout: e
    })
  });
});
let h = ex("plan_comparison_feature_voting", function () {
  let e = jsx("span", {
    className: _$$s.colorTextFigjam.fontMedium.$,
    children: getI18nString("plan_comparison.chart.callout.figjam_board")
  });
  return jsx("div", {
    className: _$$s.alignCenter.$,
    children: renderI18nText("plan_comparison.chart.voting.details_with_callout", {
      figJamCallout: e
    })
  });
});
export var $$g1 = (e => (e.MOST_POPULAR = "MOST_POPULAR", e.RECOMMENDED = "RECOMMENDED", e.MOST_VALUED = "MOST_VALUED", e))($$g1 || {});
let $$f8 = {
  MOST_POPULAR: () => getI18nString("plan_comparison.plans.most_popular"),
  RECOMMENDED: () => getI18nString("plan_comparison.plans.recommended"),
  MOST_VALUED: () => getI18nString("plan_comparison.plans.most_valued")
};
let _ = {
  name: () => getI18nString("plan_details.professional"),
  description: () => getI18nString("plan_comparison.plans.pro.description"),
  buttonText: () => getI18nString("plan_comparison.plans.pro.choose_button"),
  hasAnnualOnlyMessage: !1,
  highlightBadgeText: $$f8.MOST_POPULAR,
  canContactSales: !1,
  trackingDescriptor: UpgradeAction.UPGRADE_TO_PROFESSIONAL
};
let $$A10 = {
  [FPlanNameType.STARTER]: {
    name: () => getI18nString("plan_details.starter"),
    description: () => getI18nString("plan_comparison.plans.starter.description"),
    buttonText: () => getI18nString("plan_comparison.plans.starter.choose_button"),
    canContactSales: !1,
    hasAnnualOnlyMessage: !1,
    trackingDescriptor: void 0
  },
  [FPlanNameType.PRO]: {
    ..._
  },
  [FPlanNameType.ORG]: {
    name: () => getI18nString("plan_details.organization"),
    description: () => getI18nString("plan_comparison.plans.org.description"),
    buttonText: () => getI18nString("plan_comparison.plans.org.choose_button"),
    highlightBadgeText: e => $$f8[e](),
    canContactSales: !0,
    hasAnnualOnlyMessage: !0,
    trackingDescriptor: UpgradeAction.UPGRADE_TO_ORGANIZATION
  },
  [FPlanNameType.ENTERPRISE]: {
    name: () => getI18nString("plan_details.enterprise"),
    description: () => getI18nString("plan_comparison.plans.ent.description"),
    buttonText: () => getI18nString("plan_comparison.plans.ent.choose_button"),
    canContactSales: !1,
    hasAnnualOnlyMessage: !0,
    trackingDescriptor: UpgradeAction.CONTACT_SALES
  },
  [FPlanNameType.STUDENT]: {
    ..._,
    additionalMessage: () => getI18nString("plan_details.free_for_students_and_educators"),
    trackingDescriptor: UpgradeAction.UPGRADE_TO_EDUCATION
  }
};
let $$y11 = [FPlanNameType.STARTER, FPlanNameType.PRO, FPlanNameType.ORG];
let $$b13 = [FPlanNameType.STARTER, FPlanNameType.STUDENT, FPlanNameType.ORG];
let $$v4 = [FPlanNameType.PRO, FPlanNameType.ORG, FPlanNameType.ENTERPRISE];
export var $$I0 = (e => (e.USAGE_LIMITS = "usage-limits", e.USAGE_LIMITS_V2 = "usage-limits-v2", e.VERSION_HISTORY = "version-history", e.LIBRARIES = "libraries", e.SHARED_LIBRARIES = "shared-libraries", e.CUSTOM_PERMISSIONS = "custom-permissions", e.AUDIO_CONVERSATIONS = "audio-conversations", e.SECURITY = "security", e.DESIGN_SYSTEM_ANALYTICS = "design-system-analytics", e.CUSTOM_TEMPLATES = "custom-templates", e.UNIFIED_ADMIN_AND_BILLING = "unified-admin-and-billing", e.BRANCHING_AND_MERGING = "branching-and-merging", e.SINGLE_SIGN_ON = "single-sign-on", e.WORKSPACES = "workspaces", e.GUEST_ACCESS_CONTROLS = "guest-access-controls", e.ONBOARDING = "onboarding", e.ADVANCED_PROTOTYPING = "advanced-prototyping", e.ADVANCED_INSPECTION = "advanced-inspection", e.CODEGEN_LANGUAGES = "codegen-languages", e.ANNOTATIONS_AND_STATUS = "annotations-and-status", e.COMPARE_CHANGES = "compare-changes", e.PLUGINS_AND_EXTENSIONS = "plugins-and-extensions", e.PRIVATE_PLUGINS = "private-plugins", e.DEV_MODE = "dev-mode", e.VIDEO_IN_PROTOTYPE = "video-in-prototype", e.PROJECT_AND_TEAM_TRANSFER = "project-and-team-transfer", e.PRIVATE_PROJECTS = "private-projects", e.PROTOTYPE_SHARING_PERMISSIONS = "prototype-sharing-permissions", e.DESIGN_SYSTEM_MODES = "design-system-modes", e.PASSWORD_PROTECTION = "password-protection", e.DEFAULT_ROLES = "default-roles", e.OPEN_SESSIONS = "open-sessions", e.VOTING = "voting", e.CUSTOM_TEMPLATES_V2 = "custom-templates-v2", e.CUSTOM_COLOR_PALETTES = "custom-color-palettes", e.SHARED_FONTS = "shared-fonts", e.CENTRALIZED_ADMIN = "centralized-admin", e.DOMAIN_CAPTURE = "domain-capture", e.LINK_ACCESS_CONTROL = "link-access-control", e.CENTRALIZED_CONTENT_MANAGEMENT = "centralized-content-management", e.ACTIVITY_LOGS = "activity-logs", e.PLUGIN_WIDGET_MANAGEMENT = "plugin-widget-management", e.DEV_MODE_V2 = "dev-mode-v2", e.AUDIO_CONVERSATIONS_V2 = "audio-conversations-v2", e.DESIGN_SYSTEM_ANALYTICS_V2 = "design-system-analytics-v2", e.SINGLE_SIGN_ON_V2 = "single-sign-on-v2", e.PRIVATE_PLUGINS_V2 = "private-plugins-v2", e))($$I0 || {});
let $$E5 = {
  "usage-limits": {
    id: "Usage limits",
    name: () => getI18nString("plan_comparison.chart.usage_limits.name"),
    details: () => getI18nString("plan_comparison.chart.usage_limits.details")
  },
  "usage-limits-v2": {
    id: "Usage limits",
    name: () => getI18nString("plan_comparison.chart.usage_limits.name"),
    details: () => getI18nString("plan_comparison.chart.usage_limits.details")
  },
  "version-history": {
    id: "Version history",
    name: () => getI18nString("plan_comparison.chart.version_history.name"),
    details: () => getI18nString("plan_comparison.chart.version_history.details")
  },
  libraries: {
    id: "Libraries",
    name: () => getI18nString("plan_comparison.chart.libraries.name"),
    details: () => getI18nString("plan_comparison.chart.libraries.details")
  },
  "shared-libraries": {
    id: "Shared libraries",
    name: () => getI18nString("plan_comparison.chart.shared_libraries.name"),
    details: () => getI18nString("plan_comparison.chart.shared_libraries.details")
  },
  "custom-permissions": {
    id: "Custom file and user permissions",
    name: () => getI18nString("plan_comparison.chart.custom_permissions.name"),
    details: () => getI18nString("plan_comparison.chart.custom_permissions.details")
  },
  "audio-conversations": {
    id: "Audio conversations",
    name: () => getI18nString("plan_comparison.chart.audio_conversations.name"),
    details: () => getI18nString("plan_comparison.chart.audio_conversations.details")
  },
  security: {
    id: "SSO, advanced security",
    name: () => getI18nString("plan_comparison.chart.security.name"),
    details: () => getI18nString("plan_comparison.chart.security.details")
  },
  "design-system-analytics": {
    id: "Design system analytics",
    name: () => getI18nString("plan_comparison.chart.design_system_analytics.name"),
    details: () => getI18nString("plan_comparison.chart.design_system_analytics.details")
  },
  "custom-templates": {
    id: "Custom templates",
    name: () => getI18nString("plan_comparison.chart.custom_templates.name"),
    details: () => getI18nString("plan_comparison.chart.custom_templates.details")
  },
  "unified-admin-and-billing": {
    id: "Unified admin and billing",
    name: () => getI18nString("plan_comparison.chart.unified_admin_and_billing.name"),
    details: () => getI18nString("plan_comparison.chart.unified_admin_and_billing.details")
  },
  "branching-and-merging": {
    id: "Branching and merging",
    name: () => getI18nString("plan_comparison.chart.branching_and_merging.name"),
    details: () => getI18nString("plan_comparison.chart.branching_and_merging.details")
  },
  "single-sign-on": {
    id: "Single sign on",
    name: () => getI18nString("plan_comparison.chart.single_sign_on.name"),
    details: () => getI18nString("plan_comparison.chart.single_sign_on.details")
  },
  workspaces: {
    id: "Workspaces",
    name: () => getI18nString("plan_comparison.chart.workspaces.name"),
    details: () => getI18nString("plan_comparison.chart.workspaces.details")
  },
  "guest-access-controls": {
    id: "Guest access controls",
    name: () => getI18nString("plan_comparison.chart.guest_access_controls.name"),
    details: () => getI18nString("plan_comparison.chart.guest_access_controls.details")
  },
  onboarding: {
    id: "Onboarding and account support",
    name: () => getI18nString("plan_comparison.chart.onboarding.name"),
    details: () => getI18nString("plan_comparison.chart.onboarding.details")
  },
  "advanced-prototyping": {
    id: "Advanced prototyping",
    name: () => getI18nString("plan_comparison.chart.advanced_prototyping.name"),
    details: () => getI18nString("plan_comparison.chart.advanced_prototyping.details")
  },
  "advanced-inspection": {
    id: "Advanced inspection",
    name: () => getI18nString("plan_comparison.chart.dev_mode.advanced_inspection.name"),
    details: () => getI18nString("plan_comparison.chart.dev_mode.advanced_inspection.details")
  },
  "codegen-languages": {
    id: "More codegen languages",
    name: () => getI18nString("plan_comparison.chart.dev_mode.codegen_languages.name"),
    details: () => getI18nString("plan_comparison.chart.dev_mode.codegen_languages.details")
  },
  "annotations-and-status": {
    id: "Annotations and status",
    name: () => getI18nString("plan_comparison.chart.dev_mode.annotations_and_status.name"),
    details: () => getI18nString("plan_comparison.chart.dev_mode.annotations_and_status.details")
  },
  "compare-changes": {
    id: "Compare changes",
    name: () => getI18nString("plan_comparison.chart.dev_mode.compare_changes.name"),
    details: () => getI18nString("plan_comparison.chart.dev_mode.compare_changes.details")
  },
  "plugins-and-extensions": {
    id: "Plugins and extensions",
    name: () => getI18nString("plan_comparison.chart.dev_mode.plugins_and_extensions.name"),
    details: () => getI18nString("plan_comparison.chart.dev_mode.plugins_and_extensions.details")
  },
  "private-plugins": {
    id: "Private plugins",
    name: () => getI18nString("plan_comparison.chart.dev_mode.private_plugins.name"),
    details: () => getI18nString("plan_comparison.chart.dev_mode.private_plugins.details")
  },
  "dev-mode": {
    id: "Dev Mode",
    name: () => getI18nString("plan_comparison.chart.dev_mode.name"),
    details: () => getI18nString("plan_comparison.chart.dev_mode.details")
  },
  "video-in-prototype": {
    id: "Video in Prototypes",
    name: () => getI18nString("plan_comparison.chart.video_in_prototype.name"),
    details: () => getI18nString("plan_comparison.chart.video_in_prototype.details")
  },
  "project-and-team-transfer": {
    id: "Project transfer",
    name: () => getI18nString("plan_comparison.chart.project_transfer.name"),
    details: () => getI18nString("plan_comparison.chart.project_transfer.details")
  },
  "private-projects": {
    id: "Private projects",
    name: () => getI18nString("plan_comparison.chart.private_projects.name"),
    details: () => getI18nString("plan_comparison.chart.private_projects.details")
  },
  "prototype-sharing-permissions": {
    id: "Prototype sharing permissions",
    name: () => getI18nString("plan_comparison.chart.prototype_sharing_permissions.name"),
    details: () => getI18nString("plan_comparison.chart.prototype_sharing_permissions.details")
  },
  "design-system-modes": {
    id: "Design system modes",
    name: () => getI18nString("plan_comparison.chart.design_system_modes.name"),
    details: () => getI18nString("plan_comparison.chart.design_system_modes.details")
  },
  "password-protection": {
    id: "Password protection",
    name: () => getI18nString("plan_comparison.chart.password_protection.name"),
    details: () => getI18nString("plan_comparison.chart.password_protection.details")
  },
  "default-roles": {
    id: "Default roles",
    name: () => getI18nString("plan_comparison.chart.default_roles.name"),
    details: () => getI18nString("plan_comparison.chart.default_roles.details")
  },
  "open-sessions": {
    id: "Open sessions",
    name: () => getI18nString("plan_comparison.chart.open_sessions.name"),
    tooltipSpecialKey: m
  },
  voting: {
    id: "Voting",
    name: () => getI18nString("plan_comparison.chart.voting.name"),
    tooltipSpecialKey: h
  },
  "custom-templates-v2": {
    id: "Custom templates",
    name: () => getI18nString("plan_comparison.chart.custom_templates_v2.name"),
    tooltipSpecialKey: p
  },
  "custom-color-palettes": {
    id: "Custom color palettes",
    name: () => getI18nString("plan_comparison.chart.custom_color_palettes.name"),
    tooltipSpecialKey: u
  },
  "shared-fonts": {
    id: "Shared fonts",
    name: () => getI18nString("plan_comparison.chart.shared_fonts.name"),
    details: () => getI18nString("plan_comparison.chart.shared_fonts.details")
  },
  "centralized-admin": {
    id: "Centralized admin",
    name: () => getI18nString("plan_comparison.chart.centralized_admin.name"),
    details: () => getI18nString("plan_comparison.chart.centralized_admin.details")
  },
  "domain-capture": {
    id: "Domain capture",
    name: () => getI18nString("plan_comparison.chart.domain_capture.name"),
    details: () => getI18nString("plan_comparison.chart.domain_capture.details")
  },
  "link-access-control": {
    id: "Link access control",
    name: () => getI18nString("plan_comparison.chart.link_access_control.name"),
    details: () => getI18nString("plan_comparison.chart.link_access_control.details")
  },
  "centralized-content-management": {
    id: "Centralized content management",
    name: () => getI18nString("plan_comparison.chart.centralized_content_management.name"),
    details: () => getI18nString("plan_comparison.chart.centralized_content_management.details")
  },
  "activity-logs": {
    id: "Activity logs",
    name: () => getI18nString("plan_comparison.chart.activity_logs.name"),
    details: () => getI18nString("plan_comparison.chart.activity_logs.details")
  },
  "plugin-widget-management": {
    id: "Plugin widget management",
    name: () => getI18nString("plan_comparison.chart.plugin_widget_management.name"),
    details: () => getI18nString("plan_comparison.chart.plugin_widget_management.details")
  },
  "dev-mode-v2": {
    id: "Dev Mode",
    name: () => getI18nString("plan_comparison.chart.dev_mode_v2.name"),
    details: () => getI18nString("plan_comparison.chart.dev_mode_v2.details")
  },
  "audio-conversations-v2": {
    id: "Audio conversations",
    name: () => getI18nString("plan_comparison.chart.audio_conversations_v2.name"),
    details: () => getI18nString("plan_comparison.chart.audio_conversations_v2.details")
  },
  "design-system-analytics-v2": {
    id: "Design system analytics",
    name: () => getI18nString("plan_comparison.chart.design_system_analytics_v2.name"),
    details: () => getI18nString("plan_comparison.chart.design_system_analytics_v2.details")
  },
  "single-sign-on-v2": {
    id: "Single sign on",
    name: () => getI18nString("plan_comparison.chart.single_sign_on_v2.name"),
    details: () => getI18nString("plan_comparison.chart.single_sign_on_v2.details")
  },
  "private-plugins-v2": {
    id: "Private plugins",
    name: () => getI18nString("plan_comparison.chart.private_plugins_v2.name"),
    details: () => getI18nString("plan_comparison.chart.private_plugins_v2.details")
  }
};
let $$x2 = ["usage-limits", "version-history", "libraries", "custom-permissions", "dev-mode", "audio-conversations", "security", "design-system-analytics", "custom-templates"];
let $$S12 = ["usage-limits-v2", "shared-libraries", "dev-mode", "unified-admin-and-billing", "branching-and-merging", "design-system-analytics", "single-sign-on", "workspaces", "guest-access-controls", "onboarding"];
let $$w3 = ["usage-limits", "advanced-inspection", "codegen-languages", "annotations-and-status", "compare-changes", "plugins-and-extensions", "private-plugins"];
let C = {
  "usage-limits": () => getI18nString("plan_comparison.chart.usage_limits.unlimited"),
  "usage-limits-v2": () => getI18nString("plan_comparison.chart.usage_limits_v2.unlimited"),
  "version-history": !0,
  libraries: () => getI18nString("plan_comparison.chart.libraries.team_wide"),
  "shared-libraries": () => getI18nString("plan_comparison.chart.libraries.team_wide"),
  "custom-permissions": !0,
  "audio-conversations": !0,
  security: !1,
  "design-system-analytics": !1,
  "custom-templates": !1,
  "unified-admin-and-billing": !1,
  "branching-and-merging": !1,
  "single-sign-on": !1,
  workspaces: !1,
  "guest-access-controls": !1,
  onboarding: !1,
  "advanced-prototyping": !0,
  "advanced-inspection": !0,
  "codegen-languages": !0,
  "annotations-and-status": !0,
  "compare-changes": !0,
  "plugins-and-extensions": !0,
  "private-plugins": !1,
  "dev-mode": !0,
  "video-in-prototype": !0,
  "project-and-team-transfer": !0,
  "private-projects": !0,
  "prototype-sharing-permissions": !0,
  "design-system-modes": !0,
  "password-protection": !0,
  "default-roles": !0,
  "open-sessions": !0,
  voting: !0,
  "custom-templates-v2": !1,
  "custom-color-palettes": !1,
  "shared-fonts": !1,
  "centralized-admin": !1,
  "domain-capture": !1,
  "link-access-control": !1,
  "centralized-content-management": !1,
  "activity-logs": !1,
  "plugin-widget-management": !1,
  "dev-mode-v2": !0,
  "audio-conversations-v2": !0,
  "design-system-analytics-v2": !1,
  "single-sign-on-v2": !1,
  "private-plugins-v2": !1
};
let $$T9 = {
  [FPlanNameType.STARTER]: {
    "usage-limits": () => getI18nString("plan_comparison.chart.usage_limits_limited_pages.starter", {
      maxFreeFiles: STANDARD_LIMIT,
      maxFreeProjects: PRIMARY_LIMIT
    }),
    "usage-limits-v2": !1,
    "version-history": () => getI18nString("plan_comparison.chart.version_history.starter"),
    libraries: !1,
    "shared-libraries": !1,
    "custom-permissions": !1,
    "audio-conversations": !1,
    security: !1,
    "design-system-analytics": !1,
    "custom-templates": !1,
    "unified-admin-and-billing": !1,
    "branching-and-merging": !1,
    "single-sign-on": !1,
    workspaces: !1,
    "guest-access-controls": !1,
    onboarding: !1,
    "advanced-prototyping": !1,
    "advanced-inspection": !1,
    "codegen-languages": !1,
    "annotations-and-status": !1,
    "compare-changes": !1,
    "plugins-and-extensions": !1,
    "private-plugins": !1,
    "dev-mode": !1,
    "video-in-prototype": !1,
    "project-and-team-transfer": !1,
    "private-projects": !1,
    "prototype-sharing-permissions": !1,
    "design-system-modes": !1,
    "password-protection": !1,
    "default-roles": !1,
    "open-sessions": !1,
    voting: !1,
    "custom-templates-v2": !1,
    "custom-color-palettes": !1,
    "shared-fonts": !1,
    "centralized-admin": !1,
    "domain-capture": !1,
    "link-access-control": !1,
    "centralized-content-management": !1,
    "activity-logs": !1,
    "plugin-widget-management": !1,
    "dev-mode-v2": !1,
    "audio-conversations-v2": !1,
    "design-system-analytics-v2": !1,
    "single-sign-on-v2": !1,
    "private-plugins-v2": !1
  },
  [FPlanNameType.PRO]: C,
  [FPlanNameType.STUDENT]: C,
  [FPlanNameType.ORG]: {
    "usage-limits": () => getI18nString("plan_comparison.chart.usage_limits.unlimited"),
    "usage-limits-v2": () => getI18nString("plan_comparison.chart.usage_limits_v2.unlimited_teams"),
    "version-history": !0,
    libraries: () => getI18nString("plan_comparison.chart.libraries.org_wide"),
    "shared-libraries": () => getI18nString("plan_comparison.chart.shared_libraries.organization_wide"),
    "custom-permissions": !0,
    "audio-conversations": !0,
    security: !0,
    "design-system-analytics": !0,
    "custom-templates": !0,
    "unified-admin-and-billing": !0,
    "branching-and-merging": !0,
    "single-sign-on": !0,
    workspaces: !1,
    "guest-access-controls": !1,
    onboarding: !1,
    "advanced-prototyping": !0,
    "advanced-inspection": !0,
    "codegen-languages": !0,
    "annotations-and-status": !0,
    "compare-changes": !0,
    "plugins-and-extensions": !0,
    "private-plugins": !0,
    "dev-mode": !0,
    "video-in-prototype": !0,
    "project-and-team-transfer": !0,
    "private-projects": !0,
    "prototype-sharing-permissions": !0,
    "design-system-modes": !0,
    "password-protection": !0,
    "default-roles": !0,
    "open-sessions": !0,
    voting: !0,
    "custom-templates-v2": !0,
    "custom-color-palettes": !0,
    "shared-fonts": !0,
    "centralized-admin": !0,
    "domain-capture": !0,
    "link-access-control": !0,
    "centralized-content-management": !0,
    "activity-logs": !0,
    "plugin-widget-management": !0,
    "dev-mode-v2": !0,
    "audio-conversations-v2": !0,
    "design-system-analytics-v2": !0,
    "single-sign-on-v2": !0,
    "private-plugins-v2": !0
  },
  [FPlanNameType.ENTERPRISE]: {
    "usage-limits": () => getI18nString("plan_comparison.chart.usage_limits.unlimited"),
    "usage-limits-v2": () => getI18nString("plan_comparison.chart.usage_limits_v2.unlimited_teams"),
    "version-history": !0,
    libraries: () => getI18nString("plan_comparison.chart.shared_libraries.company_wide"),
    "shared-libraries": () => getI18nString("plan_comparison.chart.shared_libraries.company_wide"),
    "custom-permissions": !0,
    "audio-conversations": !0,
    security: !0,
    "design-system-analytics": !0,
    "custom-templates": !0,
    "unified-admin-and-billing": !0,
    "branching-and-merging": !0,
    "single-sign-on": !0,
    workspaces: !0,
    "guest-access-controls": !0,
    onboarding: !0,
    "advanced-prototyping": !0,
    "advanced-inspection": !0,
    "codegen-languages": !0,
    "annotations-and-status": !0,
    "compare-changes": !0,
    "plugins-and-extensions": !0,
    "private-plugins": !0,
    "dev-mode": !0,
    "video-in-prototype": !0,
    "project-and-team-transfer": !0,
    "private-projects": !0,
    "prototype-sharing-permissions": !0,
    "design-system-modes": !0,
    "password-protection": !0,
    "default-roles": !0,
    "open-sessions": !0,
    voting: !0,
    "custom-templates-v2": !0,
    "custom-color-palettes": !0,
    "shared-fonts": !0,
    "centralized-admin": !0,
    "domain-capture": !0,
    "link-access-control": !0,
    "centralized-content-management": !0,
    "activity-logs": !0,
    "plugin-widget-management": !0,
    "dev-mode-v2": !0,
    "audio-conversations-v2": !0,
    "design-system-analytics-v2": !0,
    "single-sign-on-v2": !0,
    "private-plugins-v2": !0
  }
};
function k(e) {
  let t = null;
  $$T9[FPlanNameType.STARTER][e] ? t = FPlanNameType.STARTER : $$T9[FPlanNameType.STUDENT][e] ? t = FPlanNameType.STUDENT : $$T9[FPlanNameType.PRO][e] ? t = FPlanNameType.PRO : $$T9[FPlanNameType.ORG][e] ? t = FPlanNameType.ORG : $$T9[FPlanNameType.ENTERPRISE][e] && (t = FPlanNameType.ENTERPRISE);
  return t;
}
export function $$R7(e, t) {
  let i = e.filter(e => e !== t);
  let n = k(t);
  if (!n) return e;
  let r = i.findIndex(e => k(e) === n);
  return -1 !== r ? (i.splice(r, 0, t), i) : e;
}
export function $$N6({
  planTier: e,
  upsellSource: t,
  buttonText: i
}) {
  return (e === FPlanNameType.PRO || e === FPlanNameType.STUDENT) && t === UpsellModalType.CREATE_NEW_PAID_TEAM ? getI18nString("plan_comparison.plans.pro.choose_professional") : e === FPlanNameType.ORG && t === UpsellModalType.CREATE_NEW_PAID_TEAM ? getI18nString("plan_comparison.plans.org.choose_organization") : i();
}
export const Xj = $$I0;
export const zS = $$g1;
export const Q1 = $$x2;
export const X9 = $$w3;
export const DA = $$v4;
export const qT = $$E5;
export const UJ = $$N6;
export const xp = $$R7;
export const Zy = $$f8;
export const Lh = $$T9;
export const SO = $$A10;
export const Qw = $$y11;
export const RO = $$S12;
export const $$ = $$b13;