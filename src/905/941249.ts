import { NC } from "../905/17179";
import { XHR } from "../905/910117";
import { s as _$$s } from "../905/573154";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { nF } from "../905/350402";
import { _J } from "../figma_app/314264";
import { FResourceCategoryType } from "../figma_app/191312";
import { N } from "../905/696711";
import { _M, jx, wZ, OL } from "../figma_app/869776";
import { S } from "../figma_app/11182";
var $$h1 = (e => (e.TEAM_PERMISSIONS_MODAL = "team permissions modal", e.NUX_INVITE_COLLABORATOR = "nux invite collaborator", e))($$h1 || {});
let $$g0 = NC("TEAM_JOIN_LINKS_SET_REQUEST_STATE");
let $$f5 = nF(async (e, t, {
  loadingKey: i
}) => {
  let n = XHR.put("/api/team_join_link/disable", {
    team_id: t.teamId
  });
  N(n, e, i);
  await n.then(() => {
    e.dispatch($$g0({
      disabled: !0,
      url: void 0
    }));
  }).catch(t => {
    e.dispatch(_$$s.error(t.message));
  });
});
let $$_3 = nF(async (e, t) => {
  let i = XHR.post("/api/team_join_link/reset", {
    team_id: t.teamId,
    level: t.level
  });
  N(i, e, _M(t.teamId));
  await i.then(({
    data: i
  }) => {
    let n = i.meta;
    let r = jx(n);
    e.dispatch($$g0({
      disabled: !1,
      url: r
    }));
    t.shouldShowVisualBell && e.dispatch(F.enqueue({
      message: _$$t("flash.team_join_link_actions.invite_links_reset")
    }));
  }).catch(t => {
    e.dispatch(_$$s.error(t.data.message || "Unknown error"));
  });
});
let $$A4 = nF((e, t) => {
  let i = wZ(t.teamId, t.level);
  N(i, e, OL(t.teamId));
  i.then(t => {
    if (t.disabled) e.dispatch($$g0({
      disabled: !0,
      url: void 0
    })); else if (t.link) {
      let i = jx(t.link);
      e.dispatch($$g0({
        disabled: !1,
        url: i
      }));
    }
  }).catch(i => {
    t.shouldShowFailureMessage && e.dispatch(_$$s.error(i.message));
    t.callbackOnFailure?.();
  });
});
let $$y2 = nF((e, t) => {
  _J("Team Join Link Copied", t.teamId, e.getState(), {
    userId: e.getState().user?.id,
    teamJoinLink: t.url,
    resourceType: FResourceCategoryType.TEAM,
    resourceId: t.teamId,
    copyLinkSource: t.source
  });
  e.dispatch(S({
    url: t.url
  }));
});
export const F1 = $$g0;
export const Kq = $$h1;
export const LN = $$y2;
export const Nw = $$_3;
export const _$$do = $$A4;
export const ui = $$f5; 
