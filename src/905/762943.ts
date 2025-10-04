import { ANDROID, ANDROID_XML, IOS, IOS_UIKIT, WEB } from '../905/359509'
import { debugState } from '../905/407919'
import { findUnitSchema } from '../905/515076'
import { findCodegenLanguage } from '../905/661977'
import { FEditorType } from '../figma_app/53721'
import { filterEntriesByEditorType, filterEntriesByPluginVersionEditorType, getPluginByFileId } from '../figma_app/300692'
import { MeasurementUnit } from '../figma_app/763686'

/**
 * Unit mapping for different platforms.
 * Original variable: $$c0
 */
export const unitMapping = {
  scaledWeb: 'rem',
  scaledIOS: 'pt',
  scaledAndroid: 'dp',
  scaledAndroidText: 'sp',
  pixel: 'px',
}

/**
 * Finds the plugin for the given entry and returns the appropriate unit.
 * Original function: $$u3
 * @param entry - The entry object containing id and type.
 * @param isTextProperty - Optional flag for text property.
 * @returns The unit string.
 */
export function getUnitForEntry(entry: {
  id: string
  type: string
  pluginLanguage?: string
}, isTextProperty?: any): string {
  const plugin = findPluginForEntry(entry.id, {
    searchLocalPlugins: entry.type === 'local-plugin',
    searchPublishedPlugins: entry.type === 'published-plugin',
  })
  return getUnit(entry, plugin, isTextProperty)
}

/**
 * Helper to find plugin by file id.
 * Original inline function in $$u3
 * @param id - File id to search.
 * @param options - Search options.
 * @returns Plugin object or undefined.
 */
function findPluginForEntry(
  id: string,
  options: { searchLocalPlugins: boolean, searchPublishedPlugins: boolean },
) {
  const localPlugins = debugState.getState().localPlugins
  const publishedPlugins = debugState.getState().publishedPlugins

  const local = filterEntriesByEditorType(FEditorType.DevHandoff, localPlugins)
  const published = filterEntriesByPluginVersionEditorType(FEditorType.DevHandoff, publishedPlugins)

  return getPluginByFileId({
    idToSearch: id,
    localExtensionsByFileId: options.searchLocalPlugins ? local : undefined,
    publishedExtensions: options.searchPublishedPlugins ? published : undefined,
  })
}

/**
 * Returns the unit for the given entry and plugin.
 * Original function: $$p2
 * @param entry - Entry object.
 * @param plugin - Plugin object.
 * @param isTextProperty - Optional flag for text property.
 * @returns The unit string.
 */
export function getUnit(
  entry: { id: string, type: string, pluginLanguage?: string },
  plugin: any,
  isTextProperty?: any,
): string {
  return isTextProperty === MeasurementUnit.PIXEL
    ? unitMapping.pixel
    : resolveUnit(entry, plugin, isTextProperty)
}

/**
 * Resolves the unit based on entry, plugin, and property type.
 * Original function: $$m1
 * @param entry - Entry object.
 * @param plugin - Plugin object.
 * @param isTextProperty - Optional flag for text property.
 * @returns The unit string.
 */
export function resolveUnit(
  entry: { id: string, type: string, pluginLanguage?: string },
  plugin: any,
  isTextProperty?: any,
): string {
  const { id, type, pluginLanguage } = entry

  if (type !== 'first-party' && plugin) {
    const language = findCodegenLanguage(plugin, pluginLanguage)
    const schema = findUnitSchema(plugin, language)
    if (schema)
      return schema.scaledUnit
  }

  switch (id) {
    case WEB:
      return unitMapping.scaledWeb
    case IOS:
    case IOS_UIKIT:
      return unitMapping.scaledIOS
    case ANDROID:
    case ANDROID_XML:
      if (isTextProperty?.isTextProperty)
        return unitMapping.scaledAndroidText
      return unitMapping.scaledAndroid
    default:
      return unitMapping.scaledWeb
  }
}

// Refactored exports for compatibility with original names
export const kn = unitMapping // $$c0
export const Uh = resolveUnit // $$m1
export const ip = getUnit // $$p2
export const $o = getUnitForEntry // $$u3
