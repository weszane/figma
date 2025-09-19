import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../905/521428";
import { Link } from "../905/438674";
import { ButtonPrimitive } from "../905/632989";
import { IconButton } from "../905/443068";
import { l as _$$l } from "../905/479687";
import { N as _$$N } from "../905/670143";
import { g as _$$g } from "../905/125190";
import { r as _$$r } from "../905/857502";
import { customHistory } from "../905/612521";
import { renderI18nText, getI18nString } from "../905/303541";
import { Tg, CommunityRoute, ResourceType } from "../figma_app/354658";
import { S as _$$S } from "../figma_app/11182";
import { hasPublishScope, hasClientMeta, isWidgetOrPlugin } from "../figma_app/45218";
import { H } from "../905/548668";
export function $$b3({
  publishedResourceContent: e
}) {
  let t = useDispatch();
  let i = $$S4(e);
  let [o, l] = useState(!1);
  useEffect(() => {
    l(!1);
  }, [i]);
  return jsx(Button, {
    variant: "secondary",
    onClick: async () => {
      await t(_$$S({
        url: new URL(i, document.baseURI).href
      }));
      l(!0);
    },
    children: jsx("span", {
      className: "x78zum5 x195vfkc",
      children: o ? jsxs(Fragment, {
        children: [jsx(_$$l, {}), renderI18nText("community.publishing.copied")]
      }) : jsxs(Fragment, {
        children: [jsx(_$$N, {}), renderI18nText("community.publishing.copy_link")]
      })
    })
  });
}
export function $$v2({
  publishedResourceContent: e
}) {
  return jsx(Link.Button, {
    href: $$S4(e),
    newTab: !0,
    trusted: !0,
    "data-testid": "resource-publishing-success-screen-actions-go-to-community-button",
    children: getI18nString("community.publishing.go_to_community")
  });
}
export function $$I0() {
  return jsx(Button, {
    variant: "secondary",
    onClick: () => {
      customHistory.reload("Resource updated on community hub");
    },
    children: getI18nString("community.publishing.go_to_community")
  });
}
export function $$E5({
  editorType: e,
  libraryKey: t,
  showText: i = !0,
  variant: o = "secondary"
}) {
  let h;
  let f = "primary" === o;
  let A = "banner" === o;
  let b = "borderless" === o;
  let v = useDispatch();
  let [I, E] = useState(!1);
  let x = new URL(H(e, t), document.baseURI).href;
  useEffect(() => {
    if (I) {
      let e = setTimeout(() => {
        E(!1);
      }, 2500);
      return () => clearTimeout(e);
    }
  }, [I]);
  let S = async () => {
    await v(_$$S({
      url: x,
      linkType: "template"
    }));
    E(!0);
  };
  let w = {};
  let C = I ? renderI18nText("community.publishing.copied") : renderI18nText("community.publishing.copy_link");
  h = I ? b ? _$$g : _$$l : b ? _$$r : _$$N;
  !b && (f ? w = {
    className: "xwa2v1s"
  } : A && (w = {
    className: "xq04e53"
  }));
  let T = jsxs("span", {
    className: "x78zum5 x195vfkc",
    children: [jsx(h, {
      ...w
    }), i && C]
  });
  return "banner" === o ? jsx(ButtonPrimitive, {
    onClick: S,
    className: "x78zum5 xjwf9q1 x87zv9k x6s0dn4 xxhr3t x1a33sea x19y5rnk x1r7xphn",
    children: T
  }) : "borderless" === o ? jsx(IconButton, {
    onClick: S,
    "aria-label": getI18nString("community.publishing.copy_link"),
    children: T
  }) : jsx(Button, {
    "data-tooltip": getI18nString("community.publishing.copy_template_share_link"),
    "data-tooltip-type": "text",
    variant: o,
    onClick: S,
    "data-testid": "copy-template-share-link-button",
    children: T
  });
}
export function $$x1({
  editorType: e,
  libraryKey: t
}) {
  let i = new URL(H(e, t), document.baseURI).href;
  return jsx(Link.Button, {
    variant: "secondary",
    href: i,
    newTab: !0,
    trusted: !0,
    children: renderI18nText("cooper.templates.use_in_a_new_file")
  });
}
export function $$S4(e) {
  return hasPublishScope(e) ? "" : hasClientMeta(e) ? new Tg({
    resourceId: e.id
  }).href : isWidgetOrPlugin(e) ? new CommunityRoute({
    resourceId: e.id,
    apiResourceType: e.is_widget ? ResourceType.WIDGET : ResourceType.PLUGIN
  }).href : "";
}
export const A_ = $$I0;
export const Ai = $$x1;
export const Dg = $$v2;
export const gx = $$b3;
export const jT = $$S4;
export const vu = $$E5;