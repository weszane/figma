import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { K } from "../905/443068";
import { ButtonPrimitive } from "../905/632989";
import { C } from "../905/520159";
import { e as _$$e } from "../905/916195";
import { H } from "../905/999677";
import { isMobileUA } from "../figma_app/778880";
import { generateRecordingKey } from "../figma_app/878298";
import { getI18nString, renderI18nText } from "../905/303541";
import { K5, t$, lE } from "../figma_app/29814";
let h = null;
export function $$m1() {
  return h;
}
export function $$g0(e) {
  let {
    backRef,
    nextRef
  } = function () {
    let e = useRef(null);
    let t = useRef(null);
    useEffect(() => {
      let r = {
        duration: 200
      };
      function n(e) {
        return [{
          transform: "translate3D(0px, 0, 0)"
        }, {
          transform: `translate3D(${e}px, 0, 0)`
        }, {
          transform: "translate3D(0px, 0, 0)"
        }];
      }
      h = {
        animateBack: () => {
          null !== e.current && e.current.animate(n(-4), r);
        },
        animateNext: () => {
          null !== t.current && t.current.animate(n(4), r);
        }
      };
      return () => {
        h = null;
      };
    }, [t, e]);
    return {
      backRef: e,
      nextRef: t
    };
  }();
  let s = function (e) {
    let t = e.navigateForwardEnabled || e.navigateBackwardEnabled;
    return (e.showNavigationInMobile || !isMobileUA) && t;
  }(e);
  let d = jsx(K, {
    onClick: e.navigateBackward,
    recordingKey: generateRecordingKey(e, "backButton"),
    "aria-label": getI18nString("viewer.footer.previous_frame"),
    disabled: !e.navigateBackwardEnabled,
    htmlAttributes: {
      "data-fullscreen-intercept": !0,
      "data-tooltip-show-above": !0
    },
    children: jsx("div", {
      ref: backRef,
      children: jsx(C, {})
    })
  });
  let m = jsx(K, {
    onClick: e.navigateForward,
    recordingKey: generateRecordingKey(e, "nextButton"),
    "aria-label": getI18nString("viewer.footer.next_frame"),
    disabled: !e.navigateForwardEnabled,
    htmlAttributes: {
      "data-fullscreen-intercept": !0,
      "data-tooltip-show-above": !0
    },
    children: jsx("div", {
      ref: nextRef,
      children: jsx(_$$e, {})
    })
  });
  return jsxs("div", {
    className: e.containerClassName,
    children: [s && d, !!e.shouldShowFrameCounter && jsx("div", {
      role: "status",
      "aria-live": "polite",
      "aria-label": getI18nString("viewer.footer.readable_frame_progress", {
        currentFrameIndex: e.currentFrameIndex + 1,
        frameCount: e.frameCount
      }),
      className: e.frameCounterTextClassName,
      children: renderI18nText("viewer.footer.frame_progress", {
        currentFrameIndex: e.currentFrameIndex + 1,
        frameCount: e.frameCount
      })
    }), s && m, e.optionsMenu && jsxs(Fragment, {
      children: [(s || e.shouldShowFrameCounter) && jsx("div", {
        className: K5
      }), e.optionsMenu]
    })]
  });
}
export function $$f2(e) {
  return jsxs(ButtonPrimitive, {
    className: e.className,
    onClick: e.onClick,
    recordingKey: e.recordingKey,
    "aria-label": getI18nString("viewer.footer.restart"),
    "aria-keyshortcuts": getI18nString("viewer.footer.r"),
    children: [jsx(H, {
      className: t$
    }), renderI18nText("viewer.footer.restart"), " ", jsxs("span", {
      className: lE,
      children: [" ", renderI18nText("viewer.footer.r")]
    })]
  });
}
export const hJ = $$g0;
export const mt = $$m1;
export const xy = $$f2;