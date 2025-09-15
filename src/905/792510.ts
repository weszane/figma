import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { r as _$$r } from "../905/857502";
import { trackEventAnalytics } from "../905/449184";
import { renderI18nText, getI18nString } from "../905/303541";
import { A as _$$A } from "../905/776343";
import { copyToClipboard } from "../figma_app/471982";
import { s0 } from "../figma_app/350203";
function l() {
  return jsx("svg", {
    className: "svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    children: jsx("path", {
      d: "M.883 0h14.234c.488 0 .883.395.883.883v14.234c0 .488-.395.883-.883.883H.883C.395 16 0 15.605 0 15.117V.883C0 .395.395 0 .883 0zM11.04 9.804V16H8.546V9.806H6.461V7.39h2.085v-1.78c0-2.067 1.262-3.192 3.107-3.192.622-.003 1.244.03 1.863.095v2.158h-1.277c-1.005 0-1.2.476-1.2 1.176v1.54h2.392l-.31 2.416H11.04z",
      fillRule: "evenodd",
      fillOpacity: "1",
      fill: "#000",
      stroke: "none"
    })
  });
}
function p({
  text: e,
  show: t
}) {
  let [i, a] = useState(t);
  return (useEffect(() => {
    t ? a(t) : setTimeout(() => a(t), 200);
  }, [t]), t || i) ? jsx("div", {
    className: i && t ? "tooltips--showTooltip--TvWca tooltips--tooltip--Uk5Bh text--fontPos13--xW8hS text--_fontBase--QdLsd" : "tooltips--tooltip--Uk5Bh text--fontPos13--xW8hS text--_fontBase--QdLsd",
    children: jsx("span", {
      children: e
    })
  }) : jsx(Fragment, {});
}
let m = "social_links--socialLink--bFTcE resource_page--pill--LyX8G";
export function $$h0({
  author: e,
  resourceType: t,
  resourceId: i,
  resourceURL: h,
  resourceName: g,
  disableHeader: f
}) {
  let [_, A] = useState(!1);
  let y = e => {
    trackEventAnalytics("CTA Clicked", {
      communityHubEntity: t,
      communityHubEntityId: i,
      action: e
    }, {
      forwardToDatadog: !0
    });
  };
  return jsxs(Fragment, {
    children: [!0 !== f && jsx("h3", {
      className: "social_links--socialLinksHeader--cm9hk text--fontPos14--OL9Hp text--_fontBase--QdLsd",
      children: renderI18nText("community.detail_view.share")
    }), jsxs("div", {
      className: "social_links--socialLinksContainer--ZOvGc",
      children: [jsxs("div", {
        className: "social_links--copyLinkButton--SV1P0 social_links--socialLink--bFTcE resource_page--pill--LyX8G",
        role: "button",
        tabIndex: 0,
        onClick: () => {
          A(!0);
          copyToClipboard(h);
          setTimeout(() => A(!1), 3e3);
          y(s0.SHARE_LINK);
        },
        children: [jsx(p, {
          show: _,
          text: getI18nString("fullscreen_actions.link_copied")
        }), jsx(_$$r, {})]
      }), jsx("a", {
        className: m,
        href: `https://twitter.com/intent/tweet?url=${h}&text=${encodeURIComponent(getI18nString("community.detail_view.check_out_resource_name_by_publisher_on_figmadesign", {
          resourceName: g,
          publisherString: e
        }))}`,
        target: "_blank",
        onClick: () => y(s0.SHARE_TWITTER),
        children: jsx(_$$A, {})
      }), jsx("a", {
        className: m,
        href: `https://www.facebook.com/sharer/sharer.php?u=${h}`,
        target: "_blank",
        onClick: () => y(s0.SHARE_FACEBOOK),
        children: jsx(l, {})
      })]
    })]
  });
}
export const R = $$h0;