import { n3 } from "../905/859698";
import { createSelector } from "../vendor/925040";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
let $$s1 = e => e.library.used__LIVEGRAPH.styles;
let $$o3 = e => e.library.used__LIVEGRAPH.sourceAssetKeyToDestinationKey;
let $$l0 = e => e.library.used__LIVEGRAPH.localNodeIdToDestinationKey;
let $$d2 = createReduxSubscriptionAtomWithState(e => e.library.used__LIVEGRAPH.sourceAssetKeyToFileName);
let $$c4 = createSelector([$$s1], function (e) {
  let t = {};
  for (let [i, r] of Object.entries(e)) "loaded" === r.status && (t[n3(i)] = r.data);
  return t;
});
export const KM = $$l0;
export const PX = $$s1;
export const n1 = $$d2;
export const og = $$o3;
export const wi = $$c4;