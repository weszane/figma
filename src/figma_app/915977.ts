import { K } from "../905/807535";
import { pu, F9, Iv } from "../905/548208";
export function $$a2(e) {
  return e && K(pu, e) || pu.OVERVIEW;
}
export function $$s0(e) {
  return e && K(F9, e) || F9.ABANDONED_DRAFTS;
}
export function $$o1(e, t, r) {
  return e === Iv.BILLING ? $$a2(t) : e === Iv.CONTENT ? r.showResourceConnectionInviteModal || r.showResourceConnectionFlyout ? F9.CONNECTED_PROJECTS : $$s0(t) : t;
}
export const J = $$s0;
export const X$ = $$o1;
export const nc = $$a2;