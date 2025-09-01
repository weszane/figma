import { useRef, useEffect } from "react";
import { ZC } from "../figma_app/39751";
export function $$a0(e) {
  let t = ZC(e);
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