import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { forwardRef, useMemo, useEffect, useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import r, { convertToRgba } from "../905/222694";
import { noop } from 'lodash-es';
import { C as _$$C2 } from "../905/520159";
import { A as _$$A } from "../905/251970";
import { J } from "../905/125993";
import { V as _$$V } from "../1577/311426";
import { trackEventAnalytics } from "../905/449184";
import { ImageLoadManager } from "../905/907815";
import { useSubscription } from "../figma_app/288654";
import p, { generateUUIDv4 } from "../905/871474";
import { WAFImage } from "../905/675859";
import { LoadingOverlay } from "../figma_app/858013";
import { RecordingScrollContainer } from "../905/347284";
import { J as _$$J } from "../1577/181415";
import { getI18nString } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { markThreadAsRead, setActiveComment, createCommentReply, setCommentReplyMessage, updateCommentContent, handleCommentReplyWithConfirmation } from "../figma_app/770088";
import { kR, I_, GH } from "../905/234821";
import { dr } from "../figma_app/568591";
import { serializeComment, DEFAULT_COMMENT_READ_STATUS } from "../figma_app/12220";
import { selectCurrentUser } from "../905/372672";
import { QuickReply_CommentThreadByRootComment } from "../figma_app/43951";
import { createMentionLibrary } from "../905/772425";
import { ThreadType, ComposerType } from "../905/380385";
import { rf } from "../figma_app/585209";
import { _B } from "../905/852370";
import { I as _$$I } from "../905/707866";
import { K as _$$K } from "../905/663612";
import { ri } from "../905/337179";
import { y as _$$y } from "../figma_app/294349";
import { MJ } from "../905/649567";
let B = "quick_reply_thread_view--fileName--S2twU";
let S = "quick_reply_thread_view--headerButton--wmkPJ";
let O = new class {
  get file() {
    throw Error("Data should not be accessed directly from quick replies, we need to create standard API for comments to use this view. see: file_comments_api.tsx");
  }
  get fileFollower() {
    throw Error("Data should not be accessed directly from quick replies, we need to create standard API for comments to use this view. see: file_comments_api.tsx");
  }
  get comments() {
    throw Error("Data should not be accessed directly from quick replies, we need to create standard API for comments to use this view. see: file_comments_api.tsx");
  }
}();
let q = null;
let $$U0 = forwardRef((e, t) => {
  let i = useSubscription(QuickReply_CommentThreadByRootComment, {
    fileKey: e.quickReplyInfo.fileKey,
    rootId: e.quickReplyInfo.threadId
  });
  return jsx("div", {
    className: "quick_reply_thread_view--container--WPlnN",
    ref: t,
    children: jsxs("div", {
      className: "quick_reply_thread_view--column--UrAD4",
      children: [jsxs("div", {
        className: "quick_reply_thread_view--header--BHlje",
        children: [jsx("div", {
          className: S,
          children: !e.fileBrowser && jsx(_$$J, {
            "aria-label": getI18nString("quick_reply.navigate_back"),
            onClick: e.onClose,
            children: jsx(_$$C2, {})
          })
        }), e.fileBrowser ? jsx("div", {
          className: B,
          children: "loaded" === i.status && i.data.file && i.data.file.name
        }) : jsx("h2", {
          className: B,
          children: "loaded" === i.status && i.data.file && i.data.file.name
        }), jsx("div", {
          className: S,
          children: e.fileBrowser ? jsx(_$$J, {
            "aria-label": getI18nString("quick_reply.close"),
            onClick: e.onClose,
            children: jsx(_$$A, {})
          }) : jsx("div", {
            style: {
              display: "none"
            },
            children: jsx(_$$J, {
              "aria-label": getI18nString("quick_reply.more"),
              children: jsx(J, {})
            })
          })
        })]
      }), jsx(H, {
        quickReplyInfo: e.quickReplyInfo,
        result: i,
        hideOverflowMenu: e.fileBrowser
      })]
    })
  });
});
function H(e) {
  let t = selectCurrentUser();
  return t ? "loading" === e.result.status || "disabled" === e.result.status ? jsx(LoadingOverlay, {
    size: "medium"
  }) : "errors" === e.result.status || null == e.result.data.file ? jsx("div", {
    className: "quick_reply_thread_view--errorState--Re4UD",
    children: getI18nString("quick_reply.unable_to_load_thread")
  }) : jsx(z, {
    quickReplyInfo: e.quickReplyInfo,
    result: e.result,
    user: t,
    hideOverflowMenu: e.hideOverflowMenu
  }) : null;
}
function z(e) {
  let {
    quickReplyInfo,
    result,
    user
  } = e;
  let {
    fileKey,
    threadId
  } = t;
  let d = dr({
    args: {
      fileKey,
      rootId: threadId
    },
    subscription: result
  });
  let f = useDispatch();
  let {
    file
  } = result.data;
  let b = useMemo(() => createMentionLibrary({
    currentOrgId: file.parentOrgId,
    teamId: file.teamId,
    fileKey,
    users: []
  }), [file.parentOrgId, file.teamId, fileKey]);
  let {
    mobileCommentThread
  } = p;
  let {
    currentUserCommentReadStatus
  } = p;
  let N = mobileCommentThread.find(e => e.id === threadId);
  let A = useMemo(() => mobileCommentThread.reduce((e, t) => t.createdAt.getTime() > e.createdAt.getTime() ? t : e).thumbnailUrl, [mobileCommentThread]);
  let I = useSelector(e => e.comments.savingCommentUuids);
  let R = useSelector(e => e.comments.lgPendingUuidToServerIdMap);
  if (!N) return jsx("div", {
    children: getI18nString("quick_reply.unable_to_load_thread")
  });
  let E = mobileCommentThread.map(e => serializeComment(user.id, N, e, currentUserCommentReadStatus ?? DEFAULT_COMMENT_READ_STATUS, I, R, e.attachments));
  let D = {
    id: N.id,
    key: fileKey,
    anchored: !1,
    canvasPosition: null,
    selectionAnchorCanvasPosition: null,
    comments: E,
    messageMeta: E[0].message_meta,
    page: N.clientMeta?.pageId || null,
    isActive: !0,
    replyCount: mobileCommentThread.length - 1,
    isCanvasMention: !1,
    pageName: N.clientMeta?.pageId || null,
    sidebarItemType: ThreadType.COMMENT_THREAD
  };
  let F = {
    api: d,
    status: result.status,
    data: O,
    threads: {
      status: result.status,
      data: [D],
      errors: result.errors
    },
    errors: result.errors,
    isResolvedLoaded: !0,
    isUnresolvedLoaded: !0
  };
  return jsx(kR, {
    value: F,
    children: jsxs("div", {
      className: "quick_reply_thread_view--mouseContainer--qyIpH",
      onMouseEnter: () => {
        let e = E.some(e => e.isUnread);
        q = setTimeout(() => {
          d.commentReceipts && e && (f(markThreadAsRead({
            receiptsAPI: d.commentReceipts,
            thread: D
          })), trackEventAnalytics("Comment Thread Read", {
            commentThreadId: threadId,
            threadType: "file_browser_quick_reply"
          }));
        }, 1e3);
      },
      onMouseLeave: () => {
        q && clearTimeout(q);
      },
      children: [jsxs("div", {
        className: "quick_reply_thread_view--preview--I47Ds",
        children: [jsx(ImageLoadManager, {
          children: jsx(WAFImage, {
            src: A || void 0,
            className: "quick_reply_thread_view--previewImage--gSK-n",
            style: {
              backgroundColor: convertToRgba(file.checkpointClientMeta)
            },
            alt: "thumbnail"
          })
        }), jsx("div", {
          className: "quick_reply_thread_view--openFileButton--RBtVz",
          children: jsx(_$$J, {
            "aria-label": getI18nString("quick_reply.open_file"),
            onClick: () => {
              let e = quickReplyInfo.deeplink ?? `/file/${fileKey}?fuid=${user.id}&#${threadId}`;
              window.location.href = e;
            },
            children: jsx(_$$V, {})
          })
        })]
      }), jsx(V, {
        loadedComments: E,
        user,
        quickReplyInfo,
        commentMentionables: b,
        hideOverflowMenu: e.hideOverflowMenu
      })]
    })
  });
}
function V(e) {
  let {
    loadedComments,
    user,
    quickReplyInfo,
    commentMentionables,
    hideOverflowMenu
  } = e;
  let {
    fileKey,
    threadId
  } = r;
  let _ = useDispatch();
  useEffect(() => {
    _(setActiveComment({
      threadId
    }));
  }, [_, threadId]);
  let m = useSelector(e => e.comments.typeahead);
  let f = useSelector(e => e.comments.editingComment);
  let h = useSelector(e => e.comments.activeThread?.id);
  let b = useSelector(e => e.comments.threads);
  let k = h && b[h] || null;
  let y = k?.reply.messageMeta || [];
  let {
    submitReply,
    updateMessage,
    submitEdit
  } = function (e) {
    let t = useDispatch();
    let i = I_().writeAPI;
    let a = GH()?.threads;
    return {
      submitReply: useCallback(e => {
        if (!i) {
          console.error("Calling submitReply with no write API");
          return;
        }
        a && "loaded" === a.status && a.data.find(t => t.id === e.threadId) && (e.onCommentValidationFailure = (a, n, o, r) => handleCommentReplyWithConfirmation(i, t, a, n, o, r, e.uuid, _$$y), t(createCommentReply({
          ...e,
          commentsWriteApi: i,
          commentsConfiguration: _$$y,
          trackingContext: {
            feature: "web_quick_reply_screen"
          }
        })));
      }, [t, a, i]),
      updateMessage: useCallback(i => {
        t(setCommentReplyMessage({
          threadId: e,
          messageMeta: i
        }));
      }, [t, e]),
      submitEdit: useCallback((e, i) => {
        t(updateCommentContent({
          comment: e,
          messageMeta: i
        }));
      }, [t])
    };
  }(threadId);
  let T = _B();
  let B = useRef(null);
  let S = useRef(null);
  let O = useRef(null);
  let [q, U] = useState(null);
  let [H, z] = useState(useRef(null));
  let V = useRef(null);
  let Q = 0;
  let $ = 0;
  let Y = 0;
  V.current && V.current.offsetParent && (Q = V.current.offsetWidth, $ = V.current.offsetLeft, Y = V.current.offsetParent.clientHeight - V.current.offsetTop);
  let J = e => e || {
    x: 0,
    y: 0
  };
  let K = useRef(null);
  useEffect(() => {
    K.current && K.current.scrollToBottom();
  }, []);
  let X = [...new Set(loadedComments.map(e => e.user.handle))];
  let W = loadedComments.find(e => e.id === threadId);
  return W ? jsxs(Fragment, {
    children: [jsx("div", {
      style: styleBuilderInstance.flex1.$
    }), jsx(RecordingScrollContainer, {
      className: "quick_reply_thread_view--bottomAnchoredScrollContainer--5-F87",
      useBottomPinning: !0,
      ref: K,
      enableScrollShadow: !0,
      children: jsx("div", {
        className: "quick_reply_thread_view--reverseColumn--ur8Yx",
        children: loadedComments.slice().reverse().map((e, n) => jsx(_$$I, {
          allowAttachments: !1,
          comment: e,
          dispatch: _,
          editingComment: f,
          editorOnClear: T.editorOnClear,
          editorOnInsert: T.editorOnInsert,
          editorRef: O,
          editorType: "comment-editor-thread",
          hideEmojiPicker: !1,
          hideReactions: !1,
          hideResolve: !1,
          hyperlinkLocation: q,
          index: n,
          isQuickReplyThreadView: !0,
          mentionables: commentMentionables,
          mountInputFocused: !0,
          overflowMenuActions: hideOverflowMenu ? [] : void 0,
          prevAuthor: 0 === n ? null : loadedComments[n - 1].user_id,
          setHyperlinkEditorRef: z,
          setHyperlinkLocation: U,
          setIsEditorFocused: noop,
          setResolved: noop,
          showEditedIndicator: !!e.edited_at,
          submitEdit,
          thread: {
            comments: loadedComments,
            key: fileKey,
            id: threadId
          },
          threadPosition: {
            x: 0,
            y: 0
          },
          typeahead: m,
          user,
          viewportPositionFromClientPosition: J
        }, `thread-comment-${e.id}`))
      })
    }), jsx(_$$K, {
      allowAttachments: !1,
      authorNames: X,
      className: MJ,
      dispatch: _,
      editingExistingComment: !1,
      editorOnClear: T.editorOnInsert,
      editorOnInsert: T.editorOnClear,
      editorRef: S,
      editorType: "comment-editor-reply",
      fileKey,
      hideEmojiPicker: !1,
      hyperlinkLocation: q,
      isDisabled: !1,
      isEmojiPickerDisabled: null !== f,
      mentionables: commentMentionables,
      messageMeta: y,
      mountInputFocused: !0,
      onCancel: noop,
      onComposeFocus: void 0,
      onSubmit: () => {
        submitReply({
          threadId,
          threadUuid: W.uuid || void 0,
          uuid: generateUUIDv4()
        });
      },
      placeholderText: getI18nString("comments.reply"),
      recordingKey: ComposerType.quickReply,
      replyContainerRef: V,
      setHyperlinkEditorRef: z,
      setHyperlinkLocation: U,
      setIsEditorFocused: noop,
      submitText: getI18nString("comments.reply"),
      threadId,
      threadPosition: null,
      typeahead: m,
      updateMessage,
      user,
      viewportPositionFromClientPosition: J
    }), jsx(rf, {
      decoratorsRef: B,
      onClear: T.onClear,
      onInsert: T.onInsert,
      width: Q,
      direction: ri.UPWARDS,
      positionFromBottom: {
        left: $,
        bottom: Y
      }
    })]
  }) : null;
}
export const d = $$U0;