import { Rs } from "../figma_app/288654";
import { q5 } from "../figma_app/516028";
import { iZ } from "../905/372672";
import { OiG } from "../figma_app/43951";
import { wH } from "../figma_app/680166";
import { Gv } from "../figma_app/736948";
import { q } from "../905/202542";
var $$c1 = (e => (e[e.REQUEST_NEEDED = 0] = "REQUEST_NEEDED", e[e.REQUEST_EXISTS = 1] = "REQUEST_EXISTS", e[e.NO_REQUEST_NEEDED = 2] = "NO_REQUEST_NEEDED", e[e.DATA_LOADING = 3] = "DATA_LOADING", e))($$c1 || {});
export function $$u0() {
  let e = q5();
  let t = iZ();
  let {
    getUpgradeEligibility,
    getPendingRequest,
    getIsUpgradeHandlerLoading
  } = wH();
  let p = Rs(OiG, {
    fileKey: e?.key ?? "",
    orgId: e?.parentOrgId ?? null
  }, {
    enabled: !!e
  });
  if (!e || null === e.editorType || !t) return 2;
  if ("loading" === p.status || getIsUpgradeHandlerLoading()) return 3;
  if ("loaded" === p.status) {
    let n = e.editorType?.toString();
    let i = getUpgradeEligibility(n, e.canEdit);
    let a = getPendingRequest(n);
    let s = e.org?.inviteWhitelist?.guestInviteSetting === Gv.REQUIRE_APPROVAL && !!p.data.orgJoinRequest;
    let o = p.data.file?.fileRoleRequests.find(e => e.requesterUserId === t.id);
    if (a || s || o) return 1;
    if (i === q.CAN_UPGRADE) return 0;
  }
  return 2;
}
export const N = $$u0;
export const Q = $$c1;