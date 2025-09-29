import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AIScopeHandler, permissionScopeHandler } from '../905/189185'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { debugState } from '../905/407919'
import { analyticsEventManager } from '../905/449184'
import { customHistory } from '../905/612521'
import { convertImageDataToURL, generateExportThumbnail } from '../905/619652'
import { getSingletonSceneGraph } from '../905/700578'
import { Point } from '../905/736624'
import { generateUUIDv4 } from '../905/871474'
import { debounce } from '../905/915765'
import { atom, atomStoreManager, useAtomValueAndSetter } from '../figma_app/27355'
import { SendToMakeAttachmentManager } from '../figma_app/176302'
import { throwTypeError } from '../figma_app/465776'
import { openFileAtom, useCurrentFileKey } from '../figma_app/516028'
import { setupRemovableAtomFamily } from '../figma_app/615482'
import { BackgroundPattern, Fullscreen, InsertErrorType } from '../figma_app/763686'
import { ChatErrorType, useChatError } from '../figma_app/883638'
import { uint8ArrayToHex } from '../figma_app/930338'

// Type definitions for attachment statuses
type AttachmentStatus = 'pending' | 'loading' | 'success' | 'error' | 'removed'

interface BaseAttachment {
  status: AttachmentStatus
  uniqueId: string
}

interface PendingAttachment extends BaseAttachment {
  status: 'pending'
}

interface LoadingAttachment extends BaseAttachment {
  status: 'loading'
  nodeGuid: string
}

interface SuccessAttachment extends BaseAttachment {
  status: 'success'
  nodeGuid: string
  type: 'IMAGE' | 'FIGMA_NODE'
  image?: string
  codeFiles?: Array<{ codeFileGuid: string, code: string }>
}

interface ErrorAttachment extends BaseAttachment {
  status: 'error'
}

interface RemovedAttachment extends BaseAttachment {
  status: 'removed'
}

type Attachment
  = | PendingAttachment
  | LoadingAttachment
  | SuccessAttachment
  | ErrorAttachment
  | RemovedAttachment

// Atoms for managing attachment state
export const attachmentsAtomFamily = setupRemovableAtomFamily(() => atom<Attachment[]>([]))
export const stashedAttachmentsAtomFamily = setupRemovableAtomFamily(() => atom<Attachment[]>([]))
export const MAX_ATTACHMENTS = 3
export const hasMaxAttachmentsAtom = atom(get =>
  (get(attachmentsAtomFamily) as Attachment[]).filter((att: Attachment) => att.status !== 'error').length >= MAX_ATTACHMENTS,
)

// Check if the current file can be edited
export const canEditFileAtom = atom((get) => {
  const file = get(openFileAtom)
  return !!(file?.canEdit && file?.canEditCanvas)
})

// Atom for creating pending attachments
export const createPendingAttachmentAtom = atom(
  null,
  (get, set) => {
    if (get(canEditFileAtom)) {
      const attachments = get(attachmentsAtomFamily) as Attachment[]
      set(attachmentsAtomFamily, [...attachments, {
        status: 'pending',
        uniqueId: generateUUIDv4(),
      }] as any)
    }
  },
)

/**
 * Convert attachment type from internal representation to external
 * @param attachment - The attachment with type to convert
 * @returns The converted attachment type
 */
export function convertAttachmentType(attachment: { type: 'image' | 'node' }): 'IMAGE' | 'FIGMA_NODE' {
  switch (attachment.type) {
    case 'image':
      return 'IMAGE'
    case 'node':
      return 'FIGMA_NODE'
    default:
      throwTypeError(attachment)
  }
}

/**
 * Show appropriate error message for attachment insertion errors
 * @param errorType - The type of insertion error
 */
export function handleInsertError(errorType: InsertErrorType): void {
  /**
   * Helper function to show error toast
   * @param message - Error message to display
   * @param isError - Whether this is an error (true) or warning (false)
   */
  function showErrorToast(message: string, isError: boolean = true): void {
    debugState.dispatch(VisualBellActions.enqueue({
      type: 'figmake_attachment_failed_to_load',
      message,
      timeoutOverride: 5000,
      error: isError,
      button: {
        text: getI18nString('figmake.attachments.learn_more_button'),
        action: () => {
          customHistory.unsafeRedirect('https://help.figma.com/hc/articles/31722591905559', '_blank')
        },
      },
    }))
  }

  switch (errorType) {
    case InsertErrorType.MORE_THAN_ONE_HIGHLEVEL_NODE_FOUND:
      showErrorToast(getI18nString('figmake.attachments.attachment_not_in_frame_toast'))
      break
    case InsertErrorType.INSERTED_NODES_TOO_LARGE:
      showErrorToast(getI18nString('figmake.attachments.attachment_too_large_toast'), false)
      break
    case InsertErrorType.MAXIMUM_ATTACHMENTS_EXCEEDED:
      showErrorToast(getI18nString('figmake.attachments.too_many_attachments_toast', {
        max_num: MAX_ATTACHMENTS,
      }))
      break
    case InsertErrorType.USER_PASTED_FIGMA_LINK_IN_CHAT:
      showErrorToast(getI18nString('figmake.attachments.cant_read_figma_link_toast'), false)
      break
    case InsertErrorType.DESIGN_2_REACT_STATE_GROUP:
      showErrorToast(getI18nString('figmake.attachments.failure_state_group'))
      break
    case InsertErrorType.DESIGN_2_REACT_OTHER:
    case InsertErrorType.OTHER:
      showErrorToast(getI18nString('figmake.attachments.generic_failed_to_load_attachment_toast'))
      break
    default:
      throwTypeError(errorType)
  }
}

/**
 * Remove pending attachment and show error
 * @param errorType - The type of error to handle
 */
export function removePendingAttachmentAndShowError(errorType: InsertErrorType): void {
  atomStoreManager.set(attachmentsAtomFamily, (attachments: Attachment[]) => {
    const pendingAttachment = attachments.find((att: Attachment) => att.status === 'pending')
    return pendingAttachment
      ? attachments.filter((att: Attachment) => att.uniqueId !== pendingAttachment.uniqueId)
      : attachments
  })
  handleInsertError(errorType)
}

/**
 * Restore stashed attachments
 */
export function restoreStashedAttachments(): void {
  const stashed = atomStoreManager.get(stashedAttachmentsAtomFamily) as Attachment[]
  if (stashed.length > 0) {
    atomStoreManager.set(attachmentsAtomFamily, stashed)
    atomStoreManager.set(stashedAttachmentsAtomFamily, [])
  }
}

/**
 * Check if attachment is loaded (not pending or error)
 * @param attachment - The attachment to check
 * @returns True if attachment is loaded
 */
export function isAttachmentLoaded(attachment: Attachment): boolean {
  return attachment.status !== 'pending' && attachment.status !== 'error'
}

/**
 * Check if attachment is loaded and matches node GUID
 * @param attachment - The attachment to check
 * @param nodeGuid - The node GUID to match
 * @returns True if attachment is loaded and matches node GUID
 */
export function isLoadedAttachmentWithNodeGuid(attachment: Attachment, nodeGuid: string): boolean {
  return isAttachmentLoaded(attachment) && 'nodeGuid' in attachment && attachment.nodeGuid === nodeGuid
}

/**
 * Generate a unique ID
 * @returns A unique ID
 */
function generateUniqueId(): string {
  return generateUUIDv4()
}

/**
 * Hook for removing attachments
 * @returns Function to remove an attachment
 */
export function useRemoveAttachment() {
  const [attachments, setAttachments] = useAtomValueAndSetter(attachmentsAtomFamily)

  return useCallback((attachment: Attachment) => {
    setAttachments(attachments.filter((att: Attachment) => att.uniqueId !== attachment.uniqueId))

    if (isAttachmentLoaded(attachment) && 'nodeGuid' in attachment && attachment.nodeGuid) {
      permissionScopeHandler.ai('clean-up-attachments', () => {
        const node = getSingletonSceneGraph().get(attachment.nodeGuid)
        if (node) {
          node.removeSelfAndChildren()
        }

        if (attachment.status === 'success' && 'type' in attachment && attachment.type === 'FIGMA_NODE' && 'codeFiles' in attachment && attachment.codeFiles) {
          attachment.codeFiles.forEach((file) => {
            Fullscreen?.deleteCodeFile(file.codeFileGuid)
          })
        }

        Fullscreen?.commit()
      })
    }
  }, [setAttachments, attachments])
}

// Track previous attachments for status change detection
let previousAttachments: Attachment[] = []

// Debounced function for announcing attachment status changes
const announceAttachmentStatusChange = debounce((
  previousStatus: AttachmentStatus,
  currentStatus: AttachmentStatus,
  attachment: Attachment,
) => {
  if (previousStatus !== currentStatus) {
    switch (currentStatus) {
      case 'loading':
        debugState.dispatch(VisualBellActions.enqueue({
          message: getI18nString('figmake.chat.a11y_attachment_loading'),
          role: 'status',
        }))
        break
      case 'success':
        const successMessage = 'type' in attachment && attachment.type === 'IMAGE'
          ? getI18nString('figmake.chat.a11y_image_attached_successfully')
          : getI18nString('figmake.chat.a11y_design_attached_successfully')
        debugState.dispatch(VisualBellActions.enqueue({
          message: successMessage,
          role: 'status',
        }))
        break
      case 'error':
        debugState.dispatch(VisualBellActions.enqueue({
          message: getI18nString('figmake.chat.a11y_attachment_failed_to_load'),
          role: 'status',
        }))
        break
      case 'removed':
        debugState.dispatch(VisualBellActions.enqueue({
          message: getI18nString('figmake.chat.a11y_attachment_removed'),
          role: 'status',
        }))
        break
    }
  }
}, 1000)

/**
 * Hook for managing attachments
 * @param chatMessagesNodeGuid - The GUID of the chat messages node
 * @returns Attachment management functions and state
 */
export function useAttachments(chatMessagesNodeGuid: string) {
  const [attachments, setAttachments] = useAtomValueAndSetter(attachmentsAtomFamily)
  const [_stashedAttachments, setStashedAttachments] = useAtomValueAndSetter(stashedAttachmentsAtomFamily)
  const { chatError, setChatError } = useChatError(chatMessagesNodeGuid)
  const fileKey = useCurrentFileKey()

  // Create a pending attachment
  const createPendingAttachment = useCallback(() => {
    const currentAttachments = atomStoreManager.get(attachmentsAtomFamily) as Attachment[]
    atomStoreManager.set(attachmentsAtomFamily, [
      ...currentAttachments,
      {
        status: 'pending',
        uniqueId: generateUniqueId(),
      },
    ] as any)
  }, [])

  // Update an attachment by ID
  const setAttachmentById = useCallback((attachmentId: string, updatedAttachment: Attachment) => {
    setAttachments(attachments.map((att: Attachment) =>
      att.uniqueId === attachmentId ? updatedAttachment : att,
    ))
  }, [attachments, setAttachments])

  // Get the ID of the first pending attachment
  const getPendingAttachmentId = useCallback(() => {
    const pendingAttachment = attachments.find((att: Attachment) => att.status === 'pending')
    return pendingAttachment?.uniqueId ?? null
  }, [attachments])

  // Claim a pending attachment or create a new one
  const claimAPendingAttachmentOrMakeOne = useCallback((nodeGuid: string) => {
    const pendingId = getPendingAttachmentId()

    if (pendingId) {
      setAttachmentById(pendingId, {
        status: 'loading',
        nodeGuid,
        uniqueId: pendingId,
      })
      return pendingId
    }
    else {
      const newId = generateUniqueId()
      setAttachments([
        ...attachments,
        {
          status: 'loading',
          nodeGuid,
          uniqueId: newId,
        },
      ])
      return newId
    }
  }, [attachments, setAttachments, getPendingAttachmentId, setAttachmentById])

  // Create a loaded attachment
  const createLoadedAttachment = useCallback((attachmentData: Omit<SuccessAttachment, 'status' | 'uniqueId'>) => {
    if (attachments.length >= MAX_ATTACHMENTS)
      return

    setAttachments((prev: Attachment[]) => [
      ...prev,
      {
        status: 'success',
        ...attachmentData,
        uniqueId: generateUniqueId(),
      },
    ])

    analyticsEventManager.trackDefinedEvent('ai_for_production.chat_attachment_added', {
      attachmentType: attachmentData.type,
      fileKey: fileKey ?? undefined,
    })
  }, [attachments, setAttachments, fileKey])

  // Remove an attachment
  const clearAttachment = useCallback((attachment: SuccessAttachment) => {
    setAttachments(attachments.filter((att: Attachment) => !isLoadedAttachmentWithNodeGuid(att, attachment.nodeGuid)))

    AIScopeHandler.system('clean-up-attachments', () => {
      const node = getSingletonSceneGraph().get(attachment.nodeGuid)
      if (node) {
        node.removeSelfAndChildren()
      }

      if (attachment.type === 'FIGMA_NODE' && attachment.codeFiles) {
        attachment.codeFiles.forEach((file) => {
          Fullscreen?.deleteCodeFile(file.codeFileGuid)
        })
      }

      Fullscreen?.commit()
    })
  }, [setAttachments, attachments])

  // Stash all attachments
  const stashAllAttachments = useCallback(() => {
    setStashedAttachments(attachments)
    setAttachments([])
  }, [attachments, setAttachments, setStashedAttachments])

  // Process attachments (resize images)
  const [processedAttachments, setProcessedAttachments] = useState<Attachment[]>([])

  const processAttachments = useCallback(async () => {
    setProcessedAttachments(await Promise.all(attachments.map(processAttachmentImage)))
  }, [attachments])

  useEffect(() => {
    processAttachments()
  }, [attachments, processAttachments])

  // Calculate total attachment size
  const totalAttachmentBytes = useMemo(() =>
    processedAttachments.reduce((total, attachment) => {
      if (attachment.status !== 'success')
        return total

      if ('type' in attachment && attachment.type === 'FIGMA_NODE') {
        const codeFileSize = 'codeFiles' in attachment && attachment.codeFiles?.reduce((sum, file) =>
          sum + new Blob([file.code]).size, 0) || 0
        return total + codeFileSize + calculateImageSize('image' in attachment ? attachment.image : undefined)
      }

      return total + calculateImageSize('image' in attachment ? attachment.image : undefined)
    }, 0), [processedAttachments])

  // Check if attachments are ready (under size limit)
  const attachmentsReady = useMemo(() =>
    processedAttachments.every((att: Attachment) => att.status !== 'loading')
    && totalAttachmentBytes < 5242880, // 5MB limit
    [processedAttachments, totalAttachmentBytes])

  // Handle attachment size limit exceeded
  const sizeLimitExceededRef = useRef(false)

  useEffect(() => {
    const isSizeLimitExceeded = totalAttachmentBytes > 5242880

    if (isSizeLimitExceeded !== sizeLimitExceededRef.current) {
      sizeLimitExceededRef.current = isSizeLimitExceeded

      if (isSizeLimitExceeded) {
        setChatError({
          error: new Error(ChatErrorType.ATTACHMENTS_TOO_LARGE),
        } as any)
      }
      else if (chatError && (chatError as any).error && (chatError as any).error.message === ChatErrorType.ATTACHMENTS_TOO_LARGE) {
        setChatError(undefined)
      }
    }
  }, [totalAttachmentBytes, setChatError, chatError])

  // Announce attachment status changes
  useEffect(() => {
    attachments.forEach((attachment: Attachment) => {
      const previousAttachment = previousAttachments.find(prev => prev.uniqueId === attachment.uniqueId)

      if (previousAttachment) {
        if (previousAttachment.status !== attachment.status) {
          announceAttachmentStatusChange(previousAttachment.status, attachment.status, attachment)
        }
      }
      else {
        announceAttachmentStatusChange('' as AttachmentStatus, attachment.status, attachment)
      }
    })

    previousAttachments.forEach((prevAttachment) => {
      const currentAttachment = attachments.find((att: Attachment) => att.uniqueId === prevAttachment.uniqueId)

      if (!currentAttachment) {
        announceAttachmentStatusChange(prevAttachment.status, 'removed', prevAttachment)
      }
    })

    previousAttachments = attachments
  }, [attachments])

  // Manage SendToMake attachment flow
  SendToMakeAttachmentManager({
    totalAttachmentBytes,
    attachmentsReady,
    chatError: chatError as any,
  })

  return {
    attachments: processedAttachments,
    setAttachments,
    createPendingAttachment,
    setAttachmentById,
    claimAPendingAttachmentOrMakeOne,
    createLoadedAttachment,
    clearAttachment,
    stashAllAttachments,
    totalAttachmentBytes,
    attachmentsReady,
  }
}

/**
 * Process attachment image (resize if needed)
 * @param attachment - The attachment to process
 * @returns Promise resolving to processed attachment
 */
function processAttachmentImage(attachment: Attachment): Promise<Attachment> {
  // Return early if not a success attachment or no image
  if (attachment.status !== 'success' || !('image' in attachment) || !attachment.image) {
    return Promise.resolve(attachment)
  }

  return new Promise((resolve) => {
    const img = new Image()

    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      let width = img.width
      let height = img.height

      // Resize if larger than 1000px in either dimension
      if (img.width > 1000 || img.height > 1000) {
        if (img.width > img.height) {
          width = 1000
          height = Math.round(1000 * img.height / img.width)
        }
        else {
          height = 1000
          width = Math.round(1000 * img.width / img.height)
        }
      }

      canvas.width = width
      canvas.height = height

      if (ctx) {
        ctx.imageSmoothingEnabled = true
        ctx.imageSmoothingQuality = 'high'
        ctx.drawImage(img, 0, 0, width, height)
      }

      const resizedImage = canvas.toDataURL('image/png')

      resolve({
        ...attachment,
        image: resizedImage,
      } as Attachment)
    }

    img.onerror = () => {
      resolve(attachment)
    }

    img.src = attachment.image
  })
}

/**
 * Generate thumbnail for node
 * @param node - The node to generate thumbnail for
 * @returns Thumbnail URL or null
 */
export function generateNodeThumbnail(node: { size: { x: number, y: number }, guid: string } | null): string | null {
  if (!node)
    return null

  const thumbnail = generateExportThumbnail(
    new Point(node.size.x, node.size.y),
    node.guid,
    true,
    BackgroundPattern.TRANSPARENT,
  )

  return thumbnail ? convertImageDataToURL(thumbnail.pixels, thumbnail.pixelSize) : null
}

/**
 * Get image hash from node fills
 * @param node - The node to get image hash from
 * @returns Image hash or null
 */
export function getNodeImageHash(node: { fills: Array<{ image?: { hash?: Uint8Array }, visible?: boolean }> } | null): string | null {
  if (!node)
    return null

  const imageFill = node.fills.find(fill => fill.image && fill.visible)
  return imageFill?.image?.hash ? uint8ArrayToHex(imageFill.image.hash) : null
}

/**
 * Calculate image size from base64 string
 * @param image - Base64 image string
 * @returns Size in bytes
 */
function calculateImageSize(image: string | undefined): number {
  return image ? Math.floor(3 * image.length / 4) : 0
}

// Export constants and functions with original names for backward compatibility
export const Ah = attachmentsAtomFamily
export const NC = generateNodeThumbnail
export const Q_ = createPendingAttachmentAtom
export const WH = restoreStashedAttachments
export const Zz = getNodeImageHash
export const _5 = removePendingAttachmentAndShowError
export const _9 = useAttachments
export const aZ = isAttachmentLoaded
export const ak = isLoadedAttachmentWithNodeGuid
export const hH = handleInsertError
export const oz = useRemoveAttachment
export const qG = hasMaxAttachmentsAtom
export const qQ = MAX_ATTACHMENTS
export const yM = convertAttachmentType

// Export constants and functions with descriptive names
// export const attachmentsAtom = attachmentsAtomFamily
// export const generateThumbnail = generateNodeThumbnail
// export const createPendingAttachment = createPendingAttachmentAtom
// export const restoreStashed = restoreStashedAttachments
// export const getImageHash = getNodeImageHash
// export const removePendingAndShowError = removePendingAttachmentAndShowError
// export const useAttachmentsHook = useAttachments
// export const isLoaded = isAttachmentLoaded
// export const isLoadedWithNodeGuid = isLoadedAttachmentWithNodeGuid
// export const handleInsertErrorFn = handleInsertError
// export const useRemoveAttachmentHook = useRemoveAttachment
// export const hasMaxAttachments = hasMaxAttachmentsAtom
// export const maxAttachmentsCount = MAX_ATTACHMENTS
// export const convertType = convertAttachmentType
