import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { xf } from "../figma_app/416935";
import { ks } from "../figma_app/637027";
import { s as _$$s } from "../cssbuilder/589278";
import { s as _$$s2 } from "../905/573154";
import { $z } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { d as _$$d } from "../905/44199";
import { e0 } from "../905/696396";
import { Ju } from "../905/102752";
import { P } from "../905/392438";
function j(e) {
  return jsx("div", {
    children: e.token.content
  });
}
let y = e => ({
  state: xf(e.trim()) ? _$$d.OK : _$$d.ERROR,
  content: e
});
let $$w0 = Ju(function (e) {
  let t = hS({
    onClose: e.onClose,
    open: e.open
  });
  let [a, d] = useState(e.currentContacts);
  let [v, w] = useState({
    inputValue: "",
    tokens: e.currentContacts.split(",").map(e => y(e)),
    errorMessage: ""
  });
  let k = useDispatch();
  let E = () => v.tokens.filter(e => e.state === _$$d.OK).map(e => e.content).join(",");
  let C = () => v.tokens.filter(e => e.state === _$$d.ERROR).length > 0;
  return jsx(fu, {
    name: e0.CHANGE_BILLING_CONTACT_MODAL,
    children: jsx(bL, {
      manager: t,
      width: 341,
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: getI18nString(e.isOrg ? "payments.org_change_billing_contact" : "payments.pro_change_billing_contact")
          })
        }), jsxs(nB, {
          children: [jsx("div", {
            className: _$$s.colorTextSecondary.mb8.font11.$,
            children: renderI18nText(e.isOrg ? "payments.org_enter_an_email_address" : "payments.pro_enter_an_email_address")
          }), e.isOrg ? jsx(P, {
            autocomplete: v,
            onChange: w,
            validateToken: y,
            TokenComponent: j,
            autoFocus: !1,
            placeholder: getI18nString("payments.change_billing_contact_placeholder")
          }) : jsx(ks, {
            value: a,
            onChange: e => d(e.target.value)
          })]
        }), jsx(wi, {
          children: jsxs(jk, {
            children: [jsx($z, {
              variant: "secondary",
              onClick: e.onClose,
              trackingProperties: {
                trackingDescriptor: _$$c.CANCEL
              },
              children: renderI18nText("payments.cancel")
            }), jsx($z, {
              type: "submit",
              onClick: () => {
                if (e.isOrg && C()) {
                  k(_$$s2.error(getI18nString("payments.invalid_billing_contact_error"), 5e3));
                  return;
                }
                let t = e.isOrg ? E() : a;
                if (!t) {
                  k(_$$s2.error(getI18nString("payments.missing_billing_contact_error"), 5e3));
                  return;
                }
                e.onSubmit(t).then(e.onClose).catch(e => {
                  console.error(e);
                });
              },
              trackingProperties: {
                trackingDescriptor: _$$c.SAVE
              },
              children: renderI18nText("payments.save")
            })]
          })
        })]
      })
    })
  });
}, "ChangeBillingContact");
export const E = $$w0;