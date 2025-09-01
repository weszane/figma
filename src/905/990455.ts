import { Ce } from "../905/156213";
import { z3, r1 } from "../905/355291";
import { yJ } from "../figma_app/24841";
let s = {
  secret: null,
  token: null,
  provisioning_uri: null
};
export function $$o3(e) {
  s = e;
}
export function $$l2() {
  return s;
}
export function $$d1() {
  s = {
    secret: null,
    token: null,
    provisioning_uri: null
  };
}
export function $$c0(e = {}, t) {
  return z3.matches(t) ? {
    ...e,
    currentError: t.payload,
    loading: !1
  } : yJ.matches(t) ? {
    ...e,
    loading: !1
  } : r1.matches(t) ? {
    ...e,
    loading: !0,
    currentError: null
  } : Ce.matches(t) ? {
    ...e,
    loading: !1,
    currentError: null
  } : e;
}
export const Wm = $$c0;
export const ed = $$d1;
export const r6 = $$l2;
export const yV = $$o3;