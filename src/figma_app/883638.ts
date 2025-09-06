import { useAtomValueAndSetter } from "../figma_app/27355";
import { q } from "../905/457575";
var $$a1 = (e => (e.ATTACHMENTS_TOO_LARGE = "attachments_too_large", e.MAX_CONTENT_LENGTH_EXCEEDED = "max_content_length_exceeded", e.MAX_CONTEXT_LENGTH_EXCEEDED_IMAGE_FALLBACK = "max_content_length_exceeded_image_fallback", e.PROMPT_ENHANCEMENT_FAILED = "prompt_enhancement_failed", e))($$a1 || {});
export let $$s0 = q();
export function $$o2(e) {
  let [t, r] = useAtomValueAndSetter($$s0(e || ""));
  return {
    chatError: t,
    setChatError: r,
    clearChatError: () => {
      r(void 0);
    }
  };
}
export const QK = $$s0;
export const T_ = $$a1;
export const tk = $$o2;