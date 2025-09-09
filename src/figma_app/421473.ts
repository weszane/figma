import { FOrganizationLevelType, FUserTypeClassification } from '../figma_app/191312'

/**
 * FeatureToggleType - Original: $$a4
 * Represents the types of feature toggles available.
 */
export enum FeatureToggleType {
  DISABLE_FIGJAM = 'disable_figjam',
  DISABLE_WORKSHOP = 'disable_workshop',
  VOICE = 'voice',
  DISABLE_AI_FEATURES = 'disable_ai_features',
}

/**
 * EligibilityStatusType - Original: $$s3
 * Represents the eligibility status types.
 */
export enum EligibilityStatusType {
  ELIGIBLE = 'eligible',
  UPSELL = 'upsell',
  INELIGIBLE = 'ineligible',
}

/**
 * FeatureStateType - Original: $$o0
 * Represents the state of a feature.
 */
export enum FeatureStateType {
  ENABLED = 'enabled',
  DISABLED = 'disabled',
}

// Refactored exports for compatibility with original names
export const s$ = FeatureToggleType
export const i5 = EligibilityStatusType
export const LC = FeatureStateType
export const h4 = FUserTypeClassification
export const OL = FOrganizationLevelType
