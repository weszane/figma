import { Lg } from "../figma_app/257275";
import { w } from "../figma_app/119601";
export function $$a0() {
  if (!w() && !Lg()) throw Error("Endpoint requires authenticated user");
}
export const r = $$a0;