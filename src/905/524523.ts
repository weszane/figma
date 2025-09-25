/**
 * TooltipRegistry maintains a registry of tooltip components and their properties.
 */
type TooltipPropsGetter = (...args: any[]) => any

interface TooltipEntry {
  component: any
  getProps: TooltipPropsGetter
}

// Internal registry for tooltips (original: n)
const tooltipRegistry: Record<string, TooltipEntry> = {}

/**
 * Registers a tooltip component with a unique key.
 * @param key Unique identifier for the tooltip (original: e)
 * @param component Tooltip component to register (original: t)
 * @param getProps Function to get tooltip props (original: i)
 * @throws Error if the key is already registered
 * @returns The registered key
 */
export function registerTooltip(
  key: string,
  component: any,
  getProps?: TooltipPropsGetter,
): string {
  if (tooltipRegistry[key]) {
    throw new Error(`Already registered tooltip with key: ${key}`)
  }
  tooltipRegistry[key] = {
    component,
    getProps,
  }
  return key
}

/**
 * Retrieves a registered tooltip entry by key.
 * @param key Unique identifier for the tooltip (original: e)
 * @returns The tooltip entry or undefined
 */
export function getTooltipEntry(key: string): TooltipEntry | undefined {
  return tooltipRegistry[key]
}

/**
 * Checks if a tooltip is registered under the given key.
 * @param key Unique identifier for the tooltip (original: e)
 * @returns True if registered, false otherwise
 */
export function isTooltipRegistered(key: string): boolean {
  return tooltipRegistry[key] !== undefined
}

// Export aliases for backward compatibility and refactored imports
export const $L = isTooltipRegistered // original: $L
export const TN = getTooltipEntry // original: TN
export const ex = registerTooltip // original: ex
