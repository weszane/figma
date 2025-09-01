import { tR, Tr, oU, Yd, yP } from "../vendor/857147";
import { FG } from "../vendor/857755";
export function $$r5(e, t) {
  let a = e.copy();
  let u = "hour" in a ? p(a, t) : 0;
  i(a, t.years || 0);
  a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e);
  a.month += t.months || 0;
  o(a);
  l(a);
  a.day += 7 * (t.weeks || 0);
  a.day += t.days || 0;
  a.day += u;
  (function (e) {
    for (; e.day < 1;) {
      e.month--;
      o(e);
      e.day += e.calendar.getDaysInMonth(e);
    }
    for (; e.day > e.calendar.getDaysInMonth(e);) {
      e.day -= e.calendar.getDaysInMonth(e);
      e.month++;
      o(e);
    }
  })(a);
  a.calendar.balanceDate && a.calendar.balanceDate(a);
  a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
  let n = a.calendar.getYearsInEra(a);
  if (a.year > n) {
    var r;
    var s;
    let e = (s = a.calendar).isInverseEra?.call(s, a);
    a.year = n;
    a.month = e ? 1 : a.calendar.getMonthsInYear(a);
    a.day = e ? 1 : a.calendar.getDaysInMonth(a);
  }
  a.month < 1 && (a.month = 1, a.day = 1);
  let d = a.calendar.getMonthsInYear(a);
  a.month > d && (a.month = d, a.day = a.calendar.getDaysInMonth(a));
  a.day = Math.max(1, Math.min(a.calendar.getDaysInMonth(a), a.day));
  return a;
}
function i(e, t) {
  var a;
  var u;
  (u = e.calendar).isInverseEra?.call(u, e) && (t = -t);
  e.year += t;
}
function o(e) {
  for (; e.month < 1;) {
    i(e, -1);
    e.month += e.calendar.getMonthsInYear(e);
  }
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e));) {
    e.month -= t;
    i(e, 1);
  }
}
function l(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month));
  e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
export function $$s0(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e);
  e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year));
  l(e);
}
function d(e) {
  let t = {};
  for (let a in e) "number" == typeof e[a] && (t[a] = -e[a]);
  return t;
}
export function $$c4(e, t) {
  return $$r5(e, d(t));
}
export function $$m10(e, t) {
  let a = e.copy();
  null != t.era && (a.era = t.era);
  null != t.year && (a.year = t.year);
  null != t.month && (a.month = t.month);
  null != t.day && (a.day = t.day);
  $$s0(a);
  return a;
}
export function $$h11(e, t) {
  let a = e.copy();
  null != t.hour && (a.hour = t.hour);
  null != t.minute && (a.minute = t.minute);
  null != t.second && (a.second = t.second);
  null != t.millisecond && (a.millisecond = t.millisecond);
  $$D3(a);
  return a;
}
export function $$D3(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3));
  e.second = Math.max(0, Math.min(e.second, 59));
  e.minute = Math.max(0, Math.min(e.minute, 59));
  e.hour = Math.max(0, Math.min(e.hour, 23));
}
function f(e, t) {
  let a = e % t;
  a < 0 && (a += t);
  return a;
}
function p(e, t) {
  let a;
  e.hour += t.hours || 0;
  e.minute += t.minutes || 0;
  e.second += t.seconds || 0;
  e.millisecond += t.milliseconds || 0;
  e.second += Math.floor(e.millisecond / 1e3);
  e.millisecond = f(e.millisecond, 1e3);
  e.minute += Math.floor(e.second / 60);
  e.second = f(e.second, 60);
  e.hour += Math.floor(e.minute / 60);
  e.minute = f(e.minute, 60);
  a = Math.floor(e.hour / 24);
  e.hour = f(e.hour, 24);
  return a;
}
export function $$y12(e, t) {
  let a = e.copy();
  p(a, t);
  return a;
}
export function $$g7(e, t) {
  return $$y12(e, d(t));
}
export function $$v13(e, t, a, u) {
  let n = e.copy();
  switch (t) {
    case "era":
      {
        let t = e.calendar.getEras();
        let r = t.indexOf(e.era);
        if (r < 0) throw Error("Invalid era: " + e.era);
        r = E(r, a, 0, t.length - 1, u?.round);
        n.era = t[r];
        $$s0(n);
        break;
      }
    case "year":
      var r;
      var i;
      (i = n.calendar).isInverseEra?.call(i, n) && (a = -a);
      n.year = E(e.year, a, -1 / 0, 9999, u?.round);
      n.year === -1 / 0 && (n.year = 1);
      n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e);
      break;
    case "month":
      n.month = E(e.month, a, 1, e.calendar.getMonthsInYear(e), u?.round);
      break;
    case "day":
      n.day = E(e.day, a, 1, e.calendar.getDaysInMonth(e), u?.round);
      break;
    default:
      throw Error("Unsupported field " + t);
  }
  e.calendar.balanceDate && e.calendar.balanceDate(n);
  $$s0(n);
  return n;
}
export function $$b9(e, t, a, u) {
  let n = e.copy();
  switch (t) {
    case "hour":
      {
        let t = e.hour;
        let r = 0;
        let i = 23;
        if (u?.hourCycle === 12) {
          let e = t >= 12;
          r = e ? 12 : 0;
          i = e ? 23 : 11;
        }
        n.hour = E(t, a, r, i, u?.round);
        break;
      }
    case "minute":
      n.minute = E(e.minute, a, 0, 59, u?.round);
      break;
    case "second":
      n.second = E(e.second, a, 0, 59, u?.round);
      break;
    case "millisecond":
      n.millisecond = E(e.millisecond, a, 0, 999, u?.round);
      break;
    default:
      throw Error("Unsupported field " + t);
  }
  return n;
}
function E(e, t, a, u, n = !1) {
  if (n) {
    (e += Math.sign(t)) < a && (e = u);
    let n = Math.abs(t);
    (e = t > 0 ? Math.ceil(e / n) * n : Math.floor(e / n) * n) > u && (e = a);
  } else (e += t) < a ? e = u - (a - e - 1) : e > u && (e = a + (e - u - 1));
  return e;
}
export function $$C2(e, t) {
  let a;
  if (null != t.years && 0 !== t.years || null != t.months && 0 !== t.months || null != t.weeks && 0 !== t.weeks || null != t.days && 0 !== t.days) {
    let n = $$r5(tR(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    a = Tr(n, e.timeZone);
  } else a = oU(e) - e.offset;
  a += t.milliseconds || 0;
  a += 1e3 * (t.seconds || 0);
  a += 6e4 * (t.minutes || 0);
  a += 36e5 * (t.hours || 0);
  let n = Yd(a, e.timeZone);
  return yP(n, e.calendar);
}
export function $$x8(e, t) {
  return $$C2(e, d(t));
}
export function $$B6(e, t, a, r) {
  switch (t) {
    case "hour":
      {
        let t = 0;
        let i = 23;
        if (r?.hourCycle === 12) {
          let a = e.hour >= 12;
          t = a ? 12 : 0;
          i = a ? 23 : 11;
        }
        let o = tR(e);
        let l = yP($$h11(o, {
          hour: t
        }), new FG());
        let s = [Tr(l, e.timeZone, "earlier"), Tr(l, e.timeZone, "later")].filter(t => Yd(t, e.timeZone).day === l.day)[0];
        let d = yP($$h11(o, {
          hour: i
        }), new FG());
        let c = [Tr(d, e.timeZone, "earlier"), Tr(d, e.timeZone, "later")].filter(t => Yd(t, e.timeZone).day === d.day).pop();
        let m = oU(e) - e.offset;
        let D = Math.floor(m / 36e5);
        let f = m % 36e5;
        m = 36e5 * E(D, a, Math.floor(s / 36e5), Math.floor(c / 36e5), r?.round) + f;
        return yP(Yd(m, e.timeZone), e.calendar);
      }
    case "minute":
    case "second":
    case "millisecond":
      return $$b9(e, t, a, r);
    case "era":
    case "year":
    case "month":
    case "day":
      {
        let n = $$v13(tR(e), t, a, r);
        let i = Tr(n, e.timeZone);
        return yP(Yd(i, e.timeZone), e.calendar);
      }
    default:
      throw Error("Unsupported field " + t);
  }
}
export function $$w1(e, t, a) {
  let n = tR(e);
  let r = $$h11($$m10(n, t), t);
  if (0 === r.compare(n)) return e;
  let i = Tr(r, e.timeZone, a);
  return yP(Yd(i, e.timeZone), e.calendar);
}
export const AU = $$s0;
export const D8 = $$w1;
export const E0 = $$C2;
export const Rb = $$D3;
export const Re = $$c4;
export const WQ = $$r5;
export const XH = $$B6;
export const YP = $$g7;
export const d_ = $$x8;
export const gt = $$b9;
export const hZ = $$m10;
export const ib = $$h11;
export const tY = $$y12;
export const xy = $$v13;