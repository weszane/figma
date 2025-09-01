import { vh } from "../figma_app/181241";
export let $$i0 = new class {
  constructor() {
    this.AutoAcceptResponseValidator = vh();
    this.UpdateInviteBillableProductKeyValidator = vh();
  }
  putAcceptInvite(e) {
    return this.AutoAcceptResponseValidator.validate(async ({
      xr: t
    }) => await t.put("/api/invites/accept", e));
  }
  updateInviteBillableProductKey(e) {
    let {
      inviteId,
      billableProductKey
    } = e;
    return this.UpdateInviteBillableProductKeyValidator.validate(async ({
      xr: e
    }) => await e.patch(`/api/invites/${inviteId}/billable_product_key`, {
      billable_product_key: billableProductKey
    }));
  }
}();
export const j = $$i0;