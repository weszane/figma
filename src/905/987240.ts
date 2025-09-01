import { xb } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { bOM, X3B } from "../figma_app/763686";
import { fn, sH } from "../905/871411";
import { zl } from "../figma_app/27355";
import { xO } from "../905/11";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { s4 } from "../figma_app/88239";
import { nF } from "../905/350402";
import { _P, Zh } from "../figma_app/2590";
import { s6 } from "../905/91038";
import { hg } from "../figma_app/425489";
import { xY } from "../figma_app/354027";
import { s as _$$s } from "../905/291518";
import { F as _$$F } from "../905/160142";
export let $$y0 = nF((e, {
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
  xO(_$$e.PROTOTYPING, x.mirror.appModel);
  let S = s6(x);
  let w = "" !== i ? bOM.VALID : X3B.currentPagePrototypeStatus();
  if (w !== bOM.VALID) {
    let t;
    switch (e.dispatch(_P({
      name: "Prototype Editor Play Button Blocked",
      params: {
        isFirstPage: S
      }
    })), w) {
      case bOM.NO_FRAMES:
        t = v ? _$$t("proto.status_messages.a_presentation_needs_to_have_at_least_one_slide") : _$$t("proto.status_messages.a_prototype_needs_to_have_at_least_one_frame");
        break;
      case bOM.INVALID_START_NODE:
        t = _$$t("proto.status_messages.a_prototype_with_connections_needs_a_valid_top_level_frame_as_the_origin");
        break;
      default:
        xb(w);
    }
    e.dispatch(F.enqueue({
      type: "proto-editor-play-button-clicked",
      message: t
    }));
    return;
  }
  if (xY(x) && !y) {
    let t = p ? i : X3B.getInlinePreviewNodeIdOnPreviewOpen();
    if (!t) {
      let e = s4(x.selectedView);
      e && (t = e);
    }
    fn(sH(t)) || (t = _$$s());
    zl.set(hg, {
      type: "OPEN_INLINE_PREVIEW",
      payload: {
        onOpen: (t) => {
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
    let n = p ? i : X3B.getNodeIdForPresent();
    if (!n || n === x.mirror.appModel.currentPage) {
      let e = s4(x.selectedView);
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