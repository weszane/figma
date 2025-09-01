import { useMemo, useState, useLayoutEffect } from "react";
import { C } from "../figma_app/859828";
import { _ } from "../figma_app/91620";
export function $$s4() {
  let e = _();
  let t = $$d2();
  return useMemo(() => e && !!t, [e, t]);
}
export function $$o3() {
  let e = _();
  let t = $$d2();
  let r = t ? t.width : null;
  return useMemo(() => e && "number" == typeof r ? r : 0, [r, e]);
}
export function $$l1() {
  let e = _();
  let t = $$d2();
  let r = t && t.right ? t.right : null;
  return useMemo(() => e && "number" == typeof r ? window.innerWidth - r : 0, [r, e]);
}
let $$d2 = () => u(C()?.whiteboardToolbeltNode);
let $$c0 = () => u(C()?.whiteboardToolbeltContainerNode);
function u(e) {
  let t = _();
  let [r, i] = useState(null);
  useLayoutEffect(() => {
    if (!e) return;
    let t = new ResizeObserver(t => {
      for (let r of t) e === r.target && i(e.getBoundingClientRect());
    });
    i(e.getBoundingClientRect());
    t.observe(e);
    return () => t.disconnect();
  }, [e, i]);
  useLayoutEffect(() => {
    if (!e) return;
    let t = () => {
      i(e.getBoundingClientRect());
    };
    window.addEventListener("resize", t);
    return () => {
      window.removeEventListener("resize", t);
    };
  }, [e]);
  return t && r;
}
export const Ao = $$c0;
export const Cg = $$l1;
export const TH = $$d2;
export const mI = $$o3;
export const ze = $$s4;