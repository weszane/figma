import { M } from "../vendor/821359";
export let $$f1 = globalThis;
export function $$r0(e, n, i) {
  let r = i || $$f1;
  let a = r.__SENTRY__ = r.__SENTRY__ || {};
  let o = a[M] = a[M] || {};
  return o[e] || (o[e] = n());
}
export const B = $$r0;
export const O = $$f1;