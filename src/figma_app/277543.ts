import { throwTypeError } from "../figma_app/465776";
import { editorUtilities } from "../905/22009";
var $$a1 = (e => (e.DESIGN = "design", e.WHITEBOARD = "whiteboard", e.SLIDES = "slides", e.DEV_HANDOFF = "dev_handoff", e.SITES = "sites", e.COOPER = "cooper", e.FIGMAKE = "figmake", e))($$a1 || {});
export function $$s0(e) {
  switch (e) {
    case editorUtilities.Editors.FIGMA:
      return "design";
    case editorUtilities.Editors.FIGJAM:
      return "whiteboard";
    case editorUtilities.Editors.SLIDES:
      return "slides";
    case editorUtilities.Editors.DEV_MODE:
      return "dev_handoff";
    case editorUtilities.Editors.SITES:
      return "sites";
    case editorUtilities.Editors.COOPER:
      return "cooper";
    case editorUtilities.Editors.FIGMAKE:
      return "figmake";
    case editorUtilities.Editors.PROTOTYPE:
    case editorUtilities.Editors.ALL:
    case void 0:
      return;
    default:
      throwTypeError(e);
  }
}
export const S = $$s0;
export const q = $$a1;
