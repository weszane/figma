import { eU, zl } from "../figma_app/27355";
var $$n0;
(e => {
  (e => {
    e.OPEN_MODAL = "open_modal";
    e.BACK_BUTTON = "click_back_button";
    e.TAB = "click_tab";
    e.WORKSPACE = "click_workspace";
    e.TEAM_SEE_MORE = "click_team_see_more";
    e.LIBRARY = "click_library";
    e.FOCUS_SEARCH = "focus_search";
    e.CLEAR_SEARCH = "clear_search";
  })(e.NavAction || (e.NavAction = {}));
  e.lastActionAtom = eU(void 0);
  e.setLastAction = function (t) {
    zl.set(e.lastActionAtom, t);
  };
})($$n0 || ($$n0 = {}));
export const S = $$n0;