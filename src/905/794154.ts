import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useAtomValueAndSetter, atomStoreManager } from "../figma_app/27355";
import { Um } from "../905/848862";
import { jD } from "../figma_app/322845";
import { YH, hw, jh } from "../figma_app/604494";
export function $$d0() {
  let [e, t] = useAtomValueAndSetter(YH);
  let i = hw();
  let d = jh();
  let c = useDispatch();
  let u = Um();
  return useMemo(() => {
    function n(e) {
      jD(c, u, {
        forceClose: e
      }) && d();
    }
    return {
      push(n, {
        shouldResetSearchQuery: r = !0
      } = {}) {
        t([n, ...e]);
        r && i();
      },
      pop() {
        0 !== e.length && t(e.slice(1));
      },
      replace(i) {
        t([i, ...e.slice(1)]);
      },
      autoClose() {
        n(!1);
      },
      close() {
        n(!0);
      },
      current: e[0],
      isRoot: 0 === e.length
    };
  }, [c, u, e, i, d, t]);
}
export function $$c2() {
  return 0 === atomStoreManager.get(YH).length;
}
export function $$u1() {
  return atomStoreManager.get(YH)[0];
}
export const cq = $$d0;
export const i8 = $$u1;
export const jX = $$c2;
