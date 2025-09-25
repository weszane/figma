import { jsx } from "react/jsx-runtime";
import { useMemo, useContext } from "react";
import { getFeatureFlags } from "../905/601108";
import { parsePxNumber } from "../figma_app/783094";
import { WAFImage } from "../905/675859";
import { colorCSSManipulatorInstance } from "../905/989956";
import { getVisibleTheme } from "../905/640017";
import { getAssetBackgroundColor } from "../figma_app/80990";
import { V as _$$V } from "../figma_app/473391";
import { ThemeContext, getThemeBorderStyle } from "../905/187165";
import { KindEnum } from "../905/129884";
import { M } from "../905/771870";
import { L } from "../905/332753";
import { g_, j3 } from "../figma_app/540964";
let f = "asset_panel_preview--previewThumbnail--kSmwd";
let A = parsePxNumber(g_);
export function $$y0({
  height: e,
  width: t,
  keyPrefix: i,
  previewAssetOrUrl: s,
  customThumbnailData: y,
  type: b = "normal",
  pageInfo: v
}) {
  let I = useMemo(() => "string" == typeof s ? void 0 : s.name.split("/").pop(), [s]);
  let E = "no-padding" === b ? 0 : "compact" === b ? 4 : A;
  let x = useMemo(() => "string" == typeof s ? null : getAssetBackgroundColor(s, null), [s]);
  let S = useMemo(() => x ? colorCSSManipulatorInstance.format(x) : void 0, [x]);
  let w = useContext(ThemeContext);
  let C = getVisibleTheme();
  let T = useMemo(() => !!x && !!getThemeBorderStyle(w, x, C), [w, x, C]);
  let k = "string" == typeof s ? jsx(WAFImage, {
    src: s,
    className: "asset_panel_preview--img--bo9vu",
    style: y?.style
  }) : jsx(M, {
    className: f,
    item: s,
    shouldGenerateLocalThumbnail: !0,
    draggable: !1
  }, `${i}:${_$$V(s)}`);
  return jsx("div", {
    className: "asset_panel_preview--previewThumbnailWrapper--g6zU5",
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": I,
    style: {
      height: e - 2 * E,
      width: t - 2 * E,
      backgroundColor: y?.backgroundToken ?? S,
      boxShadow: T ? j3 : void 0,
      padding: E
    },
    children: getFeatureFlags().dse_library_pg_thumbnails && v ? jsx(L, {
      pageId: v.pageId,
      className: f,
      fallback: k
    }) : k
  });
}
export const V = $$y0;