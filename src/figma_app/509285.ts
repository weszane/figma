import { d4 } from "../vendor/514228";
import { AD } from "../905/871411";
import { UN } from "../905/700578";
import { R } from "../905/103090";
import { vx } from "../figma_app/175258";
import { hS } from "../905/216495";
import { $$ } from "../figma_app/62612";
import { Fk } from "../figma_app/167249";
import { Sh } from "../figma_app/889655";
import { WH } from "../figma_app/836943";
import { l5 } from "../figma_app/224338";
import { ie } from "../figma_app/524655";
export function $$m0() {
  return d4(e => {
    let {
      numSelectedByType
    } = e.mirror.selectionProperties;
    return numSelectedByType && vx(numSelectedByType, "SLIDE");
  });
}
export function $$g1() {
  let e = d4(e => Sh(e));
  return Fk((e, t) => {
    for (let r of t) {
      if (!r) return !1;
      let t = e.get(r);
      if (!t || "SLIDE" !== t.type) return !1;
    }
    return !0;
  }, e);
}
export function $$f2() {
  let e = ie();
  let t = l5();
  return e && e !== AD ? e : t.length > 0 ? t[0] : AD;
}
export function $$E3(e, t, r) {
  let n = UN().get(e);
  if (!n || !n.isSlide) return !1;
  let i = n.absoluteTransform.m12;
  let s = i + n.size.y;
  let o = n.absoluteTransform.m02;
  let l = o + n.size.x;
  let c = $$(r, t);
  let u = c.y > i && c.y < s;
  let p = c.x > o && c.x < l;
  return u && p;
}
export function $$y5(e) {
  let t = UN().get(e);
  return !!t && "SLIDE" === t.type && function e(t) {
    if (!t || "INTERACTIVE_SLIDE_ELEMENT" === t.type) return !1;
    if (t.hasEnabledAnimatedPaint || t.hasEnabledVideoPaint || t.hasEnabledStaticImagePaint) return !0;
    for (let r of t.childrenNodes ?? []) if (e(r)) return !0;
    return !1;
  }(t);
}
export function $$b4() {
  let {
    inheritTextStyleKey,
    styleIdForText
  } = R(e => ({
    inheritTextStyleKey: e.mirror.selectionProperties.inheritTextStyleKey || null,
    styleIdForText: e.mirror.selectionProperties.styleIdForText || null
  }));
  let r = WH(inheritTextStyleKey, styleIdForText, "TEXT");
  return hS(styleIdForText) && null === r;
}
export const CC = $$m0;
export const _x = $$g1;
export const e = $$f2;
export const ih = $$E3;
export const sd = $$b4;
export const yU = $$y5;