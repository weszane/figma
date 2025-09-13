import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useRef, useMemo, useCallback, useEffect } from "react";
import { debounce } from "../905/915765";
import { getFeatureFlags } from "../905/601108";
import o from "classnames";
import { EnhancedInput } from "../figma_app/637027";
import { getI18nString } from "../905/303541";
import { conditionalFeatureFlag } from "../figma_app/169182";
import { V } from "../905/57562";
var l = o;
var p = (e => (e.AUSTRALIA = "AU", e.JAPAN = "JP", e.LIECHTENSTEIN = "LI", e.MEXICO = "MX", e.RUSSIA = "RU", e.SWITZERLAND = "CH", e.SOUTH_AFRICA = "ZA", e.UNITED_KINGDOM = "GB", e.INDIA = "IN", e.CANADA = "CA", e.SOUTH_KOREA = "KR", e.NORWAY = "NO", e.SINGAPORE = "SG", e.EGYPT = "EG", e.MALAYSIA = "MY", e.KENYA = "KE", e.PERU = "PE", e.PHILIPPINES = "PH", e.THAILAND = "TH", e.TANZANIA = "TZ", e.AUSTRIA = "AT", e.BELGIUM = "BE", e.BULGARIA = "BG", e.CROATIA = "HR", e.CYPRUS = "CY", e.CZECHIA = "CZ", e.DENMARK = "DK", e.ESTONIA = "EE", e.FINLAND = "FI", e.FRANCE = "FR", e.GERMANY = "DE", e.GREECE = "GR", e.HUNGARY = "HU", e.IRELAND = "IE", e.ITALY = "IT", e.LATVIA = "LV", e.LITHUANIA = "LT", e.LUXEMBOURG = "LU", e.MALTA = "MT", e.NETHERLANDS = "NL", e.POLAND = "PL", e.PORTUGAL = "PT", e.ROMANIA = "RO", e.SLOVAKIA = "SK", e.SLOVENIA = "SI", e.SPAIN = "ES", e.SWEDEN = "SE", e.NULL = "N/A", e))(p || {});
var m = (e => (e.QUEBEC = "QC", e))(m || {});
let h = {
  GB: {
    exampleFormat: "GB123456789"
  },
  AT: {
    exampleFormat: "ATU12345678"
  },
  BE: {
    exampleFormat: "BE1234567890"
  },
  BG: {
    exampleFormat: "BG123456789"
  },
  HR: {
    exampleFormat: "HR12345678901"
  },
  CY: {
    exampleFormat: "CY12345678L"
  },
  CZ: {
    exampleFormat: "CZ1234567890"
  },
  DK: {
    exampleFormat: "DK12345678"
  },
  EE: {
    exampleFormat: "EE123456789"
  },
  FI: {
    exampleFormat: "FI12345678"
  },
  FR: {
    exampleFormat: "FRAB123456789"
  },
  DE: {
    exampleFormat: "DE123456789"
  },
  GR: {
    exampleFormat: "EL123456789"
  },
  HU: {
    exampleFormat: "HU12345678"
  },
  IE: {
    exampleFormat: "IE1234567AB"
  },
  IT: {
    exampleFormat: "IT12345678901"
  },
  LV: {
    exampleFormat: "LV12345678901"
  },
  LT: {
    exampleFormat: "LT123456789012"
  },
  LU: {
    exampleFormat: "LU12345678"
  },
  MT: {
    exampleFormat: "MT12345678"
  },
  NL: {
    exampleFormat: "NL123456789B12"
  },
  PL: {
    exampleFormat: "PL1234567890"
  },
  PT: {
    exampleFormat: "PT123456789"
  },
  RO: {
    exampleFormat: "RO1234567890"
  },
  SK: {
    exampleFormat: "SK1234567890"
  },
  SI: {
    exampleFormat: "SI12345678"
  },
  ES: {
    exampleFormat: "ESA1234567Z"
  },
  SE: {
    exampleFormat: "SE123456789012"
  },
  CA: {
    exampleFormat: "123456789RT0001",
    name: "GST/HST",
    regions: ["QC"],
    communityDisabled: !0
  },
  QC: {
    exampleFormat: "1234567890TQ0001",
    name: "QST"
  },
  KR: {
    exampleFormat: "123-45-67890"
  },
  NO: {
    exampleFormat: "123456789MVA"
  },
  SG: {
    exampleFormat: "M12345678A"
  },
  EG: {
    exampleFormat: "123456789"
  },
  AU: {
    exampleFormat: "12345678910"
  },
  MY: {
    exampleFormat: "12345678, C 1234567890, C 12345678901, A12-3456-78912345"
  },
  KE: {
    exampleFormat: "P123456789A"
  },
  PE: {
    exampleFormat: "12345678901"
  },
  PH: {
    exampleFormat: "123456789012"
  },
  TH: {
    exampleFormat: "1234567890123"
  },
  TZ: {
    exampleFormat: "12345678A"
  }
};
function g(e, t) {
  if (Object.values(p).includes(e)) {
    if (!t) return e;
    if (h[e]?.regions?.includes(t)) return t;
  }
  return "N/A";
}
let f = new Set(["JP", "LI", "MX", "RU", "CH", "ZA", "GB", "IN", "CA", "KR", "NO", "SG", "EG", "AU", "MY", "KE", "PE", conditionalFeatureFlag("vat_save_ph", "PH", "N/A"), conditionalFeatureFlag("vat_save_th", "TH", "N/A"), conditionalFeatureFlag("vat_save_tz", "TZ", "N/A")].concat(["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE"]));
function $$A(e, t) {
  var i;
  return getI18nString("tax.optional_vat_gst_id.input_label", {
    taxType: (i = g(e, t), h[i]?.name || "VAT/GST")
  });
}
export function $$y0(e) {
  var t;
  var i;
  let [o, u] = useState("");
  let [m, y] = useState("");
  let {
    variant = "default",
    onChange,
    setIsVatIdValid,
    country,
    region
  } = e;
  let S = useRef(country);
  let w = useRef(region || "");
  let C = useMemo(() => debounce(V, 500), []);
  let T = useCallback(() => {
    u("");
    setIsVatIdValid && setIsVatIdValid(!0);
  }, [setIsVatIdValid]);
  let k = useCallback(e => {
    u(e);
    setIsVatIdValid && setIsVatIdValid(!1);
  }, [setIsVatIdValid]);
  let R = useCallback(() => {
    onChange("");
    T();
    y("");
  }, [onChange, T, y]);
  useEffect(() => {
    C(e.vatId, country, T, k, region);
  }, [C, e.vatId, country, T, k, region]);
  useEffect(() => {
    S.current !== country && (R(), S.current = country);
  }, [country, R]);
  useEffect(() => {
    region && w.current !== region && (R(), w.current = region);
  }, [region, R]);
  return jsx(Fragment, {
    children: (t = e.country, i = e.region, !(e.isCommunityCheckout && (getFeatureFlags().cmty_disable_vat_for_india && t === p.INDIA || function (e) {
      if (f.has(e)) return h[e];
    }(t)?.communityDisabled)) && (void 0 === i ? f.has(t) : !!f.has(t) && !!h[t]?.regions?.includes(i)) && jsxs(Fragment, {
      children: [jsx(EnhancedInput, {
        className: l()("vat_input--inputBox--o9iEf basic_form--labeledInputGroup--aeD6L", {
          "vat_input--error--PX8cc": e.hasTaxIdVerificationError
        }),
        dataTestId: "vat-gst-id-input",
        hasError: e.hasTaxIdVerificationError || !!o,
        htmlName: "regional" === variant ? "regionalVatId" : "vatId",
        label: $$A(e.country, e.region),
        onBlur: t => {
          y($$A(e.region ?? e.country));
        },
        onChange: t => {
          let i = t.target.value;
          e.onChange(i);
        },
        onFocus: e => {
          var t;
          t = g(country, region);
          let i = h[t]?.exampleFormat;
          i && y(getI18nString("tax.example_vat_format_placeholder", {
            exampleFormat: i
          }));
        },
        placeholder: m,
        tooltip: getI18nString("tax.vat.input_tooltip"),
        trackingFieldName: "VAT/GST ID",
        value: e.vatId
      }), !!o && jsx("div", {
        className: "vat_input--errorMessageContainer--O8ez0",
        "data-testid": "vat-gst-id-input-error",
        children: jsx("span", {
          className: "vat_input--errorMessage--AE03w",
          children: o
        })
      })]
    }))
  });
}
$$y0.defaultProps = {
  onVatIdChange: e => {},
  vatId: ""
};
export const A = $$y0;