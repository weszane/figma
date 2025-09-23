import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { ServiceCategories } from "../905/165054";
import { l as _$$l } from "../905/509505";
import { trackEventAnalytics } from "../905/449184";
import { CloseButton } from "../905/17223";
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from "../905/751457";
import { linkWithTracking } from "../figma_app/637027";
import { renderI18nText } from "../905/303541";
import { V as _$$V } from "../905/223767";
import { showModalHandler } from "../905/156213";
import { postUserFlag } from "../905/985254";
import { UpgradeAction } from "../905/370443";
import { TrackingProvider } from "../figma_app/831799";
import { selectCurrentFile } from "../figma_app/516028";
import { UpsellModalType } from "../905/165519";
export function $$_0() {
  let e = useDispatch();
  let t = selectCurrentFile();
  let s = useSelector(e => e.user?.id);
  if (!t) return null;
  let _ = t.teamId;
  let b = jsx(linkWithTracking, {
    className: "library_upsell_banner--blueLink--bt6GX blue_link--blueLink--9rlnd",
    onClick: function () {
      trackEventAnalytics("library_upsell_badge_clicked", {
        fileKey: t?.key,
        teamId: _,
        userId: s
      });
      e(showModalHandler({
        type: _$$V,
        data: {
          upsellSource: UpsellModalType.LIBRARY_UPSELL_BADGE,
          teamId: _ ?? void 0,
          openCheckoutInNewTab: !0
        }
      }));
    },
    trackingProperties: {
      trackingDescriptor: UpgradeAction.UPGRADE_TO_PROFESSIONAL
    },
    trusted: !0,
    role: "button",
    children: renderI18nText("design_systems.assets_panel.library_upsell_upgrade")
  });
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: "LibraryUpsellBanner",
    fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
    sentryTags: {
      area: ServiceCategories.MONETIZATION_UPGRADES
    },
    children: jsx(TrackingProvider, {
      name: "library upsell badge",
      properties: {
        fileKey: t?.key,
        teamId: t?.teamId
      },
      children: jsx("div", {
        className: "library_upsell_banner--bannerBackground--WlTVY",
        children: jsxs("div", {
          className: "library_upsell_banner--bannerContainer--SqSHa",
          children: [jsx(CloseButton, {
            className: "library_upsell_banner--closeButton--U1sPN",
            onClick: function () {
              trackEventAnalytics("library_upsell_badge_dismissed", {
                fileKey: t?.key,
                teamId: _,
                userId: s
              });
              e(postUserFlag({
                has_dismissed_component_sidebar_library_upsell_banner: !0
              }));
            }
          }), jsxs("div", {
            className: "library_upsell_banner--bannerContent--SUcpT",
            children: [jsx("div", {
              className: "library_upsell_banner--bannerHeader--Lbg8d",
              children: jsx(_$$l, {})
            }), jsx("p", {
              className: "library_upsell_banner--bannerTitle--AN3mP",
              children: renderI18nText("design_systems.assets_panel.library_upsell_header")
            }), jsx("p", {
              className: "library_upsell_banner--bannerBody--GSg3l",
              children: renderI18nText("design_systems.assets_panel.library_upsell_body", {
                upgradeToProfessionalPlanLink: b
              })
            })]
          })]
        })
      })
    })
  });
}
export const V = $$_0;
