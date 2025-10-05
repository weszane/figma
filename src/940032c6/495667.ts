import { useDispatch } from "react-redux";
import { getCurrentLiveGraphClient } from "../905/761735";
import { getAtomMutate } from "../figma_app/566371";
import { getI18nString } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { VisualBellActions } from "../905/302958";
import { getSearchSessionIdFromSelector } from "../figma_app/387599";
import { getResourceTypeLabel, mapVtResourceType } from "../figma_app/471982";
import { hasContent, hasHubFile, isWidgetResource, getMainContent, getResourceType } from "../figma_app/427318";
import { resourceDetailQuery } from "../905/909123";
import { zm, Qi } from "../figma_app/49598";
import { C, $ } from "../figma_app/382445";
import { showModalHandler } from "../905/156213";
import { HubAction, HubEventType } from "../figma_app/350203";
import { logAndTrackCTA } from "../figma_app/314264";
import { selectCurrentUser } from "../905/372672";
import { liveStoreInstance } from "../905/713695";
import { hasClientMeta, isWidget, ResourceTypeNoComment } from "../figma_app/45218";
import { a as _$$a } from "../figma_app/601188";
import { COMMUNITY_OPT_IN_MODAL_NAME, CommunityOnboardingVariation } from "../figma_app/588092";
export function $$k0(e, t, i, p) {
  let b = function (e, t, i, l) {
    let a = useDispatch();
    let s = selectCurrentUser();
    let r = getSearchSessionIdFromSelector();
    let o = () => {
      hasContent(e) || (logAndTrackCTA(v()), hasClientMeta(e) ? a(zm({
        hubFileId: e.id
      })) : isWidget(e) ? a(C({
        id: e.id,
        resourceType: ResourceTypeNoComment.WIDGET
      })) : a(C({
        id: e.id,
        resourceType: ResourceTypeNoComment.PLUGIN
      })));
    };
    let p = e => {
      if (e.stopPropagation(), s) {
        if (!s.community_profile_id) {
          a(showModalHandler({
            type: COMMUNITY_OPT_IN_MODAL_NAME,
            data: {
              userId: s.id,
              variations: [CommunityOnboardingVariation.OPT_IN],
              onFinish: () => o()
            }
          }));
          return;
        }
        o();
      }
    };
    let b = t => {
      if (!hasContent(e)) {
        if (t.stopPropagation(), !s) throw Error(`Tried to unlike a ${getResourceTypeLabel(e)} as a signed out user`);
        logAndTrackCTA(v());
        hasClientMeta(e) ? a(Qi({
          hubFileId: e.id,
          likeId: i || void 0
        })) : isWidget(e) ? a($({
          id: e.id,
          resourceType: ResourceTypeNoComment.WIDGET,
          likeId: i || void 0
        })) : a($({
          id: e.id,
          resourceType: ResourceTypeNoComment.PLUGIN,
          likeId: i || void 0
        }));
      }
    };
    let v = () => ({
      action: hasHubFile(e) ? t ? HubAction.HUB_FILE_UNLIKE : HubAction.HUB_FILE_LIKE : isWidgetResource(e) ? t ? HubAction.WIDGET_UNLIKE : HubAction.WIDGET_LIKE : t ? HubAction.PLUGIN_UNLIKE : HubAction.PLUGIN_LIKE,
      pluginId: e.id,
      profileId: e.publisher.id,
      viewContext: l,
      searchSessionId: r
    });
    return function () {
      return t ? e => b(e) : e => p(e);
    };
  }(e, t, i, p);
  let v = function (e, t, i, p) {
    let x = useDispatch();
    let m = selectCurrentUser();
    let b = getSearchSessionIdFromSelector();
    let y = getAtomMutate($$w);
    let v = getAtomMutate(S);
    let k = () => {
      if (!hasContent(e)) return;
      let t = getMainContent(e);
      if (!t) throw Error("Missing resource content");
      logAndTrackCTA(I());
      let i = y({
        resourceId: e.id,
        contentId: t.id,
        apiResourceType: mapVtResourceType(e)
      });
      m && m.community_profile_id && getCurrentLiveGraphClient().optimisticallyCreate({
        CommunityHubLike: {
          [`optimistic-${e.id}-${m.community_profile_id}`]: {
            profileId: m.community_profile_id,
            resourceId: e.id,
            hubFileId: null,
            pluginId: null,
            hiddenAt: null,
            createdAt: new Date(),
            updatedAt: new Date(),
            canRead: !0
          }
        }
      }, i);
      i.catch(e => {
        x(VisualBellActions.enqueue({
          message: getI18nString("community.actions.unable_to_like_this_resource_error", {
            error: resolveMessage(e, e.data?.message)
          }),
          type: "RESOURCE_LIKE_FAILED",
          error: !0
        }));
      });
    };
    let C = e => {
      if (e.stopPropagation(), m) {
        if (!m.community_profile_id) {
          x(showModalHandler({
            type: COMMUNITY_OPT_IN_MODAL_NAME,
            data: {
              userId: m.id,
              variations: [CommunityOnboardingVariation.OPT_IN],
              onFinish: () => k()
            }
          }));
          return;
        }
        k();
      }
    };
    let T = t => {
      if (!hasContent(e)) return;
      let n = getMainContent(e);
      if (!n) throw Error("Missing resource content");
      if (t.stopPropagation(), !m) throw Error("Tried to unlike a resource as a signed out user");
      logAndTrackCTA(I());
      let a = v({
        resourceId: e.id,
        contentId: n.id,
        apiResourceType: mapVtResourceType(e)
      });
      i && getCurrentLiveGraphClient().optimisticallyDelete({
        CommunityHubLike: {
          [i]: null
        }
      }, a);
      a.catch(e => {
        x(VisualBellActions.enqueue({
          message: getI18nString("community.actions.unable_to_unlike_this_resource_error", {
            error: resolveMessage(e, e.data.message)
          }),
          type: "RESOURCE_UNLIKE_FAILED",
          error: !0
        }));
      });
    };
    let I = () => ({
      action: t ? HubEventType.RESOURCE_UNLIKE : HubEventType.RESOURCE_LIKE,
      resourceId: e.id,
      resourceType: getResourceType(e),
      profileId: e.publisher.id,
      viewContext: p,
      searchSessionId: b
    });
    return function () {
      return t ? e => T(e) : e => C(e);
    };
  }(e, t, i, p);
  return hasContent(e) ? v : b;
}
let $$w = liveStoreInstance.Mutation(({
  resourceId: e,
  contentId: t,
  apiResourceType: i
}, {
  query: n
}) => (n.mutate(resourceDetailQuery({
  apiResourceType: i,
  id: t
}), e => {
  e && (e.like_count += 1);
}), _$$a.likeResource({
  resourceId: e
})));
let S = liveStoreInstance.Mutation(({
  resourceId: e,
  contentId: t,
  apiResourceType: i
}, {
  query: n
}) => (n.mutate(resourceDetailQuery({
  apiResourceType: i,
  id: t
}), e => {
  e && (e.like_count -= 1);
}), _$$a.unlikeResource({
  resourceId: e
})));
export const w = $$k0;