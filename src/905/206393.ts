export function $$n1(e) {
  return JSON.stringify(e);
}
export function $$r0(e, t, i) {
  var n = Error(e);
  n.line = t;
  n.column = i;
  return n;
}
export const error = $$r0;
export const quote = $$n1;