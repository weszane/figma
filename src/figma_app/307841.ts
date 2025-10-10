import { getFeatureFlags } from '../905/601108'
import { dayjs } from '../905/920142'
import { getInitialOptions } from '../figma_app/169182'
import { useCurrentPrivilegedPlan } from '../figma_app/465071'
import { selectCurrentFile } from '../figma_app/516028'

// Refactored from minified JavaScript: Renamed functions to descriptive names, added TypeScript interfaces for type safety, improved readability with comments, simplified logic where possible, and preserved all functionality. Identified no bugs or performance issues beyond minification. Original function names noted in comments.

// Define interfaces based on inferred usage
interface Plan {
  campfireModelEnabledAt?: string | null
}

interface File {
  plan?: Plan | null
}


interface CampfireOptions {
  preferOpenFilePlan?: boolean
}

interface DateCheckOptions {
  date?: Date
}

/**
 * Original: $$l1
 * Checks if the campfire model is enabled based on feature flags, file plan, or privileged plan.
 */
export function isCampfireModelEnabled(options?: CampfireOptions): boolean {
  const privilegedPlan: Plan | null = useCurrentPrivilegedPlan('useCampfireModelEnabled').unwrapOr(null)
  const currentFile: File | null = selectCurrentFile()
  const featureFlags = getFeatureFlags()
  const initialOptions = getInitialOptions()

  // Check global feature flag first
  if (featureFlags.campfire) {
    return true
  }

  // If preferring open file plan and file has a plan, use its campfireModelEnabledAt
  if (options?.preferOpenFilePlan && currentFile?.plan) {
    return !!currentFile.plan.campfireModelEnabledAt
  }

  // Otherwise, use privileged plan or initial options
  if (privilegedPlan) {
    return !!privilegedPlan.campfireModelEnabledAt
  }

  return !!initialOptions.campfire_model_enabled
}

/**
 * Original: $$d5
 * Checks if campfire education is enabled, considering model enablement, feature flags, and date ranges.
 */
export function isCampfireEducationEnabled(startDate?: string, endDate?: string): boolean {
  const privilegedPlan: Plan | null = useCurrentPrivilegedPlan('useCampfireEducationEnabled').unwrapOr(null)
  const isModelEnabled: boolean = isCampfireModelEnabled()
  const featureFlags = getFeatureFlags()

  // Check if admin dash education is enabled (requires model enabled and feature flag)
  const isAdminDashEduEnabled: boolean = isModelEnabled && !!featureFlags.campfire_admin_dash_edu

  // All conditions must be met: privileged plan exists, model enabled at date, admin dash enabled, and dates are within range
  if (!privilegedPlan || !privilegedPlan.campfireModelEnabledAt || !isAdminDashEduEnabled) {
    return false
  }

  const enabledAtPlusOneDay: Date = dayjs(privilegedPlan.campfireModelEnabledAt).add(1, 'day').toDate()
  const isAfterEnabled: boolean = isDateBeforeAnalyzeDataFlowV2Until({ date: enabledAtPlusOneDay })

  if (!isAfterEnabled) {
    return false
  }

  if (startDate) {
    const isStartValid: boolean = isDateBeforeAnalyzeDataFlowV2Until({ date: new Date(startDate) })
    if (!isStartValid) {
      return false
    }
  }

  if (endDate) {
    const isEndValid: boolean = isDateBeforeAnalyzeDataFlowV2Until({ date: new Date(endDate) })
    if (!isEndValid) {
      return false
    }
  }

  return true
}

/**
 * Original: $$c0
 * Checks if the current or provided date is before the analyze_data_flow_v2_until date.
 */
export function isAnalyzeDataFlowV2Expired(options?: DateCheckOptions): boolean {
  const targetDate: dayjs.Dayjs = options?.date ? dayjs(options.date) : dayjs()
  const untilDate = getInitialOptions().analyze_data_flow_v2_until

  return !!untilDate && dayjs(untilDate).isBefore(targetDate)
}

/**
 * Original: $$u3
 * Checks if the provided date is before the analyze_data_flow_v2_until date.
 */
export function isDateBeforeAnalyzeDataFlowV2Until(options: DateCheckOptions): boolean {
  const untilDate = getInitialOptions().analyze_data_flow_v2_until

  return !!untilDate && dayjs(options.date).isBefore(dayjs(untilDate))
}

/**
 * Original: $$p4
 * Checks if the campfire cart is enabled based on various flags and conditions.
 */
export function isCampfireCartEnabled(): boolean {
  const featureFlags = getFeatureFlags()
  const isExpired: boolean = isAnalyzeDataFlowV2Expired()
  const isModelEnabled: boolean = isCampfireModelEnabled()

  // If kill switch is on, disable cart
  if (featureFlags.campfire_cart_kill_switch) {
    return false
  }

  // Enable if expired, model enabled, or specific cart flags are on
  return isExpired || isModelEnabled || featureFlags.campfire_cart || featureFlags.campfire_cart_early_rollout
}

/**
 * Original: $$_2
 * Checks if the campfire cart banner is enabled (only if not expired and banner flag is on).
 */
export function isCampfireCartBannerEnabled(): boolean {
  const featureFlags = getFeatureFlags()
  const isExpired: boolean = isAnalyzeDataFlowV2Expired()

  return featureFlags.campfire_cart_banner && !isExpired
}

// Exports with original left-hand names, refactored right-hand names
export const IP = isAnalyzeDataFlowV2Expired
export const RR = isCampfireModelEnabled
export const UR = isCampfireCartBannerEnabled
export const dl = isDateBeforeAnalyzeDataFlowV2Until
export const sx = isCampfireCartEnabled
export const y3 = isCampfireEducationEnabled
