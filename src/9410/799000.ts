import { jsx } from "react/jsx-runtime";
import { x } from "../905/587214";
import { Me } from "../figma_app/617427";
import { getI18nString } from "../905/303541";
import { rE } from "../figma_app/186343";
import { Ib } from "../905/129884";
export function $$d1({
  onClick: e,
  recordingKey: t,
  tooltipText: i
}) {
  return jsx(Me, {
    recordingKey: t,
    "aria-label": i,
    onClick: e,
    trackingProperties: {
      text: "Add new page"
    },
    htmlAttributes: {
      "data-testid": "new-page-button",
      "data-tooltip": i,
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip-show-above": !0
    },
    children: jsx(x, {})
  });
}
export function $$c0({
  recordingKey: e
}) {
  let t = rE();
  return jsx($$d1, {
    onClick: () => t(null),
    recordingKey: e,
    tooltipText: getI18nString("fullscreen.pages_panel.add_new_page")
  });
}
export const e = $$c0;
export const i = $$d1;