import { useSubscription } from "../figma_app/288654";
import { getResourceDataOrFallback } from "../905/723791";
import { useCurrentFileKey } from "../figma_app/516028";
import { FileOrgExtensionSettingsView } from "../figma_app/43951";
export function $$o0(e = !0) {
  let t = useCurrentFileKey();
  let i = useSubscription(FileOrgExtensionSettingsView, {
    fileKey: t ?? ""
  }, {
    enabled: e && !!t
  });
  if ("loading" === i.status) return {
    loaded: !1,
    data: null
  };
  if ("errors" === i.status || !i.data) return {
    loaded: !0,
    data: null
  };
  let l = getResourceDataOrFallback(i.data.file, null);
  return l && l.org ? {
    loaded: !0,
    data: {
      workspaceId: l.workspaceId,
      allowlistedExtensions: l.org?.allowlistedPlugins,
      pluginsAllowlistEnforced: l.org.pluginsWhitelistEnforced,
      widgetsAllowlistEnforced: l.org.widgetsWhitelistEnforced,
      publicExtensionsAllowed: l.org.publicPluginsAllowed,
      org: {
        id: l.org.id,
        name: l.org.name
      }
    }
  } : {
    loaded: !0,
    data: null
  };
}
export const c = $$o0;