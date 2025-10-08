import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useDialogClose } from "../905/749786";
import { useModalManager } from "../905/437088";
import { ModalRootComponent, ModalFormContents } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { Button } from "../905/521428";
import { Link } from "../905/438674";
import { setupAutofocusHandler } from "../905/128376";
import { hp } from "../vendor/565136";
import { ConfirmationModal } from "../905/441305";
import { renderI18nText, getI18nString } from "../905/303541";
import { showModalHandler } from "../905/156213";
import { showPhoneSetupModal } from "../905/355291";
import { putUserAction } from "../figma_app/24841";
import { qC, lJ, vJ } from "../905/264101";
import { Z } from "../905/854480";
import { selectCurrentUser, hasPasswordOrSSO } from "../905/372672";
import { resetTwoFactorAuthSetup, getTwoFactorAuthSetup } from "../905/990455";
import { registerModal } from "../905/102752";
import { _ as _$$_ } from "../905/799322";
import { J } from "../905/211135";
import { p_, Hx, G6, KA, aY, _Z, z3 } from "../figma_app/639088";
let $$C0 = registerModal(function (e) {
  let {
    open,
    onClose
  } = e;
  let r = useDispatch();
  let s = selectCurrentUser();
  let d = Z();
  let c = () => {
    if (!s) return null;
    resetTwoFactorAuthSetup();
    r(putUserAction({
      user: {
        id: s.id,
        two_factor_secret_loaded: !1
      },
      userInitiated: !1
    }));
  };
  let u = useModalManager({
    open,
    onClose: () => {
      s?.two_factor_secret_loaded && c();
      onClose();
    }
  });
  return s ? s.email_validated_at ? jsx(ModalRootComponent, {
    width: "lg",
    manager: u,
    children: hasPasswordOrSSO(s) ? s.two_factor_secret_loaded ? s.two_factor_app_enabled ? jsx(k, {}) : jsx(N, {}) : jsx(R, {}) : jsx(_$$_, {
      twoFactorAuth: d,
      fplModal: !0,
      title: renderI18nText("auth.two-factor-setup.set_up_two_factor_authentication")
    })
  }) : jsx(ConfirmationModal, {
    title: getI18nString("auth.two-factor-setup.a_verified_email_is_required"),
    onConfirm: () => {
      r(qC());
    },
    confirmText: getI18nString("auth.two-factor-setup.resend_verification_email"),
    ...e,
    children: jsx(Fragment, {
      children: getI18nString("auth.two-factor-setup.verify-before-enabling")
    })
  }) : null;
});
let T = () => {
  let e = useDialogClose();
  return () => e({
    source: "other"
  });
};
function k() {
  let e = useDispatch();
  let t = T();
  return jsxs(DialogContents, {
    children: [jsx(DialogHeader, {
      children: jsx(DialogTitle, {
        children: renderI18nText("auth.two-factor-setup.two_factor_authentication_enabled")
      })
    }), jsx(DialogBody, {
      children: renderI18nText("auth.two-factor-setup.continue-to-recovery-code-setup")
    }), jsx(DialogFooter, {
      children: jsxs(DialogActionStrip, {
        children: [jsx(Button, {
          variant: "secondary",
          onClick: t,
          children: renderI18nText("auth.two-factor-setup.close")
        }), jsx(Button, {
          variant: "primary",
          onClick: () => {
            t();
            e(showModalHandler({
              type: J,
              showModalsBeneath: !0
            }));
          },
          children: renderI18nText("auth.two-factor-setup.continue_to_recovery_codes")
        })]
      })
    })]
  });
}
function R() {
  let e = useDispatch();
  let t = selectCurrentUser();
  let i = Z();
  let r = T();
  return t ? jsxs(DialogContents, {
    children: [jsx(DialogHeader, {
      children: jsx(DialogTitle, {
        children: renderI18nText("auth.two-factor-setup.download_mobile_app")
      })
    }), jsxs(DialogBody, {
      children: [renderI18nText("auth.two-factor-setup.authenticator-app-needed"), jsxs("ul", {
        className: p_,
        children: [jsx("li", {
          children: jsx(Link, {
            newTab: !0,
            href: "https://support.google.com/accounts/answer/1066447",
            children: renderI18nText("auth.two-factor-setup.google_authenticator")
          })
        }), jsx("li", {
          children: jsx(Link, {
            newTab: !0,
            href: "https://duo.com/product/trusted-users/two-factor-authentication/duo-mobile",
            children: renderI18nText("auth.two-factor-setup.duo_mobile")
          })
        }), jsx("li", {
          children: jsx(Link, {
            newTab: !0,
            href: "https://support.microsoft.com/en-us/account-billing/download-microsoft-authenticator-351498fc-850a-45da-b7b6-27e523b8702a",
            children: renderI18nText("auth.two-factor-setup.msft")
          })
        })]
      })]
    }), jsx(DialogFooter, {
      children: jsxs("div", {
        className: Hx,
        children: ["gov" !== window.INITIAL_OPTIONS.cluster_name && jsx(Button, {
          variant: "link",
          onClick: () => {
            r();
            e(showPhoneSetupModal());
          },
          children: renderI18nText("auth.two-factor-setup.send_me_an_sms_instead")
        }), jsxs("div", {
          className: G6,
          children: [jsx(Button, {
            variant: "secondary",
            onClick: r,
            children: renderI18nText("auth.two-factor-setup.cancel")
          }), jsx(Button, {
            onClick: () => {
              hasPasswordOrSSO(t) && e(lJ({
                token: t.password_token,
                mfaToken: t.mfa_setup_token
              }));
            },
            variant: "primary",
            disabled: i.loading,
            children: renderI18nText("auth.two-factor-setup.continue")
          })]
        })]
      })
    })]
  }) : null;
}
function N() {
  let e = useDispatch();
  let t = Z();
  let i = setupAutofocusHandler();
  let s = T();
  let [o, u] = useState(!0);
  let h = () => {
    u(!o);
  };
  return jsxs(ModalFormContents, {
    onSubmit: t => {
      t.preventDefault();
      let i = t.target.elements.namedItem("otp");
      i.select();
      e(vJ({
        otp: i.value
      }));
    },
    children: [jsx(DialogHeader, {
      children: jsx(DialogTitle, {
        children: renderI18nText("auth.two-factor-setup.scan_qr_code")
      })
    }), jsxs(DialogBody, {
      children: [o ? jsxs("div", {
        children: [jsx("div", {
          children: renderI18nText("auth.two-factor-setup.scan_the_qr_code_into_your_app")
        }), jsx("div", {
          className: KA,
          children: jsx(hp, {
            value: getTwoFactorAuthSetup().provisioning_uri || "",
            bgColor: "#f0f0f0",
            size: 200
          })
        }), jsx("div", {
          children: jsx(Button, {
            variant: "link",
            onClick: h,
            children: renderI18nText("auth.two-factor-setup.click_here_to_manually_type_the_code_instead")
          })
        })]
      }) : jsxs("div", {
        children: [jsx("div", {
          children: renderI18nText("auth.two-factor-setup.type_the_text_code_into_your_app")
        }), jsx("div", {
          className: aY,
          children: getTwoFactorAuthSetup().secret?.match(/.{4}/g)?.join(" ")
        }), jsx(Button, {
          variant: "link",
          onClick: h,
          children: renderI18nText("auth.two-factor-setup.click_here_to_scan_a_qr_code_instead")
        })]
      }), jsx("div", {
        style: {
          marginTop: "20px"
        },
        children: renderI18nText("auth.two-factor-setup.enter-code-from-app")
      }), jsx("input", {
        name: "otp",
        type: "text",
        className: _Z,
        ref: i,
        placeholder: getI18nString("auth.two-factor.authentication-code")
      }), jsx("div", {
        className: z3,
        children: t.currentError || ""
      })]
    }), jsx(DialogFooter, {
      children: jsxs(DialogActionStrip, {
        children: [jsx(Button, {
          variant: "secondary",
          onClick: s,
          children: renderI18nText("auth.two-factor-setup.cancel")
        }), jsx(Button, {
          variant: "primary",
          type: "submit",
          disabled: t.loading,
          children: renderI18nText("auth.two-factor-setup.verify")
        })]
      })
    })]
  });
}
export const t = $$C0;