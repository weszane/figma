import { useSelector } from "../vendor/514228";
import { m1T } from "../figma_app/763686";
export function $$a0() {
  return !!useSelector(e => e.mirror.appModel.activeCanvasEditModeType === m1T.HISTORY && e.versionHistory.activeId && "current_version" !== e.versionHistory.activeId);
}
export const N = $$a0;