import { debugState } from "../905/407919"
import { trackFileEvent } from "../figma_app/314264"
import { FontSourceType } from "../figma_app/763686"
// Refactored code with meaningful names and improved structure
let missingFontScannerCompleted = false
let popoverTriggered = false
let hasMissingFontEventTracked = false
let showMissingFontsPopoverTracked = false

export class MissingFontTracker {
  /**
   * Marks the missing font scanner as complete and triggers tracking if conditions are met
   * (Original function: m.markMissingFontScannerAsComplete)
   */
  markMissingFontScannerAsComplete(): void {
    missingFontScannerCompleted = true
    this.trackMissingFontEvent()
  }

  /**
   * Tracks missing font event when all conditions are met
   * (Original function: h)
   */
  trackMissingFontEvent(): void {
    if (missingFontScannerCompleted && popoverTriggered && !hasMissingFontEventTracked) {
      const state = debugState.getState()
      const fontSources = new Set(
        Object.values(state.fonts)
          .map(fontGroup => Object.values(fontGroup))
          .flat()
          .map(font => font.source),
      )

      const fileKey = state.openFile?.key
      const duplicatedFiles = state.figFileDuplicatedFromHubFile

      let isCommunityDuplicatedFile = false
      if (fileKey !== undefined && duplicatedFiles !== undefined) {
        isCommunityDuplicatedFile = duplicatedFiles[fileKey] != null
      }

      trackFileEvent("has_missing_font", fileKey, state, {
        has_google_fonts: fontSources.has(FontSourceType.GOOGLE),
        has_local_fonts: fontSources.has(FontSourceType.LOCAL),
        has_shared_fonts: fontSources.has(FontSourceType.SHARED),
        is_community_duplicated_file: isCommunityDuplicatedFile,
      })

      hasMissingFontEventTracked = true
    }
  }
}

/**
 * Triggers the missing font popover
 * (Original function: $$u0)
 */
export function triggerMissingFontPopover(): void {
  popoverTriggered = true
  // Attempt to track missing font event
  const tracker = getMissingFontTracker()
  if (tracker) {
    tracker.trackMissingFontEvent()
  }
}

/**
 * Resets all tracking flags
 * (Original function: $$p3)
 */
export function resetMissingFontTracking(): void {
  missingFontScannerCompleted = false
  popoverTriggered = false
  hasMissingFontEventTracked = false
  showMissingFontsPopoverTracked = false
}

/**
 * Tracks the "Show Missing Fonts Popover" event
 * (Original function: $$_4)
 * @param fontListLoaded - Indicates if font list was loaded
 * @param counts - Font counts data
 */
export function trackShowMissingFontsPopover(fontListLoaded: boolean, counts: any): void {
  const state = debugState.getState()
  const fileKey = state.openFile?.key

  if (fileKey && !showMissingFontsPopoverTracked) {
    trackFileEvent("Show Missing Fonts Popover", fileKey, state, {
      fontListLoaded,
      counts,
      timeNow: performance.now(),
    })
    showMissingFontsPopoverTracked = true
  }
}

let missingFontTrackerInstance: MissingFontTracker | null = null

/**
 * Initializes and returns the missing font tracker instance
 * (Original function: $$g1)
 */
export function initializeMissingFontTracker(): void {
  missingFontTrackerInstance = new MissingFontTracker()
}

/**
 * Gets the missing font tracker instance
 * (Original function: $$n2)
 */
export function getMissingFontTracker(): MissingFontTracker | null {
  return missingFontTrackerInstance
}

// Exported aliases for backward compatibility
export const DI = triggerMissingFontPopover
export const Ds = initializeMissingFontTracker
export const ZO = missingFontTrackerInstance
export const e8 = resetMissingFontTracking
export const vS = trackShowMissingFontsPopover
