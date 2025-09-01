export function $$n1(e) {
  return !!e.onClick || !!e.onMouseDown || !!e.onContextMenu;
}
export function $$r2(e) {
  let t = e.m00 * e.m11 - e.m01 * e.m10;
  if (0 === t) return {
    m00: 1,
    m01: 0,
    m02: 0,
    m10: 0,
    m11: 1,
    m12: 0
  };
  let i = 1 / t;
  return {
    m00: e.m11 * i,
    m01: -e.m01 * i,
    m02: (e.m01 * e.m12 - e.m11 * e.m02) * i,
    m10: -e.m10 * i,
    m11: e.m00 * i,
    m12: (e.m10 * e.m02 - e.m00 * e.m12) * i
  };
}
export function $$a3(e, t) {
  return {
    x: e.m00 * t.x + e.m01 * t.y,
    y: e.m10 * t.x + e.m11 * t.y
  };
}
export function $$s0(e, t, i) {
  return e * (1 - i) + t * i;
}
export const GW = $$s0;
export const b4 = $$n1;
export const eE = $$r2;
export const wr = $$a3;