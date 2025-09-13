import { jsxs, jsx } from "react/jsx-runtime";
import r from "classnames";
import { s as _$$s } from "../cssbuilder/589278";
import { TextWithTruncation } from "../905/984674";
import { kL, m, nP, wx, IE, UU, h_, qw, qr } from "../figma_app/32844";
var $$a = r;
export function $$d0(e) {
  return jsxs("div", {
    className: $$a()(kL, {
      [m]: !e.isInItemsView,
      [nP]: e.isSelected && !e.isInItemsView
    }),
    onBlur: e.handleBlur,
    onClick: e.onClick,
    onContextMenu: e.onContextMenu,
    onFocus: e.handleFocus,
    onMouseOut: e.onMouseOut,
    onMouseOver: e.onMouseOver,
    role: e.canView ? "button" : "presentation",
    style: {
      backgroundColor: e.backgroundColor
    },
    tabIndex: e.isInItemsView ? void 0 : 0,
    children: [jsxs("div", {
      className: wx,
      children: [jsx("div", {
        children: e.headerLeft
      }), jsx("div", {
        className: $$a()(IE, e.isCardActive ? _$$s.flex.$ : _$$s.hidden.$),
        "data-testid": "generic-tile-header-right",
        children: e.headerRight
      })]
    }), jsxs("div", {
      className: UU,
      children: [e.titleSubtitle, jsx(TextWithTruncation, {
        fontWeight: "medium",
        fontSize: 13,
        fontFamily: "primary",
        truncate: "end",
        children: e.name
      }), e.titleSubtitleRight]
    }), e.description && jsx("div", {
      className: $$a()(h_, qw, e.descriptionClassName),
      children: e.description
    }), jsxs("div", {
      className: qr,
      children: [jsx("div", {
        children: e.footerLeft
      }), jsx("div", {
        children: e.footerRight
      })]
    })]
  });
}
export const a = $$d0;