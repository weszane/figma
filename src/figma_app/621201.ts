import { atomStoreManager } from "../figma_app/27355";
import { dayjs } from "../905/920142";
import { y } from "../905/958284";
import { FC } from "../figma_app/502422";
import { FP } from "../905/98947";
import { koo, dvJ, L6E, Nh9, wRw } from "../figma_app/6204";
import { m } from "../905/92222";
let c = new Set([koo.id, dvJ.id, L6E.id, Nh9.id, wRw.id]);
export function $$u1() {
  FC("last_seen_dev_mode_upsell");
}
export let $$p0 = new m("LimitDevModeUpsellFrequency", "Prevent showing more than on dev mode upsell in a 24 hour period", (e, t) => {
  if (atomStoreManager.get(FP)) return !1;
  let r = y(t.id);
  return !c.has(r) || !e.lastSeenDevModeUpsell || !(e.lastSeenDevModeUpsell > dayjs().subtract(1, "day").toDate());
});
export const RI = $$p0;
export const o9 = $$u1;