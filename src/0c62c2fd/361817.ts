import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { N_ } from "../figma_app/637027";
import { renderI18nText, getI18nString } from "../905/303541";
import { fu } from "../figma_app/831799";
import { FPlanRestrictionType } from "../figma_app/191312";
import { j4 } from "../905/814802";
import { Dd } from "../905/519092";
export function $$c0(e) {
  let {
    team,
    members,
    paidStatus
  } = e;
  let {
    id
  } = getI18nString;
  if (![FPlanRestrictionType.FULL, FPlanRestrictionType.RESTRICTED].includes(paidStatus)) return jsx(Fragment, {});
  let m = members.length;
  let _ = members.filter(e => e.id).map(e => e.id).join();
  let p = paidStatus === FPlanRestrictionType.RESTRICTED;
  let f = e.paidStatusType === j4.WHITEBOARD;
  let g = f ? members.every(e => !e.whiteboard_editor_upgrade) : members.every(e => !e.design_editor_upgrade);
  let h = paidStatus === FPlanRestrictionType.RESTRICTED && g;
  let x = members[0].name || members[0].email;
  return jsx(fu, {
    name: "Team Admin Restrict TeamUser Modal",
    properties: {
      memberCount: m,
      memberIds: _,
      teamId: id
    },
    children: jsxs(Dd, {
      title: p ? h ? f ? renderI18nText("team_view.downgrade_figjam_access_from_viewer_to_viewer_restricted") : renderI18nText("team_view.downgrade_design_access_from_viewer_to_viewer_restricted") : f ? renderI18nText("team_view.remove_figjam_edit_status.seat_rename") : renderI18nText("team_view.remove_design_edit_status.seat_rename") : f ? renderI18nText("team_view.grant_figjam_edit_status.seat_rename") : renderI18nText("team_view.grant_design_edit_status.seat_rename"),
      confirmText: p ? h ? getI18nString("team_view.change") : getI18nString("team_view.remove.seat_rename") : getI18nString("team_view.grant.seat_rename"),
      onConfirm: e.onConfirm,
      children: [paidStatus === FPlanRestrictionType.RESTRICTED && (h ? f ? renderI18nText("team_view.downgrade_figjam_from_viewer_to_viewer_restricted_description.seat_rename", {
        memberNameOrEmail: x,
        numMembers: m
      }) : renderI18nText("team_view.downgrade_design_from_viewer_to_viewer_restricted_description.seat_rename", {
        memberNameOrEmail: x,
        numMembers: m
      }) : f ? renderI18nText("team_view.downgrade_figjam_description.seat_rename", {
        memberNameOrEmail: x,
        numMembers: m
      }) : renderI18nText("team_view.downgrade_design_description.seat_rename", {
        memberNameOrEmail: x,
        numMembers: m
      })), paidStatus === FPlanRestrictionType.FULL && jsxs(Fragment, {
        children: [(() => {
          if (!p) return f ? renderI18nText("team_view.change_to_editor_figjam_description.seat_rename", {
            numMembers: m,
            memberNameOrEmail: x
          }) : renderI18nText("team_view.change_to_editor_design_description.seat_rename", {
            numMembers: m,
            memberNameOrEmail: x
          });
        })(), jsx("p", {
          className: "confirm_team_user_paid_status_update_modal--spacing--D5LgW",
          children: jsx(N_, {
            target: "_blank",
            className: "confirm_team_user_paid_status_update_modal--link--cb35L",
            href: "https://help.figma.com/hc/articles/360039960434#Account_Types",
            trusted: !0,
            children: renderI18nText("team_view.learn_more.seat_rename")
          })
        })]
      })]
    })
  });
}
export const ConfirmTeamUserPaidStatusUpdateModal = $$c0;