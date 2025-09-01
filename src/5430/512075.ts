import { jsx } from "react/jsx-runtime";
import { N } from "../figma_app/469468";
import { Yd } from "../905/303541";
import { S } from "../905/872825";
import { LJ } from "../figma_app/930386";
import { $E } from "../figma_app/805898";
import { E } from "../5430/204549";
import { _C6 } from "../figma_app/27776";
if (443 == require.j) {}
export function $$u0({
  category: e,
  rdpImpressionId: t
}) {
  let r = N(`(max-width: ${_C6})`);
  let {
    parent_category
  } = e || {
    parent_category: null
  };
  let m = S(parent_category?.url_slug, LJ);
  let _ = S(e.url_slug, LJ);
  let p = !!t;
  let h = [parent_category && m && {
    text: Yd(parent_category.i18n_meta?.title, parent_category.title),
    linkProps: {
      to: new $E({
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
    text: Yd(e.i18n_meta?.title, e.title),
    linkProps: {
      to: new $E({
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