import { jsx } from "react/jsx-runtime";
import { qE } from "../figma_app/492908";
import { w_, Ih } from "../figma_app/273493";
import { Uz } from "../905/63728";
import { o6 } from "../figma_app/806412";
import { Point } from "../905/736624";
import { F } from "../905/989956";
import { Eh } from "../figma_app/837840";
import { Ep } from "../figma_app/504823";
import { VG } from "../figma_app/622881";
import { MX, Kf } from "../905/306220";
import { W } from "../905/979098";
let g = class e extends o6 {
  constructor(t) {
    super(t);
    this.offset = new Point(0, 0);
    this.mouseCallback = (e, t) => {
      this.props.changeCallback(this.valueToColor(e), t);
    };
    this.renderHslCanvas = t => {
      let i = this.props.colorProfile ? VG(this.props.colorProfile) : "srgb";
      let n = Eh(t, i);
      if (!n) return;
      n.fillStyle = e.formatter.format(w_(Ih(this.props.color)), i);
      n.fillRect(0, 0, this.props.size, this.props.size);
      let r = n.createLinearGradient(0, 0, this.props.size, 0);
      r.addColorStop(0, e.formatter.format({
        r: .5,
        g: .5,
        b: .5,
        a: 1
      }, i));
      r.addColorStop(1, e.formatter.format({
        r: .5,
        g: .5,
        b: .5,
        a: 0
      }, i));
      n.fillStyle = r;
      n.fillRect(0, 0, this.props.size, this.props.size);
      let s = n.createLinearGradient(0, 0, 0, this.props.size);
      s.addColorStop(0, e.formatter.format({
        r: 1,
        g: 1,
        b: 1,
        a: 1
      }, i));
      s.addColorStop(.499999, e.formatter.format({
        r: 1,
        g: 1,
        b: 1,
        a: 0
      }, i));
      s.addColorStop(.500001, e.formatter.format({
        r: 0,
        g: 0,
        b: 0,
        a: 0
      }, i));
      s.addColorStop(1, e.formatter.format({
        r: 0,
        g: 0,
        b: 0,
        a: 1
      }, i));
      n.fillStyle = s;
      n.fillRect(0, 0, this.props.size, this.props.size);
    };
    this.renderHsvCanvas = t => {
      let i = this.props.colorProfile ? VG(this.props.colorProfile) : "srgb";
      let n = Eh(t, i);
      if (!n) return;
      n.fillStyle = e.formatter.format(w_(Ih(this.props.color)), i);
      n.fillRect(0, 0, this.props.size, this.props.size);
      let r = n.createLinearGradient(0, 0, this.props.size, 0);
      r.addColorStop(0, e.formatter.format({
        r: 1,
        g: 1,
        b: 1,
        a: 1
      }, i));
      r.addColorStop(1, e.formatter.format({
        r: 1,
        g: 1,
        b: 1,
        a: 0
      }, i));
      n.fillStyle = r;
      n.fillRect(0, 0, this.props.size, this.props.size);
      let s = n.createLinearGradient(0, 0, 0, this.props.size);
      s.addColorStop(0, e.formatter.format({
        r: 0,
        g: 0,
        b: 0,
        a: 0
      }, i));
      s.addColorStop(1, e.formatter.format({
        r: 0,
        g: 0,
        b: 0,
        a: 1
      }, i));
      n.fillStyle = s;
      n.fillRect(0, 0, this.props.size, this.props.size);
    };
    this.colorHandle = e => {
      let t = {
        ...this.valueToColor(e),
        a: 1
      };
      return w_(t);
    };
    this.colorToValue = e => new Point(e.s, 1 - ("l" in e ? e.l : e.v));
    this.valueToColor = e => {
      let t = {
        ...this.props.color,
        s: e.x
      };
      t["l" in t ? "l" : "v"] = 1 - e.y;
      return t;
    };
    this.wheelCallback = (e, t, i) => {
      if (this.props.ignoreWheelCallback || i) return;
      let n = (-e.x + e.y) / 2e3;
      let {
        h,
        a
      } = this.props.color;
      if (t) {
        a += n;
        let e = 10 * (a = n > 0 ? Math.ceil(1e3 * a) / 1e3 : Math.floor(1e3 * a) / 1e3);
        .03 >= Math.abs(e - Math.round(e)) && (a = Math.round(e) / 10);
        a > 1 ? a = 1 : a < 0 && (a = 0);
      } else {
        for (r += n; h > 1;) h--;
        for (; h < 0;) h++;
      }
      this.props.changeCallback({
        ...this.props.color,
        h,
        a
      }, !0);
    };
    this.keyDownCallback = e => {
      let t = W(e);
      let i = {
        ...this.props.color
      };
      switch (e.keyCode) {
        case Uz.LEFT_ARROW:
        case Uz.RIGHT_ARROW:
          i.s = qE(i.s + t / 100, 0, 1);
          break;
        case Uz.UP_ARROW:
        case Uz.DOWN_ARROW:
          "l" in i ? i.l = qE(i.l + t / 100, 0, 1) : i.v = qE(i.v + t / 100, 0, 1);
      }
      this.props.changeCallback(i, !0);
    };
    let i = MX(t.uiVersion);
    this.offset = new Point(0, -i / 2);
  }
  render() {
    let e = this.props.colorProfile;
    return jsx(Kf, {
      canvasWrapperStyles: this.props.canvasWrapperStyles,
      colorHandle: this.colorHandle,
      colorProfile: e,
      containerClass: this.props.containerClass,
      ghostStyles: this.props.ghostStyles,
      handlePadding: !1,
      height: this.props.size,
      hitBoxMargin: 0,
      keyDownCallback: this.keyDownCallback,
      mouseCallback: this.mouseCallback,
      offset: this.offset,
      recordingKey: this.props.recordingKey,
      renderCanvas: "l" in this.props.color ? this.renderHslCanvas : this.renderHsvCanvas,
      value: this.colorToValue(this.props.color),
      wheelCallback: this.wheelCallback,
      width: this.props.size,
      children: this.props.overlay
    });
  }
};
export function $$f0(e) {
  let t = Ep();
  return jsx(g, {
    ...e,
    colorProfile: t,
    uiVersion: "ui3"
  });
}
g.displayName = "SlvControl";
g.formatter = F;
export const T = $$f0;