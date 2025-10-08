import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { debugState } from "../905/407919"
import { VisualBellIcon } from "../905/576487"
// Original code: let o = "image_loading";
// Original code: let $$l0 = new class { ... };
// Original code: export const J = $$l0;

/**
 * Manages the loading state of images and triggers visual bell notifications accordingly.
 */
class ImageLoadingManager {
  private pendingImageCount: number = 0
  private readonly imageLoadingType: string = "image_loading"

  /**
   * Starts loading an image and updates the visual bell queue based on the count.
   * @param delay - The delay for the bell notification in milliseconds (default: 1000).
   */
  startLoadingImage(delay: number = 1000): void {
    this.pendingImageCount++
    if (this.pendingImageCount === 1) {
      this.queueBell(getI18nString("visual_bell.adding_image"), delay)
    }
    else if (this.pendingImageCount === 2) {
      this.dequeueBell()
      this.queueBell(getI18nString("visual_bell.adding_images"), delay)
    }
  }

  /**
   * Finishes loading an image and dequeues the bell if no images are pending.
   */
  finishLoadingImage(): void {
    this.pendingImageCount--
    if (this.pendingImageCount === 0) {
      this.dequeueBell()
    }
  }

  /**
   * Dequeues the visual bell for image loading.
   */
  private dequeueBell(): void {
    debugState.dispatch(VisualBellActions.dequeue({
      matchType: this.imageLoadingType,
    }))
  }

  /**
   * Queues a visual bell notification for image loading.
   * @param message - The message to display.
   * @param delay - The delay for the notification.
   */
  private queueBell(message: string, delay: number): void {
    debugState.dispatch(VisualBellActions.enqueue({
      type: this.imageLoadingType,
      message,
      delay,
      icon: VisualBellIcon.SPINNER,
    }))
  }
}

export const imageLoadingManager = new ImageLoadingManager()
export const J = imageLoadingManager
