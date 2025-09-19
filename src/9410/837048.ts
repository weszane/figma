import { colorsEqual } from "../figma_app/273493";
import { findNodeMatching } from "../figma_app/387100";
let a = "Watermelon";
let $$s21 = 1440;
let $$o6 = 900;
let $$l22 = 310;
let $$d14 = "Cherries";
let $$c19 = 395;
let $$u23 = 416;
let $$p8 = 24;
let $$h0 = 1;
let $$m5 = 4;
let f = {
  r: 1,
  g: 1,
  b: 1,
  a: 1
};
let $$g17 = {
  r: 237 / 255,
  g: 239 / 255,
  b: 228 / 255,
  a: 1
};
export function $$_13() {
  let e = ["r", "g", "b"].map(e => ({
    c: e,
    sort: Math.random()
  })).sort((e, t) => e.sort - t.sort).map(({
    c: e
  }) => e);
  return {
    r: 0,
    g: 86 / 255,
    b: 65 / 255,
    [e[0]]: 0,
    [e[1]]: 86 / 255,
    [e[2]]: Math.floor(86 * Math.random()) / 255,
    a: 1
  };
}
let $$x26 = {
  r: 225 / 255,
  g: 228 / 255,
  b: 217 / 255,
  a: 1
};
let $$y27 = {
  family: "Inter",
  style: "Regular",
  postscript: "Inter-Regular"
};
let $$b25 = "Rainier cherries";
let $$C2 = "$3.99 / lb";
let $$v1 = "Grown in Linden, CA";
let $$E28 = "Semi Bold";
let $$T20 = "Italic";
let $$w31 = "Roboto Serif";
let $$S16 = {
  r: 71 / 255,
  g: 103 / 255,
  b: 48 / 255,
  a: 1
};
let $$j30 = {
  r: 116 / 255,
  g: 121 / 255,
  b: 109 / 255,
  a: 1
};
let $$I18 = {
  value: 130 / 1.21,
  units: "PERCENT"
};
let $$k12 = {
  value: 150 / 1.21,
  units: "PERCENT"
};
export function $$N4(e, t) {
  return !(!R(e) || !findNodeMatching(e => e.name === a, t, e) || findNodeMatching(e => e.name === $$d14, t, e));
}
export function $$A11(e, t) {
  return !!function (e) {
    let t = e.parentNode;
    return "FRAME" === e.type && e.name === $$d14 && e.absoluteBoundingBox.w === $$c19 && e.absoluteBoundingBox.h === $$u23 && !!t && R(t);
  }(e) && (void 0 === t || e.childCount === t);
}
export function $$O29(e, t) {
  return !!($$A11(e, t) && 0 === e.cornerRadius && e.strokePaints?.data?.length === 0 && colorsEqual(e.fills[0]?.color, f));
}
export function $$L3(e, t) {
  if (!$$O29(e, t)) return !1;
  for (let t of e.childrenNodes) if ("TEXT" === t.type && !$$B15(t)) return !1;
  return !0;
}
function R(e) {
  return !!e && "FRAME" === e.type && "Products" === e.name && e.absoluteBoundingBox.w === $$s21 && e.absoluteBoundingBox.h === $$o6;
}
export function $$D10(e, t) {
  let i = e.parentNode;
  return "FRAME" === e.type && e.name === a && !!i && $$N4(i, t);
}
export function $$M7(e) {
  return [{
    type: "SOLID",
    color: e,
    blendMode: "NORMAL",
    opacity: 1,
    visible: !0
  }];
}
export function $$P24(e) {
  return "FRAME" === e.type && e.absoluteBoundingBox.w >= 90 && !!e.parentNode && 0 === e.childCount;
}
export let $$F9 = "Hello";
export function $$B15(e, t) {
  if (void 0 !== t && e.name.toLowerCase() !== t.toLowerCase() || "TEXT" !== e.type || 12 !== e.fontSize || e.fontName.family !== $$y27.family || e.fontName.style !== $$y27.style) return !1;
  let i = e.parentNode;
  return !!i && $$O29(i, $$m5);
}
export const $5 = $$h0;
export const $j = $$v1;
export const A8 = $$C2;
export const AO = $$L3;
export const C7 = $$N4;
export const Dl = $$m5;
export const HX = $$o6;
export const IM = $$M7;
export const LW = $$p8;
export const N1 = $$F9;
export const Q$ = $$D10;
export const TT = $$A11;
export const U4 = $$k12;
export const Ui = $$_13;
export const Ur = $$d14;
export const Ut = $$B15;
export const YH = $$S16;
export const YI = $$g17;
export const _q = $$I18;
export const b7 = $$c19;
export const bO = $$T20;
export const e7 = $$s21;
export const g1 = $$l22;
export const mg = $$u23;
export const ok = $$P24;
export const qw = $$b25;
export const ro = $$x26;
export const wG = $$y27;
export const x0 = $$E28;
export const xK = $$O29;
export const yz = $$j30;
export const zk = $$w31;