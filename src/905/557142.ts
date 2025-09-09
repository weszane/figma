import { z } from 'zod';
import { ProductAccessTypeEnumSchema } from '../905/513035';
import { TeamUserSchema } from '../905/814802';
import { OrganizationUserSchemaAlias } from '../figma_app/35887';
import { UserOrgSchema } from '../figma_app/175992';
import { FResourceCategoryType } from '../figma_app/191312';

// Original code: $$d1 enum definition
export enum AccessLevelEnum {
  NONE = -1,
  VIEW_PROTOTYPES = 30,
  VIEW_METADATA = 50,
  VIEWER = 100,
  EDITOR = 300,
  ADMIN = 900,
  OWNER = 999,
}

// Original code: c schema
const BaseAccessSchema = z.object({
  created_at: z.union([z.string(), z.number()]),
  id: z.string(),
  level: z.nativeEnum(AccessLevelEnum),
  resource_id_or_key: z.string(),
  resource_type: z.nativeEnum(FResourceCategoryType),
  updated_at: z.string(),
  org_user: z.optional(OrganizationUserSchemaAlias.pick({
    id: true,
    design_paid_status: true,
    whiteboard_paid_status: true,
    user_id: true,
    permission: true,
    updated_at: true
  })),
  team_user: z.optional(TeamUserSchema.pick({
    id: true,
    design_paid_status: true,
    whiteboard_paid_status: true,
    user_id: true,
    team_id: true
  })),
  realtime_token: z.string().optional()
});

// Original code: u schema (extends c)
const PendingAccessSchema = BaseAccessSchema.extend({
  pending: z.literal(true),
  user_id: z.literal(null),
  user: z.object({
    id: z.string().nullable().optional(),
    email: z.string()
  }),
  invite: z.object({
    id: z.string(),
    redeemedBy: z.string().nullable(),
    billableProductKey: ProductAccessTypeEnumSchema.nullable(),
    inviteeUserId: z.string().nullable()
  }).nullable().optional()
});

// Original code: p schema (extends c)
const ActiveAccessSchema = BaseAccessSchema.extend({
  pending: z.literal(false),
  user_id: z.string(),
  user: UserOrgSchema
});

// Original code: $$m2 schema (extends c)
const MixedAccessSchema = BaseAccessSchema.extend({
  pending: z.boolean(),
  user_id: z.string().nullable(),
  user: z.union([UserOrgSchema, z.object({
    id: z.string().nullable().optional(),
    email: z.string()
  })])
});

// Original code: $$h0 union
const AccessSchema = z.union([PendingAccessSchema, ActiveAccessSchema]);

// Original exports: an, e6, rT
export const an = AccessSchema;
export const e6 = AccessLevelEnum;
export const rT = MixedAccessSchema;
