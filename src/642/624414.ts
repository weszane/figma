import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from "../vendor/514228";
import { ServiceCategories as _$$e } from "../905/165054";
import { l as _$$l } from "../905/509505";
import { sx } from "../905/449184";
import { Jn } from "../905/17223";
import { tH, H4 } from "../905/751457";
import { Us } from "../figma_app/637027";
import { tx } from "../905/303541";
import { V as _$$V } from "../905/223767";
import { to } from "../905/156213";
import { b as _$$b } from "../905/985254";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { q5 } from "../figma_app/516028";
import { b as _$$b2 } from "../905/165519";
export function $$_0() {
  let e = useDispatch();
  let t = q5();
  let s = useSelector(e => e.user?.id);
  if (!t) return null;
  let _ = t.teamId;
  let b = jsx(Us, {
    className: "library_upsell_banner--blueLink--bt6GX blue_link--blueLink--9rlnd",
    onClick: function () {
      sx("library_upsell_badge_clicked", {
        fileKey: t?.key,
        teamId: _,
        userId: s
      });
      e(to({
        type: _$$V,
        data: {
          upsellSource: _$$b2.LIBRARY_UPSELL_BADGE,
          teamId: _ ?? void 0,
          openCheckoutInNewTab: !0
        }
      }));
    },
    trackingProperties: {
      trackingDescriptor: _$$c.UPGRADE_TO_PROFESSIONAL
    },
    trusted: !0,
    role: "button",
    children: tx("design_systems.assets_panel.library_upsell_upgrade")
  });
  return jsx(tH, {
    boundaryKey: "LibraryUpsellBanner",
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    sentryTags: {
      area: _$$e.MONETIZATION_UPGRADES
    },
    children: jsx(fu, {
      name: "library upsell badge",
      properties: {
        fileKey: t?.key,
        teamId: t?.teamId
      },
      children: jsx("div", {
        className: "library_upsell_banner--bannerBackground--WlTVY",
        children: jsxs("div", {
          className: "library_upsell_banner--bannerContainer--SqSHa",
          children: [jsx(Jn, {
            className: "library_upsell_banner--closeButton--U1sPN",
            onClick: function () {
              sx("library_upsell_badge_dismissed", {
                fileKey: t?.key,
                teamId: _,
                userId: s
              });
              e(_$$b({
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
              children: tx("design_systems.assets_panel.library_upsell_header")
            }), jsx("p", {
              className: "library_upsell_banner--bannerBody--GSg3l",
              children: tx("design_systems.assets_panel.library_upsell_body", {
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