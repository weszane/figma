import { vh, YV } from "../figma_app/181241";
import { ar } from "../figma_app/934005";
import { P } from "../905/242077";
import { z } from "../905/239603";
let o = z.object({
  line1: z.string(),
  line2: z.string().optional(),
  city: z.string(),
  state: z.string().optional(),
  postal_code: z.string(),
  country: z.string()
});
let l = z.object({
  id: z.string(),
  type: z.string(),
  brand: z.string().optional(),
  last4: z.string(),
  exp_month: z.number(),
  exp_year: z.number(),
  billing_address: o.optional(),
  shipping_address: o.optional(),
  country: z.string(),
  billing_country: z.string(),
  payment_method: z.string()
});
let $$d0 = new class {
  constructor() {
    this.UpdateUpgradeApprovalSettingsValidator = vh();
    this.PlanInvoicesValidator = YV("PlanInvoicesValidator", e => e.object({
      invoices: ar.array()
    }), null);
    this.TransferAdminsSchemaValidator = vh();
    this.EligibleUpgradeDataSchemaValidator = YV("EligibleUpgradeDataSchemaValidator", e => e.object({
      eligible_team_users: e.array(P)
    }), null, !1);
    this.ValidatePaymentSchemaValidator = YV("ValidatePaymentSchemaValidator", e => e.$$void(), null, !1);
    this.SavedPaymentMethodSchemaValidator = YV("SavedPaymentMethodSchemaValidator", e => e.object({
      payment_methods: e.array(l)
    }), null, !1);
  }
  updateUpgradeApprovalSettings(e, t, i) {
    return this.UpdateUpgradeApprovalSettingsValidator.validate(async ({
      xr: n
    }) => await n.put(`/api/plans/${e}/${t}/auto_approval_settings`, {
      auto_approval_settings: i
    }));
  }
  getPlanInvoices(e) {
    return this.PlanInvoicesValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/plans/${e.planType}/${e.planId}/invoices`));
  }
  getUpcomingPlanInvoices(e) {
    return this.PlanInvoicesValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/plans/${e.planType}/${e.planId}/invoices/upcoming`));
  }
  getOpenPlanInvoices(e) {
    return this.PlanInvoicesValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/plans/${e.planType}/${e.planId}/invoices/open`));
  }
  getTransferAdmins(e, t, i, n) {
    return this.TransferAdminsSchemaValidator.validate(async ({
      xr: r
    }) => await r.get(`/api/plans/${e}/${t}/transfer_plan_admins`, {
      resource_type: i,
      resource_id_or_key: n
    }));
  }
  getEligibleUpgradeData(e) {
    return this.EligibleUpgradeDataSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/plans/eligible_upgrade_data", {
      team_id: e.teamId
    }));
  }
  postValidatePayment(e) {
    return this.ValidatePaymentSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/plans/validate_payment", {
      billing_address: e.billingAddress,
      shipping_address: e.shippingAddress,
      payment_method_id: e.paymentMethodId
    }));
  }
  getSavedPaymentMethods(e) {
    return this.SavedPaymentMethodSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/plans/${e.planType}/${e.planId}/payment_methods`));
  }
}();
export const V = $$d0;