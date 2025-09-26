import { createActionCreator } from '../905/73481'
import { resolveMessage } from '../905/231762'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { createOptimistAction, createOptimistThunk } from '../905/350402'
import { NEW_COMMENT_ID } from '../905/380385'
import { createOptimistCommitAction, createOptimistRevertAction } from '../905/676456'
import { sendWithRetry } from '../905/910117'

// Action creators for comment operations
export const commitCreatedComment = createActionCreator('GENERIC_COMMENT_COMMIT_CREATED_COMMENT')
export const commitEditedComment = createActionCreator('GENERIC_COMMENT_COMMIT_EDITED_COMMENT')
export const commitDeletedComment = createActionCreator('GENERIC_COMMENT_COMMIT_DELETED_COMMENT')
export const commitHideComment = createActionCreator('GENERIC_COMMENT_COMMIT_HIDE_COMMENT')
export const setShowResolved = createActionCreator('GENERIC_COMMENT_SET_SHOW_RESOLVED')

export const resetCommentStatus = createActionCreator('GENERIC_COMMENT_RESET_COMMENT_STATUS')
export const submitComment = createActionCreator('GENERIC_COMMENT_SUBMIT')

/**
 * Thunk to remove all comments by a specific author
 * @param {object} params - The parameters
 * @param {string} params.authorId - The ID of the author whose comments should be removed
 * @param {Function} params.removeCommentsCallback - Callback function to handle comment removal
 */
export const removeCommentsByAuthor = createOptimistThunk(async (context, params) => {
  const { authorId, removeCommentsCallback } = params
  const commentsState = context.getState().communityHub.comments
  const { activeFeedType, commentsById, id, type } = commentsState

  // Validate required data exists
  if (!id || !type || !commentsState.feeds[activeFeedType]?.feed) {
    return
  }

  // Find all comments by the specified author
  const commentsToRemove: any[] = []
  for (const commentId in commentsById) {
    const comment = commentsById[commentId]
    if (comment?.author.id === authorId) {
      commentsToRemove.push(comment)
    }
  }

  // Execute the removal callback and dispatch the commit action
  await removeCommentsCallback(commentsToRemove)
  context.dispatch(commitDeletedComment({
    resourceType: type,
    resourceId: id,
    comments: commentsToRemove,
  }))
})

/**
 * Thunk to create a new comment
 * @param {object} params - The comment parameters
 * @param {object} params.messageMeta - Metadata for the comment message
 * @param {string} params.resourceId - The ID of the resource being commented on
 * @param {string} params.resourceType - The type of the resource being commented on
 * @param {Function} params.onSuccess - Callback for successful creation
 * @param {Function} params.onError - Callback for error handling
 * @param {object} params.clientMeta - Client metadata
 * @param {string} params.pageId - The page ID
 * @param {string} params.parentId - The parent comment ID (for replies)
 * @param {boolean} params.isReply - Whether this is a reply to another comment
 */
export const createComment = createOptimistThunk(async ({ dispatch }, params) => {
  const {
    messageMeta,
    resourceId,
    resourceType,
    onSuccess,
    onError,
    clientMeta,
    pageId,
    parentId,
    isReply,
  } = params

  try {
    const response = await sendWithRetry.post('/api/community_comments', {
      message_meta: messageMeta,
      resource_id: resourceId,
      resource_type: resourceType,
      client_meta: clientMeta,
      page_id: pageId,
      parent_id: parentId,
    })

    dispatch(commitCreatedComment({
      comment: response.data.meta,
      resourceId,
      resourceType,
      isReply,
    }))

    onSuccess && onSuccess(response.data.meta)
  }
  catch (error) {
    const errorMessage = resolveMessage(error)
    if (errorMessage) {
      dispatch(VisualBellActions.enqueue({
        error: true,
        message: getI18nString('community.comments.failed_to_create_comment', {
          errorMessage,
        }),
      }))

      // Reset comment status based on whether it's a reply or new comment
      if (parentId) {
        dispatch(resetCommentStatus({
          commentId: parentId,
        }))
      }
      else {
        dispatch(resetCommentStatus({
          commentId: NEW_COMMENT_ID,
        }))
      }

      onError && onError()
    }
  }

  dispatch(submitComment(params))
}, ({
  resourceId,
}) => `GENERIC_COMMENT_SUBMIT_${resourceId}`)

/**
 * Action to edit an existing comment
 * @param {object} params - The edit parameters
 * @param {string} params.commentId - The ID of the comment to edit
 * @param {object} params.messageMeta - Updated metadata for the comment
 * @param {Function} params.callback - Callback function with updated comment data
 * @param {object} params.clientMeta - Client metadata
 */
export const editComment = createOptimistAction('GENERIC_COMMENT_EDIT', async (dispatch, params, {
  optimistId,
}) => {
  const {
    commentId,
    messageMeta,
    callback,
    clientMeta,
  } = params

  try {
    const response = await sendWithRetry.put(`/api/community_comments/${commentId}`, {
      message_meta: messageMeta,
      client_meta: clientMeta,
    })

    dispatch(createOptimistCommitAction(optimistId))
    callback(response.data.meta)
    dispatch(commitEditedComment({
      comment: response.data.meta,
    }))
  }
  catch {
    dispatch(createOptimistRevertAction(optimistId))
    dispatch(VisualBellActions.enqueue({
      message: getI18nString('community.comments.failed_to_edit_comment'),
      error: true,
    }))
  }
})

/**
 * Thunk to delete a comment
 * @param {object} params - The deletion parameters
 * @param {string} params.commentId - The ID of the comment to delete
 * @param {Function} params.onFinish - Callback when operation completes
 */
export const deleteComment = createOptimistThunk(({ dispatch, getState }, params) => {
  const { commentId, onFinish } = params
  const commentsState = getState().communityHub.comments
  const { type, id } = commentsState

  // Validate resource type and ID exist
  if (type === null || id === null) {
    return
  }

  const comment = commentsState.commentsById[commentId]

  sendWithRetry.del(`/api/community_comments/${commentId}`)
    .then(() => {
      dispatch(commitDeletedComment({
        resourceType: type,
        resourceId: id,
        comments: [comment],
      }))
      dispatch(VisualBellActions.enqueue({
        message: getI18nString('community.comments.comment_deleted'),
      }))
      onFinish?.(false)
    })
    .catch((error) => {
      const errorMessage = resolveMessage(error)
      if (errorMessage) {
        dispatch(VisualBellActions.enqueue({
          error: true,
          message: getI18nString('community.comments.failed_to_delete_comment', {
            errorMessage,
          }),
        }))
        onFinish?.(true)
      }
    })
}, ({
  commentId,
}) => `GENERIC_COMMENT_DELETE_${commentId}`)

/**
 * Thunk to report (and optionally hide) a comment
 * @param {object} params - The report parameters
 * @param {string} params.commentId - The ID of the comment to report
 * @param {boolean} params.userIsAdmin - Whether the current user is an admin
 * @param {Function} params.onFinish - Callback when operation completes
 */
export const reportComment = createOptimistThunk(({ dispatch, getState }, params) => {
  const {
    commentId,
    userIsAdmin,
    onFinish,
  } = params

  const commentsState = getState().communityHub.comments
  const { type, id } = commentsState

  // Validate resource type and ID exist
  if (type === null || id === null) {
    return
  }

  // Prepare report data - include hide flag if user is admin
  const reportData = userIsAdmin ? { hide: true } : undefined

  sendWithRetry.post(`/api/community_comments/${commentId}/report`, reportData)
    .then(() => {
      dispatch(commitHideComment({
        commentId,
        resourceId: id,
        resourceType: type,
      }))
      dispatch(VisualBellActions.enqueue({
        message: getI18nString('community.comments.comment_reported_and_hidden'),
        type: 'COMMENT_REPORTED',
      }))
      onFinish?.(false)
    })
    .catch((error) => {
      const errorMessage = resolveMessage(error)
      if (errorMessage) {
        dispatch(VisualBellActions.enqueue({
          message: getI18nString('community.comments.failed_to_report_comment', {
            errorMessage,
          }),
          type: 'COMMENT_REPORT_ERROR',
        }))
        onFinish?.(true)
      }
    })
})

// Export actions with meaningful names
export const BV = removeCommentsByAuthor
export const HF = commitHideComment
export const QA = editComment
export const TW = resetCommentStatus
export const Tu = deleteComment
export const Zv = commitDeletedComment
export const eG = reportComment
export const eT = createComment
export const kE = commitEditedComment
export const mH = setShowResolved
export const tG = commitCreatedComment
export const zs = submitComment
