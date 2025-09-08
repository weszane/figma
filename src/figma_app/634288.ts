import { DesignGraphElements, AppStateTsApi } from "../figma_app/763686";
import { BrowserInfo } from "../figma_app/778880";
export function $$a3(e) {
  return e === DesignGraphElements.VECTOR_PENCIL || e === DesignGraphElements.ERASER || e === DesignGraphElements.HIGHLIGHTER || e === DesignGraphElements.WASHI_TAPE;
}
export function $$s0(e) {
  return !!$$a3(e) && (e === DesignGraphElements.VECTOR_PENCIL || e === DesignGraphElements.HIGHLIGHTER);
}
export function $$o2() {
  return !BrowserInfo.isMeetDevice;
}
export function $$l1(e) {
  let t = AppStateTsApi?.uiState().showUI3Colors.getCopy();
  switch (e) {
    case DesignGraphElements.HIGHLIGHTER:
      return "highlight";
    case DesignGraphElements.VECTOR_PENCIL:
    case DesignGraphElements.ERASER:
      return t ? "pencilUI3" : "base";
    case DesignGraphElements.STICKY:
      return "sticky";
    default:
      return "base";
  }
}
export const BG = $$s0;
export const GQ = $$l1;
export const JE = $$o2;
export const L = $$a3;