import { useMemo } from "react";
import { ColorFormatEnum } from "../figma_app/763686";
import { hsvToRgb, rgbToHsl } from "../figma_app/273493";
import { calculateColorDifference, blendColors } from "../figma_app/191804";
import { V } from "../905/24905";
function l(e, t, i) {
  return i ? t * (e + .05) - .05 : (e + .05) / t - .05;
}
function d(e, t, i, n) {
  let r = V(n);
  let a = l(r, e, !0);
  let s = l(r, e, !1);
  return {
    lighterLuminanceColors: a >= 0 && a <= 1 ? g(t, i, n, a) : null,
    darkerLuminanceColors: s >= 0 && s <= 1 ? g(t, i, n, s) : null
  };
}
export function $$c0({
  contrastRatio: e,
  fgHue: t,
  fgAlpha: i,
  fgColor: n,
  bgColor: r
}) {
  let {
    lighterLuminanceColors,
    darkerLuminanceColors
  } = d(e + .05, t, i, r);
  let c = [...(lighterLuminanceColors ?? []), ...(darkerLuminanceColors ?? [])];
  return c.length ? c.reduce((e, t) => {
    let i = hsvToRgb(t);
    return i.r > 1 || i.g > 1 || i.b > 1 ? e : calculateColorDifference(n, i) < calculateColorDifference(n, e) ? i : e;
  }, hsvToRgb(c[0])) : null;
}
export function $$u1(e, t, i, r, a, s, o) {
  let {
    lighterLuminanceColors,
    darkerLuminanceColors
  } = useMemo(() => void 0 !== r && void 0 !== a && s ? d(i, r, a, s) : {
    lighterLuminanceColors: null,
    darkerLuminanceColors: null
  }, [i, r, a, s]);
  return useMemo(() => ({
    lighterLuminanceLine: lighterLuminanceColors ? h(lighterLuminanceColors, e, t, o) : null,
    darkerLuminanceLine: darkerLuminanceColors ? h(darkerLuminanceColors, e, t, o) : null
  }), [lighterLuminanceColors, darkerLuminanceColors, e, t, o]);
}
export function $$p3(e, t) {
  return e * t;
}
export function $$m2(e, t) {
  return (1 - e) * t;
}
function h(e, t, i, n) {
  let s = [];
  e.forEach(e => {
    let o = n === ColorFormatEnum.HSL ? rgbToHsl(hsvToRgb(e)) : e;
    let l = o.s;
    let d = n === ColorFormatEnum.HSL ? o.l : o.v;
    s.push(s.length ? "L" : "M");
    s.push((l * t).toFixed(2));
    s.push(((1 - d) * i).toFixed(2));
  });
  return s.join(" ");
}
function g(e, t, i, n) {
  let r;
  let a = [];
  let s = 0;
  let o = 0;
  let l = {
    h: e,
    s: 0,
    v: 0,
    a: t
  };
  for (r = 0; r < 1.02; r += .02) {
    r = Math.min(1, r);
    let e = s + .02 * o;
    let t = f(l = {
      h: l.h,
      s: r,
      v: e,
      a: l.a
    }, i, !0, n);
    if (null === t) break;
    o = 0 === r ? 0 : (t - s) / .02;
    s = t;
    a.push({
      h: l.h,
      s: r,
      v: t,
      a: l.a
    });
  }
  if (r < 1.02 && a.length > 0) {
    let e = f(l = {
      h: l.h,
      s: l.s,
      v: 1,
      a: l.a
    }, i, !1, n);
    null !== e && a.push({
      h: l.h,
      s: e,
      v: 1,
      a: l.a
    });
  }
  return 0 === a.length ? null : a;
}
function f(e, t, i, n) {
  let r = e => V(blendColors(t, hsvToRgb(e)));
  let l = 1;
  let d = e;
  let c = i ? d.v : d.s;
  let u = r(d);
  let p = u - n;
  let m = Math.sign(p);
  for (let e = 150; e; e--) {
    if (2e-4 > Math.abs(p)) {
      let e = i ? d.s : c;
      let t = i ? c : d.v;
      d = {
        h: d.h,
        s: e,
        v: t,
        a: d.a
      };
      return c;
    }
    let e = Math.sign(p);
    if (e !== m) {
      l /= 2;
      m = e;
    } else if (c < 0 || c > 1) break;
    c += l * (i ? -p : p);
    let t = i ? d.s : c;
    let a = i ? c : d.v;
    p = (u = r(d = {
      h: d.h,
      s: t,
      v: a,
      a: d.a
    })) - n;
  }
  return null;
}
export const L$ = $$c0;
export const MX = $$u1;
export const NT = $$m2;
export const mi = $$p3;