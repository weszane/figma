import type { PrimitiveAtom } from 'jotai'
import { z } from 'zod'
import { isNotTopWindow } from '../905/231128'
import { sendMessageToParent } from '../905/298920'
import { atom, atomStoreManager } from '../figma_app/27355'
import { isZoomIntegration } from '../figma_app/469876'

/**
 * Sends a URL message to the parent window if running in Zoom integration and not top window.
 * @param url - The URL to send.
 * @returns True if the message was sent, false otherwise.
 * (Original: $$l2)
 */
export function sendUrlToParent(url: string): boolean {
  if (!(isZoomIntegration() && isNotTopWindow()))
    return false
  sendMessageToParent({ url })
  return true
}

/**
 * Sends a 'backToFiles' action message to the parent window if running in Zoom integration and not top window.
 * @returns True if the message was sent, false otherwise.
 * (Original: $$d1)
 */
export function sendBackToFilesAction(): boolean {
  if (!(isZoomIntegration() && isNotTopWindow()))
    return false
  sendMessageToParent({ action: 'backToFiles' })
  return true
}

// Atom to store collaboration host name (Original: $$c3)
export const collaborationHostNameAtom = atom<string | null>(null)

// Zod schema for collaboration host name message (Original: u)
const collaborationHostNameMessageSchema = z.object({
  type: z.literal('collaborationHostNameMessage'),
  collaborationHostName: z.string().nullable().optional(),
})

/**
 * Handles incoming messages for collaboration host name.
 * @param event - The message event.
 * (Original: $$p0)
 */
export function handleCollaborationHostNameMessage(event: MessageEvent) {
  if (event.origin !== window.self.origin)
    return
  const result = collaborationHostNameMessageSchema.safeParse(event.data)
  if (!result.success)
    return
  const { type, collaborationHostName } = result.data
  if (type === 'collaborationHostNameMessage') {
    atomStoreManager.set(collaborationHostNameAtom as PrimitiveAtom<string | null>, collaborationHostName)
  }
}

// Exported aliases for backward compatibility
export const FR = handleCollaborationHostNameMessage
export const LR = sendBackToFilesAction
export const Lf = sendUrlToParent
export const Ui = collaborationHostNameAtom
