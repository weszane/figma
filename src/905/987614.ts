export function $$n0(e, t, i) {
  let n = e;
  for (; n;) {
    if (t(n)) return n;
    if (n === i) break;
    n = n.parentElement;
  }
  return null;
}
export function $$r1(e, t) {
  let i = e.compareDocumentPosition(t);
  return 2 & i ? 1 : 4 & i ? -1 : 0;
}
export const R = $$n0;
export const y = $$r1;