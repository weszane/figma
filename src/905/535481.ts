import { AppStateTsApi } from '../figma_app/763686'
import { isInteractionPathCheck } from '../figma_app/897289'

/**
 * Returns the copy from pluginApiDebug if not in interaction path.
 * Original function: $$a0
 */
export function getPluginApiDebugCopy(): string | undefined {
  if (isInteractionPathCheck()) {
    return undefined
  }
  return AppStateTsApi?.editorPreferences().pluginApiDebug.getCopy()
}

/** Alias for getPluginApiDebugCopy (original: j) */
export const j = getPluginApiDebugCopy
