import { NLJ, lyf } from "../figma_app/763686";
import { atom } from "../figma_app/27355";
import { O_, Kh, Q, $v, lW } from "../figma_app/370763";
export function $$s0(e, t) {
  return t && e === NLJ.SELECT ? "set-tool-default-dev-handoff" : O_(e);
}
let o = atom(e => e(Kh), (e, t, r) => {
  let i = $$s0(r, e(Q) === lyf.DEV_HANDOFF);
  $v(i);
});
let $$l1 = {
  ...lW,
  activeToolIdAtom: o
};
export const _ = $$s0;
export const u = $$l1;