import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { SecureLink } from "../figma_app/637027";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
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
    if (i) return t ? renderI18nText("community.seller.when_you_publish_a_paid_resource_you_cant_make_it_free_again") : null;
    if (void 0 === e || 0 === e.length) return t ? renderI18nText("community.seller.paid_hub_file_publish_info_banner") : renderI18nText("community.seller.freemium_file_publish_info_banner");
    {
      let i = e[0].name;
      let r = jsx("span", {
        className: cssBuilderInstance.fontBold.$,
        children: i
      });
      return e.length > 1 ? t ? renderI18nText("community.seller.paid_hub_file_publish_info_banner_with_page_name", {
        pageName: r
      }) : renderI18nText("community.seller.freemium_file_publish_info_banner_with_page_name", {
        pageName: r
      }) : t ? renderI18nText("community.seller.paid_hub_file_publish_warning_with_page_name", {
        pageName: r
      }) : renderI18nText("community.seller.freemium_file_publish_warning_with_page_name", {
        pageName: r
      });
    }
  };
  let p = (() => {
    let e = u();
    return e ? jsxs(Fragment, {
      children: [e, " ", t && jsx(SecureLink, {
        className: d ? cssBuilderInstance.colorTextWarning.$ : void 0,
        href: "https://help.figma.com/hc/articles/12067637274519",
        target: "_blank",
        trusted: !0,
        children: renderI18nText("community.seller.why_link")
      })]
    }) : null;
  })();
  return p ? jsx(_$$A, {
    variant: d ? "warning" : "brand",
    bannerContent: p
  }) : null;
}
export const A = $$d0;