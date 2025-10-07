import { createActionCreator } from '../905/73481'
import { createOptimistThunk } from '../905/350402'
import { multiplayerSessionManager } from '../905/977824'
import { trackFileEvent } from '../figma_app/314264'
import { fetchCursorChatDisabledStatus } from '../figma_app/403368'
import { DesignGraphElements, Fullscreen } from '../figma_app/763686'

/**
 * Action creators for multiplayer emoji events.
 * Original variable names preserved in exports for traceability.
 */

/**
 * Creates an action to update the emoji wheel position.
 * @see $$d6
 */
export const updateEmojiWheelPosition = createActionCreator('MULTIPLAYER_EMOJI_UPDATE_EMOJI_WHEEL_POSITION')

/**
 * Creates an action to clear the emoji state.
 * @see $$c2
 */
export const clearEmojiState = createActionCreator('MULTIPLAYER_EMOJI_CLEAR_STATE')

/**
 * Optimist thunk to stop chatting and clear emoji state.
 * @see $$u1
 */
export const stopChattingThunk = createOptimistThunk(({ dispatch }) => {
  Fullscreen?.setIsInCursorChat(false)
  dispatch(clearEmojiState())
})

/**
 * Creates an action to start chatting.
 * @see $$p9
 */
export const startChattingAction = createActionCreator('MULTIPLAYER_EMOJI_START_CHATTING')

/**
 * Optimist thunk to start chatting, set tool if needed, and track event.
 * @see $$_0
 */
export const startChattingThunk = createOptimistThunk(async ({ dispatch, getState }, payload) => {
  const state = getState() as AppState
  const appModel = state.mirror?.appModel // Assumed context for currentTool
  const currentTool = appModel?.currentTool
  const isDefaultTool = ![DesignGraphElements.HAND, DesignGraphElements.SELECT, DesignGraphElements.HAND_SELECT].includes(currentTool)
  if (isDefaultTool) {
    Fullscreen?.triggerAction('set-tool-default', null)
  }
  const chatDisabled = await fetchCursorChatDisabledStatus()
  if (!chatDisabled) {
    Fullscreen?.setIsInCursorChat(true)
    trackFileEvent('Started chatting', state?.openFile?.key, state, {
      source: payload.source,
    })
  }
  dispatch(startChattingAction(payload))
})

/**
 * Creates an action to stop reacting.
 * @see $$h5
 */
export const stopReactingAction = createActionCreator('MULTIPLAYER_EMOJI_STOP_REACTING')

/**
 * Creates an action to start reacting.
 * @see $$m3
 */
export const startReactingAction = createActionCreator('MULTIPLAYER_EMOJI_START_REACTING')

/**
 * Optimist thunk to reset reactions and start reacting.
 * @see $$g8
 */
export const startReactingThunk = createOptimistThunk(({ dispatch }, payload) => {
  multiplayerSessionManager.resetReactions()
  dispatch(startReactingAction(payload))
})

/**
 * Creates an action to toggle the emoji wheel.
 * @see $$f4
 */
export const toggleEmojiWheelAction = createActionCreator('MULTIPLAYER_EMOJI_TOGGLE_EMOJI_WHEEL')

/**
 * Optimist thunk to track toggling emoji wheel and dispatch action.
 * @see $$E7
 */
export const toggleEmojiWheelThunk = createOptimistThunk(({ dispatch, getState }, payload) => {
  const state = getState() as AppState
  trackFileEvent('Toggled emoji wheel', state?.openFile?.key, state, {
    wheelType: payload.wheelType,
    ...(payload.source && { source: payload.source }),
  })
  dispatch(toggleEmojiWheelAction(payload))
})

// Export with original variable names for traceability
export const F6 = startChattingThunk
export const Ho = stopChattingThunk
export const K6 = clearEmojiState
export const PU = startReactingAction
export const V9 = toggleEmojiWheelAction
export const mu = stopReactingAction
export const sm = updateEmojiWheelPosition
export const sp = toggleEmojiWheelThunk
export const wE = startReactingThunk
export const yc = startChattingAction
