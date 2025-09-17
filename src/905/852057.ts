import { createActionCreator } from '../905/73481'
import { maybeCreateSavepoint } from '../905/294113'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { handlePromiseError } from '../905/573154'

/**
 * Creates an optimist thunk for saving a file savepoint.
 * Dispatches an error if the savepoint cannot be created (must be online).
 * Original variable: $$o1
 */
export const savepointOptimistThunk = createOptimistThunk((context, payload) => {
  const savepointPromise = maybeCreateSavepoint(
    payload.fileKey,
    payload.label,
    payload.description,
    context.dispatch,
  )
  context.dispatch(
    handlePromiseError({
      promise: savepointPromise,
      fallbackError: getI18nString('file_browser.file_browser_actions.must_be_online_to_save_version'),
    }),
  )
})

/**
 * Action creator for updating file savepoint.
 * Original variable: $$l0
 */
export const fileUpdateSavepointAction = createActionCreator('FILE_UPDATE_SAVEPOINT')

// Refactored exports for clarity and maintainability
export const D = fileUpdateSavepointAction
export const m = savepointOptimistThunk
