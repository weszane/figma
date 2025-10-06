import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useMemo, Children, useRef, useEffect, useCallback, cloneElement, forwardRef, PureComponent } from "react";
import { noop } from 'lodash-es';
import { setupThemeContext } from "../905/614223";
import { createMultiRefCallback } from "../figma_app/272902";
import l from "classnames";
import { handleUrlAction } from "../905/280005";
import { isCommandOrShift } from "../905/63728";
import { RecordingPureComponent, handleMouseEvent, SKIP_RECORDING } from "../figma_app/878298";
import { isInteractionOrEvalMode } from "../figma_app/897289";
import { SvgComponent } from "../905/714743";
import { S } from "../905/339549";
import { hideDropdownAction } from "../905/929976";
import { s4, Dm } from "../figma_app/8833";
import { TrackingProvider, withTrackedClick } from "../figma_app/831799";
import { shouldHandleMultiTouchOrPressure, stopPropagation, preventDefault } from "../figma_app/753501";
import { gD, FR, Rp, Ts, E7, zT, ep, Vi, tZ, DE, Wh, fG, Wm, DY, _S, rU, IZ, wY, uK, me, se, jv, o6 as _$$o, cY, z6, pH, bv } from "../905/255309";
import { A } from "../6828/954206";
import { A as _$$A } from "../6828/364616";
var d = l;
export function $$S3(e) {
  let [t, r] = useState(!1);
  let a = "label" in e;
  let s = "dropdownButton" in e;
  return jsxs("div", {
    className: d()(gD, e.className, t && FR, e.shouldRenderAutocompleteStyles && Rp),
    ...(e.notDraggable ? {
      "data-not-draggable": !0
    } : {}),
    children: [a && jsxs("div", {
      className: d()(Ts, e.noBorder && E7, e.noRightPadding && zT),
      onClick: () => r(!t),
      role: "menu",
      tabIndex: 0,
      children: [jsxs("div", {
        className: ep,
        children: [!!e.iconLabel && jsx("div", {
          className: Vi,
          children: e.iconLabel
        }), jsx("p", {
          children: e.label
        })]
      }), jsx(SvgComponent, {
        className: tZ,
        svg: _$$A
      })]
    }), s && jsx(e.dropdownButton, {
      onClick: () => r(!t)
    }), t && jsxs(Fragment, {
      children: [jsx("div", {
        className: d()(DE, e.dropdownOptionsClassName, e.rightAlignOptions && Wh, e.optionsBelowSelector && fG),
        onClick: e.stayOpenOnSelect ? void 0 : () => r(!t),
        role: "menu",
        tabIndex: 0,
        children: jsx(TrackingProvider, {
          name: e.menuTrackingContextName || "",
          enabled: !!e.menuTrackingContextName,
          properties: e.menuTrackingProperties,
          children: jsx($$A5, {
            options: e.options,
            hideDropdown: () => r(!1),
            shouldRenderAutocompleteStyles: e.shouldRenderAutocompleteStyles
          })
        })
      }), jsx($$B6, {
        closeDropdown: () => r(!1)
      })]
    })]
  });
}
export function $$v2(e) {
  let [t, r] = useState(e.focusContainerOnMount ? -1 : 0);
  let n = useMemo(() => Children.toArray(e.children || e.options).filter(e => "boolean" != typeof e), [e.children, e.options]);
  let s = useRef(Array(n.length));
  let o = useRef(document.activeElement);
  useEffect(() => {
    let e = s.current[t];
    e && (e.tabIndex = 0, e.focus());
  }, [t, s]);
  let l = useCallback((e, t) => {
    let n = s.current[e];
    n && (n.tabIndex = -1, n.focus());
    r(t);
  }, []);
  let d = useCallback(() => {
    let e = t - 1;
    for (let t of s.current) if (null == s.current[e]) e = e - 1 < 0 ? s.current.length - 1 : e - 1;else break;
    l(t, e);
  }, [t, l]);
  let c = useCallback(() => {
    let e = t + 1;
    for (let t of s.current) if (null == s.current[e]) e = e + 1 >= s.current.length ? 0 : e + 1;else break;
    l(t, e);
  }, [t, l]);
  return {
    childrenComponents: n,
    getSetChildRef: e => (e => {
      if ("boolean" != typeof e && (e.type === $$w7 || e.type === $$D1)) {
        let t = e.props;
        return !!(t.disabled || t.header);
      }
      return !1;
    })(n[e]) ? noop : t => s.current[e] = t,
    onKeyDown: r => {
      switch (r.stopPropagation(), r.nativeEvent && r.nativeEvent.stopImmediatePropagation(), r.key) {
        case "Escape":
          e.autofocusPrevElementOnEsc && o.current?.focus();
          e.hideDropdown();
          break;
        case "Tab":
          e.autofocusPrevElementOnTab && o.current?.focus();
          e.hideDropdown();
          break;
        case " ":
        case "Enter":
          {
            let r = s.current[t];
            r && r.click();
            e.autofocusPrevElementOnSelect && o.current?.focus();
            break;
          }
        case "Left":
        case "ArrowLeft":
          "horizontal" === e.orientation && d();
          break;
        case "Up":
        case "ArrowUp":
          "horizontal" !== e.orientation && d();
          break;
        case "Right":
        case "ArrowRight":
          "horizontal" === e.orientation && c();
          break;
        case "ArrowDown":
        case "Down":
          "horizontal" !== e.orientation && c();
          break;
        case "Home":
        case "PageUp":
          l(t, 0);
          break;
        case "End":
        case "PageDown":
          l(t, s.current.length - 1);
      }
    },
    onFocus: e => {
      if (e && e.target) {
        let r = s.current.indexOf(e.target);
        r >= 0 && l(t, r);
      }
    }
  };
}
export function $$A5(e) {
  let {
    childrenComponents,
    getSetChildRef,
    onKeyDown,
    onFocus
  } = $$v2(e);
  let {
    children,
    options,
    ...d
  } = e;
  return jsx($$C11, {
    ...d,
    onKeyDown,
    tabIndex: -1,
    children: Children.map(childrenComponents, (e, t) => cloneElement(e, {
      buttonRef: getSetChildRef(t),
      onFocus
    }))
  });
}
export function $$x10(e, t) {
  let [r, n] = useState(null);
  useEffect(() => {
    let r = e.current;
    if (r) {
      let e = r.getBoundingClientRect();
      let i = t.left;
      let a = t.top;
      i < 8 ? i = 8 : i + e.width > window.innerWidth - 8 && (i = window.innerWidth - 8 - e.width);
      a < 8 ? a = 8 : a + e.height > window.innerHeight - 8 && (a = window.innerHeight - 8 - e.height);
      n([i, a]);
    }
  }, [e, t.left, t.top]);
  return useMemo(() => r ? {
    ...t,
    left: r[0],
    top: r[1]
  } : {
    ...t,
    visibility: "hidden"
  }, [r, t]);
}
export let $$N4 = forwardRef(function ({
  style: e,
  ...t
}, r) {
  let a = useRef(null);
  let s = $$x10(a, e);
  return jsx($$j9, {
    dropdownRef: createMultiRefCallback(a, r),
    style: s,
    ...t
  });
});
export class $$C11 extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.stopPropagationForPointerDown = e => {
      shouldHandleMultiTouchOrPressure() && stopPropagation(e);
    };
    this.onClick = handleMouseEvent(this, "click", e => {
      if (!this.props.onClick) return SKIP_RECORDING;
      this.props.onClick(e);
    });
  }
  render() {
    return jsx("div", {
      ref: this.props.dropdownRef,
      "aria-labelledby": this.props["aria-labelledby"],
      className: d()(Wm, this.props.className, {
        [DY]: this.props.positionAbsolute,
        [_S]: this.props.positionFixed,
        [rU]: this.props.shouldRenderAutocompleteStyles,
        [s4]: this.props.preventZoom,
        [Dm]: this.props.preventEventCapture
      }),
      "data-cancel-insertable-resource-drag-and-drop": !0,
      "data-onboarding-key": this.props.dataOnboardingKey,
      "data-testid": this.props["data-testid"],
      id: this.props.id,
      onClick: this.onClick,
      onContextMenu: preventDefault,
      onFocus: this.props.onFocus,
      onKeyDown: this.props.onKeyDown,
      onMouseDown: stopPropagation,
      onPointerDown: this.stopPropagationForPointerDown,
      onScroll: this.props.stopScrollPropagation ? stopPropagation : this.props.onScroll,
      onTouchStart: stopPropagation,
      onWheel: this.props.preventZoom ? void 0 : stopPropagation,
      role: "menu",
      style: this.props.style,
      tabIndex: this.props.tabIndex ?? 0,
      children: this.props.children
    });
  }
}
$$C11.displayName = "Dropdown";
export class $$w7 extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.mouseOverTimestamp = 0;
    this.state = {
      hover: !1
    };
    this.onDragStart = e => {
      e.preventDefault();
    };
    this.onPointerOver = e => {
      this.props.onPointerOver && this.props.onPointerOver();
      this.setState({
        hover: !0
      });
      this.props.onHover && this.props.onHover(!0);
      this.props.href || (this.mouseOverTimestamp = Number(e.timeStamp));
    };
    this.onPointerOut = e => {
      this.props.onPointerOut && this.props.onPointerOut();
      this.setState({
        hover: !1
      });
      this.props.onHover && this.props.onHover(!1);
    };
    this.onPointerUp = handleMouseEvent(this, "mouseup", e => {
      if (!this.props.href) {
        if (this.props.onPointerUp) {
          this.props.onPointerUp(e);
          return;
        }
        if (Number(e.timeStamp) - this.mouseOverTimestamp > 20) {
          let t = e.target;
          null != t.click && (this.mouseUpTimer = setTimeout(t.click.bind(t), 1));
        }
      }
    });
    this.onTouchEnd = e => {
      let t = e.target;
      if (t.click && (e.preventDefault(), t && e.changedTouches)) {
        let r = e.changedTouches[0];
        document.elementFromPoint(r.clientX, r.clientY) === t && t.click();
      }
    };
    this.onClick = handleMouseEvent(this, "click", e => {
      this.props.href && isCommandOrShift(e) || (this.props.href ? handleUrlAction(this.props.href, e) : clearTimeout(this.mouseUpTimer), this.props.onClick?.(e));
    });
    this.ariaRole = () => this.props.header ? "presentation" : "role" in this.props ? this.props.role ?? "menuitem" : "menuitem";
  }
  render() {
    let e = this.props.disabled || this.props.header;
    let t = d()(e ? IZ : {
      [wY]: this.state.hover || this.props.simulateHover,
      [uK]: !0
    }, this.props.className);
    return jsx("a", {
      ref: this.props.buttonRef,
      "aria-checked": "aria-checked" in this.props ? this.props["aria-checked"] : void 0,
      "aria-disabled": this.props.disabled,
      className: t,
      "data-dropdown-tooltip": this.props.tooltip,
      "data-fullscreen-intercept": this.props["data-fullscreen-intercept"],
      "data-onboarding-key": this.props.onboardingKey,
      "data-search-click-action": this.props["data-search-click-action"],
      "data-testid": this.props.recordingKey,
      href: this.props.href,
      id: this.props.id,
      onClick: e ? void 0 : this.onClick,
      onDragStart: this.onDragStart,
      onFocus: this.props.onFocus,
      onKeyDown: this.props.onKeyDown,
      onMouseDown: this.props.onMouseDown,
      onPointerOut: e ? void 0 : this.onPointerOut,
      onPointerOver: e ? void 0 : this.onPointerOver,
      onPointerUp: e ? void 0 : this.onPointerUp,
      onTouchEnd: this.onTouchEnd,
      rel: "noopener",
      role: this.ariaRole(),
      tabIndex: -1,
      target: this.props.target,
      children: this.props.children
    });
  }
}
$$w7.displayName = "Option";
export let $$O8 = withTrackedClick($$w7);
export class $$R14 extends PureComponent {
  constructor() {
    super(...arguments);
    this.onClick = e => {
      e.stopPropagation();
    };
  }
  render() {
    let e = me;
    this.props.className && (e += ` ${this.props.className}`);
    return jsx("div", {
      className: e,
      onClick: this.onClick,
      style: this.props.style,
      "data-testid": this.props.dataTestId ?? "dropdown-separator",
      children: jsx("div", {
        className: se
      })
    });
  }
}
$$R14.displayName = "Separator";
class L extends PureComponent {
  constructor() {
    super(...arguments);
    this.onClick = e => {
      e.stopPropagation();
    };
  }
  render() {
    let e = jv;
    this.props.className && (e += ` ${this.props.className}`);
    return jsx("div", {
      className: e,
      onClick: this.onClick,
      style: this.props.style,
      "data-testid": this.props.dataTestId ?? "dropdown-indented-separator",
      children: jsx("div", {
        className: se
      })
    });
  }
}
L.displayName = "IndentedSeparator";
export var $$P0 = (e => (e.Checkmark = "Checkmark", e.Checkbox = "Checkbox", e))($$P0 || {});
export class $$D1 extends RecordingPureComponent {
  render() {
    return jsxs($$w7, {
      ...this.props,
      className: d()(_$$o, "Checkbox" === this.props.displayType && this.props.nested && cY, this.props.className),
      "aria-checked": this.props.checked,
      role: "role" in this.props ? this.props.role : void 0,
      children: ["Checkbox" === this.props.displayType ? jsx(setupThemeContext, {
        mode: "dark",
        children: jsx("span", {
          className: z6,
          children: jsx(S, {
            disabled: this.props.disabled,
            checked: this.props.checked,
            mixed: this.props.mixed
          })
        })
      }) : this.props.checked ? jsx(SvgComponent, {
        className: z6,
        svg: A,
        dataTestId: "dropdown-check-icon"
      }) : jsx("span", {
        className: z6
      }), this.props.children]
    });
  }
}
$$D1.displayName = "CheckableOption";
$$D1.defaultProps = {
  displayType: "Checkmark"
};
export class $$k15 extends RecordingPureComponent {
  render() {
    return jsxs($$D1, {
      ...this.props,
      children: [jsx("div", {
        children: this.props.primaryText
      }), !!this.props.secondaryText && jsx("div", {
        className: pH,
        children: this.props.secondaryText
      })]
    });
  }
}
let $$M12 = withTrackedClick($$D1);
let $$F13 = withTrackedClick($$k15);
export class $$j9 extends RecordingPureComponent {
  render() {
    return jsxs(Fragment, {
      children: [jsx($$C11, {
        ...this.props
      }), U(this.props) ? jsx($$B6, {
        closeDropdown: this.props.closeDropdown,
        recordingKey: "dropdownModalScrim",
        preventEventCapture: this.props.preventEventCapture
      }) : jsx($$B6, {
        dispatch: this.props.dispatch,
        recordingKey: "dropdownModalScrim",
        preventEventCapture: this.props.preventEventCapture
      })]
    });
  }
}
$$j9.displayName = "DropdownWithScrim";
let U = e => !!e.closeDropdown;
export class $$B6 extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.mouseMotionSinceMouseDown = 0;
    this.MENU_CLOSE_MOUSE_MOVE_SENSITIVITY = 5;
    this.closeDropdown = () => {
      U(this.props) ? this.props.closeDropdown() : this.props.dispatch(hideDropdownAction());
    };
    this.onMouseDown = handleMouseEvent(this, "mousedown", e => {
      this.mouseMotionSinceMouseDown = 0;
      this.closeDropdown();
      e.stopPropagation();
    });
    this.onMouseMove = handleMouseEvent(this, "mousemove", e => {
      if (isInteractionOrEvalMode()) {
        if (!(this.mouseMotionSinceMouseDown < this.MENU_CLOSE_MOUSE_MOVE_SENSITIVITY)) return SKIP_RECORDING;
        this.mouseMotionSinceMouseDown += this.MENU_CLOSE_MOUSE_MOVE_SENSITIVITY;
      } else {
        this.mouseMotionSinceMouseDown += Math.abs(e.nativeEvent.movementX);
        this.mouseMotionSinceMouseDown += Math.abs(e.nativeEvent.movementY);
      }
    });
    this.onMouseUp = handleMouseEvent(this, "mouseup", e => {
      this.mouseMotionSinceMouseDown >= this.MENU_CLOSE_MOUSE_MOVE_SENSITIVITY && (this.closeDropdown(), e.stopPropagation());
    });
  }
  render() {
    return jsx("div", {
      className: d()(bv, this.props.preventEventCapture && Dm),
      onMouseDown: this.onMouseDown,
      onMouseMove: this.onMouseMove,
      onMouseUp: this.onMouseUp,
      onContextMenu: preventDefault,
      "data-does-not-dismiss-modal": !0
    });
  }
}
export const Jn = $$P0;
export const MM = $$D1;
export const OR = $$v2;
export const Ve = $$S3;
export const Vq = $$N4;
export const X3 = $$A5;
export const X9 = $$B6;
export const c$ = $$w7;
export const gS = $$O8;
export const gw = $$j9;
export const l4 = $$x10;
export const ms = $$C11;
export const rr = $$M12;
export const ru = $$F13;
export const wv = $$R14;
export const y0 = $$k15;