import { useMemo, useRef, useEffect } from "react";
import { useAtomValueAndSetter } from "../figma_app/27355";
export function $$a1({
  _atom: e,
  machine: t
}) {
  let [{
    currentState: r,
    lastEvent: a,
    previousState: s
  }, o] = useAtomValueAndSetter(e);
  let l = t.isComplete(r);
  return useMemo(() => ({
    completed: l,
    currentState: r,
    lastEvent: a,
    previousState: s,
    reset: o
  }), [l, r, a, s, o]);
}
export function $$s0(e, t) {
  let r = useRef(null);
  let {
    currentState,
    lastEvent,
    previousState
  } = e;
  useEffect(() => {
    r.current !== lastEvent && (r.current = lastEvent, null != lastEvent && null != previousState && t({
      event: lastEvent,
      from: previousState,
      to: currentState
    }));
  }, [currentState, lastEvent, previousState, t]);
}
export const ST = $$s0;
export const zl = $$a1;