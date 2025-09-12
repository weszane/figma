import { createOptimistCommitAction, createOptimistRevertAction } from "../905/676456";
import { createActionCreator } from "../905/73481";
import { XHR } from "../905/910117";
import { getI18nString } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { VisualBellActions } from "../905/302958";
import { createOptimistThunk, createOptimistAction } from "../905/350402";
import { hm } from "../905/380385";
let $$u10 = createActionCreator("GENERIC_COMMENT_COMMIT_CREATED_COMMENT");
let $$p8 = createActionCreator("GENERIC_COMMENT_COMMIT_EDITED_COMMENT");
let $$_5 = createActionCreator("GENERIC_COMMENT_COMMIT_DELETED_COMMENT");
let $$h1 = createActionCreator("GENERIC_COMMENT_COMMIT_HIDE_COMMENT");
let $$m0 = createOptimistThunk(async (e, t) => {
  let {
    authorId,
    removeCommentsCallback
  } = t;
  let i = e.getState().communityHub.comments;
  let {
    activeFeedType,
    commentsById,
    id,
    type
  } = i;
  if (!id || !type || !i.feeds[activeFeedType]?.feed) return;
  let d = [];
  for (let e in commentsById) commentsById[e]?.author.id === authorId && d.push(commentsById[e]);
  await removeCommentsCallback(d);
  e.dispatch($$_5({
    resourceType: type,
    resourceId: id,
    comments: d
  }));
});
let $$g9 = createActionCreator("GENERIC_COMMENT_SET_SHOW_RESOLVED");
createActionCreator("GENERIC_COMMENT_SAVE_PAGE_SCROLL_POSITION");
let $$f3 = createActionCreator("GENERIC_COMMENT_RESET_COMMENT_STATUS");
let $$E11 = createActionCreator("GENERIC_COMMENT_SUBMIT");
let $$y7 = createOptimistThunk(async (e, t) => {
  let {
    messageMeta,
    resourceId,
    resourceType,
    onSuccess,
    onError,
    clientMeta,
    pageId,
    parentId,
    isReply
  } = t;
  await XHR.post("/api/community_comments", {
    message_meta: messageMeta,
    resource_id: resourceId,
    resource_type: resourceType,
    client_meta: clientMeta,
    page_id: pageId,
    parent_id: parentId
  }).then(({
    data: t
  }) => {
    e.dispatch($$u10({
      comment: t.meta,
      resourceId,
      resourceType,
      isReply
    }));
    onSuccess && onSuccess(t.meta);
  }).catch(t => {
    let r = resolveMessage(t);
    r && (e.dispatch(VisualBellActions.enqueue({
      error: !0,
      message: getI18nString("community.comments.failed_to_create_comment", {
        errorMessage: r
      })
    })), parentId ? e.dispatch($$f3({
      commentId: parentId
    })) : e.dispatch($$f3({
      commentId: hm
    })), onError && onError());
  });
  e.dispatch($$E11(t));
}, ({
  resourceId: e
}) => `GENERIC_COMMENT_SUBMIT_${e}`);
let $$b2 = createOptimistAction("GENERIC_COMMENT_EDIT", async (e, t, {
  optimistId: r
}) => {
  let {
    commentId,
    messageMeta,
    callback,
    clientMeta
  } = t;
  await XHR.put(`/api/community_comments/${commentId}`, {
    message_meta: messageMeta,
    client_meta: clientMeta
  }).then(({
    data: t
  }) => {
    e.dispatch(createOptimistCommitAction(r));
    callback(t.meta);
    e.dispatch($$p8({
      comment: t.meta
    }));
  }).catch(t => {
    e.dispatch(createOptimistRevertAction(r));
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("community.comments.failed_to_edit_comment"),
      error: !0
    }));
  });
});
let $$T4 = createOptimistThunk((e, t, {
  loadingKey: r
}) => {
  let {
    commentId,
    onFinish
  } = t;
  let {
    type,
    id
  } = e.getState().communityHub.comments;
  if (null === type || null === id) return;
  let u = e.getState().communityHub.comments.commentsById[commentId];
  XHR.del(`/api/community_comments/${commentId}`).then(() => {
    e.dispatch($$_5({
      resourceType: type,
      resourceId: id,
      comments: [u]
    }));
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("community.comments.comment_deleted")
    }));
    onFinish?.(!1);
  }).catch(t => {
    let r = resolveMessage(t);
    r && (e.dispatch(VisualBellActions.enqueue({
      error: !0,
      message: getI18nString("community.comments.failed_to_delete_comment", {
        errorMessage: r
      })
    })), onFinish?.(!0));
  });
}, ({
  commentId: e
}) => `GENERIC_COMMENT_DELETE_${e}`);
let $$I6 = createOptimistThunk((e, t) => {
  let r;
  let {
    commentId,
    userIsAdmin,
    onFinish
  } = t;
  let {
    type,
    id
  } = e.getState().communityHub.comments;
  null !== type && null !== id && (userIsAdmin && (r = {
    hide: !0
  }), XHR.post(`/api/community_comments/${commentId}/report`, r).then(() => {
    e.dispatch($$h1({
      commentId,
      resourceId: id,
      resourceType: type
    }));
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("community.comments.comment_reported_and_hidden"),
      type: "COMMENT_REPORTED"
    }));
    onFinish?.(!1);
  }).catch(t => {
    let r = resolveMessage(t);
    r && (e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("community.comments.failed_to_report_comment", {
        errorMessage: r
      }),
      type: "COMMENT_REPORT_ERROR"
    })), onFinish?.(!0));
  }));
});
export const BV = $$m0;
export const HF = $$h1;
export const QA = $$b2;
export const TW = $$f3;
export const Tu = $$T4;
export const Zv = $$_5;
export const eG = $$I6;
export const eT = $$y7;
export const kE = $$p8;
export const mH = $$g9;
export const tG = $$u10;
export const zs = $$E11;