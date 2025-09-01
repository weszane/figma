import { useState, useRef, useEffect, useCallback } from "react";
import { U3 } from "../figma_app/412189";
let a = 1 / 60 * 1e3;
export function $$s0(e, t) {
  let [r, s] = useState(0);
  let o = useRef(-1);
  useEffect(() => {
    t || s(0);
  }, [t]);
  useEffect(() => {
    let t;
    return 0 === r ? () => {} : (function n() {
      if (!e || o.current < 0) return;
      let i = new Date().getTime();
      let s = i - o.current;
      e.scrollTop += s / a * r;
      o.current = i;
      t = requestAnimationFrame(n);
    }(), () => {
      cancelAnimationFrame(t);
    });
  }, [r, e]);
  U3("mousemove", useCallback(r => {
    if (!t || !e) return;
    let n = e.scrollTop;
    let {
      top,
      height
    } = e.getBoundingClientRect();
    if (height <= 0) return;
    let l = r.clientY - top + n;
    l < n ? (s((l - n) * .5), o.current = new Date().getTime()) : l > n + height ? (s((l - n - height) * .5), o.current = new Date().getTime()) : (s(0), o.current = -1);
  }, [t, e]));
}
export const C = $$s0;