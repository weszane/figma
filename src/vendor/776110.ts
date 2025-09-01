export function $$r0(e, n) {
  e = +e;
  n = +n;
  return function (t) {
    return Math.round(e * (1 - t) + n * t);
  };
}
export const A = $$r0;