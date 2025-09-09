import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Fragment as _$$Fragment } from "react";
import { throwTypeError } from "../figma_app/465776";
import { Ay } from "../figma_app/272902";
import o from "classnames";
import { A as _$$A } from "../vendor/518290";
import { Uz } from "../905/63728";
import { RecordingComponent, handleMouseEvent, SKIP_RECORDING, generateRecordingKey } from "../figma_app/878298";
import { i as _$$i, C as _$$C } from "../905/64217";
import { s as _$$s } from "../cssbuilder/589278";
import { Uu, Dm } from "../figma_app/8833";
import { ft } from "../figma_app/753501";
import { vL, pS } from "../905/826900";
import { ZD } from "../905/519092";
import { O } from "../905/208152";
import { OP, as } from "../figma_app/792958";
import { K } from "../figma_app/789979";
import { Xi, Eo, r4, F7, Gt, F4, wH, aX, hQ, AE, Ep, z3, Si, p8, tz, hv, wx, E6, iE } from "../905/175194";
var l = o;
var $$I1 = (e => (e[e.TOP = 0] = "TOP", e[e.BOTTOM = 1] = "BOTTOM", e[e.RIGHT_TITLE = 2] = "RIGHT_TITLE", e[e.RIGHT_BODY = 3] = "RIGHT_BODY", e[e.LEFT_TITLE = 4] = "LEFT_TITLE", e[e.TOP_RIGHT = 5] = "TOP_RIGHT", e))($$I1 || {});
var $$E0 = (e => (e.FALLBACK = "fallback", e.BEST_EFFORT = "best_effort", e))($$E0 || {});
var x = (e => (e[e.IGNORE = 0] = "IGNORE", e))(x || {});
var $$S3 = (e => (e.Active = "Active", e.Dragging = "Dragging", e.None = "None", e))($$S3 || {});
export class $$w2 extends RecordingComponent {
  constructor(e) {
    super(e);
    this.stopPropagation = e => e.stopPropagation();
    this._dragState = "None";
    this._containerRef = null;
    this.computeStyles = e => {
      let t = {};
      if (this.props.hidden && (t.visibility = "hidden"), this.props.zIndex && (t.zIndex = this.props.zIndex), this.props.containerFillsPage) {
        t.left = 0;
        t.right = 0;
        t.bottom = 0;
        t.top = 0;
        return t;
      }
      let {
        x,
        y
      } = e;
      if (this.props.makeContentPixelPerfect) {
        let e = 1 / window.devicePixelRatio;
        i = C(x, e);
        n = C(y, e);
      }
      "left" === this.props.constraints.x ? t.left = x : t.right = x;
      "top" === this.props.constraints.y ? t.top = y : t.bottom = y;
      let {
        width,
        height
      } = this.props;
      if (this.props.makeContentPixelPerfect && width && height) {
        let {
          roundedWidth,
          roundedHeight
        } = T({
          width,
          height: height - y.uF,
          devicePixelRatio: window.devicePixelRatio
        });
        let i = roundedHeight + y.uF;
        r = roundedWidth;
        a = i;
      }
      width && (t.width = width);
      height && (t.height = height);
      return t;
    };
    this._onMouseDown = e => {
      if (e.stopPropagation(), 2 === e.button || this.props.disableDragging) return;
      let t = e.target;
      t && ("input" === t.tagName.toLowerCase() || "label" === t.tagName.toLowerCase() || "img" === t.tagName.toLowerCase() || "a" === t.tagName.toLowerCase()) || t && "function" == typeof t.closest && t.closest("[data-not-draggable]") || ("None" === this.dragState ? this.setDragState("Active", "nativeEvent" in e ? e.nativeEvent : e) : console.error("Should not be already dragging in a mousedown handler"));
    };
    this.mouseDown = handleMouseEvent(this, "mousedown", this._onMouseDown, {
      includeTarget: !0,
      recordMetadata: e => ({
        pageX: e.pageX,
        pageY: e.pageY
      }),
      playbackMetadata: e => ({
        pageX: e.pageX,
        pageY: e.pageY
      })
    });
    this.documentMouseMove = handleMouseEvent(this, "mousemove", e => {
      if (this.props.hidden || "None" === this.dragState) return SKIP_RECORDING;
      switch ("Active" === this.dragState && this.setDragState("Dragging", e), this.dragState) {
        case "Active":
        case "Dragging":
          this.props.onDrag(e);
          break;
        default:
          throwTypeError(this.dragState);
      }
    }, {
      recordMetadata: e => ({
        pageX: e.pageX,
        pageY: e.pageY
      }),
      playbackMetadata: e => ({
        pageX: e.pageX,
        pageY: e.pageY
      })
    });
    this.documentMouseUp = handleMouseEvent(this, "mouseup", e => {
      switch (this.dragState) {
        case "Active":
        case "Dragging":
          this.setDragState("None", "nativeEvent" in e ? e.nativeEvent : e);
          break;
        case "None":
          return SKIP_RECORDING;
        default:
          throwTypeError(this.dragState);
      }
    });
    this.onClick = e => {
      e.stopPropagation();
      this.props.onClick && this.props.onClick(e);
    };
    this.onFocus = e => {
      e.stopPropagation();
      this.props.onFocus && this.props.onFocus(e);
    };
    this.onBlur = e => {
      this.props.onBlur && this.props.onBlur(e);
    };
    this.onContentMouseDown = e => {
      this.props.dragHeaderOnly && e.stopPropagation();
    };
    this.onKeyDown = e => {
      this.props.onKeyDown?.(e);
      e.event.keyCode === Uz.ESCAPE && !this.props.ignoreCloseShortcut && this.props.onClose && (0 === this.props.onClose() ? e.shouldPropagate = !0 : e.accept());
    };
    this.getAllowedResizeDirections = () => {
      let e = [];
      this.props.allowResizeHeight && e.push(OP.TOP, OP.BOTTOM);
      this.props.allowResizeWidth && e.push(OP.LEFT, OP.RIGHT);
      return e;
    };
    this.getCurrentBounds = () => {
      let e = this.props.width ?? this._containerRef?.clientWidth ?? 0;
      let t = this.props.height ?? this._containerRef?.clientHeight ?? 0;
      let i = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      };
      "left" === this.props.constraints.x ? (i.left = this.props.position.x, i.right = i.left + e) : (i.right = window.innerWidth - this.props.position.x, i.left = i.right - e);
      "top" === this.props.constraints.y ? (i.top = this.props.position.y, i.bottom = i.top + t) : (i.bottom = window.innerHeight - this.props.position.y, i.top = i.bottom - t);
      return i;
    };
    this.contextValue = _$$A((e, t) => ({
      isResizing: e,
      isDragging: t
    }));
    this.state = {
      isResizing: void 0,
      resizeDirections: []
    };
  }
  get dragState() {
    return this._dragState;
  }
  setDragState(e, t) {
    this._dragState = e;
    this.props.onDragStateChange(e, t);
    this.forceUpdate();
  }
  componentDidMount() {
    super.componentDidMount();
    ft() ? (document.addEventListener("pointermove", this.documentMouseMove), document.addEventListener("pointerup", this.documentMouseUp, !0)) : (document.addEventListener("mousemove", this.documentMouseMove), document.addEventListener("mouseup", this.documentMouseUp, !0));
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    ft() ? (document.removeEventListener("pointermove", this.documentMouseMove), document.removeEventListener("pointerup", this.documentMouseUp, !0)) : (document.removeEventListener("mousemove", this.documentMouseMove), document.removeEventListener("mouseup", this.documentMouseUp, !0));
  }
  render() {
    let e = this.computeStyles(this.props.position);
    let t = this.props.animatedIn ? Xi : Eo;
    "Dragging" === this.dragState && (t += ` ${r4}`);
    this.props.containerClassName && (t += ` ${this.props.containerClassName}`);
    let i = this.props.scrollOverflow ? F7 : Gt;
    this.props.isFigJam && (i = this.props.scrollOverflow ? F4 : wH);
    this.props.transparentContentBackground && (i = aX);
    this.props.minSize && (i += ` ${_$$s.minW200.minH200.$}`);
    this.props.fullFrame && (i += ` ${_$$s.wFull.hFull.$}`);
    this.props.overflowHidden && (i += ` ${_$$s.overflowHidden.$}`);
    let a = ft();
    let o = jsx("div", {
      className: `${hQ} ${this.props.contentContainerClassName || ""}`,
      onPointerDown: a ? this.onContentMouseDown : void 0,
      onMouseDown: a ? void 0 : this.onContentMouseDown,
      "data-testid": this.props.dataTestId,
      "data-onboarding-key": this.props.dataOnboardingKey,
      children: jsx(vL, {
        name: "Draggable modal",
        handleKeyDown: this.onKeyDown,
        focusOnMount: !this.props.preventKeyboardFocus,
        style: {
          height: "100%",
          width: "100%"
        },
        children: this.props.children
      })
    });
    let d = this.props.container || _$$Fragment;
    let {
      allowWheelPassthrough
    } = this.props;
    let I = allowWheelPassthrough ? Uu : "";
    let E = this.props.ResizeTargetComponent ?? K;
    return jsxs(Fragment, {
      children: [jsx("div", {
        ref: Ay(this.props.containerRef, e => this._containerRef = e),
        "aria-labelledby": this.props.titleId,
        className: `${t} ${Dm} ${I}`,
        "data-cancel-insertable-resource-drag-and-drop": !this.props.hidden && !this.props.noCancelDragAndDrop,
        "data-fullscreen-bubble-phase": this.props.beMoreAccessible || void 0,
        "data-testid": "draggable-modal-view",
        id: this.props.id,
        onBlur: this.onBlur,
        onClick: this.onClick,
        onFocus: this.onFocus,
        onKeyDown: e => {
          "Escape" === e.key && (e.stopPropagation(), this.onKeyDown(new pS(e.nativeEvent)));
        },
        onMouseDown: a ? void 0 : this.mouseDown,
        onPointerDown: a ? this.mouseDown : this.props.preventClickEventBubbling ? this.stopPropagation : void 0,
        role: "dialog",
        style: e,
        tabIndex: this.props.tabIndex,
        children: jsxs(d, {
          ...this.props.containerProps,
          children: [jsxs("div", {
            className: i,
            style: this.props.frameStyle,
            ref: this.props.frameRef,
            children: [this.props.showArrow && this.props.arrowRelativeX && jsx("div", {
              className: (() => {
                switch (this.props.arrowPosition) {
                  case 5:
                  case 2:
                    return AE;
                  case 3:
                    return Ep;
                  case 0:
                    return z3;
                  case 1:
                    return this.props.smallArrow ? Si : p8;
                  case 4:
                    return tz;
                  default:
                    return;
                }
              })(),
              style: {
                left: this.props.arrowRelativeX,
                top: this.props.arrowRelativeY
              }
            }), jsx(_$$i, {
              displayAs: _$$C.DeprecatedFullHeightBlock,
              children: null != this.props.title ? jsx(ZD, {
                className: hv,
                closeButtonClassName: this.props.closeButtonClassName,
                customButton: this.props.customButton,
                disableHeaderBottomBorder: this.props.disableHeaderBottomBorder,
                headerClassname: `${wx} ${this.props.headerClassName || ""}`,
                headerSize: this.props.headerSize,
                isCloseHidden: this.props.isCloseHidden,
                onClose: this.props.onClose,
                onMouseDown: this.stopPropagation,
                onMouseMove: this.documentMouseMove,
                recordingKey: generateRecordingKey(this.props, "draggableModal"),
                stickyHeader: this.props.stickyHeader,
                title: this.props.title,
                titleIconSvgClassName: this.props.titleIconSvgClassName,
                titleIconSvgSrc: this.props.titleIconSvgSrc,
                titleIconURL: this.props.titleIconURL,
                titleId: this.props.titleId,
                truncateTitleText: this.props.truncateTitleText,
                children: jsx(O.Provider, {
                  value: this.contextValue(!!this.state.isResizing, "None" !== this._dragState),
                  children: o
                })
              }) : o
            })]
          }), jsx(E, {
            allowedResizeDirections: this.getAllowedResizeDirections(),
            getCurrentContainerBounds: () => this.getCurrentBounds(),
            hidden: !!this.props.hidden,
            isResizing: this.state.isResizing,
            lockAspectRatio: !!this.props.lockAspectRatio,
            onEdgeDoubleClick: this.props.onEdgeDoubleClick,
            onResizeEnd: this.props.onResizeEnd,
            recordingKey: generateRecordingKey(this.props, "resizeTarget"),
            resizeTo: this.props.onResize,
            setIsResizing: e => this.setState({
              isResizing: e
            }),
            setResizeDirections: e => this.setState({
              resizeDirections: e
            })
          })]
        })
      }), (() => {
        let e = this.state.isResizing;
        let t = "Dragging" === this._dragState;
        if (!(e || t)) return null;
        let i = as(this.state.resizeDirections);
        let r = E6;
        return jsx("div", {
          className: l()(iE, e ? i : t ? r : void 0, Dm)
        });
      })()]
    });
  }
}
$$w2.displayName = "DraggableModalView";
let C = (e, t, i = Math.round) => i(e / t) * t;
let T = ({
  width: e,
  height: t,
  devicePixelRatio: i
}) => {
  let n = 1 / i;
  let r = e / t;
  return [[Math.round, Math.round], [Math.floor, Math.floor], [Math.ceil, Math.ceil], [Math.round, Math.ceil], [Math.floor, Math.round], [Math.floor, Math.ceil]].map(([i, r]) => ({
    roundedWidth: C(e, n, i),
    roundedHeight: C(t, n, r)
  })).filter(({
    roundedWidth: e,
    roundedHeight: t
  }) => e / t <= r).reduce(({
    roundedWidth: e,
    roundedHeight: t
  }, {
    roundedWidth: i,
    roundedHeight: n
  }) => i / n > e / t ? {
    roundedWidth: i,
    roundedHeight: n
  } : {
    roundedWidth: e,
    roundedHeight: t
  });
};
export const EL = $$E0;
export const F_ = $$I1;
export const b2 = $$w2;
export const mq = $$S3;