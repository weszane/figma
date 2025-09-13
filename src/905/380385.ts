import { z } from 'zod'
import { throwTypeError } from '../figma_app/465776'
import * as Ip from '../figma_app/709165'

/**
 * Type for at-mentions typeahead identifier.
 * Original: $$a7
 */
export const AT_MENTIONS_TYPEAHEAD = 'at-mentions-typeahead'

/**
 * Enum for navigation buttons and accessibility pin.
 * Original: $$s3
 */
export const NAVIGATION_BUTTONS = (() => {
  const obj = {
    prevButton: 'prevButton',
    nextButton: 'nextButton',
    accessibilityCommentPin: 'accessibilityCommentPin',
  }
  return obj
})()

/**
 * Enum for busy/ready states.
 * Original: $$o2
 */
export enum BusyReadyState {
  BUSY = 0,
  READY = 1,
}

/**
 * New comment id constant.
 * Original: $$l10
 */
export const NEW_COMMENT_ID = 'new-comment-id'

/**
 * Default comment state value.
 * Original: $$d5
 */
export const DEFAULT_COMMENT_STATE = 1

/**
 * Checks if the comment state is active.
 * Original: $$c13
 * @param state - The comment state.
 * @returns True if active, false otherwise.
 */
export function isCommentStateActive(state: number): boolean {
  switch (state) {
    case 1:
      return true
    case 2:
    case 0:
      return false
    default:
      throwTypeError(state)
  }
}

/**
 * Checks if the comment state is valid for update.
 * Original: $$u6
 * @param state - The comment state.
 * @returns True if valid for update, false otherwise.
 */
export function isCommentStateUpdatable(state: number): boolean {
  switch (state) {
    case 1:
    case 2:
      return true
    case 0:
      return false
    default:
      throwTypeError(state)
  }
}

/**
 * Checks if the comment state is valid for posting.
 * Original: $$p8
 * @param state - The comment state.
 * @returns True if valid for posting, false otherwise.
 */
export function isCommentStatePostable(state: number): boolean {
  switch (state) {
    case 1:
    case 2:
      return true
    case 0:
      return false
    default:
      throwTypeError(state)
  }
}

/**
 * Checks if the comment state is valid for moderation.
 * Original: $$m9
 * @param state - The comment state.
 * @returns True if valid for moderation, false otherwise.
 */
export function isCommentStateModeratable(state: number): boolean {
  switch (state) {
    case 1:
      return true
    case 2:
    case 0:
      return false
    default:
      throwTypeError(state)
  }
}

/**
 * Enum for thread types.
 * Original: $$h12
 */
export enum ThreadType {
  FEED_POST = 0,
  COMMENT_THREAD = 1,
  LITMUS_COMMENT_THREAD = 2,
}

/**
 * Returns attachment changes for a comment.
 * Original: $$g4
 * @param e - The comment object.
 * @returns Object with added and deleted attachment ids.
 */
export function getAttachmentChanges(e: any): { added: string[], deleted: any } | undefined {
  if (e) {
    return {
      added: Object.values(e.attachments).map((attachment: any) => attachment.id),
      deleted: e.deleted,
    }
  }
}

/**
 * Enum for composer types.
 * Original: $$f1
 */
export const ComposerType = (() => {
  const obj = {
    new: 'newCommentComposer',
    reply: 'replyCommentComposer',
    edit: 'editCommentComposer',
    feed: 'FeedPostThreadCommentComposer',
    feedPopover: 'FeedPostPopoverModalThreadCommentComposer',
    quickReply: 'quickReplyCommentComposer',
  }
  return obj
})()

/**
 * Checks if the composer type is for feed post.
 * Original: $$_0
 * @param type - The composer type.
 * @returns True if feed post type, false otherwise.
 */
export function isFeedPostComposer(type: string): boolean {
  switch (type) {
    case 'newCommentComposer':
    case 'replyCommentComposer':
    case 'editCommentComposer':
    case 'quickReplyCommentComposer':
      return false
    case 'FeedPostThreadCommentComposer':
    case 'FeedPostPopoverModalThreadCommentComposer':
      return true
    default:
      throwTypeError(type)
  }
}

/**
 * Zod schema for comment.
 * Original: $$A11
 */
export const CommentSchema = z.object({
  id: z.string(),
  message: z.string(),
  created_at: z.string(),
  author: Ip.ignore(),
  client_meta: Ip.ignore().nullable(),
  resolved_at: z.string().nullable(),
  edited_at: z.string().nullable(),
  hidden_at: z.string().nullable(),
})

// Export refactored names for external usage
export const BL = isFeedPostComposer
export const Dw = ComposerType
export const EB = BusyReadyState
export const Eq = NAVIGATION_BUTTONS
export const Gq = getAttachmentChanges
export const IT = DEFAULT_COMMENT_STATE
export const MV = isCommentStateUpdatable
export const Qd = AT_MENTIONS_TYPEAHEAD
export const Vk = isCommentStatePostable
export const b7 = isCommentStateModeratable
export const hm = NEW_COMMENT_ID
export const iG = CommentSchema
export const kT = ThreadType
export const m = isCommentStateActive
