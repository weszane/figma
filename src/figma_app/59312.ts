import { useSelector } from "../vendor/514228";
import { LayoutTabType } from "../figma_app/763686";
export function $$a0() {
  return !!useSelector(e => e.mirror.appModel.activeCanvasEditModeType === LayoutTabType.HISTORY && e.versionHistory.activeId && "current_version" !== e.versionHistory.activeId);
}
export const N = $$a0;