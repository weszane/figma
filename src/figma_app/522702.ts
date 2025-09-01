import { useState, useCallback } from "react";
export function $$i0(e) {
  let [t, r] = useState(e);
  return [t, useCallback(() => r(!0), []), useCallback(() => r(!1), []), useCallback(() => r(e => !e), [])];
}
export const e = $$i0;