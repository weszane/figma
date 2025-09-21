import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { trackEventAnalytics } from "../905/449184";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { D, _ as _$$_ } from "../figma_app/169991";
import { Fragment as _$$Fragment } from "react";
import { ModalCloseButton } from "../905/17223";
import { linkWithTracking } from "../figma_app/637027";
import { z } from "../905/284530";
import { styleBuilderInstance } from "../905/941192";
import { FRequestStatusType } from "../figma_app/191312";
import { registerModal } from "../905/102752";
import { g as _$$g } from "../905/356410";
import { utilityNoop } from "../figma_app/918700";
import { A as _$$A } from "../5724/663128";
import { showModalHandler } from "../905/156213";
import { KindEnum } from "../905/129884";
import { A as _$$A2 } from "../1617/230645";
let j = {
  listStyleType: "disc",
  marginLeft: "1.5em"
};
function y({
  securityFormResponse: e,
  isWidget: t
}) {
  return e.status === FRequestStatusType.PENDING ? jsx(z, {
    variant: "brand",
    orientation: "horizontal",
    iconSrc: _$$A,
    dataTestId: "pending-response-banner",
    children: jsx("div", {
      className: cssBuilderInstance.preWrap.overflowBreakWord.$,
      children: getI18nString("community.detail_view.data_security_modal_pending", {
        date: e.updatedAt
      })
    })
  }) : e.status === FRequestStatusType.APPROVED ? jsx("div", {
    className: cssBuilderInstance.gap4.flex.$,
    children: t ? renderI18nText("community.detail_view.data_security_modal_badge_info_widget") : renderI18nText("community.detail_view.data_security_modal_badge_info_plugin")
  }) : e.status === FRequestStatusType.REJECTED ? jsx(z, {
    variant: "warning",
    orientation: "horizontal",
    iconSrc: _$$A,
    dataTestId: "rejected-response-banner",
    children: jsx("div", {
      className: cssBuilderInstance.preWrap.overflowBreakWord.$,
      children: getI18nString("community.detail_view.data_security_modal_rejected", {
        date: e.updatedAt
      })
    })
  }) : null;
}
let w = registerModal(function ({
  securityFormResponse: e,
  isWidget: t
}) {
  let a = useDispatch();
  let i = jsx(linkWithTracking, {
    href: "https://help.figma.com/hc/articles/16354660649495",
    target: "_blank",
    trusted: !0,
    children: renderI18nText("community.detail_view.data_security_modal_assessment_link")
  });
  let r = t ? renderI18nText("community.detail_view.data_security_modal_explanation_widget", {
    assessmentProgramLink: i
  }) : renderI18nText("community.detail_view.data_security_modal_explanation_plugin", {
    assessmentProgramLink: i
  });
  return jsxs(utilityNoop, {
    size: 600,
    title: getI18nString("community.detail_view.data_security"),
    children: [jsx(ModalCloseButton, {
      dispatch: a
    }), jsx("div", {
      "data-testid": "program-explanation",
      children: r
    }), jsx("div", {
      className: cssBuilderInstance.mt16.$,
      children: jsx(y, {
        securityFormResponse: e,
        isWidget: t
      })
    }), jsx("div", {
      className: cssBuilderInstance.pt24.$,
      children: jsx(k, {
        securityFormResponse: e
      })
    })]
  });
}, "DATA_SECURITY_MODAL");
function k({
  securityFormResponse: e
}) {
  return jsx("div", {
    className: cssBuilderInstance.colorBgSecondary.$,
    children: jsx("div", {
      className: cssBuilderInstance.py4.px20.$,
      children: e.responses.map((e, t) => {
        let a = function (e) {
          if ("text" === e.inputType) return [];
          for (let t of e.options) if (t.isSelected && t.subQuestions) return t.subQuestions ?? [];
          return [];
        }(e);
        return jsx("div", {
          className: cssBuilderInstance.mb24.$,
          children: jsxs("div", {
            className: "data_security_modal--gridContainer--4yiTg",
            children: [e.prompt && jsxs(Fragment, {
              children: [jsxs("div", {
                className: cssBuilderInstance.fontSemiBold.$,
                children: [_$$g(E(e.prompt)), " "]
              }), jsx("div", {
                className: cssBuilderInstance.$,
                children: jsx(I, {
                  question: e
                })
              })]
            }), a?.length > 0 && a.map((e, t) => jsxs(_$$Fragment, {
              children: [e.prompt ? jsx("ul", {
                style: styleBuilderInstance.add({
                  listStyle: "disc",
                  verticalAlign: "baseline"
                }).$,
                children: jsx("li", {
                  className: cssBuilderInstance.fontSemiBold.ml16.$,
                  children: _$$g(function (e) {
                    let t = e.indexOf("For example,");
                    return -1 !== t ? e.substring(0, t) : e;
                  }(E(e.prompt ?? "")))
                })
              }) : jsx("div", {}, t), jsx(I, {
                question: e
              })]
            }, t))]
          })
        }, `q-${t}`);
      })
    })
  });
}
function E(e) {
  let t = /^\d+\./;
  return t.test(e) ? e.replace(t, "") : e;
}
function C(e) {
  let {
    value
  } = e;
  return jsx("div", {
    className: cssBuilderInstance.flex.flexColumn.gap8.$,
    children: jsx("ul", {
      className: cssBuilderInstance.italic.$,
      children: `"${value}"`
    })
  });
}
function S(e) {
  let {
    options
  } = e;
  return jsx("div", {
    className: cssBuilderInstance.flex.flexColumn.gap16.$,
    children: jsx(Fragment, {
      children: options.map((e, t) => e.isSelected ? jsx("div", {
        className: cssBuilderInstance.flex.flexColumn.$,
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
  let a = options.filter(e => e.isSelected);
  return 0 === a.length ? null : jsx("div", {
    className: cssBuilderInstance.flex.flexColumn.gap16.$,
    children: jsx("ul", {
      children: a.map((e, t) => jsx("li", {
        style: a.length > 1 ? j : void 0,
        children: jsx("div", {
          className: cssBuilderInstance.flex.flexColumn.$,
          children: jsx("div", {
            children: e.label
          })
        }, `option-${t}`)
      }, `option-${t}`))
    })
  });
}
function I(e) {
  let {
    question
  } = e;
  switch (question.inputType) {
    case "single_select":
      return jsx(S, {
        options: question.options
      });
    case "multi_select":
      return jsx(N, {
        options: question.options
      });
    case "text":
      return jsx(C, {
        value: question.value ?? ""
      });
    default:
      throwTypeError(question);
  }
}
var $$O0 = (e => (e.COMMUNITY_DETAIL = "community_detail", e.ADMIN_REVIEW = "admin_review", e.ADMIN_MANAGE = "admin_manage", e))($$O0 || {});
export function $$L1({
  securityFormResponse: e,
  entryPoint: t,
  isWidget: a,
  is24x24: _
}) {
  let u = useDispatch();
  if (!e) return null;
  let m = function (e, t) {
    let {
      status,
      updatedAt
    } = e;
    return status === FRequestStatusType.REJECTED ? "admin_manage" === t ? jsxs("div", {
      className: cssBuilderInstance.flex.gap4.$,
      children: [renderI18nText("community.badge.extension_security_updated_on", {
        date: updatedAt
      }), jsx(SvgComponent, {
        svg: _$$A2,
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("community.detail_view.data_security_modal_rejected_tooltip"),
        className: "extension_security_response--infoIcon--miNLG"
      })]
    }) : null : status === FRequestStatusType.APPROVED ? renderI18nText("community.badge.extension_security_approved") : status === FRequestStatusType.PENDING ? "admin_manage" === t ? renderI18nText("community.badge.extension_security_updated_on", {
      date: updatedAt
    }) : renderI18nText("community.badge.extension_security_pending") : void throwTypeError(status);
  }(e, t);
  if (!m) return null;
  let p = e.status === FRequestStatusType.REJECTED ? jsx(D, {
    is24x24: _
  }) : jsx(_$$_, {
    is24x24: _
  });
  return jsxs("div", {
    className: cssBuilderInstance.flex.$,
    "data-testid": "extension-security-response-status",
    children: [jsx("div", {
      className: cssBuilderInstance.flex.itemsStart.pt4.$,
      children: p
    }), jsx("button", {
      className: "community_detail" === t ? _ ? "extension_security_response--communitySecurityText24x24--IyRkA extension_security_response--extensionSecurityText--kCA-d" : "extension_security_response--communitySecurityText--8N545 extension_security_response--extensionSecurityText--kCA-d" : "extension_security_response--adminSecurityText--xRb4T extension_security_response--extensionSecurityText--kCA-d",
      "data-testid": "extension-trust-security-response-button",
      onClick: () => {
        u(showModalHandler({
          type: w,
          data: {
            securityFormResponse: e,
            isWidget: a
          }
        }));
        trackEventAnalytics("Admin Plugin Review Modal", {
          entryPoint: t,
          isWidget: a,
          status: e.status,
          extensionId: e.pluginId,
          action: "Security form response status"
        });
      },
      children: m
    })]
  });
}
export const X = $$O0;
export const b = $$L1;