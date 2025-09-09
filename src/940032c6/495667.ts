import { useDispatch } from "react-redux";
import { WB } from "../905/761735";
import { gY } from "../figma_app/566371";
import { getI18nString } from "../905/303541";
import { J } from "../905/231762";
import { VisualBellActions } from "../905/302958";
import { Jm } from "../figma_app/387599";
import { KH, A7 } from "../figma_app/471982";
import { XW, Qc, $3, qY, Vm } from "../figma_app/427318";
import { Z } from "../905/909123";
import { zm, Qi } from "../figma_app/49598";
import { C, $ } from "../figma_app/382445";
import { showModalHandler } from "../905/156213";
import { s0, M5 } from "../figma_app/350203";
import { Cu } from "../figma_app/314264";
import { selectCurrentUser } from "../905/372672";
import { M4 } from "../905/713695";
import { U, xQ, vt } from "../figma_app/45218";
import { a as _$$a } from "../figma_app/601188";
import { G$, FF } from "../figma_app/588092";
export function $$k0(e, t, i, p) {
  let b = function (e, t, i, l) {
    let a = useDispatch();
    let s = selectCurrentUser();
    let r = Jm();
    let o = () => {
      XW(e) || (Cu(v()), U(e) ? a(zm({
        hubFileId: e.id
      })) : xQ(e) ? a(C({
        id: e.id,
        resourceType: vt.WIDGET
      })) : a(C({
        id: e.id,
        resourceType: vt.PLUGIN
      })));
    };
    let p = e => {
      if (e.stopPropagation(), s) {
        if (!s.community_profile_id) {
          a(showModalHandler({
            type: G$,
            data: {
              userId: s.id,
              variations: [FF.OPT_IN],
              onFinish: () => o()
            }
          }));
          return;
        }
        o();
      }
    };
    let b = t => {
      if (!XW(e)) {
        if (t.stopPropagation(), !s) throw Error(`Tried to unlike a ${KH(e)} as a signed out user`);
        Cu(v());
        U(e) ? a(Qi({
          hubFileId: e.id,
          likeId: i || void 0
        })) : xQ(e) ? a($({
          id: e.id,
          resourceType: vt.WIDGET,
          likeId: i || void 0
        })) : a($({
          id: e.id,
          resourceType: vt.PLUGIN,
          likeId: i || void 0
        }));
      }
    };
    let v = () => ({
      action: Qc(e) ? t ? s0.HUB_FILE_UNLIKE : s0.HUB_FILE_LIKE : $3(e) ? t ? s0.WIDGET_UNLIKE : s0.WIDGET_LIKE : t ? s0.PLUGIN_UNLIKE : s0.PLUGIN_LIKE,
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
    let b = Jm();
    let y = gY($$w);
    let v = gY(S);
    let k = () => {
      if (!XW(e)) return;
      let t = qY(e);
      if (!t) throw Error("Missing resource content");
      Cu(I());
      let i = y({
        resourceId: e.id,
        contentId: t.id,
        apiResourceType: A7(e)
      });
      m && m.community_profile_id && WB().optimisticallyCreate({
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
            error: J(e, e.data?.message)
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
            type: G$,
            data: {
              userId: m.id,
              variations: [FF.OPT_IN],
              onFinish: () => k()
            }
          }));
          return;
        }
        k();
      }
    };
    let T = t => {
      if (!XW(e)) return;
      let n = qY(e);
      if (!n) throw Error("Missing resource content");
      if (t.stopPropagation(), !m) throw Error("Tried to unlike a resource as a signed out user");
      Cu(I());
      let a = v({
        resourceId: e.id,
        contentId: n.id,
        apiResourceType: A7(e)
      });
      i && WB().optimisticallyDelete({
        CommunityHubLike: {
          [i]: null
        }
      }, a);
      a.catch(e => {
        x(VisualBellActions.enqueue({
          message: getI18nString("community.actions.unable_to_unlike_this_resource_error", {
            error: J(e, e.data.message)
          }),
          type: "RESOURCE_UNLIKE_FAILED",
          error: !0
        }));
      });
    };
    let I = () => ({
      action: t ? M5.RESOURCE_UNLIKE : M5.RESOURCE_LIKE,
      resourceId: e.id,
      resourceType: Vm(e),
      profileId: e.publisher.id,
      viewContext: p,
      searchSessionId: b
    });
    return function () {
      return t ? e => T(e) : e => C(e);
    };
  }(e, t, i, p);
  return XW(e) ? v : b;
}
let $$w = M4.Mutation(({
  resourceId: e,
  contentId: t,
  apiResourceType: i
}, {
  query: n
}) => (n.mutate(Z({
  apiResourceType: i,
  id: t
}), e => {
  e && (e.like_count += 1);
}), _$$a.likeResource({
  resourceId: e
})));
let S = M4.Mutation(({
  resourceId: e,
  contentId: t,
  apiResourceType: i
}, {
  query: n
}) => (n.mutate(Z({
  apiResourceType: i,
  id: t
}), e => {
  e && (e.like_count -= 1);
}), _$$a.unlikeResource({
  resourceId: e
})));
export const w = $$k0;