import { jsx } from "react/jsx-runtime";
import { Point } from "../905/736624";
import { getViewportRectWithRuler } from "../figma_app/62612";
import { M, W } from "../905/306196";
export function $$o0(e) {
  let t = getViewportRectWithRuler();
  let r = Point.scale(-1, t);
  return jsx("div", {
    className: M,
    style: {
      top: t.y,
      left: t.x,
      height: t.height,
      width: t.width
    },
    onScroll: e.forceNoScroll ? e => {
      e.currentTarget.scrollLeft = 0;
      e.currentTarget.scrollTop = 0;
    } : void 0,
    children: jsx("div", {
      className: W,
      style: {
        top: r.y,
        left: r.x
      },
      children: e.children
    })
  });
}
export const p = $$o0;