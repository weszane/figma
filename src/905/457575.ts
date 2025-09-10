import { atom, createRemovableAtomFamily } from "../figma_app/27355";
import { setupRemovableAtomFamily } from "../figma_app/615482";
export function $$a0(e) {
  return o(e);
}
export function $$s1() {
  return o(void 0);
}
function o(e) {
  let t = setupRemovableAtomFamily(() => atom({}));
  return createRemovableAtomFamily(i => atom(n => {
    let r = n(t)[i || ""];
    return void 0 === r ? e : r;
  }, (e, n, r) => {
    n(t, e => {
      if (void 0 === r) {
        let {
          [i || ""]: t,
          ...n
        } = e;
        return n;
      }
      return {
        ...e,
        [i || ""]: r
      };
    });
  }));
}
export const H = $$a0;
export const q = $$s1;