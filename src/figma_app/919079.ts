import { jsxs, jsx } from "react/jsx-runtime";
import { PureComponent } from "react";
import { throwTypeError } from "../figma_app/465776";
import s from "classnames";
import { B } from "../905/714743";
import { ZN, v, TT, Ww, o9, WH, _W, sM, Dt, JR, uS, Pu, xi, KK, M6, A4, uo, FZ, B4, yZ, C0, KT, zB, ko, Iv, rL, Xo, vg, rJ, vT, Fw, Uu, gL, _X, Sx, t1, aK, rw, W5, eD } from "../905/937197";
import { A } from "../svg/545021";
var o = s;
var $$u3 = (e => (e[e.INVERT = 0] = "INVERT", e[e.DEFAULT = 1] = "DEFAULT", e[e.TOOLBAR = 2] = "TOOLBAR", e[e.TERTIARY = 3] = "TERTIARY", e[e.SUCCESS = 4] = "SUCCESS", e[e.WARNING = 5] = "WARNING", e[e.WARNING_TERTIARY = 6] = "WARNING_TERTIARY", e[e.DANGER = 7] = "DANGER", e[e.DESIGN = 8] = "DESIGN", e[e.COMPONENT = 9] = "COMPONENT", e[e.FIGJAM = 10] = "FIGJAM", e[e.BRAND = 11] = "BRAND", e[e.DISABLED = 12] = "DISABLED", e[e.INFORMATIONAL = 13] = "INFORMATIONAL", e[e.LIGHT = 14] = "LIGHT", e[e.TOOLBAR_SELECTED = 15] = "TOOLBAR_SELECTED", e[e.DEFAULT_TRANSLUCENT = 16] = "DEFAULT_TRANSLUCENT", e[e.LIGHT_TRANSLUCENT = 17] = "LIGHT_TRANSLUCENT", e))($$u3 || {});
var $$p2 = (e => (e[e.SMALL = 0] = "SMALL", e[e.LARGE = 1] = "LARGE", e[e.EXTRA_LARGE = 2] = "EXTRA_LARGE", e))($$p2 || {});
var $$_1 = (e => (e.PRO_TRIAL_EXPIRED = "Pro trial expired badge", e.PRO_TRIAL = "Pro trial badge", e.FREE = "Free badge", e.LOCKED = "Locked Team Badge", e.PROFESSIONAL = "Professional badge", e.DEV_MODE_TRIAL = "Dev Mode trial badge", e))($$_1 || {});
export class $$h0 extends PureComponent {
  render() {
    let e = this.props.size || 0;
    let t = {
      0: ZN,
      1: v,
      2: TT
    }[e];
    let r = {
      0: Ww,
      1: o9,
      2: WH
    }[e];
    let i = function (e, t = !1) {
      switch (e) {
        case 0:
          return t ? _W : sM;
        case 1:
          return t ? Dt : JR;
        case 3:
          return t ? Dt : uS;
        case 4:
          return t ? Pu : xi;
        case 5:
          return t ? KK : M6;
        case 6:
          return t ? A4 : uo;
        case 7:
          return t ? FZ : B4;
        case 8:
          return t ? yZ : C0;
        case 9:
          return t ? KT : zB;
        case 10:
          return t ? ko : Iv;
        case 11:
          return t ? rL : Xo;
        case 2:
          return t ? vg : rJ;
        case 15:
          return vT;
        case 13:
          return t ? Dt : Fw;
        case 12:
          return t ? Dt : Uu;
        case 14:
          return t ? gL : _X;
        case 16:
          return Sx;
        case 17:
          return t1;
        default:
          throwTypeError(e, "cases exhausted: this shouldn't happen");
      }
    }(this.props.color, this.props.subtle);
    let s = this.props.subtle ? aK : "";
    let u = o()(t, this.props.padding ? void 0 : r, i, s, this.props.className, this.props.flex ? rw : W5);
    return jsxs("span", {
      className: u,
      "data-testid": this.props.dataTestId,
      "data-tooltip": this.props.dataTooltip,
      "data-tooltip-interactive": this.props.dataTooltipInteractive,
      "data-tooltip-max-width": this.props.dataTooltipMaxWidth,
      "data-tooltip-meta": this.props.dataTooltipMeta,
      "data-tooltip-offset-x": this.props.dataTooltipShowRight ? 8 : 0,
      "data-tooltip-show-above": this.props.dataTooltipShowAbove,
      "data-tooltip-show-below": this.props.dataTooltipShowBelow,
      "data-tooltip-show-right": this.props.dataTooltipShowRight,
      "data-tooltip-timeout-delay": this.props.dataTooltipTimeout,
      "data-tooltip-type": this.props.dataTooltipType,
      onClick: this.props.onClick,
      onMouseUp: this.props.onMouseUp,
      onPointerUp: this.props.onPointerUp,
      role: this.props.onClick ? "button" : void 0,
      style: {
        padding: this.props.padding ? `${this.props.padding.y}px ${this.props.padding.x}px` : void 0
      },
      tabIndex: this.props.onClick ? 0 : void 0,
      children: [this.props.icon, "function" != typeof this.props.text ? this.props.text : jsx(this.props.text, {}), this.props.onClose && jsx(B, {
        className: eD,
        onClick: this.props.onClose,
        svg: A
      })]
    });
  }
}
export const Ex = $$h0;
export const _Y = $$_1;
export const vj = $$p2;
export const zE = $$u3;
