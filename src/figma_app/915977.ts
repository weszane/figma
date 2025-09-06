import { K } from "../905/807535";
import { BillingSections, MemberSections, DashboardSections } from "../905/548208";
export function $$a2(e) {
  return e && K(BillingSections, e) || BillingSections.OVERVIEW;
}
export function $$s0(e) {
  return e && K(MemberSections, e) || MemberSections.ABANDONED_DRAFTS;
}
export function $$o1(e, t, r) {
  return e === DashboardSections.BILLING ? $$a2(t) : e === DashboardSections.CONTENT ? r.showResourceConnectionInviteModal || r.showResourceConnectionFlyout ? MemberSections.CONNECTED_PROJECTS : $$s0(t) : t;
}
export const J = $$s0;
export const X$ = $$o1;
export const nc = $$a2;