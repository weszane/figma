import { atomStoreManager } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { DM } from "../figma_app/300692";
import { ZQ } from "../figma_app/155287";
import { I } from "../905/454965";
import { $O, Z8 } from "../figma_app/109130";
export function $$d0({
  displayText: e,
  runPluginArgs: t,
  localFileIdOrPluginId: i
}) {
  let d = $O();
  let c = i ? DM({
    idToSearch: i.toString(),
    localExtensionsByFileId: debugState.getState().localPlugins,
    publishedExtensions: {
      ...debugState.getState().publishedPlugins,
      ...debugState.getState().publishedWidgets
    }
  }) : void 0;
  let u = {
    displayName: e,
    runPluginArgs: t,
    extensionInfo: c ? {
      extensionId: c.plugin_id,
      extensionType: c.manifest.containsWidget ? "widget" : "plugin",
      currentExtensionVersionId: ZQ(c) ? null : c.id ?? null,
      localFileId: ZQ(c) ? c.localFileId : null
    } : void 0
  };
  d.unshift(u);
  atomStoreManager.set(Z8, d);
  I.updateRecentlyUsedActions(u);
}
export const s = $$d0;