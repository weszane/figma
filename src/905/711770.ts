import { useCallback } from "react";
import { sx } from "../905/449184";
export function $$a1({
  disabled: e,
  libraryIdentifier: t,
  fileName: i,
  viewFile: a
}) {
  return useCallback(() => {
    !e && t && (a(t), sx("Library File Expanded", {
      fileName: i
    }));
  }, [e, a, t, i]);
}
export function $$s0({
  disabled: e,
  libraryKey: t,
  fileName: i,
  viewFile: a
}) {
  return useCallback(() => {
    !e && t && (a(t), sx("Library File Expanded", {
      fileName: i
    }));
  }, [e, a, t, i]);
}
export const Q = $$s0;
export const S = $$a1;