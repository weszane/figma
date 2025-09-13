import { jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { throwTypeError } from "../figma_app/465776";
import { ButtonPrimitive } from "../905/632989";
import o from "classnames";
import { sg } from "../figma_app/48566";
import { KindEnum } from "../905/129884";
var l = o;
var $$u2 = (e => (e[e.Toggle = 0] = "Toggle", e[e.DialogTrigger = 1] = "DialogTrigger", e))($$u2 || {});
var $$p1 = (e => (e[e.PurpleActive = 0] = "PurpleActive", e[e.RainbowActive = 1] = "RainbowActive", e))($$p1 || {});
export function $$_0(e) {
  let t;
  let {
    children,
    buttonType,
    isActive,
    isExpanded,
    activeStyle = 0,
    onClick,
    onboardingKey,
    tooltipText,
    recordingKey,
    tooltipShortcut,
    showTooltipWhenDisabled,
    elementId
  } = e;
  let T = useContext(sg);
  let I = e.disabled || T;
  let S = !I && isActive;
  switch (buttonType) {
    case 0:
      t = {
        "aria-pressed": isActive
      };
      break;
    case 1:
      t = {
        "aria-expanded": isExpanded ?? isActive,
        "aria-haspopup": "dialog"
      };
      break;
    default:
      throwTypeError(buttonType);
  }
  return jsx(ButtonPrimitive, {
    "aria-disabled": I,
    "aria-hidden": I,
    "aria-label": tooltipText,
    ...t,
    className: l()("whiteboard_secondary_toolbelt_button--whiteboardSecondaryToolbeltButton--aO6ES", {
      "whiteboard_secondary_toolbelt_button--whiteboardSecondaryToolbeltButtonPurpleActive--zPNIP": S && 0 === activeStyle,
      "whiteboard_secondary_toolbelt_button--whiteboardSecondaryToolbeltButtonRainbowActive--0udUh": S && 1 === activeStyle,
      "whiteboard_secondary_toolbelt_button--whiteboardSecondaryToolbeltButtonDisabled--5gz75": I
    }),
    disabled: I,
    htmlAttributes: {
      "data-onboarding-key": onboardingKey,
      "data-testid": e["data-testid"],
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": !I || showTooltipWhenDisabled ? tooltipText : void 0,
      "data-tooltip-shortcut": tooltipShortcut,
      "data-tooltip-show-above": !0,
      id: elementId
    },
    onClick,
    recordingKey,
    children
  });
}
export const vm = $$_0;
export const gy = $$p1;
export const Vz = $$u2;