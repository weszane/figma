import { getFeatureFlags } from "../905/601108";
import { IT } from "../figma_app/566371";
import { H } from "../figma_app/47866";
import { bg, sN } from "../1250/282084";
import { jI } from "../1250/807901";
import { K8 } from "../1250/958770";
var $$d2 = (e => (e.NotSetup = "not_setup", e.Pending = "pending", e.Connected = "connected", e))($$d2 || {});
var $$c3 = (e => (e.NotSetup = "not_setup", e.Pending = "pending", e.Connected = "connected", e.NeedsInfo = "needs_info", e))($$c3 || {});
function _(e, t) {
  switch (e) {
    case "not_setup":
    default:
      return "not_setup";
    case "pending":
      return "pending";
    case "connected":
      if (t.length > 0) return "connected";
      return "needs_info";
  }
}
export function $$u0() {
  let e = jI();
  let t = getFeatureFlags().dt_github_app ?? !1;
  let [{
    data: n,
    status: i
  }] = IT(bg({
    planType: e?.type,
    planParentId: e?.parentId
  }), {
    enabled: !!e && !!e.type && !!e.parentId
  });
  return t && "loaded" === i && n ? function (e) {
    switch (e?.status) {
      case K8.Connected:
        return "connected";
      case K8.NotConnected:
        if (e.installation_request && "requested" === e.installation_request.status) return "pending";
        return "not_setup";
      default:
        return "not_setup";
    }
  }(n) : "not_setup";
}
export function $$m1(e) {
  let t = $$u0();
  let [n] = IT(sN(e), {
    enabled: "connected" === t
  });
  return "connected" === t && n.data ? {
    ...n.data,
    status: _(t, n.data.selectedRepositories),
    queryStatus: n.status
  } : {
    status: _(t, []),
    queryStatus: H.DISABLED,
    availableRepositories: [],
    selectedRepositories: [],
    libraryKey: e
  };
}
export const FS = $$u0;
export const OG = $$m1;
export const kt = $$d2;
export const w6 = $$c3;