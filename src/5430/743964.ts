export function $$s0(e, t, r) {
  if (!t) return 0;
  let s = Math.max(Math.floor(e / t) * t, t);
  r || (s = e);
  return s;
}
export const r = $$s0;