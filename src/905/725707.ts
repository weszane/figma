import { jsx, jsxs } from "react/jsx-runtime";
import { wA } from "../vendor/514228";
import { N } from "../905/720559";
import { xk } from "@stylexjs/stylex";
import { t as _$$t } from "../905/303541";
import { Q } from "../figma_app/104130";
import { Ib } from "../905/129884";
import { w2 } from "../figma_app/178475";
import { fI, JU } from "../figma_app/626177";
import { WC } from "../figma_app/973219";
let m = {
  input: {
    gridColumnStart: "x8dqhcf",
    gridColumnEnd: "x1dr843i",
    $$css: !0
  }
};
export function $$h0(e) {
  let t = wA();
  return jsx(Q.Consumer, {
    children: i => i.useLargePreviewRows ? jsx("div", {
      className: "x1aawmmo xdyg6lv xzi3mdb x18d9i69",
      children: jsxs(fI, {
        children: [jsx(JU, {
          className: "x1xdureb x1447hjg",
          children: _$$t("fullscreen.scrubbable.opacity")
        }), jsx(w2, {
          ...xk(m.input, e.positionOverride),
          inputClassName: WC,
          "data-tooltip": _$$t("fullscreen.scrubbable.opacity"),
          "data-tooltip-type": Ib.TEXT,
          dispatch: t,
          onValueChange: (t, i) => e.onChange({
            ...e.paint,
            opacity: t
          }, i),
          value: e.paint.opacity,
          tooltipForScreenReadersOnly: !0,
          children: jsx(N, {
            className: "x47corl x52n8ys x3xsitq xmauxvm"
          })
        })]
      })
    }) : null
  });
}
export const p = $$h0;