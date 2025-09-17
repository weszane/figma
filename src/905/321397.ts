import { createActionCreator } from '../905/73481'
import { createOptimistThunk } from '../905/350402'
import { getUserOrAnonymousId } from '../905/506024'

/**
 * Action creator for adding a template to recents with user ID.
 * (original: $$s2)
 */
export const addTemplateToRecentsWithUserId = createActionCreator('ADD_TEMPLATE_TO_RECENTS_WITH_USER_ID')

/**
 * Thunk for adding a template to recents, including user ID.
 * (original: $$o0)
 */
export const addTemplateToRecentsThunk = createOptimistThunk(({ dispatch, getState }, payload) => {
  const state = getState()
  const userId = getUserOrAnonymousId(state)
  dispatch(addTemplateToRecentsWithUserId({
    ...payload,
    userId,
  }))
})

/**
 * Action creator for setting recent templates.
 * (original: $$l1)
 */
export const setRecentTemplates = createActionCreator('SET_RECENT_TEMPLATES')
export const Hx = addTemplateToRecentsThunk
export const nM = setRecentTemplates
export const pj = addTemplateToRecentsWithUserId
