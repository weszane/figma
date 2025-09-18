import { sg } from "../905/859698";
import { createSelector } from "../vendor/925040";
import { composeWithTransformer } from "../905/270781";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { og, KM } from "../905/55146";
let l = e => e.library.movedLibraryItems;
let $$d3 = createSelector([composeWithTransformer(l, e => e.subscribed), og], (e, t) => ({
  ...e,
  ...t
}));
let $$c0 = createSelector([l, KM], (e, t) => ({
  ...e.local,
  ...t
}));
function u(e) {
  let t = Object.create(null);
  for (let i in e) {
    let r = e[sg(i)];
    t[r] = t[r] || new Set();
    t[r].add(sg(i));
  }
  return t;
}
let $$p5 = createSelector([$$d3], u);
let $$m4 = createSelector([$$c0], u);
let $$h1 = e => e.library.used__LIVEGRAPH.destinationStyleKeyToLegacySourceStyle;
let $$g2 = createReduxSubscriptionAtomWithState($$h1);
export const BE = $$c0;
export const J8 = $$h1;
export const Q$ = $$g2;
export const aR = $$d3;
export const tp = $$m4;
export const uB = $$p5;