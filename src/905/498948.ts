import { Vzr } from "../figma_app/763686";
import { r1 } from "../figma_app/571341";
export function $$a0(e, t, i, a, s, o) {
  let l = s || r1;
  if (!Vzr) return null;
  let [d, c] = Vzr.generateThumbnailForNode(e, 0, 0, l, {
    scale: l,
    type: "UNCOMPRESSED",
    clearColor: a ? void 0 : "rgba(0, 0, 0, 0.06)",
    renderDefaultStateForSubscribedStateGroups: !0,
    documentIndex: t,
    inDetachedComponentsScene: i,
    inLinterScene: a,
    clipRect: o
  });
  return d ? {
    image: c,
    width: d?.width,
    height: d?.height,
    canvasSpaceBounds: d?.canvasSpaceBounds
  } : null;
}
export const L6 = $$a0;