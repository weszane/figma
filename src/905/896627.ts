import { useEffect } from "react";
import { unsetSymbol } from "../905/17894";
export function $$a0(e, t) {
  useEffect(() => {
    let {
      status,
      currentValue,
      setValue,
      resetValue
    } = e;
    if (currentValue === unsetSymbol) return;
    let o = "error" === status ? e.errors : [];
    if (0 !== o.length) {
      for (let e of o) if ("validation" === e.type && t({
        error: e,
        currentValue,
        setValue,
        resetValue
      })) break;
    }
  }, [e, t]);
}
export const p = $$a0;