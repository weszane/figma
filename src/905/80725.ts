import { assert } from "../figma_app/465776";
import { deepEqual } from "../905/382883";
export function $$a1(e, t) {
  if (typeof e != typeof t) return !1;
  if ("object" != typeof e) return e === t;
  let i = {
    ...e
  };
  let n = {
    ...t
  };
  for (let e in i) e.startsWith("__IGNORE__") && delete i[e];
  for (let e in n) e.startsWith("__IGNORE__") && delete n[e];
  return deepEqual(i, n);
}
export function $$s2(e) {
  return {
    refetch: () => {
      if (!e) return;
      let t = e({
        type: "refetch"
      });
      assert(t instanceof Promise);
      return t;
    }
  };
}
export function $$o0(e) {
  return {
    refetch: () => {
      if (!e) return;
      let t = e({
        type: "refetch"
      });
      assert(t instanceof Promise);
      return t;
    },
    fetchNextPage: t => {
      if (!e) return;
      let i = e({
        type: "fetchNextPage",
        options: t
      });
      assert(i instanceof Promise);
      return i;
    },
    fetchPreviousPage: t => {
      if (!e) return;
      let i = e({
        type: "fetchPreviousPage",
        options: t
      });
      assert(i instanceof Promise);
      return i;
    }
  };
}
export const GC = $$o0;
export const N7 = $$a1;
export const ff = $$s2;
