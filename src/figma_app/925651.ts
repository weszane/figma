import { eD } from "../figma_app/876459";
import { o as _$$o } from "../figma_app/516794";
let $$a2 = _$$o();
document.addEventListener("visibilitychange", d);
eD && $$a2.subscribe(e => {
  s = e;
  d();
});
let s = null;
let o = document.visibilityState;
let l = _$$o();
function d() {
  let e = "hidden" === document.visibilityState || "hidden" === s ? "hidden" : "visible";
  e !== o && (o = e, l.emit(e));
}
export function $$c0(e) {
  return l.subscribe(e);
}
export function $$u1() {
  return o;
}
export const B1 = $$c0;
export const Zt = $$u1;
export const bM = $$a2;