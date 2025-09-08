import { jsx, jsxs } from "react/jsx-runtime";
import { CheckboxPrimitive } from "../905/549791";
import a from "classnames";
import { Ib } from "../905/129884";
var s = a;
export let $$l0 = "toolbelt_toggle_id";
export function $$d1(e) {
  let {
    checked,
    onClick,
    icon,
    recordingKey,
    disabled,
    "aria-label": u,
    tooltipShortcut,
    tooltipText
  } = e;
  return jsx("div", {
    className: "toolbelt_toggle--container--GCPUG",
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": tooltipText,
    "data-tooltip-shortcut": tooltipShortcut,
    "data-tooltip-show-above": !0,
    children: jsxs("span", {
      "data-active": checked,
      className: s()("toolbelt_toggle--toggleBg--JkI-g", {
        "toolbelt_toggle--disabled--c3mYt": disabled
      }),
      id: $$l0,
      children: [jsx("span", {
        className: "toolbelt_toggle--hiddenCheckbox--aPpTc",
        children: jsx(CheckboxPrimitive, {
          "aria-label": u,
          checked,
          onChange: onClick,
          recordingKey,
          disabled
        })
      }), jsx("div", {
        className: "toolbelt_toggle--knob--naRk5",
        "aria-hidden": !0,
        children: icon
      })]
    })
  });
}
export const L = $$l0;
export const k = $$d1;