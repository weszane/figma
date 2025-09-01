import { NC } from "../905/17179";
import { XHR } from "../905/910117";
import { s as _$$s } from "../905/573154";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { nF } from "../905/350402";
import { Sc } from "../905/18797";
import { N } from "../905/696711";
import { $ } from "../905/834575";
import { tc } from "../905/15667";
let $$m0 = nF((e, {
  licenseType: t,
  seatTypeKey: i,
  fileKey: n,
  message: l,
  teamId: d,
  entryPoint: c,
  onError: u,
  onSuccess: m,
  hideSuccessMessage: h,
  folderId: g
}) => {
  XHR.post(`/api/teams/${d}/team_users/request_upgrade`, {
    editor_type: t,
    billable_product_key: i,
    file_key: n,
    message: l,
    team_id: d,
    entry_point: c,
    folder_id: g
  }).then(function(t) {
    if (200 === t.status && m?.(t.data.meta?.id), !h) {
      let t;
      switch (c) {
        case tc.IN_EDITOR_RESTRICTED_DRAFT:
        case tc.RESTRICTED_DRAFT_SHARED_EMAIL:
          t = _$$t("team_user.actions.request_sent_well_let_you_know");
          break;
        case tc.ASK_TO_EDIT_ONE_CLICK:
          t = _$$t("1_click_expansion.request_sent_well_let_you");
          break;
        case "create-file-project-view":
        case tc.USER_SETTINGS:
          t = _$$t("upgrades.request_sent_toast");
          break;
        default:
          t = _$$t("team_user.actions.team_members_request_to_upgrade_succeeded");
      }
      e.dispatch(F.enqueue({
        message: t,
        type: "pro-upgrade-request-sent"
      }));
    }
  }).catch(function(t) {
    e.dispatch(_$$s.error(_$$t("team_user.actions.team_members_request_to_upgrade_failed")));
    u?.();
  });
});
let $$h1 = nF((e, {
  teamId: t
}, {
  loadingKey: i
}) => {
  if (!t) return;
  let n = e.getState();
  let r = "team" === n.selectedView.view && ("members" === n.selectedView.teamViewTab || "billing" === n.selectedView.teamViewTab) || "teamUpgrade" === n.selectedView.view || "eduReview" === n.selectedView.view;
  if (!Sc(n.loadingState, i) && !r) return;
  let o = $.getTeamUsers({
    teamId: t
  });
  N(o, e, i);
  o.then(i => {
    e.dispatch($$f2({
      teamUsers: i.data.meta,
      teamId: t
    }));
  }, t => {
    console.error(t);
    t && 403 !== t.status && e.dispatch(_$$s.error(_$$t("team_user.actions.an_error_occurred_while_retrieving_fetching_the_list_of_users_on_this_team")));
  });
}, ({
  teamId: e
}) => `TEAM_USER_INITIALIZED_FOR_TEAM_${e}`);
let $$g3 = NC("TEAM_USER_PUT");
let $$f2 = NC("TEAM_USER_INITIAL_SET");
export const Nu = $$m0;
export const Xw = $$h1;
export const pE = $$f2;
export const yJ = $$g3; 
