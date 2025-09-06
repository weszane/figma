import { useState, useCallback, useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { trackEventAnalytics } from "../905/449184";
import { parsePxInt } from "../figma_app/783094";
import { BrowserInfo } from "../figma_app/778880";
import { to } from "../905/156213";
import { cX, Wv } from "../figma_app/633080";
import { y } from "../905/375507";
import { fXD, PXO } from "../figma_app/27776";
export let $$p4 = "libraryPreferencesModal";
var $$m6 = (e => (e.ASSETS_PANEL_BUTTON = "Asset panel button", e.ASSETS_PANEL_ADD_MORE_LIBRARIES = "Assets panel > Add more libraries", e.ASSETS_PANEL_EXPLORE_LIBRARIES_LINK = "Assets panel > Explore libraries link", e.ACTIONS_EXPLORE_LIBRARIES_LINK = "Actions > Explore libraries link", e.BROWSE_LIBRARIES_ASSETS_PANEL = "Assets panel > Browse libraries", e.BROWSE_LIBRARIES_ACTIONS = "Actions > Browse libraries", e.LAYERS_TAB_BUTTON = "Layers tab button", e.TOOLBAR_BUTTON = "Toolbar button", e.QUICK_ACTION = "Quick action", e.TEAMS_SETTINGS_VIEW_TEAM_LIBRARIES = "Team settings > View team libraries", e.TEAMS_SETTINGS_VIEW_TEAM_FONTS = "Team settings > View team fonts", e.ACCOUNT_SETTINGS_ENABLE_LIBRARIES_LINK = "Account settings  > Enable libraries link", e.VARIABLE_MODES_ACCEPT_UPDATES_DROPDOWN_OPTION = "Variable modes > Dropdown > Accept updates", e.VARIABLE_APPLY_MODE_DROPDOWN_INCOMPATIBLE_LINK = "Variable apply mode dropdown > Incompatible link", e.VARIABLE_MODE_INCOMPATIBLE_REVIEW_UPDATES_DROPDOWN_OPTION = "Variable modes > Dropdown > Review updates", e.PUBLISH_MODAL_AFTER_TEAM_UPGRADE = "Team upgrade publish modal", e.INSTANCE_SWAP_BROWSE_LIBRARIES_LINK = "Instance swap > Browse libraries link", e.STYLES_MODAL_TEAM_LIBRARY_BUTTON = "Styles modal > Team library button", e.UPDATES_TOAST = "Updates toast", e.INCMPATIBLE_MODES_VISUAL_BELL = "Incompatible modes visual bell", e.FIGJAM_BROWSE = "Figjam browse", e.CONNECTED_PROJECT_MANAGE_MODAL = "Connected Project Manage Modal", e.CONNECTED_PROJECT_ADMIN_UI = "Connected Project Admin UI", e.COOPER_LIBRARY_COLOR_PICKER = "Cooper Library Color Picker", e.COOPER_LIBRARY_TEXT_PICKER = "Cooper Library Color Picker", e.LEFT_RAIL_FOOTER = "Left rail footer", e.DESIGN_LINTER = "Design linter", e.FIGMAKE = "Figmake", e.TEST = "Test", e))($$m6 || {});
var $$h0 = (e => (e.REVIEW_INSTANCE_UPDATES_MODAL_UPDATE_ALL = "Review instance modal > Update all", e.REVIEW_INSTANCE_UPDATES_MODAL_UPDATE_INSTANCE = "Review instance modal > Update instance", e.REVIEW_STYLE_UPDATES_MODAL_UPDATE_STYLE = "Review styles modal > Update", e.DROPDOWN_UPDATE_SELECTED_INSTANCE = "Update selected instance > Update instance", e))($$h0 || {});
export function $$g2(e, t) {
  return to({
    type: {
      type: cX
    },
    data: {
      initialTab: e,
      initialUpdatesModalScope: t
    }
  });
}
export function $$f3(e = !1) {
  return BrowserInfo.mobile ? window.innerWidth - 32 : parsePxInt(e ? fXD : PXO);
}
export function $$_5() {
  return Math.min(760, window.innerWidth);
}
export function $$A1(e, t) {
  let i = useDispatch();
  let [s, o] = useState(() => t && e.includes(t) ? t : e[0]);
  let l = useCallback(t => {
    e.includes(t) && (t !== s && trackEventAnalytics("Library Preferences Modal Tab Changed", {
      tab: Wv[t]
    }), o(t));
  }, [s, e]);
  useEffect(() => {
    s === Wv.FONTS && y.loadSharedFonts(i);
  }, [s, i]);
  return {
    selectedTab: s,
    setSelectedTab: l
  };
}
export const AX = $$h0;
export const SE = $$A1;
export const UX = $$g2;
export const _K = $$f3;
export const fA = $$p4;
export const m9 = $$_5;
export const r6 = $$m6;