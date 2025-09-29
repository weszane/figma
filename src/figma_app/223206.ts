import { atomWithReset } from 'jotai/utils'
import { z } from 'zod'
import { atom, createRemovableAtomFamily, createValidatedLocalStorageAtom } from '../figma_app/27355'
import { generateSessionId } from '../figma_app/925970'

let s = z.object({
  key: z.string(),
})
let o = z.object({
  fileKey: z.string().min(1),
  fileVersion: z.number(),
  pageGuid: z.string().min(1),
  selectedNodeIds: z.array(z.string()).nonempty(),
})
let l = z.object({
  fileKey: z.string().min(1),
  fileVersion: z.number(),
  pageGuid: z.string().min(1),
  selectedNodeId: z.string(),
})
let d = z.object({
  showOrgTemplateView: z.boolean(),
})
let c = z.object({
  figjamFileKey: z.string().min(1),
  selectedGuids: z.array(z.string()).optional(),
  pageGuids: z.array(z.string()).optional(),
})
let u = z.object({
  fileKey: z.string().min(1),
  fileVersion: z.number(),
  pageGuid: z.string().min(1),
  selectedNodeId: z.string(),
  exceedsMakePasteThreshold: z.boolean(),
})
let p = z.object({
  fileKey: z.string().min(1),
  fileVersion: z.number(),
  sourceNodeIds: z.array(z.string()).nonempty(),
})
let _ = z.discriminatedUnion('type', [s.extend({
  type: z.literal('copy-to-sites-from-design'),
  data: l,
}), s.extend({
  type: z.literal('design-copy-to-slides'),
  data: o,
}), s.extend({
  type: z.literal('figjam-create-slides-outline'),
  data: c,
}), s.extend({
  type: z.literal('cooper-org-template-picker-view'),
  data: d,
}), s.extend({
  type: z.literal('send-to-make-from-design'),
  data: u,
}), s.extend({
  type: z.literal('send-to-buzz-from-design'),
  data: p,
})])
let h = createValidatedLocalStorageAtom('new-file-data', null, _.nullable())
// Refactored atom family for managing session-based data with type safety
export const sessionIdAtom = atomWithReset<string | null>(null)

// Create a reusable atom family for session-scoped data management
const createSessionScopedAtomFamily = createRemovableAtomFamily(
  (actionType: string) =>
    atom(
      // Read function: returns data if session and type match
      (get) => {
        const currentSessionId = get(sessionIdAtom)
        const storedData = get(h)
        return storedData && storedData.key === currentSessionId && storedData.type === actionType
          ? storedData.data
          : null
      },
      // Write function: stores data with new session ID
      (_get, set, data: unknown) => {
        const newSessionId = generateSessionId()
        set(h, {
          data,
          type: actionType,
          key: newSessionId,
        })
        return newSessionId
      },
    ),
)

// Create specific atoms for each action type with descriptive names
export const designCopyToSlidesAtom = createSessionScopedAtomFamily('design-copy-to-slides')
export const figjamCreateSlidesOutlineAtom = createSessionScopedAtomFamily('figjam-create-slides-outline')
export const copyToSitesFromDesignAtom = createSessionScopedAtomFamily('copy-to-sites-from-design')
export const orgTemplatePickerViewAtom = createSessionScopedAtomFamily('cooper-org-template-picker-view')
export const sendToMakeFromDesignAtom = createSessionScopedAtomFamily('send-to-make-from-design')
export const sendToBuzzFromDesignAtom = createSessionScopedAtomFamily('send-to-buzz-from-design')

// Export atoms with meaningful names
export const $K = sessionIdAtom
export const DM = sendToMakeFromDesignAtom
export const Uf = sendToBuzzFromDesignAtom
export const bW = orgTemplatePickerViewAtom
export const me = copyToSitesFromDesignAtom
export const s5 = figjamCreateSlidesOutlineAtom
export const u2 = designCopyToSlidesAtom
