import { xb } from "../figma_app/465776";
import { t as _$$t } from "../905/303541";
import { r3 } from "../figma_app/599327";
import { FUserRoleType } from "../figma_app/191312";
import { du } from "../figma_app/336853";
import { s as _$$s } from "../905/82276";
import { Od, WH } from "../figma_app/967319";
export function $$c5(e, t) {
  switch (e) {
    case Od.NAME:
      return _$$t("members_table.column_header.name");
    case Od.LAST_EDIT:
    case Od.LAST_DESIGN_EDIT:
    case Od.LAST_WHITEBOARD_EDIT:
      return _$$t("members_table.column_header.edit_at");
    case Od.LAST_ACTIVE:
    case Od.LAST_DESIGN_ACTIVE:
    case Od.LAST_WHITEBOARD_ACTIVE:
      return _$$t("members_table.column_header.active_at");
    case Od.DESIGN_ROLE:
      return _$$t("members_table.column_header.design_role.seat_rename");
    case Od.WHITEBOARD_ROLE:
      return _$$t("members_table.column_header.whiteboard_role.seat_rename");
    case Od.DEV_MODE_ROLE:
      return _$$t("members_table.column_header.dev_mode_role.seat_rename");
    case Od.DESIGN_UPGRADE_DATE:
    case Od.WHITEBOARD_UPGRADE_DATE:
    case Od.DEV_MODE_UPGRADE_DATE:
      return _$$t("members_table.column_header.upgrade_date");
    case Od.WORKSPACE:
      return _$$t("members_table.column_header.workspace");
    case Od.LICENSE_GROUP:
      return _$$t("members_table.column_header.billing_group");
    case Od.SCIM_DATA:
      return t ? du(t) : _$$t("members_table.column_header.scim");
    case Od.DESIGN_UPGRADE_REASON:
    case Od.WHITEBOARD_UPGRADE_REASON:
      return _$$t("members_table.column_header.upgrade_reason");
    case Od.BILLABLE_PRODUCT_SEAT:
      return r3;
    case Od.UPGRADE_REASON:
      return _$$t("members_table.column_header.upgrade_reason");
    case Od.UPGRADE_DATE:
      return _$$t("members_table.column_header.upgrade_date");
    default:
      xb(e);
  }
}
export function $$u0(e, t) {
  return e === _$$s ? _$$t("license_group.unassigned") : t[e]?.name ?? "";
}
export function $$p11(e) {
  switch (e) {
    case WH.IDP:
      return _$$t("members_table.org_permission_filter.pending");
    case WH.UNVERIFIED:
      return _$$t("members_table.org_permission_filter.unverified");
    case FUserRoleType.GUEST:
      return _$$t("members_table.org_permission_filter.guest");
    case FUserRoleType.ADMIN:
      return _$$t("members_table.org_permission_filter.admin");
    default:
      return _$$t("members_table.org_permission_filter.member");
  }
}
export function $$_1(e) {
  switch (e) {
    case "3mo":
      return _$$t("members_table.last_edit_filter.more_than_three_months_ago");
    case "6mo":
      return _$$t("members_table.last_edit_filter.more_than_six_months_ago");
    case "1yr":
      return _$$t("members_table.last_edit_filter.more_than_a_year_ago");
    default:
      return "";
  }
}
export function $$h3(e) {
  return ["orgAdminSettings", "licenseGroup"].includes(e);
}
export function $$m4(e) {
  return ["orgAdminSettings", "licenseGroup"].includes(e);
}
export function $$g6(e) {
  return ["orgAdminSettings", "licenseGroup"].includes(e);
}
export function $$f10(e) {
  return ["orgAdminSettings", "workspace"].includes(e);
}
export function $$E8(e) {
  return "orgAdminSettings" === e;
}
export function $$y2(e) {
  return ["orgAdminSettings", "licenseGroup"].includes(e);
}
export function $$b9(e, t) {
  return "orgAdminSettings" === t;
}
export function $$T7(e, t, r) {
  return t || "orgAdminSettings" !== r ? null : e.permission === FUserRoleType.ADMIN ? "revoke" : e.permission === FUserRoleType.MEMBER ? "grant" : null;
}
export const CC = $$u0;
export const Mj = $$_1;
export const PR = $$y2;
export const RC = $$h3;
export const XO = $$m4;
export const aM = $$c5;
export const dL = $$g6;
export const k_ = $$T7;
export const o8 = $$E8;
export const rH = $$b9;
export const w6 = $$f10;
export const zT = $$p11;