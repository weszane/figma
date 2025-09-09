import { useCallback, useState, useEffect } from "react";
import { trackEventAnalytics } from "../905/449184";
import { useLatestRef } from "../figma_app/922077";
import { generateRecordingKey } from "../figma_app/878298";
export function $$o0(e, t) {
  return useCallback(i => {
    let {
      event,
      ...a
    } = i || {};
    let o = event && generateRecordingKey(e, event) || e;
    trackEventAnalytics(o, {
      ...t,
      ...a
    });
  }, [e, t]);
}
export function $$$$l1(e, t, i) {
  let [s, o] = useState(e);
  let l = useLatestRef(s);
  useEffect(() => {
    t && s !== l && trackEventAnalytics(t, {
      previousState: l,
      newState: s,
      ...i
    });
  }, [s]);
  return [s, o];
}
export const j = $$o0;
export const l = $$$$l1;