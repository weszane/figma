import { getSingletonSceneGraph } from "../905/700578";
import { atom, loadable, createRemovableAtomFamily } from "../figma_app/27355";
import { openFileKeyAtom } from "../figma_app/516028";
import { setupRemovableAtomFamily } from "../figma_app/615482";
import { N0 } from "../figma_app/547638";
import { Qy } from "../figma_app/618665";
let $$d1 = setupRemovableAtomFamily(() => atom(e => {
  let t = e(Qy);
  return t ? e($$c0(t)) : [];
}));
loadable($$d1);
let $$c0 = createRemovableAtomFamily(e => setupRemovableAtomFamily(() => atom(t => N0(t(openFileKeyAtom), getSingletonSceneGraph(), e, "sites_preview"), () => {
  $$c0.remove(e);
})));
export const Vg = $$c0;
export const uh = $$d1;