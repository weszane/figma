import { useCallback } from "react";
import { wA } from "../vendor/514228";
import { assert } from "../figma_app/465776";
import { P } from "../figma_app/529847";
import { uo } from "../figma_app/990058";
import { Gu } from "../905/513035";
import { N_ } from "../905/332483";
import { Hl, YT } from "../figma_app/217457";
import { jL } from "../figma_app/658324";
import { FPlanAccessType } from "../figma_app/191312";
import { OL } from "../figma_app/421473";
import { RB } from "../figma_app/428858";
export function $$m0(e) {
  let t = wA();
  let r = Hl({
    visibility: YT.ALL
  });
  let m = useCallback(({
    users: n,
    seatTypeOption: i,
    seatIncreaseAuthorized: o,
    seatSwapIntended: d,
    upgradeReason: c,
    upgradeMethod: u,
    assignedAt: p,
    upgradeActorName: h
  }) => {
    let m = {};
    i !== Gu.VIEW && (m[i] = {
      key: i,
      license_types: r(i)
    });
    assert(e.planType === OL.TEAM);
    t(P({
      teamId: e.planId,
      deltas: n.map(({
        userId: e
      }) => ({
        userId: e,
        seatTypeOption: i,
        seatIncreaseAuthorized: o,
        seatSwapIntended: d
      })),
      entryPoint: e.entryPoint,
      seatTypeProducts: m,
      upgradeReason: c,
      upgradeMethod: u,
      assignedAt: p,
      upgradeActorName: h,
      onSuccess: e.onSuccess,
      onFailure: e.onFailure
    }));
  }, [t, e.entryPoint, e.planId, e.planType, e.onSuccess, e.onFailure, r]);
  let {
    onFailure,
    onSuccess,
    queueFilterCountsRefetch
  } = e;
  let y = useCallback(({
    users: r,
    seatTypeOption: n,
    lastUpdateTimestampOverride: i,
    seatIncreaseAuthorized: s,
    seatSwapIntended: c
  }) => {
    assert(e.planType === OL.ORG);
    t(uo({
      orgId: e.planId,
      lastUpdateTimestampOverride: i,
      seatTypeProducts: {},
      params: {
        org_user_ids: r.map(e => e.planUserId),
        paid_statuses: n === Gu.VIEW ? N_.dict(() => FPlanAccessType.STARTER) : {
          [n]: FPlanAccessType.FULL
        },
        entry_point: e.entryPoint,
        ...(null != s && null != c ? {
          seat_increase_authorized: s,
          seat_swap_intended: c
        } : null)
      },
      successCallback: () => {
        onSuccess?.();
        jL({
          planType: OL.ORG,
          planId: e.planId
        });
      },
      errorCallback: () => {
        onFailure?.();
      }
    }));
    queueFilterCountsRefetch?.();
  }, [t, e.planId, e.entryPoint, e.planType, onSuccess, queueFilterCountsRefetch, onFailure]);
  return RB(e.planType, {
    team: m,
    org: y
  });
}
export const N = $$m0;