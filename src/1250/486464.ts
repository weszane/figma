import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useRef, useMemo } from "react";
import { wA } from "../vendor/514228";
import o from "classnames";
import { Oy, EF, t9, FJ } from "../905/504768";
import { BK } from "../905/848862";
import { iZ } from "../905/372672";
import { _ as _$$_ } from "../figma_app/433187";
import { Kb, ny } from "../905/552753";
import { KD, $S, D5, HL, Qi } from "../7037/166178";
var s = o;
var $$p1 = (e => (e[e.FULL = 0] = "FULL", e[e.ADD_ONLY = 1] = "ADD_ONLY", e))($$p1 || {});
var $$g4 = (e => (e[e.TILE_CONTENT = 0] = "TILE_CONTENT", e[e.TILE_POST = 1] = "TILE_POST", e[e.DETAIL_POST = 2] = "DETAIL_POST", e[e.DETAIL_COMMENT_NO_REACTION = 3] = "DETAIL_COMMENT_NO_REACTION", e[e.DETAIL_COMMENT_WITH_REACTION = 4] = "DETAIL_COMMENT_WITH_REACTION", e[e.FILE_POPOVER = 5] = "FILE_POPOVER", e))($$g4 || {});
export function $$f0(e) {
  let t = wA();
  let n = iZ();
  let {
    existingReactionIdForCurrentUser
  } = y(e.feedReactions, n);
  let s = useCallback(({
    emoji: n,
    addOnly: a
  }) => {
    let r = existingReactionIdForCurrentUser(n);
    r ? a || t(Oy({
      feedPostUuid: e.postUuid,
      emoji: n,
      reactionId: r
    })) : t(EF({
      feedPostUuid: e.postUuid,
      feedPostId: e.postId,
      emoji: n
    }));
  }, [t, existingReactionIdForCurrentUser, e.postUuid, e.postId]);
  return jsx(b, {
    type: e.type,
    source: e.source,
    hideAddReactionButton: e.hideAddReactionButton,
    prependToList: e.prependToList,
    toggleReaction: s,
    feedResource: {
      type: "post",
      id: e.postUuid
    },
    feedReactions: e.feedReactions
  });
}
export function $$h3(e) {
  let t = wA();
  let n = iZ();
  let {
    existingReactionIdForCurrentUser
  } = y(e.feedReactions, n);
  let s = useCallback(({
    emoji: n,
    addOnly: a
  }) => {
    let r = existingReactionIdForCurrentUser(n);
    r ? a || t(t9({
      commentUuid: e.commentUuid,
      emoji: n,
      reactionId: r
    })) : t(FJ({
      commentUuid: e.commentUuid,
      commentId: e.commentId,
      emoji: n
    }));
  }, [t, existingReactionIdForCurrentUser, e.commentUuid, e.commentId]);
  return jsx(b, {
    type: e.type,
    source: e.source,
    hideAddReactionButton: e.hideAddReactionButton,
    prependToList: e.prependToList,
    toggleReaction: s,
    feedResource: {
      type: "comment",
      id: e.commentUuid
    },
    feedReactions: e.feedReactions
  });
}
function b(e) {
  let t = iZ();
  let {
    toggleReaction
  } = e;
  let {
    reactionsWithSelected
  } = y(e.feedReactions, t);
  let o = useCallback((e, t) => {
    t.stopPropagation();
    toggleReaction({
      emoji: e.emoji,
      addOnly: !1
    });
  }, [toggleReaction]);
  let s = useCallback(e => {
    toggleReaction({
      emoji: e,
      addOnly: !0
    });
  }, [toggleReaction]);
  let l = jsx(x, {
    type: e.type,
    feedResource: e.feedResource,
    source: e.source,
    onAddReaction: s,
    hideAddReactionButton: e.hideAddReactionButton
  });
  return 1 === e.type ? l : jsx("div", {
    className: KD,
    children: jsx(Kb, {
      reactions: reactionsWithSelected,
      collapseOverflow: !1,
      onClickExisting: o,
      prependToList: e.prependToList,
      children: l
    })
  });
}
function x(e) {
  let t = useRef(null);
  let {
    isReactionPickerVisible,
    toggleReactionPicker,
    emojiPicker
  } = T(e.feedResource, e.source, t, e.onAddReaction);
  return e.hideAddReactionButton && !isReactionPickerVisible ? jsx("div", {
    className: $S
  }) : jsxs(Fragment, {
    children: [jsx("div", {
      ref: t,
      className: s()(1 === e.type ? D5 : HL),
      children: jsx(ny, {
        onClick: toggleReactionPicker,
        selected: isReactionPickerVisible,
        styleClassName: $S,
        selectedStyleClassName: Qi
      })
    }), isReactionPickerVisible && emojiPicker]
  });
}
let y = (e, t) => {
  let n = useMemo(() => {
    let n = {};
    if (!t) return n;
    for (let a of e) a.user.id === t.id && (n[a.emoji] = a.id);
    return n;
  }, [e, t]);
  let a = useCallback(e => n[e], [n]);
  return {
    reactionsWithSelected: useMemo(() => {
      let t = {};
      for (let n of e) {
        let {
          emoji,
          user,
          createdAt
        } = n;
        t[emoji] || (t[emoji] = {
          emoji,
          users: [],
          selected: !!a(emoji),
          createdAt: createdAt.getTime(),
          skinTonesToUsers: {}
        });
        t[emoji].createdAt = Math.min(t[emoji].createdAt, createdAt.getTime());
        t[emoji].users.push({
          handle: user.handle,
          id: user.id,
          img_url: user.imgUrl
        });
      }
      return Object.values(t).sort((e, t) => e.createdAt - t.createdAt || e.emoji.localeCompare(t.emoji));
    }, [e, a]),
    existingReactionIdForCurrentUser: a
  };
};
let v = (e, t) => `FEED_TILE_EMOJI_PICKER-${e}${t ? `-${t}` : null}`;
export function $$w2(e, t) {
  return BK(v(t, e?.id)).showing;
}
let T = (e, t, n, i) => {
  let o = BK(v(t, e?.id));
  let s = useCallback(e => {
    i(e.shortcodes);
    o.hide();
  }, [o, i]);
  let l = n.current && jsx(_$$_, {
    onInsert: s,
    onCancel: o.hide,
    targetRect: n.current.getBoundingClientRect()
  });
  return {
    isReactionPickerVisible: o.showing,
    toggleReactionPicker: o.toggle,
    emojiPicker: l
  };
};
export const Q$ = $$f0;
export const Us = $$p1;
export const mz = $$w2;
export const nn = $$h3;
export const zY = $$g4;