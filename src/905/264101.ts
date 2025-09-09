import { customHistory } from "../905/612521";
import { getInitialOptions } from "../figma_app/169182";
import { XHR } from "../905/910117";
import { cT } from "../905/997533";
import { s as _$$s } from "../905/573154";
import { getI18nString, getI18nStringAlias } from "../905/303541";
import { J } from "../905/231762";
import { createOptimistThunk } from "../905/350402";
import { popModalStack, hideModal } from "../905/156213";
import { z3, sp, r1, Yu } from "../905/355291";
import { WJ, yJ, C$, hz, S5 } from "../figma_app/24841";
import { yV, r6 } from "../905/990455";
import { k } from "../905/93362";
export let $$f5 = createOptimistThunk((e, t) => {
  t.passwordNew !== t.passwordRetype ? e.dispatch(_$$s.error(getI18nString("api_user.error.please_retype_your_new_password_they_don_t_match"))) : XHR.post("/api/password/change", {
    password_old: t.passwordOld,
    password_new: t.passwordNew
  }).then(() => {
    e.dispatch(popModalStack());
    e.dispatch(_$$s.flash(getI18nString("api_user.password_changed")));
  }).catch(({
    response: t
  }) => {
    try {
      t = JSON.parse(t);
      e.dispatch(_$$s.error(J(t, t.message)));
    } catch (t) {
      e.dispatch(_$$s.error(t));
    }
  });
});
function _(e, t, i) {
  try {
    let i = t.data;
    "bad_token" === i.reason ? (e(WJ()), e(z3(getI18nString("api_user.error.too-long-since-password-checked")))) : e(z3(J(t, i.message || "unknown error")));
  } catch (t) {
    e(z3(i));
  }
}
let $$A1 = createOptimistThunk((e, t) => {
  XHR.post("/api/session/verify_password", {
    password: t.password
  }).then(({
    data: t
  }) => {
    e.dispatch(yJ({
      user: t.meta,
      userInitiated: !1
    }));
    let i = e.getState();
    i.modalShown && i.modalShown.type === sp && e.dispatch($$I4({
      token: t.meta.password_token
    }));
  }).catch(t => {
    _(e.dispatch, t, getI18nString("api_user.error.generic-verify-password"));
  });
  e.dispatch(r1());
});
let $$y8 = createOptimistThunk((e, t) => {
  let i = e.getState().user.password_token;
  let n = e.getState().user.mfa_setup_token;
  XHR.post("/api/user/phone_number", {
    password_verify_token: i,
    phone_number: t.phone,
    mfa_setup_token: n
  }).then(({
    data: t
  }) => {
    e.dispatch(yJ({
      user: t.meta,
      userInitiated: !1
    }));
  }).catch(t => {
    _(e.dispatch, t, getI18nString("auth.two-factor-setup.error.generic-confirm-phone-number"));
  });
  e.dispatch(r1());
});
let $$b10 = createOptimistThunk((e, t) => {
  let i = e.getState().user;
  let o = e.getState().user.mfa_setup_token;
  XHR.post("/api/user/phone_number/confirm", {
    mfa_setup_token: o,
    phone_token: i.phone_token,
    code: t.code
  }).then(({
    data: t
  }) => {
    if (o) {
      let i = getInitialOptions().redirect_url;
      i ? customHistory.redirect(i) : e.dispatch(cT({
        data: {
          meta: {
            id: t.meta.id,
            email: t.meta.email || ""
          }
        }
      }));
    }
    e.dispatch(yJ({
      user: t.meta,
      userInitiated: !1
    }));
  }).catch(t => {
    _(e.dispatch, t, getI18nString("auth.two-factor-setup.error.generic-confirm-phone-number"));
  });
  e.dispatch(r1());
});
let $$v11 = createOptimistThunk(e => {
  let t = e.getState().user.password_token;
  XHR.del("/api/user/phone_number", {
    password_verify_token: t
  }).then(({
    data: t
  }) => {
    e.dispatch(yJ({
      user: t.meta,
      userInitiated: !1
    }));
  }).catch(t => {
    e.dispatch(Yu());
    _(e.dispatch, t, getI18nString("auth.two-factor-setup.error.generic-delete-phone-number"));
  });
  e.dispatch(r1());
});
let $$I4 = createOptimistThunk((e, t) => {
  k.getBackupCodes({
    passwordVerifyToken: t.token
  }).then(({
    data: t
  }) => {
    e.dispatch(yJ({
      user: t.meta,
      userInitiated: !1
    }));
  }).catch(t => {
    _(e.dispatch, t, getI18nString("auth.two-factor-setup.error.generic-get-recovery-codes"));
  });
});
let $$E3 = createOptimistThunk(e => {
  let t = e.getState().user.password_token;
  XHR.post("/api/user/backup_codes", {
    password_verify_token: t
  }).then(({
    data: t
  }) => {
    e.dispatch(yJ({
      user: t.meta,
      userInitiated: !1
    }));
  }).catch(t => {
    _(e.dispatch, t, getI18nString("auth.two-factor-setup.error.generic-reset-recovery-codes"));
  });
});
let $$x6 = createOptimistThunk((e, t) => {
  XHR.del("/api/user/totp", {
    password_verify_token: t.token
  }).then(() => {
    e.dispatch(C$({
      enabled: !1
    }));
  }).catch(t => {
    _(e.dispatch, t, getI18nString("auth.two-factor-setup.error.generic-disable-two-factor"));
  });
  e.dispatch(r1());
});
let $$S7 = createOptimistThunk((e, t) => {
  XHR.post("/api/user/totp", {
    password_verify_token: t.token,
    mfa_setup_token: t.mfaToken
  }).then(({
    data: t
  }) => {
    yV(t.meta.two_factor_secret);
    e.dispatch(yJ({
      user: {
        id: t.meta.id,
        two_factor_secret_loaded: !!t.meta.two_factor_secret
      },
      userInitiated: !1
    }));
  }).catch(t => {
    _(e.dispatch, t, getI18nString("auth.two-factor-setup.error.generic-setup-totp"));
  });
  e.dispatch(r1());
});
let $$w12 = createOptimistThunk((e, t) => {
  let i = r6().token;
  let o = e.getState().user;
  let d = o.mfa_setup_token;
  XHR.post("/api/user/totp/confirm", {
    totp_code: t.otp,
    two_factor_token: i,
    mfa_setup_token: d
  }).then(({
    data: t
  }) => {
    if (d) {
      let i = getInitialOptions().redirect_url;
      i ? customHistory.redirect(i) : e.dispatch(cT({
        data: {
          meta: {
            id: t.meta.id,
            email: o.email
          }
        }
      }));
    }
    e.dispatch(yJ({
      user: t.meta,
      userInitiated: !1
    }));
    e.dispatch(C$({
      enabled: !0
    }));
  }).catch(t => {
    _(e.dispatch, t, getI18nString("auth.two-factor-setup.error.generic-confirm-totp"));
  });
  e.dispatch(r1());
});
let $$C0 = createOptimistThunk(e => {
  let t = e.dispatch(_$$s.flash(getI18nString("api_user.one_moment")));
  XHR.post("/api/password/forgot", {
    username: e.getState().user.email
  }).then(() => {
    e.dispatch(_$$s.remove({
      id: t
    }));
    e.dispatch(_$$s.flash(getI18nString("api_user.reset-password-instructions", {
      email: e.getState().user.email
    })));
  }).catch(() => {
    e.dispatch(_$$s.remove({
      id: t
    }));
    e.dispatch(_$$s.error(getI18nString("api_user.error.an_error_occurred_while_resetting_your_password")));
  });
});
let $$T9 = createOptimistThunk(e => {
  XHR.post("/api/validation/email/send").then(() => {
    let t = getI18nString("api_user.confirmation-email", {
      email: e.getState().user.email
    });
    e.dispatch(_$$s.flash(t));
  }).catch(() => {
    let t = getI18nString("api_user.error.an_error_occurred_while_sending_the_confirmation_email");
    e.dispatch(_$$s.error(t));
  });
});
let $$k2 = createOptimistThunk((e, t) => {
  e.dispatch(hz({
    loading: !0
  }));
  XHR.del("/api/user", {
    password_verify_token: t.token
  }).then(({
    response: t
  }) => {
    e.dispatch(hideModal());
    let i = JSON.parse(t);
    if (i.i18n?.id) {
      let t = getI18nStringAlias(i.i18n.id);
      e.dispatch(_$$s.flash(t));
    } else e.dispatch(_$$s.flash(getI18nString("api_user.account_deleted_redirecting")));
    setTimeout(() => {
      e.dispatch(S5());
    }, 3e3);
  }).catch(({
    response: t
  }) => {
    e.dispatch(hideModal());
    e.dispatch(hz({
      loading: !1
    }));
    let i = JSON.parse(t);
    if (i.i18n?.id) {
      let t = getI18nStringAlias(i.i18n.id);
      e.dispatch(_$$s.error(t));
    } else e.dispatch(_$$s.error(getI18nString("api_user.error.an_error_occurred_while_attempting_to_delete_your_account")));
  });
});
export const BD = $$C0;
export const BE = $$A1;
export const Ci = $$k2;
export const MV = $$E3;
export const Ve = $$I4;
export const ec = $$f5;
export const eu = $$x6;
export const lJ = $$S7;
export const nm = $$y8;
export const qC = $$T9;
export const rH = $$b10;
export const uN = $$v11;
export const vJ = $$w12;