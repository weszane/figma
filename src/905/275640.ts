import type { SelectionProperties } from '../../types/app'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { selectWithShallowEqual } from '../905/103090'
import { MIXED_MARKER } from '../905/216495'
import { yesNoTrackingEnum } from '../figma_app/198712'
import { fullscreenValue } from '../figma_app/455680'
import { debug } from '../figma_app/465776'

// Original file: /Users/allen/github/fig/src/905/275640.ts

/**
 * Hook to get selection property values for given keys.
 * Original: $$d10
 */
export function useSelectionPropertyValues(...keys: string[]) {
  return selectWithShallowEqual((state: AppState) => {
    const result: SelectionProperties = {} as SelectionProperties
    for (const key of keys) {
      result[key] = state.mirror.selectionProperties[key]
    }
    return result
  })
}

/**
 * Hook to get non-mixed selection property values for given keys, with debug checks.
 * Original: $$c4
 */
export function useNonMixedSelectionPropertyValues(...keys: string[]) {
  return selectWithShallowEqual((state: AppState) => {
    const selectionProps = state.mirror.selectionProperties
    const result: SelectionProperties = {} as SelectionProperties
    for (const key of keys) {
      debug(selectionProps[key] !== MIXED_MARKER, `Mixed value for ${key} found in useNonMixedSelectionPropertyValues. Use useSelectionPropertyValues and handle the MIXED value instead.`)
      result[key] = selectionProps[key]
    }
    return result
  })
}

/**
 * Hook to get selected style or selection property values for given keys.
 * Original: $$u7
 */
export function useSelectedStyleOrSelectionPropertyValues(...keys: string[]) {
  return selectWithShallowEqual((state: AppState) => {
    const hasSelectedStyle = state.mirror.selectedStyleProperties?.guid
    const result: SelectionProperties = {} as SelectionProperties
    for (const key of keys) {
      result[key] = hasSelectedStyle ? state.mirror.selectedStyleProperties![key] : state.mirror.selectionProperties[key]
    }
    return result
  })
}

/**
 * Hook to get non-mixed selected style or selection property values for given keys, with debug checks.
 * Original: $$p1
 */
export function useNonMixedSelectedStyleOrSelectionPropertyValues(...keys: string[]) {
  return selectWithShallowEqual((state: AppState) => {
    const hasSelectedStyle = state.mirror.selectedStyleProperties?.guid
    const result: SelectionProperties = {} as SelectionProperties
    for (const key of keys) {
      const value = hasSelectedStyle ? state.mirror.selectedStyleProperties![key] : state.mirror.selectionProperties[key]
      debug(value !== MIXED_MARKER, `Mixed value for ${key} found in useNonMixedSelectionPropertyValues. Use useSelectionPropertyValues and handle the MIXED value instead.`)
      result[key] = value
    }
    return result
  })
}
type SelectionPropertiesKey = keyof SelectionProperties
/**
 * Hook to get a single selection property value.
 * Original: $$m5
 */
export function useSelectionPropertyValue<K extends SelectionPropertiesKey>(key: K) {
  return selectWithShallowEqual<AppState, SelectionProperties[K]>(state => state.mirror.selectionProperties[key])
}

/**
 * Hook to get a selected style property value if available.
 * Original: $$h9
 */
export function useSelectedStylePropertyValue(key: string) {
  return selectWithShallowEqual((state: AppState) => {
    if (state.mirror.selectedStyleProperties?.guid) {
      return state.mirror.selectedStyleProperties[key]
    }
    return undefined
  })
}

/**
 * Hook to check if there is a selected style.
 * Original: $$g2
 */
export function useHasSelectedStyle() {
  return selectWithShallowEqual((state: AppState) => !!state.mirror.selectedStyleProperties?.guid)
}

/**
 * Hook to get selected style or selection property value.
 * Original: $$f8
 */
export function useSelectedStyleOrSelectionPropertyValue(key: string) {
  return selectWithShallowEqual((state: AppState) => {
    return state.mirror.selectedStyleProperties?.guid ? state.mirror.selectedStyleProperties[key] : state.mirror.selectionProperties[key]
  })
}

/**
 * Hook to get a non-mixed selection property value, with debug check.
 * Original: $$_3
 */
export function useNonMixedSelectionPropertyValue(key: string) {
  return selectWithShallowEqual((state: AppState) => {
    const value = state.mirror.selectionProperties[key]
    debug(value !== MIXED_MARKER, `Mixed value for ${key} found in useNonMixedSelectionPropertyValue. Use useSelectionPropertyValue and handle the MIXED value instead.`)
    return value
  })
}

/**
 * Hook to get a callback for updating a selection property.
 * Original: $$A0
 */
export function useUpdateSelectionProperty<K extends SelectionPropertiesKey>(key: K) {
  return useCallback((value: any, shouldCommit: typeof yesNoTrackingEnum.YES | typeof yesNoTrackingEnum.NO = yesNoTrackingEnum.YES) => {
    fullscreenValue.updateSelectionProperties({ [key]: value }, {
      shouldCommit,
    })
  }, [key])
}

/**
 * Hook to get both the value and updater for a selection property.
 * Original: $$y6
 */
export function useSelectionProperty<K extends SelectionPropertiesKey>(key: K) {
  return [useSelectionPropertyValue(key), useUpdateSelectionProperty(key)] as const
}

// Update exports to use refactored names for consistency
export const A5 = useUpdateSelectionProperty
export const DQ = useNonMixedSelectedStyleOrSelectionPropertyValues
export const ER = useHasSelectedStyle
export const Gt = useNonMixedSelectionPropertyValue
export const fC = useNonMixedSelectionPropertyValues
export const kl = useSelectionPropertyValue
export const lJ = useSelectionProperty
export const pw = useSelectedStyleOrSelectionPropertyValues
export const tN = useSelectedStyleOrSelectionPropertyValue
export const wR = useSelectedStylePropertyValue
export const zj = useSelectionPropertyValues
