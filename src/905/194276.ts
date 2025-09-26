import { Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { createActionCreator } from '../905/73481'
import { resolveMessage } from '../905/231762'
import { trackAuthEvent } from '../905/248178'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { FlashActions } from '../905/573154'
import { customHistory } from '../905/612521'
import { setupLoadingStateHandler } from '../905/696711'
import { AuthFlowStep } from '../905/862321'
import { sendWithRetry } from '../905/910117'
/**
 * Auth Action Creators and Thunks
 * Refactored for clarity and maintainability.
 * Original variable names are preserved in comments for traceability.
 */

/**
 * Auth Action Types
 */
export const AUTH_INIT = createActionCreator('AUTH_INIT') // $$m22
export const AUTH_SET_AUTH_LOADING = createActionCreator('AUTH_SET_AUTH_LOADING') // $$h30
export const AUTH_CLEAR_AUTH_LOADING = createActionCreator('AUTH_CLEAR_AUTH_LOADING') // $$g9
export const AUTH_SIGN_IN = createActionCreator('AUTH_SIGN_IN') // $$f11
export const AUTH_SIGN_UP = createActionCreator('AUTH_SIGN_UP') // $$_8
export const AUTH_RESET_PASSWORD = createActionCreator('AUTH_RESET_PASSWORD') // $$A36
export const AUTH_SEND_EMAIL_SAML_START = createActionCreator('AUTH_SEND_EMAIL_SAML_START') // $$y12
export const AUTH_UPDATE_FORM = createActionCreator('AUTH_UPDATE_FORM') // $$b15
export const SET_MINIMAL_MFA_USER = createActionCreator('SET_MINIMAL_MFA_USER') // $$v33
export const AUTH_SEND_PASSWORD_RESET = createActionCreator('AUTH_SEND_PASSWORD_RESET') // $$x28
export const AUTH_SHOW_ERROR = createActionCreator('AUTH_SHOW_ERROR') // $$S19
export const AUTH_CLEAR_ERROR = createActionCreator('AUTH_CLEAR_ERROR') // $$w5
export const AUTH_COMPLETE = createActionCreator('AUTH_COMPLETE') // $$C14
export const AUTH_CHANGE_EMAIL = createActionCreator('AUTH_CHANGE_EMAIL') // $$T2
export const AUTH_CLICKED_SAML_SIGN_IN = createActionCreator('AUTH_CLICKED_SAML_SIGN_IN') // $$k20
export const AUTH_CHANGE_NAME = createActionCreator('AUTH_CHANGE_NAME') // $$R32
export const AUTH_TOGGLE_SMS = createActionCreator('AUTH_TOGGLE_SMS') // $$N10
export const AUTH_REQUIRE_TWO_FACTOR = createActionCreator('AUTH_REQUIRE_TWO_FACTOR') // $$P13
export const AUTH_SET_HINT = createActionCreator('AUTH_SET_HINT') // $$O31
export const AUTH_CHANGE_JOB = createActionCreator('AUTH_CHANGE_JOB') // $$D29
export const AUTH_CHANGE_USAGE_PURPOSE = createActionCreator('AUTH_CHANGE_USAGE_PURPOSE') // $$L4
export const AUTH_CHANGE_OPT_IN_EMAIL = createActionCreator('AUTH_CHANGE_OPT_IN_EMAIL') // $$F24
export const AUTH_SET_GOOGLE_ID_TOKEN = createActionCreator('AUTH_SET_GOOGLE_ID_TOKEN') // $$M17
export const AUTH_SET_SSO_METHOD = createActionCreator('AUTH_SET_SSO_METHOD') // $$j16
export const AUTH_SET_GOOGLE_TOKEN_TYPE = createActionCreator('AUTH_SET_GOOGLE_TOKEN_TYPE') // $$U27
export const AUTH_SAML_START_FROM_SESSION = createActionCreator('AUTH_SAML_START_FROM_SESSION') // $$B1
export const AUTH_EMAIL_ONLY = createActionCreator('AUTH_EMAIL_ONLY') // $$V0
export const AUTH_REDEEM = createActionCreator('AUTH_REDEEM') // $$G35
export const AUTH_REDEEM_RESET = createActionCreator('AUTH_REDEEM_RESET') // $$z7
export const AUTH_SET_REDIRECT_URL = createActionCreator('AUTH_SET_REDIRECT_URL') // $$H23
export const AUTH_SET_SIGNUP_SOURCE = createActionCreator('AUTH_SET_SIGNUP_SOURCE') // $$K18
export const AUTH_GOOGLE_SIGNUP = createActionCreator('AUTH_GOOGLE_SIGNUP') // $$Y21
export const AUTH_SET_ORIGIN = createActionCreator('AUTH_SET_ORIGIN') // $$q26

/**
 * Thunk: Change Auth Form State
 * @param e - Redux store
 * @param t - New form state
 */
export const changeAuthFormState = createOptimistThunk((e, t) => {
  // $$I3
  trackAuthEvent('change_form_state', e.getState().auth.origin, {
    oldFormState: e.getState().auth.formState,
    newFormState: t.formState,
  }, {
    forwardToDatadog: true,
  })
  e.dispatch(AUTH_UPDATE_FORM(t))
})

/**
 * Thunk: Start SAML Email Verification
 * @param e - Redux store
 * @param userId - User ID
 */
export const startSamlEmailVerification = createOptimistThunk((e, { userId }) => {
  // $$$$E6
  sendWithRetry.defaults.headers = {
    ...sendWithRetry.defaults.headers,
    'X-Figma-User-ID': userId,
  }
  customHistory.replace(`/verify?fuid=${userId}`, null)
  e.dispatch(changeAuthFormState({
    formState: AuthFlowStep.VALIDATE_EMAIL,
    userId,
  }))
})

/**
 * Thunk: Redeem Team Join Link
 * @param e - Redux store
 * @param token - Join token
 * @param userId - User ID
 * @param loadingKey - Loading state key
 */
export const redeemTeamJoinLink = createOptimistThunk((e, { token, userId }, { loadingKey }) => {
  // $$W34
  let headers = sendWithRetry.defaults.headers
  if (userId) {
    headers = {
      ...sendWithRetry.defaults.headers,
      'X-Figma-User-ID': userId,
    }
  }
  const request = sendWithRetry.post('/api/team_join_link/redeem', { token }, { headers })
  setupLoadingStateHandler(request, e, loadingKey)
  request.then(({ data }) => {
    if (data && data.meta)
      return redirectAfterRedeem(data.meta.redirect_target)
  }).catch((error) => {
    console.error(error)
    const message = resolveMessage(error, getI18nString('auth.team_join_link.error_on_redeem'))
    return e.dispatch(FlashActions.error(message))
  })
})

/**
 * Redirect after redeeming team join link
 * @param url - Redirect URL
 * @param isTeams - Is MS Teams
 */
export async function redirectAfterRedeem(url: string, isTeams?: boolean) {
  // $$$25
  await sendWithRetry.post('/api/session/clear_cont').catch(() => { })
  if (isTeams) {
    customHistory.unsafeRedirectMsTeams(url)
  }
  else {
    customHistory.redirect(url)
  }
}

/**
 * Exported action/thunk aliases for compatibility
 */
export const $j = AUTH_EMAIL_ONLY
export const AP = AUTH_SAML_START_FROM_SESSION
export const BZ = AUTH_CHANGE_EMAIL
export const E = changeAuthFormState
export const EM = AUTH_CHANGE_USAGE_PURPOSE
export const ET = AUTH_CLEAR_ERROR
export const Em = startSamlEmailVerification
export const GG = AUTH_REDEEM_RESET
export const Hh = AUTH_SIGN_UP
export const I$ = AUTH_CLEAR_AUTH_LOADING
export const IY = AUTH_TOGGLE_SMS
export const Jv = AUTH_SIGN_IN
export const KS = AUTH_SEND_EMAIL_SAML_START
export const LP = AUTH_REQUIRE_TWO_FACTOR
export const My = AUTH_COMPLETE
export const ND = AUTH_UPDATE_FORM
export const NX = AUTH_SET_SSO_METHOD
export const OZ = AUTH_SET_GOOGLE_ID_TOKEN
export const QS = AUTH_SET_SIGNUP_SOURCE
export const Qg = AUTH_SHOW_ERROR
export const Re = AUTH_CLICKED_SAML_SIGN_IN
export const Sr = AUTH_GOOGLE_SIGNUP
export const Ts = AUTH_INIT
export const WY = AUTH_SET_REDIRECT_URL
export const bA = AUTH_CHANGE_OPT_IN_EMAIL
export const dB = redirectAfterRedeem
export const dl = AUTH_SET_ORIGIN
export const fX = AUTH_SET_GOOGLE_TOKEN_TYPE
export const hE = AUTH_SEND_PASSWORD_RESET
export const i_ = AUTH_CHANGE_JOB
export const kL = AUTH_SET_AUTH_LOADING
export const kQ = AUTH_SET_HINT
export const m9 = AUTH_CHANGE_NAME
export const n4 = SET_MINIMAL_MFA_USER
export const qw = redeemTeamJoinLink
export const v$ = AUTH_REDEEM
export const xw = AUTH_RESET_PASSWORD
