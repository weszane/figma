export function $$r0(e) {
  let t;
  let i = 0;
  for (let r of e) {
    if (++i > 1) return;
    t = r;
  }
  return t;
}
export const j = $$r0;