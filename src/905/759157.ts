import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { customHistory } from "../905/612521";
import { isCommandOrShift } from "../905/63728";
import { selectViewAction } from "../905/929976";
import { getPluginVersion } from "../figma_app/300692";
import { generateCommunityPluginUrl } from "../figma_app/870683";
export function $$c0() {
  let e = useDispatch<AppDispatch>();
  return useCallback((t, i) => {
    let n = getPluginVersion(t)?.name;
    if (i?.stopPropagation(), isCommandOrShift(i)) {
      customHistory.redirect(generateCommunityPluginUrl(t.id, n), "_blank");
      return;
    }
    i?.preventDefault();
    e(selectViewAction({
      view: "communityHub",
      subView: "plugin",
      publishedPluginId: t.id
    }));
  }, [e]);
}
export const B = $$c0;
