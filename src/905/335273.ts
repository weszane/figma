import { useRef, useEffect, useCallback } from "react";
import { trackEventAnalytics } from "../905/449184";
import { generateUUIDv4 } from "../905/871474";
export function $$s0(e, t, i = !1) {
  let o = useRef(null);
  let l = useRef(generateUUIDv4());
  let d = useRef("hidden" === document.visibilityState);
  let c = useRef(!1 === navigator.onLine);
  useEffect(() => {
    let e = () => {
      "hidden" === document.visibilityState && (d.current = !0);
    };
    let t = () => {
      c.current = !0;
    };
    document.addEventListener("visibilitychange", e);
    window.addEventListener("offline", t);
    return () => {
      document.removeEventListener("visibilitychange", e);
      window.removeEventListener("offline", t);
    };
  }, []);
  return {
    trackPerformanceEvent: useCallback((n, s = {}) => {
      let u = performance.now();
      let p = u - (o.current ?? u);
      if ("fetch_start" === n || "fetch_next" === n) {
        o.current = u;
        l.current = generateUUIDv4();
      } else {
        if (null == o.current) return;
        o.current = null;
      }
      trackEventAnalytics(e, {
        eventName: n,
        traceId: l.current,
        source: t,
        duration: p,
        hasBeenBackgrounded: d.current,
        hasBeenOfflined: c.current,
        forwardToDatadog: i,
        ...s
      });
    }, [e, t, i])
  };
}
export const S = $$s0;