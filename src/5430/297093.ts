import { throwTypeError } from "../figma_app/465776";
import { getI18nString } from "../905/303541";
import { isMakeDiscoveryEnabled } from "../figma_app/275462";
import { M } from "../905/722875";
import { BrowseUtils } from "../905/942203";
import { editorUtilities } from "../905/22009";
import { ResourceTypes, ResourceTypeSubset } from "../905/178090";
import { selectEditorResource } from "../figma_app/773663";
import { PricingOptions } from "../905/237873";
import { SortOptions } from "../figma_app/324237";
if (443 == require.j) {}
export function $$_4(e) {
  switch (e) {
    case editorUtilities.Editors.ALL:
      return getI18nString("community.landing_page.sort.all_products");
    case editorUtilities.Editors.FIGMA:
      return getI18nString("general.figma_design");
    case editorUtilities.Editors.DEV_MODE:
      return getI18nString("community.view_bar.dev_mode");
    case editorUtilities.Editors.PROTOTYPE:
      return getI18nString("community.view_bar.figma_prototype");
    case editorUtilities.Editors.FIGJAM:
      return getI18nString("community.view_bar.fig_jam");
    case editorUtilities.Editors.SLIDES:
      return getI18nString("community.view_bar.slides");
    case editorUtilities.Editors.SITES:
      return getI18nString("community.view_bar.sites");
    case editorUtilities.Editors.COOPER:
      return getI18nString("community.view_bar.buzz");
    case editorUtilities.Editors.FIGMAKE:
      return getI18nString("community.view_bar.figmake");
    default:
      throwTypeError(e);
  }
}
export function $$p2(e, t, r) {
  return e === ResourceTypes.SearchResourceTypes.PROFILES ? [] : function () {
    let e = [editorUtilities.Editors.ALL, editorUtilities.Editors.FIGMA, editorUtilities.Editors.DEV_MODE, editorUtilities.Editors.PROTOTYPE, editorUtilities.Editors.FIGJAM, editorUtilities.Editors.SLIDES, editorUtilities.Editors.SITES, editorUtilities.Editors.COOPER];
    isMakeDiscoveryEnabled() && e.push(editorUtilities.Editors.FIGMAKE);
    return e;
  }().filter(s => (!t || !(t.length > 0) || !!t.includes(s)) && s === selectEditorResource(s, e, r).editorType).map(e => ({
    key: e,
    label: $$_4(e)
  }));
}
export function $$h3(e) {
  let t = !e && M();
  return [{
    key: BrowseUtils.ALL,
    label: getI18nString("community.view_bar.all_creators")
  }, t ? {
    key: BrowseUtils.FOLLOWING,
    label: getI18nString("community.view_bar.following")
  } : null, {
    key: BrowseUtils.FIGMA_PARTNER,
    label: getI18nString("community.view_bar.figma_partners_only")
  }].filter(Boolean);
}
export function $$x0(e, t) {
  let r = [{
    key: SortOptions.Shared.POPULAR,
    label: getI18nString("community.landing_page.sort.trending")
  }, {
    key: SortOptions.Shared.ALL_TIME,
    label: getI18nString("community.curated_page.popular")
  }, {
    key: SortOptions.Shared.PUBLISHED_AT,
    label: getI18nString("community.landing_page.sort.recent")
  }];
  e && (r.unshift({
    key: SortOptions.Search.RELEVANCY,
    label: getI18nString("community.landing_page.sort.relevancy")
  }), t !== PricingOptions.FREE && r.push({
    key: SortOptions.Search.PRICE_DESC,
    label: getI18nString("community.landing_page.sort.price_high_to_low")
  }, {
    key: SortOptions.Search.PRICE_ASC,
    label: getI18nString("community.landing_page.sort.price_low_to_high")
  }));
  return r;
}
let f = [ResourceTypes.BrowseResourceTypes.MIXED, ResourceTypes.BrowseResourceTypes.FILES, ResourceTypes.BrowseResourceTypes.PLUGINS, ResourceTypes.BrowseResourceTypes.WIDGETS];
let y = Object.values(ResourceTypeSubset);
export function $$g1(e, t = !0) {
  return (t ? f : y).filter(t => {
    let {
      editorType,
      resourceType
    } = selectEditorResource(e, t);
    return e === editorType && t === resourceType;
  }).map(e => ({
    key: e,
    label: t ? function (e) {
      switch (e) {
        case "mixed":
          return getI18nString("community.view_bar.all_resources");
        case "files":
          return getI18nString("community.view_bar.files");
        case "plugins":
          return getI18nString("community.view_bar.plugins");
        case "widgets":
          return getI18nString("community.view_bar.widgets");
        default:
          throwTypeError(e);
      }
    }(e) : function (e) {
      switch (e) {
        case ResourceTypeSubset.FILES:
          return getI18nString("community.view_bar.files");
        case ResourceTypeSubset.PLUGINS:
          return getI18nString("community.view_bar.plugins");
        case ResourceTypeSubset.WIDGETS:
          return getI18nString("community.view_bar.widgets");
        default:
          throwTypeError(e);
      }
    }(e)
  }));
}
export const AV = $$x0;
export const CO = $$g1;
export const Vr = $$p2;
export const Yf = $$h3;
export const m1 = $$_4;