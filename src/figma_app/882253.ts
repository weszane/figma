// Origin: /Users/allen/sigma-main/src/figma_app/882253.ts
// Changes: Renamed variables/functions, added TypeScript types/interfaces, improved readability, added comments, simplified logic, noted assumed dependencies.

import { StyleItemValue } from "../../types/app"
import { sessionLocalIDToString } from "../905/871411"

// Assumed dependencies:
// - sessionLocalIDToString: Converts a session-local GUID to a string.
// - e.library.used__LIVEGRAPH: Contains mappings for style keys and node IDs.
// - e.library.local.styles: Map of local style objects.
// - stylePreviewShown: UI state for style preview.

// Type definitions for context objects
interface Style {
  key: string
  node_id: string
  guid?: string
}







// Refactored function: Resolves the destination style key for a given source key and style object.
export function resolveDestinationStyleKey(
  context: Partial<AppState>,
  sourceKey: string,
  styleObj?: Partial<Style>,
) : StyleItemValue {
  if (!sourceKey)
    return null

  // Try direct mapping from source asset key to destination key
  const directDestinationKey = context.library.used__LIVEGRAPH.sourceAssetKeyToDestinationKey[sourceKey]
  if (directDestinationKey)
    return directDestinationKey

  // If no style object provided, cannot resolve further
  if (!styleObj)
    return null

  let localNodeId: string | undefined

  // If styleObj has a 'type' property, treat as a style reference
  if ("type" in styleObj) {
    const localStyle = context.library.local.styles[styleObj.node_id!]
    // Ensure the local style matches the key
    if (!localStyle || localStyle.key !== styleObj.key)
      return null
    localNodeId = localStyle.node_id
  }
  else if (styleObj.guid) {
    // Otherwise, convert GUID to local node ID
    localNodeId = sessionLocalIDToString(styleObj.guid as any)
  }

  // Map local node ID to destination key
  const destinationKey
    = localNodeId && context.library.used__LIVEGRAPH.localNodeIdToDestinationKey[localNodeId]

  // Fallback: Try to resolve using styles mapping
  return context.library.used__LIVEGRAPH.styles[destinationKey ?? sourceKey] ?? null
}

// Refactored function: Checks if the style preview is shown for a specific style key.
export function isStylePreviewActive(
  context: { stylePreviewShown?: { isShown: boolean; isCreating: boolean; style: string } },
  styleKey: string,
): boolean {
  const { stylePreviewShown } = context
  return (
    stylePreviewShown.isShown
    && !stylePreviewShown.isCreating
    && stylePreviewShown.style === styleKey
  )
}

// Export with original names for compatibility
export const b = resolveDestinationStyleKey
export const e = isStylePreviewActive
