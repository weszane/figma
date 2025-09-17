import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, Children, memo } from "react";
import { setupThemeContext } from "../905/614223";
import s from "classnames";
import { RecordableButton } from "../905/511649";
import { SvgComponent } from "../905/714743";
import { KindEnum } from "../905/129884";
import { En } from "../figma_app/613182";
import { _r } from "../905/291714";
import { bH, zr, EX, $9, x6, BB, _T, Hh, cN, Ec, Pq, k1, F$, zt, gK, bI, LJ, Qq, me, OW, Ln, y9 } from "../905/260831";
import { A } from "../6828/154709";
import { A as _$$A } from "../6828/343650";
var o = s;
export function $$g2({
  marginBottom: e,
  size: t,
  children: r,
  padding: i,
  menuRef: s,
  ariaLabel: l,
  role: d,
  tabIndex: c,
  ariaHidden: u,
  onBlurCapture: p,
  onFocus: h,
  propagateInputToFullscreen: m,
  testID: g,
  focusableDivTestId: f,
  darkModePreferred: E,
  editorTheme: y
}) {
  return jsx(setupThemeContext, {
    brand: y,
    mode: E ? "dark" : void 0,
    children: jsx("div", {
      ref: s,
      "aria-hidden": u,
      "aria-label": l,
      className: bH,
      "data-fullscreen-intercept": m,
      "data-testid": f,
      onBlurCapture: p,
      onFocus: h,
      role: d,
      tabIndex: c,
      children: jsx("div", {
        className: o()(zr, {
          [EX]: "small" === t
        }),
        style: {
          paddingRight: i,
          paddingLeft: i,
          marginBottom: e
        },
        "data-testid": g,
        children: r
      })
    })
  });
}
let $$f1 = forwardRef((e, t) => {
  let {
    id,
    svg,
    onClick,
    blurOnClick,
    onKeyDown,
    onMouseEnter,
    onMouseLeave,
    onPointerUp,
    onPointerDown,
    svgWidth,
    svgHeight,
    caret = "none",
    size,
    tooltip,
    tooltipShortcutActionKey,
    tooltipType,
    resourceId,
    recordingKey,
    active = "NONE",
    focused,
    disabled,
    svgStyle,
    buttonStyle,
    buttonChildrenStyle,
    useOriginalSrcFills_DEPRECATED,
    isNewSubmenu,
    ariaLabel,
    role,
    tabIndex,
    onboardingKey,
    testId
  } = e;
  let {
    ariaActiveDescendant,
    ariaControls
  } = e;
  return jsx($$E0, {
    ref: t,
    active,
    ariaActiveDescendant,
    ariaControls,
    ariaLabel,
    blurOnClick,
    buttonChildrenStyle,
    buttonStyle,
    caret,
    className: o()({
      [$9]: disabled
    }),
    disabled,
    focused,
    id,
    isNewSubmenu,
    onClick,
    onKeyDown,
    onMouseEnter,
    onMouseLeave,
    onPointerDown,
    onPointerUp,
    onboardingKey,
    recordingKey,
    resourceId,
    role,
    size,
    tabIndex,
    testId,
    tooltip,
    tooltipShortcutActionKey,
    tooltipType,
    children: jsx(SvgComponent, {
      svg,
      width: svgWidth,
      height: svgHeight,
      style: svgStyle,
      useOriginalSrcFills_DEPRECATED
    })
  });
});
let $$E0 = forwardRef((e, t) => {
  let {
    id,
    children,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onPointerUp,
    onPointerDown,
    onKeyDown,
    blurOnClick,
    disabled = !1,
    caret = "none",
    animateCaret = !1,
    size = "large",
    buttonStyle,
    buttonChildrenStyle,
    isNewSubmenu,
    isDesignInlineMenu,
    recordingKey,
    active = "NONE",
    focused,
    tooltip,
    tooltipShortcutActionKey,
    tooltipType,
    tooltipMaxWidth,
    resourceId,
    testId,
    className = "",
    ariaLabel,
    role,
    tabIndex,
    onboardingKey
  } = e;
  let {
    ariaControls,
    ariaActiveDescendant
  } = e;
  let W = _r();
  let K = Children.toArray(children);
  let Y = 1 === K.length && "string" == typeof K[0].props.children;
  let $ = function ({
    tooltip: e,
    shouldShowTooltips: t,
    tooltipType: r
  }) {
    return e && t ? r || KindEnum.TEXT : void 0;
  }({
    tooltip,
    shouldShowTooltips: W,
    tooltipType
  });
  let X = "combobox" === role && "NONE" !== active;
  return jsxs(RecordableButton, {
    "aria-activedescendant": X ? ariaActiveDescendant : void 0,
    "aria-checked": "switch" === role ? "NONE" !== active : void 0,
    "aria-controls": ariaControls,
    "aria-expanded": "combobox" === role ? "NONE" !== active : void 0,
    "aria-label": function ({
      ariaLabel: e,
      actualTooltipType: t,
      tooltip: r
    }) {
      return e ?? En({
        "data-tooltip-type": t ?? KindEnum.TEXT,
        "data-tooltip": r ?? ""
      });
    }({
      ariaLabel,
      actualTooltipType: $,
      tooltip
    }),
    "aria-owns": X ? ariaControls : void 0,
    "aria-pressed": "button" === role || null == role ? "NONE" !== active : void 0,
    className: o()({
      [x6]: !0,
      [BB]: !0,
      [_T]: isNewSubmenu,
      [Hh]: isDesignInlineMenu,
      [cN]: "none" !== caret && !!children,
      [Ec]: "none" !== caret && !children,
      [EX]: "small" === size,
      [Pq]: "SOFT" === active,
      [k1]: "NORMAL" === active,
      [F$]: "LOUD" === active,
      [zt]: Y,
      [gK]: !disabled,
      [bI]: focused,
      [className]: !!className
    }),
    "data-fullscreen-intercept": null == onKeyDown ? "true" : void 0,
    "data-onboarding-key": onboardingKey,
    "data-resource-id": resourceId || void 0,
    "data-testid": testId,
    "data-tooltip": tooltip,
    "data-tooltip-max-width": tooltipMaxWidth,
    "data-tooltip-shortcut-key": tooltipShortcutActionKey,
    "data-tooltip-show-above": !0,
    "data-tooltip-type": $,
    forwardedRef: t,
    id,
    onClick: y(onClick, disabled),
    onKeyDown: y(onKeyDown, disabled),
    onMouseEnter: y(onMouseEnter, disabled),
    onMouseLeave: y(onMouseLeave, disabled),
    onMouseUp: !disabled && blurOnClick ? e => {
      e.currentTarget.blur();
    } : void 0,
    onPointerDown: y(onPointerDown, disabled),
    onPointerUp: y(onPointerUp, disabled),
    recordingKey,
    role,
    style: buttonStyle,
    tabIndex: function (e, t) {
      return void 0 !== e ? e : "option" === t ? -1 : 0;
    }(tabIndex, role),
    children: [jsx("div", {
      className: o()({
        [LJ]: Y,
        [Qq]: !Y,
        [Hh]: isDesignInlineMenu,
        [EX]: "small" === size
      }),
      style: buttonChildrenStyle,
      children
    }), "none" !== caret && jsx(T, {
      caret,
      animateCaret,
      active
    })]
  });
});
function y(e, t) {
  return t ? void 0 : e;
}
export function $$b3({
  size: e = "tall",
  margin: t
}) {
  return jsx("div", {
    className: me,
    style: {
      height: "tall" === e ? 40 : 28,
      marginLeft: t,
      marginRight: t
    }
  });
}
let T = memo(({
  caret: e,
  animateCaret: t,
  active: r
}) => jsx(SvgComponent, {
  className: o()({
    [OW]: !0,
    [Ln]: t,
    [y9]: t && "LOUD" === r
  }),
  svg: "up" === e ? _$$A : A
}));
export const $n = $$E0;
export const K0 = $$f1;
export const W1 = $$g2;
export const wv = $$b3;