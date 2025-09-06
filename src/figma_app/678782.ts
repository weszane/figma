import { useSelector } from "../vendor/514228";
import { selectWithShallowEqual } from "../905/103090";
import { Yh } from "../figma_app/357047";
export function $$s1(e) {
  return useSelector(t => Yh(t.mirror.appModel, e));
}
export function $$o0(e) {
  return selectWithShallowEqual(t => {
    let r = {};
    for (let n of e) r[n] = Yh(t.mirror.appModel, n);
    return r;
  });
}
export function $$l2(e) {
  return useSelector(t => e.every(e => Yh(t.mirror.appModel, e)));
}
export function $$d3(e) {
  return useSelector(t => e.some(e => Yh(t.mirror.appModel, e)));
}
export const Ku = $$o0;
export const Zr = $$s1;
export const vm = $$l2;
export const yU = $$d3;