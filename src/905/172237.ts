import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { CY } from "../figma_app/637027";
import { s as _$$s } from "../cssbuilder/589278";
import { tx } from "../905/303541";
import { A as _$$A } from "../905/118358";
export function $$d0({
  pagesList: e,
  isFirstTimePublish: t,
  isWhiteboardFile: i
}) {
  let [d, c] = useState(!1);
  useEffect(() => {
    c(!i && (void 0 === e || 0 === e.length));
  }, [i, e]);
  let u = () => {
    if (i) return t ? tx("community.seller.when_you_publish_a_paid_resource_you_cant_make_it_free_again") : null;
    if (void 0 === e || 0 === e.length) return t ? tx("community.seller.paid_hub_file_publish_info_banner") : tx("community.seller.freemium_file_publish_info_banner");
    {
      let i = e[0].name;
      let r = jsx("span", {
        className: _$$s.fontBold.$,
        children: i
      });
      return e.length > 1 ? t ? tx("community.seller.paid_hub_file_publish_info_banner_with_page_name", {
        pageName: r
      }) : tx("community.seller.freemium_file_publish_info_banner_with_page_name", {
        pageName: r
      }) : t ? tx("community.seller.paid_hub_file_publish_warning_with_page_name", {
        pageName: r
      }) : tx("community.seller.freemium_file_publish_warning_with_page_name", {
        pageName: r
      });
    }
  };
  let p = (() => {
    let e = u();
    return e ? jsxs(Fragment, {
      children: [e, " ", t && jsx(CY, {
        className: d ? _$$s.colorTextWarning.$ : void 0,
        href: "https://help.figma.com/hc/articles/12067637274519",
        target: "_blank",
        trusted: !0,
        children: tx("community.seller.why_link")
      })]
    }) : null;
  })();
  return p ? jsx(_$$A, {
    variant: d ? "warning" : "brand",
    bannerContent: p
  }) : null;
}
export const A = $$d0;