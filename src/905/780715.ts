import { I6 } from "../vendor/336448";
let r = /https?:\/\/(?![\w.-]+\.(?:auto|map|center)[^\w.-]?)\S*/i;
export function $$a0(e) {
  try {
    new URL(e);
    return !0;
  } catch (e) {
    return !1;
  }
}
export function $$s1(e) {
  return I6(e, "url").concat(I6(e, "email")).filter(e => !!$$a0(e.href) && r.test(e.href));
}
export const $x = $$a0;
export const Vt = $$s1;