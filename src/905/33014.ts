import { jsx, jsxs } from "react/jsx-runtime";
import r from "classnames";
import { logger } from "../905/651849";
import { EnhancedInput } from "../figma_app/637027";
import { BaseLinkComponent } from "../905/551536";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { withTrackedInput } from "../figma_app/831799";
import { PopulationStatus } from "../figma_app/314264";
import { W4, Wg, FB, UA, sf } from "../figma_app/152745";
import { kL, Os, _5, nO, kh, VG, V$, Fy, Sj, ES } from "../905/734904";
import { A as _$$A } from "../6828/364616";
var a = r;
let f = new Set(["IN"]);
let _ = withTrackedInput(e => {
  let t = {
    ...e
  };
  delete t.dataTestId;
  return jsx("select", {
    ...t,
    "data-testid": e.dataTestId,
    children: e.children
  });
});
export function $$A0({
  address: e,
  updateAddress: t,
  disabled: i,
  countryCodesOverride: r,
  dontSeeYourCountryLink: a,
  canSeeBillingAddressExp: u,
  isBillingAddress: A
}) {
  let I = getI18nString("pro_cart.payment.state");
  let {
    city,
    region,
    postalCode
  } = function (e) {
    switch (e) {
      case "US":
        return {
          city: {
            label: getI18nString("pro_cart.payment.city"),
            trackingFieldName: "US City"
          },
          region: {
            options: [[getI18nString("pro_cart.payment.state"), getI18nString("pro_cart.payment.state")], ...W4],
            trackingFieldName: "US State"
          },
          postalCode: {
            label: getI18nString("pro_cart.payment.zip_code"),
            trackingFieldName: "US Postal Code",
            maxLength: 5
          }
        };
      case "CA":
        return {
          city: {
            label: getI18nString("pro_cart.payment.city"),
            trackingFieldName: "Intl City"
          },
          region: {
            options: [[getI18nString("pro_cart.payment.province"), getI18nString("pro_cart.payment.province")], ...Wg],
            trackingFieldName: "Intl Region"
          },
          postalCode: {
            label: getI18nString("pro_cart.payment.postal_code"),
            trackingFieldName: "Intl City",
            maxLength: 7
          }
        };
      case "IN":
        return {
          city: {
            label: getI18nString("pro_cart.payment.city"),
            trackingFieldName: "Intl City"
          },
          region: {
            options: [[getI18nString("pro_cart.payment.state"), getI18nString("pro_cart.payment.state")], ...FB],
            trackingFieldName: "Intl Region"
          },
          postalCode: {
            label: getI18nString("pro_cart.payment.postal_code"),
            trackingFieldName: "Intl Postal Code",
            maxLength: 6
          }
        };
      default:
        return {
          city: {
            label: getI18nString("pro_cart.payment.city_town_or_village"),
            trackingFieldName: "Intl City"
          },
          region: {
            label: getI18nString("pro_cart.payment.province_or_region"),
            trackingFieldName: "Intl Region"
          },
          postalCode: {
            label: getI18nString("pro_cart.payment.postal_code"),
            trackingFieldName: "Intl City",
            maxLength: 11
          }
        };
    }
  }(e.country);
  let w = i => {
    let n = i.target.name;
    let r = i.target.value;
    if (!n) {
      i.preventDefault();
      logger.error("HTMLInputElement is missing name attribute:", i.target);
      return;
    }
    "region" === n && r === I && (r = "");
    "country" === n && (e.region = "");
    t({
      ...e,
      [n]: r
    });
  };
  let C = i => {
    let n = i.target.name;
    let r = i.target.value;
    if (!n) {
      i.preventDefault();
      logger.error("HTMLInputElement is missing name attribute:", i.target);
      return;
    }
    t({
      ...e,
      [n]: r.trim()
    });
  };
  let T = r ?? UA;
  let k = f.has(e.country);
  let R = getI18nString("pro_cart.payment.street_address");
  u && (R = A ? getI18nString("pro_cart.payment.billing_address") : getI18nString("pro_cart.payment.shipping_address"));
  return jsxs("div", {
    id: "address-form-container",
    className: kL,
    children: [jsx(EnhancedInput, {
      autoCompleteName: "shipping address-line1",
      dataTestId: "stripe-address-1",
      htmlName: "line1",
      label: getI18nString("pro_cart.payment.street_address_label"),
      maxLength: 255,
      onBlur: C,
      onChange: w,
      placeholder: R,
      trackingFieldName: "Address Line 1",
      value: e.line1 || ""
    }), jsx(EnhancedInput, {
      value: e.line2 || "",
      htmlName: "line2",
      label: getI18nString("pro_cart.payment.street_address_line_2_label"),
      placeholder: getI18nString("pro_cart.payment.street_address_line_2"),
      onChange: w,
      onBlur: C,
      autoCompleteName: "shipping address-line2",
      trackingFieldName: "Address Line 2",
      maxLength: 255
    }), jsx("div", {
      className: Os,
      children: jsxs("div", {
        className: _5,
        children: [jsxs(_, {
          name: "country",
          value: e.country,
          autoComplete: "shipping country",
          onChange: w,
          trackingFieldName: "Country",
          trackingPopulationLevel: e.country ? PopulationStatus.POPULATED_COMPLETE : PopulationStatus.NOT_POPULATED,
          dataTestId: "stripe-country",
          disabled: i,
          children: [jsx("option", {
            value: "US",
            children: getI18nString("payments.united_states")
          }), T.filter(e => !("US" === e[1] || sf.includes(e[1]))).map(e => jsx("option", {
            value: e[1],
            children: e[0]
          }, e[1]))]
        }), jsx(SvgComponent, {
          className: nO,
          svg: _$$A
        })]
      })
    }), a && jsx(BaseLinkComponent, {
      className: kh,
      href: a,
      target: "_blank",
      trusted: !0,
      children: renderI18nText("pro_cart.payment.dont_see_your_country")
    }), jsxs("div", {
      className: VG,
      children: [jsx(y, {
        onChangeAddressForm: w,
        address: e,
        disabled: i,
        inputOptions: city
      }), jsxs("div", {
        className: V$,
        children: [jsx(b, {
          onChangeAddressForm: w,
          address: e,
          disabled: i,
          inputOptions: region,
          showReadableName: k
        }), jsx(v, {
          onChangeAddressForm: w,
          address: e,
          disabled: i,
          inputOptions: postalCode
        })]
      })]
    })]
  });
}
function y({
  address: e,
  disabled: t,
  inputOptions: i,
  onChangeAddressForm: r
}) {
  return jsx(EnhancedInput, {
    value: e.city,
    htmlName: "city",
    label: i.label,
    onChange: r,
    autoCompleteName: "shipping address-level2",
    trackingFieldName: i.trackingFieldName,
    dataTestId: "stripe-city",
    disabled: t
  });
}
function b({
  address: e,
  disabled: t,
  inputOptions: i,
  onChangeAddressForm: r,
  showReadableName: s
}) {
  return i.options ? jsx("div", {
    className: Fy,
    children: jsxs("div", {
      className: Sj,
      children: [jsx(_, {
        className: a()({
          [ES]: "" === e.region
        }),
        name: "region",
        value: e.region,
        autoComplete: "shipping address-level1",
        onChange: r,
        trackingFieldName: i.trackingFieldName,
        trackingPopulationLevel: e.region ? PopulationStatus.POPULATED_COMPLETE : PopulationStatus.NOT_POPULATED,
        dataTestId: "stripe-region",
        disabled: t,
        children: i.options.map(e => {
          let t = s ? e[0] : e[1];
          return jsx("option", {
            value: e[1],
            children: t
          }, t);
        })
      }), jsx(SvgComponent, {
        className: nO,
        svg: _$$A
      })]
    })
  }) : jsx(EnhancedInput, {
    autoCompleteName: "shipping address-level1",
    className: Fy,
    dataTestId: "stripe-region",
    disabled: t,
    htmlName: "region",
    label: i.label,
    maxLength: 50,
    onChange: r,
    trackingFieldName: i.trackingFieldName,
    value: e.region
  });
}
function v({
  address: e,
  disabled: t,
  inputOptions: i,
  onChangeAddressForm: r
}) {
  return jsx(EnhancedInput, {
    autoCompleteName: "shipping postal-code",
    className: Fy,
    dataTestId: "stripe-postal-code",
    disabled: t,
    htmlName: "postal_code",
    label: i.label,
    maxLength: i.maxLength,
    onChange: r,
    trackingFieldName: i.trackingFieldName,
    value: e.postal_code
  });
}
export const X = $$A0;