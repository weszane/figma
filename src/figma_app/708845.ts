import { useState, useLayoutEffect } from "react";
export let $$i0 = {
  width: 0,
  height: 0
};
export function $$a1(e, t) {
  let [r, i] = useState(null);
  useLayoutEffect(() => {
    if (!e || !e.current) return;
    let n = new ResizeObserver(n => {
      for (let a of n) if (e.current === a.target) {
        let e = a.contentRect.width;
        let n = a.contentRect.height;
        if (r && r.width === e && r.height === n) continue;
        let s = {
          width: a.contentRect.width,
          height: a.contentRect.height
        };
        i(s);
        t?.(s);
      }
    });
    n.observe(e.current);
    return () => n.disconnect();
  }, [e, t, r]);
  return r;
}
export function $$s2(e, t) {
  let [r, i] = useState(null);
  useLayoutEffect(() => {
    if (!e) return;
    let n = new ResizeObserver(n => {
      for (let a of n) if (e === a.target) {
        let e = a.contentRect.width;
        let n = a.contentRect.height;
        if (r && r.width === e && r.height === n) continue;
        let s = {
          width: a.contentRect.width,
          height: a.contentRect.height
        };
        i(s);
        t?.(s);
      }
    });
    n.observe(e);
    return () => n.disconnect();
  }, [e, t, r]);
  return r;
}
export const cU = $$i0;
export const wY = $$a1;
export const Wx = $$s2;