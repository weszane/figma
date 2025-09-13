import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { captureMessage } from "../905/11";
import { renderI18nText, getI18nString } from "../905/303541";
import { yH } from "../figma_app/240735";
import { useState } from "react";
import { trackEventAnalytics } from "../905/449184";
import { FocusCheckbox, BigTextInputForwardRef, ButtonBasePrimaryTracked } from "../figma_app/637027";
import { hideModal } from "../905/156213";
import { _6 } from "../figma_app/386952";
import { OJ } from "../905/519092";
import { shuffle } from "../figma_app/656233";
import g from "classnames";
import { c$, wv, Ve } from "../figma_app/236327";
import { z, Z } from "../905/306088";
import { v as _$$v } from "../905/318279";
import { pL } from "../figma_app/639088";
import { Q } from "../905/249555";
function p({
  id: e,
  label: t,
  children: r,
  onChange: s
}) {
  let [i, n] = useState(!1);
  return jsxs("fieldset", {
    name: e,
    children: [jsxs("div", {
      className: "survey_option--inputContainer---R-Fh",
      children: [jsx(FocusCheckbox, {
        id: e,
        checked: i,
        onChange: e => {
          n(!i);
          s && s(e);
        }
      }), jsx("label", {
        className: "survey_option--label--NqXEk",
        htmlFor: e,
        children: t
      })]
    }), i && r && jsx("div", {
      className: "survey_option--subContainer--Omjmy",
      children: r
    })]
  });
}
var h = g;
function y(e) {
  let [t, r] = useState("");
  let s = e => {
    r(e.target.value);
  };
  return e.textarea ? jsx(_$$v, {
    value: t,
    onChange: s,
    ...e
  }) : jsx(BigTextInputForwardRef, {
    id: e.id,
    className: "survey_text_input--input--Q1W-9",
    placeholder: e.placeholder,
    maxLength: 100,
    value: t,
    onChange: s
  });
}
let w = "downgrade_survey_modal_component_v2--surveyQuestions--E5X6t";
let j = "downgrade_survey_modal_component_v2--researchContact--qGc3V";
let T = "downgrade_survey_modal_component_v2--hiddenInput--04h5p";
let E = "downgrade_survey_modal_component_v2--radio--xvUsz";
let I = [{
  id: "brl",
  shorthand: "BRL"
}, {
  id: "cad",
  shorthand: "CAD"
}, {
  id: "eur",
  shorthand: "EUR"
}, {
  id: "gbp",
  shorthand: "GBP"
}, {
  id: "jpy",
  shorthand: "JPY"
}];
function N({
  id: e,
  shorthand: t
}) {
  return jsxs("div", {
    className: "downgrade_survey_modal_component_v2--currencyContainer--CoFln",
    children: [jsx("p", {
      children: renderI18nText(`downgrade_survey.survey_option.too_expensive.${e}`)
    }), jsx("p", {
      className: "downgrade_survey_modal_component_v2--currencyShorthand--xhQpy",
      children: t
    })]
  });
}
let C = [{
  id: "too_expensive",
  value: "Too expensive",
  children: jsx(function () {
    let e = "other_currency";
    let [t, r] = useState("");
    let s = e => {
      r(e.currentTarget.id);
    };
    let i = [...I.map(({
      id: e,
      shorthand: t
    }) => jsx(c$, {
      id: e,
      onClick: s,
      children: jsx(N, {
        id: e,
        shorthand: t
      })
    }, e)), jsx(wv, {}, "separator"), jsx(c$, {
      id: e,
      onClick: s,
      children: renderI18nText("downgrade_survey.survey_option.too_expensive.other_currency")
    }, e)];
    return jsx("fieldset", {
      children: jsx(p, {
        id: "currency_conversion",
        label: getI18nString("downgrade_survey.survey_option.too_expensive.currency_conversion"),
        children: jsxs("fieldset", {
          className: h()({
            "downgrade_survey_modal_component_v2--currencySelector__other--khpqx": t === e
          }),
          children: [jsx(Ve, {
            label: t.length ? getI18nString(`downgrade_survey.survey_option.too_expensive.${t}`) : getI18nString("downgrade_survey.survey_option.too_expensive.currency_selector"),
            options: i
          }), jsx("input", {
            id: "currency",
            className: T,
            readOnly: !0,
            value: t
          }), t === e && jsx(y, {
            id: "currency_input",
            placeholder: getI18nString("downgrade_survey.survey_option.too_expensive.specify_currency")
          })]
        })
      })
    });
  }, {}),
  getSubOptions: e => {
    let t = Array.from(e.getElementsByTagName("input"));
    let r = t.find(e => "currency_conversion" === e.id);
    let a = t.find(e => "currency" === e.id);
    let s = a?.value;
    let i = t.find(e => "currency_input" === e.id);
    let n = i?.value || s || void 0;
    return {
      currencyConversion: r?.checked,
      currency: n
    };
  }
}, {
  id: "billing_structure_unclear",
  value: "Billing structure is unclear"
}, {
  id: "no_longer_using_figma_products",
  value: "No longer using Figma's products",
  children: jsx(function () {
    return jsxs("fieldset", {
      children: [jsx("legend", {
        className: "downgrade_survey_modal_component_v2--additionalQuestion--HfKNO",
        children: renderI18nText("downgrade_survey.survey_option.no_longer_using_figma_products.other_products")
      }), jsx(y, {
        id: "other_products",
        placeholder: getI18nString("downgrade_survey.survey_option.no_longer_using_figma_products.text_area")
      })]
    });
  }, {}),
  getSubOptions: e => {
    let t = Array.from(e.getElementsByTagName("input")).find(e => "other_products" === e.id);
    return {
      products: t?.value || void 0
    };
  }
}, {
  id: "project_inactive",
  value: "Project is over or no longer active"
}, {
  id: "accidental_upgrade",
  value: "Did not mean to upgrade"
}, {
  id: "switching_plans",
  value: "Switching to a different plan",
  children: jsx(function () {
    let [e, t] = useState("");
    return jsxs(Fragment, {
      children: [jsxs(z, {
        value: e,
        onChange: e => t(e),
        children: [jsx(Z, {
          className: E,
          value: "Starter plan",
          children: renderI18nText("downgrade_survey.survey_option.switching_plans.starter_plan")
        }), jsx(Z, {
          className: E,
          value: "Organization plan",
          children: renderI18nText("downgrade_survey.survey_option.switching_plans.organization_plan")
        }), jsx(Z, {
          className: E,
          value: "Enterprise plan",
          children: renderI18nText("downgrade_survey.survey_option.switching_plans.enterprise_plan")
        }), jsx(Z, {
          className: E,
          value: "Education plan",
          children: renderI18nText("downgrade_survey.survey_option.switching_plans.education_plan")
        })]
      }), jsx("input", {
        id: "new_plan",
        className: T,
        readOnly: !0,
        value: e
      })]
    });
  }, {}),
  getSubOptions: e => {
    let t = Array.from(e.getElementsByTagName("input")).find(e => "new_plan" === e.id);
    return {
      newPlan: t?.value || void 0
    };
  }
}];
let S = {
  id: "other",
  value: "Other",
  children: jsx(function () {
    return jsx(y, {
      className: "downgrade_survey_modal_component_v2--otherTextArea--pS5MZ",
      placeholder: getI18nString("downgrade_survey.survey_option.other.text_area"),
      textarea: !0
    });
  }, {}),
  getSubOptions: e => ({
    explanation: e.getElementsByTagName("textarea")[0].value || void 0
  })
};
let k = shuffle(C).concat(S);
function O({
  onSubmit: e
}) {
  let [t, r] = useState([]);
  let i = e => {
    let {
      id
    } = e.currentTarget;
    t.includes(id) ? r(t.filter(e => e !== id)) : r([...t, id]);
  };
  let o = useDispatch();
  let f = _6().teamId;
  return jsx(OJ, {
    title: getI18nString("downgrade_survey.header"),
    fixedTop: !0,
    minWidth: 370,
    maxWidth: 370,
    onClose: () => {
      o(hideModal());
    },
    dataTestId: "downgrade-survey-modal",
    isCloseHidden: !0,
    disableClickOutsideToHide: !0,
    children: jsxs("form", {
      className: "downgrade_survey_modal_component_v2--modalBody--tYceI",
      onSubmit: r => {
        r.preventDefault();
        let a = Array.from(r.currentTarget.getElementsByClassName(w)[0].getElementsByTagName("fieldset"));
        let s = t.map(e => {
          let t = a.find(t => t.name === e);
          let {
            value,
            getSubOptions
          } = k.find(t => t.id === e);
          return {
            reason: value,
            ...(getSubOptions && getSubOptions(t))
          };
        });
        let i = r.currentTarget.getElementsByClassName(j)[0].getElementsByTagName("input")[0].checked;
        trackEventAnalytics("Team Downgrade Survey", {
          teamId: f,
          canContact: i,
          selectedOptions: s.map(e => JSON.stringify(e))
        });
        e?.();
        o(hideModal());
      },
      children: [jsxs("div", {
        className: "downgrade_survey_modal_component_v2--exitSurvey--9HRcF",
        children: [jsxs("fieldset", {
          className: w,
          children: [jsx("legend", {
            children: renderI18nText("downgrade_survey.what_made_you_cancel_your_plan")
          }), !t.length && jsx("p", {
            className: Q,
            children: renderI18nText("downgrade_survey.select_one")
          }), k.map(({
            id: e,
            children: t
          }) => jsx(p, {
            id: e,
            label: getI18nString(`downgrade_survey.survey_option.${e}`),
            onChange: i,
            children: t
          }, e))]
        }), jsxs("fieldset", {
          className: j,
          children: [jsx("legend", {
            children: renderI18nText("downgrade_survey.research_contact")
          }), jsx(p, {
            id: "research",
            label: getI18nString("downgrade_survey.allow_research_contact")
          })]
        })]
      }), jsx("div", {
        className: "downgrade_survey_modal_component_v2--buttonRow--Y15LH",
        children: jsx(ButtonBasePrimaryTracked, {
          type: "submit",
          disabled: !t.length,
          className: pL,
          autoFocus: !1,
          children: renderI18nText("downgrade_survey.continue")
        })
      })]
    })
  });
}
export function $$F0({
  context: e
}) {
  let t = useDispatch();
  let r = useSelector(e => e.modalShown?.data.teamId);
  let l = useSelector(e => e.teams[r]);
  let d = "admin" === e ? getI18nString("downgrade_survey.go_back") : getI18nString("downgrade_survey.do_not_leave_team");
  let c = "leave-team" === e ? () => {
    captureMessage("User entered leave team survey");
    t(yH({
      team: l,
      userInitiated: !0
    }));
  } : void 0;
  return jsx(O, {
    cancelText: d,
    onSubmit: c
  });
}
export function $$P1() {
  return jsx($$F0, {
    context: "admin"
  });
}
export function $$L2() {
  return jsx($$F0, {
    context: "leave-team"
  });
}
export const DowngradeSurveyModal = $$F0;
export const DowngradeSurveyModalAdmin = $$P1;
export const DowngradeSurveyModalLeaveTeam = $$L2;