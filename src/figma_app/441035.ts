import { useState, useEffect } from "react";
import { zN } from "../905/182598";
function a(e) {
  let t = Math.random() * e.reduce((e, {
    weight: t = 1
  }) => e + t, 0);
  let r = 0;
  for (let n of e) if ((r += n.weight ?? 1) >= t) return n.content;
  return e[0].content;
}
export function $$s0(e) {
  let t = zN(e);
  let [r, s] = useState(() => a(t));
  useEffect(() => {
    s(a(t));
  }, [t]);
  return r;
}
export const U = $$s0;