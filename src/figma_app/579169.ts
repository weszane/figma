import { eU, Iz, mg } from "../figma_app/27355";
import { jm, qe } from "../figma_app/416935";
import { HB } from "../3973/538504";
import { bt } from "../905/270322";
import { Tej, UpR } from "../figma_app/43951";
import { w5 } from "../figma_app/345997";
import { bW } from "../905/587414";
import { qo } from "../905/696396";
import { J9, Z1 } from "../905/401885";
import { ZS, rg, _s } from "../figma_app/33126";
let $$_9 = J9([Tej.Query({}), ZS], ([e, t]) => null != e.currentUser.id && t?.canRead ? qo.ORG : qo.PERSONAL);
let $$h11 = Z1(Tej.Query({}), e => e.currentUser.createdAt);
let $$m0 = Z1($$h11, e => e.getTime() <= Date.now() - 12096e5);
let $$g1 = J9([rg, Tej.Query({})], ([e, t], r) => {
  let n = r(_s);
  if (!n) return t.currentUser.draftsFolderId;
  {
    let t = e?.find(e => e.orgId === n);
    return t?.draftsFolderId || null;
  }
});
Z1(Tej.Query({}), e => {
  let t = e.currentUser.email;
  return jm(t) || !!t?.endsWith("@dev.figma.com");
});
let $$f15 = Z1(Tej.Query({}), e => null != e.currentUser.studentValidatedAt);
let $$E6 = Z1(UpR.Query({}), e => e.currentUser.eduPeriodEnd);
let $$y8 = Z1(Tej.Query({}), e => e.currentUser.teamRoles);
let $$b7 = Z1($$y8, e => e?.map(e => e.team).filter(e => null != e));
let T = bt(e => e.isFreeUser);
let I = J9([rg, $$b7], ([e, t]) => (!e?.length || !(e.length > 0)) && (null == t || !t.some(e => e.canEdit && w5({
  subscription: e.subscription,
  student_team: !!e.studentTeamAt,
  grace_period_end: e.gracePeriodEnd ? e.gracePeriodEnd.toISOString() : null
}))));
let $$S2 = I;
let $$v13 = Z1(I, (e, t) => t(T));
let $$A3 = Z1(rg, e => !!e?.length && e.length > 0);
let $$x12 = Z1(Tej.Query({}), e => {
  let t = e.currentUser.email;
  return null != t ? qe(t) : void 0;
});
let $$N4 = Z1(Tej.Query({}), e => e.currentUser.profile?.jobTitle);
Z1($$N4, e => {
  let t = HB(e);
  return "designer" !== t && "other" !== t && "unknown" !== t;
});
Z1(Tej.Query({}), e => e.currentUser.profile?.usagePurpose);
let C = bt(e => e.authedProfilesById);
eU(e => Object.values(e(C)).some(e => !!e.org_id || !!e.team_id));
Z1(Tej.Query({}), e => e.currentUser.email);
let $$w10 = Z1(Tej.Query({}), e => e.currentUser.emailValidatedAt);
let O = bt(e => e.userAnalyticsData);
let $$R14 = Iz(e => mg(O, t => {
  if (null == t) return;
  let r = t[e];
  return bW.includes(e) && r ? new Date(r) : r;
}));
let $$L5 = J9([Tej.Query({}), ZS], ([e, t]) => {
  let r = "loaded" === e.currentUser.externalRestrictedOrgId.status ? e.currentUser.externalRestrictedOrgId.data : null;
  return !!(e.currentUser && r && t?.id !== r);
});
export const Fy = $$m0;
export const Hh = $$g1;
export const Lm = $$S2;
export const M$ = $$A3;
export const NT = $$N4;
export const Ot = $$L5;
export const Qm = $$E6;
export const Vm = $$b7;
export const Z_ = $$y8;
export const d2 = $$_9;
export const g5 = $$w10;
export const mp = $$h11;
export const nZ = $$x12;
export const t = $$v13;
export const tH = $$R14;
export const zN = $$f15;