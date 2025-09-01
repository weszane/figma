import { ED, x1, xi } from "../905/714362";
export function $$r0(...e) {
  ED("CMS", ...e);
}
export function $$a2(...e) {
  let t = [...e];
  t[2]?.reportAsSentryError == null && (t[2] = {
    ...t[2],
    reportAsSentryError: !0
  });
  x1("CMS", ...t);
}
export function $$s1(...e) {
  xi("CMS", ...e);
}
export const FU = $$r0;
export const Q2 = $$s1;
export const sD = $$a2;