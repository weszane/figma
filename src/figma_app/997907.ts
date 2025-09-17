import { atomStoreManager } from '../figma_app/27355'
import { createSnapshotComponent, hideElementById, setupLoadablePageManager } from '../figma_app/27829'

/**
 * Manages the loadable page for the FileBrowser.
 * @see setupLoadablePageManager
 */
export const fileBrowserPageManager = setupLoadablePageManager(atomStoreManager, 'FileBrowser')

/**
 * Snapshot component for the filebrowser loading page.
 * @see createSnapshotComponent
 */
export const fileBrowserLoadingSnapshot = createSnapshotComponent(
  'filebrowser-loading-page',
  /**
   * Initializes the loading page element.
   * @param element - The DOM element for the loading page.
   * @see createSnapshotComponent (init callback)
   */
  (element) => {
    element.setAttribute('id', '')
    element.classList.remove('hidden')
    element.classList.remove('fadeOut')
  },
  /**
   * Handles the loading progress bar animation.
   * @param element - The DOM element for the loading page.
   * @see createSnapshotComponent (update callback)
   */
  (element) => {
    const progressBar = element.querySelector('#filebrowser-loading-progress-bar')
    if (!progressBar)
      return
    const animation = progressBar.getAnimations()[0]
    const duration = animation?.effect?.getComputedTiming().duration
    if (animation && typeof duration === 'number') {
      animation.currentTime = duration
    }
  },
)

/**
 * Hides the filebrowser loading page element.
 * @see hideElementById
 */
export function hideFileBrowserLoadingPage(): void {
  hideElementById('filebrowser-loading-page')
}

// Export aliases for backward compatibility and refactored names
export const bG = hideFileBrowserLoadingPage
export const m1 = fileBrowserLoadingSnapshot
export const q_ = fileBrowserPageManager
