import { ServiceCategories as _$$e } from "src/905/165054";
import { getFeatureFlags } from "src/905/601108";
import a from "src/vendor/116389";
import { A } from "src/905/920142";
import { nD } from "src/figma_app/416935";
import { reportError } from "src/905/11";
import { cn, SH } from "src/figma_app/141320";
import { s as _$$s } from "src/905/573154";
import { getI18nStringAlias } from "src/905/303541";
import { J } from "src/905/231762";
import { jd, Gi, VA } from "src/figma_app/528509";
import { FFileType, FPaymentHealthStatusType, FPlanLimitationType, FPlanRestrictionType } from "src/figma_app/191312";
import { canEditTeam } from "src/figma_app/642025";
import { ZG } from "src/figma_app/736948";
import { SubscriptionType, BillingCycle } from "src/figma_app/831101";
var s = a;
let $$y34 = "https://www.figma.com/pricing/#cid-20p4Q0lWSOxIWj30zTY6P2";
let $$b1 = 2;
let $$T18 = 1;
let $$I7 = {
  [FFileType.DESIGN]: 3,
  [FFileType.WHITEBOARD]: 1,
  [FFileType.SLIDES]: 3,
  [FFileType.SITES]: 3,
  [FFileType.COOPER]: 3,
  [FFileType.FIGMAKE]: 3
};
let $$S17 = 3;
let $$v27 = 0;
let $$A11 = 0;
let $$x23 = 5;
function N(e) {
  return e > new Date();
}
export function $$C16(e) {
  let t = e && !e.org_id && e.grace_period_end && A.utc(e.grace_period_end);
  return !!t && t.valueOf() > Date.now();
}
export function $$w21(e, t = 14) {
  return !!(e && $$C16(e)) && A.utc(e.grace_period_end).valueOf() - Date.now() < 864e5 * t;
}
export function $$O29(e) {
  return !!e && null != e.subscription && e.subscription !== FPaymentHealthStatusType.INCOMPLETE;
}
export function $$R22(e) {
  return $$O29(e);
}
export function $$L32(e) {
  return !!e && ($$O29(e) || e.student_team || !!e.grace_period_end && N(new Date(e.grace_period_end)));
}
export function $$P19(e) {
  if (!e) return !1;
  let {
    subscription,
    studentTeamAt,
    gracePeriodEnd
  } = e;
  return !!subscription && subscription !== FPaymentHealthStatusType.INCOMPLETE || !!studentTeamAt || gracePeriodEnd && N(gracePeriodEnd);
}
export function $$D8(e) {
  let t = e.editorType;
  let r = !!e.team && !$$P19(e.team);
  let n = !e.teamId && !e.parentOrgId;
  let i = jd(e.project);
  let a = $$I7[t ?? FFileType.DESIGN];
  return t === FFileType.WHITEBOARD ? r || n ? a : 1 / 0 : r && !i ? a : 1 / 0;
}
export function $$k4(e) {
  return $$D8(e) < 1 / 0;
}
export function $$M2({
  openFile: e,
  pageCount: t
}) {
  return t >= $$D8(e);
}
export function $$F10(e) {
  return Object.values(e.teams).filter(t => canEditTeam(t.id, e) && (!$$L32(t) || t.student_team));
}
export function $$j5(e) {
  return Object.values(e.teams).filter(t => canEditTeam(t.id, e) && !$$L32(t));
}
export function $$U25(e, t, r, n) {
  if (t && !n && $$V31(t, r)) return !0;
  let i = e && r.folders[e];
  return !!i && $$B20(i, r, n);
}
export function $$B20(e, t, r) {
  var n;
  var i;
  var a;
  n = e.team_id ? t.teams[e.team_id] : null;
  i = t.user;
  a = t.userEduGracePeriods;
  return (!!e.team_id || "org_edit" !== e.sharing_audience_control) && !!(!e.team_id && !Gi(e) || e.team_id && (!r && H(n, i, a) || !$$L32(n) && (e.is_invite_only || e.is_view_only)));
}
export function $$G14(e, t, r) {
  return !(e.teamId || VA(e)) || !!e.teamId && (!!(t && r && (t.studentTeamAt ? !(cn(r) || t.eduGracePeriod?.isValid) : t.restrictionsList?.includes(FPlanLimitationType.LOCKED))) || (e.inviteOnlyAt || e.viewOnlyAt) && !$$P19(t));
}
export function $$V31(e, t) {
  return H(t.teams[e], t.user, t.userEduGracePeriods);
}
function H(e, t, r) {
  return !!e && !!t && (e.student_team ? !(cn(t) || SH(r, e.id).isInValidGracePeriod) : e.restrictions_list?.includes(FPlanLimitationType.LOCKED));
}
export function $$z13(e) {
  return Object.values(e.teams).some(t => $$V31(t.id, e) && canEditTeam(t.id, e));
}
export function $$W33(e, t) {
  let r = t.orgById[e];
  return r && r.standing === ZG.DELINQUENT;
}
export function $$K24(e, t) {
  let r = t.orgById[e];
  let n = s()([ZG.SUSPENDED, getFeatureFlags().scheduled_cancellation_enabled && ZG.DEACTIVATED]);
  return r && n.includes(r.standing);
}
export function $$Y15(e, t) {
  if (e.data && e.data.message) {
    let r = J(e);
    r && t(_$$s.error(r));
  } else {
    let r = J(e, getI18nStringAlias("error.unknown_contact_support"));
    t(_$$s.error(r));
  }
}
export function $$$28(e, t = new Date()) {
  let r = A(e);
  return r.isAfter(t, "second") ? r.toDate() : null;
}
export function $$X26(e, t) {
  return e === SubscriptionType.MONTHLY ? 0 : t;
}
export function $$q12(e, t) {
  return e === SubscriptionType.MONTHLY ? t : 0;
}
export function $$J30(e) {
  switch (e) {
    case SubscriptionType.MONTHLY:
      return BillingCycle.MONTH;
    case SubscriptionType.ANNUAL:
      return BillingCycle.YEAR;
    default:
      reportError(_$$e.MONETIZATION_UPGRADES, Error(`Attempted to get BillingInterval from invalid BillingPeriod: ${e}`));
      return null;
  }
}
export function $$Z3(e) {
  switch (e) {
    case BillingCycle.MONTH:
      return SubscriptionType.MONTHLY;
    case BillingCycle.YEAR:
      return SubscriptionType.ANNUAL;
    default:
      reportError(_$$e.MONETIZATION_UPGRADES, Error(`Attempted to get BillingPeriod from invalid BillingInterval: ${e}`));
      return null;
  }
}
export function $$Q6(e, t, r) {
  let n = "whiteboard" === r ? "whiteboard_paid_status" : "design_paid_status";
  return e.filter(e => !nD(e.email) && (e[n] === FPlanRestrictionType.FULL && !t.downgrade[r].includes(e.id) || t.upgrade[r].includes(e.id))).length;
}
export function $$ee0(e, t) {
  let r = !1;
  let n = null !== e ? Object.values(e).reduce((e, n) => {
    if (!n.user) return e;
    let i = {
      id: n.user.id,
      design_paid_status: n.design_paid_status,
      whiteboard_paid_status: n.whiteboard_paid_status,
      email: n.user.email || "",
      handle: n.user.handle || "",
      img_url: n.user.img_url || ""
    };
    n.user?.id === t?.id ? (r = !0, e.unshift(i)) : e.push(i);
    return e;
  }, []) : [];
  !r && t && n.unshift({
    id: t.id,
    design_paid_status: FPlanRestrictionType.STARTER,
    whiteboard_paid_status: FPlanRestrictionType.STARTER,
    email: t.email,
    handle: t.handle,
    img_url: t.img_url
  });
  return n;
}
export function $$et9(e, t) {
  return Math.max(e, t) - t;
}
export const BR = $$ee0;
export const Ht = $$b1;
export const J9 = $$M2;
export const JV = $$Z3;
export const KI = $$k4;
export const Kg = $$j5;
export const Ky = $$Q6;
export const LF = $$I7;
export const Lj = $$D8;
export const O1 = $$et9;
export const PS = $$F10;
export const PX = $$A11;
export const Rq = $$q12;
export const Rx = $$z13;
export const S$ = $$G14;
export const UE = $$Y15;
export const WQ = $$C16;
export const WW = $$S17;
export const Wf = $$T18;
export const XX = $$P19;
export const ZZ = $$B20;
export const _b = $$w21;
export const a5 = $$R22;
export const cW = $$x23;
export const dN = $$K24;
export const f4 = $$U25;
export const fD = $$X26;
export const h = $$v27;
export const mt = $$$28;
export const n0 = $$O29;
export const ne = $$J30;
export const oc = $$V31;
export const w5 = $$L32;
export const wn = $$W33;
export const zZ = $$y34;
