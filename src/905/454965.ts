import { td } from "../figma_app/181241";
import { XHR } from "../905/910117";
export let $$a0 = new class {
  updateRecentlyUsedActions(e) {
    let t = {
      displayName: e.displayName,
      extensionInfo: e.extensionInfo,
      selectedRunPluginArgs: function (e) {
        if (e) return {
          parameterValues: function (e) {
            if (void 0 === e) return;
            let t = {};
            for (let i in e) t[i] = JSON.stringify(e[i]);
            return t;
          }(e.parameterValues)
        };
      }(e.runPluginArgs)
    };
    return XHR.put("/api/actions_history", {
      recently_used_actions: t
    });
  }
  updateFrecencyHistory(e) {
    return XHR.put("/api/actions_history", {
      frecency_payload: td.toAPIParameters(e)
    });
  }
}();
export const I = $$a0;