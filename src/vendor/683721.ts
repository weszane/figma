import { ng } from "../vendor/630853";
import { FG, LA, f5, rG, U_ } from "../vendor/857755";
import { z as _$$z } from "../vendor/492662";
let u;
let n;
class o extends FG {
  fromJulianDay(e) {
    let t = super.fromJulianDay(e);
    let a = LA(t.era, t.year);
    return new ng(this, a - -543, t.month, t.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(l(e));
  }
  getEras() {
    return ["BE"];
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(l(e));
  }
  balanceDate() {}
  constructor(...e) {
    super(...e);
    this.identifier = "buddhist";
  }
}
function l(e) {
  let [t, a] = f5(e.year + -543);
  return new ng(t, a, e.month, e.day);
}
function s(e, t, a, u) {
  return e + 365 * t + Math.floor(t / 4) + 30 * (a - 1) + u - 1;
}
function $$d(e, t) {
  let a = Math.floor(4 * (t - e) / 1461);
  let u = 1 + Math.floor((t - s(e, a, 1, 1)) / 30);
  let n = t + 1 - s(e, a, u, 1);
  return [a, u, n];
}
function c(e) {
  return Math.floor(e % 4 / 3);
}
function m(e, t) {
  return t % 13 != 0 ? 30 : c(e) + 5;
}
class h {
  fromJulianDay(e) {
    let [t, a, u] = $$d(1723856, e);
    let n = "AM";
    t <= 0 && (n = "AA", t += 5500);
    return new ng(this, n, t, a, u);
  }
  toJulianDay(e) {
    let t = e.year;
    "AA" === e.era && (t -= 5500);
    return s(1723856, t, e.month, e.day);
  }
  getDaysInMonth(e) {
    return m(e.year, e.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(e) {
    return 365 + c(e.year);
  }
  getYearsInEra(e) {
    return "AA" === e.era ? 9999 : 9991;
  }
  getEras() {
    return ["AA", "AM"];
  }
  constructor() {
    this.identifier = "ethiopic";
  }
}
class D extends h {
  fromJulianDay(e) {
    let [t, a, u] = $$d(1723856, e);
    t += 5500;
    return new ng(this, "AA", t, a, u);
  }
  getEras() {
    return ["AA"];
  }
  getYearsInEra() {
    return 9999;
  }
  constructor(...e) {
    super(...e);
    this.identifier = "ethioaa";
  }
}
class f extends h {
  fromJulianDay(e) {
    let [t, a, u] = $$d(1824665, e);
    let n = "CE";
    t <= 0 && (n = "BCE", t = 1 - t);
    return new ng(this, n, t, a, u);
  }
  toJulianDay(e) {
    let t = e.year;
    "BCE" === e.era && (t = 1 - t);
    return s(1824665, t, e.month, e.day);
  }
  getDaysInMonth(e) {
    let t = e.year;
    "BCE" === e.era && (t = 1 - t);
    return m(t, e.month);
  }
  isInverseEra(e) {
    return "BCE" === e.era;
  }
  balanceDate(e) {
    e.year <= 0 && (e.era = "BCE" === e.era ? "CE" : "BCE", e.year = 1 - e.year);
  }
  getEras() {
    return ["BCE", "CE"];
  }
  getYearsInEra(e) {
    return "BCE" === e.era ? 9999 : 9715;
  }
  constructor(...e) {
    super(...e);
    this.identifier = "coptic";
  }
}
function y(e) {
  return 7 > _$$z(7 * e + 1, 19);
}
function g(e) {
  let t = Math.floor((235 * e - 234) / 19);
  let a = 29 * t + Math.floor((12084 + 13753 * t) / 25920);
  3 > _$$z(3 * (a + 1), 7) && (a += 1);
  return a;
}
function v(e) {
  let t;
  let a;
  return g(e) + (t = g(e - 1), a = g(e), g(e + 1) - a == 356 ? 2 : a - t == 382 ? 1 : 0);
}
function b(e) {
  return v(e + 1) - v(e);
}
function E(e, t) {
  if (t >= 6 && !y(e) && t++, 4 === t || 7 === t || 9 === t || 11 === t || 13 === t) return 29;
  let a = function (e) {
    let t = b(e);
    switch (t > 380 && (t -= 30), t) {
      case 353:
        return 0;
      case 354:
        return 1;
      case 355:
        return 2;
    }
  }(e);
  return 2 === t ? 2 === a ? 30 : 29 : 3 === t ? 0 === a ? 29 : 30 : 6 === t ? y(e) ? 30 : 0 : 30;
}
class C {
  fromJulianDay(e) {
    let t = e - 347997;
    let a = Math.floor((25920 * t / 765433 * 19 + 234) / 235) + 1;
    let u = v(a);
    let n = Math.floor(t - u);
    for (; n < 1;) n = Math.floor(t - (u = v(--a)));
    let i = 1;
    let o = 0;
    for (; o < n;) {
      o += E(a, i);
      i++;
    }
    let l = n - (o -= E(a, --i));
    return new ng(this, a, i, l);
  }
  toJulianDay(e) {
    let t = v(e.year);
    for (let a = 1; a < e.month; a++) t += E(e.year, a);
    return t + e.day + 347997;
  }
  getDaysInMonth(e) {
    return E(e.year, e.month);
  }
  getMonthsInYear(e) {
    return y(e.year) ? 13 : 12;
  }
  getDaysInYear(e) {
    return b(e.year);
  }
  getYearsInEra() {
    return 9999;
  }
  getEras() {
    return ["AM"];
  }
  balanceYearMonth(e, t) {
    t.year !== e.year && (y(t.year) && !y(e.year) && t.month > 6 ? e.month-- : !y(t.year) && y(e.year) && t.month > 6 && e.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
class x extends FG {
  fromJulianDay(e) {
    let t;
    let a;
    let u;
    let n = super.fromJulianDay(e);
    let o = n.year - 78;
    let l = e - rG(n.era, n.year, 1, 1);
    if (l < 80 ? (o--, l += (t = U_(n.year - 1) ? 31 : 30) + 155 + 90 + 10) : (t = U_(n.year) ? 31 : 30, l -= 80), l < t) {
      a = 1;
      u = l + 1;
    } else {
      let e = l - t;
      e < 155 ? (a = Math.floor(e / 31) + 2, u = e % 31 + 1) : (e -= 155, a = Math.floor(e / 30) + 7, u = e % 30 + 1);
    }
    return new ng(this, o, a, u);
  }
  toJulianDay(e) {
    let t;
    let a;
    let u = e.year + 78;
    let [n, r] = f5(u);
    return (U_(r) ? (t = 31, a = rG(n, r, 3, 21)) : (t = 30, a = rG(n, r, 3, 22)), 1 === e.month) ? a + e.day - 1 : (a += t + 31 * Math.min(e.month - 2, 5), e.month >= 8 && (a += (e.month - 7) * 30), a += e.day - 1);
  }
  getDaysInMonth(e) {
    return 1 === e.month && U_(e.year + 78) || e.month >= 2 && e.month <= 6 ? 31 : 30;
  }
  getYearsInEra() {
    return 9919;
  }
  getEras() {
    return ["saka"];
  }
  balanceDate() {}
  constructor(...e) {
    super(...e);
    this.identifier = "indian";
  }
}
function B(e, t, a, u) {
  return u + Math.ceil(29.5 * (a - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function w(e, t, a) {
  let u = Math.floor((30 * (a - t) + 10646) / 10631);
  let n = Math.min(12, Math.ceil((a - (29 + B(t, u, 1, 1))) / 29.5) + 1);
  let i = a - B(t, u, n, 1) + 1;
  return new ng(e, u, n, i);
}
function F(e) {
  return (14 + 11 * e) % 30 < 11;
}
class k {
  fromJulianDay(e) {
    return w(this, 1948440, e);
  }
  toJulianDay(e) {
    return B(1948440, e.year, e.month, e.day);
  }
  getDaysInMonth(e) {
    let t = 29 + e.month % 2;
    12 === e.month && F(e.year) && t++;
    return t;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(e) {
    return F(e.year) ? 355 : 354;
  }
  getYearsInEra() {
    return 9665;
  }
  getEras() {
    return ["AH"];
  }
  constructor() {
    this.identifier = "islamic-civil";
  }
}
class P extends k {
  fromJulianDay(e) {
    return w(this, 1948439, e);
  }
  toJulianDay(e) {
    return B(1948439, e.year, e.month, e.day);
  }
  constructor(...e) {
    super(...e);
    this.identifier = "islamic-tbla";
  }
}
function $(e) {
  return 460322 + n[e - 1300];
}
function R(e, t) {
  return (u[e - 1300] & 1 << 11 - (t - 1)) == 0 ? 29 : 30;
}
function A(e, t) {
  let a = $(e);
  for (let u = 1; u < t; u++) a += R(e, u);
  return a;
}
function S(e) {
  return n[e + 1 - 1300] - n[e - 1300];
}
class T extends k {
  fromJulianDay(e) {
    let t = e - 1948440;
    let a = $(1300);
    let u = $(1600);
    if (t < a || t > u) return super.fromJulianDay(e);
    {
      let e = 1299;
      let a = 1;
      let u = 1;
      for (; u > 0;) {
        u = t - $(++e) + 1;
        let n = S(e);
        if (u === n) {
          a = 12;
          break;
        }
        if (u < n) {
          let t = R(e, a);
          for (a = 1; u > t;) {
            u -= t;
            t = R(e, ++a);
          }
          break;
        }
      }
      return new ng(this, e, a, t - A(e, a) + 1);
    }
  }
  toJulianDay(e) {
    return e.year < 1300 || e.year > 1600 ? super.toJulianDay(e) : 1948440 + A(e.year, e.month) + (e.day - 1);
  }
  getDaysInMonth(e) {
    return e.year < 1300 || e.year > 1600 ? super.getDaysInMonth(e) : R(e.year, e.month);
  }
  getDaysInYear(e) {
    return e.year < 1300 || e.year > 1600 ? super.getDaysInYear(e) : S(e.year);
  }
  constructor() {
    this.identifier = "islamic-umalqura";
    if (super(), u || (u = new Uint16Array(Uint8Array.from(atob("qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI="), e => e.charCodeAt(0)).buffer)), !n) {
      n = new Uint32Array(301);
      let e = 0;
      for (let t = 1300; t <= 1600; t++) {
        n[t - 1300] = e;
        for (let a = 1; a <= 12; a++) e += R(t, a);
      }
    }
  }
}
let M = [[1868, 9, 8], [1912, 7, 30], [1926, 12, 25], [1989, 1, 8], [2019, 5, 1]];
let V = [[1912, 7, 29], [1926, 12, 24], [1989, 1, 7], [2019, 4, 30]];
let I = [1867, 1911, 1925, 1988, 2018];
let N = ["meiji", "taisho", "showa", "heisei", "reiwa"];
function L(e) {
  let t = M.findIndex(([t, a, u]) => e.year < t || e.year === t && e.month < a || e.year === t && e.month === a && e.day < u);
  return -1 === t ? M.length - 1 : 0 === t ? 0 : t - 1;
}
function O(e) {
  let t = I[N.indexOf(e.era)];
  if (!t) throw Error("Unknown era: " + e.era);
  return new ng(e.year + t, e.month, e.day);
}
class j extends FG {
  fromJulianDay(e) {
    let t = super.fromJulianDay(e);
    let a = L(t);
    return new ng(this, N[a], t.year - I[a], t.month, t.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(O(e));
  }
  balanceDate(e) {
    let t = O(e);
    let a = L(t);
    N[a] !== e.era && (e.era = N[a], e.year = t.year - I[a]);
    this.constrainDate(e);
  }
  constrainDate(e) {
    let t = N.indexOf(e.era);
    let a = V[t];
    if (null != a) {
      let [u, n, r] = a;
      let i = u - I[t];
      e.year = Math.max(1, Math.min(i, e.year));
      e.year === i && (e.month = Math.min(n, e.month), e.month === n && (e.day = Math.min(r, e.day)));
    }
    if (1 === e.year && t >= 0) {
      let [, a, u] = M[t];
      e.month = Math.max(a, e.month);
      e.month === a && (e.day = Math.max(u, e.day));
    }
  }
  getEras() {
    return N;
  }
  getYearsInEra(e) {
    let t = N.indexOf(e.era);
    let a = M[t];
    let u = M[t + 1];
    if (null == u) return 9999 - a[0] + 1;
    let n = u[0] - a[0];
    (e.month < u[1] || e.month === u[1] && e.day < u[2]) && n++;
    return n;
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(O(e));
  }
  getMinimumMonthInYear(e) {
    let t = z(e);
    return t ? t[1] : 1;
  }
  getMinimumDayInMonth(e) {
    let t = z(e);
    return t && e.month === t[1] ? t[2] : 1;
  }
  constructor(...e) {
    super(...e);
    this.identifier = "japanese";
  }
}
function z(e) {
  if (1 === e.year) return M[N.indexOf(e.era)];
}
let U = [0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336];
class K {
  fromJulianDay(e) {
    let t = e - 1948320;
    let a = 1 + Math.floor((33 * t + 3) / 12053);
    let u = t - (365 * (a - 1) + Math.floor((8 * a + 21) / 33));
    let n = u < 216 ? Math.floor(u / 31) : Math.floor((u - 6) / 30);
    let i = u - U[n] + 1;
    return new ng(this, a, n + 1, i);
  }
  toJulianDay(e) {
    let t = 1948319 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
    t += U[e.month - 1];
    return t += e.day;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(e) {
    return e.month <= 6 ? 31 : e.month <= 11 ? 30 : 8 > _$$z(25 * e.year + 11, 33) ? 30 : 29;
  }
  getEras() {
    return ["AP"];
  }
  getYearsInEra() {
    return 9377;
  }
  constructor() {
    this.identifier = "persian";
  }
}
function Z(e) {
  return "minguo" === e.era ? e.year + 1911 : 1 - e.year + 1911;
}
function _(e) {
  let t = e - 1911;
  return t > 0 ? ["minguo", t] : ["before_minguo", 1 - t];
}
class W extends FG {
  fromJulianDay(e) {
    let t = super.fromJulianDay(e);
    let [a, u] = _(LA(t.era, t.year));
    return new ng(this, a, u, t.month, t.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(J(e));
  }
  getEras() {
    return ["before_minguo", "minguo"];
  }
  balanceDate(e) {
    let [t, a] = _(Z(e));
    e.era = t;
    e.year = a;
  }
  isInverseEra(e) {
    return "before_minguo" === e.era;
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(J(e));
  }
  getYearsInEra(e) {
    return "before_minguo" === e.era ? 9999 : 8088;
  }
  constructor(...e) {
    super(...e);
    this.identifier = "roc";
  }
}
function J(e) {
  let [t, a] = f5(Z(e));
  return new ng(t, a, e.month, e.day);
}
export function $$Y0(e) {
  switch (e) {
    case "buddhist":
      return new o();
    case "ethiopic":
      return new h();
    case "ethioaa":
      return new D();
    case "coptic":
      return new f();
    case "hebrew":
      return new C();
    case "indian":
      return new x();
    case "islamic-civil":
      return new k();
    case "islamic-tbla":
      return new P();
    case "islamic-umalqura":
      return new T();
    case "japanese":
      return new j();
    case "persian":
      return new K();
    case "roc":
      return new W();
    default:
      return new FG();
  }
}
export const d = $$Y0;