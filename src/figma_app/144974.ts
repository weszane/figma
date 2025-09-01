import { getFeatureFlags } from "../905/601108";
import { $7 } from "../905/509613";
export function $$a4() {
  return !!getFeatureFlags().qa_search_frecency;
}
export function $$s2() {
  return !!getFeatureFlags().first_draft_make_changes && $7("isFirstDraftMakeChangesEnabled");
}
export function $$o0() {
  return !!getFeatureFlags().asset_suggestions && $7("isFragmentSearchEnabled");
}
export function $$l5() {
  return !!getFeatureFlags().actions_hide_recents && $7("shouldHideRecents");
}
export function $$d3() {
  return !!getFeatureFlags().prototype_ai_magic_link && $7("isMagicLinkEnabled");
}
export function $$c1() {
  return !!getFeatureFlags().eai_auto_rename_layers && $7("isRenameLayersEnabled");
}
export const C7 = $$o0;
export const Ii = $$c1;
export const KK = $$s2;
export const Ll = $$d3;
export const h8 = $$a4;
export const kK = $$l5;