import { jsx } from "react/jsx-runtime";
import s from "classnames";
import { KeyCodes, isModifierMatch, ModifierKeyCodes } from "../905/63728";
import { RecordableButton } from "../905/511649";
import { dG } from "../figma_app/753501";
import { f7 } from "../figma_app/896988";
import { isInvalidValue } from "../905/216495";
import { KindEnum } from "../905/129884";
var i = s;
function u(e) {
  e.keyCode === KeyCodes.TAB && isModifierMatch(e, ModifierKeyCodes.SHIFT) || e.keyCode === KeyCodes.ENTER || e.keyCode === KeyCodes.SPACE || f7(e);
}
export function $$m0(e) {
  return jsx(p, {
    ...e,
    role: "button"
  });
}
function p({
  on: e,
  onChange: t,
  disabled: a,
  dataOnboardingKey: s,
  tooltipText: r,
  tooltipMaxWidth: d = 400,
  toggleClassName: m,
  innerClassNameOverride: p,
  nubClassNameOverride: g,
  recordingKey: h,
  forwardEventsToFullscreen: x,
  "aria-labelledby": b,
  "aria-describedby": v,
  stopPropagationOnClick: f = !1,
  stopPropagationOnKeyDown: j,
  buttonRef: y,
  role: w,
  dataTestId: k
}) {
  let E = () => !!isInvalidValue(e) || !e;
  let C = isInvalidValue(e) ? "mixed" : e;
  return jsx(RecordableButton, {
    "aria-checked": "switch" === w ? C : void 0,
    "aria-describedby": v,
    "aria-labelledby": b,
    "aria-pressed": "button" === w ? C : void 0,
    className: i()("toggle--toggleContainer--vS2j5", m),
    "data-onboarding-key": s,
    "data-testid": k,
    "data-tooltip": r,
    "data-tooltip-max-width": d,
    "data-tooltip-timeout-delay": 50,
    "data-tooltip-type": KindEnum.TEXT,
    disabled: a,
    forwardedRef: y,
    onClick: e => {
      f && e.stopPropagation();
      a || t(E(), e);
    },
    onKeyDown: x ? u : j ? e => e.stopPropagation() : void 0,
    onMouseDown: dG,
    recordingKey: h,
    role: w,
    type: "button",
    children: isInvalidValue(e) ? jsx("div", {
      className: "toggle--toggleMixed--8rhV- toggle--_toggleState--AqpC3",
      children: jsx("div", {
        className: "toggle--toggleMixedBar--n0xuj"
      })
    }) : jsx("div", {
      "data-testid": `${k}-inner`,
      className: p || (e ? "toggle--toggleOn--RbOD7 toggle--_toggleState--AqpC3" : "toggle--toggleOff--ODXMc toggle--_toggleState--AqpC3"),
      children: jsx("div", {
        className: g || "toggle--toggleNub--lqxkE"
      })
    })
  });
}
export const l = $$m0;