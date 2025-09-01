import { qE, xN } from "../figma_app/492908";
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
    for (let i in e) t[i] = qE(e[i], 0, 1);
    return t;
  }
  isEqual(e, t) {
    return xN(e.r, t.r) && xN(e.g, t.g) && xN(e.b, t.b) && xN(e.a, t.a);
  }
  normalize(e) {
    return e / 255;
  }
  normalize255(e) {
    return Math.round(255 * e);
  }
}
export const A = $$r0;