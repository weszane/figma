import { useDispatch } from "react-redux";
import { WB } from "../905/761735";
import { getAtomMutate } from "../figma_app/566371";
import { getI18nString } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { VisualBellActions } from "../905/302958";
import { Jm } from "../figma_app/387599";
import { KH, A7 } from "../figma_app/471982";
import { XW, Qc, $3, qY, Vm } from "../figma_app/427318";
import { Z } from "../905/909123";
import { zm, Qi } from "../figma_app/49598";
import { C as _$$C, $ } from "../figma_app/382445";
import { showModalHandler } from "../905/156213";
import { s0, M5 } from "../figma_app/350203";
import { Cu } from "../figma_app/314264";
import { selectCurrentUser } from "../905/372672";
import { M4 } from "../905/713695";
import { U, xQ, vt } from "../figma_app/45218";
import { a as _$$a } from "../figma_app/601188";
import { G$, FF } from "../figma_app/588092";
export function $$$$w0(e, t, r, m) {
  let g = function (e, t, r, i) {
    let n = useDispatch();
    let o = selectCurrentUser();
    let a = Jm();
    let l = () => {
      XW(e) || (Cu(b()), U(e) ? n(zm({
        hubFileId: e.id
      })) : xQ(e) ? n(_$$C({
        id: e.id,
        resourceType: vt.WIDGET
      })) : n(_$$C({
        id: e.id,
        resourceType: vt.PLUGIN
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
      if (!XW(e)) {
        if (t.stopPropagation(), !o) throw Error(`Tried to unlike a ${KH(e)} as a signed out user`);
        Cu(b());
        U(e) ? n(Qi({
          hubFileId: e.id,
          likeId: r || void 0
        })) : xQ(e) ? n($({
          id: e.id,
          resourceType: vt.WIDGET,
          likeId: r || void 0
        })) : n($({
          id: e.id,
          resourceType: vt.PLUGIN,
          likeId: r || void 0
        }));
      }
    };
    let b = () => ({
      action: Qc(e) ? t ? s0.HUB_FILE_UNLIKE : s0.HUB_FILE_LIKE : $3(e) ? t ? s0.WIDGET_UNLIKE : s0.WIDGET_LIKE : t ? s0.PLUGIN_UNLIKE : s0.PLUGIN_LIKE,
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
    let g = Jm();
    let v = getAtomMutate(C);
    let b = getAtomMutate(L);
    let w = () => {
      if (!XW(e)) return;
      let t = qY(e);
      if (!t) throw Error("Missing resource content");
      Cu(N());
      let r = v({
        resourceId: e.id,
        contentId: t.id,
        apiResourceType: A7(e)
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
      if (!XW(e)) return;
      let s = qY(e);
      if (!s) throw Error("Missing resource content");
      if (t.stopPropagation(), !p) throw Error("Tried to unlike a resource as a signed out user");
      Cu(N());
      let n = b({
        resourceId: e.id,
        contentId: s.id,
        apiResourceType: A7(e)
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
      action: t ? M5.RESOURCE_UNLIKE : M5.RESOURCE_LIKE,
      resourceId: e.id,
      resourceType: Vm(e),
      profileId: e.publisher.id,
      viewContext: m,
      searchSessionId: g
    });
    return function () {
      return t ? e => I(e) : e => T(e);
    };
  }(e, t, r, m);
  return XW(e) ? b : g;
}
let C = M4.Mutation(({
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
let L = M4.Mutation(({
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