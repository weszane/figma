import { createSelector } from "../vendor/925040";
import { MIXED_MARKER } from "../905/216495";
import { selectSelectedNodes } from "../figma_app/889655";
import { W0, Ee } from "../figma_app/323320";
import { selectSelectedVariantProperties, selectStateGroupVariantProperties } from "../figma_app/583247";
let l = createSelector([W0], e => e.length > 0);
let d = createSelector([selectSelectedVariantProperties], e => e.length > 0);
let $$c0 = createSelector([l, d], (e, t) => e || t);
let $$u1 = createSelector([selectSelectedNodes], e => {
  if (!e.length) return null;
  let t = new Set(e.map(e => e.textContent));
  let [r] = t;
  return 1 === t.size ? r : MIXED_MARKER;
});
export function $$p2() {
  return createSelector([selectStateGroupVariantProperties(), Ee()], (e, t) => [...e, ...t]);
}
createSelector([selectSelectedVariantProperties, W0], (e, t) => [...e, ...t]);
export const Jp = $$c0;
export const UT = $$u1;
export const z4 = $$p2;