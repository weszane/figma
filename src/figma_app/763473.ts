import { useState, useLayoutEffect } from "react";
import { useResizeObserverRef } from "../figma_app/708845";
export function $$a0({
  ref: e,
  onTextChange: t,
  text: r
}) {
  return $$s1({
    ref: e,
    onTextChange: t,
    text: r,
    checkVerticalOverflow: !1
  });
}
export function $$s1({
  ref: e,
  onTextChange: t,
  text: r,
  checkVerticalOverflow: a = !1
}) {
  let [s, o] = useState(!1);
  let l = useResizeObserverRef(e);
  useLayoutEffect(() => void t?.(), [t, r]);
  useLayoutEffect(() => {
    var t;
    var r;
    o(a ? !!(t = e.current) && t.offsetHeight < t.scrollHeight : !!(r = e.current) && r.clientWidth < r.scrollWidth);
  }, [a, e, l, r]);
  return s;
}
export const e = $$a0;
export const n = $$s1;