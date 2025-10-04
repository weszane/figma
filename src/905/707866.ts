import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useCallback, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "../905/438674";
import { LinkPrimitive } from "../figma_app/496441";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { globalPerfTimer } from "../905/542194";
import { useLatestRef } from "../figma_app/922077";
import { RelativeTimeDisplay } from "../905/986103";
import { dayjs } from "../905/920142";
import { getI18nState } from "../figma_app/363242";
import { KindEnum } from "../905/129884";
import { renderI18nText, getI18nString } from "../905/303541";
import { Df, uy, pD, z$, RI } from "../figma_app/770088";
import { postUserFlag } from "../905/985254";
import { AK, I_, Tv } from "../905/234821";
import { ComposerType } from "../905/380385";
import { Ro } from "../figma_app/805373";
import { a as _$$a } from "../905/844092";
import { HH } from "../figma_app/841415";
import { Kb, ny } from "../905/552753";
import { K } from "../905/663612";
import { V } from "../905/890500";
import { ignoreCommandOrShift } from "../905/63728";
import { selectViewAction } from "../905/929976";
import { selectedViewToPath } from "../figma_app/193867";
import { SD, Du, In, Lo, xH, k8, zl, WO, YD, g2, lo, GI, Qq, ex, WJ, $S } from "../905/649567";
function f(e) {
  let t = function (e, t = getI18nState().getPrimaryLocale(!1)) {
    return new Intl.DateTimeFormat(t, {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric"
    }).format(dayjs.utc(e).toDate());
  }(e.date, e.locale);
  return jsx("span", {
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": t,
    children: e.children
  });
}
let P = e => e.stopPropagation();
let O = jsx("div", {
  className: SD,
  "data-testid": "thread-comment-loading-avatar"
});
function D(e) {
  let t = !e.hideReactions;
  let i = e.comment;
  let a = AK(i.id) > 0;
  let u = !!i.isPendingFromSinatra;
  let m = !!i.isSaving;
  let h = getFeatureFlags().comments_faster_saving_ux ? m : u;
  useEffect(() => {
    let {
      uuid
    } = i;
    if (uuid && !h) {
      let t = globalPerfTimer.get(`comment_reply_creation_${uuid}`);
      if (t && t.isRunning && !t.isUnreliable) {
        let t = globalPerfTimer.tryStop(`comment_reply_creation_${uuid}`);
        t && trackEventAnalytics("comment_reply_creation", {
          elapsedMs: t
        }, {
          forwardToDatadog: !0
        });
      }
    }
  }, [i, h]);
  let g = jsx(Ro, {
    entity: i.user,
    size: 24,
    className: Du
  });
  return jsxs("div", {
    className: `${e.isQuickReplyThreadView ? In : Lo}`,
    children: [jsxs("div", {
      className: `${e.isQuickReplyThreadView ? xH : k8}`,
      children: [jsxs("div", {
        className: zl,
        children: [h ? O : e.communityAuthorLink ? jsx(Link, {
          href: e.communityAuthorLink.href,
          onClick: e.communityAuthorLink.onClick,
          children: g
        }) : g, e.communityAuthorLink ? jsx(LinkPrimitive, {
          href: e.communityAuthorLink.href,
          onClick: e.communityAuthorLink.onClick,
          style: {
            cursor: "pointer"
          },
          className: WO,
          children: jsx("h3", {
            dir: "auto",
            children: i.user.handle
          })
        }) : jsx("h3", {
          className: WO,
          dir: "auto",
          children: i.user.handle
        }), h ? jsx("div", {
          className: YD,
          children: renderI18nText("comments.in_a_moment")
        }) : jsx("div", {
          className: YD,
          children: jsx(f, {
            date: i.created_at,
            children: jsx(RelativeTimeDisplay, {
              capitalize: !0,
              date: i.created_at
            })
          })
        }), e.metaAddon]
      }), jsx("div", {
        className: g2,
        children: !e.hideOverflowMenu && i.user_id === e.user?.id && !u && jsx(V, {
          label: getI18nString("comments.comment_actions"),
          comment: i,
          recordingKey: "threadComment.commentActionsButton",
          possibleActions: e.overflowMenuActions,
          onDelete: e.onDelete
        })
      })]
    }), jsxs("div", {
      tabIndex: -1,
      ref: e.threadCommentRef,
      onMouseDown: P,
      className: `${e.isQuickReplyThreadView ? lo : GI}`,
      "data-testid": "thread-comment-message",
      children: [jsx(HH, {
        commentId: i.id,
        messageMeta: i.message_meta,
        className: Qq,
        showEditedIndicator: e.showEditedIndicator
      }), t && !a && e.user && jsx(M, {
        comment: e.comment,
        currentUser: e.user,
        isPendingComment: u,
        threadCommentRef: e.threadCommentRef
      }), !t && jsx("div", {
        className: ex
      })]
    }), i.attachments && jsx(_$$a, {
      attachments: i.attachments,
      fileKey: e.comment.key,
      canEdit: e.comment.user_id === e.user?.id
    }), t && a && e.user && jsx("div", {
      className: WJ,
      children: jsx(F, {
        comment: e.comment,
        currentUser: e.user,
        isPendingComment: u,
        isQuickReplyThreadView: e.isQuickReplyThreadView,
        threadCommentRef: e.threadCommentRef
      })
    })]
  });
}
export function $$L0(e) {
  let {
    dispatch,
    comment,
    prevAuthor
  } = e;
  let o = useRef(null);
  !function (e, t) {
    let i = useSelector(e => e.comments.editingComment);
    let n = useLatestRef(i);
    useEffect(() => {
      i || n?.id !== t.id || e.current?.focus();
    }, [i, n, t.id, e]);
  }(o, comment);
  useEffect(() => () => {
    getFeatureFlags().show_at_mention_invited_users && dispatch(postUserFlag({
      has_closed_comment: !0
    }));
  }, [dispatch]);
  let d = useCallback(e => {
    dispatch(Df({
      id: comment.id,
      key: comment.key,
      messageMeta: e
    }));
  }, [dispatch, comment]);
  let c = useCallback(e => {
    dispatch(uy({
      id: comment.id,
      key: comment.key,
      attachmentId: e.id,
      attachment: e
    }));
  }, [dispatch, comment]);
  let p = useCallback(e => {
    dispatch(uy({
      id: comment.id,
      key: comment.key,
      attachmentId: e,
      attachment: null
    }));
  }, [comment.id, comment.key, dispatch]);
  let m = useCallback(() => {
    dispatch(pD());
  }, [dispatch]);
  let h = function (e) {
    let t = useDispatch();
    let i = useMemo(() => e ? {
      view: "communityHub",
      subView: "handle",
      handle: e
    } : void 0, [e]);
    let n = useSelector(e => i ? selectedViewToPath(e, i) : void 0);
    let s = useMemo(() => i ? ignoreCommandOrShift(e => {
      e.preventDefault();
      t(selectViewAction(i));
    }) : void 0, [i, t]);
    if (i && n && s) return {
      href: n,
      onClick: s
    };
  }(comment.profile_handle);
  let g = prevAuthor !== comment.user_id;
  if (!e.editingComment || e.editingComment.id !== comment.id || e.commentCreationDisabled) return jsx(D, {
    comment: e.comment,
    communityAuthorLink: h,
    hideReactions: e.hideReactions,
    isQuickReplyThreadView: e.isQuickReplyThreadView,
    metaAddon: e.metaAddon,
    onDelete: e.onDelete,
    overflowMenuActions: e.overflowMenuActions,
    showEditedIndicator: e.showEditedIndicator,
    threadCommentRef: o,
    user: e.user
  });
  {
    let {
      messageMeta,
      attachmentUpdates
    } = e.editingComment;
    let a = Object.values(attachmentUpdates?.attachments ?? {});
    let s = [...new Set(e.thread.comments.map(e => e.user.handle))];
    return jsx(K, {
      allowAttachments: !0,
      attachments: a,
      authorChanged: g,
      authorNames: s,
      createdAt: comment.created_at,
      deleteAttachment: p,
      dispatch: e.dispatch,
      editingExistingComment: !0,
      editorOnClear: e.editorOnClear,
      editorOnInsert: e.editorOnInsert,
      editorRef: e.editorRef,
      editorType: e.editorType,
      fileKey: e.thread.key,
      hideEmojiPicker: e.hideEmojiPicker,
      hyperlinkLocation: e.hyperlinkLocation,
      isDisabled: !1,
      mentionables: e.mentionables,
      messageMeta,
      mountInputFocused: e.mountInputFocused,
      onCancel: m,
      onSubmit: () => e.submitEdit(comment, messageMeta, attachmentUpdates),
      placeholderText: getI18nString("comments.comment_n"),
      recordingKey: ComposerType.edit,
      setHyperlinkEditorRef: e.setHyperlinkEditorRef,
      setHyperlinkLocation: e.setHyperlinkLocation,
      setIsEditorFocused: e.setIsEditorFocused,
      submitText: getI18nString("comments.save"),
      threadId: e.thread.id,
      threadPosition: e.threadPosition,
      typeahead: e.typeahead,
      updateAttachment: c,
      updateMessage: d,
      user: comment.user,
      viewportPositionFromClientPosition: e.viewportPositionFromClientPosition
    });
  }
}
function F(e) {
  let t = useDispatch();
  let [i, s] = useState(!1);
  let {
    reactionsApi
  } = I_();
  let l = Tv(e.comment.id, e.currentUser.id);
  let d = reactionsApi ? (i, n) => {
    n.stopPropagation();
    t(z$({
      reactionsApi,
      id: e.comment.id,
      emoji: i.emoji,
      quickReply: !!e.isQuickReplyThreadView
    }));
    e.threadCommentRef.current?.focus();
  } : void 0;
  return "loaded" !== l.status ? null : jsx(Kb, {
    reactions: l.data.typed,
    collapseOverflow: !0,
    onClickExisting: d,
    addedReaction: i,
    children: jsx(M, {
      comment: e.comment,
      currentUser: e.currentUser,
      isPendingComment: e.isPendingComment,
      onAddedReaction: () => {
        s(!0);
      },
      isQuickReplyThreadView: e.isQuickReplyThreadView,
      threadCommentRef: e.threadCommentRef
    })
  });
}
function M(e) {
  let t = useDispatch();
  let {
    reactionsApi
  } = I_();
  let s = useSelector(e => e.comments.emojiPicker);
  let o = useMemo(() => !!s?.visible && s.commentsId === e.comment.id, [e.comment.id, s]);
  if (e.isPendingComment || !reactionsApi) return null;
  let l = n => {
    d();
    e.onAddedReaction && e.onAddedReaction();
    t(z$({
      reactionsApi,
      id: e.comment.id,
      emoji: n.shortcodes,
      quickReply: !!e.isQuickReplyThreadView
    }));
    e.threadCommentRef.current?.focus();
  };
  let d = () => {
    t(RI({
      visible: !1
    }));
    e.threadCommentRef.current?.focus();
  };
  return jsx("div", {
    style: o ? {
      opacity: 1
    } : {},
    className: $S,
    children: jsx(ny, {
      onClick: i => {
        i.stopPropagation();
        let n = i.currentTarget.getBoundingClientRect();
        t(RI({
          visible: !0,
          targetRect: n,
          commentsId: e.comment.id,
          onPick: l,
          onCancel: d
        }));
      },
      selected: o,
      "data-fullscreen-intercept": !0
    })
  });
}
export const I = $$L0;