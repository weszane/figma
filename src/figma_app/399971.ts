import { EyedropperBindings, DesignGraphElements } from "../figma_app/763686";
import { rM } from "../figma_app/241541";
import { getObservableValue } from "../figma_app/84367";
import { u } from "../figma_app/110635";
export function $$o0() {
  let {
    activeToolId
  } = rM(u);
  let t = getObservableValue(EyedropperBindings?.destinationTool(), DesignGraphElements.NONE);
  return activeToolId === DesignGraphElements.DROPPER_COLOR ? t : activeToolId;
}
export const T = $$o0;