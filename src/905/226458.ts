import { throwTypeError } from "../figma_app/465776";
import { NN, y1 } from "../905/445814";
import { nb } from "../figma_app/543100";
import { FFileType } from "../figma_app/191312";
export function $$o0(e) {
  let t = NN();
  switch (e.type) {
    case nb.FILE:
      return t(e.file);
    case nb.PINNED_FILE:
    case nb.OFFLINE_FILE:
      if (e.file.editorType === FFileType.WHITEBOARD) return y1.WHITEBOARD;
      if (e.file.editorType === FFileType.SLIDES) return y1.SLIDES;
      if (e.file.editorType === FFileType.SITES) return y1.SITES;
      if (e.file.editorType === FFileType.COOPER) return y1.COOPER;
      if (e.file.editorType === FFileType.FIGMAKE) return y1.FIGMAKE;
      if (e.file.editorType === FFileType.DESIGN || null === e.file.editorType) return y1.DESIGN;
      throwTypeError(e.file.editorType);
    case nb.PROTOTYPE:
      return y1.PROTOTYPE;
    case nb.REPO:
      return y1.REPO;
    default:
      throwTypeError(e);
  }
}
export const C = $$o0;