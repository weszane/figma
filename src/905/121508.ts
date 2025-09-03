import { throwTypeError } from "../figma_app/465776";
import { DN } from "../905/657224";
let a = "curatorLoggingEnabled";
export function $$s0(e) {
  let t = DN();
  switch (e) {
    case "debug":
      t.set(a, "debug");
      break;
    case "trace":
      t.set(a, "trace");
      break;
    case "disabled":
      t.$$delete(a);
      break;
    default:
      throwTypeError(e);
  }
  return `Curator logging set to ${e}`;
}
export function $$o1() {
  switch (DN().get(a)) {
    case "debug":
      return "debug";
    case "trace":
      return "trace";
    default:
      return "disabled";
  }
}
export const L = $$s0;
export const r = $$o1;