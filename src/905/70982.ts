import { reportError } from '../905/11'
import { createActionCreator } from '../905/73481'
import { handleOptimistTransactionWithError } from '../905/150006'
import { ServiceCategories } from '../905/165054'
import { createOptimistThunk } from '../905/350402'
import { sendWithRetry } from '../905/910117'

/**
 * Action creators for prototype-related actions.
 * Original variable names preserved in comments for traceability.
 */
export const prototypeSetPages = createActionCreator('PROTOTYPE_SET_PAGES') // $$b0
export const prototypeSetIsReconnecting = createActionCreator('PROTOTYPE_SET_IS_RECONNECTING') // $$f1
export const recentPrototypePost = createActionCreator('RECENT_PROTOTYPE_POST') // $$h2
export const prototypeHideComments = createActionCreator('PROTOTYPE_HIDE_COMMENTS') // $$E3
export const prototypeSetBackgroundColor = createActionCreator('PROTOTYPE_SET_BACKGROUND_COLOR') // $$A4
export const recentPrototypeUnmarkViewed = createActionCreator('RECENT_PROTOTYPE_UNMARK_VIEWED') // $$d5
export const prototypeShowOnlyMyComments = createActionCreator('PROTOTYPE_SHOW_ONLY_MY_COMMENTS') // $$v7
export const prototypeShowResolvedComments = createActionCreator('PROTOTYPE_SHOW_RESOLVED_COMMENTS') // $$I8
export const prototypeShowComments = createActionCreator('PROTOTYPE_SHOW_COMMENTS') // $$x9
export const prototypeReset = createActionCreator('PROTOTYPE_RESET') // $$S10
export const prototypeSetProgressBarMode = createActionCreator('PROTOTYPE_SET_PROGRESS_BAR_MODE') // $$_11
export const prototypeResetRecents = createActionCreator('PROTOTYPE_RESET_RECENTS') // $$p12
export const deleteRecentPrototype = createActionCreator('DELETE_RECENT_PROTOTYPE') // $$w13
export const restoreRecentPrototype = createActionCreator('RESTORE_RECENT_PROTOTYPE') // $$C16
export const prototypeSetCurrentPage = createActionCreator('PROTOTYPE_SET_CURRENT_PAGE') // $$y15
export const prototypeSetIsFooterVisible = createActionCreator('PROTOTYPE_SET_IS_FOOTER_VISIBLE') // $$g17

const recentPrototypeDelete = createActionCreator('RECENT_PROTOTYPE_DELETE') // m

/**
 * Removes a prototype from Recently Viewed.
 * @param store - Redux store
 * @param payload - Object containing fileKey and pageId
 */
export const removeRecentPrototypeViewed = createOptimistThunk((store, payload) => { // $$c14
  const requestPromise = sendWithRetry.del(`/api/files/${payload.fileKey}/prototype/view`, {
    page_id: payload.pageId,
  })
  handleOptimistTransactionWithError({
    requestPromise,
    fallbackError: 'An error occurred while removing this prototype from Recently Viewed.',
    store,
    next: store.dispatch,
    action: recentPrototypeDelete({
      fileKey: payload.fileKey,
      pageId: payload.pageId,
    }),
  })
  store.dispatch(recentPrototypeUnmarkViewed(payload))
})

/**
 * Marks a prototype as viewed.
 * @param store - Redux store
 * @param payload - Object containing fileKey and pageId
 */
export const markPrototypeViewed = createOptimistThunk((store, payload) => { // $$u6
  sendWithRetry.post(`/api/files/${payload.fileKey}/prototype/view`, {
    page_id: payload.pageId,
  }).then((response) => {
    if (!response.data.meta) {
      reportError(ServiceCategories.FRONTEND_PLATFORM, new Error('prototype/view response missing data.meta'), {
        extra: {
          fileKey: payload.fileKey,
          pageId: payload.pageId,
          responseType: response.responseType,
          contentType: response.contentType,
        },
      })
      return
    }
    store.dispatch(recentPrototypePost({
      prototype: response.data.meta,
    }))
  }).catch(() => { })
})

// Export aliases for backward compatibility with original names
export const $9 = prototypeSetPages
export const AF = prototypeSetIsReconnecting
export const Am = recentPrototypePost
export const BZ = prototypeHideComments
export const Mo = prototypeSetBackgroundColor
export const Q4 = recentPrototypeUnmarkViewed
export const Q9 = markPrototypeViewed
export const RO = prototypeShowOnlyMyComments
export const U3 = prototypeShowResolvedComments
export const _b = prototypeShowComments
export const cL = prototypeReset
export const ku = prototypeSetProgressBarMode
export const q0 = prototypeResetRecents
export const sM = deleteRecentPrototype
export const tl = removeRecentPrototypeViewed
export const uh = prototypeSetCurrentPage
export const xY = restoreRecentPrototype
export const y3 = prototypeSetIsFooterVisible
