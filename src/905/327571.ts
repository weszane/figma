import { debugState } from '../905/407919';
import { getFeatureFlags } from '../905/601108';
import { ManifestEditorType } from '../figma_app/155287';
import { isPluginIdAllowed } from '../figma_app/455620';
/**
 * Maps a given view type to its corresponding FW constant.
 * Original function: $$o3
 * @param viewType - The type of view to map.
 * @returns The corresponding FW constant.
 */
export function mapViewTypeToMainfestEditorType(viewType: string): ManifestEditorType {
  switch (viewType) {
    case 'whiteboard':
    case 'figjam':
      return ManifestEditorType.FIGJAM;
    case 'design_and_inspect':
    case 'inspect':
    case 'dev':
      return ManifestEditorType.DEV;
    case 'slides':
      return ManifestEditorType.SLIDES;
    case 'buzz':
      return getFeatureFlags().buzz_plugins_publishing ? ManifestEditorType.BUZZ : ManifestEditorType.FIGMA;
    case 'design':
    case 'design_and_whiteboard':
    case 'figma':
    case 'sites':
    default:
      return ManifestEditorType.FIGMA;
  }
}

/**
 * Parses plugin parameters from the provided object if valid.
 * Original function: $$l0
 * @param paramsObj - Object containing plugin parameters.
 * @returns Parsed parameters object or undefined.
 */
export function parsePluginParams(paramsObj: Record<string, any>): Record<string, any> | undefined {
  const pluginId = paramsObj['try-plugin-id'];
  if (pluginId && typeof pluginId === 'string' && isValidPluginId(pluginId)) {
    try {
      const rawParams = paramsObj['try-plugin-params'];
      const decodedParams = decodeURI(rawParams);
      const parsed = JSON.parse(decodedParams ?? '{}');
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        return parsed;
      }
    } catch {
      // Ignore parsing errors
    }
  }
  return undefined;
}

/**
 * Retrieves plugin parameters from debug state if conditions are met.
 * Original function: $$d1
 * @param pluginId - The plugin ID to match.
 * @returns The plugin parameters or undefined.
 */
export function getDebugPluginParams(pluginId: string): Record<string, any> | undefined {
  if (!isValidPluginId(pluginId)) return undefined;
  const state = debugState.getState();
  if (!state || state.selectedView.view !== 'fullscreen') return undefined;
  const {
    tryPluginParams,
    tryPluginId
  } = state.selectedView;
  if (tryPluginId === pluginId) return tryPluginParams;
  return undefined;
}

/**
 * Validates the plugin ID.
 * Original function: $$c2
 * @param pluginId - The plugin ID to validate.
 * @returns True if valid, false otherwise.
 */
export function isValidPluginId(pluginId: string): boolean {
  return isPluginIdAllowed(pluginId);
}

// Exported aliases for backward compatibility
export const Ex = parsePluginParams;
export const TP = getDebugPluginParams;
export const qW = isValidPluginId;
export const zO = mapViewTypeToMainfestEditorType;
