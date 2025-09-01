import { ng } from "../vendor/630853";
import { z } from "../vendor/492662";
export function $$r4(e, t, a, u) {
  let n = (t = $$o1(e, t)) - 1;
  let r = -2;
  a <= 2 ? r = 0 : $$i2(t) && (r = -1);
  return 1721425 + 365 * n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400) + Math.floor((367 * a - 362) / 12 + r + u);
}
export function $$i2(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
export function $$o1(e, t) {
  return "BC" === e ? 1 - t : t;
}
export function $$l3(e) {
  let t = "AD";
  e <= 0 && (t = "BC", e = 1 - e);
  return [t, e];
}
let s = {
  standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
};
export class $$d0 {
  fromJulianDay(e) {
    let t = e - 1721426;
    let a = Math.floor(t / 146097);
    let o = z(t, 146097);
    let s = Math.floor(o / 36524);
    let d = z(o, 36524);
    let c = Math.floor(d / 1461);
    let m = Math.floor(z(d, 1461) / 365);
    let [h, D] = $$l3(400 * a + 100 * s + 4 * c + m + (4 !== s && 4 !== m ? 1 : 0));
    let f = e - $$r4(h, D, 1, 1);
    let p = 2;
    e < $$r4(h, D, 3, 1) ? p = 0 : $$i2(D) && (p = 1);
    let y = Math.floor(((f + p) * 12 + 373) / 367);
    let g = e - $$r4(h, D, y, 1) + 1;
    return new ng(h, D, y, g);
  }
  toJulianDay(e) {
    return $$r4(e.era, e.year, e.month, e.day);
  }
  getDaysInMonth(e) {
    return s[$$i2(e.year) ? "leapyear" : "standard"][e.month - 1];
  }
  getMonthsInYear(e) {
    return 12;
  }
  getDaysInYear(e) {
    return $$i2(e.year) ? 366 : 365;
  }
  getYearsInEra(e) {
    return 9999;
  }
  getEras() {
    return ["BC", "AD"];
  }
  isInverseEra(e) {
    return "BC" === e.era;
  }
  balanceDate(e) {
    e.year <= 0 && (e.era = "BC" === e.era ? "AD" : "BC", e.year = 1 - e.year);
  }
  constructor() {
    this.identifier = "gregory";
  }
}
export const FG = $$d0;
export const LA = $$o1;
export const U_ = $$i2;
export const f5 = $$l3;
export const rG = $$r4;