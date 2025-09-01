import { jsx, jsxs } from "react/jsx-runtime";
import { z } from "../905/239603";
import { getInitialOptions } from "../figma_app/169182";
import { vh } from "../figma_app/99826";
import { B } from "../905/714743";
import { t as _$$t, tx } from "../905/303541";
import { Y } from "../905/830372";
import { k } from "../905/22009";
import { LJ } from "../figma_app/930386";
import { $E } from "../figma_app/805898";
import { L0, o3 } from "../figma_app/831799";
import { A as _$$A } from "../svg/179418";
let p = "footer--divider--srDs2";
let x = z.object({
  label: z.string(),
  url: z.string()
});
export function $$f0() {
  let e = [{
    title: _$$t("community.footer.explore"),
    items: [{
      label: _$$t("categories.social_media_templates"),
      url: new $E({
        categorySlug: LJ.socialMediaTemplates
      }, {
        editor_type: k.Editors.COOPER
      }).href
    }, {
      label: _$$t("categories.web_ad_templates"),
      url: new $E({
        categorySlug: LJ.webAds
      }, {
        editor_type: k.Editors.COOPER
      }).href
    }, {
      label: _$$t("categories.instagram_templates"),
      url: new $E({
        categorySlug: LJ.instagramTemplates
      }, {
        editor_type: k.Editors.COOPER
      }).href
    }, {
      label: _$$t("categories.linkedin_templates"),
      url: new $E({
        categorySlug: LJ.linkedinTemplates
      }, {
        editor_type: k.Editors.COOPER
      }).href
    }, {
      label: _$$t("categories.facebook_templates"),
      url: new $E({
        categorySlug: LJ.facebookTemplates
      }, {
        editor_type: k.Editors.COOPER
      }).href
    }, {
      label: _$$t("categories.youtube_templates"),
      url: new $E({
        categorySlug: LJ.youtubeTemplates
      }, {
        editor_type: k.Editors.COOPER
      }).href
    }, {
      label: _$$t("categories.card_templates"),
      url: new $E({
        categorySlug: LJ.cardTemplates
      }, {
        editor_type: k.Editors.COOPER
      }).href
    }]
  }, {
    title: _$$t("community.footer.popular_searches"),
    items: [{
      label: _$$t("categories.portfolio_templates"),
      url: new $E({
        categorySlug: LJ.portfolios
      }).href
    }, {
      label: _$$t("categories.resume_templates"),
      url: new $E({
        categorySlug: LJ.resumes
      }).href
    }, {
      label: _$$t("categories.website_templates"),
      url: new $E({
        categorySlug: LJ.websiteTemplates
      }, {
        editor_type: k.Editors.SITES
      }).href
    }, {
      label: _$$t("categories.mobile_app_templates"),
      url: new $E({
        categorySlug: LJ.mobileApps
      }).href
    }, {
      label: _$$t("categories.presentations"),
      url: new $E({
        categorySlug: LJ.presentations
      }).href
    }, {
      label: _$$t("categories.device_mockups"),
      url: new $E({
        categorySlug: LJ.deviceMockups
      }).href
    }, {
      label: _$$t("categories.team_meetings"),
      url: new $E({
        categorySlug: LJ.teamMeetings
      }).href
    }]
  }, {
    title: _$$t("community.footer.recommended"),
    items: [{
      label: _$$t("categories.calendar_templates"),
      url: new $E({
        categorySlug: LJ.calendarTemplates
      }).href
    }, {
      label: _$$t("categories.data_templates"),
      url: new $E({
        categorySlug: LJ.dataTemplates
      }).href
    }, {
      label: _$$t("categories.accessibility_tools"),
      url: new $E({
        categorySlug: LJ.accessibility
      }).href
    }, {
      label: _$$t("categories.fonts_typography"),
      url: new $E({
        categorySlug: LJ.fontsTypography
      }).href
    }, {
      label: _$$t("categories.design_inspirations"),
      url: new $E({
        categorySlug: LJ.designInspirations
      }).href
    }, {
      label: _$$t("categories.development_plugins"),
      url: new $E({
        categorySlug: LJ.development
      }).href
    }, {
      label: _$$t("categories.strategic_planning"),
      url: new $E({
        categorySlug: LJ.strategicPlanning
      }).href
    }]
  }, {
    title: _$$t("community.footer.top_categories"),
    items: [{
      label: _$$t("categories.design_tools"),
      url: new $E({
        categorySlug: LJ.designTools
      }).href
    }, {
      label: _$$t("categories.libraries"),
      url: new $E({
        categorySlug: LJ.libraries
      }).href
    }, {
      label: _$$t("categories.education"),
      url: new $E({
        categorySlug: LJ.education
      }).href
    }, {
      label: _$$t("categories.whiteboarding"),
      url: new $E({
        categorySlug: LJ.whiteboarding
      }).href
    }, {
      label: _$$t("categories.visual_assets"),
      url: new $E({
        categorySlug: LJ.visualAssets
      }).href
    }, {
      label: _$$t("categories.illustrations"),
      url: new $E({
        categorySlug: LJ.illustrations
      }).href
    }]
  }];
  function t({
    href: e,
    children: t
  }) {
    let r = {
      trackingEventName: "cmty_footer",
      trackingProperties: {
        name: "footer_link_clicked",
        link: e
      }
    };
    return vh(e) ? jsx(L0, {
      href: e,
      ...r,
      children: t
    }) : jsx(o3, {
      to: e,
      ...r,
      children: t
    });
  }
  return jsxs("div", {
    className: "footer--footer--tuKBS text--fontPos13--xW8hS text--_fontBase--QdLsd",
    "data-testid": "community-footer",
    children: [jsx("div", {
      className: "footer--sectionsContainer--BR5as",
      children: e.map(e => jsxs(Y, {
        direction: "vertical",
        padding: {
          right: 16
        },
        children: [jsx("div", {
          className: "footer--sectionTitle--pM53E",
          children: e.title
        }), e.items.map(e => jsx(t, {
          href: e.url,
          children: e.label
        }, e.url))]
      }, e.title))
    }), jsxs(Y, {
      direction: "vertical",
      spacing: 16,
      children: [jsx(t, {
        href: `${getInitialOptions().figma_url}`,
        children: jsx(B, {
          svg: _$$A,
          svgClassName: "footer--wordmark--CrA9E"
        })
      }), jsxs("div", {
        children: [jsx("span", {
          children: tx("community.footer.copyright_by_year", {
            year: new Date().getFullYear()
          })
        }), jsx("span", {
          className: p,
          children: "\u2022"
        }), jsx(t, {
          href: `${getInitialOptions().figma_url}/auto-sitemaps/figma-community-index.xml`,
          children: tx("community.footer.site_map")
        }), jsx("span", {
          className: p,
          children: "\u2022"
        }), jsx(t, {
          href: "https://help.figma.com/hc/articles/360038510573-Figma-Community-Guidelines",
          children: tx("community.footer.community_guidelines")
        }), jsx("span", {
          className: p,
          children: "\u2022"
        }), jsx(t, {
          href: "https://www.figma.com/legal/tos/",
          children: tx("community.footer.terms_of_service")
        })]
      })]
    })]
  });
}
z.object({
  title: z.string(),
  items: z.array(x)
});
export const A = $$f0;