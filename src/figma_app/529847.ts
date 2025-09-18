import { createOptimistCommitAction, createOptimistRevertAction } from "../905/676456";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { createOptimistAction } from "../905/350402";
import { putTeamUser } from "../905/584989";
import { ViewAccessTypeEnum } from "../905/513035";
import { H } from "../figma_app/395012";
export let $$c0 = createOptimistAction("TEAM_USER_UPDATE_SEAT_TYPE", async (e, {
  teamId: t,
  deltas: r,
  entryPoint: s,
  onSuccess: c,
  onFailure: u
}, {
  optimistId: p
}) => {
  await H.updateTeamUsers({
    team_id: t,
    team_user_deltas: r.map(({
      userId: e,
      seatTypeOption: t,
      seatIncreaseAuthorized: r,
      seatSwapIntended: n
    }) => {
      let i = {
        user_id: e,
        seat_type: t === ViewAccessTypeEnum.VIEW ? "" : t
      };
      null != r && (i.seat_increase_authorized = r);
      null != n && (i.seat_swap_intended = n);
      return i;
    }),
    entry_point: s
  }).then(function ({
    data: r
  }) {
    e.dispatch(createOptimistCommitAction(p));
    e.dispatch(putTeamUser({
      teamUsers: r.meta,
      teamId: t
    }));
    c?.();
  }).catch(function (t) {
    e.dispatch(createOptimistRevertAction(p));
    e.dispatch(FlashActions.error(function (e) {
      let {
        reason
      } = e;
      let {
        message
      } = e;
      switch (reason) {
        case "seat_increase_unauthorized":
          return getI18nString("modify_plan_user_seat_modal.error.seat_increase_unauthorized");
        case "upgrade_on_suspended_plan":
          if (message) return getI18nString("modify_plan_user_seat_modal.error.upgrade_on_suspended_plan");
      }
      return getI18nString("team_user.actions.an_error_occurred_while_changing_a_team_member_s_billing_status");
    }(t.data)));
    u?.();
    console.error(t);
  });
});
export function $$u1(e, t) {
  let {
    teamId,
    deltas,
    seatTypeProducts,
    upgradeMethod,
    upgradeReason,
    assignedAt,
    upgradeActorName
  } = t.payload;
  let c = e[teamId];
  if (!c) return e;
  let u = {
    ...c
  };
  let p = {};
  Object.entries(c).forEach(([e, t]) => {
    let r = t.team_user?.user_id;
    e && r && (p[r] = {
      originalKey: e,
      originalMember: t
    });
  });
  deltas.forEach(({
    userId: e,
    seatTypeOption: t
  }) => {
    let {
      originalKey,
      originalMember
    } = p[e] || {};
    let c = t === ViewAccessTypeEnum.VIEW ? null : t;
    let _ = (c && seatTypeProducts[c]) ?? null;
    if (!originalKey || !originalMember || !originalMember.team_user || c && !_) return;
    let h = {
      ...originalMember.team_user,
      active_seat_type: _
    };
    let m = {
      ...originalMember,
      upgrade_reason: upgradeReason,
      upgrade_method: upgradeMethod,
      assigned_at: assignedAt,
      upgrade_actor_name: upgradeActorName,
      team_user: h
    };
    u[originalKey] = m;
  });
  return {
    ...e,
    [teamId]: u
  };
}
export const P = $$c0;
export const Z = $$u1;