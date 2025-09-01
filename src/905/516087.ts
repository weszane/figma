import { jsx } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { wY } from "../figma_app/708845";
import { P } from "../905/347284";
import { s as _$$s } from "../cssbuilder/589278";
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
  wY(u, () => {
    h(u.current?.clientHeight ?? 0);
  });
  return jsx(_$$n.Stretch, {
    ref: u,
    children: jsx(P, {
      ref: p,
      height: m,
      hideScrollbar: !0,
      scrollingDisabled: t,
      innerClassName: _$$s.$$if(i, _$$s.flex.flexColumn.hFull).$,
      useBottomPinning: d,
      enableScrollShadow: c,
      children: e
    })
  });
}
export const q = $$d0;