import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import n from "classnames";
import { P as _$$P } from "../5430/455826";
import { ButtonSecondaryTracked, ButtonBasePrimaryTracked } from "../figma_app/637027";
import { LoadingSpinner } from "../figma_app/858013";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { hideModal } from "../905/156213";
import { lo, wn, dl } from "../9420/795870";
import { jL } from "../figma_app/658324";
import { FOrganizationLevelType } from "../figma_app/191312";
import { selectedViewToPath } from "../figma_app/193867";
import { DashboardSections } from "../905/548208";
import { OJ } from "../905/519092";
import { S } from "../9420/724099";
import { $J, Un, KJ, UD, u1 } from "../4452/559083";
var o = n;
function w({
  currency: e,
  customerInfo: t,
  defaultCountry: r,
  estimatedChargeCents: n,
  isReactivating: w,
  canSeeBillingAddressExp: j
}) {
  let T = w ? getI18nString("change_payment.success.successfully_reactivated_subscription") : getI18nString("change_payment.success.successfully_updated_your_payment_method");
  let E = useSelector(e => selectedViewToPath(e, {
    view: "teamAdminConsole",
    teamId: t.teamId,
    teamAdminConsoleViewTab: DashboardSections.SETTINGS
  }));
  let {
    createPaymentElement,
    unmountPaymentElement,
    savePayment,
    billingAddress,
    updateBillingAddress,
    nameOnPaymentMethod,
    setNameOnPaymentMethod,
    paymentMethodType,
    error
  } = lo({
    setupIntentParams: {
      redirect_url: E,
      subtotal_estimate: n,
      success_message: T,
      currency: e
    },
    paymentFlowSource: wn.PRO_CHANGE_PAYMENT,
    customerInfo: t,
    defaultCountry: r,
    currency: e,
    canSeeBillingAddressExp: j,
    isCheckout: !1
  });
  let [P, L] = useState(!1);
  let [D, M] = useState(!1);
  let [B, U] = useState(window.innerHeight);
  let W = useDispatch();
  let $ = error?.code === dl.UNINITIALIZED_STRIPE_ELEMENTS_ERROR;
  let G = () => W(hideModal());
  _$$P(({
    height: e
  }) => {
    U(e);
  });
  let V = async e => {
    if (e && e.preventDefault(), M(!0), await savePayment(), w && t.teamId) try {
      await jL({
        planType: FOrganizationLevelType.TEAM,
        planId: t.teamId
      });
    } catch (e) {
      console.error(e);
    }
    M(!1);
  };
  return jsx(OJ, {
    title: j ? getI18nString("change_payment.update_payment_details") : getI18nString("change_payment.enter_payment_method"),
    onClose: G,
    maxWidth: 465,
    headerSize: "large",
    children: jsxs("div", {
      className: o()({
        [$J]: !P,
        [Un]: $
      }),
      children: [jsxs("form", {
        onSubmit: V,
        children: [jsxs("div", {
          className: KJ,
          style: {
            maxHeight: Math.min(B - 49 - 65, 652)
          },
          children: [P && j && jsx("div", {
            className: _$$s.mb16.$,
            children: jsx("label", {
              htmlFor: "updatePaymentDetails",
              className: _$$s.colorTextSecondary.$,
              children: renderI18nText("change_payment.update_payment_details_description_default")
            })
          }), jsx(S, {
            billingAddress,
            canSeeBillingAddressExp: j,
            createPaymentElement,
            error,
            nameOnPaymentMethod,
            paymentElementEventHandlers: {
              ready: () => L(!0)
            },
            paymentFlow: wn.PRO_CHANGE_PAYMENT,
            paymentMethodType,
            unmountPaymentElement,
            updateBillingAddress,
            updateNameOnPaymentMethod: setNameOnPaymentMethod
          })]
        }), P && !$ && jsxs("div", {
          className: UD,
          children: [D && jsx(LoadingSpinner, {
            className: u1
          }), jsx(ButtonSecondaryTracked, {
            onClick: G,
            children: renderI18nText("change_payment.cancel")
          }), jsx(ButtonBasePrimaryTracked, {
            tabIndex: 0,
            type: "submit",
            disabled: D,
            children: renderI18nText("change_payment.save")
          })]
        })]
      }), $ && jsx(ButtonSecondaryTracked, {
        onClick: G,
        children: renderI18nText("change_payment.close_window")
      })]
    })
  });
}
export function $$j0({
  currency: e,
  customerInfo: t,
  defaultCountry: r,
  monthlySub: s,
  annualSub: i,
  isReactivating: n,
  canSeeBillingAddressExp: o
}) {
  let l = s?.estimated_amount_due ?? 0;
  let d = Math.max(i?.estimated_amount_due ?? 0, l);
  return jsx(w, {
    currency: e,
    customerInfo: t,
    defaultCountry: r,
    estimatedChargeCents: d,
    isReactivating: n,
    canSeeBillingAddressExp: o
  });
}
export const TeamChangePaymentModal = $$j0;