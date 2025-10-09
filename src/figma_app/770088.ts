// Refactored TypeScript file with improved readability, type safety, and documentation
// Renamed variables, added types, simplified logic, and added comments explaining key functionality
// Further improvements for better type safety and code clarity

import { captureMessage, setTagGlobal } from '../905/11'
import { onboardingCommentIdAtom } from '../905/29425'
import { m as _$$m } from '../905/70820'
import { createActionCreator } from '../905/73481'
import { showModalHandler } from '../905/156213'
import { lastCreatedCommentIdAction } from '../905/193529'
import { resolveMessage } from '../905/231762'
import { waitForAnimationFrame } from '../905/236856'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { BusyReadyState, getAttachmentChanges, NEW_COMMENT_ID } from '../905/380385'
import { getUserSkinToneShortcode, isEmojiModifierBase, splitEmojiAndSkinTone } from '../905/403166'
import { ConfirmCommentMentionModal } from '../905/431747'
import { openResiger } from '../905/438683'
import { trackEventAnalytics } from '../905/449184'
import { FlashActions, handlePromiseError } from '../905/573154'
import { getFeatureFlags } from '../905/601108'
import { calculateCommentPinViewport } from '../905/617605'
import { logInfo } from '../905/714362'
import { getCurrentLiveGraphClient } from '../905/761735'
import { hideTooltip } from '../905/765855'
import { R as _$$R } from '../905/780757'
import { handleOptimistTransaction } from '../905/842794'
import { defaultSessionLocalIDArrayString, defaultSessionLocalIDStringArray } from '../905/871411'
import { createAttachmentsLookup, createEmptyLookup } from '../905/901964'
import { sendWithRetry } from '../905/910117'
import { selectViewAction } from '../905/929976'
import { recordsWithRemove } from '../905/963222'
import { postUserFlag } from '../905/985254'
import { atomStoreManager } from '../figma_app/27355'
import { getFileKeyFromSelectedView } from '../figma_app/193867'
import { trackFileEvent } from '../figma_app/314264'
import { fullscreenValue } from '../figma_app/455680'
import { DesignGraphElements, Fullscreen } from '../figma_app/763686'
import { containsDash, extractInviteTokens, flattenMessageMeta, isActiveThread, isMessageMetaEmpty, isMessageMetaTooShort, normalizeMessageMeta } from '../figma_app/819288'

// Type definitions for better type safety
interface Comment {
  id: string
  key: string
  uuid?: string
  parent_id?: string
  message_meta: any[]
  user_id?: string
  client_meta?: ClientMeta
  isUnread?: boolean
  [key: string]: any
}

interface Thread {
  id: string
  key: string
  uuid?: string
  comments: Comment[]
  page?: string
  isPendingFromSinatra?: boolean
  isCanvasMention?: boolean
  sidebarItemType?: number
  reply?: {
    messageMeta: any[]
    attachments?: Record<string, any>
  }
  discardAttempts?: number
  state?: BusyReadyState
}

interface ClientMeta {
  x: number
  y: number
  page_id?: string
  node_id?: string
  node_offset?: any
  in_frame?: boolean
  selection_box_anchor?: any
  stable_path?: string[]
  viewport?: any
}

interface AttachmentUpdates {
  attachments: Record<string, any>
  deleted: string[]
}

interface CommentActionPayload {
  comment: Comment
  messageMeta: any[]
  attachmentUpdates?: AttachmentUpdates
  forceWithInvite?: boolean
  forceMention?: boolean
  onCommentValidationFailure?: (usersWithoutAccess: any[], externalUsersWithoutAccess: any[], uninvitableUsers: any[], data: any) => void
}

interface CreateCommentPayload {
  commentsWriteApi?: any
  threadId: string
  threadUuid?: string
  uuid?: string
  forceMention?: boolean
  forceWithInvite?: boolean
  onCommentValidationFailure?: (usersWithoutAccess: any[], externalUsersWithoutAccess: any[], uninvitableUsers: any[], data: any) => void
  commentsConfiguration?: any
  trackingContext?: any
  resetStatusOnly?: boolean
}

interface NewCommentPayload {
  uuid: string
  commentsWriteApi: any
  commentsConfiguration: any
  destination: {
    canvasPosition: { x: number, y: number }
    nodeId?: string
    nodeOffset?: { x: number, y: number }
    inFrame?: boolean
    pageId: string
    viewport?: any
    stablePath?: string[]
  }
  newCommentState?: any
}

interface MarkUnreadPayload {
  receiptsAPI: any
  comment: Comment
}

interface MarkReadPayload {
  receiptsAPI: any
  thread: Thread
}

interface MarkAllReadPayload {
  commentReceiptsAPI: any
  canvasMentionReceiptsAPI: any
}

interface ToggleReactionPayload {
  reactionsApi: any
  id: string
  emoji: string
  quickReply?: boolean
}

interface DeleteCommentPayload {
  comment: Comment
}

interface ResolveThreadPayload {
  thread: {
    key: string
    id: string
    uuid?: string
  }
  resolved: boolean
}

interface MoveCommentPayload {
  thread: {
    key: string
    id: string
    uuid?: string
  }
  clientMeta: ClientMeta
}

interface SetContentPayload extends CommentActionPayload { }

interface EditCommentPayload {
  comment: Comment
  userInitiated?: boolean
}

// Response data interface
interface ResponseData {
  message?: {
    warning_message?: string[]
    is_new_file_follower?: boolean
  }
  meta?: any
  reason?: {
    failure_info?: any
    reason?: string
  }
  status?: number
}

/**
 * Handles comment content update with user confirmation for mentions
 * @origin $$U4
 */
export async function handleCommentUpdateWithConfirmation(
  dispatch: (action: any) => void,
  usersWithoutAccess: any[],
  externalUsersWithoutAccess: any[],
  uninvitableUsers: any[],
  payload: CommentActionPayload,
): Promise<void> {
  try {
    const userConfirmed = await showCommentMentionConfirmationModal(
      payload.messageMeta,
      dispatch,
      usersWithoutAccess,
      externalUsersWithoutAccess,
      uninvitableUsers,
    )

    if (userConfirmed) {
      dispatch(updateCommentContent({
        comment: payload.comment,
        messageMeta: payload.messageMeta,
        attachmentUpdates: payload.attachmentUpdates,
        forceWithInvite: true,
        forceMention: true,
        onCommentValidationFailure: undefined,
      }))
    }
  }
  catch (error) {
    // Handle any errors that occur during the confirmation process
    logInfo('Comment update confirmation failed', error)
  }
}

// Export with original name for backwards compatibility
export const $$U4 = handleCommentUpdateWithConfirmation

/**
 * Shows a confirmation modal for comment mentions and returns a promise that resolves
 * with the user's decision (true for confirm, false for cancel)
 * @origin G
 */
function showCommentMentionConfirmationModal(
  messageMeta: any[],
  dispatch: (action: any) => void,
  usersWithoutAccess: any[],
  externalUsersWithoutAccess: any[],
  uninvitableUsers: any[],
): Promise<boolean> {
  return new Promise((resolve) => {
    dispatch(showModalHandler({
      type: ConfirmCommentMentionModal,
      data: {
        messageMeta,
        dispatch,
        usersWithoutAccess,
        externalUsersWithoutAccess,
        uninvitableUsers,
        onConfirm: () => resolve(true),
        onCancel: () => resolve(false),
      },
    }))
  })
}

/**
 * Updates a comment's content
 * @origin $$q27
 */
export let updateCommentContent = createOptimistThunk((context, payload: SetContentPayload) => {
  const { dispatch } = context
  const { comment, messageMeta, attachmentUpdates, forceWithInvite, forceMention, onCommentValidationFailure } = payload

  const fileKey = comment.key
  if (!fileKey || isMessageMetaEmpty(messageMeta)) {
    dispatch(setCommentContentAction())
    return
  }

  const inviteTokens = extractInviteTokens(messageMeta)

  const updatePromise = sendWithRetry.put(`/api/file/${fileKey}/comments/${comment.id}`, {
    message_meta: messageMeta,
    attachment_updates: getAttachmentChanges(attachmentUpdates),
    share_to_mentions: forceWithInvite || false,
    force: forceMention || false,
    pending_mentions: inviteTokens,
  }).then(({ data }: { data: ResponseData }) => {
    // Check if data has warning messages and handle them
    if (data && Object.prototype.hasOwnProperty.call(data, 'message') && data.message && data.message.warning_message && data.message.warning_message.length !== 0) {
      dispatch(VisualBellActions.enqueue({
        type: 'at-mention-error',
        message: data.message.warning_message,
      }))
    }
  }).catch((error) => {
    const failureInfo = error.data?.reason?.failure_info
    if (error.data?.reason?.reason !== 'comment_validation_failure'
      || failureInfo === undefined
      || !onCommentValidationFailure
      || forceMention
      || forceWithInvite) {
      return
    }

    onCommentValidationFailure(
      failureInfo.users_without_view,
      failureInfo.ext_users_without_view,
      failureInfo.uninvitable_users,
      { comment, messageMeta },
    )
  })

  const errorMessage = getI18nString('comments.an_error_occurred_while_editing_this_comment')
  dispatch(handlePromiseError({
    promise: updatePromise,
    fallbackError: errorMessage,
  }))

  const commentUuid = comment.uuid
  const normalizedMessageMeta = normalizeMessageMeta(messageMeta)

  // Optimistically update the comment in the live graph
  if (commentUuid) {
    getCurrentLiveGraphClient().optimisticallyUpdateWithUUID({
      Comment: {
        [commentUuid]: {
          uuid: commentUuid,
          messageMeta: normalizedMessageMeta,
          messageMetaStylized: normalizedMessageMeta,
        },
      },
    }, updatePromise)
  }
  else {
    getCurrentLiveGraphClient().optimisticallyUpdate({
      Comment: {
        [comment.id]: {
          messageMeta: normalizedMessageMeta,
          messageMetaStylized: normalizedMessageMeta,
        },
      },
    }, updatePromise)
  }

  trackEventAnalytics('Livegraph Optimistic Comment Update', {
    flow: 'updateCommentContent',
    isOptimistic: !!commentUuid,
  })

  // Handle attachment updates
  if (attachmentUpdates) {
    const emptyLookup = createEmptyLookup(attachmentUpdates.deleted)
    if (emptyLookup) {
      getCurrentLiveGraphClient().optimisticallyDelete({
        CommentAttachment: emptyLookup,
      }, updatePromise)
    }
    else {
      getCurrentLiveGraphClient().emitEvent({
        type: 'EMPTY_SYNC',
        source: 'comment_delete',
      })
    }

    const attachmentsLookup = createAttachmentsLookup(
      Object.values(attachmentUpdates.attachments),
      comment.key,
      comment.id,
    )

    if (attachmentsLookup) {
      getCurrentLiveGraphClient().optimisticallyCreate({
        CommentAttachment: attachmentsLookup,
      }, updatePromise)
    }
    else {
      getCurrentLiveGraphClient().emitEvent({
        type: 'EMPTY_SYNC',
        source: 'comment_create',
      })
    }
  }

  dispatch(setCommentContentAction())
})

/**
 * Marks a comment as unread
 * @origin $$V16
 */
export let markCommentAsUnread = createOptimistThunk((context, payload: MarkUnreadPayload) => {
  const { dispatch } = context
  const { receiptsAPI, comment } = payload

  receiptsAPI.markAsUnread(comment.id).catch((error) => {
    let errorMessage = getI18nString('comments.an_error_occurred_while_marking_a_comment_as_unread')
    try {
      const parsedError = JSON.parse(error)
      dispatch(FlashActions.error(resolveMessage(parsedError, errorMessage)))
    }
    catch (error) {
      // Intentionally unused error variable - using it to satisfy linter
      console.error('Error parsing error response:', error)
      dispatch(FlashActions.error(errorMessage))
    }
  })
})

/**
 * Marks a thread as read
 * @origin $$H2
 */
export let markThreadAsRead = createOptimistThunk((context, payload: MarkReadPayload) => {
  const { dispatch } = context
  const { receiptsAPI, thread } = payload

  receiptsAPI.markAsRead(thread.comments.map(comment => comment.id)).catch((error) => {
    let errorMessage = getI18nString('comments.an_error_occurred_while_marking_a_comment_as_read')
    try {
      const parsedError = JSON.parse(error)
      dispatch(FlashActions.error(resolveMessage(parsedError, errorMessage)))
    }
    catch (error) {
      // Intentionally unused error variable - using it to satisfy linter
      console.error('Error parsing error response:', error)
      dispatch(FlashActions.error(errorMessage))
    }
  })
})

/**
 * Marks all comments as read
 * @origin $$z21
 */
export let markAllCommentsAsRead = createOptimistThunk((context, payload: MarkAllReadPayload) => {
  const { dispatch } = context
  const { commentReceiptsAPI, canvasMentionReceiptsAPI } = payload

  // Mark comment receipts as read
  commentReceiptsAPI.markAllAsRead().catch((error) => {
    let errorMessage = getI18nString('comments.an_error_occurred_while_marking_a_comment_as_read')
    try {
      const parsedError = JSON.parse(error)
      dispatch(FlashActions.error(resolveMessage(parsedError, errorMessage)))
    }
    catch (error) {
      // Intentionally unused error variable - using it to satisfy linter
      console.error('Error parsing error response:', error)
      dispatch(FlashActions.error(errorMessage))
    }
  })

  // Mark canvas mention receipts as read
  canvasMentionReceiptsAPI.markAllAsRead().catch((error) => {
    let errorMessage = getI18nString('whiteboard.an_error_occurred_while_marking_a_canvas_mention_as_read')
    try {
      const parsedError = JSON.parse(error)
      dispatch(FlashActions.error(resolveMessage(parsedError, errorMessage)))
    }
    catch (error) {
      // Intentionally unused error variable - using it to satisfy linter
      console.error('Error parsing error response:', error)
      dispatch(FlashActions.error(errorMessage))
    }
  })
})

/**
 * Toggles a reaction on a comment
 * @origin $$W58
 */
export let toggleCommentReaction = createOptimistThunk((context, payload: ToggleReactionPayload) => {
  const { dispatch, getState } = context
  const { reactionsApi, id, emoji, quickReply } = payload

  const state = getState()

  // Handle emoji skin tone modifiers
  let processedEmoji = emoji
  if (isEmojiModifierBase(emoji) && getUserSkinToneShortcode() !== null) {
    const [baseEmoji] = splitEmojiAndSkinTone(emoji)
    processedEmoji = baseEmoji + getUserSkinToneShortcode()
  }

  const reactionPromise = reactionsApi.toggleReaction(id, processedEmoji, {
    prototype_mode: state.selectedView.view === 'prototype',
    selectedView: state.selectedView.view,
    quickReply,
  })

  const errorMessage = getI18nString('comments.an_error_occurred_while_toggling_a_comment_reaction')
  dispatch(handlePromiseError({
    promise: reactionPromise,
    fallbackError: errorMessage,
  }))
})

/**
 * Deletes a comment
 * @origin $$K10
 */
export let deleteComment = createOptimistThunk((context, payload: DeleteCommentPayload) => {
  const { dispatch } = context
  const { comment } = payload

  const { key, id, uuid, parent_id } = comment

  const deletePromise = sendWithRetry.del(`/api/file/${key}/comments/${id}`)
  const errorMessage = getI18nString('comments.an_error_occurred_while_deleting_this_comment')

  dispatch(handlePromiseError({
    promise: deletePromise,
    fallbackError: errorMessage,
  }))

  recordsWithRemove.remove(id)

  // Optimistically delete from live graph
  let optimistPromise
  if (uuid) {
    optimistPromise = getCurrentLiveGraphClient().optimisticallyDeleteWithUUID({
      Comment: {
        [uuid]: null,
      },
    }, deletePromise)
  }
  else {
    optimistPromise = getCurrentLiveGraphClient().optimisticallyDelete({
      Comment: {
        [id]: null,
      },
    }, deletePromise)
  }

  trackEventAnalytics('Livegraph Optimistic Comment Update', {
    flow: 'setDeleted',
    isOptimistic: !!uuid,
  })

  handleOptimistTransaction(optimistPromise, dispatch, deleteCommentAction({
    comment: {
      id,
      parent_id,
    },
  }))
})

/**
 * Handles switching or deactivating comment threads based on the active thread state
 * @origin $$Q29
 */
export let switchOrDeactivateCommentThread = createOptimistThunk((context, payload: { thread: { id: string }, skipDeactivatingExistingActiveComment?: boolean, source?: any, receiptsAPI?: any }) => {
  const { dispatch, getState } = context
  const state = getState()

  // If the target thread is already active, deactivate it
  if (state.comments.activeThread?.id === payload.thread.id) {
    dispatch(deactivateActiveComment())
    return
  }

  // Deactivate existing active thread if not skipped
  if (!payload.skipDeactivatingExistingActiveComment) {
    dispatch(deactivateActiveComment())
  }

  // If there is an active thread, activate the new one and reset related state
  if (isActiveThread(state.comments)) {
    dispatch(activateCommentThread(payload))
    atomStoreManager.set(_$$m as any, null)
  }
})

// Export with original name for backwards compatibility
export const $$Q29 = switchOrDeactivateCommentThread

/**
 * Resolves or unresolves a comment thread
 * @origin $$Y34
 */
export let resolveCommentThread = createOptimistThunk((context, payload: ResolveThreadPayload) => {
  const { dispatch, getState } = context
  const { thread, resolved } = payload
  const { key: fileKey, id: threadId, uuid: threadUuid } = thread

  const state = getState()

  // Handle undo resolve feature
  if (resolved && state.comments.activeThread?.id === threadId && !state.comments.showResolved) {
    dispatch(deactivateActiveComment())
  }

  if (resolved) {
    atomStoreManager.set(_$$R, false)
  }

  if (getFeatureFlags().comments_undo_resolve && resolved) {
    const undoAction = {
      text: getI18nString('comments.undo'),
      action: () => {
        dispatch(resolveCommentThread({
          thread: {
            key: fileKey,
            id: threadId,
            uuid: threadUuid,
          },
          resolved: false,
        }))
      },
    }

    dispatch(VisualBellActions.enqueue({
      message: getI18nString('comments.comment_resolved'),
      type: 'comment-resolved',
      button: undoAction,
      onDismiss: () => { },
    }))
  }

  recordsWithRemove.remove(threadId)

  const resolvedValue = resolved ? 'true' : 'false'
  const errorMessage = resolved
    ? getI18nString('comments.an_error_occurred_while_resolving_this_comment')
    : getI18nString('comments.an_error_occurred_while_unresolving_this_comment')

  // Handle UUID-based comments
  if (threadUuid && containsDash(threadId)) {
    const idPromise = getCurrentLiveGraphClient().getIdFromUuid('Comment', threadUuid).then((resolvedId) => {
      const updatePromise = sendWithRetry.put(`/api/file/${fileKey}/comments/${resolvedId}`, {
        resolved_at: resolvedValue,
      })

      dispatch(handlePromiseError({
        promise: updatePromise,
        fallbackError: errorMessage,
      }))

      return updatePromise
    })

    getCurrentLiveGraphClient().optimisticallyUpdateWithUUID({
      Comment: {
        [threadUuid]: {
          uuid: threadUuid,
          resolvedAt: resolved ? new Date() : null,
        },
      },
    }, idPromise)

    trackEventAnalytics('Livegraph Optimistic Comment Update', {
      flow: 'setResolvedUsingGetIdFromUUID',
      isOptimistic: true,
    })
  }
  else {
    // Handle regular ID-based comments
    const updatePromise = sendWithRetry.put(`/api/file/${fileKey}/comments/${threadId}`, {
      resolved_at: resolvedValue,
    })

    dispatch(handlePromiseError({
      promise: updatePromise,
      fallbackError: errorMessage,
    }))

    if (threadUuid) {
      getCurrentLiveGraphClient().optimisticallyUpdateWithUUID({
        Comment: {
          [threadUuid]: {
            uuid: threadUuid,
            resolvedAt: resolved ? new Date() : null,
          },
        },
      }, updatePromise)
    }
    else {
      getCurrentLiveGraphClient().optimisticallyUpdate({
        Comment: {
          [threadId]: {
            resolvedAt: resolved ? new Date() : null,
          },
        },
      }, updatePromise)
    }

    trackEventAnalytics('Livegraph Optimistic Comment Update', {
      flow: 'setResolved',
      isOptimistic: !!threadUuid,
    })
  }
})

/**
 * Moves a comment to a new position
 * @origin $$$33
 */
export let moveComment = createOptimistThunk((context, payload: MoveCommentPayload) => {
  const { dispatch } = context
  const { thread, clientMeta } = payload
  const { key: fileKey, id: threadId, uuid: threadUuid } = thread

  let updatePromise

  // Handle UUID-based comments
  if (threadUuid && containsDash(threadId)) {
    updatePromise = getCurrentLiveGraphClient().getIdFromUuid('Comment', threadUuid).then(resolvedId =>
      sendWithRetry.put(`/api/file/${fileKey}/comments/${resolvedId}`, {
        client_meta: clientMeta,
      }),
    )

    trackEventAnalytics('Livegraph Optimistic Comment Update', {
      flow: 'setClientMetaWithGetIdFromUUID',
      isOptimistic: true,
    })
  }
  else {
    // Handle regular ID-based comments
    updatePromise = sendWithRetry.put(`/api/file/${fileKey}/comments/${threadId}`, {
      client_meta: clientMeta,
    })

    trackEventAnalytics('Livegraph Optimistic Comment Update', {
      flow: 'setClientMeta',
      isOptimistic: !!threadUuid,
    })
  }

  const errorMessage = getI18nString('comments.an_error_occurred_while_moving_this_comment')
  dispatch(handlePromiseError({
    promise: updatePromise,
    fallbackError: errorMessage,
  }))

  // Optimistically update in live graph
  if (threadUuid) {
    getCurrentLiveGraphClient().optimisticallyUpdateWithUUID({
      Comment: {
        [threadUuid]: {
          uuid: threadUuid,
          clientMeta: {
            x: clientMeta.x,
            y: clientMeta.y,
            pageId: clientMeta.page_id === undefined ? null : clientMeta.page_id,
            nodeId: clientMeta.node_id === undefined ? null : clientMeta.node_id,
            nodeOffset: clientMeta.node_offset === undefined ? null : clientMeta.node_offset,
            inFrame: clientMeta.in_frame === undefined ? null : clientMeta.in_frame,
            selectionBoxAnchor: clientMeta.selection_box_anchor ? clientMeta.selection_box_anchor : null,
            stablePath: clientMeta.stable_path ? clientMeta.stable_path : null,
          },
        },
      },
    }, updatePromise)
  }
  else {
    getCurrentLiveGraphClient().optimisticallyUpdate({
      Comment: {
        [threadId]: {
          clientMeta: {
            x: clientMeta.x,
            y: clientMeta.y,
            pageId: clientMeta.page_id === undefined ? null : clientMeta.page_id,
            nodeId: clientMeta.node_id === undefined ? null : clientMeta.node_id,
            nodeOffset: clientMeta.node_offset === undefined ? null : clientMeta.node_offset,
            inFrame: clientMeta.in_frame === undefined ? null : clientMeta.in_frame,
            selectionBoxAnchor: clientMeta.selection_box_anchor ? clientMeta.selection_box_anchor : null,
            stablePath: clientMeta.stable_path ? clientMeta.stable_path : null,
          },
        },
      },
    }, updatePromise)
  }
})

/**
 * Sets a comment's content
 * @origin $$X48
 */
export let setCommentContentAction = createActionCreator('COMMENTS_SET_COMMENT_CONTENT')

/**
 * Activates a comment thread
 * @origin $$J3
 */
export let activateCommentThread = createOptimistThunk(async (context, payload: any) => {
  const { dispatch, getState } = context
  const { thread, source, receiptsAPI } = payload

  const activationResult = dispatch(activateCommentThreadInternal(payload))
  if (!activationResult || thread.isPendingFromSinatra)
    return

  const firstComment = thread.comments[0]
  if (!firstComment)
    return

  const state = getState()
  const nodeId = firstComment.client_meta?.node_id
  let stablePath = firstComment.client_meta?.stable_path ? firstComment.client_meta.stable_path : defaultSessionLocalIDStringArray

  if (!stablePath && nodeId) {
    stablePath = [nodeId]
  }

  const threadId = thread.id

  // Handle community hub view
  if (firstComment.client_meta?.page_id && state.selectedView.view === 'communityHub') {
    if (threadId !== state.selectedView.commentThreadId) {
      dispatch(selectViewAction({
        ...state.selectedView,
        commentThreadId: threadId,
      }))
    }

    if (state.selectedView.commentThreadId) {
      trackEventAnalytics('Comment Thread Read', {
        commentThreadId: threadId,
        threadType: 'community_preview',
      })
    }
  }

  await activationResult

  dispatch(setActiveComment({
    threadId,
    source,
  }))

  // Mark thread as read if it has unread comments
  if (thread.comments.some(comment => comment.isUnread)
    && receiptsAPI
    && !thread.isPendingFromSinatra
    && !thread.isCanvasMention) {
    dispatch(markThreadAsRead({
      receiptsAPI,
      thread,
    }))

    trackEventAnalytics('Comment Thread Read', {
      commentThreadId: threadId,
    })
  }

  // Handle fullscreen view
  if (state.selectedView.view === 'fullscreen') {
    Fullscreen.setActiveCommentAnchorData({
      stablePath: `[${stablePath.join(',')}]`,
    })
  }
})

/**
 * Internal function to activate a comment thread
 * @origin $$Z38
 */
export let activateCommentThreadInternal = createOptimistThunk((context, payload: any) => {
  const { dispatch, getState } = context
  const { thread, viewport, config, navigate, isOrphanedComment, skipDeactivatingExistingActiveComment } = payload

  const state = getState()

  // Deactivate existing active comment if needed
  if (state.comments.activeThread
    && state.comments.activeThread.id !== thread.id
    && !skipDeactivatingExistingActiveComment
    && !dispatch(deactivateActiveComment())) {
    return null
  }

  const freshState = getState()
  const { setCurrentPageIdAsync, pageIdForNodeId } = viewport

  if (!viewport.getViewportInfo())
    return null

  const firstComment = thread.comments[0]
  if (!firstComment)
    return null

  const nodeId = firstComment.client_meta?.node_id
  const pageId = thread.page || (nodeId && pageIdForNodeId(nodeId)) || firstComment.client_meta?.page_id

  const promises: Promise<any>[] = []
  const currentPage = freshState.mirror?.appModel?.currentPage
  let pageChanged = false

  // Change page if needed
  if (pageId) {
    pageChanged = currentPage !== pageId
    promises.push(setCurrentPageIdAsync(pageId).then(async () => {
      if (pageChanged) {
        await waitForAnimationFrame()
      }
    }))
  }

  const isCommentsTool = freshState.mirror.appModel.currentTool === DesignGraphElements.COMMENTS

  // Reposition viewport if needed
  if (!isOrphanedComment && config.repositionViewportOnCommentSelection) {
    const viewportPromise = navigate(calculateCommentPinViewport(thread, viewport, freshState.selectedView, pageChanged, isCommentsTool), {
      jump: pageChanged,
      jumpOnAbort: true,
    })

    if (viewportPromise) {
      promises.push(viewportPromise)
    }
  }

  return Promise.all(promises).then()
})

/**
 * Deactivates the active comment
 * @origin $$ea23
 */
export let deactivateActiveComment = createOptimistThunk((context, payload: any) => {
  const { dispatch, getState } = context
  const force = payload instanceof Object ? payload.force : false

  const state = getState()
  const { newComment } = state.comments
  const activeThreadId = state.comments.activeThread?.id

  const isNewCommentEmpty = isMessageMetaTooShort(newComment.messageMeta)
    && Object.keys(newComment.attachments).length === 0

  // If not forced and new comment is not empty or thread is active, cancel deactivation
  if (!force && !isNewCommentEmpty && !isActiveThread(state.comments)) {
    dispatch(cancelNewComment())
    return false
  }

  const activeThread = activeThreadId && state.comments.threads[activeThreadId]
  const isReplyEmpty = activeThread
    && isMessageMetaTooShort(activeThread.reply.messageMeta)
    && Object.keys(activeThread.reply.attachments || {}).length === 0

  // If not forced and active thread has content, show discard attempt
  if (!force
    && activeThreadId
    && activeThread
    && !isReplyEmpty
    && (!activeThread.discardAttempts || activeThread.discardAttempts < 1)) {
    dispatch(discardCommentReplyAttempt(activeThreadId))
    return false
  }

  const editingComment = state.comments.editingComment

  // If not forced and editing a comment, show discard attempt
  if (!force && editingComment) {
    dispatch(discardCommentReplyAttempt(editingComment.id))
    return false
  }

  // Reset UI state
  if (state.selectedView.view === 'fullscreen') {
    Fullscreen.setActiveCommentAnchorData({
      stablePath: defaultSessionLocalIDArrayString,
    })
  }

  if (state.selectedView.view === 'communityHub') {
    dispatch(selectViewAction({
      ...state.selectedView,
      commentThreadId: undefined,
    }))
  }

  atomStoreManager.set(_$$R, false)
  dispatch(resetComments())
  dispatch(resetActiveCommentId())
  dispatch(resetNewComment({ resetStatusOnly: false }))

  if (state.tooltip) {
    dispatch(hideTooltip())
  }

  return true
})

/**
 * Sets a new comment as active
 * @origin $$es0
 */
let setNewCommentActive = createActionCreator('COMMENTS_SET_NEW_COMMENT_ACTIVE')

/**
 * Activates a new comment
 * @origin $$eo5
 */
export let activateNewComment = createOptimistThunk((context, payload: any) => {
  const { dispatch, getState } = context
  const state = getState()

  // Handle fullscreen view
  if (state.selectedView.view === 'fullscreen') {
    if (state.comments.newComment.anchorPosition) {
      const { x, y } = state.comments.newComment.anchorPosition
      const stablePath = payload?.stablePath

      if (stablePath) {
        Fullscreen.setActiveCommentAnchorData({
          stablePath: `[${stablePath.join(',')}]`,
        })
      }
      else {
        Fullscreen.setActiveCommentAnchorData(Fullscreen.getCommentAnchorDataAtPosition(x, y))
      }
    }
    else {
      Fullscreen.setActiveCommentAnchorData({
        stablePath: defaultSessionLocalIDArrayString,
      })
    }
  }

  dispatch(setNewCommentActive(payload))
})

/**
 * Creates a reply to a comment thread
 * @origin $$er40
 */
export let createCommentReply = createOptimistThunk((context, payload: CreateCommentPayload) => {
  const { dispatch, getState } = context
  const state = getState()
  const { commentsWriteApi, commentsConfiguration, threadId, threadUuid, uuid, forceMention, forceWithInvite, onCommentValidationFailure, trackingContext } = payload

  const thread = state.comments.threads[threadId]
  const [replyPromise, _requestId] = commentsWriteApi.reply({
    threadId,
    threadUuid,
    uuid,
    messageMeta: thread.reply.messageMeta,
    attachments: Object.values(thread.reply.attachments || {}),
  }, {
    forceMention: forceMention || false,
    forceWithInvite: forceWithInvite || false,
    prototypeMode: state.selectedView.view === 'prototype',
    trackingContext,
  })

  // Handle faster saving UX
  if (getFeatureFlags().comments_faster_saving_ux && !getFeatureFlags().comments_faster_saving_ux_v2) {
    dispatch(setCommentSaving({ commentUuid: uuid }))
  }

  // Reset reply state
  dispatch(setCommentReply({
    threadId,
    reply: {
      messageMeta: [],
      attachments: {},
    },
  }))

  replyPromise.then((response) => {
    if (!response)
      return

    const { data }: { data: ResponseData } = response

    // Handle warning messages
    if (data && Object.prototype.hasOwnProperty.call(data, 'message') && data.message && data.message.warning_message && data.message.warning_message.length !== 0) {
      dispatch(VisualBellActions.enqueue({
        type: 'at-mention-error',
        message: data.message.warning_message,
      }))
    }

    // Handle new file follower
    if (data && Object.prototype.hasOwnProperty.call(data, 'message') && data.message && data.message.is_new_file_follower) {
      const manageButton = commentsConfiguration.showNotificationSettings
        ? {
          text: getI18nString('comments.manage'),
          action: () => {
            const freshState = getState()
            dispatch(deactivateActiveComment())

            if (!freshState.mirror.appModel.showUi) {
              fullscreenValue.triggerAction('toggle-ui')
            }

            if (freshState.mirror.appModel.currentTool !== DesignGraphElements.COMMENTS) {
              fullscreenValue.triggerAction('set-tool-comments')
            }

            requestAnimationFrame(() => {
              openResiger()
            })
          },
        }
        : undefined

      dispatch(VisualBellActions.enqueue({
        message: getI18nString('comments.you_will_be_notified_about_replies'),
        type: 'comments-opted-in',
        button: manageButton,
        onDismiss: () => { },
      }))
    }

    const comment = data.meta
    dispatch(handleNewComment({
      comment,
      userInitiated: false,
    }))

    trackFileEvent('Comment Submitted', comment.key, state, {
      commentId: comment.id,
      parentCommentId: comment.id,
      selectedView: state.selectedView.view,
      isDevModeFocusView: !!getState().selectedView?.devModeFocusId,
    })

    // Handle faster saving UX v2
    if (getFeatureFlags().comments_faster_saving_ux_v2 && comment.id && comment.uuid) {
      dispatch(storeServerIdForPendingUuid({
        commentId: comment.id,
        commentUuid: comment.uuid,
      }))
    }

    // Set user flag for first comment creation
    if (!getState().userFlags.has_created_comment) {
      dispatch(postUserFlag({
        has_created_comment: true,
      }))
    }
  }).catch((error) => {
    const failureInfo = error.data?.reason?.failure_info

    // Handle comment validation failure
    if (error.data?.reason?.reason !== 'comment_validation_failure'
      || failureInfo === undefined
      || !onCommentValidationFailure
      || forceMention
      || forceWithInvite) {
      const errorMessage = resolveMessage(error, getI18nString('comments.an_error_occurred'))
      dispatch(FlashActions.error(errorMessage))
      dispatch(resetCommentThread({
        threadId,
        resetStatusOnly: true,
      }))
      dispatch(setCommentReply({
        threadId,
        reply: thread.reply,
      }))
      return
    }

    onCommentValidationFailure(
      failureInfo.users_without_view,
      failureInfo.ext_users_without_view,
      failureInfo.uninvitable_users,
      { threadId, messageMeta: thread.reply.messageMeta, attachments: thread.reply.attachments },
    )
  }).finally(() => {
    // Clear saving state
    if (getFeatureFlags().comments_faster_saving_ux && !getFeatureFlags().comments_faster_saving_ux_v2) {
      dispatch(clearCommentSaving({ commentUuid: uuid }))
    }
  })

  dispatch(submitCommentReply(payload))
})

/**
 * Creates a new comment
 * @origin $$ei26
 */
export let createNewComment = createOptimistThunk((context, payload: NewCommentPayload) => {
  const { dispatch, getState } = context
  const { uuid, commentsWriteApi, commentsConfiguration, destination, newCommentState } = payload

  trackEventAnalytics('New comment starting dispatched action', { uuid })

  const state = getState()
  const fileKey = getFileKeyFromSelectedView(state.selectedView)

  if (!fileKey)
    return Promise.resolve()

  const newComment = newCommentState || state.comments.newComment
  const { canvasPosition, nodeId, nodeOffset, inFrame, pageId, viewport, stablePath } = destination
  const selectionBoxAnchor = newComment.selectionBoxAnchor ? newComment.selectionBoxAnchor : undefined

  // Deactivate current comment and reset new comment state
  dispatch(deactivateActiveComment({ force: true }))
  dispatch(resetNewComment({ resetStatusOnly: false }))

  const { messageMeta, attachments } = newComment

  trackEventAnalytics('New comment creating promise', { uuid })

  const [createPromise, _requestId] = commentsWriteApi.create({
    fileKey,
    messageMeta,
    attachments: Object.values(attachments),
    pageId,
    uuid,
    clientMeta: {
      x: canvasPosition.x,
      y: canvasPosition.y,
      node_id: nodeId,
      node_offset: nodeOffset,
      page_id: pageId,
      viewport,
      in_frame: inFrame,
      selection_box_anchor: selectionBoxAnchor,
      stable_path: stablePath,
    },
  }, {
    prototypeMode: state.selectedView.view === 'prototype',
    onValidationError: async (usersWithoutAccess, externalUsersWithoutAccess, uninvitableUsers) => {
      // Show confirmation modal
      if (await showCommentMentionConfirmationModal(messageMeta, dispatch, usersWithoutAccess, externalUsersWithoutAccess, uninvitableUsers)) {
        return {
          forceMentions: true,
          forceWithInvite: true,
        }
      }

      // Handle validation error
      if (getState().comments.newComment.messageMeta.length !== 0) {
        dispatch(resetNewComment({ resetStatusOnly: true }))

        const viewAction = {
          text: getI18nString('comments.view'),
          action: (event: any, bellId: string) => {
            if (getState().comments.activeThread?.id === NEW_COMMENT_ID
              && getState().comments.newComment.messageMeta.length > 0) {
              dispatch(cancelNewComment())
              dispatch(VisualBellActions.update({
                id: bellId,
                message: getI18nString('comments.finish_or_clear_your_active_comment_then_hit_view'),
              }))
              return false
            }

            dispatch(revertNewComment(newComment))
            dispatch(activateNewComment())
          },
        }

        dispatch(VisualBellActions.enqueue({
          type: `comment-creation-failure: ${_requestId}`,
          error: false,
          message: getI18nString('comments.oops_one_of_your_comments_never_posted'),
          onDismiss: () => { },
          button: viewAction,
          timeoutOverride: Infinity,
        }))

        return
      }

      dispatch(revertNewComment(newComment))
      dispatch(activateNewComment())
      dispatch(cancelNewComment())
    },
  })

  // Handle faster saving UX
  if (getFeatureFlags().comments_faster_saving_ux && !getFeatureFlags().comments_faster_saving_ux_v2) {
    dispatch(setCommentSaving({ commentUuid: uuid }))
  }

  dispatch(submitNewComment(payload))

  return createPromise.then((response) => {
    trackEventAnalytics('New comment promise resolved', { uuid })

    if (!response)
      return

    const { data }: { data: ResponseData } = response

    // Check if file key changed during creation
    if (getFileKeyFromSelectedView(getState().selectedView) !== fileKey)
      return

    // Handle warning messages
    if (data && Object.prototype.hasOwnProperty.call(data, 'message') && data.message && data.message.warning_message && data.message.warning_message.length !== 0) {
      dispatch(VisualBellActions.enqueue({
        type: 'at-mention-error',
        message: data.message.warning_message,
      }))
    }

    // Handle new file follower
    if (data && Object.prototype.hasOwnProperty.call(data, 'message') && data.message && data.message.is_new_file_follower) {
      const manageButton = commentsConfiguration.showNotificationSettings
        ? {
          text: getI18nString('comments.manage'),
          action: () => {
            const freshState = getState()
            dispatch(deactivateActiveComment({ force: true }))

            if (!freshState.mirror.appModel.showUi) {
              fullscreenValue.triggerAction('toggle-ui')
            }

            if (freshState.mirror.appModel.currentTool !== DesignGraphElements.COMMENTS) {
              fullscreenValue.triggerAction('set-tool-comments')
            }

            requestAnimationFrame(() => {
              openResiger()
            })
          },
        }
        : undefined

      dispatch(VisualBellActions.enqueue({
        message: getI18nString('comments.you_will_be_notified_about_replies'),
        type: 'comments-opted-in',
        button: manageButton,
        onDismiss: () => { },
      }))
    }

    const comment = data.meta
    try {
      // Cast to any to avoid type issues with atomStoreManager
      (atomStoreManager as any).set(onboardingCommentIdAtom, comment.id)
    }
    catch (error) {
      // Intentionally unused error variable - using it to satisfy linter
      console.error('Error setting onboarding comment ID:', error)
    }

    const isNewCommentChanged = getState().comments.newComment !== newComment
    dispatch(resetNewComment({ resetStatusOnly: isNewCommentChanged }))

    // Handle faster saving UX v2
    if (getFeatureFlags().comments_faster_saving_ux_v2 && comment.id && comment.uuid) {
      dispatch(storeServerIdForPendingUuid({
        commentId: comment.id,
        commentUuid: comment.uuid,
      }))
    }

    trackFileEvent('Comment Submitted', fileKey, state, {
      commentId: comment.id,
      locationX: canvasPosition && canvasPosition.x,
      locationY: canvasPosition && canvasPosition.y,
      nodeId,
      pageId,
      nodeOffsetX: nodeOffset && nodeOffset.x,
      nodeOffsetY: nodeOffset && nodeOffset.y,
      selectedView: state.selectedView.view,
      stablePath,
      isDevModeFocusView: !!getState().selectedView?.devModeFocusId,
    })

    // Set user flag for first comment creation
    if (!getState().userFlags.has_created_comment) {
      dispatch(postUserFlag({
        has_created_comment: true,
      }))
    }

    dispatch(lastCreatedCommentIdAction({
      lastCreatedCommentId: comment.id,
    }))
  }).catch((error) => {
    dispatch(resetNewComment({ resetStatusOnly: true }))

    // Handle client-side errors
    if (!(error?.data?.status >= 400 && error?.data?.status < 500 && error?.data?.message)) {
      return dispatch(VisualBellActions.enqueue({
        type: `comment-creation-failure: ${_requestId}`,
        message: getI18nString('comments.couldn_t_post_your_comment'),
        error: true,
        button: {
          text: getI18nString('comments.retry'),
          action() {
            trackEventAnalytics('New comment dispatching retry submission', { uuid })
            dispatch(createNewComment({
              ...payload,
              newCommentState: newComment,
            }))
          },
        },
      }))
    }

    // Handle server-side errors
    const errorMessage = resolveMessage(error)
    if (errorMessage) {
      return dispatch(VisualBellActions.enqueue({
        type: `comment-creation-failure: ${_requestId}`,
        message: errorMessage,
        error: true,
      }))
    }
  }).finally(() => {
    // Clear saving state
    if (getFeatureFlags().comments_faster_saving_ux && !getFeatureFlags().comments_faster_saving_ux_v2) {
      dispatch(clearCommentSaving({ commentUuid: uuid }))
    }
  })
})
/**
 * Tracks analytics for at-mention search started in community subviews
 * @origin $$ef17
 */
export let trackAtMentionSearchStarted = createOptimistThunk((context) => {
  const { getState } = context
  const state = getState()
  const selectedView = state.selectedView

  // Early return if not in a subview
  if (!('subView' in selectedView)) {
    return
  }

  // Early return if subview is not hubFile or plugin
  if (selectedView.subView !== 'hubFile' && selectedView.subView !== 'plugin') {
    return
  }

  trackEventAnalytics('at_mention_search_started', {
    comment_type: state.comments.activeThread?.id ? 'community_pinned' : 'community_general',
    profile_id: state.user?.community_profile_id,
    resource_id: selectedView.subView === 'hubFile' ? selectedView.hubFileId : selectedView.publishedPluginId,
    resource_type: selectedView.subView === 'hubFile' ? 'hub_file' : 'plugin',
  })
})

// Action creators
export let setNewSelectionBoxAnchorPosition = createActionCreator('COMMENTS_SET_NEW_SELECTION_BOX_ANCHOR_POSITION')
export let setNewAnchorPosition = createActionCreator('COMMENTS_SET_NEW_ANCHOR_POSITION')
export let removeHoveredPin = createActionCreator('COMMENTS_REMOVE_HOVERED_PIN')
export let addHoveredPin = createActionCreator('COMMENTS_ADD_HOVERED_PIN')
export let removeEmphasizedPin = createActionCreator('COMMENTS_REMOVE_EMPHASIZED_PIN')
export let addEmphasizedPin = createActionCreator('COMMENTS_ADD_EMPHASIZED_PIN')
export let setActiveComment = createActionCreator('COMMENTS_SET_ACTIVE')
export let setTypeaheadPositionOffset = createActionCreator('COMMENTS_SET_TYPEAHEAD_POSITION_OFFSET')
export let setTypeahead = createActionCreator('COMMENTS_SET_TYPEAHEAD')
export let showEmojiPicker = createActionCreator('COMMENTS_SHOW_EMOJI_PICKER')
export let setActiveSort = createActionCreator('COMMENTS_SET_ACTIVE_SORT')
export let discardCommentReplyAttempt = createActionCreator('COMMENTS_DISCARD_COMMENT_REPLY_ATTEMPT')
export let discardNewCommentAttempt = createActionCreator('COMMENTS_DISCARD_NEW_COMMENT_ATTEMPT')
export let setShowOnlyMyComments = createActionCreator('COMMENTS_SET_SHOW_ONLY_MY_COMMENTS')
export let setShowResolvedComments = createActionCreator('COMMENTS_SET_SHOW_RESOLVED_COMMENTS')
export let revertNewComment = createActionCreator('COMMENTS_REVERT_NEW_COMMENT')
export let resetNewComment = createActionCreator('COMMENTS_RESET_NEW_COMMENT')
export let resetCommentThread = createActionCreator('COMMENTS_RESET_THREAD')
export let setNewCommentAttachment = createActionCreator('COMMENTS_SET_NEW_COMMENT_ATTACHMENT')
export let setNewCommentMessage = createActionCreator('COMMENTS_SET_NEW_COMMENT_MESSAGE')
export let setNewComment = createActionCreator('COMMENTS_SET_NEW_COMMENT')
export let setCommentReplyAttachment = createActionCreator('COMMENTS_SET_REPLY_ATTACHMENT')
export let setCommentReplyMessage = createActionCreator('COMMENTS_SET_REPLY_MESSAGE')
export let setCommentReply = createActionCreator('COMMENTS_SET_REPLY')
export let setEditingAttachment = createActionCreator('COMMENTS_SET_EDITING_ATTACHMENT')
export let setEditingComment = createActionCreator('COMMENTS_SET_EDITING')
export let setActiveDragTarget = createActionCreator('COMMENTS_SET_ACTIVE_DRAG_TARGET')
export let setCommentSaving = createActionCreator('COMMENTS_SET_SAVING')
export let clearCommentSaving = createActionCreator('COMMENTS_CLEAR_SAVING')
export let storeServerIdForPendingUuid = createActionCreator('COMMENTS_STORE_SERVER_ID_FOR_LG_PENDING_UUID')
export let clearPendingUuid = createActionCreator('COMMENTS_CLEAR_LG_PENDING_UUID')
export let deleteCommentAction = createActionCreator('COMMENTS_DEL')
export let resetComments = createActionCreator('COMMENTS_RESET')
export let resetActiveCommentId = createActionCreator('COMMENTS_RESET_ACTIVE_ID')
export let submitCommentReply = createActionCreator('COMMENTS_SUBMIT_REPLY')
export let submitNewComment = createActionCreator('COMMENTS_SUBMIT_NEW_COMMENT')
export let stopEditingComment = createActionCreator('COMMENTS_STOP_EDITING')
export let cancelNewComment = createActionCreator('COMMENTS_CANCEL_NEW_COMMENT')

/**
 * Handles a new comment being created
 * @origin eW
 */
export let handleNewComment = createOptimistThunk((context, payload: EditCommentPayload) => {
  const { dispatch, getState } = context
  const { comment, userInitiated } = payload

  const state = getState()
  const currentUser = state.user

  // If this is our own comment and it wasn't user-initiated, handle special cases
  if (currentUser && currentUser.id === comment.user_id && !userInitiated) {
    if (comment.parent_id) {
      // Handle reply comments
      const thread = state.comments.threads[comment.parent_id]
      if (thread && thread.state === BusyReadyState.BUSY) {
        const shouldReset = !(function compareMessageMeta(a: any[], b: any[]): boolean {
          if (!a)
            return !b
          if (!b)
            return !a
          if (a.length !== b.length)
            return false

          for (let i = 0; i < a.length; i++) {
            const itemA = a[i]
            const itemB = b[i]
            const keysA = new Set(Object.keys(itemA))
            const keysB = Object.keys(itemB)

            if (keysA.size !== keysB.length || !keysB.every(key => !!keysA.has(key) && itemA[key] === itemB[key])) {
              return false
            }
          }

          return true
        }(payload.comment.message_meta, thread.reply.messageMeta))

        dispatch(resetCommentThread({
          threadId: comment.parent_id,
          resetStatusOnly: shouldReset,
        }))
      }
    }
    else {
      // Handle new comments
      const newComment = state.comments.newComment
      if (newComment && newComment.state === BusyReadyState.BUSY) {
        dispatch(deactivateActiveComment({ force: true }))
      }

      dispatch(resetNewComment({ resetStatusOnly: false }))
    }
  }
})

/**
 * Handles comment reply creation with user confirmation for mentions
 * @param context - The thunk context containing dispatch and getState
 * @param payload - The payload containing reply data and configuration
 * @origin $$B31
 */
export async function handleCommentReplyWithConfirmation(
  context: { dispatch: (action: any) => void },
  payload: {
    commentsWriteApi: any
    usersWithoutAccess: any[]
    externalUsersWithoutAccess: any[]
    uninvitableUsers: any[]
    threadData: {
      threadId: string
      threadUuid?: string
      messageMeta: any[]
      attachments?: Record<string, any>
    }
    uuid: string
    commentsConfiguration: any
  },
): Promise<void> {
  const { dispatch } = context
  const {
    commentsWriteApi,
    usersWithoutAccess,
    externalUsersWithoutAccess,
    uninvitableUsers,
    threadData,
    uuid,
    commentsConfiguration,
  } = payload

  try {
    const userConfirmed = await showCommentMentionConfirmationModal(
      threadData.messageMeta,
      dispatch,
      usersWithoutAccess,
      externalUsersWithoutAccess,
      uninvitableUsers,
    )

    // Set the reply content
    dispatch(setCommentReply({
      threadId: threadData.threadId,
      reply: {
        messageMeta: threadData.messageMeta,
        attachments: threadData.attachments || {},
      },
    }))

    // Create the comment reply with user confirmation status
    dispatch(createCommentReply({
      commentsWriteApi,
      threadId: threadData.threadId,
      threadUuid: threadData.threadUuid,
      uuid,
      forceWithInvite: userConfirmed,
      forceMention: userConfirmed,
      onCommentValidationFailure: undefined,
      commentsConfiguration,
    }))
  }
  catch (error) {
    // Handle any errors that occur during the confirmation process
    captureMessage('Comment reply confirmation failed', error)

    // Reset the comment reply state on error
    dispatch(createCommentReply({
      threadId: threadData.threadId,
      resetStatusOnly: true,
    }))

    // Restore the original reply content
    dispatch(setCommentReply({
      threadId: threadData.threadId,
      reply: {
        messageMeta: threadData.messageMeta,
        attachments: threadData.attachments || {},
      },
    }))
  }
}

// Export with original name for backwards compatibility
export const $$B31 = handleCommentReplyWithConfirmation

// Exported functions with descriptive names
export const $0 = setNewCommentActive
export const $M = resetNewComment
export const AY = markThreadAsRead
export const At = activateCommentThread
export const C = handleCommentUpdateWithConfirmation // Original: C
export const CX = activateNewComment // Original: CX
export const Df = setEditingComment // Original: Df
export const F8 = setNewSelectionBoxAnchorPosition // Original: F8
export const Fm = setActiveComment // Original: Fm
export const Jc = setCommentReply // Original: Jc
export const Mv = deleteComment // Original: Mv
export const NJ = addEmphasizedPin // Original: NJ
export const Oo = removeEmphasizedPin // Original: Oo
export const PB = revertNewComment // Original: PB
export const Q8 = setNewAnchorPosition // Original: Q8
export const QD = setCommentReplyAttachment // Original: QD
export const QY = markCommentAsUnread // Original: QY
export const Qe = trackAtMentionSearchStarted // Original: Qe
export const RI = showEmojiPicker // Original: RI
export const RO = setShowOnlyMyComments // Original: RO
export const RP = removeHoveredPin // Original: RP
export const Tb = markAllCommentsAsRead // Original: Tb
export const U3 = setShowResolvedComments // Original: U3
export const UU = deactivateActiveComment
export const We = setTypeahead
export const Z5 = setNewCommentMessage
export const _B = createNewComment
export const _v = updateCommentContent
export const a$ = setNewSelectionBoxAnchorPosition
export const bB = switchOrDeactivateCommentThread
export const cL = resetComments
export const dB = handleCommentReplyWithConfirmation
export const gi = submitCommentReply
export const hY = moveComment
export const hx = resolveCommentThread
export const i4 = setTypeaheadPositionOffset
export const js = resetActiveCommentId
export const k7 = setCommentReplyMessage
export const l5 = activateCommentThreadInternal
export const lI = submitNewComment
export const lV = createCommentReply
export const li = setCommentSaving
export const nL = setActiveSort
export const nb = setNewCommentAttachment
export const on = setNewComment
export const pD = stopEditingComment
export const pI = clearPendingUuid
export const q4 = resetCommentThread
export const rW = setCommentContentAction
export const sQ = discardCommentReplyAttempt
export const uy = setEditingAttachment
export const uz = setActiveDragTarget
export const vV = setNewAnchorPosition
export const wJ = clearCommentSaving
export const wg = addHoveredPin
export const xH = discardNewCommentAttempt
export const y3 = storeServerIdForPendingUuid
export const yH = deleteCommentAction
export const z$ = toggleCommentReaction
