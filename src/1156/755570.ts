import { lV } from "../figma_app/617606";
import { isSitesFileType } from "../figma_app/976749";
import { useIsSelectedFigmakeFullscreen } from "../figma_app/552876";
export function $$a0() {
  let e = useIsSelectedFigmakeFullscreen();
  let t = isSitesFileType();
  return e ? lV.FIGMAKE : t ? lV.CODE_IN_SITES : lV.AI_ASSISTANT;
}
export const Q = $$a0;