import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useRef, useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { useHandleMouseEvent, useSetupPlayback } from "../figma_app/878298";
import o from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { Uz } from "../905/63728";
import { h as _$$h } from "../905/772711";
import { M } from "../905/807529";
import { i0 } from "../905/17223";
import { qM, vd, tM } from "../figma_app/637027";
import { kt } from "../figma_app/858013";
import { i as _$$i, C as _$$C } from "../905/64217";
import { renderI18nText } from "../905/303541";
import { In } from "../905/672640";
import { popModalStack, hideModal } from "../905/156213";
import { Dm } from "../figma_app/8833";
import { j6 } from "../figma_app/831799";
import { JY, ew, Gx, R7, K1, Y0, CY, Xt, Ir, L4, yl, Er, KJ, HY, pN, DD, jE, v0, _f, LO, FQ, u1, pL, $$ } from "../905/289198";
var l = o;
var S = (e => (e.CLICK_OUTSIDE = "click_outside", e.PRESS_ESCAPE = "press_escape", e))(S || {});
export function $$v1(e) {
  let t;
  let r;
  let {
    useModalViewScroll = !0,
    tintedModalBackground = !0,
    hide,
    disableClickOutsideToHide,
    size,
    alignment,
    absolutePosition,
    padding,
    height,
    maxHeight,
    width,
    title,
    titleClassName,
    className,
    fixedTop,
    backgroundClassName,
    onKeyDown,
    disableKeyboardEventPropagation,
    modalRef,
    onModalClick,
    enableEscapeToClose,
    children,
    animateIn,
    disableFocusTrap,
    noPadding,
    disableFocusOnMount
  } = e;
  _$$h();
  let F = useCallback(() => {
    disableClickOutsideToHide || hide("click_outside");
  }, [disableClickOutsideToHide, hide]);
  let j = useCallback(e => {
    e.stopPropagation();
  }, []);
  let U = useCallback(e => {
    onModalClick && onModalClick(e);
  }, [onModalClick]);
  let B = useCallback(e => {
    if (e.keyCode === Uz.ESCAPE && (!disableClickOutsideToHide || enableEscapeToClose)) {
      hide("press_escape");
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onKeyDown && onKeyDown(e);
    disableKeyboardEventPropagation && (e.nativeEvent.stopImmediatePropagation(), e.stopPropagation());
  }, [disableClickOutsideToHide, hide, onKeyDown, disableKeyboardEventPropagation, enableEscapeToClose]);
  let G = useRef(null);
  useEffect(() => {
    if (disableFocusOnMount || G.current.matches(":focus-within") || G.current.focus(), disableFocusTrap) return;
    let e = M(e => {
      e.target.closest('[aria-modal="true"]') || G.current?.focus();
    });
    document.body.addEventListener("focus", e, !0);
    return () => document.body.removeEventListener("focus", e, !0);
  }, [disableFocusOnMount, disableFocusTrap]);
  "number" == typeof size && (t = size, r = size);
  let V = l()({
    [JY]: "small" === size,
    [ew]: "fitContent" === size,
    [Gx]: "mobile" === size,
    [R7]: !size || "medium" === size || "number" == typeof size
  });
  let H = l()(K1, backgroundClassName, Dm, {
    [Y0]: tintedModalBackground,
    [CY]: fixedTop,
    [Xt]: "left" === alignment,
    [Ir]: "right" === alignment,
    [L4]: "leftNoPadding" === alignment
  });
  let z = l()(V, className, {
    [yl]: useModalViewScroll,
    [Er]: !useModalViewScroll,
    [KJ]: !!absolutePosition,
    [HY]: animateIn,
    [pN]: noPadding
  });
  let W = {
    minWidth: t,
    maxWidth: r,
    height,
    maxHeight,
    width,
    padding,
    ...(absolutePosition ? {
      top: absolutePosition.top,
      left: absolutePosition.left
    } : {})
  };
  return jsx("div", {
    tabIndex: 0,
    className: H,
    onMouseDown: F,
    onKeyDown: B,
    ref: G,
    "data-testid": "modal-background",
    children: jsxs("div", {
      className: z,
      style: W,
      onMouseDown: j,
      onClick: U,
      ref: modalRef,
      role: "dialog",
      "aria-modal": "true",
      "data-testid": e["data-testid"],
      children: [title && jsx("div", {
        className: `${DD} ${titleClassName || ""}`,
        children: title
      }), children]
    })
  });
}
export function $$A0(e) {
  let t = useDispatch();
  let {
    onHide,
    popStack
  } = e;
  let {
    name,
    properties
  } = j6();
  let c = properties?.fileKey;
  let u = properties?.productType;
  let p = useCallback(e => {
    popStack ? t(popModalStack()) : t(hideModal());
    onHide && onHide();
    trackEventAnalytics("Modal Close", {
      source: e,
      trackingContext: name,
      fileKey: c,
      productType: u
    });
  }, [t, c, name, onHide, popStack, u]);
  return jsx($$v1, {
    ...e,
    hide: p
  });
}
let x = {
  playback: () => ({
    preventDefault: () => {}
  })
};
export function $$N2(e) {
  let t = e.recordingKey ?? "";
  let r = e.destructive ?? !1;
  let o = e.autoFocusCta ?? !0;
  let l = useDispatch();
  let {
    dontClose,
    popStack
  } = e;
  let u = useCallback(() => {
    dontClose || (popStack ? l(popModalStack()) : l(hideModal()));
  }, [l, dontClose, popStack]);
  let {
    onCloseButtonClick
  } = e;
  let b = useCallback(() => {
    u();
    onCloseButtonClick?.();
  }, [u, onCloseButtonClick]);
  let T = useHandleMouseEvent(t, "click", b);
  let {
    hideOnConfirm,
    onConfirm
  } = e;
  let N = useCallback(e => {
    e.preventDefault();
    (hideOnConfirm ?? !0) && u();
    onConfirm();
  }, [u, hideOnConfirm, onConfirm]);
  let C = useSetupPlayback(t, "confirm", N, x);
  let {
    hideOnCancel,
    onCancel
  } = e;
  let R = useCallback(e => {
    e.preventDefault();
    (hideOnCancel ?? !0) && u();
    onCancel?.();
  }, [u, hideOnCancel, onCancel]);
  let L = useSetupPlayback(t ?? "", "cancel", R, x);
  let P = r ? qM : vd;
  let D = !(e.dontClose || e.hideClose);
  return jsxs($$A0, {
    size: e.size || "small",
    ...e,
    className: e.className || yl,
    onHide: e.overrideOnHide ?? e.onCancel,
    children: [D && jsx(i0, {
      ...e,
      className: e.closeClass,
      onClick: T
    }), jsxs(_$$i, {
      displayAs: _$$C.Block,
      children: [!e.hideConfirmationTitle && jsx("div", {
        className: e.titleClass ?? DD,
        children: jsxs("h2", {
          children: [" ", e.confirmationTitle ?? renderI18nText("modal.are_you_sure")]
        })
      }), e.children ? e.children : jsx("div", {
        className: jE,
        children: e.content
      }), jsxs("div", {
        className: v0,
        children: [jsx("div", {
          className: e.helperTextClass ?? _f,
          children: e.helperText
        }), !e.hideCancel && jsx(tM, {
          onClick: L,
          autoFocus: !!o && r,
          children: e.cancelText ?? renderI18nText("modal.cancel")
        }), e.isLoading ? jsxs(P, {
          dataTestId: "confirmation-modal-confirm-action-button",
          tabIndex: 0,
          type: "submit",
          className: LO,
          disabled: !0,
          trackingProperties: e.trackedConfirmationProperties || {},
          children: [jsx(kt, {
            size: "small",
            className: e.loadingText ? FQ : u1
          }), e.loadingText]
        }) : jsx("form", {
          onSubmit: C,
          children: jsx(P, {
            dataTestId: "confirmation-modal-confirm-action-button",
            tabIndex: 0,
            type: "submit",
            className: pL,
            disabled: e.disableConfirm,
            autoFocus: !!o && !r,
            trackingProperties: e.trackedConfirmationProperties || {},
            children: e.confirmText
          })
        })]
      }), e.bottomWarningText && jsxs("div", {
        className: $$,
        children: [jsx(In, {
          icon: "warning-32"
        }), e.bottomWarningText]
      })]
    })]
  });
}
export const d_ = $$A0;
export const ey = $$v1;
export const yX = $$N2;