import { useDispatch } from "react-redux";
import { WB } from "../905/761735";
import { getAtomMutate } from "../figma_app/566371";
import { getI18nString } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { VisualBellActions } from "../905/302958";
import { getSearchSessionIdFromSelector } from "../figma_app/387599";
import { getResourceTypeLabel, mapVtResourceType } from "../figma_app/471982";
import { hasContent, hasHubFile, isWidgetResource, getMainContent, getResourceType } from "../figma_app/427318";
import { Z } from "../905/909123";
import { zm, Qi } from "../figma_app/49598";
import { C as _$$C, $ } from "../figma_app/382445";
import { showModalHandler } from "../905/156213";
import { HubAction, HubEventType } from "../figma_app/350203";
import { logAndTrackCTA } from "../figma_app/314264";
import { selectCurrentUser } from "../905/372672";
import { liveStoreInstance } from "../905/713695";
import { hasClientMeta, isWidget, ResourceTypeNoComment } from "../figma_app/45218";
import { a as _$$a } from "../figma_app/601188";
import { G$, FF } from "../figma_app/588092";
export function $$$$w0(e, t, r, m) {
  let g = function (e, t, r, i) {
    let n = useDispatch();
    let o = selectCurrentUser();
    let a = getSearchSessionIdFromSelector();
    let l = () => {
      hasContent(e) || (logAndTrackCTA(b()), hasClientMeta(e) ? n(zm({
        hubFileId: e.id
      })) : isWidget(e) ? n(_$$C({
        id: e.id,
        resourceType: ResourceTypeNoComment.WIDGET
      })) : n(_$$C({
        id: e.id,
        resourceType: ResourceTypeNoComment.PLUGIN
      })));
    };
    let m = e => {
      if (e.stopPropagation(), o) {
        if (!o.community_profile_id) {
          n(showModalHandler({
            type: G$,
            data: {
              userId: o.id,
              variations: [FF.OPT_IN],
              onFinish: () => l()
            }
          }));
          return;
        }
        l();
      }
    };
    let g = t => {
      if (!hasContent(e)) {
        if (t.stopPropagation(), !o) throw Error(`Tried to unlike a ${getResourceTypeLabel(e)} as a signed out user`);
        logAndTrackCTA(b());
        hasClientMeta(e) ? n(Qi({
          hubFileId: e.id,
          likeId: r || void 0
        })) : isWidget(e) ? n($({
          id: e.id,
          resourceType: ResourceTypeNoComment.WIDGET,
          likeId: r || void 0
        })) : n($({
          id: e.id,
          resourceType: ResourceTypeNoComment.PLUGIN,
          likeId: r || void 0
        }));
      }
    };
    let b = () => ({
      action: hasHubFile(e) ? t ? HubAction.HUB_FILE_UNLIKE : HubAction.HUB_FILE_LIKE : isWidgetResource(e) ? t ? HubAction.WIDGET_UNLIKE : HubAction.WIDGET_LIKE : t ? HubAction.PLUGIN_UNLIKE : HubAction.PLUGIN_LIKE,
      pluginId: e.id,
      profileId: e.publisher.id,
      viewContext: i,
      searchSessionId: a
    });
    return function () {
      return t ? e => g(e) : e => m(e);
    };
  }(e, t, r, m);
  let b = function (e, t, r, m) {
    let _ = useDispatch();
    let p = selectCurrentUser();
    let g = getSearchSessionIdFromSelector();
    let v = getAtomMutate(C);
    let b = getAtomMutate(L);
    let w = () => {
      if (!hasContent(e)) return;
      let t = getMainContent(e);
      if (!t) throw Error("Missing resource content");
      logAndTrackCTA(N());
      let r = v({
        resourceId: e.id,
        contentId: t.id,
        apiResourceType: mapVtResourceType(e)
      });
      p && p.community_profile_id && WB().optimisticallyCreate({
        CommunityHubLike: {
          [`optimistic-${e.id}-${p.community_profile_id}`]: {
            profileId: p.community_profile_id,
            resourceId: e.id,
            hubFileId: null,
            pluginId: null,
            hiddenAt: null,
            createdAt: new Date(),
            updatedAt: new Date(),
            canRead: !0
          }
        }
      }, r);
      r.catch(e => {
        _(VisualBellActions.enqueue({
          message: getI18nString("community.actions.unable_to_like_this_resource_error", {
            error: resolveMessage(e, e.data?.message)
          }),
          type: "RESOURCE_LIKE_FAILED",
          error: !0
        }));
      });
    };
    let T = e => {
      if (e.stopPropagation(), p) {
        if (!p.community_profile_id) {
          _(showModalHandler({
            type: G$,
            data: {
              userId: p.id,
              variations: [FF.OPT_IN],
              onFinish: () => w()
            }
          }));
          return;
        }
        w();
      }
    };
    let I = t => {
      if (!hasContent(e)) return;
      let s = getMainContent(e);
      if (!s) throw Error("Missing resource content");
      if (t.stopPropagation(), !p) throw Error("Tried to unlike a resource as a signed out user");
      logAndTrackCTA(N());
      let n = b({
        resourceId: e.id,
        contentId: s.id,
        apiResourceType: mapVtResourceType(e)
      });
      r && WB().optimisticallyDelete({
        CommunityHubLike: {
          [r]: null
        }
      }, n);
      n.catch(e => {
        _(VisualBellActions.enqueue({
          message: getI18nString("community.actions.unable_to_unlike_this_resource_error", {
            error: resolveMessage(e, e.data.message)
          }),
          type: "RESOURCE_UNLIKE_FAILED",
          error: !0
        }));
      });
    };
    let N = () => ({
      action: t ? HubEventType.RESOURCE_UNLIKE : HubEventType.RESOURCE_LIKE,
      resourceId: e.id,
      resourceType: getResourceType(e),
      profileId: e.publisher.id,
      viewContext: m,
      searchSessionId: g
    });
    return function () {
      return t ? e => I(e) : e => T(e);
    };
  }(e, t, r, m);
  return hasContent(e) ? b : g;
}
let C = liveStoreInstance.Mutation(({
  resourceId: e,
  contentId: t,
  apiResourceType: r
}, {
  query: s
}) => (s.mutate(Z({
  apiResourceType: r,
  id: t
}), e => {
  e && (e.like_count += 1);
}), _$$a.likeResource({
  resourceId: e
})));
let L = liveStoreInstance.Mutation(({
  resourceId: e,
  contentId: t,
  apiResourceType: r
}, {
  query: s
}) => (s.mutate(Z({
  apiResourceType: r,
  id: t
}), e => {
  e && (e.like_count -= 1);
}), _$$a.unlikeResource({
  resourceId: e
})));
export const w = $$$$w0;