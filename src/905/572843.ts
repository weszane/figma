import { useState } from "react";
import { unsetSymbol } from "../905/17894";
export function $$a0(e) {
  let [t, i] = useState(Object.fromEntries(Object.entries(e).map(([e, t]) => [e, t.currentValue !== unsetSymbol])));
  return Object.fromEntries(Object.entries(t).map(([e, t]) => [e, {
    touched: t,
    onTouched: t ? void 0 : () => i(t => ({
      ...t,
      [e]: !0
    }))
  }]));
}
export const D = $$a0;