export function $$n1(e) {
  return e.length > 0 && !e.includes("/");
}
export function $$i2(e) {
  return $$n1(e) ? !e.endsWith("-1:-1") : e.length > 0;
}
export function $$a0(e) {
  return "TEXT" === e || "GRID" === e;
}
export const Rc = $$a0;
export const X_ = $$n1;
export const Xi = $$i2;