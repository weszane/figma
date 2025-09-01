import { NLJ } from "../figma_app/763686";
import { md, eU } from "../figma_app/27355";
import { CB } from "../figma_app/442259";
import { bt } from "../905/270322";
import { fK } from "../figma_app/300024";
import { X } from "../figma_app/765161";
export function $$d0(e) {
  return md(c) || e === NLJ.STAMP;
}
let c = bt(e => "WHEEL" === e.multiplayerEmoji.type && ["STAMP1", "STAMP2"].includes(e.multiplayerEmoji.wheelType));
let $$u1 = eU(null, (e, t) => {
  e(c) ? CB.closeWheel() : X({
    source: fK
  });
});
export const lO = $$d0;
export const vE = $$u1;