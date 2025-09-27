import { jsx } from "react/jsx-runtime";
import { memo } from "react";
import { desktopAPIInstance } from "../figma_app/876459";
import { isGovCluster, getInitialOptions } from "../figma_app/169182";
import { isFigmaMirrorAndroid, isInFigmaMobile, isFigmaMobileApp } from "../figma_app/778880";
import { getInitialReferrer } from "../905/747968";
import { V } from "../905/182752";
import { getQueryParam } from "../905/609392";
import { s3 } from "../figma_app/152745";
import { isIntegrationContext } from "../figma_app/469876";
let m = ["msclkid"];
let h = isIntegrationContext();
let $$g0 = memo(function () {
  return !function () {
    if (V() || desktopAPIInstance || isFigmaMirrorAndroid() || isInFigmaMobile() || isFigmaMobileApp() || isGovCluster()) return !1;
    let e = getInitialOptions();
    if (!e.google_tag_manager_iframe_url || e.is_embed || h) return !1;
    let t = e.iso_code;
    return !!t && !s3.includes(t);
  }() ? null : jsx("iframe", {
    "aria-hidden": "true",
    tabIndex: -1,
    name: "gtm-iframe",
    title: "Google Tag Manager iframe",
    src: `${getInitialOptions().google_tag_manager_iframe_url}?${function () {
      let e = new URLSearchParams({
        referrer: function (e) {
          if (0 === e.length) return e;
          let t = new URL(e);
          ("figma.com" === t.hostname || t.hostname.endsWith(".figma.com")) && (t.pathname = "");
          return t.toString();
        }(getInitialReferrer()),
        "temp-cache-bust": "1"
      });
      let t = getInitialOptions();
      t.iso_code && t.viewer_region && e.append("gpc_code", `${t.iso_code?.toLowerCase()}_${t.viewer_region?.toLowerCase()}`);
      m.forEach(t => {
        let i = getQueryParam(t);
        i && /^[a-zA-Z0-9_\-\:]*$/.test(i) && e.append(t, i);
      });
      return e;
    }().toString()}`,
    style: {
      width: "0",
      height: "0",
      display: "none",
      visibility: "hidden"
    }
  });
}, () => !0);
export const Ji = $$g0;