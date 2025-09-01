import { x1 } from "../905/714362";
import { Fq, s5 } from "../figma_app/633080";
import { H } from "../905/404052";
export function $$s0(e) {
  let t = Fq(e);
  t || x1("variables", "Expected all variables to be local, but got some weren't. This operation was likely treated as a no-op, and shouldn't have been possible through the UI.");
  return t;
}
export function $$o2(e) {
  let t = H(e);
  t || x1("variables", "Expected all variables in group data to be local, but got some weren't. This operation was likely treated as a no-op, and shouldn't have been possible through the UI.");
  return t;
}
export function $$l1(e) {
  return $$s0(e.dropItem.variables);
}
export function $$d3(e) {
  return function (e) {
    let t = s5(e);
    t || x1("variables", "Expected variable to be local, but got a non-local variable. This operation was likely treated as a no-op, and shouldn't have been possible through the UI.");
    return t;
  }(e.dropItem);
}
export const N3 = $$s0;
export const OI = $$l1;
export const hO = $$o2;
export const tU = $$d3;