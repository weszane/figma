import { z } from "../905/239603";
import { dw } from "../905/513035";
import { FResourceCategoryType } from "../figma_app/191312";
import { WU } from "../figma_app/35887";
import { wF } from "../905/814802";
import { aw } from "../figma_app/175992";
var $$d1 = (e => (e[e.NONE = -1] = "NONE", e[e.VIEW_PROTOTYPES = 30] = "VIEW_PROTOTYPES", e[e.VIEW_METADATA = 50] = "VIEW_METADATA", e[e.VIEWER = 100] = "VIEWER", e[e.EDITOR = 300] = "EDITOR", e[e.ADMIN = 900] = "ADMIN", e[e.OWNER = 999] = "OWNER", e))($$d1 || {});
let c = z.object({
  created_at: z.union([z.string(), z.number()]),
  id: z.string(),
  level: z.nativeEnum($$d1),
  resource_id_or_key: z.string(),
  resource_type: z.nativeEnum(FResourceCategoryType),
  updated_at: z.string(),
  org_user: z.optional(WU.pick({
    id: !0,
    design_paid_status: !0,
    whiteboard_paid_status: !0,
    user_id: !0,
    permission: !0,
    updated_at: !0
  })),
  team_user: z.optional(wF.pick({
    id: !0,
    design_paid_status: !0,
    whiteboard_paid_status: !0,
    user_id: !0,
    team_id: !0
  })),
  realtime_token: z.string().optional()
});
let u = c.extend({
  pending: z.literal(!0),
  user_id: z.literal(null),
  user: z.object({
    id: z.string().nullable().optional(),
    email: z.string()
  }),
  invite: z.object({
    id: z.string(),
    redeemedBy: z.string().nullable(),
    billableProductKey: dw.nullable(),
    inviteeUserId: z.string().nullable()
  }).nullable().optional()
});
let p = c.extend({
  pending: z.literal(!1),
  user_id: z.string(),
  user: aw
});
let $$m2 = c.extend({
  pending: z.boolean(),
  user_id: z.string().nullable(),
  user: z.union([aw, z.object({
    id: z.string().nullable().optional(),
    email: z.string()
  })])
});
let $$h0 = z.union([u, p]);
export const an = $$h0;
export const e6 = $$d1;
export const rT = $$m2; 
