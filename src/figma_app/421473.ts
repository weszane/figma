import { z } from "../905/239603";
var $$a4 = (e => (e.DISABLE_FIGJAM = "disable_figjam", e.DISABLE_WORKSHOP = "disable_workshop", e.VOICE = "voice", e.DISABLE_AI_FEATURES = "disable_ai_features", e))($$a4 || {});
var $$s3 = (e => (e.ELIGIBLE = "eligible", e.UPSELL = "upsell", e.INELIGIBLE = "ineligible", e))($$s3 || {});
var $$o0 = (e => (e.ENABLED = "enabled", e.DISABLED = "disabled", e))($$o0 || {});
let l = z.object({
  supports: z.nativeEnum($$s3),
  enabled: z.nativeEnum($$o0)
});
z.object({
  disable_figjam: l,
  voice: l,
  disable_workshop: l,
  disable_ai_features: l
});
export { OL, h4 } from "../figma_app/191312";
export const LC = $$o0;
export const i5 = $$s3;
export const s$ = $$a4;