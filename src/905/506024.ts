import { getAnonymousId } from '../905/449184';
import { isWorkshopModeActive } from '../figma_app/193867';
export function $$a0(e) {
  return e.user?.id || (e.selectedView && isWorkshopModeActive(e.selectedView) ? getAnonymousId() : void 0);
}
export const s = $$a0;