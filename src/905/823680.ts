import { useMemo } from "react";
import { c } from "../905/177375";
export function $$a0(...e) {
  return useMemo(() => {
    if (!e.every(e => null == e)) return t => {
      for (let i of e) c(i, t);
    };
  }, e);
}
export const S = $$a0;