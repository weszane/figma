import { AffineTransform } from "../905/583953";
import { Vector2D } from "../905/512402";
import { getRadialGradientPoints } from "../905/409381";
import { toMatrix2x3 } from "../905/117560";
import { Point } from "../905/736624";
import { EG } from "../905/721592";
function d(e) {
  return e.map(e => e.value).join(", ");
}
export class $$c1 {
  constructor(e, t) {
    this.color = e;
    this.position = t;
  }
  get value() {
    return `${this.color.value} ${EG(this.position, 2)}`;
  }
  equals(e) {
    return this.value === e.value;
  }
}
class u {
  constructor(e, t) {
    this.color = e;
    this.position = t;
  }
  get value() {
    return `${this.color.value} ${360 * this.position}deg`;
  }
  equals(e) {
    return this.value === e.value;
  }
}
class p {
  constructor(e, t) {
    this.color = e;
    this.position = t;
  }
  get value() {
    return `${this.color.value} ${EG(this.position / 2)}`;
  }
  equals(e) {
    return this.value === e.value;
  }
}
export class $$m2 {
  static fromColor(e, t = !1) {
    return new $$m2([new $$c1(e, 0), new $$c1(e, 1)], 0, t);
  }
  static fromGradientPaint({
    gradientTransform: e,
    gradientStops: t
  }, i) {
    if (1 === t.length) return $$m2.fromColor(i.parseSingleStop(t[0]));
    let a = {
      topLeft: {
        x: 0,
        y: 0
      },
      topRight: {
        x: 1,
        y: 0
      },
      bottomLeft: {
        x: 0,
        y: 1
      },
      bottomRight: {
        x: 1,
        y: 1
      }
    };
    let s = AffineTransform.fromNumbers(e[0][0], e[0][1], e[0][2], e[1][0], e[1][1], e[1][2]);
    s.invert();
    let l = e => {
      let t = Point.interpolate({
        x: 0,
        y: .5
      }, {
        x: 1,
        y: .5
      }, e);
      let i = s.transformPoint(new Vector2D(t.x, t.y));
      return {
        x: i.x,
        y: i.y
      };
    };
    let d = t.map(e => ({
      color: e.color,
      location: l(e.position),
      boundVariables: e.boundVariables
    }));
    0 > s.determinant() && s.scale(1, -1);
    let u = new Point(s.axisY().x, s.axisY().y);
    let p = u.scale(-1).rotate90().unit();
    let h = Math.PI / 2;
    let g = {
      x: 0,
      y: 0
    };
    let f = {
      x: 0,
      y: 0
    };
    let _ = u.scale(-1).toAngle();
    _ > 0 && _ < h ? (g = a.topRight, f = a.bottomLeft) : _ >= h ? (g = a.bottomRight, f = a.topLeft) : _ <= 0 && _ > -h ? (g = a.topLeft, f = a.bottomRight) : _ <= -h && (g = a.bottomLeft, f = a.topRight);
    let A = (e, t, i) => {
      let n = Point.subtract(t, e);
      return Point.dot(Point.subtract(i, e), n) / Point.dot(n, n);
    };
    let y = (e, t, i) => Point.interpolate(e, t, A(e, t, i));
    let b = y(new Point(), p, g);
    let v = y(new Point(), p, f);
    let I = Point.size(Point.subtract(v, b));
    return new $$m2(d.map(e => {
      let t = Point.dot(Point.subtract(e.location, b), p) / I;
      return new $$c1(i.parseSingleStop(e), t);
    }), 180 / Math.PI * (_ + Math.PI));
  }
  constructor(e, t, i = !1) {
    this.angle = t;
    this.colorStops = e;
    this.isFromSolid = i;
  }
  get value() {
    let e = Math.round(this.angle);
    360 === e && (e = 0);
    return `linear-gradient(${e}deg, ${d(this.colorStops)})`;
  }
  equals(e) {
    return this.value === e.value;
  }
  toNewWithColorStops(e) {
    return new $$m2(e, this.angle, this.isFromSolid);
  }
}
export class $$h0 {
  constructor(e, t) {
    let [{
      x: i,
      y: n
    }, {
      x: r,
      y: o
    }, {
      x: l,
      y: d
    }] = getRadialGradientPoints(toMatrix2x3(e.gradientTransform));
    this.centerX = i;
    this.centerY = n;
    this.width = Math.sqrt((l - i) * (l - i) + (d - n) * (d - n));
    this.height = Math.sqrt((r - i) * (r - i) + (o - n) * (o - n));
    this.colorStops = e.gradientStops.map(e => new $$c1(t.parseSingleStop(e), e.position));
  }
  get value() {
    return `radial-gradient(${EG(this.width, 2)} ${EG(this.height, 2)} at ${EG(this.centerX, 2)} ${EG(this.centerY, 2)}, ${d(this.colorStops)})`;
  }
  equals(e) {
    return this.value === e.value;
  }
}
export class $$g3 {
  constructor(e, t) {
    let [{
      x: i,
      y: n
    }, {
      x: r,
      y: o
    }] = getRadialGradientPoints(toMatrix2x3(e.gradientTransform));
    this.centerX = i;
    this.centerY = n;
    this.angle = 180 * Math.atan2(o - n, r - i) / Math.PI + 90;
    this.colorStops = e.gradientStops.map(e => new u(t.parseSingleStop(e), e.position));
  }
  get value() {
    return `conic-gradient(from ${Math.round(this.angle)}deg at ${EG(this.centerX, 2)} ${EG(this.centerY, 2)}, ${d(this.colorStops)})`;
  }
  equals(e) {
    return this.value === e.value;
  }
}
export class $$f4 {
  constructor(e, t) {
    this.colorStops = e.gradientStops.map(e => new p(t.parseSingleStop(e), e.position));
  }
  get value() {
    return ["bottom right", "bottom left", "top left", "top right"].map(e => `linear-gradient(to ${e}, ${d(this.colorStops)}) ${e} / 50% 50% no-repeat`).join(", ");
  }
  equals(e) {
    return this.value === e.value;
  }
}
export const Ey = $$h0;
export const P2 = $$c1;
export const W4 = $$m2;
export const jN = $$g3;
export const n_ = $$f4;