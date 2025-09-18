import { useState, useCallback, useMemo } from "react";
import { isNotNullish } from "../figma_app/95419";
import { ServiceCategories as _$$e } from "../905/165054";
import { resourceUtils } from "../905/989992";
import { h as _$$h } from "../905/207101";
import { subscribeAndAwaitData } from "../905/553831";
import { useSubscription } from "../figma_app/288654";
import { setupResourceAtomHandler, handleSuspenseRetainRelease } from "../figma_app/566371";
import { reportError } from "../905/11";
import { isProrationBillingEnabledForCurrentPlan } from "../figma_app/618031";
import { ViewAccessTypeEnum } from "../905/513035";
import { viewCollaboratorSet, collaboratorSet } from "../905/332483";
import { getProductAccessTypeByKey } from "../figma_app/217457";
import { FBillingPeriodType, FOrganizationLevelType } from "../figma_app/191312";
import { SeatCountDataForPlan, SeatCountDataForPlanByBillingInterval, LicenseGroupSeatCountsView } from "../figma_app/43951";
let E = viewCollaboratorSet.dict(() => ({
  assigned: 0,
  available: 0,
  total: 0
}));
export function $$y1(e, t) {
  let [r, i] = useState({
    status: "loading",
    data: E
  });
  let a = useCallback(() => {
    subscribeAndAwaitData(SeatCountDataForPlan, {
      planParentId: e,
      planType: t
    }).then(e => {
      i({
        status: "loaded",
        data: b(e)
      });
    }).catch(() => {
      i({
        status: "errors",
        data: E
      });
    });
  }, [e, t]);
  _$$h(() => {
    a();
  });
  return {
    ...r,
    refetch: a
  };
}
function b(e) {
  let t = e.plan;
  if (!t) throw Error("received no plan while loading seat counts");
  let r = t.availableSeatCountsV2;
  let n = t.assignedSeatCountsV2;
  return viewCollaboratorSet.dict(e => {
    let t = n.find(({
      billableProductKey: t
    }) => getProductAccessTypeByKey(t) === e);
    let i = r.find(({
      billableProductKey: t
    }) => getProductAccessTypeByKey(t) === e);
    let a = x(t?.count);
    let s = x(i?.count);
    return {
      assigned: a,
      available: s,
      total: a + s
    };
  });
}
export function $$T3(e, t, r) {
  let [n] = setupResourceAtomHandler(SeatCountDataForPlan({
    planParentId: e,
    planType: t
  }), r);
  try {
    return n.transform(b);
  } catch (r) {
    reportError(_$$e.SCALE, r, {
      extra: {
        planType: t,
        planParentId: e
      }
    });
    return resourceUtils.errorSuspendable(r, {
      release: () => {}
    });
  }
}
export function $$I5(e, t, r) {
  let n = $$T3(e, t, r);
  let [i] = handleSuspenseRetainRelease(n);
  if ("loaded" === i.status) return i.data;
  if ("errors" === i.status) {
    let e = [i.errors].flat()[0];
    if (e) throw e;
  }
  throw Error("Error fetching seat counts");
}
export function $$S0(e, t) {
  let r = {};
  viewCollaboratorSet.forEach(e => {
    r[e] = {
      [FBillingPeriodType.MONTH]: {
        assigned: 0,
        available: 0,
        total: 0
      },
      [FBillingPeriodType.YEAR]: {
        assigned: 0,
        available: 0,
        total: 0
      }
    };
  });
  t[ViewAccessTypeEnum.VIEW] && (r[ViewAccessTypeEnum.VIEW] = {
    [FBillingPeriodType.MONTH]: t[ViewAccessTypeEnum.VIEW]
  });
  Object.entries(e).forEach(([e, t]) => {
    Object.entries(t).forEach(([t, n]) => {
      r[t][e] = n;
    });
  });
  viewCollaboratorSet.forEach(e => {
    r[e][FBillingPeriodType.MONTH]?.total === 0 ? delete r[e][FBillingPeriodType.MONTH] : r[e][FBillingPeriodType.YEAR]?.total === 0 && delete r[e][FBillingPeriodType.YEAR];
  });
  return r;
}
export function $$v4(e) {
  let t = isProrationBillingEnabledForCurrentPlan();
  let r = e && t;
  let a = r ? {
    planParentId: e.teamId,
    planType: FOrganizationLevelType.TEAM
  } : null;
  let o = useSubscription(SeatCountDataForPlanByBillingInterval(a));
  return useMemo(() => t ? r ? o.transform(e => {
    let t = {
      [FBillingPeriodType.MONTH]: collaboratorSet.dict(() => ({
        available: 0,
        assigned: 0,
        total: 0
      })),
      [FBillingPeriodType.YEAR]: collaboratorSet.dict(() => ({
        available: 0,
        assigned: 0,
        total: 0
      }))
    };
    let r = (e, r) => {
      (e ?? []).forEach(({
        billableProductKey: e,
        billingInterval: n,
        count: a
      }) => {
        let s = getProductAccessTypeByKey(e);
        if (collaboratorSet.has(s) && n && isNotNullish(t[n][s])) {
          let e = x(a);
          let i = t[n][s];
          i[r] += e;
          i.total += e;
        }
      });
    };
    r(e?.plan?.assignedSeatCountsV2, "assigned");
    r(e?.plan?.availableSeatCountsV2, "available");
    return t;
  }) : resourceUtils.disabled() : resourceUtils.error(["proration_billing_disabled"]), [r, o, t]);
}
export function $$A2(e) {
  let t = useSubscription(LicenseGroupSeatCountsView(e ? {
    licenseGroupId: e.licenseGroupId
  } : null));
  return useMemo(() => t.transform(e => {
    let t = {};
    (e.licenseGroup?.licenseGroupSeatCounts ?? []).forEach(({
      billableProductKey: e,
      count: r
    }) => {
      let n = getProductAccessTypeByKey(e);
      t[n] ??= 0;
      t[n] += x(r);
    });
    return viewCollaboratorSet.dict(e => {
      let r = t[e] ?? 0;
      return {
        assigned: r,
        available: 0,
        total: r
      };
    });
  }), [t]);
}
function x(e) {
  return parseInt(e ?? "0", 10);
}
export const II = $$S0;
export const Qf = $$y1;
export const Vt = $$A2;
export const hY = $$T3;
export const ww = $$v4;
export const zz = $$I5;