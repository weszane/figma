export function $$n0(e, t) {
  if (t > e.length) throw Error(`Size ${t} is larger than array ${e.length}`);
  let i = t - 3;
  for (let t = 0; t < i; t += 4) {
    let i = 255.999 / e[t + 3 | 0];
    e[t] *= i;
    e[t + 1 | 0] *= i;
    e[t + 2 | 0] *= i;
  }
}
export function $$r1(e, t) {
  if (t > e.length) throw Error(`Size ${t} is larger than array ${e.length}`);
  for (let i = 3; i < t; i += 4) e[i] = 255;
}
export const X = $$n0;
export const e = $$r1;