import { useAtomWithSubscription } from "../figma_app/27355";
import { el } from "../figma_app/322845";
import { Bu } from "../figma_app/604494";
import { XV } from "../figma_app/593440";
export function $$o0() {
  let e = useAtomWithSubscription(Bu);
  let t = el();
  let r = XV();
  return e || !!t || !!r;
}
export const I = $$o0;