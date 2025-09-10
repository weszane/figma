import { jsx } from "react/jsx-runtime";
import { clamp } from "../figma_app/492908";
import { A } from "../905/920165";
import { colorToRgb } from "../figma_app/273493";
import { RecordingPureComponent } from "../figma_app/878298";
import { Point } from "../905/736624";
import { getI18nString } from "../905/303541";
import { F } from "../905/989956";
import { Eh } from "../figma_app/837840";
import { Ep } from "../figma_app/504823";
import { VG } from "../figma_app/622881";
import { L } from "../905/173490";
import { MX, Kf } from "../905/306220";
import { W } from "../905/979098";
let _ = class e extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.mouseCallback = (e, t) => {
      this.props.changeCallback(this.valueToColor(e), t);
    };
    this.keyDownCallback = e => {
      let t = W(e);
      let i = clamp(this.props.color.a + t / 100, 0, 1);
      this.props.changeCallback({
        ...this.props.color,
        a: i
      }, !0);
    };
    this.renderCanvas = (t, i) => {
      let n = this.props.colorProfile ? VG(this.props.colorProfile) : "srgb";
      let r = Eh(t, n);
      if (!r) return;
      let a = r.createPattern(L, "repeat");
      if (!a) return;
      let o = MX(this.props.uiVersion);
      r.fillStyle = a;
      r.fillRect(0, 0, this.props.width + o, o);
      let l = colorToRgb(this.valueToColor(i));
      let d = r.createLinearGradient(o / 2, 0, this.props.width + o / 2, 0);
      d.addColorStop(0, e.formatter.format({
        ...l,
        a: 0
      }, n));
      d.addColorStop(1, e.formatter.format({
        ...l,
        a: 1
      }, n));
      r.fillStyle = d;
      r.fillRect(0, 0, this.props.width + o, o);
    };
    this.colorHandle = e => {
      let t;
      let i;
      let n;
      let r = colorToRgb(this.valueToColor(e));
      return {
        r: (t = r.r, 1 - r.a + t * r.a),
        g: (i = r.g, 1 - r.a + i * r.a),
        b: (n = r.b, 1 - r.a + n * r.a),
        a: 1
      };
    };
    this.colorToValue = e => new Point(e.a, 0);
    this.valueToColor = e => ({
      ...this.props.color,
      a: Math.round(100 * e.x) / 100
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
export function $$A0(e) {
  let t = Ep();
  let i = 100 * e.color.a;
  return jsx(A, {
    min: 0,
    max: 100,
    step: 1,
    bigStep: 10,
    value: i,
    onChange: (t, {
      commit: i
    }) => {
      e.changeCallback({
        ...e.color,
        a: t / 100
      }, i);
    },
    "aria-label": getI18nString("fullscreen.scrubbable.opacity"),
    style: function (e, t, i) {
      let n;
      let r;
      let a;
      let o = colorToRgb(e);
      let l = VG(t);
      return {
        "--fpl-slider-thumb-bg": F.format({
          r: (n = o.r, 1 - o.a + n * o.a),
          g: (r = o.g, 1 - o.a + r * o.a),
          b: (a = o.b, 1 - o.a + a * o.a),
          a: 1
        }, l),
        "--fpl-slider-track-bg": function (e, t, i, n) {
          let r = `linear-gradient(90deg, ${F.format({
            ...e,
            a: 0
          }, i)} 0 ${t}, ${F.format({
            ...e,
            a: 1
          }, i)} calc(100% - ${t}) 100%)`;
          return `${r}, ${function (e) {
            let t = (2 / e * 100).toFixed(2);
            return `url('data:image/svg+xml;utf8,${escape('<svg width="2" height="2" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h1v2h1V1H0" fill-rule="nonzero" fill="#e1e1e1"/></svg>')}') 0 0 / auto ${t}%`;
          }(3)}, #fff`;
        }(o, "calc(var(--fpl-slider-height) / 2)", l, 3)
      };
    }(e.color, t, 0),
    recordingKey: e.recordingKey
  });
}
_.displayName = "OpacityControl";
_.formatter = F;
export const xp = $$A0;