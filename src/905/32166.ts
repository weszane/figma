import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
import { XHR } from "../905/910117";
import { FAccessRequestStatusType } from "../figma_app/191312";
import { SortingCriteria } from "../figma_app/162807";
import { Sm } from "../905/144933";
export let $$l0 = new class {
  constructor() {
    this.FolderSearchSchemaValidator = createNoOpValidator();
    this.getFolderSearchResults = e => {
      let {
        query,
        orgId,
        teamId,
        maxNumResults
      } = e;
      return this.FolderSearchSchemaValidator.validate(async ({
        xr: e
      }) => await e.get("/api/resource_connection_invite/folder_search", APIParameterUtils.toAPIParameters({
        query,
        sort: SortingCriteria.RELEVANCY,
        desc: !0,
        org_id: orgId,
        max_num_results: maxNumResults,
        team_id: teamId
      }), {
        retryStrategyOverride: Sm
      }));
    };
  }
  createResourceConnectionInvite(e) {
    return XHR.post("/api/resource_connection_invite", e);
  }
  approveResourceConnectionInvite(e) {
    return XHR.put(`/api/resource_connection_invite/${e}`, {
      status: FAccessRequestStatusType.APPROVED
    });
  }
  denyResourceConnectionInvite(e) {
    return XHR.put(`/api/resource_connection_invite/${e}`, {
      status: FAccessRequestStatusType.DENIED
    });
  }
  revokeResourceConnectionInvite(e) {
    return XHR.put(`/api/resource_connection_invite/${e}`, {
      status: FAccessRequestStatusType.REVOKED
    });
  }
  sendCreateTeamEmail(e) {
    return XHR.post("/api/resource_connection_invite/send_create_team_email", e);
  }
}();
export const c = $$l0;