import { jsx } from "react/jsx-runtime";
import { stylex } from "@stylexjs/stylex";
export function $$r0({
  height: e
}) {
  let t = void 0 !== e ? stylex.props(i.height(e)) : {
    className: "left_panel_island_spacer--islandSpacer--5ynLJ"
  };
  return jsx("div", {
    ...t
  });
}
let i = {
  height: e => [{
    height: null == e ? null : "x1f5funs",
    minHeight: null == e ? null : "xbhpgbg",
    $$css: !0
  }, {
    "--height": (e => "number" == typeof e ? e + "px" : null != e ? e : void 0)(e),
    "--minHeight": (e => "number" == typeof e ? e + "px" : null != e ? e : void 0)(e)
  }]
};
export const n = $$r0;
