import { xb } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { $D } from "../905/11";
import { XW } from "../figma_app/427318";
import { M4 } from "../905/713695";
import { H } from "../905/473998";
import { pluginAPIService } from "../905/3209";
import { a as _$$a } from "../figma_app/601188";
import { U } from "../905/424668";
import { I$, $f } from "../figma_app/940844";
let $$$$m1 = M4.Query({
  fetch: async ({
    apiResourceType: e,
    id: t
  }) => {
    switch (e) {
      case "file":
        return (await H.getVersions({
          id: t
        })).data.meta;
      case "plugin":
        return (await pluginAPIService.getVersions({
          pluginId: t
        })).data.meta.plugin;
      case "widget":
        return (await U.getVersions({
          widgetId: t
        })).data.meta.plugin;
      default:
        xb(e, `Unknown resource type: ${e}`);
    }
  },
  output: ({
    data: e,
    args: {
      apiResourceType: t
    }
  }) => "plugin" === t || "widget" === t ? I$(e) : e
});
let $$h0 = M4.Query({
  fetch: async ({
    apiResourceType: e,
    id: t,
    skipRelatedContent: i,
    includeFullCategory: n
  }) => {
    let s = (await _$$a.getResourceWithContentID({
      resourceType: e,
      contentId: t,
      skipRelatedContent: i,
      includeFullCategory: n
    })).data.meta;
    if (s.resource && s.private_plugin) {
      let e = Error("Resource and Private Plugin cannot both be present");
      $D(_$$e.COMMUNITY, e);
      return e;
    }
    if (!s.resource && !s.private_plugin) {
      let e = Error("Resource or Private Plugin must be present");
      $D(_$$e.COMMUNITY, e);
      return e;
    }
    return s.resource ? s.resource : s.private_plugin ? s.private_plugin : void 0;
  },
  output: ({
    data: e,
    args: {
      apiResourceType: t
    }
  }) => e && XW(e) && ("plugin" === t || "widget" === t) ? $f(e) : e
});
export const Z = $$h0;
export const m = $$$$m1;