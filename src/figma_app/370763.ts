import { useCallback } from "react";
import { useSelector } from "../vendor/514228";
import { NLJ } from "../figma_app/763686";
import { eU } from "../figma_app/27355";
import { VU } from "../905/625959";
import { xc } from "../905/848862";
import { bt } from "../905/270322";
import { c1 } from "../figma_app/357047";
export function $$u3(e) {
  switch (e) {
    case NLJ.SELECT:
      return "set-tool-default";
    case NLJ.HAND:
      return "set-tool-hand";
    case NLJ.SCALE:
      return "set-tool-scale";
    case NLJ.LASSO:
      return "set-tool-lasso";
    case NLJ.MULTISELECT:
      return "set-tool-multiselect";
    case NLJ.COMMENTS:
      return "set-tool-comments";
    case NLJ.FRAME:
      return "set-tool-frame";
    case NLJ.SLICE:
      return "set-tool-slice";
    case NLJ.SHAPE_STAR:
      return "set-tool-star";
    case NLJ.SHAPE_LINE:
      return "set-tool-line";
    case NLJ.SHAPE_ARROW:
      return "set-tool-arrow";
    case NLJ.SHAPE_ELLIPSE:
      return "set-tool-ellipse";
    case NLJ.SHAPE_RECTANGLE:
      return "set-tool-rectangle";
    case NLJ.SHAPE_REGULAR_POLYGON:
      return "set-tool-regular-polygon";
    case NLJ.VECTOR_PEN:
      return "set-tool-pen";
    case NLJ.VECTOR_PENCIL:
      return "set-tool-pencil";
    case NLJ.BRUSH:
      return "set-tool-brush";
    case NLJ.ERASER:
      return "set-tool-eraser";
    case NLJ.HIGHLIGHTER:
      return "set-tool-highlighter";
    case NLJ.VECTOR_BEND:
      return "set-tool-bend";
    case NLJ.VECTOR_CUT:
      return "set-tool-cut";
    case NLJ.OFFSET_PATH:
      return "set-tool-offset-path";
    case NLJ.VECTOR_LASSO:
      return "set-tool-vector-lasso";
    case NLJ.VECTOR_PAINT_BUCKET:
      return "set-tool-paint-bucket";
    case NLJ.VECTOR_VAR_WIDTH_POINT:
      return "set-tool-var-width-point";
    case NLJ.SHAPE_BUILDER:
      return "set-tool-shape-builder";
    case NLJ.SIMPLIFY_VECTOR:
      return "set-tool-simplify-vector";
    case NLJ.TYPE:
      return "set-tool-type";
    case NLJ.IMAGE_OR_VIDEO:
      return "place";
    case NLJ.STICKY:
      return "set-tool-sticky";
    case NLJ.STAMP:
      return "set-tool-stamp";
    case NLJ.SECTION:
      return "set-tool-section";
    case NLJ.TABLE:
      return "set-tool-table";
    case NLJ.CONNECTOR_ELBOWED:
      return "set-tool-connector-elbowed";
    case NLJ.CONNECTOR_STRAIGHT:
      return "set-tool-connector-straight";
    case NLJ.CONNECTOR_CURVED:
      return "set-tool-connector-curved";
    case NLJ.CODE_BLOCK:
      return "set-tool-code-block";
    case NLJ.WASHI_TAPE:
      return "set-tool-washi-tape";
    case NLJ.SHAPE_WHITEBOARD_SQUARE:
      return "set-tool-shape-whiteboard-square";
    case NLJ.SHAPE_WHITEBOARD_ELLIPSE:
      return "set-tool-shape-whiteboard-ellipse";
    case NLJ.SHAPE_WHITEBOARD_DIAMOND:
      return "set-tool-shape-whiteboard-diamond";
    case NLJ.SHAPE_WHITEBOARD_TRIANGLE_UP:
      return "set-tool-shape-whiteboard-triangle-up";
    case NLJ.SHAPE_WHITEBOARD_TRIANGLE_DOWN:
      return "set-tool-shape-whiteboard-triangle-down";
    case NLJ.SHAPE_WHITEBOARD_ROUNDED_RECTANGLE:
      return "set-tool-shape-whiteboard-rounded-rectangle";
    case NLJ.SHAPE_WHITEBOARD_PARALLELOGRAM_RIGHT:
      return "set-tool-shape-whiteboard-parallelogram-right";
    case NLJ.SHAPE_WHITEBOARD_PARALLELOGRAM_LEFT:
      return "set-tool-shape-whiteboard-parallelogram-left";
    case NLJ.SHAPE_WHITEBOARD_ENG_DATABASE:
      return "set-tool-shape-whiteboard-eng-database";
    case NLJ.SHAPE_WHITEBOARD_ENG_QUEUE:
      return "set-tool-shape-whiteboard-eng-queue";
    case NLJ.SHAPE_WHITEBOARD_ENG_FILE:
      return "set-tool-shape-whiteboard-eng-file";
    case NLJ.SHAPE_WHITEBOARD_ENG_FOLDER:
      return "set-tool-shape-whiteboard-eng-folder";
    case NLJ.SHAPE_WHITEBOARD_TRAPEZOID:
      return "set-tool-shape-whiteboard-trapezoid";
    case NLJ.SHAPE_WHITEBOARD_STAR:
      return "set-tool-shape-whiteboard-star";
    case NLJ.SHAPE_WHITEBOARD_SHIELD:
      return "set-tool-shape-whiteboard-shield";
    case NLJ.SHAPE_WHITEBOARD_HEXAGON:
      return "set-tool-shape-whiteboard-hexagon";
    case NLJ.SHAPE_WHITEBOARD_PENTAGON:
      return "set-tool-shape-whiteboard-pentagon";
    case NLJ.SHAPE_WHITEBOARD_OCTAGON:
      return "set-tool-shape-whiteboard-octagon";
    case NLJ.SHAPE_WHITEBOARD_PLUS:
      return "set-tool-shape-whiteboard-plus";
    case NLJ.SHAPE_WHITEBOARD_PREDEFINED_PROCESS:
      return "set-tool-shape-whiteboard-predefined-process";
    case NLJ.SHAPE_WHITEBOARD_MANUAL_INPUT:
      return "set-tool-shape-whiteboard-manual-input";
    case NLJ.SHAPE_WHITEBOARD_CHEVRON:
      return "set-tool-shape-whiteboard-chevron";
    case NLJ.SHAPE_WHITEBOARD_DOCUMENT_SINGLE:
      return "set-tool-shape-whiteboard-document-single";
    case NLJ.SHAPE_WHITEBOARD_DOCUMENT_MULTIPLE:
      return "set-tool-shape-whiteboard-document-multiple";
    case NLJ.SHAPE_WHITEBOARD_ARROW_LEFT:
      return "set-tool-shape-whiteboard-arrow-left";
    case NLJ.SHAPE_WHITEBOARD_ARROW_RIGHT:
      return "set-tool-shape-whiteboard-arrow-right";
    case NLJ.SHAPE_WHITEBOARD_SUMMING_JUNCTION:
      return "set-tool-shape-whiteboard-summing-junction";
    case NLJ.SHAPE_WHITEBOARD_OR:
      return "set-tool-shape-whiteboard-or";
    case NLJ.SHAPE_WHITEBOARD_SPEECH_BUBBLE:
      return "set-tool-shape-whiteboard-speech-bubble";
    case NLJ.SHAPE_WHITEBOARD_INTERNAL_STORAGE:
      return "set-tool-shape-whiteboard-internal-storage";
    case NLJ.SHAPE_WHITEBOARD_MINDMAP_TREE_NUCLEUS:
      return "set-tool-mindmap-tree-nucleus";
    case NLJ.ANNOTATE:
      return "set-tool-annotate";
    case NLJ.MEASURE:
      return "set-tool-measure";
    case NLJ.DROPPER_COLOR:
      return "toggle-dropper";
    case NLJ.SLIDES_POLL:
      return "set-tool-slides-poll";
    case NLJ.SLIDES_EMBED:
      return "set-tool-slides-embed";
    case NLJ.SLIDES_FACEPILE:
      return "set-tool-slides-facepile";
    case NLJ.SLIDES_ALIGNMENT_SCALE:
      return "set-tool-slides-alignment-scale";
    case NLJ.SLIDES_YOUTUBE:
      return "set-tool-slides-youtube";
    case NLJ.SLIDE_NUMBER:
      return "set-tool-slide-number";
    case NLJ.SITES_RESPONSIVE_SET:
      return "set-tool-sites-responsive-set";
    case NLJ.SITES_WEBPAGE:
      return "set-tool-sites-webpage";
    case NLJ.SITES_RESPONSIVE_NODE_SET:
      return "set-tool-sites-responsive-node-set";
    case NLJ.SITES_LINK:
      return "set-tool-sites-link";
    case NLJ.CODE_COMPONENT:
      return "set-tool-code-component";
    case NLJ.SITES_EMBED:
      return "set-tool-sites-embed";
    case NLJ.JSX:
      return "set-tool-jsx";
    default:
      console.warn("Unsupported tool", e);
      return "set-tool-default";
  }
}
export function $$p1() {
  let e = useSelector(e => e.mirror.appModel.keyboardShortcuts);
  return useCallback(t => c1(e, t), [e]);
}
export function $$_7(e) {
  let t = $$p1();
  return useCallback(r => t(e ? e(r) : $$u3(r)), [t, e]);
}
export function $$h0(e) {
  VU.get(e, "toolbar")();
}
let $$m4 = bt(e => e.mirror.appModel.topLevelMode);
let g = bt(e => e.mirror.appModel.activeCanvasEditModeType);
let $$f2 = bt(e => e.mirror.appModel.currentTool);
let $$E6 = eU(e => e($$f2), (e, t, r) => {
  $$h0($$u3(r));
});
let $$y5 = {
  readOnlyOverlayInfoAtom: xc,
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