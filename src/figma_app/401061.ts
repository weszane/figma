import { atom, atomStoreManager } from "../figma_app/27355";
var $$i2 = (e => (e[e.IDLE = 0] = "IDLE", e[e.STARTED = 1] = "STARTED", e[e.STOPPED = 2] = "STOPPED", e[e.HOVERED_NOTHING_AFTER_STOPPED = 3] = "HOVERED_NOTHING_AFTER_STOPPED", e))($$i2 || {});
export let $$a1 = atom(0);
export function $$s0() {
  return 0 !== atomStoreManager.get($$a1);
}
export const eN = $$s0;
export const hn = $$a1;
export const xX = $$i2;