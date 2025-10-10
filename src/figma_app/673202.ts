import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useSetAtom, useAtomWithSubscription } from "../figma_app/27355";
import s from "classnames";
import { isIframe } from "../905/508367";
import { useResizeObserverRef, initialSize } from "../figma_app/708845";
import { getInitialOptions } from "../figma_app/169182";
import { BrowserInfo } from "../figma_app/778880";
import { interactiveAnchorTracked } from "../figma_app/637027";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText, getLocalizedPath } from "../905/303541";
import { UpgradeAction } from "../905/370443";
import { useTracking, TrackingProvider } from "../figma_app/831799";
import { CTA_CLICKED } from "../figma_app/314264";
import { consentCounterAtom, setConsentFromRegion, consentStatusAtom, ConsentStatus } from "../905/18800";
import { V } from "../905/182752";
import { a as _$$a } from "../905/720941";
import { kL, gC, Vt, ut, Id, Yp, rf, o1, X8, MW } from "../figma_app/146905";
var o = s;
function I(e) {
  let [t, r] = useState(e.showBanner);
  let {
    trackEvent
  } = useTracking();
  let l = useRef(null);
  let c = useSetAtom(consentCounterAtom);
  let u = useResizeObserverRef(l) ?? initialSize;
  let y = t ? u.height + (e.verticalPadding || 0) : 0;
  useEffect(() => {
    c(y);
  }, [y, c]);
  let I = async () => {
    r(!1);
    await setConsentFromRegion({
      consentRegion: "explicit",
      cookiesEnabled: !1
    });
    trackEvent(CTA_CLICKED, {
      trackingDescriptor: UpgradeAction.COOKIE_BANNER_EXPLICIT_CONSENT_OPT_OUT
    });
  };
  let S = async () => {
    r(!1);
    await setConsentFromRegion({
      consentRegion: "explicit",
      cookiesEnabled: !0
    });
    trackEvent(CTA_CLICKED, {
      trackingDescriptor: UpgradeAction.COOKIE_BANNER_EXPLICIT_CONSENT_OPT_IN
    });
  };
  let v = async () => {
    r(!1);
    await setConsentFromRegion({
      consentRegion: "explicit",
      cookiesEnabled: !1
    });
    trackEvent(CTA_CLICKED, {
      trackingDescriptor: UpgradeAction.COOKIE_BANNER_EXPLICIT_CONSENT_DISMISS
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
      children: [renderI18nText("cookies.explicit_consent_body"), " ", jsx(interactiveAnchorTracked, {
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
  }) : e.persistentMessage && jsx(TrackingProvider, {
    name: "Cookie Banner Persistent Message",
    children: e.persistentMessage
  }) || null;
}
export function $$S1(e) {
  let t = useAtomWithSubscription(consentStatusAtom);
  let r = !1;
  return (t === ConsentStatus.UNLOADED && (r = !0), t !== ConsentStatus.YES || e.persistentMessage || (r = !0), V() && (r = !0), getInitialOptions().user_data?.id && (r = !0), (getInitialOptions().is_embed || isIframe()) && (r = !0), BrowserInfo.isMeetDevice && (r = !0), useEffect(() => {
    !r && BrowserInfo.isIpadNative && setConsentFromRegion({
      consentRegion: "explicit",
      cookiesEnabled: !1
    });
  }, [r]), r || BrowserInfo.isIpadNative) ? null : jsx(TrackingProvider, {
    name: "Cookie Banner",
    properties: {
      consentRegion: "explicit"
    },
    children: jsx(I, {
      ...e,
      showBanner: t === ConsentStatus.NO
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