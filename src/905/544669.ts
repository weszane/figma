interface AppCapabilities extends Record<string, any> {
  canLoadImageResource: boolean
  canLoadFontResource: boolean
  isInPrototypeViewer: boolean
  appIsReadOnly: boolean
  appIsRecovery: boolean
  appCanRenderMultiplayerOrSelectionUI: boolean
  appCanRenderHyperlinkHoverUI: boolean
  appCanInteractWithWidgetEmbedsAndLinkPreviews: boolean
  appCanRenderScrollbars: boolean
  appCanRenderSceneGraphUI: boolean
  actionStateDisableUpdates: boolean
  onlyRenderTopLevelFrameOfSelection: boolean
  clickOnlyComments: boolean
  allowToggleCommentsWhenLoggedOut: boolean
  requireInteractionForFocus: boolean
  requestVariableMirroring: boolean
  requestAssetMirroring: boolean
}

let appCapabilities: AppCapabilities = {
  canLoadImageResource: true,
  canLoadFontResource: true,
  isInPrototypeViewer: false,
  appIsReadOnly: false,
  appIsRecovery: false,
  appCanRenderMultiplayerOrSelectionUI: true,
  appCanRenderHyperlinkHoverUI: true,
  appCanInteractWithWidgetEmbedsAndLinkPreviews: true,
  appCanRenderScrollbars: true,
  appCanRenderSceneGraphUI: true,
  actionStateDisableUpdates: false,
  onlyRenderTopLevelFrameOfSelection: false,
  clickOnlyComments: false,
  allowToggleCommentsWhenLoggedOut: false,
  requireInteractionForFocus: false,
  requestVariableMirroring: true,
  requestAssetMirroring: true,
}

/**
 * Updates app capabilities with either a partial object or a function that takes the current state
 * @param updater - Partial AppCapabilities object or function that returns AppCapabilities
 */
export function updateAppCapabilities(updater: Partial<AppCapabilities> | ((current: AppCapabilities) => AppCapabilities)): void {
  if (typeof updater === 'function') {
    appCapabilities = updater(appCapabilities)
    return
  }
  appCapabilities = { ...appCapabilities, ...updater }
}

/**
 * Creates a proxy object with getter functions for each capability
 * @returns Object with getter functions for each app capability
 */
export function createCapabilityGetters() {
  const getters: { [K in keyof AppCapabilities]: () => AppCapabilities[K] } = {} as any

  for (const key of Object.keys(appCapabilities) as (keyof AppCapabilities)[]) {
    getters[key] = () => appCapabilities[key]
  }

  return getters
}

export const N = createCapabilityGetters
export const g = updateAppCapabilities
