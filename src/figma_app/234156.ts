import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { bL, c$ } from "../905/575478";
import { q } from "../905/932270";
import o from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { ZC } from "../figma_app/39751";
import { Pt } from "../figma_app/806412";
import { t } from "../905/303541";
import { Pyi, vE6 } from "../figma_app/27776";
var l = o;
let h = parsePxNumber(Pyi);
let m = parsePxNumber(vE6);
export function $$g0(e) {
  let {
    modes,
    activeMode,
    onModeSwitch,
    onboardingKey,
    recordingKey
  } = e;
  let _ = ZC(activeMode) ?? activeMode;
  let g = useCallback((e) => modes.findIndex((t) => t.mode === e), [modes]);
  let E = g(activeMode);
  let y = Math.abs(E - g(_));
  let b = (e) => e === activeMode;
  return jsx("div", {
    className: "toolbelt_mode_segmented_control--container--E5mSs",
    children: jsxs(bL, {
      className: "toolbelt_mode_segmented_control--fieldset--qPptC",
      "data-active-mode": activeMode,
      value: activeMode,
      onChange: onModeSwitch,
      legend: jsx(q, {
        children: t("fullscreen.toolbar.toolbelt_mode_segmented_control.toolbelt_mode")
      }),
      htmlAttributes: {
        "data-testid": "toolbelt-mode-segmented-control",
        "data-onboarding-key": onboardingKey
      },
      recordingKey: Pt(recordingKey, "toolbeltModeSegmentedControl"),
      children: [jsx("div", {
        className: "toolbelt_mode_segmented_control--selectedOption--UKFE-",
        "aria-hidden": !0,
        style: {
          transform: `translateX(${E * (h + m)}px)`,
          transition: `${.1 * y}s`
        }
      }), modes.map((e) => jsx(f, {
        modeItem: e,
        isSelected: b(e.mode)
      }, e.mode))]
    })
  });
}
function f(e) {
  let {
    modeItem,
    isSelected
  } = e;
  return jsx(c$, {
    "data-testid": `toolbelt-mode-option-${modeItem.mode}`,
    className: l()("toolbelt_mode_segmented_control--option--y3K4j", {
      "toolbelt_mode_segmented_control--selected--OuKU6": isSelected,
      "toolbelt_mode_segmented_control--disabled--Ylt9f": modeItem.disabled
    }),
    value: modeItem.mode,
    "aria-label": modeItem.label,
    htmlAttributes: {
      "data-tooltip-show-above": !0,
      "data-tooltip-shortcut": modeItem.tooltipShortcut,
      "data-onboarding-key": modeItem.onboardingKey,
      disabled: modeItem.disabled
    },
    children: jsx("span", {
      "aria-hidden": !0,
      children: modeItem.icon
    })
  }, modeItem.mode);
}
export const a = $$g0;