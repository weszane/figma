import { useEffect, useState } from "react";
export function $$i0(e) {
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
  let [t, r] = useState(window.innerWidth <= e);
  $$i0(s => {
    s.width <= e && !t ? r(!0) : s.width > e && t && r(!1);
  });
  return t;
}
export const P = $$i0;
export const R = $$n1;