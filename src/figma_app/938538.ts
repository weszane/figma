import { jsx } from "react/jsx-runtime";
import { useRef, useContext, useCallback } from "react";
import { lQ } from "../905/934246";
import { E } from "../905/632989";
import { useHandleMouseEvent } from "../figma_app/878298";
import l from "classnames";
import { dG } from "../figma_app/753501";
import { Ib } from "../905/129884";
import { Yq } from "../figma_app/769863";
import { sg } from "../figma_app/48566";
var d = l;
let h = "toolbelt_button--selectedButton--buXGz";
let m = "toolbelt_button--disabledButton--OE81R";
export function $$g0(e) {
  let {
    onClick
  } = e;
  let r = useRef(null);
  let a = useContext(sg);
  let o = e.disabled || a;
  let l = useCallback(e => {
    !o && ["Space", "Enter"].includes(e.code) && (e.preventDefault(), onClick(), Yq(e));
  }, [o, onClick]);
  return jsx(E, {
    ref: r,
    "aria-disabled": o,
    "aria-hidden": o,
    "aria-label": e.tooltipText,
    "aria-pressed": e.isActive,
    className: d()("toolbelt_button--topLevelButtonNew--1waTn", {
      [m]: o,
      [h]: e.isActive,
      "toolbelt_button--topLevelButtonPrimaryPadding--pRl3d": !e.secondary,
      "toolbelt_button--topLevelButtonSecondaryPadding--L1NFJ": e.secondary
    }),
    disabled: o,
    htmlAttributes: {
      "data-onboarding-key": e.onboardingKey,
      "data-testid": e["data-testid"],
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": e.tooltipText,
      "data-tooltip-shortcut": e.tooltipShortcut,
      "data-tooltip-show-above": !0,
      onKeyDown: l
    },
    onClick,
    recordingKey: e.recordingKey,
    children: e.icon
  });
}
export function $$f1({
  tooltipText: e,
  tooltipShortcut: t,
  onMouseDown: r,
  isActive: s = !1,
  disabled: l = !1,
  simulateHover: p = !1,
  isToolGroup: _ = !1,
  actionOnPointerDown: g = !1,
  children: f,
  onboardingKey: E,
  recordingKey: y = "toolbelt-button",
  elementId: b,
  "data-testid": T
}) {
  let I = useRef(null);
  let S = d()("toolbelt_button--topLevelButtonOld--gqB3W", {
    "toolbelt_button--iconButtonInner--iHQD7": !_
  }, l ? m : {
    [h]: !_ && s,
    "toolbelt_button--hovered--njMdl": p
  });
  let v = useHandleMouseEvent(y, "mousedown", r);
  let A = g ? dG : lQ;
  return jsx("div", {
    ref: I,
    "aria-label": e,
    className: S,
    "data-fullscreen-intercept": !0,
    "data-onboarding-key": E,
    "data-testid": T,
    "data-tooltip": e,
    "data-tooltip-shortcut": t,
    "data-tooltip-show-above": !0,
    "data-tooltip-type": Ib.TEXT,
    id: b,
    onClick: A,
    onMouseDown: l ? lQ : v,
    tabIndex: 0,
    children: f
  });
}
export const C = $$g0;
export const $ = $$f1;