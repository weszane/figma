import { ContentLoadingState, FontManualLoader, HasPlugin } from '../figma_app/13528'
import { Fonts } from '../figma_app/175377'

/**
 * Font callback registry by family and style.
 * (original: a)
 */
const fontCallbackRegistry: Map<string, Map<string, Array<(state: ContentLoadingState) => void>>> = new Map()

/**
 * Font loading state registry by family and style.
 * (original: s)
 */
const fontLoadingStateRegistry: Map<string, Map<string, ContentLoadingState>> = new Map()

/**
 * Resolves renamed font if available.
 * (original: o)
 * @param font Font family and style
 * @returns Resolved font family and style
 */
function resolveFontName({
  family,
  style,
}: {
  family: string
  style: string
}): { family: string, style: string } {
  const renamed = Fonts?.getRenamedFontOrNull({ family, style }) ?? null
  return {
    family: renamed?.family ?? family,
    style: renamed?.style ?? style,
  }
}

/**
 * Registers a callback for font loading state changes.
 * (original: l)
 * @param family Font family
 * @param style Font style
 * @param callback Callback function
 */
function registerFontCallback(
  family: string,
  style: string,
  callback: (state: ContentLoadingState) => void,
): void {
  const { family: resolvedFamily, style: resolvedStyle } = resolveFontName({ family, style })
  let styleMap = fontCallbackRegistry.get(resolvedFamily)
  if (!styleMap) {
    styleMap = new Map()
    fontCallbackRegistry.set(resolvedFamily, styleMap)
  }
  let callbacks = styleMap.get(resolvedStyle)
  if (!callbacks) {
    callbacks = []
    styleMap.set(resolvedStyle, callbacks)
  }
  callbacks.push(callback)
}

/**
 * Unregisters a callback for font loading state changes.
 * (original: d)
 * @param family Font family
 * @param style Font style
 * @param callback Callback function
 */
function unregisterFontCallback(
  family: string,
  style: string,
  callback: (state: ContentLoadingState) => void,
): void {
  const { family: resolvedFamily, style: resolvedStyle } = resolveFontName({ family, style })
  const styleMap = fontCallbackRegistry.get(resolvedFamily)
  if (styleMap) {
    const callbacks = styleMap.get(resolvedStyle)
    if (callbacks) {
      const idx = callbacks.indexOf(callback)
      if (idx !== -1)
        callbacks.splice(idx, 1)
    }
  }
}

/**
 * Notifies registered callbacks of font loading state changes and updates state registry.
 * (original: $$c4)
 * @param family Font family
 * @param style Font style
 * @param state Loading state
 */
export function notifyFontLoadingState(
  family: string,
  style: string,
  state: ContentLoadingState,
): void {
  const styleMap = fontCallbackRegistry.get(family)
  if (styleMap) {
    const callbacks = styleMap.get(style)
    if (callbacks) {
      for (const cb of callbacks.slice()) cb(state)
    }
  }
  let stateMap = fontLoadingStateRegistry.get(family)
  if (!stateMap) {
    stateMap = new Map()
    fontLoadingStateRegistry.set(family, stateMap)
  }
  if (state === ContentLoadingState.LOADING) {
    stateMap.set(style, ContentLoadingState.LOADING)
  }
  else {
    stateMap.delete(style)
  }
}

/**
 * Loads a font and resolves when loaded, rejects on failure.
 * (original: $$u3)
 * @param family Font family
 * @param style Font style
 * @returns Promise<void>
 */
export function waitForFontLoaded(family: string, style: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (Fonts && Fonts.fontIsLoaded(family, style)) {
      resolve()
      return
    }
    const callback = (state: ContentLoadingState) => {
      if (state === ContentLoadingState.LOADED) {
        unregisterFontCallback(family, style, callback)
        resolve()
      }
      else if (state === ContentLoadingState.FAILED) {
        unregisterFontCallback(family, style, callback)
        reject(new Error(`Failed to load font: ${family} ${style}`))
      }
    }
    registerFontCallback(family, style, callback)
  })
}

/**
 * Loads a font using FontManualLoader and resolves when loaded, rejects on failure.
 * (original: p)
 * @param pluginType Plugin type
 * @param font Font family and style
 * @returns Promise<void>
 */
function loadFontWithManualLoader(
  pluginType: HasPlugin,
  font: { family: string, style: string },
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (FontManualLoader === undefined) {
      reject(new Error('FontManualLoader is not initialized'))
      return
    }
    const state = FontManualLoader.loadFont(pluginType, font.family, font.style)
    if (state === ContentLoadingState.LOADED) {
      resolve()
      return
    }
    if (state === ContentLoadingState.LOADING) {
      const callback = (s: ContentLoadingState) => {
        if (s === ContentLoadingState.LOADED) {
          unregisterFontCallback(font.family, font.style, callback)
          resolve()
        }
        else if (s === ContentLoadingState.FAILED) {
          unregisterFontCallback(font.family, font.style, callback)
          reject(new Error(`Failed to load font: ${font.family} ${font.style}`))
        }
      }
      registerFontCallback(font.family, font.style, callback)
      return
    }
    reject(new Error(`Failed to load font: ${font.family} ${font.style}`))
  })
}

/**
 * Loads a font for plugin context.
 * (original: $$m5)
 * @param font Font family and style
 */
export async function loadPluginFont(font: { family: string, style: string }): Promise<void> {
  await loadFontWithManualLoader(HasPlugin.PLUGIN, font)
}

/**
 * Clears loaded fonts for NON_PLUGIN context.
 * (original: $$h0)
 */
export function clearNonPluginLoadedFonts(): void {
  FontManualLoader?.clearLoadedFonts(HasPlugin.NON_PLUGIN)
}

/**
 * Loads a font for NON_PLUGIN context.
 * (original: $$g1)
 * @param font Font family and style
 */
export async function loadNonPluginFont(font: { family: string, style: string }): Promise<void> {
  await loadFontWithManualLoader(HasPlugin.NON_PLUGIN, font)
}

/**
 * Waits for all fonts in the loading state registry to be loaded.
 * (original: $$f2)
 */
export async function waitForAllFontsLoaded(): Promise<void> {
  const entries = fontLoadingStateRegistry.entries()
  await Promise.allSettled(
    Array.from(entries).map(async ([family, styleMap]) => {
      const styles = styleMap.keys()
      await Promise.allSettled(
        Array.from(styles).map(async (style) => {
          await waitForFontLoaded(family, style)
        }),
      )
    }),
  )
}

/**
 * Gets the closest font name using FontManualLoader.
 * (original: $$_6)
 * @param pluginType Plugin type
 * @param family Font family
 * @param style Font style
 * @returns Closest font name or null
 */
export function getClosestFontName(
  pluginType: HasPlugin,
  family: string,
  style: string,
): string | null {
  return FontManualLoader?.getClosestFontName(pluginType, family, style) ?? null
}

// Exported aliases for refactored functions
export const YJ = clearNonPluginLoadedFonts
export const EV = loadNonPluginFont
export const FP = waitForAllFontsLoaded
export const VC = waitForFontLoaded
export const dF = notifyFontLoadingState
export const uW = loadPluginFont
export const ye = getClosestFontName
