import { j7 } from "../905/929976";
import { Y5 } from "../figma_app/455680";
export function $$a0(e, t) {
  if (!e || !e.isResponsiveSetOrWebpage || !Y5.isReady()) return !1;
  let r = e.guid;
  t(j7({
    type: "BREAKPOINTS_HEADER_DROPDOWN",
    data: {
      responsiveSetId: r
    }
  }));
  return !0;
}
export const b = $$a0;