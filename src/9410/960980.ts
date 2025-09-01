import { useState, useEffect, useCallback } from "react";
import { d4, wA } from "../vendor/514228";
import { W8Y } from "../figma_app/763686";
import { Xr } from "../figma_app/27355";
import { wg, o4 } from "../figma_app/778880";
import { t as _$$t } from "../905/303541";
import { to } from "../905/156213";
import { DG as _$$DG } from "../figma_app/789";
import { F } from "../905/224";
import { BI } from "../figma_app/455680";
import { q5 } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { PS } from "../figma_app/598018";
import { Bi } from "../905/652992";
import { DV } from "../905/739964";
import { $ } from "../905/355607";
import { Qs, iN } from "../905/992395";
import { qU } from "../figma_app/913518";
import { D } from "../905/80656";
import { jz, C3 } from "../figma_app/587765";
export function $$E2(e) {
  let t = _$$t("voting.modal.voting_setup_responsive_placeholder_prompt", {
    numVotes: e.userVoteLimit
  });
  return e.title || t;
}
let T = () => !(wg() || o4());
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
  let e = q5();
  let t = d4(t => e && e.teamId ? t.teams[e.teamId] : null);
  let i = d4(e => e.isFreeUser);
  let r = _$$DG(e?.key || "").enabled;
  let a = e?.isTryFile;
  let s = !!e && (e.canEdit || r);
  return a || !s ? "featureDisabled" : e.parentOrgId ? "eligible" : t ? PS(t) ? "eligible" : "eligibleWithUpgrade" : i ? "eligibleWithUpgrade" : "eligibleWithMoveFileToPaidTeam";
}
export function $$k8() {
  let e = d4(e => e.mirror.appModel.votingSessionInfo);
  let t = BI.getUserId();
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
  let e = d4(e => e.mirror.appModel.votingSessionInfo.votingStage);
  let t = Xr(Qs);
  useEffect(() => {
    (e === W8Y.JOINED || e === W8Y.NOT_JOINED) && t({
      type: "SET_VIEW",
      payload: iN.DEFAULT
    });
  }, [e, t]);
}
export function $$R6() {
  let e = d4(e => e.mirror.appModel.votingSessionInfo.votingStage);
  let t = Xr(Qs);
  let i = $();
  let o = qU();
  useEffect(() => {
    e !== W8Y.ENDED || i || (t({
      type: "VOTING_ENDED"
    }), D(o));
  }, [e, t, i, o]);
}
export function $$D5(e) {
  let t = $$I7();
  let i = q5();
  let a = d4(e => i && i.teamId ? e.teams[i.teamId] ?? null : null);
  let s = wA();
  return useCallback(() => {
    if ("eligibleWithUpgrade" === t) s(to({
      type: DV,
      data: {
        team: a,
        resource: Bi.VOTING,
        editorType: FFileType.WHITEBOARD,
        currentPlan: F.Plan.STARTER,
        upsellPlan: F.Plan.PRO
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