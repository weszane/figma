import { xx } from "../figma_app/815945";
import { getI18nString } from "../905/303541";
import { hS, oV, E7 } from "../905/216495";
var s = (e => (e[e.OLD = 0] = "OLD", e[e.FEB19 = 1] = "FEB19", e))(s || {});
class o {
  constructor(e, t, i, n) {
    this.textUserLayoutVersion = e;
    this.intrinsicLineHeight = t;
    this.fontSize = i;
    this.lineHeight = n;
  }
  withLineHeight(e) {
    return new o(this.textUserLayoutVersion, this.intrinsicLineHeight, this.fontSize, e);
  }
}
export let $$l4 = xx(e => new o(null != e.textUserLayoutVersion && hS(e.textUserLayoutVersion) ? 0 === e.textUserLayoutVersion ? 0 : 1 : oV, e.intrinsicLineHeight ?? null, e.fontSize, e.lineHeight));
export function $$d0(e) {
  let {
    intrinsicLineHeight,
    fontSize,
    lineHeight
  } = e;
  if (hS(lineHeight)) switch (lineHeight.units) {
    case "RAW":
      return lineHeight.value;
    case "PIXELS":
      if (!hS(fontSize)) return;
      return lineHeight.value / fontSize;
    case "PERCENT":
      let r = E7(intrinsicLineHeight);
      if (null == r) return;
      return lineHeight.value / 100 * r;
  }
}
export function $$c2(e, t) {
  if (null == t || "PERCENT" !== t.units || $$h1(t)) return t;
  let i = $$d0(e.withLineHeight(t));
  return null == i ? t : {
    value: i,
    units: "RAW"
  };
}
export function $$u5(e) {
  let {
    textUserLayoutVersion,
    intrinsicLineHeight,
    fontSize
  } = e;
  let r = E7(e.lineHeight);
  if (r) switch (r.units) {
    case "RAW":
      if (!hS(fontSize)) return;
      return p(r.value * fontSize, textUserLayoutVersion);
    case "PIXELS":
      return r.value;
    case "PERCENT":
      let s = E7(intrinsicLineHeight);
      if (null == s || !hS(fontSize)) return;
      return p(r.value / 100 * s * fontSize, textUserLayoutVersion);
  }
}
function p(e, t) {
  return t === oV || 0 === t ? e : Math.round(e);
}
export function $$m3(e) {
  let {
    lineHeight
  } = e;
  if (!hS(lineHeight)) return getI18nString("fullscreen.mixed");
  if ($$h1(lineHeight)) return getI18nString("fullscreen.auto");
  switch (lineHeight.units) {
    case "PERCENT":
      let i = $$d0(e);
      if (null == i) return "Mixed";
      return `${parseFloat((100 * i).toFixed(1))}%`;
    case "PIXELS":
      return `${parseFloat(lineHeight.value.toFixed(1))}`;
    case "RAW":
      return `${parseFloat((100 * lineHeight.value).toFixed(1))}%`;
  }
}
export function $$h1(e) {
  return !!(null != e && hS(e)) && "PERCENT" === e.units && .1 > Math.abs(e.value - 100);
}
export const F6 = $$d0;
export const LS = $$h1;
export const TK = $$c2;
export const UH = $$m3;
export const a6 = $$l4;
export const oZ = $$u5;