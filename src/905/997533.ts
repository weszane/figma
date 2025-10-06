import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { isValidEmail } from "../figma_app/416935";
import { t as _$$t } from "../905/897919";
import { customHistory } from "../905/612521";
import { Rg } from "../figma_app/827447";
import { getInitialOptions } from "../figma_app/169182";
import { IpcStorageHandler } from "../905/724705";
import { parseQuery } from "../905/634134";
import { stringToUint8Array } from "../figma_app/930338";
import { sendWithRetry } from "../905/910117";
import { AUTH_TOGGLE_SMS, AUTH_SET_HINT, AUTH_REQUIRE_TWO_FACTOR, changeAuthFormState, AUTH_SHOW_ERROR, startSamlEmailVerification, AUTH_SET_REDIRECT_URL, AUTH_COMPLETE } from "../905/194276";
import { _G } from "../905/164233";
import { AuthFlowStep, AuthErrorCode, AuthField } from "../905/862321";
import { trackAuthEvent } from "../905/248178";
import { p as _$$p } from "../905/300815";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { createOptimistThunk } from "../905/350402";
import { TrackingKeyEnum } from "../905/696396";
import { createNoOpValidator } from "../figma_app/181241";
class w {
  constructor() {
    this.AuthOptionsValidator = createNoOpValidator();
  }
  getAuthMethods(e, t) {
    return this.AuthOptionsValidator.validate(async ({
      xr: i
    }) => await i.get("/api/session/available_auth_methods", {
      email: e,
      form_intent: t
    }));
  }
}
let C = null;
export function $$T2() {
  return null === document.querySelector('[data-component-name="auth-view"]');
}
let $$k5 = createOptimistThunk((e, {
  resp: t
}) => {
  let i;
  let n;
  let r = e.getState();
  console.error(t);
  let a = t.data;
  if (a && a.reason && "object" == typeof a.reason) {
    if ("mfa_required_by_org" === a.reason.missing && a.reason.mfa_setup_token) {
      customHistory.redirect(`/mfa_auth?mfa_setup_token=${a.reason.mfa_setup_token}`);
      return;
    }
    if ("two_factor" === a.reason.missing) {
      let t;
      e.dispatch(AUTH_TOGGLE_SMS(a.reason.sms));
      a.reason.phone_number && (t = getI18nString("auth.two-factor.sms-hint", {
        phoneNumber: a.reason.phone_number
      }), e.dispatch(AUTH_SET_HINT({
        hint: t
      })));
      let i = r.auth.formState === AuthFlowStep.SIGN_IN || r.auth.formState === AuthFlowStep.RESET_PASSWORD ? r.auth.formState : AuthFlowStep.SIGN_IN;
      e.dispatch(AUTH_REQUIRE_TWO_FACTOR({
        kind: i
      }));
      return;
    }
  }
  let s = resolveMessage(t, a?.message || getI18nString("auth.default-error"));
  if (a?.reason === "account_unverified") {
    e.dispatch(changeAuthFormState({
      formState: AuthFlowStep.VALIDATE_EMAIL
    }));
    return;
  }
  if (a?.reason === "account_suspended") {
    window.location.href = "/blocked.html";
    return;
  }
  t && 401 === t.status ? i = AuthErrorCode.UNAUTHORIZED : t && 400 === t.status ? i = AuthErrorCode.BAD_REQUEST : t && 404 === t.status && "no_saml" === a.reason ? i = AuthErrorCode.NO_SAML : t && 404 === t.status && "magic_link_login_no_account" === a.reason ? i = AuthErrorCode.MAGIC_LINK_LOGIN_NO_ACCOUNT : t && 403 === t.status && "saml_required" === a.reason && (i = AuthErrorCode.SAML_REQUIRED);
  r.auth.formState === AuthFlowStep.TWO_FACTOR && r.auth.twoFactorPromptedBy === AuthFlowStep.SIGN_IN ? n = AuthField.TOTP_KEY : r.auth.formState === AuthFlowStep.RESET_PASSWORD ? n = AuthField.PASSWORD : a && a.reason && "object" == typeof a.reason && ("password" === a.reason.missing || "password" === a.reason.invalid) ? n = AuthField.PASSWORD : r.auth.formState === AuthFlowStep.SAML_START && (n = AuthField.EMAIL);
  r.auth.formState === AuthFlowStep.VERIFY_HUMAN && r.auth.prevForm !== AuthFlowStep.VERIFY_HUMAN && e.dispatch(changeAuthFormState({
    formState: r.auth.prevForm
  }));
  e.dispatch(AUTH_SHOW_ERROR({
    message: s,
    errorType: i,
    invalidInput: n
  }));
});
let $$R1 = createOptimistThunk((e, {
  data: t
}) => {
  let i = e.getState();
  if (_$$p("sign_in_user_pass"), trackAuthEvent("sign_in_success", i.auth.origin, {
    user_id: t?.meta?.id
  }), getInitialOptions().integration_host && trackEventAnalytics("Integration Login Success", {
    user_id: t?.meta?.id,
    integrationHost: getInitialOptions().integration_host,
    trackedContext: TrackingKeyEnum.MS_TEAMS_TAB
  }), $$N7(t, i.auth.redirectUrl)) {
    let i = t.meta.id;
    e.dispatch(startSamlEmailVerification({
      userId: i
    }));
  } else {
    "design_pricing" === i.auth.signupSource && e.dispatch(AUTH_SET_REDIRECT_URL({
      redirectUrl: "/upgrade-team"
    }));
    e.dispatch(AUTH_COMPLETE({
      userId: t.meta.id
    }));
    e.dispatch(FlashActions.flash(getI18nString("auth.sign-in-success", {
      email: t.meta.email
    })));
    new IpcStorageHandler().sendToOtherTabs(Rg, t.meta.email);
  }
});
export function $$N7(e, t) {
  if (t?.includes("/email/validate")) return !1;
  let i = "email_validated_at";
  return e.meta.hasOwnProperty(i) && null === e.meta[i];
}
let P = ["logged_out_footer_continue_with_google", "logged_out_footer", "request_permissions_entry", "google_one_tap_logged_out_file", "logged_out_main_menu_toolbar", "prototype_header_nav", "prototype_comment_signed_out", "team_invite_link", "claim_invite", "account_picker", "signed_out_edit"];
export function $$O9(e) {
  let t = e.email && e.email.trim();
  return M(e.password && e.password.trim(), t);
}
export function $$D10(e) {
  let t = e.email && e.email.trim();
  let i = e.password && e.password.trim();
  let n = e.name && e.name.trim();
  let r = M(i, t);
  r.message || (r = U(i, t, n));
  return r;
}
export function $$L8(e) {
  return F(e.email && e.email.trim());
}
let F = e => e ? isValidEmail(e) ? {
  message: "",
  invalidInput: null
} : {
  message: getI18nString("auth.input-validation.invalid-email"),
  invalidInput: AuthField.EMAIL
} : {
  message: getI18nString("auth.input-validation.no-email"),
  invalidInput: AuthField.EMAIL
};
let M = (e, t) => {
  let i = F(t);
  return i.message ? i : e ? {
    message: "",
    invalidInput: null
  } : {
    message: getI18nString("auth.input-validation.no-password"),
    invalidInput: AuthField.PASSWORD
  };
};
let $$j4 = (e = "") => !!parseQuery(customHistory.location.search).is_not_gen_0 || e && P.includes(e);
let U = (e, t, i) => {
  let n = "";
  stringToUint8Array(e).length > 500 && (n = getI18nString("auth.input-validation.long-password"));
  Array.from(e).length < 8 && (n = getI18nString("auth.input-validation.short-password"));
  e === t && (n = getI18nString("auth.input-validation.email-is-password"));
  i && e === i && (n = getI18nString("auth.input-validation.name-is-password"));
  return n ? {
    message: n,
    invalidInput: AuthField.PASSWORD
  } : {
    message: "",
    invalidInput: null
  };
};
export function $$B0({
  url: e,
  cont: t
}) {
  let i = new URL(e);
  i.searchParams.set("cont", t);
  customHistory.redirect(i.toString());
}
export let $$V6 = createOptimistThunk((e, {
  formId: t
}) => {
  trackAuthEvent("sms_recover_attempt", e.getState().auth.origin);
  let i = document.getElementById(t);
  let a = _$$t(i);
  let s = null;
  let l = atomStoreManager.get(_G);
  s = l ? {
    name: l.name,
    token: l.token,
    token_type: l.tokenType,
    google_fed_cm_enabled: getFeatureFlags().google_federated_cm ?? !1
  } : a;
  sendWithRetry.post("/api/session/sms_recover", s).then(({
    data: t
  }) => {
    trackAuthEvent("sms_recover_success", e.getState().auth.origin);
    t && t.meta && e.dispatch(AUTH_SET_HINT({
      hint: getI18nString("auth.two-factor.code-hint-confirmation", {
        phoneNumber: t.meta.phone_number
      })
    }));
  }).catch(t => e.dispatch($$k5({
    resp: t
  })));
});
export async function $$G3(e, t) {
  let {
    data: {
      meta: {
        available_methods
      }
    }
  } = await (C || (C = new w()), C).getAuthMethods(e, t);
  if (1 === available_methods.length && "google" === available_methods[0]) return "google";
  if (1 === available_methods.length && "saml" === available_methods[0]) return "saml";
  if (available_methods.includes("sign_in")) return "sign_in";
  if (available_methods.includes("sign_up")) return "sign_up";
  throw Error("Unknown authentication action");
}
export const vr = $$B0;
export const cT = $$R1;
export const MZ = $$T2;
export const Iu = $$G3;
export const mI = $$j4;
export const P8 = $$k5;
export const q_ = $$V6;
export const qF = $$N7;
export const f1 = $$L8;
export const PG = $$O9;
export const Ng = $$D10;