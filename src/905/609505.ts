export class $$n0 {
  x;
  y;
  constructor(e = 0, t = 0) {
    this.x = e;
    this.y = t;
  }
  clone() {
    return new $$n0(this.x, this.y);
  }
  equals(e) {
    return this.x === e.x && this.y === e.y;
  }
  toString() {
    return `(${this.x}, ${this.y})`;
  }
  add(e) {
    return new $$n0(this.x + e.x, this.y + e.y);
  }
  static add(...e) {
    return e.filter(e => null != e).reduce((e, t) => (e.x += t.x, e.y += t.y, e), {
      x: 0,
      y: 0
    });
  }
  subtract(e) {
    return new $$n0(this.x - e.x, this.y - e.y);
  }
  static subtract(e, t) {
    return {
      x: e.x - t.x,
      y: e.y - t.y
    };
  }
  static scale(e, t) {
    return {
      x: e * t.x,
      y: e * t.y
    };
  }
  static abs(e) {
    return {
      x: Math.abs(e.x),
      y: Math.abs(e.y)
    };
  }
  scale(e) {
    return new $$n0(this.x * e, this.y * e);
  }
  multiply(e) {
    return new $$n0(this.x * e.x, this.y * e.y);
  }
  divide(e) {
    return new $$n0(this.x / e.x, this.y / e.y);
  }
  dot(e) {
    return $$n0.dot(this, e);
  }
  toAngle() {
    return Math.atan2(this.y, this.x);
  }
  static bound(e, t) {
    return t ? {
      x: Math.max(Math.min(e.x, t.max.x), t.min.x),
      y: Math.max(Math.min(e.y, t.max.y), t.min.y)
    } : e;
  }
  static dot(e, t) {
    return e.x * t.x + e.y * t.y;
  }
  static interpolate(e, t, i) {
    return {
      x: e.x + (t.x - e.x) * i,
      y: e.y + (t.y - e.y) * i
    };
  }
  rounded() {
    return new $$n0(Math.round(this.x), Math.round(this.y));
  }
  static rounded(e) {
    return {
      x: Math.round(e.x),
      y: Math.round(e.y)
    };
  }
  static size(e) {
    return Math.sqrt($$n0.dot(e, e));
  }
  size() {
    return $$n0.size(this);
  }
  unit() {
    let e = this.size();
    return this.scale(0 === e ? 0 : 1 / e);
  }
  distanceTo(e) {
    return $$n0.size(this.subtract(e));
  }
  static distance(e, t) {
    return $$n0.size($$n0.subtract(e, t));
  }
  clamp(e) {
    return new $$n0(Math.max(e.x, Math.min(e.x + e.width, this.x)), Math.max(e.y, Math.min(e.y + e.height, this.y)));
  }
  clampX(e) {
    return new $$n0(Math.max(e.x, Math.min(e.x + e.width, this.x)), this.y);
  }
  clampY(e) {
    return new $$n0(this.x, Math.max(e.y, Math.min(e.y + e.height, this.y)));
  }
  rotate90() {
    return new $$n0(-this.y, this.x);
  }
  hasNaN() {
    return Number.isNaN(this.x) || Number.isNaN(this.y);
  }
  isInvalid() {
    return this.hasNaN();
  }
  static max(e, t) {
    return new $$n0(Math.max(e.x, t.x), Math.max(e.y, t.y));
  }
  static min(e, t) {
    return new $$n0(Math.min(e.x, t.x), Math.min(e.y, t.y));
  }
  static infinity() {
    return new $$n0(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
  }
  static invalid() {
    return new $$n0(Number.NaN, Number.NaN);
  }
  plus(e) {
    return new $$n0(this.x + e.x, this.y + e.y);
  }
  minus(e) {
    return new $$n0(this.x - e.x, this.y - e.y);
  }
  multiplyBy(e) {
    return new $$n0(this.x * e, this.y * e);
  }
  divideBy(e) {
    return new $$n0(this.x / e, this.y / e);
  }
  transpose() {
    return new $$n0(this.y, this.x);
  }
}
export const Mi = $$n0;