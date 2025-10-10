import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Label } from "../905/270045";
import { BannerInsetModal } from "../figma_app/59509";
import { BannerMessage } from "../905/363675";
import { SelectGroupLabel, SelectSeparator, SelectContainer, SelectOptionReset } from "../905/493196";
import { Link } from "../905/438674";
import { InputComponent } from "../905/185998";
import { Textarea } from "../905/909590";
import { Checkbox } from "../905/274480";
import { LoadingSpinner } from "../905/443820";
import { ButtonLarge } from "../905/521428";
import { UI3ConditionalWrapper } from "../905/341359";
import { setupThemeContext } from "../905/614223";
import { renderI18nText, getI18nString } from "../905/303541";
import { getSelectedView } from "../figma_app/386952";
import { selectCurrentUser } from "../905/372672";
import { z } from "../905/239603";
import { createMetaValidator, APIParameterUtils } from "../figma_app/181241";
var b = (e => (e[e.ABUSE_TYPE_UNSPECIFIED = 0] = "ABUSE_TYPE_UNSPECIFIED", e[e.ABUSE_TYPE_SPAM = 1] = "ABUSE_TYPE_SPAM", e[e.ABUSE_TYPE_MALWARE = 2] = "ABUSE_TYPE_MALWARE", e[e.ABUSE_TYPE_PHISHING = 3] = "ABUSE_TYPE_PHISHING", e[e.ABUSE_TYPE_FRAUD_SCAM_IMPERSONATION = 4] = "ABUSE_TYPE_FRAUD_SCAM_IMPERSONATION", e[e.ABUSE_TYPE_INAPPROPRIATE_CONTENT = 5] = "ABUSE_TYPE_INAPPROPRIATE_CONTENT", e[e.ABUSE_TYPE_ILLEGAL_CONTENT = 6] = "ABUSE_TYPE_ILLEGAL_CONTENT", e[e.ABUSE_TYPE_DMCA_COPYRIGHT_TRADEMARK = 99] = "ABUSE_TYPE_DMCA_COPYRIGHT_TRADEMARK", e[e.ABUSE_TYPE_OTHER = 100] = "ABUSE_TYPE_OTHER", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED", e))(b || {});
function T(e) {
  switch (e) {
    case 0:
    case "ABUSE_TYPE_UNSPECIFIED":
      return 0;
    case 1:
    case "ABUSE_TYPE_SPAM":
      return 1;
    case 2:
    case "ABUSE_TYPE_MALWARE":
      return 2;
    case 3:
    case "ABUSE_TYPE_PHISHING":
      return 3;
    case 4:
    case "ABUSE_TYPE_FRAUD_SCAM_IMPERSONATION":
      return 4;
    case 5:
    case "ABUSE_TYPE_INAPPROPRIATE_CONTENT":
      return 5;
    case 6:
    case "ABUSE_TYPE_ILLEGAL_CONTENT":
      return 6;
    case 99:
    case "ABUSE_TYPE_DMCA_COPYRIGHT_TRADEMARK":
      return 99;
    case 100:
    case "ABUSE_TYPE_OTHER":
      return 100;
    default:
      return -1;
  }
}
function I(e) {
  switch (e) {
    case 0:
      return "ABUSE_TYPE_UNSPECIFIED";
    case 1:
      return "ABUSE_TYPE_SPAM";
    case 2:
      return "ABUSE_TYPE_MALWARE";
    case 3:
      return "ABUSE_TYPE_PHISHING";
    case 4:
      return "ABUSE_TYPE_FRAUD_SCAM_IMPERSONATION";
    case 5:
      return "ABUSE_TYPE_INAPPROPRIATE_CONTENT";
    case 6:
      return "ABUSE_TYPE_ILLEGAL_CONTENT";
    case 99:
      return "ABUSE_TYPE_DMCA_COPYRIGHT_TRADEMARK";
    case 100:
      return "ABUSE_TYPE_OTHER";
    default:
      return "UNRECOGNIZED";
  }
}
let $$A = z.object({});
let x = new class {
  constructor() {
    this.ReportAbuseValidator = createMetaValidator("ReportAbuseValidator", $$A, "xrv_api_report_abuse", !0);
    this.reportAbuse = (e, t) => this.ReportAbuseValidator.validate(async ({
      xr: r
    }) => await r.post("/api/abuse_report/report_abuse", APIParameterUtils.toAPIParameters({
      ...e
    }), {
      retryCount: 0,
      timeout: t
    }));
  }
}();
let N = "form-module--formSectionContainer--fktvj";
let C = "form-module--formSectionInputContainer--NcZhM";
let w = jsx("span", {
  className: "form-module--requiredFieldIndicator--EJg4r",
  children: "*"
});
let O = {
  [b.UNRECOGNIZED]: renderI18nText("report_abuse.abuse_type.unspecified_value"),
  [b.ABUSE_TYPE_UNSPECIFIED]: renderI18nText("report_abuse.abuse_type.unspecified_value"),
  [b.ABUSE_TYPE_SPAM]: renderI18nText("report_abuse.abuse_type.spam"),
  [b.ABUSE_TYPE_MALWARE]: renderI18nText("report_abuse.abuse_type.malware"),
  [b.ABUSE_TYPE_PHISHING]: renderI18nText("report_abuse.abuse_type.phishing"),
  [b.ABUSE_TYPE_FRAUD_SCAM_IMPERSONATION]: renderI18nText("report_abuse.abuse_type.fraud_scam_impersonation"),
  [b.ABUSE_TYPE_INAPPROPRIATE_CONTENT]: renderI18nText("report_abuse.abuse_type.inappropriate_content"),
  [b.ABUSE_TYPE_ILLEGAL_CONTENT]: renderI18nText("report_abuse.abuse_type.illegal_content"),
  [b.ABUSE_TYPE_DMCA_COPYRIGHT_TRADEMARK]: renderI18nText("report_abuse.abuse_type.dmca_copyright_trademark"),
  [b.ABUSE_TYPE_OTHER]: renderI18nText("report_abuse.abuse_type.other")
};
function R(e, t, r) {
  return jsxs("div", {
    children: [jsx(Label, {
      className: "form-module--formSectionLabel--eSXJg",
      htmlFor: t,
      children: e
    }), " ", r ? null : w]
  });
}
export let $$L0 = function (e) {
  let t = getSelectedView();
  let r = selectCurrentUser();
  let [S, v] = useState(b.ABUSE_TYPE_UNSPECIFIED);
  let A = S > 0 && S !== b.ABUSE_TYPE_DMCA_COPYRIGHT_TRADEMARK;
  let L = S === b.ABUSE_TYPE_DMCA_COPYRIGHT_TRADEMARK;
  let [P, D] = useState(() => e.reportedContent ? e.reportedContent : t && ("fullscreen" === t.view || "communityHub" === t.view && "searchAndBrowse" !== t.subView && "monetizationRedirectView" !== t.subView) ? window.location.href : "");
  let [k, M] = useState("");
  let [F, j] = useState(r?.email || "");
  let U = null !== F.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  let [B, G] = useState(!1);
  let V = A && P.trim().length > 0 && k.trim().length > 0 && U && B;
  let [H, z] = useState(!1);
  let [W, K] = useState(null);
  let Y = async () => {
    if (V) {
      z(!0);
      K(null);
      try {
        await x.reportAbuse({
          abuseType: S,
          reportedContent: P.trim(),
          additionalDescription: k.trim(),
          reporterEmail: F.trim()
        }, 8e3);
        K(!0);
      } catch (e) {
        console.error(e.cause?.message || e.data?.message || e.message || getI18nString("report_abuse.api_call_failure"));
        z(!1);
        K(!1);
      }
    }
  };
  return jsx("div", {
    className: "form-module--formContainer--Eas7T",
    children: jsx(UI3ConditionalWrapper, {
      children: jsxs(setupThemeContext, {
        brand: "design",
        children: [null !== W && jsx(BannerInsetModal, {
          variant: W ? "success" : "danger",
          children: jsx(BannerMessage, {
            title: W ? renderI18nText("report_abuse.submission_successful_title") : renderI18nText("report_abuse.submission_failed_title"),
            children: W ? renderI18nText("report_abuse.submission_successful_description") : renderI18nText("report_abuse.submission_failed_description")
          })
        }), !W && jsxs(Fragment, {
          children: [jsx(Label, {
            variant: "secondary",
            children: renderI18nText("report_abuse.required_field_info_text", {
              asterisk: w
            })
          }), jsx("div", {
            className: "form-module--typeSelectionContainer--aNd5t",
            children: jsxs(SelectGroupLabel, {
              value: S ? I(S) : "",
              onChange: e => {
                v(T(e));
              },
              children: [jsx(SelectSeparator, {
                width: "fill",
                size: "lg",
                label: R(renderI18nText("report_abuse.abuse_type.label")),
                placeholder: getI18nString("report_abuse.abuse_type.placeholder"),
                "data-testid": "abuse-type-select-trigger"
              }), jsx(SelectContainer, {
                "data-testid": "abuse-type-select-container",
                children: Object.values(b).filter(e => "number" == typeof e && e > 0).sort((e, t) => e === b.ABUSE_TYPE_OTHER ? 1 : t === b.ABUSE_TYPE_OTHER ? -1 : I(T(e)).localeCompare(I(T(t)))).map(e => jsx(SelectOptionReset, {
                  value: I(T(e)),
                  children: O[T(e)]
                }, e))
              })]
            })
          }), L ? jsx("div", {
            "data-testid": "abuse-hub-link-text",
            children: renderI18nText("report_abuse.abuse_hub_link_label", {
              form_link: jsx(Link, {
                newTab: !0,
                href: "https://help.figma.com/hc/requests/new?ticket_form_id=29069632540055",
                children: renderI18nText("report_abuse.abuse_hub_link_text")
              })
            })
          }) : jsxs(Fragment, {
            children: [jsxs("div", {
              className: N,
              children: [R(renderI18nText("report_abuse.reported_content_input_label"), "reportedContent"), jsx("div", {
                className: C,
                children: jsx(InputComponent, {
                  id: "reportedContent",
                  size: "lg",
                  placeholder: getI18nString("report_abuse.reported_content_placeholder"),
                  value: P || "",
                  onChange: e => {
                    e.length <= 1e3 && D(e);
                  },
                  disabled: H
                })
              })]
            }), jsxs("div", {
              className: N,
              children: [R(renderI18nText("report_abuse.additional_description_input_label"), "additionalDescription"), jsx("div", {
                className: C,
                children: jsx(Textarea, {
                  id: "additionalDescription",
                  placeholder: getI18nString("report_abuse.additional_description_placeholder"),
                  value: k || "",
                  onChange: e => {
                    e.length <= 1e3 && M(e);
                  },
                  disabled: H
                })
              })]
            }), jsxs("div", {
              className: N,
              children: [R(renderI18nText("report_abuse.email_input_label"), "email"), jsx("div", {
                className: C,
                children: jsx(InputComponent, {
                  id: "email",
                  size: "lg",
                  placeholder: getI18nString("report_abuse.email_placeholder"),
                  value: F || "",
                  onChange: j,
                  disabled: H
                })
              })]
            }), jsx(Checkbox, {
              checked: B,
              onChange: G,
              disabled: H,
              label: jsxs(Label, {
                children: [renderI18nText("report_abuse.confirmation_checkbox_label"), " ", w]
              })
            }), function (e, t, r) {
              let i = jsx("span", {
                className: "form-module--inlineLoadingSpinner--DrfkC",
                children: jsx(LoadingSpinner, {
                  size: "md",
                  loadingText: getI18nString("report_abuse.submit_report_button_loading_text")
                })
              });
              return jsx("div", {
                className: "form-module--submitButtonContainer--9Tc0g",
                children: jsxs(ButtonLarge, {
                  variant: "primary",
                  onClick: e,
                  disabled: !t || r,
                  "data-testid": "submit-report-button",
                  children: [r && i, r ? getI18nString("report_abuse.submit_report_button_loading_text") : renderI18nText("report_abuse.submit_report_button")]
                })
              });
            }(Y, V, H)]
          })]
        })]
      })
    })
  });
};
export const A = $$L0;