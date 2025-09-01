export async function $$n0(e) {
  await new Promise((t, i) => setTimeout(t, e));
}
export async function $$r2() {
  await new Promise(e => requestAnimationFrame(e));
}
export function $$a1(e, t, i) {
  return new Promise(async n => {
    let r = setTimeout(() => {
      t();
      n();
    }, i);
    Promise.resolve(e) == e ? await e : await e();
    clearTimeout(r);
    n();
  });
}
export const fm = $$n0;
export const i$ = $$a1;
export const yQ = $$r2;