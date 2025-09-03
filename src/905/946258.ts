import { throwTypeError } from "../figma_app/465776";
let $$r3 = "https://help.figma.com/hc/en-us/articles/32801027692183-Troubleshoot-the-Figma-Font-installer";
let $$a4 = "https://help.figma.com/hc/en-us/articles/360039956894-Add-a-font-to-Figma-Design#h_01HHJPRGW7HM4KP1G53T9K1G95";
function s({
  baseUrl: e,
  shouldUseLocalFontIndex: t
}) {
  return void 0 !== e ? e : t ? "http://localhost:8003/font" : window.location?.hostname === "figma-gov.com" ? "https://static.figma-gov.com/font" : "https://static.figma.com/font";
}
export function $$o1(e) {
  return e.shouldUse250317Index ? "798305269cb5be7625b77c5a0ed170a8" : "168b60c183c56896337507ffc5acc38f";
}
export function $$l2(e) {
  return `${s(e)}/${function (e) {
    let t = $$o1(e);
    switch (e.format) {
      case "json":
        return `index_${t}.json`;
      case "kiwi":
        return `index_${t}.kiwi.json`;
      default:
        throwTypeError(e.format);
    }
  }(e)}`;
}
let $$d10 = "SFPro";
let $$c11 = "SF Pro";
let $$u8 = "SF Pro Rounded";
let $$p7 = "SF Compact";
let $$m0 = "SF Compact Rounded";
export function $$h9(e, t) {
  return `${s(t)}/${e}`;
}
let g = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
};
let f = {
  100: "Thin",
  200: "Extra Light",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "Semi Bold",
  700: "Bold",
  800: "Extra Bold",
  900: "Black"
};
export function $$_5(e) {
  return {
    fontWeight: g[e.replace(/italic/gi, "").replace(/ /g, "").toLowerCase()] ?? 400,
    italic: e.includes("Italic")
  };
}
export function $$A6(e, t) {
  if (!e) return t ? "Italic" : "Regular";
  let i = f[e] ?? "Regular";
  return t ? "Regular" === i ? "Italic" : `${i} Italic` : i;
}
export const D7 = $$m0;
export const Dg = $$o1;
export const K = $$l2;
export const MJ = $$r3;
export const Nc = $$a4;
export const PT = $$_5;
export const SJ = $$A6;
export const T_ = $$p7;
export const V1 = $$u8;
export const cp = $$h9;
export const qI = $$d10;
export const rj = $$c11;