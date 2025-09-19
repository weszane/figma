import { getResponsiveChildren } from "../figma_app/387100";
import { useAppModelProperty } from "../figma_app/722362";
import { useDeepEqualSceneValue } from "../figma_app/167249";
export function $$s0() {
  let e = useAppModelProperty("currentPage");
  return useDeepEqualSceneValue((e, t) => getResponsiveChildren(e, t).map(e => e.guid), e);
}
export const j = $$s0;