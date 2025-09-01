import { useState, useEffect } from "react";
export function $$r0() {
  let [e, t] = useState(window.innerWidth);
  let [i, r] = useState(window.innerHeight);
  useEffect(() => {
    let e = () => {
      t(window.innerWidth);
      r(window.innerHeight);
    };
    window.addEventListener("resize", e);
    return () => {
      window.removeEventListener("resize", e);
    };
  }, []);
  return {
    windowInnerWidth: e,
    windowInnerHeight: i
  };
}
export const l = $$r0;