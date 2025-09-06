import { atom } from "../figma_app/27355";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
let a = createReduxSubscriptionAtomWithState(e => e.hubFiles);
let $$s0 = atom(e => {
  let t = e(a);
  let i = {};
  for (let e of Object.values(t)) e.library_key && (i[e.library_key] = e);
  return i;
});
export const O = $$s0;