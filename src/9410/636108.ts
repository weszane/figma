import { HD } from "../figma_app/191804";
import { lH, Dk } from "../figma_app/18582";
import { X6, oR, gU, Jv } from "../figma_app/234690";
export function $$s0(e) {
  let t = X6(e);
  if (t) return HD(t) ? lH.DARK : lH.LIGHT;
}
export function $$o1(e, t, i) {
  e && function e(t, i, r) {
    let s = t.fills.some(e => "IMAGE" === e.type);
    let o = !s && r.modeChanged;
    if (oR({
      node: t,
      getNewColor: i,
      options: {
        ...r,
        modeChanged: o,
        role: Dk(t)
      }
    }), t.childrenNodes) {
      let n = gU(t.fills, s ? void 0 : r.parentFillColor);
      t.childrenNodes.forEach(t => {
        e(t, i, {
          ...r,
          modeChanged: o,
          parentFillColor: n
        });
      });
    }
  }(e, (e, t) => Jv(e, {
    ...t,
    brandColor: void 0
  }), {
    mode: t,
    modeChanged: !0,
    currentBrandHex: i
  });
}
export const P = $$s0;
export const t = $$o1;