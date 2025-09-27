import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { assert } from "../figma_app/465776";
import { P } from "../figma_app/529847";
import { uo } from "../figma_app/990058";
import { ViewAccessTypeEnum } from "../905/513035";
import { collaboratorSet } from "../905/332483";
import { useGetLicenseTypesForSeatType, SeatDescriptionVisibility } from "../figma_app/217457";
import { fetchAndUpdateUpcomingInvoices } from "../figma_app/658324";
import { FPlanAccessType } from "../figma_app/191312";
import { FOrganizationLevelType } from "../figma_app/421473";
import { getOrgLevelData } from "../figma_app/428858";
export function $$m0(e) {
  let t = useDispatch();
  let r = useGetLicenseTypesForSeatType({
    visibility: SeatDescriptionVisibility.ALL
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
    i !== ViewAccessTypeEnum.VIEW && (m[i] = {
      key: i,
      license_types: r(i)
    });
    assert(e.planType === FOrganizationLevelType.TEAM);
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
    assert(e.planType === FOrganizationLevelType.ORG);
    t(uo({
      orgId: e.planId,
      lastUpdateTimestampOverride: i,
      seatTypeProducts: {},
      params: {
        org_user_ids: r.map(e => e.planUserId),
        paid_statuses: n === ViewAccessTypeEnum.VIEW ? collaboratorSet.dict(() => FPlanAccessType.STARTER) : {
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
        fetchAndUpdateUpcomingInvoices({
          planType: FOrganizationLevelType.ORG,
          planId: e.planId
        });
      },
      errorCallback: () => {
        onFailure?.();
      }
    }));
    queueFilterCountsRefetch?.();
  }, [t, e.planId, e.entryPoint, e.planType, onSuccess, queueFilterCountsRefetch, onFailure]);
  return getOrgLevelData(e.planType, {
    team: m,
    org: y
  });
}
export const N = $$m0;