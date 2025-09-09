import { z } from 'zod'
import { createPrimaryKeySchema, describeNormalized } from '../905/67898'
import { CollaboratorTypeSchema } from '../905/513035'
import { UserOrgSchema } from '../figma_app/175992'
import { FPlanRestrictionType } from '../figma_app/191312'


/**
 * Enum representing team types (original: $$l0).
 * Used to categorize teams by their primary function.
 */
export enum TeamType {
  DESIGN = 'design',
  WHITEBOARD = 'whiteboard',
}

/**
 * Schema for TeamUser entity (original: $$d1).
 * Defines the structure and validation for team user data using Zod.
 * This includes user details, payment statuses, and organizational info.
 */
export const TeamUserSchema = describeNormalized('TeamUser', z.object({
  id: createPrimaryKeySchema(),
  team_id: z.string(),
  user_id: z.string(),
  design_paid_status: z.nativeEnum(FPlanRestrictionType),
  whiteboard_paid_status: z.nativeEnum(FPlanRestrictionType),
  drafts_folder_id: z.string().nullable().optional(),
  created_at: z.string(),
  updated_at: z.string(),
  user: UserOrgSchema.optional(),
  show_figjam_user_onboarding: z.boolean().nullable(),
  active_seat_type: CollaboratorTypeSchema.nullish(),
}))

// Export aliases for backward compatibility (original: j4, wF)
export const j4 = TeamType
export const wF = TeamUserSchema
