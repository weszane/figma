import { DesignGraphElements } from "../figma_app/763686";
import { useAtomWithSubscription, atom } from "../figma_app/27355";
import { CB } from "../figma_app/442259";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { fK } from "../figma_app/300024";
import { X } from "../figma_app/765161";
export function $$d0(e) {
  return useAtomWithSubscription(c) || e === DesignGraphElements.STAMP;
}
let c = createReduxSubscriptionAtomWithState(e => "WHEEL" === e.multiplayerEmoji.type && ["STAMP1", "STAMP2"].includes(e.multiplayerEmoji.wheelType));
let $$u1 = atom(null, (e, t) => {
  e(c) ? CB.closeWheel() : X({
    source: fK
  });
});
export const lO = $$d0;
export const vE = $$u1;