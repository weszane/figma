import { useCallback, useEffect, useMemo } from "react"
import { permissionScopeHandler } from "../905/189185"
import { getI18nString } from "../905/303541"
import { executeInIgnoreUndoRedoScope } from "../905/955316"
import { useStrictDeepEqualSceneValue } from "../figma_app/167249"
import { ColorPalette, HandoffBindingsCpp, IssueCategory, SessionOrigin } from "../figma_app/763686"
// Refactored code: Improved readability, added types, renamed variables, and simplified logic

// Enum for theme modes

/**
 * Gets the localized string for a given issue category
 * @param category - The issue category
 * @returns Localized string key
 */
export function getCategoryPresetLabel(category: IssueCategory): string {
  switch (category) {
    case IssueCategory.ACCESSIBILITY:
      return getI18nString("dev_handoff.annotations.category_preset.accessibility")
    case IssueCategory.BEHAVIOR:
      return getI18nString("dev_handoff.annotations.category_preset.behavior")
    case IssueCategory.CONTENT:
      return getI18nString("dev_handoff.annotations.category_preset.content")
    case IssueCategory.DEVELOPMENT:
      return getI18nString("dev_handoff.annotations.category_preset.development")
    case IssueCategory.INTERACTION:
      return getI18nString("dev_handoff.annotations.category_preset.interaction")
    default:
      return "" // Handle unexpected categories gracefully
  }
}

/**
 * Maps an issue category to a color palette
 * @param category - The issue category
 * @returns Corresponding color palette
 */
export function getCategoryPresetColor(category: IssueCategory): ColorPalette {
  switch (category) {
    case IssueCategory.ACCESSIBILITY:
      return ColorPalette.PINK
    case IssueCategory.CONTENT:
      return ColorPalette.ORANGE
    case IssueCategory.BEHAVIOR:
      return ColorPalette.BLUE
    case IssueCategory.DEVELOPMENT:
      return ColorPalette.GREEN
    case IssueCategory.INTERACTION:
      return ColorPalette.BLUE
    default:
      return ColorPalette.BLUE // Default fallback color
  }
}

/**
 * Color configuration mapping for annotation categories
 */
export const CATEGORY_COLOR_CONFIG: Record<ColorPalette, { color: string, label: () => string }> = {
  [ColorPalette.GREEN]: {
    color: "rgba(61, 160, 89, 1)",
    label: () => getI18nString("dev_handoff.annotations.categories_edit_window.category_color.green"),
  },
  [ColorPalette.PINK]: {
    color: "rgba(216, 52, 158, 1)",
    label: () => getI18nString("dev_handoff.annotations.categories_edit_window.category_color.pink"),
  },
  [ColorPalette.RED]: {
    color: "rgba(227, 76, 44, 1)",
    label: () => getI18nString("dev_handoff.annotations.categories_edit_window.category_color.red"),
  },
  [ColorPalette.BLUE]: {
    color: "rgba(27, 113, 217, 1)",
    label: () => getI18nString("dev_handoff.annotations.categories_edit_window.category_color.blue"),
  },
  [ColorPalette.YELLOW]: {
    color: "rgba(251, 198, 69, 1)",
    label: () => getI18nString("dev_handoff.annotations.categories_edit_window.category_color.yellow"),
  },
  [ColorPalette.ORANGE]: {
    color: "rgba(255, 165, 0, 1)",
    label: () => getI18nString("dev_handoff.annotations.categories_edit_window.category_color.orange"),
  },
  [ColorPalette.TEAL]: {
    color: "rgba(0, 128, 128, 1)",
    label: () => getI18nString("dev_handoff.annotations.categories_edit_window.category_color.teal"),
  },
  [ColorPalette.VIOLET]: {
    color: "rgba(148, 0, 211, 1)",
    label: () => getI18nString("dev_handoff.annotations.categories_edit_window.category_color.violet"),
  },
}

/**
 * Custom hook to manage annotation categories
 * @param options - Configuration options
 * @returns Annotation categories array
 */
export function useAnnotationCategories(options: { initializeIfNull?: boolean } = {}) {
  const { initializeIfNull = false } = options

  const isReadOnly = useMemo(() =>
    HandoffBindingsCpp.isReadOnly(SessionOrigin.ANNOTATIONS), [])

  const emptyCategories = useMemo(() => [], [])
  const categories = useStrictDeepEqualSceneValue(
    state => state.getRoot().annotationCategories,
  )

  useEffect(() => {
    if (!isReadOnly && categories === null && initializeIfNull) {
      executeInIgnoreUndoRedoScope(() => {
        permissionScopeHandler.system("initialize-annotation-categories", () => {
          HandoffBindingsCpp.initializeAnnotationCategories()
        })
      })
    }
  }, [categories, isReadOnly, initializeIfNull])

  return categories ?? emptyCategories
}

/**
 * Hook to update custom annotation categories
 * @returns Update function for annotation categories
 */
export function useUpdateAnnotationCategories() {
  return useCallback((newCategories: any[]) => {
    executeInIgnoreUndoRedoScope(() => {
      permissionScopeHandler.user("update-annotation-categories", () => {
        HandoffBindingsCpp.setCustomAnnotationCategories(newCategories)
      })
    })
  }, [])
}

/**
 * Gets the color configuration for a preset category
 * @param category - The issue category
 * @returns Color configuration object
 */
export function getPresetCategoryColorConfig(category: IssueCategory) {
  return CATEGORY_COLOR_CONFIG[getCategoryPresetColor(category)]
}

/**
 * Gets the color palette for an annotation category
 * @param category - The annotation category
 * @returns Color palette or null
 */
export function getAnnotationCategoryColor(category: any): ColorPalette | null {
  if (category.preset !== IssueCategory.NONE) {
    return getCategoryPresetColor(category.preset)
  }
  return category.custom?.color ?? null
}

/**
 * Gets the color value for an annotation category
 * @param category - The annotation category
 * @returns Color string or null
 */
export function getAnnotationCategoryColorValue(category: any): string | null {
  if (category.preset !== IssueCategory.NONE) {
    return getPresetCategoryColorConfig(category.preset).color
  }

  if (category.custom?.color != null) {
    return CATEGORY_COLOR_CONFIG[category.custom.color].color
  }

  return null
}

/**
 * Gets the label for an annotation category
 * @param category - The annotation category
 * @returns Label string
 */
export function getAnnotationCategoryLabel(category: any): string {
  if (category.preset !== IssueCategory.NONE) {
    return getCategoryPresetLabel(category.preset)
  }
  return category.custom?.label ?? ""
}

/**
 * Checks if an annotation category has a light color
 * @param category - The annotation category
 * @returns True if the category uses a light color
 */
export function isAnnotationCategoryLightColor(category: any): boolean {
  // Determine the color palette to check
  const colorPalette = category.preset === IssueCategory.NONE
    ? category.custom?.color
    : getCategoryPresetColor(category.preset)

  // Check if color is defined and is a light color
  if (colorPalette == null) {
    return false
  }

  // Function to determine if a color palette is light
  const isLightColor = (palette: ColorPalette): number => {
    switch (palette) {
      case ColorPalette.ORANGE:
      case ColorPalette.YELLOW:
        return 0 // Light colors
      default:
        return 1 // Dark colors
    }
  }

  return isLightColor(colorPalette) === 0
}

// Export aliases for backward compatibility
export const AP = getCategoryPresetColor
export const FQ = getAnnotationCategoryColorValue
export const Lw = getPresetCategoryColorConfig
export const XR = useAnnotationCategories
export const cD = isAnnotationCategoryLightColor
export const h9 = getCategoryPresetLabel
export const l6 = getAnnotationCategoryColor
export const mi = useUpdateAnnotationCategories
export const uA = getAnnotationCategoryLabel
export const yu = CATEGORY_COLOR_CONFIG
