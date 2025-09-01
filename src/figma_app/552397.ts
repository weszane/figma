import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useContext } from "react";
import a from "classnames";
import { Uz } from "../905/63728";
import { aH } from "../figma_app/806412";
import { D8 } from "../905/511649";
import { A as _$$A } from "../905/482208";
import { nS } from "../figma_app/274383";
import { hv } from "../figma_app/544744";
import { W } from "../905/866915";
import { T as _$$T } from "../905/355691";
import { J as _$$J } from "../figma_app/900567";
import { Zh, $y, ll, yG, dR, vu, Lt, sD } from "../figma_app/731560";
var s = a;
let $$f1 = forwardRef(({
  toolType: e,
  isSelected: t,
  onClick: r,
  children: a,
  tooltipOffset: _ = {
    offsetX: 0,
    offsetY: 12
  },
  tooltipLocation: f = "above",
  className: E,
  recordingKey: y,
  onboardingKey: b,
  ButtonLayout: T = _$$J,
  isDisabled: I = !1,
  clickOnMouseDown: S = !1,
  inTabOrder: v = !0,
  ariaLabel: A,
  isHovered: x,
  isEnabledForViewers: N = !1,
  onMouseEnter: C,
  onMouseMove: w,
  onMouseLeave: O,
  onTouchStart: R,
  onTouchEnd: L,
  hasOpenSubmenu: P,
  testId: D,
  ...k
}, M) => {
  let {
    state,
    dispatch
  } = useContext(nS);
  let U = hv({
    isEnabledForViewers: N
  }) || I;
  let B = state.draggedTool === e;
  let G = A || k["data-tooltip"];
  let V = e => {
    e.preventDefault();
    e.stopPropagation();
    state.shouldFinishClick && !S && r(e);
  };
  return jsxs(D8, {
    className: s()(Zh, $y, {
      [ll]: U
    }),
    "data-fullscreen-intercept": !0,
    "data-onboarding-key": b,
    "data-testid": D,
    "data-tooltip": k["data-tooltip"],
    "data-tooltip-bottom-flip-margin": k["data-tooltip-bottom-flip-margin"],
    "data-tooltip-offset-x": k["data-tooltip-offset-x"] ?? _.offsetX,
    "data-tooltip-offset-y": k["data-tooltip-offset-y"] ?? _.offsetY,
    "data-tooltip-show-above": "above" === f || void 0,
    "data-tooltip-show-below": "below" === f || void 0,
    "data-tooltip-show-left": "left" === f || void 0,
    "data-tooltip-submenu-open": P,
    "data-tooltip-type": B ? null : k["data-tooltip-type"],
    onClick: U ? void 0 : V,
    onMouseEnter: C,
    onMouseLeave: O,
    onMouseMove: w,
    onPointerDown: U ? void 0 : e => {
      if (e.preventDefault(), e.stopPropagation(), S ? (r(e), dispatch({
        type: "cancel drag"
      })) : dispatch({
        type: "start click"
      }), !_$$T.RECORD_DETAILED_EVENTS) return aH;
    },
    onTouchEnd: L,
    onTouchStart: R,
    recordingKey: y,
    children: [jsx(T, {
      className: E,
      isHovering: x,
      isSelected: t,
      disabled: U,
      isDragging: B,
      "aria-hidden": !0,
      children: a
    }), jsx(D8, {
      "aria-disabled": U,
      "aria-hidden": !v,
      "aria-label": G && v ? function (e) {
        try {
          return _$$A(e) || e;
        } catch (t) {
          return e;
        }
      }(G) : void 0,
      className: s()(yG, dR, {
        [ll]: U,
        [vu]: t,
        [Lt]: "select" === e,
        [sD]: "hand" === e
      }),
      "data-fullscreen-intercept": !0,
      forwardedRef: M,
      onClick: U ? void 0 : V,
      onKeyDown: U ? void 0 : e => {
        e.keyCode === Uz.ENTER && state.shouldFinishClick && !S && r(e);
      },
      role: v ? "button" : void 0,
      tabIndex: v && !U ? 0 : -1
    })]
  });
});
let $$E0 = forwardRef(({
  children: e,
  hasExtraLongHoverTime: t,
  ...r
}, i) => {
  let {
    isHovered,
    hoverTarget,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    onTouchStart,
    onTouchEnd
  } = W(r.onClick, t);
  let p = "function" == typeof e ? e(isHovered, hoverTarget) : e;
  return jsx($$f1, {
    ...r,
    ref: i,
    isHovered,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onTouchStart,
    onTouchEnd,
    children: p
  });
});
export const I = $$E0;
export const J = $$f1;