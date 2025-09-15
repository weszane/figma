import { z } from 'zod'
/**
 * Enum representing badge types.
 * Original variable: $$r1
 */
export enum BadgeType {
  FIGMA_PARTNER = 'figma_partner',
  TRUSTED = 'trusted',
  CREATOR_FUND = 'creator_fund',
  AWARD_2023 = 'award_2023',
}

/**
 * Zod schema for validating badge arrays.
 * Original variable: $$a0
 */
export const BadgeSchema = z.object({
  badges: z.array(z.nativeEnum(BadgeType)),
})

/**
 * Exported schema for external usage.
 * Original variable: n
 */
export const n = BadgeSchema

/**
 * Exported enum for external usage.
 * Original variable: s
 */
export const s = BadgeType
