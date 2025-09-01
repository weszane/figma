import { A } from "../vendor/298009";
let s = 500;
export function $$o0() {
  let e = [];
  return {
    add: r => {
      e.push(r) > s && e.splice(0, 1);
    },
    remove: r => {
      A(e, r);
    },
    drain: r => {
      e.forEach(e => e(r));
      e.length = 0;
    }
  };
}
export const O = $$o0;