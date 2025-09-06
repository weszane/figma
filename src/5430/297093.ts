import { throwTypeError } from "../figma_app/465776";
import { getI18nString } from "../905/303541";
import { l$ } from "../figma_app/275462";
import { M } from "../905/722875";
import { Z } from "../905/942203";
import { k } from "../905/22009";
import { L, t as _$$t2 } from "../905/178090";
import { zs } from "../figma_app/773663";
import { C } from "../905/237873";
import { e as _$$e } from "../figma_app/324237";
if (443 == require.j) {}
export function $$_4(e) {
  switch (e) {
    case k.Editors.ALL:
      return getI18nString("community.landing_page.sort.all_products");
    case k.Editors.FIGMA:
      return getI18nString("general.figma_design");
    case k.Editors.DEV_MODE:
      return getI18nString("community.view_bar.dev_mode");
    case k.Editors.PROTOTYPE:
      return getI18nString("community.view_bar.figma_prototype");
    case k.Editors.FIGJAM:
      return getI18nString("community.view_bar.fig_jam");
    case k.Editors.SLIDES:
      return getI18nString("community.view_bar.slides");
    case k.Editors.SITES:
      return getI18nString("community.view_bar.sites");
    case k.Editors.COOPER:
      return getI18nString("community.view_bar.buzz");
    case k.Editors.FIGMAKE:
      return getI18nString("community.view_bar.figmake");
    default:
      throwTypeError(e);
  }
}
export function $$p2(e, t, r) {
  return e === L.SearchResourceTypes.PROFILES ? [] : function () {
    let e = [k.Editors.ALL, k.Editors.FIGMA, k.Editors.DEV_MODE, k.Editors.PROTOTYPE, k.Editors.FIGJAM, k.Editors.SLIDES, k.Editors.SITES, k.Editors.COOPER];
    l$() && e.push(k.Editors.FIGMAKE);
    return e;
  }().filter(s => (!t || !(t.length > 0) || !!t.includes(s)) && s === zs(s, e, r).editorType).map(e => ({
    key: e,
    label: $$_4(e)
  }));
}
export function $$h3(e) {
  let t = !e && M();
  return [{
    key: Z.ALL,
    label: getI18nString("community.view_bar.all_creators")
  }, t ? {
    key: Z.FOLLOWING,
    label: getI18nString("community.view_bar.following")
  } : null, {
    key: Z.FIGMA_PARTNER,
    label: getI18nString("community.view_bar.figma_partners_only")
  }].filter(Boolean);
}
export function $$x0(e, t) {
  let r = [{
    key: _$$e.Shared.POPULAR,
    label: getI18nString("community.landing_page.sort.trending")
  }, {
    key: _$$e.Shared.ALL_TIME,
    label: getI18nString("community.curated_page.popular")
  }, {
    key: _$$e.Shared.PUBLISHED_AT,
    label: getI18nString("community.landing_page.sort.recent")
  }];
  e && (r.unshift({
    key: _$$e.Search.RELEVANCY,
    label: getI18nString("community.landing_page.sort.relevancy")
  }), t !== C.FREE && r.push({
    key: _$$e.Search.PRICE_DESC,
    label: getI18nString("community.landing_page.sort.price_high_to_low")
  }, {
    key: _$$e.Search.PRICE_ASC,
    label: getI18nString("community.landing_page.sort.price_low_to_high")
  }));
  return r;
}
let f = [L.BrowseResourceTypes.MIXED, L.BrowseResourceTypes.FILES, L.BrowseResourceTypes.PLUGINS, L.BrowseResourceTypes.WIDGETS];
let y = Object.values(_$$t2);
export function $$g1(e, t = !0) {
  return (t ? f : y).filter(t => {
    let {
      editorType,
      resourceType
    } = zs(e, t);
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
        case _$$t2.FILES:
          return getI18nString("community.view_bar.files");
        case _$$t2.PLUGINS:
          return getI18nString("community.view_bar.plugins");
        case _$$t2.WIDGETS:
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