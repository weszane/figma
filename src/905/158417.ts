import { AG } from "../figma_app/999312";
import { buildProfileRouteState } from "../figma_app/471982";
import { useResourceRouteParams, useResourceFuid } from "../figma_app/979714";
export function $$s0(e) {
  let t = AG();
  let i = useResourceRouteParams() ?? void 0;
  let s = useResourceFuid() ?? void 0;
  return buildProfileRouteState(e, t, i, s);
}
export const y = $$s0;