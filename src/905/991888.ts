let n = new class {
  constructor() {
    this.inlinePreviewIframe = null;
    this.viewerLoaded = !1;
    this.iframeReadyToReceiveMessages = !1;
    this.isIframeInitialized = () => null != this.inlinePreviewIframe;
    this.disableCloseWithShortcut = !1;
    this.isLoaded = () => this.viewerLoaded;
    this.isReadyToReceiveMessages = () => this.iframeReadyToReceiveMessages;
    this.focus = () => {
      this.verifyIframe(this.inlinePreviewIframe);
      this.inlinePreviewIframe.focus();
    };
  }
  verifyIframe(e) {
    if (null == e) throw Error("Inline Preview Iframe not initialized");
  }
  addBubbleUpEventHandlers(e) {
    let t = t => {
      var i = new CustomEvent(t.type, {
        bubbles: !0,
        cancelable: !1
      });
      i.shiftKey = t.shiftKey;
      e.dispatchEvent(i);
    };
    let i = e.contentWindow;
    let n = ["keydown", "keyup"];
    n.forEach(e => {
      i.addEventListener(e, t);
    });
    return () => {
      n.forEach(e => {
        i.removeEventListener(e, t);
      });
    };
  }
  initialize(e, {
    closeInlinePreview: t,
    dispatch: i,
    onLoad: n
  }) {
    this.inlinePreviewIframe = e;
    let r = this.addBubbleUpEventHandlers(e);
    this.inlinePreviewIframe.contentWindow.addEventListener("click", this.focus);
    let a = e => {
      if (e.origin === location.origin) {
        if (e.data?.type === "UPDATE_TIMELINE_PLAYER_STATE" && i({
          type: "UPDATE_TIMELINE_PLAYER_STATE",
          payload: {
            status: e.data.data.status,
            currentTimeMs: e.data.data.currentTimeMs,
            totalTimeMs: e.data.data.totalTimeMs
          }
        }), e.data?.type === "PRESENTED_NODE_CHANGED" && i({
          type: "UPDATE_PRESENTED_NODE",
          payload: {
            nodeId: e.data.data?.presentedNodeId
          }
        }), e.data?.type === "REQUEST_CLOSE") {
          if (this.disableCloseWithShortcut) return;
          t("keyboard");
        }
        e.data?.type === "INITIAL_LOAD" && (this.viewerLoaded = !0, n(), i({
          type: "HANDLE_VIEWER_LOADED"
        }));
        e.data?.type === "INLINE_PREVIEW_READY_TO_RECEIVE_MESSAGES" && (this.iframeReadyToReceiveMessages = !0, i({
          type: "HANDLE_READY_TO_RECEIVE_MESSAGES"
        }));
        e.data?.type === "INLINE_PREVIEW_SET_FRAME_CONTROLS" && i({
          type: "UPDATE_FRAME_CONTROLS",
          payload: e.data.data
        });
        e.data?.type === "EXPORT_COMPLETED" && i({
          type: "HANDLE_EXPORT_COMPLETED"
        });
      }
    };
    window.addEventListener("message", a);
    return () => {
      this.inlinePreviewIframe?.contentWindow && (r(), this.inlinePreviewIframe.contentWindow.removeEventListener("click", this.focus));
      window.removeEventListener("message", a);
      this.inlinePreviewIframe = null;
      this.viewerLoaded = !1;
      this.iframeReadyToReceiveMessages = !1;
    };
  }
  messageViewer(e) {
    this.verifyIframe(this.inlinePreviewIframe);
    this.inlinePreviewIframe.contentWindow?.postMessage(e, "*");
  }
  navigateBackward() {
    this.messageViewer({
      type: "NAVIGATE_BACKWARD"
    });
  }
  navigateForward() {
    this.messageViewer({
      type: "NAVIGATE_FORWARD"
    });
  }
  navigateTo(e) {
    this.viewerLoaded && (this.verifyIframe(this.inlinePreviewIframe), this.messageViewer({
      type: "NAVIGATE_TO_FRAME_AND_CLOSE_OVERLAYS",
      data: {
        nodeId: e,
        startingPointNodeId: e ?? void 0
      }
    }));
  }
  export(e, t) {
    this.verifyIframe(this.inlinePreviewIframe);
    this.messageViewer({
      type: "REQUEST_EXPORT",
      data: {
        nodeIds: e,
        videoVolumeByNodeId: t
      }
    });
  }
  cancelExport() {
    this.verifyIframe(this.inlinePreviewIframe);
    this.messageViewer({
      type: "CANCEL_EXPORT"
    });
  }
  play(e) {
    this.verifyIframe(this.inlinePreviewIframe);
    this.messageViewer({
      type: "TIMELINE_PLAYER_PLAY",
      data: {
        videoVolumeByNodeId: e
      }
    });
  }
  pause() {
    this.verifyIframe(this.inlinePreviewIframe);
    this.messageViewer({
      type: "TIMELINE_PLAYER_PAUSE"
    });
  }
  resetPlayer() {
    this.verifyIframe(this.inlinePreviewIframe);
    this.messageViewer({
      type: "TIMELINE_PLAYER_RESET"
    });
  }
  setScalingMode(e, t) {
    this.viewerLoaded && (this.verifyIframe(this.inlinePreviewIframe), this.messageViewer({
      type: "SET_SCALING_MODE",
      data: {
        scalingInfo: e,
        userInitiated: t
      }
    }));
  }
  ensureClosed() {
    this.inlinePreviewIframe && n.navigateTo(null);
  }
  restartPrototype() {
    this.inlinePreviewIframe && this.messageViewer({
      type: "RESTART"
    });
  }
  notifyWasModalOpenedSinceViewerLoaded(e) {
    this.iframeReadyToReceiveMessages && (this.verifyIframe(this.inlinePreviewIframe), this.messageViewer({
      type: "INLINE_PREVIEW_WAS_MODAL_OPENED_SINCE_VIEWER_LOADED",
      data: {
        wasModalOpenedSinceViewerLoaded: e
      }
    }));
  }
  setDisableCloseWithShortcut(e) {
    this.disableCloseWithShortcut = e;
  }
}();
let $$r0 = n;
export const A = $$r0;