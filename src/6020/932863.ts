import { jsx } from "react/jsx-runtime";
import { C } from "../905/771975";
import { J } from "../1577/181415";
import { getI18nString } from "../905/303541";
import { Y5 } from "../figma_app/455680";
import { q } from "../figma_app/590592";
import { Ib } from "../905/129884";
import { ue } from "../figma_app/433401";
export function $$c0() {
  let t = q() ? getI18nString("fullscreen_actions.expand-ui") : getI18nString("fullscreen_actions.minimize-ui");
  return jsx(J, {
    "aria-label": t,
    onClick: () => Y5.triggerAction("toggle-sidebar", {
      source: "left_panel"
    }),
    recordingKey: "left-panel-island.toggle-minimize-ui",
    htmlAttributes: {
      "data-onboarding-key": ue,
      "data-tooltip": t,
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip-shortcut-key": "toggle-sidebar"
    },
    children: jsx(C, {})
  });
}
export function $$u1() {
  return jsx("div", {
    className: "toggle_sidebars_icon_button--nonInteractiveContainer--OPLHV",
    children: jsx(C, {})
  });
}
export const n = $$c0;
export const A = $$u1;