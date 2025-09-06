import { assert, assertNotNullish, throwTypeError } from "../figma_app/465776";
import { X3B } from "../figma_app/763686";
import { fn, sH } from "../905/871411";
import { um, atomStoreManager } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { Y5 } from "../figma_app/455680";
import { tJ } from "../figma_app/741237";
import { yw } from "../figma_app/617727";
import { Zh } from "../figma_app/2590";
import { s as _$$s } from "../905/291518";
import { Ew } from "../figma_app/170018";
import { hF, l5, HS } from "../figma_app/354027";
import { A as _$$A } from "../905/991888";
let g = 0;
let f = () => {
  0 !== g && (debugState.dispatch(Zh({
    name: "prototype.frame_following_selection_replaced",
    params: {
      jumps: g
    }
  })), g = 0);
};
let E = () => {
  (g += 1) >= 5 && f();
};
var $$y2 = (e => (e[e.SHOWN = 0] = "SHOWN", e[e.HIDDEN = 1] = "HIDDEN", e[e.LOAD_PENDING = 2] = "LOAD_PENDING", e[e.LOAD_FORBIDDEN = 3] = "LOAD_FORBIDDEN", e))($$y2 || {});
var $$b0 = (e => (e[e.OPEN = 0] = "OPEN", e[e.CLOSED = 1] = "CLOSED", e[e.NOT_LOADED = 2] = "NOT_LOADED", e))($$b0 || {});
let T = {
  navigateForwardEnabled: !1,
  navigateBackwardEnabled: !1,
  currentPresentedNode: null,
  requestedNodeId: null,
  modalStatus: 2,
  wasModalOpenedSinceViewerLoaded: !1,
  sizeInfo: null,
  scalingInfo: {
    viewportScalingMode: "scale-down-width",
    contentScalingMode: "fixed"
  },
  targetFrameFollowingEnabled: !1,
  targetFrameFollowingScrollToNode: void 0,
  showDeviceFrameEnabled: !0,
  getCurrentViewerSize: null,
  previewKeyForErrorBoundary: 0,
  isCrashed: !1,
  exporting: !1,
  buzzInlinePreviewStatus: 3,
  buzzInlinePreviewPosition: {
    left: 0,
    top: 0
  },
  timelinePlayerState: {
    status: "stopped",
    currentTimeMs: 0,
    totalTimeMs: 0
  }
};
let I = e => (_$$A.ensureClosed(), f(), {
  ...e,
  requestedNodeId: null,
  currentPresentedNode: null,
  modalStatus: 1
});
let $$S1 = um(T, (e, t) => {
  let {
    type
  } = t;
  let o = e;
  switch (type) {
    case "OPEN_INLINE_PREVIEW":
      {
        let {
          sceneGraph,
          requestedNodeId,
          onOpen
        } = t.payload;
        _$$A.navigateTo(requestedNodeId);
        _$$A.notifyWasModalOpenedSinceViewerLoaded(!0);
        atomStoreManager.set(yw, !0);
        let l = sceneGraph.get(requestedNodeId);
        assert(!!l, "expected selectedNode to exist");
        let d = hF(e.sizeInfo, !1, e.showDeviceFrameEnabled, requestedNodeId, sceneGraph);
        onOpen(d.initialViewerSize);
        let u = e.isCrashed ? e.previewKeyForErrorBoundary + 1 : e.previewKeyForErrorBoundary;
        o = {
          ...e,
          requestedNodeId,
          currentPresentedNode: requestedNodeId,
          sizeInfo: d,
          modalStatus: 0,
          wasModalOpenedSinceViewerLoaded: !0,
          isCrashed: !1,
          previewKeyForErrorBoundary: u
        };
        break;
      }
    case "OPEN_SLIDES_INLINE_PREVIEW":
      o = {
        ...e,
        scalingInfo: {
          viewportScalingMode: "contain",
          contentScalingMode: "fixed"
        },
        forceScalingInfo: {
          viewportScalingMode: "contain",
          contentScalingMode: "fixed"
        },
        modalStatus: 1,
        targetFrameFollowingEnabled: !0
      };
      break;
    case "OPEN_BUZZ_INLINE_PREVIEW":
      {
        let {
          sceneGraph,
          requestedNodeId,
          onOpen
        } = t.payload;
        let l = {
          viewportScalingMode: "contain",
          contentScalingMode: "fixed"
        };
        _$$A.navigateTo(requestedNodeId);
        _$$A.notifyWasModalOpenedSinceViewerLoaded(!0);
        atomStoreManager.set(yw, !0);
        let d = sceneGraph.get(requestedNodeId);
        assert(!!d, "expected selectedNode to exist");
        let u = hF(e.sizeInfo, !1, e.showDeviceFrameEnabled, requestedNodeId, sceneGraph);
        onOpen(u.initialViewerSize);
        let p = e.isCrashed ? e.previewKeyForErrorBoundary + 1 : e.previewKeyForErrorBoundary;
        o = {
          ...e,
          requestedNodeId,
          sizeInfo: u,
          isCrashed: !1,
          previewKeyForErrorBoundary: p,
          forceScalingInfo: l,
          scalingInfo: l,
          buzzInlinePreviewStatus: 1
        };
        break;
      }
    case "UPDATE_BUZZ_INLINE_PREVIEW":
      {
        let {
          status,
          position,
          size,
          requestedNodeId
        } = t.payload;
        let s = !1;
        if (void 0 !== status) {
          let t = 3 === e.buzzInlinePreviewStatus && 2 === status;
          let n = 3 !== e.buzzInlinePreviewStatus && 2 !== e.buzzInlinePreviewStatus;
          s = t || n;
        }
        o = {
          ...(requestedNodeId ? x(e, requestedNodeId, !1) : e),
          ...(s && {
            buzzInlinePreviewStatus: status
          }),
          ...(position && {
            buzzInlinePreviewPosition: position
          }),
          ...(size && {
            sizeInfo: {
              breakpoint: e.sizeInfo?.breakpoint || {
                type: l5.SMALL
              },
              initialViewerSize: size
            }
          })
        };
        break;
      }
    case "CLOSE_INLINE_PREVIEW":
      o = I(e);
      break;
    case "RESET_INLINE_PREVIEW":
      _$$A.ensureClosed();
      o = {
        ...T,
        targetFrameFollowingScrollToNode: e.targetFrameFollowingScrollToNode,
        modalStatus: 1
      };
      break;
    case "HANDLE_EDITOR_SELECTION_CHANGED":
      {
        if (0 !== e.modalStatus) break;
        let r = X3B.getInlinePreviewNodeIdOnSelectionChange();
        let {
          sceneGraph
        } = t.payload;
        o = fn(sH(r)) ? x(e, r) : A(e, sceneGraph);
        break;
      }
    case "UPDATE_PRESENTED_NODE":
      e.targetFrameFollowingEnabled && t.payload.nodeId !== e.currentPresentedNode && (E(), tJ([t.payload.nodeId], !1), assert(!!e.targetFrameFollowingScrollToNode, "Scroll callback should have been set already through SET_SCROLL_CALLBACK."), e.targetFrameFollowingScrollToNode(t.payload.nodeId));
      o = {
        ...e,
        currentPresentedNode: t.payload.nodeId
      };
      break;
    case "UPDATE_FRAME_CONTROLS":
      o = {
        ...e,
        navigateForwardEnabled: t.payload.navigateForwardEnabled,
        navigateBackwardEnabled: t.payload.navigateBackwardEnabled
      };
      break;
    case "CHANGE_DEVICE_FRAME":
      {
        let r;
        let i;
        if (0 !== e.modalStatus) break;
        assertNotNullish(e.sizeInfo, "sizeInfo must be set");
        let {
          sceneGraph,
          oldPresetIdentifier,
          oldRotation,
          newPresetIdentifier,
          newRotation
        } = t.payload;
        (e => {
          e[e.DEVICE = 0] = "DEVICE";
          e[e.ROTATION = 1] = "ROTATION";
          e[e.STYLE = 2] = "STYLE";
        })(r || (r = {}));
        let u = !!oldPresetIdentifier && !!newPresetIdentifier;
        let p = oldRotation === newRotation && u && Ew(newPresetIdentifier, oldPresetIdentifier);
        if (oldPresetIdentifier !== newPresetIdentifier && p ? i = 2 : oldPresetIdentifier === newPresetIdentifier && u ? oldRotation !== newRotation && (i = 1) : i = 0, assert(void 0 !== i, "changeType must be set"), 1 === i) {
          assert(!!e.getCurrentViewerSize, "getCurrentViewerSize must be set");
          let t = e.getCurrentViewerSize();
          assert(e.sizeInfo.breakpoint.type === l5.DEVICE, "breakpoint must be device");
          o = {
            ...e,
            sizeInfo: {
              breakpoint: {
                type: l5.DEVICE,
                x: e.sizeInfo.breakpoint.y,
                y: e.sizeInfo.breakpoint.x
              },
              initialViewerSize: {
                x: t.y,
                y: t.x
              }
            }
          };
        } else if (0 === i) {
          assert(!!e.currentPresentedNode, "currentPresentedNode must be set");
          let t = hF(e.sizeInfo, !0, e.showDeviceFrameEnabled, e.currentPresentedNode, sceneGraph);
          o = {
            ...e,
            sizeInfo: t
          };
        } else 2 === i || throwTypeError(i);
        break;
      }
    case "RESIZE_MODAL":
      {
        let {
          sceneGraph
        } = t.payload;
        assert(!!e.currentPresentedNode, "currentPresentedNode must be set");
        assert(!!e.sizeInfo, "sizeInfo must be set");
        let i = sceneGraph.get(e.currentPresentedNode);
        assert(!!i, "expected selectedNode to exist");
        let a = HS(sceneGraph, i);
        o = {
          ...e,
          sizeInfo: {
            ...e.sizeInfo,
            breakpoint: a
          }
        };
        break;
      }
    case "HANDLE_VIEWER_LOADED":
      _$$A.setScalingMode(e.scalingInfo, !1);
      _$$A.navigateTo(e.requestedNodeId);
      Y5.triggerAction("inline-preview-loaded");
      break;
    case "HANDLE_READY_TO_RECEIVE_MESSAGES":
      _$$A.notifyWasModalOpenedSinceViewerLoaded(e.wasModalOpenedSinceViewerLoaded);
      break;
    case "TOGGLE_TARGET_FRAME_FOLLOWING":
      f();
      o = {
        ...e,
        targetFrameFollowingEnabled: !e.targetFrameFollowingEnabled
      };
      break;
    case "ENABLE_TARGET_FRAME_FOLLOWING":
      o = {
        ...e,
        targetFrameFollowingEnabled: !0
      };
      break;
    case "TOGGLE_SHOW_DEVICE_FRAME":
      o = {
        ...e,
        showDeviceFrameEnabled: !e.showDeviceFrameEnabled
      };
      break;
    case "SET_SCROLL_CALLBACK":
      o = {
        ...e,
        targetFrameFollowingScrollToNode: t.payload
      };
      break;
    case "SET_CURRENT_VIEWER_SIZE_CALLBACK":
      o = {
        ...e,
        getCurrentViewerSize: t.payload
      };
      break;
    case "HANDLE_PREVIEW_CRASHED":
      o = {
        ...I(e),
        isCrashed: !0
      };
      break;
    case "SET_PREVIEW_IS_RESPONSIVE":
      if (t.payload) {
        let t = {
          viewportScalingMode: "contain",
          contentScalingMode: "responsive"
        };
        o = {
          ...e,
          scalingInfo: t,
          forceScalingInfo: t
        };
      } else {
        let t = v(e);
        o = {
          ...e,
          scalingInfo: t,
          forceScalingInfo: void 0
        };
      }
      _$$A.setScalingMode(o.scalingInfo, !0);
      break;
    case "REQUEST_EXPORT":
      {
        let {
          nodeIds,
          videoVolumeByNodeId
        } = t.payload;
        _$$A.$$export(nodeIds, videoVolumeByNodeId);
        o = {
          ...e,
          exporting: !0
        };
        break;
      }
    case "CANCEL_EXPORT":
      _$$A.cancelExport();
      break;
    case "HANDLE_EXPORT_COMPLETED":
      o = {
        ...e,
        exporting: !1
      };
      break;
    case "TIMELINE_PLAYER_PLAY":
      {
        let {
          videoVolumeByNodeId
        } = t.payload;
        _$$A.play(videoVolumeByNodeId);
        break;
      }
    case "TIMELINE_PLAYER_PAUSE":
      _$$A.pause();
      break;
    case "TIMELINE_PLAYER_RESET":
      _$$A.isIframeInitialized() && _$$A.resetPlayer();
      break;
    case "UPDATE_TIMELINE_PLAYER_STATE":
      {
        let {
          status,
          currentTimeMs,
          totalTimeMs
        } = t.payload;
        o = {
          ...e,
          timelinePlayerState: {
            status,
            currentTimeMs,
            totalTimeMs
          }
        };
        break;
      }
    default:
      throwTypeError(type);
  }
  if (!o.forceScalingInfo && o.sizeInfo?.breakpoint?.type !== e.sizeInfo?.breakpoint?.type) {
    let e = v(o);
    o = {
      ...o,
      scalingInfo: e
    };
    _$$A.setScalingMode(e, !1);
  }
  N(e, o, t);
  return o;
});
let v = e => e.sizeInfo?.breakpoint?.type === l5.DEVICE ? {
  viewportScalingMode: "fit-width",
  contentScalingMode: "fixed"
} : {
  viewportScalingMode: "scale-down-width",
  contentScalingMode: "fixed"
};
let A = (e, t) => {
  let {
    currentPresentedNode
  } = e;
  if (currentPresentedNode && null == t.get(currentPresentedNode)) {
    let t = _$$s();
    return t ? (_$$A.navigateTo(t), {
      ...e,
      requestedNodeId: t,
      currentPresentedNode: t
    }) : (_$$A.ensureClosed(), {
      ...e,
      requestedNodeId: null,
      currentPresentedNode: null,
      modalStatus: 1
    });
  }
  return e;
};
let x = (e, t, r = !0) => {
  let {
    requestedNodeId,
    currentPresentedNode
  } = e;
  return t === requestedNodeId && t === currentPresentedNode ? e : (_$$A.navigateTo(t), {
    ...e,
    requestedNodeId: t,
    ...(r && {
      currentPresentedNode: t
    })
  });
};
let N = (e, t, r) => {
  let {
    type
  } = r;
  let a = e => {
    Y5.triggerAction("inline-preview-presented-node-changed", {
      currentHighlightedNode: e
    });
  };
  let s = t.currentPresentedNode !== e.currentPresentedNode;
  let o = 0 === t.modalStatus;
  switch (type) {
    case "UPDATE_PRESENTED_NODE":
      o && s && a(t.currentPresentedNode);
      break;
    case "OPEN_INLINE_PREVIEW":
      a(t.currentPresentedNode);
      break;
    case "CLOSE_INLINE_PREVIEW":
      a(null);
      break;
    case "HANDLE_EDITOR_SELECTION_CHANGED":
      s && a(t.currentPresentedNode);
      break;
    case "OPEN_SLIDES_INLINE_PREVIEW":
    case "OPEN_BUZZ_INLINE_PREVIEW":
    case "UPDATE_BUZZ_INLINE_PREVIEW":
    case "TOGGLE_TARGET_FRAME_FOLLOWING":
    case "TOGGLE_SHOW_DEVICE_FRAME":
    case "CHANGE_DEVICE_FRAME":
    case "RESIZE_MODAL":
    case "HANDLE_VIEWER_LOADED":
    case "HANDLE_READY_TO_RECEIVE_MESSAGES":
    case "UPDATE_FRAME_CONTROLS":
    case "RESET_INLINE_PREVIEW":
    case "SET_SCROLL_CALLBACK":
    case "SET_CURRENT_VIEWER_SIZE_CALLBACK":
    case "HANDLE_PREVIEW_CRASHED":
    case "SET_PREVIEW_IS_RESPONSIVE":
    case "ENABLE_TARGET_FRAME_FOLLOWING":
    case "REQUEST_EXPORT":
    case "CANCEL_EXPORT":
    case "HANDLE_EXPORT_COMPLETED":
    case "TIMELINE_PLAYER_PLAY":
    case "TIMELINE_PLAYER_PAUSE":
    case "TIMELINE_PLAYER_RESET":
    case "UPDATE_TIMELINE_PLAYER_STATE":
      break;
    default:
      throwTypeError(type);
  }
};
export const bi = $$b0;
export const hg = $$S1;
export const u7 = $$y2;