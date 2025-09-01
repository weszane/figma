let n = {};
export function $$r2(e, t, i) {
  if (n[e]) throw Error("Already registered tooltip with key: " + e);
  n[e] = {
    component: t,
    getProps: i
  };
  return e;
}
export function $$a1(e) {
  return n[e];
}
export function $$s0(e) {
  return void 0 !== n[e];
}
export const $L = $$s0;
export const TN = $$a1;
export const ex = $$r2;