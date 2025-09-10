import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { resourceUtils } from "../905/989992";
import l from "../vendor/923386";
import { Xf } from "../figma_app/153916";
import { A as _$$A } from "../905/920142";
import { getInitialOptions } from "../figma_app/169182";
import { useSubscription } from "../figma_app/288654";
import { handleSuspenseRetainRelease, setupResourceAtomHandler } from "../figma_app/566371";
import { reportError } from "../905/11";
import { T as _$$T } from "../1577/951568";
import { Az } from "../5132/863145";
import { k as _$$k2 } from "../figma_app/618031";
import { hY } from "../figma_app/80683";
import { Y$, Ln, SG, Tc } from "../905/84777";
import { FOrganizationLevelType, FOrganizationEntityType } from "../figma_app/191312";
import { PendingConfirmedRenewalSeatCountsView } from "../figma_app/43951";
import { vr } from "../figma_app/514043";
import { getFutureDateOrNull } from "../figma_app/345997";
import { IX } from "../905/712921";
import { BillingCycle } from "../figma_app/831101";
import { ProductAccessTypeEnum, isValidAccessType, ViewAccessTypeEnum } from "../905/513035";
import { N_ } from "../905/332483";
var d = l;
function w(e, t, r, n) {
  let i = (e === Y$.CURRENT ? Ln : SG)(t, N_, {
    renewalTerm: r,
    unit: n
  });
  let [s] = handleSuspenseRetainRelease(i);
  let o = s.data;
  if (!o) {
    reportError(_$$e.SCALE, Error("Plan renewal modal could not load price information"), {
      extra: {
        planKey: t,
        prices: o
      }
    });
    return {
      prices: null,
      localizeCurrency: null
    };
  }
  let l = Tc(o);
  return {
    prices: o,
    localizeCurrency: new vr(l)
  };
}
export let $$O11 = 500;
export function $$R8(e) {
  return w(Y$.AT_NEXT_RENEWAL, e, IX.YEAR, IX.YEAR);
}
export function $$L0(e, t) {
  return w(e, t, IX.YEAR, IX.MONTH);
}
export function $$P9(e, t) {
  return w(e, t, IX.MONTH, IX.MONTH);
}
export function $$D2(e, t) {
  return w(e, t, IX.MONTH, IX.YEAR);
}
function k(e) {
  let t = getInitialOptions().analyze_data_flow_v2_until;
  let r = t && _$$A().isBefore(t) ? e.postGaRenewal : e.nextRenewal;
  return r ? _$$A(r).toDate() : null;
}
export function $$M6(e) {
  let t = e.annual_subscription;
  return !t || t.canceled_at ? null : k({
    postGaRenewal: e.analyze_data_contract_v2_start,
    nextRenewal: t?.current_period_end
  });
}
export function $$F15() {
  let e = useSelector(e => e.teamBilling);
  let t = e.summary.monthly_subscription?.current_period_end;
  return useMemo(() => t ? _$$A(t).toDate() : null, [t]);
}
export function $$j14(e) {
  let t = e.annual_subscription?.trial_end;
  return null !== (t ? getFutureDateOrNull(t) : null);
}
export function $$U4(e) {
  return getFeatureFlags().scheduled_cancellation_enabled && e?.scheduled_cancellation?.cancel_at_period_end ? null : k({
    postGaRenewal: e?.analyze_data_contract_v2_start,
    nextRenewal: e?.annual_renewal
  });
}
export function $$B3(e) {
  let t = useSelector(e => e.teamBilling);
  let r = {
    ...t.summary.annual_seats
  };
  if (!r || 0 === Object.values(r).length) return null;
  let n = t.summary.total_upgraded_user_counts;
  !e && ProductAccessTypeEnum.COLLABORATOR in r && n && ProductAccessTypeEnum.COLLABORATOR in n && r[ProductAccessTypeEnum.COLLABORATOR] > n[ProductAccessTypeEnum.COLLABORATOR] && (r[ProductAccessTypeEnum.COLLABORATOR] = n[ProductAccessTypeEnum.COLLABORATOR]);
  let a = 0;
  Object.values(r).forEach(e => a += e);
  return a;
}
function G(e, t) {
  if (!t) return null;
  let r = e.pendingConfirmedRenewalSeatCounts?.filter(e => _$$A(e.billingPeriodStart).add(1, "day").toDate() > t && _$$A(e.billingPeriodStart).subtract(1, "day").toDate() < t);
  if (!r || !r.length) return null;
  let n = N_.dict(e => 0);
  let i = N_.dict(e => 0);
  r.forEach(e => {
    if (!e.billableProductKey || !isValidAccessType(e.billableProductKey)) {
      reportError(_$$e.BILLING_EXPERIENCE, Error(`Confirmed seat count with unexpected billable product key: ${e.billableProductKey}`));
      return;
    }
    let t = e.billableProductKey;
    n[t] = parseInt(e.surplusSeatCount ?? "0");
    i[t] = parseInt(e.totalSeatCount ?? "0");
  });
  return {
    surplus: n,
    total: i
  };
}
function V(e, t, r = {
  enabled: !0
}) {
  let [i] = setupResourceAtomHandler(PendingConfirmedRenewalSeatCountsView({
    planParentId: e.parentId,
    planParentType: e.type === FOrganizationLevelType.ORG ? FOrganizationEntityType.ORG : FOrganizationEntityType.TEAM,
    billingInterval: BillingCycle.YEAR
  }), {
    enabled: !!e.parentId && r.enabled
  });
  return useMemo(() => i.transform(e => G(e, t)), [t, i]);
}
export function $$H5(e, t) {
  let r = V(e, t);
  let [n] = handleSuspenseRetainRelease(r);
  if ("loaded" !== n.status) {
    let e = Error("Error fetching next annual renewal confirmed seat counts");
    reportError(_$$e.SCALE, e);
    return e;
  }
  return n.data;
}
export function $$z7(e) {
  let t = !!e;
  let r = e?.nextRenewalDate;
  let i = r && $$W16(r, e.renewalWindow || 30);
  let a = useSubscription(PendingConfirmedRenewalSeatCountsView, {
    planParentId: e?.planKey.parentId ?? "",
    planParentType: e?.planKey.type === FOrganizationLevelType.ORG ? FOrganizationEntityType.ORG : FOrganizationEntityType.TEAM,
    billingInterval: BillingCycle.YEAR
  }, {
    enabled: t && i
  });
  return useMemo(() => t ? i ? a.transform(e => !!G(e, r)) : resourceUtils.loaded(!1) : resourceUtils.disabled(), [t, r, i, a]);
}
export function $$W16(e, t = 30) {
  return !!e && _$$A().add(t, "days").isAfter(e);
}
export function $$K13(e) {
  let t = !!e;
  let r = Xf(t ? e.id : null);
  let i = _$$T(t ? e : null);
  let a = useMemo(() => $$U4(r.data), [r.data]);
  let s = t && a;
  let l = $$z7(s ? {
    planKey: {
      type: FOrganizationLevelType.ORG,
      parentId: e?.id ?? ""
    },
    nextRenewalDate: a
  } : null);
  return useMemo(() => t ? "loaded" !== i.status || "loaded" !== r.status || s && "loaded" !== l.status ? resourceUtils.loading() : !i.data?.isEligible && a && $$W16(a) ? resourceUtils.loaded({
    show: !0,
    confirmed: !!l.data,
    nextRenewalDate: a
  }) : resourceUtils.loaded({
    show: !1
  }) : resourceUtils.disabled(), [t, r.status, i.status, i.data?.isEligible, s, l, a]);
}
export function $$Y10(e) {
  let t = Xf(e?.id);
  let r = $$K13(e);
  let i = r.data;
  let a = Az(e);
  let s = "loaded" === r.status && !!i?.show && !a.data?.isEligible;
  let l = t?.data?.non_adjustable_renewal_seats;
  let u = l ? d()(N_.toArray(), e => l[e] ?? 0) : 0;
  let p = hY(e?.id ?? "", FOrganizationLevelType.ORG, {
    enabled: s
  });
  let _ = p.data;
  let h = 0;
  let m = 0;
  _ && Object.keys(_).forEach(e => {
    e !== ViewAccessTypeEnum.VIEW && (h += _[e]?.total ?? 0, m += _[e]?.assigned ?? 0);
  });
  let g = V({
    parentId: e?.id ?? "",
    type: FOrganizationLevelType.ORG
  }, s ? i.nextRenewalDate : null, {
    enabled: s
  });
  let E = g.data;
  return useMemo(() => {
    switch (r.status) {
      case "disabled":
        return resourceUtils.disabled();
      case "loading":
        return resourceUtils.loading();
      case "errors":
        return resourceUtils.error(r.errors);
      case "loaded":
        if (!s) return resourceUtils.loaded({
          show: !1
        });
        if ("loaded" !== p.status || "loaded" !== g.status || "loading" === t.status) return resourceUtils.loading();
        return resourceUtils.loaded({
          show: !0,
          nextRenewalDate: i.nextRenewalDate,
          currentSeatCount: h,
          currentAssignedSeatCount: m,
          confirmedRenewalSeatCounts: E,
          renewalConfirmed: !!i?.confirmed,
          inTrial: !1,
          totalFloorSeatCount: u
        });
    }
  }, [r.status, r.errors, i, s, p.status, h, m, g.status, E, u, t.status]);
}
export function $$$1(e) {
  let t = function () {
    let e = useSelector(e => e.teamBilling.summary);
    return useMemo(() => $$M6(e), [e]);
  }();
  let r = function () {
    let e = useSelector(e => e.teamBilling.summary);
    return useMemo(() => $$j14(e), [e]);
  }();
  let a = r ? 32 : 30;
  let s = $$B3(_$$k2());
  let l = $$z7(t ? {
    planKey: {
      type: FOrganizationLevelType.TEAM,
      parentId: e
    },
    nextRenewalDate: t,
    renewalWindow: a
  } : null);
  let d = V({
    parentId: e,
    type: FOrganizationLevelType.TEAM
  }, t);
  return useMemo(() => "loading" === l.status || "loading" === d.status ? resourceUtils.loading() : (!t || "loaded" === l.status) && t && $$W16(t, a) && null !== s ? resourceUtils.loaded({
    show: !0,
    nextRenewalDate: t,
    currentSeatCount: s,
    confirmedRenewalSeatCounts: d.data,
    renewalConfirmed: !!l.data,
    inTrial: r
  }) : resourceUtils.loaded({
    show: !1
  }), [l.status, t, s, l.data, t, d.status, d.data, r, a]);
}
export function $$X12(e) {
  return e.shouldAutoRenew && !e.onTrial && !e.hasNonAdjustableRenewalSeats;
}
export const As = $$L0;
export const G6 = $$$1;
export const LY = $$D2;
export const Pd = $$B3;
export const Pn = $$U4;
export const YL = $$H5;
export const Yh = $$M6;
export const Yo = $$z7;
export const Zz = $$R8;
export const cj = $$P9;
export const hs = $$Y10;
export const _$$in = $$O11;
export const j2 = $$X12;
export const oU = $$K13;
export const wd = $$j14;
export const xQ = $$F15;
export const yn = $$W16;