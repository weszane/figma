import { nativeEnum, z } from 'zod'
import { orgSamlConfigSchema } from '../905/499884'
import { FOrganizationRoleType, FTeamAssignmentMethodType } from '../figma_app/191312'

/**
 * OrganizationRoleTypeSchema - Zod schema for organization role type.
 */
export const OrganizationRoleTypeSchema = nativeEnum(FOrganizationRoleType)

/**
 * TeamAssignmentMethodTypeSchema - Zod schema for team assignment method type.
 */
export const TeamAssignmentMethodTypeSchema = nativeEnum(FTeamAssignmentMethodType)

/**
 * OrganizationUserAssignmentSchema - Zod schema for organization user assignment.
 * Original variable: $$l0
 */
export const OrganizationUserAssignmentSchema = z.object({
  actor_user_id: z.string().nullish(),
  assigned_at: z.string().nullish(),
  created_at: z.string(),
  id: z.string(),
  is_main_workspace: z.boolean(),
  org_user_id: z.string(),
  permission: OrganizationRoleTypeSchema,
  update_reason: TeamAssignmentMethodTypeSchema.nullish(),
  updated_at: z.string(),
  uuid: z.string(),
  workspace_id: z.string(),
  idp_group: orgSamlConfigSchema.nullable().optional(),
  idp_group_uuid: z.string().nullish(),
})

/*
 * Refactored exports for clarity and maintainability.
 * Original export: export const C = $$l0
 */
export const C = OrganizationUserAssignmentSchema
export const S = OrganizationRoleTypeSchema
export const O = TeamAssignmentMethodTypeSchema
