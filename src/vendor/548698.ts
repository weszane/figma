export function $$r0(e, n, t) {
  e.prototype = n.prototype = t;
  t.constructor = e;
}
export function $$l1(e, n) {
  var t = Object.create(e.prototype);
  for (var r in n) t[r] = n[r];
  return t;
}
export const A = $$r0;
export const X = $$l1;