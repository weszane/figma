import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useState, useMemo, useCallback, useEffect, forwardRef, useLayoutEffect } from "react";
import { lQ } from "../905/934246";
import { Button } from "../905/521428";
import { J } from "../905/614223";
import { defaultSessionLocalIDString } from "../905/871411";
import { useAtomValueAndSetter } from "../figma_app/27355";
import c from "classnames";
import { parsePxInt } from "../figma_app/783094";
import { ww } from "../figma_app/194956";
import { pW } from "../905/160095";
import { getI18nString } from "../905/303541";
import { c as _$$c } from "../905/370443";
import { $z, tf } from "../figma_app/831799";
import { Yk } from "../figma_app/644079";
import { DP } from "../905/640017";
import { EE, lB } from "../figma_app/731583";
import { getViewportInfo, scaleRect } from "../figma_app/62612";
import { Jn } from "../905/927294";
import { F_ } from "../905/748636";
import { P7, gm as _$$gm, my } from "../905/383548";
import { pc, eP } from "../figma_app/195407";
import { W8e } from "../figma_app/27776";
import { FQ, oX, nW, a5, Hn, gF, Ar, Ny, Lq, $T, gh, b as _$$b, _S, uS, ZA, OQ, P1, jS, dC, IL, wV, B9, w0, hw, qb, Cr, r7, zG, Ju, M3, Mn, _y, Ok, sQ, kb, Ym, pG } from "../figma_app/809086";
var u = c;
export let $$C7 = parsePxInt(W8e);
export function $$w0(e) {
  let t = Yk();
  let r = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  let n = useRef({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    angle: 0,
    absoluteBounds: {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    page: defaultSessionLocalIDString
  });
  let [a, s] = useState({
    left: 0,
    top: 0,
    pointerOffset: 0,
    pointerPosition: 0
  });
  let o = useMemo(() => P7(e.pointerType || _$$gm.arrow), [e.pointerType]);
  let d = e.topPadding || -o.pointerTargetOverlap;
  let c = useCallback(() => {
    if (!n.current) {
      s(null);
      return;
    }
    let i = scaleRect(r, n.current.absoluteBounds);
    let a = {
      x: i.x + r.x,
      y: i.y + r.y,
      height: i.height,
      width: i.width
    };
    s(my({
      width: e.width,
      height: e.height,
      targetRect: a,
      positioningConstants: o,
      alignPointerToLeft: e.alignPointerToLeft,
      alignPointerToTop: e.alignPointerToTop,
      shouldCenterArrow: e.shouldCenterArrow,
      topPadding: d,
      arrowPosition: e.arrowPosition,
      targetType: "canvas",
      viewportTopOffset: r.y,
      viewportBottomOffset: t
    }));
  }, [e.height, e.width, o, e.alignPointerToLeft, e.alignPointerToTop, e.shouldCenterArrow, d, t, e.arrowPosition, r]);
  useEffect(() => {
    let t = EE(`useCanvasNodeRepositioning-${e.targetKey}`, [e.targetKey], e => {
      n.current = e.position;
      c();
    });
    n.current = t.currentNodePosition[e.targetKey]?.position || null;
    c();
    return () => {
      lB(`useCanvasNodeRepositioning-${e.targetKey}`);
    };
  }, [e.targetKey, c]);
  pc({
    location: a,
    onTargetLost: e.onTargetLost,
    targetKey: e.targetKey,
    targetType: "canvas"
  });
  return a;
}
function O(e, t) {
  switch (e) {
    case F_.TOP:
    case F_.BOTTOM:
      return {
        left: t
      };
    case F_.LEFT_TITLE:
    case F_.RIGHT_BODY:
    case F_.RIGHT_TITLE:
      return {
        top: t
      };
    case F_.TOP_RIGHT:
      return {};
  }
}
let R = {
  [F_.TOP]: {
    foregroundStyle: FQ,
    backgroundStyle: oX
  },
  [F_.BOTTOM]: {
    foregroundStyle: nW,
    backgroundStyle: a5
  },
  [F_.LEFT_TITLE]: {
    foregroundStyle: Hn,
    backgroundStyle: gF
  },
  [F_.RIGHT_TITLE]: {
    foregroundStyle: Ar,
    backgroundStyle: Ny
  },
  [F_.RIGHT_BODY]: {
    foregroundStyle: Ar,
    backgroundStyle: Ny
  },
  [F_.TOP_RIGHT]: {
    foregroundStyle: Ar,
    backgroundStyle: Ny
  }
};
export function $$L6(e) {
  let {
    foregroundStyle,
    backgroundStyle
  } = R[e.arrowPosition];
  let i = {
    ...(e.modalColor ? {
      backgroundColor: e.modalColor
    } : {}),
    ...(e.arrowOffset ? O(e.arrowPosition, e.arrowOffset) : {})
  };
  let a = {
    ...(e.modalColor ? {
      backgroundColor: e.modalColor
    } : {}),
    ...(e.pointerBorder ? {
      backgroundColor: e.pointerBorderColor || "#444444"
    } : {}),
    ...(e.arrowOffset ? O(e.arrowPosition, e.arrowOffset) : {})
  };
  return jsxs(Fragment, {
    children: [jsx("div", {
      "aria-hidden": !0,
      className: backgroundStyle,
      style: a
    }), jsx("div", {
      "aria-hidden": !0,
      className: foregroundStyle,
      style: i
    })]
  });
}
export function $$P4(e) {
  let t = P7(_$$gm.arrow);
  let r = e.width || t.defaultModalWidth;
  let a = r + 2 * (e.noPadding ? 0 : $$C7);
  let s = e.backgroundColor;
  let l = e.onVisibilityChange;
  let d = e.setArrowPosition;
  let [c, p] = useState(0);
  let _ = useCallback(e => {
    null !== e && p(e.getBoundingClientRect().height);
  }, []);
  let h = (e.isCanvasNode ? $$w0 : eP)({
    targetKey: e.targetKey,
    height: c,
    width: a,
    topPadding: e.topPadding,
    alignPointerToLeft: e.alignPointerToLeft,
    shouldScrollTargetIntoView: e.shouldScrollTargetIntoView,
    shouldCenterArrow: e.shouldCenterArrow,
    arrowPosition: e.arrowPosition,
    onTargetLost: e.onTargetLost,
    pointerOffsetOverride: e.pointerOffsetOverride
  });
  let g = !!h;
  if (useEffect(() => {
    l && l(g);
  }, [g, l]), useEffect(() => {
    h?.pointerPosition && d && d(h.pointerPosition);
  }, [h?.pointerPosition, d]), !h) return null;
  let f = {
    left: h.left,
    top: h.top,
    width: r
  };
  e.topOffset && (f.marginTop = e.topOffset);
  e.leftOffset && (f.marginLeft = e.leftOffset);
  let E = e.backgroundColor ? {
    backgroundColor: e.backgroundColor
  } : {};
  return e.hideIfArrowPositionDoesNotMatch && h.pointerPosition !== e.arrowPosition ? null : jsx(J, {
    mode: e.colorMode || "dark",
    children: jsx("div", {
      className: u()(e.className || Lq, e.noPadding && $T, e.noAnimation && gh),
      style: {
        ...f,
        ...E
      },
      ref: _,
      children: jsxs("div", {
        ref: e.containerRef,
        role: "tooltip",
        children: [!e.shouldHideArrow && jsx($$L6, {
          arrowPosition: h.pointerPosition,
          arrowOffset: h.pointerOffset,
          modalColor: s
        }), e.shouldNotWrapInParagraphTag ? e.children : jsx("p", {
          children: e.children
        }), e.dismissModal && !e.hideCloseButton && jsx("div", {
          className: u()(_$$b, e.closeButtonClassName),
          children: jsx(Jn, {
            onClick: e.dismissModal,
            innerText: "close",
            "aria-label": getI18nString("general.close")
          })
        })]
      })
    })
  });
}
export function $$D5(e) {
  let {
    arrowPosition
  } = e;
  let r = P7(_$$gm.arrow);
  let a = e.width || r.defaultModalWidth;
  let s = e.backgroundColor;
  let o = "dark" === DP();
  let l = "light" === e.background;
  let [d, c] = useState(0);
  let p = useCallback(e => {
    null !== e && c(e.getBoundingClientRect().height);
  }, []);
  let _ = eP({
    targetKey: e.targetKey,
    height: d,
    width: a + 2 * $$C7,
    topPadding: e.topPadding,
    shouldCenterArrow: e.shouldCenterArrow,
    alignPointerToLeft: e.alignPointerToLeft,
    ...(arrowPosition && {
      arrowPosition
    })
  });
  if (!_ && !e.shouldCenterModal) return null;
  let g = jsx("div", {
    className: u()(_S, {
      [uS]: !(l && !o) && e.isUI3
    }),
    children: jsx(Jn, {
      onClick: e.dismissModal,
      innerText: "close",
      "aria-label": getI18nString("general.close"),
      emphasized: !0
    })
  });
  let E = jsx("div", {
    children: e.ctaText && e.onClickPrimaryCta && jsxs("div", {
      className: ZA,
      children: [e.bottomLeftText && jsx("b", {
        children: e.bottomLeftText
      }), jsxs("div", {
        className: OQ,
        children: [e.secondaryCtaText && e.secondaryCtaHref && jsx("span", {
          className: P1,
          children: jsx(pW, {
            newTab: !0,
            href: e.secondaryCtaHref,
            variant: "secondary",
            children: e.secondaryCtaText
          })
        }), e.secondaryCtaText && e.onClickSecondaryCta && jsx($z, {
          className: l ? jS : dC,
          onClick: e.onClickSecondaryCta,
          "aria-hidden": !0,
          children: e.secondaryCtaText
        }), e.ctaText && e.onClickPrimaryCta && jsx(B, {
          onClick: e.onClickPrimaryCta,
          trackingProperties: e.buttonContext ? {
            buttonContext: e.buttonContext
          } : void 0,
          children: e.ctaText
        })]
      })]
    })
  });
  let b = {
    backgroundColor: s,
    width: a,
    margin: e.topOffset ? `${e.topOffset}px auto` : "auto"
  };
  let T = _ ? {
    left: _.left,
    top: _.top
  } : {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  };
  return jsxs("div", {
    className: l ? IL : wV,
    ref: p,
    style: {
      ...b,
      ...T
    },
    children: [jsxs("div", {
      children: [_ && jsx($$L6, {
        arrowPosition: _.pointerPosition,
        arrowOffset: _.pointerOffset,
        modalColor: l ? "var(--color-bg)" : void 0
      }), jsx("h1", {
        children: e.title
      }), e.children, g]
    }), E]
  });
}
export let $$k1 = forwardRef(function (e, t) {
  let [r, s] = useState(0);
  let o = useCallback(e => {
    null !== e && s(e.getBoundingClientRect().height);
    null != t && (t.current = e);
  }, [t]);
  let l = useRef(null);
  let d = e.disableClickOutsideToHide ? lQ : e.dismissModal;
  ww(l, d);
  let c = useRef(null);
  let p = eP({
    targetKey: e.targetKey,
    height: e.passHeightForLocation ? e.height ? e.height : 0 : r,
    width: e.width + 2 * $$C7,
    topPadding: e.topPadding,
    shouldCenterArrow: e.shouldCenterArrow,
    arrowPosition: e.arrowPosition,
    onTargetLost: e.onTargetLost
  });
  useEffect(() => {
    p && (c.current = p);
  }, [p]);
  let h = p || c.current;
  let f = e.hideIfTargetLost && null == p;
  if (!h || f || e.hideModal || e.shouldDismissWhenLostDOMTarget && !p) return null;
  let E = e.pointerBackgroundColor || "var(--color-border, rgba(0, 0, 0, 0.2))";
  let y = e.pointerForegroundColor || "var(--color-bg, white)";
  let b = {
    left: h.left + (e.arrowPadding ?? 0),
    top: h.top,
    width: e.width
  };
  e.height && (b.height = e.height);
  let T = e.animateQuickly ? B9 : w0;
  let S = e.pointerPaddingOffset ?? 0;
  return jsx("div", {
    ref: l,
    children: jsxs("div", {
      className: e.className ? `${e.className}` : T,
      style: b,
      ref: o,
      "data-testid": "walkThroughModal",
      children: [!e.hidePointer && jsx($$L6, {
        arrowPosition: h.pointerPosition,
        arrowOffset: h.pointerOffset + S,
        modalColor: y,
        pointerBorderColor: E,
        pointerBorder: !0
      }), e.children, !e.hideCloseButton && jsx("div", {
        className: u()(_$$b, e.closeButtonClassName, {
          [uS]: e.useWhiteCloseButton
        }),
        children: jsx(Jn, {
          onClick: () => {
            e.additionalOnExplicitDismiss && e.additionalOnExplicitDismiss();
            e.dismissModal();
          },
          innerText: "close",
          "aria-label": getI18nString("general.close"),
          trackingProperties: {
            trackingDescriptor: _$$c.CLOSE_BUTTON
          }
        })
      })]
    })
  });
});
export function $$M2({
  skipConnectorModal: e,
  shouldSkipConnectorModalAtom: t
}) {
  let [r, n] = useAtomValueAndSetter(t);
  r && e && e();
  return {
    handleTargetLost: function (t, r) {
      t && ("canvas" === r && n(!0), e && e());
    }
  };
}
export function $$F3(e) {
  return jsx(j, {
    children: e.children,
    arrowPosition: e.arrowPosition,
    autoWidth: e.autoWidth,
    fixedWidth: e.fixedWidth,
    hasShadow: e.hasShadow,
    isBold: e.isBold,
    onTargetLost: e.onTargetLost,
    shouldCenterArrow: e.shouldCenterArrow,
    shouldHideArrow: e.shouldHideArrow,
    targetKey: e.targetKey,
    targetType: e.targetType,
    topPadding: e.topPadding,
    useRepositioning: "canvas" === e.targetType ? $$w0 : eP
  });
}
function j(e) {
  let t = P7(_$$gm.connector);
  let [r, a] = useState(0);
  let [s, o] = useState(0);
  let l = useRef(null);
  let d = e.useRepositioning({
    targetKey: e.targetKey,
    height: r,
    width: e.autoWidth ? s : e.fixedWidth ? e.fixedWidth : t.defaultModalWidth,
    topPadding: e.topPadding,
    pointerType: _$$gm.connector,
    arrowPosition: e.arrowPosition,
    shouldCenterArrow: e.shouldCenterArrow
  });
  return (useLayoutEffect(() => {
    let e = l.current;
    if (!e) return;
    let t = new ResizeObserver(() => {
      let t = e.getBoundingClientRect();
      a(t.height);
      o(t.width);
    });
    t.observe(e);
    return () => t.disconnect();
  }, [d]), d) ? jsxs("div", {
    className: u()({
      [hw]: !0,
      [qb]: !e.isBold,
      [Cr]: !!e.isBold,
      [r7]: !!e.hasShadow,
      [zG]: "dom" === e.targetType,
      [Ju]: "canvas" === e.targetType
    }),
    style: {
      left: d.left,
      top: d.top,
      width: e.autoWidth ? "auto" : e.fixedWidth ? e.fixedWidth : t.defaultModalWidth
    },
    ref: l,
    children: [!e.shouldHideArrow && jsx(U, {
      connectorPosition: d.pointerPosition,
      connectorOffset: d.pointerOffset,
      isBold: e.isBold
    }), e.children]
  }) : null;
}
function U(e) {
  let t = jsxs("div", {
    className: u()(M3, Mn),
    style: {
      left: e.connectorOffset
    },
    children: [jsx("div", {
      className: u()({
        [_y]: !0,
        [qb]: !e.isBold,
        [Cr]: !!e.isBold
      })
    }), jsx("div", {
      className: u()({
        [Ok]: !0,
        [qb]: !e.isBold,
        [Cr]: !!e.isBold
      })
    })]
  });
  let r = jsxs("div", {
    className: u()(M3, sQ),
    style: {
      left: e.connectorOffset
    },
    children: [jsx("div", {
      className: u()({
        [Ok]: !0,
        [qb]: !e.isBold,
        [Cr]: !!e.isBold
      })
    }), jsx("div", {
      className: u()({
        [_y]: !0,
        [qb]: !e.isBold,
        [Cr]: !!e.isBold
      })
    })]
  });
  let i = jsxs("div", {
    className: u()(M3, kb),
    style: {
      top: e.connectorOffset
    },
    children: [jsx("div", {
      className: u()({
        [_y]: !0,
        [qb]: !e.isBold,
        [Cr]: !!e.isBold
      })
    }), jsx("div", {
      className: u()({
        [Ym]: !0,
        [qb]: !e.isBold,
        [Cr]: !!e.isBold
      })
    })]
  });
  let a = jsxs("div", {
    className: u()(M3, pG),
    style: {
      top: e.connectorOffset
    },
    children: [jsx("div", {
      className: u()({
        [Ym]: !0,
        [qb]: !e.isBold,
        [Cr]: !!e.isBold
      })
    }), jsx("div", {
      className: u()({
        [_y]: !0,
        [qb]: !e.isBold,
        [Cr]: !!e.isBold
      })
    })]
  });
  return jsxs(Fragment, {
    children: [e.connectorPosition === F_.TOP && t, e.connectorPosition === F_.BOTTOM && r, e.connectorPosition === F_.LEFT_TITLE && i, e.connectorPosition === F_.RIGHT_TITLE && a, e.connectorPosition === F_.RIGHT_BODY && a]
  });
}
let B = tf(function (e) {
  return jsx(Button, {
    ...e,
    variant: "primary"
  });
});
export const Ay = $$w0;
export const CR = $$k1;
export const Du = $$M2;
export const Dv = $$F3;
export const NJ = $$P4;
export const OA = $$D5;
export const gm = $$L6;
export const uv = $$C7;