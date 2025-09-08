import { Mz } from "../vendor/925040";
import { MIXED_MARKER } from "../905/216495";
import { F4 } from "../figma_app/889655";
import { W0, Ee } from "../figma_app/323320";
import { x1, Cu } from "../figma_app/583247";
let l = Mz([W0], e => e.length > 0);
let d = Mz([x1], e => e.length > 0);
let $$c0 = Mz([l, d], (e, t) => e || t);
let $$u1 = Mz([F4], e => {
  if (!e.length) return null;
  let t = new Set(e.map(e => e.textContent));
  let [r] = t;
  return 1 === t.size ? r : MIXED_MARKER;
});
export function $$p2() {
  return Mz([Cu(), Ee()], (e, t) => [...e, ...t]);
}
Mz([x1, W0], (e, t) => [...e, ...t]);
export const Jp = $$c0;
export const UT = $$u1;
export const z4 = $$p2;