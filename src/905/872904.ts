import { atom } from "../figma_app/27355";
import { D } from "../905/347702";
import { selectCurrentFile, openFileAtom } from "../figma_app/516028";
import { dq, h0 } from "../905/845253";
export function $$o1() {
  return $$l2(selectCurrentFile(), dq());
}
let $$l2 = D((e, t) => e ? e.parentOrgId : t);
let $$d0 = atom(e => $$l2(e(openFileAtom), e(h0)));
export const DQ = $$d0;
export const LH = $$o1;
export const ag = $$l2;