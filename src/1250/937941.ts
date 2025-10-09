import { useDispatch } from "react-redux";
import { findMatchingValue } from "../905/807535";
import { getFeatureFlags } from "../905/601108";
import { analyticsEventManager } from "../905/449184";
import { useConditionalCallback } from "../905/165069";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { DeepLinkType } from "../905/15667";
import { getQueryParam, removeQueryParam } from "../905/609392";
import { selectCurrentFile } from "../figma_app/516028";
import { useCurrentPrivilegedPlan } from "../figma_app/465071";
import { wH } from "../figma_app/680166";
import { q } from "../905/202542";
import { q0, qm } from "../figma_app/431689";
import { i as _$$i } from "../905/46262";
import { isCollaboratorType, ProductAccessTypeMap } from "../905/513035";
import { getProductAccessTypeOrDefault } from "../figma_app/765689";
if (443 == require.j) {}
export function $$y0() {
  let e;
  let t = useDispatch<AppDispatch>();
  let {
    nudgeUpgradeRequest
  } = q0();
  let y = getFeatureFlags().billing_remodel_downgrade_email_rerequest;
  let v = getFeatureFlags().deeplink_request_from_draft_copied_link_email;
  let w = useCurrentPrivilegedPlan("useUpgradeRequestModalOnPageLoad");
  let T = selectCurrentFile();
  let j = getQueryParam("entry_point") || "";
  let k = getQueryParam("upgrade_request_type") || "";
  let E = v && null !== T && "in_editor" === k;
  let C = E || isCollaboratorType(k);
  C && (e = E ? getProductAccessTypeOrDefault(T.editorType) : ProductAccessTypeMap[k]);
  let I = findMatchingValue(DeepLinkType, j) ?? DeepLinkType.UNKNOWN_DEEP_LINK;
  let A = findMatchingValue(_$$i, j) ?? _$$i.UNKNOWN_DEEP_LINK;
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
  useConditionalCallback(() => {
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
        requestCanBeNudged ? nudgeUpgradeRequest(upgradeRequestId) : t(VisualBellActions.enqueue({
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
    removeQueryParam("entry_point");
    removeQueryParam("upgrade_request_type");
  }, M, e => !e);
}
export const i = $$y0;
