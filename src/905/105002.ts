import { throwTypeError } from "../figma_app/465776";
import { Nfd } from "../figma_app/763686";
export function $$a0(e) {
  switch (e) {
    case Nfd.FILE:
      return "FILE";
    case Nfd.CODE:
      return "CODE";
    case Nfd.DAKOTA:
      return "DAKOTA";
    case Nfd.SETTINGS:
      return "SETTINGS";
    case Nfd.INSERT:
      return "INSERT";
    default:
      throwTypeError(e);
  }
}
export const R = $$a0;