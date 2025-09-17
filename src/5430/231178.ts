import { useMemo } from "react";
import { Jm } from "../figma_app/387599";
import { mapTemplateCategoryToFileType } from "../figma_app/471982";
import { COMMUNITY_MIN_WIDTH } from "../figma_app/350203";
import { hasMonetizedResourceMetadata, hasClientMeta, isWidget } from "../figma_app/45218";
import { e0 } from "../905/696396";
export function $$c0(e) {
  let t = hasMonetizedResourceMetadata(e);
  return hasClientMeta(e) ? {
    name: e0.COMMUNITY_HUB_FILE,
    properties: u(e)
  } : isWidget(e) ? {
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
    editorType: mapTemplateCategoryToFileType(e.viewer_mode),
    isMonetized: hasMonetizedResourceMetadata(e),
    isMobileView: window.innerWidth <= COMMUNITY_MIN_WIDTH
  };
}
export const Ay = $$c0;
export const IE = $$d1;