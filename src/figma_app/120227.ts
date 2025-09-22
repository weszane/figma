import { isEmpty } from 'lodash-es';
import { useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getI18nString } from '../905/303541';
import { ANDROID, ANDROID_XML, FIGMA_PROPERTIES, IOS, IOS_UIKIT, WEB } from '../905/359509';
import { debugState } from '../905/407919';
import { applyCodeExtensionPreferences, filterCodegenPreferences, getPluginUniqueId, isCodegenSupported, updateCodeExtensionPreferences } from '../905/515076';
import { findCodegenLanguage } from '../905/661977';
import { getUnit, resolveUnit, unitMapping } from '../905/762943';
import { isActionSchema, isSelectSchema } from '../figma_app/155287';
import { PluginCallbacks } from '../figma_app/603466';
import { AC, QN, v4 } from '../figma_app/655139';
import { MeasurementUnit } from '../figma_app/763686';
import { findPluginOrWidgetByFileId } from '../figma_app/844435';
import { trackFileEventWithStore } from '../figma_app/901889';

/**
 * Retrieves code extension preferences for a given language ID.
 * @param languageId - The language ID or fallback.
 * @returns Code extension preferences object.
 * (Original: $$y13)
 */
export function getCodeExtensionPreferences(languageId?: string) {
  const defaultId = v4().id;
  const devHandoffPreferences: any = useSelector<ObjectOf>(state => state.mirror.appModel.devHandoffPreferences);
  const id = languageId ?? defaultId;
  return useMemo(() => devHandoffPreferences.codeExtensionPreferences?.[id] ?? {}, [devHandoffPreferences, id]);
}

/**
 * Gets code extension preferences for the current dev handoff code language.
 * (Original: $$b15)
 */
export function getCurrentCodeExtensionPreferences() {
  const appModel = debugState.getState()?.mirror?.appModel;
  const languageId = appModel?.devHandoffCodeLanguage?.id ?? '';
  return appModel?.devHandoffPreferences?.codeExtensionPreferences?.[languageId] ?? {};
}

/**
 * Returns a callback to update code extension preferences and track events.
 * (Original: $$T2)
 */
export function useUpdateCodeExtensionPreferences() {
  const devHandoffPreferences = useSelector<ObjectOf>(state => state.mirror.appModel.devHandoffPreferences);
  const trackEvent = trackFileEventWithStore();
  return useCallback((language, plugin, preferences) => {
    const {
      customSettings,
      ...rest
    } = preferences;
    if (!isEmpty(rest)) {
      if (rest.unit !== undefined) {
        rest.unit = getUnit(language, plugin, rest.unit);
      }
      trackEvent('Dev Mode Preference Changed', {
        languageType: language.type,
        languageId: language.id,
        ...rest
      });
    }
    updateCodeExtensionPreferences(devHandoffPreferences, language, preferences);
  }, [devHandoffPreferences, trackEvent]);
}

/**
 * Gets the measurement unit for a language.
 * (Original: $$I7)
 */
export function getMeasurementUnit(language?: any) {
  const defaultLang = v4();
  const lang = language ?? defaultLang;
  const unit = getCodeExtensionPreferences(lang.id)?.unit ?? MeasurementUnit.PIXEL;
  return lang.type === 'first-party' && lang.id === FIGMA_PROPERTIES ? MeasurementUnit.PIXEL : unit;
}

/**
 * Gets the scale factor for a language.
 * (Original: $$S12)
 */
export function getScaleFactor(language?: any) {
  const defaultLang = v4();
  const lang = language ?? defaultLang;
  const {
    unit = MeasurementUnit.PIXEL,
    scaleFactor = 1
  } = getCodeExtensionPreferences(lang.id);
  return lang.type === 'first-party' && lang.id === FIGMA_PROPERTIES ? 1 : unit === MeasurementUnit.SCALED ? scaleFactor : 1;
}

/**
 * Checks if only text should be used based on preferences and options.
 * (Original: v)
 */
function shouldUseOnlyText({
  preferences,
  options = {}
}: {
  preferences: any;
  options?: any;
}) {
  return preferences.customSettings?.onlyText === 'true' && !options?.isTextProperty;
}

/**
 * Applies scale factor to an array of values.
 * (Original: A)
 */
function applyScaleFactor(language: any, values: number[], transform: (v: number) => number = v => v, options?: any) {
  const defaultLang = v4();
  const lang = language ?? defaultLang;
  const scale = getScaleFactor(lang);
  const preferences = getCodeExtensionPreferences(lang.id);
  if (scale === 1 || scale === 0 || shouldUseOnlyText({
    preferences,
    options
  })) {
    return values.map(v => v === undefined ? undefined : transform(v));
  }
  return values.map(v => v === undefined ? undefined : transform(v / scale));
}

/**
 * Applies scale factor to a single value.
 * (Original: $$x6)
 */
export function applyScaleToValue(language: any, value: number, transform: (v: number) => number = v => v, options?: any) {
  return applyScaleFactor(language, [value], transform, options)[0];
}

/**
 * Returns a callback to apply scale factor to values.
 * (Original: $$N0)
 */
export function useScaleFactorCallback(language?: any, options?: any) {
  const defaultLang = v4();
  const lang = language ?? defaultLang;
  const scale = getScaleFactor(lang);
  const preferences = getCodeExtensionPreferences(lang.id);
  return useCallback((value: number) => scale === 1 || scale === 0 || value === undefined || shouldUseOnlyText({
    preferences,
    options
  }) ? value === undefined ? undefined : value : value * scale, [options, preferences, scale]);
}

/**
 * Applies scale factor and returns values with units.
 * (Original: $$C4)
 */
export function getScaledValuesWithUnit(language: any, values: number[], transform: (v: number) => number, options?: any) {
  const defaultLang = v4();
  const lang = language ?? defaultLang;
  const scaledValues = applyScaleFactor(lang, values, transform, options);
  const unit = getUnitForLanguage(lang, options);
  return shouldUseOnlyText({
    preferences: getCodeExtensionPreferences(lang.id),
    options
  }) ? scaledValues.map(v => `${v}${unitMapping.pixel}`) : scaledValues.map(v => `${v}${unit}`);
}

/**
 * Applies scale factor and returns a single value with unit.
 * (Original: $$w16)
 */
export function getScaledValueWithUnit(language: any, value: number, transform: (v: number) => number, options?: any) {
  const result = getScaledValuesWithUnit(language, [value], transform, options);
  if (value !== undefined) return result[0];
}

/**
 * Gets plugin info for a language.
 * (Original: $$O10)
 */
export function getPluginInfo(language: any) {
  const {
    id,
    type
  } = language;
  return findPluginOrWidgetByFileId(id, {
    searchLocalPlugins: type === 'local-plugin',
    searchPublishedPlugins: type === 'published-plugin'
  });
}

/**
 * Checks if codegen is supported for a language.
 * (Original: $$R3)
 */
export function isCodegenSupportedForLanguage(language: any) {
  const defaultLang = v4();
  const plugin = getPluginInfo(language ?? defaultLang);
  return isCodegenSupported(language ?? defaultLang, plugin);
}

/**
 * Resolves unit for a language and plugin.
 * (Original: $$L1)
 */
export function resolveLanguageUnit(language: any, plugin?: any) {
  const pluginInfo = getPluginInfo(language);
  return resolveUnit(language, pluginInfo, plugin);
}

/**
 * Gets i18n string for a unit type.
 * (Original: $$P11)
 */
export function getUnitLabel(unitType: string) {
  switch (unitType) {
    case WEB:
      return getI18nString('dev_handoff.alternative_units.rem_unit');
    case ANDROID:
    case ANDROID_XML:
      return getI18nString('dev_handoff.alternative_units.dp_unit');
    case IOS:
    case IOS_UIKIT:
      return getI18nString('dev_handoff.alternative_units.pt_unit');
    default:
      return getI18nString('dev_handoff.alternative_units.rem_unit');
  }
}

/**
 * Gets unit label for a language.
 * (Original: $$D18)
 */
export function getLanguageUnitLabel(language: any) {
  const defaultLang = v4();
  return getUnitLabelForLanguage(language ?? defaultLang);
}

/**
 * Gets unit label for a language, considering first-party.
 * (Original: $$k17)
 */
export function getUnitLabelForLanguage(language: any) {
  const unit = resolveLanguageUnit(language);
  return language.type === 'first-party' ? getUnitLabel(language.id) : unit;
}

/**
 * Gets unit for a language and options.
 * (Original: $$M14)
 */
export function getUnitForLanguage(language: any, options?: any) {
  const defaultLang = v4();
  const lang = language ?? defaultLang;
  const unit = getMeasurementUnit(lang);
  const resolvedUnit = resolveLanguageUnit(lang, options);
  return unit === MeasurementUnit.PIXEL ? unitMapping.pixel : resolvedUnit;
}

/**
 * Returns codegen preferences settings for a language and plugin.
 * (Original: $$F8)
 */
export function useCodegenPreferencesSettings({
  localCodeLanguage,
  includeActions = true,
  includeSelectSettings = true
}: {
  localCodeLanguage?: any;
  includeActions?: boolean;
  includeSelectSettings?: boolean;
} = {}) {
  const defaultLang = v4();
  const language = localCodeLanguage ?? defaultLang;
  const plugin = AC(language);
  const preferences = getCodeExtensionPreferences(language.id);
  const onChangePreferences = useUpdateCodeExtensionPreferences();
  return useMemo(() => getCodegenPreferencesSettings({
    includeActions,
    includeSelectSettings,
    codeLanguage: language,
    plugin,
    codeExtensionPreferences: preferences,
    onChangePreferences
  }), [includeActions, includeSelectSettings, language, plugin, preferences, onChangePreferences]);
}

/**
 * Returns codegen preferences settings for a language and plugin.
 * (Original: $$j5)
 */
export function getCodegenPreferencesSettings({
  includeActions = false,
  includeSelectSettings = true,
  codeLanguage,
  plugin,
  codeExtensionPreferences,
  onChangePreferences
}: {
  includeActions?: boolean;
  includeSelectSettings?: boolean;
  codeLanguage: any;
  plugin: any;
  codeExtensionPreferences: any;
  onChangePreferences: any;
}) {
  const settings = [];
  if (!plugin || codeLanguage.type === 'first-party' || getPluginUniqueId(plugin) !== codeLanguage.id) {
    return settings;
  }
  for (const pref of filterCodegenPreferences(plugin, findCodegenLanguage(plugin, codeLanguage.pluginLanguage))) {
    if (includeActions && isActionSchema(pref)) {
      settings.push({
        name: pref.propertyName,
        displayText: pref?.label || pref.propertyName,
        callback: () => PluginCallbacks.codegenPreferencesChange({
          propertyName: pref.propertyName
        }),
        recordingKey: pref.propertyName
      });
    }
    if (includeSelectSettings && isSelectSchema(pref)) {
      settings.push({
        name: pref.propertyName,
        recordingKey: pref.propertyName,
        displayText: pref?.label ?? pref.propertyName,
        children: pref.options.map((option, idx) => ({
          name: option.value,
          displayText: option.label,
          isChecked: codeExtensionPreferences?.customSettings?.[pref.propertyName] ? codeExtensionPreferences?.customSettings?.[pref.propertyName] === option.value : idx === 0,
          callback: () => onChangePreferences(codeLanguage, plugin, {
            customSettings: {
              ...codeExtensionPreferences?.customSettings,
              [pref.propertyName]: option.value
            }
          }),
          recordingKey: option.value
        }))
      });
    }
  }
  return settings;
}

/**
 * Applies code extension preferences when plugin language changes.
 * (Original: $$U9)
 */
export function useApplyCodeExtensionPreferences() {
  const language = v4();
  const plugin = QN();
  useEffect(() => {
    if (!plugin) return;
    const pluginLanguage = language.pluginLanguage;
    if (pluginLanguage) {
      applyCodeExtensionPreferences(plugin, findCodegenLanguage(plugin, pluginLanguage));
    }
  }, [language, plugin]);
}

// Exported variable names refactored to match new function names
export const $Q = useScaleFactorCallback;
export const $s = resolveLanguageUnit;
export const Bs = useUpdateCodeExtensionPreferences;
export const Em = isCodegenSupportedForLanguage;
export const Fm = getScaledValuesWithUnit;
export const Ke = getCodegenPreferencesSettings;
export const QO = applyScaleToValue;
export const RH = getMeasurementUnit;
export const SF = useCodegenPreferencesSettings;
export const YE = useApplyCodeExtensionPreferences;
export const aq = getPluginInfo;
export const b1 = getUnitLabel;
export const fb = getScaleFactor;
export const gc = getCodeExtensionPreferences;
export const ie = getUnitForLanguage;
export const lX = getCurrentCodeExtensionPreferences;
export const qM = getScaledValueWithUnit;
export const wA = getUnitLabelForLanguage;
export const wQ = getLanguageUnitLabel;
