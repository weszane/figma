import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { noop } from 'lodash-es';
import { RadioInputRoot, RadioInputOption } from "../905/308099";
import { Legend } from "../905/932270";
import { Label } from "../905/270045";
import { Button } from "../905/521428";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { sendWithRetry } from "../905/910117";
import { ModalCloseButton } from "../905/17223";
import { RadioGroup, RadioOption } from "../905/306088";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { WithTrackedButton } from "../figma_app/617427";
import { renderI18nText, getI18nString } from "../905/303541";
import { getRefundReasonString } from "../figma_app/808294";
import { c9, oW } from "../figma_app/395505";
import { showModalHandler, hideModal } from "../905/156213";
import { CancellationReason, DEFAULT_PRICE } from "../905/54385";
import { registerModal } from "../905/102752";
import { v as _$$v } from "../905/318279";
import { ConfirmationModal2, ModalView } from "../figma_app/918700";
import { v0 } from "../figma_app/639088";
let $$N0 = registerModal(function (e) {
  let {
    name,
    user,
    monetizedResource
  } = e;
  let [c, h] = useState(!1);
  let [f, b] = useState(null);
  let [S, x] = useState("");
  let N = useDispatch();
  let O = () => {
    N(showModalHandler({
      type: C,
      data: {
        user
      }
    }));
  };
  let R = () => {
    N(showModalHandler({
      type: w,
      data: {
        user
      }
    }));
  };
  return jsx(ConfirmationModal2, {
    autoFocusCta: !1,
    cancelText: renderI18nText("general.close"),
    confirmText: renderI18nText("general.confirm"),
    confirmationTitle: renderI18nText("community.buyer.need_a_refund"),
    content: jsxs("div", {
      className: cssBuilderInstance.flexColumn.colorText.$,
      children: [renderI18nText("community.buyer.we_re_sorry_to_hear_resource_name_didnt_work_out", {
        resourceName: jsx("span", {
          className: cssBuilderInstance.fontBold.$,
          children: name
        })
      }), getFeatureFlags().cmty_refund_modal_radio_input_migration ? jsxs("form", {
        className: cssBuilderInstance.my16.$,
        children: [jsx(RadioInputRoot, {
          value: f ?? void 0,
          onChange: e => {
            b(e);
          },
          legend: jsx(Legend, {
            children: renderI18nText("community.buyer.refund_reason")
          }),
          children: Object.values(CancellationReason).map(e => jsx(RadioInputOption, {
            value: e,
            label: jsx(Label, {
              children: getRefundReasonString(e)
            })
          }, e))
        }), f === CancellationReason.OTHER ? jsx("div", {
          className: cssBuilderInstance.mt8.$,
          children: jsx(_$$v, {
            value: S,
            onChange: e => x(e.target.value),
            placeholder: getI18nString("community.buyer.refund_reason.add_additional_details"),
            maxLength: DEFAULT_PRICE
          })
        }) : null]
      }) : jsxs("div", {
        className: cssBuilderInstance.my16.$,
        children: [jsx(RadioGroup, {
          value: f,
          onChange: e => {
            b(e);
          },
          children: Object.values(CancellationReason).map(e => jsx(RadioOption, {
            className: cssBuilderInstance.font11.selectNone.$,
            value: e,
            children: getRefundReasonString(e)
          }, e))
        }), f === CancellationReason.OTHER ? jsx("div", {
          className: cssBuilderInstance.mt8.$,
          children: jsx(_$$v, {
            value: S,
            onChange: e => x(e.target.value),
            placeholder: getI18nString("community.buyer.refund_reason.add_additional_details"),
            maxLength: DEFAULT_PRICE
          })
        }) : null]
      })]
    }),
    disableConfirm: !f,
    hideOnConfirm: !1,
    isLoading: c,
    onConfirm: () => {
      h(!0);
      trackEventAnalytics("Request Refund Modal Confirm", {
        refundReason: f,
        refundOtherReasonText: S,
        monetizedResourceMetadataId: monetizedResource.id
      });
      sendWithRetry.post(`/api/community/buyer/${monetizedResource.id}/refund`, {
        refund_reason: f,
        refund_other_reason_text: S
      }).then(() => {
        h(!1);
        N(hideModal());
        O();
      }).catch(e => {
        h(!1);
        N(hideModal());
        R();
      });
    },
    popStack: !0,
    size: "small"
  });
}, "CommunityRequestRefundModal");
let C = registerModal(function (e) {
  let {
    user
  } = e;
  let r = useDispatch();
  return jsxs(ModalView, {
    size: "small",
    hide: noop,
    title: getI18nString("community.buyer.refund_requested"),
    children: [jsx(ModalCloseButton, {
      dispatch: r
    }), renderI18nText("community.buyer.keep_an_eye_out", {
      here: jsx(Button.Link, {
        onClick: () => {
          c9(user);
          r(hideModal());
        },
        children: renderI18nText("community.buyer.here")
      })
    }), jsx("div", {
      className: v0,
      children: jsx(WithTrackedButton, {
        onClick: () => r(hideModal()),
        variant: "secondary",
        children: renderI18nText("general.close")
      })
    })]
  });
}, "CommunityRefundRequestedSuccessModal");
let w = registerModal(function (e) {
  let {
    user
  } = e;
  return jsx(ConfirmationModal2, {
    size: "small",
    confirmationTitle: renderI18nText("community.buyer.unable_to_process_refund"),
    content: jsx("span", {
      className: cssBuilderInstance.colorText.$,
      children: renderI18nText("community.buyer.error_requesting_refund_please_contact_support")
    }),
    confirmText: renderI18nText("community.buyer.get_support"),
    onConfirm: () => oW(user),
    cancelText: renderI18nText("general.close"),
    autoFocusCta: !1
  });
}, "CommunityErrorRequestingRefundModal");
export const bX = $$N0;