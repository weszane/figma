import { atomStoreManager } from "../905/490038";
import { atom } from "jotai";
export function $$a0(e, t) {
  let i = null;
  let a = "write" in e ? atom(t => t(e), (t, i, ...n) => i(e, ...n)) : atom(t => t(e));
  a.onMount = r => {
    let a;
    try {
      a = t({
        target: e,
        setSelf: r,
        onSet: e => {
          i = e;
        }
      });
    } catch (e) {
      console.error(e);
      return e;
    }
    i?.(atomStoreManager.get(e));
    let s = atomStoreManager.sub(e, () => {
      i?.(atomStoreManager.get(e));
    });
    return () => {
      a?.();
      s();
    };
  };
  return a;
}
export const y = $$a0;