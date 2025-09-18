import { ColorSpaceEnum, ColorConversionEnum, Fullscreen } from "../figma_app/763686";
import { jg } from "../905/707098";
import { nk } from "../905/432392";
import { t2 } from "../905/8035";
import { FormatDisplayP3Color } from "../905/248569";
import { kz } from "../905/77776";
export let $$d0 = {
  colorProfile: ColorSpaceEnum.SRGB,
  colorspaceConversion: ColorConversionEnum.NO_CONVERSION
};
function c(e) {
  return Math.round(255 * e);
}
function u(e) {
  return ("00" + Math.round(255 * e).toString(16).toUpperCase()).slice(-2);
}
function p(e) {
  let t = e.a;
  return t2(t) && 1 !== t;
}
export function $$m1(e, t = 0) {
  return `${nk(100 * e, t)}%`;
}
export class $$h2 {
  constructor(e, t, i = 1, r = $$d0, a = null) {
    this.color = e;
    this.preferences = t;
    this.opacity = i;
    this.colorManagement = r;
    this.variableValue = a;
    if ("colorspaceConversion" in r && void 0 !== r.colorspaceConversion && r.colorspaceConversion !== ColorConversionEnum.NO_CONVERSION && void 0 !== Fullscreen && (this.color = function (e) {
      return {
        r: e.red,
        g: e.green,
        b: e.blue,
        a: "alpha" in e && 1 !== e.alpha ? e.alpha : void 0
      };
    }(Fullscreen.applyConversionToColor(function (e) {
      return {
        red: e.r,
        green: e.g,
        blue: e.b,
        alpha: "a" in e && e.a ? e.a : 1
      };
    }(e), r.colorspaceConversion))), e.r > 1 || e.g > 1 || e.b > 1) throw Error(`Expected normalised color values (between 0 and 1) but got (${e.r}, ${e.g}, ${e.b})`);
  }
  get rawColor() {
    return new $$h2(this.color, this.preferences, this.opacity, this.colorManagement);
  }
  get value() {
    return this.hasResolvedVariable() ? new kz(this.variableValue.name, this.rawColor, this.preferences, this.variableValue?.status === jg.Resolved ? this.variableValue : void 0).value : this.colorManagement.colorProfile === ColorSpaceEnum.DISPLAY_P3 ? FormatDisplayP3Color(this.color, this.opacity) : p(this.color) || 1 !== this.opacity ? function (e, t = 1) {
      let {
        r: _r,
        g,
        b,
        a: _a = 1
      } = e;
      return `rgba(${c(_r)}, ${c(g)}, ${c(b)}, ${(_a * t).toFixed(2)})`;
    }(this.color, this.opacity) : function (e, t = 1) {
      if (p(e) || 1 !== t) {
        let i = function (e, t = 1) {
          let {
            r: _r2,
            g,
            b,
            a: _a2 = 1
          } = e;
          return `${u(_r2)}${u(g)}${u(b)}${u(_a2 * t)}`;
        }(e, t);
        return i[0] === i[1] && i[2] === i[3] && i[4] === i[5] && i[6] === i[7] ? `#${i[0]}${i[2]}${i[4]}${i[6]}` : `#${i}`;
      }
      {
        let t = `${u(e.r)}${u(e.g)}${u(e.b)}`;
        return t[0] === t[1] && t[2] === t[3] && t[4] === t[5] ? `#${t[0]}${t[2]}${t[4]}` : `#${t}`;
      }
    }(this.color);
  }
  hasResolvedVariable() {
    return this.variableValue?.status === jg.Resolved;
  }
  equals(e) {
    return this.value === e.value;
  }
}
export const DX = $$d0;
export const EG = $$m1;
export const Q1 = $$h2;
