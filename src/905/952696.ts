import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { SecureLink } from "../figma_app/637027";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { TextWithTruncation } from "../905/984674";
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
      label: getI18nString("community.detail_view.unknown_network_access"),
      description: t ? getI18nString("community.detail_view.unspecified_widget_network_access") : getI18nString("community.detail_view.unspecified_plugin_network_access"),
      domains: [],
      reasoning: null
    };
    let {
      allowedDomains
    } = e;
    return 1 === allowedDomains.length && "none" === allowedDomains[0] ? {
      label: getI18nString("community.detail_view.no_network_access"),
      description: t ? getI18nString("community.detail_view.no_widget_network_access") : getI18nString("community.detail_view.no_plugin_network_access"),
      domains: [],
      reasoning: null
    } : allowedDomains.includes("*") ? {
      label: getI18nString("community.detail_view.unrestricted_network_access"),
      description: t ? getI18nString("community.detail_view.unrestricted_widget_network_access") : getI18nString("community.detail_view.unrestricted_plugin_network_access"),
      domains: [],
      reasoning: e.reasoning ?? null
    } : {
      label: getI18nString("community.detail_view.restricted_network_access"),
      description: t ? getI18nString("community.detail_view.restricted_widget_network_access") : getI18nString("community.detail_view.restricted_plugin_network_access"),
      domains: allowedDomains,
      reasoning: e.reasoning ?? null
    };
  }(e, t);
  return jsxs("div", {
    className: cssBuilderInstance.flex.flexColumn.gap8.$,
    "data-testid": "extension-network-access",
    children: [jsxs("button", {
      onClick: () => y(!A),
      className: cssBuilderInstance.flex.itemsCenter.$,
      children: [jsx(SvgComponent, {
        svg: _ ? _$$A4 : _$$A3,
        svgClassName: _ ? cssBuilderInstance.colorBgSecondary.bRadius4.$ : void 0,
        useOriginalSrcFills_DEPRECATED: !0,
        dataTestId: "network-globe-icon"
      }), jsx("div", {
        className: _ ? cssBuilderInstance.ml12.alignLeft.$ : cssBuilderInstance.ml8.alignLeft.$,
        children: jsx(TextWithTruncation, {
          color: "default",
          children: label
        })
      }), !g && jsx(SvgComponent, {
        dataTestId: "network-access-chevron-icon",
        svg: b,
        className: cssBuilderInstance.colorIconSecondary.ml4.$
      })]
    }), (A || g) && jsxs("div", {
      className: cssBuilderInstance.p12.flex.flexColumn.gap8.bRadius4.colorBgSecondary.breakWord.$,
      style: styleBuilderInstance.add({
        maxWidth: "320px"
      }).$,
      children: [jsx(TextWithTruncation, {
        fontSize: 11,
        children: description
      }), domains.length > 0 && jsx("ul", {
        className: cssBuilderInstance.ml16.$,
        style: styleBuilderInstance.add({
          listStyle: "disc",
          verticalAlign: "baseline"
        }).$,
        children: domains.map(e => jsx("li", {
          children: jsx(f, {
            url: e
          })
        }, e))
      }), null != reasoning && jsxs("div", {
        children: [jsx(TextWithTruncation, {
          fontSize: 11,
          children: renderI18nText("community_detail_view.creators_note")
        }), jsx(TextWithTruncation, {
          fontSize: 11,
          children: reasoning
        })]
      }), i && jsx(SecureLink, {
        href: t ? "https://help.figma.com/hc/articles/4410047809431-Use-widgets-in-files#Network_access" : "https://help.figma.com/hc/articles/360042532714-Use-plugins-in-files#Network_access",
        trusted: !0,
        target: "_blank",
        children: jsx(TextWithTruncation, {
          fontSize: 11,
          children: renderI18nText("community_detail_view.learn_more_network_access")
        })
      })]
    })]
  });
}
function f({
  url: e
}) {
  let t = e.replace("://", "://\u200B");
  return jsx(TextWithTruncation, {
    fontFamily: "monospace",
    fontSize: 11,
    children: t
  });
}
export const u = $$g0;