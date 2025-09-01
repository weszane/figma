import { H2 } from "../905/707098";
import { dN } from "../905/121113";
class a {
  constructor(e) {
    this.transform = e;
  }
  static from(e) {
    let t = new a([[0, 0, 0], [0, 0, 0]]);
    t.transform = e;
    return t;
  }
  get(e, t) {
    return this.transform[e][t];
  }
  translate(e, t) {
    return a.from([[this.get(0, 0), this.get(0, 1), this.get(0, 2) + e], [this.get(1, 0), this.get(1, 1), this.get(1, 0) + t]]);
  }
  getAngle() {
    let e = this.transform[0][0];
    return Math.atan2(this.transform[0][1], e);
  }
  getAngleDeg() {
    return this.getAngle() * (180 / Math.PI);
  }
  isFlippedVertical() {
    let [[e, t], [i, n]] = this.transform;
    return e * n - t * i < 0;
  }
  flipVertical() {
    return new a([[1, 0, 0], [0, -1, 0]]).multiply(this);
  }
  multiply(e) {
    let [[t, i, n], [r, s, o]] = this.transform;
    let [[l, d, c], [u, p, m]] = e.transform;
    return new a([[t * l + i * u, t * d + i * p, t * c + i * m + n], [r * l + s * u, r * d + s * p, r * c + s * m + o]]);
  }
  rotatePoint(e) {
    let [[t, i, n], [r, a, s]] = this.transform;
    let [o, l] = e;
    return [t * o + i * l + n, r * o + a * l + s];
  }
  skipPosition() {
    let [[e, t], [i, n]] = this.transform;
    return new a([[e, t, 0], [i, n, 0]]);
  }
  isRotated() {
    let e = this.transform[0][0];
    let t = this.transform[0][1];
    let i = this.transform[1][0];
    let n = this.transform[1][1];
    return !(e - 1 < 1e-5 && t - 0 < 1e-5 && i - 0 < 1e-5 && n - 1 < 1e-5);
  }
  static getCenteredRotation(e, t, i) {
    let n = new a([[1, 0, -t / 2], [0, 1, -i / 2]]);
    let r = new a([[1, 0, t / 2], [0, 1, i / 2]]);
    let s = e * Math.PI / 180;
    let o = new a([[Math.cos(s), Math.sin(s), 0], [-Math.sin(s), Math.cos(s), 0]]);
    return r.multiply(o.multiply(n));
  }
}
export class $$s0 {
  constructor(e, t) {
    this._cachedProperties = {};
    this._EXPENSIVE_TO_READ_node = e;
    this.nodeCache = t;
  }
  static empty() {
    return new $$s0({
      width: 0,
      height: 0,
      relativeTransform: [[0, 0, 0], [0, 0, 0]],
      layoutGrow: 0,
      layoutAlign: "MIN",
      layoutPositioning: "AUTO",
      minHeight: 0,
      minWidth: 0,
      maxHeight: 0,
      maxWidth: 0
    }, null);
  }
  readValue(e, t) {
    return H2(this._cachedProperties, e, this._EXPENSIVE_TO_READ_node, t);
  }
  get width() {
    return this.readValue("width", e => e.width);
  }
  get height() {
    return this.readValue("height", e => e.height);
  }
  get minWidth() {
    return this.readValue("minWidth", e => e.minWidth);
  }
  get maxWidth() {
    return this.readValue("maxWidth", e => e.maxWidth);
  }
  get minHeight() {
    return this.readValue("minHeight", e => e.minHeight);
  }
  get maxHeight() {
    return this.readValue("maxHeight", e => e.maxHeight);
  }
  get layoutGrow() {
    return this.readValue("layoutGrow", e => e.layoutGrow);
  }
  get layoutAlign() {
    return this.readValue("layoutAlign", e => e.layoutAlign);
  }
  get relativeTransform() {
    return this.readValue("relativeTransform", e => {
      let t = a.from(e.relativeTransform);
      if (!this.parent?._EXPENSIVE_TO_READ_node) return t;
      if (this.parent?.layout._EXPENSIVE_TO_READ_node instanceof dN) {
        let e = t.get(0, 2) - this.parent.layout.relativeBounds().bounds.x;
        let i = t.get(1, 2) - this.parent.layout.relativeBounds().bounds.y;
        return a.from([[t.get(0, 0), t.get(0, 1), e], [t.get(1, 0), t.get(1, 1), i]]);
      }
      return t;
    });
  }
  get layoutPositioning() {
    return this.readValue("layoutPositioning", e => e.layoutPositioning);
  }
  get constraints() {
    return this.readValue("constraints", e => {
      if ("constraints" in e) return e.constraints;
    });
  }
  get targetAspectRatio() {
    return this.readValue("targetAspectRatio", e => e.targetAspectRatio ?? void 0);
  }
  get parent() {
    return this.readValue("parent", e => {
      var t;
      let i = e.parent;
      if (i && !("LINE" !== (t = i.type) && "ELLIPSE" !== t && "RECTANGLE" !== t && "FRAME" !== t && "GROUP" !== t && "COMPONENT" !== t && "COMPONENT_SET" !== t && "INSTANCE" !== t && "TEXT" !== t)) return this.nodeCache?.getNode(i);
    });
  }
  absolutePosition() {
    let {
      x,
      y,
      width,
      height
    } = this.relativeBounds().bounds;
    if (!this.parent || !this.constraints) return {
      vertical: {
        type: "top",
        offset: y
      },
      horizontal: {
        type: "left",
        offset: x
      }
    };
    let {
      width: _width,
      height: _height
    } = this.parent.layout.relativeBounds().bounds;
    let s = _width - width;
    let o = _height - height;
    return {
      horizontal: x <= s / 2 || 0 === s ? {
        type: "left",
        offset: x
      } : {
        type: "right",
        offset: s - x
      },
      vertical: y <= o / 2 || 0 === o ? {
        type: "top",
        offset: y
      } : {
        type: "bottom",
        offset: o - y
      }
    };
  }
  relativeBounds() {
    let e = this.relativeTransform;
    a.getCenteredRotation(e.getAngleDeg(), this.width, this.height).isFlippedVertical() && (e = e.flipVertical());
    let t = a.from([[1, 0, -this.width / 2], [0, 1, -this.height / 2]]);
    let i = a.from([[1, 0, this.width / 2], [0, 1, this.height / 2]]).multiply(e.skipPosition().multiply(t));
    let [n, r] = i.rotatePoint([0, 0]);
    let [s, o] = i.rotatePoint([0, this.height]);
    let [l, d] = i.rotatePoint([this.width, 0]);
    let [c, u] = i.rotatePoint([this.width, this.height]);
    let p = Math.min(n, s, l, c);
    let m = Math.min(r, o, d, u);
    let h = Math.max(n, s, l, c) - p;
    let g = Math.max(r, o, d, u) - m;
    let f = a.from([[1, 0, (h - this.width) / 2], [0, 1, (g - this.height) / 2]]).multiply(i);
    let _ = f.get(0, 2);
    let A = f.get(1, 2);
    return {
      bounds: {
        x: e.get(0, 2) - _,
        y: e.get(1, 2) - A,
        width: h,
        height: g
      },
      rotation: f,
      transform: e
    };
  }
  shouldUseAbsolutePosition() {
    return "ABSOLUTE" === this.layoutPositioning;
  }
}
export const t = $$s0;