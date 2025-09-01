export function $$n0(e) {
  try {
    new URL(e);
    return !0;
  } catch (e) {
    return !1;
  }
}
export function $$i1(e) {
  return e.startsWith("http://") || e.startsWith("https://");
}
export const G = $$n0;
export const H = $$i1;