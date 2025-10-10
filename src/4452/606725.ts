import { jsxs, jsx } from "react/jsx-runtime";
import { getI18nString, renderI18nText } from "../905/303541";
import { r as _$$r } from "../905/398386";
import { EntityType } from "../figma_app/707808";
import { BaseNuxOnboardingOverlay } from "../4452/529989";
import { C5 } from "../7021/95197";
export function $$d0(e) {
  let t = (e => {
    switch (e) {
      case EntityType.PROJECT:
        return getI18nString("file_browser.project");
      case EntityType.TEAM:
        return getI18nString("file_browser.team");
      case EntityType.WORKSPACE:
        return getI18nString("file_browser.workspace");
      case EntityType.LICENSE_GROUP:
        return getI18nString("file_browser.billing_group");
      default:
        return getI18nString("file_browser.unavailable_view_resource");
    }
  })(e.resourceType);
  let a = (e => {
    switch (e) {
      case EntityType.PROJECT:
        return getI18nString("file_browser.project_capitalized");
      case EntityType.TEAM:
        return getI18nString("file_browser.team_capitalized");
      case EntityType.WORKSPACE:
        return getI18nString("file_browser.workspace_capitalized");
      case EntityType.LICENSE_GROUP:
        return getI18nString("file_browser.billing_group_capitalized");
      default:
        return getI18nString("file_browser.unavailable_view_resource_capitalized");
    }
  })(e.resourceType);
  let d = jsxs("div", {
    className: "unavailable_view--unavailableViewContainer--GTj3V",
    children: [jsx("div", {
      className: "unavailable_view--header---62Pr text--fontPos18--rYXJb text--_fontBase--QdLsd",
      children: renderI18nText("file_browser.unavailable_view_resource_not_found", {
        capitalizedResourceNoun: a
      })
    }), jsx("div", {
      className: "unavailable_view--detailText--eAn5- text--fontPos14--OL9Hp text--_fontBase--QdLsd",
      children: renderI18nText("file_browser.unavailable_view_text", {
        resourceNoun: t
      })
    }), jsx(BaseNuxOnboardingOverlay, {
      entryPoint: C5.FileBrowserUnavailableView
    })]
  });
  return jsx(_$$r, {
    content: d
  });
}
export const S = $$d0;
