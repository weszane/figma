import { atom } from "src/figma_app/27355";
import { resourceUtils } from "src/905/989992";
export function $$a1(e, t) {
  return atom(i => i(e).transform(e => t(e, i)));
}
export function $$s0(e, t) {
  return $$a1(atom(t => {
    let i = e.map(e => t(e));
    return resourceUtils.all(i);
  }), t);
}
export const J9 = $$s0;
export const Z1 = $$a1;
