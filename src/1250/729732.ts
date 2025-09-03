import { resourceUtils } from "../905/989992";
import { Rs } from "../figma_app/288654";
import { X39, Fvs } from "../figma_app/43951";
export function $$o1(e) {
  let t = Rs(X39, {
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
  let t = Rs(Fvs, {
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