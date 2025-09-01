import { useState, useRef, useEffect, useCallback } from "react";
import r from "classnames";
import { Hi, u$, BN, uu, B8, _K } from "../figma_app/404319";
var a = r;
let o = [Hi, u$, BN, uu, B8];
export function $$$$l0(e) {
  let [t, i] = useState(!0);
  let [r, l] = useState(1);
  let d = useRef(null);
  let c = 0 === r;
  useEffect(() => {
    c && i(!1);
  }, [c]);
  useEffect(() => {
    l(e => Math.min(4, e + 1));
    i(!1);
    let e = requestAnimationFrame(() => {
      i(!0);
      e = void 0;
    });
    return () => {
      void 0 !== e && cancelAnimationFrame(e);
    };
  }, e);
  let u = useCallback(e => {
    let t = () => {
      l(e => Math.max(e - 1, 0));
    };
    d.current?.removeEventListener("transitionend", t);
    e?.addEventListener("transitionend", t);
    d.current = e;
  }, []);
  return [a()(o[t ? r - 1 : r], t && _K), u, d];
}
export const l = $$$$l0;