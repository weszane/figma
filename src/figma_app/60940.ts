import { createSelector } from "../vendor/925040";
import { isValidValue } from "../905/216495";
import { XV } from "../figma_app/383828";
import { selectSceneGraph } from "../figma_app/889655";
import { i2 } from "../905/557338";
import { nD } from "../905/92359";
let d = e => e.library;
export function $$c0() {
  return createSelector([(e, t, r) => t, (e, t, r) => r, d], (e, t, r) => {
    if (!t.get(e)) return null;
    let {
      selectedItem
    } = XV(e, r, t);
    return selectedItem;
  });
}
export let $$u1 = createSelector([d, selectSceneGraph, i2], (e, t, r) => {
  let n = null;
  let {
    backingSymbolGUID,
    backingStateGroupGUID
  } = nD(new Set(r), t);
  if (backingStateGroupGUID && isValidValue(backingStateGroupGUID) ? n = backingStateGroupGUID : backingSymbolGUID && isValidValue(backingSymbolGUID) && (n = backingSymbolGUID), !n) return null;
  let {
    selectedItem
  } = XV(n, e, t);
  return selectedItem;
});
export const g = $$c0;
export const m = $$u1;