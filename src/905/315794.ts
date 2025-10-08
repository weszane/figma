import { jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "classnames";
import { ButtonSecondaryNegative, ButtonSecondary } from "../figma_app/637027";
import { getI18nString } from "../905/303541";
import { hideDropdownAction } from "../905/929976";
import { showModalHandler } from "../905/156213";
import { lT } from "../figma_app/494261";
import { createThrottledTeamJoin } from "../figma_app/330108";
import { getSelectedView } from "../figma_app/386952";
import { getTeamActionType, TeamActionType } from "../figma_app/88768";
import { getPermissionsState } from "../figma_app/642025";
import { useTeamPlanUser, useIsOrgAdminUser } from "../figma_app/465071";
import { AccessLevelEnum } from "../905/557142";
import { $ } from "../905/442144";
var o = s;
let b = "org_team_action--showBlueBorder--W-9zt";
export function $$v0(e) {
  let [t, i] = useState(!1);
  let s = useDispatch();
  let u = useSelector(e => e.teamRoleRequests);
  let p = useSelector(e => e.currentUserOrgId);
  let m = useSelector(e => getPermissionsState(e));
  let A = getSelectedView();
  let y = useTeamPlanUser();
  let v = useIsOrgAdminUser(y).unwrapOr(!1);
  let x = getTeamActionType(e.team, u[e.team.id], m, v);
  let S = t => {
    t.stopPropagation();
    t.preventDefault();
    s(hideDropdownAction());
    null != x && $$E2({
      type: x,
      team: e.team,
      onLeave: e.onLeave,
      onJoin: e.onJoin,
      onJoinAsAdmin: e.onJoinAsAdmin,
      dispatch: s,
      teamRoleRequest: u[e.team.id]
    });
  };
  let w = () => {
    i(!0);
  };
  let C = () => {
    i(!1);
  };
  if (A?.view === "search" && e.team.org_id !== p || null === x || x === TeamActionType.CLICK_JOIN || x === TeamActionType.CLICK_JOIN_AS_ADMIN) return jsx(Fragment, {});
  let T = $$I1({
    type: x,
    overrideLeaveText: t || e.isCardActive ? getI18nString("team_list.org_join_status_leave") : void 0
  });
  let k = {
    className: (() => {
      switch (x) {
        case TeamActionType.CLICK_LEAVE:
          return o()("org_team_action--buttonNegative--jWoqq org_team_action--actionButton--2k4Cm button_styles--button--vl9vc", b);
        case TeamActionType.CLICK_REQUEST:
          return o()("org_team_action--requestButton--rrIM7 org_team_action--requestButton--rrIM7 org_team_action--actionButton--2k4Cm button_styles--button--vl9vc", b);
        default:
          return o()("org_team_action--actionButton--2k4Cm button_styles--button--vl9vc", b);
      }
    })(),
    onClick: S,
    onMouseOver: w,
    onMouseLeave: C,
    children: T
  };
  return x === TeamActionType.CLICK_LEAVE ? jsx(ButtonSecondaryNegative, {
    className: k.className,
    onClick: S,
    onMouseOver: w,
    onMouseLeave: C,
    children: T
  }) : jsx(ButtonSecondary, {
    ...k
  });
}
export function $$I1({
  type: e,
  overrideLeaveText: t
}) {
  switch (e) {
    case TeamActionType.CLICK_LEAVE:
      if (t) return t;
      return getI18nString("team_list.org_join_status_joined");
    case TeamActionType.CLICK_WITHDRAW:
      return getI18nString("teams_table.cancel_join_request");
    case TeamActionType.CLICK_JOIN:
      return getI18nString("teams_table.join_team");
    case TeamActionType.CLICK_JOIN_AS_ADMIN:
      return getI18nString("teams_table.join_team_as_admin");
    case TeamActionType.BYPASS_REQUEST:
      return getI18nString("teams_table.join_team_as_owner");
    case TeamActionType.CLICK_REQUEST:
      return getI18nString("teams_table.ask_to_join");
  }
}
export function $$E2({
  type: e,
  team: t,
  teamRoleRequest: i,
  onLeave: n,
  onJoin: r,
  onJoinAsAdmin: a,
  dispatch: s
}) {
  switch (e) {
    case TeamActionType.CLICK_LEAVE:
      n(t);
      return;
    case TeamActionType.CLICK_WITHDRAW:
      i && s(lT({
        requestId: i.id
      }));
      return;
    case TeamActionType.CLICK_JOIN:
      r?.(t.id);
      return;
    case TeamActionType.CLICK_JOIN_AS_ADMIN:
      a?.(t.id);
      return;
    case TeamActionType.BYPASS_REQUEST:
      createThrottledTeamJoin(s, t.id, AccessLevelEnum.OWNER)();
      return;
    case TeamActionType.CLICK_REQUEST:
      s(showModalHandler({
        type: $,
        data: {
          team: t
        }
      }));
      return;
  }
}
export const m3 = $$v0;
export const RI = $$I1;
export const _S = $$E2;