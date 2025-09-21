import { trackEventAnalytics } from "../905/449184";
import { generateSessionId } from "../figma_app/925970";
import { FUserRoleType } from "../figma_app/191312";
var s = (e => (e.org_member = "org_member", e.org_guest = "org_guest", e.team_user = "team_user", e.personal_user = "personal_user", e))(s || {});
export function $$o3(e, t, i) {
  if (i && e === i.id) return i.email;
  if (t) {
    let i = Object.keys(t.usersByEmail).find(i => e === t.usersByEmail[i].id);
    if (i) return i;
  }
}
export function $$l2(e, t, i) {
  if (e && t) {
    let n = i[e];
    let r = n && n[t.id];
    return r && r.permission === FUserRoleType.GUEST;
  }
  return !1;
}
export function $$d4(e, t, i) {
  return e ? i ? "org_guest" : "org_member" : t ? "team_user" : "personal_user";
}
let $$c0 = "comments";
let $$u1 = "share_modal";
export class $$p5 {
  constructor(e, t, i, n, r) {
    this.entrypoint = e;
    this.openFileKey = t;
    this.state = {
      sessionId: null,
      queryCount: 0,
      resultsCount: 0
    };
    this.userContext = i;
    this.currentOrgId = n;
    this.openFileTeamId = r;
  }
  resetState() {
    this.state = {
      sessionId: null,
      queryCount: 0,
      resultsCount: 0
    };
    this.prevQuery = void 0;
  }
  startSession() {
    this.state = {
      sessionId: generateSessionId(),
      queryCount: 0,
      resultsCount: 0
    };
    trackEventAnalytics("contacts_session_start", {
      session_id: this.state.sessionId,
      entrypoint: this.entrypoint,
      user_context: this.userContext,
      file_key: this.openFileKey,
      org_id: this.currentOrgId,
      team_id: this.openFileTeamId
    });
  }
  trackQueryResult(e, t) {
    null === this.state.sessionId && this.startSession();
    this.prevQuery !== e && (this.state.queryCount += 1, this.state.resultsCount += t, trackEventAnalytics("contacts_query_result", {
      session_id: this.state.sessionId,
      entrypoint: this.entrypoint,
      query: e,
      characters_entered: e.length,
      num_results: t,
      user_context: this.userContext,
      file_key: this.openFileKey,
      org_id: this.currentOrgId,
      team_id: this.openFileTeamId
    }), this.prevQuery = e);
  }
  trackResultClicked(e, t, i, r) {
    trackEventAnalytics("contacts_result_clicked", {
      session_id: this.state.sessionId,
      entrypoint: this.entrypoint,
      query: e,
      characters_entered: e.length,
      position: t + 1,
      num_results: i,
      user_context: this.userContext,
      file_key: this.openFileKey,
      org_id: this.currentOrgId,
      team_id: this.openFileTeamId,
      isInvite: !!r
    });
    this.endSession("result_selected", !0);
  }
  endSession(e, t) {
    null !== this.state.sessionId && (trackEventAnalytics("contacts_session_end", {
      session_id: this.state.sessionId,
      num_queries_to_backend: this.state.queryCount,
      total_contacts_suggested: this.state.resultsCount,
      entrypoint: this.entrypoint,
      exitpoint: e,
      result_selected: t ?? !1,
      user_context: this.userContext,
      file_key: this.openFileKey,
      org_id: this.currentOrgId,
      team_id: this.openFileTeamId
    }), this.resetState());
  }
}
export const I2 = $$c0;
export const TD = $$u1;
export const Ty = $$l2;
export const o7 = $$o3;
export const pP = $$d4;
export const yO = $$p5;