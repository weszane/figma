import { createActionCreator } from '../905/73481'
import { preloadModal } from '../905/102752'
import { createOptimistThunk } from '../905/350402'

/**
 * Action creator for showing a modal.
 * @see $$c0
 */
export const showModal = createActionCreator('SHOW_MODAL')

/**
 * Action creator for hiding a modal.
 * @see $$u2
 */
export const hideModal = createActionCreator('HIDE_MODAL')

/**
 * Action creator for hiding a specific modal.
 * @see $$m3
 */
export const hideSpecificModal = createActionCreator('HIDE_SPECIFIC_MODAL')

/**
 * Action creator for updating a modal.
 * @see $$h7
 */
export const updateModal = createActionCreator('UPDATE_MODAL')

/**
 * Action creator for popping the modal stack.
 * @see $$g4
 */
export const popModalStack = createActionCreator('POP_MODAL_STACK')

/**
 * Action creator for popping the previous modal.
 * @see $$f6
 */
export const popPrevModal = createActionCreator('POP_PREV_MODAL')

/**
 * Optimist thunk for showing a modal after preloading.
 * @see s
 */
export const showModalWithPreload = createOptimistThunk(
  async (dispatchApi, [modalPayload, preloadPromise]) => {
    await preloadPromise
    dispatchApi.dispatch(showModal(modalPayload))
  },
)

/**
 * Helper to build modal payload from input.
 * @param e - Modal input
 * @returns Modal payload
 */
function buildModalPayload(e: any) {
  return {
    type: typeof e.type === 'string' ? e.type : e.type.type,
    data: e.data || {},
    optOutOfPrevModal: e.optOutOfPrevModal,
    ...(e.showModalsBeneath && { showModalsBeneath: e.showModalsBeneath }),
    ...(e.prevModal && { prevModal: e.prevModal }),
  }
}

/**
 * Show modal, preloading if necessary.
 * @see $$o8
 * @param e - Modal input
 */
export function showModalHandler(e: any) {
  const modalPayload = buildModalPayload(e)
  const preloadPromise = preloadModal(modalPayload.type)
  return preloadPromise ? showModalWithPreload([modalPayload, preloadPromise]) : showModal(modalPayload)
}

/**
 * Hide modal.
 * @see $$l1
 */
export function hideModalHandler() {
  return hideModalThunk()
}

/**
 * Optimist thunk for hiding or showing modal based on state.
 * @see p
 */
export const hideOrShowModalThunk = createOptimistThunk((dispatchApi, modalPayload) => {
  const state = dispatchApi.getState()
  const shownModalType = state.modalShown?.type
  if (shownModalType === modalPayload.type) {
    dispatchApi.dispatch(hideModal())
    return
  }
  if (state.modalShown) {
    dispatchApi.dispatch(hideModal())
  }
  dispatchApi.dispatch(showModal(modalPayload))
})

/**
 * Hide modal thunk.
 * @see $$u2
 */
export function hideModalThunk() {
  return hideModal()
}

/**
 * Show modal with conditional logic.
 * @see $$d5
 * @param e - Modal input
 */
export function showModalConditional(e: any) {
  return hideOrShowModalThunk(buildModalPayload(e))
}

// Exported names refactored to match new function/variable names
export const $O = showModal
export const AS = hideModalHandler
export const Ce = hideModal
export const ES = hideSpecificModal
export const Lo = popModalStack
export const YK = showModalConditional
export const aZ = popPrevModal
export const hm = updateModal
export const to = showModalHandler
