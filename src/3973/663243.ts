import { DynamicConfig, EvaluationReason } from "../vendor/625526";
import { Statsig } from "../vendor/735621";
import { a as _$$a } from "../905/425366";
import { getInitialOptions } from "../figma_app/169182";
import { nl } from "../figma_app/257275";
import { vo } from "../905/670985";
import { cP, Us, zz, Dr, su, pk } from "../3973/890507";
import { Uv } from "../3973/473379";
import { ServiceCategories as _$$e } from "../905/165054";
import { zl } from "../figma_app/27355";
export let $$g1 = new DynamicConfig("default", {}, "default", {
  reason: EvaluationReason.Unrecognized,
  time: Date.now()
});
var p = (e => (e.UserIDString = "userID", e.OrgIdString = "orgID", e.TeamIdString = "teamID", e.StableIdString = "stableID", e.DeveloperIdString = "developerID", e.DefaultIdString = "defaultID", e.RandomIdString = "randomID", e.UserFigmateEmailString = "userFigmateEmail", e.PlanKeyString = "planKey", e))(p || {});
export function $$m0(e, t, r, p = !1, f = !1) {
  if (!Statsig.initializeCalled() || getInitialOptions().e2e_ci_test || e.status !== Uv.COMPLETED) return $$g1;
  let h = 0;
  let b = null;
  let v = $$g1;
  let y = cP();
  try {
    h = vo("statsigGetExperimentValDuration", _$$e.GROWTH_PLATFORM, () => {
      v = f ? Statsig.getExperimentWithExposureLoggingDisabled(t, {
        keepDeviceValue: p
      }) : Statsig.getExperiment(t, p);
    }, y);
  } catch (r) {
    let e = getInitialOptions().user_data?.id || "undefined";
    Us(`Errored while fetching experiment config for experiment ${t} and user ${e}: ${r}`);
    b = r instanceof Error ? r : null;
    v = $$g1;
  }
  let T = Statsig.getCurrentUser();
  if (null === b && y && zz(t, h, r, v.getEvaluationDetails().reason, v.getRuleID(), T), v.getEvaluationDetails().reason === EvaluationReason.InvalidBootstrap) {
    let e = zl.get(_$$a);
    e && Dr(t, e.evaluated_keys?.userID, JSON.stringify(e.evaluated_keys?.customIDs), T?.userID?.toString(), JSON.stringify(T?.customIDs));
  }
  if (nl() && su === t) {
    let e = v.getValue();
    pk(su, h);
    pk(`${su}_value`, e);
  }
  return v;
}
export const Tq = $$m0;
export const sb = $$g1;