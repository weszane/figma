import { Ez5, Nfd } from "../figma_app/763686";
import { md } from "../figma_app/27355";
import { parsePxNumber } from "../figma_app/783094";
import { Point } from "../905/736624";
import { _ } from "../figma_app/658134";
import { J2 } from "../figma_app/84367";
import { GQ } from "../figma_app/32128";
import { s0 } from "../figma_app/115923";
import { y9S } from "../figma_app/27776";
let $$p0 = 8;
let $$_2 = 12;
export function $$h1() {
  let e = GQ() + _;
  let t = md(s0);
  let r = J2(Ez5.editorPreferences().renderRulers) && t === Nfd.FILE;
  let h = parsePxNumber(y9S);
  return [new Point((r ? h : 0) + $$p0 + e, (r ? h : 0) + $$_2), {
    x: "left",
    y: "top"
  }];
}
export const QG = $$p0;
export const _I = $$h1;
export const r$ = $$_2;