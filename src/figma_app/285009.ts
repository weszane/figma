import { ColorOptions, AppStateTsApi, BorderStyle } from "../figma_app/763686";
import { F } from "../905/989956";
import { BV, Mr } from "../figma_app/153399";
import { uM, wv, Iz, g5 } from "../905/888175";
let $$o9 = 4;
let $$l8 = 8;
let $$d2 = {
  0: 16,
  1: 12,
  2: uM,
  3: 6,
  4: wv
};
let $$c5 = {
  0: 56,
  1: Iz,
  2: 32,
  3: g5,
  4: 16
};
let $$u7 = [{
  type: "SOLID",
  color: BV(ColorOptions.BLACK, "base")
}];
let $$p12 = wv;
let $$_13 = 1;
let $$h0 = [{
  type: "SOLID",
  color: BV(ColorOptions.HIGHLIGHT_YELLOW, "highlight")
}];
let $$m3 = [{
  type: "SOLID",
  color: BV(ColorOptions.WHITE, "base")
}];
export function $$g1() {
  return BV(AppStateTsApi?.uiState().showUI3Colors.getCopy() ? ColorOptions.STICKY_GRAY_UI3 : ColorOptions.STICKY_GRAY_LIGHT, "sticky");
}
let $$f10 = F.parse(Mr(ColorOptions.WHITE));
let $$E11 = F.parse(Mr(ColorOptions.GRAY_DARK, "rgba(0,0,0,0)"));
let $$y6 = BorderStyle.SOLID;
let $$b4 = BV(ColorOptions.GRAY, "baseLight");
export const Dq = $$h0;
export const E$ = $$g1;
export const EC = $$d2;
export const GJ = $$m3;
export const LX = $$b4;
export const Pn = $$c5;
export const T7 = $$y6;
export const XQ = $$u7;
export const _W = $$l8;
export const eQ = $$o9;
export const n6 = $$f10;
export const ns = $$E11;
export const qB = $$p12;
export const zQ = $$_13;