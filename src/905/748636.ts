import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useId, useState, useImperativeHandle, useEffect, useCallback, useLayoutEffect, Component } from "react";
import { xb, vA } from "../figma_app/465776";
import { n as _$$n } from "../vendor/547481";
import { parsePxInt } from "../figma_app/783094";
import { ZC } from "../figma_app/39751";
import { Point, isPointInRect } from "../905/736624";
import { Dm } from "../figma_app/8833";
import { I_, G5, em, lq, Ij, E0 } from "../figma_app/792958";
import { mq, b2 } from "../905/858282";
import { Flg } from "../figma_app/27776";
import { Np } from "../905/175194";
let $$g6 = parsePxInt(Flg) + 1;
let f = {
  x: "left",
  y: "top"
};
export var $$_5 = (e => (e[e.SKIP_ENSURE_MODAL_ON_SCREEN = 0] = "SKIP_ENSURE_MODAL_ON_SCREEN", e[e.CALL_ENSURE_MODAL_ON_SCREEN = 1] = "CALL_ENSURE_MODAL_ON_SCREEN", e))($$_5 || {});
export let $$A0 = forwardRef(function ({
  beMoreAccessible: e,
  ...t
}, i) {
  let a = useRef(null);
  let s = useId();
  let [o, c] = useState(t.initialWidth);
  let [u, p] = useState(null != t.initialHeight ? t.initialHeight + $$g6 : void 0);
  let [m, h] = useState(t.initialPosition);
  useImperativeHandle(i, () => ({
    ensureModalOnScreen: () => a.current?.ensureModalOnScreen(),
    getCurrentContentSize: () => a.current?.getCurrentContentSize(),
    getEl: () => a.current?.getEl(),
    setTransform: e => a.current?.setTransform(e)
  }));
  let f = ZC(t);
  useEffect(() => {
    let e = f?.initialWidth !== t.initialWidth;
    let i = f?.initialHeight !== t.initialHeight;
    e && c(t.initialWidth);
    i && p(null != t.initialHeight ? t.initialHeight + $$g6 : void 0);
  }, [f?.initialHeight, f?.initialWidth, t.initialHeight, t.initialWidth]);
  useEffect(() => {
    t.initialHeight || t.allowAutoExpanding || a.current?.resizeModalHeight();
  }, [a, t.allowAutoExpanding, t.initialHeight]);
  let _ = useCallback(() => {
    if (!a.current) return;
    let e = !a.current.state.shouldCallEnsureModalIsOnScreen;
    (t.alwaysEnsureModalOnScreen || t.alwaysEnsureHeaderModalOnScreen) && e && a.current.setState({
      shouldCallEnsureModalIsOnScreen: !0
    });
  }, [a, t.alwaysEnsureHeaderModalOnScreen, t.alwaysEnsureModalOnScreen]);
  let A = useCallback(() => {
    h(t.initialPosition);
    _();
  }, [t.initialPosition, _]);
  useLayoutEffect(() => {
    let e = !f?.initialPosition.equals(t.initialPosition);
    let i = a.current?.state.hasCustomPosition ?? !1;
    if (e && !i) {
      if (t.useOnScreenInitialPosition) {
        let e = f?.initialPosition ?? t.initialPosition;
        let i = Point.subtract(e, t.initialPosition);
        h(m.subtract(i));
      } else h(t.initialPosition);
      _();
    }
  }, [t.initialPosition, t.useOnScreenInitialPosition, f?.initialPosition, m, t.alwaysEnsureModalOnScreen, t.alwaysEnsureHeaderModalOnScreen, a, _]);
  useLayoutEffect(() => {
    let t = a.current?.getEl();
    e && t && t.focus();
  }, []);
  let y = e ? {
    titleId: s,
    tabIndex: t.tabIndex ?? -1
  } : {};
  return jsx($$b4, {
    ...t,
    beMoreAccessible: e,
    ...y,
    ref: a,
    height: u,
    position: m,
    resetPositionToInitial: A,
    setHeight: p,
    setPosition: h,
    setWidth: c,
    width: o
  });
});
class y extends Component {
  constructor(e) {
    super(e);
    this.el = void 0;
    this.getEl = () => this.el;
    this.frameEl = void 0;
    this.inBounds = !1;
    this.getHeight = e => Math.min(e, this.props.maxHeight || e);
    this.getWidth = e => Math.min(e, this.props.maxWidth || e);
    this.minBottomMargin = () => this.props.minBottomMargin ?? I_;
    this.minTopMargin = () => this.props.minTopMargin ?? G5;
    this.minLeftMargin = () => this.props.minLeftMargin ?? em;
    this.minRightMargin = () => this.props.minRightMargin ?? lq;
    this.resizeModalHeight = () => {
      if (!this.el) return;
      let e = this.el.style.height;
      this.el.style.height = "";
      let t = this.el.getBoundingClientRect();
      this.el.style.height = e;
      this.props.height !== t.height && (this.props.setHeight(this.getHeight(t.height)), this.props.acceptHeight && this.props.acceptHeight(t.height));
    };
    this.lastInnerWidth = window.innerWidth;
    this.getOnScreenPositionOfHeader = e => {
      let {
        top,
        width,
        left
      } = e.getBoundingClientRect();
      let r = new DOMRect(left, top, width, $$g6);
      return this.getOnScreenPositionOfBoundingRect(r);
    };
    this.getOnScreenPositionOfElement = e => this.getOnScreenPositionOfBoundingRect(e.getBoundingClientRect());
    this.getOnScreenPositionOfBoundingRect = e => {
      let {
        top,
        bottom,
        width,
        height,
        right,
        left
      } = e;
      let o = this.props.position.y;
      top < this.minTopMargin() ? o = "top" === this.state.constraints.y ? this.minTopMargin() : this.minBottomMargin() : !this.props.canRenderBelowViewport && bottom + this.minBottomMargin() > window.innerHeight && (o = "top" === this.state.constraints.y ? Math.max(this.minTopMargin(), window.innerHeight - (height + this.minBottomMargin())) : this.minBottomMargin());
      let l = this.props.position.x;
      let c = this.lastInnerWidth - l;
      let u = window.innerWidth - left;
      right > window.innerWidth - this.minRightMargin() && u < c && (l = window.innerWidth - c);
      this.props.allowPartialHeaderOnScreen ? right < this.minLeftMargin() + 40 ? l = "left" === this.state.constraints.x ? 40 - width : 40 : left > window.innerWidth - this.minRightMargin() - 40 && (l = "left" === this.state.constraints.x ? window.innerWidth - this.minRightMargin() - 40 : window.innerWidth - this.minRightMargin() - width - 40) : left < this.minLeftMargin() ? l = "left" === this.state.constraints.x ? this.minLeftMargin() : this.minLeftMargin() + width : right > window.innerWidth - this.minRightMargin() && (l = "left" === this.state.constraints.x ? window.innerWidth - this.minRightMargin() - width : window.innerWidth - this.minRightMargin());
      return new Point(l, o);
    };
    this.ensureModalOnScreen = _$$n(100, () => {
      let e;
      this.el && ((e = this.props.alwaysEnsureHeaderModalOnScreen && !this.props.alwaysEnsureModalOnScreen ? this.getOnScreenPositionOfHeader(this.el) : this.getOnScreenPositionOfElement(this.el)).equals(this.props.position) || this.props.setPosition(e), this.lastInnerWidth = window.innerWidth);
    });
    this.containerRef = e => {
      this.el = e;
    };
    this.frameRef = e => {
      this.frameEl = e;
    };
    this.observer = new ResizeObserver(e => {
      for (let t of e) this.frameEl === t.target && this.ensureModalOnScreen();
    });
    this.onDragStateChange = (e, t) => {
      switch (e) {
        case mq.Active:
          {
            let e = new Point(this.el.offsetLeft, this.el.offsetTop);
            let i = new Point(t.pageX, t.pageY);
            this.setState({
              constraints: f,
              startingDragPosition: {
                elementPosition: e,
                mousePosition: i
              }
            });
            this.props.setPosition(e);
            break;
          }
        case mq.Dragging:
          this.props.onDragStart?.(t);
          break;
        case mq.None:
          {
            let e = this.props.onDragEnd?.(this.props.position) ?? 1;
            this.setState({
              startingDragPosition: null
            });
            e && (this.props.alwaysEnsureModalOnScreen || this.props.alwaysEnsureHeaderModalOnScreen) && this.ensureModalOnScreen();
            break;
          }
        default:
          xb(e);
      }
    };
    this.onDrag = e => {
      if (!this.state.startingDragPosition) return;
      let t = this.props.width || 0;
      let i = Ij(e, this.state.startingDragPosition);
      if (this.props.allowPartialHeaderOnScreen || (i = i.clampX({
        x: -(t / 2),
        width: window.innerWidth
      })), this.setState({
        hasCustomPosition: !0
      }), this.props.setPosition(i), this.props.bounds) {
        let e = isPointInRect(this.props.bounds, i);
        e && !this.inBounds ? (this.props.onEnterBound?.(), this.inBounds = !0) : this.inBounds && !e && (this.props.onLeaveBound?.(), this.inBounds = !1);
      }
    };
    this.onResize = (e, t) => {
      let i = E0(e, {
        ...t,
        maxHeight: this.props.maxHeight,
        maxWidth: this.props.maxWidth,
        minHeight: this.props.minHeight,
        minWidth: this.props.minWidth
      });
      i && (this.setState({
        hasCustomPosition: !0,
        constraints: {
          x: "left",
          y: "top"
        }
      }), this.props.setWidth(i.width), this.props.setHeight(i.height), this.props.setPosition(i.position), this.props.onResize?.({
        width: i.width,
        height: i.height
      }));
    };
    this.state = {
      hidden: e.hidden,
      constraints: e.initialConstraints || f,
      startingDragPosition: null,
      hasCustomPosition: !1,
      showArrow: !0,
      shouldCallEnsureModalIsOnScreen: !1
    };
  }
  componentDidMount() {
    if (this.props.width && this.props.height || this.props.allowAutoExpanding) this.ensureModalOnScreen();else {
      let {
        width,
        height
      } = this.el.getBoundingClientRect();
      this.props.width ? this.props.setHeight(this.getHeight(height)) : this.props.height ? this.props.setWidth(this.getWidth(width)) : (this.props.setWidth(this.getWidth(width)), this.props.setHeight(this.getHeight(height)));
    }
    window.addEventListener("resize", this.ensureModalOnScreen);
    let e = this.props.allowResizeHeight || this.props.allowResizeWidth;
    this.frameEl && !e && this.observer.observe(this.frameEl);
    this.el && this.props.acceptHeight && this.props.acceptHeight(this.el.getBoundingClientRect().height);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.ensureModalOnScreen);
    this.observer.disconnect();
  }
  componentDidUpdate(e, t, i) {
    let n = !1;
    this.state.hasCustomPosition ? this.state.showArrow && this.setState({
      showArrow: !1
    }) : (e.initialConstraints?.x !== this.props.initialConstraints?.x || e.initialConstraints?.y !== this.props.initialConstraints?.y) && (n = !0, this.setState({
      constraints: this.props.initialConstraints || f
    }));
    this.props.canResetPosition && !e.canResetPosition && (this.setState({
      constraints: this.props.initialConstraints || f,
      startingDragPosition: null,
      hasCustomPosition: !1,
      showArrow: !0
    }), this.props.resetPositionToInitial?.());
    this.props.width === e.width && this.props.height === e.height || this.props.allowResizeHeight || this.props.allowResizeWidth || this.setState({
      shouldCallEnsureModalIsOnScreen: !0
    });
    (this.props.alwaysEnsureModalOnScreen || this.props.alwaysEnsureHeaderModalOnScreen) && n && !this.state.shouldCallEnsureModalIsOnScreen && this.setState({
      shouldCallEnsureModalIsOnScreen: !0
    });
    this.state.shouldCallEnsureModalIsOnScreen && !n && (this.ensureModalOnScreen(), this.setState({
      shouldCallEnsureModalIsOnScreen: !1
    }));
    this.frameEl && i?.scrollTop && (this.frameEl.scrollTop = i.scrollTop);
    this.props.shouldScrollToBottom && this.props.shouldScrollToBottom() && this.frameEl && (this.frameEl.scrollTop = this.frameEl.scrollHeight);
  }
  getSnapshotBeforeUpdate(e, t) {
    return {
      scrollTop: this.frameEl?.scrollTop
    };
  }
  getCurrentContentSize() {
    vA(!!this.props.height);
    vA(!!this.props.width);
    return {
      x: this.props.width,
      y: this.props.height - $$g6
    };
  }
  static getDerivedStateFromProps(e, t) {
    return e.hidden !== t.hidden ? e.hidden ? {
      hidden: !0,
      hasCustomPosition: !1
    } : {
      hidden: t.shouldCallEnsureModalIsOnScreen
    } : null;
  }
  setTransform(e) {
    let t = e({
      constraints: this.state.constraints,
      width: this.props.width,
      height: this.props.height,
      position: this.props.position
    });
    t && (this.props.setWidth(t.width), this.props.setHeight(t.height), this.props.setPosition(t.position), this.props.onResize?.({
      width: t.width,
      height: t.height
    }), this.props.onDragEnd?.(t.position));
  }
  render() {
    let e;
    let {
      acceptHeight,
      allowAutoExpanding,
      allowPartialHeaderOnScreen,
      alwaysEnsureHeaderModalOnScreen,
      alwaysEnsureModalOnScreen,
      autoflowHeight,
      canRenderBelowViewport,
      disableHeaderBottomBorder,
      id,
      initialConstraints,
      width,
      height,
      position,
      maxHeight,
      maxWidth,
      minBottomMargin,
      minHeight,
      minLeftMargin,
      minRightMargin,
      minTopMargin,
      minWidth,
      onDragStart,
      onDragEnd,
      onResize,
      shouldScrollToBottom,
      bounds,
      onEnterBound,
      onLeaveBound,
      showArrow,
      ...P
    } = this.props;
    let {
      showArrow: _showArrow,
      constraints,
      hidden
    } = this.state;
    height && (e = this.props.autoflowHeight || maxHeight && maxHeight < height ? void 0 : height);
    return jsx(b2, {
      ...P,
      beMoreAccessible: this.props.beMoreAccessible,
      constraints,
      containerRef: this.containerRef,
      disableHeaderBottomBorder,
      frameRef: this.frameRef,
      height: e,
      hidden,
      id,
      onDrag: this.onDrag,
      onDragStateChange: this.onDragStateChange,
      onResize: this.onResize,
      position,
      showArrow: _showArrow,
      titleId: this.props.titleId,
      transparentContentBackground: this.props.transparentContentBackground,
      width
    });
  }
}
y.displayName = "DraggableModal";
export let $$b4 = forwardRef((e, t) => jsx(y, {
  ref: t,
  ...e
}));
export class $$v3 extends Component {
  render() {
    return jsx("div", {
      className: `${Np} ${Dm}`,
      onMouseDown: this.props.clickOutsideToHide ? this.props.onClose : void 0,
      children: jsx($$A0, {
        ...this.props
      })
    });
  }
}
$$v3.displayName = "DraggableModalBgDisabled";
export { EL, F_ } from "../905/858282";
export const Ao = $$A0;
export const Xj = $$v3;
export const od = $$b4;
export const rk = $$_5;
export const uF = $$g6;