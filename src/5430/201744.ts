import { useCallback } from "react";
import { trackFileEventWithStore } from "../figma_app/901889";
var $$n2 = (e => (e.EDIT_THIS_PAGE = "edit_this_page", e.OPEN_ORIGINAL_FILE = "open_original_file", e.UNPUBLISH = "unpublish", e.DELIST = "delist", e.MANAGE_RESOURCE = "manage_resource", e))($$n2 || {});
var $$o1 = (e => (e.RELOAD = "site_preview_reload", e.OPEN_NEW_TAB = "site_preview_open_new_tab", e))($$o1 || {});
export function $$a0(e) {
  let t = trackFileEventWithStore();
  return useCallback((r, s) => {
    t(e, {
      resourceId: r,
      resourceType: s
    });
  }, [e, t]);
}
export const CW = $$a0;
export const P1 = $$o1;
export const gK = $$n2;