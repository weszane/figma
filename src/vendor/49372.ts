export function $$r0(e) {
  if ("bandwidth" in e) return e.bandwidth();
  var n = e.range();
  var t = e.domain();
  return Math.abs(n[n.length - 1] - n[0]) / t.length;
}
export const A = $$r0;