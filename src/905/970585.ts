import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { jsx, jsxs } from "react/jsx-runtime"
import { z as _$$z } from "zod"
import { reportError, setTagGlobal } from "../905/11"
import { kiwiCodec } from "../905/5147"
import { ModalCloseButton } from "../905/17223"
import { isLoading } from "../905/18797"
import { fullscreenRestoreModal } from "../905/26554"
import { fullscreenAlias } from "../905/37051"
import { registerLegacyModal, registerModal } from "../905/102752"
import { fullscreenPerfManager } from "../905/125218"
import { hideModal, showModalHandler } from "../905/156213"
import { ServiceCategories } from "../905/165054"
import { Be } from "../905/172516"
import { VisualBellActions } from "../905/302958"
import { getI18nString, renderI18nText } from "../905/303541"
import { mapEditorTypeToLoggingTag } from "../905/327855"
import { handleSaveStatusUpdate } from "../905/344656"
import { createOptimistThunk } from "../905/350402"
import { handleSyncEvent } from "../905/412815"
import { analyticsEventManager, trackEventAnalytics } from "../905/449184"
import { Button } from "../905/521428"
import { FlashActions } from "../905/573154"
import { getFeatureFlags } from "../905/601108"
import { customHistory } from "../905/612521"
import { parseQuery } from "../905/634134"
import { getSingletonSceneGraph } from "../905/700578"
import { VERSION_HISTORY_SET_DOC_HAS_CHANGED } from "../905/784363"
import { isValidSessionLocalID, parseSessionLocalID } from "../905/871411"
import { sendWithRetry } from "../905/910117"
import { J as _$$J } from "../905/915227"
import { filesByLibraryKeyAtom } from "../905/977779"
import { atomStoreManager } from "../figma_app/27355"
import { handleAutosaveAndNavigationThunk, startRecordingThunk, stopRecordingThunk, updateMultiplayerStateThunk } from "../figma_app/91703"
import { FileProcessingStatus, finishAutosaveWait, getAutosaveState } from "../figma_app/139113"
import { isLocalDevOnCluster } from "../figma_app/169182"
import { Yq } from "../figma_app/305244"
import { incrementReconnectCounter } from "../figma_app/314264"
import { clearPresentationStoppedAlertThunk, handlePresentationStoppedThunk } from "../figma_app/440875"
import { getFullscreenViewFile } from "../figma_app/516028"
import { setupConnectionStateHandler, setupFlushTimer } from "../figma_app/582924"
import { hasChangesAtom } from "../figma_app/622574"
import { ButtonSecondary } from "../figma_app/637027"
import { DD, jE, v0, yl } from "../figma_app/639088"
import { findLibraryNameForAsset, usedComponentsPromise } from "../figma_app/646357"
import { loadingStatePutSuccess } from "../figma_app/714946"
import { FileLoadEvent, Fullscreen, Multiplayer, SchemaJoinStatus, SyncError } from "../figma_app/763686"
import { $5 } from "../figma_app/869006"
import { desktopAPIInstance } from "../figma_app/876459"
import { TabState } from "../figma_app/915202"
import { ModalContainer } from "../figma_app/918700"

// Refactored for readability, type safety, and modularity.
// Renamed variables, added explicit types, simplified logic, and improved comments.



class TooManyConnectionsParser {
  public readonly url: string
  public readonly type: "example-file" | "real-file"

  static attemptToParseFrom(payload: string): TooManyConnectionsParser {
    const schema = _$$z.object({
      url: _$$z.string(),
      type: _$$z.enum(["example-file", "real-file"]),
    })

    try {
      const parsedData = schema.parse(JSON.parse(payload))
      return new TooManyConnectionsParser(parsedData.url, parsedData.type)
    }
    catch {
      throw new Error("Failed to parse TooManyConnectionsPayload")
    }
  }

  constructor(url: string, type: "example-file" | "real-file") {
    this.url = url
    this.type = type
  }
}

/**
 * Handles fallback loading when there are too many connections.
 * @param payload - Encoded payload containing URL and type info.
 * @param nodeId - Node ID to navigate to after loading.
 */
async function handleTooManyConnectionsFallback(
  payload: string,
  nodeId: string,
): Promise<void> {
  let errorMessage: string | undefined
  let isSuccess = true

  try {
    const parser = TooManyConnectionsParser.attemptToParseFrom(payload)
    const response = await sendWithRetry.crossOriginGet(parser.url, null, {
      responseType: "arraybuffer",
    })
    const fileBuffer = response?.data

    if (!fileBuffer)
      throw new Error("Empty file buffer")
    if (!Fullscreen.loadFigFileForFallback(fileBuffer))
      throw new Error("Failed to load file buffer")

    await getSingletonSceneGraph().setCurrentPageFromNodeAsync(nodeId)
  }
  catch (error) {
    errorMessage = JSON.stringify(error)
    isSuccess = false
    reportError(
      ServiceCategories.SCENEGRAPH_AND_SYNC,
      new Error("Failed to load file buffer for too-many-connections fallback"),
      { extra: { error: errorMessage } },
    )
  }
  finally {
    analyticsEventManager.trackDefinedEvent(
      "scenegraph_and_sync.too_many_connections_fallback",
      {
        success: isSuccess,
        error: errorMessage,
      },
    )
  }
}

const MULTIPLAYER_CONNECTION_ERROR_MODAL = "multiplayer-connection-error-modal"
const MULTIPLAYER_TOO_MANY_CONNECTIONS_MODAL = "multiplayer-too-many-connections"

/**
 * Auto-hides modal once multiplayer session joins successfully.
 */
function useAutoHideOnJoined(dispatch: React.Dispatch<any>): void {
  const isJoined = useSelector(
    (state: any) =>
      state.mirror.appModel.multiplayerSessionState === SchemaJoinStatus.JOINED,
  )

  useEffect(() => {
    if (isJoined) {
      dispatch(hideModal())
    }
  }, [dispatch, isJoined])
}

interface ModalProps {
  modalShown: { data: any }
  dispatch: React.Dispatch<any>
  selectedView?: any
}

function ConnectionErrorModal({ modalShown, dispatch }: ModalProps) {
  const data = modalShown.data
  useAutoHideOnJoined(dispatch)

  return jsxs(ModalContainer, {
    size: "small",
    className: yl,
    children: [
      jsx("div", {
        className: DD,
        children: data.title,
      }),
      jsx("div", {
        className: jE,
        children: data.message,
      }),
      jsx("div", {
        className: v0,
        children: jsxs(Button, {
          onClick: () => {
            dispatch(hideModal())
          },
          children: [
            " ",
            renderI18nText("multiplayer_connection_error.dismiss_button"),
            " ",
          ],
        }),
      }),
    ],
  })
}

function TooManyConnectionsModal({
  modalShown,
  dispatch,
  selectedView,
}: ModalProps) {
  const data = modalShown.data

  const handleViewOnlyClick = async () => {
    if (selectedView?.view === "fullscreen") {
      let nodeId = data.nodeId
      if (isValidSessionLocalID(parseSessionLocalID(selectedView.nodeId))) {
        nodeId = selectedView.nodeId
      }

      if (getFeatureFlags()?.max_connection_load_fallback) {
        dispatch(hideModal())
        await handleTooManyConnectionsFallback(data.signalPayload, nodeId)
      }
      else {
        const url = `/file/${selectedView.fileKey}/?viewer=1&node-id=${nodeId}`
        customHistory.redirect(url)
      }
    }
  }

  useAutoHideOnJoined(dispatch)

  return jsxs(ModalContainer, {
    size: "small",
    className: yl,
    children: [
      jsx("div", {
        className: DD,
        children: renderI18nText(
          "multiplayer_connection_error.too_many_connections.title",
        ),
      }),
      jsx("div", {
        className: jE,
        children: renderI18nText(
          "multiplayer_connection_error.too_many_connections.content",
        ),
      }),
      !desktopAPIInstance
      && jsx("div", {
        className: v0,
        children: jsx(Button, {
          onClick: handleViewOnlyClick,
          children: renderI18nText(
            "multiplayer_connection_error.too_many_connections.view_only_button",
          ),
        }),
      }),
    ],
  })
}

registerLegacyModal(
  MULTIPLAYER_CONNECTION_ERROR_MODAL,
  props => jsx(ConnectionErrorModal, { ...props }),
)
registerLegacyModal(
  MULTIPLAYER_TOO_MANY_CONNECTIONS_MODAL,
  props => jsx(TooManyConnectionsModal, { ...props }),
)

const EditorLimitModal = registerModal(() => {
  const dispatch = useDispatch<AppDispatch>()

  const helpCenterLink = jsx("a", {
    className: Be,
    href: "https://help.figma.com/hc/articles/1500006775761",
    target: "_blank",
    children: renderI18nText("multiplayer_limit.help_center"),
  })

  return jsxs(ModalContainer, {
    size: "small",
    title: getI18nString("multiplayer_limit.editor_limit_modal_title.seat_rename"),
    children: [
      jsx(ModalCloseButton, {
        dispatch,
      }),
      jsxs("div", {
        className: jE,
        children: [
          jsx("p", {
            children: renderI18nText(
              "multiplayer_limit.editor_limit_modal_content.seat_rename",
            ),
          }),
          jsx("br", {}),
          jsx("p", {
            children: renderI18nText("multiplayer_limit.more_info", {
              moreInfoLink: helpCenterLink,
            }),
          }),
          jsx("div", {
            className: v0,
            children: jsx(ButtonSecondary, {
              onClick: () => {
                dispatch(hideModal())
              },
              children: renderI18nText("multiplayer_limit.done_button"),
            }),
          }),
        ],
      }),
    ],
  })
}, "MultiplayerEditorLimitModal")

const CursorLimitModal = registerModal(() => {
  const dispatch = useDispatch<AppDispatch>()

  const helpCenterLink = jsx("a", {
    className: Be,
    href: "https://help.figma.com/hc/articles/1500006775761",
    target: "_blank",
    children: renderI18nText("multiplayer_limit.help_center"),
  })

  return jsxs(ModalContainer, {
    size: "small",
    title: getI18nString("multiplayer_limit.cursor_limit_modal_title"),
    children: [
      jsx(ModalCloseButton, {
        dispatch,
      }),
      jsxs("div", {
        className: jE,
        children: [
          jsx("p", {
            children: renderI18nText(
              "multiplayer_limit.cursor_limit_modal_content",
            ),
          }),
          jsx("br", {}),
          jsx("p", {
            children: renderI18nText("multiplayer_limit.more_info", {
              moreInfoLink: helpCenterLink,
            }),
          }),
        ],
      }),
      jsx("div", {
        className: v0,
        children: jsx(ButtonSecondary, {
          onClick: () => {
            dispatch(hideModal())
          },
          children: renderI18nText("multiplayer_limit.done_button"),
        }),
      }),
    ],
  })
}, "MultiplayerCursorLimitModal")

export const initializeFlashMessage = createOptimistThunk((store) => {
  const flashParam = parseQuery(customHistory.location.search).flash
  if (flashParam) {
    store.dispatch(FlashActions.flash(flashParam))
  }
})

export class MultiplayerController {
  private store: any
  private hasShownMultiplayerDecodeError = false
  private dispatch: Function = () => { }

  constructor(store: any) {
    this.store = store
    this.dispatch = store.dispatch
  }

  private hasUnsavedChanges(): boolean {
    const state = this.store.getState()
    return !!(state.saveStatus && state.saveStatus.hasUnsavedChanges)
  }

  reconnectingStarted(): void {
    this.dispatch(stopRecordingThunk())
  }

  reconnectingSucceeded(): void {
    if (getFeatureFlags()?.fullscreen_send_client_rendered_message) {
      Multiplayer.sendClientRendered(
        fullscreenPerfManager.getClientRenderedMetadata(),
      )
    }
    else {
      Multiplayer.sendSignal("client-rendered", "")
    }

    this.dispatch(startRecordingThunk())

    if (isLoading(this.store.getState().loadingState, $5)) {
      this.dispatch(loadingStatePutSuccess({ key: $5 }))
    }
  }

  updateSaveStatus(
    hasAutosaveChanges: boolean,
    hasMultiplayerChanges: boolean,
    syncError: SyncError,
    tabStateRaw: any,
  ): void {
    const tabState = new TabState(
      tabStateRaw,
      { hasAutosaveChanges, hasMultiplayerChanges },
      syncError,
    )

    if (
      this.hasUnsavedChanges()
      && !this.store.getState().versionHistory.docHasChanged
    ) {
      this.dispatch(
        VERSION_HISTORY_SET_DOC_HAS_CHANGED({
          status: true,
        }),
      )
    }

    const currentSaveStatus = this.store.getState().saveStatus
    if (!currentSaveStatus || !tabState.equals(currentSaveStatus)) {
      this.dispatch(handleSaveStatusUpdate(tabState))
      handleSyncEvent(tabState)
    }

    const autosaveState = getAutosaveState()
    if (
      autosaveState
      && autosaveState.status === FileProcessingStatus.WAITING
      && !hasAutosaveChanges
      && !hasMultiplayerChanges
      && syncError === SyncError.NONE
    ) {
      finishAutosaveWait(false)
      setTimeout(() => this.dispatch(handleAutosaveAndNavigationThunk()))
    }
  }

  updateMultiplayerState(state: any): void {
    this.dispatch(updateMultiplayerStateThunk(state))
  }

  restartPresentation(timeElapsedSeconds: number): void {
    Multiplayer.startPresenting()
    trackEventAnalytics("Spotlight Restarted After Disconnect", {
      timeElapsedSeconds,
    })
  }

  showPresentationStoppedVisualBell(presenterSessionID: string): void {
    this.dispatch(
      handlePresentationStoppedThunk({
        presenterSessionID,
      }),
    )
  }

  cancelPresentationStoppedVisualBell(): void {
    this.dispatch(clearPresentationStoppedAlertThunk())
  }

  setBackgroundFlushInterval(intervalMs: number): void {
    setupFlushTimer(intervalMs)
  }

  startMonitorInterval(): void {
    setupConnectionStateHandler()
  }

  handleMultiplayerSignal(
    signal: string,
    payload: string,
    nodeId: string,
  ): void {
    switch (signal) {
      case "force-refresh":
        customHistory.reload("Multiplayer got force-refresh signal")
        break

      case "too-many-connections":
        if (this.hasUnsavedChanges()) {
          const title = getI18nString(
            "unsaved_changes.syncing.changes_cannot_be_saved",
          )
          const message = getI18nString(
            "unsaved_changes.syncing.too_many_people_in_file",
          )
          this.dispatch(
            showModalHandler({
              type: MULTIPLAYER_CONNECTION_ERROR_MODAL,
              data: { message, title },
            }),
          )
        }
        else {
          this.dispatch(
            showModalHandler({
              type: MULTIPLAYER_TOO_MANY_CONNECTIONS_MODAL,
              data: { nodeId, signalPayload: payload },
            }),
          )
        }
        break

      case "message-decode-failure":
        if (!this.hasShownMultiplayerDecodeError) {
          this.hasShownMultiplayerDecodeError = true
          this.dispatch(
            VisualBellActions.enqueue({
              message: getI18nString(
                "unsaved_changes.syncing.experiencing_server_issues",
              ),
            }),
          )
        }
        break

      case "invalid-permissions": {
        let title: string
        let message: string

        if (this.hasUnsavedChanges()) {
          title = getI18nString(
            "unsaved_changes.syncing.changes_cannot_be_saved",
          )
          message = getI18nString(
            "unsaved_changes.syncing.unsaved_revoked_access",
          )
        }
        else {
          title = getI18nString("unsaved_changes.syncing.access_revoked")
          message = getI18nString(
            "unsaved_changes.syncing.someone_revoked_access_to_the_file_you_had_open_ask_the_owner_for_access_to_open_it_again",
          )
          this.dispatch(
            handleAutosaveAndNavigationThunk({
              closeDesktopTabWithMessage: message,
            }),
          )
        }

        trackEventAnalytics(
          "Context Viewed",
          { name: "multiplayer-revoked-access-modal" },
          { forwardToDatadog: true },
        )

        this.dispatch(
          showModalHandler({
            type: MULTIPLAYER_CONNECTION_ERROR_MODAL,
            data: { message, title },
          }),
        )
        break
      }

      case "not-logged-in": {
        let title: string
        let message: string

        if (this.hasUnsavedChanges()) {
          title = getI18nString(
            "unsaved_changes.syncing.changes_cannot_be_saved",
          )
          message = getI18nString(
            "unsaved_changes.syncing.unsaved_not_logged_in",
          )
        }
        else {
          this.dispatch(handleAutosaveAndNavigationThunk())
          title = getI18nString("unsaved_changes.syncing.logged_out")
          message = getI18nString(
            "unsaved_changes.syncing.you_have_been_logged_out_of_figma",
          )
        }

        this.dispatch(
          showModalHandler({
            type: MULTIPLAYER_CONNECTION_ERROR_MODAL,
            data: { message, title },
          }),
        )
        break
      }

      case "client-too-old":
        if (this.hasUnsavedChanges()) {
          const title = getI18nString(
            "unsaved_changes.syncing.changes_cannot_be_saved",
          )
          const message = getI18nString(
            "unsaved_changes.syncing.app_out_of_date",
          )
          this.dispatch(
            showModalHandler({
              type: MULTIPLAYER_CONNECTION_ERROR_MODAL,
              data: { message, title },
            }),
          )
        }
        else {
          this.dispatch(
            FlashActions.flash(
              getI18nString("unsaved_changes.syncing.updating_the_app"),
            ),
          )
          setTimeout(() => {
            let redirectUrl = location.href
            redirectUrl += /\?/.test(redirectUrl) ? "&" : "?"
            redirectUrl += `flash=${encodeURIComponent(
              getI18nString(
                "unsaved_changes.syncing.figma_was_automatically_updated_to_the_latest_version",
              ),
            )}`
            location.assign(redirectUrl)
          }, 50)
        }
        break

      case "ip-allowlist": {
        const redirectUri = encodeURIComponent(window.location.href)
        location.assign(
          `/ip_account_restriction?reason=ip_allowlist&redirect_uri=${redirectUri}`,
        )
        break
      }

      case "network-access-restriction": {
        const redirectUri = encodeURIComponent(window.location.href)
        location.assign(
          `/ip_account_restriction?reason=network_access_restriction&redirect_uri=${redirectUri}`,
        )
        break
      }

      case "schema-validation-failure":
        this.dispatch(
          FlashActions.flash(
            getI18nString(
              "unsaved_changes.syncing.we_re_experiencing_issues_opening_this_file_please_try_again_later",
            ),
          ),
        )
        break

      default:
        // No-op for unhandled signals
        break
    }
  }

  socketBufferedAmount(): number {
    return Yq()
  }

  async showRestoreComponentDialog(nodeId: string): Promise<void> {
    const [fullscreenFile] = await Promise.all([
      getFullscreenViewFile(this.store),
      usedComponentsPromise,
    ])

    const state = this.store.getState()
    const filesByLibraryKey = atomStoreManager.get(filesByLibraryKeyAtom)

    if (fullscreenFile) {
      const libraryName = findLibraryNameForAsset(
        nodeId,
        state.library.movedLibraryItems.local,
        state.library.publishedByLibraryKey.components,
        filesByLibraryKey,
      )

      if (fullscreenFile.canEdit) {
        this.store.dispatch(
          showModalHandler({
            type: fullscreenRestoreModal,
            data: {
              nodeId,
              movedToFile: libraryName,
            },
          }),
        )
      }
      else {
        this.store.dispatch(
          VisualBellActions.enqueue({
            message: libraryName
              ? getI18nString(
                "unsaved_changes.syncing.the_main_component_has_been_moved_to_moved_to_file",
                { movedToFile: libraryName },
              )
              : getI18nString(
                "unsaved_changes.syncing.the_main_component_has_been_deleted",
              ),
          }),
        )
      }
    }
  }

  showComponentRemovedDialog(): void {
    this.store.dispatch(
      VisualBellActions.enqueue({
        message: getI18nString(
          "design_systems.instance_panel.component_removed",
        ),
      }),
    )
  }

  buildMultiplayerUrl(
    fileKey: string,
    reconnectKey: string | null,
    reconnectSeqNum: number | null,
    testMode: string | null,
    nodeIds: string[],
    initialFileVersion: number | null,
    initialBgColor: string | null,
    loadEvent: FileLoadEvent,
    forceUpgrade: boolean,
    previousLoadMode: string | null,
    incrementalLoadingValidation: boolean | null,
  ): string {
    if (!fileKey) {
      throw new Error("buildMultiplayerUrl: fileKey must be defined")
    }

    const state = this.store.getState()
    const selectedView = state.selectedView
    const loggingTag
      = selectedView.view === "fullscreen"
        ? mapEditorTypeToLoggingTag(selectedView.editorType)
        : undefined

    if (loadEvent === FileLoadEvent.RECONNECT) {
      incrementReconnectCounter()
    }

    const url = new URL(
      mpGlobal.url({
        fileKey,
        role: "editor",
        nodeIds,
        initialBgColor,
        suppressDecodeErrors: isLocalDevOnCluster(),
        tagForLogging: loggingTag,
        forceViewOnly: fullscreenAlias.getIsExtension(),
      }),
    )

    if (reconnectKey) {
      url.searchParams.append("reconnect-key", reconnectKey)
    }

    if (reconnectSeqNum !== null) {
      url.searchParams.append(
        "reconnect-sequence-number",
        String(reconnectSeqNum),
      )
    }

    if (testMode) {
      url.searchParams.append("testMode", testMode)
    }

    if (initialFileVersion !== null) {
      url.searchParams.append("initialFileVersion", `${initialFileVersion}`)
    }

    if (forceUpgrade) {
      url.searchParams.append("force-upgrade", "1")
    }

    if (previousLoadMode) {
      url.searchParams.append("previousLoadMode", previousLoadMode)
    }

    if (incrementalLoadingValidation !== null) {
      url.searchParams.set(
        "incremental-loading-validation",
        incrementalLoadingValidation ? "1" : "0",
      )
    }

    return url.toString()
  }

  notifyCursorHidden(): void {
    this.store.dispatch(
      VisualBellActions.enqueue({
        message: getI18nString(
          "unsaved_changes.syncing.your_cursor_has_been_hidden_from_others_users",
        ),
        button: {
          text: getI18nString("unsaved_changes.syncing.learn_more"),
          action: () => {
            this.store.dispatch(
              showModalHandler({
                type: CursorLimitModal,
              }),
            )
          },
        },
        onDismiss: () => { },
      }),
    )
  }

  isWindowActive(): boolean {
    return !document.hidden
  }

  notifyCursorUnhiddenFromObserver(): void {
    this.store.dispatch(
      VisualBellActions.enqueue({
        message: getI18nString(
          "unsaved_changes.syncing.your_cursor_is_now_visible_to_others_as_someone_is_observing_you",
        ),
      }),
    )
  }

  notifyCursorUnhiddenFromConnectionCount(): void {
    this.store.dispatch(
      VisualBellActions.enqueue({
        message: getI18nString(
          "unsaved_changes.syncing.your_cursor_is_now_visible_to_others_as_users_have_left_the_file",
        ),
      }),
    )
  }

  notifyEditorConvertedToViewer(): void {
    this.store.dispatch(
      VisualBellActions.enqueue({
        message: getI18nString(
          "unsaved_changes.syncing.you_have_been_converted_to_a_viewer_with_a_hidden_cursor",
        ),
        button: {
          text: getI18nString("unsaved_changes.syncing.learn_more"),
          action: () => {
            this.store.dispatch(
              showModalHandler({
                type: EditorLimitModal,
              }),
            )
          },
        },
        onDismiss: () => { },
      }),
    )
  }

  prettyPrintMessage(message: any): void {
    console.log("[MultiplayerDebugging]", kiwiCodec.decodeMessage(message))
  }

  reconnectSequenceNumberChanged(sequenceNumber: number | null): void {
    setTagGlobal("reconnect_sequence_number", sequenceNumber)

    if (sequenceNumber !== null) {
      const hasChanges = atomStoreManager.get(hasChangesAtom)
      if (!hasChanges) {
        atomStoreManager.set(hasChangesAtom, true)
      }
      atomStoreManager.set(_$$J, sequenceNumber)

      const docHasChanged = this.store.getState().versionHistory.docHasChanged
      if (!docHasChanged) {
        this.dispatch(
          VERSION_HISTORY_SET_DOC_HAS_CHANGED({
            status: true,
          }),
        )
      }
    }
  }
}

export const L = MultiplayerController
export const S = initializeFlashMessage
