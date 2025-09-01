import { Zm } from "../905/270781";
import { dK, Sh } from "../figma_app/889655";
export let $$a1 = Zm(e => {
  let t = dK(e);
  let i = Sh(e);
  let n = [];
  i.forEach(e => {
    let i = t.get(e);
    i && n.push($$s0(i) ? "IMAGE" : i.type);
  });
  return n;
});
export function $$s0(e) {
  return !!(e.fills.some(o) && 0 === e.childCount);
}
function o(e) {
  return "IMAGE" === e.type && e.image && e.visible && 0 !== e.opacity;
}
export const A = $$s0;
export const l = $$a1;