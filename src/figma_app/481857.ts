import { useState, useCallback, useMemo, createContext, useContext, useEffect } from "react";
import { isDevHandoffEditorType } from "../figma_app/976749";
import { T4 } from "../figma_app/151869";
export function $$s0() {
  let [e, t] = useState({});
  let r = isDevHandoffEditorType();
  let s = useCallback((e, r) => {
    t(t => ({
      ...(t || {}),
      [e]: r
    }));
  }, [t]);
  let o = r ? "" : ";";
  return {
    copyAll: useCallback(() => T4.copyPairs(Object.entries(e ?? {}).filter(([e, t]) => !!e && !!t), {
      suffix: o
    }), [o, e]),
    setCopyValue: s,
    hasCopyAllContent: useMemo(() => Object.entries(e ?? {}).length > 0, [e])
  };
}
export let $$o2 = createContext({});
export function $$l1(e, t, r) {
  let a = useContext($$o2)?.setCopyValue;
  let s = isDevHandoffEditorType() ? t : r;
  useEffect(() => {
    if (a && s) {
      a(s, e);
      return () => {
        a(s, void 0);
      };
    }
  }, [a, e, s]);
}
export const We = $$s0;
export const g7 = $$l1;
export const xe = $$o2;