import { jsx, jsxs } from "react/jsx-runtime";
import { z } from "../905/239603";
import { getInitialOptions } from "../figma_app/169182";
import { vh } from "../figma_app/99826";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { editorUtilities } from "../905/22009";
import { TemplateCategory } from "../figma_app/930386";
import { BrowseCategoryRoute } from "../figma_app/805898";
import { TrackedAnchor, TrackedLink } from "../figma_app/831799";
import { A as _$$A } from "../svg/179418";
let p = "footer--divider--srDs2";
let x = z.object({
  label: z.string(),
  url: z.string()
});
export function $$f0() {
  let e = [{
    title: getI18nString("community.footer.explore"),
    items: [{
      label: getI18nString("categories.social_media_templates"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.socialMediaTemplates
      }, {
        editor_type: editorUtilities.Editors.COOPER
      }).href
    }, {
      label: getI18nString("categories.web_ad_templates"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.webAds
      }, {
        editor_type: editorUtilities.Editors.COOPER
      }).href
    }, {
      label: getI18nString("categories.instagram_templates"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.instagramTemplates
      }, {
        editor_type: editorUtilities.Editors.COOPER
      }).href
    }, {
      label: getI18nString("categories.linkedin_templates"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.linkedinTemplates
      }, {
        editor_type: editorUtilities.Editors.COOPER
      }).href
    }, {
      label: getI18nString("categories.facebook_templates"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.facebookTemplates
      }, {
        editor_type: editorUtilities.Editors.COOPER
      }).href
    }, {
      label: getI18nString("categories.youtube_templates"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.youtubeTemplates
      }, {
        editor_type: editorUtilities.Editors.COOPER
      }).href
    }, {
      label: getI18nString("categories.card_templates"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.cardTemplates
      }, {
        editor_type: editorUtilities.Editors.COOPER
      }).href
    }]
  }, {
    title: getI18nString("community.footer.popular_searches"),
    items: [{
      label: getI18nString("categories.portfolio_templates"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.portfolios
      }).href
    }, {
      label: getI18nString("categories.resume_templates"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.resumes
      }).href
    }, {
      label: getI18nString("categories.website_templates"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.websiteTemplates
      }, {
        editor_type: editorUtilities.Editors.SITES
      }).href
    }, {
      label: getI18nString("categories.mobile_app_templates"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.mobileApps
      }).href
    }, {
      label: getI18nString("categories.presentations"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.presentations
      }).href
    }, {
      label: getI18nString("categories.device_mockups"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.deviceMockups
      }).href
    }, {
      label: getI18nString("categories.team_meetings"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.teamMeetings
      }).href
    }]
  }, {
    title: getI18nString("community.footer.recommended"),
    items: [{
      label: getI18nString("categories.calendar_templates"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.calendarTemplates
      }).href
    }, {
      label: getI18nString("categories.data_templates"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.dataTemplates
      }).href
    }, {
      label: getI18nString("categories.accessibility_tools"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.accessibility
      }).href
    }, {
      label: getI18nString("categories.fonts_typography"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.fontsTypography
      }).href
    }, {
      label: getI18nString("categories.design_inspirations"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.designInspirations
      }).href
    }, {
      label: getI18nString("categories.development_plugins"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.development
      }).href
    }, {
      label: getI18nString("categories.strategic_planning"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.strategicPlanning
      }).href
    }]
  }, {
    title: getI18nString("community.footer.top_categories"),
    items: [{
      label: getI18nString("categories.design_tools"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.designTools
      }).href
    }, {
      label: getI18nString("categories.libraries"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.libraries
      }).href
    }, {
      label: getI18nString("categories.education"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.education
      }).href
    }, {
      label: getI18nString("categories.whiteboarding"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.whiteboarding
      }).href
    }, {
      label: getI18nString("categories.visual_assets"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.visualAssets
      }).href
    }, {
      label: getI18nString("categories.illustrations"),
      url: new BrowseCategoryRoute({
        categorySlug: TemplateCategory.illustrations
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
    return vh(e) ? jsx(TrackedAnchor, {
      href: e,
      ...r,
      children: t
    }) : jsx(TrackedLink, {
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
      children: e.map(e => jsxs(AutoLayout, {
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
    }), jsxs(AutoLayout, {
      direction: "vertical",
      spacing: 16,
      children: [jsx(t, {
        href: `${getInitialOptions().figma_url}`,
        children: jsx(SvgComponent, {
          svg: _$$A,
          svgClassName: "footer--wordmark--CrA9E"
        })
      }), jsxs("div", {
        children: [jsx("span", {
          children: renderI18nText("community.footer.copyright_by_year", {
            year: new Date().getFullYear()
          })
        }), jsx("span", {
          className: p,
          children: "\u2022"
        }), jsx(t, {
          href: `${getInitialOptions().figma_url}/auto-sitemaps/figma-community-index.xml`,
          children: renderI18nText("community.footer.site_map")
        }), jsx("span", {
          className: p,
          children: "\u2022"
        }), jsx(t, {
          href: "https://help.figma.com/hc/articles/360038510573-Figma-Community-Guidelines",
          children: renderI18nText("community.footer.community_guidelines")
        }), jsx("span", {
          className: p,
          children: "\u2022"
        }), jsx(t, {
          href: "https://www.figma.com/legal/tos/",
          children: renderI18nText("community.footer.terms_of_service")
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