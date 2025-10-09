import type { DevHandoffCodeLanguage } from '../../types/app'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { D } from '../905/273829'
import { getI18nString } from '../905/303541'
import { ANDROID, ANDROID_XML, CSSBUILDER, FIGMA_PROPERTIES, IOS, IOS_UIKIT, SupportedPlatforms, WEB } from '../905/359509'
import { findCodegenLanguage, getCodegenLanguages } from '../905/661977'
import { useAtomWithSubscription } from '../figma_app/27355'
import { isDevModePlugin } from '../figma_app/300692'
import { findPluginOrWidgetByFileId, getAllPluginVersions, getLocalPlugins, usePluginManifestById } from '../figma_app/844435'

// Origin: /Users/allen/sigma-main/src/figma_app/655139.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments, improved readability, and ensured type safety.

// Assumed external dependencies:
// - getLocalPlugins, getAllPluginVersions, usePluginManifestById, findPluginOrWidgetByFileId, isDevModePlugin, useAtomWithSubscription, useSelector, useMemo, getI18nString, getCodegenLanguages, findCodegenLanguage
// - SupportedPlatforms, WEB, CSSBUILDER, IOS, IOS_UIKIT, ANDROID, ANDROID_XML, FIGMA_PROPERTIES

// Type definitions for codegen language selection
export type CodegenLanguageType
  = | 'first-party'
  | 'local-plugin'
  | 'published-plugin'

export interface FirstPartyLanguage {
  type: 'first-party'
  id: string
}

export interface PluginLanguage {
  type: 'local-plugin' | 'published-plugin'
  id: string
  pluginLanguage?: string
}

export type CodegenLanguage = FirstPartyLanguage | PluginLanguage

export interface PluginInfo {
  id: string
  name: string
  codeSyntax?: string[]
  // Other plugin properties as needed
}

export interface PluginManifest {
  plugin_id: string
  name: string
  codeSyntax?: string[]
  // Other manifest properties as needed
}

export interface AppModel {
  devHandoffCodeLanguage: string
  // Other app model properties as needed
}

export interface MirrorState {
  appModel: AppModel
  // Other mirror state properties as needed
}

export interface SelectedViewState {
  view: string
  // Other selected view properties as needed
}

// Utility to normalize language input and ensure it's valid
export function normalizeCodegenLanguage(input: DevHandoffCodeLanguage): DevHandoffCodeLanguage {
  // If input is a string, treat as first-party language
  const language
    = typeof input === 'string'
      ? { type: 'first-party', id: input }
      : input

  // Validate language: must have id, and either not first-party or supported
  if (
    language
    && language.id
    && (language.type !== 'first-party' || SupportedPlatforms[language.id])
  ) {
    return language
  }

  // Default to WEB if invalid
  return { type: 'first-party', id: WEB }
}

// Returns the dev mode plugin manifest for the selected codegen language
export function getDevModePluginManifest(): PluginManifest | null {
  return getDevModePluginFromLanguage(getSelectedCodegenLanguage())
}

// Returns a formatter for codegen language display names
export function getCodegenLanguageFormatter(language?: any) {
  const localPlugins = getLocalPlugins()
  const publishedPlugins = getAllPluginVersions()

  // Memoize formatter to avoid unnecessary recalculations
  return useMemo(
    () => ({
      format(lang: any | undefined): string {
        // Handle first-party languages
        if (lang?.type === 'first-party') {
          switch (lang.id) {
            case CSSBUILDER:
              return 'CssBuilder'
            case WEB:
              return getI18nString('dev_handoff.code.lang_css')
            case IOS:
              return getI18nString('dev_handoff.code.lang_swiftui')
            case IOS_UIKIT:
              return getI18nString('dev_handoff.code.lang_uikit')
            case ANDROID:
              return getI18nString('dev_handoff.code.lang_compose')
            case ANDROID_XML:
              return getI18nString('dev_handoff.code.lang_android_xml')
            case FIGMA_PROPERTIES:
              return getI18nString('dev_handoff.code.lang_figma')
            default:
              break
          }
        }

        // Handle plugin languages
        if (language) {
          let pluginData: any | null = null
          if (lang?.type === 'local-plugin') {
            pluginData = localPlugins[lang.id]
          }
          else if (
            lang?.type === 'published-plugin'
            && language.plugin_id === lang.id
          ) {
            pluginData = publishedPlugins[lang.id] ?? language
          }

          if (pluginData) {
            const codegenLanguages = getCodegenLanguages(pluginData)
            if (codegenLanguages.length === 1) {
              return pluginData.name
            }
            // Find language label or fallback to plugin name
            return (
              findCodegenLanguage(pluginData, lang.pluginLanguage ?? '').label
              ?? pluginData.name
            )
          }
        }

        // Default: empty string
        return ''
      },
    }),
    [publishedPlugins, localPlugins, language],
  )
}

// Returns the dev mode plugin manifest for a given codegen language
export function getDevModePluginFromLanguage(language: DevHandoffCodeLanguage | null) {
  // Find plugin/widget by file id if not first-party
  const pluginOrWidget = findPluginOrWidgetByFileId(
    language?.type !== 'first-party' ? language?.id ?? '' : '',
    {
      searchLocalPlugins: true,
      searchPublishedPlugins: true,
    },
  )

  // Get plugin manifest by id if published-plugin
  const { plugin } = usePluginManifestById(
    language?.type === 'published-plugin' ? language?.id ?? '0' : '0',
    language?.type === 'published-plugin',
  )

  if (!language)
    return null

  const manifest = pluginOrWidget || plugin
  // Only return if it's a dev mode plugin
  return manifest && isDevModePlugin(manifest) ? manifest : null
}

// Returns the formatter for the currently selected codegen language
export function getCurrentCodegenLanguageFormatter() {
  return getCodegenLanguageFormatter(getSelectedCodegenLanguage())
}

// Returns the currently selected codegen language
export function getSelectedCodegenLanguage() {
  return normalizeCodegenLanguage(getEffectiveCodegenLanguage())
}

// Returns the effective codegen language, considering app state and view
export function getEffectiveCodegenLanguage() {
  const atomValue = useAtomWithSubscription<DevHandoffCodeLanguage>(D)
  const devHandoffCodeLanguage = useSelector(
    (state: AppState) => state.mirror.appModel.devHandoffCodeLanguage,
  )
  const selectedView = useSelector(
    (state: AppState) => state.selectedView,
  )

  // If in org admin settings view, use atom value if available
  let effectiveLanguage = devHandoffCodeLanguage
  if (selectedView.view === 'orgAdminSettings' && atomValue) {
    effectiveLanguage = atomValue
  }

  // Memoize normalization
  return useMemo(() => normalizeCodegenLanguage(effectiveLanguage), [effectiveLanguage])
}

// Returns the code syntax string for a plugin and language id
export function getPluginCodeSyntax(
  plugin: PluginInfo | PluginManifest | null,
  languageId: string,
): string | null {
  if (!plugin || !plugin.codeSyntax)
    return null

  // Map language id to codeSyntax index
  switch (languageId) {
    case WEB:
    case CSSBUILDER:
      return plugin.codeSyntax[0] ?? null
    case ANDROID:
    case ANDROID_XML:
      return plugin.codeSyntax[1] ?? null
    case IOS:
    case IOS_UIKIT:
      return plugin.codeSyntax[2] ?? null
    default:
      return null
  }
}

// Export statements (original code names preserved, right-hand names updated)
export const AC = getDevModePluginFromLanguage
export const P0 = getDevModePluginManifest
export const Pt = getCodegenLanguageFormatter
export const QN = getSelectedCodegenLanguage
export const XP = normalizeCodegenLanguage
export const v4 = getEffectiveCodegenLanguage
export const xv = getPluginCodeSyntax
