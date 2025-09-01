import { M } from "../905/512402";
function $$r(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
export class $$a0 {
  static fromRectD(e) {
    return new $$a0(M.fromVectorD(e.origin), M.fromVectorD(e.size));
  }
  clone() {
    return new $$a0(this.origin.clone(), this.size.clone());
  }
  equals(e) {
    return this.origin.equals(e.origin) && this.size.equals(e.size);
  }
  left() {
    return this.origin.x;
  }
  top() {
    return this.origin.y;
  }
  right() {
    return this.size.x === Number.POSITIVE_INFINITY ? Number.POSITIVE_INFINITY : this.origin.x + this.width();
  }
  bottom() {
    return this.size.y === Number.POSITIVE_INFINITY ? Number.POSITIVE_INFINITY : this.origin.y + this.height();
  }
  bottomRight() {
    return new M(this.right(), this.bottom());
  }
  bottomLeft() {
    return new M(this.left(), this.bottom());
  }
  topLeft() {
    return new M(this.left(), this.top());
  }
  topRight() {
    return new M(this.right(), this.top());
  }
  topCenter() {
    return new M(this.center().x, this.top());
  }
  bottomCenter() {
    return new M(this.center().x, this.bottom());
  }
  centerLeft() {
    return new M(this.left(), this.center().y);
  }
  centerRight() {
    return new M(this.right(), this.center().y);
  }
  center() {
    return new M(this.origin.x + this.size.x / 2, this.origin.y + this.size.y / 2);
  }
  width() {
    return this.size.x;
  }
  height() {
    return this.size.y;
  }
  transpose() {
    return new $$a0(this.origin.transpose(), this.size.transpose());
  }
  offsetBy(e) {
    return new $$a0(this.origin.plus(e), this.size);
  }
  scaledBy(e) {
    return new $$a0(this.origin.multiplyBy(e), this.size.multiplyBy(e));
  }
  isInvalid() {
    return this.size.x < 0 || this.size.y < 0 || this.origin.hasNaN() || this.size.hasNaN();
  }
  isValid() {
    return !this.isInvalid();
  }
  isEmpty() {
    return !!this.isInvalid() || this.size.x <= 0 || this.size.y <= 0;
  }
  unionWith(e) {
    let t = M.min(this.origin, e.origin);
    let i = M.max(this.bottomRight(), e.bottomRight());
    return t.equals(i) ? this : new $$a0(t, i.minus(t));
  }
  containsIncludingBoundary(e) {
    return !this.isEmpty() && !e.isInvalid() && this.left() <= e.left() && this.right() >= e.right() && this.top() <= e.top() && this.bottom() >= e.bottom();
  }
  containsPointIncludingBoundary(e) {
    return !this.isEmpty() && this.left() <= e.x && e.x <= this.right() && this.top() <= e.y && e.y <= this.bottom();
  }
  intersectWith(e) {
    if (this.isInvalid() || e.isInvalid()) return $$a0.invalidRect();
    let t = M.max(this.origin, e.origin);
    let i = new $$a0(t, M.min(this.bottomRight(), e.bottomRight()).minus(t));
    if (i.origin.hasNaN() || i.size.hasNaN()) throw Error("Rect.intersectWith produced a result with NaN");
    i.isInvalid() && (i = $$a0.invalidRect());
    return i;
  }
  hasIntersectionWith(e) {
    return !this.intersectWith(e).isEmpty();
  }
  expand(e) {
    return this.isInvalid() ? $$a0.invalidRect() : "number" == typeof e ? $$a0.fromOriginAndSize(this.origin.x - e, this.origin.y - e, this.size.x + 2 * e, this.size.y + 2 * e) : new $$a0(this.origin.minus(e), this.size.plus(e.multiplyBy(2)));
  }
  static invalidRect() {
    return new $$a0(new M(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), new M(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY));
  }
  static infinite() {
    return new $$a0(M.infinity().multiplyBy(-1), M.infinity());
  }
  static fromOriginAndSize(e, t, i, r) {
    return new $$a0(new M(e, t), new M(i, r));
  }
  static fromCenterSize(e, t) {
    let i = t.divideBy(2);
    return new $$a0(e.minus(i), t);
  }
  static fromFigRect(e) {
    return new $$a0(new M(e.x, e.y), new M(e.w, e.h));
  }
  static computeBounds(e, t) {
    let i = M.min(e, t);
    return new $$a0(i, M.max(e, t).minus(i));
  }
  static computeBoundsFromPointArray(e) {
    let t = M.infinity();
    let i = M.infinity().multiplyBy(-1);
    for (let r of e) {
      t = M.min(t, r);
      i = M.max(i, r);
    }
    return new $$a0(t, i.minus(t));
  }
  constructor(e = new M(), t = new M()) {
    $$r(this, "origin", void 0);
    $$r(this, "size", void 0);
    this.origin = e;
    this.size = t;
  }
}
export const r = $$a0;