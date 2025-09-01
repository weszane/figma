import { FAccessLevelType } from "../figma_app/191312";
import { Fb } from "../figma_app/630077";
export function $$a0(e, t) {
  switch (t) {
    case Fb.ORG_BROWSABLE:
      return FAccessLevelType.PRIVATE;
    case Fb.HIDDEN:
      return FAccessLevelType.SECRET;
    default:
      return e ?? null;
  }
}
export const R = $$a0;