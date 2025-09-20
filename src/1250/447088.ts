import { permissionScopeHandler } from '../905/189185';
import { isNotNullish } from '../figma_app/95419';
import { hasContent } from '../figma_app/427318';
import { AssetCategoryEnum } from '../figma_app/639711';
import { SceneGraphHelpers, AppStateTsApi, CooperTemplateTypesTsBindings, Fullscreen, CooperHelpers, SocialMediaFormats } from '../figma_app/763686';
import { compareNumbers } from '../figma_app/766708';
let $$d2 = 3;
let c = [SocialMediaFormats.FACEBOOK_AD_PORTRAIT, SocialMediaFormats.INSTA_POST_PORTRAIT, SocialMediaFormats.LINKEDIN_POST_PORTRAIT, SocialMediaFormats.LINKEDIN_POST_LANDSCAPE, SocialMediaFormats.LINKEDIN_AD_SQUARE, SocialMediaFormats.LINKEDIN_AD_VERTICAL, SocialMediaFormats.GOOGLE_MOBILE_BANNER_AD, SocialMediaFormats.GOOGLE_SKYSCRAPER_AD, SocialMediaFormats.PRINT_US_LETTER, SocialMediaFormats.POSTER, SocialMediaFormats.BANNER_STANDARD, SocialMediaFormats.BANNER_WIDE, SocialMediaFormats.BANNER_ULTRAWIDE, SocialMediaFormats.NAME_TAG_PORTRAIT, SocialMediaFormats.NAME_TAG_LANDSCAPE, SocialMediaFormats.INSTA_REEL_COVER, SocialMediaFormats.ZOOM_BACKGROUND, SocialMediaFormats.TIKTOK_POST];
export function $$_0({
  dimensions: e,
  assets: t
}) {
  if (!t || t.length === 0) return t;
  let {
    width,
    height
  } = e;
  let r = [[504, 360], [360, 504], [540, 792], [648, 864], [576, 288], [576, 192], [576, 144], [144, 216], [216, 144]];
  let i = [{
    w: 2100,
    h: 1500
  }, {
    w: 1500,
    h: 2100
  }, {
    w: 2250,
    h: 3300
  }, {
    w: 2700,
    h: 3600
  }, {
    w: 2400,
    h: 1200
  }, {
    w: 2400,
    h: 800
  }, {
    w: 2400,
    h: 600
  }, {
    w: 600,
    h: 900
  }, {
    w: 900,
    h: 600
  }];
  for (let e = 0; e < r.length; e++) {
    let o = r[e];
    if (o && width === o[0] && height === o[1]) {
      let r = i[e];
      return t.filter(e => {
        if (!hasContent(e)) return !1;
        let t = $$u1(e);
        return !!t && (t.width === width && t.height === height || t.width === r?.w && t.height === r?.h);
      });
    }
  }
  return t.filter(e => {
    if (!hasContent(e)) return !1;
    let t = $$u1(e);
    return !!t && t.width === width && t.height === height;
  });
}
export function $$u1(e) {
  if (!hasContent(e)) return;
  let t = e.content.component_v2?.min_node_width;
  let n = e.content.component_v2?.min_node_height;
  return t && n ? {
    width: t,
    height: n
  } : void 0;
}
export function $$m4({
  templateType: e,
  closeTemplatePicker: t,
  shouldInsertFrame: n,
  shouldEnterGridView: a,
  setDimensionsSubmenuOpen: o,
  setActiveTab: s,
  setCooperTemplateShouldUseAssetType: d
}) {
  permissionScopeHandler.user('Create blank template', () => {
    let i = CooperTemplateTypesTsBindings?.getCooperTemplateTypeSize(e);
    let _ = AppStateTsApi?.getInsertGridCoord({
      x: -1 / 0,
      y: -1 / 0
    });
    if (!i || !_) {
      console.error('Failed fetch size and/or location for new template', i, _);
      return;
    }
    let u = CooperHelpers?.createBlankChildAtCoord(_.row, _.col, i, 'start_from_scratch', !n, e);
    u && (a ? (AppStateTsApi?.cooperFocusView().exitFocusedNodeView(), Fullscreen?.panToNode(u, !1), SceneGraphHelpers?.replaceSelection([u], !1)) : AppStateTsApi?.cooperFocusView().isFocusedNodeViewEnabled() ? AppStateTsApi?.cooperFocusView().focusNodeInFocusedNodeView(u, !0) : (setTimeout(() => {
      AppStateTsApi?.cooperFocusView().panToNodeIfOutsideViewport(u, 0.6);
    }, 0), SceneGraphHelpers?.replaceSelection([u], !1)));
    e === SocialMediaFormats.CUSTOM && o(!0);
    e !== SocialMediaFormats.CUSTOM && s && d && (s(AssetCategoryEnum.TEMPLATES), c.includes(e) || d(!0));
    t();
  });
}
export function $$p3(e, t) {
  return isNotNullish(e.sort_position) && isNotNullish(t.sort_position) ? -compareNumbers(e.sort_position, t.sort_position) : e.name.localeCompare(t.name);
}
export const AO = $$_0;
export const Kq = $$u1;
export const YS = $$d2;
export const go = $$p3;
export const r5 = $$m4;