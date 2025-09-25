import { jsxs, jsx } from "react/jsx-runtime";
import r from "classnames";
import { getI18nString, renderI18nText } from "../905/303541";
import { k$ } from "../figma_app/975811";
import { A as _$$A } from "../905/794518";
import { FormattedInputVariant1 } from "../905/203369";
import { R9 } from "../905/840929";
import { wi, pK, r9, c$, Dz, e0, vT } from "../905/599844";
var a = r;
export function $$p0({
  price: e,
  onChange: t,
  error: i,
  required: r = !1,
  disabled: p = !1
}) {
  let m = [wi];
  return jsxs(_$$A, {
    label: getI18nString("community.seller.price"),
    error: i,
    required: r,
    disabled: p,
    children: [jsxs("div", {
      className: a()(pK, {
        [r9]: p
      }),
      children: [jsx("div", {
        className: c$,
        children: renderI18nText("community.seller.currency_symbol")
      }), jsx(FormattedInputVariant1, {
        placeholder: "0",
        property: e,
        formatter: new k$(),
        onChange: t,
        className: a()(Dz, {
          [e0]: !!i
        }),
        disabled: p,
        onBlur: e => {
          e.target.value || t(0);
        }
      }), jsx("div", {
        className: a()(...m, {
          [r9]: p
        }),
        children: renderI18nText("community.seller.usd")
      })]
    }), !i && jsx("div", {
      className: vT,
      children: R9
    })]
  });
}
export const A = $$p0;