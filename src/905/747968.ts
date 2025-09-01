let n = self.document?.referrer;
let r = n;
let a = self.document?.location.href;
let s = e => e.split(/[?#]/)[0];
export function $$o1() {
  s(a) !== s(document.location.href) && (r = a, a = document.location.href);
}
export function $$l2() {
  return r;
}
export function $$d0() {
  return n;
}
export const Je = $$d0;
export const d7 = $$o1;
export const zo = $$l2;