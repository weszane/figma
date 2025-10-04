import { filterNotNullish } from "../figma_app/656233";
import { getFeatureFlags } from "../905/601108";
import { dayjs } from "../905/920142";
import { alwaysFalse } from "../figma_app/591738";
import { FTrialType } from "../figma_app/191312";
import { hasEditableLockedTeams, hasTeamPaidAccess } from "../figma_app/345997";
import { canEditTeam } from "../figma_app/642025";
import { a as _$$a } from "../905/692930";
import { TeamExtendedDataMapper } from "../905/863010";
import { isRecentsAndSharingView } from "../figma_app/193867";
var $$n3;
let h = "pro_trials_v3";
let $$m0 = 14;
let g = FTrialType.PRO_TRIAL;
let $$f4 = "exp_pro_trials_v3_start_trial";
let $$E1 = "seen_pro_trials_v3_entry_modal";
let $$y6 = "seen_pro_trials_v3_team_welcome_modal";
let $$b5 = "seen_pro_trials_v3_expiry_modal";
let $$T2 = "dismissed_pro_trials_v3_unlocked_expiry_banner";
(e => {
  e.uxEnabled = () => !!getFeatureFlags().pro_trials_v3_ux;
  e.entryEnabled = () => e.uxEnabled() && !!getFeatureFlags().exp_pro_trials_v3;
  e.expiryEnabled = () => e.uxEnabled() && !!getFeatureFlags().pro_trials_v3_expiry;
  e.isUserInVariant = alwaysFalse;
  e.getTrackingProperties = function (e) {
    return e ? {
      productArea: h,
      text: e
    } : {
      productArea: h
    };
  };
  e.getProTrial = function (e, n, i) {
    if (!e) return null;
    let a = r(e);
    if (!a) return null;
    let s = new Date(e.grace_period_end);
    let o = t(s);
    let l = e.id;
    return {
      status: a,
      isOwner: n,
      userCanEditTeam: canEditTeam(l, i),
      trialExpiresAt: s,
      daysLeft: o,
      teamId: l
    };
  };
  e.getUpgradableProTrials = function (t, r) {
    let n = Object.values(r.teams);
    let a = filterNotNullish(n.map(n => e.getProTrial(n, !!t[n.id]?.[$$f4], r)));
    let o = a.filter(e => e.status === _$$a.TRIAL_EXPIRED && e.userCanEditTeam);
    o.sort((e, t) => dayjs(e.trialExpiresAt).diff(t.trialExpiresAt));
    let l = a.filter(e => e.status === _$$a.IN_TRIAL && e.userCanEditTeam);
    l.sort((e, t) => dayjs(e.trialExpiresAt).diff(t.trialExpiresAt));
    return {
      ongoingTrials: l,
      expiredTrials: o
    };
  };
  e.getEligibleProTrialTeams = function (t, r, n, i) {
    let a = hasEditableLockedTeams(n);
    let s = Object.values(n.teams).filter(s => e.canStartProTrial(t, r, a, s, n, i));
    s.sort((e, t) => (t.editors ?? 0) - (e.editors ?? 0));
    return s;
  };
  e.canStartProTrial = function (t, r, n, i, a, o) {
    return !(!t || !e.entryEnabled() || hasTeamPaidAccess(i) || i.stripe_customer_id || !r || n || !canEditTeam(i.id, a) || 30 > dayjs().utc().diff(dayjs(t.created_at).utc(), "days", !0) || dayjs().utc().diff(dayjs(t.created_at).utc(), "days", !0) > 90 || e.getProTrialStatus(i) || Object.keys(o).some(e => !!o[e][$$f4])) && !!e.isUserInVariant(t.id);
  };
  let t = e => Math.max(Math.ceil(dayjs(e).diff(dayjs(), "days", !0)), 0);
  function r(t) {
    return e.uxEnabled() && t.grace_period_end && t.grace_period_type && g === t.grace_period_type ? new Date(t.grace_period_end) < new Date() ? _$$a.TRIAL_EXPIRED : _$$a.IN_TRIAL : null;
  }
  function n(e) {
    return !!e && e.status === _$$a.IN_TRIAL && e.userCanEditTeam;
  }
  e.getProTrialStatus = r;
  e.getProTrialStatusLG = function (e) {
    return r(TeamExtendedDataMapper.toSinatra(e));
  };
  e.isEligibleTrialEntryView = function (e) {
    return "folder" === e.view || "team" === e.view || isRecentsAndSharingView(e);
  };
  e.canSeeProTrialUx = n;
  e.canSeeProTrialUxInFile = function (e, t) {
    return n(e) && t?.editorType && t?.canEdit;
  };
  e.canSeeProTrialExpiryUx = function (t) {
    if (!e.expiryEnabled() || !t || t.status !== _$$a.TRIAL_EXPIRED) return !1;
    let r = dayjs().utc().diff(dayjs(t.trialExpiresAt).utc(), "days", !0);
    return !(r < 0) && r < 7;
  };
  e.canSeeExpiredProTrialBanner = function (t, r, n) {
    if (!r) return !1;
    let i = !!t[r.id]?.[$$f4];
    let a = e.getProTrial(r, i, n);
    return e.canSeeProTrialExpiryUx(a);
  };
})($$n3 || ($$n3 = {}));
export const $g = $$m0;
export const Jy = $$E1;
export const lg = $$T2;
export const ng = $$n3;
export const uU = $$f4;
export const u_ = $$b5;
export const v$ = $$y6;