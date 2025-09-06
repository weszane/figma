import { analyticsEventManager } from "../905/449184";
import { N_ } from "../905/332483";
export function $$a3(e) {
  return e ? JSON.stringify(Object.keys(e).sort().reduce((t, r) => ({
    ...t,
    [r]: e[r]
  }), {})) : null;
}
export function $$s2(e) {
  return e ? JSON.stringify(Object.keys(e).sort().reduce((t, r) => ({
    ...t,
    [r]: e[r]
  }), {})) : null;
}
export function $$o4(e) {
  return JSON.stringify(e.sort());
}
export function $$l0(e) {
  let t = N_.dict(t => e[t]?.key);
  return JSON.stringify(Object.keys(t).sort().reduce((e, r) => ({
    ...e,
    [r]: t[r]
  }), {}));
}
export function $$d1({
  eligibleTeamIds: e,
  eligibleTeamUsers: t,
  tier: r,
  step: i
}) {
  let a = JSON.stringify(e);
  let s = JSON.stringify(t.map(e => ({
    userId: e.user.id,
    teamId: e.team_id,
    recommendedSeatType: e.recommended_seat_type?.key
  })));
  analyticsEventManager.trackDefinedEvent("monetization_upgrades.checkout_loaded_eligible_upgrade_data", {
    numEligibleTeams: e.length,
    teamIds: a,
    teamUsers: s,
    tier: r,
    step: i
  });
}
export const Jh = $$l0;
export const R9 = $$d1;
export const Tj = $$s2;
export const gS = $$a3;
export const gu = $$o4;