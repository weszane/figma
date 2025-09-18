import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { A as _$$A } from "../905/920165";
import { colorToRgb, desaturateColor } from "../figma_app/273493";
import { RecordingPureComponent } from "../figma_app/878298";
import { Point } from "../905/736624";
import { getI18nString } from "../905/303541";
import { colorCSSManipulatorInstance } from "../905/989956";
import { Eh } from "../figma_app/837840";
import { Ep } from "../figma_app/504823";
import { getColorSpaceString } from "../figma_app/622881";
import { MX, Kf } from "../905/306220";
import { W } from "../905/979098";
let f = class e extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.mouseCallback = (e, t) => {
      this.props.changeCallback(this.valueToColor(e), t);
    };
    this.keyDownCallback = e => {
      let t = W(e);
      let i = (this.props.color.h + t / 360) % 1;
      i < 0 && (i += 1);
      this.props.changeCallback({
        ...this.props.color,
        h: i
      }, !0);
    };
    this.renderCanvas = t => {
      let i = this.props.colorProfile ? getColorSpaceString(this.props.colorProfile) : "srgb";
      let n = Eh(t, i);
      if (!n) return;
      let r = MX(this.props.uiVersion);
      let a = n.createLinearGradient(r / 2, 0, r / 2 + this.props.width, 0);
      for (let t = 0; t < 32; t++) {
        let n = t / 32;
        let r = colorToRgb(desaturateColor({
          ...this.props.color,
          h: n
        }));
        a.addColorStop(n, e.formatter.format(r, i));
      }
      n.fillStyle = a;
      n.fillRect(0, 0, this.props.width + r, r);
    };
    this.colorHandle = e => colorToRgb(desaturateColor(this.valueToColor(e)));
    this.colorToValue = e => new Point(e.h, 0);
    this.valueToColor = e => ({
      ...this.props.color,
      h: Math.round(100 * e.x) / 100
    });
  }
  render() {
    let e = this.props.colorProfile;
    return jsx(Kf, {
      colorHandle: this.colorHandle,
      colorProfile: e,
      containerClass: this.props.containerClass,
      handlePadding: !0,
      height: 0,
      hitBoxMargin: 8,
      keyDownCallback: this.keyDownCallback,
      mouseCallback: this.mouseCallback,
      recordingKey: this.props.recordingKey,
      renderCanvas: this.renderCanvas,
      value: this.colorToValue(this.props.color),
      width: this.props.width
    });
  }
};
export function $$_0(e) {
  let t = Ep();
  return jsx(A, {
    ...e,
    colorProfile: t
  });
}
function A(e) {
  let t = e.colorProfile ? getColorSpaceString(e.colorProfile) : "srgb";
  let {
    h
  } = e.color;
  let s = 360 * e.color.h;
  let o = useMemo(() => function (e, t) {
    let i = [];
    for (let n = 0; n < 32; n++) {
      let r;
      let a = y(n / 32, t);
      r = 0 === n ? `${a} ${e}` : 31 === n ? `${a} calc(100% - ${e})` : a;
      i.push(r);
    }
    return `linear-gradient(90deg, ${i.join(", ")})`;
  }("calc(var(--fpl-slider-height) / 2)", t), [t]);
  return jsx(_$$A, {
    "aria-label": getI18nString("fullscreen.color_controls.hue"),
    bigStep: 10,
    loop: !0,
    max: 359,
    min: 0,
    onChange: (t, {
      commit: i
    }) => {
      e.changeCallback({
        ...e.color,
        h: t / 360
      }, i);
    },
    recordingKey: e.recordingKey,
    step: 1,
    style: {
      "--fpl-slider-thumb-bg": y(h, t),
      "--fpl-slider-track-bg": o
    },
    value: s
  });
}
function y(e, t) {
  let i = colorToRgb({
    h: e,
    s: 1,
    l: .5,
    a: 1
  });
  return colorCSSManipulatorInstance.format(i, t);
}
f.displayName = "HueControl";
f.formatter = colorCSSManipulatorInstance;
export const e = $$_0;