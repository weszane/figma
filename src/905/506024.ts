import { getAnonymousId } from "../905/449184";
import { zg } from "../figma_app/193867";
export function $$a0(e) {
  return e.user?.id || (e.selectedView && zg(e.selectedView) ? getAnonymousId() : void 0);
}
export const s = $$a0;