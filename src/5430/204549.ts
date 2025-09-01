import { jsx, jsxs } from "react/jsx-runtime";
import { Q } from "../905/149004";
import { k } from "../905/44647";
import o from "classnames";
import { _ } from "../5430/511077";
import { o3 } from "../figma_app/831799";
var a = o;
export function $$d0({
  breadcrumbs: e,
  surface: t
}) {
  return jsx("div", {
    className: a()("community_breadcrumbs--breadcrumbsContainer--e76p8", {
      "community_breadcrumbs--resourcePagePadding--MUCrg": "resource" === t,
      "community_breadcrumbs--categoryPadding--b-ilJ": "category" === t
    }),
    children: jsxs("div", {
      className: "community_breadcrumbs--breadcrumbs--S2TN8",
      children: [jsx(o3, {
        trackingEventName: "cmty_category",
        trackingProperties: {
          name: "community_breadcrumbs_home_clicked"
        },
        to: new _().href,
        children: jsx("div", {
          className: "community_breadcrumbs--homeIcon--VSWVj",
          children: jsx(Q, {})
        })
      }), e.map(e => jsxs("div", {
        className: "community_breadcrumbs--breadcrumbContainer--eI8-l",
        children: [jsx("div", {
          className: "community_breadcrumbs--chevronIcon--rXeJw",
          children: jsx(k, {})
        }), jsx(o3, {
          ...e.linkProps,
          className: "community_breadcrumbs--breadcrumb--Op180 text--fontPos13--xW8hS text--_fontBase--QdLsd",
          children: e.text
        })]
      }, e.text))]
    })
  });
}
export const E = $$d0;