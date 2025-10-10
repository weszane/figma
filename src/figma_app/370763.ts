import { useCallback } from "react";
import { useSelector } from "react-redux";
import { DesignGraphElements } from "../figma_app/763686";
import { atom } from "jotai";
import { VU } from "../905/625959";
import { dropdownStateAtom } from "../905/848862";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { getKeyboardShortcut } from "../figma_app/357047";
export function $$u3(e) {
  switch (e) {
    case DesignGraphElements.SELECT:
      return "set-tool-default";
    case DesignGraphElements.HAND:
      return "set-tool-hand";
    case DesignGraphElements.SCALE:
      return "set-tool-scale";
    case DesignGraphElements.LASSO:
      return "set-tool-lasso";
    case DesignGraphElements.MULTISELECT:
      return "set-tool-multiselect";
    case DesignGraphElements.COMMENTS:
      return "set-tool-comments";
    case DesignGraphElements.FRAME:
      return "set-tool-frame";
    case DesignGraphElements.SLICE:
      return "set-tool-slice";
    case DesignGraphElements.SHAPE_STAR:
      return "set-tool-star";
    case DesignGraphElements.SHAPE_LINE:
      return "set-tool-line";
    case DesignGraphElements.SHAPE_ARROW:
      return "set-tool-arrow";
    case DesignGraphElements.SHAPE_ELLIPSE:
      return "set-tool-ellipse";
    case DesignGraphElements.SHAPE_RECTANGLE:
      return "set-tool-rectangle";
    case DesignGraphElements.SHAPE_REGULAR_POLYGON:
      return "set-tool-regular-polygon";
    case DesignGraphElements.VECTOR_PEN:
      return "set-tool-pen";
    case DesignGraphElements.VECTOR_PENCIL:
      return "set-tool-pencil";
    case DesignGraphElements.BRUSH:
      return "set-tool-brush";
    case DesignGraphElements.ERASER:
      return "set-tool-eraser";
    case DesignGraphElements.HIGHLIGHTER:
      return "set-tool-highlighter";
    case DesignGraphElements.VECTOR_BEND:
      return "set-tool-bend";
    case DesignGraphElements.VECTOR_CUT:
      return "set-tool-cut";
    case DesignGraphElements.OFFSET_PATH:
      return "set-tool-offset-path";
    case DesignGraphElements.VECTOR_LASSO:
      return "set-tool-vector-lasso";
    case DesignGraphElements.VECTOR_PAINT_BUCKET:
      return "set-tool-paint-bucket";
    case DesignGraphElements.VECTOR_VAR_WIDTH_POINT:
      return "set-tool-var-width-point";
    case DesignGraphElements.SHAPE_BUILDER:
      return "set-tool-shape-builder";
    case DesignGraphElements.SIMPLIFY_VECTOR:
      return "set-tool-simplify-vector";
    case DesignGraphElements.TYPE:
      return "set-tool-type";
    case DesignGraphElements.IMAGE_OR_VIDEO:
      return "place";
    case DesignGraphElements.STICKY:
      return "set-tool-sticky";
    case DesignGraphElements.STAMP:
      return "set-tool-stamp";
    case DesignGraphElements.SECTION:
      return "set-tool-section";
    case DesignGraphElements.TABLE:
      return "set-tool-table";
    case DesignGraphElements.CONNECTOR_ELBOWED:
      return "set-tool-connector-elbowed";
    case DesignGraphElements.CONNECTOR_STRAIGHT:
      return "set-tool-connector-straight";
    case DesignGraphElements.CONNECTOR_CURVED:
      return "set-tool-connector-curved";
    case DesignGraphElements.CODE_BLOCK:
      return "set-tool-code-block";
    case DesignGraphElements.WASHI_TAPE:
      return "set-tool-washi-tape";
    case DesignGraphElements.SHAPE_WHITEBOARD_SQUARE:
      return "set-tool-shape-whiteboard-square";
    case DesignGraphElements.SHAPE_WHITEBOARD_ELLIPSE:
      return "set-tool-shape-whiteboard-ellipse";
    case DesignGraphElements.SHAPE_WHITEBOARD_DIAMOND:
      return "set-tool-shape-whiteboard-diamond";
    case DesignGraphElements.SHAPE_WHITEBOARD_TRIANGLE_UP:
      return "set-tool-shape-whiteboard-triangle-up";
    case DesignGraphElements.SHAPE_WHITEBOARD_TRIANGLE_DOWN:
      return "set-tool-shape-whiteboard-triangle-down";
    case DesignGraphElements.SHAPE_WHITEBOARD_ROUNDED_RECTANGLE:
      return "set-tool-shape-whiteboard-rounded-rectangle";
    case DesignGraphElements.SHAPE_WHITEBOARD_PARALLELOGRAM_RIGHT:
      return "set-tool-shape-whiteboard-parallelogram-right";
    case DesignGraphElements.SHAPE_WHITEBOARD_PARALLELOGRAM_LEFT:
      return "set-tool-shape-whiteboard-parallelogram-left";
    case DesignGraphElements.SHAPE_WHITEBOARD_ENG_DATABASE:
      return "set-tool-shape-whiteboard-eng-database";
    case DesignGraphElements.SHAPE_WHITEBOARD_ENG_QUEUE:
      return "set-tool-shape-whiteboard-eng-queue";
    case DesignGraphElements.SHAPE_WHITEBOARD_ENG_FILE:
      return "set-tool-shape-whiteboard-eng-file";
    case DesignGraphElements.SHAPE_WHITEBOARD_ENG_FOLDER:
      return "set-tool-shape-whiteboard-eng-folder";
    case DesignGraphElements.SHAPE_WHITEBOARD_TRAPEZOID:
      return "set-tool-shape-whiteboard-trapezoid";
    case DesignGraphElements.SHAPE_WHITEBOARD_STAR:
      return "set-tool-shape-whiteboard-star";
    case DesignGraphElements.SHAPE_WHITEBOARD_SHIELD:
      return "set-tool-shape-whiteboard-shield";
    case DesignGraphElements.SHAPE_WHITEBOARD_HEXAGON:
      return "set-tool-shape-whiteboard-hexagon";
    case DesignGraphElements.SHAPE_WHITEBOARD_PENTAGON:
      return "set-tool-shape-whiteboard-pentagon";
    case DesignGraphElements.SHAPE_WHITEBOARD_OCTAGON:
      return "set-tool-shape-whiteboard-octagon";
    case DesignGraphElements.SHAPE_WHITEBOARD_PLUS:
      return "set-tool-shape-whiteboard-plus";
    case DesignGraphElements.SHAPE_WHITEBOARD_PREDEFINED_PROCESS:
      return "set-tool-shape-whiteboard-predefined-process";
    case DesignGraphElements.SHAPE_WHITEBOARD_MANUAL_INPUT:
      return "set-tool-shape-whiteboard-manual-input";
    case DesignGraphElements.SHAPE_WHITEBOARD_CHEVRON:
      return "set-tool-shape-whiteboard-chevron";
    case DesignGraphElements.SHAPE_WHITEBOARD_DOCUMENT_SINGLE:
      return "set-tool-shape-whiteboard-document-single";
    case DesignGraphElements.SHAPE_WHITEBOARD_DOCUMENT_MULTIPLE:
      return "set-tool-shape-whiteboard-document-multiple";
    case DesignGraphElements.SHAPE_WHITEBOARD_ARROW_LEFT:
      return "set-tool-shape-whiteboard-arrow-left";
    case DesignGraphElements.SHAPE_WHITEBOARD_ARROW_RIGHT:
      return "set-tool-shape-whiteboard-arrow-right";
    case DesignGraphElements.SHAPE_WHITEBOARD_SUMMING_JUNCTION:
      return "set-tool-shape-whiteboard-summing-junction";
    case DesignGraphElements.SHAPE_WHITEBOARD_OR:
      return "set-tool-shape-whiteboard-or";
    case DesignGraphElements.SHAPE_WHITEBOARD_SPEECH_BUBBLE:
      return "set-tool-shape-whiteboard-speech-bubble";
    case DesignGraphElements.SHAPE_WHITEBOARD_INTERNAL_STORAGE:
      return "set-tool-shape-whiteboard-internal-storage";
    case DesignGraphElements.SHAPE_WHITEBOARD_MINDMAP_TREE_NUCLEUS:
      return "set-tool-mindmap-tree-nucleus";
    case DesignGraphElements.ANNOTATE:
      return "set-tool-annotate";
    case DesignGraphElements.MEASURE:
      return "set-tool-measure";
    case DesignGraphElements.DROPPER_COLOR:
      return "toggle-dropper";
    case DesignGraphElements.SLIDES_POLL:
      return "set-tool-slides-poll";
    case DesignGraphElements.SLIDES_EMBED:
      return "set-tool-slides-embed";
    case DesignGraphElements.SLIDES_FACEPILE:
      return "set-tool-slides-facepile";
    case DesignGraphElements.SLIDES_ALIGNMENT_SCALE:
      return "set-tool-slides-alignment-scale";
    case DesignGraphElements.SLIDES_YOUTUBE:
      return "set-tool-slides-youtube";
    case DesignGraphElements.SLIDE_NUMBER:
      return "set-tool-slide-number";
    case DesignGraphElements.SITES_RESPONSIVE_SET:
      return "set-tool-sites-responsive-set";
    case DesignGraphElements.SITES_WEBPAGE:
      return "set-tool-sites-webpage";
    case DesignGraphElements.SITES_RESPONSIVE_NODE_SET:
      return "set-tool-sites-responsive-node-set";
    case DesignGraphElements.SITES_LINK:
      return "set-tool-sites-link";
    case DesignGraphElements.CODE_COMPONENT:
      return "set-tool-code-component";
    case DesignGraphElements.SITES_EMBED:
      return "set-tool-sites-embed";
    case DesignGraphElements.JSX:
      return "set-tool-jsx";
    default:
      console.warn("Unsupported tool", e);
      return "set-tool-default";
  }
}
export function $$p1() {
  let e = useSelector(e => e.mirror.appModel.keyboardShortcuts);
  return useCallback(t => getKeyboardShortcut(e, t), [e]);
}
export function $$_7(e) {
  let t = $$p1();
  return useCallback(r => t(e ? e(r) : $$u3(r)), [t, e]);
}
export function $$h0(e) {
  VU.get(e, "toolbar")();
}
let $$m4 = createReduxSubscriptionAtomWithState(e => e.mirror.appModel.topLevelMode);
let g = createReduxSubscriptionAtomWithState(e => e.mirror.appModel.activeCanvasEditModeType);
let $$f2 = createReduxSubscriptionAtomWithState(e => e.mirror.appModel.currentTool);
let $$E6 = atom(e => e($$f2), (e, t, r) => {
  $$h0($$u3(r));
});
let $$y5 = {
  readOnlyOverlayInfoAtom: dropdownStateAtom,
  activeToolIdAtom: $$E6,
  readOnlyTopLevelModeAtom: $$m4,
  readOnlyEditModeTypeAtom: g
};
export const $v = $$h0;
export const AE = $$p1;
export const Kh = $$f2;
export const O_ = $$u3;
export const Q = $$m4;
export const lW = $$y5;
export const tM = $$E6;
export const uh = $$_7;