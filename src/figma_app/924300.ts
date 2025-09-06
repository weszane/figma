import { jsxs, jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { b, bL } from "../figma_app/860955";
import { K } from "../905/443068";
import { J } from "../905/125993";
import { Pt } from "../figma_app/806412";
import { getI18nString } from "../905/303541";
import { Ib } from "../905/129884";
import { I } from "../figma_app/94664";
import { l as _$$l } from "../figma_app/856638";
export function $$_0(e) {
  let t = useRef(null);
  I(t);
  let {
    getTriggerProps,
    manager
  } = b();
  return jsxs(bL, {
    manager,
    children: [jsx(K, {
      recordingKey: Pt(e, "toggleOverflowMenu"),
      "aria-label": getI18nString("fullscreen.properties_panel.tooltip_moreActions"),
      htmlAttributes: {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": getI18nString("fullscreen.properties_panel.tooltip_moreActions"),
        "data-testid": "selection-actions-overflow-menu-button"
      },
      ...getTriggerProps(),
      children: jsx("div", {
        ref: t,
        children: jsx(J, {})
      })
    }), jsx(_$$l, {
      enabledToolbarItems: e.enabledToolbarItems
    })]
  });
}
export const S = $$_0;