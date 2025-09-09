import { FIGMA_PROPERTIES } from '../905/359509'
import { debugState } from '../905/407919'
import { findCodegenLanguage, getCodegenLanguages } from '../905/661977'
import { hasLocalFileId, isSelectSchema, isUnitSchema } from '../figma_app/155287'
import { updateDevHandoffPreferences } from '../figma_app/741237'
import { MeasurementUnit } from '../figma_app/763686'

// Measurement units used for codegen preferences (original: $$d8)
const CODEGEN_MEASUREMENT_UNITS = [MeasurementUnit.PIXEL, MeasurementUnit.SCALED]

// List of Figma properties (original: c)
const FIGMA_PROPERTIES_LIST = [FIGMA_PROPERTIES]

/**
 * Returns the unique plugin id for a given plugin object.
 * @param plugin - The plugin object.
 * @returns The local file id or published plugin id.
 * (original: $$u2)
 */
function getPluginUniqueId(plugin: any): string {
  return hasLocalFileId(plugin) ? `${plugin.localFileId}` : `${plugin.plugin_id}`
}

/**
 * Returns the codegen language preferences for a plugin.
 * @param plugin - The plugin object.
 * @param language - The selected language object.
 * @returns The codegen language preference object.
 * (original: $$p0)
 */
function getCodegenLanguagePreference(plugin: any, language?: any): any {
  const type = hasLocalFileId(plugin) ? 'local-plugin' : 'published-plugin'
  const id = getPluginUniqueId(plugin)
  if (language) {
    return {
      type,
      id,
      pluginLanguage: language.value,
    }
  }
  const devHandoffCodeLanguage = debugState.getState().mirror.appModel.devHandoffCodeLanguage
  const availableLanguages = getCodegenLanguages(plugin).map(({ value }) => value)
  return devHandoffCodeLanguage.id === id
    && devHandoffCodeLanguage.type !== 'first-party'
    && availableLanguages.includes(devHandoffCodeLanguage.pluginLanguage)
    ? devHandoffCodeLanguage
    : {
        type,
        id,
        pluginLanguage: availableLanguages[0] ?? '',
      }
}

/**
 * Filters codegen preferences based on the selected language.
 * @param plugin - The plugin object.
 * @param language - The selected language object.
 * @returns Filtered codegen preferences.
 * (original: $$m7)
 */
function filterCodegenPreferences(plugin: any, language?: any): any[] {
  return plugin
    ? (plugin.manifest?.codegenPreferences ?? []).filter(pref =>
        !language?.value
        || !('includedLanguages' in pref)
        || pref.includedLanguages?.includes(language.value),
      )
    : []
}

/**
 * Finds the unit schema from codegen preferences.
 * @param plugin - The plugin object.
 * @param language - The selected language object.
 * @returns The unit schema or null.
 * (original: $$h3)
 */
function findUnitSchema(plugin: any, language?: any): any | null {
  return filterCodegenPreferences(plugin, language).find(isUnitSchema) ?? null
}

/**
 * Determines if the plugin supports codegen for the given language.
 * @param codegenLanguage - The codegen language preference object.
 * @param plugin - The plugin object.
 * @returns True if supported, false otherwise.
 * (original: $$g4)
 */
function isCodegenSupported(codegenLanguage: any, plugin: any): boolean {
  if (!codegenLanguage)
    return false
  if (codegenLanguage.type === 'first-party')
    return !FIGMA_PROPERTIES_LIST.includes(codegenLanguage.id)
  if (!plugin)
    return false
  const language = findCodegenLanguage(plugin, codegenLanguage.pluginLanguage)
  return !!findUnitSchema(plugin, language)
}

/**
 * Updates dev handoff preferences with new code extension preferences.
 * @param preferences - The current dev handoff preferences.
 * @param codegenLanguage - The codegen language preference object.
 * @param updates - The updates to apply.
 * (original: $$f1)
 */
function updateCodeExtensionPreferences(preferences: any, codegenLanguage: any, updates: any): void {
  const updatedPreferences = {
    ...preferences,
    codeExtensionPreferences: {
      ...preferences.codeExtensionPreferences,
      [codegenLanguage.id]: {
        ...(preferences.codeExtensionPreferences?.[codegenLanguage.id] || {}),
        ...updates,
      },
    },
  }
  updateDevHandoffPreferences(updatedPreferences)
}

/**
 * Computes code extension preferences for a plugin and language.
 * @param plugin - The plugin object.
 * @param language - The selected language object.
 * @returns An object containing update flags and preferences.
 * (original: $$_6)
 */
export function computeCodeExtensionPreferences(plugin: any, language?: any): any {
  const pluginId = getPluginUniqueId(plugin)
  const currentPreferences
    = debugState.getState().mirror.appModel.devHandoffPreferences.codeExtensionPreferences[pluginId] ?? {}
  const updates: any = {}
  const unitSchema = findUnitSchema(plugin, language)
  let shouldUpdateAltUnit = false
  let shouldUpdateScaleFactor = false

  // Set default unit and scale factor if not present
  if (!('unit' in currentPreferences) || !('scaleFactor' in currentPreferences)) {
    updates.unit = unitSchema?.default ? MeasurementUnit.SCALED : MeasurementUnit.PIXEL
    updates.scaleFactor = unitSchema?.defaultScaleFactor ? unitSchema.defaultScaleFactor : 1
    shouldUpdateAltUnit = true
    shouldUpdateScaleFactor = true
  }

  // Handle fallback for missing language or schema
  if (!language && !unitSchema && currentPreferences.unit === MeasurementUnit.SCALED) {
    updates.unit = MeasurementUnit.PIXEL
    updates.scaleFactor = 1
    shouldUpdateAltUnit = true
    shouldUpdateScaleFactor = true
  }

  // Handle fallback for alternate unit
  if (!shouldUpdateAltUnit && language && currentPreferences.unit === MeasurementUnit.SCALED && !unitSchema) {
    updates.unit = unitSchema ? MeasurementUnit.SCALED : MeasurementUnit.PIXEL
    shouldUpdateAltUnit = true
  }

  // Custom settings for select schemas
  let shouldUpdateCustomSettings = false
  const selectSchemas = filterCodegenPreferences(plugin, language).filter(isSelectSchema)
  const customSettings = currentPreferences.customSettings ?? {}
  const newCustomSettings: any = {}
  for (const schema of selectSchemas) {
    const value = customSettings[schema.propertyName]
    if (value && schema.options.some(option => option.value === value)) {
      newCustomSettings[schema.propertyName] = value
      continue
    }
    newCustomSettings[schema.propertyName]
      = schema.options.find(option => option.isDefault)?.value ?? schema.options[0].value
    shouldUpdateCustomSettings = true
  }
  if (
    shouldUpdateCustomSettings
    || Object.keys(customSettings).length !== Object.keys(newCustomSettings).length
  ) {
    updates.customSettings = newCustomSettings
  }

  // Merge updates with current preferences
  const mergedPreferences = {
    ...currentPreferences,
    ...updates,
  }

  return {
    shouldUpdateCustomSettings: !!updates.customSettings,
    shouldUpdateScaleFactor,
    shouldUpdateAltUnit,
    preferences: {
      ...mergedPreferences,
      scaleFactor: mergedPreferences.unit === MeasurementUnit.PIXEL ? 1 : mergedPreferences.scaleFactor,
    },
  }
}

/**
 * Applies code extension preferences and updates dev handoff preferences if needed.
 * @param plugin - The plugin object.
 * @param language - The selected language object.
 * @returns The updated preferences.
 * (original: $$A5)
 */
function applyCodeExtensionPreferences(plugin: any, language?: any): any {
  let altPreferences = null
  let {
    shouldUpdateCustomSettings,
    shouldUpdateAltUnit,
    shouldUpdateScaleFactor,
    preferences,
  } = computeCodeExtensionPreferences(plugin, null)
  if (language) {
    const result = computeCodeExtensionPreferences(plugin, language)
    shouldUpdateAltUnit = result.shouldUpdateAltUnit
    altPreferences = result.preferences
    if (shouldUpdateAltUnit) {
      preferences.unit = altPreferences.unit
    }
  }
  const updates: any = {}
  if (shouldUpdateCustomSettings)
    updates.customSettings = preferences.customSettings
  if (shouldUpdateScaleFactor)
    updates.scaleFactor = preferences.scaleFactor
  if (shouldUpdateAltUnit)
    updates.unit = preferences.unit
  if (Object.keys(updates).length > 0) {
    updateCodeExtensionPreferences(
      debugState.getState().mirror.appModel.devHandoffPreferences,
      getCodegenLanguagePreference(plugin),
      updates,
    )
  }
  return altPreferences ?? preferences
}

// Export statements with original names
export const $n = getCodegenLanguagePreference
export const D8 = updateCodeExtensionPreferences
export const GL = getPluginUniqueId
export const K6 = findUnitSchema
export const ZA = isCodegenSupported
export const dW = applyCodeExtensionPreferences
export const n_ = computeCodeExtensionPreferences
export const zZ = filterCodegenPreferences
export const zq = CODEGEN_MEASUREMENT_UNITS
