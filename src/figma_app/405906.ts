import { buildUploadUrl } from "../figma_app/169182";
import { getI18nString, getTranslatedDynamicContent } from "../905/303541";
import { N, S } from "../905/872825";
import { zq } from "../figma_app/598412";
import { LJ, zU } from "../figma_app/930386";
let l = {
  [LJ.visualAssets]: () => getI18nString("categories.visual_assets"),
  [LJ.development]: () => getI18nString("categories.development_plugins"),
  [LJ.accessibility]: () => getI18nString("categories.accessibility_tools"),
  [LJ.bannerTemplates]: () => getI18nString("categories.banner_templates"),
  [LJ.brainstorming]: () => getI18nString("categories.brainstorming"),
  [LJ.cardTemplates]: () => getI18nString("categories.card_templates"),
  [LJ.classroomActivities]: () => getI18nString("categories.classroom_activities"),
  [LJ.dataTemplates]: () => getI18nString("categories.data_templates"),
  [LJ.designInspirations]: () => getI18nString("categories.design_inspirations"),
  [LJ.designTemplates]: () => getI18nString("categories.design_templates"),
  [LJ.designTools]: () => getI18nString("categories.design_tools"),
  [LJ.desktopAppsWebsites]: () => getI18nString("categories.desktop_apps_websites"),
  [LJ.deviceMockups]: () => getI18nString("categories.device_mockups"),
  [LJ.diagramming]: () => getI18nString("categories.diagramming"),
  [LJ.editingEffects]: () => getI18nString("categories.editing_effects"),
  [LJ.education]: () => getI18nString("categories.education"),
  [LJ.facebookTemplates]: () => getI18nString("categories.facebook_templates"),
  [LJ.fileOrganization]: () => getI18nString("categories.file_organization"),
  [LJ.flyerTemplates]: () => getI18nString("categories.flyers"),
  [LJ.fontsTypography]: () => getI18nString("categories.fonts_typography"),
  [LJ.funGames]: () => getI18nString("categories.fun_games"),
  [LJ.icons]: () => getI18nString("categories.icons"),
  [LJ.illustrations]: () => getI18nString("categories.illustrations"),
  [LJ.instagramTemplates]: () => getI18nString("categories.instagram_templates"),
  [LJ.invitationTemplates]: () => getI18nString("categories.invitation_templates"),
  [LJ.invoiceTemplates]: () => getI18nString("categories.invoices"),
  [LJ.importExport]: () => getI18nString("categories.import_export"),
  [LJ.letterheadTemplates]: () => getI18nString("categories.letterhead_templates"),
  [LJ.lessonPlans]: () => getI18nString("categories.lesson_plans"),
  [LJ.libraries]: () => getI18nString("categories.libraries"),
  [LJ.linkedinTemplates]: () => getI18nString("categories.linkedin_templates"),
  [LJ.mobileApps]: () => getI18nString("categories.mobile_apps"),
  [LJ.nameTagTemplates]: () => getI18nString("categories.name_tags"),
  [LJ.onePagerTemplates]: () => getI18nString("categories.one_pagers"),
  [LJ.portfolios]: () => getI18nString("categories.portfolio_templates"),
  [LJ.posterTemplates]: () => getI18nString("categories.poster_templates"),
  [LJ.calendarTemplates]: () => getI18nString("categories.calendar_templates"),
  [LJ.presentations]: () => getI18nString("categories.presentations"),
  [LJ.printableTemplates]: () => getI18nString("categories.printable_templates"),
  [LJ.prototypingAnimation]: () => getI18nString("categories.prototyping_animation"),
  [LJ.resumes]: () => getI18nString("categories.resume_templates"),
  [LJ.shapesColors]: () => getI18nString("categories.shapes_colors"),
  [LJ.socialMediaTemplates]: () => getI18nString("categories.social_media_templates"),
  [LJ.stockPhotography]: () => getI18nString("categories.stock_photography"),
  [LJ.strategicPlanning]: () => getI18nString("categories.strategic_planning"),
  [LJ.teamMeetings]: () => getI18nString("categories.team_meetings"),
  [LJ.tutorials]: () => getI18nString("categories.tutorials"),
  [LJ.uiKits]: () => getI18nString("categories.ui_kits"),
  [LJ.webAds]: () => getI18nString("categories.web_ad_templates"),
  [LJ.wireframes]: () => getI18nString("categories.wireframes"),
  [LJ.workshopTemplates]: () => getI18nString("categories.workshop_templates"),
  [LJ.whiteboarding]: () => getI18nString("categories.whiteboarding"),
  [LJ.xTwitterTemplates]: () => getI18nString("categories.x_twitter_templates"),
  [LJ.youtubeTemplates]: () => getI18nString("categories.youtube_templates"),
  [LJ.zoomBackgroundTemplates]: () => getI18nString("categories.zoom_background_templates")
};
export function $$d3(e) {
  if (N(e, LJ)) return e;
  let t = zq();
  if (t) {
    let r = zU(e, t);
    if (r && N(r, LJ)) return r;
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
    category: LJ.designTemplates,
    src: buildUploadUrl("f35144ac6be1301b0c300fdb5ba0761f85d610da"),
    mobileSrc: buildUploadUrl("d09077ccb81fdbb9d927f28eab6d6aff62def241"),
    text: getI18nString("categories.homepage_highlight.design_templates")
  }, {
    category: LJ.uiKits,
    src: buildUploadUrl("6b7af7165268ef5a4d90fc48f1a9d311bb52780a"),
    mobileSrc: buildUploadUrl("bbe5c1f9cc2c99dce19c64a5c3667bac836def1d"),
    text: getI18nString("categories.homepage_highlight.ui_kits")
  }, {
    category: LJ.icons,
    src: buildUploadUrl("12cea3d845a2aebb7027af6890160caeb7e4ce9f"),
    mobileSrc: buildUploadUrl("478f606904a2341a2b01fb2ef3cafb9f63b29f79"),
    text: getI18nString("categories.homepage_highlight.icons")
  }, {
    category: LJ.designTools,
    src: buildUploadUrl("404bbfd2c09daf145970196f3d762807fd711299"),
    text: getI18nString("categories.homepage_highlight.design_tools")
  }, {
    category: LJ.visualAssets,
    src: buildUploadUrl("8857bb67fa108380ce502139054754c89feb9f3e"),
    mobileSrc: buildUploadUrl("3a887f58127d5e03c61c7884b9fce47ae6c6c16b"),
    text: getI18nString("categories.homepage_highlight.visual_assets")
  }, {
    category: LJ.whiteboarding,
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
  let t = S(e.url_slug, LJ);
  return t ? $$c6(t) ?? e.title : e.title;
}
export const If = $$h0;
export const J7 = $$_1;
export const Jm = $$u2;
export const WG = $$d3;
export const aZ = $$m4;
export const uD = $$p5;
export const xF = $$c6;