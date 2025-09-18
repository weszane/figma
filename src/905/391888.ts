import { useCallback } from "react";
import { useDispatch, useStore } from "react-redux";
import { OpenTarget } from "../figma_app/876459";
import { customHistory } from "../905/612521";
import { isCommandEvent } from "../905/63728";
import { selectFolderView } from "../figma_app/976345";
import { hideDropdownAction } from "../905/929976";
import { getSelectedViewUrl } from "../figma_app/193867";
export function $$u0() {
  let e = useDispatch();
  let t = useStore();
  return useCallback(async (i, n) => {
    e(hideDropdownAction());
    let r = isCommandEvent(n);
    let u = null;
    if (r && n.shiftKey ? u = OpenTarget.FOCAL_TAB : r ? u = OpenTarget.BACKGROUND_TAB : n.shiftKey && (u = OpenTarget.NEW_WINDOW), null != u) {
      n.preventDefault();
      let e = selectFolderView(i);
      let r = t.getState();
      let a = getSelectedViewUrl(r, e.payload);
      customHistory.redirect(a, "_blank");
      return;
    }
    n.preventDefault();
    await e(selectFolderView(i));
  }, [e, t]);
}
export const E = $$u0;