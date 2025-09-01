import { useState, useCallback } from "react";
export function $$r0() {
  let [e, t] = useState(0);
  return useCallback(() => t(e => e + 1), []);
}
export const C = $$r0;