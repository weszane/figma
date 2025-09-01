import { OH } from "../vendor/537916";
import { useState, useCallback } from "react";
import { a as _$$a } from "../vendor/349175";
export function $$a0() {
  let e = _$$a();
  let [r, n] = useState(0);
  let a = useCallback(() => {
    e.current && n(r + 1);
  }, [r]);
  return [useCallback(() => OH.postRender(a), [a]), r];
}
export const C = $$a0;