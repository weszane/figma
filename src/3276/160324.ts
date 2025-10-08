import { permissionScopeHandler } from "../905/189185";
import { generateRecordingKey } from "../figma_app/878298";
import { Point } from "../905/736624";
import { getCurrentFileType } from "../figma_app/976749";
import { usePluginedWidgets } from "../figma_app/844435";
import { checkResourceEligibility } from "../figma_app/86989";
import { createWidget } from "../905/813868";
import { useCurrentUserOrgId } from "../905/845253";
import { t as _$$t } from "../905/851577";
import { N } from "../905/645480";
import { x as _$$x } from "../469e6e40/671704";
import { setupPluginCodeCache } from "../905/827944";
import { hasLocalFileId } from "../figma_app/155287";
import { TabCategory } from "../905/42189";
import { J } from "../469e6e40/985095";
import { F5, oM } from "../905/192343";
export function $$x0(e) {
  let t = useCurrentUserOrgId() || void 0;
  let n = "whiteboard" === getCurrentFileType();
  let i = F5();
  let x = usePluginedWidgets();
  let y = checkResourceEligibility(x[e.resource.plugin_id]);
  let C = _$$x({
    isWidget: !0,
    id: e.resource.plugin_id
  });
  return _$$t(e, {
    insertAction: t => {
      if (y) C();else {
        let {
          dropPosition
        } = t;
        permissionScopeHandler.user("insert-widget", () => createWidget({
          pluginID: e.resource.plugin_id,
          widgetName: e.resource.name,
          pluginVersionID: hasLocalFileId(e.resource) ? "" : e.resource.id,
          position: dropPosition.subtract(b),
          triggeredFrom: e.triggeredFrom
        }));
      }
      n && oM({
        id: e.resource.plugin_id,
        type: TabCategory.WIDGETS,
        source: e.triggeredFrom,
        options: {
          ...i,
          query: e.searchQuery
        }
      });
      return Promise.resolve();
    },
    dragPreviewPointerPosition: N.RELATIVE,
    getDragPreviewSrc: () => hasLocalFileId(e.resource) ? J : e.resource.redirect_snapshot_url || "",
    onPointerDownCallback: () => {
      hasLocalFileId(e.resource) || y || setupPluginCodeCache.getAndCache(e.resource, t);
    },
    recordingKey: generateRecordingKey("widget", e.resource.plugin_id)
  });
}
let b = new Point(64, 32);
export const P = $$x0;