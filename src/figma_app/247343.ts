import { c as _$$c, r as _$$r } from "../905/676456";
import { XHR } from "../905/910117";
import { s as _$$s } from "../905/573154";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { j } from "../905/869261";
import { to } from "../905/156213";
import { FPlanRestrictionType } from "../figma_app/191312";
import { j4 } from "../905/814802";
import { nF, MM } from "../905/350402";
import { yJ } from "../905/584989";
nF((e, {
  members: t,
  team: r,
  teamUsers: n,
  usersWithNoTeamUserIds: i = [],
  paidStatusType: a,
  paidStatus: p,
  entryPoint: _,
  showModalsBeneath: m = !1
}) => {
  e.dispatch(to({
    type: j(),
    data: {
      onConfirm: () => {
        let l;
        e.dispatch($$h0({
          teamId: r.id,
          teamUsers: n,
          usersWithNoTeamUserIds: i,
          paidStatus: p,
          paidStatusType: a,
          userInitiated: !0,
          entryPoint: _
        }));
        let d = t.length;
        let m = {
          productName: a === j4.WHITEBOARD ? _$$t("general.figjam") : _$$t("general.figma_design"),
          nameOrEmail: t[0].name || t[0].email,
          numTeamMembers: d
        };
        switch (p) {
          case FPlanRestrictionType.FULL:
            l = _$$t("team_user.actions.team_members_upgraded.seat_rename", m);
            break;
          case FPlanRestrictionType.STARTER:
            l = _$$t("team_user.actions.team_members_downgraded_to_viewer.seat_rename", m);
            break;
          case FPlanRestrictionType.RESTRICTED:
            l = _$$t("team_user.actions.team_members_downgraded_to_viewer_restricted.seat_rename", m);
        }
        e.dispatch(F.enqueue({
          type: "team-paid-status-updated",
          message: l
        }));
      },
      members: t,
      team: r,
      paidStatusType: a,
      paidStatus: p
    },
    showModalsBeneath: m
  }));
});
export let $$h0 = MM("TEAM_USER_UPDATE_DESIGN_PAID_STATUS", async (e, {
  teamId: t,
  teamUsers: r,
  usersWithNoTeamUserIds: o,
  paidStatus: l,
  paidStatusType: d,
  userInitiated: c,
  entryPoint: p
}, {
  optimistId: h
}) => {
  if (c) {
    let c = r.map(e => e.user_id).concat(o || []);
    await XHR.put(`/api/teams/${t}/team_user_batch`, {
      team_user_deltas: c.map(e => {
        let t = {
          user_id: e
        };
        d === j4.WHITEBOARD ? t.whiteboard_paid_status = l : t.design_paid_status = l;
        return t;
      }),
      entry_point: p
    }).then(function({
      data: r
    }) {
      e.dispatch(_$$c(h));
      e.dispatch(yJ({
        teamUsers: r.meta,
        teamId: t
      }));
    }).catch(function(t) {
      e.dispatch(_$$r(h));
      let r = _$$t("team_user.actions.an_error_occurred_while_changing_a_team_member_s_billing_status");
      e.dispatch(_$$s.error(r));
      console.error(t);
    });
  }
}, e => `$TEAM_USER_UPDATE_DESIGN_PAID_STATUS::teamId::${e.teamId}`);
export const m = $$h0; 
