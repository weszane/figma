import { buildUploadUrl } from "../figma_app/169182";
import { getI18nString, getTranslatedDynamicContent } from "../905/303541";
import { isValueInObject, getValueOrFallback } from "../905/872825";
import { getCurrentLocale } from "../figma_app/598412";
import { TemplateCategory, getCanonicalCategory } from "../figma_app/930386";
let l = {
  [TemplateCategory.visualAssets]: () => getI18nString("categories.visual_assets"),
  [TemplateCategory.development]: () => getI18nString("categories.development_plugins"),
  [TemplateCategory.accessibility]: () => getI18nString("categories.accessibility_tools"),
  [TemplateCategory.bannerTemplates]: () => getI18nString("categories.banner_templates"),
  [TemplateCategory.brainstorming]: () => getI18nString("categories.brainstorming"),
  [TemplateCategory.cardTemplates]: () => getI18nString("categories.card_templates"),
  [TemplateCategory.classroomActivities]: () => getI18nString("categories.classroom_activities"),
  [TemplateCategory.dataTemplates]: () => getI18nString("categories.data_templates"),
  [TemplateCategory.designInspirations]: () => getI18nString("categories.design_inspirations"),
  [TemplateCategory.designTemplates]: () => getI18nString("categories.design_templates"),
  [TemplateCategory.designTools]: () => getI18nString("categories.design_tools"),
  [TemplateCategory.desktopAppsWebsites]: () => getI18nString("categories.desktop_apps_websites"),
  [TemplateCategory.deviceMockups]: () => getI18nString("categories.device_mockups"),
  [TemplateCategory.diagramming]: () => getI18nString("categories.diagramming"),
  [TemplateCategory.editingEffects]: () => getI18nString("categories.editing_effects"),
  [TemplateCategory.education]: () => getI18nString("categories.education"),
  [TemplateCategory.facebookTemplates]: () => getI18nString("categories.facebook_templates"),
  [TemplateCategory.fileOrganization]: () => getI18nString("categories.file_organization"),
  [TemplateCategory.flyerTemplates]: () => getI18nString("categories.flyers"),
  [TemplateCategory.fontsTypography]: () => getI18nString("categories.fonts_typography"),
  [TemplateCategory.funGames]: () => getI18nString("categories.fun_games"),
  [TemplateCategory.icons]: () => getI18nString("categories.icons"),
  [TemplateCategory.illustrations]: () => getI18nString("categories.illustrations"),
  [TemplateCategory.instagramTemplates]: () => getI18nString("categories.instagram_templates"),
  [TemplateCategory.invitationTemplates]: () => getI18nString("categories.invitation_templates"),
  [TemplateCategory.invoiceTemplates]: () => getI18nString("categories.invoices"),
  [TemplateCategory.importExport]: () => getI18nString("categories.import_export"),
  [TemplateCategory.letterheadTemplates]: () => getI18nString("categories.letterhead_templates"),
  [TemplateCategory.lessonPlans]: () => getI18nString("categories.lesson_plans"),
  [TemplateCategory.libraries]: () => getI18nString("categories.libraries"),
  [TemplateCategory.linkedinTemplates]: () => getI18nString("categories.linkedin_templates"),
  [TemplateCategory.mobileApps]: () => getI18nString("categories.mobile_apps"),
  [TemplateCategory.nameTagTemplates]: () => getI18nString("categories.name_tags"),
  [TemplateCategory.onePagerTemplates]: () => getI18nString("categories.one_pagers"),
  [TemplateCategory.portfolios]: () => getI18nString("categories.portfolio_templates"),
  [TemplateCategory.posterTemplates]: () => getI18nString("categories.poster_templates"),
  [TemplateCategory.calendarTemplates]: () => getI18nString("categories.calendar_templates"),
  [TemplateCategory.presentations]: () => getI18nString("categories.presentations"),
  [TemplateCategory.printableTemplates]: () => getI18nString("categories.printable_templates"),
  [TemplateCategory.prototypingAnimation]: () => getI18nString("categories.prototyping_animation"),
  [TemplateCategory.resumes]: () => getI18nString("categories.resume_templates"),
  [TemplateCategory.shapesColors]: () => getI18nString("categories.shapes_colors"),
  [TemplateCategory.socialMediaTemplates]: () => getI18nString("categories.social_media_templates"),
  [TemplateCategory.stockPhotography]: () => getI18nString("categories.stock_photography"),
  [TemplateCategory.strategicPlanning]: () => getI18nString("categories.strategic_planning"),
  [TemplateCategory.teamMeetings]: () => getI18nString("categories.team_meetings"),
  [TemplateCategory.tutorials]: () => getI18nString("categories.tutorials"),
  [TemplateCategory.uiKits]: () => getI18nString("categories.ui_kits"),
  [TemplateCategory.webAds]: () => getI18nString("categories.web_ad_templates"),
  [TemplateCategory.wireframes]: () => getI18nString("categories.wireframes"),
  [TemplateCategory.workshopTemplates]: () => getI18nString("categories.workshop_templates"),
  [TemplateCategory.whiteboarding]: () => getI18nString("categories.whiteboarding"),
  [TemplateCategory.xTwitterTemplates]: () => getI18nString("categories.x_twitter_templates"),
  [TemplateCategory.youtubeTemplates]: () => getI18nString("categories.youtube_templates"),
  [TemplateCategory.zoomBackgroundTemplates]: () => getI18nString("categories.zoom_background_templates")
};
export function $$d3(e) {
  if (isValueInObject(e, TemplateCategory)) return e;
  let t = getCurrentLocale();
  if (t) {
    let r = getCanonicalCategory(e, t);
    if (r && isValueInObject(r, TemplateCategory)) return r;
  }
  console.error(`Invalid category slug: ${e}. Cannot convert to Categories enum. This should not happen with ValidCategorySlug type.`);
  return Error(`Invalid category slug: ${e}. Cannot convert to Categories enum.`);
}
export function $$c6(e) {
  let t = $$d3(e);
  return l[t]?.();
}
export function $$u2() {
  return [{
    category: TemplateCategory.designTemplates,
    src: buildUploadUrl("f35144ac6be1301b0c300fdb5ba0761f85d610da"),
    mobileSrc: buildUploadUrl("d09077ccb81fdbb9d927f28eab6d6aff62def241"),
    text: getI18nString("categories.homepage_highlight.design_templates")
  }, {
    category: TemplateCategory.uiKits,
    src: buildUploadUrl("6b7af7165268ef5a4d90fc48f1a9d311bb52780a"),
    mobileSrc: buildUploadUrl("bbe5c1f9cc2c99dce19c64a5c3667bac836def1d"),
    text: getI18nString("categories.homepage_highlight.ui_kits")
  }, {
    category: TemplateCategory.icons,
    src: buildUploadUrl("12cea3d845a2aebb7027af6890160caeb7e4ce9f"),
    mobileSrc: buildUploadUrl("478f606904a2341a2b01fb2ef3cafb9f63b29f79"),
    text: getI18nString("categories.homepage_highlight.icons")
  }, {
    category: TemplateCategory.designTools,
    src: buildUploadUrl("404bbfd2c09daf145970196f3d762807fd711299"),
    text: getI18nString("categories.homepage_highlight.design_tools")
  }, {
    category: TemplateCategory.visualAssets,
    src: buildUploadUrl("8857bb67fa108380ce502139054754c89feb9f3e"),
    mobileSrc: buildUploadUrl("3a887f58127d5e03c61c7884b9fce47ae6c6c16b"),
    text: getI18nString("categories.homepage_highlight.visual_assets")
  }, {
    category: TemplateCategory.whiteboarding,
    src: buildUploadUrl("e1915a29a858e7c0d717471cf0108aeba02c7dbe"),
    mobileSrc: buildUploadUrl("bfeb514427f6279d7e6b4902a38fd7f576b394e4"),
    text: getI18nString("categories.homepage_highlight.whiteboarding")
  }];
}
export function $$p5(e) {
  let t = e.selected_tag;
  let r = t?.i18n_meta?.h1_title || e.i18n_meta?.title;
  let n = t?.h1_title || e.h1_title || e.title;
  return getTranslatedDynamicContent(r, n);
}
export function $$_1(e) {
  let t = e.selected_tag;
  let r = t?.i18n_meta?.description || e.i18n_meta?.description;
  let n = t?.description || e.description;
  return getTranslatedDynamicContent(r, n);
}
export function $$h0(e) {
  let t = e.selected_tag;
  let r = t?.i18n_meta?.extended_description || e.i18n_meta?.extended_description;
  let n = t?.extended_description || e.extended_description;
  return getTranslatedDynamicContent(r, n);
}
export function $$m4(e) {
  if (e.i18n_meta?.title) return getTranslatedDynamicContent(e.i18n_meta.title, e.title);
  let t = getValueOrFallback(e.url_slug, TemplateCategory);
  return t ? $$c6(t) ?? e.title : e.title;
}
export const If = $$h0;
export const J7 = $$_1;
export const Jm = $$u2;
export const WG = $$d3;
export const aZ = $$m4;
export const uD = $$p5;
export const xF = $$c6;