import { z } from "../905/239603";
import { createNoOpValidator, createMetaValidator } from "../figma_app/181241";
import { createProductAccessSchema } from "../905/513035";
import { D } from "../905/962956";
let o = z.object({
  charge_per_seat: z.number(),
  credit_per_seat: z.number(),
  max_seats_to_credit: z.number(),
  currency: D,
  savings_per_seat: z.number()
});
let $$l0 = new class {
  constructor() {
    this.TeamSummarySchemaValidator = createNoOpValidator();
    this.PreviewAddProratedAnnualSeatsValidator = createMetaValidator("PreviewAddProratedAnnualSeatsValidator", z.object({
      estimate_context_by_billable_product: createProductAccessSchema(o)
    }), null);
    this.HostedInvoicesPageSchemaValidator = createNoOpValidator();
  }
  getTeamSummary(e) {
    return this.TeamSummarySchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/subscriptions/team/${e.teamId}/summary`));
  }
  getPreviewAddProratedAnnualSeats(e) {
    return this.PreviewAddProratedAnnualSeatsValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/subscriptions/team/${e.teamId}/preview_coterm_annual_seats`));
  }
  getHostedInvoicesPage(e) {
    return this.HostedInvoicesPageSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/subscriptions/team/${e.teamId}/hosted_invoice_url`));
  }
}();
export const T = $$l0;