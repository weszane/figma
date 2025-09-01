import { FTemplateCategoryType, FFileType } from "../figma_app/191312";
export function $$i0(e) {
  switch (e) {
    case FTemplateCategoryType.WHITEBOARD:
      return "figjam";
    case FTemplateCategoryType.SLIDE_TEMPLATE:
      return "slides";
    default:
      return "design";
  }
}
export function $$a1(e) {
  switch (e) {
    case FTemplateCategoryType.WHITEBOARD:
      return FFileType.WHITEBOARD;
    case FTemplateCategoryType.SLIDE_TEMPLATE:
      return FFileType.SLIDES;
    default:
      return FFileType.DESIGN;
  }
}
export const L = $$i0;
export const N = $$a1;