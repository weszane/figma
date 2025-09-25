import { jsx, jsxs } from "react/jsx-runtime";
import { createRef } from "react";
import { clamp } from "../figma_app/492908";
import { ColorSpaceEnum, NoneColor, AppStateTsApi } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import l from "classnames";
import { KeyCodes } from "../905/63728";
import { RecordingPureComponent, handleMouseEvent, generateRecordingKey } from "../figma_app/878298";
import { RecordableDiv } from "../905/511649";
import { showDropdownThunk } from "../905/929976";
import { Vl } from "../figma_app/8833";
import { colorCSSManipulatorInstance } from "../905/989956";
import { stopPropagation } from "../figma_app/753501";
import { fullscreenValue } from "../figma_app/455680";
import { dM, Eh } from "../figma_app/837840";
import { getColorSpaceString } from "../figma_app/622881";
import { f7 } from "../figma_app/896988";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { qo, cn } from "../905/959568";
import { J } from "../905/225412";
import { L } from "../905/173490";
import { X7 } from "../905/713167";
import { zi } from "../figma_app/626177";
import { sortByPosition, transformColorStop, sortByPositionWithDefault } from "../905/706046";
var d = l;
export function $$T0({
  colorProfile: e = ColorSpaceEnum.SRGB,
  ...t
}) {
  let i = X7();
  return jsx(k, {
    ...t,
    uiVersion: "ui3",
    colorProfile: e,
    gradientUIv2: i
  });
}
class k extends RecordingPureComponent {
  constructor(e) {
    super(e);
    this.isNewUI = this.props.gradientUIv2;
    this.MARGIN_X = this.isNewUI ? 16 : 20;
    this.WIDTH = qo - 2 * this.MARGIN_X;
    this.HEIGHT = 12;
    this.HEIGHT_UI3 = 16;
    this.HEIGHT_UI3_NEWUI = 32;
    this.THRESHOLD = 5;
    this.srgbCanvasElement = null;
    this.srgbCanvasRef = e => {
      this.srgbCanvasElement = e;
      this.srgbCanvasElement && (getFeatureFlags().ee_color_management_force_canvas ? dM({
        canvas: this.srgbCanvasElement,
        canvasWidth: this.WIDTH,
        canvasHeight: this.trackHeight,
        renderCanvas: this.renderCanvas,
        colorSpace: "srgb"
      }) : this.renderCanvas(this.srgbCanvasElement));
    };
    this.displayP3CanvasElement = null;
    this.displayP3CanvasRef = e => {
      let t = !!(null === this.displayP3CanvasElement && e);
      this.displayP3CanvasElement = e;
      this.displayP3CanvasElement && dM({
        canvas: this.displayP3CanvasElement,
        canvasWidth: this.WIDTH,
        canvasHeight: this.HEIGHT,
        renderCanvas: this.renderCanvas,
        colorSpace: "display-p3",
        initializeCanvasColorSpace: t
      });
    };
    this.panelRef = createRef();
    this.renderCanvas = e => {
      let t = this.props.colorProfile ? getColorSpaceString(this.props.colorProfile) : "srgb";
      let i = Eh(e, t);
      if (!i) return;
      let n = i.createPattern(L, "repeat");
      n && (i.fillStyle = n);
      i.fillRect(0, 0, this.WIDTH, this.trackHeight);
      let r = i.createLinearGradient(0, 0, this.WIDTH, 0);
      for (let e of this.props.paint.stops) r.addColorStop($$N1(e.position), colorCSSManipulatorInstance.format(e.color, t));
      i.fillStyle = r;
      i.fillRect(0, 0, this.WIDTH, this.trackHeight);
    };
    this.onCurrentSelectedStopPositionChange = (e, t, i) => {
      let n = this.props.paint.stops.slice();
      let r = this.currentSelectedStopIndex();
      let a = n[r];
      if (!a) return;
      let s = {
        ...a,
        position: e
      };
      if (n[r] = s, !i) {
        let t = n[r - 1];
        t && .02 > Math.abs(e - t.position) && (s.position = t.position + 1e-4);
        let i = n[r + 1];
        i && .02 > Math.abs(i.position - e) && (s.position = i.position - 1e-4);
      }
      sortByPosition(n);
      let o = n.indexOf(s);
      let l = 0 === this.props.paint.stopsVar.length ? this.props.paint.stops.map(transformColorStop) : this.props.paint.stopsVar.slice();
      let d = l[r];
      if (d) {
        let e = {
          ...d,
          position: s.position
        };
        l[r] = e;
        sortByPositionWithDefault(l);
      }
      this.updateStops(n, l, t);
      this.updateCurrentSelectedStop(o);
    };
    this.clientXToStopPosition = (e, t, i = !0) => {
      let n = null;
      if (this.props.colorProfile === ColorSpaceEnum.SRGB ? n = this.srgbCanvasElement : this.props.colorProfile === ColorSpaceEnum.DISPLAY_P3 && (n = this.displayP3CanvasElement), !n) throw Error("canvas doesn't exist!");
      let {
        left,
        width
      } = n.getBoundingClientRect();
      let o = e - left;
      i && (o = Math.min(Math.max(o, 0), width));
      let l = o / width;
      if (!t) return i ? $$N1(l) : l;
      {
        let e = .05 * Math.round(l / .05);
        return i ? $$N1(e) : e;
      }
    };
    this.stopPositionToLeft = e => e * this.WIDTH;
    this.colorAtPosition = e => {
      let t = (e, t, i) => e * (1 - i) + t * i;
      let i = this.props.paint.stops;
      if (e <= i[0].position) return i[0]?.color;
      if (e >= i[i.length - 1].position) return i[i.length - 1]?.color;
      for (let n = 0; n < i.length - 1; n++) {
        let r = i[n];
        let a = i[n + 1];
        if (e > r.position && e <= a.position) {
          let i = (e - r.position) / (a.position - r.position);
          return {
            r: t(r.color.r, a.color.r, i),
            g: t(r.color.g, a.color.g, i),
            b: t(r.color.b, a.color.b, i),
            a: t(r.color.a, a.color.a, i)
          };
        }
      }
      return null;
    };
    this.distributeStops = () => {
      let e = this.props.paint.stops.slice();
      let t = e.length > 1 ? 1 / (e.length - 1) : 0;
      for (let [i, n] of e.entries()) n.position = t * i;
      let i = 0 === this.props.paint.stopsVar.length ? this.props.paint.stops.map(transformColorStop) : this.props.paint.stopsVar.slice();
      if (e.length === i.length) for (let [e, n] of i.entries()) n.position = t * e;
      this.updateStops(e, i, yesNoTrackingEnum.YES);
    };
    this.mouseEventRecordedEventHandler = {
      recordMetadata: e => {
        let t = this.panelRef.current;
        return {
          left: e.clientX - t.getBoundingClientRect().left,
          top: e.clientY - t.getBoundingClientRect().top
        };
      },
      playbackMetadata: e => {
        let t = this.panelRef.current;
        return {
          clientX: e.left + t.getBoundingClientRect().left,
          clientY: e.top + t.getBoundingClientRect().top
        };
      }
    };
    this.onMouseDown = handleMouseEvent(this, "mousedown", e => {
      e.stopPropagation();
      let t = this.clientXToStopPosition(e.clientX, e.shiftKey, !1);
      if (t > 1 || t < 0) return;
      this.setState({
        isDragging: !0
      });
      let i = this.colorAtPosition(t);
      i && this.addNewStop(t, i);
    }, this.mouseEventRecordedEventHandler);
    this.onKeyDown = e => {
      let t = 0;
      let i = !1;
      switch (e.keyCode) {
        case KeyCodes.LEFT_ARROW:
          t = e.shiftKey ? -.05 : -.01;
          break;
        case KeyCodes.RIGHT_ARROW:
          t = e.shiftKey ? .05 : .01;
          break;
        case KeyCodes.BACKSPACE:
        case KeyCodes.DELETE:
          i = this.props.paint.stops.length > 1;
          break;
        default:
          f7(e);
          return;
      }
      e.preventDefault();
      e.stopPropagation();
      let n = this.props.paint.stops.slice();
      let r = this.currentSelectedStopIndex();
      let s = n[r];
      if (!s) return;
      let o = clamp(s.position + t, 0, 1);
      let l = {
        ...s,
        position: o
      };
      n[r] = l;
      sortByPosition(n);
      let d = n.indexOf(l);
      let u = this.props.paint.stopsVar ? this.props.paint.stopsVar.slice() : this.props.paint.stops.map(transformColorStop);
      let p = u[r];
      if (p) {
        let e = {
          ...p,
          position: o
        };
        u[r] = e;
        sortByPositionWithDefault(u);
      }
      i && (n = [...n.slice(0, r), ...n.slice(r + 1)], u = [...u.slice(0, r), ...u.slice(r + 1)], d = clamp(d, 0, n.length - 1));
      this.updateStops(n, u, yesNoTrackingEnum.YES);
      this.updateCurrentSelectedStop(d);
    };
    this.onMouseMove = e => {
      this.onMouseMoveHelper(e, yesNoTrackingEnum.NO);
    };
    this.onMouseUp = handleMouseEvent(this, "mouseup", e => {
      this.state.isNormalClick && this.contextMenuEnabled && this.props.contextMenu?.onColorPickerToggle(this.currentSelectedStopIndex(), cn(this.panelRef.current));
      this.onMouseMoveHelper(e, yesNoTrackingEnum.YES);
      this.setState({
        isDragging: !1,
        isNormalClick: !1
      });
      this.stopClickedClientX = null;
    }, this.mouseEventRecordedEventHandler);
    this.onStopDoubleClick = e => {
      this.contextMenuEnabled || this.distributeStops();
    };
    this.onStopMouseEnter = e => {
      this.setState({
        isMouseOverStop: !0
      });
    };
    this.onStopMouseLeave = e => {
      this.setState({
        isMouseOverStop: !1
      });
    };
    this.onStopMouseDown = (e, t) => {
      if (t.stopPropagation(), 0 === t.button) {
        if (this.stopClickedClientX = t.clientX, t.altKey) {
          let i = this.clientXToStopPosition(t.clientX, t.shiftKey);
          let n = this.props.paint.stopsVar ? this.props.paint.stopsVar[e] : this.props.paint.stops[e];
          n && this.addNewStop(i, n.color, "colorVar" in n ? n.colorVar : void 0);
        } else {
          this.setState({
            isNormalClick: !0
          });
          this.updateCurrentSelectedStop(e);
        }
      }
    };
    this.updateStops = (e, t, i) => {
      this.props.onChange({
        ...this.props.paint,
        stops: e,
        stopsVar: t
      }, i);
    };
    this.updateCurrentSelectedStop = e => {
      this.nextCurrentSelectedStopIndex = e;
      fullscreenValue.updateAppModel({
        currentSelectedGradientStop: {
          type: NoneColor.COLOR,
          index: e
        }
      });
    };
    this.currentSelectedStopIndex = () => null != this.nextCurrentSelectedStopIndex ? this.nextCurrentSelectedStopIndex : this.props.currentSelectedGradientStop && this.props.currentSelectedGradientStop.index;
    this.stopClickedClientX = null;
    this.state = {
      isMouseOverStop: !1,
      isDragging: !1,
      mousePosition: null,
      isNormalClick: !1
    };
  }
  recordingKey() {
    return generateRecordingKey(this.props, "gradientControl");
  }
  get trackHeight() {
    return "ui3" === this.props.uiVersion ? this.isNewUI ? this.HEIGHT_UI3_NEWUI : this.HEIGHT_UI3 : this.HEIGHT;
  }
  get contextMenuEnabled() {
    return this.props.contextMenu;
  }
  componentDidMount() {
    super.componentDidMount();
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
    this.srgbCanvasRef(this.srgbCanvasElement);
    this.displayP3CanvasRef(this.displayP3CanvasElement);
    this.updateCurrentSelectedStop(0);
    AppStateTsApi.uiState().gradientPaintPickerOpen.set(!0);
  }
  componentDidUpdate(e, t) {
    super.componentDidUpdate(e, t);
    this.props.paint !== e.paint && (this.srgbCanvasRef(this.srgbCanvasElement), this.displayP3CanvasRef(this.displayP3CanvasElement));
    this.props.currentSelectedGradientStop !== e.currentSelectedGradientStop && null != this.nextCurrentSelectedStopIndex && (this.nextCurrentSelectedStopIndex = null);
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
    AppStateTsApi.uiState().gradientPaintPickerOpen.set(!1);
  }
  addNewStop(e, t, i) {
    let n = this.props.paint.stops.slice();
    let r = {
      color: t,
      position: e
    };
    n.push(r);
    sortByPosition(n);
    let a = this.props.paint.stopsVar ? this.props.paint.stopsVar.slice() : this.props.paint.stops.map(transformColorStop);
    let s = i ? {
      color: t,
      position: e,
      colorVar: i
    } : transformColorStop(r);
    a.push(s);
    sortByPositionWithDefault(a);
    this.updateStops(n, a);
    this.updateCurrentSelectedStop(n.indexOf(r));
  }
  onMouseMoveHelper(e, t) {
    let i = this.clientXToStopPosition(e.clientX, e.shiftKey);
    null !== this.stopClickedClientX && Math.abs(e.clientX - this.stopClickedClientX) > this.THRESHOLD && this.setState({
      isDragging: !0
    });
    this.state.isDragging && (this.onCurrentSelectedStopPositionChange(i, t, e.altKey), this.setState({
      isNormalClick: !1
    }));
    this.setState({
      mousePosition: i
    });
  }
  render() {
    let e = null;
    if (!this.state.isDragging && !this.state.isMouseOverStop && null != this.state.mousePosition) {
      let t = this.colorAtPosition(this.state.mousePosition);
      null != t && (e = jsx(R, {
        className: "gradient_control--tempStop--8lagr gradient_control--stop--f0fRy",
        color: t,
        left: this.stopPositionToLeft(this.state.mousePosition),
        isNewUI: this.isNewUI
      }));
    }
    return jsxs(zi, {
      className: d()("gradient_control--panel--8p6t5", {
        "gradient_control--panelNewUI--6kB2J": this.isNewUI
      }),
      onKeyDown: this.onKeyDown,
      onMouseDown: this.onMouseDown,
      onPointerDown: stopPropagation,
      recordingKey: this.props.recordingKey,
      ref: this.panelRef,
      tabIndex: -1,
      children: [this.props.paint.stops.map((e, t) => jsx("div", {
        className: d()({
          "gradient_control--positionedColorStop--BXCgf": this.isNewUI
        }),
        children: jsx(R, {
          color: e.color,
          isNewUI: this.isNewUI,
          left: this.stopPositionToLeft(e.position),
          onContextMenu: e => {
            this.contextMenuEnabled && !(this.props.paint.stops.length <= 1) && (this.props.dispatch(showDropdownThunk({
              type: Vl,
              data: {
                clientX: e.clientX,
                clientY: e.clientY,
                deleteStop: () => this.props.contextMenu?.onDeleteStop(t),
                redistributeStops: this.distributeStops
              }
            })), e.preventDefault());
          },
          onDoubleClick: this.onStopDoubleClick,
          onMouseDown: this.onStopMouseDown.bind(this, t),
          onMouseEnter: this.onStopMouseEnter,
          onMouseLeave: this.onStopMouseLeave,
          recordingKey: generateRecordingKey(this.props, "stop", t),
          selected: t === this.currentSelectedStopIndex()
        })
      }, t)), e, jsxs("div", {
        className: "gradient_control--canvasContainer--m3w-- color_controls--slider--dWz2q",
        children: [this.props.colorProfile === ColorSpaceEnum.SRGB ? jsx("canvas", {
          ref: this.srgbCanvasRef,
          width: this.WIDTH,
          height: this.trackHeight
        }) : void 0, this.props.colorProfile === ColorSpaceEnum.DISPLAY_P3 ? jsx("canvas", {
          ref: this.displayP3CanvasRef,
          width: this.WIDTH,
          height: this.trackHeight
        }) : void 0]
      })]
    });
  }
}
function R({
  color: e,
  left: t,
  selected: i,
  onContextMenu: r,
  onDoubleClick: a,
  onMouseDown: s,
  onMouseEnter: o,
  onMouseLeave: l,
  className: c,
  recordingKey: u,
  isNewUI: m
}) {
  c || (c = i ? "gradient_control--stopSelected--dextz gradient_control--stop--f0fRy" : "gradient_control--stop--f0fRy");
  let h = jsx("div", {
    className: "gradient_control--chitWrapper--Z5-i6",
    children: jsx(J, {
      className: "gradient_control--stopChit---YuSq",
      color: e,
      tabIndex: -1
    })
  });
  return jsxs(RecordableDiv, {
    className: d()(c, {
      "gradient_control--stopNewUI--b8M72": m
    }),
    style: {
      left: t
    },
    onContextMenu: r,
    onDoubleClick: a,
    onMouseDown: s,
    onMouseEnter: o,
    onMouseLeave: l,
    recordingKey: u,
    children: [h, jsx("div", {
      className: "gradient_control--arrow--HL0Ny"
    })]
  });
}
export function $$N1(e) {
  return clamp(e, 0, 1);
}
k.displayName = "GradientControlInner";
k.defaultProps = {
  colorProfile: ColorSpaceEnum.SRGB
};
export const i = $$T0;
export const H = $$N1;