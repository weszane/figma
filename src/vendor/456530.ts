import { useContext, useState, useEffect } from "react";
import { O } from "../vendor/122594";
import { Q } from "../vendor/408965";
import { M } from "../vendor/644572";
export function $$h0(e) {
  let r = M(() => O(e));
  let {
    isStatic
  } = useContext(Q);
  if (isStatic) {
    let [, n] = useState(e);
    useEffect(() => r.on("change", n), []);
  }
  return r;
}
export const d = $$h0;