import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { K } from "../905/443068";
import { h } from "../905/994594";
import { getI18nString } from "../905/303541";
import { KindEnum } from "../905/129884";
import { H1, VK } from "../9410/499229";
export function $$c0({
  onClick: e
}) {
  let t = H1();
  let i = VK();
  let c = useCallback(i => {
    t(i);
    e(i);
  }, [e, t]);
  return jsx(K, {
    ref: i,
    onClick: c,
    recordingKey: "canvas_search.search_icon_button",
    "aria-label": getI18nString("fullscreen_actions.find"),
    htmlAttributes: {
      id: "canvas-search-icon-button",
      "data-onboarding-key": "canvas-search",
      "data-tooltip": "canvas-search",
      "data-tooltip-type": KindEnum.LOOKUP
    },
    children: jsx(h, {})
  });
}
export const _ = $$c0;