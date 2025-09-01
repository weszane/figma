import { useMemo } from "react";
import { glU } from "../figma_app/763686";
import { md } from "../figma_app/27355";
import { rg } from "../905/977779";
import { PW } from "../figma_app/633080";
export function $$l0(e) {
  let t = md(rg);
  return useMemo(() => e.type !== PW.STATE_GROUP ? void 0 : e.isLocal ? glU.getStateGroupNumVariants(e.node_id) : e.team_id ? t[e.team_id]?.[e.library_key]?.[e.node_id] : void 0, [e, t]);
}
export const Y = $$l0;