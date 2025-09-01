import { Ay } from "../figma_app/778880";
var $$i = (e => (e[e.LEFT = 0] = "LEFT", e[e.MIDDLE = 1] = "MIDDLE", e[e.RIGHT = 2] = "RIGHT", e[e.BACK = 3] = "BACK", e[e.FORWARD = 4] = "FORWARD", e))($$i || {});
export function $$a0(e) {
  return "which" in e ? 3 === e.which || Ay.mac && 1 === e.which && e.ctrlKey : "button" in e && (2 === e.button || Ay.mac && 0 === e.button && e.ctrlKey);
}
export const i = $$a0;