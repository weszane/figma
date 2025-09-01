import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { wA, d4 } from "../vendor/514228";
import { debounce } from "../905/915765";
import { xf } from "../figma_app/416935";
import { XHR } from "../905/910117";
import { Jn } from "../905/17223";
import { I as _$$I } from "../c5e2cae0/393403";
import { Lf, VE, Kz, tM, vd } from "../figma_app/637027";
import { B } from "../905/714743";
import { t as _$$t, tx } from "../905/303541";
import { Lo, to, Ce } from "../905/156213";
import { fu } from "../figma_app/831799";
import { Ju } from "../905/102752";
import { v as _$$v } from "../905/318279";
import { ey } from "../figma_app/918700";
import { Os, nO } from "../905/734904";
import { A as _$$A } from "../6828/364616";
import { A as _$$A2 } from "../5724/933949";
let y = "upgrade_contact_sales_modal--closeButton--715WY";
let T = () => [{
  name: _$$t("contact_sales.topic.request_a_sales_demo_or_talk_to_sales"),
  value: "request_a_sales_demo_or_talk_to_sales"
}, {
  name: _$$t("contact_sales.topic.billing_and_invoicing"),
  value: "billing_and_invoicing"
}, {
  name: _$$t("contact_sales.topic.technical_and_product_support"),
  value: "technical_and_product_support"
}, {
  name: _$$t("contact_sales.topic.educators_and_students"),
  value: "educators_and_students"
}];
let N = () => jsxs(Fragment, {
  children: [jsx("option", {
    value: "",
    disabled: !0,
    children: _$$t("contact_sales.which_topic_best_fits_your_needs")
  }), T().map(e => jsx("option", {
    value: e.value,
    "data-testid": `select-option-${e.value}`,
    children: e.name
  }, e.value))]
});
let b = () => [{
  name: _$$t("contact_sales.plan.starter"),
  value: "starter"
}, {
  name: _$$t("contact_sales.plan.professional"),
  value: "professional"
}, {
  name: _$$t("contact_sales.plan.organization"),
  value: "organization"
}, {
  name: _$$t("contact_sales.plan.enterprise"),
  value: "enterprise"
}, {
  name: _$$t("contact_sales.plan.figma_for_government"),
  value: "figma_for_government"
}, {
  name: _$$t("contact_sales.plan.not_sure"),
  value: "not_sure"
}];
let C = () => jsxs(Fragment, {
  children: [jsx("option", {
    value: "",
    disabled: !0,
    children: _$$t("contact_sales.what_figma_plan_are_you_inquiring_about")
  }), b().map(e => jsx("option", {
    value: e.value,
    "data-testid": `select-option-${e.value}`,
    children: e.name
  }, e.value))]
});
let w = Ju(function({
  hideModal: e
}) {
  return jsx(fu, {
    name: "Upgrade Contact Sales Success Modal",
    children: jsxs(ey, {
      hide: e,
      size: 480,
      children: [jsxs("div", {
        className: "upgrade_contact_sales_modal--successModalWrapper--xA5Mp",
        children: [jsxs("div", {
          className: "upgrade_contact_sales_modal--successModalTitle--Xgt1f upgrade_contact_sales_modal--modalTitle--7k87R text--fontPos13--xW8hS text--_fontBase--QdLsd",
          children: [jsx(B, {
            className: "upgrade_contact_sales_modal--successIcon---zT4I",
            svg: _$$A2
          }), tx("universal_upgrade.contact_sales.thank_you")]
        }), jsx(Jn, {
          className: y,
          onClick: e,
          innerText: "close"
        })]
      }), jsx("div", {
        className: "upgrade_contact_sales_modal--successModalText--f1aRe text--fontPos13--xW8hS text--_fontBase--QdLsd",
        children: tx("universal_upgrade.contact_sales.sales_will_reach_out")
      })]
    })
  });
}, "ContactSalesSuccessModal");
export function $$E0(e) {
  let t = wA();
  let a = d4(e => e.user);
  let [g, S] = useState({
    email: a?.email ?? "",
    name: a?.handle ?? "",
    overridePlaceholderText: e.overridePlaceholderText,
    freeText: "",
    result: void 0,
    companyName: void 0,
    companySize: "",
    jobTitle: "",
    topic: "",
    plan: "",
    product: "",
    phone: "",
    formErrors: {}
  });
  let T = () => {
    t(Lo());
  };
  let b = () => {
    t(to({
      type: w,
      data: {
        hideModal: () => t(Ce())
      }
    }));
  };
  let E = () => ({
    email: g.email,
    name: g.name,
    company_name: g.companyName,
    topic: g.topic,
    plan: g.plan,
    phone: g.phone,
    message: g.freeText,
    source: e.source,
    form_name: "topic_v1"
  });
  let A = debounce(() => {
    let e = {};
    let t = _$$t("universal_upgrade.this_field_is_required");
    if (g.email ? xf(g.email) || (e.email = _$$t("universal_upgrade.please_provide_a_valid_email_address")) : e.email = t, g.name || (e.name = t), g.companyName || (e.companyName = t), g.topic || (e.topic = t), g.plan || (e.plan = t), S(t => ({
      ...t,
      formErrors: e,
      result: void 0
    })), 0 === Object.keys(e).length) {
      let e = E();
      XHR.post("/api/form_post/org-lead-gen", e).then(() => {
        S(e => ({
          ...e,
          result: "success"
        }));
        b();
      }).catch(() => S(e => ({
        ...e,
        result: "error"
      })));
    }
  });
  let I = e => g.formErrors[e] ? "upgrade_contact_sales_modal--error--8vAcf basic_form--labeledInputGroup--aeD6L" : void 0;
  let k = e => {
    let t = g.formErrors[e];
    return t ? jsx("div", {
      "data-testid": "form-error",
      className: "upgrade_contact_sales_modal--errorMessage--FfxPx text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: t
    }) : null;
  };
  let P = (e, t, a = !1) => jsxs(Fragment, {
    children: [jsx(Lf, {
      htmlName: t,
      label: e,
      value: g[t] || "",
      onChange: e => {
        let a = {
          [t]: e.target.value
        };
        S(e => ({
          ...e,
          ...a
        }));
      },
      disabled: a,
      className: I(t)
    }), k(t)]
  });
  let M = (e, t, a) => {
    let r = I(t) || Os;
    return jsxs(Fragment, {
      children: [jsx("div", {
        className: r,
        children: jsxs("div", {
          className: "upgrade_contact_sales_modal--select--sFfZ- address_form--selectRowFull--8DtEB",
          children: [jsx(VE, {
            name: t,
            placeholder: e,
            defaultValue: "",
            "data-testid": `${t}-select`,
            onChange: e => {
              let a = {
                [t]: e.target.value
              };
              S(e => ({
                ...e,
                ...a
              }));
            },
            required: !0,
            children: a
          }), jsx(B, {
            className: nO,
            svg: _$$A
          })]
        })
      }), k(t)]
    });
  };
  return jsx(fu, {
    name: "Upgrade Contact Sales Modal",
    children: jsxs(ey, {
      className: "upgrade_contact_sales_modal--contactSalesModal--ExFaV",
      hide: T,
      size: 480,
      children: [jsxs("div", {
        className: "upgrade_contact_sales_modal--titleWrapper--mKMG2",
        children: [jsx("h1", {
          className: "upgrade_contact_sales_modal--modalTitle--7k87R text--fontPos13--xW8hS text--_fontBase--QdLsd",
          children: tx("universal_upgrade.contact_sales_title")
        }), jsx(Jn, {
          className: y,
          onClick: T,
          innerText: "close"
        })]
      }), jsxs("div", {
        className: "upgrade_contact_sales_modal--modalBody--FTi91",
        children: ["error" === g.result && jsxs(Fragment, {
          children: [jsx(_$$I, {
            message: _$$t("universal_upgrade.there_was_an_error_processing_your_information_please_try_again")
          }), jsx(Kz, {
            multiple: .5
          })]
        }), jsxs("fieldset", {
          children: [P(_$$t("universal_upgrade.email_address"), "email"), P(_$$t("universal_upgrade.full_name"), "name"), P(_$$t("universal_upgrade.company_name"), "companyName"), M(_$$t("contact_sales.which_topic_best_fits_your_needs"), "topic", N()), M(_$$t("contact_sales.what_figma_plan_are_you_inquiring_about"), "plan", C()), P(_$$t("contact_sales.phone_number_optional"), "phone")]
        }), jsx(Kz, {
          multiple: 1
        }), jsx("p", {
          children: tx("universal_upgrade.how_can_we_help_optional")
        }), jsx(Kz, {
          multiple: 1
        }), jsx(_$$v, {
          className: "upgrade_contact_sales_modal--freeTextInput--fE033 text--fontPos13--xW8hS text--_fontBase--QdLsd",
          value: g.freeText,
          onChange: e => S(t => ({
            ...t,
            freeText: e.target.value
          })),
          placeholder: g.overridePlaceholderText ?? _$$t("universal_upgrade.e_g_i_m_looking_to_set_up_a_demo_of_figma"),
          maxLength: 500
        })]
      }), jsxs("div", {
        className: "upgrade_contact_sales_modal--modalFooter--WNk7P",
        children: [jsx(tM, {
          onClick: T,
          children: tx("general.cancel")
        }), jsx(vd, {
          onClick: A,
          children: tx("universal_upgrade.submit")
        })]
      })]
    })
  });
}
export const UpgradeContactSalesModal = $$E0; 
