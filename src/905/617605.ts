import { CommentPinElement } from "../905/512783"

import { FEditorType } from "../figma_app/53721"
import { computeFullscreenViewportForNode, viewportToScreen } from "../figma_app/62612"
import { AppStateTsApi, Fullscreen, SlideConstantsCppBindings } from "../figma_app/763686"

let d = 256
/**
 * Calculates the viewport for a comment pin element based on the current view mode.
 *
 * @param commentPinElement - The comment pin element containing canvas position and comments data
 * @param viewportManager - Manager for handling viewport information and transformations
 * @param viewConfig - Configuration object containing view mode and editor type
 * @param isPreviewMode - Flag indicating if the viewport is in preview mode
 * @param shouldAdjustForBanner - Flag indicating if viewport should account for banner height
 * @returns Promise resolving to viewport configuration or null if no adjustment needed
 */
export function calculateCommentPinViewport(
  commentPinElement: any,
  viewportManager: any,
  viewConfig: any,
  isPreviewMode: boolean,
  shouldAdjustForBanner: boolean,
): Promise<any | null> {
  return viewConfig.view === "fullscreen" && Fullscreen
    ? calculateFullscreenViewport(commentPinElement, viewportManager, viewConfig, isPreviewMode, shouldAdjustForBanner)
    : Promise.resolve(calculateStandardViewport(commentPinElement, viewportManager, viewConfig))
}

/**
 * Calculates fullscreen viewport configuration for comment pin elements.
 *
 * @param commentPinElement - The comment pin element
 * @param viewportManager - Manager for viewport operations
 * @param viewConfig - View configuration
 * @param isPreviewMode - Preview mode flag
 * @param shouldAdjustForBanner - Banner adjustment flag
 * @returns Promise resolving to viewport configuration or null
 */
function calculateFullscreenViewport(commentPinElement: any, viewportManager: any, viewConfig: any, isPreviewMode: boolean, shouldAdjustForBanner: boolean): Promise<any | null> {
  const pageId = commentPinElement.page
  const nodeBounds = calculateNodeBounds(commentPinElement)

  return nodeBounds && pageId
    ? computeFullscreenViewportForNode({
      nodeId: pageId,
      nodeAbsoluteBounds: nodeBounds,
      alwaysPan: false,
      viewportRect: calculateViewportRect(viewportManager, viewConfig, shouldAdjustForBanner),
      noPanViewportMultiplier: isPreviewMode ? 0 : 0.9,
      panJustEnoughViewportMultiplier: isPreviewMode ? 0 : 1.5,
    })
    : Promise.resolve(null)
}

/**
 * Calculates standard viewport configuration for community hub or prototype views.
 *
 * @param commentPinElement - The comment pin element
 * @param viewportManager - Manager for viewport operations
 * @param viewConfig - View configuration
 * @returns Viewport configuration object or null
 */
function calculateStandardViewport(commentPinElement: any, viewportManager: any, viewConfig: any): any | null {
  if (!commentPinElement.canvasPosition
    || (viewConfig.view !== "communityHub" && viewConfig.view !== "prototype")) {
    return null
  }

  const viewportInfo = viewportManager.getViewportInfo()
  const commentPosition = viewportToScreen(viewportInfo, commentPinElement.canvasPosition)
  const anchorPosition = commentPinElement.comments[0].client_meta?.selection_box_anchor
  const anchorScreenPosition = anchorPosition
    ? viewportToScreen(viewportInfo, anchorPosition)
    : commentPosition

  // Check if the comment position is within safe viewport bounds (64px padding)
  const isWithinSafeBounds = (x: number, y: number): boolean => {
    return x - 64 > 0
      && x + 64 < viewportInfo.width
      && y - 64 > 0
      && y + 64 < viewportInfo.height
  }

  const minX = Math.min(commentPosition.x, anchorScreenPosition.x)
  const minY = Math.min(commentPosition.y, anchorScreenPosition.y)

  if (!isWithinSafeBounds(minX, minY)) {
    let centerX = commentPinElement.canvasPosition.x
    let centerY = commentPinElement.canvasPosition.y
    let scale = viewportInfo.zoomScale

    if (anchorPosition) {
      // Calculate center point between comment and anchor
      centerX = (commentPinElement.canvasPosition.x + anchorPosition.x) / 2
      centerY = (commentPinElement.canvasPosition.y + anchorPosition.y) / 2

      // Calculate optimal scale to fit both points
      const widthDiff = Math.abs(commentPinElement.canvasPosition.x - anchorPosition.x)
      const heightDiff = Math.abs(commentPinElement.canvasPosition.y - anchorPosition.y)
      const widthScale = (viewportInfo.width - 128) / widthDiff
      const heightScale = (viewportInfo.height - 128) / heightDiff

      // Apply scale constraint for non-prototype views
      if (viewConfig.view !== "prototype") {
        scale = Math.min(viewportInfo.zoomScale, widthScale, heightScale)
      }
    }

    return {
      centerX,
      centerY,
      scale,
    }
  }

  return null
}

/**
 * Calculates bounding box for a comment pin element.
 *
 * @param commentPinElement - The comment pin element
 * @returns Bounding box object or null
 */
function calculateNodeBounds(commentPinElement: any): any | null {
  const { canvasPosition, selectionAnchorCanvasPosition } = commentPinElement

  if (!canvasPosition) {
    return null
  }

  // Get pin size based on number of unique comment authors
  const uniqueAuthors = new Set(commentPinElement.comments.map((comment: any) => comment.user_id)).size
  const { width, height } = CommentPinElement.getPinSize(uniqueAuthors)

  // Initial bounds based on comment pin position
  const pinBounds = {
    origin: {
      x: canvasPosition.x,
      y: canvasPosition.y - height,
    },
    size: {
      x: width,
      y: height,
    },
  }

  // Expand bounds if selection anchor exists
  if (!selectionAnchorCanvasPosition) {
    return pinBounds
  }

  const minX = Math.min(selectionAnchorCanvasPosition.x, pinBounds.origin.x)
  const maxX = Math.max(selectionAnchorCanvasPosition.x, pinBounds.origin.x + pinBounds.size.x)
  const minY = Math.min(selectionAnchorCanvasPosition.y, pinBounds.origin.y)
  const maxY = Math.max(selectionAnchorCanvasPosition.y, pinBounds.origin.y + pinBounds.size.y)

  return {
    origin: {
      x: minX,
      y: minY,
    },
    size: {
      x: maxX - minX,
      y: maxY - minY,
    },
  }
}

/**
 * Calculates viewport rectangle dimensions accounting for UI elements.
 *
 * @param viewportManager - Manager for viewport operations
 * @param viewConfig - View configuration
 * @param shouldAdjustForBanner - Flag to adjust for banner height
 * @returns Viewport rectangle configuration
 */
function calculateViewportRect(viewportManager: any, viewConfig: any, shouldAdjustForBanner: boolean): any {
  const viewportInfo = viewportManager.getViewportInfo()
  const viewportRect = {
    origin: {
      x: 0,
      y: 0,
    },
    size: {
      x: viewportInfo.width,
      y: viewportInfo.height,
    },
  }

  // Adjust for whiteboard mode sidebar
  if (viewConfig.view === "fullscreen"
    && viewConfig.editorType === FEditorType.Whiteboard
    && shouldAdjustForBanner) {
    viewportRect.size.x -= d
  }

  // Adjust for slides mode speaker notes
  if (viewConfig.view === "fullscreen"
    && viewConfig.editorType === FEditorType.Slides
    && AppStateTsApi.singleSlideView().isFocusedNodeViewEnabled()) {
    const speakerNotesHeight = AppStateTsApi.editorPreferences().speakerNotesHeight.getCopy()
    const dragHandleHeight = SlideConstantsCppBindings?.dragHandleTotalHeight() ?? 0
    viewportRect.size.y -= (speakerNotesHeight + dragHandleHeight)
  }

  // Adjust for editor banner
  const bannerHeight = AppStateTsApi?.uiState().editorBannerHeight.getCopy() ?? 0
  if (bannerHeight) {
    viewportRect.origin.y += bannerHeight
    viewportRect.size.y -= bannerHeight
  }

  return viewportRect
}

export const E = calculateCommentPinViewport
