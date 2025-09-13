import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../905/521428";
import { useModal } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { getI18nString, renderI18nText } from "../905/303541";
import { up } from "../figma_app/692987";
import { C8 } from "../figma_app/920435";
import { c as _$$c } from "../905/370443";
import { withTrackedClick, TrackingProvider } from "../figma_app/831799";
import { lo, wn, Ix } from "../9420/795870";
import { _6 } from "../figma_app/386952";
import { ub } from "../figma_app/514043";
import { Np } from "../figma_app/193867";
let v = withTrackedClick(Button);
let y = withTrackedClick(Button);
export function $$j0(e) {
  let {
    upsellSource,
    paymentMethod,
    nextBillDate,
    amount,
    team,
    monthlySub = null,
    annualSub = null,
    currency,
    canSeeBillingAddressExp
  } = e;
  let w = useDispatch();
  let E = _6();
  let A = useSelector(e => Np(e, E));
  let [I, k] = useState(!1);
  let {
    saveWithPaymentMethod,
    createPaymentElement
  } = lo({
    setupIntentParams: {
      redirect_url: A,
      subtotal_estimate: amount,
      success_message: getI18nString("resubscribe_modal.success_message"),
      currency,
      teamId: team.id
    },
    paymentFlowSource: wn.PRO_REACTIVATE,
    customerInfo: {
      teamId: team.id,
      orgId: void 0
    },
    defaultCountry: ub(),
    currency,
    canSeeBillingAddressExp,
    isCheckout: !1
  });
  useEffect(() => {
    (async () => {
      await createPaymentElement();
      k(!0);
    })();
  }, [createPaymentElement]);
  let R = useModal({
    defaultOpen: !0
  });
  let O = paymentMethod?.object.last4;
  let D = up(amount, currency ?? "usd", {
    showCents: !0
  });
  return jsxs(TrackingProvider, {
    name: "Resubscribe Modal",
    properties: {
      upsellSource
    },
    children: [jsx(ModalRootComponent, {
      manager: R,
      width: "fit-content",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: renderI18nText("resubscribe_modal.title")
          })
        }), jsx(nB, {
          className: "x1dc814f",
          children: jsx("p", {
            children: renderI18nText("resubscribe_modal.body", {
              last4: O,
              formattedAmount: D,
              nextBillDate
            })
          })
        }), jsx(wi, {
          children: jsxs(jk, {
            children: [jsx(y, {
              variant: "secondary",
              onClick: () => {
                C8({
                  team,
                  dispatch: w,
                  cancelling: !0,
                  monthlySub,
                  annualSub,
                  currency,
                  canSeeBillingAddressExp
                });
              },
              trackingProperties: {
                trackingDescriptor: _$$c.UPDATE_PAYMENT
              },
              children: renderI18nText("resubscribe_modal.different_payment_method")
            }), jsx(v, {
              variant: "primary",
              disabled: !I,
              onClick: e => {
                let t = async () => {
                  e.preventDefault();
                  await saveWithPaymentMethod(paymentMethod);
                  k(!0);
                };
                k(!1);
                t();
              },
              trackingProperties: {
                trackingDescriptor: _$$c.REACTIVATE_YOUR_PROFESSIONAL_PLAN
              },
              children: renderI18nText("resubscribe_modal.reactivate_plan")
            })]
          })
        })]
      })
    }), jsx("div", {
      id: Ix,
      className: "x1s85apg"
    })]
  });
}
export const ResubscribeModal = $$j0;