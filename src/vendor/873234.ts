import { a as _$$a } from "../vendor/930286";
function s(e) {
  let r = {};
  e.values.forEach((e, n) => r[n] = e.get());
  return r;
}
function o(e) {
  let r = {};
  e.values.forEach((e, n) => r[n] = e.getVelocity());
  return r;
}
export function $$a0(e, r, n) {
  let a = e.getProps();
  return _$$a(a, r, void 0 !== n ? n : a.custom, s(e), o(e));
}
export const K = $$a0;