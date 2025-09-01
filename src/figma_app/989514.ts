import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { K } from "../905/443068";
import { A } from "../905/251970";
import s from "classnames";
import { $z } from "../figma_app/617427";
import { tx, t as _$$t } from "../905/303541";
import { Y, M } from "../905/830372";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { Ai } from "../figma_app/242339";
import { CR, NJ } from "../figma_app/419216";
import { x } from "../figma_app/849451";
import { gZ, kO, Ph, wV, wx, h_, qr, R3, el, N2, Lq, b, hF, q4, bI } from "../figma_app/404712";
var o = s;
export let $$f3 = 300;
export function $$E4({
  currentStepNum: e,
  totalNumSteps: t,
  useLoadingBar: r
}) {
  if (null == e || null == t) return null;
  let i = Math.min(e / t * 64, 64);
  return r ? jsx("div", {
    className: gZ,
    children: jsx("div", {
      className: o()({
        [kO]: !0,
        [Ph]: i >= 64
      }),
      style: {
        width: `${i}px`
      }
    })
  }) : jsx("span", {
    className: wV,
    children: tx("rcs.rcs_shared.step_counter", {
      currentStepNum: e,
      totalNumSteps: t
    })
  });
}
function y(e) {
  return jsxs(Fragment, {
    children: [jsx("h2", {
      className: wx,
      children: e.title
    }), jsx("div", {
      className: h_,
      children: e.children
    }), jsx("div", {
      className: qr,
      children: jsxs(Y, {
        verticalAlignItems: "center",
        direction: "horizontal",
        spacing: 8,
        children: [e.lowerLeftText, jsx(M, {}), e.onSecondaryCtaClick && jsx($z, {
          onClick: e.onSecondaryCtaClick,
          trackingProperties: {
            ctaTrackingDescriptor: e.secondaryCtaProps?.ctaTrackingDescriptor || _$$c.BACK
          },
          variant: "secondary",
          children: e.secondaryCtaProps?.ctaText || tx("tooltips_plus_onboarding.back")
        }), e.onPrimaryCtaClick && jsx($z, {
          onClick: e.onPrimaryCtaClick,
          trackingProperties: {
            ctaTrackingDescriptor: e.primaryCtaProps?.ctaTrackingDescriptor || _$$c.NEXT
          },
          variant: "primary",
          children: e.primaryCtaProps?.ctaText || tx("tooltips_plus_onboarding.next")
        })]
      })
    })]
  });
}
export function $$b2(e) {
  let t = Ai(["exp_cursor_bot_onboarding"]);
  let r = !e.hideCloseButton;
  return jsxs(fu, {
    name: e.trackingContextName,
    properties: {
      isInCursorBotBasicsFile: t
    },
    children: [!e.disableHighlight && jsx(x, {
      target: e.targetKey
    }), jsxs(CR, {
      arrowPadding: e.arrowPadding,
      arrowPosition: e.arrowPosition,
      className: o()({
        [R3]: !0,
        [el]: "designPanel" === e.pointsTo,
        [N2]: "toolbar" === e.pointsTo,
        [Lq]: "leftPanel" === e.pointsTo
      }),
      disableClickOutsideToHide: !0,
      dismissModal: e.dismissModal,
      hideCloseButton: !0,
      hideIfTargetLost: !0,
      hidePointer: e.hidePointer,
      shouldCenterArrow: e.shouldCenterArrow,
      targetKey: e.targetKey,
      width: 320,
      children: [jsx(y, {
        title: e.title,
        children: e.children,
        lowerLeftText: e.lowerLeftText,
        onSecondaryCtaClick: e.onSecondaryCtaClick,
        onPrimaryCtaClick: e.onPrimaryCtaClick,
        secondaryCtaProps: e.secondaryCtaProps,
        primaryCtaProps: e.primaryCtaProps
      }), r && jsx("div", {
        className: b,
        children: jsx(K, {
          onClick: e.dismissModal,
          "aria-label": _$$t("general.close"),
          htmlAttributes: {
            "data-testid": "close-button"
          },
          children: jsx(A, {})
        })
      })]
    })]
  });
}
export function $$T5(e) {
  return jsx(fu, {
    name: e.trackingContextName,
    children: jsxs("div", {
      style: {
        width: 320
      },
      className: o()(R3, hF),
      children: [jsx(y, {
        title: e.title,
        children: e.children,
        lowerLeftText: e.lowerLeftText,
        onSecondaryCtaClick: e.onSecondaryCtaClick,
        onPrimaryCtaClick: e.onPrimaryCtaClick,
        secondaryCtaProps: e.secondaryCtaProps,
        primaryCtaProps: e.primaryCtaProps
      }), jsx("div", {
        className: b,
        children: jsx(K, {
          onClick: e.dismissModal,
          "aria-label": _$$t("general.close"),
          htmlAttributes: {
            "data-testid": "close-button"
          },
          children: jsx(A, {})
        })
      })]
    })
  });
}
export function $$I1(e) {
  return jsx(fu, {
    name: e.trackingContextName,
    children: jsxs(NJ, {
      arrowPosition: e.arrowPosition,
      backgroundColor: "var(--color-bg)",
      className: o()({
        [R3]: !0,
        [el]: "designPanel" === e.pointsTo,
        [N2]: "toolbar" === e.pointsTo,
        [Lq]: "leftPanel" === e.pointsTo,
        [q4]: !e.visible
      }),
      dismissModal: e.dismissModal,
      hideCloseButton: !0,
      hideIfTargetLost: !0,
      isCanvasNode: !0,
      noAnimation: !0,
      shouldCenterArrow: e.shouldCenterArrow,
      shouldHideArrow: e.hidePointer,
      targetKey: e.targetKey,
      width: 320,
      children: [jsx(y, {
        title: e.title,
        children: e.children,
        lowerLeftText: e.lowerLeftText,
        onSecondaryCtaClick: e.onSecondaryCtaClick,
        onPrimaryCtaClick: e.onPrimaryCtaClick,
        secondaryCtaProps: e.secondaryCtaProps,
        primaryCtaProps: e.primaryCtaProps
      }), jsx("div", {
        className: b,
        children: jsx(K, {
          onClick: e.dismissModal,
          "aria-label": _$$t("general.close"),
          htmlAttributes: {
            "data-testid": "close-button"
          },
          children: jsx(A, {})
        })
      })]
    })
  });
}
export function $$S0(e) {
  return jsx("div", {
    className: bI,
    children: e.children
  });
}
export const A2 = $$S0;
export const TG = $$I1;
export const VF = $$b2;
export const jK = $$f3;
export const uY = $$E4;
export const xI = $$T5;