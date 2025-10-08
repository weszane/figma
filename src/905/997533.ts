import { _G } from "../905/164233"
import { AUTH_COMPLETE, AUTH_REQUIRE_TWO_FACTOR, AUTH_SET_HINT, AUTH_SET_REDIRECT_URL, AUTH_SHOW_ERROR, AUTH_TOGGLE_SMS, changeAuthFormState, startSamlEmailVerification } from "../905/194276"
import { resolveMessage } from "../905/231762"
import { trackAuthEvent } from "../905/248178"
import { trackPasskeySupport } from "../905/300815"
import { getI18nString } from "../905/303541"
import { createOptimistThunk } from "../905/350402"
import { trackEventAnalytics } from "../905/449184"
import { FlashActions } from "../905/573154"
import { getFeatureFlags } from "../905/601108"
import { customHistory } from "../905/612521"
import { parseQuery } from "../905/634134"
import { TrackingKeyEnum } from "../905/696396"
import { IpcStorageHandler } from "../905/724705"
import { AuthErrorCode, AuthField, AuthFlowStep } from "../905/862321"
import { extractFormValues } from "../905/897919"
import { sendWithRetry } from "../905/910117"
import { atomStoreManager } from "../figma_app/27355"
import { getInitialOptions } from "../figma_app/169182"
import { createNoOpValidator } from "../figma_app/181241"
import { isValidEmail } from "../figma_app/416935"
import { Rg } from "../figma_app/827447"
import { stringToUint8Array } from "../figma_app/930338"
// Origin: /Users/allen/github/fig/src/905/997533.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments, improved readability, noted assumed dependencies.

// Assumed external dependencies: imported modules (see import statements above).

// Type definitions for auth-related data structures
interface AuthMethodsResponse {
  data: {
    reason?: any
    message?: string
    meta?: {
      id?: string
      email?: string
      phone_number?: string
      available_methods: string[]
      [key: string]: any
    }
  }
  status?: number
}

interface AuthFormValues {
  email?: string
  password?: string
  name?: string
}

interface AuthErrorPayload {
  message: string
  errorType?: AuthErrorCode
  invalidInput?: AuthField | null
}

interface SmsRecoverPayload {
  name?: string
  token?: string
  token_type?: string
  google_fed_cm_enabled?: boolean
  [key: string]: any
}

// AuthOptionsValidator wrapper class
class AuthOptionsService {
  AuthOptionsValidator: ReturnType<typeof createNoOpValidator>

  constructor() {
    this.AuthOptionsValidator = createNoOpValidator()
  }

  // Validate and fetch available authentication methods
  getAuthMethods(email: string, formIntent: string): Promise<AuthMethodsResponse> {
    return this.AuthOptionsValidator.validate(async ({ xr }) =>
      await xr.get("/api/session/available_auth_methods", {
        email,
        form_intent: formIntent,
      }),
    )
  }
}

let authOptionsInstance: AuthOptionsService | null = null

// Utility: Check if auth-view component is present
export function isAuthViewAbsent(): boolean {
  return document.querySelector('[data-component-name="auth-view"]') === null
}

// Optimist thunk: Handles authentication errors and redirects
export let handleAuthError = createOptimistThunk(({ dispatch, getState }, { resp }) => {
  let errorType: AuthErrorCode | undefined
  let invalidInput: AuthField | undefined
  const state = getState()
  console.error(resp)

  const data = resp.data

  // Handle MFA and two-factor requirements
  if (data?.reason && typeof data.reason === "object") {
    if (data.reason.missing === "mfa_required_by_org" && data.reason.mfa_setup_token) {
      customHistory.redirect(`/mfa_auth?mfa_setup_token=${data.reason.mfa_setup_token}`)
      return
    }
    if (data.reason.missing === "two_factor") {
      dispatch(AUTH_TOGGLE_SMS(data.reason.sms))
      if (data.reason.phone_number) {
        const hint = getI18nString("auth.two-factor.sms-hint", {
          phoneNumber: data.reason.phone_number,
        })
        dispatch(AUTH_SET_HINT({ hint }))
      }
      const kind
        = state.auth.formState === AuthFlowStep.SIGN_IN
          || state.auth.formState === AuthFlowStep.RESET_PASSWORD
          ? state.auth.formState
          : AuthFlowStep.SIGN_IN
      dispatch(AUTH_REQUIRE_TWO_FACTOR({ kind }))
      return
    }
  }

  // Resolve error message
  const message = resolveMessage(resp, data?.message || getI18nString("auth.default-error"))

  // Handle account verification and suspension
  if (data?.reason === "account_unverified") {
    dispatch(changeAuthFormState({ formState: AuthFlowStep.VALIDATE_EMAIL }))
    return
  }
  if (data?.reason === "account_suspended") {
    window.location.href = "/blocked.html"
    return
  }

  // Map status codes and reasons to error types
  if (resp && resp.status === 401)
    errorType = AuthErrorCode.UNAUTHORIZED
  else if (resp && resp.status === 400)
    errorType = AuthErrorCode.BAD_REQUEST
  else if (resp && resp.status === 404 && data.reason === "no_saml")
    errorType = AuthErrorCode.NO_SAML
  else if (resp && resp.status === 404 && data.reason === "magic_link_login_no_account")
    errorType = AuthErrorCode.MAGIC_LINK_LOGIN_NO_ACCOUNT
  else if (resp && resp.status === 403 && data.reason === "saml_required")
    errorType = AuthErrorCode.SAML_REQUIRED

  // Determine invalid input field
  if (
    state.auth.formState === AuthFlowStep.TWO_FACTOR
    && state.auth.twoFactorPromptedBy === AuthFlowStep.SIGN_IN
  ) {
    invalidInput = AuthField.TOTP_KEY
  }
  else if (state.auth.formState === AuthFlowStep.RESET_PASSWORD) {
    invalidInput = AuthField.PASSWORD
  }
  else if (
    data
    && data.reason
    && typeof data.reason === "object"
    && (data.reason.missing === "password" || data.reason.invalid === "password")
  ) {
    invalidInput = AuthField.PASSWORD
  }
  else if (state.auth.formState === AuthFlowStep.SAML_START) {
    invalidInput = AuthField.EMAIL
  }

  // Restore previous form if needed
  if (
    state.auth.formState === AuthFlowStep.VERIFY_HUMAN
    && state.auth.prevForm !== AuthFlowStep.VERIFY_HUMAN
  ) {
    dispatch(changeAuthFormState({ formState: state.auth.prevForm }))
  }

  // Show error
  dispatch(
    AUTH_SHOW_ERROR({
      message,
      errorType,
      invalidInput,
    }),
  )
})

// Optimist thunk: Handles successful authentication
export let handleAuthSuccess = createOptimistThunk(({ dispatch, getState }, { data }) => {
  const state = getState()

  trackPasskeySupport("sign_in_user_pass")
  trackAuthEvent("sign_in_success", state.auth.origin, {
    user_id: data?.meta?.id,
  })

  if (getInitialOptions().integration_host) {
    trackEventAnalytics("Integration Login Success", {
      user_id: data?.meta?.id,
      integrationHost: getInitialOptions().integration_host,
      trackedContext: TrackingKeyEnum.MS_TEAMS_TAB,
    })
  }

  // If SAML email verification is needed
  if (shouldStartSamlEmailVerification(data, state.auth.redirectUrl)) {
    const userId = data.meta.id
    dispatch(startSamlEmailVerification({ userId }))
  }
  else {
    // Redirect to upgrade if signup source is design_pricing
    if (state.auth.signupSource === "design_pricing") {
      dispatch(AUTH_SET_REDIRECT_URL({ redirectUrl: "/upgrade-team" }))
    }
    dispatch(AUTH_COMPLETE({ userId: data.meta.id }))
    dispatch(
      FlashActions.flash(
        getI18nString("auth.sign-in-success", { email: data.meta.email }),
      ),
    )
    // Notify other tabs of sign-in
    new IpcStorageHandler().sendToOtherTabs(Rg, data.meta.email)
  }
})

// Helper: Determines if SAML email verification should start
export function shouldStartSamlEmailVerification(
  response: AuthMethodsResponse["data"],
  redirectUrl?: string,
): boolean {
  if (redirectUrl?.includes("/email/validate"))
    return false
  const key = "email_validated_at"
  return Object.prototype.hasOwnProperty.call(response.meta, key) && response.meta[key] === null
}

// List of component names for special handling
const specialComponentNames: string[] = [
  "logged_out_footer_continue_with_google",
  "logged_out_footer",
  "request_permissions_entry",
  "google_one_tap_logged_out_file",
  "logged_out_main_menu_toolbar",
  "prototype_header_nav",
  "prototype_comment_signed_out",
  "team_invite_link",
  "claim_invite",
  "account_picker",
  "signed_out_edit",
]

// Validate sign-in form (email & password)
export function validateSignInForm(values: AuthFormValues): AuthErrorPayload {
  const email = values.email?.trim()
  return validatePasswordAndEmail(values.password?.trim(), email)
}

// Validate sign-up form (email, password, name)
export function validateSignUpForm(values: AuthFormValues): AuthErrorPayload {
  const email = values.email?.trim()
  const password = values.password?.trim()
  const name = values.name?.trim()
  let result = validatePasswordAndEmail(password, email)
  if (!result.message) {
    result = validatePasswordComplexity(password, email, name)
  }
  return result
}

// Validate email only
export function validateEmailOnly(values: AuthFormValues): AuthErrorPayload {
  return validateEmail(values.email?.trim())
}

// Email validation logic
function validateEmail(email?: string): AuthErrorPayload {
  return email
    ? isValidEmail(email)
      ? { message: "", invalidInput: null }
      : {
          message: getI18nString("auth.input-validation.invalid-email"),
          invalidInput: AuthField.EMAIL,
        }
    : {
        message: getI18nString("auth.input-validation.no-email"),
        invalidInput: AuthField.EMAIL,
      }
}

// Password and email validation logic
function validatePasswordAndEmail(password?: string, email?: string): AuthErrorPayload {
  const emailValidation = validateEmail(email)
  if (emailValidation.message)
    return emailValidation
  return password
    ? { message: "", invalidInput: null }
    : {
        message: getI18nString("auth.input-validation.no-password"),
        invalidInput: AuthField.PASSWORD,
      }
}

// Checks if the current location or component name matches special cases
export function isSpecialComponentOrQuery(componentName: string = ""): boolean {
  return !!parseQuery(customHistory.location.search).is_not_gen_0
    || (componentName && specialComponentNames.includes(componentName))
}

// Password complexity validation logic
function validatePasswordComplexity(password?: string, email?: string, name?: string): AuthErrorPayload {
  let errorMsg = ""
  if (password && stringToUint8Array(password).length > 500) {
    errorMsg = getI18nString("auth.input-validation.long-password")
  }
  else if (password && Array.from(password).length < 8) {
    errorMsg = getI18nString("auth.input-validation.short-password")
  }
  else if (password === email) {
    errorMsg = getI18nString("auth.input-validation.email-is-password")
  }
  else if (name && password === name) {
    errorMsg = getI18nString("auth.input-validation.name-is-password")
  }
  return errorMsg
    ? { message: errorMsg, invalidInput: AuthField.PASSWORD }
    : { message: "", invalidInput: null }
}

// Redirect helper with query param
export function redirectWithContinuation({
  url,
  cont,
}: {
  url: string
  cont: string
}): void {
  const redirectUrl = new URL(url)
  redirectUrl.searchParams.set("cont", cont)
  customHistory.redirect(redirectUrl.toString())
}

// SMS recovery thunk
export let smsRecoverThunk = createOptimistThunk(({ dispatch, getState }, { formId }) => {
  trackAuthEvent("sms_recover_attempt", getState().auth.origin)
  const formElement = document.getElementById(formId) as HTMLFormElement
  const formValues = extractFormValues(formElement)
  let payload: SmsRecoverPayload | null = null
  const atomStore = atomStoreManager.get(_G) as {
    name: string
    token: string
    tokenType: string
  } | null

  // Use atomStore if available, otherwise fallback to form values
  payload = atomStore
    ? {
        name: atomStore.name,
        token: atomStore.token,
        token_type: atomStore.tokenType,
        google_fed_cm_enabled: getFeatureFlags().google_federated_cm ?? false,
      }
    : formValues

  sendWithRetry
    .post("/api/session/sms_recover", payload)
    .then(({ data }) => {
      trackAuthEvent("sms_recover_success", getState().auth.origin)
      if (data?.meta) {
        dispatch(
          AUTH_SET_HINT({
            hint: getI18nString("auth.two-factor.code-hint-confirmation", {
              phoneNumber: data.meta.phone_number,
            }),
          }),
        )
      }
    })
    .catch(error => dispatch(handleAuthError({ resp: error })))
})

// Fetch available authentication methods and determine action
export async function getAuthAction(
  email: string,
  formIntent: string,
): Promise<"google" | "saml" | "sign_in" | "sign_up"> {
  const {
    data: {
      meta: { available_methods },
    },
  } = await (
    authOptionsInstance || (authOptionsInstance = new AuthOptionsService())
  ).getAuthMethods(email, formIntent)

  if (available_methods.length === 1 && available_methods[0] === "google")
    return "google"
  if (available_methods.length === 1 && available_methods[0] === "saml")
    return "saml"
  if (available_methods.includes("sign_in"))
    return "sign_in"
  if (available_methods.includes("sign_up"))
    return "sign_up"
  throw new Error("Unknown authentication action")
}

// Exported aliases for compatibility with original code
export const vr = redirectWithContinuation
export const cT = handleAuthSuccess
export const MZ = isAuthViewAbsent
export const Iu = getAuthAction
export const mI = isSpecialComponentOrQuery
export const P8 = handleAuthError
export const q_ = smsRecoverThunk
export const qF = shouldStartSamlEmailVerification
export const f1 = validateEmailOnly
export const PG = validateSignInForm
export const Ng = validateSignUpForm
