import { createNoOpValidator } from "../figma_app/181241";
import { XHR } from "../905/910117";
export let $$a0 = new class {
  constructor() {
    this.ApproveRequestsSchemaValidator = createNoOpValidator();
    this.DenyRequestsSchemaValidator = createNoOpValidator();
  }
  approveRequests(e) {
    return this.ApproveRequestsSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/account_type_requests/approve", e));
  }
  denyRequests(e) {
    return this.DenyRequestsSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/account_type_requests/deny", e));
  }
  nudgeRequest(e) {
    let {
      request_id
    } = e;
    return XHR.post(`/api/account_type_requests/${request_id}/nudge`, e);
  }
  dismissNudgeRequestBadge(e) {
    let {
      request_id
    } = e;
    return XHR.post(`/api/account_type_requests/${request_id}/nudge/dismiss_badge`, e);
  }
  updateRequestMessage(e) {
    let {
      request_id
    } = e;
    return XHR.post(`/api/account_type_requests/${request_id}/update_message`, e);
  }
}();
export const w = $$a0;