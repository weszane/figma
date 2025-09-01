import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { wA } from "../vendor/514228";
import { g as _$$g } from "../905/749786";
import { vo, Y9, hE, nB, wi } from "../figma_app/272243";
import { $n } from "../905/521428";
import { X } from "../905/128376";
import { Rq, bL } from "../905/38914";
import { hS } from "../905/437088";
import { oA } from "../905/663269";
import { Rs } from "../figma_app/288654";
import { zd, Bb, B7 } from "../905/651696";
import { R as _$$R } from "../905/441305";
import { s as _$$s } from "../cssbuilder/589278";
import { tx, t as _$$t } from "../905/303541";
import { to } from "../905/156213";
import { N$, qk } from "../905/355291";
import { rH, nm, uN } from "../905/264101";
import { Z } from "../905/854480";
import { pS, iZ } from "../905/372672";
import { Yh6 } from "../figma_app/43951";
import { Ib } from "../905/129884";
import { Ju, ZU } from "../905/102752";
import { _ as _$$_ } from "../905/799322";
import { t as _$$t2 } from "../905/751495";
import { Hx, G6, _Z, z3 } from "../figma_app/639088";
let k = () => {
  let e = _$$g();
  return () => e({
    source: "other"
  });
};
function R({
  setConfirm: e,
  user: t
}) {
  let i = wA();
  let r = k();
  let s = Rs(Yh6, {});
  let d = oA(s.data?.currentUser?.isMfaRequiredByMembershipOrg) && !t.two_factor_app_enabled;
  return jsxs(vo, {
    children: [jsx(Y9, {
      children: jsx(hE, {
        children: tx("auth.two-factor-setup.sms_two_factor_authentication_is_enabled")
      })
    }), jsx(nB, {
      children: tx("auth.two-factor-setup.phone-number-setup-enabled-info", {
        phoneNumber: t.phone_number
      })
    }), jsx(wi, {
      children: jsxs("div", {
        className: Hx,
        children: [jsx($n, {
          variant: "link",
          onClick: () => {
            e(!0);
          },
          disabled: d,
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": d ? _$$t("auth.two-factor-setup.disable-two-factor-blocked") : "",
          children: tx("auth.two-factor-setup.unregister_sms_number")
        }), jsxs("div", {
          className: G6,
          children: [jsx($n, {
            variant: "secondary",
            onClick: r,
            children: tx("auth.two-factor-setup.close")
          }), jsx($n, {
            onClick: () => {
              r();
              i(N$());
            },
            children: tx("auth.two-factor-setup.recovery_codes")
          })]
        })]
      })
    })]
  });
}
function N({
  user: e,
  resent: t,
  addPhone: i
}) {
  let r = Z();
  let s = wA();
  let u = k();
  let p = X();
  return jsxs(Rq, {
    onSubmit: e => {
      let t = e.target.elements.namedItem("code");
      t.select();
      s(rH({
        code: t.value
      }));
    },
    children: [jsx(Y9, {
      children: jsx(hE, {
        children: tx("auth.two-factor-setup.sms_two_factor_authentication")
      })
    }), jsxs(nB, {
      children: [tx("auth.two-factor-setup.sms-sent-message", {
        phoneNumber: e.temp_phone
      }), jsx("input", {
        type: "text",
        name: "code",
        ref: p,
        className: _Z,
        placeholder: _$$t("auth.two-factor.authentication-code")
      }), r.currentError && jsx("div", {
        className: z3,
        children: r.currentError || ""
      })]
    }), jsx(wi, {
      children: jsxs("div", {
        className: Hx,
        children: [t ? _$$t("auth.two-factor-setup.code_resent") : jsx($n, {
          variant: "link",
          onClick: i,
          children: tx("auth.two-factor-setup.resend_code")
        }), jsxs("div", {
          className: G6,
          children: [jsx($n, {
            variant: "secondary",
            onClick: u,
            children: tx("auth.two-factor-setup.cancel")
          }), jsx($n, {
            type: "submit",
            children: tx("auth.two-factor-setup.verify")
          })]
        })]
      })
    })]
  });
}
function P({
  addPhone: e,
  user: t
}) {
  let i = X();
  let r = Z();
  let s = wA();
  let u = k();
  return jsxs(Rq, {
    onSubmit: e,
    children: [jsx(Y9, {
      children: jsx(hE, {
        children: tx("auth.two-factor-setup.sms_two_factor_authentication")
      })
    }), jsxs(nB, {
      children: [tx("auth.two-factor-setup.enter-phone-number"), jsx("input", {
        type: "text",
        name: "phone",
        ref: i,
        className: _Z,
        placeholder: _$$t("auth.two-factor-setup.phone-number-placeholder")
      }), r.currentError && jsx("div", {
        className: z3,
        children: r.currentError
      }), jsx("div", {
        className: _$$s.mt12.colorTextTertiary.$,
        children: tx("auth.two-factor-setup.phone-number-opt-in")
      })]
    }), jsx(wi, {
      children: jsxs("div", {
        className: t.two_factor_app_enabled ? _$$s.flex.wFull.justifyEnd.$ : Hx,
        children: [!t.two_factor_app_enabled && jsx($n, {
          variant: "link",
          onClick: () => {
            u();
            s(to({
              type: _$$t2,
              showModalsBeneath: !0
            }));
          },
          children: tx("auth.two-factor-setup.use_an_authenticator_app_instead")
        }), jsxs("div", {
          className: G6,
          children: [jsx($n, {
            variant: "secondary",
            onClick: u,
            children: tx("auth.two-factor-setup.close")
          }), jsx($n, {
            disabled: r.loading,
            type: "submit",
            children: tx("auth.two-factor-setup.verify")
          })]
        })]
      })
    })]
  });
}
function O({
  user: e,
  manager: t,
  open: i,
  onClose: s
}) {
  let [o, l] = useState(!1);
  let [d, u] = useState(!1);
  let p = wA();
  let m = Z();
  let f = t => {
    let i = t.target.elements;
    let n = e.temp_phone;
    n ? u(!0) : (i.phone.select(), n = i.phone.value);
    n && p(nm({
      phone: n
    }));
  };
  return o ? jsx(_$$R, {
    title: jsx(zd, {}),
    onConfirm: () => {
      p(uN());
    },
    onCancel: () => {
      l(!1);
    },
    confirmText: jsx(Bb, {}),
    destructive: !0,
    open: i,
    onClose: s,
    children: e.two_factor_app_enabled ? tx("auth.two-factor-setup.remove-number-with-app-two-factor-on") : jsx(B7, {})
  }) : jsx(bL, {
    width: "lg",
    manager: t,
    children: pS(e) ? e.phone_number ? jsx(R, {
      setConfirm: l,
      user: e
    }) : e.phone_token ? jsx(N, {
      user: e,
      resent: d,
      addPhone: f
    }) : jsx(P, {
      addPhone: f,
      user: e
    }) : jsx(_$$_, {
      twoFactorAuth: m,
      fplModal: !0,
      title: tx("auth.two-factor-setup.sms_two_factor_authentication")
    })
  });
}
export let $$D0 = Ju(function (e) {
  let t = iZ();
  let i = hS(e);
  return t ? jsx(O, {
    user: t,
    manager: i,
    open: e.open,
    onClose: e.onClose
  }) : null;
}, qk, ZU.YES);
export const J = $$D0;