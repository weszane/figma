import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { debugState } from "../905/407919";
import { dW } from "../905/515076";
import { Pq } from "../figma_app/12796";
import { o5, Cu, f$ } from "../figma_app/603466";
import { R } from "../figma_app/612938";
import { hw, wY } from "../905/753206";
import { ZQ } from "../figma_app/155287";
import { X } from "../905/661977";
let m = class {
  async generateCode({
    plugin: e,
    nodeId: t,
    handoffLanguage: i,
    canRunCodegenArgs: n
  }) {
    let c = i.pluginLanguage;
    if (dW(e, c ? X(e, c) : null), !Pq(n)) throw Error("Not allowed to run codegen");
    return (await R.instance.enqueue({
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
    let t = hw();
    if (t) switch (e.type) {
      case "local-plugin":
        ZQ(t) && e.id === String(t.localFileId) && (f$(), await wY());
        return;
      case "published-plugin":
        e.id === t.plugin_id && (f$(), await wY());
        return;
      case "first-party":
        f$();
        await wY();
        return;
      default:
        throwTypeError(e);
    }
  }
};
m.instance = new m();
export let $$h0 = m;
export const d = $$h0;