import { atom } from "../figma_app/27355";
import { T } from "../905/868547";
import { openFileAtom } from "../figma_app/516028";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { hasTeamPaidAccess } from "../figma_app/345997";
import { ng } from "../figma_app/205827";
import { M_ } from "../905/32091";
import { a as _$$a } from "../905/692930";
import { Z1, J9 } from "../905/401885";
import { _s, KI } from "../figma_app/33126";
import { Z_, Hh, Vm } from "../figma_app/579169";
import { r1 } from "../figma_app/545877";
let $$m3 = Z1(Z_, (e, t) => {
  let r = t(openFileAtom);
  if (null == r || null == e) return !1;
  let n = e.map(e => e.team).find(e => null != e && e.id === r.teamId);
  return null != n && ng.getProTrialStatus({
    grace_period_end: n.gracePeriodEnd ? n.gracePeriodEnd.toISOString() : null,
    grace_period_type: n.gracePeriodType
  }) === _$$a.IN_TRIAL;
});
let $$g5 = J9([Hh], ([e], t) => {
  let r = t(openFileAtom);
  let n = t(_s) ? null : e;
  return !!r && !!n && !r.teamId && !r.parentOrgId && r.folderId === n;
});
let f = createReduxSubscriptionAtomWithState(({
  progressBarState: e
}) => T(e?.mode));
let $$E4 = atom(e => new Promise(t => {
  e(f) || t(!1);
}));
let $$y7 = r1("figjam_editor_onboarded");
let b = Z1(Vm, (e, t) => {
  let r = t(openFileAtom);
  return r?.teamId ? e?.find(e => e.id === r?.teamId) : null;
});
let $$T0 = J9([KI, b], ([e, t], r) => {
  let n = r(openFileAtom);
  let i = n?.parentOrgId ? e[n.parentOrgId] : null;
  let s = t ? {
    id: t.id,
    subscription: t.subscription,
    student_team: !!t.studentTeamAt,
    grace_period_end: t.gracePeriodEnd?.toDateString() || null
  } : null;
  return M_({
    editorType: n?.editorType ?? null,
    org: i,
    team: s
  });
});
let $$I2 = atom(e => {
  let t = e(openFileAtom);
  if (!t) return !1;
  let {
    team
  } = t;
  return null != team && null == team.orgId && !hasTeamPaidAccess({
    subscription: team.subscription,
    student_team: null != team.studentTeamAt,
    grace_period_end: team.gracePeriodEnd?.toISOString() ?? null
  });
});
let $$S6 = atom(e => {
  let t = e(openFileAtom);
  return t?.canEdit ?? !1;
});
let $$v1 = atom(e => {
  let t = e(openFileAtom);
  return !!t && t.canView && !t.canEdit;
});
export const J1 = $$T0;
export const LZ = $$v1;
export const NZ = $$I2;
export const PD = $$m3;
export const Sb = $$E4;
export const pQ = $$g5;
export const wg = $$S6;
export const zo = $$y7;