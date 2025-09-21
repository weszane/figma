import { captureMessage, setTagGlobal } from '../905/11'
import { WE } from '../905/29425'
import { m as _$$m } from '../905/70820'
import { createActionCreator } from '../905/73481'
import { showModalHandler } from '../905/156213'
import { zq } from '../905/193529'
import { resolveMessage } from '../905/231762'
import { waitForAnimationFrame } from '../905/236856'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { BusyReadyState, getAttachmentChanges, NEW_COMMENT_ID } from '../905/380385'
import { getUserSkinToneShortcode, isEmojiModifierBase, splitEmojiAndSkinTone } from '../905/403166'
import { VB } from '../905/431747'
import { h as _$$h } from '../905/438683'
import { trackEventAnalytics } from '../905/449184'
import { FlashActions, handlePromiseError } from '../905/573154'
import { getFeatureFlags } from '../905/601108'
import { E as _$$E } from '../905/617605'
import { logInfo } from '../905/714362'
import { WB } from '../905/761735'
import { hideTooltip } from '../905/765855'
import { R as _$$R } from '../905/780757'
import { handleOptimistTransaction } from '../905/842794'
import { defaultSessionLocalIDArrayString, defaultSessionLocalIDStringArray } from '../905/871411'
import { LO, Mu } from '../905/901964'
import { XHR } from '../905/910117'
import { selectViewAction } from '../905/929976'
import { recordsWithRemove } from '../905/963222'
import { postUserFlag } from '../905/985254'
import { atomStoreManager } from '../figma_app/27355'
import { getFileKeyFromSelectedView } from '../figma_app/193867'
import { trackFileEvent } from '../figma_app/314264'
import { fullscreenValue } from '../figma_app/455680'
import { DesignGraphElements, Fullscreen } from '../figma_app/763686'
import { containsDash, extractInviteTokens, flattenMessageMeta, isActiveThread, isMessageMetaEmpty, isMessageMetaTooShort, Rc } from '../figma_app/819288'

export async function $$U4(e, t, r, n, i) {
  await G(i.messageMeta, e, t, r, n).then((t) => {
    e($$q27({
      comment: i.comment,
      messageMeta: i.messageMeta,
      attachmentUpdates: i.attachmentUpdates,
      forceWithInvite: t,
      forceMention: t,
      onCommentValidationFailure: void 0,
    }))
  }).catch(() => {})
}
export async function $$B31(e, t, r, n, i, a, s, o) {
  return await G(a.messageMeta, t, r, n, i).then((r) => {
    t($$eM9({
      threadId: a.threadId,
      reply: {
        messageMeta: a.messageMeta,
        attachments: a.attachments,
      },
    }))
    t($$er40({
      commentsWriteApi: e,
      threadId: a.threadId,
      threadUuid: a.threadUuid,
      uuid: s,
      forceWithInvite: r,
      forceMention: r,
      onCommentValidationFailure: void 0,
      commentsConfiguration: o,
    }))
  }).catch(() => {
    t($$eO47({
      threadId: a.threadId,
      resetStatusOnly: !0,
    }))
    t($$eM9({
      threadId: a.threadId,
      reply: {
        messageMeta: a.messageMeta,
        attachments: a.attachments,
      },
    }))
  })
}
function G(e, t, r, n, i) {
  return new Promise((a) => {
    t(showModalHandler({
      type: VB,
      data: {
        messageMeta: e,
        dispatch: t,
        usersWithoutAccess: r,
        externalUsersWithoutAccess: n,
        uninvitableUsers: i,
        onConfirm: () => a(!0),
        onCancel: () => a(!1),
      },
    }))
  })
}
let $$V16 = createOptimistThunk((e, t) => {
  let {
    receiptsAPI,
    comment,
  } = t
  receiptsAPI.markAsUnread(comment.id).catch((t) => {
    let r = getI18nString('comments.an_error_occurred_while_marking_a_comment_as_unread')
    try {
      t = JSON.parse(t)
      e.dispatch(FlashActions.error(resolveMessage(t, r)))
    }
    catch (t) {
      e.dispatch(FlashActions.error(r))
    }
  })
})
let $$H2 = createOptimistThunk((e, t) => {
  let {
    receiptsAPI,
    thread,
  } = t
  receiptsAPI.markAsRead(thread.comments.map(e => e.id)).catch((t) => {
    let r = getI18nString('comments.an_error_occurred_while_marking_a_comment_as_read')
    try {
      t = JSON.parse(t)
      e.dispatch(FlashActions.error(resolveMessage(t, r)))
    }
    catch (t) {
      e.dispatch(FlashActions.error(r))
    }
  })
})
let $$z21 = createOptimistThunk((e, t) => {
  let {
    commentReceiptsAPI,
    canvasMentionReceiptsAPI,
  } = t
  commentReceiptsAPI.markAllAsRead().catch((t) => {
    let r = getI18nString('comments.an_error_occurred_while_marking_a_comment_as_read')
    try {
      t = JSON.parse(t)
      e.dispatch(FlashActions.error(resolveMessage(t, r)))
    }
    catch (t) {
      e.dispatch(FlashActions.error(r))
    }
  })
  canvasMentionReceiptsAPI.markAllAsRead().catch((t) => {
    let r = getI18nString('whiteboard.an_error_occurred_while_marking_a_canvas_mention_as_read')
    try {
      t = JSON.parse(t)
      e.dispatch(FlashActions.error(resolveMessage(t, r)))
    }
    catch (t) {
      e.dispatch(FlashActions.error(r))
    }
  })
})
createOptimistThunk((e, t) => {
  let {
    reactionsApi,
    id,
    emoji,
  } = t
  let a = reactionsApi.removeReaction(id, emoji)
  let s = getI18nString('comments.an_error_occurred_while_removing_a_comment_reaction')
  e.dispatch(handlePromiseError({
    promise: a,
    fallbackError: s,
  }))
})
createOptimistThunk((e, t) => {
  let r = e.getState()
  let {
    reactionsApi,
    id,
    emoji,
  } = t
  let s = reactionsApi.addReaction(id, emoji, {
    prototype_mode: r.selectedView.view === 'prototype',
    selectedView: r.selectedView.view,
    quickReply: !1,
  })
  let o = getI18nString('comments.an_error_occurred_while_adding_a_comment_reaction')
  e.dispatch(handlePromiseError({
    promise: s,
    fallbackError: o,
  }))
})
let $$W58 = createOptimistThunk((e, t) => {
  let {
    reactionsApi,
    id,
  } = t
  let {
    emoji,
  } = t
  let a = e.getState()
  isEmojiModifierBase(emoji) && getUserSkinToneShortcode() !== null && (i = splitEmojiAndSkinTone(emoji)[0] + getUserSkinToneShortcode())
  let s = reactionsApi.toggleReaction(id, emoji, {
    prototype_mode: a.selectedView.view === 'prototype',
    selectedView: a.selectedView.view,
    quickReply: t.quickReply,
  })
  let o = getI18nString('comments.an_error_occurred_while_toggling_a_comment_reaction')
  e.dispatch(handlePromiseError({
    promise: s,
    fallbackError: o,
  }))
})
let $$K10 = createOptimistThunk((e, t) => {
  let r
  let {
    comment,
  } = t
  let {
    key,
    id,
    uuid,
    parent_id,
  } = comment
  let d = XHR.del(`/api/file/${key}/comments/${id}`)
  let u = getI18nString('comments.an_error_occurred_while_deleting_this_comment')
  e.dispatch(handlePromiseError({
    promise: d,
    fallbackError: u,
  }))
  recordsWithRemove.remove(id)
  r = uuid
    ? WB().optimisticallyDeleteWithUUID({
        Comment: {
          [uuid]: null,
        },
      }, d)
    : WB().optimisticallyDelete({
        Comment: {
          [id]: null,
        },
      }, d)
  trackEventAnalytics('Livegraph Optimistic Comment Update', {
    flow: 'setDeleted',
    isOptimistic: !!uuid,
  })
  handleOptimistTransaction(r, e.dispatch, $$ez57({
    comment: {
      id,
      parent_id,
    },
  }))
})
let $$Y34 = createOptimistThunk((e, {
  thread: {
    key: t,
    id: r,
    uuid: n,
  },
  resolved: i,
}) => {
  let o = e.getState()
  if (i && o.comments.activeThread?.id === r && !o.comments.showResolved && e.dispatch($$ea23()), i && atomStoreManager.set(_$$R, !1), getFeatureFlags().comments_undo_resolve && i) {
    let i = {
      text: getI18nString('comments.undo'),
      action: () => {
        e.dispatch($$Y34({
          thread: {
            key: t,
            id: r,
            uuid: n,
          },
          resolved: !1,
        }))
      },
    }
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString('comments.comment_resolved'),
      type: 'comment-resolved',
      button: i,
      onDismiss: () => {},
    }))
  }
  recordsWithRemove.remove(r)
  let l = i ? 'true' : 'false'
  let d = i ? getI18nString('comments.an_error_occurred_while_resolving_this_comment') : getI18nString('comments.an_error_occurred_while_unresolving_this_comment')
  if (n && containsDash(r)) {
    let r = WB().getIdFromUuid('Comment', n).then((r) => {
      let n = XHR.put(`/api/file/${t}/comments/${r}`, {
        resolved_at: l,
      })
      e.dispatch(handlePromiseError({
        promise: n,
        fallbackError: d,
      }))
      return n
    })
    WB().optimisticallyUpdateWithUUID({
      Comment: {
        [n]: {
          uuid: n,
          resolvedAt: i ? new Date() : null,
        },
      },
    }, r)
    trackEventAnalytics('Livegraph Optimistic Comment Update', {
      flow: 'setResolvedUsingGetIdFromUUID',
      isOptimistic: !0,
    })
  }
  else {
    let a = XHR.put(`/api/file/${t}/comments/${r}`, {
      resolved_at: l,
    })
    e.dispatch(handlePromiseError({
      promise: a,
      fallbackError: d,
    }))
    n
      ? WB().optimisticallyUpdateWithUUID({
          Comment: {
            [n]: {
              uuid: n,
              resolvedAt: i ? new Date() : null,
            },
          },
        }, a)
      : WB().optimisticallyUpdate({
          Comment: {
            [r]: {
              resolvedAt: i ? new Date() : null,
            },
          },
        }, a)
    trackEventAnalytics('Livegraph Optimistic Comment Update', {
      flow: 'setResolved',
      isOptimistic: !!n,
    })
  }
})
let $$$33 = createOptimistThunk((e, {
  thread: {
    key: t,
    id: r,
    uuid: n,
  },
  clientMeta: i,
}) => {
  let a
  n && containsDash(r)
    ? (a = WB().getIdFromUuid('Comment', n).then(e => XHR.put(`/api/file/${t}/comments/${e}`, {
        client_meta: i,
      })), trackEventAnalytics('Livegraph Optimistic Comment Update', {
        flow: 'setClientMetaWithGetIdFromUUID',
        isOptimistic: !0,
      }))
    : (a = XHR.put(`/api/file/${t}/comments/${r}`, {
        client_meta: i,
      }), trackEventAnalytics('Livegraph Optimistic Comment Update', {
        flow: 'setClientMeta',
        isOptimistic: !!n,
      }))
  let s = getI18nString('comments.an_error_occurred_while_moving_this_comment')
  e.dispatch(handlePromiseError({
    promise: a,
    fallbackError: s,
  }))
  n
    ? WB().optimisticallyUpdateWithUUID({
        Comment: {
          [n]: {
            uuid: n,
            clientMeta: {
              x: i.x,
              y: i.y,
              pageId: void 0 === i.page_id ? null : i.page_id,
              nodeId: void 0 === i.node_id ? null : i.node_id,
              nodeOffset: void 0 === i.node_offset ? null : i.node_offset,
              inFrame: void 0 === i.in_frame ? null : i.in_frame,
              selectionBoxAnchor: i.selection_box_anchor ? i.selection_box_anchor : null,
              stablePath: i.stable_path ? i.stable_path : null,
            },
          },
        },
      }, a)
    : WB().optimisticallyUpdate({
        Comment: {
          [r]: {
            clientMeta: {
              x: i.x,
              y: i.y,
              pageId: void 0 === i.page_id ? null : i.page_id,
              nodeId: void 0 === i.node_id ? null : i.node_id,
              nodeOffset: void 0 === i.node_offset ? null : i.node_offset,
              inFrame: void 0 === i.in_frame ? null : i.in_frame,
              selectionBoxAnchor: i.selection_box_anchor ? i.selection_box_anchor : null,
              stablePath: i.stable_path ? i.stable_path : null,
            },
          },
        },
      }, a)
})
let $$X48 = createActionCreator('COMMENTS_SET_COMMENT_CONTENT')
let $$q27 = createOptimistThunk((e, t) => {
  let r = t.comment.key
  if (!r || isMessageMetaEmpty(t.messageMeta)) {
    e.dispatch($$X48())
    return
  }
  let n = extractInviteTokens(t.messageMeta)
  let i = XHR.put(`/api/file/${r}/comments/${t.comment.id}`, {
    message_meta: t.messageMeta,
    attachment_updates: getAttachmentChanges(t.attachmentUpdates),
    share_to_mentions: t.forceWithInvite || !1,
    force: t.forceMention || !1,
    pending_mentions: n,
  }).then(({
    data: t,
  }) => {
    t.message?.warning_message && t.message.warning_message.length !== 0 && e.dispatch(VisualBellActions.enqueue({
      type: 'at-mention-error',
      message: t.message.warning_message,
    }))
  }).catch((e) => {
    let r = e.data?.reason?.failure_info
    e.data?.reason?.reason !== 'comment_validation_failure' || void 0 === r || !t.onCommentValidationFailure || t.forceMention || t.forceWithInvite || t.onCommentValidationFailure(r.users_without_view, r.ext_users_without_view, r.uninvitable_users, {
      comment: t.comment,
      messageMeta: t.messageMeta,
    })
  })
  let a = getI18nString('comments.an_error_occurred_while_editing_this_comment')
  e.dispatch(handlePromiseError({
    promise: i,
    fallbackError: a,
  }))
  let s = t.comment.uuid
  let o = Rc(t.messageMeta)
  if (s
    ? WB().optimisticallyUpdateWithUUID({
        Comment: {
          [s]: {
            uuid: s,
            messageMeta: o,
            messageMetaStylized: o,
          },
        },
      }, i)
    : WB().optimisticallyUpdate({
        Comment: {
          [t.comment.id]: {
            messageMeta: o,
            messageMetaStylized: o,
          },
        },
      }, i), trackEventAnalytics('Livegraph Optimistic Comment Update', {
    flow: 'updateCommentContent',
    isOptimistic: !!s,
  }), t.attachmentUpdates) {
    let e = LO(t.attachmentUpdates.deleted)
    e
      ? WB().optimisticallyDelete({
          CommentAttachment: e,
        }, i)
      : WB().emitEvent({
          type: 'EMPTY_SYNC',
          source: 'comment_delete',
        })
    let r = Mu(Object.values(t.attachmentUpdates.attachments), t.comment.key, t.comment.id)
    r
      ? WB().optimisticallyCreate({
          CommentAttachment: r,
        }, i)
      : WB().emitEvent({
          type: 'EMPTY_SYNC',
          source: 'comment_create',
        })
  }
  e.dispatch($$X48())
})
let $$J3 = createOptimistThunk(async (e, t) => {
  let r = e.dispatch($$Z38(t))
  if (!r || t.thread.isPendingFromSinatra)
    return
  let a = t.thread.comments[0]
  if (!a)
    return
  let s = e.getState()
  let o = a.client_meta?.node_id
  let l = a.client_meta?.stable_path ? a.client_meta.stable_path : defaultSessionLocalIDStringArray
  !l && o && (l = [o])
  let d = t.thread.id
  let u = t.source
  a.client_meta?.page_id && s.selectedView.view === 'communityHub' && (d !== s.selectedView.commentThreadId && e.dispatch(selectViewAction({
    ...s.selectedView,
    commentThreadId: d,
  })), s.selectedView.commentThreadId && trackEventAnalytics('Comment Thread Read', {
    commentThreadId: d,
    threadType: 'community_preview',
  }))
  await r
  e.dispatch($$eg8({
    threadId: d,
    source: u,
  }))
  t.thread.comments.some(e => e.isUnread) && t.receiptsAPI && !t.thread.isPendingFromSinatra && !t.thread.isCanvasMention && (e.dispatch($$H2({
    receiptsAPI: t.receiptsAPI,
    thread: t.thread,
  })), trackEventAnalytics('Comment Thread Read', {
    commentThreadId: d,
  }))
  s.selectedView.view === 'fullscreen' && Fullscreen.setActiveCommentAnchorData({
    stablePath: `[${l.join(',')}]`,
  })
})
let $$Z38 = createOptimistThunk((e, t) => {
  let r = e.getState()
  if (r.comments.activeThread && r.comments.activeThread.id !== t.thread.id && !t.skipDeactivatingExistingActiveComment && !e.dispatch($$ea23()))
    return null
  r = e.getState()
  let {
    thread,
    viewport,
    config,
    navigate,
    isOrphanedComment,
  } = t
  let {
    setCurrentPageIdAsync,
    pageIdForNodeId,
  } = viewport
  if (!viewport.getViewportInfo())
    return null
  let p = thread.comments[0]
  if (!p)
    return null
  let _ = p.client_meta?.node_id
  let h = thread.page || _ && pageIdForNodeId(_) || p.client_meta?.page_id
  let m = []
  let g = r.mirror?.appModel?.currentPage
  let f = !1
  h && (f = g !== h, m.push(setCurrentPageIdAsync(h).then(async () => {
    f && (await waitForAnimationFrame())
  })))
  let E = r.mirror.appModel.currentTool === DesignGraphElements.COMMENTS
  if (!isOrphanedComment && config.repositionViewportOnCommentSelection) {
    let e = navigate(_$$E(thread, viewport, r.selectedView, f, E), {
      jump: f,
      jumpOnAbort: !0,
    })
    e && m.push(e)
  }
  return Promise.all(m).then()
})
let $$Q29 = createOptimistThunk((e, t) => {
  let r = e.getState()
  r.comments.activeThread?.id === t.thread.id ? e.dispatch($$ea23()) : (t.skipDeactivatingExistingActiveComment || e.dispatch($$ea23()), isActiveThread(r.comments) && (e.dispatch($$J3(t)), atomStoreManager.set(_$$m, null)))
})
let $$ee45 = createActionCreator('COMMENTS_STOP_EDITING')
let $$et32 = createActionCreator('COMMENTS_SUBMIT_REPLY')
let $$er40 = createOptimistThunk((e, t) => {
  let r = e.getState()
  let {
    commentsWriteApi,
    commentsConfiguration,
  } = t
  let o = r.comments.threads[t.threadId]
  let [l, d] = commentsWriteApi.reply({
    threadId: t.threadId,
    threadUuid: t.threadUuid,
    uuid: t.uuid,
    messageMeta: o.reply.messageMeta,
    attachments: Object.values(o.reply.attachments || {}),
  }, {
    forceMention: t.forceMention || !1,
    forceWithInvite: t.forceWithInvite || !1,
    prototypeMode: r.selectedView.view === 'prototype',
    trackingContext: t.trackingContext,
  })
  getFeatureFlags().comments_faster_saving_ux && !getFeatureFlags().comments_faster_saving_ux_v2 && e.dispatch($$eB41({
    commentUuid: t.uuid,
  }))
  e.dispatch($$eM9({
    threadId: t.threadId,
    reply: {
      messageMeta: [],
      attachments: {},
    },
  }))
  l.then((t) => {
    if (!t)
      return
    let {
      data,
    } = t
    if (data.message?.warning_message && data.message.warning_message.length !== 0 && e.dispatch(VisualBellActions.enqueue({
      type: 'at-mention-error',
      message: data.message.warning_message,
    })), data.message && data.message.is_new_file_follower) {
      let t = commentsConfiguration.showNotificationSettings
        ? {
            text: getI18nString('comments.manage'),
            action: () => {
              let t = e.getState()
              e.dispatch($$ea23())
              t.mirror.appModel.showUi || fullscreenValue.triggerAction('toggle-ui')
              t.mirror.appModel.currentTool !== DesignGraphElements.COMMENTS && fullscreenValue.triggerAction('set-tool-comments')
              requestAnimationFrame(() => {
                _$$h()
              })
            },
          }
        : void 0
      e.dispatch(VisualBellActions.enqueue({
        message: getI18nString('comments.you_will_be_notified_about_replies'),
        type: 'comments-opted-in',
        button: t,
        onDismiss: () => {},
      }))
    }
    let o = data.meta
    e.dispatch(eW({
      comment: o,
      userInitiated: !1,
    }))
    trackFileEvent('Comment Submitted', o.key, r, {
      commentId: o.id,
      parentCommentId: o.id,
      selectedView: r.selectedView.view,
      isDevModeFocusView: !!e.getState().selectedView?.devModeFocusId,
    })
    getFeatureFlags().comments_faster_saving_ux_v2 && o.id && o.uuid && e.dispatch($$eV56({
      commentId: o.id,
      commentUuid: o.uuid,
    }))
    e.getState().userFlags.has_created_comment || e.dispatch(postUserFlag({
      has_created_comment: !0,
    }))
  }).catch((r) => {
    let n = r.data?.reason?.failure_info
    if (r.data?.reason?.reason !== 'comment_validation_failure' || void 0 === n || !t.onCommentValidationFailure || t.forceMention || t.forceWithInvite) {
      let n = resolveMessage(r, getI18nString('comments.an_error_occurred'))
      e.dispatch(FlashActions.error(n))
      e.dispatch($$eO47({
        threadId: t.threadId,
        resetStatusOnly: !0,
      }))
      e.dispatch($$eM9({
        threadId: t.threadId,
        reply: o.reply,
      }))
      return
    }
    t.onCommentValidationFailure(n.users_without_view, n.ext_users_without_view, n.uninvitable_users, {
      threadId: t.threadId,
      messageMeta: o.reply.messageMeta,
      attachments: o.reply.attachments,
    })
  }).finally(() => {
    getFeatureFlags().comments_faster_saving_ux && !getFeatureFlags().comments_faster_saving_ux_v2 && e.dispatch($$eG53({
      commentUuid: t.uuid,
    }))
  })
  e.dispatch($$et32(t))
})
let $$en39 = createActionCreator('COMMENTS_SUBMIT_NEW_COMMENT')
let $$ei26 = createOptimistThunk((e, t) => {
  trackEventAnalytics('New comment starting dispatched action', {
    uuid: t.uuid,
  })
  let r = e.getState()
  let i = getFileKeyFromSelectedView(r.selectedView)
  if (!i)
    return Promise.resolve()
  let o = t.newCommentState || r.comments.newComment
  let {
    canvasPosition,
    nodeId,
    nodeOffset,
    inFrame,
    pageId,
    viewport,
    stablePath,
  } = t.destination
  let g = o.selectionBoxAnchor ? o.selectionBoxAnchor : void 0
  e.dispatch($$ea23({
    force: !0,
  }))
  e.dispatch($$ew1({
    resetStatusOnly: !1,
  }))
  let {
    messageMeta,
    attachments,
  } = o
  trackEventAnalytics('New comment creating promise', {
    uuid: t.uuid,
  })
  let [I, S] = t.commentsWriteApi.create({
    fileKey: i,
    messageMeta,
    attachments: Object.values(attachments),
    pageId,
    uuid: t.uuid,
    clientMeta: {
      x: canvasPosition.x,
      y: canvasPosition.y,
      node_id: nodeId,
      node_offset: nodeOffset,
      page_id: pageId,
      viewport,
      in_frame: inFrame,
      selection_box_anchor: g,
      stable_path: stablePath,
    },
  }, {
    prototypeMode: r.selectedView.view === 'prototype',
    onValidationError: async (t, r, n) => {
      if (await G(o.messageMeta, e.dispatch, t, r, n)) {
        return {
          forceMentions: !0,
          forceWithInvite: !0,
        }
      }
      if (e.getState().comments.newComment.messageMeta.length !== 0) {
        e.dispatch($$ew1({
          resetStatusOnly: !0,
        }))
        let t = {
          text: getI18nString('comments.view'),
          action(t, r) {
            if (e.getState().comments.activeThread?.id === NEW_COMMENT_ID && e.getState().comments.newComment.messageMeta.length > 0) {
              e.dispatch(eA())
              e.dispatch(VisualBellActions.update({
                id: r,
                message: getI18nString('comments.finish_or_clear_your_active_comment_then_hit_view'),
              }))
              return !1
            }
            e.dispatch($$eC13(o))
            e.dispatch($$eo5())
          },
        }
        e.dispatch(VisualBellActions.enqueue({
          type: `comment-creation-failure: ${S}`,
          error: !1,
          message: getI18nString('comments.oops_one_of_your_comments_never_posted'),
          onDismiss: () => {},
          button: t,
          timeoutOverride: 1 / 0,
        }))
        return
      }
      e.dispatch($$eC13(o))
      e.dispatch($$eo5())
      e.dispatch(eA())
    },
  })
  getFeatureFlags().comments_faster_saving_ux && !getFeatureFlags().comments_faster_saving_ux_v2 && e.dispatch($$eB41({
    commentUuid: t.uuid,
  }))
  e.dispatch($$en39(t))
  return I.then((p) => {
    if (trackEventAnalytics('New comment promise resolved', {
      uuid: t.uuid,
    }), !p) {
      return
    }
    let {
      data,
    } = p
    if (getFileKeyFromSelectedView(e.getState().selectedView) !== i)
      return
    if (data.message?.warning_message && data.message.warning_message.length !== 0 && e.dispatch(VisualBellActions.enqueue({
      type: 'at-mention-error',
      message: data.message.warning_message,
    })), data.message && data.message.is_new_file_follower) {
      let r = t.commentsConfiguration.showNotificationSettings
        ? {
            text: getI18nString('comments.manage'),
            action: () => {
              let t = e.getState()
              e.dispatch($$ea23({
                force: !0,
              }))
              t.mirror.appModel.showUi || fullscreenValue.triggerAction('toggle-ui')
              t.mirror.appModel.currentTool !== DesignGraphElements.COMMENTS && fullscreenValue.triggerAction('set-tool-comments')
              requestAnimationFrame(() => {
                _$$h()
              })
            },
          }
        : void 0
      e.dispatch(VisualBellActions.enqueue({
        message: getI18nString('comments.you_will_be_notified_about_replies'),
        type: 'comments-opted-in',
        button: r,
        onDismiss: () => {},
      }))
    }
    let g = data.meta
    atomStoreManager.set(WE, g.id)
    let f = e.getState().comments.newComment !== o
    e.dispatch($$ew1({
      resetStatusOnly: f,
    }))
    getFeatureFlags().comments_faster_saving_ux_v2 && g.id && g.uuid && e.dispatch($$eV56({
      commentId: g.id,
      commentUuid: g.uuid,
    }))
    trackFileEvent('Comment Submitted', i, r, {
      commentId: g.id,
      locationX: canvasPosition && canvasPosition.x,
      locationY: canvasPosition && canvasPosition.y,
      nodeId,
      pageId,
      nodeOffsetX: nodeOffset && nodeOffset.x,
      nodeOffsetY: nodeOffset && nodeOffset.y,
      selectedView: r.selectedView.view,
      stablePath,
      isDevModeFocusView: !!e.getState().selectedView?.devModeFocusId,
    })
    e.getState().userFlags.has_created_comment || e.dispatch(postUserFlag({
      has_created_comment: !0,
    }))
    e.dispatch(zq({
      lastCreatedCommentId: g.id,
    }))
  }).catch((r) => {
    if (e.dispatch($$ew1({
      resetStatusOnly: !0,
    })), !(r?.data?.status >= 400 && r?.data?.status < 500 && r?.data?.message)) {
      return e.dispatch(VisualBellActions.enqueue({
        type: `comment-creation-failure: ${S}`,
        message: getI18nString('comments.couldn_t_post_your_comment'),
        error: !0,
        button: {
          text: getI18nString('comments.retry'),
          action() {
            trackEventAnalytics('New comment dispatching retry submission', {
              uuid: t.uuid,
            })
            e.dispatch($$ei26({
              ...t,
              newCommentState: o,
            }))
          },
        },
      }))
    }
    {
      let t = resolveMessage(r)
      if (t) {
        return e.dispatch(VisualBellActions.enqueue({
          type: `comment-creation-failure: ${S}`,
          message: t,
          error: !0,
        }))
      }
    }
  }).finally(() => {
    getFeatureFlags().comments_faster_saving_ux && !getFeatureFlags().comments_faster_saving_ux_v2 && e.dispatch($$eG53({
      commentUuid: t.uuid,
    }))
  })
})
let $$ea23 = createOptimistThunk((e, t) => {
  let r = e.getState()
  let a = t instanceof Object && t.force
  let {
    newComment,
  } = r.comments
  let l = r.comments.activeThread?.id
  let d = isMessageMetaTooShort(newComment.messageMeta) && Object.keys(newComment.attachments).length === 0
  if (!a && !d && !isActiveThread(r.comments)) {
    e.dispatch(eA())
    return !1
  }
  let c = l && r.comments.threads[l]
  let p = c && isMessageMetaTooShort(c.reply.messageMeta) && Object.keys(c.reply.attachments || {}).length === 0
  if (!a && l && c && !p && (!c.discardAttempts || c.discardAttempts < 1)) {
    e.dispatch(eS(l))
    return !1
  }
  let _ = r.comments.editingComment
  return !a && _
    ? (e.dispatch(eS(_.id)), !1)
    : (r.selectedView.view === 'fullscreen' && Fullscreen.setActiveCommentAnchorData({
        stablePath: defaultSessionLocalIDArrayString,
      }), r.selectedView.view === 'communityHub' && e.dispatch(selectViewAction({
        ...r.selectedView,
        commentThreadId: void 0,
      })), atomStoreManager.set(_$$R, !1), e.dispatch($$eK30()), e.dispatch($$eY36()), e.dispatch($$ew1({
        resetStatusOnly: !1,
      })), r.tooltip && e.dispatch(hideTooltip()), !0)
})
let $$es0 = createActionCreator('COMMENTS_SET_NEW_COMMENT_ACTIVE')
let $$eo5 = createOptimistThunk((e, t) => {
  let r = e.getState()
  if (r.selectedView.view === 'fullscreen') {
    if (r.comments.newComment.anchorPosition) {
      let {
        x,
        y,
      } = r.comments.newComment.anchorPosition
      let a = t?.stablePath
      a
        ? Fullscreen.setActiveCommentAnchorData({
            stablePath: `[${a.join(',')}]`,
          })
        : Fullscreen.setActiveCommentAnchorData(Fullscreen.getCommentAnchorDataAtPosition(x, y))
    }
    else {
      Fullscreen.setActiveCommentAnchorData({
        stablePath: defaultSessionLocalIDArrayString,
      })
    }
  }
  e.dispatch($$es0(t))
})
let $$el7 = createActionCreator('COMMENTS_SET_NEW_SELECTION_BOX_ANCHOR_POSITION')
let $$ed28 = createOptimistThunk((e, t) => {
  e.getState().userFlags.has_created_selection_comment || e.dispatch(postUserFlag({
    has_created_selection_comment: !0,
  }))
  e.dispatch($$el7(t))
})
let $$ec14 = createActionCreator('COMMENTS_SET_NEW_ANCHOR_POSITION')
let $$eu52 = createOptimistThunk((e, t) => {
  if (e.getState().selectedView.view === 'fullscreen') {
    let {
      x,
      y,
    } = t.anchorPosition
    Fullscreen.setActiveCommentAnchorData(Fullscreen.getCommentAnchorDataAtPosition(x, y))
  }
  e.dispatch($$ec14(t))
})
let $$ep20 = createActionCreator('COMMENTS_REMOVE_HOVERED_PIN')
let $$e_54 = createActionCreator('COMMENTS_ADD_HOVERED_PIN')
let $$eh12 = createActionCreator('COMMENTS_REMOVE_EMPHASIZED_PIN')
let $$em11 = createActionCreator('COMMENTS_ADD_EMPHASIZED_PIN')
let $$eg8 = createActionCreator('COMMENTS_SET_ACTIVE')
let $$ef17 = createOptimistThunk((e) => {
  let t = e.getState()
  let r = t.selectedView
  'subView' in r && (r.subView === 'hubFile' || r.subView === 'plugin') && trackEventAnalytics('at_mention_search_started', {
    comment_type: t.comments.activeThread?.id ? 'community_pinned' : 'community_general',
    profile_id: t.user?.community_profile_id,
    resource_id: r.subView === 'hubFile' ? r.hubFileId : r.publishedPluginId,
    resource_type: r.subView === 'hubFile' ? 'hub_file' : 'plugin',
  })
})
let $$eE35 = createActionCreator('COMMENTS_SET_TYPEAHEAD_POSITION_OFFSET')
let $$ey24 = createActionCreator('COMMENTS_SET_TYPEAHEAD')
let $$eb18 = createActionCreator('COMMENTS_SHOW_EMOJI_PICKER')
let $$eT42 = createActionCreator('COMMENTS_SET_ACTIVE_SORT')
let $$eI49 = createActionCreator('COMMENTS_DISCARD_COMMENT_REPLY_ATTEMPT')
let eS = createOptimistThunk((e, t) => {
  let r = e.getState().comments
  let n = r.activeThread?.id
  let i = n && r.threads[n]
  if (i && i.discardAttempts === 5) {
    let e = flattenMessageMeta(i.reply.messageMeta)
    let t = isMessageMetaTooShort(i.reply.messageMeta)
    logInfo('Comment discard active thread attempt', 'comment info', {
      threadId: n,
      messageLength: e.length,
      isMessageDiscardable: t,
    })
    setTagGlobal('isMessageDiscardable', String(t))
    setTagGlobal('messageType', 'reply')
    captureMessage('User attempted to close comments more than max attempt times')
  }
  e.dispatch($$eI49(t))
})
let $$ev55 = createActionCreator('COMMENTS_DISCARD_NEW_COMMENT_ATTEMPT')
let eA = createOptimistThunk((e) => {
  let t = e.getState().comments.newComment
  if (t.discardAttempt === 5) {
    let e = flattenMessageMeta(t.messageMeta)
    let r = isMessageMetaTooShort(t.messageMeta)
    logInfo('Comment discard new comment attempt', 'comment info', {
      messageLength: e.length,
      isMessageDiscardable: r,
    })
    setTagGlobal('isMessageDiscardable', String(r))
    setTagGlobal('messageType', 'new')
    captureMessage('User attempted to close comments more than max attempt times')
  }
  e.dispatch($$ev55())
})
let $$ex19 = createActionCreator('COMMENTS_SET_SHOW_ONLY_MY_COMMENTS')
let $$eN22 = createActionCreator('COMMENTS_SET_SHOW_RESOLVED_COMMENTS')
let $$eC13 = createActionCreator('COMMENTS_REVERT_NEW_COMMENT')
let $$ew1 = createActionCreator('COMMENTS_RESET_NEW_COMMENT')
let $$eO47 = createActionCreator('COMMENTS_RESET_THREAD')
let $$eR43 = createActionCreator('COMMENTS_SET_NEW_COMMENT_ATTACHMENT')
let $$eL25 = createActionCreator('COMMENTS_SET_NEW_COMMENT_MESSAGE')
let $$eP44 = createActionCreator('COMMENTS_SET_NEW_COMMENT')
let $$eD15 = createActionCreator('COMMENTS_SET_REPLY_ATTACHMENT')
let $$ek37 = createActionCreator('COMMENTS_SET_REPLY_MESSAGE')
let $$eM9 = createActionCreator('COMMENTS_SET_REPLY')
let $$eF50 = createActionCreator('COMMENTS_SET_EDITING_ATTACHMENT')
let $$ej6 = createActionCreator('COMMENTS_SET_EDITING')
let $$eU51 = createActionCreator('COMMENTS_SET_ACTIVE_DRAG_TARGET')
let $$eB41 = createActionCreator('COMMENTS_SET_SAVING')
let $$eG53 = createActionCreator('COMMENTS_CLEAR_SAVING')
let $$eV56 = createActionCreator('COMMENTS_STORE_SERVER_ID_FOR_LG_PENDING_UUID')
let $$eH46 = createActionCreator('COMMENTS_CLEAR_LG_PENDING_UUID')
let $$ez57 = createActionCreator('COMMENTS_DEL')
let eW = createOptimistThunk((e, t) => {
  let r = e.dispatch
  let n = e.getState()
  let {
    comment,
  } = t
  if (n.user && n.user.id === comment.user_id && !t.userInitiated) {
    if (comment.parent_id) {
      let e = n.comments.threads[comment.parent_id]
      if (e && e.state === BusyReadyState.BUSY) {
        let n = !(function (e, t) {
          if (!e)
            return !t
          if (!t)
            return !e
          if (e.length !== t.length)
            return !1
          for (let r = 0; r < e.length; r++) {
            let n = e[r]
            let i = t[r]
            let a = new Set(Object.keys(n))
            let s = Object.keys(i)
            if (a.size !== s.length || !s.every(e => !!a.has(e) && n[e] === i[e]))
              return !1
          }
          return !0
        }(t.comment.message_meta, e.reply.messageMeta))
        r($$eO47({
          threadId: comment.parent_id,
          resetStatusOnly: n,
        }))
      }
    }
    else {
      let e = n.comments.newComment
      e && e.state === BusyReadyState.BUSY && r($$ea23({
        force: !0,
      }))
      r($$ew1({
        resetStatusOnly: !1,
      }))
    }
  }
})
let $$eK30 = createActionCreator('COMMENTS_RESET')
let $$eY36 = createActionCreator('COMMENTS_RESET_ACTIVE_ID')
export const $0 = $$es0
export const $M = $$ew1
export const AY = $$H2
export const At = $$J3
export const C = $$U4
export const CX = $$eo5
export const Df = $$ej6
export const F8 = $$el7
export const Fm = $$eg8
export const Jc = $$eM9
export const Mv = $$K10
export const NJ = $$em11
export const Oo = $$eh12
export const PB = $$eC13
export const Q8 = $$ec14
export const QD = $$eD15
export const QY = $$V16
export const Qe = $$ef17
export const RI = $$eb18
export const RO = $$ex19
export const RP = $$ep20
export const Tb = $$z21
export const U3 = $$eN22
export const UU = $$ea23
export const We = $$ey24
export const Z5 = $$eL25
export const _B = $$ei26
export const _v = $$q27
export const a$ = $$ed28
export const bB = $$Q29
export const cL = $$eK30
export const dB = $$B31
export const gi = $$et32
export const hY = $$$33
export const hx = $$Y34
export const i4 = $$eE35
export const js = $$eY36
export const k7 = $$ek37
export const l5 = $$Z38
export const lI = $$en39
export const lV = $$er40
export const li = $$eB41
export const nL = $$eT42
export const nb = $$eR43
export const on = $$eP44
export const pD = $$ee45
export const pI = $$eH46
export const q4 = $$eO47
export const rW = $$X48
export const sQ = $$eI49
export const uy = $$eF50
export const uz = $$eU51
export const vV = $$eu52
export const wJ = $$eG53
export const wg = $$e_54
export const xH = $$ev55
export const y3 = $$eV56
export const yH = $$ez57
export const z$ = $$W58
