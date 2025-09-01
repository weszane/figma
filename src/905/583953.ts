import { r as _$$r } from "../905/249071";
import { M } from "../905/512402";
function a(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
export class $$$$s0 {
  static identity() {
    return this.fromNumbers(1, 0, 0, 0, 1, 0);
  }
  static fromNumbers(e, t, i, n, r, a) {
    let o = new $$$$s0();
    o.m00 = e;
    o.m01 = t;
    o.m02 = i;
    o.m10 = n;
    o.m11 = r;
    o.m12 = a;
    return o;
  }
  static fromVectors(e, t, i) {
    let n = new $$$$s0();
    n.m00 = t.x;
    n.m01 = i.x;
    n.m02 = e.x;
    n.m10 = t.y;
    n.m11 = i.y;
    n.m12 = e.y;
    return n;
  }
  static fromFigMatrix(e) {
    let t = new $$$$s0();
    t.m00 = e.m00;
    t.m01 = e.m01;
    t.m02 = e.m02;
    t.m10 = e.m10;
    t.m11 = e.m11;
    t.m12 = e.m12;
    return t;
  }
  toFigMatrix() {
    return {
      m00: this.m00,
      m01: this.m01,
      m02: this.m02,
      m10: this.m10,
      m11: this.m11,
      m12: this.m12
    };
  }
  axisX() {
    return new M(this.m00, this.m10);
  }
  axisY() {
    return new M(this.m01, this.m11);
  }
  offset() {
    return new M(this.m02, this.m12);
  }
  toRadians() {
    return Math.atan2(this.m10, this.m00);
  }
  toDegrees() {
    return 180 * Math.atan2(this.m10, this.m00) / Math.PI;
  }
  toScale() {
    let {
      m00,
      m01,
      m10,
      m11
    } = this;
    return new M(Math.sqrt(m00 * m00 + m10 * m10), Math.sqrt(m01 * m01 + m11 * m11));
  }
  hasNaN() {
    return this.m00 != this.m00 && this.m01 != this.m01 && this.m02 != this.m02 && this.m10 != this.m10 && this.m11 != this.m11 && this.m12 != this.m12;
  }
  translate(e, t) {
    this.m02 = e * this.m00 + t * this.m01 + this.m02;
    this.m12 = e * this.m10 + t * this.m11 + this.m12;
  }
  rotate(e) {
    if (0 === e) return;
    let t = Math.sin(e);
    let i = Math.cos(e);
    let n = i * this.m00 + t * this.m01;
    let r = i * this.m01 - t * this.m00;
    let a = i * this.m10 + t * this.m11;
    let s = i * this.m11 - t * this.m10;
    this.m00 = n;
    this.m01 = r;
    this.m10 = a;
    this.m11 = s;
  }
  scale(e, t) {
    this.m00 *= e;
    this.m01 *= t;
    this.m10 *= e;
    this.m11 *= t;
  }
  multiply(e) {
    let t = this.m00 * e.m00 + this.m01 * e.m10;
    let i = this.m00 * e.m01 + this.m01 * e.m11;
    let n = this.m00 * e.m02 + this.m01 * e.m12 + this.m02;
    let r = this.m10 * e.m00 + this.m11 * e.m10;
    let a = this.m10 * e.m01 + this.m11 * e.m11;
    let s = this.m10 * e.m02 + this.m11 * e.m12 + this.m12;
    this.m00 = t;
    this.m01 = i;
    this.m02 = n;
    this.m10 = r;
    this.m11 = a;
    this.m12 = s;
  }
  determinant() {
    return this.m00 * this.m11 - this.m01 * this.m10;
  }
  invert() {
    let e = 1 / this.determinant();
    if (!isFinite(e)) return !1;
    let t = $$$$s0.fromNumbers(this.m11 * e, -this.m01 * e, (this.m01 * this.m12 - this.m11 * this.m02) * e, -this.m10 * e, this.m00 * e, (this.m10 * this.m02 - this.m00 * this.m12) * e);
    return !t.hasNaN() && (this.m00 = t.m00, this.m01 = t.m01, this.m02 = t.m02, this.m10 = t.m10, this.m11 = t.m11, this.m12 = t.m12, !0);
  }
  transformRect(e) {
    if (e.isInvalid()) return e;
    if (0 === this.axisX().y && 0 === this.axisY().x) return _$$r.computeBounds(this.transformPoint(e.topLeft()), this.transformPoint(e.bottomRight()));
    let t = [this.transformPoint(e.topLeft()), this.transformPoint(e.topRight()), this.transformPoint(e.bottomLeft()), this.transformPoint(e.bottomRight())];
    return _$$r.computeBoundsFromPointArray(t);
  }
  transformPoint(e) {
    return new M(this.m00 * e.x + this.m01 * e.y + this.m02, this.m10 * e.x + this.m11 * e.y + this.m12);
  }
  transformDirection(e) {
    return new M(this.m00 * e.x + this.m01 * e.y, this.m10 * e.x + this.m11 * e.y);
  }
  inverseTransformPoint(e) {
    let t = 1 / this.determinant();
    if (!isFinite(t)) return M.invalid();
    let i = new M((this.m11 * e.x - this.m01 * e.y + this.m01 * this.m12 - this.m11 * this.m02) * t, (this.m00 * e.y - this.m10 * e.x + this.m10 * this.m02 - this.m00 * this.m12) * t);
    return i.hasNaN() ? M.invalid() : i;
  }
  constructor() {
    a(this, "m00", void 0);
    a(this, "m01", void 0);
    a(this, "m02", void 0);
    a(this, "m10", void 0);
    a(this, "m11", void 0);
    a(this, "m12", void 0);
    this.m00 = this.m01 = this.m02 = this.m10 = this.m11 = this.m12 = 0;
  }
}
a($$$$s0, "kEpsilon", 1e-6);
a($$$$s0, "kEpsilonSqr", $$$$s0.kEpsilon * $$$$s0.kEpsilon);
export const s = $$$$s0;