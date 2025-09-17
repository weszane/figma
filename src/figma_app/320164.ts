import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { getCookieValue } from "../905/657224";
import { trackEventAnalytics } from "../905/449184";
import { openWindow } from "../905/508367";
import { debugState } from "../905/407919";
import { customHistory } from "../905/612521";
import { logWarning } from "../905/714362";
import { XHR } from "../905/910117";
import { AUTH_SET_REDIRECT_URL, AUTH_INIT, AUTH_SET_GOOGLE_ID_TOKEN, AUTH_SET_GOOGLE_TOKEN_TYPE, AUTH_CHANGE_NAME, AUTH_SET_ORIGIN, changeAuthFormState, AUTH_GOOGLE_SIGNUP, AUTH_SHOW_ERROR } from "../905/194276";
import { _G } from "../905/164233";
import { MZ, P8 } from "../905/997533";
import { AuthFlowStep, AuthAction, AuthErrorCode } from "../905/862321";
import { trackAuthEvent } from "../905/248178";
import { sT } from "../905/694658";
import { a as _$$a } from "../905/105502";
import { p as _$$p } from "../905/300815";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { showModalHandler } from "../905/156213";
import { D as _$$D } from "../905/347702";
import { isWorkDomainType } from "../figma_app/416935";
import { t as _$$t2 } from "../905/897919";
import { qV } from "../figma_app/165623";
let C = "google_sso_temp";
var $$w1 = (e => (e.COMMUNITY = "google_one_tap_logged_out_community", e.LOGGED_OUT_FILE = "google_one_tap_logged_out_file", e.PROTOTYPE = "google_one_tap_prototype", e))($$w1 || {});
var $$O6 = (e => (e.LOGGED_OUT_FOOTER = "logged_out_footer", e.LOGGED_OUT_FOOTER_CONTINUE_WITH_GOOGLE = "logged_out_footer_continue_with_google", e.FIGJAM_TRY_FOOTER_BANNER = "figjam_try_footer_banner", e.FIGJAM_TRY_FOOTER_BANNER_CONTINUE_WITH_GOOGLE = "figjam_try_footer_banner_continue_with_google", e.FIGMA_REV_LOGGED_OUT_FOOTER = "figma_rev_logged_out_footer", e.FIGMA_REV_LOGGED_OUT_FOOTER_WITH_GOOGLE = "figma_rev_logged_out_footer_continue_with_google", e.FIGMA_REV_LOGGED_OUT_HEADER = "figma_rev_logged_out_header", e.FIGMA_REV_LOGGED_OUT_HEADER_WITH_GOOGLE = "figma_rev_logged_out_header_with_google", e))($$O6 || {});
let $$R5 = "/api/session/google_auth/signin";
let L = _$$D(() => new Promise((e, t) => {
  document.cookie = C + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  let r = openWindow("/start_google_sso", "", "width=600,height=600");
  if (null === r) {
    trackEventAnalytics("GoogleSSOError", {
      step: "window-not-found"
    });
    t(Error(getI18nString("auth.google-sso.unable-to-get-info")));
    return;
  }
  window.setTimeout(function n() {
    let i = getCookieValue(document.cookie, C);
    if (null !== i) {
      let r = JSON.parse(i);
      document.cookie = C + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      r.token ? e(r) : (trackEventAnalytics("GoogleSSOError", {
        step: "token-not-found"
      }), t(Error(getI18nString("auth.google-sso.unable-to-get-info"))));
    } else r.closed ? (trackEventAnalytics("GoogleSSOError", {
      step: "cookie-not-found"
    }), t(Error(getI18nString("auth.google-sso.unable-to-get-info")))) : window.setTimeout(n, 250);
  }, 250);
}));
export async function $$P7(e, t) {
  let r = await L();
  return await $$F3(r, {
    dispatch: e,
    apiUrl: "/api/session/google_auth/signin_or_signup",
    origin: t,
    tosAccepted: !1
  });
}
export async function $$D2({
  dispatch: e,
  origin: t,
  tosAccepted: r,
  redirectUrl: n
}) {
  let i = await L();
  n && e(AUTH_SET_REDIRECT_URL({
    redirectUrl: n
  }));
  return await $$F3(i, {
    dispatch: e,
    apiUrl: $$R5,
    origin: t,
    tosAccepted: r ?? !1
  });
}
export function $$k0(e, t, r) {
  trackAuthEvent("google_sso_login_redirect_attempt", r, {
    fromMsTeams: t
  });
  document.cookie = C + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  let n = JSON.stringify({
    apiUrl: $$R5,
    redirectPath: e
  });
  document.cookie = `${C}=${encodeURIComponent(n)}; path=/`;
  let i = t ? customHistory.unsafeRedirectMsTeams : customHistory.redirect;
  let a = "/start_google_sso?should_use_redirect_instead=1";
  t && (a += "&from_ms_teams=1");
  i(a);
}
class M extends Error {}
export async function $$F3(e, {
  dispatch: t,
  apiUrl: r,
  origin: a,
  formId: o,
  tosAccepted: d = !1
}) {
  let v = !!a && Object.values($$w1).includes(a);
  await sT({
    googleUserInfo: e
  });
  let C = {};
  if (o) {
    let e = document.getElementById(o);
    C = _$$t2(e);
  }
  try {
    let {
      data
    } = await function (e, t, r) {
      let i = {
        name: t.name,
        token: t.token,
        token_type: t.tokenType,
        google_fed_cm_enabled: getFeatureFlags().google_federated_cm ?? !1,
        totp_key: r
      };
      return XHR.post(e, i);
    }(r, e, C?.totp_key);
    t(FlashActions.flash(getI18nString("auth.sign-in-success", {
      email: data.meta.email
    })));
    data.meta && data.meta.email_domain_type ? (trackEventAnalytics("Sign Up (GTM)", {
      isWorkEmail: isWorkDomainType(data),
      sha256_email: await qV(data.meta.email)
    }), await _$$p("sign_up_google_sso")) : (trackEventAnalytics("google_sso", {
      eventSubtype: "google_sso_success_signin",
      user_id: data?.meta?.id,
      origin: a
    }), await _$$p("sign_in_google_sso"));
    return {
      type: "login",
      user: data.meta
    };
  } catch (u) {
    let {
      data
    } = u;
    let n = resolveMessage({
      data
    }, data?.message);
    let s = getI18nString("auth.google-sso.unable-to-auth");
    if (data && data.reason && "object" == typeof data.reason && "two_factor" === data.reason.missing) {
      MZ() && null != a && (t(AUTH_INIT({
        origin: a,
        formState: AuthFlowStep.SIGN_IN,
        redirectUrl: debugState?.getState().auth.redirectUrl
      })), t(showModalHandler({
        type: _$$a,
        data: {}
      })));
      atomStoreManager.set(_G, e);
      t(P8({
        resp: u
      }));
      return {
        type: "mfa"
      };
    }
    let o = debugState?.getState().auth.redirectUrl || "";
    if (v && trackAuthEvent("google_one_tap_login_error", a, {
      error: n
    }), n === getI18nString("auth.error.account-not-found") || n === getI18nString("auth.error.api.cannot_verify_captcha_token")) {
      (function ({
        userInfo: e,
        origin: t,
        dispatch: r,
        redirectUrl: n,
        tosAccepted: i
      }) {
        var a;
        null != t && MZ() ? (r(AUTH_INIT({
          origin: t,
          formState: AuthFlowStep.SIGN_UP,
          redirectUrl: n
        })), r(showModalHandler({
          type: _$$a,
          data: {}
        }))) : debugState?.getState()?.modalShown?.type !== _$$a && MZ() && logWarning("authenticate_google_user", "Skipped launching auth modal before arkose verification", {
          auth_origin: t
        }, {
          reportAsSentryError: !0,
          modeEventName: "google_sso_skipped_launching_auth_modal"
        });
        a = {
          ...e,
          origin: t
        };
        r(AUTH_SET_GOOGLE_ID_TOKEN({
          googleIdToken: a.token
        }));
        r(AUTH_SET_GOOGLE_TOKEN_TYPE({
          googleTokenType: a.tokenType
        }));
        r(AUTH_CHANGE_NAME({
          value: a.name
        }));
        a.origin && r(AUTH_SET_ORIGIN({
          authOrigin: a.origin
        }));
        r(changeAuthFormState({
          formState: AuthFlowStep.VERIFY_HUMAN,
          prevState: AuthFlowStep.SIGN_UP,
          arkoseAction: AuthAction.SIGN_UP,
          postVerificationAction: AUTH_GOOGLE_SIGNUP({
            tosAccepted: i
          })
        }));
      })({
        userInfo: e,
        origin: a,
        dispatch: t,
        redirectUrl: o,
        tosAccepted: d
      });
      return {
        type: "signup"
      };
    }
    if (data?.reason === "saml_required") {
      let e = new M(n);
      e.errorType = AuthErrorCode.SAML_REQUIRED;
      return e;
    }
    t(FlashActions.error(n || s, 15e3));
    return Error(n || getI18nString("auth.google-sso.unable-to-auth"));
  }
}
export function $$j4({
  dispatch: e,
  origin: t,
  redirectUrl: r,
  message: n
}) {
  e(AUTH_INIT({
    origin: t,
    redirectUrl: r,
    formState: AuthFlowStep.SIGN_UP
  }));
  e(AUTH_SHOW_ERROR({
    message: n
  }));
  e(showModalHandler({
    type: _$$a,
    data: {}
  }));
}
export const Bs = $$k0;
export const DT = $$w1;
export const Rm = $$D2;
export const W8 = $$F3;
export const Y2 = $$j4;
export const _B = $$R5;
export const ty = $$O6;
export const xI = $$P7;