import { ih } from "../905/201151"
import { BusyReadyState, NEW_COMMENT_ID, ThreadType } from "../905/380385"
import { CommentPinElement, PostPinElement } from "../905/512783"
import { getFeatureFlags } from "../905/601108"
import { createLoadedState, getResourceDataOrFallback } from "../905/723791"
import { isPointInRect, Point } from "../905/736624"
import { NJv, oGx, QP5 } from "../figma_app/27776"
import { viewportToScreen } from "../figma_app/62612"
import { throwTypeError } from "../figma_app/465776"
import { parsePxNumber } from "../figma_app/783094"
import { memoizeWeak } from "../figma_app/815945"
import { containsDash } from "../figma_app/819288"

// Origin: /Users/allen/github/fig/src/figma_app/12220.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments, improved readability.
// Assumed dependencies: imported modules as per original imports.

// --- Type Definitions ---

// Represents a rectangle with position and size
export interface Rect {
  top: number
  right: number
  bottom: number
  left: number
  width: number
  height: number
}

// Represents a point in 2D space
export interface XY {
  x: number
  y: number
}

// Represents the meta information for a message
export interface MessageMetaUser {
  user_id: string
  user_annotated: {
    id: string
    handle: string
    img_url: string
  }
}

export interface MessageMetaOther {
  t?: string
  link?: string
  styles?: any
  children?: MessageMeta[]
}

export type MessageMeta = MessageMetaUser | MessageMetaOther

// Represents an attachment
export interface Attachment {
  fileCommentId?: string
  [key: string]: any
}

// Represents a user
export interface User {
  id: string
  handle: string
  imgUrl: string
}

// Represents a comment
export interface Comment {
  id: string
  uuid?: string
  key: string
  parentId?: string | null
  user: User
  createdAt: Date
  resolvedAt?: Date | null
  deletedAt?: Date | null
  messageMeta: MessageMeta[]
  messageMetaStylized?: MessageMeta[]
  attachments: { [key: string]: Attachment }
  clientMeta?: ClientMeta | null
  orderId?: number | null
  commentPin?: any
}

// Represents client meta data for a comment
export interface ClientMeta {
  x: number
  y: number
  nodeId?: string
  inFrame?: boolean
  nodeOffset?: number
  selectionBoxAnchor?: XY
  stablePath?: string
  pageId?: string
}

// Represents the loaded state for comments
export interface LoadedState<T> {
  status: "loaded" | string
  data: {
    file?: FileData
  }
}

// Represents file data
export interface FileData {
  comments: Comment[]
  commentAttachments: Attachment[]
  currentUserCommentReadStatus?: CommentReadStatus
  fileCanvasMentions?: CanvasMention[]
  currentUserFileCanvasMentionReadStatus?: CanvasMentionReadStatus
}

// Represents comment read status
export interface CommentReadStatus {
  id: string
  userId: string
  fileKey: string
  createdAt: Date
  allReadAt: Date
  readComments: { [id: string]: boolean }
  unreadComments: { [id: string]: boolean }
}

// Represents canvas mention read status
export interface CanvasMentionReadStatus {
  unreadCanvasMentions: { [id: string]: boolean }
  readCanvasMentions: { [id: string]: boolean }
  allReadAt: Date
  createdAt: Date
}

// Represents a canvas mention
export interface CanvasMention {
  id: string
  fileKey: string
  createdAt: Date
  pageId: string
  mentionedByUser: User
  messageMeta: MessageMeta[]
  nodeIdPath: string[]
}

// --- Constants ---

export const DEFAULT_PIN_OFFSET: number = 1

export const PIN_ELEMENT_OFFSET: XY = {
  x: 16,
  y: -4,
}

export const DEFAULT_RECT: Rect = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0,
}

export const DEFAULT_THREAD_STATE = {
  messageMeta: [],
  attachments: {},
  state: BusyReadyState.READY,
  anchorPosition: null,
  selectionBoxAnchor: null,
  discardAttempt: 0,
}

// --- Utility Functions ---

/**
 * Checks if a point is inside a rectangle.
 */
export function isPointInSelectionRect(rect: Rect, point: XY | null): boolean {
  return !point || isPointInRect(point, rect)
}

/**
 * Parses a pixel number based on a flag.
 */
function parsePinSize(useNJv: boolean): number {
  return parsePxNumber(useNJv ? NJv : QP5)
}

/**
 * Returns the pin size for NJv.
 */
export function getPinSizeNJv(): number {
  return parsePinSize(true)
}

/**
 * Returns the pin size for oGx.
 */
export function getPinSizeOGx(): number {
  return parsePxNumber(oGx)
}

/**
 * Creates a new comment thread object.
 */
export function createNewCommentThread(
  activeId: string,
  threadState: typeof DEFAULT_THREAD_STATE,
  pageId: string,
) {
  const {
    messageMeta,
    attachments,
    anchorPosition,
    selectionBoxAnchor,
  } = threadState
  return {
    id: NEW_COMMENT_ID,
    key: NEW_COMMENT_ID,
    uuid: NEW_COMMENT_ID,
    anchored: true,
    canvasPosition: anchorPosition,
    selectionAnchorCanvasPosition: selectionBoxAnchor,
    page: pageId,
    isActive: activeId === NEW_COMMENT_ID,
    comments: [],
    messageMeta,
    attachments: Object.values(attachments),
    pageName: null,
    isCanvasMention: false,
    sidebarItemType: ThreadType.COMMENT_THREAD,
  }
}

/**
 * Checks if the given id is the new comment id.
 */
export function isNewCommentId(id: string): boolean {
  return id === NEW_COMMENT_ID
}

/**
 * Memoized function to stylize message meta.
 */
export const stylizeMessageMeta = memoizeWeak((meta: MessageMeta[]): any[] =>
  meta.map(item =>
    "user" in item && item.user
      ? {
          user_id: item.user.id,
          user_annotated: {
            id: item.user.id,
            handle: item.user.handle,
            img_url: item.user.imgUrl,
          },
        }
      : {
          t: (item as MessageMetaOther).t ?? undefined,
          link: (item as MessageMetaOther).link ?? undefined,
          styles: (item as MessageMetaOther).styles ?? undefined,
          children:
            (item as MessageMetaOther).children?.length
              ? stylizeMessageMeta((item as MessageMetaOther).children!)
              : undefined,
        },
  ),
)

/**
 * Memoized function to serialize client meta.
 */
export const serializeClientMeta = memoizeWeak((meta: ClientMeta) => ({
  x: meta.x,
  y: meta.y,
  ...(meta.nodeId ? { node_id: meta.nodeId } : {}),
  ...(meta.inFrame ? { in_frame: meta.inFrame } : {}),
  ...(meta.nodeOffset ? { node_offset: meta.nodeOffset } : {}),
  ...(meta.selectionBoxAnchor ? { selection_box_anchor: meta.selectionBoxAnchor } : {}),
  ...(meta.stablePath ? { stable_path: meta.stablePath } : {}),
}))

/**
 * Memoized function to serialize user.
 */
export const serializeUser = memoizeWeak((user: User) => ({
  id: user.id,
  handle: user.handle,
  img_url: user.imgUrl,
}))

/**
 * Determines if a comment is unread for the current user.
 */
function isCommentUnread(
  comment: Comment,
  readStatus: CommentReadStatus,
  currentUserId: string,
): boolean {
  if ("publicUuid" in comment && (comment as any).publicUuid)
    return false
  if (readStatus.unreadComments[comment.id])
    return true
  if (readStatus.readComments[comment.id])
    return false
  const readAt = readStatus.allReadAt || readStatus.createdAt
  return !(comment.createdAt.getTime() <= readAt.getTime()) && comment.user.id !== currentUserId
}

/**
 * Serializes a comment for API or UI consumption.
 */
export function serializeComment(
  currentUserId: string,
  parentComment: Comment,
  comment: Comment,
  readStatus: CommentReadStatus,
  savingSet: Set<string>,
  pendingMap: { [uuid: string]: boolean },
  attachments: Attachment[],
) {
  const isUnread = isCommentUnread(comment, readStatus, currentUserId)
  const isPendingFromSinatra = containsDash(comment.id)
  let meta = comment.messageMeta
  if (comment.messageMetaStylized?.length)
    meta = comment.messageMetaStylized
  const isSaving
    = getFeatureFlags().comments_faster_saving_ux && !!comment.uuid && savingSet.has(comment.uuid)
  const isPendingFromLg
    = getFeatureFlags().comments_faster_saving_ux_v2
      && (isPendingFromSinatra || (!!parentComment.uuid && parentComment.uuid in pendingMap))
  return {
    id: comment.id,
    uuid: comment.uuid,
    key: parentComment.key,
    parent_id: comment.parentId,
    user_id: comment.user.id,
    created_at: comment.createdAt.toISOString(),
    resolved_at: parentComment.resolvedAt ? parentComment.resolvedAt.toISOString() : null,
    deleted_at: null,
    message_meta: stylizeMessageMeta(meta),
    attachments,
    client_meta: comment.clientMeta ? serializeClientMeta(comment.clientMeta) : null,
    order_id: comment.orderId !== null ? String(comment.orderId) : null,
    isUnread,
    isPendingFromSinatra,
    isSaving,
    isPendingFromLg,
    user: serializeUser(comment.user),
  }
}

const DEFAULT_COMMENT_READ_STATUS: CommentReadStatus = {
  id: "",
  userId: "",
  fileKey: "",
  createdAt: new Date(),
  allReadAt: new Date(),
  readComments: {},
  unreadComments: {},
}

/**
 * Loads and structures comment threads from file data.
 */
export function loadCommentThreads(
  currentUserId: string,
  loadedState: LoadedState<any>,
  activeThreadId: string,
  nodeIdToCanvasPosition: (nodeIds: string[]) => { [nodeId: string]: XY },
  pageNames: { [pageId: string]: string },
  savingSet: Set<string>,
  pendingMap: { [uuid: string]: boolean },
) {
  if (loadedState.status !== "loaded")
    return loadedState
  const file = loadedState.data.file
  if (!file)
    return createLoadedState([])

  // Top-level comments (no parent)
  const topLevelComments = file.comments.filter(c => !c.parentId)

  // Group replies by parentId
  const repliesByParent: { [parentId: string]: Comment[] } = file.comments
    .filter(c => !!c.parentId)
    .reduce((acc, reply) => {
      const arr = acc[reply.parentId!] || []
      arr.push(reply)
      acc[reply.parentId!] = arr
      return acc
    }, {} as { [parentId: string]: Comment[] })

  // Group attachments by fileCommentId
  const attachmentsByComment: { [commentId: string]: Attachment[] } = file.commentAttachments.reduce(
    (acc, att) => {
      if (!att.fileCommentId)
        return acc
      const arr = acc[att.fileCommentId] || []
      arr.push(att)
      acc[att.fileCommentId] = arr
      return acc
    },
    {} as { [commentId: string]: Attachment[] },
  )

  // Map nodeId to canvas position
  const nodeIdToCanvas = nodeIdToCanvasPosition(
    topLevelComments.filter(c => c.clientMeta?.nodeId).map(c => c.clientMeta!.nodeId!),
  )

  // Build thread objects
  const threads = topLevelComments.map((topComment) => {
    const nodeId = topComment.clientMeta?.nodeId
    const canvasPosition = nodeId ? nodeIdToCanvas[nodeId] || topComment.clientMeta?.pageId || null : topComment.clientMeta?.pageId || "0:1"
    const replies = repliesByParent[topComment.id] || []
    const allComments = [topComment, ...replies.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())]
    const readStatus = file.currentUserCommentReadStatus || DEFAULT_COMMENT_READ_STATUS

    // Calculate selection anchor canvas position if available
    let selectionAnchorCanvasPosition: XY | null = null
    const canvasPos = nodeId ? nodeIdToCanvas[nodeId] : undefined
    if (canvasPos && topComment.clientMeta?.selectionBoxAnchor) {
      const dx = topComment.clientMeta.x - topComment.clientMeta.selectionBoxAnchor.x
      const dy = topComment.clientMeta.y - topComment.clientMeta.selectionBoxAnchor.y
      selectionAnchorCanvasPosition = {
        x: canvasPos.x - dx,
        y: canvasPos.y - dy,
      }
    }

    // Page id and name
    const pageId = canvasPosition
    const pageName = pageId && pageNames[pageId] || null

    // Serialize all comments in thread
    const serializedComments = allComments.map((comment) => {
      const attachments
        = attachmentsByComment[comment.id] ?? (comment.uuid && attachmentsByComment[comment.uuid]) ?? []
      return serializeComment(
        currentUserId,
        topComment,
        comment,
        readStatus,
        savingSet,
        pendingMap,
        attachments,
      )
    })

    const isPendingFromSinatra = containsDash(topComment.id)
    const isSaving
      = getFeatureFlags().comments_faster_saving_ux
        && !!topComment.uuid
        && savingSet.has(topComment.uuid)
    const isPendingFromLg
      = getFeatureFlags().comments_faster_saving_ux_v2
        && (isPendingFromSinatra || (!!topComment.uuid && topComment.uuid in pendingMap))

    return {
      id: topComment.id,
      uuid: topComment.uuid ?? undefined,
      key: topComment.key,
      anchored: !!canvasPos,
      canvasPosition: canvasPos,
      selectionAnchorCanvasPosition,
      page: pageId,
      pageName,
      isActive: activeThreadId === topComment.id,
      isPendingFromSinatra,
      isSaving,
      isPendingFromLg,
      comments: serializedComments,
      messageMeta: [],
      attachments: [],
      isCanvasMention: false,
      sidebarItemType: ThreadType.COMMENT_THREAD,
      commentPin: topComment.commentPin,
    }
  })

  return createLoadedState(threads)
}

/**
 * Calculates thread pin position and offset for rendering.
 */
export function calculateThreadPinPosition(
  viewport: Rect | null,
  thread: any,
  threadData: any,
  sidebarType: ThreadType,
  pinSizeFlag: boolean,
  pageId: string,
  offset?: number,
) {
  const { canvasPosition } = thread
  const screenPos = canvasPosition && viewport ? viewportToScreen(viewport, canvasPosition) : null

  // Calculate offset for thread pin
  const threadOffset = (() => {
    if (!viewport || !screenPos)
      return null
    // Determine pin element type
    const pinElement = (() => {
      switch (sidebarType) {
        case ThreadType.COMMENT_THREAD:
        case ThreadType.LITMUS_COMMENT_THREAD:
          return CommentPinElement
        case ThreadType.FEED_POST:
          return PostPinElement
        default:
          throwTypeError(sidebarType)
      }
    })()
    const pinWidth = pinElement.getPinSize(threadData).width
    const requiredSpace = pinWidth + PIN_ELEMENT_OFFSET.x + parsePinSize(pinSizeFlag) + 25
    const availableSpace = viewport.width - screenPos.x - (offset ?? 0)
    if (availableSpace < requiredSpace) {
      return {
        x: -1 * parsePinSize(pinSizeFlag) - PIN_ELEMENT_OFFSET.x,
        y: -55,
      }
    }
    else {
      return {
        x: pinWidth + PIN_ELEMENT_OFFSET.x,
        y: -55,
      }
    }
  })()

  const threadPosition = screenPos && threadOffset ? Point.add(screenPos, threadOffset) : null

  return {
    ...thread,
    anchorPosition: screenPos,
    threadPosition,
    threadOffset,
  }
}

/**
 * Determines if a canvas mention is unread for the current user.
 */
function isCanvasMentionUnread(
  mention: CanvasMention,
  readStatus: CanvasMentionReadStatus,
  currentUserId: string,
): boolean {
  const id = mention.id
  if (readStatus.unreadCanvasMentions[id])
    return true
  if (readStatus.readCanvasMentions[id])
    return false
  const readAt = readStatus.allReadAt || readStatus.createdAt
  return !(mention.createdAt.getTime() <= readAt.getTime()) && currentUserId !== id
}

/**
 * Loads canvas mentions from file data.
 */
export function loadCanvasMentions(
  currentUserId: string,
  loadedState: LoadedState<any>,
  activeMentionId: string,
) {
  if (loadedState.status !== "loaded")
    return loadedState
  const file = loadedState.data.file
  if (!file)
    return createLoadedState([])

  const mentions = file.fileCanvasMentions || []
  const readStatus = file.currentUserFileCanvasMentionReadStatus || ih

  const mentionThreads = mentions.map((mention) => {
    const threadId = `canvas_mention_${mention.id.replace(/-/g, "_")}`
    const isUnread = isCanvasMentionUnread(mention, readStatus, currentUserId)
    return {
      id: threadId,
      uuid: mention.id,
      key: mention.fileKey,
      anchored: false,
      canvasPosition: null,
      selectionAnchorCanvasPosition: null,
      page: getResourceDataOrFallback(mention.pageId, null),
      pageName: null,
      isActive: activeMentionId === threadId,
      isPendingFromSinatra: undefined,
      comments: [
        {
          id: threadId,
          uuid: mention.id,
          key: mention.id,
          parent_id: null,
          user_id: mention.fileKey,
          created_at: mention.createdAt.toISOString(),
          resolved_at: null,
          deleted_at: null,
          message_meta: stylizeMessageMeta(mention.messageMeta),
          client_meta: null,
          order_id: null,
          isUnread,
          isPendingFromSinatra: false,
          user: serializeUser(mention.mentionedByUser),
        },
      ],
      messageMeta: stylizeMessageMeta(mention.messageMeta),
      attachments: [],
      isCanvasMention: true,
      replyCount: undefined,
      sidebarItemType: ThreadType.COMMENT_THREAD,
      nodeId: mention.nodeIdPath[0],
    }
  })

  return createLoadedState(mentionThreads)
}

/**
 * Returns the default reply state.
 */
export function getDefaultReplyState() {
  return {
    reply: {
      messageMeta: [],
      attachments: {},
    },
    state: BusyReadyState.READY,
  }
}

/**
 * Extracts user ids from message meta.
 */
export function extractUserIdsFromMessageMeta(comment: any): string[] {
  const userIds: string[] = []
  for (let i = 0; i < comment.message_meta.length; i++) {
    const meta = comment.message_meta[i]
    if (meta.hasOwnProperty("user_id"))
      userIds.push(meta.user_id)
  }
  return userIds
}

/**
 * Checks if any comment thread contains unread comments with pins.
 */
export function hasUnreadPinnedComments(threads: any[]): boolean {
  return threads.some(
    thread =>
      thread.commentPin != null
      && thread.comments.some((comment: any) => comment.isUnread),
  )
}

// --- Exported Aliases (for compatibility with original code) ---

export const CR = serializeUser
export const F$ = extractUserIdsFromMessageMeta
export const G9 = serializeComment
export const GV = DEFAULT_THREAD_STATE
export const JG = createNewCommentThread
export const PK = DEFAULT_RECT
export const Zz = hasUnreadPinnedComments
export const eR = isNewCommentId
export const gj = DEFAULT_COMMENT_READ_STATUS
export const hx = PIN_ELEMENT_OFFSET
export const k0 = loadCanvasMentions
export const mz = getPinSizeOGx
export const o8 = stylizeMessageMeta
export const rN = isPointInSelectionRect
export const ro = loadCommentThreads
export const t$ = getPinSizeNJv
export const us = getDefaultReplyState
export const vl = calculateThreadPinPosition
export const wB = DEFAULT_PIN_OFFSET
