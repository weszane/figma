import { useRef, useEffect, useState } from "react";
export function $$i2(e) {
  let t = useRef();
  useEffect(() => {
    t.current = e;
  }, [e]);
  return t.current;
}
export function $$a1(e, t) {
  let r = useRef();
  let i = t || r;
  useEffect(() => {
    i.current = e ?? i.current;
  });
  return e ?? i.current;
}
export function $$s3(e) {
  let t = useRef({
    value: e,
    prev: void 0
  });
  let r = t.current.value;
  e !== r && (t.current = {
    value: e,
    prev: r
  });
  return t.current.prev;
}
export function $$o0(e) {
  let [t, r] = useState(void 0);
  useEffect(() => {
    r(e);
  }, [e]);
  return t;
}
export const $J = $$o0;
export const PD = $$a1;
export const ZC = $$i2;
export const qd = $$s3;