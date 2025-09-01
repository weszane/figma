import { useCallback, useEffect } from "react";
import { bE } from "../905/479155";
export function $$a0(e) {
  bE(e);
  let t = useCallback(() => {
    e.current && e.current.focus();
  }, [e]);
  useEffect(() => {
    t();
  }, [t, e]);
  return {
    focus: t
  };
}
export const Y = $$a0;