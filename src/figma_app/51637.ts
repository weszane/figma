import { useCanAccessFullDevMode } from "../figma_app/473493";
import { useIsFullscreenOverview } from "../figma_app/88239";
import { n as _$$n } from "../figma_app/848232";
export function $$s0() {
  let e = useCanAccessFullDevMode();
  let t = useIsFullscreenOverview();
  let r = _$$n();
  return !e && !t || r;
}
export const I = $$s0;