/* eslint-disable no-self-compare */
import classNames from 'classnames'
import { sanitizeInput } from '../905/241044'
import { DEFAULT_COMMENT_STATE, NEW_COMMENT_ID } from '../905/380385'
import { deepEqual } from '../905/382883'
import { convertShortcodesToNative, isValidEmojiShortcode, renderEmojiShortcodes } from '../905/403166'
import { hp, mh, u5, Vc, XH } from '../905/540111'
import { Point } from '../905/736624'
import { isNullish } from '../figma_app/95419'
import { escapeHtml } from '../figma_app/930338'

/**
 * @file 819288.ts
 * @description Utility functions and types for comment/message processing in Figma app.
 * Original function/variable names are preserved in comments for traceability.
 */

/** Types for message/comment objects */
export interface MessageMeta {
  t?: string
  styles?: string[]
  children?: MessageMeta[]
  user_annotated?: {
    handle: string
    name?: string
    img_url?: string
  }
  user_id?: string
  profile_id?: string | null
  link?: string
  isHashtag?: boolean
  reply?: {
    messageMeta?: MessageMeta[]
    attachments?: Record<string, unknown>
  }
  discardAttempts?: number
  user?: any
  userId?: string
}

/** Utility to compare styles arrays (original: h) */
function compareStyles(a: MessageMeta, b: MessageMeta): boolean {
  if (isNullish(a.styles) && isNullish(b.styles))
    return true
  if (isNullish(a.styles) !== isNullish(a.styles))
    return false
  const diff = a.styles?.filter(style => !b.styles?.includes(style))
  return diff?.length === 0
}

/** Utility to compare user_annotated (original: m) */
function compareUserAnnotated(a: MessageMeta, b: MessageMeta): boolean {
  return (!!(isNullish(a.user_annotated) && isNullish(b.user_annotated)))
    || (isNullish(a.user_annotated) === isNullish(a.user_annotated) && deepEqual(a.user_annotated, b.user_annotated))
}

/** Message types enum (original: $$g15) */
export enum MessageType {
  EDITOR_MENTION = 'editor_mention',
  COMMUNITY_MENTION = 'community_mention',
  PLAIN_TEXT = 'plain_text',
  EMOJI = 'emoji',
  NONE = 'none',
}

/**
 * Determines the message type from object shape (original: $$f11)
 * @param obj MessageMeta
 */
export function getMessageType(obj: MessageMeta): MessageType {
  const keys = Object.keys(obj)
  if (keys.length === 2 && keys.includes('user_id') && keys.includes('user_annotated')) {
    return MessageType.EDITOR_MENTION
  }
  if (keys.length === 2 && keys.includes('profile_id') && keys.includes('t')) {
    return MessageType.COMMUNITY_MENTION
  }
  if (keys.includes('t') && !keys.includes('link') && obj.t && isValidEmojiShortcode(obj.t)) {
    return MessageType.EMOJI
  }
  if (keys.includes('t') && !keys.includes('link')) {
    return MessageType.PLAIN_TEXT
  }
  return MessageType.NONE
}

/**
 * Flattens message meta to plain text (original: $$E9)
 * @param meta MessageMeta[]
 * @param options Optional trailing whitespace config
 */
export function flattenMessageMeta(meta: MessageMeta[] = [], options?: { includeTrailingWhitespace?: boolean }): string {
  if (!meta)
    return ''
  let result = meta.reduce((acc, item) => {
    let text = item.t || ''
    if (item.user_annotated) {
      text = item.user_annotated.handle
    }
    else if (item.profile_id || item.profile_id === null) {
      text = `@${item.t}`
    }
    else if (item.children?.length && item.styles?.length) {
      item.children.forEach((child, idx) => {
        (acc || text) && (text += '\n')
        text += item.styles.includes('ol') ? `${idx + 1}. ` : '* '
        text += flattenMessageMeta(child.children)
      })
    }
    else if (item.styles?.length && item.styles.includes('s')) {
      text = ''
    }
    return acc + text
  }, '')
  if (!options?.includeTrailingWhitespace) {
    result = result.replace(/\s+$/g, '')
  }
  return sanitizeInput(result) || ''
}

/**
 * Counts grapheme clusters in message meta (original: $$y3)
 * @param meta MessageMeta[]
 * @param options Optional config
 */
export function countGraphemes(meta: MessageMeta[], options?: object): number {
  const text = flattenMessageMeta(meta, options)
  const nativeText = convertShortcodesToNative(text)
  return (globalThis.Intl?.Segmenter
    ? Array.from(new Intl.Segmenter().segment(nativeText))
    : Array.from(nativeText)
  ).length
}

/**
 * Checks if message meta is empty or whitespace (original: $$b2)
 * @param meta MessageMeta[]
 */
export function isMessageMetaEmpty(meta: MessageMeta[]): boolean {
  return meta.length === 0 || /^\s*$/.test(flattenMessageMeta(meta))
}

/**
 * Checks if message meta is empty or too short (original: $$T4)
 * @param meta MessageMeta[]
 */
export function isMessageMetaTooShort(meta: MessageMeta[]): boolean {
  return isMessageMetaEmpty(meta) || flattenMessageMeta(meta).length <= 5
}

/**
 * Determines if comment thread is active (original: $$I1)
 * @param state Thread state object
 */
export function isActiveThread(state: {
  activeThread?: { id?: string }
  newComment: { discardAttempt: number }
  threads: Record<string, { reply: { messageMeta: MessageMeta[], attachments?: object }, discardAttempts?: number }>
}): boolean {
  const isNewComment = !(state.activeThread?.id === NEW_COMMENT_ID && state.newComment.discardAttempt < DEFAULT_COMMENT_STATE)
  const thread = state.activeThread?.id ? state.threads[state.activeThread.id] : null
  const isThreadValid = !(thread && !(thread && isMessageMetaTooShort(thread.reply.messageMeta) && Object.keys(thread.reply.attachments || {}).length === 0) && (!thread.discardAttempts || thread.discardAttempts < DEFAULT_COMMENT_STATE))
  return isNewComment && isThreadValid
}

/**
 * Checks if message meta is too long (original: $$S13)
 * @param meta MessageMeta[]
 */
export function isMessageMetaTooLong(meta: MessageMeta[]): boolean {
  return flattenMessageMeta(meta).length >= 17500
}

/**
 * Extracts invite tokens from message meta (original: $$v10)
 * @param meta MessageMeta[]
 */
export function extractInviteTokens(meta: MessageMeta[]): string[] {
  if (!Array.isArray(meta))
    return []
  const tokens = (function recurse(arr: MessageMeta[]): string[] {
    let result: string[] = []
    arr.forEach((item) => {
      if (item.user_id?.includes('invite-')) {
        item.t && result.push(item.t)
      }
      else if (item.children) {
        result.push(...recurse(item.children))
      }
    })
    return result
  })(meta);

  (function removeInviteIds(arr: MessageMeta[]): MessageMeta[] {
    arr.forEach((item) => {
      if (item.user_id?.includes('invite-')) {
        delete item.user_id
      }
      else if (item.children) {
        removeInviteIds(item.children)
      }
    })
    return arr
  })(meta)

  return tokens
}

/**
 * Trims trailing whitespace from last message meta (original: $$A6)
 * @param meta MessageMeta[]
 */
export function trimLastMessageMeta(meta: MessageMeta[]): MessageMeta[] {
  if (meta.length > 0) {
    meta[meta.length - 1].t = meta[meta.length - 1].t?.trimEnd()
  }
  return meta
}

/**
 * Converts a point to be within a bounding box (original: $$x12)
 * @param point Point
 * @param bounds { x: number, y: number, width: number, height: number }
 */
export function clampPointToBounds(point: Point, bounds: { x: number, y: number, width: number, height: number }): Point {
  const x = Math.min(Math.max(point.x, bounds.x), bounds.x + bounds.width)
  const y = Math.min(Math.max(point.y, bounds.y), bounds.y + bounds.height)
  return new Point(x, y)
}

/**
 * Checks if string contains a dash (original: $$N5)
 * @param str string
 */
export function containsDash(str: string): boolean {
  return str.includes('-')
}

/** Exported constants (original: B2, H3, I, Kq, Kx, L4, Pq, _Z, cs, l5, pV, q, vj) */
export const B2 = 5
export const H3 = isActiveThread
export const I = isMessageMetaEmpty
export const Kq = countGraphemes
export const Kx = isMessageMetaTooShort
export const L4 = containsDash
export const Pq = trimLastMessageMeta
export const _Z = flattenMessageMeta
export const cs = extractInviteTokens
export const l5 = getMessageType
export const pV = clampPointToBounds
export const q = isMessageMetaTooLong
export const vj = MessageType

/**
 * Normalizes message meta for rendering (original: Rc)
 * @param meta MessageMeta[] | string
 * @param trimTrailingWhitespace boolean
 */
export function normalizeMessageMeta(meta: MessageMeta[] | string = [], trimTrailingWhitespace = true): MessageMeta[] {
  const arr = (Array.isArray(meta)
    ? meta
    : [{ t: meta }]
  ).map((item) => {
    const base: MessageMeta = {
      t: null,
      styles: null,
      children: null,
      user: null,
      userId: null,
      link: null,
      isHashtag: null,
    }
    if (item.user_annotated && item.user_id) {
      return {
        ...base,
        userId: item.user_id,
        user: {
          ...item.user_annotated,
          name: item.user_annotated.name ?? null,
          imgUrl: item.user_annotated.img_url,
        },
      }
    }
    if (item.profile_id || item.profile_id === null) {
      return {
        ...base,
        t: `@${item.t}`,
        styles: ['lightbold'],
      }
    }
    const result: MessageMeta = {
      ...base,
      t: item.t || base.t,
      styles: item.styles || base.styles,
      link: item.link || base.link,
    }
    if (item.children?.length) {
      result.children = item.children.map(child => ({
        ...base,
        children: normalizeMessageMeta(child.children, false),
      }))
    }
    return result
  })
  if (trimTrailingWhitespace && arr.length) {
    const last = arr[arr.length - 1]
    last.t = last.t?.replace(/\s+$/g, '') ?? null
  }
  return arr
}

/**
 * Compares two message meta arrays for equality (original: Wf)
 * @param a MessageMeta[]
 * @param b MessageMeta[]
 */
export function areMessageMetasEqual(a: MessageMeta[], b: MessageMeta[]): boolean {
  if (a.length !== b.length)
    return false
  for (let i = 0; i < a.length; i++) {
    const metaA = a[i]
    const metaB = b[i]
    if (metaA.t !== metaB.t || metaA.user_id !== metaB.user_id)
      return false
    if (!compareUserAnnotated(metaA, metaB))
      return false
    if (metaA.profile_id !== metaB.profile_id)
      return false
    if (metaA.link !== metaB.link)
      return false
    if (!compareStyles(metaA, metaB))
      return false
    if (!areMessageMetasEqual(metaA.children ?? [], metaB.children ?? []))
      return false
  }
  return true
}

/**
 * Renders message meta to HTML (original: sP)
 * @param meta MessageMeta[]
 */
export function renderMessageMeta(meta: MessageMeta[] = []): string {
  if (!meta)
    return ''
  const html = meta.reduce((acc, item) => {
    let text = item.t || ''
    let styles = item.styles || []
    if (item.user_annotated) {
      text = item.user_annotated.handle
      styles = ['lightbold']
    }
    else if (item.profile_id || item.profile_id === null) {
      text = `@${item.t}`
      styles = ['lightbold']
    }
    else if (item.children?.length) {
      item.children.forEach((child, idx) => {
        (acc || text) && (text += '\n')
        text += styles.includes('ol') ? `${idx + 1}. ` : '* '
        text += renderMessageMeta(child.children)
      })
    }
    else {
      text = renderEmojiShortcodes(text)
        .map(e => typeof e === 'string'
          ? escapeHtml(e)
          : `<span class="${mh}">${e.props['data-text']}</span>`)
        .join('\n')
      if (item.link)
        styles = ['lightbold']
    }
    const classList: string[] = []
    styles.forEach((style) => {
      if (style === 'b')
        classList.push(hp)
      else if (style === 'lightbold')
        classList.push(XH)
      else if (style === 'i')
        classList.push(u5)
      else if (style === 's')
        classList.push(Vc)
    })
    if (classList.length) {
      text = `<span class='${classNames(...classList)}'>${text}</span>`
    }
    return acc + text
  }, '')
  return sanitizeInput(html) || ''
}
