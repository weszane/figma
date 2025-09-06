import { getFeatureFlags } from "../905/601108";
import { getInitialOptions } from "../figma_app/169182";
import { captureMessage } from "../905/11";
import { D } from "../905/347702";
let o = ["jpy", "usd", "gbp", "cad", "eur"];
let $$l1 = D(() => {
  if (navigator) {
    let e = navigator.languages;
    if (e && e[0]) return e[0];
    let t = navigator.language;
    if (t) return t;
  }
  return "en-US";
});
export class $$d7 {
  constructor(e) {
    this.fullFormat = {
      jpy: "JPY",
      usd: "USD",
      eur: "EUR",
      gbp: "GBP",
      cad: "CAD"
    };
    null === e && captureMessage("Currency should not be null. Defaulted to usd.");
    this.currency = e ?? "usd";
    this.hasCents = "jpy" !== this.currency;
    this.locale = $$l1();
  }
  formatMoney(e, t) {
    let r = {
      currency: this.currency,
      currencySign: t?.currencySign,
      style: "currency"
    };
    this.hasCents && t?.showCents || (r.maximumFractionDigits = 0, r.minimumFractionDigits = 0);
    this.hasCents && (e *= .01);
    let n = e.toLocaleString(this.locale, r);
    (n.startsWith("CA$") || n.startsWith("US$")) && (n = n.slice(2));
    return t?.showFullFormat ? `${n} ${this.fullFormat[this.currency]}` : n;
  }
}
export function $$c2() {
  let e = getInitialOptions().user_currency_from_ip;
  return $$m3() ? e : "usd";
}
export function $$u8() {
  return new $$d7($$c2());
}
export function $$p6() {
  return $$m3() && "usd" !== $$c2() && getInitialOptions().iso_code || "US";
}
export function $$_4() {
  return getInitialOptions().iso_code || "US";
}
export function $$h0() {
  let e = new Set();
  getFeatureFlags().internal_cart_allow_all_currencies;
  e.add("usd");
  e.add($$c2());
  return Array.from(e);
}
export function $$m3() {
  getFeatureFlags().internal_cart_allow_all_currencies;
  let e = getInitialOptions().user_currency_from_ip;
  if (!e || !o.includes(e) || "usd" === e) return !1;
  let t = getInitialOptions().user_data;
  return !!t && !!t.id;
}
let g = {
  usd: [],
  eur: ["AD", "AT", "BE", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IS", "IT", "LV", "LI", "LT", "LU", "MT", "NL", "NO", "PL", "PT", "SK", "SI", "SM", "ES", "SE", "CH", "BG", "HR", "CY", "IE", "RO", "XK"],
  jpy: ["JP"],
  cad: ["CA"],
  gbp: ["GB", "IM", "GG", "JE", "GI", "GS"]
};
export function $$f5(e, t) {
  return "usd" === e || g[e].includes(t);
}
export const B9 = $$h0;
export const JK = $$l1;
export const LN = $$c2;
export const _Z = $$m3;
export const aE = $$_4;
export const bu = $$f5;
export const ub = $$p6;
export const vr = $$d7;
export const wU = $$u8;