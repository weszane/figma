import { Rectangle } from '../905/249071'
import { Vector2D } from '../905/512402'
import { NameClass } from '../905/881708'
import { atomStoreManager } from '../figma_app/27355'
import { H } from '../figma_app/376315'
import { InteractionCpp } from '../figma_app/763686'
import { BrowserInfo } from '../figma_app/778880'

export class VideoInteractionHandler extends NameClass {
  constructor(videoNode: any) {
    super(videoNode)
  }

  /**
   * Handles mouse down events on the video node.
   * Toggles the pointerDownOnVideo state when clicking on the video node on iPad.
   * @param event - The mouse event
   */
  handleMouseDown(event: any): void {
    if (this.isPointWithinVideoNode(event.viewportSpaceMouse()) && BrowserInfo.isIpad) {
      const { pointerDownOnVideo } = atomStoreManager.get(H)
      atomStoreManager.set(H, {
        isVideoNodeHovered: true,
        pointerDownOnVideo: !pointerDownOnVideo,
      })
    }
  }

  /**
   * Handles mouse move events over the video node.
   * Updates the hover state based on mouse position.
   * @param event - The mouse event
   */
  handleMouseMove(event: any): void {
    if (this.isPointWithinVideoNode(event.viewportSpaceMouse())) {
      const { pointerDownOnVideo } = atomStoreManager.get(H)
      atomStoreManager.set(H, {
        isVideoNodeHovered: true,
        pointerDownOnVideo,
      })
    }
    else {
      atomStoreManager.set(H, {
        isVideoNodeHovered: false,
        pointerDownOnVideo: false,
      })
    }
  }

  /**
   * Checks if a point is within the video node boundaries.
   * @param point - The point to check in viewport space
   * @returns boolean - True if the point is within the video node
   */
  isPointWithinVideoNode(point: any): boolean {
    const videoBounds = Rectangle.fromRectD(InteractionCpp.viewportSpaceVideoBounds())
    return !videoBounds.isInvalid() && videoBounds.containsPointIncludingBoundary(Vector2D.fromVectorD(point))
  }

  /**
   * Handles mouse up events.
   * @param event - The mouse event
   */
  handleMouseUp(event: any): void { }

  /**
   * Handles mouse drag events.
   * @param event - The mouse drag event
   */
  handleMouseDrag(event: any): void { }

  /**
   * Handles mouse leave events.
   * @param event - The mouse leave event
   */
  handleMouseLeave(event: any): void { }

  /**
   * Handles context menu open events.
   * @param event - The context menu event
   */
  handleContextMenuOpen(event: any): void { }

  /**
   * Called before each frame render.
   */
  handleBeforeFrame(): void { }

  /**
   * Renders the video interaction handler.
   * @param context - The rendering context
   * @param options - Rendering options
   */
  render(context: any, options: any): void { }

  /**
   * Renders UI elements under edit mode.
   * @param context - The rendering context
   * @param options - Rendering options
   */
  renderUnderEditModeUI(context: any, options: any): void { }

  /**
   * Resets the video interaction handler state.
   */
  reset(): void { }
}

export const s = VideoInteractionHandler
