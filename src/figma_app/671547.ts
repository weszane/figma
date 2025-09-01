import { am } from "../figma_app/901889";
var $$i1 = (e => (e.PASTE = "PASTE", e.MODAL = "MODAL", e.PLUGIN = "PLUGIN", e))($$i1 || {});
var $$a4 = (e => (e.ATTEMPT = "figjam_link_metadata_attempt", e.ERROR = "figjam_link_metadata_error", e.SUCCESS = "figjam_link_metadata_success", e.EMBED_CLICK = "figjam_link_embed_click", e.CONVERT_TO_TEXT = "figjam_link_metadata_convert_to_text", e.OPEN_PREVIEW = "figjam_link_preview_open", e.EMBED_EXPAND = "figjam_link_embed_expand", e.COPY_LINK = "figjam_link_metadata_copy_url", e.SWITCH_ORIENTATION_VERTICAL = "figjam_link_preview_orientation_vertical", e.SWITCH_ORIENTATION_HORIZONTAL = "figjam_link_preview_orientation_horizontal", e.EMBED_DEACTIVATE = "figjam_embed_deactivate", e))($$a4 || {});
var $$s0 = (e => (e.EMBED = "embed", e.LINK_PREVIEW = "preview", e))($$s0 || {});
export function $$o3(e) {
  try {
    return new URL(e).hostname;
  } catch (e) {
    return "Could not parse";
  }
}
export function $$l2(e) {
  let t = am();
  return r => {
    let n = null != e && "url" in e ? e.url : "";
    t(r, {
      domain: null != n ? $$o3(n) : "",
      linkRenderType: "embed"
    });
  };
}
export const Ci = $$s0;
export const WJ = $$i1;
export const tq = $$l2;
export const vO = $$o3;
export const yc = $$a4;