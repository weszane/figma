import { hY } from "../figma_app/80683";
import { viewCollaboratorSet } from "../905/332483";
let r = viewCollaboratorSet.dict(() => 0);
export function $$i0(e) {
  let t = hY(e.key.parentId ?? "", e.key.type);
  return {
    seatAvailability: "loaded" === t.status ? viewCollaboratorSet.dict(e => t.data[e]?.available ?? 0) : r,
    status: t.status
  };
}
export const k = $$i0;