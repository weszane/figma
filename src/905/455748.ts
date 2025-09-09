import { useRef, useEffect } from "react";
import { useLatestRef } from "../figma_app/922077";
export function $$a0(e) {
  let t = useLatestRef(e);
  return e !== t;
}
let s = Symbol("initialValue");
export function $$o1(e) {
  let t = useRef(s);
  useEffect(() => {
    t.current = e;
  }, [e]);
  let i = t.current;
  return e !== i && i !== s;
}
export const $ = $$a0;
export const h = $$o1;