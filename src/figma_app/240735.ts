import { c as _$$c, r as _$$r } from "../905/676456";
import { NC } from "../905/17179";
import { Ay } from "../905/612521";
import { XHR } from "../905/910117";
import { s as _$$s } from "../905/573154";
import { t as _$$t } from "../905/303541";
import { RF, Nh } from "../905/890368";
import { F } from "../905/302958";
import { MM, nF } from "../905/350402";
import { A } from "../905/654645";
import { kW } from "../figma_app/391338";
import { N } from "../905/696711";
import { $ } from "../905/834575";
let $$g7 = MM("BATCH_DEL_TEAM_MEMBERS", (e, {
  teamId: t,
  userIds: r
}, {
  optimistId: i
}) => {
  XHR.del(`/api/teams/${t}/users`, {
    user_ids: r
  }).then(() => {
    e.dispatch(_$$c(i));
  }).catch(t => {
    e.dispatch(_$$r(i));
  });
});
let $$f3 = nF(async (e, t) => {
  let {
    teamId
  } = t;
  await XHR.put(`/api/teams/${teamId}/restore`).then(() => {
    let t = `/files/team/${teamId}`;
    Ay.redirect(t);
    e.dispatch(_$$s.flash(_$$t("file_browser.file_browser_actions.restore_team_success")));
  }).catch(t => {
    e.dispatch(_$$s.error(_$$t("file_browser.file_browser_actions.restore_team_error", {
      errorMsg: t.data.message || _$$t("file_browser.file_browser_actions.unknown_error")
    })));
  });
});
let $$E17 = nF(async (e, t) => {
  await XHR.put(`/api/teams/${t.teamId}`, {
    description: t.description
  }).then(() => {
    e.dispatch($$P20({
      team: {
        id: t.teamId,
        description: t.description
      },
      userInitiated: !0
    }));
  }).catch(() => {
    e.dispatch(_$$s.error(_$$t("file_browser.file_browser_actions.update_description_error")));
  });
});
let $$y16 = nF(async (e, t) => {
  let r = t.figma_provided_libraries_disabled;
  await $.updatePresetsDisabled({
    teamId: t.teamId,
    presetsDisabled: r
  }).then(() => {
    e.dispatch(F.enqueue({
      message: r ? _$$t("settings_tab.ui_kits_disabled") : _$$t("settings_tab.ui_kits_enabled"),
      type: "team.ui_kit_toggle",
      error: !1
    }));
    e.dispatch($$P20({
      team: {
        id: t.teamId,
        figma_provided_libraries_disabled: r
      },
      userInitiated: !0
    }));
  }).catch(() => {
    e.dispatch(_$$s.error(_$$t("file_browser.error_try_again")));
  });
});
nF((e, {
  teamId: t
}, {
  loadingKey: r
}) => {
  let n = $.getTeam({
    teamId: t
  });
  N(n, e, r);
  n.then(({
    data: t
  }) => {
    e.dispatch($$P20({
      team: t.meta,
      userInitiated: !1
    }));
  }).catch(() => {
    e.dispatch(_$$s.error(_$$t("file_browser.error_try_again")));
  });
});
let $$b12 = nF((e, {
  teamId: t,
  userInitiated: r = !0
}, {
  loadingKey: n
}) => {
  let i = $.getMembers({
    teamId: t
  });
  r && N(i, e, n);
  let a = kW({
    label: A.TeamMembersTable.teamMembersByTeamId,
    variant: "old",
    contextArgs: {
      teamId: t
    }
  });
  i.then(({
    data: r
  }) => {
    a();
    let n = {};
    r.meta.forEach(e => {
      n[e.email] = e;
    });
    e.dispatch($$T1({
      members: n,
      teamId: t
    }));
  }, t => {
    console.error(t);
    e.dispatch(_$$s.error(_$$t("file_browser.file_browser_actions.team_member_fetch_error")));
  });
}, e => `TEAM_FETCH_MEMBERS_LIST::teamId::${e.teamId}`);
let $$T1 = NC("TEAM_SET_MEMBERS");
let $$I11 = NC("TEAM_BATCH_JOIN");
let $$S13 = NC("TEAM_JOIN");
let $$v5 = NC("TEAM_STOP_RENAME");
let $$A6 = NC("TEAM_BEGIN_RENAME");
let $$x15 = NC("TEAM_CREATION_SET_LOADING");
let $$N14 = NC("TEAM_CHANGE_DEFAULT_PERMISSION");
let $$C8 = NC("TEAM_CHANGE_SHARING_SETTINGS");
let $$w10 = NC("TEAM_CHANGE_ORG_ACCESS");
NC("TEAM_LOADED");
let $$O2 = NC("TEAM_RENAME");
let $$R18 = NC("TEAM_BATCH_PUT");
let $$L0 = RF;
let $$P20 = nF((e, t) => {
  e.dispatch($$L0(t));
});
let $$D19 = Nh;
let $$k9 = NC("TEAM_POST");
let $$M4 = NC("TEAM_GET");
export const $I = $$L0;
export const $V = $$T1;
export const $w = $$O2;
export const I9 = $$f3;
export const Jt = $$M4;
export const TI = $$v5;
export const WC = $$A6;
export const _E = $$g7;
export const aB = $$C8;
export const bE = $$k9;
export const bQ = $$w10;
export const ii = $$I11;
export const m$ = $$b12;
export const mw = $$S13;
export const n9 = $$N14;
export const r1 = $$x15;
export const tk = $$y16;
export const ub = $$E17;
export const uo = $$R18;
export const yH = $$D19;
export const yJ = $$P20; 
