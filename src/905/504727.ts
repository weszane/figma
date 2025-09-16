import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PureComponent, Children, cloneElement, Component } from "react";
import { connect } from "react-redux";
import { a as _$$a } from "../905/339331";
import { r as _$$r } from "../905/571562";
import { cZ } from "../figma_app/272902";
import d from "classnames";
import { useHandleKeyboardEvent } from "../figma_app/878298";
import { Point } from "../905/736624";
import { ms, gw, OR } from "../figma_app/236327";
import { P } from "../905/347284";
import { hideDropdownAction } from "../905/929976";
import { vL } from "../905/826900";
var c = d;
let _ = "pointing_dropdown--chevron--eYKwT";
export var $$A2 = (e => (e[e.DEFAULT = 0] = "DEFAULT", e[e.LIGHT = 1] = "LIGHT", e[e.MATCH_BACKGROUND = 2] = "MATCH_BACKGROUND", e))($$A2 || {});
export function $$y4(e) {
  return 1 === e.type ? {
    type: 1
  } : 2 === e.type ? {
    type: 2
  } : 0 === e.type ? {
    type: 0
  } : {
    type: void 0
  };
}
class b extends PureComponent {
  constructor(e) {
    super(e);
    this.onKeyDownFromFullscreen = e => {
      "Escape" === e.event.key && this.props.dispatch && (e.accept(), this.props.dispatch(hideDropdownAction()));
    };
    this.getContentLocation = () => {
      let e = this.props.lean || "center";
      let t = void 0 !== this.props.leanPadding ? this.props.leanPadding : 16;
      let i = this.props.targetRect;
      let n = this.contentEl.getBoundingClientRect();
      let r = this.props.displayAboveTarget ? i.top - 7 + 2 : this.props.displayOverTarget ? i.top : i.bottom + 7 - 2;
      switch (e) {
        case "center":
          return new Point(i.left + i.width / 2 - n.width / 2, r);
        case "left":
          return new Point(i.right + t - n.width, r);
        case "right":
          return new Point(i.left - t, r);
      }
    };
    this.ensureContentOnScreen = () => {
      let e = this.getContentLocation();
      let t = this.props.windowPadding || 8;
      e.x = Math.max(8 + (this.props.minLeftMargin || 0), e.x);
      let i = this.contentEl.getBoundingClientRect();
      let n = e.x + i.width;
      let r = e.y + (this.props.displayAboveTarget ? -1 : 1) * i.height;
      let a = window.innerWidth - t;
      let s = window.innerHeight - (t + (this.props.minBottomMargin || 0));
      let o = !1;
      n > a && (e.x -= n - a);
      r > s && (e.y -= r - s, o = !0);
      e.y < 9 && (e.y = 9, o = !0);
      e.x = Math.max(8 + (this.props.minLeftMargin || 0), e.x);
      let l = a - e.x;
      this.setState({
        contentTop: Math.round(e.y),
        contentLeft: Math.round(e.x),
        didEnsureContentOnScreen: o,
        windowMaxWidth: l
      });
    };
    this.contentEl = null;
    this.contentRef = e => {
      this.contentEl = e;
      cZ(this.props.contentRef, e);
      this.contentEl && this.ensureContentOnScreen();
    };
    this.dropdownOptionsContainer = null;
    this.dropdownOptionsContainerRef = e => {
      e && (this.dropdownOptionsContainer = e, this.observer.observe(e, {
        childList: !0,
        subtree: !0
      }));
    };
    this.calculateMaxDropdownHeight = e => {
      let t = this.props.windowPadding || 8;
      return this.props.maxHeight || (this.props.displayAboveTarget ? this.props.targetRect.top - t - 16 : e - this.state.contentTop - t - 16);
    };
    this.getStylesForType = e => {
      switch (this.props.type) {
        case 1:
          return {
            backgroundColor: "white",
            boxShadow: "0px 5px 17px rgba(0, 0, 0, 0.2), 0px 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 0 0 0.5px rgba(0, 0, 0, 0.06)",
            ...("arrow" === e ? {
              border: "0.5px solid rgba(0, 0, 0, 0.2)"
            } : {})
          };
        case 2:
          return {
            backgroundColor: "var(--color-bg, white)",
            boxShadow: "var(--elevation-400-menu-panel)",
            ...("arrow" === e ? {
              border: "0.5px solid rgba(0, 0, 0, 0.2)"
            } : {})
          };
        case 0:
        case void 0:
          return {};
      }
    };
    this.state = {
      contentTop: 0,
      contentLeft: 0,
      didEnsureContentOnScreen: !1,
      previousFocusedElement: document.activeElement,
      windowMaxWidth: window.innerWidth
    };
    this.observer = new MutationObserver(() => {
      this.forceUpdate();
    });
  }
  componentDidMount() {
    this.props.focusContainerOnMount && this.contentEl?.focus();
  }
  componentDidUpdate(e, t) {
    (e.targetRect.bottom !== this.props.targetRect.bottom || e.targetRect.left !== this.props.targetRect.left || e.targetRect.right !== this.props.targetRect.right || e.targetRect.top !== this.props.targetRect.top || e.targetRect.width !== this.props.targetRect.width || e.targetRect.height !== this.props.targetRect.height) && this.ensureContentOnScreen();
  }
  componentWillUnmount() {
    this.props.autofocusPrevOnDismount && this.state.previousFocusedElement && this.state.previousFocusedElement.focus();
  }
  renderDropdownOptions() {
    let e = jsx("div", {
      ref: this.dropdownOptionsContainerRef,
      "data-onboarding-key": this.props.onboardingKey,
      className: "horizontal" === this.props.orientation ? "pointing_dropdown--horizontalOrientation--z9DRY" : "",
      children: this.props.children
    });
    return !this.props.disableDropdownScrollContainer && this.dropdownOptionsContainer ? jsx($$E0, {
      maxDropdownHeight: this.calculateMaxDropdownHeight,
      dropdownChildrenHeight: this.dropdownOptionsContainer.clientHeight,
      autoHeight: this.props.autoHeight,
      ref: this.props.scrollContainerRef,
      children: e
    }) : e;
  }
  render() {
    let e = this.props.minWidth ?? 200;
    let t = this.props.maxHeight || "none";
    let i = {
      top: this.props.displayAboveTarget ? void 0 : this.state.contentTop,
      bottom: this.props.displayAboveTarget ? window.innerHeight - this.state.contentTop : void 0,
      left: this.state.contentLeft,
      maxHeight: t,
      minWidth: e,
      maxWidth: this.props.maxWidth || this.state.windowMaxWidth,
      ...this.getStylesForType("dropdown"),
      textAlign: this.props.textAlign || "left"
    };
    let r = this.props.targetRect;
    let a = this.props.arrowOffsetFromRectLeft ? r.left + this.props.arrowOffsetFromRectLeft - 5.5 : r.left + r.width / 2 - 5.5;
    let s = this.props.displayAboveTarget ? r.top - 7 : r.bottom;
    let o = this.props.hidePointWhenContentOffScreen && this.state.didEnsureContentOnScreen;
    let l = c()("pointing_dropdown--content--hfmPL", {
      "pointing_dropdown--ui3NoPaddingDropdown--YQjHQ": this.props.removeUI3BorderPadding
    });
    let d = this.props.propagateCloseClick ? jsxs(ms, {
      "aria-labelledby": this.props["aria-labelledby"],
      className: l,
      dropdownRef: this.contentRef,
      id: this.props.id,
      onFocus: this.props.onFocus,
      onKeyDown: this.props.onKeyDown,
      preventEventCapture: this.props.preventEventCapture,
      preventZoom: this.props.preventZoom,
      style: i,
      tabIndex: this.props.tabIndex ?? void 0,
      children: [this.renderDropdownOptions(), this.props.footer]
    }) : jsx(gw, {
      "aria-labelledby": this.props["aria-labelledby"],
      className: l,
      closeDropdown: this.props.closeDropdown,
      dispatch: this.props.dispatch,
      dropdownRef: this.contentRef,
      id: this.props.id,
      onFocus: this.props.onFocus,
      onKeyDown: this.props.onKeyDown,
      preventEventCapture: this.props.preventEventCapture,
      preventZoom: this.props.preventZoom,
      style: i,
      tabIndex: this.props.tabIndex ?? void 0,
      children: this.renderDropdownOptions()
    });
    let u = {
      left: a + "px",
      top: (this.props.displayAboveTarget ? s - 5 : s + 2) + "px",
      transform: this.props.displayAboveTarget ? "rotate(225deg)" : void 0,
      opacity: o ? 0 : 1,
      ...this.getStylesForType("arrow")
    };
    let p = this.props.dataTestId ?? "pointingDropdown";
    return jsx(vL, {
      name: "pointingDropdown",
      handleKeyDown: this.onKeyDownFromFullscreen,
      focusOnMount: !0,
      style: {
        display: "contents"
      },
      children: jsxs("div", {
        className: `pointing_dropdown--root--eFNXS ${this.props.className || ""}`,
        "data-testid": p,
        children: [!!this.props.showPoint && jsx("div", {
          className: "pointing_dropdown--arrow--CkDK3 _overlayBase--_overlayBase--Rkj8l",
          style: u
        }), d]
      })
    });
  }
}
b.displayName = "PointingDropdownInner";
b.defaultProps = {
  showPoint: !0
};
export let $$v1 = connect()(b);
export function $$I3(e) {
  let {
    childrenComponents,
    getSetChildRef,
    onKeyDown,
    onFocus
  } = OR(e);
  let o = useHandleKeyboardEvent(e.recordingKey, "keydown", e => onKeyDown(e));
  return jsx($$v1, {
    "aria-labelledby": e["aria-labelledby"],
    arrowOffsetFromRectLeft: e.arrowOffsetFromRectLeft,
    className: e.className,
    disableDropdownScrollContainer: !0,
    displayAboveTarget: e.displayAboveTarget,
    displayOverTarget: e.displayOverTarget,
    focusContainerOnMount: e.focusContainerOnMount,
    hidePointWhenContentOffScreen: e.hidePointWhenContentOffScreen,
    id: e.id,
    lean: e.lean,
    leanPadding: e.leanPadding,
    maxHeight: e.maxHeight,
    maxWidth: e.maxWidth,
    minWidth: e.minWidth,
    onFocus: e.onFocus,
    onKeyDown: o,
    orientation: e.orientation,
    propagateCloseClick: e.propagateCloseClick,
    showPoint: e.showPoint,
    tabIndex: -1,
    targetRect: e.targetRect,
    textAlign: e.textAlign,
    ...$$y4(e),
    children: Children.map(childrenComponents, (e, t) => cloneElement(e, {
      buttonRef: getSetChildRef(t),
      onFocus
    }))
  });
}
export class $$E0 extends Component {
  constructor(e) {
    super(e);
    this.updateWindowHeight = () => {
      this.setState({
        windowHeight: window.innerHeight
      });
    };
    this.scrollContainerRef = e => {
      this.scrollContainer = e;
    };
    this.scrollBy = e => {
      let t = this.scrollContainer.getScrollTop() + e;
      this.scrollContainer.scrollTo(t);
    };
    this.scrollToTop = () => {
      this.scrollContainer.scrollToTop();
    };
    this.scrollToBottom = () => {
      this.scrollContainer.scrollToBottom();
    };
    this.getScrollTop = () => this.scrollContainer.getScrollTop();
    this.getScrollBottom = () => this.scrollContainer.getScrollTop() + this.props.maxDropdownHeight(this.state.windowHeight);
    this.updateScrollIndicatorVisibility = () => {
      if (!this.scrollContainer) return;
      let e = this.scrollContainer.getScrollTop();
      let t = this.scrollContainer.getScrollHeight();
      let i = 0 != e;
      let n = t - e > this.props.maxDropdownHeight(this.state.windowHeight);
      (i != this.state.showTopScrollIndicator || n != this.state.showBottomScrollIndicator) && this.setState({
        showTopScrollIndicator: i,
        showBottomScrollIndicator: n
      });
    };
    this.onScroll = (e, t) => {
      this.updateScrollIndicatorVisibility();
    };
    this.scrollInterval = void 0;
    this.onMouseEnterIndicator = e => t => {
      this.scrollInterval && clearInterval(this.scrollInterval);
      this.scrollInterval = setInterval(() => {
        this.scrollContainer && this.scrollBy(e);
      }, 25);
    };
    this.onMouseLeaveIndicator = e => {
      clearInterval(this.scrollInterval);
    };
    this.onClickIndicator = e => {
      e.stopPropagation();
    };
    this.onWheelIndicator = e => {
      this.scrollContainer && this.scrollBy(e.deltaY);
    };
    this.state = {
      windowHeight: window.innerHeight,
      showTopScrollIndicator: !1,
      showBottomScrollIndicator: e.dropdownChildrenHeight > e.maxDropdownHeight(window.innerHeight)
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowHeight);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowHeight);
  }
  componentDidUpdate(e, t) {
    (t.windowHeight !== this.state.windowHeight || e.dropdownChildrenHeight !== this.props.dropdownChildrenHeight) && (this.props.dropdownChildrenHeight > this.props.maxDropdownHeight(this.state.windowHeight) ? this.updateScrollIndicatorVisibility() : (this.state.showTopScrollIndicator || this.state.showBottomScrollIndicator) && this.setState({
      showTopScrollIndicator: !1,
      showBottomScrollIndicator: !1
    }));
  }
  renderScrollIndicators() {
    let e = this.state.showTopScrollIndicator ? {} : {
      display: "none"
    };
    let t = this.state.showBottomScrollIndicator ? {} : {
      display: "none"
    };
    return jsxs(Fragment, {
      children: [jsx("div", {
        className: "pointing_dropdown--topScrollIndicator--Cke6H pointing_dropdown--scrollIndicator--cvX-K",
        style: e,
        onMouseEnter: this.onMouseEnterIndicator(-8),
        onMouseLeave: this.onMouseLeaveIndicator,
        onClick: this.onClickIndicator,
        onWheel: this.onWheelIndicator,
        children: jsx("div", {
          className: _,
          children: jsx(_$$a, {})
        })
      }), jsx("div", {
        className: "pointing_dropdown--bottomScrollIndicator--a39aF pointing_dropdown--scrollIndicator--cvX-K",
        style: t,
        onMouseEnter: this.onMouseEnterIndicator(8),
        onMouseLeave: this.onMouseLeaveIndicator,
        onClick: this.onClickIndicator,
        onWheel: this.onWheelIndicator,
        children: jsx("div", {
          className: _,
          children: jsx(_$$r, {})
        })
      })]
    });
  }
  render() {
    let e = Math.min(this.props.maxDropdownHeight(this.state.windowHeight), this.props.dropdownChildrenHeight);
    return jsxs(Fragment, {
      children: [jsx(P, {
        hideScrollbar: !0,
        height: this.props.autoHeight ? void 0 : e,
        onScroll: this.onScroll,
        ref: this.scrollContainerRef,
        children: this.props.children
      }), this.renderScrollIndicators()]
    });
  }
}
$$E0.displayName = "DropdownScrollContainer";
export const g1 = $$E0;
export const Cf = $$v1;
export const it = $$A2;
export const Jz = $$I3;
export const UV = $$y4;