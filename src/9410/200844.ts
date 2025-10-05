import { jsx } from "react/jsx-runtime";
import { memo, forwardRef } from "react";
import { DialogTriggerButton } from "../905/976845";
import { withTrackedClick } from "../figma_app/831799";
import { KindEnum } from "../905/129884";
let l = memo(forwardRef(function ({
  tooltip: e,
  isActive: t,
  onClick: i,
  recordingKey: n,
  dataElementTarget: s,
  onboardingKey: l,
  disabled: d,
  dataTestId: c,
  children: u
}, p) {
  return jsx(DialogTriggerButton, {
    ref: p,
    "aria-expanded": t,
    htmlAttributes: {
      "data-tooltip-type": e.type,
      "data-testid": c,
      "data-tooltip": e.type === KindEnum.TEXT ? e.text : e.key,
      "data-element-target": s,
      "data-fullscreen-intercept": !0,
      "data-onboarding-key": l
    },
    onClick: i,
    recordingKey: n,
    "aria-label": e.type === KindEnum.TEXT ? e.text : e.ariaLabel,
    disabled: d,
    children: u
  });
}));
let $$d0 = withTrackedClick(l);
export const Z = $$d0;