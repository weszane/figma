import { createRemovableAtomFamily, atomStoreManager, createAtomWithEquality, atom } from "../figma_app/27355";
import { setupRemovableAtomFamily } from "../figma_app/615482";
import { hR, hW } from "../905/508457";
let $$s3 = hR([], {
  changeFileBehavior: hW.RESET_VALUE_ON_FILE_CHANGE
});
let $$o1 = hR({}, {
  changeFileBehavior: hW.RESET_VALUE_ON_FILE_CHANGE
});
let $$l4 = createRemovableAtomFamily(e => hR({
  id: e,
  data: null
}, {
  changeFileBehavior: hW.RESET_VALUE_ON_FILE_CHANGE
}));
export function $$d0(e) {
  let t = $$l4(e);
  return atomStoreManager.get(t).data;
}
let $$c5 = setupRemovableAtomFamily(() => createAtomWithEquality(atom({})));
let $$u2 = setupRemovableAtomFamily(() => atom(null));
export const Dh = $$d0;
export const Dq = $$o1;
export const E_ = $$u2;
export const TN = $$s3;
export const i1 = $$l4;
export const q0 = $$c5;