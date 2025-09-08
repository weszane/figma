import { useMemo } from "react";
import { filterResourcesByOrgId, filterPublishedResources } from "../figma_app/300692";
export function $$a0(e, t) {
  return useMemo(() => t ? Object.values(filterResourcesByOrgId(filterPublishedResources(Object.values(e)), t)) : [], [t, e]);
}
export const S = $$a0;