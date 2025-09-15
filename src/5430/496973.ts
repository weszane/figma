import { FileTypeEnum } from "../905/71785";
export function $$i0(e) {
  switch (e) {
    case FileTypeEnum.FIGJAM:
      return "whiteboard";
    case FileTypeEnum.SLIDES:
      return "piper";
    case FileTypeEnum.SITES:
      return "seascape";
    case FileTypeEnum.FIGMAKE:
      return "bake-filebrowser";
    case FileTypeEnum.COOPER:
      return "cooper";
    default:
      return "design";
  }
}
export const n = $$i0;