import { throwTypeError } from "../figma_app/465776";
import { k } from "../905/22009";
var $$a1 = (e => (e.DESIGN = "design", e.WHITEBOARD = "whiteboard", e.SLIDES = "slides", e.DEV_HANDOFF = "dev_handoff", e.SITES = "sites", e.COOPER = "cooper", e.FIGMAKE = "figmake", e))($$a1 || {});
export function $$s0(e) {
  switch (e) {
    case k.Editors.FIGMA:
      return "design";
    case k.Editors.FIGJAM:
      return "whiteboard";
    case k.Editors.SLIDES:
      return "slides";
    case k.Editors.DEV_MODE:
      return "dev_handoff";
    case k.Editors.SITES:
      return "sites";
    case k.Editors.COOPER:
      return "cooper";
    case k.Editors.FIGMAKE:
      return "figmake";
    case k.Editors.PROTOTYPE:
    case k.Editors.ALL:
    case void 0:
      return;
    default:
      throwTypeError(e);
  }
}
export const S = $$s0;
export const q = $$a1;