import { getCurrentFileType } from "../figma_app/976749";
import { parsePxNumber } from "../figma_app/783094";
import { tui, LdP, IuL, MJh } from "../figma_app/27776";
let s = parsePxNumber(tui);
let $$o1 = parsePxNumber(LdP);
let l = parsePxNumber(IuL);
let d = parsePxNumber(MJh);
export function $$c0() {
  return "whiteboard" === getCurrentFileType() ? s : $$o1;
}
export function $$u2() {
  return "whiteboard" === getCurrentFileType() ? l : d;
}
export function $$p3() {
  return "whiteboard" === document.body.getAttribute("data-editor-theme") ? s : $$o1;
}
export const Av = $$c0;
export const J9 = $$o1;
export const Pg = $$u2;
export const bG = $$p3;