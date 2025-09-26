import { createActionCreator } from "../905/73481";
import { sendWithRetry } from "../905/910117";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { createOptimistThunk } from "../905/350402";
import { trackTeamEvent } from "../figma_app/314264";
import { FResourceCategoryType } from "../figma_app/191312";
import { setupLoadingStateHandler } from "../905/696711";
import { _M, jx, wZ, OL } from "../figma_app/869776";
import { S } from "../figma_app/11182";
var $$h1 = (e => (e.TEAM_PERMISSIONS_MODAL = "team permissions modal", e.NUX_INVITE_COLLABORATOR = "nux invite collaborator", e))($$h1 || {});
let $$g0 = createActionCreator("TEAM_JOIN_LINKS_SET_REQUEST_STATE");
let $$f5 = createOptimistThunk(async (e, t, {
  loadingKey: i
}) => {
  let n = sendWithRetry.put("/api/team_join_link/disable", {
    team_id: t.teamId
  });
  setupLoadingStateHandler(n, e, i);
  await n.then(() => {
    e.dispatch($$g0({
      disabled: !0,
      url: void 0
    }));
  }).catch(t => {
    e.dispatch(FlashActions.error(t.message));
  });
});
let $$_3 = createOptimistThunk(async (e, t) => {
  let i = sendWithRetry.post("/api/team_join_link/reset", {
    team_id: t.teamId,
    level: t.level
  });
  setupLoadingStateHandler(i, e, _M(t.teamId));
  await i.then(({
    data: i
  }) => {
    let n = i.meta;
    let r = jx(n);
    e.dispatch($$g0({
      disabled: !1,
      url: r
    }));
    t.shouldShowVisualBell && e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("flash.team_join_link_actions.invite_links_reset")
    }));
  }).catch(t => {
    e.dispatch(FlashActions.error(t.data.message || "Unknown error"));
  });
});
let $$A4 = createOptimistThunk((e, t) => {
  let i = wZ(t.teamId, t.level);
  setupLoadingStateHandler(i, e, OL(t.teamId));
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
    t.shouldShowFailureMessage && e.dispatch(FlashActions.error(i.message));
    t.callbackOnFailure?.();
  });
});
let $$y2 = createOptimistThunk((e, t) => {
  trackTeamEvent("Team Join Link Copied", t.teamId, e.getState(), {
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
