import { useCallback } from "react";
import { fp } from "../figma_app/27355";
export function $$$$a0(e, t) {
  let [i, a] = fp(e);
  let s = useCallback(e => {
    let n = new Set([t(e).trim()]);
    let r = [e];
    for (let e of i) {
      let i = t(e).trim();
      n.has(i) || (n.add(i), r.push(e));
    }
    a(r.slice(0, 5));
  }, [i, a, t]);
  return {
    promptHistory: i,
    addPromptToHistory: s
  };
}
export const a = $$$$a0;