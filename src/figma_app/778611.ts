import { jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { E } from "../905/632989";
import { e as _$$e } from "../905/149844";
import o from "classnames";
import { sg } from "../figma_app/48566";
import { Ib } from "../905/129884";
var l = o;
export function $$u0(e) {
  let t = useContext(sg);
  let r = e.disabled || t;
  return jsx(E, {
    className: "insert_plus_button--insertPlusButton--P06jB",
    onClick: e.onClick,
    recordingKey: e.recordingKey,
    htmlAttributes: {
      "data-onboarding-key": e.onboardingKey,
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": e.tooltipText,
      "data-tooltip-shortcut": e.tooltipShortcut,
      "data-tooltip-show-above": !0,
      id: e.elementId
    },
    disabled: r,
    "aria-label": e.tooltipText,
    "aria-disabled": r,
    "aria-hidden": r,
    "data-testid": "insert-plus-button",
    children: jsx("div", {
      className: l()("insert_plus_button--circle--ZCCJ0", {
        "insert_plus_button--active--wKXnM": e.isActive,
        "insert_plus_button--disabled--nRlAx": r
      }),
      children: jsx(_$$e, {})
    })
  });
}
export const y = $$u0;