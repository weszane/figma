import { kg } from "../vendor/103291";
let $$s2 = "DISCARDED";
let $$o0 = "SKIPPED";
export function $$a1() {
  let e = {};
  return {
    register: (r, n) => (e[r] || (e[r] = []), e[r].push(n), {
      unregister: () => {
        e[r] = e[r].filter(e => e !== n);
      }
    }),
    triggerHook(r, n) {
      let a = e[r] || [];
      let h = [];
      for (let e of a) {
        let r = e(n);
        if (r === $$s2) return $$s2;
        r !== $$o0 && h.push(r);
      }
      return kg(...h);
    }
  };
}
export const $O = $$o0;
export const XP = $$a1;
export const ug = $$s2;