import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { M } from "../figma_app/749682";
import { NONE_SYMBOL } from "../905/992467";
import { OptionComponent } from "../figma_app/236327";
import { renderI18nText } from "../905/303541";
import { AvatarSize } from "../905/590952";
import { setEditingAttachment, resetComments, setEditingComment, stopEditingComment } from "../figma_app/770088";
import { showModalHandler } from "../905/156213";
import { editFeedCommentThunk, PENDING_FEED_COMMENT_ID, deleteFeedCommentThunk } from "../905/504768";
import { a as _$$a } from "../905/844092";
import { HH } from "../figma_app/841415";
import { E } from "../905/565019";
import { V } from "../7037/903447";
import { A, B } from "../7037/575850";
import { nn, Us, zY } from "../1250/486464";
import { o as _$$o } from "../7037/529503";
let b = e => `COMMENT_SIDEBAR_OVERFLOW_DROPDOWN-${e}`;
export function $$T0(e) {
  let t = useDispatch<AppDispatch>();
  let [n, r] = M();
  let [l, m] = useState([]);
  useEffect(() => {
    m(e.messageMeta);
  }, [e.messageMeta]);
  let [h, g] = useState(!1);
  let b = useSelector(e => e.comments.editingComment);
  let T = useCallback(n => {
    t(setEditingAttachment({
      id: e.commentId,
      key: e.commentUuid,
      attachmentId: n.id,
      attachment: n
    }));
  }, [t, e.commentId, e.commentUuid]);
  let w = useCallback(n => (t(setEditingAttachment({
    id: e.commentId,
    key: e.commentUuid,
    attachmentId: n,
    attachment: null
  })), Promise.resolve()), [e.commentId, e.commentUuid, t]);
  let P = useCallback(() => {
    t(editFeedCommentThunk({
      commentId: e.commentId,
      uuid: e.commentUuid,
      messageMeta: l,
      attachmentUpdates: b?.attachmentUpdates
    }));
    t(resetComments());
    g(!1);
  }, [t, b, e.commentId, e.commentUuid, l]);
  let j = useCallback(() => {
    let n = {};
    e.attachments?.forEach(e => {
      n[e.id] = e;
    });
    t(setEditingComment({
      id: e.commentId,
      key: e.commentUuid,
      messageMeta: e.messageMeta,
      attachmentUpdates: {
        deleted: [],
        attachments: n
      }
    }));
    g(!0);
  }, [t, e.commentId, e.commentUuid, e.messageMeta, e.attachments]);
  let O = useCallback(() => {
    m(e.messageMeta);
    t(stopEditingComment());
    g(!1);
  }, [t, e.messageMeta]);
  let y = e.commentUser.id === e.user.id;
  let E = e.commentId.startsWith(PENDING_FEED_COMMENT_ID);
  let U = e.reactions.length > 0;
  return jsxs("div", {
    className: "feed_post_details_comments--comment--ScdJc",
    ref: n,
    children: [jsx("div", {
      className: "feed_post_details_comments--avatarColumn--13o7f",
      children: jsx(A, {
        user: e.commentUser,
        noHandle: !0,
        size: AvatarSize.MEDIUM
      })
    }), jsxs("div", {
      className: "feed_post_details_comments--commentBody--tIA5q",
      children: [jsxs("div", {
        className: "feed_post_details_comments--commentHeader--vzA-X",
        children: [jsx(B, {
          user: e.commentUser,
          date: e.createdAt,
          noAvatar: !0,
          shortDate: !0
        }), !h && y && jsx(I, {
          commentId: e.commentId,
          commentUuid: e.commentUuid,
          user: e.user,
          onEdit: j,
          hideTarget: !r
        })]
      }), h ? jsx("div", {
        className: "feed_post_details_comments--editComposerContainer--ePn76",
        children: jsx(_$$o, {
          attachments: b?.attachmentUpdates?.attachments ? Object.values(b?.attachmentUpdates?.attachments) : [],
          autofocus: !0,
          composerContainerClass: "feed_post_details_comments--composer--5EDPO thread_comment_composer--inputSectionWrapper--Bxyab",
          currentOrgId: e.currentOrgId,
          deleteAttachment: w,
          editableTypeaheadClass: "feed_post_details_comments--editableTypeahead--kMhTQ thread_comment_composer--editableTypeahead--9R6Yd text--fontPos13--xW8hS text--_fontBase--QdLsd",
          editingExistingComment: !0,
          errorFallback: NONE_SYMBOL.NONE,
          fallback: NONE_SYMBOL.NONE,
          hideSubmitButton: !1,
          mentionables: e.mentionables,
          messageContent: l,
          onCancel: O,
          onSubmit: P,
          updateAttachment: T,
          updateMessage: m,
          user: e.user
        })
      }) : jsxs(Fragment, {
        children: [jsxs("div", {
          className: "feed_post_details_comments--commentRow--c2So7",
          children: [jsx(HH, {
            messageMeta: l,
            commentId: e.commentId,
            className: "feed_post_details_comments--commentMessage--lHCM2"
          }), !E && !U && jsx(nn, {
            type: Us.ADD_ONLY,
            source: zY.DETAIL_COMMENT_NO_REACTION,
            feedReactions: e.reactions,
            commentId: e.commentId,
            commentUuid: e.commentUuid,
            hideAddReactionButton: !r
          })]
        }), e.attachments && jsx("div", {
          className: "feed_post_details_comments--attachmentsContainer--M-F-r",
          children: jsx(_$$a, {
            attachments: e.attachments,
            canEdit: y,
            fileKey: ""
          })
        }), U && jsx(nn, {
          type: Us.FULL,
          source: zY.DETAIL_COMMENT_WITH_REACTION,
          feedReactions: e.reactions,
          commentId: e.commentId,
          commentUuid: e.commentUuid,
          hideAddReactionButton: !r
        })]
      })]
    })]
  });
}
function I(e) {
  let t = useDispatch<AppDispatch>();
  let n = useCallback(() => {
    t(showModalHandler({
      type: E,
      data: {
        onConfirm: () => {
          t(deleteFeedCommentThunk({
            commentId: e.commentId,
            uuid: e.commentUuid
          }));
        }
      },
      showModalsBeneath: !0
    }));
  }, [t, e.commentId, e.commentUuid]);
  let {
    onEdit
  } = e;
  let d = useMemo(() => [jsx(OptionComponent, {
    onClick: onEdit,
    children: renderI18nText("comments.edit")
  }, "edit"), jsx(OptionComponent, {
    onClick: n,
    children: renderI18nText("comments.delete_comment")
  }, "delete")], [n, onEdit]);
  return e.commentId.startsWith(PENDING_FEED_COMMENT_ID) ? null : jsx(V, {
    hideTarget: e.hideTarget,
    dropdownId: b(e.commentId),
    options: d,
    lean: "left"
  });
}
export const i = $$T0;