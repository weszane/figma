import { useRef, useEffect, useCallback } from "react";
import { deepEqual } from "../905/382883";
export function $$a2() {
  let e = useRef(!1);
  useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []);
  return useCallback(() => e.current, []);
}
export function $$s3(e, t) {
  let r = useRef(null);
  let i = t(e, r.current);
  useEffect(() => {
    i || (r.current = e);
  });
  return i ? r.current : e;
}
export function $$o1(e, t, r) {
  let a = $$s3(r, deepEqual);
  useEffect(() => (window.addEventListener(e, t, a), () => {
    window.removeEventListener(e, t, a);
  }), [e, t, a]);
}
export function $$l0(e, t, r, a) {
  let o = $$s3(a, deepEqual);
  useEffect(() => {
    if (r) {
      document.addEventListener(e, t, o);
      return () => {
        document.removeEventListener(e, t, o);
      };
    }
  }, [e, t, o, r]);
}
export const Po = $$l0;
export const U3 = $$o1;
export const aq = $$a2;
export const fh = $$s3;