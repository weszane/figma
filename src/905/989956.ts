import { assertNotNullish } from "../figma_app/95419";
import { H0 } from "../figma_app/191804";
import { Qf } from "../905/248569";
import { p3 } from "../figma_app/622881";
import { A } from "../905/550748";
class l extends A {
  parse(e) {
    let t = H0(e);
    return assertNotNullish(t, "Could not parse CSS");
  }
  format(e, t = "srgb") {
    if (null == e) return "";
    let i = this.normalize255(e.r);
    let n = this.normalize255(e.g);
    let r = this.normalize255(e.b);
    let o = parseFloat(e.a.toFixed(4));
    let l = p3();
    if ("srgb" === t || l) return `rgba(${i}, ${n}, ${r}, ${o})`;
    if ("display-p3" === t) return Qf(e);
    throw Error(`color space: ${t} is not supported`);
  }
  formatHSLA(e) {
    if (null == e) return "";
    let t = parseFloat(e.a.toFixed(4));
    return `hsla(${360 * e.h}deg, ${100 * e.s}%, ${100 * e.l}%, ${t})`;
  }
  getIncrementTargets(e, t) {
    let {
      start,
      end
    } = t;
    let r = start === end;
    let a = this.format(this.parse(e));
    let s = a.indexOf(",");
    let o = a.indexOf(",", s + 1);
    let l = a.indexOf(",", o + 1);
    let d = {};
    (start <= s || r && start === s + 1) && (d.r = !0);
    (start <= o && end > s + 1 || r && start === o + 1) && (d.g = !0);
    (start <= l && end > o + 1 || r && start === l + 1) && (d.b = !0);
    !(d.r || d.g || d.b) && end > l + 1 && (d.a = !0);
    return d;
  }
  getSelection(e, t) {
    let i = e.indexOf("(");
    let n = e.indexOf(",");
    let r = e.indexOf(",", n + 1);
    let a = e.indexOf(",", r + 1);
    let s = e.indexOf(")");
    if (t.a) return {
      start: a + 2,
      end: s
    };
    let o = i;
    return {
      start: t.r ? i + 1 : t.g ? n + 2 : r + 2,
      end: t.b ? a : t.g ? r : n
    };
  }
}
export let $$d0 = new l();
export const F = $$d0;