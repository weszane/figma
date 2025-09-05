import { useState, useEffect, useContext } from "react";
import { useSelector } from "../vendor/514228";
import { n4, uW } from "../905/187165";
import { C_ } from "../905/345933";
export function $$o1() {
  let e = useSelector(e => e.theme.themePreference);
  return C_.includes(e) ? e : "light";
}
export function $$l0() {
  return useSelector(e => e.theme?.visibleTheme);
}
export function $$d2() {
  let e = $$l0();
  let [t, i] = useState(e ?? n4.matches ? "dark" : "light");
  useEffect(() => {
    if (e) {
      i(e);
      return;
    }
    let t = e => {
      i(e.matches ? "dark" : "light");
    };
    n4.addEventListener("change", t);
    return () => n4.removeEventListener("change", t);
  }, [e]);
  return t;
}
export function $$c3() {
  return useContext(uW);
}
export const DP = $$l0;
export const am = $$o1;
export const dB = $$d2;
export const yM = $$c3;