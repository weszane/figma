import { jsx } from "react/jsx-runtime";
import { K } from "../905/443068";
import { F } from "../905/427107";
import { getI18nString } from "../905/303541";
import { dG } from "../figma_app/753501";
import { zk } from "../figma_app/198712";
import { Ib } from "../905/129884";
import { H } from "../905/777871";
import { oV, Zb } from "../905/706046";
export function $$p0({
  gradientPaint: e,
  onChange: t
}) {
  return jsx(K, {
    actionOnPointerDown: !0,
    onClick: () => {
      if (!e) return;
      let i = e.stops.slice();
      for (let e of i.values()) e.position = H(1 - e.position);
      let n = e.stopsVar.slice();
      for (let e of n.values()) e.position = H(1 - e.position);
      oV(i);
      Zb(n);
      t({
        ...e,
        stops: i,
        stopsVar: n
      }, zk.YES);
    },
    disabled: e.stops.length < 2,
    "aria-label": getI18nString("fullscreen.properties_panel.flip_gradient"),
    htmlAttributes: {
      onMouseDown: dG,
      "data-tooltip": getI18nString("fullscreen.properties_panel.flip_gradient"),
      "data-tooltip-type": Ib.TEXT
    },
    children: jsx(F, {})
  });
}
export const n = $$p0;