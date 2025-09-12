import { jsx, jsxs } from "react/jsx-runtime";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { N } from "../905/438674";
import { useModalManager } from "../905/437088";
import { getFeatureFlags } from "../905/601108";
import { isDesktopVersionDisabled, isUnsupportedMacVersion } from "../figma_app/876459";
import { renderI18nText } from "../905/303541";
import { jE } from "../figma_app/639088";
let p = "unsupported_browser--bodyMediumMixin--KR5LG";
export function $$m1() {
  return !!(isDesktopVersionDisabled() && !getFeatureFlags().desktop_allow_outdated_version || isUnsupportedMacVersion());
}
export function $$h0() {
  let e = isUnsupportedMacVersion();
  let t = useModalManager({
    open: !0,
    onClose: () => {},
    preventUserClose: !0
  });
  return e ? jsx(bL, {
    manager: t,
    width: "md",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsxs(hE, {
          children: [renderI18nText("unsupported_browser_modal.os_not_supported.title"), " "]
        })
      }), jsx(nB, {
        children: jsxs("div", {
          className: p,
          children: [renderI18nText("unsupported_browser_modal.os_not_supported.description", {
            figmaWebLink: jsx(N, {
              newTab: !0,
              href: "https://www.figma.com",
              trusted: !0,
              children: renderI18nText("unsupported_browser_modal.os_not_supported.figma_web_link")
            })
          }), jsx("div", {
            className: jE,
            children: renderI18nText("unsupported_browser_modal.os_not_supported.browser_recommendation", {
              firefoxLink: jsx(N, {
                newTab: !0,
                href: "https://www.mozilla.org/en-US/firefox/new/",
                trusted: !0,
                children: renderI18nText("unsupported_browser_modal.os_not_supported.browser_recommendation_link")
              })
            })
          })]
        })
      })]
    })
  }) : jsx(bL, {
    manager: t,
    width: "md",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: renderI18nText("desktop_update_modal.desktop_update.title")
        })
      }), jsx(nB, {
        children: jsx("div", {
          className: p,
          children: renderI18nText("desktop_update_modal.desktop_update.description", {
            downloadsPageLink: jsx(N, {
              newTab: !0,
              href: "/downloads",
              trusted: !0,
              children: renderI18nText("desktop_update_modal.desktop_update.link")
            })
          })
        })
      })]
    })
  });
}
export const O = $$h0;
export const d = $$m1;