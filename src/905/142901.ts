import { isNullish } from "../figma_app/95419";
import { getI18nString } from "../905/303541";
import { s$ } from "../figma_app/361035";
import { JT } from "../figma_app/847597";
import { jv } from "../905/84777";
import { ViewAccessTypeEnum } from "../905/513035";
import { N_, Ye } from "../905/332483";
import { _w } from "../figma_app/217457";
import { CurrencyFormatter } from "../figma_app/514043";
import { IX } from "../905/712921";
export function $$m0({
  currency: e,
  tier: t,
  renewalTerm: i,
  showCents: m
}) {
  let h = jv({
    billableProductKeys: N_,
    baseQuery: {
      currency: e,
      tier: t,
      renewalTerm: i,
      unit: IX.MONTH
    }
  });
  let g = _w({
    overridePlanTier: t
  });
  return h.transform(t => {
    var i;
    i = s$(t);
    let o = N_.dict(t => {
      var n;
      n = i[t] || 0;
      return new CurrencyFormatter(e).formatMoney(n, {
        showCents: m
      });
    });
    let c = N_.dict(e => t[e]?.key);
    return Ye.dict(e => {
      let t = e === ViewAccessTypeEnum.VIEW ? getI18nString("checkout.free") : o[e];
      let i = e === ViewAccessTypeEnum.VIEW ? "" : c[e];
      if (!(isNullish(i) || isNullish(t))) return {
        id: e,
        displayName: JT(e),
        displayPrice: t,
        description: g(e),
        priceKey: i
      };
    });
  });
}
export const G = $$m0;