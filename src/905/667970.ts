import { AUTH_CHANGE_EMAIL, AUTH_CHANGE_JOB, AUTH_CHANGE_NAME, AUTH_CHANGE_OPT_IN_EMAIL, AUTH_CHANGE_USAGE_PURPOSE, AUTH_CLEAR_AUTH_LOADING, AUTH_CLEAR_ERROR, AUTH_CLICKED_SAML_SIGN_IN, AUTH_INIT, AUTH_REDEEM, AUTH_REDEEM_RESET, AUTH_REQUIRE_TWO_FACTOR, AUTH_SET_AUTH_LOADING, AUTH_SET_GOOGLE_ID_TOKEN, AUTH_SET_GOOGLE_TOKEN_TYPE, AUTH_SET_HINT, AUTH_SET_ORIGIN, AUTH_SET_REDIRECT_URL, AUTH_SET_SIGNUP_SOURCE, AUTH_SET_SSO_METHOD, AUTH_SHOW_ERROR, AUTH_TOGGLE_SMS, AUTH_UPDATE_FORM } from "../905/194276"
import { generateAnnomousPrefill } from "../905/301652"
import { getI18nString } from "../905/303541"
import { customHistory } from "../905/612521"
import { parseQuery } from "../905/634134"
import { V } from "../905/749397"
import { AuthFlowStep } from "../905/862321"
import { getInitialOptions } from "../figma_app/169182"

let u = "/files"
let p = {
  formState: void 0,
  accountPicker: null,
  email: "",
  name: "",
  jobTitle: "",
  usagePurpose: "",
  optInEmail: !1,
  redirectUrl: u,
  loading: !1,
  error: null,
  appAuthId: null,
  appAuthAppType: null,
  appAuthGSecret: null,
  appAuthDesktopProtocol: null,
  appAuthUsers: null,
  googleIdToken: null,
  googleTokenType: V.ACCESS_TOKEN,
  postVerificationAction: null,
  arkoseAction: null,
  ssoMethod: null,
  orgName: null,
  existingSession: !1,
  signupSource: void 0,
  clickedSAMLSignIn: !1,
  shouldUseRedirectInstead: !1,
  fromMsTeams: !1,
}
export function $$m0() {
  return getInitialOptions().email_token || null
}
export function $$h1() {
  return getInitialOptions().saml_session_id || null
}
export function $$g2(e = p, t) {
  if (AUTH_INIT.matches(t)) {
    let e
    let i = getInitialOptions()
    let o = parseQuery(customHistory.location.search).signup_source
    e = t.payload.redirectUrl ? t.payload.redirectUrl : o ? "/" : i.redirect_url || u
    let c = i.phone_number
      ? getI18nString("auth.two-factor.sms-hint", {
          phoneNumber: i.phone_number,
        })
      : void 0
    return {
      formState: t.payload.formState,
      accountPicker: t.payload.accountPickerData || i.account_picker_data || null,
      email: i.email || "",
      name: i.name || (function () {
        try {
          return localStorage.getItem(generateAnnomousPrefill())
        }
        catch (e) {}
      }()) || "",
      jobTitle: "",
      usagePurpose: "",
      optInEmail: !1,
      redirectUrl: e,
      loading: !1,
      error: i.error || null,
      origin: i.origin || t.payload.origin,
      appAuthId: i.app_auth_id || null,
      appAuthAppType: i.app_auth_app_type || null,
      appAuthGSecret: i.app_auth_g_secret || null,
      appAuthDesktopProtocol: i.app_auth_desktop_protocol || null,
      appAuthUsers: i.app_auth_users || null,
      appAuthMsftTeamsUrl: i.app_auth_msft_teams_url,
      googleIdToken: i.google_id_token || null,
      googleTokenType: i.google_token_type || V.ACCESS_TOKEN,
      postVerificationAction: null,
      ssoMethod: i.sso_method || null,
      orgName: i.org_name || null,
      existingSession: i.existing_session || !1,
      signupSource: o,
      signedUpFromOpenSession: t.payload.signedUpFromOpenSession,
      clickedSAMLSignIn: !1,
      shouldUseRedirectInstead: i.should_use_redirect_instead || !1,
      fromMsTeams: i.from_ms_teams || !1,
      revokeGrantor: i.revoke_grantor || !1,
      hint: c || void 0,
      smsOkay: i.sms_okay || !1,
    }
  }
  if (AUTH_REDEEM.matches(t)) {
    return {
      ...e,
      appAuthGSecret: t.payload.gSecret,
      formState: AuthFlowStep.APP_AUTH_REDEEM,
    }
  }
  if (AUTH_REDEEM_RESET.matches(t)) {
    return {
      ...e,
      loading: !1,
      appAuthId: null,
      appAuthGSecret: null,
      redirectUrl: u,
      formState: AuthFlowStep.SIGN_IN,
    }
  }
  if (AUTH_SET_REDIRECT_URL.matches(t)) {
    return {
      ...e,
      redirectUrl: t.payload.redirectUrl || u,
    }
  }
  if (AUTH_SET_GOOGLE_ID_TOKEN.matches(t)) {
    return {
      ...e,
      googleIdToken: t.payload.googleIdToken,
    }
  }
  if (AUTH_SET_GOOGLE_TOKEN_TYPE.matches(t)) {
    return {
      ...e,
      googleTokenType: t.payload.googleTokenType,
    }
  }
  if (AUTH_CHANGE_EMAIL.matches(t)) {
    return {
      ...e,
      email: t.payload.value,
    }
  }
  else if (AUTH_CHANGE_NAME.matches(t)) {
    return {
      ...e,
      name: t.payload.value,
    }
  }
  else if (AUTH_CHANGE_OPT_IN_EMAIL.matches(t)) {
    return {
      ...e,
      optInEmail: t.payload.value,
    }
  }
  else if (AUTH_TOGGLE_SMS.matches(t)) {
    return {
      ...e,
      smsOkay: t.payload,
    }
  }
  else if (AUTH_REQUIRE_TWO_FACTOR.matches(t)) {
    return {
      ...e,
      loading: !1,
      formState: AuthFlowStep.TWO_FACTOR,
      twoFactorPromptedBy: t.payload.kind,
      error: null,
    }
  }
  else if (AUTH_SET_HINT.matches(t)) {
    return {
      ...e,
      hint: t.payload.hint,
    }
  }
  else if (AUTH_CLICKED_SAML_SIGN_IN.matches(t)) {
    return {
      ...e,
      clickedSAMLSignIn: t.payload.value,
    }
  }
  else if (AUTH_CHANGE_JOB.matches(t)) {
    return {
      ...e,
      jobTitle: t.payload.value,
    }
  }
  else if (AUTH_CHANGE_USAGE_PURPOSE.matches(t)) {
    return {
      ...e,
      usagePurpose: t.payload.value,
    }
  }
  else if (AUTH_UPDATE_FORM.matches(t)) {
    return t.payload.formState !== e.formState
      ? {
          ...e,
          formState: t.payload.formState,
          loading: !1,
          error: t.payload.errorMessage || null,
          invalidInput: null,
          twoFactorPromptedBy: t.payload.formState === AuthFlowStep.TWO_FACTOR ? e.twoFactorPromptedBy : void 0,
          prevForm: t.payload.formState === AuthFlowStep.VERIFY_HUMAN ? t.payload.prevState : null,
          postVerificationAction: t.payload.formState === AuthFlowStep.VERIFY_HUMAN ? t.payload.postVerificationAction : null,
          arkoseAction: t.payload.formState === AuthFlowStep.VERIFY_HUMAN ? t.payload.arkoseAction : null,
        }
      : e
  }
  else if (AUTH_SHOW_ERROR.matches(t)) {
    return {
      ...e,
      loading: !1,
      error: t.payload.message,
      errorType: t.payload.errorType,
      invalidInput: t.payload.invalidInput,
    }
  }
  else if (AUTH_CLEAR_ERROR.matches(t)) {
    return {
      ...e,
      error: null,
      errorType: null,
      invalidInput: null,
    }
  }
  else if (AUTH_SET_AUTH_LOADING.matches(t)) {
    return {
      ...e,
      loading: !0,
      error: null,
    }
  }
  else if (AUTH_CLEAR_AUTH_LOADING.matches(t)) {
    return {
      ...e,
      loading: !1,
    }
  }
  else if (AUTH_SET_SIGNUP_SOURCE.matches(t)) {
    return {
      ...e,
      signupSource: t.payload.signupSource,
    }
  }
  else if (AUTH_SET_ORIGIN.matches(t)) {
    return {
      ...e,
      origin: t.payload.authOrigin,
    }
  }
  else if (AUTH_SET_SSO_METHOD.matches(t)) {
    return {
      ...e,
      ssoMethod: t.payload.ssoMethod,
    }
  }
  else {
    return e
  }
}
export const I8 = $$m0
export const TA = $$h1
export const j2 = $$g2
