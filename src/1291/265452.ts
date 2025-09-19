import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "../905/438674";
import { getFeatureFlags } from "../905/601108";
import { SvgComponent } from "../905/714743";
import { renderI18nText } from "../905/303541";
import { BI } from "../figma_app/546509";
import { HubTypeEnum } from "../figma_app/45218";
let c = "browse_modal_empty_search_result--emptyStateText---rbwv ellipsis--ellipsis--Tjyfa text--fontPos13--xW8hS text--_fontBase--QdLsd";
let u = "browse_modal_empty_search_result--emptyStateStrongText--fyWIi";
export function $$m0(e) {
  let {
    defaultDisplayStringResourceType,
    query,
    cta,
    orgNameIfAllowlistEnforced
  } = e;
  return jsxs("div", {
    className: "browse_modal_empty_search_result--emptyState--XyC30 tiles_view--emptyState--jfzsE text--fontPos11--2LvXf text--_fontBase--QdLsd",
    children: [e.illustration && jsx(SvgComponent, {
      className: "browse_modal_empty_search_result--emptyStateIllustrations--M9hN-",
      svg: e.illustration,
      useOriginalSrcFills_DEPRECATED: !0
    }), jsx("div", {
      className: "browse_modal_empty_search_result--emptyStateTextWrapper--7z4U6",
      children: orgNameIfAllowlistEnforced ? jsx("span", {
        className: "browse_modal_empty_search_result--emptyStateText2Lines--xoqUp ellipsis--ellipsisAfter2Lines--Qo-Xh ellipsis--_ellipsisAfterNLines--LzI7k text--fontPos13--xW8hS text--_fontBase--QdLsd",
        children: renderI18nText("whiteboard.inserts.couldn_t_find_resource_in_org_allowlist", {
          orgName: orgNameIfAllowlistEnforced,
          searchQuery: jsx("span", {
            className: u,
            children: query
          })
        })
      }) : jsx("span", {
        className: c,
        children: defaultDisplayStringResourceType ? renderI18nText("whiteboard.inserts.couldn_t_find_default_display_string_resource_type_for", {
          resourceType: defaultDisplayStringResourceType,
          searchQuery: jsx("span", {
            className: u,
            children: query
          })
        }) : renderI18nText("whiteboard.inserts.custom_display_string_search_result", {
          searchQuery: jsx("span", {
            className: u,
            children: query
          })
        })
      })
    }), cta && jsx("div", {
      children: cta
    })]
  });
}
export function $$$$_1(e) {
  let t = BI();
  if (t?.shouldOptimizeForIpadApp || getFeatureFlags().cmty_m10n_test_apple_os) return null;
  let s = e.resourceType && e.resourceType === HubTypeEnum.HUB_FILE;
  return jsx("span", {
    className: c,
    children: s ? renderI18nText("whiteboard.inserts.if_you_re_still_looking_there_s_much_more_to_see_in_the", {
      link: jsx(Link, {
        href: e.url,
        newTab: !0,
        children: renderI18nText("whiteboard.inserts.if_you_re_still_looking_there_s_much_more_to_see_in_the_community")
      })
    }) : jsx(Link, {
      href: e.url,
      newTab: !0,
      children: renderI18nText("whiteboard.inserts.see_more_from_community")
    })
  });
}
export const e = $$m0;
export const _ = $$$$_1;