import { jsx } from 'react/jsx-runtime'
import { UpsellModalType } from '../905/165519'
import { getI18nString, renderI18nText } from '../905/303541'
import { UpgradeAction } from '../905/370443'
import { registerTooltip } from '../905/524523'
import { cssBuilderInstance } from '../cssbuilder/589278'
import { FPlanNameType } from '../figma_app/191312'
import { PRIMARY_LIMIT, STANDARD_LIMIT } from '../figma_app/345997'

let u = registerTooltip('plan_comparison_feature_custom_color_palettes', () => {
  let e = jsx('span', {
    className: cssBuilderInstance.colorTextFigjam.fontMedium.$,
    children: getI18nString('plan_comparison.chart.callout.figjam_board'),
  })
  return jsx('div', {
    className: cssBuilderInstance.alignCenter.$,
    children: renderI18nText('plan_comparison.chart.custom_color_palettes.details_with_callout', {
      figJamCallout: e,
    }),
  })
})
let p = registerTooltip('plan_comparison_feature_custom_templates', () => {
  let e = jsx('span', {
    className: cssBuilderInstance.colorTextFigjam.fontMedium.$,
    children: getI18nString('plan_comparison.chart.callout.figjam'),
  })
  return jsx('div', {
    className: cssBuilderInstance.alignCenter.$,
    children: renderI18nText('plan_comparison.chart.custom_templates_v2.details_with_callout', {
      figJamCallout: e,
    }),
  })
})
let m = registerTooltip('plan_comparison_feature_open_sessions', () => {
  let e = jsx('span', {
    className: cssBuilderInstance.colorTextFigjam.fontMedium.$,
    children: getI18nString('plan_comparison.chart.callout.figjam_board'),
  })
  return jsx('div', {
    className: cssBuilderInstance.alignCenter.$,
    children: renderI18nText('plan_comparison.chart.open_sessions.details_with_callout', {
      figJamCallout: e,
    }),
  })
})
let h = registerTooltip('plan_comparison_feature_voting', () => {
  let e = jsx('span', {
    className: cssBuilderInstance.colorTextFigjam.fontMedium.$,
    children: getI18nString('plan_comparison.chart.callout.figjam_board'),
  })
  return jsx('div', {
    className: cssBuilderInstance.alignCenter.$,
    children: renderI18nText('plan_comparison.chart.voting.details_with_callout', {
      figJamCallout: e,
    }),
  })
})

/**
 * Plan highlight badge types (original: PlanHighlightBadgeType)
 */
export enum PlanHighlightBadgeType {
  MOST_POPULAR = 'MOST_POPULAR',
  RECOMMENDED = 'RECOMMENDED',
  MOST_VALUED = 'MOST_VALUED',
}

/**
 * Plan highlight badge text map (original: PlanHighlightBadgeText)
 */
export const PlanHighlightBadgeText: Record<PlanHighlightBadgeType, () => string> = {
  [PlanHighlightBadgeType.MOST_POPULAR]: () => getI18nString('plan_comparison.plans.most_popular'),
  [PlanHighlightBadgeType.RECOMMENDED]: () => getI18nString('plan_comparison.plans.recommended'),
  [PlanHighlightBadgeType.MOST_VALUED]: () => getI18nString('plan_comparison.plans.most_valued'),
}

/**
 * Shared config for Professional and Student plans (original: _)
 */
const SharedProStudentConfig = {
  name: () => getI18nString('plan_details.professional'),
  description: () => getI18nString('plan_comparison.plans.pro.description'),
  buttonText: () => getI18nString('plan_comparison.plans.pro.choose_button'),
  hasAnnualOnlyMessage: false,
  highlightBadgeText: PlanHighlightBadgeText[PlanHighlightBadgeType.MOST_POPULAR],
  canContactSales: false,
  trackingDescriptor: UpgradeAction.UPGRADE_TO_PROFESSIONAL,
}

/**
 * Plan details config map (original: PlanDetailsConfig)
 */
export const PlanDetailsConfig: Record<FPlanNameType, any> = {
  [FPlanNameType.STARTER]: {
    name: () => getI18nString('plan_details.starter'),
    description: () => getI18nString('plan_comparison.plans.starter.description'),
    buttonText: () => getI18nString('plan_comparison.plans.starter.choose_button'),
    canContactSales: false,
    hasAnnualOnlyMessage: false,
    trackingDescriptor: undefined,
  },
  [FPlanNameType.PRO]: {
    ...SharedProStudentConfig,
  },
  [FPlanNameType.ORG]: {
    name: () => getI18nString('plan_details.organization'),
    description: () => getI18nString('plan_comparison.plans.org.description'),
    buttonText: () => getI18nString('plan_comparison.plans.org.choose_button'),
    highlightBadgeText: (type: PlanHighlightBadgeType) => PlanHighlightBadgeText[type](),
    canContactSales: true,
    hasAnnualOnlyMessage: true,
    trackingDescriptor: UpgradeAction.UPGRADE_TO_ORGANIZATION,
  },
  [FPlanNameType.ENTERPRISE]: {
    name: () => getI18nString('plan_details.enterprise'),
    description: () => getI18nString('plan_comparison.plans.ent.description'),
    buttonText: () => getI18nString('plan_comparison.plans.ent.choose_button'),
    canContactSales: false,
    hasAnnualOnlyMessage: true,
    trackingDescriptor: UpgradeAction.CONTACT_SALES,
  },
  [FPlanNameType.STUDENT]: {
    ...SharedProStudentConfig,
    additionalMessage: () => getI18nString('plan_details.free_for_students_and_educators'),
    trackingDescriptor: UpgradeAction.UPGRADE_TO_EDUCATION,
  },
}
/**
 * Plan tiers used for plan comparison chart display (original: PlanComparisonTiers)
 */
export const PlanComparisonTiers: FPlanNameType[] = [
  FPlanNameType.STARTER,
  FPlanNameType.PRO,
  FPlanNameType.ORG,
]

/**
 * Plan tiers used for student comparison chart display (original: StudentComparisonTiers)
 */
export const StudentComparisonTiers: FPlanNameType[] = [
  FPlanNameType.STARTER,
  FPlanNameType.STUDENT,
  FPlanNameType.ORG,
]

/**
 * Plan tiers used for upgrade actions (original: UpgradePlanTiers)
 */
export const UpgradePlanTiers: FPlanNameType[] = [
  FPlanNameType.PRO,
  FPlanNameType.ORG,
  FPlanNameType.ENTERPRISE,
]

/**
 * Chart feature keys enum (original: ChartFeatureKey)
 */
export enum ChartFeatureKey {
  USAGE_LIMITS = 'usage-limits',
  USAGE_LIMITS_V2 = 'usage-limits-v2',
  VERSION_HISTORY = 'version-history',
  LIBRARIES = 'libraries',
  SHARED_LIBRARIES = 'shared-libraries',
  CUSTOM_PERMISSIONS = 'custom-permissions',
  AUDIO_CONVERSATIONS = 'audio-conversations',
  SECURITY = 'security',
  DESIGN_SYSTEM_ANALYTICS = 'design-system-analytics',
  CUSTOM_TEMPLATES = 'custom-templates',
  UNIFIED_ADMIN_AND_BILLING = 'unified-admin-and-billing',
  BRANCHING_AND_MERGING = 'branching-and-merging',
  SINGLE_SIGN_ON = 'single-sign-on',
  WORKSPACES = 'workspaces',
  GUEST_ACCESS_CONTROLS = 'guest-access-controls',
  ONBOARDING = 'onboarding',
  ADVANCED_PROTOTYPING = 'advanced-prototyping',
  ADVANCED_INSPECTION = 'advanced-inspection',
  CODEGEN_LANGUAGES = 'codegen-languages',
  ANNOTATIONS_AND_STATUS = 'annotations-and-status',
  COMPARE_CHANGES = 'compare-changes',
  PLUGINS_AND_EXTENSIONS = 'plugins-and-extensions',
  PRIVATE_PLUGINS = 'private-plugins',
  DEV_MODE = 'dev-mode',
  VIDEO_IN_PROTOTYPE = 'video-in-prototype',
  PROJECT_AND_TEAM_TRANSFER = 'project-and-team-transfer',
  PRIVATE_PROJECTS = 'private-projects',
  PROTOTYPE_SHARING_PERMISSIONS = 'prototype-sharing-permissions',
  DESIGN_SYSTEM_MODES = 'design-system-modes',
  PASSWORD_PROTECTION = 'password-protection',
  DEFAULT_ROLES = 'default-roles',
  OPEN_SESSIONS = 'open-sessions',
  VOTING = 'voting',
  CUSTOM_TEMPLATES_V2 = 'custom-templates-v2',
  CUSTOM_COLOR_PALETTES = 'custom-color-palettes',
  SHARED_FONTS = 'shared-fonts',
  CENTRALIZED_ADMIN = 'centralized-admin',
  DOMAIN_CAPTURE = 'domain-capture',
  LINK_ACCESS_CONTROL = 'link-access-control',
  CENTRALIZED_CONTENT_MANAGEMENT = 'centralized-content-management',
  ACTIVITY_LOGS = 'activity-logs',
  PLUGIN_WIDGET_MANAGEMENT = 'plugin-widget-management',
  DEV_MODE_V2 = 'dev-mode-v2',
  AUDIO_CONVERSATIONS_V2 = 'audio-conversations-v2',
  DESIGN_SYSTEM_ANALYTICS_V2 = 'design-system-analytics-v2',
  SINGLE_SIGN_ON_V2 = 'single-sign-on-v2',
  PRIVATE_PLUGINS_V2 = 'private-plugins-v2',
}

/**
 * Chart feature details type (original: ChartFeatureDetailsMap)
 */
export interface ChartFeatureDetails {
  id: string
  name: () => string
  details?: () => string
  tooltipSpecialKey?: any
}

/**
 * Chart feature details map (original: ChartFeatureDetailsMap)
 */
export const ChartFeatureDetailsMap: Record<string, ChartFeatureDetails> = {
  'usage-limits': {
    id: 'Usage limits',
    name: () => getI18nString('plan_comparison.chart.usage_limits.name'),
    details: () => getI18nString('plan_comparison.chart.usage_limits.details'),
  },
  'usage-limits-v2': {
    id: 'Usage limits',
    name: () => getI18nString('plan_comparison.chart.usage_limits.name'),
    details: () => getI18nString('plan_comparison.chart.usage_limits.details'),
  },
  'version-history': {
    id: 'Version history',
    name: () => getI18nString('plan_comparison.chart.version_history.name'),
    details: () => getI18nString('plan_comparison.chart.version_history.details'),
  },
  'libraries': {
    id: 'Libraries',
    name: () => getI18nString('plan_comparison.chart.libraries.name'),
    details: () => getI18nString('plan_comparison.chart.libraries.details'),
  },
  'shared-libraries': {
    id: 'Shared libraries',
    name: () => getI18nString('plan_comparison.chart.shared_libraries.name'),
    details: () => getI18nString('plan_comparison.chart.shared_libraries.details'),
  },
  'custom-permissions': {
    id: 'Custom file and user permissions',
    name: () => getI18nString('plan_comparison.chart.custom_permissions.name'),
    details: () => getI18nString('plan_comparison.chart.custom_permissions.details'),
  },
  'audio-conversations': {
    id: 'Audio conversations',
    name: () => getI18nString('plan_comparison.chart.audio_conversations.name'),
    details: () => getI18nString('plan_comparison.chart.audio_conversations.details'),
  },
  'security': {
    id: 'SSO, advanced security',
    name: () => getI18nString('plan_comparison.chart.security.name'),
    details: () => getI18nString('plan_comparison.chart.security.details'),
  },
  'design-system-analytics': {
    id: 'Design system analytics',
    name: () => getI18nString('plan_comparison.chart.design_system_analytics.name'),
    details: () => getI18nString('plan_comparison.chart.design_system_analytics.details'),
  },
  'custom-templates': {
    id: 'Custom templates',
    name: () => getI18nString('plan_comparison.chart.custom_templates.name'),
    details: () => getI18nString('plan_comparison.chart.custom_templates.details'),
  },
  'unified-admin-and-billing': {
    id: 'Unified admin and billing',
    name: () => getI18nString('plan_comparison.chart.unified_admin_and_billing.name'),
    details: () => getI18nString('plan_comparison.chart.unified_admin_and_billing.details'),
  },
  'branching-and-merging': {
    id: 'Branching and merging',
    name: () => getI18nString('plan_comparison.chart.branching_and_merging.name'),
    details: () => getI18nString('plan_comparison.chart.branching_and_merging.details'),
  },
  'single-sign-on': {
    id: 'Single sign on',
    name: () => getI18nString('plan_comparison.chart.single_sign_on.name'),
    details: () => getI18nString('plan_comparison.chart.single_sign_on.details'),
  },
  'workspaces': {
    id: 'Workspaces',
    name: () => getI18nString('plan_comparison.chart.workspaces.name'),
    details: () => getI18nString('plan_comparison.chart.workspaces.details'),
  },
  'guest-access-controls': {
    id: 'Guest access controls',
    name: () => getI18nString('plan_comparison.chart.guest_access_controls.name'),
    details: () => getI18nString('plan_comparison.chart.guest_access_controls.details'),
  },
  'onboarding': {
    id: 'Onboarding and account support',
    name: () => getI18nString('plan_comparison.chart.onboarding.name'),
    details: () => getI18nString('plan_comparison.chart.onboarding.details'),
  },
  'advanced-prototyping': {
    id: 'Advanced prototyping',
    name: () => getI18nString('plan_comparison.chart.advanced_prototyping.name'),
    details: () => getI18nString('plan_comparison.chart.advanced_prototyping.details'),
  },
  'advanced-inspection': {
    id: 'Advanced inspection',
    name: () => getI18nString('plan_comparison.chart.dev_mode.advanced_inspection.name'),
    details: () => getI18nString('plan_comparison.chart.dev_mode.advanced_inspection.details'),
  },
  'codegen-languages': {
    id: 'More codegen languages',
    name: () => getI18nString('plan_comparison.chart.dev_mode.codegen_languages.name'),
    details: () => getI18nString('plan_comparison.chart.dev_mode.codegen_languages.details'),
  },
  'annotations-and-status': {
    id: 'Annotations and status',
    name: () => getI18nString('plan_comparison.chart.dev_mode.annotations_and_status.name'),
    details: () => getI18nString('plan_comparison.chart.dev_mode.annotations_and_status.details'),
  },
  'compare-changes': {
    id: 'Compare changes',
    name: () => getI18nString('plan_comparison.chart.dev_mode.compare_changes.name'),
    details: () => getI18nString('plan_comparison.chart.dev_mode.compare_changes.details'),
  },
  'plugins-and-extensions': {
    id: 'Plugins and extensions',
    name: () => getI18nString('plan_comparison.chart.dev_mode.plugins_and_extensions.name'),
    details: () => getI18nString('plan_comparison.chart.dev_mode.plugins_and_extensions.details'),
  },
  'private-plugins': {
    id: 'Private plugins',
    name: () => getI18nString('plan_comparison.chart.dev_mode.private_plugins.name'),
    details: () => getI18nString('plan_comparison.chart.dev_mode.private_plugins.details'),
  },
  'dev-mode': {
    id: 'Dev Mode',
    name: () => getI18nString('plan_comparison.chart.dev_mode.name'),
    details: () => getI18nString('plan_comparison.chart.dev_mode.details'),
  },
  'video-in-prototype': {
    id: 'Video in Prototypes',
    name: () => getI18nString('plan_comparison.chart.video_in_prototype.name'),
    details: () => getI18nString('plan_comparison.chart.video_in_prototype.details'),
  },
  'project-and-team-transfer': {
    id: 'Project transfer',
    name: () => getI18nString('plan_comparison.chart.project_transfer.name'),
    details: () => getI18nString('plan_comparison.chart.project_transfer.details'),
  },
  'private-projects': {
    id: 'Private projects',
    name: () => getI18nString('plan_comparison.chart.private_projects.name'),
    details: () => getI18nString('plan_comparison.chart.private_projects.details'),
  },
  'prototype-sharing-permissions': {
    id: 'Prototype sharing permissions',
    name: () => getI18nString('plan_comparison.chart.prototype_sharing_permissions.name'),
    details: () => getI18nString('plan_comparison.chart.prototype_sharing_permissions.details'),
  },
  'design-system-modes': {
    id: 'Design system modes',
    name: () => getI18nString('plan_comparison.chart.design_system_modes.name'),
    details: () => getI18nString('plan_comparison.chart.design_system_modes.details'),
  },
  'password-protection': {
    id: 'Password protection',
    name: () => getI18nString('plan_comparison.chart.password_protection.name'),
    details: () => getI18nString('plan_comparison.chart.password_protection.details'),
  },
  'default-roles': {
    id: 'Default roles',
    name: () => getI18nString('plan_comparison.chart.default_roles.name'),
    details: () => getI18nString('plan_comparison.chart.default_roles.details'),
  },
  'open-sessions': {
    id: 'Open sessions',
    name: () => getI18nString('plan_comparison.chart.open_sessions.name'),
    tooltipSpecialKey: m,
  },
  'voting': {
    id: 'Voting',
    name: () => getI18nString('plan_comparison.chart.voting.name'),
    tooltipSpecialKey: h,
  },
  'custom-templates-v2': {
    id: 'Custom templates',
    name: () => getI18nString('plan_comparison.chart.custom_templates_v2.name'),
    tooltipSpecialKey: p,
  },
  'custom-color-palettes': {
    id: 'Custom color palettes',
    name: () => getI18nString('plan_comparison.chart.custom_color_palettes.name'),
    tooltipSpecialKey: u,
  },
  'shared-fonts': {
    id: 'Shared fonts',
    name: () => getI18nString('plan_comparison.chart.shared_fonts.name'),
    details: () => getI18nString('plan_comparison.chart.shared_fonts.details'),
  },
  'centralized-admin': {
    id: 'Centralized admin',
    name: () => getI18nString('plan_comparison.chart.centralized_admin.name'),
    details: () => getI18nString('plan_comparison.chart.centralized_admin.details'),
  },
  'domain-capture': {
    id: 'Domain capture',
    name: () => getI18nString('plan_comparison.chart.domain_capture.name'),
    details: () => getI18nString('plan_comparison.chart.domain_capture.details'),
  },
  'link-access-control': {
    id: 'Link access control',
    name: () => getI18nString('plan_comparison.chart.link_access_control.name'),
    details: () => getI18nString('plan_comparison.chart.link_access_control.details'),
  },
  'centralized-content-management': {
    id: 'Centralized content management',
    name: () => getI18nString('plan_comparison.chart.centralized_content_management.name'),
    details: () => getI18nString('plan_comparison.chart.centralized_content_management.details'),
  },
  'activity-logs': {
    id: 'Activity logs',
    name: () => getI18nString('plan_comparison.chart.activity_logs.name'),
    details: () => getI18nString('plan_comparison.chart.activity_logs.details'),
  },
  'plugin-widget-management': {
    id: 'Plugin widget management',
    name: () => getI18nString('plan_comparison.chart.plugin_widget_management.name'),
    details: () => getI18nString('plan_comparison.chart.plugin_widget_management.details'),
  },
  'dev-mode-v2': {
    id: 'Dev Mode',
    name: () => getI18nString('plan_comparison.chart.dev_mode_v2.name'),
    details: () => getI18nString('plan_comparison.chart.dev_mode_v2.details'),
  },
  'audio-conversations-v2': {
    id: 'Audio conversations',
    name: () => getI18nString('plan_comparison.chart.audio_conversations_v2.name'),
    details: () => getI18nString('plan_comparison.chart.audio_conversations_v2.details'),
  },
  'design-system-analytics-v2': {
    id: 'Design system analytics',
    name: () => getI18nString('plan_comparison.chart.design_system_analytics_v2.name'),
    details: () => getI18nString('plan_comparison.chart.design_system_analytics_v2.details'),
  },
  'single-sign-on-v2': {
    id: 'Single sign on',
    name: () => getI18nString('plan_comparison.chart.single_sign_on_v2.name'),
    details: () => getI18nString('plan_comparison.chart.single_sign_on_v2.details'),
  },
  'private-plugins-v2': {
    id: 'Private plugins',
    name: () => getI18nString('plan_comparison.chart.private_plugins_v2.name'),
    details: () => getI18nString('plan_comparison.chart.private_plugins_v2.details'),
  },
}

/**
 * Chart feature keys for Starter plan (original: StarterChartFeatureKeys)
 */
export const StarterChartFeatureKeys: string[] = [
  'usage-limits',
  'version-history',
  'libraries',
  'custom-permissions',
  'dev-mode',
  'audio-conversations',
  'security',
  'design-system-analytics',
  'custom-templates',
]

/**
 * Chart feature keys for Organization plan (original: OrgChartFeatureKeys)
 */
export const OrgChartFeatureKeys: string[] = [
  'usage-limits-v2',
  'shared-libraries',
  'dev-mode',
  'unified-admin-and-billing',
  'branching-and-merging',
  'design-system-analytics',
  'single-sign-on',
  'workspaces',
  'guest-access-controls',
  'onboarding',
]

/**
 * Chart feature keys for Student plan (original: StudentChartFeatureKeys)
 */
export const StudentChartFeatureKeys: string[] = [
  'usage-limits',
  'advanced-inspection',
  'codegen-languages',
  'annotations-and-status',
  'compare-changes',
  'plugins-and-extensions',
  'private-plugins',
]

let ProPlanConfig = {
  'usage-limits': () => getI18nString('plan_comparison.chart.usage_limits.unlimited'),
  'usage-limits-v2': () => getI18nString('plan_comparison.chart.usage_limits_v2.unlimited'),
  'version-history': !0,
  'libraries': () => getI18nString('plan_comparison.chart.libraries.team_wide'),
  'shared-libraries': () => getI18nString('plan_comparison.chart.libraries.team_wide'),
  'custom-permissions': !0,
  'audio-conversations': !0,
  'security': !1,
  'design-system-analytics': !1,
  'custom-templates': !1,
  'unified-admin-and-billing': !1,
  'branching-and-merging': !1,
  'single-sign-on': !1,
  'workspaces': !1,
  'guest-access-controls': !1,
  'onboarding': !1,
  'advanced-prototyping': !0,
  'advanced-inspection': !0,
  'codegen-languages': !0,
  'annotations-and-status': !0,
  'compare-changes': !0,
  'plugins-and-extensions': !0,
  'private-plugins': !1,
  'dev-mode': !0,
  'video-in-prototype': !0,
  'project-and-team-transfer': !0,
  'private-projects': !0,
  'prototype-sharing-permissions': !0,
  'design-system-modes': !0,
  'password-protection': !0,
  'default-roles': !0,
  'open-sessions': !0,
  'voting': !0,
  'custom-templates-v2': !1,
  'custom-color-palettes': !1,
  'shared-fonts': !1,
  'centralized-admin': !1,
  'domain-capture': !1,
  'link-access-control': !1,
  'centralized-content-management': !1,
  'activity-logs': !1,
  'plugin-widget-management': !1,
  'dev-mode-v2': !0,
  'audio-conversations-v2': !0,
  'design-system-analytics-v2': !1,
  'single-sign-on-v2': !1,
  'private-plugins-v2': !1,
}
export let SubscriptionPlans = {
  [FPlanNameType.STARTER]: {
    'usage-limits': () => getI18nString('plan_comparison.chart.usage_limits_limited_pages.starter', {
      maxFreeFiles: STANDARD_LIMIT,
      maxFreeProjects: PRIMARY_LIMIT,
    }),
    'usage-limits-v2': !1,
    'version-history': () => getI18nString('plan_comparison.chart.version_history.starter'),
    'libraries': !1,
    'shared-libraries': !1,
    'custom-permissions': !1,
    'audio-conversations': !1,
    'security': !1,
    'design-system-analytics': !1,
    'custom-templates': !1,
    'unified-admin-and-billing': !1,
    'branching-and-merging': !1,
    'single-sign-on': !1,
    'workspaces': !1,
    'guest-access-controls': !1,
    'onboarding': !1,
    'advanced-prototyping': !1,
    'advanced-inspection': !1,
    'codegen-languages': !1,
    'annotations-and-status': !1,
    'compare-changes': !1,
    'plugins-and-extensions': !1,
    'private-plugins': !1,
    'dev-mode': !1,
    'video-in-prototype': !1,
    'project-and-team-transfer': !1,
    'private-projects': !1,
    'prototype-sharing-permissions': !1,
    'design-system-modes': !1,
    'password-protection': !1,
    'default-roles': !1,
    'open-sessions': !1,
    'voting': !1,
    'custom-templates-v2': !1,
    'custom-color-palettes': !1,
    'shared-fonts': !1,
    'centralized-admin': !1,
    'domain-capture': !1,
    'link-access-control': !1,
    'centralized-content-management': !1,
    'activity-logs': !1,
    'plugin-widget-management': !1,
    'dev-mode-v2': !1,
    'audio-conversations-v2': !1,
    'design-system-analytics-v2': !1,
    'single-sign-on-v2': !1,
    'private-plugins-v2': !1,
  },
  [FPlanNameType.PRO]: ProPlanConfig,
  [FPlanNameType.STUDENT]: ProPlanConfig,
  [FPlanNameType.ORG]: {
    'usage-limits': () => getI18nString('plan_comparison.chart.usage_limits.unlimited'),
    'usage-limits-v2': () => getI18nString('plan_comparison.chart.usage_limits_v2.unlimited_teams'),
    'version-history': !0,
    'libraries': () => getI18nString('plan_comparison.chart.libraries.org_wide'),
    'shared-libraries': () => getI18nString('plan_comparison.chart.shared_libraries.organization_wide'),
    'custom-permissions': !0,
    'audio-conversations': !0,
    'security': !0,
    'design-system-analytics': !0,
    'custom-templates': !0,
    'unified-admin-and-billing': !0,
    'branching-and-merging': !0,
    'single-sign-on': !0,
    'workspaces': !1,
    'guest-access-controls': !1,
    'onboarding': !1,
    'advanced-prototyping': !0,
    'advanced-inspection': !0,
    'codegen-languages': !0,
    'annotations-and-status': !0,
    'compare-changes': !0,
    'plugins-and-extensions': !0,
    'private-plugins': !0,
    'dev-mode': !0,
    'video-in-prototype': !0,
    'project-and-team-transfer': !0,
    'private-projects': !0,
    'prototype-sharing-permissions': !0,
    'design-system-modes': !0,
    'password-protection': !0,
    'default-roles': !0,
    'open-sessions': !0,
    'voting': !0,
    'custom-templates-v2': !0,
    'custom-color-palettes': !0,
    'shared-fonts': !0,
    'centralized-admin': !0,
    'domain-capture': !0,
    'link-access-control': !0,
    'centralized-content-management': !0,
    'activity-logs': !0,
    'plugin-widget-management': !0,
    'dev-mode-v2': !0,
    'audio-conversations-v2': !0,
    'design-system-analytics-v2': !0,
    'single-sign-on-v2': !0,
    'private-plugins-v2': !0,
  },
  [FPlanNameType.ENTERPRISE]: {
    'usage-limits': () => getI18nString('plan_comparison.chart.usage_limits.unlimited'),
    'usage-limits-v2': () => getI18nString('plan_comparison.chart.usage_limits_v2.unlimited_teams'),
    'version-history': !0,
    'libraries': () => getI18nString('plan_comparison.chart.shared_libraries.company_wide'),
    'shared-libraries': () => getI18nString('plan_comparison.chart.shared_libraries.company_wide'),
    'custom-permissions': !0,
    'audio-conversations': !0,
    'security': !0,
    'design-system-analytics': !0,
    'custom-templates': !0,
    'unified-admin-and-billing': !0,
    'branching-and-merging': !0,
    'single-sign-on': !0,
    'workspaces': !0,
    'guest-access-controls': !0,
    'onboarding': !0,
    'advanced-prototyping': !0,
    'advanced-inspection': !0,
    'codegen-languages': !0,
    'annotations-and-status': !0,
    'compare-changes': !0,
    'plugins-and-extensions': !0,
    'private-plugins': !0,
    'dev-mode': !0,
    'video-in-prototype': !0,
    'project-and-team-transfer': !0,
    'private-projects': !0,
    'prototype-sharing-permissions': !0,
    'design-system-modes': !0,
    'password-protection': !0,
    'default-roles': !0,
    'open-sessions': !0,
    'voting': !0,
    'custom-templates-v2': !0,
    'custom-color-palettes': !0,
    'shared-fonts': !0,
    'centralized-admin': !0,
    'domain-capture': !0,
    'link-access-control': !0,
    'centralized-content-management': !0,
    'activity-logs': !0,
    'plugin-widget-management': !0,
    'dev-mode-v2': !0,
    'audio-conversations-v2': !0,
    'design-system-analytics-v2': !0,
    'single-sign-on-v2': !0,
    'private-plugins-v2': !0,
  },
}
/**
 * Determines the plan tier for a given feature key.
 * Original function name: k
 * @param featureKey - The chart feature key to check.
 * @returns The corresponding FPlanNameType or null if not found.
 */
function getPlanTierByFeatureKey(featureKey: string): FPlanNameType | null {
  if (SubscriptionPlans[FPlanNameType.STARTER][featureKey]) {
    return FPlanNameType.STARTER
  }
  if (SubscriptionPlans[FPlanNameType.STUDENT][featureKey]) {
    return FPlanNameType.STUDENT
  }
  if (SubscriptionPlans[FPlanNameType.PRO][featureKey]) {
    return FPlanNameType.PRO
  }
  if (SubscriptionPlans[FPlanNameType.ORG][featureKey]) {
    return FPlanNameType.ORG
  }
  if (SubscriptionPlans[FPlanNameType.ENTERPRISE][featureKey]) {
    return FPlanNameType.ENTERPRISE
  }
  return null
}

/**
 * Inserts a feature key into the correct position in the array based on its plan tier.
 * Original function name: $$R7
 * @param featureKeys - Array of feature keys.
 * @param targetKey - The feature key to reposition.
 * @returns The reordered array of feature keys.
 */
export function reorderFeatureKeysByPlanTier(featureKeys: string[], targetKey: string): string[] {
  const filteredKeys = featureKeys.filter(key => key !== targetKey)
  const targetTier = getPlanTierByFeatureKey(targetKey)
  if (!targetTier) return featureKeys

  const insertIndex = filteredKeys.findIndex(key => getPlanTierByFeatureKey(key) === targetTier)
  if (insertIndex !== -1) {
    filteredKeys.splice(insertIndex, 0, targetKey)
    return filteredKeys
  }
  return featureKeys
}

/**
 * Returns the appropriate button text for a plan tier and upsell source.
 * Original function name: $$N6
 * @param params - Object containing planTier, upsellSource, and buttonText.
 * @returns The i18n string for the button text.
 */
export function getPlanButtonText({
  planTier,
  upsellSource,
  buttonText,
}: {
  planTier: FPlanNameType
  upsellSource: UpsellModalType
  buttonText: () => string
}): string {
  if (
    (planTier === FPlanNameType.PRO || planTier === FPlanNameType.STUDENT) &&
    upsellSource === UpsellModalType.CREATE_NEW_PAID_TEAM
  ) {
    return getI18nString('plan_comparison.plans.pro.choose_professional')
  }
  if (
    planTier === FPlanNameType.ORG &&
    upsellSource === UpsellModalType.CREATE_NEW_PAID_TEAM
  ) {
    return getI18nString('plan_comparison.plans.org.choose_organization')
  }
  return buttonText()
}
export const Xj = ChartFeatureKey
export const zS = PlanHighlightBadgeType
export const Q1 = StarterChartFeatureKeys
export const X9 = StudentChartFeatureKeys
export const DA = UpgradePlanTiers
export const qT = ChartFeatureDetailsMap
export const UJ = getPlanButtonText
export const xp = reorderFeatureKeysByPlanTier
export const Zy = PlanHighlightBadgeText
export const Lh = SubscriptionPlans
export const SO = PlanDetailsConfig
export const Qw = PlanComparisonTiers
export const RO = OrgChartFeatureKeys
export const $$ = StudentComparisonTiers
