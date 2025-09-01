import { WQ, Re, hZ, xy, AU, tY, YP, ib, gt, Rb, E0, d_, D8, XH } from "../vendor/703752";
import { SE, Nu } from "../vendor/969425";
import { $T, ot, qk, e6 } from "../vendor/261608";
import { FG } from "../vendor/857755";
import { ay, tR, cd, uB } from "../vendor/857147";
import { _ } from "../vendor/884297";
function s(e) {
  let t;
  let a = "object" == typeof e[0] ? e.shift() : new FG();
  if ("string" == typeof e[0]) t = e.shift();else {
    let e = a.getEras();
    t = e[e.length - 1];
  }
  return [a, t, e.shift(), e.shift(), e.shift()];
}
var d = new WeakMap();
export class $$c3 {
  copy() {
    return this.era ? new $$c3(this.calendar, this.era, this.year, this.month, this.day) : new $$c3(this.calendar, this.year, this.month, this.day);
  }
  add(e) {
    return WQ(this, e);
  }
  subtract(e) {
    return Re(this, e);
  }
  set(e) {
    return hZ(this, e);
  }
  cycle(e, t, a) {
    return xy(this, e, t, a);
  }
  toDate(e) {
    return ay(this, e);
  }
  toString() {
    return $T(this);
  }
  compare(e) {
    return SE(this, e);
  }
  constructor(...e) {
    _(this, d, {
      writable: !0,
      value: void 0
    });
    let [t, a, n, r, i] = s(e);
    this.calendar = t;
    this.era = a;
    this.year = n;
    this.month = r;
    this.day = i;
    AU(this);
  }
}
var m = new WeakMap();
export class $$h2 {
  copy() {
    return new $$h2(this.hour, this.minute, this.second, this.millisecond);
  }
  add(e) {
    return tY(this, e);
  }
  subtract(e) {
    return YP(this, e);
  }
  set(e) {
    return ib(this, e);
  }
  cycle(e, t, a) {
    return gt(this, e, t, a);
  }
  toString() {
    return ot(this);
  }
  compare(e) {
    return Nu(this, e);
  }
  constructor(e = 0, t = 0, a = 0, n = 0) {
    _(this, m, {
      writable: !0,
      value: void 0
    });
    this.hour = e;
    this.minute = t;
    this.second = a;
    this.millisecond = n;
    Rb(this);
  }
}
var D = new WeakMap();
export class $$f1 {
  copy() {
    return this.era ? new $$f1(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new $$f1(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  add(e) {
    return WQ(this, e);
  }
  subtract(e) {
    return Re(this, e);
  }
  set(e) {
    return hZ(ib(this, e), e);
  }
  cycle(e, t, a) {
    switch (e) {
      case "era":
      case "year":
      case "month":
      case "day":
        return xy(this, e, t, a);
      default:
        return gt(this, e, t, a);
    }
  }
  toDate(e, t) {
    return ay(this, e, t);
  }
  toString() {
    return qk(this);
  }
  compare(e) {
    let t = SE(this, e);
    return 0 === t ? Nu(this, tR(e)) : t;
  }
  constructor(...e) {
    _(this, D, {
      writable: !0,
      value: void 0
    });
    let [t, a, n, r, i] = s(e);
    this.calendar = t;
    this.era = a;
    this.year = n;
    this.month = r;
    this.day = i;
    this.hour = e.shift() || 0;
    this.minute = e.shift() || 0;
    this.second = e.shift() || 0;
    this.millisecond = e.shift() || 0;
    AU(this);
  }
}
var p = new WeakMap();
export class $$y0 {
  copy() {
    return this.era ? new $$y0(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new $$y0(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  add(e) {
    return E0(this, e);
  }
  subtract(e) {
    return d_(this, e);
  }
  set(e, t) {
    return D8(this, e, t);
  }
  cycle(e, t, a) {
    return XH(this, e, t, a);
  }
  toDate() {
    return cd(this);
  }
  toString() {
    return e6(this);
  }
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  compare(e) {
    return this.toDate().getTime() - uB(e, this.timeZone).toDate().getTime();
  }
  constructor(...e) {
    _(this, p, {
      writable: !0,
      value: void 0
    });
    let [t, a, n, r, i] = s(e);
    let o = e.shift();
    let d = e.shift();
    this.calendar = t;
    this.era = a;
    this.year = n;
    this.month = r;
    this.day = i;
    this.timeZone = o;
    this.offset = d;
    this.hour = e.shift() || 0;
    this.minute = e.shift() || 0;
    this.second = e.shift() || 0;
    this.millisecond = e.shift() || 0;
    AU(this);
  }
}
export const Ip = $$y0;
export const _l = $$f1;
export const gX = $$h2;
export const ng = $$c3;