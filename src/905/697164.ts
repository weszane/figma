import { z } from 'zod'
import { CollaboratorTypesSchema } from '../905/513035'
import { AccountTypeEnum } from '../figma_app/35887'
import { FPlanFeatureType } from '../figma_app/191312'
import { AccessLevelSchema } from '../figma_app/576636'

export let idpUserSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string().nullable(),
  account_type: z.nativeEnum(FPlanFeatureType).nullable(),
  whiteboard_paid_status: z.nativeEnum(FPlanFeatureType).nullish(),
  dev_mode_paid_status: z.nativeEnum(FPlanFeatureType).nullish(),
  isOrgInvite: z.boolean().optional(),
  scim_metadata: z.record(z.string(), z.string().nullable()).nullable(),
  scim_seat_type: AccessLevelSchema.nullish(),
  type: z.literal(AccountTypeEnum.IDP_USER).default(AccountTypeEnum.IDP_USER),
  seat_type_key: CollaboratorTypesSchema.nullish(),
})
export const S = idpUserSchema
