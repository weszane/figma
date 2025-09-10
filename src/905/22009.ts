import { throwTypeError } from "../figma_app/465776";
import { FFileType } from "../figma_app/191312";
var $$n0;
(e => {
  let t;
  (e => {
    e.FIGJAM = "figjam";
    e.FIGMA = "figma";
    e.PROTOTYPE = "prototype";
    e.DEV_MODE = "devmode";
    e.SLIDES = "slides";
    e.SITES = "sites";
    e.COOPER = "buzz";
    e.FIGMAKE = "make";
    e.ALL = "all";
  })(t = e.Editors || (e.Editors = {}));
  e.EditorParamList = Object.values(t);
  e.UniqueEditorTypes = Object.keys(t).filter(e => "ALL" !== e).map(e => t[e]);
  e.getApiEditorType = function (e) {
    switch (e) {
      case FFileType.DESIGN:
        return "figma";
      case FFileType.SLIDES:
        return "slides";
      case FFileType.WHITEBOARD:
        return "figjam";
      case FFileType.COOPER:
        return "buzz";
      case FFileType.FIGMAKE:
        return "make";
      case FFileType.SITES:
        return "sites";
      default:
        throwTypeError(e);
    }
  };
})($$n0 || ($$n0 = {}));
export const k = $$n0;
