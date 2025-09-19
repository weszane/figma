import { jsx, Fragment } from "react/jsx-runtime";
import { bytesToHex } from "../905/125019";
import { ButtonPrimitive } from "../905/632989";
import s from "classnames";
import { RecordingPureComponent, handleKeyboardEvent, handleMouseEvent } from "../figma_app/878298";
import { Point } from "../905/736624";
import { SvgComponent } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { getFillColor } from "../figma_app/80990";
import { getImageManager } from "../figma_app/624361";
import { normalizeValue } from "../905/216495";
import { HT, jS, Pv } from "../905/619652";
import { getStyleThumbnail } from "../905/405710";
import { M as _$$M } from "../905/771870";
import { forwardRef } from "react";
import { ColorSpaceEnum } from "../figma_app/763686";
import { colorCSSManipulatorInstance } from "../905/989956";
import { LN } from "../figma_app/975811";
import { useThemeContext } from "../905/640017";
import { Ep } from "../figma_app/504823";
import { isCSSDisplayP3Supported } from "../figma_app/622881";
import { eE, wr, GW, b4 } from "../905/767147";
import { m as _$$m } from "../figma_app/726115";
import { x7, X3 } from "../figma_app/492929";
import { A as _$$A } from "../svg/673393";
var o = s;
let C = new LN();
let T = forwardRef(function ({
  paint: e,
  hideBorderShadow: t,
  forceNonInteractive: i,
  ...r
}, s) {
  let o = Ep();
  useThemeContext();
  let l = function (e, t) {
    let i = t.transform;
    let n = t.stops;
    if (!i || !n || 0 === n.length) return;
    let r = 0;
    let a = 1;
    let s = "";
    if ("GRADIENT_LINEAR" === t.type) {
      let e = eE(i);
      let t = e.m00 * e.m11 - e.m01 * e.m10 > 0 ? 1 : -1;
      let n = wr(e, {
        x: 0,
        y: 1
      });
      s = "linear-gradient(" + (Math.atan2(n.y * t, n.x * t) / Math.PI * 180).toFixed(2) + "deg";
      let o = (Math.abs(n.x) + Math.abs(n.y)) / Math.hypot(n.x, n.y);
      a = 1 / o;
      r = (o - 1) / 2;
    } else s = "radial-gradient(circle closest-side";
    1 === n.length && (s += ", " + colorCSSManipulatorInstance.format(n[0].color, e));
    let o = n[0];
    for (let t of n) {
      if (o.position !== t.position && o.color.a !== t.color.a && (o.color.r !== t.color.r || o.color.g !== t.color.g || o.color.b !== t.color.b)) for (let i = 1; i < 5; i++) {
        let n = i / 5;
        let l = {
          r: GW(o.color.r, t.color.r, n),
          g: GW(o.color.g, t.color.g, n),
          b: GW(o.color.b, t.color.b, n),
          a: GW(o.color.a, t.color.a, n)
        };
        let d = GW(o.position, t.position, n);
        s += ", " + colorCSSManipulatorInstance.format(l, e) + " " + C.format(d * a + r);
      }
      s += ", " + colorCSSManipulatorInstance.format(t.color, e) + " " + C.format(t.position * a + r);
      o = t;
    }
    return {
      stops: n,
      background: s += ")"
    };
  }(o === ColorSpaceEnum.DISPLAY_P3 && isCSSDisplayP3Supported() ? "display-p3" : "srgb", e);
  if (!l) return null;
  let {
    background
  } = l;
  let c = void 0;
  let u = {
    backgroundColor: "white",
    backgroundImage: background
  };
  return !i && b4(r) ? jsx(ButtonPrimitive, {
    style: u,
    "aria-label": function (e) {
      if (e) switch (e.type) {
        case "GRADIENT_LINEAR":
          return getI18nString("fullscreen.accessibility.chit_gradient_linear");
        case "GRADIENT_RADIAL":
          return getI18nString("fullscreen.accessibility.chit_gradient_radial");
        default:
          return;
      }
    }(e),
    ref: s,
    ...r,
    children: c
  }) : jsx("div", {
    style: u,
    ...r,
    children: c
  });
});
let P = new Point(24, 24);
export function $$O0(e) {
  return jsx(L, {
    ...e
  });
}
export function $$$$D1(e) {
  return jsx(L, {
    ...e
  });
}
class L extends RecordingPureComponent {
  constructor(e) {
    super(e);
    this.getPaint = () => "paint" in this.props ? normalizeValue(this.props.paint) : null;
    this.getColor = () => "color" in this.props ? normalizeValue(this.props.color) : null;
    this.getOpacity = () => "color" in this.props ? normalizeValue(this.props.opacity) : null;
    this.getStyle = () => "fillStyle" in this.props ? this.props.fillStyle : null;
    this.onKeyDown = handleKeyboardEvent(this, "keydown", e => {
      13 === e.keyCode && (this.props.onMouseDown && this.props.onMouseDown(e), this.props.onClick && this.props.onClick(e));
      27 === e.keyCode && (this.props.isInFPLGrid || e.currentTarget.blur());
    });
    this.onClick = this.props.onClick && handleMouseEvent(this, "click", e => {
      this.props.onClick(e);
    });
    this.onMouseDown = this.props.onMouseDown && handleMouseEvent(this, "mousedown", e => {
      this.props.allowMouseDownPropagation || e.stopPropagation();
      this.props.onMouseDown(e);
    });
    this.onMouseUp = handleMouseEvent(this, "mouseup", e => {
      e.stopPropagation();
      e.currentTarget.blur();
    });
    this.generateContainerProps = () => ({
      className: o()(x7, this.props.className),
      onMouseDown: this.onMouseDown,
      onMouseUp: this.onMouseUp,
      onClick: this.onClick,
      actionOnPointerDown: this.props.actionOnPointerDown,
      onContextMenu: this.props.onContextMenu,
      onKeyDown: this.onKeyDown,
      tabIndex: this.props.tabIndex || 0,
      title: this.props.title,
      onFocus: this.props.onFocus
    });
    this.renderFallback = this.renderFallback.bind(this);
  }
  renderFallback() {
    let e = this.getStyle();
    let t = this.getPaint();
    if (e) {
      let i = getStyleThumbnail(e);
      if (i && "FILL" === i.type) {
        let e = getFillColor(i);
        if (e) return jsx(_$$m, {
          color: e,
          hideBorderShadow: this.props.hideBorderShadow,
          ...this.generateContainerProps()
        });
      }
      let r = jsx(_$$M, {
        item: e,
        shouldGenerateLocalThumbnail: !0,
        className: _$$s.wFull.$
      });
      return b4(this.props) ? jsx(ButtonPrimitive, {
        ...this.generateContainerProps(),
        "aria-label": j(t),
        children: r
      }) : jsx("div", {
        ...this.generateContainerProps(),
        children: r
      });
    }
    return b4(this.props) ? jsx(ButtonPrimitive, {
      ...this.generateContainerProps(),
      "aria-label": j(t),
      children: t?.type === "PATTERN" ? jsx(SvgComponent, {
        svg: _$$A,
        className: X3
      }) : jsx(Fragment, {})
    }) : jsx("div", {
      ...this.generateContainerProps(),
      children: t?.type === "PATTERN" ? jsx(SvgComponent, {
        svg: _$$A,
        className: X3
      }) : jsx(Fragment, {})
    });
  }
  render() {
    let e = this.getColor();
    let t = this.getOpacity();
    if (e) {
      null != t && (e = {
        ...e,
        a: t
      });
      return jsx(_$$m, {
        color: e,
        hideBorderShadow: this.props.hideBorderShadow,
        forceNonInteractive: this.props.forceNonInteractive,
        ...this.generateContainerProps()
      });
    }
    let i = this.getPaint();
    return i ? "SOLID" === i.type ? void 0 !== i.color && void 0 !== i.opacity ? jsx(_$$m, {
      color: {
        ...i.color,
        a: i.opacity
      },
      hideBorderShadow: this.props.hideBorderShadow,
      forceNonInteractive: this.props.forceNonInteractive,
      ...this.generateContainerProps()
    }) : this.renderFallback() : "GRADIENT_LINEAR" === i.type || "GRADIENT_RADIAL" === i.type ? jsx(T, {
      paint: i,
      hideBorderShadow: this.props.hideBorderShadow,
      forceNonInteractive: this.props.forceNonInteractive,
      ...this.generateContainerProps()
    }) : jsx(F, {
      paint: i,
      renderFallback: this.renderFallback,
      nonInteractive: this.props.forceNonInteractive && !b4(this.props),
      generateContainerProps: this.generateContainerProps
    }) : this.renderFallback();
  }
}
L.displayName = "Chit";
class F extends RecordingPureComponent {
  constructor(e) {
    super(e);
    this.imageManager = getImageManager();
    this.state = {
      src: M(e.paint)
    };
  }
  componentDidMount() {
    this.setThumbnailSrcAndWaitForImage();
  }
  componentDidUpdate(e) {
    let t = "PATTERN" === this.props.paint.type && "PATTERN" === e.paint.type;
    e.paint === this.props.paint || t && this.props.paint.sourceNodeId === e.paint.sourceNodeId || this.setThumbnailSrcAndWaitForImage();
  }
  render() {
    let e = this.state.src;
    if (!e) return this.props.renderFallback();
    let t = e && jsx("img", {
      src: e,
      className: X3,
      alt: `chit for ${JSON.stringify(this.props.paint)}`
    });
    return this.props.nonInteractive ? jsx("div", {
      ...this.props.generateContainerProps(),
      children: t
    }) : jsx(ButtonPrimitive, {
      ...this.props.generateContainerProps(),
      "aria-label": j(this.props.paint),
      children: t
    });
  }
  setThumbnailSrcAndWaitForImage() {
    let e = M(this.props.paint);
    this.setState({
      src: e
    });
    !e && this.props.paint.imageThumbnail?.hash && this.imageManager.loadImageByHash(bytesToHex(this.props.paint.imageThumbnail.hash)).then(() => {
      this.setState({
        src: M(this.props.paint)
      });
    });
  }
}
function M(e) {
  if (!e || "SOLID" === e.type || "GRADIENT_LINEAR" === e.type || "GRADIENT_RADIAL" === e.type) return null;
  if ("PATTERN" === e.type) return HT(e, P);
  let t = jS(e, P);
  return t && 0 !== t.pixels.length && t.pixelSize ? Pv(t.pixels, t.pixelSize) : null;
}
function j(e) {
  if (e) switch (e.type) {
    case "VIDEO":
      return getI18nString("fullscreen.accessibility.chit_video");
    case "IMAGE":
      return null != e.animatedImage ? getI18nString("fullscreen.accessibility.chit_gif") : getI18nString("fullscreen.accessibility.chit_image");
    case "EMOJI":
      return getI18nString("fullscreen.accessibility.chit_emoji");
    case "PATTERN":
      return getI18nString("fullscreen.accessibility.chit_pattern");
    case "GRADIENT_ANGULAR":
      return getI18nString("fullscreen.accessibility.chit_gradient_angular");
    case "GRADIENT_DIAMOND":
      return getI18nString("fullscreen.accessibility.chit_gradient_diamond");
    default:
      return;
  }
}
export const J = $$O0;
export const D = $$$$D1;