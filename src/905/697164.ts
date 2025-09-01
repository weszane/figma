import { z } from "../905/239603";
import { bO } from "../905/513035";
import { FPlanFeatureType } from "../figma_app/191312";
import { QT } from "../figma_app/576636";
import { Wd } from "../figma_app/35887";
export let $$l0 = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string().nullable(),
  account_type: z.nativeEnum(FPlanFeatureType).nullable(),
  whiteboard_paid_status: z.nativeEnum(FPlanFeatureType).nullish(),
  dev_mode_paid_status: z.nativeEnum(FPlanFeatureType).nullish(),
  isOrgInvite: z.boolean().optional(),
  scim_metadata: z.record(z.string(), z.string().nullable()).nullable(),
  scim_seat_type: QT.nullish(),
  type: z.literal(Wd.IDP_USER).$$default(Wd.IDP_USER),
  seat_type_key: bO.nullish()
});
export const S = $$l0; 
