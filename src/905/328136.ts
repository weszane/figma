import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { Ay } from "../905/612521";
import { oJ } from "../905/63728";
import { sf } from "../905/929976";
import { getPluginVersion } from "../figma_app/300692";
import { YW } from "../figma_app/870683";
export function $$c0() {
  let e = useDispatch();
  return useCallback((t, i) => {
    let n = getPluginVersion(t)?.name;
    if (i?.stopPropagation(), oJ(i)) {
      Ay.redirect(YW(t.id, n), "_blank");
      return;
    }
    i?.preventDefault();
    e(sf({
      view: "communityHub",
      subView: "widget",
      widgetId: t.id
    }));
  }, [e]);
}
export const s = $$c0;