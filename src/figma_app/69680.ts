import { atom, t_ } from "../figma_app/27355";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
let $$a2 = atom(void 0);
let s = createReduxSubscriptionAtomWithState(e => e.universalInsertModal.initialFdView);
let $$o0 = t_(e => {
  let t = e(s);
  let r = e($$a2);
  return t || r || "recents_and_saved";
});
let $$l1 = atom(!1);
export const HT = $$o0;
export const RB = $$l1;
export const hO = $$a2;