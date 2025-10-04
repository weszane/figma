import { useAtomWithSubscription } from "../figma_app/27355";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { blueSecondaryColor } from "../figma_app/728075";
let s = e => e.toUpperCase().substring(1);
let o = s(blueSecondaryColor);
let l = createReduxSubscriptionAtomWithState(e => e.multiplayer.allUsers);
export function $$d0() {
  let e = useAtomWithSubscription(l);
  if (!e || 0 === e.length) return o;
  let t = e[0];
  return t.color.startsWith("#") ? s(t.color) : o;
}
export const fU = $$d0;