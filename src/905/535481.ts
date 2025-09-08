import { AppStateTsApi } from "../figma_app/763686";
import { isInteractionPathCheck } from "../figma_app/897289";
export function $$a0() {
  return !isInteractionPathCheck() && AppStateTsApi?.editorPreferences().pluginApiDebug.getCopy();
}
export const j = $$a0;