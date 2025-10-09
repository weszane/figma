import { useMemo } from "react"
import { useSelector } from "react-redux"
import { normalizeValue } from "../905/216495"
import { getFeatureFlags } from "../905/601108"

import { isValidSessionLocalID, parseSessionLocalID, sessionLocalIDToString } from "../905/871411"
import { StyleIdHandler } from "../figma_app/243058"
import { useCurrentFileKey } from "../figma_app/516028"
import { getStyleInfo } from "../figma_app/633080"
import { useSceneGraphSelector } from "../figma_app/722362"
import { StylesBindings } from "../figma_app/763686"
import { resolveDestinationStyleKey } from "../figma_app/882253"
import { getStylesFromLoadedLibrary, useLibraryDataSubscriptions } from "../figma_app/936646"
// Origin: /Users/allen/sigma-main/src/figma_app/836943.ts
// Refactored: Renamed variables/functions, added TypeScript types/interfaces, simplified logic, added comments for clarity and potential issues.

// Assumed external dependencies (from imports):
// - normalizeValue, getFeatureFlags, isValidSessionLocalID, parseSessionLocalID, sessionLocalIDToString, StyleIdHandler, useCurrentFileKey, getStyleInfo, useSceneGraphSelector, StylesBindings, resolveDestinationStyleKey, getStylesFromLoadedLibrary, useLibraryDataSubscriptions

// --- Type Definitions ---

// Represents a style object in the local library
interface LocalStyle {
  key: string
  node_id?: string
  guid?: string
  is_soft_deleted?: boolean
}




// Represents the style picker shown state
interface StylePickerShown {
  isShown: boolean
  id: string
}

// Represents the Redux state shape for style picker
interface StylePickerState {
  stylePickerShown: StylePickerShown
  inheritStyleKeyField: string
}

// Represents a style node in the scene graph
interface StyleNode {
  guid: string
  isLocalStyle?: boolean
  isSoftDeleted?: boolean
  styleVersionHash?: string
}

// --- Refactored Functions ---

/**
 * Generates a unique style picker ID for a given key.
 */
export function getStylePickerId(key: string): string {
  return `styles-picker-${key}`
}

/**
 * Returns the style picker shown state if it matches the expected ID.
 */
export function getStylePickerShown(state: StylePickerState): StylePickerShown | null {
  return state.stylePickerShown.isShown && state.stylePickerShown.id === getStylePickerId(state.inheritStyleKeyField)
    ? state.stylePickerShown
    : null
}

/**
 * Uses Redux selector to get the current style picker shown state for a given field.
 */
export function useStylePickerShown(inheritStyleKeyField: string): StylePickerShown | null {
  return getStylePickerShown({
    inheritStyleKeyField,
    stylePickerShown: useSelector((state: any) => state.stylePickerShown),
  })
}

/**
 * Checks if the provided object has a valid session local ID.
 */
export function hasValidSessionLocalID(obj: { guid?: any }): boolean {
  return !!obj && isValidSessionLocalID(obj.guid as any)
}

/**
 * Checks if the normalized value is valid and not 'INVALID'.
 */
export function isValidNormalizedValue(value: any): boolean {
  const normalized = normalizeValue(value)
  return !!normalized && normalized !== 'INVALID'
}

/**
 * Finds a style in the library by inheritStyleKey or resolves from destination if not found.
 */
export function findStyleInLibrary({
  library,
  inheritStyleKey,
  inheritStyleID,
}: {
  library: AppState["library"]
  inheritStyleKey: any
  inheritStyleID: any
}): LocalStyle | null {
  if (!isValidNormalizedValue(inheritStyleKey))
    return null
  const normalizedKey = normalizeValue(inheritStyleKey)
  if (!normalizedKey)
    return null

  // Find in local styles
  const foundStyle = Object.values(library.local.styles).find(style => style.key === normalizedKey)
  if (foundStyle && !foundStyle.is_soft_deleted)
    return foundStyle

  // Try resolving from destination style key
  const resolved = resolveDestinationStyleKey({ library }, normalizedKey, normalizeValue(inheritStyleID))
  return resolved?.status === "loaded" ? resolved.data ?? null : null
}

/**
 * Main hook to get style info, handling zombie style fixes and library lookups.
 */
export function useStyleInfo(
  inheritStyleKey: any,
  inheritStyleID: any,
  styleType: string,
): LocalStyle | null {
  const library = useSelector((state: any) => state.library)
  const sceneGraph = useSceneGraphSelector()
  const librarySubscriptions = useLibraryDataSubscriptions()
  const currentFileKey = useCurrentFileKey()

  return useMemo(() => {
    if (!inheritStyleKey)
      return null

    // Feature flag for zombie style fixes
    if (getFeatureFlags().ds_zombie_styles_fixes) {
      // Handles zombie style fixes logic
      const normalizedKey = normalizeValue(inheritStyleKey)
      const normalizedID = normalizeValue(inheritStyleID)
      if (!normalizedID || !normalizedKey)
        return null

      const sessionID = sessionLocalIDToString(normalizedID.guid)
      const localStyle = Object.values<ObjectOf>(library.local.styles).find(style => style.node_id === sessionID)
      if (localStyle)
        return localStyle.is_soft_deleted ? null : localStyle

      const styleIdHandler = StyleIdHandler.fromKiwi(normalizedID)
      const styleNode: StyleNode | null = styleIdHandler ? sceneGraph.getStyleNode(styleIdHandler) : null
      if (!styleNode || (styleNode.isLocalStyle && styleNode.isSoftDeleted))
        return null

      const resolved = resolveDestinationStyleKey({ library }, normalizedKey, normalizedID)
      if (resolved?.data?.content_hash === styleNode.styleVersionHash)
        return resolved.data ?? null

      const styleInfo = getStyleInfo(styleNode)
      const thumbnail = library.local.thumbnails[styleNode.guid] || null
      return styleInfo
        ? {
            ...styleInfo,
            meta: {
              style_thumbnail: thumbnail?.css,
            },
          }
        : null
    }

    // Standard lookup in local library
    const foundStyle = findStyleInLibrary({
      library,
      inheritStyleKey,
      inheritStyleID,
    })
    if (foundStyle)
      return foundStyle

    // Search in loaded libraries (excluding current file)
    for (const lib of Object.values(librarySubscriptions)) {
      if (lib?.status === "loaded" && lib.data.fileKey !== currentFileKey) {
        for (const style of getStylesFromLoadedLibrary(lib, styleType)) {
          if (style.key === inheritStyleKey)
            return style
        }
      }
    }
    return null
  }, [inheritStyleID, inheritStyleKey, librarySubscriptions, library, currentFileKey, sceneGraph, styleType])
}

/**
 * Picks relevant fields from the state for style picker UI.
 */
export function getStylePickerUIState(state: any): any {
  return {
    dropdownShown: state.dropdownShown,
    openFile: state.openFile,
    library: state.library,
    modalShown: state.modalShown,
    pickerShown: state.pickerShown,
    sceneGraphSelection: state.sceneGraphSelection,
    stylePickerShown: state.stylePickerShown,
    hasMissingFont: state.hasMissingFont,
    hasMixedProperties: state.hasMixedProperties || false,
    inheritStyleKey: state.inheritStyleKey,
    inheritStyleKeyField: state.inheritStyleKeyField,
    inheritStyleID: state.inheritStyleID,
    stylePickerListLayout: state.stylePickerListLayout,
    styleType: state.styleType,
    onToggleListLayout: state.onToggleListLayout,
    selectedStyleGuid: state.selectedStyleGuid,
    dispatch: state.dispatch,
  }
}

/**
 * Gets a valid style node ID for a style, checking both normal and soft-deleted cases.
 */
export function getValidStyleNodeId(style: { key: string, version: any }): string | undefined {
  if (!style)
    return undefined
  const tryGetId = (id: string) =>
    isValidSessionLocalID(parseSessionLocalID(id)) ? id : undefined
  return (
    tryGetId(StylesBindings.getStyleNodeId(style.key, style.version))
    ?? tryGetId(StylesBindings.getSoftDeletedStyleNodeId(style.key, style.version))
  )
}

// --- Export Aliases (keep original names for compatibility) ---

export const A8 = isValidNormalizedValue
export const OS = getStylePickerId
export const WH = useStyleInfo
export const _S = useStylePickerShown
export const bi = findStyleInLibrary
export const dd = hasValidSessionLocalID
export const f$ = getValidStyleNodeId
export const yT = getStylePickerUIState
export const zb = getStylePickerShown
