import { SeverityError } from "../905/16438";
import { Mi } from "../905/609505";
export class $$a0 {
  origin;
  size;
  constructor(e = new Mi(), t = new Mi()) {
    this.origin = e;
    this.size = t;
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
    return new Mi(this.right(), this.bottom());
  }
  bottomLeft() {
    return new Mi(this.left(), this.bottom());
  }
  topLeft() {
    return new Mi(this.left(), this.top());
  }
  topRight() {
    return new Mi(this.right(), this.top());
  }
  topCenter() {
    return new Mi(this.center().x, this.top());
  }
  bottomCenter() {
    return new Mi(this.center().x, this.bottom());
  }
  centerLeft() {
    return new Mi(this.left(), this.center().y);
  }
  centerRight() {
    return new Mi(this.right(), this.center().y);
  }
  center() {
    return new Mi(this.origin.x + this.size.x / 2, this.origin.y + this.size.y / 2);
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
    let t = Mi.min(this.origin, e.origin);
    let i = Mi.max(this.bottomRight(), e.bottomRight());
    return t.equals(i) ? this : new $$a0(t, i.minus(t));
  }
  containsIncludingBoundary(e) {
    return !this.isEmpty() && !e.isInvalid() && this.left() <= e.left() && this.right() >= e.right() && this.top() <= e.top() && this.bottom() >= e.bottom();
  }
  containsPointIncludingBoundary(e) {
    return !this.isEmpty() && this.left() <= e.x && e.x <= this.right() && this.origin.y <= e.y && e.y <= this.bottom();
  }
  intersectWith(e) {
    if (this.isInvalid() || e.isInvalid()) return $$a0.invalidRect();
    let t = Mi.max(this.origin, e.origin);
    let i = new $$a0(t, Mi.min(this.bottomRight(), e.bottomRight()).minus(t));
    if (i.origin.hasNaN() || i.size.hasNaN()) throw new SeverityError("Rect.intersectWith produced a result with NaN");
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
    return new $$a0(new Mi(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), new Mi(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY));
  }
  static infinite() {
    return new $$a0(Mi.infinity().multiplyBy(-1), Mi.infinity());
  }
  static fromOriginAndSize(e, t, i, n) {
    return new $$a0(new Mi(e, t), new Mi(i, n));
  }
  static fromCenterSize(e, t) {
    let i = t.divideBy(2);
    return new $$a0(e.minus(i), t);
  }
  static computeBounds(e, t) {
    let i = Mi.min(e, t);
    return new $$a0(i, Mi.max(e, t).minus(i));
  }
  static computeBoundsFromPointArray(e) {
    let t = Mi.infinity();
    let i = Mi.infinity().multiplyBy(-1);
    for (let n of e) {
      t = Mi.min(t, n);
      i = Mi.max(i, n);
    }
    return new $$a0(t, i.minus(t));
  }
}
export const r = $$a0;