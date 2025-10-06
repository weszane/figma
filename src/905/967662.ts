import type { CoverageStatus } from '../figma_app/763686'
import { debugState } from '../905/407919'
import { multiplayerSessionManager } from '../905/977824'
import { fullscreenValue } from '../figma_app/455680'
import { AppStateTsApi, Fullscreen, FullscreenPerfMetrics } from '../figma_app/763686'

/**
 * Tracks zoom scale changes.
 * Original: $$o13
 */
export class ZoomScaleTracker {
  _zoomScale: number

  constructor() {
    this._zoomScale = this.getZoomScale()
  }

  /**
   * Gets the current zoom scale from the viewport.
   */
  getZoomScale(): number {
    return fullscreenValue.getViewportInfo().zoomScale
  }

  /**
   * Returns true if the zoom scale has changed since last check.
   */
  didEventOccur(): boolean {
    const currentZoomScale = this.getZoomScale()
    if (currentZoomScale !== this._zoomScale) {
      this._zoomScale = currentZoomScale
      return true
    }
    return false
  }
}

/**
 * Tracks pan (offset) changes and zoom events.
 * Original: $$l1
 */
export class PanTracker {
  _offsetX: number
  _offsetY: number
  _zoomTracker: ZoomScaleTracker

  constructor() {
    this._zoomTracker = new ZoomScaleTracker()
    this._offsetX = this.getOffsetX()
    this._offsetY = this.getOffsetY()
  }

  /**
   * Gets the current X offset from the viewport.
   */
  getOffsetX(): number {
    return fullscreenValue.getViewportInfo().offsetX
  }

  /**
   * Gets the current Y offset from the viewport.
   */
  getOffsetY(): number {
    return fullscreenValue.getViewportInfo().offsetY
  }

  /**
   * Returns true if the pan or zoom event has occurred.
   */
  didEventOccur(): boolean {
    const currentOffsetX = this.getOffsetX()
    const currentOffsetY = this.getOffsetY()
    if (currentOffsetX !== this._offsetX || currentOffsetY !== this._offsetY) {
      this._offsetX = currentOffsetX
      this._offsetY = currentOffsetY
      return !this._zoomTracker.didEventOccur()
    }
    return false
  }
}

/**
 * Tracks mouse move events and pan changes.
 * Original: $$d14
 */
export class MouseMoveTracker {
  _didMouseMove: boolean
  _panTracker: PanTracker

  constructor() {
    this._didMouseMove = false
    this._panTracker = new PanTracker()
    document.addEventListener('mousemove', () => {
      this._didMouseMove = true
    })
  }

  /**
   * Returns true if a mouse move event occurred and pan did not change.
   */
  didEventOccur(): boolean {
    const occurred = this._didMouseMove && !this._panTracker.didEventOccur()
    this._didMouseMove = false
    return occurred
  }
}

/**
 * Checks if the render tree is stale.
 * Original: $$c12
 */
export class RenderTreeStaleTracker {
  constructor() { }

  /**
   * Returns true if the render tree is stale.
   */
  didEventOccur(): boolean {
    return (FullscreenPerfMetrics?.getRenderTreeStaleTimeMs() ?? 0) > 0
  }
}

/**
 * Tracks chat state for current and other users.
 * Original: $$u4
 */
export class ChatStateTracker {
  _isCurrentUserChatting: boolean
  _isOtherUserChatting: boolean
  _otherUserChattingSessionIds: Set<string>

  constructor() {
    this._isCurrentUserChatting = false
    this._isOtherUserChatting = false
    this._otherUserChattingSessionIds = new Set()
  }

  /**
   * Sets whether the current user is chatting.
   */
  setIsCurrentUserChatting(isChatting: boolean): void {
    this._isCurrentUserChatting = isChatting
  }

  /**
   * Sets the chat state for another user.
   */
  setOtherUserChattingState(sessionId: string, isChatting: boolean): void {
    if (isChatting) {
      this._otherUserChattingSessionIds.add(sessionId)
    }
    else {
      this._otherUserChattingSessionIds.delete(sessionId)
    }
    this._isOtherUserChatting = this._otherUserChattingSessionIds.size > 0
  }

  /**
   * Returns true if any user is chatting.
   */
  didEventOccur(): boolean {
    return this._isCurrentUserChatting || this._isOtherUserChatting
  }
}

/**
 * Tracks cursor reaction activity.
 * Original: $$p5
 */
export class CursorReactionTracker {
  _cursorReactionIsActive: boolean

  constructor() {
    this._cursorReactionIsActive = false
    this.updateIsCursorReactionActive()
    multiplayerSessionManager?.setOnReactionsUpdatedCallback(this.updateIsCursorReactionActive.bind(this))
  }

  /**
   * Updates the cursor reaction active state.
   */
  updateIsCursorReactionActive(): void {
    this._cursorReactionIsActive = this.getIsCursorReactionActive()
  }

  /**
   * Returns true if any cursor reaction is active.
   */
  getIsCursorReactionActive(): boolean {
    if (!multiplayerSessionManager)
      return false
    const reactions = multiplayerSessionManager.reactionsBySessionId()
    return Object.keys(reactions).some(sessionId => Object.keys(reactions[sessionId]).length > 0)
  }

  /**
   * Returns true if cursor reaction is active.
   */
  didEventOccur(): boolean {
    return this._cursorReactionIsActive
  }
}

/**
 * Tracks viewport coverage status.
 * Original: $$m6
 */
export class ViewportCoverageTracker {
  _mode: CoverageStatus

  constructor(mode: CoverageStatus) {
    this._mode = mode
  }

  /**
   * Gets the estimated viewport render coverage.
   */
  getViewportCoverage(): number {
    return Fullscreen.estimatedViewportRenderCoverage(this._mode)
  }

  /**
   * Returns true if viewport coverage is below threshold.
   */
  didEventOccur(): boolean {
    return this.getViewportCoverage() < 0.9
  }
}

/**
 * Tracks render tree staleness against a threshold.
 * Original: $$h7
 */
export class RenderTreeStalenessThresholdTracker {
  _thresholdMs: number

  constructor(thresholdMs: number) {
    this._thresholdMs = thresholdMs
  }

  /**
   * Gets the render tree staleness in ms.
   */
  getStalenessMs(): number {
    return FullscreenPerfMetrics.getRenderTreeStaleTimeMs()
  }

  /**
   * Returns true if staleness exceeds threshold.
   */
  didEventOccur(): boolean {
    return this.getStalenessMs() > this._thresholdMs
  }
}

/**
 * Tracks multiplayer user count against a threshold.
 * Original: $$g10
 */
export class MultiplayerUserCountTracker {
  _threshold: number
  _getMultiplayerUserCount: () => number

  constructor(threshold: number, getUserCount: () => number) {
    this._threshold = threshold
    this._getMultiplayerUserCount = getUserCount
  }

  /**
   * Returns true if user count exceeds threshold.
   */
  didEventOccur(): boolean {
    return this._getMultiplayerUserCount() > this._threshold
  }
}

/**
 * Tracks multiplayer user count, pan, and zoom events.
 * Original: $$f3
 */
export class MultiplayerPanZoomTracker {
  _threshold: number
  _panTracker: PanTracker
  _zoomTracker: ZoomScaleTracker
  _getMultiplayerUserCount: () => number

  constructor(threshold: number, getUserCount: () => number) {
    this._threshold = threshold
    this._panTracker = new PanTracker()
    this._zoomTracker = new ZoomScaleTracker()
    this._getMultiplayerUserCount = getUserCount
  }

  /**
   * Returns true if user count, pan, and zoom events all occurred.
   */
  didEventOccur(): boolean {
    return (
      this._getMultiplayerUserCount() > this._threshold
      && this._panTracker.didEventOccur()
      && this._zoomTracker.didEventOccur()
    )
  }
}

/**
 * Tracks viewport sharpness against a threshold, ignoring pan/zoom events.
 * Original: $$_8
 */
export class MinViewportSharpnessTracker {
  _sharpnessThreshold: number
  _zoomEventTracker: ZoomScaleTracker
  _panEventTracker: PanTracker

  constructor(sharpnessThreshold: number) {
    this._sharpnessThreshold = sharpnessThreshold
    this._zoomEventTracker = new ZoomScaleTracker()
    this._panEventTracker = new PanTracker()
  }

  /**
   * Returns true if sharpness is below threshold and no pan/zoom event occurred.
   */
  didEventOccur(): boolean {
    const panOccurred = this._panEventTracker.didEventOccur()
    const zoomOccurred = this._zoomEventTracker.didEventOccur()
    return !(panOccurred || zoomOccurred) && Fullscreen.minViewportSharpness() < this._sharpnessThreshold
  }
}

/**
 * Tracks average viewport sharpness against a threshold, ignoring pan/zoom events.
 * Original: $$A2
 */
export class AvgViewportSharpnessTracker {
  _sharpnessThreshold: number
  _zoomEventTracker: ZoomScaleTracker
  _panEventTracker: PanTracker

  constructor(sharpnessThreshold: number) {
    this._sharpnessThreshold = sharpnessThreshold
    this._zoomEventTracker = new ZoomScaleTracker()
    this._panEventTracker = new PanTracker()
  }

  /**
   * Returns true if average sharpness is below threshold and no pan/zoom event occurred.
   */
  didEventOccur(): boolean {
    const panOccurred = this._panEventTracker.didEventOccur()
    const zoomOccurred = this._zoomEventTracker.didEventOccur()
    return !(panOccurred || zoomOccurred) && Fullscreen.avgViewportSharpness() < this._sharpnessThreshold
  }
}

/**
 * Tracks annotation visibility.
 * Original: $$y0
 */
export class AnnotationVisibilityTracker {
  _isShowingAnnotations: boolean

  constructor() {
    this._isShowingAnnotations = false
  }

  /**
   * Sets annotation visibility.
   */
  setIsShowingAnnotations(isShowing: boolean): void {
    this._isShowingAnnotations = isShowing
  }

  /**
   * Returns true if annotations are showing.
   */
  didEventOccur(): boolean {
    return this._isShowingAnnotations
  }
}

/**
 * Tracks a generic active state, resets after event.
 * Original: $$b16
 */
export class ActiveStateTracker {
  _isActive: boolean

  constructor() {
    this._isActive = false
  }

  /**
   * Sets the tracker as active.
   */
  setIsActive(): void {
    this._isActive = true
  }

  /**
   * Returns true if active, then resets.
   */
  didEventOccur(): boolean {
    const wasActive = this._isActive
    this._isActive = false
    return wasActive
  }
}

/**
 * Tracks user typing state.
 * Original: $$v15
 */
export class UserTypingTracker {
  /**
   * Returns true if user is typing.
   */
  didEventOccur(): boolean {
    return AppStateTsApi.isUserTyping()
  }
}

/**
 * Tracks grid resizing state.
 * Original: $$I11
 */
export class GridResizingTracker {
  /**
   * Returns true if grid is resizing.
   */
  didEventOccur(): boolean {
    return AppStateTsApi?.isResizingGrid() ?? false
  }
}

/**
 * Tracks selection changes.
 * Original: $$E9
 */
export interface SelectionProperties {
  name?: string
  numSelected?: number
  selectionBounds?: {
    x?: number
    y?: number
    width?: number
    height?: number
  }
  [key: string]: any
}

export class SelectionChangeTracker {
  _selection: SelectionProperties | undefined

  constructor() {
    const state = debugState.getState()
    this._selection = state.mirror?.selectionProperties
  }

  /**
   * Checks if selection has changed.
   */
  hasSelectionChanged(newSelection: SelectionProperties): boolean {
    if (this._selection && Object.keys(this._selection).length !== 0) {
      return (
        this._selection.name !== newSelection.name
        || this._selection.numSelected !== newSelection.numSelected
        || this._selection.selectionBounds?.x !== newSelection.selectionBounds?.x
        || this._selection.selectionBounds?.y !== newSelection.selectionBounds?.y
        || this._selection.selectionBounds?.width !== newSelection.selectionBounds?.width
        || this._selection.selectionBounds?.height !== newSelection.selectionBounds?.height
      )
    }
    return !!newSelection && Object.keys(newSelection).length !== 0
  }

  /**
   * Returns true if selection has changed.
   */
  didEventOccur(): boolean {
    const state = debugState.getState()
    const newSelection = state.mirror?.selectionProperties
    const changed = !!newSelection && Object.keys(newSelection).length !== 0 && this.hasSelectionChanged(newSelection)
    this._selection = newSelection
    return changed
  }
}

// Export original variable names mapped to new class names
export const Fy = AnnotationVisibilityTracker
export const H0 = PanTracker
export const I7 = AvgViewportSharpnessTracker
export const Pn = MultiplayerPanZoomTracker
export const Ti = ChatStateTracker
export const W = CursorReactionTracker
export const as = ViewportCoverageTracker
export const bF = RenderTreeStalenessThresholdTracker
export const eO = MinViewportSharpnessTracker
export const l$ = SelectionChangeTracker
export const nc = MultiplayerUserCountTracker
export const q5 = GridResizingTracker
export const t8 = RenderTreeStaleTracker
export const vu = ZoomScaleTracker
export const vw = MouseMoveTracker
export const xV = UserTypingTracker
export const zF = ActiveStateTracker
