import { getI18nString } from "../905/303541"

let $$r7 = 1920
let $$a10 = 1080
let $$s8 = 10
let $$o0 = 3
let $$l1 = 30
let $$d3 = "https://help.figma.com/hc/articles/360041423614--Who-can-publish-Files-and-Plugins-to-the-Community-#organization"
let $$c6 = [() => getI18nString("community.publishing.getting_everything_ready"), () => getI18nString("community.publishing.gathering_all_the_layers"), () => getI18nString("community.publishing.compiling_all_components")]
let $$u5 = [() => getI18nString("community.publishing.getting_everything_ready"), () => getI18nString("community.publishing.publishing_your_site"), () => getI18nString("community.publishing.gathering_all_the_layers"), () => getI18nString("community.publishing.compiling_all_components")]
let $$p9 = [() => getI18nString("community.publishing.getting_everything_ready"), () => getI18nString("community.publishing.gathering_all_the_layers"), () => getI18nString("community.publishing.compiling_all_templates")]
let $$m4 = {
  public: () => getI18nString("community.publishing.and_youre_live"),
  private: () => getI18nString("community.publishing.and_youre_live"),
  inReview: () => getI18nString("community.publishing.we_have_received_your_submission"),
  error: () => getI18nString("community.publishing.something_went_wrong"),
}
let $$h2 = {
  public: () => getI18nString("community.publishing.you_did_it_thanks_for_putting_your_work_out_there"),
  privateExtension: ({
    resourceName: e,
    orgName: t,
  }) => getI18nString("community.publishing.resource_is_now_available_to_members_of_org", {
    resourceName: e,
    orgName: t,
  }),
  private: e => getI18nString("community.publishing.your_templates_are_published_to", {
    publishScopeEntityName: e,
  }),
  inReview: () => getI18nString("community.publishing.our_team_will_review_this_resource"),
  error: () => getI18nString("community.publishing.please_try_again_or_report_this_file_to_the_figma_team_for_support"),
}
export const DM = $$o0
export const GT = $$l1
export const I_ = $$h2
export const M = $$d3
export const MY = $$m4
export const Rk = $$u5
export const Un = $$c6
export const Vb = $$r7
export const en = $$s8
export const uX = $$p9
export const wj = $$a10
