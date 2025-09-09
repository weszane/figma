import { selectCurrentFile } from "../figma_app/516028";
import { $Y } from "../905/918620";
export function $$i0() {
  let e = selectCurrentFile();
  let t = !!e?.canEdit;
  let n = !!(e && e.teamId && !t);
  let i = e && e.teamId ? e.teamId : null;
  return {
    isEligible: n,
    canEditTeam: $Y(i),
    teamId: i
  };
}
export const V = $$i0;