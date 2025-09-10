import { FUserRoleType } from "src/figma_app/191312";
var $$i9 = (e => (e.ASC = "asc", e.DESC = "desc", e))($$i9 || {});
var $$a4 = (e => (e.NAME = "name", e.LAST_ACTIVE = "last_active", e.LAST_DESIGN_ACTIVE = "last_design_active", e.LAST_WHITEBOARD_ACTIVE = "last_whiteboard_active", e.LAST_EDIT = "last_edit", e.LAST_DESIGN_EDIT = "last_design_edit", e.LAST_WHITEBOARD_EDIT = "last_whiteboard_edit", e.DESIGN_ROLE = "design_role", e.DESIGN_UPGRADE_DATE = "design_upgrade_date", e.WHITEBOARD_ROLE = "whiteboard_role", e.WHITEBOARD_UPGRADE_DATE = "whiteboard_upgrade_date", e.LICENSE_GROUP = "license_group", e.WORKSPACE = "workspace", e.SCIM_DATA = "scim_data", e.DESIGN_UPGRADE_REASON = "design_upgrade_reason", e.WHITEBOARD_UPGRADE_REASON = "whiteboard_upgrade_reason", e.BILLABLE_PRODUCT_SEAT = "seat", e.SEARCH_SCORE = "score", e.DEV_MODE_ROLE = "dev_mode_role", e.DEV_MODE_UPGRADE_DATE = "dev_mode_upgrade_date", e.UPGRADE_REASON = "upgrade_reason", e.UPGRADE_DATE = "upgrade_date", e))($$a4 || {});
let $$s2 = ["last_active", "last_design_active", "last_whiteboard_active", "last_edit", "last_design_edit", "last_whiteboard_edit", "design_upgrade_date", "whiteboard_upgrade_date", "dev_mode_upgrade_date", "upgrade_date"];
let $$o11 = {
  columnName: "name",
  isReversed: !1
};
var $$l10 = (e => (e.licenseGroupFilter = "licenseGroupFilter", e.workspaceFilter = "workspaceFilter", e.idpGroupFilter = "idpGroupFilter", e.permissionFilter = "permissionFilter", e.lastEditFilter = "lastEditFilter", e.newEditorFilter = "newEditorFilter", e.seatTypeFilter = "seatTypeFilter", e.seatChangesFilter = "seatChangesFilter", e))($$l10 || {});
var $$d5 = (e => (e.workspace = "workspace", e.billingGroup = "billingGroup", e.idpGroup = "idpGroup", e.accountType = "accountType", e.lastEdit = "lastEdit", e.newEditor = "newEditor", e.seatType = "seatType", e.seatChanges = "seatChanges", e))($$d5 || {});
let $$c1 = {
  licenseGroupFilter: null,
  workspaceFilter: null,
  idpGroupFilter: null,
  permissionFilter: null,
  lastEditFilter: null,
  newEditorFilter: !1,
  seatTypeFilter: null,
  seatChangesFilter: null
};
let $$u0 = {
  billingGroup: "licenseGroupFilter",
  workspace: "workspaceFilter",
  idpGroup: "idpGroupFilter",
  accountType: "permissionFilter",
  lastEdit: "lastEditFilter",
  newEditor: "newEditorFilter",
  seatType: "seatTypeFilter",
  seatChanges: "seatChangesFilter"
};
let $$p8 = {
  licenseGroupFilter: "billingGroup",
  workspaceFilter: "workspace",
  idpGroupFilter: "idpGroup",
  permissionFilter: "accountType",
  lastEditFilter: "lastEdit",
  newEditorFilter: "newEditor",
  seatTypeFilter: "seatType",
  seatChangesFilter: "seatChanges"
};
export function $$_3() {
  return {
    permission: {
      guest: 0,
      member: 0,
      admin: 0,
      provisional: 0,
      unverified: 0
    },
    lastEdit: {
      [$$g12["3mo"]]: 0,
      [$$g12["6mo"]]: 0,
      [$$g12["1yr"]]: 0
    }
  };
}
let $$h7 = {
  IDP: "provisional",
  UNVERIFIED: "unverified"
};
let $$m6 = {
  [FUserRoleType.ADMIN]: FUserRoleType.ADMIN,
  [FUserRoleType.GUEST]: FUserRoleType.GUEST,
  [FUserRoleType.MEMBER]: FUserRoleType.MEMBER,
  [$$h7.IDP]: $$h7.IDP,
  [$$h7.UNVERIFIED]: $$h7.UNVERIFIED
};
let $$g12 = {
  "3mo": "3mo",
  "6mo": "6mo",
  "1yr": "1yr"
};
export function $$f13(e) {
  return "user_id" in e && void 0 !== e.user_id;
}
export const GX = $$u0;
export const J0 = $$c1;
export const LU = $$s2;
export const MF = $$_3;
export const Od = $$a4;
export const Oo = $$d5;
export const U9 = $$m6;
export const WH = $$h7;
export const cC = $$p8;
export const dy = $$i9;
export const e5 = $$l10;
export const oU = $$o11;
export const rk = $$g12;
export const wQ = $$f13;
