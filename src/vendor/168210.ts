import { A } from "../vendor/711679";
export let $$s0 = (e, r) => {
  if (void 0 === e.h || void 0 === r.h || !e.s || !r.s) return 0;
  let n = A(e.h);
  let s = Math.sin((A(r.h) - n + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * r.s) * s;
};
export const Uz = $$s0;