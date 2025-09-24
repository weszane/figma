import { jsx } from "react/jsx-runtime";
import { P } from "../figma_app/178683";
import { t } from "../figma_app/700609";
import { hasJubileePermissionForDesign } from "../figma_app/251115";
export function $$o0() {
  return hasJubileePermissionForDesign() ? jsx(P, {}) : jsx(t, {});
}
export const _ = $$o0;