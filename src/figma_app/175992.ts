import { z } from 'zod'

/**
 * Enum for status types (original: $$i1)
 */
export enum StatusType {
  NONE = 'none',
  ACCEPTED = 'accepted',
  STARTED_ONBOARDING = 'started_onboarding',
  DISABLED = 'disabled',
  ENABLED = 'enabled',
}

/**
 * Enum for source types (original: $$a0)
 */
export enum SourceType {
  FILE = 'file',
  EXTENSION = 'extension',
}

/**
 * Enum for payout metrics (original: $$s2)
 */
export enum PayoutMetric {
  NUM_CUSTOMERS = 'num_customers',
  PAYOUTS = 'payouts',
  GROSS = 'gross',
  LAST_UPDATED = 'last_updated_at',
  ALL_TIME_TOTAL_EARNED = 'all_time_total_earned',
  NUM_PURCHASES = 'num_purchases',
}

/**
 * Maps status string to numeric value (original: $$o6)
 * @param status StatusType string
 * @returns number representation of status
 */
export function statusTypeToNumber(status?: StatusType): number {
  if (!status) return 0;
  switch (status) {
    case StatusType.NONE: return 0;
    case StatusType.ACCEPTED: return 1;
    case StatusType.STARTED_ONBOARDING: return 2;
    case StatusType.DISABLED: return 3;
    case StatusType.ENABLED: return 4;
    default: return 0;
  }
}

/**
 * Enum for visibility options (original: $$l5)
 */
export enum VisibilityOption {
  ALWAYS = 'always',
  NEVER = 'never',
}

/**
 * Zod schema for user/org (original: $$d3)
 */
export const UserOrgSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  handle: z.string(),
  img_url: z.string(),
  email: z.string().optional(),
  description: z.string().nullish(),
  org_id: z.string().optional(),
})

/**
 * Enum for editor location (original: $$c4)
 */
export enum EditorLocation {
  EDITOR_ON_MAIN = 'Editor on main',
  EDITOR_ON_TEAM = 'Editor on team',
}

// Export aliases for backward compatibility
export const D6 = SourceType
export const P5 = StatusType
export const VU = PayoutMetric
export const aw = UserOrgSchema
export const pl = EditorLocation
export const vA = VisibilityOption
export const z4 = statusTypeToNumber
