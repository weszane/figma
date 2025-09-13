import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { Button } from "../905/521428";
import o from "classnames";
import { l as _$$l } from "../905/745972";
import { getTranslatedDynamicContent, getI18nString } from "../905/303541";
import { N, S } from "../905/872825";
import { a4 } from "../figma_app/321395";
import { LJ } from "../figma_app/930386";
import { $E } from "../figma_app/805898";
import { TrackedLink } from "../figma_app/831799";
var a = o;
export function $$h1(e, t, r, s) {
  return r ? e.tags.map(e => ({
    to: s.copyWith({
      categorySlug: t,
      tagSlug: e.localized_url_slug ?? e.url_slug ?? void 0
    }).href,
    title: e.text,
    translatedTitle: getTranslatedDynamicContent(e.i18n_meta?.text, e.text),
    urlSlug: e.text,
    categorySlug: t,
    tagSlug: e.localized_url_slug ?? e.url_slug ?? void 0
  })) : e.child_categories ? e.child_categories.filter(e => N(e.url_slug, LJ) && "other" !== e.title.toLowerCase()).map(e => ({
    to: s.copyWith({
      categorySlug: e.url_slug
    }).href,
    title: e.title,
    translatedTitle: getTranslatedDynamicContent(e.i18n_meta?.title, e.title),
    urlSlug: e.url_slug,
    categorySlug: e.url_slug,
    tagSlug: void 0
  })) : [];
}
export function $$x0({
  category: e,
  showTags: t = !1
}) {
  let r = S(e.url_slug, LJ);
  if (!r || e.selected_tag) return null;
  let o = $$h1(e, r, t, a4($E));
  let x = useRef(null);
  let [f, y] = useState(!1);
  let [g, v] = useState(!1);
  let b = _$$l();
  return (useEffect(() => {
    if (f || !x.current) return;
    let e = x.current.scrollWidth > x.current.clientWidth;
    e && !g ? v(!0) : !e && g && v(!1);
  }, [f, g, b]), 0 === o.length) ? null : jsxs("div", {
    className: "category_links_container--container--oCeoY",
    children: [jsx("div", {
      ref: x,
      className: a()("category_links_container--subcategoriesContainer--6e1tK", {
        "category_links_container--expanded--8foeW": f,
        "category_links_container--fadeOut--pxPt8": g
      }),
      children: o.map(({
        to: e,
        title: r,
        translatedTitle: i,
        urlSlug: n
      }) => jsx(TrackedLink, {
        trackingEventName: "cmty_category",
        trackingProperties: {
          name: t ? "tag_link_clicked" : "subcategory_link_clicked",
          category_slug: n,
          category_text: r,
          to: e
        },
        to: e,
        className: "category_links_container--subcategory--Wzmn3 text--fontPos13--xW8hS text--_fontBase--QdLsd",
        children: i
      }, e))
    }), g && jsx(Button, {
      variant: "link",
      onClick: () => {
        y(!0);
        v(!1);
      },
      children: getI18nString("community.shelves.show_more")
    })]
  });
}
export const A = $$x0;
export const m = $$h1;