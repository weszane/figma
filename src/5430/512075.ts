import { jsx } from "react/jsx-runtime";
import { usePrefersMediaQuery } from "../figma_app/469468";
import { getTranslatedDynamicContent } from "../905/303541";
import { getValueOrFallback } from "../905/872825";
import { TemplateCategory } from "../figma_app/930386";
import { BrowseCategoryRoute } from "../figma_app/805898";
import { E } from "../5430/204549";
import { _C6 } from "../figma_app/27776";
if (443 == require.j) {}
export function $$u0({
  category: e,
  rdpImpressionId: t
}) {
  let r = usePrefersMediaQuery(`(max-width: ${_C6})`);
  let {
    parent_category
  } = e || {
    parent_category: null
  };
  let m = getValueOrFallback(parent_category?.url_slug, TemplateCategory);
  let _ = getValueOrFallback(e.url_slug, TemplateCategory);
  let p = !!t;
  let h = [parent_category && m && {
    text: getTranslatedDynamicContent(parent_category.i18n_meta?.title, parent_category.title),
    linkProps: {
      to: new BrowseCategoryRoute({
        categorySlug: m
      }).to,
      trackingEventName: "cmty_category",
      trackingProperties: {
        name: "category_breadcrumb_clicked",
        category_slug: m,
        category_text: parent_category.title,
        rdpImpressionId: t,
        is_mobile: r
      }
    }
  }, _ && {
    text: getTranslatedDynamicContent(e.i18n_meta?.title, e.title),
    linkProps: {
      to: new BrowseCategoryRoute({
        categorySlug: _
      }).to,
      trackingEventName: "cmty_category",
      trackingProperties: {
        name: "category_breadcrumb_clicked",
        category_slug: _,
        category_text: e.title,
        rdpImpressionId: t,
        is_mobile: r
      }
    }
  }].filter(Boolean);
  return jsx(E, {
    breadcrumbs: h,
    surface: p ? "resource" : "category"
  });
}
export const X = $$u0;