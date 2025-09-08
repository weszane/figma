import { clamp, nearlyEqual } from "../figma_app/492908";
export class $$r0 {
  defaultSelection(e) {
    return this.getSelection(e, {
      r: !0,
      g: !0,
      b: !0
    });
  }
  getNudgeAmount(e) {
    return e ? 10 : 1;
  }
  incrementBy(e, t, i) {
    let n = {
      ...e
    };
    let r = this.normalize(t);
    let a = t / 100;
    i && (i.r && (n.r += r), i.g && (n.g += r), i.b && (n.b += r), i.a && (n.a += a));
    return n;
  }
  clamp(e) {
    let t = {
      ...e
    };
    for (let i in e) t[i] = clamp(e[i], 0, 1);
    return t;
  }
  isEqual(e, t) {
    return nearlyEqual(e.r, t.r) && nearlyEqual(e.g, t.g) && nearlyEqual(e.b, t.b) && nearlyEqual(e.a, t.a);
  }
  normalize(e) {
    return e / 255;
  }
  normalize255(e) {
    return Math.round(255 * e);
  }
}
export const A = $$r0;