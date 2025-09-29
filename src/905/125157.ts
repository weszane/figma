import { z } from "zod";
import { ProductAccessTypeEnum } from "../905/513035";
import { FPlanFeatureType } from "../figma_app/191312";
import { AccountTypeEnum } from "../figma_app/35887";

/**
 * Zod schema for organization invite data.
 * Defines the structure for an org invite object with fields like id, org_id, email, etc.
 * Original: $$o0
 */
export const OrgInviteSchema = z.object({
  id: z.string(),
  org_id: z.string(),
  email: z.string(),
  account_type: z.nativeEnum(FPlanFeatureType),
  billable_product_key: z.nativeEnum(ProductAccessTypeEnum).nullable(),
  created_at: z.string(),
  updated_at: z.string(),
  type: z.literal(AccountTypeEnum.ORG_INVITE).default(AccountTypeEnum.ORG_INVITE),
  license_group_id: z.string().nullable(),
  workspace_id: z.string().nullable()
});

/**
 * Alias for OrgInviteSchema.
 * Original: n
 */
export const n = OrgInviteSchema;
