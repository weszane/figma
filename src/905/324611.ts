import { getFalseValue } from "../figma_app/897289";
import { w } from "../figma_app/119601";
export function $$a0() {
  if (!w() && !getFalseValue()) throw Error("Endpoint requires authenticated user");
}
export const r = $$a0;