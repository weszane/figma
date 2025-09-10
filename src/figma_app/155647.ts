import { useCallback, useMemo } from "react";
import { rgbToHsv, rgbToHsl } from "../figma_app/273493";
import { ColorFormatEnum } from "../figma_app/763686";
import { GP } from "../figma_app/15927";
import { F } from "../905/989956";
import { TI } from "../905/713722";
import { o1, t6 } from "../figma_app/975811";
import { ZB } from "../figma_app/451499";
import { Ku } from "../figma_app/740163";
import { sb, bn } from "../figma_app/385874";
import { q } from "../905/296913";
export let $$h0 = (() => {
  let e = new o1({
    normalizeFactor: 360,
    min: 0,
    max: 1
  });
  let t = new o1({
    normalizeFactor: 100,
    min: 0,
    max: 1
  });
  let r = new t6({
    min: 0,
    max: 1
  });
  let s = new o1({
    normalizeFactor: 255,
    min: 0,
    max: 1
  });
  let c = {
    hsla: (r, n, i) => i ? `HSL ${e.format(r.h)}\xb0 ${t.format(r.s)} ${t.format(r.l)}` : `hsla(${e.format(r.h)}, ${t.format(r.s)}%, ${t.format(r.l)}%, ${n})`,
    hsba: (r, n, i) => i ? `HSB ${e.format(r.h)}\xb0 ${t.format(r.s)} ${t.format(r.v)}` : `hsba(${e.format(r.h)}, ${t.format(r.s)}%, ${t.format(r.v)}%, ${n})`,
    rgba: (e, t, r) => r ? `RGB ${s.format(e.r)} ${s.format(e.g)} ${s.format(e.b)}` : `rgba(${s.format(e.r)}, ${s.format(e.g)}, ${s.format(e.b)}, ${t})`,
    uicolor: (e, t, n) => n ? `UIColor(${r.format(e.r)}, ${r.format(e.g)}, ${r.format(e.b)}, ${t})` : `UIColor(red: ${r.format(e.r)}, green: ${r.format(e.g)}, blue: ${r.format(e.b)}, alpha: ${t})`
  };
  return () => {
    let e = Ku();
    return useCallback((t, r) => {
      let n = Number(t.a).toLocaleString("en", {
        maximumFractionDigits: 2
      });
      switch (e) {
        case ColorFormatEnum.HEX:
          let s = TI.format(t, r?.hexCSSValue ? {
            withAlpha: 1 !== t.a
          } : r?.alphaInPercent ? {
            withAlpha: 1 !== t.a,
            showDot: !0
          } : void 0);
          return `#${s}`;
        case ColorFormatEnum.RGB:
          return c.rgba(t, n, r?.eyedropperFormat);
        case ColorFormatEnum.CSS:
          if (r?.eyedropperFormat) return c.rgba(t, n, r?.eyedropperFormat);
          return F.format(t);
        case ColorFormatEnum.HSB:
          let d = rgbToHsv(t);
          return c.hsba(d, n, r?.eyedropperFormat);
        case ColorFormatEnum.HSL:
          let u = rgbToHsl(t);
          return c.hsla(u, n, r?.eyedropperFormat);
        case ColorFormatEnum.UIColor:
          return c.uicolor(t, n, r?.shortform ?? !1);
      }
    }, [e]);
  };
})();
export function $$m3(e) {
  return sb(e.type) || bn(e.type);
}
export function $$g2(e, t, r) {
  let n = new ZB(() => e);
  let i = e.opacity || 1;
  let a = [...(e.color ? [{
    ...e.color,
    a: i * e.color.a
  }] : []), ...(e.stops ? e.stops.map(e => ({
    ...e.color,
    a: i * e.color.a
  })) : [])];
  return {
    type: q.RAW,
    paint: e,
    colors: a,
    typeFormatter: n.format,
    valueFormatter: t,
    variableScope: r,
    encodedPaint: GP(e)
  };
}
export function $$f5(e, t, r, n = []) {
  return {
    type: q.STYLE,
    name: e,
    dsStyle: t,
    paints: r,
    styleGUIDs: n
  };
}
export function $$E1(e, t) {
  let r = $$h0();
  return useMemo(() => e.map(e => {
    let n = t(e);
    if (!n) return {
      value: e,
      color: void 0
    };
    let i = [n];
    let a = {
      color: n,
      opacity: n.a,
      type: "SOLID"
    };
    return {
      value: e,
      color: {
        type: q.RAW,
        encodedPaint: GP(a),
        paint: a,
        colors: i,
        typeFormatter: y,
        valueFormatter: r
      }
    };
  }), [t, e, r]);
}
let y = () => "SOLID";
export function $$b4({
  color: e,
  colorVar: t,
  variableScope: r,
  displayValue: n
}) {
  let i = [e];
  let a = {
    color: e,
    opacity: e.a,
    type: "SOLID"
  };
  t && (a.colorVar = t);
  return {
    type: q.RAW,
    encodedPaint: GP(a),
    paint: a,
    colors: i,
    typeFormatter: y,
    valueFormatter: n,
    variableScope: r
  };
}
export const Ig = $$h0;
export const OE = $$E1;
export const dc = $$g2;
export const e0 = $$m3;
export const oI = $$b4;
export const rP = $$f5;