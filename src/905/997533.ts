import { getFeatureFlags } from "../905/601108";
import { zl } from "../figma_app/27355";
import { sx } from "../905/449184";
import { xf } from "../figma_app/416935";
import { t as _$$t } from "../905/897919";
import { Ay } from "../905/612521";
import { Rg } from "../figma_app/827447";
import { getInitialOptions } from "../figma_app/169182";
import { P as _$$P } from "../905/724705";
import { parseQuery } from "../905/634134";
import { YH } from "../figma_app/930338";
import { XHR } from "../905/910117";
import { IY, kQ, LP, E as _$$E, Qg, Em, WY, My } from "../905/194276";
import { _G } from "../905/164233";
import { qB, By, RE } from "../905/862321";
import { g as _$$g } from "../905/248178";
import { p as _$$p } from "../905/300815";
import { s as _$$s } from "../905/573154";
import { t as _$$t2 } from "../905/303541";
import { J } from "../905/231762";
import { nF } from "../905/350402";
import { e0 } from "../905/696396";
import { vh } from "../figma_app/181241";
class w {
  constructor() {
    this.AuthOptionsValidator = vh();
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
let $$k5 = nF((e, {
  resp: t
}) => {
  let i;
  let n;
  let r = e.getState();
  console.error(t);
  let a = t.data;
  if (a && a.reason && "object" == typeof a.reason) {
    if ("mfa_required_by_org" === a.reason.missing && a.reason.mfa_setup_token) {
      Ay.redirect(`/mfa_auth?mfa_setup_token=${a.reason.mfa_setup_token}`);
      return;
    }
    if ("two_factor" === a.reason.missing) {
      let t;
      e.dispatch(IY(a.reason.sms));
      a.reason.phone_number && (t = _$$t2("auth.two-factor.sms-hint", {
        phoneNumber: a.reason.phone_number
      }), e.dispatch(kQ({
        hint: t
      })));
      let i = r.auth.formState === qB.SIGN_IN || r.auth.formState === qB.RESET_PASSWORD ? r.auth.formState : qB.SIGN_IN;
      e.dispatch(LP({
        kind: i
      }));
      return;
    }
  }
  let s = J(t, a?.message || _$$t2("auth.default-error"));
  if (a?.reason === "account_unverified") {
    e.dispatch(_$$E({
      formState: qB.VALIDATE_EMAIL
    }));
    return;
  }
  if (a?.reason === "account_suspended") {
    window.location.href = "/blocked.html";
    return;
  }
  t && 401 === t.status ? i = By.UNAUTHORIZED : t && 400 === t.status ? i = By.BAD_REQUEST : t && 404 === t.status && "no_saml" === a.reason ? i = By.NO_SAML : t && 404 === t.status && "magic_link_login_no_account" === a.reason ? i = By.MAGIC_LINK_LOGIN_NO_ACCOUNT : t && 403 === t.status && "saml_required" === a.reason && (i = By.SAML_REQUIRED);
  r.auth.formState === qB.TWO_FACTOR && r.auth.twoFactorPromptedBy === qB.SIGN_IN ? n = RE.TOTP_KEY : r.auth.formState === qB.RESET_PASSWORD ? n = RE.PASSWORD : a && a.reason && "object" == typeof a.reason && ("password" === a.reason.missing || "password" === a.reason.invalid) ? n = RE.PASSWORD : r.auth.formState === qB.SAML_START && (n = RE.EMAIL);
  r.auth.formState === qB.VERIFY_HUMAN && r.auth.prevForm !== qB.VERIFY_HUMAN && e.dispatch(_$$E({
    formState: r.auth.prevForm
  }));
  e.dispatch(Qg({
    message: s,
    errorType: i,
    invalidInput: n
  }));
});
let $$R1 = nF((e, {
  data: t
}) => {
  let i = e.getState();
  if (_$$p("sign_in_user_pass"), _$$g("sign_in_success", i.auth.origin, {
    user_id: t?.meta?.id
  }), getInitialOptions().integration_host && sx("Integration Login Success", {
    user_id: t?.meta?.id,
    integrationHost: getInitialOptions().integration_host,
    trackedContext: e0.MS_TEAMS_TAB
  }), $$N7(t, i.auth.redirectUrl)) {
    let i = t.meta.id;
    e.dispatch(Em({
      userId: i
    }));
  } else {
    "design_pricing" === i.auth.signupSource && e.dispatch(WY({
      redirectUrl: "/upgrade-team"
    }));
    e.dispatch(My({
      userId: t.meta.id
    }));
    e.dispatch(_$$s.flash(_$$t2("auth.sign-in-success", {
      email: t.meta.email
    })));
    new _$$P().sendToOtherTabs(Rg, t.meta.email);
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
let F = e => e ? xf(e) ? {
  message: "",
  invalidInput: null
} : {
  message: _$$t2("auth.input-validation.invalid-email"),
  invalidInput: RE.EMAIL
} : {
  message: _$$t2("auth.input-validation.no-email"),
  invalidInput: RE.EMAIL
};
let M = (e, t) => {
  let i = F(t);
  return i.message ? i : e ? {
    message: "",
    invalidInput: null
  } : {
    message: _$$t2("auth.input-validation.no-password"),
    invalidInput: RE.PASSWORD
  };
};
let $$j4 = (e = "") => !!parseQuery(Ay.location.search).is_not_gen_0 || e && P.includes(e);
let U = (e, t, i) => {
  let n = "";
  YH(e).length > 500 && (n = _$$t2("auth.input-validation.long-password"));
  Array.from(e).length < 8 && (n = _$$t2("auth.input-validation.short-password"));
  e === t && (n = _$$t2("auth.input-validation.email-is-password"));
  i && e === i && (n = _$$t2("auth.input-validation.name-is-password"));
  return n ? {
    message: n,
    invalidInput: RE.PASSWORD
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
  Ay.redirect(i.toString());
}
export let $$V6 = nF((e, {
  formId: t
}) => {
  _$$g("sms_recover_attempt", e.getState().auth.origin);
  let i = document.getElementById(t);
  let a = _$$t(i);
  let s = null;
  let l = zl.get(_G);
  s = l ? {
    name: l.name,
    token: l.token,
    token_type: l.tokenType,
    google_fed_cm_enabled: getFeatureFlags().google_federated_cm ?? !1
  } : a;
  XHR.post("/api/session/sms_recover", s).then(({
    data: t
  }) => {
    _$$g("sms_recover_success", e.getState().auth.origin);
    t && t.meta && e.dispatch(kQ({
      hint: _$$t2("auth.two-factor.code-hint-confirmation", {
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
