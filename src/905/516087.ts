import { jsx } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { useResizeObserverRef } from "../figma_app/708845";
import { RecordingScrollContainer } from "../905/347284";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { n as _$$n } from "../905/895449";
export function $$d0({
  children: e,
  scrollingDisabled: t = !1,
  stretchContent: i = !0,
  useBottomPinning: d = !1,
  enableScrollShadow: c = !1
}) {
  let u = useRef(null);
  let p = useRef(null);
  let [m, h] = useState(0);
  useResizeObserverRef(u, () => {
    h(u.current?.clientHeight ?? 0);
  });
  return jsx(_$$n.Stretch, {
    ref: u,
    children: jsx(RecordingScrollContainer, {
      ref: p,
      height: m,
      hideScrollbar: !0,
      scrollingDisabled: t,
      innerClassName: cssBuilderInstance.if(i, cssBuilderInstance.flex.flexColumn.hFull).$,
      useBottomPinning: d,
      enableScrollShadow: c,
      children: e
    })
  });
}
export const q = $$d0;