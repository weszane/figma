import { useMemo } from "react";
import { isNullish } from "../figma_app/95419";
import { resourceUtils } from "../905/989992";
import { setupResourceAtomHandler, handleSuspenseRetainRelease } from "../figma_app/566371";
import { Ln } from "../905/84777";
import { ViewAccessTypeEnum } from "../905/513035";
import { N_ } from "../905/332483";
import { c as _$$c } from "../figma_app/681090";
import { ModifyPlanUserSeatModalView } from "../figma_app/43951";
import { IX } from "../905/712921";
export function $$_1({
  prices: e,
  currentSeatType: t,
  nextSeatType: r,
  nextSeatAvailable: n,
  failedToLoadPrices: a
}) {
  if (!r || n || t === ViewAccessTypeEnum.VIEW || r === ViewAccessTypeEnum.VIEW) return !1;
  if (a || !e) return !0;
  let s = e[r];
  let o = e[t];
  return !!(isNullish(s) || isNullish(o)) || s.amount > o.amount;
}
export function $$h2({
  planKey: e,
  currentSeatType: t,
  currentSeatBillingInterval: r,
  enabled: i
}) {
  let [s, l] = useMemo(() => {
    let t = _$$c[e.type];
    let n = t.includes(IX.MONTH);
    let i = (!n || r === IX.YEAR) && t.includes(IX.YEAR);
    return [n, i];
  }, [e.type, r]);
  let u = Ln(e, N_, {
    renewalTerm: IX.MONTH,
    unit: IX.MONTH
  }, {
    enabled: i && s
  });
  let h = Ln(e, N_, {
    renewalTerm: IX.YEAR,
    unit: IX.MONTH
  }, {
    enabled: i && l
  });
  return useMemo(() => {
    if (!i || !l) return u;
    if (!s) return h;
    let e = [u, h].find(e => "loaded" !== e.status);
    if (e) return e;
    let r = u.data;
    let n = h.data;
    return r ? n ? resourceUtils.loadedSuspendable(N_.dict(e => t === e || $$_1({
      prices: r,
      currentSeatType: t,
      nextSeatType: e
    }) ? n[e] : r[e]), [], {
      release: () => {}
    }) : h : u;
  }, [i, t, s, u, l, h]);
}
export function $$m0(e) {
  let [t] = setupResourceAtomHandler(ModifyPlanUserSeatModalView(e));
  let [r] = handleSuspenseRetainRelease(t);
  return r;
}
export const UL = $$m0;
export const kI = $$_1;
export const un = $$h2;