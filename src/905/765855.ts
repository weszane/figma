import { createActionCreator } from '../905/73481'
import { PositionEnum, StatusEnum } from '../905/129884'
import { createOptimistThunk } from '../905/350402'
import { PluginInstanceManager } from '../905/696438'
import { PluginIframeMode } from '../905/968269'

// Action creators for tooltip management
export const setTargetRef = createActionCreator('TOOLTIP_SET_TARGET_REF')
export const updateTooltip = createActionCreator('TOOLTIP_UPDATE')

/**
 * Updates the tooltip state by dispatching the update action.
 * Original: c
 * @param dispatch - Redux dispatch function
 * @param getState - Redux getState function
 * @param tooltipState - The new tooltip state to update
 */
export const updateTooltipState = createOptimistThunk((context, tooltipState) => {
  const state = context.getState()
  if (state.tooltip.timeoutID !== null && state.tooltip.timeoutID !== tooltipState.tooltip.timeoutID) {
    clearTimeout(state.tooltip.timeoutID)
  }
  context.dispatch(updateTooltip(tooltipState))
})

/**
 * Clears the timeout ID in the tooltip state.
 * Original: $$u4
 * @param dispatch - Redux dispatch function
 * @param getState - Redux getState function
 */
export const clearTimeoutID = createOptimistThunk(({ dispatch, getState }) => {
  const state = getState()
  dispatch(updateTooltipState({
    tooltip: {
      ...state.tooltip,
      timeoutID: null,
    },
  }))
})

/**
 * Sets a timeout to hide the tooltip if no timeout is active.
 * Original: $$p0
 * @param dispatch - Redux dispatch function
 * @param getState - Redux getState function
 * @param timeoutDelay - Delay in milliseconds
 */
export const setTimeoutID = createOptimistThunk(({ dispatch, getState }, { timeoutDelay }) => {
  const state = getState()
  if (state.tooltip.timeoutID === null) {
    const timeoutID = setTimeout(() => {
      dispatch(hideTooltip())
    }, timeoutDelay)
    dispatch(updateTooltipState({
      tooltip: {
        ...state.tooltip,
        timeoutID,
      },
    }))
  }
})

/**
 * Hides the tooltip and resets its state.
 * Original: $$m3
 * @param dispatch - Redux dispatch function
 */
export const hideTooltip = createOptimistThunk(({ dispatch }) => {
  updatePluginState(false)
  dispatch(updateTooltipState({
    tooltip: {
      state: StatusEnum.NONE,
      position: PositionEnum.BELOW,
      target: null,
      targetRect: undefined,
      timeoutID: null,
      interactive: false,
    },
  }))
})

/**
 * Shows the tooltip with the provided parameters.
 * Original: $$h1
 * @param dispatch - Redux dispatch function
 * @param tooltipParams - Parameters for the tooltip
 */
export const showTooltip = createOptimistThunk(({ dispatch }, tooltipParams) => {
  updatePluginState(true)
  dispatch(updateTooltipState({
    tooltip: {
      state: StatusEnum.SHOWING,
      position: tooltipParams.position,
      target: tooltipParams.target,
      tipAlign: tooltipParams.tipAlign,
      targetRect: tooltipParams.targetRect,
      timeoutID: null,
      maxWidth: tooltipParams.maxWidth,
      maxLines: tooltipParams.maxLines,
      interactive: tooltipParams.interactive,
      lightMode: tooltipParams.lightMode,
      textAlign: tooltipParams.textAlign,
      hideImmediately: tooltipParams.hideImmediately,
      hideAfterDelay: tooltipParams.hideAfterDelay,
    },
  }))
})

/**
 * Updates the plugin state for pointer events.
 * Original: g
 * @param stopPointerEvents - Whether to stop pointer events
 */
export function updatePluginState(stopPointerEvents: boolean) {
  PluginInstanceManager.instance[PluginIframeMode.INSPECT]?.updateState({
    stopPointerEvents,
  })
  PluginInstanceManager.instance[PluginIframeMode.MODAL]?.updateState({
    stopPointerEvents,
  })
}

/**
 * Shows the tooltip after a delay.
 * Original: $$f6
 * @param dispatch - Redux dispatch function
 * @param getState - Redux getState function
 * @param tooltipParams - Parameters including timeoutDelay
 */
export const showTooltipWithDelay = createOptimistThunk(({ dispatch }, tooltipParams) => {
  const timeoutID = setTimeout(() => {
    dispatch(showTooltip({
      target: tooltipParams.target,
      targetRect: tooltipParams.targetRect,
      position: tooltipParams.position,
      tipAlign: tooltipParams.tipAlign,
      maxWidth: tooltipParams.maxWidth,
      maxLines: tooltipParams.maxLines,
      interactive: tooltipParams.interactive,
      lightMode: tooltipParams.lightMode,
      textAlign: tooltipParams.textAlign,
      hideImmediately: tooltipParams.hideImmediately,
      hideAfterDelay: tooltipParams.hideAfterDelay,
    }))
  }, tooltipParams.timeoutDelay)
  dispatch(updateTooltipState({
    tooltip: {
      state: StatusEnum.PENDING,
      position: tooltipParams.position,
      tipAlign: tooltipParams.tipAlign,
      target: tooltipParams.target,
      targetRect: tooltipParams.targetRect,
      timeoutID,
      maxWidth: tooltipParams.maxWidth,
      maxLines: tooltipParams.maxLines,
      interactive: tooltipParams.interactive,
      lightMode: tooltipParams.lightMode,
      textAlign: tooltipParams.textAlign,
      hideImmediately: tooltipParams.hideImmediately,
      hideAfterDelay: tooltipParams.hideAfterDelay,
    },
  }))
})

// Exported constants with meaningful names (refactored from originals)
export const ac = setTimeoutID
export const eB = showTooltip
export const fW = updateTooltip
export const jD = hideTooltip
export const kA = clearTimeoutID
export const pP = setTargetRef
export const xE = showTooltipWithDelay
