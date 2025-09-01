let i;
export function $$s0() {
  return 0 === a();
}
export function $$o1() {
  return 1 === a();
}
function a() {
  return null != i ? i : i = h();
}
function h(e = window) {
  var r;
  let n = e.navigator.userAgent;
  return e.chrome || /HeadlessChrome/.test(n) ? 0 : e.navigator.vendor?.indexOf("Apple") === 0 || /safari/i.test(n) && !/chrome|android/i.test(n) ? 1 : 2;
}
export const F2 = $$s0;
export const nr = $$o1;