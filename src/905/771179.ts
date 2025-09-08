import { atom } from "../figma_app/27355";
import { Point } from "../905/736624";
import { PLUGIN_TIMEOUT_MS, PLUGIN_RETRY_DELAY_MS } from "../905/968269";
export let $$s0 = atom({
  displayed: !1,
  width: PLUGIN_TIMEOUT_MS,
  height: PLUGIN_RETRY_DELAY_MS,
  initialPosition: new Point(0, 0),
  cancelCallback: void 0,
  onDragEnd: e => {}
});
export const D = $$s0;