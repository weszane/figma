import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { screenReaderEnableAction } from "../905/193529";
export function $$s0() {
  return useSelector(e => !!e.screenreader.enabled);
}
export function $$o1() {
  let e = useDispatch();
  let t = useSelector(e => e.screenreader.enabled);
  let i = useSelector(e => e.user || void 0);
  return [t, useCallback((t, n) => {
    e(screenReaderEnableAction({
      enabled: t,
      scope: n,
      user: i
    }));
  }, [e, i])];
}
export const e = $$s0;
export const y = $$o1;