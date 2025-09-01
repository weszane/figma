import { useMemo } from "react";
export function $$s0(e, r) {
  let n = [...(r || [])];
  null == r && "function" != typeof e && n.push(e);
  return useMemo(() => "function" == typeof e ? e() : e, n);
}
export const I = $$s0;