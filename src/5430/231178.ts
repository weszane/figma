import { useMemo } from "react";
import { Jm } from "../figma_app/387599";
import { JJ } from "../figma_app/471982";
import { YW } from "../figma_app/350203";
import { m3, U, xQ } from "../figma_app/45218";
import { e0 } from "../905/696396";
export function $$c0(e) {
  let t = m3(e);
  return U(e) ? {
    name: e0.COMMUNITY_HUB_FILE,
    properties: u(e)
  } : xQ(e) ? {
    name: e0.COMMUNITY_HUB_WIDGET,
    properties: {
      widgetId: e.id,
      isMonetized: t
    }
  } : {
    name: e0.COMMUNITY_HUB_PLUGIN,
    properties: {
      pluginId: e.id,
      isMonetized: t
    }
  };
}
export function $$d1(e) {
  let t = Jm();
  return useMemo(() => ({
    ...u(e),
    searchSessionId: t
  }), [e, t]);
}
function u(e) {
  return {
    hubFileId: e.id,
    viewerMode: e.viewer_mode,
    editorType: JJ(e.viewer_mode),
    isMonetized: m3(e),
    isMobileView: window.innerWidth <= YW
  };
}
export const Ay = $$c0;
export const IE = $$d1;