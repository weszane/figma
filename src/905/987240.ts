import { throwTypeError } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { PresentationValidationStatus, PrototypingTsApi } from "../figma_app/763686";
import { isValidSessionLocalID, parseSessionLocalID } from "../905/871411";
import { atomStoreManager } from "../figma_app/27355";
import { reportNullOrUndefined } from "../905/11";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { getDevModeFocusId } from "../figma_app/88239";
import { createOptimistThunk } from "../905/350402";
import { _P, Zh } from "../figma_app/2590";
import { isFirstPageCurrentSelector } from "../905/91038";
import { hg } from "../figma_app/425489";
import { xY } from "../figma_app/354027";
import { s as _$$s } from "../905/291518";
import { F as _$$F } from "../905/160142";
export let $$y0 = createOptimistThunk((e, {
  fileKey: t,
  startingPointNodeId: i,
  shouldOpenAtStartingPoint: p,
  shouldOpenInNewTab: y,
  source: b,
  isSlides: v,
  isPresenterViewWithPopoutAudienceView: I,
  openShareModal: E
}) => {
  let x = e.getState();
  reportNullOrUndefined(_$$e.PROTOTYPING, x.mirror.appModel);
  let S = isFirstPageCurrentSelector(x);
  let w = "" !== i ? PresentationValidationStatus.VALID : PrototypingTsApi.currentPagePrototypeStatus();
  if (w !== PresentationValidationStatus.VALID) {
    let t;
    switch (e.dispatch(_P({
      name: "Prototype Editor Play Button Blocked",
      params: {
        isFirstPage: S
      }
    })), w) {
      case PresentationValidationStatus.NO_FRAMES:
        t = v ? getI18nString("proto.status_messages.a_presentation_needs_to_have_at_least_one_slide") : getI18nString("proto.status_messages.a_prototype_needs_to_have_at_least_one_frame");
        break;
      case PresentationValidationStatus.INVALID_START_NODE:
        t = getI18nString("proto.status_messages.a_prototype_with_connections_needs_a_valid_top_level_frame_as_the_origin");
        break;
      default:
        throwTypeError(w);
    }
    e.dispatch(VisualBellActions.enqueue({
      type: "proto-editor-play-button-clicked",
      message: t
    }));
    return;
  }
  if (xY(x) && !y) {
    let t = p ? i : PrototypingTsApi.getInlinePreviewNodeIdOnPreviewOpen();
    if (!t) {
      let e = getDevModeFocusId(x.selectedView);
      e && (t = e);
    }
    isValidSessionLocalID(parseSessionLocalID(t)) || (t = _$$s());
    atomStoreManager.set(hg, {
      type: "OPEN_INLINE_PREVIEW",
      payload: {
        onOpen: t => {
          let i = x.mirror.sceneGraph.getCurrentPage()?.prototypeDevice?.presetIdentifier || "";
          e.dispatch(Zh({
            name: "prototype.editor_play_button_clicked",
            params: {
              isFirstPage: S,
              source: b,
              viewer: "inline",
              viewer_width: t.x,
              viewer_height: t.y,
              devicePreset: i
            }
          }));
        },
        requestedNodeId: t,
        sceneGraph: x.mirror.sceneGraph
      }
    });
  } else {
    let n = p ? i : PrototypingTsApi.getNodeIdForPresent();
    if (!n || n === x.mirror.appModel.currentPage) {
      let e = getDevModeFocusId(x.selectedView);
      e && (n = e);
    }
    e.dispatch(_$$F({
      fileKey: t,
      startingPointNodeId: i,
      nodeId: n,
      source: b,
      isSlides: v,
      isPresenterViewWithPopoutAudienceView: I,
      openShareModal: E
    }));
  }
});
export const K = $$y0;