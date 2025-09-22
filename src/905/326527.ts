import { LayoutTabType } from "../figma_app/763686";
import { debugState } from "../905/407919";
import { getSelectedViewPluginVersions } from "../figma_app/740025";
import { updateActiveTextReviewPlugin } from "../figma_app/741237";
import { runSpellCheckCallback, hasSpellCheckCallback, hasPluginPageLoadedCallback, runPluginPageLoadedCallback } from "../figma_app/603466";
import { canRunPlugin } from "../figma_app/300692";
import { SH } from "../figma_app/790714";
import { hM } from "../905/851937";
import { R } from "../figma_app/612938";
import { handlePluginError } from "../905/753206";
import { hasLocalFileId } from "../figma_app/155287";
let h = class {
  constructor() {
    this.name = "plugin";
    this.runningPlugin = null;
    this.onExitTextEditModeCallbackCalled = !1;
    this.reviewText = async e => {
      if (hM() && SH()?.command !== "textreview") return [];
      this.startTextReviewPlugin();
      let t = runSpellCheckCallback(e);
      let i = await Promise.race([t, new Promise(e => {
        setTimeout(() => e("timeout"), 3e3);
      })]);
      let n = SH()?.plugin;
      let r = n && hasLocalFileId(n);
      if ("timeout" === i) {
        if (!hasSpellCheckCallback()) {
          handlePluginError(r ? "Text review plugins must call on('textreview') upon running" : void 0);
          return [];
        }
        i = await t;
      }
      return i.map(e => ({
        start: e.start,
        end: e.end,
        color: e.color,
        suggestions: e.suggestions
      }));
    };
  }
  async onExitTextEditMode() {
    this.onExitTextEditModeCallbackCalled || (this.onExitTextEditModeCallbackCalled = !0, hasPluginPageLoadedCallback() && !(await runPluginPageLoadedCallback()) && updateActiveTextReviewPlugin(null), handlePluginError());
  }
  startTextReviewPlugin() {
    if (this.runningPlugin) return;
    let e = debugState.getState();
    let t = f(e);
    if (!hM() && t) {
      let i = debugState.subscribe(() => {
        debugState.getState().mirror.appModel.activeCanvasEditModeType !== LayoutTabType.TEXT && this.onExitTextEditMode();
      });
      let a = () => {
        this.runningPlugin = null;
        i();
        hasLocalFileId(t) && console.log(`Closing local text review plugin: ${t.name}`);
      };
      hasLocalFileId(t) && console.log(`Starting local text review plugin: ${t.name}`);
      this.onExitTextEditModeCallbackCalled = !1;
      this.runningPlugin = R.instance.enqueue({
        mode: "run-forever",
        runPluginArgs: {
          plugin: t,
          command: "textreview",
          queryMode: !0,
          openFileKey: e.openFile.key,
          isWidget: !1,
          runMode: "textreview",
          triggeredFrom: "textreview"
        }
      }).then(a, a);
    }
  }
  static shouldUsePluginForSpellChecking() {
    return !!f(debugState.getState());
  }
};
h.instance = new h();
export let $$g0 = h;
function f(e) {
  let {
    localPlugins,
    installedPluginVersions,
    mirror: {
      appModel: {
        activeTextReviewPlugin
      }
    }
  } = e;
  let r = getSelectedViewPluginVersions(e);
  if (!activeTextReviewPlugin) return null;
  let s = null;
  if ("local" === activeTextReviewPlugin.type ? s = Object.values(localPlugins).find(e => e.localFileId === activeTextReviewPlugin.localFileId) ?? null : "published" === activeTextReviewPlugin.type && (s = [...Object.values(installedPluginVersions.plugins), ...Object.values(r)].find(e => !hasLocalFileId(e) && e.plugin_id === activeTextReviewPlugin.pluginId) ?? null), !s || !s?.manifest.capabilities?.some(e => "textreview" === e)) return null;
  let {
    canRun
  } = canRunPlugin({
    plugin: s
  });
  return canRun ? s : null;
}
export const X = $$g0;