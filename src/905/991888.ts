// Refactored InlinePreviewController - renamed variables, added types, improved readability
class InlinePreviewController {
  private inlinePreviewIframe: HTMLIFrameElement | null = null
  private viewerLoaded: boolean = false
  private iframeReadyToReceiveMessages: boolean = false
  private disableCloseWithShortcut: boolean = false

  constructor() {
    // Bind methods to preserve `this` context
    this.isIframeInitialized = this.isIframeInitialized.bind(this)
    this.isLoaded = this.isLoaded.bind(this)
    this.isReadyToReceiveMessages = this.isReadyToReceiveMessages.bind(this)
    this.focus = this.focus.bind(this)
  }

  // Checks if iframe is initialized
  public isIframeInitialized(): boolean {
    return this.inlinePreviewIframe !== null
  }

  // Checks if viewer is loaded
  public isLoaded(): boolean {
    return this.viewerLoaded
  }

  // Checks if iframe is ready to receive messages
  public isReadyToReceiveMessages(): boolean {
    return this.iframeReadyToReceiveMessages
  }

  // Focuses on the iframe after verification
  public focus(): void {
    this.verifyIframe(this.inlinePreviewIframe)
    this.inlinePreviewIframe!.focus()
  }

  // Throws error if iframe is not initialized
  private verifyIframe(iframe: HTMLIFrameElement | null): asserts iframe is HTMLIFrameElement {
    if (iframe === null) {
      throw new Error("Inline Preview Iframe not initialized")
    }
  }

  // Adds event handlers to bubble up events from iframe
  private addBubbleUpEventHandlers(iframe: HTMLIFrameElement): () => void {
    const handleEvent = (event: KeyboardEvent): void => {
      const customEvent = new CustomEvent(event.type, {
        bubbles: true,
        cancelable: false,
      });
      (customEvent as any).shiftKey = event.shiftKey
      iframe.dispatchEvent(customEvent)
    }

    const contentWindow = iframe.contentWindow!
    const eventTypes = ["keydown", "keyup"]

    eventTypes.forEach((eventType) => {
      contentWindow.addEventListener(eventType, handleEvent)
    })

    // Return cleanup function
    return (): void => {
      eventTypes.forEach((eventType) => {
        contentWindow.removeEventListener(eventType, handleEvent)
      })
    }
  }

  // Initializes the controller with iframe and callbacks
  public initialize(
    iframe: HTMLIFrameElement,
    callbacks: {
      closeInlinePreview: (reason: string) => void
      dispatch: (action: any) => void
      onLoad: () => void
    },
  ): () => void {
    this.inlinePreviewIframe = iframe
    const removeBubbleUpHandlers = this.addBubbleUpEventHandlers(iframe)

    iframe.contentWindow!.addEventListener("click", this.focus)

    const handleMessage = (event: MessageEvent): void => {
      if (event.origin !== location.origin)
        return

      const { data } = event
      const { type } = data || {}

      switch (type) {
        case "UPDATE_TIMELINE_PLAYER_STATE":
          callbacks.dispatch({
            type: "UPDATE_TIMELINE_PLAYER_STATE",
            payload: {
              status: data.data.status,
              currentTimeMs: data.data.currentTimeMs,
              totalTimeMs: data.data.totalTimeMs,
            },
          })
          break

        case "PRESENTED_NODE_CHANGED":
          callbacks.dispatch({
            type: "UPDATE_PRESENTED_NODE",
            payload: {
              nodeId: data.data?.presentedNodeId,
            },
          })
          break

        case "REQUEST_CLOSE":
          if (this.disableCloseWithShortcut)
            return
          callbacks.closeInlinePreview("keyboard")
          break

        case "INITIAL_LOAD":
          this.viewerLoaded = true
          callbacks.onLoad()
          callbacks.dispatch({ type: "HANDLE_VIEWER_LOADED" })
          break

        case "INLINE_PREVIEW_READY_TO_RECEIVE_MESSAGES":
          this.iframeReadyToReceiveMessages = true
          callbacks.dispatch({ type: "HANDLE_READY_TO_RECEIVE_MESSAGES" })
          break

        case "INLINE_PREVIEW_SET_FRAME_CONTROLS":
          callbacks.dispatch({
            type: "UPDATE_FRAME_CONTROLS",
            payload: data.data,
          })
          break

        case "EXPORT_COMPLETED":
          callbacks.dispatch({ type: "HANDLE_EXPORT_COMPLETED" })
          break
      }
    }

    window.addEventListener("message", handleMessage)

    // Return cleanup function
    return (): void => {
      if (this.inlinePreviewIframe?.contentWindow) {
        removeBubbleUpHandlers()
        this.inlinePreviewIframe.contentWindow.removeEventListener("click", this.focus)
      }
      window.removeEventListener("message", handleMessage)
      this.inlinePreviewIframe = null
      this.viewerLoaded = false
      this.iframeReadyToReceiveMessages = false
    }
  }

  // Sends a message to the iframe viewer
  private messageViewer(message: any): void {
    this.verifyIframe(this.inlinePreviewIframe)
    this.inlinePreviewIframe!.contentWindow!.postMessage(message, "*")
  }

  // Navigation methods
  public navigateBackward(): void {
    this.messageViewer({ type: "NAVIGATE_BACKWARD" })
  }

  public navigateForward(): void {
    this.messageViewer({ type: "NAVIGATE_FORWARD" })
  }

  public navigateTo(nodeId: string | null): void {
    if (!this.viewerLoaded)
      return
    this.verifyIframe(this.inlinePreviewIframe)
    this.messageViewer({
      type: "NAVIGATE_TO_FRAME_AND_CLOSE_OVERLAYS",
      data: {
        nodeId,
        startingPointNodeId: nodeId ?? undefined,
      },
    })
  }

  // Export methods
  public export(nodeIds: string[], videoVolumeByNodeId: Record<string, number>): void {
    this.verifyIframe(this.inlinePreviewIframe)
    this.messageViewer({
      type: "REQUEST_EXPORT",
      data: {
        nodeIds,
        videoVolumeByNodeId,
      },
    })
  }

  public cancelExport(): void {
    this.verifyIframe(this.inlinePreviewIframe)
    this.messageViewer({ type: "CANCEL_EXPORT" })
  }

  // Player control methods
  public play(videoVolumeByNodeId?: Record<string, number>): void {
    this.verifyIframe(this.inlinePreviewIframe)
    this.messageViewer({
      type: "TIMELINE_PLAYER_PLAY",
      data: {
        videoVolumeByNodeId,
      },
    })
  }

  public pause(): void {
    this.verifyIframe(this.inlinePreviewIframe)
    this.messageViewer({ type: "TIMELINE_PLAYER_PAUSE" })
  }

  public resetPlayer(): void {
    this.verifyIframe(this.inlinePreviewIframe)
    this.messageViewer({ type: "TIMELINE_PLAYER_RESET" })
  }

  // Scaling mode
  public setScalingMode(scalingInfo: any, userInitiated: boolean): void {
    if (!this.viewerLoaded)
      return
    this.verifyIframe(this.inlinePreviewIframe)
    this.messageViewer({
      type: "SET_SCALING_MODE",
      data: {
        scalingInfo,
        userInitiated,
      },
    })
  }

  // Ensures iframe is closed
  public ensureClosed(): void {
    if (this.inlinePreviewIframe) {
      this.navigateTo(null)
    }
  }

  // Restarts prototype
  public restartPrototype(): void {
    if (this.inlinePreviewIframe) {
      this.messageViewer({ type: "RESTART" })
    }
  }

  // Notifies about modal state
  public notifyWasModalOpenedSinceViewerLoaded(wasModalOpenedSinceViewerLoaded: boolean): void {
    if (!this.iframeReadyToReceiveMessages)
      return
    this.verifyIframe(this.inlinePreviewIframe)
    this.messageViewer({
      type: "INLINE_PREVIEW_WAS_MODAL_OPENED_SINCE_VIEWER_LOADED",
      data: {
        wasModalOpenedSinceViewerLoaded,
      },
    })
  }

  // Sets whether closing with shortcut is disabled
  public setDisableCloseWithShortcut(disabled: boolean): void {
    this.disableCloseWithShortcut = disabled
  }
}

export const inlinePreviewController = new InlinePreviewController()
export const A = inlinePreviewController
