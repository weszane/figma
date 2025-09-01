import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { CY } from "../figma_app/637027";
import { B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t, tx } from "../905/303541";
import { sx } from "../905/941192";
import { E } from "../905/984674";
import { A as _$$A } from "../6828/364616";
import { A as _$$A2 } from "../6828/844411";
import { A as _$$A3 } from "../5724/463194";
import { A as _$$A4 } from "../5724/838817";
export function $$g0({
  networkAccess: e,
  isWidget: t,
  isLearnMoreLinkVisible: i,
  isAlwaysExpanded: g,
  is24x24: _
}) {
  let [A, y] = useState(g ?? !1);
  let b = A ? _$$A2 : _$$A;
  let {
    label,
    description,
    domains,
    reasoning
  } = function (e, t) {
    if (!e) return {
      label: _$$t("community.detail_view.unknown_network_access"),
      description: t ? _$$t("community.detail_view.unspecified_widget_network_access") : _$$t("community.detail_view.unspecified_plugin_network_access"),
      domains: [],
      reasoning: null
    };
    let {
      allowedDomains
    } = e;
    return 1 === allowedDomains.length && "none" === allowedDomains[0] ? {
      label: _$$t("community.detail_view.no_network_access"),
      description: t ? _$$t("community.detail_view.no_widget_network_access") : _$$t("community.detail_view.no_plugin_network_access"),
      domains: [],
      reasoning: null
    } : allowedDomains.includes("*") ? {
      label: _$$t("community.detail_view.unrestricted_network_access"),
      description: t ? _$$t("community.detail_view.unrestricted_widget_network_access") : _$$t("community.detail_view.unrestricted_plugin_network_access"),
      domains: [],
      reasoning: e.reasoning ?? null
    } : {
      label: _$$t("community.detail_view.restricted_network_access"),
      description: t ? _$$t("community.detail_view.restricted_widget_network_access") : _$$t("community.detail_view.restricted_plugin_network_access"),
      domains: allowedDomains,
      reasoning: e.reasoning ?? null
    };
  }(e, t);
  return jsxs("div", {
    className: _$$s.flex.flexColumn.gap8.$,
    "data-testid": "extension-network-access",
    children: [jsxs("button", {
      onClick: () => y(!A),
      className: _$$s.flex.itemsCenter.$,
      children: [jsx(B, {
        svg: _ ? _$$A4 : _$$A3,
        svgClassName: _ ? _$$s.colorBgSecondary.bRadius4.$ : void 0,
        useOriginalSrcFills_DEPRECATED: !0,
        dataTestId: "network-globe-icon"
      }), jsx("div", {
        className: _ ? _$$s.ml12.alignLeft.$ : _$$s.ml8.alignLeft.$,
        children: jsx(E, {
          color: "default",
          children: label
        })
      }), !g && jsx(B, {
        dataTestId: "network-access-chevron-icon",
        svg: b,
        className: _$$s.colorIconSecondary.ml4.$
      })]
    }), (A || g) && jsxs("div", {
      className: _$$s.p12.flex.flexColumn.gap8.bRadius4.colorBgSecondary.breakWord.$,
      style: sx.add({
        maxWidth: "320px"
      }).$,
      children: [jsx(E, {
        fontSize: 11,
        children: description
      }), domains.length > 0 && jsx("ul", {
        className: _$$s.ml16.$,
        style: sx.add({
          listStyle: "disc",
          verticalAlign: "baseline"
        }).$,
        children: domains.map(e => jsx("li", {
          children: jsx(f, {
            url: e
          })
        }, e))
      }), null != reasoning && jsxs("div", {
        children: [jsx(E, {
          fontSize: 11,
          children: tx("community_detail_view.creators_note")
        }), jsx(E, {
          fontSize: 11,
          children: reasoning
        })]
      }), i && jsx(CY, {
        href: t ? "https://help.figma.com/hc/articles/4410047809431-Use-widgets-in-files#Network_access" : "https://help.figma.com/hc/articles/360042532714-Use-plugins-in-files#Network_access",
        trusted: !0,
        target: "_blank",
        children: jsx(E, {
          fontSize: 11,
          children: tx("community_detail_view.learn_more_network_access")
        })
      })]
    })]
  });
}
function f({
  url: e
}) {
  let t = e.replace("://", "://\u200B");
  return jsx(E, {
    fontFamily: "monospace",
    fontSize: 11,
    children: t
  });
}
export const u = $$g0;