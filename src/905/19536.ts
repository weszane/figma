import { useMemo, useRef, useState, useCallback } from "react";
import r from "../vendor/128080";
import { ZC } from "../figma_app/922077";
import { A } from "../905/605584";
export function $$o3(e, t) {
  return $$u5(useMemo(e, t));
}
export function $$l4(e, t) {
  return $$u5(useMemo(e, t), A);
}
export function $$d0(e, t, i) {
  return $$u5(useMemo(e, t), i);
}
export function $$c2(e, t, i) {
  return $$d0(e, t, (e, t) => {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (!i(e[n], t[n])) return !1;
    return !0;
  });
}
export function $$u5(e, t = r) {
  let i = ZC(e);
  let s = useRef(e);
  return null != i && (e === i || t(e, s.current)) ? s.current : (s.current = e, e);
}
export function $$p1(e, t = r) {
  let [i, a] = useState(e);
  let s = useRef(i);
  s.current = i;
  return [i, useCallback(e => {
    let i = "function" == typeof e ? e(s.current) : e;
    i === s.current || t(i, s.current) || a(i);
  }, [t])];
}
export const DD = $$d0;
export const ID = $$p1;
export const Op = $$c2;
export const k9 = $$o3;
export const wm = $$l4;
export const zN = $$u5;