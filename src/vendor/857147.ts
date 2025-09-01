import { Ip, ng, _l } from "../vendor/630853";
import { AU } from "../vendor/703752";
import { FG, LA } from "../vendor/857755";
import { Xj, Jg } from "../vendor/969425";
export function $$o5(e) {
  e = $$y8(e, new FG());
  return l(LA(e.era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function l(e, t, a, u, n, r, i) {
  let o = new Date();
  o.setUTCHours(u, n, r, i);
  o.setUTCFullYear(e, t - 1, a);
  return o.getTime();
}
function s(e, t) {
  if ("UTC" === t) return 0;
  if (e > 0 && t === Xj()) return -6e4 * new Date(e).getTimezoneOffset();
  let {
    year,
    month,
    day,
    hour,
    minute,
    second
  } = c(e, t);
  return l(year, month, day, hour, minute, second, 0) - 1e3 * Math.floor(e / 1e3);
}
let d = new Map();
function c(e, t) {
  let a = d.get(t);
  a || (a = new Intl.DateTimeFormat("en-US", {
    timeZone: t,
    hour12: !1,
    era: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }), d.set(t, a));
  let u = a.formatToParts(new Date(e));
  let n = {};
  for (let e of u) "literal" !== e.type && (n[e.type] = e.value);
  return {
    year: "BC" === n.era || "B" === n.era ? -n.year + 1 : +n.year,
    month: +n.month,
    day: +n.day,
    hour: "24" === n.hour ? 0 : +n.hour,
    minute: +n.minute,
    second: +n.second
  };
}
export function $$m0(e, t, a = "compatible") {
  var u;
  var n;
  var l;
  let d = $$p6(e);
  if ("UTC" === t) return $$o5(d);
  if (t === Xj() && "compatible" === a) {
    d = $$y8(d, new FG());
    let e = new Date();
    let t = LA(d.era, d.year);
    e.setFullYear(t, d.month - 1, d.day);
    e.setHours(d.hour, d.minute, d.second, d.millisecond);
    return e.getTime();
  }
  let h = $$o5(d);
  let D = s(h - 864e5, t);
  let f = s(h + 864e5, t);
  u = d;
  let g = ((n = h - D) == (l = h - f) ? [n] : [n, l]).filter(e => {
    let a;
    a = c(e, t);
    return u.year === a.year && u.month === a.month && u.day === a.day && u.hour === a.hour && u.minute === a.minute && u.second === a.second;
  });
  if (1 === g.length) return g[0];
  if (g.length > 1) switch (a) {
    case "compatible":
    case "earlier":
      return g[0];
    case "later":
      return g[g.length - 1];
    case "reject":
      throw RangeError("Multiple possible absolute times found");
  }
  switch (a) {
    case "earlier":
      return Math.min(h - D, h - f);
    case "compatible":
    case "later":
      return Math.max(h - D, h - f);
    case "reject":
      throw RangeError("No such absolute time found");
  }
}
export function $$h2(e, t, a = "compatible") {
  return new Date($$m0(e, t, a));
}
export function $$D1(e, t) {
  let a = s(e, t);
  let n = new Date(e + a);
  let r = n.getUTCFullYear();
  let i = n.getUTCMonth() + 1;
  let o = n.getUTCDate();
  let l = n.getUTCHours();
  let d = n.getUTCMinutes();
  let c = n.getUTCSeconds();
  let m = n.getUTCMilliseconds();
  return new Ip(r < 1 ? "BC" : "AD", r < 1 ? -r + 1 : r, i, o, t, a, l, d, c, m);
}
export function $$f4(e) {
  return new ng(e.calendar, e.era, e.year, e.month, e.day);
}
export function $$p6(e, t) {
  let a = 0;
  let n = 0;
  let r = 0;
  let i = 0;
  if ("timeZone" in e) ({
    hour: a,
    minute: n,
    second: r,
    millisecond: i
  } = e);else if ("hour" in e && !t) return e;
  t && ({
    hour: a,
    minute: n,
    second: r,
    millisecond: i
  } = t);
  return new _l(e.calendar, e.era, e.year, e.month, e.day, a, n, r, i);
}
export function $$y8(e, t) {
  if (Jg(e.calendar, t)) return e;
  let a = t.fromJulianDay(e.calendar.toJulianDay(e));
  let u = e.copy();
  u.calendar = t;
  u.era = a.era;
  u.year = a.year;
  u.month = a.month;
  u.day = a.day;
  AU(u);
  return u;
}
export function $$g7(e, t, a) {
  var n;
  var r;
  return e instanceof Ip ? e.timeZone === t ? e : (n = e, r = t, $$y8($$D1($$o5(n) - n.offset, r), n.calendar)) : $$D1($$m0(e, t, a), t);
}
export function $$v3(e) {
  return new Date($$o5(e) - e.offset);
}
export const Tr = $$m0;
export const Yd = $$D1;
export const ay = $$h2;
export const cd = $$v3;
export const gw = $$f4;
export const oU = $$o5;
export const tR = $$p6;
export const uB = $$g7;
export const yP = $$y8;