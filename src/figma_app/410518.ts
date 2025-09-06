import { getSingletonSceneGraph } from "../905/700578";
import { atom, Rq, createRemovableAtomFamily } from "../figma_app/27355";
import { ze } from "../figma_app/516028";
import { Wh } from "../figma_app/615482";
import { N0 } from "../figma_app/547638";
import { Qy } from "../figma_app/618665";
let $$d1 = Wh(() => atom(e => {
  let t = e(Qy);
  return t ? e($$c0(t)) : [];
}));
Rq($$d1);
let $$c0 = createRemovableAtomFamily(e => Wh(() => atom(t => N0(t(ze), getSingletonSceneGraph(), e, "sites_preview"), () => {
  $$c0.remove(e);
})));
export const Vg = $$c0;
export const uh = $$d1;