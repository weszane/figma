import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback } from "react";
import { useSetAtom, useAtomWithSubscription } from "../figma_app/27355";
import s from "classnames";
import { isIframe } from "../905/508367";
import { useResizeObserverRef, initialSize } from "../figma_app/708845";
import { getInitialOptions } from "../figma_app/169182";
import { BrowserInfo } from "../figma_app/778880";
import { interactiveAnchorTracked } from "../figma_app/637027";
import { SvgComponent } from "../905/714743";
import { UpgradeAction } from "../905/370443";
import { useTracking, TrackingProvider } from "../figma_app/831799";
import { CTA_CLICKED } from "../figma_app/314264";
import { consentCounterAtom, setConsentFromRegion, consentStatusAtom, ConsentStatus } from "../905/18800";
import { V } from "../905/182752";
import { a as _$$a } from "../905/720941";
import { kL, gC, Vt, ut, Id, Yp, rf, o1, X8, MW } from "../figma_app/146905";
var o = s;
function T(e) {
  let [t, r] = useState(e.showBanner);
  let [s, l] = useState(!1);
  let c = useRef(null);
  let u = useRef();
  let E = useSetAtom(consentCounterAtom);
  let T = useResizeObserverRef(c) ?? initialSize;
  let I = t ? T.height + (e.verticalPadding || 0) : 0;
  useEffect(() => {
    E(I);
  }, [I, E]);
  let {
    trackEvent
  } = useTracking();
  let v = useRef(trackEvent);
  v.current = trackEvent;
  useEffect(() => () => {
    clearTimeout(u.current);
  }, []);
  let A = useCallback(e => {
    c.current?.contains(e.target) || (l(!0), window.removeEventListener("click", A), u.current = setTimeout(async () => {
      if (!t) return null;
      r(!1);
      await setConsentFromRegion({
        consentRegion: "implicit",
        cookiesEnabled: !0
      });
      v.current(CTA_CLICKED, {
        trackingDescriptor: UpgradeAction.COOKIE_BANNER_IMPLICIT_CONSENT_DISMISS
      });
    }, 1e4));
  }, [t]);
  let x = useCallback(async () => {
    clearTimeout(u.current);
    s && (await setConsentFromRegion({
      consentRegion: "implicit",
      cookiesEnabled: !0
    }), v.current(CTA_CLICKED, {
      trackingDescriptor: UpgradeAction.COOKIE_BANNER_IMPLICIT_CONSENT_DISMISS
    }));
  }, [s]);
  useEffect(() => {
    if (t) {
      window.addEventListener("click", A);
      window.addEventListener("beforeunload", x);
      return () => {
        window.removeEventListener("beforeunload", x);
        window.removeEventListener("click", A);
      };
    }
  }, [t, A, x]);
  let N = async () => {
    r(!1);
    window.removeEventListener("click", A);
    await setConsentFromRegion({
      consentRegion: "implicit",
      cookiesEnabled: !1
    });
    v.current(CTA_CLICKED, {
      trackingDescriptor: UpgradeAction.COOKIE_BANNER_IMPLICIT_CONSENT_OPT_OUT
    });
  };
  let C = async () => {
    r(!1);
    window.removeEventListener("click", A);
    await setConsentFromRegion({
      consentRegion: "implicit",
      cookiesEnabled: !0
    });
    v.current(CTA_CLICKED, {
      trackingDescriptor: UpgradeAction.COOKIE_BANNER_IMPLICIT_CONSENT_DISMISS
    });
  };
  return t ? jsxs("div", {
    className: o()(kL, e.variant === _$$a.COMMUNITY && [gC, Vt], e.variant === _$$a.FILE_VIEWER && ut, e.variant === _$$a.PROTOTYPE && Id, e.variant === _$$a.AUTH && [gC, Yp]),
    role: "region",
    "aria-label": "Consent Manager",
    ref: c,
    "data-testid": "cookie-banner",
    children: [jsxs("div", {
      className: rf,
      children: ["This website uses cookies, pixel tags, and local storage for performance, personalization, and marketing purposes. Our use of some cookies may be considered a sale, sharing for behavioral advertising, or targeted advertising. For more, see our", " ", jsx(interactiveAnchorTracked, {
        rel: "noopener",
        target: "_blank",
        href: "/privacy/",
        children: "privacy policy"
      }), ". ", jsx("b", {
        children: "California Residents"
      }), " can learn how personal information is", " ", jsx(interactiveAnchorTracked, {
        href: "/privacy/#ca-notice",
        rel: "noopener",
        target: "_blank",
        children: "collected"
      }), ", including how it is", " ", jsx(interactiveAnchorTracked, {
        href: "/privacy/#purpose",
        rel: "noopener",
        target: "_blank",
        children: "used"
      }), ", whether it is", " ", jsx(interactiveAnchorTracked, {
        href: "/privacy/#ca-notice",
        rel: "noopener",
        target: "_blank",
        children: "\u201Csold\u201D or \u201Cshared\u201D"
      }), ", and how long it is", " ", jsx(interactiveAnchorTracked, {
        href: "/privacy/#retention",
        rel: "noopener",
        target: "_blank",
        children: "retained"
      }), "."]
    }), jsx("div", {
      className: o1,
      children: jsx(e.SecondaryButton, {
        onClick: N,
        "data-testid": "cookie-opt-out-button",
        children: "Opt out"
      })
    }), jsx("div", {
      className: X8,
      children: jsx("button", {
        onClick: C,
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
export function $$I0(e) {
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
      consentRegion: "implicit"
    },
    children: jsx(T, {
      ...e,
      showBanner: t === ConsentStatus.NO
    })
  });
}
let $$S1 = "Do not sell or share my personal info";
let $$v2 = "/opt-out/";
export const C$ = $$I0;
export const Ml = $$S1;
export const e2 = $$v2;