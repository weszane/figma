import { buildUploadUrl } from "../figma_app/169182";
import { t, Yd } from "../905/303541";
import { N, S } from "../905/872825";
import { zq } from "../figma_app/598412";
import { LJ, zU } from "../figma_app/930386";
let l = {
  [LJ.visualAssets]: () => t("categories.visual_assets"),
  [LJ.development]: () => t("categories.development_plugins"),
  [LJ.accessibility]: () => t("categories.accessibility_tools"),
  [LJ.bannerTemplates]: () => t("categories.banner_templates"),
  [LJ.brainstorming]: () => t("categories.brainstorming"),
  [LJ.cardTemplates]: () => t("categories.card_templates"),
  [LJ.classroomActivities]: () => t("categories.classroom_activities"),
  [LJ.dataTemplates]: () => t("categories.data_templates"),
  [LJ.designInspirations]: () => t("categories.design_inspirations"),
  [LJ.designTemplates]: () => t("categories.design_templates"),
  [LJ.designTools]: () => t("categories.design_tools"),
  [LJ.desktopAppsWebsites]: () => t("categories.desktop_apps_websites"),
  [LJ.deviceMockups]: () => t("categories.device_mockups"),
  [LJ.diagramming]: () => t("categories.diagramming"),
  [LJ.editingEffects]: () => t("categories.editing_effects"),
  [LJ.education]: () => t("categories.education"),
  [LJ.facebookTemplates]: () => t("categories.facebook_templates"),
  [LJ.fileOrganization]: () => t("categories.file_organization"),
  [LJ.flyerTemplates]: () => t("categories.flyers"),
  [LJ.fontsTypography]: () => t("categories.fonts_typography"),
  [LJ.funGames]: () => t("categories.fun_games"),
  [LJ.icons]: () => t("categories.icons"),
  [LJ.illustrations]: () => t("categories.illustrations"),
  [LJ.instagramTemplates]: () => t("categories.instagram_templates"),
  [LJ.invitationTemplates]: () => t("categories.invitation_templates"),
  [LJ.invoiceTemplates]: () => t("categories.invoices"),
  [LJ.importExport]: () => t("categories.import_export"),
  [LJ.letterheadTemplates]: () => t("categories.letterhead_templates"),
  [LJ.lessonPlans]: () => t("categories.lesson_plans"),
  [LJ.libraries]: () => t("categories.libraries"),
  [LJ.linkedinTemplates]: () => t("categories.linkedin_templates"),
  [LJ.mobileApps]: () => t("categories.mobile_apps"),
  [LJ.nameTagTemplates]: () => t("categories.name_tags"),
  [LJ.onePagerTemplates]: () => t("categories.one_pagers"),
  [LJ.portfolios]: () => t("categories.portfolio_templates"),
  [LJ.posterTemplates]: () => t("categories.poster_templates"),
  [LJ.calendarTemplates]: () => t("categories.calendar_templates"),
  [LJ.presentations]: () => t("categories.presentations"),
  [LJ.printableTemplates]: () => t("categories.printable_templates"),
  [LJ.prototypingAnimation]: () => t("categories.prototyping_animation"),
  [LJ.resumes]: () => t("categories.resume_templates"),
  [LJ.shapesColors]: () => t("categories.shapes_colors"),
  [LJ.socialMediaTemplates]: () => t("categories.social_media_templates"),
  [LJ.stockPhotography]: () => t("categories.stock_photography"),
  [LJ.strategicPlanning]: () => t("categories.strategic_planning"),
  [LJ.teamMeetings]: () => t("categories.team_meetings"),
  [LJ.tutorials]: () => t("categories.tutorials"),
  [LJ.uiKits]: () => t("categories.ui_kits"),
  [LJ.webAds]: () => t("categories.web_ad_templates"),
  [LJ.wireframes]: () => t("categories.wireframes"),
  [LJ.workshopTemplates]: () => t("categories.workshop_templates"),
  [LJ.whiteboarding]: () => t("categories.whiteboarding"),
  [LJ.xTwitterTemplates]: () => t("categories.x_twitter_templates"),
  [LJ.youtubeTemplates]: () => t("categories.youtube_templates"),
  [LJ.zoomBackgroundTemplates]: () => t("categories.zoom_background_templates")
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
    text: t("categories.homepage_highlight.design_templates")
  }, {
    category: LJ.uiKits,
    src: buildUploadUrl("6b7af7165268ef5a4d90fc48f1a9d311bb52780a"),
    mobileSrc: buildUploadUrl("bbe5c1f9cc2c99dce19c64a5c3667bac836def1d"),
    text: t("categories.homepage_highlight.ui_kits")
  }, {
    category: LJ.icons,
    src: buildUploadUrl("12cea3d845a2aebb7027af6890160caeb7e4ce9f"),
    mobileSrc: buildUploadUrl("478f606904a2341a2b01fb2ef3cafb9f63b29f79"),
    text: t("categories.homepage_highlight.icons")
  }, {
    category: LJ.designTools,
    src: buildUploadUrl("404bbfd2c09daf145970196f3d762807fd711299"),
    text: t("categories.homepage_highlight.design_tools")
  }, {
    category: LJ.visualAssets,
    src: buildUploadUrl("8857bb67fa108380ce502139054754c89feb9f3e"),
    mobileSrc: buildUploadUrl("3a887f58127d5e03c61c7884b9fce47ae6c6c16b"),
    text: t("categories.homepage_highlight.visual_assets")
  }, {
    category: LJ.whiteboarding,
    src: buildUploadUrl("e1915a29a858e7c0d717471cf0108aeba02c7dbe"),
    mobileSrc: buildUploadUrl("bfeb514427f6279d7e6b4902a38fd7f576b394e4"),
    text: t("categories.homepage_highlight.whiteboarding")
  }];
}
export function $$p5(e) {
  let t = e.selected_tag;
  let r = t?.i18n_meta?.h1_title || e.i18n_meta?.title;
  let n = t?.h1_title || e.h1_title || e.title;
  return Yd(r, n);
}
export function $$_1(e) {
  let t = e.selected_tag;
  let r = t?.i18n_meta?.description || e.i18n_meta?.description;
  let n = t?.description || e.description;
  return Yd(r, n);
}
export function $$h0(e) {
  let t = e.selected_tag;
  let r = t?.i18n_meta?.extended_description || e.i18n_meta?.extended_description;
  let n = t?.extended_description || e.extended_description;
  return Yd(r, n);
}
export function $$m4(e) {
  if (e.i18n_meta?.title) return Yd(e.i18n_meta.title, e.title);
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