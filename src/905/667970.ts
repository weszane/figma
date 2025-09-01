import { V } from "../905/749397";
import { Ay } from "../905/612521";
import { getInitialOptions } from "../figma_app/169182";
import { parseQuery } from "../905/634134";
import { qB } from "../905/862321";
import { t as _$$t } from "../905/303541";
import { H } from "../905/301652";
import { Ts, v$, GG, WY, OZ, fX, BZ, m9, bA, IY, LP, kQ, Re, i_, EM, ND, Qg, ET, kL, I$, QS, dl, NX } from "../905/194276";
let u = "/files";
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
  fromMsTeams: !1
};
export function $$m0() {
  return getInitialOptions().email_token || null;
}
export function $$h1() {
  return getInitialOptions().saml_session_id || null;
}
export function $$g2(e = p, t) {
  if (Ts.matches(t)) {
    let e;
    let i = getInitialOptions();
    let o = parseQuery(Ay.location.search).signup_source;
    e = t.payload.redirectUrl ? t.payload.redirectUrl : o ? "/" : i.redirect_url || u;
    let c = i.phone_number ? _$$t("auth.two-factor.sms-hint", {
      phoneNumber: i.phone_number
    }) : void 0;
    return {
      formState: t.payload.formState,
      accountPicker: t.payload.accountPickerData || i.account_picker_data || null,
      email: i.email || "",
      name: i.name || function () {
        try {
          return localStorage.getItem(H());
        } catch (e) {}
      }() || "",
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
      smsOkay: i.sms_okay || !1
    };
  }
  if (v$.matches(t)) return {
    ...e,
    appAuthGSecret: t.payload.gSecret,
    formState: qB.APP_AUTH_REDEEM
  };
  if (GG.matches(t)) return {
    ...e,
    loading: !1,
    appAuthId: null,
    appAuthGSecret: null,
    redirectUrl: u,
    formState: qB.SIGN_IN
  };
  if (WY.matches(t)) return {
    ...e,
    redirectUrl: t.payload.redirectUrl || u
  };
  if (OZ.matches(t)) return {
    ...e,
    googleIdToken: t.payload.googleIdToken
  };
  if (fX.matches(t)) return {
    ...e,
    googleTokenType: t.payload.googleTokenType
  };
  if (BZ.matches(t)) return {
    ...e,
    email: t.payload.value
  };else if (m9.matches(t)) return {
    ...e,
    name: t.payload.value
  };else if (bA.matches(t)) return {
    ...e,
    optInEmail: t.payload.value
  };else if (IY.matches(t)) return {
    ...e,
    smsOkay: t.payload
  };else if (LP.matches(t)) return {
    ...e,
    loading: !1,
    formState: qB.TWO_FACTOR,
    twoFactorPromptedBy: t.payload.kind,
    error: null
  };else if (kQ.matches(t)) return {
    ...e,
    hint: t.payload.hint
  };else if (Re.matches(t)) return {
    ...e,
    clickedSAMLSignIn: t.payload.value
  };else if (i_.matches(t)) return {
    ...e,
    jobTitle: t.payload.value
  };else if (EM.matches(t)) return {
    ...e,
    usagePurpose: t.payload.value
  };else if (ND.matches(t)) return t.payload.formState !== e.formState ? {
    ...e,
    formState: t.payload.formState,
    loading: !1,
    error: t.payload.errorMessage || null,
    invalidInput: null,
    twoFactorPromptedBy: t.payload.formState === qB.TWO_FACTOR ? e.twoFactorPromptedBy : void 0,
    prevForm: t.payload.formState === qB.VERIFY_HUMAN ? t.payload.prevState : null,
    postVerificationAction: t.payload.formState === qB.VERIFY_HUMAN ? t.payload.postVerificationAction : null,
    arkoseAction: t.payload.formState === qB.VERIFY_HUMAN ? t.payload.arkoseAction : null
  } : e;else if (Qg.matches(t)) return {
    ...e,
    loading: !1,
    error: t.payload.message,
    errorType: t.payload.errorType,
    invalidInput: t.payload.invalidInput
  };else if (ET.matches(t)) return {
    ...e,
    error: null,
    errorType: null,
    invalidInput: null
  };else if (kL.matches(t)) return {
    ...e,
    loading: !0,
    error: null
  };else if (I$.matches(t)) return {
    ...e,
    loading: !1
  };else if (QS.matches(t)) return {
    ...e,
    signupSource: t.payload.signupSource
  };else if (dl.matches(t)) return {
    ...e,
    origin: t.payload.authOrigin
  };else if (NX.matches(t)) return {
    ...e,
    ssoMethod: t.payload.ssoMethod
  };else return e;
}
export const I8 = $$m0;
export const TA = $$h1;
export const j2 = $$g2;