import { sortByPropertyWithOptions } from "src/figma_app/656233";
import { zE } from "src/figma_app/919079";
import { getI18nString } from "src/905/303541";
import { FUserRoleType } from "src/figma_app/191312";
import { AccountTypeEnum } from "src/figma_app/35887";
import { Ib } from "src/905/129884";
import { x } from "src/905/439650";
import { createReduxSubscriptionAtomWithState } from "src/905/270322";
export function $$u5(e) {
  return !!e.user && void 0 !== e.orgUsersByOrgId && $$m8(e.orgUsersByOrgId, e.user.id).length > 0;
}
export function $$p9(e) {
  return e.currentUserOrgId && e.user && e.orgUsersByOrgId[e.currentUserOrgId] ? e.orgUsersByOrgId[e.currentUserOrgId][e.user.id] : null;
}
createReduxSubscriptionAtomWithState($$p9);
export let $$_2 = createReduxSubscriptionAtomWithState(function (e) {
  let t = $$p9(e);
  return t?.workspace_users?.find(e => e.is_main_workspace)?.workspace_id;
});
export function $$h1(e, t) {
  return e.user && e.orgUsersByOrgId[t] ? e.orgUsersByOrgId[t][e.user.id] : null;
}
export let $$m8 = x;
export function $$g4(e) {
  let t = Object.values(e).filter(e => e.permission === FUserRoleType.ADMIN);
  sortByPropertyWithOptions(t, "created_at");
  return t;
}
export function $$f10(e) {
  return $$g4(e).slice(0, 3);
}
export function $$E7(e, t) {
  return e.permission === FUserRoleType.ADMIN ? {
    color: zE.DEFAULT,
    text: getI18nString("members_table.badge_label.admin")
  } : e.is_email_validated ? e.permission === FUserRoleType.GUEST && e.is_mfa_restricted ? {
    color: zE.DEFAULT,
    text: getI18nString("members_table.badge_label.blocked"),
    dataTooltipType: Ib.TEXT,
    dataTooltip: getI18nString("members_table.badge_label.blocked.description"),
    dataTooltipTimeout: 50,
    dataTooltipShowAbove: !0
  } : e.permission === FUserRoleType.GUEST ? {
    color: zE.DEFAULT,
    text: getI18nString("members_table.badge_label.guest")
  } : e.permission === FUserRoleType.MEMBER && t?.showMember ? {
    color: zE.DEFAULT,
    text: getI18nString("general.member")
  } : void 0 : {
    color: zE.DEFAULT,
    text: getI18nString("members_table.badge_label.unverified")
  };
}
export let $$y0 = e => e.workspace_users?.find(e => e.is_main_workspace);
export function $$b3(e) {
  return !!e.scim_metadata;
}
export function $$T6(e) {
  return e.type === AccountTypeEnum.ORG_USER ? !!e.scim_seat_type : !e.isOrgInvite && !!e.scim_seat_type;
}
export const Ad = $$y0;
export const H = $$h1;
export const LM = $$_2;
export const QS = $$b3;
export const Xy = $$g4;
export const Yj = $$u5;
export const bC = $$T6;
export const t5 = $$E7;
export const x9 = $$m8;
export const xw = $$p9;
export const zR = $$f10;
