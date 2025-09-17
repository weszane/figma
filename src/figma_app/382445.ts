import { WB } from "../905/761735";
import { XHR } from "../905/910117";
import { getI18nString } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { VisualBellActions } from "../905/302958";
import { createOptimistThunk } from "../905/350402";
import { getHubTypeString, findPublishedProfileForUser } from "../figma_app/740025";
import { setupLoadingStateHandler } from "../905/696711";
import { ResourceTypeNoComment } from "../figma_app/45218";
let $$p1 = createOptimistThunk((e, {
  id: t,
  resourceType: r
}, {
  loadingKey: l
}) => {
  let p = XHR.post(`/api/${getHubTypeString(r)}/${t}/like`, {
    orgId: e.getState().currentUserOrgId
  });
  setupLoadingStateHandler(p, e, l);
  p.catch(t => {
    e.dispatch(VisualBellActions.enqueue({
      message: r === ResourceTypeNoComment.PLUGIN ? getI18nString("community.actions.unable_to_like_this_plugin_error", {
        error: resolveMessage(t, t.data.message)
      }) : getI18nString("community.actions.unable_to_like_this_widget_error", {
        error: resolveMessage(t, t.data.message)
      }),
      type: `${r.toUpperCase()}_LIKE_FAILED`,
      error: !0
    }));
  });
  let _ = e.getState().user;
  let h = _ && findPublishedProfileForUser(_, e.getState().authedProfilesById);
  _?.id && h && WB().optimisticallyCreate({
    CommunityHubLike: {
      [`optimistic-${t}-${h.id}`]: {
        pluginId: t,
        hubFileId: null,
        resourceId: null,
        profileId: h.id,
        hiddenAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        canRead: !0
      }
    }
  }, p);
}, ({
  id: e
}) => `LIKE_RESOURCE_${e}`);
let $$_0 = createOptimistThunk((e, {
  id: t,
  resourceType: r,
  likeId: s
}, {
  loadingKey: l
}) => {
  let p = XHR.del(`/api/${getHubTypeString(r)}/${t}/like`, {
    orgId: e.getState().currentUserOrgId
  });
  setupLoadingStateHandler(p, e, l);
  p.catch(t => {
    e.dispatch(VisualBellActions.enqueue({
      message: r === ResourceTypeNoComment.PLUGIN ? getI18nString("community.actions.unable_to_unlike_this_plugin_error", {
        error: t.data.message
      }) : getI18nString("community.actions.unable_to_unlike_this_widget_error", {
        error: t.data.message
      }),
      type: `${r.toUpperCase()}_UNLIKE_FAILED`,
      error: !0
    }));
  });
  e.getState().user?.id && s && WB().optimisticallyDelete({
    CommunityHubLike: {
      [s]: null
    }
  }, p);
});
export const $ = $$_0;
export const C = $$p1;