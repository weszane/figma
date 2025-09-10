import { d } from "../905/78252";
import { atom } from "../figma_app/27355";
import { setupRemovableAtomFamily } from "../figma_app/615482";
let $$a1 = d([], e => e.getRoot().childrenNodes.filter(e => !e.isInternalOnlyNode).flatMap(e => e.childrenNodes.filter(e => e.isResponsiveSet).map(e => e.guid)));
let $$s0 = setupRemovableAtomFamily(() => atom([]), {
  preserveValue: !0
});
export const S = $$s0;
export const V = $$a1;