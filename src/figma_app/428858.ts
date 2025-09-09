import { FOrganizationLevelType, FPlanNameType } from '../figma_app/191312'
import { EligibilityStatusType, FeatureStateType, FeatureToggleType } from '../figma_app/421473'
import { throwTypeError } from '../figma_app/465776'

/**
 * Eligibility configuration for feature toggles (original: s)
 */
export type FeatureEligibilityConfig = {
  [key in FeatureToggleType]: {
    environments: Partial<Record<string, EligibilityStatusType>>
    tiers: Partial<Record<FPlanNameType, EligibilityStatusType>>
  }
}

/**
 * Eligibility configuration for feature toggles (original: s)
 */
const featureEligibilityConfig: FeatureEligibilityConfig = {
  [FeatureToggleType.VOICE]: {
    environments: {
      gov: EligibilityStatusType.INELIGIBLE,
    },
    tiers: {
      [FPlanNameType.ORG]: EligibilityStatusType.ELIGIBLE,
      [FPlanNameType.ENTERPRISE]: EligibilityStatusType.ELIGIBLE,
      [FPlanNameType.PRO]: EligibilityStatusType.ELIGIBLE,
      [FPlanNameType.STUDENT]: EligibilityStatusType.ELIGIBLE,
      [FPlanNameType.STARTER]: EligibilityStatusType.UPSELL,
    },
  },
  [FeatureToggleType.DISABLE_WORKSHOP]: {
    environments: {
      gov: EligibilityStatusType.ELIGIBLE,
    },
    tiers: {
      [FPlanNameType.ORG]: EligibilityStatusType.ELIGIBLE,
      [FPlanNameType.ENTERPRISE]: EligibilityStatusType.ELIGIBLE,
      [FPlanNameType.PRO]: EligibilityStatusType.UPSELL,
      [FPlanNameType.STUDENT]: EligibilityStatusType.UPSELL,
      [FPlanNameType.STARTER]: EligibilityStatusType.UPSELL,
    },
  },
  [FeatureToggleType.DISABLE_FIGJAM]: {
    environments: {
      gov: EligibilityStatusType.ELIGIBLE,
    },
    tiers: {
      [FPlanNameType.ORG]: EligibilityStatusType.ELIGIBLE,
      [FPlanNameType.ENTERPRISE]: EligibilityStatusType.ELIGIBLE,
      [FPlanNameType.PRO]: EligibilityStatusType.UPSELL,
      [FPlanNameType.STUDENT]: EligibilityStatusType.UPSELL,
      [FPlanNameType.STARTER]: EligibilityStatusType.UPSELL,
    },
  },
  [FeatureToggleType.DISABLE_AI_FEATURES]: {
    environments: {
      gov: EligibilityStatusType.ELIGIBLE,
    },
    tiers: {
      [FPlanNameType.ORG]: EligibilityStatusType.ELIGIBLE,
      [FPlanNameType.ENTERPRISE]: EligibilityStatusType.ELIGIBLE,
      [FPlanNameType.PRO]: EligibilityStatusType.ELIGIBLE,
      [FPlanNameType.STUDENT]: EligibilityStatusType.ELIGIBLE,
      [FPlanNameType.STARTER]: EligibilityStatusType.ELIGIBLE,
    },
  },
}

/**
 * Returns eligibility status for a feature toggle and plan (original: o)
 * @param plan
 * @param featureToggle
 * @param clusterName
 */
export function getEligibilityStatus(
  plan: { tier: FPlanNameType } | undefined,
  featureToggle: FeatureToggleType,
  clusterName: string = window.INITIAL_OPTIONS.cluster_name,
): EligibilityStatusType {
  if (clusterName === 'gov' && featureEligibilityConfig[featureToggle].environments.gov) {
    return featureEligibilityConfig[featureToggle].environments.gov!
  }
  if (plan && featureEligibilityConfig[featureToggle]?.tiers[plan.tier]) {
    return featureEligibilityConfig[featureToggle].tiers[plan.tier]!
  }
  return EligibilityStatusType.INELIGIBLE
}

/**
 * Returns feature state for a given plan and feature toggle (original: l)
 * @param plan
 * @param featureToggle
 * @param clusterName
 */
export function getFeatureState(
  plan: any,
  featureToggle: FeatureToggleType,
  clusterName: string = window.INITIAL_OPTIONS.cluster_name,
): FeatureStateType {
  const eligibility = getEligibilityStatus(plan, featureToggle, clusterName)
  if (eligibility === EligibilityStatusType.INELIGIBLE || !plan) {
    return FeatureStateType.DISABLED
  }
  switch (featureToggle) {
    case FeatureToggleType.VOICE:
      return eligibility === EligibilityStatusType.ELIGIBLE && plan.voiceEnabled
        ? FeatureStateType.ENABLED
        : FeatureStateType.DISABLED
    case FeatureToggleType.DISABLE_FIGJAM:
      return eligibility === EligibilityStatusType.ELIGIBLE && plan.figjamDisabledAt
        ? FeatureStateType.ENABLED
        : FeatureStateType.DISABLED
    case FeatureToggleType.DISABLE_WORKSHOP:
      return eligibility === EligibilityStatusType.ELIGIBLE && plan.workshopEnabled
        ? FeatureStateType.DISABLED
        : FeatureStateType.ENABLED
    case FeatureToggleType.DISABLE_AI_FEATURES:
      return eligibility === EligibilityStatusType.ELIGIBLE && plan.aiFeaturesEnabled
        ? FeatureStateType.ENABLED
        : FeatureStateType.DISABLED
    default:
      throwTypeError(featureToggle, 'Unknown plan feature')
  }
}

/**
 * Returns plan features and states for a plan (original: $$d2)
 * @param plan
 */
export function getPlanFeatures(plan: any) {
  return {
    ...plan,
    voice: {
      supports: getEligibilityStatus(plan, FeatureToggleType.VOICE),
      enabled: getFeatureState(plan, FeatureToggleType.VOICE),
    },
    disable_figjam: {
      supports: getEligibilityStatus(plan, FeatureToggleType.DISABLE_FIGJAM),
      enabled: getFeatureState(plan, FeatureToggleType.DISABLE_FIGJAM),
    },
    disable_workshop: {
      supports: getEligibilityStatus(plan, FeatureToggleType.DISABLE_WORKSHOP),
      enabled: getFeatureState(plan, FeatureToggleType.DISABLE_WORKSHOP),
    },
    disable_ai_features: {
      supports: getEligibilityStatus(plan, FeatureToggleType.DISABLE_AI_FEATURES),
      enabled: getFeatureState(plan, FeatureToggleType.DISABLE_AI_FEATURES),
    },
  }
}

/**
 * Returns organization/team data by level type (original: $$c3)
 * @param orgLevel
 * @param data
 */
export function getOrgLevelData(orgLevel: FOrganizationLevelType, data: any) {
  switch (orgLevel) {
    case FOrganizationLevelType.TEAM:
      return data.team
    case FOrganizationLevelType.ORG:
      return data.org
    default:
      throwTypeError(orgLevel)
  }
}

/**
 * Returns plan data with type (original: $$u1)
 * @param orgLevel
 * @param data
 */
export function getPlanData(orgLevel: FOrganizationLevelType, data: any) {
  return {
    ...getOrgLevelData(orgLevel, data),
    planType: orgLevel,
  }
}

/**
 * Parses organization parent id string (original: $$p0)
 * @param value
 */
export function parseOrgParentId(value: string | undefined) {
  if (!value || !value.includes('::'))
    return null
  const [type, parentId] = value.split('::')
  return type && parentId && Object.values(FOrganizationLevelType).includes(type as FOrganizationLevelType)
    ? { type, parentId }
    : null
}

/**
 * Checks if plan name is not starter or student (original: $$_4)
 * @param planName
 */
export function isPaidPlan(planName: FPlanNameType) {
  return ![FPlanNameType.STARTER, FPlanNameType.STUDENT].includes(planName)
}

// Export aliases for backward compatibility
export const Do = parseOrgParentId
export const Ef = getPlanData
export const HT = getPlanFeatures
export const RB = getOrgLevelData
export const e0 = isPaidPlan
