import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { ColorSpaceEnum } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { RecordingPureComponent, handlePointerEvent, SKIP_RECORDING, handleWheelEvent, hookForKeyboard } from "../figma_app/878298";
import { Point } from "../905/736624";
import { n as _$$n } from "../905/734251";
import { colorCSSManipulatorInstance } from "../905/989956";
import { stopPropagation } from "../figma_app/753501";
import { dM } from "../figma_app/837840";
import { createColorDataUri } from "../905/248569";
import { shouldUsePolyfill, getColorSpaceString } from "../figma_app/622881";
function g(e) {
  return jsx(f, {
    ...e,
    uiVersion: "ui3"
  });
}
class f extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.dragging = !1;
    this.srgbCanvasElement = null;
    this.srgbCanvasRef = e => {
      this.srgbCanvasElement = e;
      this.srgbCanvasElement && (getFeatureFlags().ee_color_management_force_canvas ? dM({
        canvas: this.srgbCanvasElement,
        canvasWidth: this.canvasWidth(),
        canvasHeight: this.canvasHeight(),
        renderCanvas: this.props.renderCanvas,
        value: this.props.value,
        colorSpace: "srgb"
      }) : this.props.renderCanvas(this.srgbCanvasElement, this.props.value));
    };
    this.displayP3CanvasElement = null;
    this.displayP3CanvasRef = e => {
      let t = !!(null === this.displayP3CanvasElement && e);
      this.displayP3CanvasElement = e;
      this.displayP3CanvasElement && dM({
        canvas: this.displayP3CanvasElement,
        canvasWidth: this.canvasWidth(),
        canvasHeight: this.canvasHeight(),
        renderCanvas: this.props.renderCanvas,
        value: this.props.value,
        colorSpace: "display-p3",
        initializeCanvasColorSpace: t
      });
    };
    this.barElement = null;
    this.barRef = e => {
      this.barElement = e;
      e && this.disableWeirdHorizontalScrollingPageNavigation(e);
    };
    this.handleElement = null;
    this.handleRef = e => {
      this.handleElement = e;
      this.handleElement && (this.props.renderHandle(this.props.value, this.handleElement), this.disableWeirdHorizontalScrollingPageNavigation(this.handleElement));
    };
    this.offset = new Point(0, 0);
    this.setOffset = e => {
      if (null != e) {
        let t = e.target.getBoundingClientRect();
        let i = new Point(t.left + t.width / 2, t.top + t.height / 2);
        this.offset = i.subtract(new Point(e.clientX, e.clientY));
      } else null != this.props.offset ? this.offset = this.props.offset : this.offset = new Point(0, 0);
    };
    this.ensureInitialized = () => {
      if (!this.barElement) throw Error("callback called before rendering barElement");
    };
    this.mouseToValue = e => {
      this.ensureInitialized();
      let t = this.barElement.getBoundingClientRect();
      let i = e.x + this.offset.x;
      let n = e.y + this.offset.y;
      i -= t.left + (this.props.handlePadding ? this.props.handle / 2 : 0);
      n -= t.top + (this.props.handlePadding ? this.props.handle / 2 : 0);
      i /= this.props.width;
      n /= this.props.height;
      i = Math.max(Math.min(i, 1), 0);
      n = Math.max(Math.min(n, 1), 0);
      return new Point(i, n);
    };
    this.valueToPosition = e => {
      let t = e.x;
      let i = e.y;
      t *= this.props.width;
      i *= this.props.height;
      t -= this.props.handlePadding ? 0 : this.props.handle / 2;
      i -= this.props.handlePadding ? 0 : this.props.handle / 2;
      return new Point(t, i);
    };
    this.onPointerDown = handlePointerEvent(this, "pointerdown", e => {
      e.stopPropagation();
      this.dragging = !0;
      e.currentTarget.setPointerCapture(e.pointerId);
      e.currentTarget === this.handleElement ? this.setOffset(e) : (this.setOffset(), this.props.mouseCallback(this.mouseToValue(new Point(e.clientX, e.clientY)), !1));
    }, {
      recordMetadata: e => {
        this.ensureInitialized();
        let t = this.barElement.getBoundingClientRect();
        return {
          left: (e.clientX - t.left) / t.width,
          top: (e.clientY - t.top) / t.height
        };
      },
      playbackMetadata: e => {
        this.ensureInitialized();
        let t = this.barElement.getBoundingClientRect();
        return {
          clientX: e.left * t.width + t.left,
          clientY: e.top * t.height + t.top
        };
      }
    });
    this.onPointerUp = handlePointerEvent(this, "pointerup", e => {
      if (!this.dragging) return SKIP_RECORDING;
      this.dragging = !1;
      this.props.mouseCallback(this.mouseToValue(new Point(e.clientX, e.clientY)), !0);
    }, {
      recordMetadata: e => {
        this.ensureInitialized();
        let t = this.barElement.getBoundingClientRect();
        return {
          left: (e.clientX - t.left) / t.width,
          top: (e.clientY - t.top) / t.height
        };
      },
      playbackMetadata: e => {
        this.ensureInitialized();
        let t = this.barElement.getBoundingClientRect();
        return {
          clientX: e.left * t.width + t.left,
          clientY: e.top * t.height + t.top
        };
      }
    });
    this.onPointerMove = e => {
      this.dragging && (e.stopPropagation(), e.preventDefault(), this.props.mouseCallback(this.mouseToValue(new Point(e.clientX, e.clientY)), !1));
    };
    this.onWheel = handleWheelEvent(this, "wheel", e => {
      e.stopPropagation();
      let t = e.ctrlKey;
      this.props.wheelCallback?.(new Point(e.deltaX, e.deltaY), e.altKey, t);
    }, {
      recordMetadata: e => ({
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        deltaMode: e.deltaMode,
        ctrlKey: e.ctrlKey
      }),
      playbackMetadata: e => ({
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        deltaMode: e.deltaMode,
        ctrlKey: e.ctrlKey
      })
    });
    this.onKeyDown = hookForKeyboard(this, "keydown", e => {
      e.stopPropagation();
      this.props.keyDownCallback(e);
    });
  }
  componentDidUpdate(e, t) {
    super.componentDidUpdate(e, t);
    e.value !== this.props.value && (this.srgbCanvasRef(this.srgbCanvasElement), this.displayP3CanvasRef(this.displayP3CanvasElement), this.handleRef(this.handleElement));
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    this.dragging = !1;
  }
  disableWeirdHorizontalScrollingPageNavigation(e) {
    e.addEventListener("wheel", e => e.preventDefault(), {
      passive: !1
    });
  }
  canvasWidth() {
    return this.props.width + (this.props.handlePadding ? this.props.handle : 0);
  }
  canvasHeight() {
    return this.props.height + (this.props.handlePadding ? this.props.handle : 0);
  }
  render() {
    let e = {
      position: "relative",
      boxSizing: "border-box",
      overflow: "hidden",
      width: this.props.width + (this.props.handlePadding ? this.props.handle : 0),
      height: this.props.height + (this.props.handlePadding ? this.props.handle : 0),
      borderRadius: this.props.handlePadding ? .5 * this.props.handle : 0,
      ...this.props.canvasWrapperStyles
    };
    let t = "ui3" === this.props.uiVersion ? I : v;
    let i = {
      position: "absolute",
      boxShadow: `inset ${t}`,
      left: 0,
      top: 0,
      width: this.props.width + (this.props.handlePadding ? this.props.handle : 0),
      height: this.props.height ? 1 : this.props.height + (this.props.handlePadding ? this.props.handle : 0),
      borderRadius: this.props.handlePadding ? .5 * this.props.handle : 0,
      ...this.props.ghostStyles
    };
    let r = this.valueToPosition(this.props.value);
    let s = {
      position: "absolute",
      boxSizing: "border-box",
      boxShadow: t,
      left: r.x,
      top: r.y,
      width: this.props.handle,
      height: this.props.handle,
      borderRadius: .5 * this.props.handle
    };
    let o = this.props.hitBoxMargin;
    return jsxs("div", {
      className: this.props.containerClass,
      style: {
        position: "relative"
      },
      children: [jsxs("div", {
        ref: this.barRef,
        style: e,
        children: [this.props.colorProfile === ColorSpaceEnum.SRGB ? jsx("canvas", {
          ref: this.srgbCanvasRef,
          width: `${this.canvasWidth()}px`,
          height: `${this.canvasHeight()}px`
        }) : void 0, this.props.colorProfile === ColorSpaceEnum.DISPLAY_P3 ? jsx("canvas", {
          ref: this.displayP3CanvasRef,
          width: `${this.canvasWidth()}px`,
          height: `${this.canvasHeight()}px`
        }) : void 0, jsx("div", {
          style: i
        })]
      }), this.props.children, jsx(_$$n.div, {
        ref: this.handleRef,
        className: "slider_control--handle--5pBjz",
        onKeyDown: this.onKeyDown,
        onLostPointerCapture: this.onPointerUp,
        onMouseDown: stopPropagation,
        onPointerDown: this.onPointerDown,
        onPointerMove: this.onPointerMove,
        onPointerUp: this.onPointerUp,
        onWheel: this.onWheel,
        style: s,
        tabIndex: 0
      }), jsx(_$$n.div, {
        onMouseDown: stopPropagation,
        onPointerDown: this.onPointerDown,
        onPointerUp: this.onPointerUp,
        onLostPointerCapture: this.onPointerUp,
        onPointerMove: this.onPointerMove,
        onWheel: this.onWheel,
        style: {
          position: "absolute",
          left: -o,
          top: -o,
          right: -o,
          bottom: -o
        }
      })]
    });
  }
}
export function $$_3(e) {
  return "ui3" === e ? $$y1 : A;
}
f.displayName = "SliderControlInner";
let A = 12;
let $$y1 = 16;
let $$b0 = 4;
let v = "0 0 0 .6px rgba(0, 0, 0, 0.2)";
let I = "var(--elevation-200-canvas)";
let E = colorCSSManipulatorInstance;
export function $$x2({
  hitBoxMargin: e,
  width: t,
  height: i,
  handlePadding: s,
  value: o,
  offset: l,
  mouseCallback: d,
  wheelCallback: c,
  keyDownCallback: u,
  renderCanvas: p,
  containerClass: f,
  recordingKey: A,
  canvasWrapperStyles: y,
  ghostStyles: v,
  colorProfile: I,
  colorHandle: x,
  children: S
}) {
  let w = useCallback((e, t) => {
    let i = $$_3("ui3");
    if (t.style.borderRadius = `${i / 2}px`, t.style.borderStyle = "solid", t.style.borderWidth = "0.5px", t.style.borderColor = "var(--color-icon-tertiary, white)", t.style.background = "var(--color-bg, white)", x) {
      t.style.borderColor = "white";
      t.style.borderWidth = `${$$b0}px`;
      let i = x(e);
      I === ColorSpaceEnum.DISPLAY_P3 && shouldUsePolyfill() ? t.style.backgroundImage = `url(${createColorDataUri(i, I || ColorSpaceEnum.SRGB)})` : t.style.background = E.format(i, getColorSpaceString(I || ColorSpaceEnum.SRGB));
    }
  }, [x, I, "ui3"]);
  let C = $$_3("ui3");
  return jsx(g, {
    canvasWrapperStyles: {
      outlineWidth: "1px",
      outlineStyle: "solid",
      outlineColor: "var(--color-bordertranslucent)",
      outlineOffset: "-1px",
      ...y
    },
    colorProfile: I,
    containerClass: f,
    ghostStyles: v,
    handle: C,
    handlePadding: s,
    height: i,
    hitBoxMargin: e,
    keyDownCallback: u,
    mouseCallback: d,
    offset: l,
    recordingKey: A,
    renderCanvas: p,
    renderHandle: w,
    value: o,
    wheelCallback: c,
    width: t,
    children: S
  });
}
export const $7 = $$b0;
export const ZT = $$y1;
export const Kf = $$x2;
export const MX = $$_3;
