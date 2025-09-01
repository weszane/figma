import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { wA } from "../vendor/514228";
import { xb } from "../figma_app/465776";
import { sx } from "../905/449184";
import { B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t, tx } from "../905/303541";
import { D, _ as _$$_ } from "../figma_app/169991";
import { Fragment as _$$Fragment } from "react";
import { s_ } from "../905/17223";
import { Us } from "../figma_app/637027";
import { z } from "../905/284530";
import { sx as _$$sx } from "../905/941192";
import { FRequestStatusType } from "../figma_app/191312";
import { Ju } from "../905/102752";
import { g as _$$g } from "../905/356410";
import { d_ } from "../figma_app/918700";
import { A } from "../5724/663128";
import { to } from "../905/156213";
import { Ib } from "../905/129884";
import { A as _$$A } from "../1617/230645";
let $$b = {
  listStyleType: "disc",
  marginLeft: "1.5em"
};
function j({
  securityFormResponse: e,
  isWidget: t
}) {
  return e.status === FRequestStatusType.PENDING ? jsx(z, {
    variant: "brand",
    orientation: "horizontal",
    iconSrc: A,
    dataTestId: "pending-response-banner",
    children: jsx("div", {
      className: _$$s.preWrap.overflowBreakWord.$,
      children: _$$t("community.detail_view.data_security_modal_pending", {
        date: e.updatedAt
      })
    })
  }) : e.status === FRequestStatusType.APPROVED ? jsx("div", {
    className: _$$s.gap4.flex.$,
    children: t ? tx("community.detail_view.data_security_modal_badge_info_widget") : tx("community.detail_view.data_security_modal_badge_info_plugin")
  }) : e.status === FRequestStatusType.REJECTED ? jsx(z, {
    variant: "warning",
    orientation: "horizontal",
    iconSrc: A,
    dataTestId: "rejected-response-banner",
    children: jsx("div", {
      className: _$$s.preWrap.overflowBreakWord.$,
      children: _$$t("community.detail_view.data_security_modal_rejected", {
        date: e.updatedAt
      })
    })
  }) : null;
}
let w = Ju(function ({
  securityFormResponse: e,
  isWidget: t
}) {
  let r = wA();
  let n = jsx(Us, {
    href: "https://help.figma.com/hc/articles/16354660649495",
    target: "_blank",
    trusted: !0,
    children: tx("community.detail_view.data_security_modal_assessment_link")
  });
  let o = t ? tx("community.detail_view.data_security_modal_explanation_widget", {
    assessmentProgramLink: n
  }) : tx("community.detail_view.data_security_modal_explanation_plugin", {
    assessmentProgramLink: n
  });
  return jsxs(d_, {
    size: 600,
    title: _$$t("community.detail_view.data_security"),
    children: [jsx(s_, {
      dispatch: r
    }), jsx("div", {
      "data-testid": "program-explanation",
      children: o
    }), jsx("div", {
      className: _$$s.mt16.$,
      children: jsx(j, {
        securityFormResponse: e,
        isWidget: t
      })
    }), jsx("div", {
      className: _$$s.pt24.$,
      children: jsx(C, {
        securityFormResponse: e
      })
    })]
  });
}, "DATA_SECURITY_MODAL");
function C({
  securityFormResponse: e
}) {
  return jsx("div", {
    className: _$$s.colorBgSecondary.$,
    children: jsx("div", {
      className: _$$s.py4.px20.$,
      children: e.responses.map((e, t) => {
        let r = function (e) {
          if ("text" === e.inputType) return [];
          for (let t of e.options) if (t.isSelected && t.subQuestions) return t.subQuestions ?? [];
          return [];
        }(e);
        return jsx("div", {
          className: _$$s.mb24.$,
          children: jsxs("div", {
            className: "data_security_modal--gridContainer--4yiTg",
            children: [e.prompt && jsxs(Fragment, {
              children: [jsxs("div", {
                className: _$$s.fontSemiBold.$,
                children: [_$$g(L(e.prompt)), " "]
              }), jsx("div", {
                className: _$$s.$,
                children: jsx(E, {
                  question: e
                })
              })]
            }), r?.length > 0 && r.map((e, t) => jsxs(_$$Fragment, {
              children: [e.prompt ? jsx("ul", {
                style: _$$sx.add({
                  listStyle: "disc",
                  verticalAlign: "baseline"
                }).$,
                children: jsx("li", {
                  className: _$$s.fontSemiBold.ml16.$,
                  children: _$$g(function (e) {
                    let t = e.indexOf("For example,");
                    return -1 !== t ? e.substring(0, t) : e;
                  }(L(e.prompt ?? "")))
                })
              }) : jsx("div", {}, t), jsx(E, {
                question: e
              })]
            }, t))]
          })
        }, `q-${t}`);
      })
    })
  });
}
function L(e) {
  let t = /^\d+\./;
  return t.test(e) ? e.replace(t, "") : e;
}
function T(e) {
  let {
    value
  } = e;
  return jsx("div", {
    className: _$$s.flex.flexColumn.gap8.$,
    children: jsx("ul", {
      className: _$$s.italic.$,
      children: `"${value}"`
    })
  });
}
function I(e) {
  let {
    options
  } = e;
  return jsx("div", {
    className: _$$s.flex.flexColumn.gap16.$,
    children: jsx(Fragment, {
      children: options.map((e, t) => e.isSelected ? jsx("div", {
        className: _$$s.flex.flexColumn.$,
        children: jsx("div", {
          children: e.label
        })
      }, `option-${t}`) : null)
    })
  });
}
function N(e) {
  let {
    options
  } = e;
  let r = options.filter(e => e.isSelected);
  return 0 === r.length ? null : jsx("div", {
    className: _$$s.flex.flexColumn.gap16.$,
    children: jsx("ul", {
      children: r.map((e, t) => jsx("li", {
        style: r.length > 1 ? $$b : void 0,
        children: jsx("div", {
          className: _$$s.flex.flexColumn.$,
          children: jsx("div", {
            children: e.label
          })
        }, `option-${t}`)
      }, `option-${t}`))
    })
  });
}
function E(e) {
  let {
    question
  } = e;
  switch (question.inputType) {
    case "single_select":
      return jsx(I, {
        options: question.options
      });
    case "multi_select":
      return jsx(N, {
        options: question.options
      });
    case "text":
      return jsx(T, {
        value: question.value ?? ""
      });
    default:
      xb(question);
  }
}
var $$A0 = (e => (e.COMMUNITY_DETAIL = "community_detail", e.ADMIN_REVIEW = "admin_review", e.ADMIN_MANAGE = "admin_manage", e))($$A0 || {});
export function $$P1({
  securityFormResponse: e,
  entryPoint: t,
  isWidget: r,
  is24x24: u
}) {
  let m = wA();
  if (!e) return null;
  let _ = function (e, t) {
    let {
      status,
      updatedAt
    } = e;
    return status === FRequestStatusType.REJECTED ? "admin_manage" === t ? jsxs("div", {
      className: _$$s.flex.gap4.$,
      children: [tx("community.badge.extension_security_updated_on", {
        date: updatedAt
      }), jsx(B, {
        svg: _$$A,
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": _$$t("community.detail_view.data_security_modal_rejected_tooltip"),
        className: "extension_security_response--infoIcon--miNLG"
      })]
    }) : null : status === FRequestStatusType.APPROVED ? tx("community.badge.extension_security_approved") : status === FRequestStatusType.PENDING ? "admin_manage" === t ? tx("community.badge.extension_security_updated_on", {
      date: updatedAt
    }) : tx("community.badge.extension_security_pending") : void xb(status);
  }(e, t);
  if (!_) return null;
  let p = e.status === FRequestStatusType.REJECTED ? jsx(D, {
    is24x24: u
  }) : jsx(_$$_, {
    is24x24: u
  });
  return jsxs("div", {
    className: _$$s.flex.$,
    "data-testid": "extension-security-response-status",
    children: [jsx("div", {
      className: _$$s.flex.itemsStart.pt4.$,
      children: p
    }), jsx("button", {
      className: "community_detail" === t ? u ? "extension_security_response--communitySecurityText24x24--IyRkA extension_security_response--extensionSecurityText--kCA-d" : "extension_security_response--communitySecurityText--8N545 extension_security_response--extensionSecurityText--kCA-d" : "extension_security_response--adminSecurityText--xRb4T extension_security_response--extensionSecurityText--kCA-d",
      "data-testid": "extension-trust-security-response-button",
      onClick: () => {
        m(to({
          type: w,
          data: {
            securityFormResponse: e,
            isWidget: r
          }
        }));
        sx("Admin Plugin Review Modal", {
          entryPoint: t,
          isWidget: r,
          status: e.status,
          extensionId: e.pluginId,
          action: "Security form response status"
        });
      },
      children: _
    })]
  });
}
export const X = $$A0;
export const b = $$P1;