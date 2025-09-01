import { sx } from "../905/449184";
import { debugState } from "../905/407919";
import { Lo } from "../905/714362";
var $$s0 = ((e) => (e.AI = "AI", e.STANDARD = "Standard", e))($$s0 || {});
export function $$o1(e, t) {
  Lo(e, "trackTemplateEvent", t);
  sx(e, {
    userId: debugState?.getState()?.user?.id,
    ...t
  }, {
    forwardToDatadog: !0
  });
}
export const T = $$s0;
export const _ = $$o1;