import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { wA } from "../vendor/514228";
import { g as _$$g } from "../905/749786";
import { hS } from "../905/437088";
import { bL, Rq } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { N as _$$N } from "../905/438674";
import { X } from "../905/128376";
import { hp } from "../vendor/565136";
import { R as _$$R } from "../905/441305";
import { tx, t as _$$t } from "../905/303541";
import { to } from "../905/156213";
import { Yu } from "../905/355291";
import { yJ } from "../figma_app/24841";
import { qC, lJ, vJ } from "../905/264101";
import { Z } from "../905/854480";
import { iZ, pS } from "../905/372672";
import { ed, r6 } from "../905/990455";
import { Ju } from "../905/102752";
import { _ as _$$_ } from "../905/799322";
import { J } from "../905/211135";
import { p_, Hx, G6, KA, aY, _Z, z3 } from "../figma_app/639088";
let $$C0 = Ju(function (e) {
  let {
    open,
    onClose
  } = e;
  let r = wA();
  let s = iZ();
  let d = Z();
  let c = () => {
    if (!s) return null;
    ed();
    r(yJ({
      user: {
        id: s.id,
        two_factor_secret_loaded: !1
      },
      userInitiated: !1
    }));
  };
  let u = hS({
    open,
    onClose: () => {
      s?.two_factor_secret_loaded && c();
      onClose();
    }
  });
  return s ? s.email_validated_at ? jsx(bL, {
    width: "lg",
    manager: u,
    children: pS(s) ? s.two_factor_secret_loaded ? s.two_factor_app_enabled ? jsx(k, {}) : jsx(N, {}) : jsx(R, {}) : jsx(_$$_, {
      twoFactorAuth: d,
      fplModal: !0,
      title: tx("auth.two-factor-setup.set_up_two_factor_authentication")
    })
  }) : jsx(_$$R, {
    title: _$$t("auth.two-factor-setup.a_verified_email_is_required"),
    onConfirm: () => {
      r(qC());
    },
    confirmText: _$$t("auth.two-factor-setup.resend_verification_email"),
    ...e,
    children: jsx(Fragment, {
      children: _$$t("auth.two-factor-setup.verify-before-enabling")
    })
  }) : null;
});
let T = () => {
  let e = _$$g();
  return () => e({
    source: "other"
  });
};
function k() {
  let e = wA();
  let t = T();
  return jsxs(vo, {
    children: [jsx(Y9, {
      children: jsx(hE, {
        children: tx("auth.two-factor-setup.two_factor_authentication_enabled")
      })
    }), jsx(nB, {
      children: tx("auth.two-factor-setup.continue-to-recovery-code-setup")
    }), jsx(wi, {
      children: jsxs(jk, {
        children: [jsx($n, {
          variant: "secondary",
          onClick: t,
          children: tx("auth.two-factor-setup.close")
        }), jsx($n, {
          variant: "primary",
          onClick: () => {
            t();
            e(to({
              type: J,
              showModalsBeneath: !0
            }));
          },
          children: tx("auth.two-factor-setup.continue_to_recovery_codes")
        })]
      })
    })]
  });
}
function R() {
  let e = wA();
  let t = iZ();
  let i = Z();
  let r = T();
  return t ? jsxs(vo, {
    children: [jsx(Y9, {
      children: jsx(hE, {
        children: tx("auth.two-factor-setup.download_mobile_app")
      })
    }), jsxs(nB, {
      children: [tx("auth.two-factor-setup.authenticator-app-needed"), jsxs("ul", {
        className: p_,
        children: [jsx("li", {
          children: jsx(_$$N, {
            newTab: !0,
            href: "https://support.google.com/accounts/answer/1066447",
            children: tx("auth.two-factor-setup.google_authenticator")
          })
        }), jsx("li", {
          children: jsx(_$$N, {
            newTab: !0,
            href: "https://duo.com/product/trusted-users/two-factor-authentication/duo-mobile",
            children: tx("auth.two-factor-setup.duo_mobile")
          })
        }), jsx("li", {
          children: jsx(_$$N, {
            newTab: !0,
            href: "https://support.microsoft.com/en-us/account-billing/download-microsoft-authenticator-351498fc-850a-45da-b7b6-27e523b8702a",
            children: tx("auth.two-factor-setup.msft")
          })
        })]
      })]
    }), jsx(wi, {
      children: jsxs("div", {
        className: Hx,
        children: ["gov" !== window.INITIAL_OPTIONS.cluster_name && jsx($n, {
          variant: "link",
          onClick: () => {
            r();
            e(Yu());
          },
          children: tx("auth.two-factor-setup.send_me_an_sms_instead")
        }), jsxs("div", {
          className: G6,
          children: [jsx($n, {
            variant: "secondary",
            onClick: r,
            children: tx("auth.two-factor-setup.cancel")
          }), jsx($n, {
            onClick: () => {
              pS(t) && e(lJ({
                token: t.password_token,
                mfaToken: t.mfa_setup_token
              }));
            },
            variant: "primary",
            disabled: i.loading,
            children: tx("auth.two-factor-setup.continue")
          })]
        })]
      })
    })]
  }) : null;
}
function N() {
  let e = wA();
  let t = Z();
  let i = X();
  let s = T();
  let [o, u] = useState(!0);
  let h = () => {
    u(!o);
  };
  return jsxs(Rq, {
    onSubmit: t => {
      t.preventDefault();
      let i = t.target.elements.namedItem("otp");
      i.select();
      e(vJ({
        otp: i.value
      }));
    },
    children: [jsx(Y9, {
      children: jsx(hE, {
        children: tx("auth.two-factor-setup.scan_qr_code")
      })
    }), jsxs(nB, {
      children: [o ? jsxs("div", {
        children: [jsx("div", {
          children: tx("auth.two-factor-setup.scan_the_qr_code_into_your_app")
        }), jsx("div", {
          className: KA,
          children: jsx(hp, {
            value: r6().provisioning_uri || "",
            bgColor: "#f0f0f0",
            size: 200
          })
        }), jsx("div", {
          children: jsx($n, {
            variant: "link",
            onClick: h,
            children: tx("auth.two-factor-setup.click_here_to_manually_type_the_code_instead")
          })
        })]
      }) : jsxs("div", {
        children: [jsx("div", {
          children: tx("auth.two-factor-setup.type_the_text_code_into_your_app")
        }), jsx("div", {
          className: aY,
          children: r6().secret?.match(/.{4}/g)?.join(" ")
        }), jsx($n, {
          variant: "link",
          onClick: h,
          children: tx("auth.two-factor-setup.click_here_to_scan_a_qr_code_instead")
        })]
      }), jsx("div", {
        style: {
          marginTop: "20px"
        },
        children: tx("auth.two-factor-setup.enter-code-from-app")
      }), jsx("input", {
        name: "otp",
        type: "text",
        className: _Z,
        ref: i,
        placeholder: _$$t("auth.two-factor.authentication-code")
      }), jsx("div", {
        className: z3,
        children: t.currentError || ""
      })]
    }), jsx(wi, {
      children: jsxs(jk, {
        children: [jsx($n, {
          variant: "secondary",
          onClick: s,
          children: tx("auth.two-factor-setup.cancel")
        }), jsx($n, {
          variant: "primary",
          type: "submit",
          disabled: t.loading,
          children: tx("auth.two-factor-setup.verify")
        })]
      })
    })]
  });
}
export const t = $$C0;