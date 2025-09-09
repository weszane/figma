import { FAccessLevelType } from "../figma_app/191312";
import { teamVisibilityEnum } from "../figma_app/630077";
export function $$a0(e, t) {
  switch (t) {
    case teamVisibilityEnum.ORG_BROWSABLE:
      return FAccessLevelType.PRIVATE;
    case teamVisibilityEnum.HIDDEN:
      return FAccessLevelType.SECRET;
    default:
      return e ?? null;
  }
}
export const R = $$a0;