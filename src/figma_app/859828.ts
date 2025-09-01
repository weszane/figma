import { jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { ZC } from "../figma_app/39751";
import { z3 } from "../figma_app/386952";
let o = createContext(null);
export function $$l0() {
  return useContext(o);
}
export function $$d1({
  children: e
}) {
  let [t, r] = useState(null);
  let [l, d] = useState(null);
  let [c, u] = useState(null);
  let p = z3();
  let _ = ZC(p);
  useEffect(() => {
    _ !== p && "fullscreen" === _ && (r(null), d(null), u(null));
  }, [_, p]);
  let h = useMemo(() => ({
    whiteboardToolbeltNode: t,
    whiteboardToolbeltContainerNode: l,
    setWhiteboardToolbeltNode: r,
    setWhiteboardToolbeltContainerNode: d,
    bottomRightToolsNode: c,
    setBottomRightToolsNode: u
  }), [t, l, c]);
  return jsx(o.Provider, {
    value: h,
    children: e
  });
}
export const C = $$l0;
export const w = $$d1;