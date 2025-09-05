import { useSelector } from "../vendor/514228";
import { getPermissionsStateMemoized } from "../figma_app/642025";
import { uU, ng } from "../figma_app/205827";
import { q } from "../905/236878";
export function $$o0(e) {
  let t = !!q({
    teamId: e,
    flag: uU
  });
  let r = useSelector(t => t.teams[e]);
  let o = useSelector(e => getPermissionsStateMemoized(e));
  return ng.getProTrial(r, t, o);
}
export function $$l1() {
  let e = useSelector(e => e.userTeamFlags);
  let t = useSelector(e => getPermissionsStateMemoized(e));
  return ng.getUpgradableProTrials(e, t);
}
export function $$d2() {
  let e = useSelector(e => e.user);
  let t = useSelector(e => e.isFreeUser);
  let r = useSelector(e => getPermissionsStateMemoized(e));
  let s = useSelector(e => e.userTeamFlags);
  return ng.getEligibleProTrialTeams(e, t, r, s);
}
export const TN = $$o0;
export const j9 = $$l1;
export const xX = $$d2;