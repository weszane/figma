import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { debugState } from "../905/407919";
import { applyCodeExtensionPreferences } from "../905/515076";
import { isCopyExportAllowed } from "../figma_app/12796";
import { o5, Cu, f$ } from "../figma_app/603466";
import { PluginManager } from "../figma_app/612938";
import { getCurrentGRAtom, handlePluginError } from "../905/753206";
import { hasLocalFileId } from "../figma_app/155287";
import { findCodegenLanguage } from "../905/661977";
let m = class {
  async generateCode({
    plugin: e,
    nodeId: t,
    handoffLanguage: i,
    canRunCodegenArgs: n
  }) {
    let c = i.pluginLanguage;
    if (applyCodeExtensionPreferences(e, c ? findCodegenLanguage(e, c) : null), !isCopyExportAllowed(n)) throw Error("Not allowed to run codegen");
    return (await PluginManager.instance.enqueue({
      runPluginArgs: {
        plugin: e,
        command: "generate",
        queryMode: !1,
        runMode: "codegen",
        triggeredFrom: "codegen",
        openFileKey: debugState.getState().openFile?.key || "",
        isWidget: !1
      },
      async onStart() {
        if (!getFeatureFlags().ext_codegen_timeoout) return await o5(t);
        {
          let e = await Cu(15e3, t);
          if (!e.didRun) throw Error("code generation timed out after 15 seconds");
          return e.returnValue;
        }
      },
      mode: "run-forever"
    })) ?? [];
  }
  async maybeTerminatePlugin(e) {
    let t = getCurrentGRAtom();
    if (t) switch (e.type) {
      case "local-plugin":
        hasLocalFileId(t) && e.id === String(t.localFileId) && (f$(), await handlePluginError());
        return;
      case "published-plugin":
        e.id === t.plugin_id && (f$(), await handlePluginError());
        return;
      case "first-party":
        f$();
        await handlePluginError();
        return;
      default:
        throwTypeError(e);
    }
  }
};
m.instance = new m();
export let $$h0 = m;
export const d = $$h0;