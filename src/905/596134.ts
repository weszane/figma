import { BrowserInfo } from "../figma_app/778880";
import { useIsSelectedViewFullscreenCooper } from "../figma_app/828186";
import { isWhiteboardFileType } from "../figma_app/976749";
export function $$s0() {
  let e = isWhiteboardFileType();
  let t = useIsSelectedViewFullscreenCooper();
  return (e || t) && !BrowserInfo.isIpad;
}
export const v = $$s0;