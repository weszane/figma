import { H0, X9 } from "../figma_app/191804";
import { getI18nString } from "../905/303541";
import { Q8, gl, SX } from "../905/216495";
import { A } from "../905/550748";
class o extends A {
  constructor(e = {}) {
    super();
    this.options = e;
  }
  parse(e, t) {
    let i = t?.a ?? 1;
    let r = H0(e, this.options.parseAlpha ? i : void 0);
    if (!r) throw Error("Could not parse hex");
    return this.options.parseAlpha ? r : X9(r, i);
  }
  format(e) {
    if (!e) return "";
    let t = this.floatToHex(e.r);
    let i = this.floatToHex(e.g);
    let n = this.floatToHex(e.b);
    if (this.options.formatAlpha && 1 !== e.a) {
      let r = this.floatToHex(e.a);
      return `#${t}${i}${n}${r}`.toUpperCase();
    }
    return `#${t}${i}${n}`.toUpperCase();
  }
  formatForAndroid(e) {
    if (1 === e.a) return this.format(e);
    let t = this.floatToHex(e.a);
    let i = this.floatToHex(e.r);
    let n = this.floatToHex(e.g);
    let r = this.floatToHex(e.b);
    return `#${t}${i}${n}${r}`.toUpperCase();
  }
  getIncrementTargets(e, t) {
    let {
      start,
      end
    } = t;
    let r = start === end;
    let a = {};
    (start <= 2 || r && 3 === start) && (a.r = !0);
    (start <= 4 && end > 3 || r && 5 === start) && (a.g = !0);
    (start <= 6 && end > 5 || r && 7 === start) && (a.b = !0);
    return a;
  }
  getSelection(e, t) {
    let i = {
      start: 1,
      end: 1
    };
    t.r ? i.start = 1 : t.g ? i.start = 3 : i.start = 5;
    t.b ? i.end = 7 : t.g ? i.end = 5 : i.end = 3;
    return i;
  }
  floatToHex(e) {
    let t = this.normalize255(e).toString(16);
    1 === t.length && (t = "0" + t);
    return t;
  }
}
export class $$l3 extends o {
  constructor(e = {}) {
    super(e);
  }
  format(e, {
    withAlpha: t = !1,
    showDot: i = !1
  } = {}) {
    let n = this.floatToHex(e.r);
    let r = this.floatToHex(e.g);
    let a = this.floatToHex(e.b);
    let s = this.floatToHex(e.a);
    let o = (100 * e.a).toLocaleString("en", {
      maximumFractionDigits: 2
    }) + "%";
    return t ? i ? `${n}${r}${a} \xb7 ${o}`.toUpperCase() : `${n}${r}${a}${s}`.toUpperCase() : `${n}${r}${a}`.toUpperCase();
  }
  getIncrementTargets(e, t) {
    let {
      start,
      end
    } = t;
    let r = start === end;
    let a = {};
    (start <= 1 || r && 2 === start) && (a.r = !0);
    (start <= 3 && end > 2 || r && 4 === start) && (a.g = !0);
    (start <= 5 && end > 4 || r && 6 === start) && (a.b = !0);
    return a;
  }
  getSelection(e, t) {
    let i = {
      start: 1,
      end: 1
    };
    t.r ? i.start = 1 : t.g ? i.start = 3 : i.start = 5;
    t.b ? i.end = 7 : t.g ? i.end = 5 : i.end = 3;
    i.start -= 1;
    i.end -= 1;
    return i;
  }
}
export class $$d0 extends $$l3 {
  constructor(e = {}) {
    super(e);
  }
  parse(e, t) {
    return "auto".startsWith(e.toLowerCase()) ? Q8 : super.parse(e, t);
  }
  format(e) {
    return e ? gl(e) ? getI18nString("fullscreen.mixed") : SX(e) ? getI18nString("fullscreen.properties_panel.stack_panel.auto") : super.format(e) : "";
  }
  clamp(e) {
    return SX(e) ? e : super.clamp(e);
  }
}
let $$c4 = new o();
let $$u1 = new o({
  parseAlpha: !0,
  formatAlpha: !0
});
let $$p2 = new $$l3();
new $$d0();
export const C1 = $$d0;
export const Nv = $$u1;
export const TI = $$p2;
export const rC = $$l3;
export const z5 = $$c4;