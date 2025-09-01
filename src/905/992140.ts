export function $$n0({
  m00: e,
  m10: t
}) {
  return Math.atan2(-t, e);
}
export function $$r1({
  m00: e,
  m01: t,
  m02: i,
  m10: n,
  m11: r,
  m12: a
}, s) {
  let o = Math.sin(s);
  let l = Math.cos(s);
  let d = Math.sqrt(e * e + n * n);
  let c = (e * t + n * r) / d;
  let u = (-n * t + e * r) / d;
  return {
    m00: d * l,
    m01: c * l + u * o,
    m02: i,
    m10: -d * o,
    m11: -c * o + u * l,
    m12: a
  };
}
export const h = $$n0;
export const n = $$r1;