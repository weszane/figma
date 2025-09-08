import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import a from "classnames";
import { UK } from "../figma_app/740163";
import { T } from "../figma_app/590592";
import { getObservableOrFallback } from "../figma_app/84367";
import { Ye } from "../figma_app/32128";
var s = a;
export let $$u0 = forwardRef(({
  shouldAnimate: e = !0,
  ignoreRulers: t,
  leftOffset: i = 0,
  floatingWhenExpanded: n,
  children: a
}, u) => {
  let p = getObservableOrFallback(UK().renderRulers);
  let h = Ye();
  let m = T();
  return jsx("div", {
    ref: u,
    className: s()("left_panel_positioner--leftPanelPositioner--8Yehe", {
      "left_panel_positioner--withShowingRulers--xB1lD": p && !t,
      "left_panel_positioner--withAnimation--pFRuR": e && !m,
      "left_panel_positioner--withInsetEditorEnabled--GYcUX": !h && !n
    }),
    style: i ? {
      left: i
    } : void 0,
    children: a
  });
});
export const Q = $$u0;