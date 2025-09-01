import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { wA } from "../vendor/514228";
import { sx } from "../905/449184";
import { XHR } from "../905/910117";
import { c$ } from "../figma_app/236327";
import { tx } from "../905/303541";
import { AS, to } from "../905/156213";
import { Y9 } from "../905/504768";
import { iZ } from "../905/372672";
import { D6, j_ } from "../figma_app/465071";
import { Ju } from "../905/102752";
import { yX } from "../figma_app/918700";
import { V } from "../7037/903447";
let h = Ju(function (e) {
  let t = tx("fig_feed.delete_confirmation");
  e.numComments && e.numReactions ? t = tx("fig_feed.delete_confirmation_with_comments_and_reactions", {
    numCommentsAndReactions: e.numComments + e.numReactions
  }) : e.numComments ? t = tx("fig_feed.delete_confirmation_with_comments", {
    numComments: e.numComments
  }) : e.numReactions && (t = tx("fig_feed.delete_confirmation_with_reactions", {
    numReactions: e.numReactions
  }));
  return jsx(yX, {
    destructive: !0,
    confirmationTitle: tx("fig_feed.delete_post"),
    confirmText: tx("fig_feed.delete"),
    onConfirm: e.onConfirm,
    popStack: !0,
    children: jsx("p", {
      children: t
    })
  });
}, "PostConfirmDeleteModal");
export var $$b0 = (e => (e.USER = "user_post_context_menu", e.SYSTEM = "system_post_context_menu", e))($$b0 || {});
let x = e => {
  let t = iZ();
  let n = (t && t.id === e.creator.id) ?? !1;
  let a = D6("useUserPostPermissions");
  return {
    canDelete: n,
    canAdminDelete: j_(a).unwrapOr(!1)
  };
};
export function $$y1(e) {
  let t = wA();
  let n = useCallback(() => t(Y9()), [t]);
  let {
    feedPost
  } = e;
  let {
    canDelete,
    canAdminDelete
  } = x(feedPost);
  let g = feedPost.comments.length;
  let b = feedPost.reactions.length;
  let y = useCallback(() => {
    t(AS());
    XHR.del(`/api/feed_posts/post_uuid/${feedPost.publicUuid}`).then(() => {
      sx("Team Feed Post Deleted", {
        postUuid: feedPost.publicUuid
      });
      n();
    });
  }, [t, feedPost.publicUuid, n]);
  let w = useCallback(() => {
    t(to({
      type: h,
      data: {
        onConfirm: y,
        numComments: g,
        numReactions: b
      },
      showModalsBeneath: !0
    }));
  }, [t, y, g, b]);
  if (!canDelete && !canAdminDelete) return null;
  let T = canDelete ? tx("fig_feed.delete_ellipsis") : tx("fig_feed.delete_admin_ellipsis");
  let j = [(!!canDelete || !!canAdminDelete) && jsx(c$, {
    onClick: w,
    children: T
  }, "delete")];
  return jsx(V, {
    dropdownId: $$v2("user_post_context_menu", e.feedPost.publicUuid, e.source),
    options: j,
    hideTarget: e.hideTarget,
    lean: "left",
    maxWidth: 120
  });
}
export let $$v2 = (e, t, n) => e + t + n;
export const Hx = $$b0;
export const Wu = $$y1;
export const j8 = $$v2;