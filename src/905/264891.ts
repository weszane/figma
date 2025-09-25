import { jsx } from "react/jsx-runtime";
import { IconButton } from "../905/443068";
import { F } from "../905/427107";
import { getI18nString } from "../905/303541";
import { stopPropagation } from "../figma_app/753501";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { KindEnum } from "../905/129884";
import { H } from "../905/777871";
import { sortByPosition, sortByPositionWithDefault } from "../905/706046";
export function $$p0({
  gradientPaint: e,
  onChange: t
}) {
  return jsx(IconButton, {
    actionOnPointerDown: !0,
    onClick: () => {
      if (!e) return;
      let i = e.stops.slice();
      for (let e of i.values()) e.position = H(1 - e.position);
      let n = e.stopsVar.slice();
      for (let e of n.values()) e.position = H(1 - e.position);
      sortByPosition(i);
      sortByPositionWithDefault(n);
      t({
        ...e,
        stops: i,
        stopsVar: n
      }, yesNoTrackingEnum.YES);
    },
    disabled: e.stops.length < 2,
    "aria-label": getI18nString("fullscreen.properties_panel.flip_gradient"),
    htmlAttributes: {
      onMouseDown: stopPropagation,
      "data-tooltip": getI18nString("fullscreen.properties_panel.flip_gradient"),
      "data-tooltip-type": KindEnum.TEXT
    },
    children: jsx(F, {})
  });
}
export const n = $$p0;