import { jsx } from "react/jsx-runtime";
import { memo } from "react";
import a from "classnames";
import { ZC } from "../figma_app/39751";
var s = a;
export let $$l0 = memo(function ({
  loadingPaletteCircleCount: e
}) {
  let t = ZC(e);
  let r = t && !e;
  let i = r ? t : e;
  return jsx("div", {
    className: s()("dlt_submenu_palette_skeleton--skeletonCircleContainer--zJP5v", {
      "dlt_submenu_palette_skeleton--isFadingOut--X7mcE": r
    }),
    children: [...Array(i)].map((e, t) => jsx("div", {
      className: "dlt_submenu_palette_skeleton--skeletonCircleWrapper--jqySu",
      children: jsx("div", {
        className: s()("dlt_submenu_palette_skeleton--skeletonCircle--S16JP", {
          "dlt_submenu_palette_skeleton--loading--NXGYD": !r
        }),
        style: {
          animationDelay: `${.1 * t}s`
        }
      })
    }, "skeleton-palette-" + t))
  });
});
export const V = $$l0;