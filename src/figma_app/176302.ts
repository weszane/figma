import type { PrimitiveAtom } from 'jotai'
import { useSetAtom } from 'jotai'
import { RESET } from 'jotai/utils'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useConditionalCallback } from '../905/165069'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { getUserId } from '../905/372672'
import { analyticsEventManager } from '../905/449184'
import { VisualBellIcon } from '../905/576487'
import { logError } from '../905/714362'
import { useSingleEffect } from '../905/791079'
import { useIsFullscreenReady } from '../figma_app/21029'
import { atom, useAtomValueAndSetter, useAtomWithSubscription } from '../figma_app/27355'
import { loadCanvasDataAsync } from '../figma_app/53049'
import { sendToMakeFromDesignAtom, sessionIdAtom } from '../figma_app/223206'
import { debug } from '../figma_app/465776'
import { useCurrentFileKey } from '../figma_app/516028'
import { AppStateTsApi, Fullscreen } from '../figma_app/763686'
import { getAppVisibilityState, subscribeToAppVisibility } from '../figma_app/925651'

// Status management for send-to-make-from-design flow
const sendToMakeStatusAtom = atom({
  status: 'idle', // 'idle' | 'creating' | 'waiting-for-attachments' | 'completed' | 'error'
})

// Status transition actions
const sendToMakeStatusActions = {
  start: () => ({
    status: 'creating',
  }),
  waitForAttachments: () => ({
    status: 'waiting-for-attachments',
  }),
  complete: () => ({
    status: 'completed',
  }),
  error: (error: Error) => ({
    status: 'error',
    error,
  }),
  reset: () => ({
    status: 'idle',
  }),
}

// Status query atoms

const isSendToMakeCreatingAtom = atom(get => get(sendToMakeStatusAtom).status === 'creating')
const isSendToMakeWaitingForAttachmentsAtom = atom(get => get(sendToMakeStatusAtom).status === 'waiting-for-attachments')
const isSendToMakeCompletedAtom = atom(get => get(sendToMakeStatusAtom).status === 'completed')

const isSendToMakeActiveAtom = atom(get => get(isSendToMakeCreatingAtom) || get(isSendToMakeWaitingForAttachmentsAtom))

interface SendToMakeFromDesignFlowProps {
  fileKey: string
  fileVersion: string
  pageGuid: string
  selectedNodeId: string
  exceedsMakePasteThreshold: boolean
}
// Metadata storage for current send-to-make operation
const sendToMakeMetadataAtom = atom<null | SendToMakeFromDesignFlowProps>(null) as PrimitiveAtom<SendToMakeFromDesignFlowProps>

/**
 * Hook to handle completion of send-to-make operation
 * Tracks analytics and resets state
 */
export function useHandleSendToMakeCompletion() {
  const isCompleted = useAtomWithSubscription(isSendToMakeCompletedAtom)
  const [metadata, setMetadata] = useAtomValueAndSetter(sendToMakeMetadataAtom)
  const hasHandledCompletion = useRef(false)

  const trackCompletionEvent = useCallback((status: 'success' | 'error', error?: string) => {
    if (metadata) {
      analyticsEventManager.trackDefinedEvent('activation.send_to_make_from_design.prompt_with_attachments', {
        ...metadata,
        status,
        ...(error && { error }),
      })
    }
  }, [metadata])

  return useCallback((status: 'success' | 'error', errorMessage?: string) => {
    if (isCompleted && metadata !== null && !hasHandledCompletion.current) {
      hasHandledCompletion.current = true
      status === 'success' ? trackCompletionEvent('success') : errorMessage && trackCompletionEvent('error', errorMessage)
      setMetadata(null)
    }
  }, [isCompleted, setMetadata, metadata, trackCompletionEvent])
}

/**
 * Load canvas data for the selected node and apply to fullscreen
 */
async function loadAndApplyCanvasData({
  fileKey,
  selectedNodeId,
}: {
  fileKey: string
  selectedNodeId: string
}) {
  const selectedGuids = [selectedNodeId]
  const canvasData = await loadCanvasDataAsync({
    fileKey,
    selectedGuids,
  })
  Fullscreen?.applyNodesFromBuffer(canvasData, fileKey, selectedGuids, true)
}

/**
 * Component to manage the send-to-make attachment flow
 * Handles success/error states and visual bell notifications
 */
export interface SendToMakeAttachmentManagerProps {
  totalAttachmentBytes: number
  attachmentsReady: boolean
  chatError: { error: Error } | null
}

export function SendToMakeAttachmentManager({
  totalAttachmentBytes,
  attachmentsReady,
  chatError,
}: SendToMakeAttachmentManagerProps) {
  const dispatch = useDispatch()
  const setStatus = useSetAtom(sendToMakeStatusAtom)
  const isWaitingForAttachments = useAtomWithSubscription(isSendToMakeWaitingForAttachmentsAtom)
  const [metadata, setMetadata] = useAtomValueAndSetter(sendToMakeMetadataAtom)
  const hasHandledResult = useRef(false)

  const trackAttachmentEvent = useCallback((status: 'success' | 'error', error?: string) => {
    if (metadata) {
      analyticsEventManager.trackDefinedEvent('activation.send_to_make_from_design.frame_pasted_as_attachment', {
        ...metadata,
        status,
        ...(error && { error }),
      })
    }
  }, [metadata])

  const showSuccessVisualBell = useCallback(() => {
    dispatch(VisualBellActions.dequeue({
      matchType: 'send-to-make-from-design-load',
    }))
    dispatch(VisualBellActions.enqueue({
      message: getI18nString('figmake.send_to_make_from_design.visual_bell.complete'),
      type: 'send-to-make-from-design-complete',
      icon: VisualBellIcon.CHECK,
      timeoutOverride: 3000,
    }))
  }, [dispatch])

  const showErrorVisualBell = useCallback(() => {
    dispatch(VisualBellActions.dequeue({
      matchType: 'send-to-make-from-design-load',
    }))
    dispatch(VisualBellActions.enqueue({
      message: getI18nString('figmake.send_to_make_from_design.error.something-went-wrong'),
      type: 'send-to-make-from-design-failed',
      icon: VisualBellIcon.EXCLAMATION,
      error: true,
      timeoutOverride: 3000,
    }))
  }, [dispatch])

  const handleAttachmentsSuccess = useCallback(() => {
    if (!hasHandledResult.current) {
      hasHandledResult.current = true
      trackAttachmentEvent('success')
      setStatus(sendToMakeStatusActions.complete())
      showSuccessVisualBell()
    }
  }, [trackAttachmentEvent, setStatus, showSuccessVisualBell])

  const handleAttachmentsError = useCallback((errorMessage: string) => {
    if (!hasHandledResult.current) {
      hasHandledResult.current = true
      trackAttachmentEvent('error', errorMessage)
      setStatus(sendToMakeStatusActions.error(new Error(errorMessage)))
      setMetadata(null)
      showErrorVisualBell()
    }
  }, [trackAttachmentEvent, setStatus, setMetadata, showErrorVisualBell])

  // Reset handling state when waiting for attachments
  useEffect(() => {
    if (isWaitingForAttachments) {
      hasHandledResult.current = false
    }
  }, [isWaitingForAttachments])

  // Handle attachment completion or error
  useEffect(() => {
    if (isWaitingForAttachments && !hasHandledResult.current) {
      if (totalAttachmentBytes > 0 && attachmentsReady) {
        handleAttachmentsSuccess()
        return
      }
      if (chatError) {
        handleAttachmentsError(chatError.error.message)
      }
    }
  }, [
    isWaitingForAttachments,
    totalAttachmentBytes,
    attachmentsReady,
    chatError,
    handleAttachmentsSuccess,
    handleAttachmentsError,
  ])

  // Timeout handling for attachment waiting
  useEffect(() => {
    if (!isWaitingForAttachments)
      return

    const timeoutId = setTimeout(() => {
      handleAttachmentsError('send_to_make_paste_timeout')
    }, 300000) // 5 minutes

    return () => clearTimeout(timeoutId)
  }, [isWaitingForAttachments, handleAttachmentsError])

  // Reset status on unmount
  useSingleEffect(() => () => {
    setStatus(sendToMakeStatusActions.reset())
  })
}

/**
 * Component to initiate the send-to-make flow
 * Handles file bootstrapping and initial visual bell
 */
export function SendToMakeInitiator() {
  const dispatch = useDispatch()
  const isFullscreenReady = useIsFullscreenReady()
  const currentFileKey = useCurrentFileKey()
  const makeCreationData = useAtomWithSubscription(sendToMakeFromDesignAtom)
  const setSessionId = useSetAtom(sessionIdAtom)
  const figmakeState = AppStateTsApi?.figmakeState()
  const setStatus = useSetAtom(sendToMakeStatusAtom)
  const setMetadata = useSetAtom(sendToMakeMetadataAtom)
  const userId = getUserId()
  const [isAppVisible, setIsAppVisible] = useState(() => getAppVisibilityState() === 'visible')

  useSingleEffect(() =>
    subscribeToAppVisibility((visibilityState) => {
      setIsAppVisible(visibilityState === 'visible')
    }),
  )

  return useConditionalCallback(() => {
    debug(!!makeCreationData, 'makeCreationData is undefined. This should never happen')

    // Show initial loading visual bell
    dispatch(VisualBellActions.enqueue({
      message: makeCreationData.exceedsMakePasteThreshold
        ? getI18nString('figmake.send_to_make_from_design.visual_bell.copying_complex_frames')
        : getI18nString('figmake.send_to_make_from_design.visual_bell.copying_frames'),
      type: 'send-to-make-from-design-load',
      icon: VisualBellIcon.SPINNER,
      preventDismissal: true,
      timeoutOverride: 300000, // 5 minutes
    }))

    setStatus(sendToMakeStatusActions.start())

    // Store metadata for this operation
    const operationMetadata = {
      userId: userId ?? '',
      makeFileKey: currentFileKey ?? '',
      fileKey: makeCreationData.fileKey,
      fileVersion: makeCreationData.fileVersion,
      pageGuid: makeCreationData.pageGuid,
      selectedNodeId: makeCreationData.selectedNodeId,
      exceedsMakePasteThreshold: makeCreationData.exceedsMakePasteThreshold,
    }

    setMetadata(operationMetadata)

    // Load and apply canvas data
    loadAndApplyCanvasData({
      fileKey: makeCreationData.fileKey,
      selectedNodeId: makeCreationData.selectedNodeId,
    })
      .then(() => {
        analyticsEventManager.trackDefinedEvent('activation.send_to_make_from_design.file_bootstrapped_from_design', {
          ...operationMetadata,
          status: 'success',
        })
        setSessionId(RESET)
        setStatus(sendToMakeStatusActions.waitForAttachments())
      })
      .catch((error) => {
        logError('sendToMakeFromDesign', 'copyNodeToMakeFromDesign failed with some error', {
          ...operationMetadata,
          error: error?.message ?? JSON.stringify(error),
        }, {
          reportAsSentryError: true,
        })

        analyticsEventManager.trackDefinedEvent('activation.send_to_make_from_design.file_bootstrapped_from_design', {
          ...operationMetadata,
          status: 'error',
          error: error?.message ?? JSON.stringify(error),
        })

        setStatus(sendToMakeStatusActions.error(error))
        setMetadata(null)

        dispatch(VisualBellActions.dequeue({
          matchType: 'send-to-make-from-design-load',
        }))
        dispatch(VisualBellActions.enqueue({
          message: getI18nString('figmake.send_to_make_from_design.error.something-went-wrong'),
          type: 'send-to-make-from-design-failed',
          icon: VisualBellIcon.EXCLAMATION,
          error: true,
          timeoutOverride: 3000,
        }))
      })
  }, [userId, currentFileKey, isFullscreenReady, makeCreationData, setSessionId, figmakeState, setStatus, setMetadata], () => !!(userId && currentFileKey && isFullscreenReady && makeCreationData && figmakeState && isAppVisible))
}

// Exported components and atoms with meaningful names
export const MD = SendToMakeAttachmentManager
export const Ng = isSendToMakeActiveAtom
export const YT = useHandleSendToMakeCompletion
export const aQ = isSendToMakeCompletedAtom
export const vG = SendToMakeInitiator
