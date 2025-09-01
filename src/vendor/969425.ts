import { yP, Yd, gw } from "../vendor/857147";
let n = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BY: 1,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  HR: 1,
  HU: 1,
  IE: 1,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JO: 6,
  KG: 1,
  KW: 6,
  KZ: 1,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MK: 1,
  MN: 1,
  MQ: 1,
  MV: 5,
  MY: 1,
  NL: 1,
  NO: 1,
  NZ: 1,
  OM: 6,
  PL: 1,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SD: 6,
  SE: 1,
  SI: 1,
  SK: 1,
  SM: 1,
  SY: 6,
  TJ: 1,
  TM: 1,
  TR: 1,
  UA: 1,
  UY: 1,
  UZ: 1,
  VA: 1,
  VN: 1,
  XK: 1
};
export function $$r11(e, t) {
  t = yP(t, e.calendar);
  return e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
export function $$i10(e, t) {
  return $$o9(e.calendar, t.calendar) && $$r11(e, t);
}
export function $$o9(e, t) {
  var a;
  var u;
  var n;
  var r;
  return null !== (r = null !== (n = e.isEqual?.call(e, t)) && void 0 !== n ? n : t.isEqual?.call(t, e)) && void 0 !== r ? r : e.identifier === t.identifier;
}
export function $$l12(e, t) {
  return $$r11(e, $$m19(t));
}
let s = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6
};
export function $$d4(e, t, a) {
  let u;
  let r = Math.ceil(e.calendar.toJulianDay(e) + 1 - (a ? s[a] : (u = function (e) {
    if (Intl.Locale) {
      let t = w.get(e);
      !t && (t = new Intl.Locale(e).maximize().region) && w.set(e, t);
      return t;
    }
    let t = e.split("-")[1];
    return "u" === t ? void 0 : t;
  }(t)) && n[u] || 0)) % 7;
  r < 0 && (r += 7);
  return r;
}
export function $$c15(e) {
  return Yd(Date.now(), e);
}
export function $$m19(e) {
  return gw($$c15(e));
}
export function $$h0(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
export function $$D1(e, t) {
  return f(e) - f(t);
}
function f(e) {
  return 36e5 * e.hour + 6e4 * e.minute + 1e3 * e.second + e.millisecond;
}
let p = null;
export function $$y5() {
  null == p && (p = new Intl.DateTimeFormat().resolvedOptions().timeZone);
  return p;
}
export function $$g16(e) {
  return e.subtract({
    days: e.day - 1
  });
}
export function $$v2(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
export function $$b18(e) {
  return $$g16(e.subtract({
    months: e.month - 1
  }));
}
export function $$E7(e) {
  return e.calendar.getMinimumMonthInYear ? e.calendar.getMinimumMonthInYear(e) : 1;
}
export function $$C6(e) {
  return e.calendar.getMinimumDayInMonth ? e.calendar.getMinimumDayInMonth(e) : 1;
}
export function $$x17(e, t, a) {
  let u = $$d4(e, t, a);
  return e.subtract({
    days: u
  });
}
export function $$B3(e, t, a) {
  return $$x17(e, t, a).add({
    days: 6
  });
}
let w = new Map();
export function $$F8(e, t, a) {
  let u = e.calendar.getDaysInMonth(e);
  return Math.ceil(($$d4($$g16(e), t, a) + u) / 7);
}
export function $$k14(e, t) {
  return e && t ? 0 >= e.compare(t) ? e : t : e || t;
}
export function $$P13(e, t) {
  return e && t ? e.compare(t) >= 0 ? e : t : e || t;
}
export const SE = $$h0;
export const Nu = $$D1;
export const p9 = $$v2;
export const $I = $$B3;
export const SJ = $$d4;
export const Xj = $$y5;
export const oT = $$C6;
export const xz = $$E7;
export const RZ = $$F8;
export const Jg = $$o9;
export const NV = $$i10;
export const ro = $$r11;
export const cK = $$l12;
export const ZI = $$P13;
export const Py = $$k14;
export const tB = $$c15;
export const wH = $$g16;
export const kq = $$x17;
export const D = $$b18;
export const Ec = $$m19;