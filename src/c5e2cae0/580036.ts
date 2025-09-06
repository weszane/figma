import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useEffect } from "react";
import { Pw } from "../905/521428";
import { k as _$$k } from "../905/443820";
import { b as _$$b, c as _$$c } from "../905/308099";
import { q } from "../905/932270";
import { J } from "../905/270045";
import { _ as _$$_, S as _$$S } from "../figma_app/490799";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { sx } from "../905/941192";
import { A as _$$A } from "../5885/54359";
import { D as _$$D } from "../905/251759";
import { c as _$$c2 } from "../905/370443";
import { tf } from "../figma_app/831799";
import { Um } from "../905/848862";
import { _Z, B9 } from "../figma_app/514043";
import { NW } from "../figma_app/831101";
import { x as _$$x } from "../c5e2cae0/907085";
import { _ as _$$_2 } from "../c5e2cae0/57596";
import { O as _$$O } from "../c5e2cae0/648208";
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
let N = tf(Pw);
export function $$b0({
  title: e,
  countByBillableProductKey: t,
  tier: a,
  billingInterval: i,
  currency: c,
  buttonText: x,
  isButtonDisabled: b,
  isLoading: w,
  onClickNext: E,
  onSwitchCurrency: A,
  onSwitchBillingInterval: I,
  footer: k,
  canEnforcePaidSeatMinimum: P,
  trackingProperties: M
}) {
  let R = !!t;
  let O = _Z();
  let D = Um();
  let [B, L] = function (e, t, a, s) {
    let [i, l] = useState(!1);
    let n = useCallback((e, t) => !!(s && e && !_$$A(e, t)), [s]);
    useEffect(() => {
      i && !n(t, a) && l(!1);
    }, [t, a, s, i, n]);
    let d = useCallback(s => {
      if (!i) {
        if (n(t, a)) {
          l(!0);
          return;
        }
        e(s);
      }
    }, [t, a, i, n, e]);
    return [i, d];
  }(E, t, a, P);
  let V = jsx("div", {
    className: _$$s.flex.justifyCenter.itemsCenter.$,
    "data-testid": "cart-sidebar-loading",
    children: jsx(_$$k, {})
  });
  return jsxs(_$$x, {
    title: e,
    dataTestId: "cart-sidebar",
    children: [jsx("div", {
      className: _$$s.mt16.$,
      children: R ? jsxs(Fragment, {
        children: [O && jsxs("div", {
          className: _$$s.flex.justifyBetween.itemsCenter.pb16.bb1.bSolid.colorBorder.$,
          "data-testid": "cart-sidebar-currency-switcher",
          children: [jsx("p", {
            children: renderI18nText("checkout.sidebar.currency_label")
          }), jsx(_$$D, {
            currency: c,
            dropdownShown: D,
            supportedCurrencies: B9(),
            changeCurrency: e => {
              A(e);
            },
            shortFormDisplay: !0,
            paddingOverride: 0
          })]
        }), I && R && jsx("div", {
          className: _$$s.my16.$,
          style: sx.add({
            marginLeft: "-8px"
          }).$,
          "data-testid": "cart-sidebar-billing-interval",
          children: jsxs(_$$b, {
            legend: jsx(q, {
              children: renderI18nText("checkout.sidebar.switch_your_billing_interval")
            }),
            value: i,
            onChange: e => I(e),
            children: [jsx(_$$c, {
              value: NW.YEAR,
              label: jsxs(J, {
                className: _$$s.flex.itemsCenter.gap16.$,
                children: [renderI18nText("checkout.sidebar.annual"), " ", jsx("b", {
                  className: _$$s.colorTextSuccess.fontSemiBold.colorBgSuccessTertiary.bRadius2.px4.block.$,
                  style: sx.add({
                    fontSize: "10px"
                  }).$,
                  children: renderI18nText("checkout.sidebar.save_up_to_20")
                })]
              })
            }), jsx(_$$c, {
              value: NW.MONTH,
              label: jsx(J, {
                children: renderI18nText("checkout.sidebar.monthly")
              })
            })]
          })
        }), jsxs("div", {
          className: _$$s.pt16.$,
          children: [jsx(_$$O, {
            countByBillableProductKey: t,
            billingInterval: i,
            currency: c,
            isCartReviewSummary: !1,
            tier: a
          }), jsx(_$$_2, {})]
        })]
      }) : jsx("p", {
        className: _$$s.colorTextSecondary.$,
        children: renderI18nText("checkout.sidebar.cannot_calculate_subtotal")
      })
    }), jsxs("div", {
      style: sx.add({
        marginTop: "80px"
      }).$,
      children: [B && jsx(C, {}), jsx(N, {
        onClick: L,
        disabled: b || w,
        htmlAttributes: {
          "data-testid": "cart-sidebar-button"
        },
        trackingProperties: {
          trackingDescriptor: _$$c2.CART_SIDEBAR,
          ...M
        },
        children: w ? V : x
      }), k && jsx("div", {
        className: _$$s.mt16.$,
        "data-testid": "cart-sidebar-footer",
        children: k
      })]
    })]
  });
}
function C() {
  return jsx("div", {
    className: _$$s.my8.$,
    "data-testid": "cart-sidebar-paid-seat-minimum-banner",
    children: jsx(_$$_, {
      color: _$$S.WARNING,
      text: jsx("p", {
        style: sx.lh14.add({
          fontSize: "9px"
        }).$,
        children: renderI18nText("checkout.sidebar.paid_seat_minimum_banner")
      })
    })
  });
}
export const z = $$b0;