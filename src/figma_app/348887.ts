import { K } from "../905/807535";
import { G_, M7, J7, SN } from "../figma_app/650409";
export function $$a0(e) {
  return e && K(G_, e) || G_.OVERVIEW;
}
export function $$s2(e) {
  return e && K(M7, e) || M7.ALL_MEMBERS;
}
export function $$o1(e, t, r) {
  return e === J7.BILLING ? $$a0(t) : e === J7.CONTENT && (r.showResourceConnectionInviteModal || r.showResourceConnectionFlyout) ? SN.CONNECTED_PROJECTS : t;
}
export const Gv = $$a0;
export const aO = $$o1;
export const i = $$s2;