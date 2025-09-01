import { ng, _l } from "../vendor/630853";
import { yP } from "../vendor/857147";
import { FG } from "../vendor/857755";
let i = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/;
let o = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/;
export function $$l2(e) {
  let t = e.match(i);
  if (!t) throw Error("Invalid ISO 8601 date string: " + e);
  let a = new ng(d(t[1], 0, 9999), d(t[2], 1, 12), 1);
  a.day = d(t[3], 1, a.calendar.getDaysInMonth(a));
  return a;
}
export function $$s1(e) {
  let t = e.match(o);
  if (!t) throw Error("Invalid ISO 8601 date time string: " + e);
  let a = d(t[1], -9999, 9999);
  let n = new _l(a < 1 ? "BC" : "AD", a < 1 ? -a + 1 : a, d(t[2], 1, 12), 1, t[4] ? d(t[4], 0, 23) : 0, t[5] ? d(t[5], 0, 59) : 0, t[6] ? d(t[6], 0, 59) : 0, t[7] ? 1e3 * d(t[7], 0, 1 / 0) : 0);
  n.day = d(t[3], 0, n.calendar.getDaysInMonth(n));
  return n;
}
function d(e, t, a) {
  let u = Number(e);
  if (u < t || u > a) throw RangeError(`Value out of range: ${t} <= ${u} <= ${a}`);
  return u;
}
export function $$c4(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
export function $$m0(e) {
  let t;
  let a = yP(e, new FG());
  t = "BC" === a.era ? 1 === a.year ? "0000" : "-" + String(Math.abs(1 - a.year)).padStart(6, "00") : String(a.year).padStart(4, "0");
  return `${t}-${String(a.month).padStart(2, "0")}-${String(a.day).padStart(2, "0")}`;
}
export function $$h5(e) {
  return `${$$m0(e)}T${$$c4(e)}`;
}
export function $$D3(e) {
  var t;
  let a;
  let u;
  let n;
  return `${$$h5(e)}${a = 0 > Math.sign(t = e.offset) ? "-" : "+", u = Math.floor((t = Math.abs(t)) / 36e5), n = t % 36e5 / 6e4, `${a}${String(u).padStart(2, "0")}:${String(n).padStart(2, "0")}`}[${e.timeZone}]`;
}
export const $T = $$m0;
export const DP = $$s1;
export const _U = $$l2;
export const e6 = $$D3;
export const ot = $$c4;
export const qk = $$h5;