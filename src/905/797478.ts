export function $$n0(e) {
  return document.querySelector(`[data-element-target=${e}]`);
}
export function $$r1(e, t) {
  return !!t && e instanceof Node && t.contains(e);
}
export const Tc = $$n0;
export const n3 = $$r1;