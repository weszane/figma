import { jsx } from "react/jsx-runtime";
import { Yv } from "../figma_app/616107";
import { Z9 } from "../figma_app/634656";
import { Cn } from "../figma_app/153399";
var o = (e => (e[e.DEFAULT = 0] = "DEFAULT", e[e.AFTER_TOP_ROW = 1] = "AFTER_TOP_ROW", e))(o || {});
export function $$l0({
  customOption: e,
  paletteType: t,
  numOptions: i,
  numColumns: o
}) {
  let l = Z9().type === Yv.DEFAULT;
  let d = "base" === t || "pencilUI3" === t;
  let c = Cn(t);
  return d ? c ? 1 == (l ? 0 : 1) ? jsx("div", {
    "data-testid": "custom-option-after-top-row",
    className: "palette_additional_options--paletteGridPosition__afterTopRow--p0x5-",
    children: e
  }) : jsx("div", {
    "data-testid": "custom-option-after-bottom-row",
    className: i % o == 0 ? "palette_additional_options--paletteGridPosition__afterBottomRow__completeGrid--Os5NU" : "palette_additional_options--paletteGridPosition__afterBottomRow__incompleteGrid--dKez9",
    children: e
  }) : jsx("div", {
    "data-testid": "custom-option-after-single-row",
    className: "palette_additional_options--paletteGridPosition__afterSingleRow--jTD31",
    children: e
  }) : null;
}
export const R = $$l0;