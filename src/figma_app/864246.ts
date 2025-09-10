import { debugState } from "../905/407919";
import { ds } from "../figma_app/314264";
import { getSelectedFile } from "../905/766303";
var $$s2 = (e => (e.REQUEST = "ai_summary_requested", e.CREATE = "ai_summary_created", e.DELETE = "ai_summary_deleted", e.LINK_COPED = "ai_summary_link_copied", e.TEXT_COPIED = "ai_summary_text_copied", e.TIME_TAKEN_TO_COMPLETE = "figjam.summarize.time_taken_to_complete", e))($$s2 || {});
var $$o0 = (e => (e.TIME_TAKEN_TO_COMPLETE = "figjam.cluster.time_taken_to_complete", e))($$o0 || {});
export function $$l3(e) {
  return JSON.stringify(e).length;
}
export function $$d1(e, t) {
  let r = debugState.getState();
  let s = getSelectedFile(r)?.key ?? "";
  ds(e, s, r, {
    ...t
  });
}
export const Ux = $$o0;
export const Vn = $$d1;
export const mr = $$s2;
export const sh = $$l3;