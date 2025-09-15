import { useState, useEffect } from "react";
import { getEmbedType } from "../figma_app/471982";
import { Z4 } from "../figma_app/809727";
export function $$s0(e) {
  let [t, r] = useState(!0);
  useEffect(() => {
    let t = getEmbedType(e);
    let n = e.thumbnail_url;
    if (t === Z4.EMBED) {
      r(!0);
      return;
    }
    let s = new Image();
    s.onload = () => {
      let e = s.width / s.height;
      r(!(Math.abs(e - 2) < Math.abs(e - 16 / 9)));
    };
    s.src = n || "";
  }, [e]);
  return t;
}
export function $$o1(e) {
  let [t, r] = useState(!0);
  useEffect(() => {
    let t = new Image();
    t.onload = () => {
      let e = t.width / t.height;
      r(!(Math.abs(e - 2) < Math.abs(e - 16 / 9)));
    };
    t.src = e || "";
  }, [e]);
  return t;
}
export const C = $$s0;
export const X = $$o1;