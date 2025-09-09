import { jsx, Fragment } from "react/jsx-runtime";
import { useMemo, useState, useEffect } from "react";
import { parsePxInt } from "../figma_app/783094";
import { useLatestRef } from "../figma_app/922077";
import { dOH } from "../figma_app/27776";
let l = parsePxInt(dOH);
export function $$d0({
  mediaQuery: e,
  children: t,
  onShow: i,
  onHide: a
}) {
  let o = useMemo(() => window.matchMedia(e), [e]);
  let [l, d] = useState(o.matches);
  let c = useLatestRef(l);
  return (useEffect(() => {
    let e = () => d(o.matches);
    o.addEventListener("change", e);
    return () => o.removeEventListener("change", e);
  }, [o]), useEffect(() => {
    (void 0 === c || c !== l) && (l && i && i(), !l && a && a());
  }, [l, c, i, a]), l) ? jsx(Fragment, {
    children: t
  }) : null;
}
export function $$c1({
  children: e
}) {
  return jsx($$d0, {
    mediaQuery: `(max-width: ${l - 1}px)`,
    children: e
  });
}
export function $$u2({
  children: e
}) {
  return jsx($$d0, {
    mediaQuery: `(min-width: ${l}px)`,
    children: e
  });
}
export const Ay = $$d0;
export const XY = $$c1;
export const hJ = $$u2;