import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "../vendor/514228";
import { lQ } from "../905/934246";
import { b as _$$b, c as _$$c } from "../905/308099";
import { q } from "../905/932270";
import { J } from "../905/270045";
import { $n } from "../905/521428";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { XHR } from "../905/910117";
import { s_ } from "../905/17223";
import { z, Z } from "../905/306088";
import { s as _$$s } from "../cssbuilder/589278";
import { $z } from "../figma_app/617427";
import { renderI18nText, getI18nString } from "../905/303541";
import { vi } from "../figma_app/808294";
import { c9, oW } from "../figma_app/395505";
import { to, Ce } from "../905/156213";
import { bG, JV } from "../905/54385";
import { Ju } from "../905/102752";
import { v as _$$v } from "../905/318279";
import { yX, ey } from "../figma_app/918700";
import { v0 } from "../figma_app/639088";
let $$N0 = Ju(function (e) {
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
    N(to({
      type: C,
      data: {
        user
      }
    }));
  };
  let R = () => {
    N(to({
      type: w,
      data: {
        user
      }
    }));
  };
  return jsx(yX, {
    autoFocusCta: !1,
    cancelText: renderI18nText("general.close"),
    confirmText: renderI18nText("general.confirm"),
    confirmationTitle: renderI18nText("community.buyer.need_a_refund"),
    content: jsxs("div", {
      className: _$$s.flexColumn.colorText.$,
      children: [renderI18nText("community.buyer.we_re_sorry_to_hear_resource_name_didnt_work_out", {
        resourceName: jsx("span", {
          className: _$$s.fontBold.$,
          children: name
        })
      }), getFeatureFlags().cmty_refund_modal_radio_input_migration ? jsxs("form", {
        className: _$$s.my16.$,
        children: [jsx(_$$b, {
          value: f ?? void 0,
          onChange: e => {
            b(e);
          },
          legend: jsx(q, {
            children: renderI18nText("community.buyer.refund_reason")
          }),
          children: Object.values(bG).map(e => jsx(_$$c, {
            value: e,
            label: jsx(J, {
              children: vi(e)
            })
          }, e))
        }), f === bG.OTHER ? jsx("div", {
          className: _$$s.mt8.$,
          children: jsx(_$$v, {
            value: S,
            onChange: e => x(e.target.value),
            placeholder: getI18nString("community.buyer.refund_reason.add_additional_details"),
            maxLength: JV
          })
        }) : null]
      }) : jsxs("div", {
        className: _$$s.my16.$,
        children: [jsx(z, {
          value: f,
          onChange: e => {
            b(e);
          },
          children: Object.values(bG).map(e => jsx(Z, {
            className: _$$s.font11.selectNone.$,
            value: e,
            children: vi(e)
          }, e))
        }), f === bG.OTHER ? jsx("div", {
          className: _$$s.mt8.$,
          children: jsx(_$$v, {
            value: S,
            onChange: e => x(e.target.value),
            placeholder: getI18nString("community.buyer.refund_reason.add_additional_details"),
            maxLength: JV
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
      XHR.post(`/api/community/buyer/${monetizedResource.id}/refund`, {
        refund_reason: f,
        refund_other_reason_text: S
      }).then(() => {
        h(!1);
        N(Ce());
        O();
      }).catch(e => {
        h(!1);
        N(Ce());
        R();
      });
    },
    popStack: !0,
    size: "small"
  });
}, "CommunityRequestRefundModal");
let C = Ju(function (e) {
  let {
    user
  } = e;
  let r = useDispatch();
  return jsxs(ey, {
    size: "small",
    hide: lQ,
    title: getI18nString("community.buyer.refund_requested"),
    children: [jsx(s_, {
      dispatch: r
    }), renderI18nText("community.buyer.keep_an_eye_out", {
      here: jsx($n.Link, {
        onClick: () => {
          c9(user);
          r(Ce());
        },
        children: renderI18nText("community.buyer.here")
      })
    }), jsx("div", {
      className: v0,
      children: jsx($z, {
        onClick: () => r(Ce()),
        variant: "secondary",
        children: renderI18nText("general.close")
      })
    })]
  });
}, "CommunityRefundRequestedSuccessModal");
let w = Ju(function (e) {
  let {
    user
  } = e;
  return jsx(yX, {
    size: "small",
    confirmationTitle: renderI18nText("community.buyer.unable_to_process_refund"),
    content: jsx("span", {
      className: _$$s.colorText.$,
      children: renderI18nText("community.buyer.error_requesting_refund_please_contact_support")
    }),
    confirmText: renderI18nText("community.buyer.get_support"),
    onConfirm: () => oW(user),
    cancelText: renderI18nText("general.close"),
    autoFocusCta: !1
  });
}, "CommunityErrorRequestingRefundModal");
export const bX = $$N0;