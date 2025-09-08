import { throwTypeError } from "../figma_app/465776";
import { PanelType } from "../figma_app/763686";
export function $$a0(e) {
  switch (e) {
    case PanelType.FILE:
      return "FILE";
    case PanelType.CODE:
      return "CODE";
    case PanelType.DAKOTA:
      return "DAKOTA";
    case PanelType.SETTINGS:
      return "SETTINGS";
    case PanelType.INSERT:
      return "INSERT";
    default:
      throwTypeError(e);
  }
}
export const R = $$a0;