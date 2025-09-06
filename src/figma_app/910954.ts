import { useAtomWithSubscription } from "../figma_app/27355";
import { fq } from "../figma_app/604494";
export function $$a0() {
  let e = useAtomWithSubscription(fq);
  return e > 0 ? e + 8 : 0;
}
export const N = $$a0;