import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { selectWithShallowEqual } from "../905/103090";
import { mI } from "../figma_app/566371";
import { reportError } from "../905/11";
import { A5, MF } from "../figma_app/391338";
import { Z } from "../905/515860";
import { FPlanNameType, FOrganizationLevelType, FMemberRoleType, FUserTypeClassification } from "../figma_app/191312";
import { mZ, T_, Ji, zl, gq, KK } from "../905/276025";
export function $$m7() {
  return useAtomWithSubscription(mZ(!0));
}
export function $$g6() {
  return useAtomWithSubscription(T_(!0));
}
export function $$f19() {
  return useAtomWithSubscription(Ji(!0));
}
export function $$E8(e, t) {
  let r = useAtomWithSubscription(zl(!0));
  let n = useAtomWithSubscription(mZ(!0));
  S(r.transform(e => e?.key), n.transform(e => e?.key), A5.PlanHooks.useCurrentPrivilegedPlan, e, t?.sampleRate);
  return getFeatureFlags().plan_hook_migration && t?.useSidebarOrOpenFile ? n : r;
}
export function $$y13({
  reportErrorsToTeam: e
}) {
  let t = $$E8("useSuspendCurrentPrivilegedPlan");
  let [r] = mI(t);
  if ("loaded" !== r.status) {
    let t = Error("disabled" === r.status ? "Plan fetching disabled" : "Error fetching plan");
    reportError(e, t);
    return t;
  }
  let n = r.data;
  if (!n) {
    let t = Error("No Plan found");
    reportError(e, t);
    return t;
  }
  return n;
}
export function $$b2(e, t) {
  let r = useAtomWithSubscription(gq(!0));
  let n = useAtomWithSubscription(Ji(!0));
  S(r.transform(e => e.planKey), n.transform(e => e.planKey), A5.PlanHooks.useCurrentPlanUser, e, t?.sampleRate);
  return getFeatureFlags().plan_hook_migration && t?.useSidebarOrOpenFile ? n : r;
}
export function $$T12(e, t) {
  let r = useAtomWithSubscription(KK(!0));
  let n = useAtomWithSubscription(T_(!0));
  S(r.transform(e => e?.key), n.transform(e => e?.key), A5.PlanHooks.useCurrentPublicPlan, e, t?.sampleRate);
  return getFeatureFlags().plan_hook_migration && t?.useSidebarOrOpenFile ? n : r;
}
function I(e) {
  return `${e.type}::${e.parentId}`;
}
let S = (e, t, r, a, s = .1) => {
  let o = useSelector(e => e.selectedView?.view === "folder");
  let d = selectWithShallowEqual(e => ({
    currentUserOrgId: e.currentUserOrgId,
    currentTeamId: e.currentTeamId,
    getTeamIdResult: Z(e),
    selectedView: e.selectedView?.view,
    openFileKey: e.openFile?.key,
    openFileParentOrgId: e.openFile?.parentOrgId,
    openFileTeamId: e.openFile?.teamId
  }));
  let [c, _] = useState(!1);
  useEffect(() => {
    setTimeout(() => _(!0), 2e3);
  }, []);
  MF({
    oldValue: e.transform(e => I(e)),
    newValue: t.transform(e => I(e)),
    label: r,
    contextArgs: {
      callsite: a,
      ...d
    },
    sampleRate__UNSTABLE: s,
    trackLatency: !1,
    enableShadowRead: !o || c
  });
};
export function $$v3(e) {
  return useMemo(() => e.transform(e => $$A22(e)), [e]);
}
export function $$A22(e) {
  return !!e && [FPlanNameType.PRO, FPlanNameType.STUDENT].includes(e.tier);
}
export function $$x14(e) {
  return useMemo(() => e.transform(e => e.tier === FPlanNameType.STUDENT), [e]);
}
export function $$N15(e) {
  return useMemo(() => e.transform(e => e.tier === FPlanNameType.STARTER), [e]);
}
export function $$C17(e) {
  return useMemo(() => e.transform(e => [FPlanNameType.STARTER, FPlanNameType.PRO].includes(e.tier)), [e]);
}
export function $$w20(e) {
  return useMemo(() => e.transform(e => [FPlanNameType.STARTER, FPlanNameType.STUDENT].includes(e.tier)), [e]);
}
export function $$O1(e) {
  return useMemo(() => e.transform(e => $$R23(e)), [e]);
}
export function $$R23(e) {
  return !!e && [FPlanNameType.ORG, FPlanNameType.ENTERPRISE].includes(e.tier);
}
export function $$L4(e) {
  return e?.key.type === FOrganizationLevelType.ORG ? e?.key.parentId ?? void 0 : void 0;
}
export function $$P10(e) {
  return useMemo(() => e.transform(e => e?.permission === FMemberRoleType.ADMIN), [e]);
}
export function $$D16(e) {
  return useMemo(() => e.transform(e => e?.key.type === FUserTypeClassification.ORG_USER), [e]);
}
export function $$k18(e) {
  return useMemo(() => e.transform(e => j(e)), [e]);
}
export function $$M5(e) {
  return useMemo(() => e.transform(e => U(e) || j(e)), [e]);
}
export function $$F21(e) {
  return useMemo(() => e.transform(e => $$B9(e)), [e]);
}
function j(e) {
  return e?.key.type === FUserTypeClassification.ORG_USER && e?.permission === FMemberRoleType.ADMIN;
}
function U(e) {
  return e?.key.type === FUserTypeClassification.ORG_USER && e?.permission === FMemberRoleType.MEMBER;
}
export function $$B9(e) {
  return e?.key.type === FUserTypeClassification.ORG_USER && e?.permission === FMemberRoleType.GUEST;
}
export function $$G0(e, t) {
  switch (t) {
    case FMemberRoleType.ADMIN:
      return j(e);
    case FMemberRoleType.MEMBER:
      return U(e) || j(e);
    case FMemberRoleType.GUEST:
      return $$B9(e) || U(e) || j(e);
    default:
      throwTypeError(t);
  }
}
export function $$V11(e) {
  return useMemo(() => e.transform(e => {
    var t;
    t = e;
    return t?.key.type === FUserTypeClassification.TEAM_USER && t?.permission === FMemberRoleType.ADMIN;
  }), [e]);
}
export const A8 = $$G0;
export const Az = $$O1;
export const D6 = $$b2;
export const EV = $$v3;
export const H3 = $$L4;
export const Kd = $$M5;
export const No = $$g6;
export const S2 = $$m7;
export const T5 = $$E8;
export const Ty = $$B9;
export const Um = $$P10;
export const W8 = $$V11;
export const X$ = $$T12;
export const XP = $$y13;
export const YQ = $$x14;
export const YY = $$N15;
export const fh = $$D16;
export const iW = $$C17;
export const j_ = $$k18;
export const px = $$f19;
export const q8 = $$w20;
export const sI = $$F21;
export const vj = $$A22;
export const zQ = $$R23;
