let $$n = [];
export function $$r1() {
  return new Promise((e, t) => {
    $$n.push(e);
  });
}
export function $$a0() {
  for (let e of $$n) e();
  $$n = [];
}
export const Q = $$a0;
export const n = $$r1;