import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { Xr, useAtomWithSubscription } from "../figma_app/27355";
import s from "classnames";
import { GZ } from "../905/508367";
import { wY, cU } from "../figma_app/708845";
import { getInitialOptions } from "../figma_app/169182";
import { BrowserInfo } from "../figma_app/778880";
import { Yo } from "../figma_app/637027";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText, getLocalizedPath } from "../905/303541";
import { c as _$$c } from "../905/370443";
import { j6, fu } from "../figma_app/831799";
import { CTA_CLICKED } from "../figma_app/314264";
import { P4, L3, Dr, S6 } from "../905/18800";
import { V } from "../905/182752";
import { a as _$$a } from "../905/720941";
import { kL, gC, Vt, ut, Id, Yp, rf, o1, X8, MW } from "../figma_app/146905";
var o = s;
function I(e) {
  let [t, r] = useState(e.showBanner);
  let {
    trackEvent
  } = j6();
  let l = useRef(null);
  let c = Xr(P4);
  let u = wY(l) ?? cU;
  let y = t ? u.height + (e.verticalPadding || 0) : 0;
  useEffect(() => {
    c(y);
  }, [y, c]);
  let I = async () => {
    r(!1);
    await L3({
      consentRegion: "explicit",
      cookiesEnabled: !1
    });
    trackEvent(CTA_CLICKED, {
      trackingDescriptor: _$$c.COOKIE_BANNER_EXPLICIT_CONSENT_OPT_OUT
    });
  };
  let S = async () => {
    r(!1);
    await L3({
      consentRegion: "explicit",
      cookiesEnabled: !0
    });
    trackEvent(CTA_CLICKED, {
      trackingDescriptor: _$$c.COOKIE_BANNER_EXPLICIT_CONSENT_OPT_IN
    });
  };
  let v = async () => {
    r(!1);
    await L3({
      consentRegion: "explicit",
      cookiesEnabled: !1
    });
    trackEvent(CTA_CLICKED, {
      trackingDescriptor: _$$c.COOKIE_BANNER_EXPLICIT_CONSENT_DISMISS
    });
  };
  return t ? jsxs("div", {
    className: o()(kL, e.variant === _$$a.COMMUNITY && [gC, Vt], e.variant === _$$a.FILE_VIEWER && ut, e.variant === _$$a.PROTOTYPE && Id, e.variant === _$$a.AUTH && [gC, Yp]),
    role: "region",
    ref: l,
    "aria-label": getI18nString("cookies.consent_manager"),
    "data-testid": "cookie-banner",
    children: [jsxs("div", {
      className: rf,
      children: [renderI18nText("cookies.explicit_consent_body"), " ", jsx(Yo, {
        href: $$A0(),
        target: "_blank",
        rel: "noreferrer",
        children: renderI18nText("cookies.cookies_settings")
      })]
    }), jsxs("div", {
      className: o1,
      children: [jsx(e.SecondaryButton, {
        onClick: I,
        "data-testid": "cookie-opt-out-button",
        children: renderI18nText("cookies.do_not_allow_cookies")
      }), jsx(e.PrimaryButton, {
        onClick: S,
        "data-testid": "cookie-opt-in-button",
        children: renderI18nText("cookies.allow_all_cookies")
      })]
    }), jsx("div", {
      className: X8,
      children: jsx("button", {
        onClick: v,
        type: "button",
        "data-testid": "cookie-dismiss-button",
        children: jsx(SvgComponent, {
          className: MW,
          svg: e.dismissIcon
        })
      })
    })]
  }) : e.persistentMessage && jsx(fu, {
    name: "Cookie Banner Persistent Message",
    children: e.persistentMessage
  }) || null;
}
export function $$S1(e) {
  let t = useAtomWithSubscription(Dr);
  let r = !1;
  return (t === S6.UNLOADED && (r = !0), t !== S6.YES || e.persistentMessage || (r = !0), V() && (r = !0), getInitialOptions().user_data?.id && (r = !0), (getInitialOptions().is_embed || GZ()) && (r = !0), BrowserInfo.isMeetDevice && (r = !0), useEffect(() => {
    !r && BrowserInfo.isIpadNative && L3({
      consentRegion: "explicit",
      cookiesEnabled: !1
    });
  }, [r]), r || BrowserInfo.isIpadNative) ? null : jsx(fu, {
    name: "Cookie Banner",
    properties: {
      consentRegion: "explicit"
    },
    children: jsx(I, {
      ...e,
      showBanner: t === S6.NO
    })
  });
}
export function $$v2() {
  return getI18nString("cookies.manage_cookies_opt_out");
}
export function $$A0() {
  return getLocalizedPath("/consent-preferences/");
}
export const Sz = $$A0;
export const ZQ = $$S1;
export const aJ = $$v2;