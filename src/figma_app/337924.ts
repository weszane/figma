import { G1 } from "../figma_app/691470";
import { ServiceCategories as _$$e } from "../905/165054";
import { kF, $D } from "../905/11";
import { tx } from "../905/303541";
import { B } from "../905/969273";
import { _0, PI, sZ, Gx } from "../figma_app/948389";
import { T_ } from "../figma_app/883638";
let c = {
  [B.RATE_LIMIT_EXCEEDED]: tx("figmake.errors.generic"),
  [B.CONTENT_LENGTH_LIMIT]: tx("ai.error.chat_content_length_limit"),
  [B.UNSAFE_OR_HARMFUL_CONTENT]: tx("figmake.errors.unsafe_or_harmful"),
  [B.GENERIC]: tx("figmake.errors.generic"),
  [B.OFFLINE]: tx("ai.error.offline"),
  [B.METER_EXCEEDED]: tx("ai.error.generic"),
  [B.NOT_IMPLEMENTED]: tx("ai.error.not_implemented"),
  [B.NETWORK_ERROR]: tx("ai.error.network_error"),
  [B.UNCLOSED_TAGS_BENIGN]: tx("ai.error.generic")
};
let u = {
  [T_.ATTACHMENTS_TOO_LARGE]: tx("ai.error.attachments_too_large"),
  [T_.MAX_CONTENT_LENGTH_EXCEEDED]: tx("ai.error.chat_content_length_limit"),
  [T_.PROMPT_ENHANCEMENT_FAILED]: tx("ai.error.prompt_enhancement_failed"),
  [T_.MAX_CONTEXT_LENGTH_EXCEEDED_IMAGE_FALLBACK]: tx("ai.error.retry_with_image_attachments")
};
export function $$p2({
  error: e
}) {
  if (_0(e)) {
    let t = PI(e);
    return t ? {
      node: tx("ai.limit_reached", {
        resetDate: t
      }),
      dismissable: !0
    } : {
      node: tx("ai.error.generic"),
      dismissable: !0
    };
  }
  let t = e.message && "string" == typeof e.message ? u[e.message] : void 0;
  if (t) return {
    node: t,
    dismissable: !1
  };
  let r = sZ(e);
  return r in c ? {
    node: c[r],
    dismissable: !0
  } : {
    node: tx("figmake.errors.generic"),
    dismissable: !0
  };
}
export var $$_1 = ((e) => (e.SEND_MESSAGE = "send_message", e.PREVIEW = "preview", e.FORMAT = "format", e.EDIT_LOCALLY = "edit_locally", e.LINT = "lint", e.RESIZE_PANEL = "resize_panel", e))($$_1 || {});
export function $$h0(e, t, r, s) {
  let o = e;
  e instanceof G1 && (o = Gx(e));
  "reportToSentry" in o && !o.reportToSentry || (kF("chatFeatureType", t), kF("userAction", r), $D(_$$e.AI_FOR_PRODUCTION, o, {
    extra: s
  }));
}
export const Ho = $$h0;
export const a5 = $$_1;
export const u1 = $$p2;