import { useEffect, useState } from "react";
export function $$a0(e) {
  useEffect(() => {
    let t = () => {
      e({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", t);
    return () => {
      window.removeEventListener("resize", t);
    };
  }, [e]);
}
export function $$n1(e) {
  let [t, s] = useState(window.innerWidth <= e);
  $$a0(r => {
    r.width <= e && !t ? s(!0) : r.width > e && t && s(!1);
  });
  return t;
}
export const P = $$a0;
export const R = $$n1;