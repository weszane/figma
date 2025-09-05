import { jsxs, jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import s from "classnames";
import { c$ } from "../figma_app/236327";
import { B } from "../905/714743";
import { tx } from "../905/303541";
import { oB, j7 } from "../905/929976";
import { tf } from "../figma_app/831799";
import { Cf } from "../905/504727";
import { A } from "../svg/763165";
var o = s;
let g = "CART_CURRENCY_SWITCHER_DROPDOWN_TYPE";
let f = {
  jpy: {
    currency: "jpy",
    optionLeft: tx("universal_upgrade.currency_switcher_option.japanese_yen"),
    optionRight: tx("universal_upgrade.currency_switcher_option.jpy_symbol"),
    headerShort: tx("universal_upgrade.currency_switcher.short_pricing_in_jpy"),
    headerLong: tx("universal_upgrade.currency_switcher.pricing_in_jpy")
  },
  usd: {
    currency: "usd",
    optionLeft: tx("universal_upgrade.currency_switcher_option.us_dollar"),
    optionRight: tx("universal_upgrade.currency_switcher_option.usd_symbol"),
    headerShort: tx("universal_upgrade.currency_switcher.short_pricing_in_usd"),
    headerLong: tx("universal_upgrade.currency_switcher.pricing_in_usd")
  },
  eur: {
    currency: "eur",
    optionLeft: tx("universal_upgrade.currency_switcher_option.european_euro"),
    optionRight: tx("universal_upgrade.currency_switcher_option.eur_symbol"),
    headerShort: tx("universal_upgrade.currency_switcher.short_pricing_in_eur"),
    headerLong: tx("universal_upgrade.currency_switcher.pricing_in_eur")
  },
  cad: {
    currency: "cad",
    optionLeft: tx("universal_upgrade.currency_switcher_option.cad_dollar"),
    optionRight: tx("universal_upgrade.currency_switcher_option.cad_symbol"),
    headerShort: tx("universal_upgrade.currency_switcher.short_pricing_in_cad"),
    headerLong: tx("universal_upgrade.currency_switcher.pricing_in_cad")
  },
  gbp: {
    currency: "gbp",
    optionLeft: tx("universal_upgrade.currency_switcher_option.british_pound"),
    optionRight: tx("universal_upgrade.currency_switcher_option.gbp_symbol"),
    headerShort: tx("universal_upgrade.currency_switcher.short_pricing_in_gbp"),
    headerLong: tx("universal_upgrade.currency_switcher.pricing_in_gbp")
  }
};
let _ = Object.keys(f);
export function $$A0(e) {
  let t = useRef(null);
  let i = useDispatch();
  let s = useSelector(e => e.dropdownShown);
  let l = s?.type === g;
  let c = _.filter(t => e.supportedCurrencies.includes(t));
  let p = f[e.currency];
  return jsxs("div", {
    className: "currency_switcher--dropdownContainer--HANwa text--fontPos11--2LvXf text--_fontBase--QdLsd",
    onClick: e => {
      e.stopPropagation();
      l ? i(oB()) : t?.current && i(j7({
        type: g,
        data: {
          targetRect: t.current.getBoundingClientRect()
        }
      }));
    },
    role: "button",
    tabIndex: 0,
    style: null !== e.paddingOverride ? {
      paddingRight: e.paddingOverride
    } : {},
    children: [jsx("span", {
      className: "currency_switcher--displayedCurrency--c3Uz-",
      children: e.shortFormDisplay ? p.headerShort : p.headerLong
    }), jsx("div", {
      className: "currency_switcher--caretContainer--8KG1H",
      ref: t,
      children: jsx(B, {
        svg: A,
        className: o()("currency_switcher--caret--hshB4", l ? "currency_switcher--caretDown--ISJvk" : "")
      })
    }), l && jsx(Cf, {
      targetRect: e.dropdownShown.data.targetRect,
      lean: "left",
      minWidth: 225,
      maxWidth: 225,
      showPoint: !1,
      propagateCloseClick: !0,
      children: c.map(t => jsx(y, {
        onClick: e.changeCurrency.bind(null, t),
        currency: t,
        trackingProperties: {
          prevCurrencyCode: e.currency,
          newCurrencyCode: t
        },
        trackingEventName: "currency_toggled"
      }, t))
    })]
  });
}
_.sort((e, t) => "usd" === e ? 1 : "usd" === t ? -1 : e.localeCompare(t));
let y = tf(function (e) {
  let t = f[e.currency];
  return jsx(c$, {
    onClick: e.onClick,
    children: jsxs("div", {
      className: "currency_switcher--dropdownOption--6dFex",
      children: [jsx("div", {
        children: t.optionLeft
      }), jsx("div", {
        children: t.optionRight
      })]
    })
  });
});
export const D = $$A0;