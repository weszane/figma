import type { WidgetManagerHandler } from "../figma_app/548577"

// Origin: 239551.ts
// Changes: Renamed variables for clarity, added type annotations, improved readability, added comments, fixed export structure.

// Assumed dependency: WidgetManagerHandler is imported from "../figma_app/548577"

// Stores the current WidgetManagerHandler instance.
export let widgetManagerHandler: WidgetManagerHandler | undefined

/**
 * Sets the current WidgetManagerHandler instance.
 * @param handler - The WidgetManagerHandler instance to set.
 */
export function setWidgetManagerHandler(handler: WidgetManagerHandler): void {
  widgetManagerHandler = handler
}

// Exported references for compatibility with original code.
export const T = setWidgetManagerHandler
export const x = widgetManagerHandler
