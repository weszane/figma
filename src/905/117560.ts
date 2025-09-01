export function $$n1(e) {
  return [[e.m00, e.m01, e.m02], [e.m10, e.m11, e.m12]];
}
export function $$r0(e) {
  return {
    m00: e[0][0],
    m01: e[0][1],
    m02: e[0][2],
    m10: e[1][0],
    m11: e[1][1],
    m12: e[1][2]
  };
}
export function $$a2(e, t) {
  return [t[0] * e[0][0] + t[1] * e[0][1] + e[0][2], t[0] * e[1][0] + t[1] * e[1][1] + e[1][2]];
}
export const D6 = $$r0;
export const Hi = $$n1;
export const xN = $$a2;