import { ServiceCategories as _$$e } from "../905/165054";
import { isDevEnvironment } from "../figma_app/169182";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { reportError } from "../905/11";
import { M4 } from "../905/713695";
import { pluginAPIService } from "../905/3209";
let d = ["1221187540287746170", "857346721138427857", "1056265616080331589", "1220512233196109878", "1220802563996996107", "842128343887142055", "747985167520967365", "1056467900248561542"];
let c = ["1217657098906612843", "1217135789855512677", "1247607449040618138", "1247608226235858606", "1223313994819294460", "1028373000013876601", "1028372640233029916", "1065757873699611582"];
function u(e) {
  return e && e?.current_plugin_version_id && e.versions?.[e.current_plugin_version_id]?.manifest?.capabilities || [];
}
let p = e => !!e && u(e).includes("codegen");
let m = e => {
  if (!e) return !1;
  let t = u(e);
  return t.includes("inspect") || t.includes("panel");
};
let h = M4.Query({
  fetch: async e => {
    let t = isDevEnvironment() ? c : d;
    try {
      let e = await pluginAPIService.postPluginsBatch(t);
      return e?.data?.meta ?? [];
    } catch (e) {
      reportError(_$$e.DEVELOPER_TOOLS, e);
      return [];
    }
  },
  output: ({
    data: e
  }) => ({
    inspectPlugins: e.filter(m),
    codegenPlugins: e.filter(p)
  })
});
export function $$g0() {
  let [e] = setupResourceAtomHandler(h());
  return {
    loading: "loading" === e.status,
    inspectPlugins: e.data?.inspectPlugins ?? [],
    codegenPlugins: e.data?.codegenPlugins ?? []
  };
}
export const n = $$g0;