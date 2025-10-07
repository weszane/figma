import { debugState } from "../905/407919"
import { isVotingSessionJoined } from "../905/486443"
import { FEditorType } from "../figma_app/53721"
import { startChattingThunk, stopChattingThunk, toggleEmojiWheelThunk, updateEmojiWheelPosition } from "../figma_app/308685"
import { fetchCursorChatDisabledStatus } from "../figma_app/403368"
import { Fullscreen } from "../figma_app/763686"
/**
 * Type definitions for emoji wheel functionality
 */
interface EmojiWheelPosition {
  x: number
  y: number
}

interface EmojiWheelOptions {
  viewportX: number
  viewportY: number
  source: string
  openedViaHover?: boolean
  wheelType?: string
}

type TriggerActiveWheelButtonListener = (position: EmojiWheelPosition) => void

/**
 * Manager class for handling emoji wheel interactions and chat functionality
 * Originally: class c
 */
class EmojiWheelManager {
  private _wheelActivatedAtMs: number = -1
  private _triggerActiveWheelButtonListeners: TriggerActiveWheelButtonListener[] = []

  /**
   * Starts a chat session at the specified position
   * Originally: startChat
   */
  startChat = (x: number, y: number, source: string): void => {
    fetchCursorChatDisabledStatus().then((isDisabled) => {
      if (isDisabled)
        return

      debugState.dispatch(startChattingThunk({
        position: { x, y },
        source,
      }))
    })
  }

  /**
   * Closes the emoji wheel
   * Originally: closeWheel
   */
  closeWheel = (): void => {
    debugState.dispatch(stopChattingThunk())
  }

  /**
   * Handles shortcut press with specific wheel type
   * Originally: handleShortcutPressWithType
   */
  handleShortcutPressWithType = ({
    viewportX,
    viewportY,
    source,
    openedViaHover,
    wheelType,
  }: EmojiWheelOptions): void => {
    const currentState = debugState.getState()

    // Early return guard clauses
    if (!this._isValidViewState(currentState))
      return
    if (this._wheelActivatedAtMs > 0)
      return

    this._wheelActivatedAtMs = window.performance.now()

    const multiplayerEmoji = currentState.multiplayerEmoji
    let finalX = viewportX
    let finalY = viewportY
    let finalOpenedViaHover = openedViaHover

    if (multiplayerEmoji.type === "WHEEL") {
      finalX = multiplayerEmoji.viewportX
      finalY = multiplayerEmoji.viewportY
      finalOpenedViaHover = openedViaHover ?? multiplayerEmoji.openedViaHover
    }
    else if (!openedViaHover) {
      Fullscreen?.triggerAction("set-tool-default", null)
    }

    this._dispatchToggleEmojiWheel(currentState, {
      wheelType: this._normalizeWheelType(wheelType),
      viewportX: finalX,
      viewportY: finalY,
      source,
      openedViaHover: finalOpenedViaHover,
    })
  }

  /**
   * Handles shortcut press without specific wheel type
   * Originally: handleShortcutPress
   */
  handleShortcutPress = (x: number, y: number, source: string): void => {
    this.handleShortcutPressWithType({
      viewportX: x,
      viewportY: y,
      source,
    })
  }

  /**
   * Adds a listener for active wheel button triggers
   * Originally: addTriggerActiveWheelButtonListener
   */
  addTriggerActiveWheelButtonListener = (listener: TriggerActiveWheelButtonListener): void => {
    this._triggerActiveWheelButtonListeners.push(listener)
  }

  /**
   * Removes a listener for active wheel button triggers
   * Originally: removeTriggerActiveWheelButtonListener
   */
  removeTriggerActiveWheelButtonListener = (listener: TriggerActiveWheelButtonListener): void => {
    const index = this._triggerActiveWheelButtonListeners.indexOf(listener)
    if (index >= 0) {
      this._triggerActiveWheelButtonListeners.splice(index, 1)
    }
  }

  /**
   * Handles shortcut release and triggers listeners if conditions are met
   * Originally: handleShortcutRelease
   */
  handleShortcutRelease = (x: number, y: number): void => {
    if (this._wheelActivatedAtMs < 0)
      return

    const activationDuration = window.performance.now() - this._wheelActivatedAtMs
    this._wheelActivatedAtMs = -1

    if (activationDuration > 300) {
      this._notifyTriggerListeners({ x, y })
    }
  }

  /**
   * Updates the emoji wheel position if in valid state
   * Originally: updateEmojiWheelPosition
   */
  updateEmojiWheelPosition = (x: number, y: number): void => {
    const currentState = debugState.getState()

    if (this._isValidViewState(currentState)) {
      debugState.dispatch(updateEmojiWheelPosition({
        viewportX: x,
        viewportY: y,
      }))
    }
  }

  /**
   * Private helper to check if current view state is valid for emoji wheel operations
   */
  private _isValidViewState = (state: any): boolean => {
    return state.selectedView.view === "fullscreen"
      && state.selectedView.editorType === FEditorType.Whiteboard
  }

  /**
   * Private helper to normalize wheel type
   */
  private _normalizeWheelType = (wheelType?: string): string | undefined => {
    if (!wheelType)
      return undefined
    return wheelType === "STAMP" ? "STAMP2" : "REACTION1"
  }

  /**
   * Private helper to dispatch toggle emoji wheel action
   */
  private _dispatchToggleEmojiWheel = (state: AppState, options: {
    wheelType?: string
    viewportX: number
    viewportY: number
    source: string
    openedViaHover?: boolean
  }): void => {
    debugState.dispatch(toggleEmojiWheelThunk({
      wheelType: options.wheelType,
      isReadonly: state.mirror.appModel.isReadOnly,
      isJoinedToActiveVotingSession: isVotingSessionJoined(state),
      viewportX: options.viewportX,
      viewportY: options.viewportY,
      source: options.source,
      openedViaHover: options.openedViaHover,
    }))
  }

  /**
   * Private helper to notify all trigger listeners
   */
  private _notifyTriggerListeners = (position: EmojiWheelPosition): void => {
    for (const listener of this._triggerActiveWheelButtonListeners) {
      listener(position)
    }
  }
}

// Global instance management
export let emojiWheelManagerInstance: EmojiWheelManager // Originally: $$n0

/**
 * Initializes the global emoji wheel manager instance
 * Originally: $$u1
 */
export function initializeEmojiWheelManager(): void {
  emojiWheelManagerInstance = new EmojiWheelManager()
}

// Exported aliases for backward compatibility
export const CB = emojiWheelManagerInstance // Originally: CB = $$n0
export const eY = initializeEmojiWheelManager // Originally: eY = $$u1
