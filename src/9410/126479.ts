import { jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { isWhiteboardFileType } from "../figma_app/976749";
import { H_, vW } from "../figma_app/287316";
import { L } from "../905/453756";
import { _ } from "../figma_app/91620";
import { OK, aT } from "../figma_app/459125";
import { d as _$$d } from "../figma_app/550089";
export function $$$$u0() {
  let [e, t] = H_();
  let i = L() ? OK : aT;
  return (!function ({
    hasMobileNativeToolbarTopLevel: e,
    LazyWebToolbarComponent: t
  }) {
    let i = isWhiteboardFileType();
    let r = useRef(!1);
    r.current || !i || e || (t.preload(), r.current = !0);
  }({
    hasMobileNativeToolbarTopLevel: e,
    LazyWebToolbarComponent: i
  }), _()) ? jsx(_$$d, {
    children: e ? t && jsx(vW, {}) : jsx(i, {})
  }) : null;
}
export const u = $$$$u0;