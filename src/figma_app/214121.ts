import { converter, modeHsl, modeHsv, modeP3, modeRgb, useMode } from "culori"
import { useEffect, useRef } from "react"
import { captureMessage, reportError } from "../905/11"
import { ServiceCategories } from "../905/165054"
import { useTheme } from "../905/289770"
import { useIsFullscreenReady } from "../figma_app/115586"
import { fullscreenValue } from "../figma_app/455680"
import { ColorStateTsApi } from "../figma_app/763686"
import { camelToKebab } from "../figma_app/930338"
import { getSelectedEditorType } from "../figma_app/976749"
// import { A as hslDefinition } from "../vendor/257034"
// import { A as rgbDefinition } from "../vendor/382731"
// import { A as hsvDefinition } from "../vendor/782559"
// import { A as p3Definition } from "../vendor/862057"
// import { A as converter } from "../vendor/947527"

let isCssLoaded: boolean

/**
 * Custom hook to manage fullscreen color token synchronization
 *
 * @remarks
 * This hook handles updating color tokens when the app enters fullscreen mode
 * and when theme changes occur. It ensures colors are properly synced with
 * CSS custom properties.
 */
export function useFullscreenColorSync(): void {
  const isFullscreenReady = useIsFullscreenReady()
  const { addThemeListener } = useTheme()
  const editorType = getSelectedEditorType()
  const editorTypeRef = useRef(editorType)

  useEffect(() => {
    editorTypeRef.current = editorType
  }, [editorType])

  useEffect(() => {
    if (isFullscreenReady && ColorStateTsApi) {
      ColorTokenManager.updateColorsInFullscreen(ColorStateTsApi.colorTokensState())
    }
  }, [isFullscreenReady, editorType])

  useEffect(() => {
    return addThemeListener(() => {
      if (fullscreenValue.isReady() && ColorStateTsApi) {
        ColorTokenManager.updateColorsInFullscreen(ColorStateTsApi.colorTokensState())
      }
    })
  }, [addThemeListener])
}

/**
 * Manages color token operations and fullscreen color updates
 */
export const ColorTokenManager = {
  /**
   * Gets the CSS custom property value for a given token name
   *
   * @param computedStyle - The computed styles object
   * @param tokenName - The name of the color token
   * @returns The CSS custom property value or undefined
   */
  getTokenValue(computedStyle: CSSStyleDeclaration, tokenName: string): string | undefined {
    let cssVariableName: string

    if (tokenName.startsWith("fs")) {
      cssVariableName = `color-${tokenName}`
    }
    else {
      const formattedName = `color${tokenName.charAt(0).toUpperCase()}${tokenName.slice(1)}`
      cssVariableName = camelToKebab(formattedName)
        .replace("desktop-backgrounded", "desktopBackgrounded")
        .replace("desktop-foreground", "desktopForeground")
        .replace("desktop-fullscreen", "desktopFullscreen")
    }

    return computedStyle.getPropertyValue(`--${cssVariableName}`)?.trim() || undefined
  },

  /**
   * Updates color tokens in fullscreen mode by reading values from CSS
   *
   * @param colorTokensState - The current color tokens state
   */
  updateColorsInFullscreen(colorTokensState: any): void {
    const updatedTokens: Record<string, number> = {}
    const computedStyle = getComputedStyle(document.body)
    const tokensCopy = colorTokensState.currentTokens.getCopy()

    // Check if CSS is loaded (lazy initialization)
    if (isCssLoaded === undefined) {
      isCssLoaded = (() => {
        let sheetRules: CSSRuleList | undefined
        const cssLink = document.head.querySelector('link[href*="figma_app"][href*="css"]')

        try {
          if (cssLink instanceof HTMLLinkElement) {
            sheetRules = cssLink.sheet?.cssRules
          }
        }
        catch {
          // Ignore errors when accessing CSS rules
        }

        return !!(sheetRules && sheetRules.length > 0)
      })()
    }

    for (const tokenName in tokensCopy) {
      const tokenValue = this.getTokenValue(computedStyle, tokenName)

      const tokenAsArgb = (function (cssColorValue: string | undefined): number | undefined {
        if (!cssColorValue) {
          return undefined
        }

        const rgbObject = rgbConverter(cssColorValue)
        if (!rgbObject) {
          return undefined
        }

        const { r, g, b, alpha } = rgbObject
        return (
          ((alpha === undefined ? 255 : Math.round(255 * alpha)) << 24
            | Math.round(255 * b) << 16
            | Math.round(255 * g) << 8
            | Math.round(255 * r))
        ) >>> 0
      })(tokenValue)

      if (tokenAsArgb !== undefined) {
        updatedTokens[tokenName] = tokenAsArgb
      }
      else if (isCssLoaded) {
        reportError(
          ServiceCategories.FPL,
          new Error(`Failed to find valid value for color token ${tokenName}, found ${tokenValue}`),
        )
      }
      else {
        captureMessage("Cannot fetch color tokens from CSS, CSS was not loaded")
        colorTokensState.hasRunTokenSync.set(true)
        return
      }
    }

    colorTokensState.currentTokens.set(updatedTokens)
    colorTokensState.hasRunTokenSync.set(true)
  },
}

// Initialize color modes
useMode(modeRgb)
useMode(modeP3)
useMode(modeHsl)
useMode(modeHsv)

// Create RGB converter
const rgbConverter = converter("rgb")

// Export aliases
export const _ = useFullscreenColorSync
export const ky = ColorTokenManager
