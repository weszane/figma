import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { vo, Y9, hE, nB, wi } from "../figma_app/272243";
import { Button } from "../905/521428";
import { ModalRootComponent } from "../905/38914";
import { h as _$$h } from "../905/207101";
import { renderI18nText } from "../905/303541";
import { popModalStack } from "../905/156213";
import { Yu, sp } from "../905/355291";
import { Ve, MV } from "../905/264101";
import { Z } from "../905/854480";
import { selectCurrentUser, hasPasswordOrSSO } from "../905/372672";
import { registerModal } from "../905/102752";
import { _ as _$$_ } from "../905/799322";
import { aY, F4, Hx, G6 } from "../figma_app/639088";
export let $$y0 = registerModal(function (e) {
  let {
    open,
    onClose
  } = e;
  let f = selectCurrentUser();
  let y = Z();
  let b = useDispatch();
  let v = useModalManager({
    open,
    onClose
  });
  return (_$$h(() => {
    f && hasPasswordOrSSO(f) && b(Ve({
      token: f.password_token
    }));
  }), f) ? jsx(ModalRootComponent, {
    manager: v,
    width: "lg",
    children: hasPasswordOrSSO(f) ? jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: renderI18nText("auth.two-factor-setup.two_factor_recovery_codes")
        })
      }), jsx(nB, {
        children: (() => {
          if (!f.backup_codes) return jsx("div", {
            children: renderI18nText("auth.two-factor-setup.please_wait")
          });
          {
            let e = f.backup_codes.map(e => jsx("div", {
              className: aY,
              children: e
            }, e));
            return jsxs("div", {
              children: [renderI18nText("auth.two-factor-setup.recovery-code-explanation"), jsx("div", {
                className: F4,
                children: e
              })]
            });
          }
        })()
      }), jsx(wi, {
        children: jsxs("div", {
          className: Hx,
          children: [jsx(Button, {
            variant: "link",
            onClick: () => {
              b(MV());
            },
            children: renderI18nText("auth.two-factor-setup.regenerate_codes")
          }), jsxs("div", {
            className: G6,
            children: [jsx(Button, {
              variant: "secondary",
              onClick: e => {
                e.preventDefault();
                b(popModalStack());
              },
              children: renderI18nText("auth.two-factor-setup.close")
            }), jsx(Button, {
              onClick: () => {
                b(popModalStack());
                b(Yu());
              },
              children: renderI18nText("auth.two-factor-setup.sms_settings")
            })]
          })]
        })
      })]
    }) : jsx(_$$_, {
      twoFactorAuth: y,
      fplModal: !0,
      title: renderI18nText("auth.two-factor-setup.two_factor_recovery_codes")
    })
  }) : null;
}, sp);
export const J = $$y0;