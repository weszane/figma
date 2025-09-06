import { Ez5 } from "../figma_app/763686";
import { isInteractionPathCheck } from "../figma_app/897289";
export function $$a0() {
  return !isInteractionPathCheck() && Ez5?.editorPreferences().pluginApiDebug.getCopy();
}
export const j = $$a0;