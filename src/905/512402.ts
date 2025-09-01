function n(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
export class $$r0 {
  static fromFigVector(e) {
    return new $$r0(e.x, e.y);
  }
  static toVectorD(e) {
    return {
      x: e.x,
      y: e.y
    };
  }
  static fromVectorD(e) {
    return new $$r0(e.x, e.y);
  }
  isInvalid() {
    return this.hasNaN();
  }
  clone() {
    return new $$r0(this.x, this.y);
  }
  hasNaN() {
    return Number.isNaN(this.x) || Number.isNaN(this.y);
  }
  equals(e) {
    return e && this.x === e.x && this.y === e.y;
  }
  toString() {
    return `(${this.x}, ${this.y})`;
  }
  plus(e) {
    return new $$r0(this.x + e.x, this.y + e.y);
  }
  incrementBy(e) {
    this.x = this.x + e.x;
    this.y = this.y + e.y;
  }
  minus(e) {
    return new $$r0(this.x - e.x, this.y - e.y);
  }
  distanceTo(e) {
    let t = e.x - this.x;
    let i = e.y - this.y;
    return Math.sqrt(t * t + i * i);
  }
  component(e) {
    return 0 === e ? this.x : this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  toAngle() {
    return Math.atan2(this.y, this.x);
  }
  multiplyBy(e) {
    return new $$r0(this.x * e, this.y * e);
  }
  divideBy(e) {
    return new $$r0(this.x / e, this.y / e);
  }
  transpose() {
    return new $$r0(this.y, this.x);
  }
  rounded() {
    return new $$r0(Math.round(this.x), Math.round(this.y));
  }
  static max(e, t) {
    return new $$r0(Math.max(e.x, t.x), Math.max(e.y, t.y));
  }
  static min(e, t) {
    return new $$r0(Math.min(e.x, t.x), Math.min(e.y, t.y));
  }
  static infinity() {
    return new $$r0(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
  }
  static invalid() {
    return new $$r0(Number.NaN, Number.NaN);
  }
  constructor(e = 0, t = 0) {
    n(this, "x", void 0);
    n(this, "y", void 0);
    this.x = e;
    this.y = t;
  }
}
export const M = $$r0;