import { OmW, NLJ } from "../figma_app/763686";
import { rM } from "../figma_app/241541";
import { ut } from "../figma_app/84367";
import { u } from "../figma_app/110635";
export function $$o0() {
  let {
    activeToolId
  } = rM(u);
  let t = ut(OmW?.destinationTool(), NLJ.NONE);
  return activeToolId === NLJ.DROPPER_COLOR ? t : activeToolId;
}
export const T = $$o0;