import { NLJ, Ez5 } from "../figma_app/763686";
import { Ay } from "../figma_app/778880";
export function $$a3(e) {
  return e === NLJ.VECTOR_PENCIL || e === NLJ.ERASER || e === NLJ.HIGHLIGHTER || e === NLJ.WASHI_TAPE;
}
export function $$s0(e) {
  return !!$$a3(e) && (e === NLJ.VECTOR_PENCIL || e === NLJ.HIGHLIGHTER);
}
export function $$o2() {
  return !Ay.isMeetDevice;
}
export function $$l1(e) {
  let t = Ez5?.uiState().showUI3Colors.getCopy();
  switch (e) {
    case NLJ.HIGHLIGHTER:
      return "highlight";
    case NLJ.VECTOR_PENCIL:
    case NLJ.ERASER:
      return t ? "pencilUI3" : "base";
    case NLJ.STICKY:
      return "sticky";
    default:
      return "base";
  }
}
export const BG = $$s0;
export const GQ = $$l1;
export const JE = $$o2;
export const L = $$a3;