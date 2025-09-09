import { resourceUtils } from "../905/989992";
import { useSubscription } from "../figma_app/288654";
import { PlanUserByFileKey, PlanByTeamId } from "../figma_app/43951";
export function $$o1(e) {
  let t = useSubscription(PlanUserByFileKey, {
    fileKey: e
  }, {
    enabled: !!e
  });
  if (null !== t.data && !t.data?.file?.currentPlanUser) {
    let t = {
      code: "nonNullableResult",
      path: [],
      retriable: !1,
      error: Error("No PlanUser found for file, key: " + e)
    };
    return resourceUtils.error([t]);
  }
  return t.transform(e => e.file?.currentPlanUser);
}
export function $$s0(e) {
  let t = useSubscription(PlanByTeamId, {
    teamId: e
  }, {
    enabled: !!e
  });
  if (null !== t.data && !t.data?.team?.plan) {
    let t = {
      code: "nonNullableResult",
      path: [],
      retriable: !1,
      error: Error("No Plan found for team, id: " + e)
    };
    return resourceUtils.error([t]);
  }
  return t.transform(e => e.team?.plan);
}
export const Sh = $$s0;
export const kw = $$o1;