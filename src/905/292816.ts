import { jsxs, jsx } from "react/jsx-runtime";
import { isNullish, isNotNullish } from "../figma_app/95419";
import { b } from "../figma_app/246400";
import { t as _$$t, tx } from "../905/303541";
import { sx } from "../905/941192";
import { Y } from "../905/830372";
import { U1 } from "../figma_app/681712";
import { B } from "../905/261906";
import { tI } from "../figma_app/599327";
import { cj, As } from "../figma_app/84966";
import { i as _$$i } from "../figma_app/127401";
import { O } from "../figma_app/710329";
import { OL } from "../figma_app/421473";
function f(e, t) {
  return _$$t("general.price_per_month", {
    priceString: t.formatMoney(e, {
      showCents: !1
    })
  });
}
function _(e) {
  let t = function ({
    contractPriceType: e,
    planKey: t,
    seatType: i
  }) {
    let {
      prices,
      localizeCurrency
    } = cj(e, t);
    let {
      prices: _prices
    } = As(e, t);
    if (!prices || !_prices || !localizeCurrency) return null;
    let o = prices[i];
    let l = _prices[i];
    if (isNullish(o) || isNullish(l)) return null;
    let c = o.amount;
    let u = l.amount;
    return {
      monthlyPrice: f(c, localizeCurrency),
      annualPrice: f(l.amount, localizeCurrency),
      percentDiff: U1(u, c)
    };
  }(e);
  return jsxs(Y, {
    direction: "vertical",
    children: [jsx("div", {
      style: sx.textBodyMedium.colorTextTooltip.$,
      children: O(e.seatType)
    }), null !== t && jsxs("div", {
      style: sx.textBodyMedium.colorTextTooltipSecondary.wFull.$,
      children: [jsxs(Y, {
        horizontalAlignItems: "space-between",
        children: [jsx("div", {
          children: _$$t("billing_modals.seat_type_popover.monthly_rate")
        }), jsx("div", {
          children: t.monthlyPrice
        })]
      }), jsxs(Y, {
        horizontalAlignItems: "space-between",
        children: [jsx("div", {
          children: tx("billing_modals.seat_type_popover.annual_rate_percent_off", {
            percentOff: jsx("span", {
              style: sx.add({
                color: "var(--color-multiplayergreen)"
              }).$,
              children: _$$t("billing_modals.seat_type_popover.percent_off_in_parens", {
                percentNum: t.percentDiff
              })
            })
          })
        }), jsx("div", {
          style: sx.textBodyMedium.colorTextTooltipSecondary.$,
          children: t.annualPrice
        })]
      })]
    })]
  });
}
function A({
  contractPriceType: e,
  planKey: t,
  seatType: i
}) {
  let {
    prices,
    localizeCurrency
  } = As(e, t);
  let d = prices?.[i];
  let c = prices && localizeCurrency && isNotNullish(d) ? f(d.amount, localizeCurrency) : null;
  return jsxs(Y, {
    direction: "horizontal",
    horizontalAlignItems: "space-between",
    children: [jsx("div", {
      style: sx.textBodyMedium.colorTextTooltip.$,
      children: O(i)
    }), null !== c && jsx("div", {
      style: sx.textBodyMedium.colorTextTooltipSecondary.$,
      children: c
    })]
  });
}
function y({
  contractPriceType: e,
  planKey: t,
  seatType: i,
  showMonthlyAnnualPriceComparison: r
}) {
  return jsx(Y, {
    direction: "vertical",
    dataTestId: "seat-type-popover",
    children: jsxs(Y, {
      direction: "vertical",
      spacing: 8,
      children: [r ? jsx(_, {
        contractPriceType: e,
        planKey: t,
        seatType: i
      }) : jsx(A, {
        contractPriceType: e,
        planKey: t,
        seatType: i
      }), jsx("div", {
        style: sx.py4.$,
        children: jsx(Y, {
          direction: "vertical",
          spacing: 8,
          children: jsx(_$$i, {
            seatType: i,
            spacing: 8,
            forceDarkThemeForFigmakeIcon: !0
          })
        })
      })]
    })
  });
}
export function $$b0(e) {
  let t = e.planKey.type === OL.TEAM && e.showMonthlyAnnualPriceComparison;
  return jsxs(Y, {
    direction: "horizontal",
    spacing: 4,
    children: [jsx(B, {
      type: e.seatType,
      size: "24"
    }), jsx(b, {
      text: tI(e.seatType),
      popoverContent: jsx(y, {
        ...e,
        showMonthlyAnnualPriceComparison: t
      }),
      setToMaxWidth: !0
    })]
  });
}
export const T = $$b0;