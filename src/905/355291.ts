import { NC } from "../905/17179";
import { to } from "../905/156213";
let $$a5 = NC("TWO_FACTOR_AUTH_SET_CURRENT_ERROR");
let $$s3 = NC("TWO_FACTOR_AUTH_SET_LOADING");
let $$o4 = "TwoFactorRecoveryModal";
export function $$l0() {
  return to({
    type: {
      type: $$o4
    },
    showModalsBeneath: !0
  });
}
export let $$d2 = "PhoneSetupModal";
export function $$c1() {
  return to({
    type: {
      type: $$d2
    },
    showModalsBeneath: !0
  });
}
export const N$ = $$l0;
export const Yu = $$c1;
export const qk = $$d2;
export const r1 = $$s3;
export const sp = $$o4;
export const z3 = $$a5;