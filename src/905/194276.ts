import { NC } from "../905/17179";
import { Ay } from "../905/612521";
import { XHR } from "../905/910117";
import { s as _$$s } from "../905/573154";
import { t as _$$t } from "../905/303541";
import { J } from "../905/231762";
import { nF } from "../905/350402";
import { N } from "../905/696711";
import { qB } from "../905/862321";
import { g } from "../905/248178";
let $$m22 = NC("AUTH_INIT");
let $$h30 = NC("AUTH_SET_AUTH_LOADING");
let $$g9 = NC("AUTH_CLEAR_AUTH_LOADING");
let $$f11 = NC("AUTH_SIGN_IN");
let $$_8 = NC("AUTH_SIGN_UP");
let $$A36 = NC("AUTH_RESET_PASSWORD");
let $$y12 = NC("AUTH_SEND_EMAIL_SAML_START");
let $$b15 = NC("AUTH_UPDATE_FORM");
let $$v33 = NC("SET_MINIMAL_MFA_USER");
let $$I3 = nF((e, t) => {
  g("change_form_state", e.getState().auth.origin, {
    oldFormState: e.getState().auth.formState,
    newFormState: t.formState
  }, {
    forwardToDatadog: !0
  });
  e.dispatch($$b15(t));
});
let $$$$E6 = nF((e, {
  userId: t
}) => {
  XHR.defaults.headers = {
    ...XHR.defaults.headers,
    "X-Figma-User-ID": t
  };
  Ay.replace(`/verify?fuid=${t}`, null);
  e.dispatch($$I3({
    formState: qB.VALIDATE_EMAIL,
    userId: t
  }));
});
let $$x28 = NC("AUTH_SEND_PASSWORD_RESET");
let $$S19 = NC("AUTH_SHOW_ERROR");
let $$w5 = NC("AUTH_CLEAR_ERROR");
let $$C14 = NC("AUTH_COMPLETE");
let $$T2 = NC("AUTH_CHANGE_EMAIL");
let $$k20 = NC("AUTH_CLICKED_SAML_SIGN_IN");
let $$R32 = NC("AUTH_CHANGE_NAME");
let $$N10 = NC("AUTH_TOGGLE_SMS");
let $$P13 = NC("AUTH_REQUIRE_TWO_FACTOR");
let $$O31 = NC("AUTH_SET_HINT");
let $$D29 = NC("AUTH_CHANGE_JOB");
let $$L4 = NC("AUTH_CHANGE_USAGE_PURPOSE");
let $$F24 = NC("AUTH_CHANGE_OPT_IN_EMAIL");
let $$M17 = NC("AUTH_SET_GOOGLE_ID_TOKEN");
let $$j16 = NC("AUTH_SET_SSO_METHOD");
let $$U27 = NC("AUTH_SET_GOOGLE_TOKEN_TYPE");
let $$B1 = NC("AUTH_SAML_START_FROM_SESSION");
let $$V0 = NC("AUTH_EMAIL_ONLY");
let $$G35 = NC("AUTH_REDEEM");
let $$z7 = NC("AUTH_REDEEM_RESET");
let $$H23 = NC("AUTH_SET_REDIRECT_URL");
let $$W34 = nF((e, {
  token: t,
  userId: i
}, {
  loadingKey: n
}) => {
  let r = XHR.defaults.headers;
  i && (r = {
    ...XHR.defaults.headers,
    "X-Figma-User-ID": i
  });
  let d = XHR.post("/api/team_join_link/redeem", {
    token: t
  }, {
    headers: r
  });
  N(d, e, n);
  d.then(({
    data: e
  }) => {
    if (e && e.meta) return $$$25(e.meta.redirect_target);
  }).catch(t => {
    console.error(t);
    let i = J(t, _$$t("auth.team_join_link.error_on_redeem"));
    return e.dispatch(_$$s.error(i));
  });
});
let $$K18 = NC("AUTH_SET_SIGNUP_SOURCE");
let $$Y21 = NC("AUTH_GOOGLE_SIGNUP");
let $$q26 = NC("AUTH_SET_ORIGIN");
export async function $$$25(e, t) {
  await XHR.post("/api/session/clear_cont").catch(() => { });
  t ? Ay.unsafeRedirectMsTeams(e) : Ay.redirect(e);
}
export const $j = $$V0;
export const AP = $$B1;
export const BZ = $$T2;
export const E = $$I3;
export const EM = $$L4;
export const ET = $$w5;
export const Em = $$$$E6;
export const GG = $$z7;
export const Hh = $$_8;
export const I$ = $$g9;
export const IY = $$N10;
export const Jv = $$f11;
export const KS = $$y12;
export const LP = $$P13;
export const My = $$C14;
export const ND = $$b15;
export const NX = $$j16;
export const OZ = $$M17;
export const QS = $$K18;
export const Qg = $$S19;
export const Re = $$k20;
export const Sr = $$Y21;
export const Ts = $$m22;
export const WY = $$H23;
export const bA = $$F24;
export const dB = $$$25;
export const dl = $$q26;
export const fX = $$U27;
export const hE = $$x28;
export const i_ = $$D29;
export const kL = $$h30;
export const kQ = $$O31;
export const m9 = $$R32;
export const n4 = $$v33;
export const qw = $$W34;
export const v$ = $$G35;
export const xw = $$A36; 
