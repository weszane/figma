import { n3, IA } from "../905/859698";
var $$n7;
export function $$a8(e) {
  switch (e) {
    case "inheritTextStyleKey":
      return "TEXT";
    case "inheritFillStyleKey":
    case "inheritFillStyleKeyForStroke":
      return "FILL";
    case "inheritEffectStyleKey":
      return "EFFECT";
    case "inheritGridStyleKey":
      return "GRID";
    case "inheritExportStyleKey":
      return "EXPORT";
  }
}
export function $$s4(e) {
  switch (e) {
    case "NONE":
    default:
      return null;
    case "FILL":
      return "inheritFillStyleKey";
    case "TEXT":
      return "inheritTextStyleKey";
    case "EFFECT":
      return "inheritEffectStyleKey";
    case "GRID":
      return "inheritGridStyleKey";
  }
}
!function (e) {
  e.NONE = "NONE";
  e.FILL = "FILL";
  e.STROKE = "STROKE";
  e.TEXT = "TEXT";
  e.EFFECT = "EFFECT";
  e.GRID = "GRID";
}($$n7 || ($$n7 = {}));
let $$o2 = {
  inheritEffectStyleKey: "inheritEffectStyleName",
  inheritExportStyleKey: "inheritExportStyleName",
  inheritFillStyleKey: "inheritFillStyleName",
  inheritFillStyleKeyForStroke: "inheritFillStyleNameForStroke",
  inheritGridStyleKey: "inheritGridStyleName",
  inheritTextStyleKey: "inheritTextStyleName"
};
let $$l3 = {
  inheritEffectStyleKey: "softDeletedEffectStyleId",
  inheritExportStyleKey: "softDeletedExportStyleId",
  inheritFillStyleKey: "softDeletedFillStyleId",
  inheritFillStyleKeyForStroke: "softDeletedFillStyleForStrokeId",
  inheritGridStyleKey: "softDeletedGridStyleId",
  inheritTextStyleKey: "softDeletedTextStyleId"
};
export function $$d0(e) {
  return !!e?.key;
}
export function $$c1(e) {
  return e.startsWith("S:");
}
export function $$u6(e) {
  return e && $$d0(e) ? `S:${e.key},${e.version || ""}` : "";
}
export function $$p5(e) {
  if (!e || !$$c1(e)) return null;
  let t = e.substring(2).split(",");
  if (!t || 2 !== t.length) return null;
  let r = n3(t[0]);
  let n = IA(t[1]);
  return r === n3.INVALID ? null : {
    key: r,
    version: n
  };
}
export const $P = $$d0;
export const M7 = $$c1;
export const Ms = $$o2;
export const UC = $$l3;
export const Zk = $$s4;
export const eX = $$p5;
export const nM = $$u6;
export const s4 = $$n7;
export const sg = $$a8;