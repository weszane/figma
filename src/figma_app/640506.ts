import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { $ } from "../905/455748";
export function $$s0(e) {
  let {
    isThick,
    placeholderToolType,
    children
  } = e;
  let o = $(isThick);
  let l = $(placeholderToolType);
  let d = o && !l;
  let c = useMemo(() => d ? isThick ? "drawing_tool_icon_thickness_wrapper--animateGrow--4DuD1" : "drawing_tool_icon_thickness_wrapper--animateShrink--iKi4D" : isThick ? "drawing_tool_icon_thickness_wrapper--thick--XZRM2" : "drawing_tool_icon_thickness_wrapper--thin--TuRRE", [isThick, d]);
  return jsx("div", {
    className: c,
    children
  });
}
export const R = $$s0;