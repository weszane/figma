import { jsx } from "react/jsx-runtime";
import { E } from "../905/632989";
import { getI18nString } from "../905/303541";
import { fullscreenValue } from "../figma_app/455680";
import { Ib } from "../905/129884";
export function $$s0({
  label: t,
  children: e
}) {
  let o = getI18nString("fullscreen_actions.expand-ui");
  return jsx(E, {
    className: "toggle_expanded_sidebar_button--button--brZmz",
    onClick: () => fullscreenValue.triggerAction("toggle-sidebar", {
      source: "left_panel"
    }),
    "aria-label": t ?? o,
    recordingKey: "left-panel-island.toggle-minimize-ui",
    htmlAttributes: {
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": o,
      "data-tooltip-shortcut-key": "toggle-sidebar"
    },
    children: e
  });
}
export const O = $$s0;