import { returnSecond } from "../figma_app/465776";
import { FFileType } from "../figma_app/191312";
export function $$a0(e) {
  switch (e) {
    case FFileType.DESIGN:
      return "design";
    case FFileType.WHITEBOARD:
      return "whiteboard";
    case FFileType.SLIDES:
      return "piper";
    case FFileType.SITES:
      return "seascape";
    case FFileType.FIGMAKE:
      return "bake-filebrowser";
    case FFileType.COOPER:
      return "cooper";
    default:
      return returnSecond(e, "design");
  }
}
export const K = $$a0;