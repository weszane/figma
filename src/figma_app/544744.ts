import { useAtomWithSubscription } from "../figma_app/27355";
import { N } from "../figma_app/59312";
import { aV } from "../figma_app/722362";
import { Td } from "../905/595131";
import { oh } from "../905/526509";
import { sT } from "../figma_app/955650";
import { gT } from "../figma_app/822177";
export function $$c2(e = {}) {
  let {
    isEnabledForViewers
  } = e;
  let r = aV();
  let n = Td();
  let o = N();
  return r || n && !isEnabledForViewers || o && !isEnabledForViewers;
}
export function $$u1() {
  let e = useAtomWithSubscription(oh);
  let t = "open" === e.state ? e.tool : void 0;
  let r = sT();
  return !!t || r;
}
export function $$p0() {
  let e = Td();
  let t = useAtomWithSubscription(gT);
  return !e && !t;
}
export const $y = $$p0;
export const FL = $$u1;
export const hv = $$c2;