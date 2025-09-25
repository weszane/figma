import type { OptimistThunkContext } from '../905/350402'
import { createActionCreator } from '../905/73481'
import { resolveMessage } from '../905/231762'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { ErrorEnum } from '../905/962579'
import { getInitialOptions } from '../figma_app/169182'

/**
 * Types for flash messages and actions
 */
interface FlashMessage {
  message: string
  status: ErrorEnum
  timeout?: number
  id: number
}

interface FlashInitOptions {
  error?: string | { i18n: string, fallback_text?: string }
  warn?: string | { i18n: string, fallback_text?: string }
  success?: string | { i18n: string, fallback_text?: string }
}

/**
 * Utility to resolve message from string or i18n object
 * @param input - string or i18n object
 * @returns resolved message string
 * (original: u)
 */
function resolveFlashMessage(input: string | { i18n: string, fallback_text?: string }): string {
  if (typeof input === 'string')
    return input
  return resolveMessage(
    { data: { i18n: input.i18n } },
    input.fallback_text,
  )
}

// First define the action creators
export const flashAddAction = createActionCreator('FLASH_ADD')
export const flashRemoveAction = createActionCreator('FLASH_REMOVE')
export const flashRemoveAllAction = createActionCreator('FLASH_REMOVE_ALL')

// Forward declare FlashActions to avoid circular reference issues

/**
 * Handles adding/removing flash messages with timeout
 * (original: p)
 */
export const handleFlash = createOptimistThunk<FlashMessage, number>(
  /**
   * @param context - OptimistThunkContext
   * @param flash - FlashMessage
   * @returns flashId
   */
  (context: OptimistThunkContext, flash: FlashMessage) => {
    const state = context.getState()
    // Remove duplicate flash
    for (const key in state.flashes) {
      const existing = state.flashes[key]
      if (existing.message === flash.message && existing.status === flash.status) {
        context.dispatch(flashRemoveAction({ id: parseInt(key) }))
        break
      }
    }
    const flashId = flash.id
    setTimeout(() => {
      context.dispatch(flashRemoveAction({ id: flashId }))
    }, flash.timeout && flash.timeout > 3000 ? flash.timeout : 3000)
    context.dispatch(flashAddAction(flash))
    return flashId
  },
)

// Now define FlashActions properly
export const FlashActions = {
  add: flashAddAction,
  remove: flashRemoveAction,
  removeAll: flashRemoveAllAction,
  TIMEOUT: 3000,
  TIMEOUT_SERVER_SIDE: 6000,

  /**
   * Initializes flash messages from initial options
   * (original: init)
   */
  init: createOptimistThunk<void, void>(
    /**
     * @param context - OptimistThunkContext
     */
    (context: OptimistThunkContext) => {
      const options: FlashInitOptions = getInitialOptions().flash
      if (!options)
        return
      if (options.error) {
        context.dispatch(FlashActions.error(resolveFlashMessage(options.error), FlashActions.TIMEOUT_SERVER_SIDE))
      }
      else if (options.warn) {
        context.dispatch(FlashActions.flash(resolveFlashMessage(options.warn), FlashActions.TIMEOUT_SERVER_SIDE))
      }
      else if (options.success) {
        context.dispatch(FlashActions.flash(resolveFlashMessage(options.success), FlashActions.TIMEOUT_SERVER_SIDE))
      }
    },
  ),

  /**
   * Dispatches a default flash message
   * (original: flash)
   */
  flash: (message: string, timeout?: number) => {
    return handleFlash({
      message,
      status: ErrorEnum.DEFAULT,
      timeout,
      id: FlashActions._nextId(),
    })
  },

  /**
   * Dispatches an error flash message
   * (original: error)
   */
  error: (message: string, timeout?: number) => {
    return handleFlash({
      message,
      status: ErrorEnum.ERROR,
      timeout,
      id: FlashActions._nextId(),
    })
  },

  /**
   * Internal counter for flash IDs
   */
  _counter: 0,
  _nextId: () => FlashActions._counter++,
}

/**
 * Handles promise errors and dispatches error flash
 * (original: $$m0)
 */
export const handlePromiseError = createOptimistThunk((context, { promise, fallbackError }) => {
    promise.catch(({ response }) => {
      try {
        const parsed = JSON.parse(response)
        const msg = resolveMessage(
          { ...parsed, data: { ...parsed.data, i18n: parsed.i18n } },
          parsed.message,
        )
        context.dispatch(FlashActions.error(msg))
      }
      catch {
        context.dispatch(FlashActions.error(fallbackError || getI18nString('general.an_error_occurred_while_performing_that_action')))
      }
    })
  },
)

export const Q = handlePromiseError // original: $$m0
export const s = FlashActions // original: $$n1
