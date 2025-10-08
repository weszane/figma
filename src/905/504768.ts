import { createActionCreator } from "../905/73481"
import { createOptimistThunk } from "../905/350402"
import { getAttachmentChanges } from "../905/380385"
import { trackEventAnalytics } from "../905/449184"
import { getFeatureFlags } from "../905/601108"
import { setupLoadingStateHandler } from "../905/696711"
import { getCurrentLiveGraphClient } from "../905/761735"
import { generateUUIDv4 } from "../905/871474"
import { sendWithRetry } from "../905/910117"
import { createNoOpValidator } from "../figma_app/181241"
import { flattenMessageMeta, getMessageType, MessageType, normalizeMessageMeta, trimLastMessageMeta } from "../figma_app/819288"

// Validator class for feed bell states
class FeedBellStatesValidator {


  validator = createNoOpValidator()
  constructor() {
  }

  /**
   * Get feed bell states with validation
   * @returns Promise with validated response
   */
  public getFeedBellStates() {
    return this.validator.validate(async ({ xr }: { xr: any }) =>
      await xr.get("/api/feed_bell_states"),
    )
  }
}

// Initialize validator instance
export const feedBellStatesValidator = new FeedBellStatesValidator()

// Action creators
export const REFRESH_FEED_ACTION = createActionCreator("REFRESH_FEED")
export const TEAM_FEED_SET_BELL_STATE_ACTION = createActionCreator("TEAM_FEED_SET_BELL_STATE")
export const TEAM_FEED_SET_INITIAL_BELL_STATES_ACTION = createActionCreator("TEAM_FEED_SET_INITIAL_BELL_STATES")

// Constants
export const PENDING_FEED_COMMENT_ID = "pending-feed-comment"

/**
 * Refresh feed thunk with loading state handling
 */
export const refreshFeedThunk = createOptimistThunk((
  dispatch: any,
  _: any,
  { loadingKey }: { loadingKey: string },
) => {
  if (!getFeatureFlags().xr_debounce_threshold) {
    return
  }

  const feedBellStatesPromise = feedBellStatesValidator.getFeedBellStates()
  setupLoadingStateHandler(feedBellStatesPromise, dispatch, loadingKey)

  feedBellStatesPromise.then((response) => {
    dispatch(TEAM_FEED_SET_INITIAL_BELL_STATES_ACTION({
      bellStates: response.data.meta,
    }))
  })
})

/**
 * Delete feed comment thunk
 */
export const deleteFeedCommentThunk = createOptimistThunk((dispatch: any, action: { uuid: string, commentId: string }) => {
  const state = dispatch.getState()
  const user = state.user
  const liveGraphClient = getCurrentLiveGraphClient()
  const commentUuid = action.uuid

  if (!user || !liveGraphClient || !commentUuid || action.commentId.startsWith(PENDING_FEED_COMMENT_ID)) {
    return
  }

  const deleteRequest = liveGraphClient.getIdFromUuid("FeedComment", commentUuid)
    .then(id => sendWithRetry.del(`/api/feed_posts/comments/${id}`))

  liveGraphClient.optimisticallyDeleteWithUUID({
    FeedComment: {
      [commentUuid]: null,
    },
  }, deleteRequest)
})

/**
 * Edit feed comment thunk
 */
export const editFeedCommentThunk = createOptimistThunk((dispatch: any, action: {
  uuid: string
  messageMeta: any[]
  attachmentUpdates: any
}) => {
  // Normalize message meta
  action.messageMeta = trimLastMessageMeta(action.messageMeta)

  const state = dispatch.getState()
  const user = state.user
  const liveGraphClient = getCurrentLiveGraphClient()
  const commentUuid = action.uuid

  if (!user || !liveGraphClient || !commentUuid) {
    return
  }

  const updateRequest = liveGraphClient.getIdFromUuid("FeedComment", commentUuid)
    .then(id => sendWithRetry.put(`/api/feed_posts/comments/${id}`, {
      message_meta: action.messageMeta,
      attachment_updates: getAttachmentChanges(action.attachmentUpdates),
    }))

  trackEventAnalytics("Team Feed Comment Edited", {
    text: flattenMessageMeta(action.messageMeta),
  })

  const normalizedMessageMeta = normalizeMessageMeta(action.messageMeta)

  liveGraphClient.optimisticallyUpdateWithUUID({
    FeedComment: {
      [commentUuid]: {
        messageMeta: normalizedMessageMeta,
      },
    },
  }, updateRequest)
})

/**
 * Create feed comment thunk
 */
export const createFeedCommentThunk = createOptimistThunk((dispatch: any, action: {
  postUuid: string
  messageMeta: any[]
  attachmentIds: string[]
}) => {
  // Normalize message meta
  action.messageMeta = trimLastMessageMeta(action.messageMeta)

  const state = dispatch.getState()
  const user = state.user
  const liveGraphClient = getCurrentLiveGraphClient()

  if (!user || !liveGraphClient) {
    return
  }

  const commentUuid = generateUUIDv4()

  const createRequest = sendWithRetry.post(`/api/feed_posts/${action.postUuid}/comments`, {
    message_meta: action.messageMeta,
    uuid: commentUuid,
    attachment_ids: action.attachmentIds,
  })

  // Analytics tracking
  const hasEmoji = !!action.messageMeta.find(item => getMessageType(item) === MessageType.EMOJI)
  const hasMention = !!action.messageMeta.find(item => getMessageType(item) === MessageType.EDITOR_MENTION)

  trackEventAnalytics("Team Feed Comment Added", {
    emojiUsed: hasEmoji,
    mentionUsed: hasMention,
    text: flattenMessageMeta(action.messageMeta),
    postUuid: action.postUuid,
  })

  const normalizedMessageMeta = normalizeMessageMeta(action.messageMeta)

  liveGraphClient.optimisticallyCreateWithUUID({
    FeedComment: {
      [commentUuid]: {
        feedPostPublicUuid: action.postUuid,
        uuid: commentUuid,
        userId: user.id,
        user: {
          id: user.id,
          handle: user.handle,
          imgUrl: user.img_url,
        },
        messageMeta: normalizedMessageMeta,
        createdAt: new Date(),
        reactions: [],
      },
    },
  }, createRequest)
})

/**
 * Delete comment reaction helper function
 */
function deleteCommentReaction(commentUuid: string, emoji: string) {
  return getCurrentLiveGraphClient().getIdFromUuid("FeedComment", commentUuid).then(id => sendWithRetry.del(`/api/feed_posts/comments/${id}/reactions`, {
    emoji,
  }))
}

/**
 * Delete comment reaction thunk
 */
export const deleteCommentReactionThunk = createOptimistThunk((
  dispatch: any,
  action: { commentUuid: string, emoji: string, reactionId: string },
) => {
  const { commentUuid, emoji, reactionId } = action
  const deleteRequest = deleteCommentReaction(commentUuid, emoji)

  const state = dispatch.getState()
  if (state.user) {
    getCurrentLiveGraphClient().optimisticallyDelete({
      FeedReaction: {
        [reactionId]: null,
      },
    }, deleteRequest)
  }
})

/**
 * Add comment reaction thunk
 */
export const addCommentReactionThunk = createOptimistThunk((
  dispatch: any,
  action: { commentUuid: string, commentId: string, emoji: string },
) => {
  const { commentUuid, commentId, emoji } = action
  const state = dispatch.getState()
  const user = state.user

  if (!user || commentId.startsWith(PENDING_FEED_COMMENT_ID)) {
    return
  }

  const createRequest = getCurrentLiveGraphClient().getIdFromUuid("FeedComment", commentUuid).then(id => sendWithRetry.post(`/api/feed_posts/comments/${id}/reactions`, {
    emoji,
  }))

  trackEventAnalytics("Team Feed Reaction Added", {
    commentId,
    type: emoji,
  })

  const optimisticId = `optimistic-id-comment-${commentId}-${emoji}-${user.id}`

  getCurrentLiveGraphClient().optimisticallyCreate({
    FeedReaction: {
      [optimisticId]: {
        createdAt: new Date(),
        emoji,
        feedResourceId: commentId,
        feedResourceType: "FeedComment",
        userId: user.id,
      },
    },
  }, createRequest)
})

/**
 * Delete post reaction helper function
 */
function deletePostReaction(postUuid: string, emoji: string) {
  return sendWithRetry.del(`/api/feed_posts/${postUuid}/reactions`, {
    emoji,
  })
}

/**
 * Delete post reaction thunk
 */
export const deletePostReactionThunk = createOptimistThunk((
  dispatch: any,
  action: { feedPostUuid: string, emoji: string, reactionId: string },
) => {
  const { feedPostUuid, emoji, reactionId } = action
  const deleteRequest = deletePostReaction(feedPostUuid, emoji)

  const state = dispatch.getState()
  if (state.user) {
    getCurrentLiveGraphClient().optimisticallyDelete({
      FeedReaction: {
        [reactionId]: null,
      },
    }, deleteRequest)
  }
})

/**
 * Add post reaction thunk
 */
export const addPostReactionThunk = createOptimistThunk((
  dispatch: any,
  action: { feedPostUuid: string, feedPostId: string, emoji: string },
) => {
  const { feedPostUuid, feedPostId, emoji } = action
  const state = dispatch.getState()
  const user = state.user

  if (!user) {
    return
  }

  const createRequest = sendWithRetry.post(`/api/feed_posts/${feedPostUuid}/reactions`, {
    emoji,
  })

  trackEventAnalytics("Team Feed Reaction Added", {
    postUuid: feedPostUuid,
    type: emoji,
  })

  const optimisticId = `optimistic-id-${feedPostUuid}-${emoji}-${user.id}`

  getCurrentLiveGraphClient().optimisticallyCreate({
    FeedReaction: {
      [optimisticId]: {
        createdAt: new Date(),
        emoji,
        feedResourceId: feedPostId,
        feedResourceType: "FeedPost",
        userId: user.id,
        user: {
          id: user.id,
          handle: user.handle,
          imgUrl: user.img_url,
        },
      },
    },
  }, createRequest)
})

// Export constants
export const v6 = PENDING_FEED_COMMENT_ID
export const FJ = addCommentReactionThunk
export const EF = addPostReactionThunk
export const BC = deleteFeedCommentThunk
export const cx = editFeedCommentThunk
export const au = refreshFeedThunk
export const gX = createFeedCommentThunk
export const Y9 = REFRESH_FEED_ACTION
export const t9 = deleteCommentReactionThunk
export const Oy = deletePostReactionThunk
export const hK = TEAM_FEED_SET_INITIAL_BELL_STATES_ACTION
export const yu = TEAM_FEED_SET_BELL_STATE_ACTION
