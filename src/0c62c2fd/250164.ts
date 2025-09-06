import { jsxs, jsx } from "react/jsx-runtime";
import { memo, useState, useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import n from "classnames";
import { Rs } from "../figma_app/288654";
import { vd } from "../figma_app/637027";
import { _ as _$$_, S as _$$S } from "../figma_app/490799";
import { getI18nString, renderI18nText } from "../905/303541";
import { Ce } from "../905/156213";
import { FDomainVerificationStatusType } from "../figma_app/191312";
import { Wt6, xS7 } from "../figma_app/43951";
import { OJ } from "../905/519092";
import { A as _$$A } from "../905/289352";
import { Dy, v0, hF, pL } from "../905/289198";
var o = n;
function x(e, t) {
  return e && "loaded" === t.status ? t.data.org : e || "loaded" !== t.status ? null : t.data.team;
}
export let $$b0 = memo(function (e) {
  let t = useDispatch();
  let {
    updateVatGstId
  } = e;
  let n = !!e.org?.id;
  let b = Rs(Wt6, {
    orgId: e.org?.id || ""
  }, {
    enabled: n
  });
  let v = Rs(xS7, {
    teamId: e.team?.id || ""
  }, {
    enabled: !n
  });
  let y = n ? b : v;
  let w = x(n, y);
  let j = w?.taxIdVerificationStatus;
  let [T, E] = useState();
  let [I, N] = useState("");
  let [C, S] = useState("");
  let [k, R] = useState(!1);
  let [A, O] = useState({
    country: "",
    state: ""
  });
  let [F, P] = useState(!1);
  useEffect(() => {
    let e = w?.taxInfo;
    if (!F && "loaded" === y.status && e?.status === "loaded") {
      let t = x(n, y);
      let r = e?.data;
      N(t?.vatGstId || "");
      S(r?.regionalVatGstId || "");
      R(r?.canUpdateRegionalVatGst || !1);
      O({
        country: r?.country || "",
        state: r?.state || ""
      });
      P(!0);
    }
  }, [n, y, F, w?.taxInfo]);
  let L = () => {
    t(Ce());
  };
  return jsxs(OJ, {
    onClose: L,
    title: getI18nString("change_vat_gst_id.input_id"),
    minWidth: 344,
    maxWidth: 344,
    fixedTop: !0,
    children: [T && jsx("div", {
      className: "change_vat_gst_id_modal--errorBanner--sqxNt",
      "data-testid": "change-vat-gst-id-error",
      children: jsx(_$$_, {
        color: _$$S.ERROR,
        rounded: !1,
        text: T
      })
    }), j === FDomainVerificationStatusType.VERIFIED && jsx("div", {
      "data-testid": "change-vat-gst-id-information",
      children: jsx(_$$_, {
        color: _$$S.INFORMATION,
        rounded: !1,
        text: getI18nString("change_vat_gst_id.tax_id_verification_succeeded")
      })
    }), j === FDomainVerificationStatusType.UNVERIFIED && jsx("div", {
      "data-testid": "change-vat-gst-id-warning",
      children: jsx(_$$_, {
        color: _$$S.WARNING,
        rounded: !1,
        text: getI18nString("change_vat_gst_id.tax_id_verification_failed")
      })
    }), jsxs("div", {
      className: Dy,
      children: [jsx("p", {
        className: "change_vat_gst_id_modal--description--6gdSL",
        children: renderI18nText("change_vat_gst_id.description")
      }), jsxs("form", {
        onSubmit: e => {
          e.preventDefault();
          updateVatGstId(I, e => E(e), k ? C : "").then(e => {
            e && L();
          });
        },
        "data-testid": "change-vat-form",
        children: [F && jsx(_$$A, {
          onChange: N,
          country: A.country,
          vatId: I,
          isCommunityCheckout: !1
        }), k && jsx(_$$A, {
          onChange: S,
          country: A.country,
          region: A.state,
          vatId: C,
          isCommunityCheckout: !1,
          variant: "regional"
        }), jsx("div", {
          className: o()(v0, hF),
          children: jsx(vd, {
            className: pL,
            type: "submit",
            disabled: !F,
            children: renderI18nText("change_vat_gst_id.save_id")
          })
        })]
      })]
    })]
  });
});
export const ChangeVatGstIdModal = $$b0;