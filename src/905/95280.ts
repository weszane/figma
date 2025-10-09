import { noop } from 'lodash-es'
import { useCallback, useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { jsx } from "react/jsx-runtime"
import { ModalSupportsBackground, registerModal } from "../905/102752"
import { hideModal, showModalHandler } from "../905/156213"
import { sanitizeInput } from "../905/241044"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { trackEventAnalytics } from "../905/449184"
import { VisualBellIcon, VisualBellShape } from "../905/576487"
import { dayjs } from "../905/920142"
import { PZ, SI } from "../figma_app/241341"
import { HISTORY_DOCUMENT_INDEX } from "../figma_app/518682"
import { _W, DS } from "../figma_app/571341"
import { Fullscreen } from "../figma_app/763686"
import { findVersionById, startCompareChanges } from "../figma_app/841351"

/**
 * Modal component for comparing changes in version history.
 * @param props - The modal props containing nodeId.
 * @returns JSX element for the compare changes modal.
 */
export function CompareChangesModal({ nodeId }: { nodeId: string }) {
  const dispatch = useDispatch<AppDispatch>()
  const { versions, versionsQueryLoaded } = DS(nodeId)
  const compareId = useSelector((state: any) => state.versionHistory.compareId)
  const selectedVersion = useMemo(() => compareId ? versions.find((v: any) => v.id === compareId) ?? null : null, [versions, compareId])
  const [renderLoadingBar, setRenderLoadingBar] = useState(true)
  const [modalError, setModalError] = useState(false)
  const preferencesApi = {
    inspectionMode: "properties" as const,
    setInspectionMode: noop,
    inspectionModes: ["properties"] as const,
  }
  const [historicImage, setHistoricImage] = useState<any>(undefined)
  const hasHistoricImage = historicImage !== undefined
  const [currentImage, setCurrentImage] = useState<any>(undefined)
  const hasCurrentImage = !!currentImage

  useEffect(() => {
    if (renderLoadingBar && hasHistoricImage && hasCurrentImage && versionsQueryLoaded) {
      setRenderLoadingBar(false)
    }
  }, [renderLoadingBar, hasHistoricImage, hasCurrentImage, versionsQueryLoaded])

  const handleVersionSelect = useCallback((version: any) => {
    if (version.id !== compareId) {
      setHistoricImage(undefined)
      dispatch(startCompareChanges({ fromVersionId: version.id }))
    }
  }, [dispatch, compareId])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHistoricImage(SI({
        nodeId,
        documentIndex: HISTORY_DOCUMENT_INDEX,
        showError: () => setHistoricImage(null),
      }))
    }, _W)
    return () => clearTimeout(timeout)
  }, [nodeId, compareId])

  useEffect(() => {
    const timeout = setTimeout(() => {
      const onError = () => {
        setCurrentImage(undefined)
        setModalError(true)
      }
      const image = SI({ nodeId, showError: onError })
      if (!image) {
        onError()
        return
      }
      setCurrentImage(image)
    }, _W)
    return () => clearTimeout(timeout)
  }, [nodeId])

  const handleCloseModal = useCallback(() => {
    dispatch(hideModal())
  }, [dispatch])

  return jsx(PZ, {
    currentImage,
    historicImage,
    modalError,
    modalTitle: getI18nString("collaboration.feedback.compare_changes_modal.header"),
    nodeId,
    onCloseModal: handleCloseModal,
    origin: "cc_versions",
    preferencesApi,
    renderLoadingBar,
    selectedVersion,
    setSelectedVersion: handleVersionSelect,
    skipCorrectHistoryCanvasCheck: true,
    versions,
  })
}

const compareChangesModal = registerModal(CompareChangesModal, "CompareChangesModal", ModalSupportsBackground.YES)

/**
 * Hook to get a callback for showing compare changes notification.
 * @returns A callback function that takes a nodeId and shows the notification if conditions are met.
 */
export function useCompareChangesHandler() {
  const dispatch = useDispatch<AppDispatch>()
  const compareId = useSelector((state: any) => state.versionHistory.compareId)
  const version = useSelector((state: any) => findVersionById(compareId, state.versionHistory))
  const modalShown = useSelector((state: any) => state.modalShown)
  return useCallback((nodeId: string) => {
    showCompareChangesNotification(nodeId, dispatch, version, modalShown)
  }, [dispatch, version, modalShown])
}

/**
 * Shows a compare changes notification if applicable.
 * @param nodeId - The node ID to check for changes.
 * @param dispatch - Redux dispatch function.
 * @param version - The version object.
 * @param modalShown - Whether a modal is currently shown.
 */
export function showCompareChangesNotification(nodeId: string, dispatch: any, version: any, modalShown: boolean) {
  if (modalShown)
    return
  const sanitizedHandle = sanitizeInput(version?.user?.handle)
  if (sanitizedHandle && version?.touched_at && Fullscreen.getChunkChangeMap().has(nodeId)) {
    if (!Fullscreen.getChangesToCompareFromHistoryChangesState().has(nodeId)) {
      dispatch(VisualBellActions.dequeue({ matchType: "view_changes" }))
      return
    }
    dispatch(VisualBellActions.dequeue({}))
    dispatch(VisualBellActions.enqueue({
      message: getI18nString("collaboration.feedback.compare_changes_modal.action_text", {
        lastEditedBy: sanitizedHandle,
        lastEditedAt: dayjs(version.touched_at).fromNow(),
      }),
      type: "view_changes",
      button: {
        text: getI18nString("collaboration.feedback.compare_changes_modal.action_button"),
        action: () => {
          trackEventAnalytics("version_diffing_performance_metrics", {
            name: "diffing_modal_cta_clicked",
            entrypoint: "figma_design_version_history",
          })
          dispatch(showModalHandler({
            type: compareChangesModal,
            data: { nodeId },
          }))
        },
      },
      icon: version.user.img_url !== "" ? VisualBellIcon.FROM_URL : VisualBellIcon.NONE,
      iconShape: VisualBellShape.CIRCLE,
      iconURL: version.user.img_url,
    }))
  }
}

export const z = showCompareChangesNotification
export const E = useCompareChangesHandler
