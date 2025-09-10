import { throwTypeError } from "src/figma_app/465776";
import { FContainerType } from "src/figma_app/191312";
export let $$a1 = {
  ORG: "org",
  TEAM: "team"
};
export function $$s0(e) {
  switch (e) {
    case "team":
      return FContainerType.TEAM;
    case "org":
      return FContainerType.ORG;
    default:
      throwTypeError(e);
  }
}
export const V = $$s0;
export const i = $$a1;
