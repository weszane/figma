import { jsxs, jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { setupAutofocusHandler } from "../905/128376";
import { Rq } from "../905/38914";
import { Y9, hE, nB, wi } from "../figma_app/272243";
import { $n } from "../905/521428";
import { renderI18nText, getI18nString } from "../905/303541";
import { popModalStack } from "../905/156213";
import { BD, BE } from "../905/264101";
import { _Z, z3, Hx, G6, bE } from "../figma_app/639088";
export function $$m0(e) {
  let t = useDispatch();
  let i = setupAutofocusHandler();
  let m = () => {
    t(BD());
  };
  let h = e => {
    e.preventDefault();
    let i = e.currentTarget;
    i.elements.password.select();
    let n = "";
    for (let e = 0; e < i.elements.length; e++) {
      let t = i.elements.item(e);
      if ("password" === t.name) {
        n = t.value;
        break;
      }
    }
    t(BE({
      password: n
    }));
  };
  let g = e => {
    e.preventDefault();
    t(popModalStack());
  };
  return e.fplModal ? jsxs(Rq, {
    onSubmit: h,
    children: [jsx(Y9, {
      children: jsx(hE, {
        children: e.title
      })
    }), jsxs(nB, {
      children: [jsx("div", {
        children: renderI18nText("settings.require_password.for_security_purposes_please_re_enter_your_password_below")
      }), jsx("input", {
        name: "password",
        type: "password",
        className: _Z,
        ref: i,
        placeholder: getI18nString("settings.require_password.current_password")
      }), jsx("div", {
        className: z3,
        children: e.twoFactorAuth.currentError || "\xa0"
      })]
    }), jsx(wi, {
      children: jsxs("div", {
        className: Hx,
        children: [jsx($n, {
          variant: "link",
          onClick: m,
          children: renderI18nText("settings.require_password.forgot_password")
        }), jsxs("div", {
          className: G6,
          children: [jsx($n, {
            variant: "secondary",
            onClick: g,
            children: renderI18nText("modal.cancel")
          }), jsx($n, {
            type: "submit",
            disabled: e.twoFactorAuth.loading,
            children: renderI18nText("settings.require_password.continue")
          })]
        })]
      })
    })]
  }) : jsxs("form", {
    onSubmit: h,
    children: [jsx("div", {
      children: renderI18nText("settings.require_password.for_security_purposes_please_re_enter_your_password_below")
    }), jsx("input", {
      name: "password",
      type: "password",
      className: _Z,
      ref: e => {
        e && e.focus();
      },
      placeholder: getI18nString("settings.require_password.current_password")
    }), jsx("div", {
      className: z3,
      children: e.twoFactorAuth.currentError || ""
    }), jsxs("div", {
      className: bE,
      children: [jsx($n, {
        variant: "link",
        onClick: m,
        children: renderI18nText("settings.require_password.forgot_password")
      }), jsxs("div", {
        className: G6,
        children: [jsx($n, {
          variant: "secondary",
          onClick: g,
          children: renderI18nText("modal.cancel")
        }), jsx($n, {
          type: "submit",
          disabled: e.twoFactorAuth.loading,
          children: renderI18nText("settings.require_password.continue")
        })]
      })]
    })]
  });
}
export const _ = $$m0;
