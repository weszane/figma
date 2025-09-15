import { jsx, jsxs } from "react/jsx-runtime";
import { z } from "../905/239603";
import { getInitialOptions } from "../figma_app/169182";
import { vh } from "../figma_app/99826";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { editorUtilities } from "../905/22009";
import { LJ } from "../figma_app/930386";
import { $E } from "../figma_app/805898";
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
      url: new $E({
        categorySlug: LJ.socialMediaTemplates
      }, {
        editor_type: editorUtilities.Editors.COOPER
      }).href
    }, {
      label: getI18nString("categories.web_ad_templates"),
      url: new $E({
        categorySlug: LJ.webAds
      }, {
        editor_type: editorUtilities.Editors.COOPER
      }).href
    }, {
      label: getI18nString("categories.instagram_templates"),
      url: new $E({
        categorySlug: LJ.instagramTemplates
      }, {
        editor_type: editorUtilities.Editors.COOPER
      }).href
    }, {
      label: getI18nString("categories.linkedin_templates"),
      url: new $E({
        categorySlug: LJ.linkedinTemplates
      }, {
        editor_type: editorUtilities.Editors.COOPER
      }).href
    }, {
      label: getI18nString("categories.facebook_templates"),
      url: new $E({
        categorySlug: LJ.facebookTemplates
      }, {
        editor_type: editorUtilities.Editors.COOPER
      }).href
    }, {
      label: getI18nString("categories.youtube_templates"),
      url: new $E({
        categorySlug: LJ.youtubeTemplates
      }, {
        editor_type: editorUtilities.Editors.COOPER
      }).href
    }, {
      label: getI18nString("categories.card_templates"),
      url: new $E({
        categorySlug: LJ.cardTemplates
      }, {
        editor_type: editorUtilities.Editors.COOPER
      }).href
    }]
  }, {
    title: getI18nString("community.footer.popular_searches"),
    items: [{
      label: getI18nString("categories.portfolio_templates"),
      url: new $E({
        categorySlug: LJ.portfolios
      }).href
    }, {
      label: getI18nString("categories.resume_templates"),
      url: new $E({
        categorySlug: LJ.resumes
      }).href
    }, {
      label: getI18nString("categories.website_templates"),
      url: new $E({
        categorySlug: LJ.websiteTemplates
      }, {
        editor_type: editorUtilities.Editors.SITES
      }).href
    }, {
      label: getI18nString("categories.mobile_app_templates"),
      url: new $E({
        categorySlug: LJ.mobileApps
      }).href
    }, {
      label: getI18nString("categories.presentations"),
      url: new $E({
        categorySlug: LJ.presentations
      }).href
    }, {
      label: getI18nString("categories.device_mockups"),
      url: new $E({
        categorySlug: LJ.deviceMockups
      }).href
    }, {
      label: getI18nString("categories.team_meetings"),
      url: new $E({
        categorySlug: LJ.teamMeetings
      }).href
    }]
  }, {
    title: getI18nString("community.footer.recommended"),
    items: [{
      label: getI18nString("categories.calendar_templates"),
      url: new $E({
        categorySlug: LJ.calendarTemplates
      }).href
    }, {
      label: getI18nString("categories.data_templates"),
      url: new $E({
        categorySlug: LJ.dataTemplates
      }).href
    }, {
      label: getI18nString("categories.accessibility_tools"),
      url: new $E({
        categorySlug: LJ.accessibility
      }).href
    }, {
      label: getI18nString("categories.fonts_typography"),
      url: new $E({
        categorySlug: LJ.fontsTypography
      }).href
    }, {
      label: getI18nString("categories.design_inspirations"),
      url: new $E({
        categorySlug: LJ.designInspirations
      }).href
    }, {
      label: getI18nString("categories.development_plugins"),
      url: new $E({
        categorySlug: LJ.development
      }).href
    }, {
      label: getI18nString("categories.strategic_planning"),
      url: new $E({
        categorySlug: LJ.strategicPlanning
      }).href
    }]
  }, {
    title: getI18nString("community.footer.top_categories"),
    items: [{
      label: getI18nString("categories.design_tools"),
      url: new $E({
        categorySlug: LJ.designTools
      }).href
    }, {
      label: getI18nString("categories.libraries"),
      url: new $E({
        categorySlug: LJ.libraries
      }).href
    }, {
      label: getI18nString("categories.education"),
      url: new $E({
        categorySlug: LJ.education
      }).href
    }, {
      label: getI18nString("categories.whiteboarding"),
      url: new $E({
        categorySlug: LJ.whiteboarding
      }).href
    }, {
      label: getI18nString("categories.visual_assets"),
      url: new $E({
        categorySlug: LJ.visualAssets
      }).href
    }, {
      label: getI18nString("categories.illustrations"),
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
