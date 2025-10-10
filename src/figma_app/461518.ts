import { getCurrentTemplate, hasTemplateEntity } from "../figma_app/622574";
import { useIsCanvasEditDisabled } from "../905/595131";
export function $$a0() {
  let e = getCurrentTemplate();
  let t = hasTemplateEntity();
  let r = useIsCanvasEditDisabled();
  return !!e && t && r;
}
export const w = $$a0;