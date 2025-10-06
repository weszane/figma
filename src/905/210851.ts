import { createDeepEqualSelector } from "../905/270781"
import { debugState } from "../905/407919"
import { getLoadID, getProductType, getReconnectId, getSlideViewAnalytics } from "../figma_app/314264"
import { Multiplayer } from "../figma_app/763686"
// Selector to extract file and product information
export const selectFileInfo = createDeepEqualSelector(
  [({
    openFile,
    fileByKey,
    selectedView,
  }) => {
    const fileKey = openFile?.key
    const file = fileKey && fileByKey?.[fileKey] || null

    return {
      key: fileKey,
      teamId: file?.team_id,
      creatorId: file?.creator_id,
      productType: getProductType(selectedView, file?.editor_type),
    }
  }],
  ({
    key,
    teamId,
    creatorId,
    productType,
  }) => ({
    file_key: key || "new",
    file_team_id: teamId || null,
    file_owner_user_id: creatorId || null,
    productType: key && productType,
  }),
)

// Function to build analytics context
export function buildAnalyticsContext(context: Record<string, any> = {}) {
  // Initialize context if needed
  if (debugState) {
    const state = debugState.getState()
    Object.assign(context, selectFileInfo(state))
    Object.assign(context, getSlideViewAnalytics(context.productType, state.selectedView?.view))
  }

  // Add load and reconnect identifiers
  const loadID = getLoadID()
  if (loadID !== null) {
    context.loadID = loadID
    context.reconnectId = getReconnectId()
  }

  // Add multiplayer session information
  context.fileIsIncremental = !!Multiplayer?.isIncrementalSession()
  context.fileIsValidatingIncremental = !!Multiplayer?.isValidatingIncremental()
  context.isStagingChanges = !!Multiplayer?.isStagingChanges()

  return context
}

// Export aliases for backward compatibility
export const c = selectFileInfo
export const r = buildAnalyticsContext
