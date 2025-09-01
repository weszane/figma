import { eU } from "../figma_app/27355";
import { Qw } from "../905/989992";
export function $$a1(e, t) {
  return eU(i => i(e).transform(e => t(e, i)));
}
export function $$s0(e, t) {
  return $$a1(eU(t => {
    let i = e.map(e => t(e));
    return Qw.all(i);
  }), t);
}
export const J9 = $$s0;
export const Z1 = $$a1;