import { APIParameterUtils } from "../figma_app/181241";
import { sendWithRetry } from "../905/910117";
export let $$a0 = new class {
  updateOrgPreferences(e, t) {
    let {
      preferences,
      ...n
    } = t;
    let a = {
      preferences
    };
    e.bigma_enabled ? (a.auto_run_plugin_id = n.auto_run_plugin_id, a.auto_run_enabled = n.auto_run_enabled, a.codegen_enabled = n.codegen_enabled, a.pinned_plugins_enabled = n.pinned_plugins_enabled) : !1 === n.pinned_plugins_enabled && (a.pinned_plugins_enabled = !1);
    return sendWithRetry.post(`/api/plugin_preferences/org/${e.id}`, a);
  }
  updateUserAutoRunPluginId(e, t) {
    return sendWithRetry.put("/api/plugin_preferences/user", APIParameterUtils.toAPIParameters({
      autoRunBehavior: t,
      autoRunPluginId: e
    }));
  }
}();
export const s = $$a0;
