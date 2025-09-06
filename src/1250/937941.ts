import { useDispatch } from "../vendor/514228";
import { K } from "../905/807535";
import { getFeatureFlags } from "../905/601108";
import { analyticsEventManager } from "../905/449184";
import { R } from "../905/165069";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { tc } from "../905/15667";
import { QL, EM } from "../905/609392";
import { q5 } from "../figma_app/516028";
import { T5 } from "../figma_app/465071";
import { wH } from "../figma_app/680166";
import { q } from "../905/202542";
import { q0, qm } from "../figma_app/431689";
import { i as _$$i } from "../905/46262";
import { a_, TI } from "../905/513035";
import { wR } from "../figma_app/765689";
if (443 == require.j) {}
export function $$y0() {
  let e;
  let t = useDispatch();
  let {
    nudgeUpgradeRequest
  } = q0();
  let y = getFeatureFlags().billing_remodel_downgrade_email_rerequest;
  let v = getFeatureFlags().deeplink_request_from_draft_copied_link_email;
  let w = T5("useUpgradeRequestModalOnPageLoad");
  let T = q5();
  let j = QL("entry_point") || "";
  let k = QL("upgrade_request_type") || "";
  let E = v && null !== T && "in_editor" === k;
  let C = E || a_(k);
  C && (e = E ? wR(T.editorType) : TI[k]);
  let I = K(tc, j) ?? tc.UNKNOWN_DEEP_LINK;
  let A = K(_$$i, j) ?? _$$i.UNKNOWN_DEEP_LINK;
  let {
    handleUpgrade,
    getPendingRequest,
    getUpgradeEligibility,
    getIsUpgradeHandlerLoading
  } = wH({
    entryPoint: I,
    plan: w?.data?.key?.parentId && w?.data?.key?.type ? {
      id: w.data.key.parentId,
      type: w.data.key.type
    } : void 0
  });
  let M = getIsUpgradeHandlerLoading() || "loading" === w.status;
  let P = y && C && !M;
  R(() => {
    if (!P || !e) {
      y && k && analyticsEventManager.trackDefinedEvent("monetization_expansion.deeplink_request_flow_invalid", {
        upgradeType: C ? k : "invalid",
        entryPoint: I,
        licenseType: e || "undefined",
        planType: w?.data?.key?.type,
        planId: w?.data?.key?.parentId || void 0,
        fileKey: T?.key
      });
      return;
    }
    let a = getUpgradeEligibility(e);
    if (analyticsEventManager.trackDefinedEvent("monetization_expansion.deeplink_request_flow", {
      upgradeType: k,
      entryPoint: I,
      licenseType: e,
      upgradeEligibility: a,
      planType: w?.data?.key?.type,
      planId: w?.data?.key?.parentId || void 0,
      fileKey: T?.key
    }), a !== q.CAN_UPGRADE) {
      let a = getPendingRequest(e);
      if (a) {
        let {
          requestCanBeNudged,
          upgradeRequestId
        } = qm(a);
        requestCanBeNudged ? nudgeUpgradeRequest(upgradeRequestId) : t(F.enqueue({
          message: getI18nString("team_user.actions.request_sent_well_let_you_know")
        }));
      }
      return;
    }
    handleUpgrade({
      licenseType: e,
      entryPoint: I,
      upgradeReason: A
    })({});
    EM("entry_point");
    EM("upgrade_request_type");
  }, M, e => !e);
}
export const i = $$y0;