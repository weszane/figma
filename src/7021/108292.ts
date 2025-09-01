import { z } from "../905/239603";
import { vh, YV } from "../figma_app/181241";
import { FOrganizationLevelType } from "../figma_app/191312";
let o = z.object({
  is_eligible: z.boolean(),
  renewal_date: z.string().optional(),
  admin_settings_url: z.string().optional(),
  admin_emails: z.array(z.string()).optional()
});
let $$r0 = new class {
  constructor() {
    this.TermsAcceptanceSchemaValidator = vh();
    this.NonAdminBillingTermsBannerSchemaValidator = YV("NonAdminBillingTermsBannerSchemaValidator", o, "terms_of_service_may_2025_update");
  }
  updateTermsAcceptance(e) {
    let {
      termsKey,
      planParentId,
      planType
    } = e;
    return this.TermsAcceptanceSchemaValidator.validate(async ({
      xr: e
    }) => await e.put(`/api/terms_of_service/${termsKey}/accept`, {
      plan_parent_id: planParentId,
      plan_type: planType
    }));
  }
  getNonAdminBillingTermsBanner(e) {
    let {
      orgId
    } = e;
    return this.NonAdminBillingTermsBannerSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/terms_of_service/non_admin_terms_banner", {
      plan_parent_id: orgId,
      plan_type: FOrganizationLevelType.ORG
    }));
  }
}();
export const w = $$r0; 
