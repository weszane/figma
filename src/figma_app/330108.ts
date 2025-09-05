import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import a from "../vendor/879378";
import { A } from "../vendor/21595";
import { NC } from "../905/17179";
import { XHR } from "../905/910117";
import { s as _$$s } from "../905/573154";
import { t as _$$t } from "../905/303541";
import { J } from "../905/231762";
import { nF } from "../905/350402";
import { yJ } from "../figma_app/240735";
import { UM, vr } from "../figma_app/475472";
import { n1, p9 } from "../figma_app/88768";
import { N } from "../905/696711";
import { Eh } from "../figma_app/617654";
import { u as _$$u } from "../905/774364";
import { Cx, of } from "../figma_app/714946";
var s = a;
nF(async (e, t) => {
  let r = t.team.id;
  try {
    let n = (await XHR.put(`/api/teams/${r}`, {
      org_access: t.orgAccess
    })).data.meta;
    e.dispatch($$O8({
      teams: [n]
    }));
  } catch (t) {
    e.dispatch(_$$s.error(J(t, _$$t("org_team_actions.an_error_occurred_while_changing_team_s_org_access"))));
  }
});
let $$T7 = nF(async (e, t) => {
  let r = {};
  if (t.teams.forEach(e => {
    let t = e.workspace_id;
    t && (t in r || (r[t] = []), r[t].push(e.id));
  }), Object.keys(r).length) try {
    let t = Object.keys(r).map(e => {
      let t = r[e];
      return XHR.del(`/api/workspace/${e}/teams`, {
        team_ids: t
      });
    });
    let n = await Promise.all(t);
    let i = [].concat(...n.map(e => e.data.meta));
    e.dispatch($$O8({
      teams: i
    }));
    e.dispatch(_$$s.flash(_$$t("org_team_actions.teams_were_unassigned", {
      numTeams: i.length
    })));
  } catch (t) {
    e.dispatch(_$$s.error(J(t, _$$t("org_team_actions.an_error_occurred_while_unassigning_team_s_from_a_workspace"))));
  }
});
let $$I10 = nF(async (e, t) => {
  let r = t.teams.map(e => e.id);
  let n = t.workspaceId;
  try {
    let i = (await XHR.post(`/api/workspace/${n}/teams`, {
      team_ids: r
    })).data.meta;
    e.dispatch($$O8({
      teams: i
    }));
    e.dispatch(_$$s.flash(_$$t("org_team_actions.teams_were_assigned_to_workspace", {
      numTeams: i.length,
      workspaceName: t.workspaceName
    })));
  } catch (t) {
    e.dispatch(_$$s.error(J(t, _$$t("org_team_actions.an_error_occurred_while_assigning_team_s_to_a_workspace"))));
  }
});
nF(async (e, t) => {
  let r = t.workspaceId;
  e.dispatch($$C4("loading"));
  try {
    let t = (await _$$u.getTeams({
      includeSecretTeams: !0,
      workspaceId: r
    })).data.meta;
    e.dispatch($$O8({
      teams: t
    }));
    e.dispatch($$C4("loaded"));
  } catch (t) {
    e.dispatch(_$$s.error(J(t, _$$t("org_team_actions.an_error_occurred_while_fetching_teams"))));
    e.dispatch($$C4("errors"));
  }
});
let $$S6 = nF((e, t) => {
  let r = e.getState().currentUserOrgId;
  let n = t.teamIds;
  let i = {
    team_ids: n
  };
  t.level && (i.level = t.level);
  let a = n1(n);
  e.dispatch(Cx({
    key: a
  }));
  XHR.post(`/api/orgs/${r}/teams/join`, i).then(() => {
    e.dispatch(UM({
      teamIds: n,
      level: t.level
    }));
  }).catch(t => {
    e.dispatch(_$$s.error(J(t, _$$t("org_team_actions.an_error_occurred_while_joining_teams"))));
    e.dispatch(of({
      key: a
    }));
  });
});
let v = nF((e, t) => {
  let r = e.getState().currentUserOrgId;
  let n = t.teamId;
  let i = {
    team_ids: [n]
  };
  t.level && (i.level = t.level);
  let a = p9(n);
  e.dispatch(Cx({
    key: a
  }));
  XHR.post(`/api/orgs/${r}/teams/join`, i).then(() => {
    e.dispatch(vr({
      teamId: n,
      level: t.level
    }));
  }).catch(t => {
    e.dispatch(_$$s.error(J(t, _$$t("org_team_actions.an_error_occurred_while_joining"))));
    e.dispatch(of({
      key: a
    }));
  });
});
let $$A2 = nF((e, t, {
  loadingKey: r
}) => {
  let n = e.getState().currentUserOrgId;
  let {
    teamId,
    disableFlashError
  } = t;
  let s = Eh.getTeam({
    orgId: n,
    teamId
  });
  N(s, e, r);
  s.then(t => {
    let r = t.data.meta;
    e.dispatch(yJ({
      team: r,
      userInitiated: !1
    }));
  }).catch(t => {
    disableFlashError || e.dispatch(_$$s.error(J(t, _$$t("org_team_actions.an_error_occurred_while_trying_to_fetch_this_team"))));
  });
}, ({
  teamId: e
}) => `ORG_FETCH_TEAM_${e}`);
let $$x0 = NC("ORG_FETCH_DISCOVERABLE_TEAMS");
let $$N3 = nF((e, t) => {
  let r = e.getState().currentUserOrgId;
  let {
    includeProjectCount,
    includeMemberCount,
    includeTopMembers,
    includeSecretTeams
  } = t || {};
  Eh.getTeams({
    orgId: r,
    includeMemberCount,
    includeProjectCount,
    includeTopMembers,
    includeSecretTeams
  }).then(t => {
    let r = t.data.meta;
    e.dispatch($$O8({
      teams: r
    }));
  }).catch(t => {
    e.dispatch(_$$s.error(J(t, _$$t("org_team_actions.an_error_occurred_while_trying_to_fetch_teams_within_the_organization"))));
  });
  e.dispatch($$x0(t));
});
let $$C4 = NC("SET_ORG_TEAMS_STATUS");
let $$w5 = NC("RESET_ORG_TEAMS");
let $$O8 = NC("ORGS_SET_DISCOVERABLE_TEAMS");
export function $$R1(e, t, r) {
  return s()(() => e(v({
    teamId: t,
    level: r
  })), 500, {
    leading: !0,
    trailing: !1
  });
}
export function $$L9(e, t, r) {
  let a = useDispatch();
  let s = A(() => {
    a(v({
      teamId: e,
      level: t
    }));
    r && r(e);
  }, 500, {
    leading: !0,
    trailing: !1
  });
  return useCallback(s, [s]);
}
export const E = $$x0;
export const GR = $$R1;
export const HD = $$A2;
export const Jt = $$N3;
export const Lx = $$C4;
export const MT = $$w5;
export const ZT = $$S6;
export const c5 = $$T7;
export const hZ = $$O8;
export const lH = $$L9;
export const xM = $$I10;