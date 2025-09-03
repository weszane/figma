import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useRef, useImperativeHandle } from "react";
import { throwTypeError } from "../figma_app/465776";
import s from "classnames";
import { t as _$$t } from "../905/303541";
import { U } from "../905/331038";
import { w } from "../905/113805";
import { Lz, Zc } from "../905/497882";
import { k$ } from "../figma_app/975811";
import { Q7 } from "../905/203369";
import { R9 } from "../905/840929";
import { A as _$$A } from "../905/567946";
import { pK, S1, iZ, z3, rc } from "../905/235660";
var o = s;
let _ = e => {
  if (e && "validation" === e.type) switch (e.key) {
    case "PRICE_EMPTY":
      return _$$t("community.seller.price_must_not_be_empty");
    case "PRICE_TOO_LOW":
      return _$$t("community.seller.paid_resource_minimum_err");
    case "PRICE_TOO_HIGH":
      return _$$t("community.seller.paid_resource_maximum_err");
    case "PRICE_NOT_WHOLE_NUMBER":
      return _$$t("community.seller.prices_must_follow_format");
    case "PAID_RESOURCE_ALREADY_PUBLISHED":
      return _$$t("community.seller.pricing_toggle_text_for_already_paid_resources");
    case "PRICE_INCREASE_OUT_OF_RANGE":
      return _$$t("community.seller.price_can_only_be_increased_once_every_thirty_days");
    case "PRICE_CANNOT_BE_INCREASED":
      return _$$t("community.seller.price_increase_limit");
    case "FREEMIUM_EXTENSION_MUST_BE_PAID":
    case "FREEMIUM_REQUIRED_FOR_MIGRATION":
    case "AUTHOR_MUST_BE_USER":
      break;
    default:
      return throwTypeError(e);
  }
};
let $$A0 = forwardRef(function ({
  priceField: e,
  touched: t,
  onTouched: i
}, a) {
  let s = w(e, !t);
  let A = U(s, _);
  let y = Lz(e, 0);
  let b = useRef(null);
  useImperativeHandle(a, () => ({
    focus: e => {
      b.current?.focus(e);
    }
  }), []);
  return jsx(_$$A, {
    label: _$$t("community.seller.price"),
    error: A,
    afterErrorContent: R9,
    required: !0,
    children: jsxs("div", {
      className: pK,
      children: [jsx("div", {
        className: S1,
        children: "$"
      }), jsx(Q7, {
        ref: b,
        className: o()(iZ, {
          [z3]: !!A
        }),
        property: y,
        formatter: new k$(),
        onChange: t => {
          i?.();
          e.setValue?.(t);
        },
        disabled: !Zc(e)
      }), jsx("div", {
        className: rc,
        children: _$$t("community.seller.usd")
      })]
    })
  });
});
export const K = $$A0;