import { findMatchingValue } from "../905/807535";
import { BillingSectionEnum, MemberView, DashboardSection, WorkspaceTab } from "../figma_app/650409";
export function $$a0(e) {
  return e && findMatchingValue(BillingSectionEnum, e) || BillingSectionEnum.OVERVIEW;
}
export function $$s2(e) {
  return e && findMatchingValue(MemberView, e) || MemberView.ALL_MEMBERS;
}
export function $$o1(e, t, r) {
  return e === DashboardSection.BILLING ? $$a0(t) : e === DashboardSection.CONTENT && (r.showResourceConnectionInviteModal || r.showResourceConnectionFlyout) ? WorkspaceTab.CONNECTED_PROJECTS : t;
}
export const Gv = $$a0;
export const aO = $$o1;
export const i = $$s2;