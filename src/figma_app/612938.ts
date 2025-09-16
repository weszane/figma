import { useCallback, useEffect } from "react";
import { bT } from "../905/851937";
import { throwTypeError } from "../figma_app/465776";
import { lQ } from "../905/934246";
import { waitForAnimationFrame } from "../905/236856";
import { logger } from "../905/651849";
import { debugState } from "../905/407919";
import { isInteractionPathCheck } from "../figma_app/897289";
import { applyCodeExtensionPreferences } from "../905/515076";
import { getProductAccessTypeOrDefault } from "../figma_app/765689";
import { selectCurrentFile } from "../figma_app/516028";
import { f$, n4, hY } from "../figma_app/603466";
import { wH } from "../figma_app/680166";
import { isFullscreenDevHandoffView } from "../905/782918";
import { i as _$$i } from "../905/46262";
import { getCurrentGRAtom, handlePluginError, pluginState } from "../905/753206";
let y = class e {
  constructor() {
    this.runQueue = [];
    this.currentRunState = null;
    this.MAX_RESOLVE_ITERATIONS = 10;
    this.upgradeHandler = null;
  }
  setUpgradeHandler(e) {
    this.upgradeHandler = e;
  }
  handleUpgrade(e) {
    this.upgradeHandler && this.upgradeHandler(e);
  }
  enqueue(e) {
    let {
      runPluginArgs,
      onStart,
      mode,
      reuseExistingRunState = !0
    } = e;
    let {
      plugin
    } = t;
    if (!isFullscreenDevHandoffView(debugState.getState().selectedView)) return bT(runPluginArgs);
    if (plugin.manifest.containsWidget) throw Error("Cannot enqueue a plugin that contains a widget");
    let o = this.createTask(onStart);
    let l = this.findExistingRunState(e);
    if (reuseExistingRunState && l) {
      this.log("enqueue", "Found existing run state, pushing runTask onto existing runState", {
        existingRunState: l,
        runTask: o
      });
      l.runTasks.push(o);
      l === this.currentRunState && "settled" === l.status && this.resolveAllPromises(this.currentRunState);
    } else {
      let e = {
        runPluginArgs,
        runTasks: [o],
        mode,
        status: "idle"
      };
      this.log("enqueue", "Creating new run state and adding to queue", {
        runState: e
      });
      this.addToQueue(e);
      this.runNextPlugin();
    }
    return o.promise;
  }
  getCurrentRunStatusOrNull() {
    return this.currentRunState?.status ?? null;
  }
  getRunQueueLength() {
    return this.runQueue.length;
  }
  async runNextPlugin() {
    if (await this.maybeTerminatePluginBeforeRun(), getCurrentGRAtom()) return;
    let e = this.runQueue.shift();
    if (!e) return;
    this.currentRunState = e;
    this.prepPluginForRun(e.runPluginArgs.plugin);
    let t = this.runPlugin(e);
    await this.resolveAllPromises(e);
    await t;
    this.log("runNextPlugin", "Finished running plugin", {
      runState: e
    });
    this.runNextPlugin();
  }
  runPlugin(e) {
    this.log("runNextPlugin", "Running plugin", {
      runState: e
    });
    let {
      runPluginArgs
    } = e;
    return bT(runPluginArgs);
  }
  setRunPluginForTest(e) {
    if (!isInteractionPathCheck()) throw Error("Cannot set run plugin for test when not running interaction tests");
    this.runPlugin = e;
  }
  createTask(e) {
    let t = () => {};
    let r = () => {};
    return {
      promise: new Promise((e, n) => {
        t = e;
        r = n;
      }),
      resolve: t,
      reject: r,
      onStart: e
    };
  }
  async resolvePromise({
    resolve: e,
    reject: t,
    onStart: r
  }) {
    try {
      let t = await r?.();
      e(t);
    } catch (e) {
      t(e);
    }
  }
  async resolveAllPromises(e) {
    this.log("runNextPlugin", "Resolving all promises", {
      runState: e
    });
    e.status = "resolving";
    let t = 0;
    for (; t < this.MAX_RESOLVE_ITERATIONS;) {
      let r = e.runTasks;
      if (0 === r.length) break;
      e.runTasks = [];
      await Promise.allSettled(r.map(e => this.resolvePromise(e)));
      t++;
    }
    await this.maybeTerminatePluginAfterRunSettled(e);
    e.status = "settled";
    this.log("runNextPlugin", "Resolved all promises", {
      runState: e
    });
  }
  addToQueue(e) {
    switch (this.log("addToQueue", "Adding to queue", {
      toAdd: e
    }), e.mode) {
      case "run-forever":
      case "run-and-terminate":
        this.runQueue.push(e);
        break;
      default:
        throwTypeError(e.mode);
    }
  }
  async maybeTerminatePluginBeforeRun() {
    let e = getCurrentGRAtom();
    (!!e != !!this.currentRunState || this.currentRunState?.status === "settled" && this.currentRunState?.runPluginArgs.plugin.plugin_id === e?.plugin_id) && (this.log("maybeTerminatePluginBeforeRun", "Terminating plugin"), await this.terminatePlugin());
  }
  async maybeTerminatePluginAfterRunSettled(e) {
    let {
      mode
    } = e;
    switch (this.log("maybeTerminatePluginAfterRunSettled", "Maybe terminating plugin", {
      toMaybeTerminate: e
    }), mode) {
      case "run-forever":
        this.runQueue.length > 0 && (await this.terminatePlugin());
        break;
      case "run-and-terminate":
        await this.terminatePlugin();
        break;
      default:
        throwTypeError(mode);
    }
  }
  async terminatePlugin() {
    this.log("terminatePlugin", "Terminating plugin");
    this.currentRunState = null;
    await handlePluginError();
    await waitForAnimationFrame();
  }
  findExistingRunState({
    runPluginArgs: e,
    mode: t
  }) {
    let r = this.currentRunState?.runPluginArgs.plugin.plugin_id;
    return r === e.plugin.plugin_id && getCurrentGRAtom()?.plugin_id === r ? this.currentRunState : this.runQueue.find(r => r.runPluginArgs.plugin.plugin_id === e.plugin.plugin_id && r.mode === t);
  }
  isCurrentlyRunning({
    runPluginArgs: e,
    mode: t
  }) {
    return !!this.findExistingRunState({
      runPluginArgs: e,
      mode: t
    });
  }
  prepPluginForRun(e) {
    this.log("prepPluginForRun", "Prepping plugin for run", {
      plugin: e
    });
    applyCodeExtensionPreferences(e, null);
    f$();
    n4();
    hY();
  }
  log(t, r, n = {}) {
    if (!e.debug) return;
    let i = {
      currentRunState: this.currentRunState,
      runQueue: this.runQueue,
      runningPluginState: pluginState,
      ...n
    };
    logger.log("[PluginManager]", `[${t}]`, r, i);
  }
};
y.instance = new y();
y.debug = !1;
export let $$b0 = y;
export function $$T1() {
  let e = selectCurrentFile();
  let {
    handleUpgrade
  } = wH({
    folderId: e?.folderId || null,
    fileInBrowser: {
      key: e?.key || "",
      editorType: e?.editorType || null
    }
  });
  let r = useCallback(r => {
    if (!e) return;
    let n = getProductAccessTypeOrDefault(e.editorType);
    handleUpgrade({
      afterUpgradeCallback: lQ,
      licenseType: n,
      upgradeReason: _$$i.EXTENSIONS,
      entryPoint: r
    })({});
  }, [e, handleUpgrade]);
  useEffect(() => ($$b0.instance.setUpgradeHandler(r), () => {
    $$b0.instance.setUpgradeHandler(null);
  }), [r]);
}
export const R = $$b0;
export const x = $$T1;