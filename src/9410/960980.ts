import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SessionStatus } from "../figma_app/763686";
import { Xr } from "../figma_app/27355";
import { isIpadDevice, getIsMobile } from "../figma_app/778880";
import { getI18nString } from "../905/303541";
import { showModalHandler } from "../905/156213";
import { getWorkshopModeStatus } from "../figma_app/789";
import { consumptionPaywallUtils } from "../905/224";
import { inputValue } from "../figma_app/455680";
import { selectCurrentFile } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { hasValidTeamPaymentStatus } from "../figma_app/598018";
import { FeatureFlag } from "../905/652992";
import { ConsumptionPaywallModalPlansPricing } from "../905/739964";
import { shouldOptimizeForIpad } from "../905/355607";
import { Qs, iN } from "../905/992395";
import { qU } from "../figma_app/913518";
import { deferCallback } from "../905/80656";
import { jz, C3 } from "../figma_app/587765";
export function $$E2(e) {
  let t = getI18nString("voting.modal.voting_setup_responsive_placeholder_prompt", {
    numVotes: e.userVoteLimit
  });
  return e.title || t;
}
let T = () => !(isIpadDevice() || getIsMobile());
export function $$w4() {
  let e = jz();
  return !!(e?.length && e?.length > 0);
}
export function $$S1() {
  let e = $$I7();
  let t = !!C3();
  let i = T() && ("eligible" === e || "eligibleWithUpgrade" === e);
  let [n, a] = useState(t && i);
  useEffect(() => {
    if (!t) {
      a(!1);
      return;
    }
    i && a(!0);
  }, [t, i]);
  return i || n;
}
export var $$j0 = (e => (e.FEATURE_DISABLED = "featureDisabled", e.ELIGIBLE_WITH_MOVE_FILE_TO_PAID_TEAM = "eligibleWithMoveFileToPaidTeam", e.ELIGIBLE_WITH_UPGRADE = "eligibleWithUpgrade", e.ELIGIBLE = "eligible", e))($$j0 || {});
export function $$I7() {
  let e = selectCurrentFile();
  let t = useSelector(t => e && e.teamId ? t.teams[e.teamId] : null);
  let i = useSelector(e => e.isFreeUser);
  let r = getWorkshopModeStatus(e?.key || "").enabled;
  let a = e?.isTryFile;
  let s = !!e && (e.canEdit || r);
  return a || !s ? "featureDisabled" : e.parentOrgId ? "eligible" : t ? hasValidTeamPaymentStatus(t) ? "eligible" : "eligibleWithUpgrade" : i ? "eligibleWithUpgrade" : "eligibleWithMoveFileToPaidTeam";
}
export function $$k8() {
  let e = useSelector(e => e.mirror.appModel.votingSessionInfo);
  let t = inputValue.getUserId();
  let i = t && e.userIdToVoteStampIds[t]?.length || 0;
  return e.userVoteLimit - i;
}
export function $$N9(e) {
  return Object.values(e.userIdToNodeVotes).reduce((e, t) => e + t.length, 0);
}
export function $$A10(e) {
  return new Set(e.reduce((e, t) => {
    let i = $$N9(t);
    let r = e.voteCount;
    return i < r ? e : i > r ? {
      voteCount: i,
      nodes: [t]
    } : {
      voteCount: r,
      nodes: [...e.nodes, t]
    };
  }, {
    voteCount: 0,
    nodes: []
  }).nodes.map(e => e.guid));
}
export function $$O11(e) {
  return function (t, i) {
    return t === e ? -1 : i === e ? 1 : t.localeCompare(i);
  };
}
export function $$L3() {
  let e = useSelector(e => e.mirror.appModel.votingSessionInfo.votingStage);
  let t = Xr(Qs);
  useEffect(() => {
    (e === SessionStatus.JOINED || e === SessionStatus.NOT_JOINED) && t({
      type: "SET_VIEW",
      payload: iN.DEFAULT
    });
  }, [e, t]);
}
export function $$R6() {
  let e = useSelector(e => e.mirror.appModel.votingSessionInfo.votingStage);
  let t = Xr(Qs);
  let i = shouldOptimizeForIpad();
  let o = qU();
  useEffect(() => {
    e !== SessionStatus.ENDED || i || (t({
      type: "VOTING_ENDED"
    }), deferCallback(o));
  }, [e, t, i, o]);
}
export function $$D5(e) {
  let t = $$I7();
  let i = selectCurrentFile();
  let a = useSelector(e => i && i.teamId ? e.teams[i.teamId] ?? null : null);
  let s = useDispatch<AppDispatch>();
  return useCallback(() => {
    if ("eligibleWithUpgrade" === t) s(showModalHandler({
      type: ConsumptionPaywallModalPlansPricing,
      data: {
        team: a,
        resource: FeatureFlag.VOTING,
        editorType: FFileType.WHITEBOARD,
        currentPlan: consumptionPaywallUtils.Plan.STARTER,
        upsellPlan: consumptionPaywallUtils.Plan.PRO
      }
    }));else if ("eligible" === t) {
      e();
      return !0;
    }
    return !1;
  }, [s, t, a, e]);
}
export const $_ = $$j0;
export const Av = $$S1;
export const DG = $$E2;
export const FJ = $$L3;
export const Ld = $$w4;
export const Pd = $$D5;
export const YR = $$R6;
export const e_ = $$I7;
export const hr = $$k8;
export const oC = $$N9;
export const yn = $$A10;
export const zi = $$O11;
