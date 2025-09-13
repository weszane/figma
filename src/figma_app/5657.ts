import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { J } from "../905/614223";
import { Xr } from "../figma_app/27355";
import o from "classnames";
import { Spacing } from "../figma_app/637027";
import { s as _$$s } from "../cssbuilder/589278";
import { $z } from "../figma_app/617427";
import { renderI18nText } from "../905/303541";
import { AutoLayout, Spacer } from "../905/470281";
import { c as _$$c } from "../905/370443";
import { TrackingProvider } from "../figma_app/831799";
import { f as _$$f } from "../905/940356";
import { Ai } from "../figma_app/242339";
import { jK } from "../figma_app/989514";
import { jr, Sf, H7 } from "../figma_app/467440";
import { zu } from "../figma_app/61403";
import { CR } from "../figma_app/419216";
import { x as _$$x } from "../figma_app/849451";
import { wx, h_, qr, R3, el, N2, Lq } from "../figma_app/404712";
var l = o;
let v = "cursor_bot_tooltip--textInverseColor--sNGZA";
function A(e) {
  let t = e.shouldInverseColors ?? !1;
  let r = _$$f("cursor_bot_v2_make_show_me_primary_cta");
  return jsxs(Fragment, {
    children: [jsx("h2", {
      className: l()(wx, {
        [v]: t
      }),
      children: e.title
    }), jsx(Spacing, {
      multiple: 1
    }), jsx("div", {
      className: l()(h_, {
        [v]: t
      }),
      children: e.children
    }), jsx("div", {
      className: qr,
      children: jsxs(AutoLayout, {
        verticalAlignItems: "center",
        direction: "horizontal",
        spacing: 8,
        children: [jsx("div", {
          className: l()({
            [_$$s.colorTextOnbrand.$]: t,
            [_$$s.colorTextSecondary.$]: !t
          }),
          children: e.lowerLeftText
        }), jsx(Spacer, {}), e.onSecondaryCtaClick && jsx(J, {
          mode: t ? "dark" : void 0,
          children: jsx("div", {
            ref: r ? void 0 : e.showMeCtaRef,
            children: jsx($z, {
              variant: "secondary",
              onClick: e.onSecondaryCtaClick,
              trackingProperties: {
                ctaTrackingDescriptor: e.secondaryCtaProps?.ctaTrackingDescriptor || _$$c.BACK
              },
              children: e.secondaryCtaProps?.ctaText || renderI18nText("tooltips_plus_onboarding.back")
            })
          })
        }), e.onPrimaryCtaClick && jsx(J, {
          mode: t ? "light" : void 0,
          children: jsx("div", {
            ref: r ? e.showMeCtaRef : void 0,
            children: jsx($z, {
              onClick: e.onPrimaryCtaClick,
              trackingProperties: {
                ctaTrackingDescriptor: e.primaryCtaProps?.ctaTrackingDescriptor || _$$c.NEXT
              },
              variant: "primary",
              disabled: t,
              children: e.primaryCtaProps?.ctaText || renderI18nText("tooltips_plus_onboarding.next")
            })
          })
        })]
      })
    })]
  });
}
export function $$x0(e) {
  let t = useRef(null);
  let r = useRef(null);
  let a = useRef(null);
  let o = Xr(jr);
  let d = Xr(Sf);
  let u = Xr(H7);
  let [p, _] = useState(!1);
  let [h, v] = useState();
  let x = () => {
    let n = 0;
    let i = 0;
    if (null != t.current && null != r.current && null != a.current) {
      let {
        offsetTop,
        offsetHeight,
        offsetLeft,
        offsetWidth
      } = t.current;
      let h = Math.sqrt(Math.pow(n = offsetTop + offsetHeight / 2, 2) + Math.pow(i = offsetLeft + offsetWidth / 2, 2));
      let m = [{
        top: `${n}px`,
        left: `${i}px`,
        width: "0px",
        height: "0px",
        borderRadius: "100%"
      }, {
        top: `${n - h}px`,
        left: `${i - h}px`,
        width: `${2 * h}px`,
        height: `${2 * h}px`,
        borderRadius: "100%",
        offset: .4166666666666667
      }, {
        top: `${n - h}px`,
        left: `${i - h}px`,
        width: `${2 * h}px`,
        height: `${2 * h}px`,
        borderRadius: "100%"
      }];
      r.current.animate(m, {
        duration: 600,
        easing: "cubic-bezier(0.14, 0, 0.32, 1)"
      });
      setTimeout(() => {
        v("#007be5");
      }, 130);
      _(!0);
      let g = e.collapseToTopRight ? "top right" : "bottom right";
      let f = [{
        transform: "scale(1)",
        transformOrigin: g
      }, {
        transform: "scale(0)",
        transformOrigin: g,
        offset: .4166666666666667
      }, {
        transform: "scale(0)",
        transformOrigin: g
      }];
      let E = a.current;
      setTimeout(() => {
        null != a.current && a.current.animate(f, {
          duration: 350,
          easing: "ease-in"
        });
      }, 250);
      setTimeout(() => {
        _(!1);
        v(void 0);
      }, 350);
      let y = E.offsetLeft + E.offsetWidth;
      let T = e.collapseToTopRight ? E.offsetTop : E.offsetTop + E.offsetHeight;
      o(y);
      d(T);
      e.collapseToTopRight && u(zu.RIGHT);
    }
  };
  let N = Ai(["exp_cursor_bot_onboarding"]);
  let C = _$$f("cursor_bot_v2_make_show_me_primary_cta");
  return jsxs(TrackingProvider, {
    name: e.trackingContextName,
    properties: {
      isInCursorBotBasicsFile: N
    },
    children: [!e.disableHighlight && jsx(_$$x, {
      target: e.targetKey
    }), jsxs(CR, {
      ref: a,
      arrowPosition: e.arrowPosition,
      className: l()(R3, {
        [el]: "designPanel" === e.pointsTo,
        [N2]: "toolbar" === e.pointsTo,
        [Lq]: "leftPanel" === e.pointsTo
      }),
      closeButtonClassName: p ? "cursor_bot_tooltip--closeButtonInverseColor--CLQm3" : void 0,
      disableClickOutsideToHide: !0,
      dismissModal: e.dismissModal,
      hideCloseButton: e.hideCloseButton,
      hideIfTargetLost: !0,
      hidePointer: e.hidePointer,
      pointerForegroundColor: h,
      shouldCenterArrow: e.shouldCenterArrow,
      targetKey: e.targetKey,
      width: jK,
      children: [jsx("div", {
        className: _$$s.overflowHidden.absolute.top0.left0.wFull.hFull.eventsNone.$,
        children: jsx("div", {
          className: "cursor_bot_tooltip--expandingBlue--7HBiv",
          ref: r
        })
      }), jsx(A, {
        title: e.title,
        children: e.children,
        onSecondaryCtaClick: () => {
          if (C) {
            e.onSecondaryCtaClick?.();
            return;
          }
          x();
          setTimeout(() => {
            e.onSecondaryCtaClick?.();
          }, 500);
        },
        onPrimaryCtaClick: () => {
          if (!C) {
            e.onPrimaryCtaClick?.();
            return;
          }
          x();
          setTimeout(() => {
            e.onPrimaryCtaClick?.();
          }, 500);
        },
        secondaryCtaProps: e.secondaryCtaProps,
        primaryCtaProps: e.primaryCtaProps,
        showMeCtaRef: t,
        shouldInverseColors: p,
        lowerLeftText: e.lowerLeftText
      })]
    })]
  });
}
export const b = $$x0;