import { ServiceCategories as _$$e } from "../905/165054";
import { Thumbnail, SourceType } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getSceneGraphInstance } from "../905/830071";
import { reportError } from "../905/11";
import { j } from "../905/813868";
export function $$d0(e, t, i) {
  let [n, a] = Thumbnail.generateThumbnailForNode(e, 4 * t, 4 * i, 4, {});
  return new Blob([a], {
    type: "image/png"
  });
}
export function $$c2(e) {
  return $$d0(e.guid, e.size.x, e.size.y);
}
export async function $$u1(e) {
  let {
    widgetNodeID,
    widgetRunPromise
  } = permissionScopeHandler(SourceType.SYSTEM, "generateWidgetThumbnail", () => j({
    pluginID: e.plugin_id,
    widgetName: e.name,
    pluginVersionID: null,
    shouldPositionWidget: !1,
    isOnInternalCanvas: !0
  }));
  return widgetNodeID && widgetRunPromise ? (await widgetRunPromise, permissionScopeHandler(SourceType.SYSTEM, "generateWidgetThumbnail", () => {
    let e = getSceneGraphInstance().get(widgetNodeID);
    if (!e) {
      reportError(_$$e.EXTENSIBILITY, Error("Failed to get the node from widget node when attempting to generate widget thumbnail"));
      return null;
    }
    let i = $$c2(e);
    e.removeWidgetWithoutSafetyChecks();
    return i;
  })) : (reportError(_$$e.EXTENSIBILITY, Error("Failed to insert the widget on the internal page when attempting to generate widget thumbnail")), null);
}
export const _e = $$d0;
export const gI = $$u1;
export const xG = $$c2;