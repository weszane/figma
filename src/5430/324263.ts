import { jsx, Fragment } from "react/jsx-runtime";
import { SecureLink } from "../figma_app/637027";
import { renderI18nText, getI18nString } from "../905/303541";
import { Cc, vb } from "../5430/664984";
import { hasResourceType, getTemplateType } from "../figma_app/427318";
export function $$l0({
  resource: e
}) {
  let t = hasResourceType(e) ? e.resource_type : getTemplateType(e);
  let {
    isDisabled,
    disabledReason
  } = Cc(t);
  if (!isDisabled || !disabledReason) return jsx(Fragment, {});
  let c = function (e) {
    switch (e) {
      case vb.SITES_DISABLED_FOR_STARTER:
        return renderI18nText("community.detail_view.duplicate_cta_disable.starter_plan", {
          upgradeLink: jsx(SecureLink, {
            href: "/upgrade-team?entryPoint=4",
            target: "_blank",
            trusted: !0,
            children: getI18nString("community.detail_view.duplicate_cta_disable.starter_plan.upgrade")
          }),
          learnMoreLink: jsx(SecureLink, {
            href: "https://help.figma.com/hc/articles/31230436657815",
            target: "_blank",
            trusted: !0,
            children: getI18nString("community.detail_view.duplicate_cta_disable.starter_plan.learn_more")
          })
        });
      case vb.SITES_DISABLED_FOR_ORG:
        return getI18nString("community.detail_view.duplicate_cta_disable.sites_org");
      case vb.COOPER_DISABLED_FOR_ORG:
        return getI18nString("community.detail_view.duplicate_cta_disable.cooper_org");
      case vb.FIGMAKE_DISABLED_FOR_ORG:
        return getI18nString("community.detail_view.duplicate_cta_disable.figmake_org");
      default:
        return null;
    }
  }(disabledReason);
  return jsx("div", {
    className: "disabled_cta_subtext--ctaSubtext--TGCQm text--fontPos13--xW8hS text--_fontBase--QdLsd",
    children: c
  });
}
export const M = $$l0;