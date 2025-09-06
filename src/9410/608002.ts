import { createValidatedLocalStorageAtom, useAtomValueAndSetter } from "../figma_app/27355";
import { z } from "../905/239603";
let a = createValidatedLocalStorageAtom("workflows_recently_viewed", {}, z.record(z.string(), z.record(z.string(), z.number())));
export function $$s2(e) {
  let [t] = useAtomValueAndSetter(a);
  return e ? t[e] : null;
}
export function $$o1(e, t) {
  return (t.lastViewedTimestamp ?? 0) - (e.lastViewedTimestamp ?? 0);
}
export function $$l0() {
  let [e, t] = useAtomValueAndSetter(a);
  return (i, r) => {
    let n = Date.now();
    t({
      ...e,
      [i]: {
        ...e[i],
        [r]: n
      }
    });
  };
}
export const QV = $$l0;
export const YA = $$o1;
export const n9 = $$s2;