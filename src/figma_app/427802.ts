import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { E } from "../905/632989";
import { C } from "../905/520159";
import { e as _$$e } from "../905/916195";
import { Ay } from "@stylexjs/stylex";
import { Pt } from "../figma_app/806412";
import { a as _$$a } from "../905/847494";
import { X } from "../905/350405";
import { G } from "../905/350935";
import { t as _$$t } from "../905/303541";
export function $$_0(e) {
  let t = void 0 !== e.isNavigateBackwardEnabledOverride ? e.isNavigateBackwardEnabledOverride : e.currentFrameIndex > 0;
  let r = void 0 !== e.isNavigateForwardEnabledOverride ? e.isNavigateForwardEnabledOverride : e.currentFrameIndex < e.frameCount - 1;
  let i = e.shouldHideNavigationButtons && !e.shouldShowFrameCounter;
  return i && !e.children ? null : jsxs(_$$a, {
    ariaLabel: e.ariaLabel,
    ignorePositioning: e.ignorePositioning,
    children: [!e.shouldHideNavigationButtons && jsx(h, {
      onClick: e.onNavigateBackward,
      disabled: !t,
      tooltipText: _$$t("viewer.footer.previous_frame"),
      ariaLabel: _$$t("viewer.footer.previous_frame"),
      recordingKey: Pt(e, "backButton"),
      icon: jsx(C, {})
    }), jsx(X, {}), e.shouldShowFrameCounter && jsxs(Fragment, {
      children: [jsx(G, {
        children: _$$t("viewer.footer.frame_progress", {
          currentFrameIndex: e.currentFrameIndex + 1,
          frameCount: e.frameCount
        })
      }), jsx(X, {})]
    }), !e.shouldHideNavigationButtons && jsx(h, {
      onClick: e.onNavigateForward,
      disabled: !r,
      tooltipText: _$$t("viewer.footer.next_frame"),
      ariaLabel: _$$t("viewer.footer.next_frame"),
      recordingKey: Pt(e, "nextButton"),
      icon: jsx(_$$e, {})
    }), e.children && jsxs(Fragment, {
      children: [!i && jsx(X, {}), e.children]
    })]
  });
}
function h(e) {
  return jsx(E, {
    "aria-label": e.ariaLabel,
    onClick: e.onClick,
    disabled: e.disabled,
    htmlAttributes: {
      "data-tooltip-type": "text",
      "data-tooltip-show-above": !0,
      "data-fullscreen-intercept": !0,
      "data-tooltip": e.tooltipText
    },
    recordingKey: e.recordingKey,
    ...Ay.props(m.button, e.disabled && m.buttonDisabled),
    children: e.icon
  });
}
let m = {
  button: {
    borderRadius: "x19y5rnk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    ':not([aria-disabled="true"]):hover_backgroundColor': "x1wtxyws",
    $$css: !0
  },
  buttonDisabled: {
    "--color-icon": "xz8z4lq",
    $$css: !0
  }
};
export const M = $$_0;