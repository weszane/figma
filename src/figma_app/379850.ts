import { debugState } from "../905/407919"
import { selectViewAction } from "../905/929976"
import { colorCSSManipulatorInstance } from "../905/989956"
import { FEditorType } from "../figma_app/53721"
import { normalizedToRgb } from "../figma_app/273493"
import { trackFileEvent } from "../figma_app/314264"
import { SelectorType } from "../figma_app/707808"
import { HandoffBindingsCpp } from "../figma_app/763686"
import { handleEnterMode } from "../figma_app/806075"
/**
 * Handles view transitions and tracking for fullscreen mode
 * Original: $$p3
 */
export function handleFullscreenViewTransition(
  dispatch: Fn,
  viewState: any,
  actionType: string,
): void {
  // Early return if not fullscreen view
  if (viewState.view !== "fullscreen") {
    return
  }

  const debugStateData = debugState.getState()

  // Track overview search clicks in dev mode
  if (
    debugStateData.selectedView?.showOverview
    && actionType === "overview_search_clicked"
  ) {
    trackFileEvent(
      "Dev Mode Overview Pages Search Clicked",
      debugStateData.openFile?.key,
      debugStateData,
      {
        pageId: viewState.nodeId,
      },
    )
  }

  // Handle design editor mode transitions
  if (
    "editorType" in viewState
    && viewState.editorType === FEditorType.Design
  ) {
    handleEnterMode(debugStateData, FEditorType.Design, actionType)
  }

  // Dispatch view action with updated state
  dispatch(selectViewAction({
    ...viewState,
    showOverview: false,
    overviewBackButtonTargetNodeId: undefined,
  }))
}

/**
 * Handles closing of dev mode component browser
 * Original: $$_0
 */
export function closeDevModeComponentBrowser(
  dispatch: Fn,
  viewState: any,
): void {
  if (viewState.view === "fullscreen") {
    dispatch(selectViewAction({
      ...viewState,
      showDevModeComponentBrowser: false,
      componentKey: undefined,
      devModeComponentBrowserBackButtonTargetNodeId: undefined,
      githubRepositorySelectorMode: SelectorType.NONE,
    }))
  }
}

/**
 * Gets background color with override handling
 * Original: $$h1
 */
export function getBackgroundColorWithOverride(
  styleMap: Map<string, any>,
  node: any,
  nodeId: string,
): string | null {
  // Get background color from style map
  const getBackgroundColor = (styles: Map<string, any>, id: string): string | null => {
    const backgroundColor = styles.get(id)?.backgroundColor
    return backgroundColor ? colorCSSManipulatorInstance.format(backgroundColor) : null
  }

  const styleBackgroundColor = getBackgroundColor(styleMap, nodeId)

  // Check for background color override
  const overrideColor = HandoffBindingsCpp.backgroundColorOverride(node)

  // Return override color if exists, otherwise style color
  return overrideColor
    ? colorCSSManipulatorInstance.format(normalizedToRgb(overrideColor))
    : styleBackgroundColor
}

/**
 * Checks if node is descendant of target node
 * Original: WJ
 */
export function isNodeDescendantOf(
  targetNode: { guid: string },
  currentNode: { type: string, guid: string, parentNode: any } | null,
): boolean {
  // Guard clause for invalid nodes
  if (!currentNode || currentNode.type === "CANVAS") {
    return false
  }

  // Check if current node matches target or recurse up parent chain
  return currentNode.guid === targetNode.guid
    || isNodeDescendantOf(targetNode, currentNode.parentNode)
}

// Export aliases for backward compatibility
export const Ep = closeDevModeComponentBrowser
export const S7 = getBackgroundColorWithOverride
export const _$ = handleFullscreenViewTransition
export const WJ = isNodeDescendantOf
