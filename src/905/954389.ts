let n = null;
export function $$r1(e) {
  n = e;
}
export let $$a0 = (e, t, i) => {
  if (n) return n(e, t, i);
  console.error(t, i);
};
export function $$s2(e) {
  switch (e) {
    case 0:
      return "debug";
    case 1:
      return "info";
    case 2:
      return "warning";
    case 3:
      return "error";
  }
}
export const N7 = $$a0;
export const pe = $$r1;
export const v = $$s2;