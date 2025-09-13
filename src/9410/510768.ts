import { hasRootPathOptional } from "../figma_app/528509";
import { aV } from "../figma_app/722362";
import { selectCurrentFile } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { FProductAccessType } from "../figma_app/191312";
import { wH } from "../figma_app/680166";
import { useIsCanvasEditDisabled } from "../905/595131";
export function $$c0() {
  let e = aV();
  let t = selectCurrentFile();
  let i = hasRootPathOptional(t?.project);
  let c = useIsCanvasEditDisabled();
  let u = !!selectCurrentUser();
  let {
    getProvisionalAccessBanner
  } = wH();
  let h = getProvisionalAccessBanner(FProductAccessType.WHITEBOARD);
  let m = !!h?.showBanner;
  return !e && !i && !c && u && m;
}
export const a = $$c0;