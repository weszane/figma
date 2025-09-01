import { PW } from "../figma_app/633080";
export function $$c1(e, n) {
  let o = new Set();
  for (let t of e) n.has(t) && o.add(t);
  return Array.from(o);
}
export function $$r0(e) {
  return e.type === PW.COMPONENT ? e.component_key : e.key;
}
export const A = $$r0;
export const k = $$c1;