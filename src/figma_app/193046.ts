import { showDropdownThunk } from "../905/929976";
import { fullscreenValue } from "../figma_app/455680";
export function $$a0(e, t) {
  if (!e || !e.isResponsiveSetOrWebpage || !fullscreenValue.isReady()) return !1;
  let r = e.guid;
  t(showDropdownThunk({
    type: "BREAKPOINTS_HEADER_DROPDOWN",
    data: {
      responsiveSetId: r
    }
  }));
  return !0;
}
export const b = $$a0;