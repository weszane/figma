import { vA } from "../figma_app/465776";
import { c2 } from "../905/382883";
import { ServiceCategories as _$$e } from "../905/165054";
import { l7 } from "../905/189185";
import { getSceneGraphInstance } from "../905/830071";
import { isDevEnvironment } from "../figma_app/169182";
import { $D } from "../905/11";
import { Vi } from "../figma_app/364284";
import { z } from "../905/223332";
import { Gc } from "../figma_app/300692";
import { gH } from "../figma_app/985200";
import { BK, By } from "../905/816730";
import { o9, AR, $f } from "../905/845428";
import { P5 } from "../905/531105";
import { Lb } from "../905/835985";
import { qg } from "../905/866640";
import { Ed, OV } from "../905/828428";
class g {
  constructor(e) {
    this.vm = e;
    this.effects = [];
    this.cleanups = [];
    this.hasRunEffects = !1;
  }
  addEffect(e) {
    if (this.vm.isFunction(e)) {
      this.vm.retainHandle(e);
      this.effects.push(e);
    } else throw Error("useEffect must be passed a function");
  }
  cleanup() {
    let {
      vm
    } = this;
    for (let t of this.cleanups) vm.isFunction(t) && (vm.callFunction(t, vm.undefined), vm.releaseHandle(t));
    this.cleanups = [];
  }
  runEffects() {
    this.hasRunEffects = !0;
    this.cleanup();
    let {
      vm
    } = this;
    for (let t of this.effects) {
      if (!vm.isFunction(t)) continue;
      let i = l7.plugin("widget-effect", () => vm.callFunction(t, vm.undefined));
      if ("FAILURE" === i.type) throw i.error;
      vm.isFunction(i.handle) && (this.cleanups.push(i.handle), vm.retainHandle(i.handle));
    }
  }
  clear() {
    for (let e of (this.cleanup(), this.effects)) this.vm.releaseHandle(e);
    this.effects = [];
  }
}
class A {
  constructor() {
    this.promises = new Set();
    this.currentPromise = null;
    this.currentResolve = null;
  }
  async manage(e) {
    try {
      this.track(e);
      await e;
    } finally {
      this.untrack(e);
    }
  }
  get numPromises() {
    return this.promises.size;
  }
  async waitForFinish() {
    return !!this.currentPromise && (await this.currentPromise, !0);
  }
  track(e) {
    this.promises.add(e);
    this.currentPromise || (this.currentPromise = new Promise(e => {
      this.currentResolve = e;
    }));
  }
  untrack(e) {
    this.promises.$$delete(e);
    0 === this.promises.size && (this.currentResolve?.(), this.currentPromise = null);
  }
}
function b() {
  return new Promise(e => {
    requestAnimationFrame(() => e());
  });
}
class v {
  constructor(e, t = b) {
    this.renderFn = e;
    this.wait = t;
    this.currentTask = null;
    this.isRendering = !1;
    this.needsReschedule = !0;
    this.shouldReschedule = !0;
  }
  schedule() {
    z.renderWasScheduled();
    this.isRendering && (this.needsReschedule = !0);
    this.currentTask || (this.needsReschedule = !1, this.currentTask = (async () => {
      await this.wait();
      this.shouldReschedule && (this.isRendering = !0, await this.renderFn(), this.isRendering = !1, this.currentTask = null, this.needsReschedule && this.shouldReschedule && this.schedule());
    })());
  }
  async waitForFinish() {
    if (!this.currentTask) return !1;
    for (; this.currentTask;) await this.currentTask;
    return !0;
  }
  getCurrentTask() {
    return this.currentTask;
  }
  clear() {
    this.shouldReschedule = !1;
  }
}
let x = new Set();
let S = new Set();
function w(e, t) {
  t ? S.add(e) : S.$$delete(e);
}
export function $$C1(e) {
  return S.has(e);
}
export class $$T0 {
  constructor(e, t, i) {
    this.vm = e;
    this.pluginId = t;
    this.runtimeBridge = i;
    this.widgetFunction = void 0;
    this.currentWidgetId = null;
    this.renderingStateById = new Map();
    this.promiseManager = new A();
    this.lifecycleCommand = null;
    this.isCanceled = !1;
    this.isCleared = !1;
    this.shutdownActions = [];
    x.add(this);
  }
  get numTrackedPromises() {
    return this.promiseManager.numPromises;
  }
  trackPromise(e) {
    return this.promiseManager.manage(e);
  }
  isRunningWidgetFunction() {
    return !!this.currentWidgetId;
  }
  runSyncedStateDefaultValueFunction(e) {
    let t = this.currentWidgetId;
    this.currentWidgetId = null;
    this.reenableUnsafeGlobals();
    e();
    this.currentWidgetId = t;
    this.disableUnsafeGlobalsForRender();
  }
  getCurrentWidgetNodeId() {
    if (!this.currentWidgetId) throw Error("Not actively rendering widget");
    return this.currentWidgetId;
  }
  getPluginRuntimeBridge() {
    return this.runtimeBridge;
  }
  getRenderingState(e) {
    let t = this.renderingStateById.get(e);
    if (!t) throw Error("Widget rendering state not found");
    return t;
  }
  registerWidgetFunction(e) {
    this.vm.retainHandle(e);
    this.widgetFunction = e;
  }
  addEffect(e) {
    if (this.lifecycleCommand?.name === "rerender") return;
    let t = this.getCurrentWidgetNodeId();
    this.getRenderingState(t).effectManager.addEffect(e);
  }
  runEffects(e) {
    this.getRenderingState(e).effectManager.runEffects();
  }
  scheduleRender(e, t = !1) {
    if (!this.widgetFunction) throw Error("Widget has not been registered");
    this.initializeRenderingState(e);
    this.getRenderingState(e).renderScheduler.schedule();
  }
  maybeRunEffects(e) {
    let t = this.getRenderingState(e).effectManager;
    t.hasRunEffects || t.runEffects();
  }
  setPropertyMenu({
    propertyMenuDefinitionHandle: e,
    propertyMenuCallbackHandle: t
  }) {
    let i = this.getCurrentWidgetNodeId();
    let n = this.getRenderingState(i);
    if (n.propertyMenuHookCalled) throw new o9("usePropertyMenu called multiple times");
    n.propertyMenuHookCalled = !0;
    let r = BK({
      vm: this.vm,
      handle: e,
      schema: Ed,
      property: "usePropertyMenu.args[0]"
    }).map(e => {
      if ("dropdown" === e.itemType) {
        let t = e.options.map(e => ({
          option: e.option,
          tooltip: e.label
        }));
        return {
          ...e,
          options: t
        };
      }
      return e;
    });
    if (r.forEach((e, t) => OV(e, t)), n.propertyMenuDefinition = r, !this.vm.isFunction(t)) throw new o9("usePropertyMenu.args[1] must be a function");
    this.vm.retainHandle(t);
    n.propertyMenuCallbackHandle = t;
  }
  setIsStickable(e) {
    let t = this.getCurrentWidgetNodeId();
    let i = this.getRenderingState(t);
    if (null !== i.stickableState.isStickable) throw new o9("useStickable or useStickableHost called multiple times. You can only call one of them once per widget.");
    i.stickableState.isStickable = !0;
    this.vm.isFunction(e) && (i.stickableState.stuckStatusChangedHandle = e, this.vm.retainHandle(e));
  }
  setIsStickableHost(e) {
    let t = this.getCurrentWidgetNodeId();
    let i = this.getRenderingState(t);
    if (null !== i.stickableState.isStickable) throw new o9("useStickable or useStickableHost called multiple times. You can only call one of them once per widget.");
    i.stickableState.isStickable = !1;
    this.vm.isFunction(e) && (i.stickableState.attachedStickablesChangedHandle = e, this.vm.retainHandle(e));
  }
  setShouldHideCursors(e) {
    let t = this.getCurrentWidgetNodeId();
    let i = this.getRenderingState(t);
    if (null !== i.shouldHideCursors) throw new o9("useHideCursors called multiple times. You can only call it once per widget.");
    let n = BK({
      vm: this.vm,
      handle: e,
      schema: By.bool,
      property: "useHideCursors.args[0]"
    });
    i.shouldHideCursors = n;
  }
  getPropertyMenuDefinition(e) {
    return this.getRenderingState(e).propertyMenuDefinition || [];
  }
  getPropertyMenuCallbackHandle(e) {
    return this.getRenderingState(e).propertyMenuCallbackHandle || null;
  }
  getRenderMode(e) {
    return this.getRenderingState(e).renderMode;
  }
  initializeRenderingState(e) {
    if (!this.renderingStateById.get(e)) {
      let t = {
        renderMode: "current",
        propertyMenuHookCalled: !1,
        propertyMenuCallbackHandle: null,
        propertyMenuDefinition: [],
        effectManager: new g(this.vm),
        oldVRoot: null,
        stickableState: {
          isStickable: null,
          stuckStatusChangedHandle: null,
          attachedStickablesChangedHandle: null
        },
        shouldHideCursors: null,
        renderScheduler: new v(async () => {
          try {
            let i = getSceneGraphInstance().get(e);
            if (!i) return;
            let n = null;
            let a = Gc(i);
            let l = a?.manifest.networkAccess?.allowedDomains ?? gH;
            let {
              imgInfoMap,
              vRoot
            } = await qg(() => {
              if (!getSceneGraphInstance().get(e)) throw new AR("Could not find widget node in renderWidgetTree");
              n && c2(n.syncedState, i.getWidgetSyncedState()) || (n = this.renderWidgetTree(e, "current"));
              return n;
            }, this.getPluginRuntimeBridge(), l);
            l7.plugin("widget-rerender", () => {
              t.oldVRoot && !c2(t.oldVRoot.syncedState, i.renderedSyncedState) && (t.oldVRoot = this.renderWidgetTree(e, "previous"));
              let a = window.performance.now();
              w(e, !0);
              Lb({
                widgetNodeID: e,
                newVRoot: vRoot,
                oldVRoot: t.oldVRoot,
                propertyMenuDefinition: this.getPropertyMenuDefinition(e),
                runtime: this.getPluginRuntimeBridge(),
                imgInfoMap,
                stickableState: t.stickableState,
                shouldHideCursors: t.shouldHideCursors
              });
              i.renderedSyncedState = i.getWidgetSyncedState();
              let s = window.performance.now() - a;
              t.oldVRoot = n;
              z.didReconciliation(s);
            });
            this.runEffects(e);
          } catch (i) {
            if (i instanceof AR) return;
            let t = "";
            if (i instanceof o9 || isDevEnvironment() ? (console.error(i), t = i.message) : i instanceof $f || ("string" == typeof i && (i = Error(i)), $D(_$$e.EXTENSIBILITY, i)), this.isFirstPartyWidget() ? $D(_$$e.EXTENSIBILITY, i) : this.vm.evalTrustedCode(`throw "An error occurred while running this widget ${t ? `- '${t}'` : ""}"`), this.lifecycleCommand?.name === "mount" && this.lifecycleCommand?.isInsert) {
              let t = getSceneGraphInstance().get(e);
              t && l7.plugin("remove-widget-after-first-render", () => t.removeWidgetWithoutSafetyChecks());
            }
          } finally {
            requestAnimationFrame(() => {
              w(e, !1);
            });
          }
        })
      };
      this.renderingStateById.set(e, t);
    }
  }
  isFirstPartyWidget() {
    return Vi(this.pluginId);
  }
  disableUnsafeGlobalsForRender() {
    if (this.isFirstPartyWidget()) return;
    let e = this.vm.evalTrustedCode(`
      (() => {
        let originalRand = Math.random
        Math.random = () => {
          throw new Error("Math.random is not allowed in a widget's render function")
        }
        return () => {Math.random = originalRand}
      })()
      `);
    vA("SUCCESS" === e.type);
    this.vm.retainHandle(e.handle);
    this.reenableUnsafeGlobalsHandle = e.handle;
  }
  reenableUnsafeGlobals() {
    this.isValidFunctionHandle(this.reenableUnsafeGlobalsHandle) && (this.vm.callFunction(this.reenableUnsafeGlobalsHandle, this.vm.undefined), this.vm.releaseHandle(this.reenableUnsafeGlobalsHandle), this.reenableUnsafeGlobalsHandle = void 0);
  }
  renderWidgetTree(e, t) {
    if (!this.widgetFunction) throw Error("Widget has not been registered");
    try {
      this.initializeRenderingState(e);
      let i = this.getRenderingState(e);
      this.releaseRenderingStateHandles(i);
      i.effectManager.clear();
      i.propertyMenuHookCalled = !1;
      i.propertyMenuDefinition = [];
      i.propertyMenuCallbackHandle = null;
      i.renderMode = t;
      i.shouldHideCursors = null;
      i.stickableState = {
        isStickable: null,
        attachedStickablesChangedHandle: null,
        stuckStatusChangedHandle: null
      };
      let n = window.performance.now();
      this.currentWidgetId = e;
      let r = getSceneGraphInstance().get(e);
      let a = "current" === t ? r.getWidgetSyncedState() : r.renderedSyncedState;
      let l = !r.widgetVersionId;
      this.disableUnsafeGlobalsForRender();
      let d = this.vm.callFunction(this.widgetFunction, this.vm.undefined);
      if (this.reenableUnsafeGlobals(), this.currentWidgetId = null, "FAILURE" === d.type) {
        this.vm.releaseHandle(this.widgetFunction);
        return new $f(d.error);
      }
      let c = d.handle;
      let m = window.performance.now();
      let h = this.vm.deepUnwrap(c, !0);
      let g = Gc(r);
      let A = g?.manifest?.widgetApi ?? "1.0.0";
      let y = P5(h, {
        isLocalWidget: l,
        widgetNodeID: e,
        pluginID: r.widgetId,
        widgetVersionID: r.widgetVersionId,
        widgetName: r.name,
        widgetApiVersion: A,
        enableFullJsx: !1
      });
      let b = window.performance.now();
      z.didRender(b - n, b - m);
      g && g.name && l7.plugin("set-widget-name", () => {
        r.widgetName = g.name;
      });
      return {
        rootNode: y,
        syncedState: a
      };
    } finally {
      this.currentWidgetId = null;
      this.getRenderingState(e).renderMode = "current";
    }
  }
  async waitForFinish(e = {
    fromClosePlugin: !1
  }) {
    if (this.isCanceled) return;
    let t = !0;
    for (; t;) {
      for (let [, {
        renderScheduler: e
      }] of (t = !1, this.renderingStateById)) t = (await e.waitForFinish()) || t;
      e?.fromClosePlugin || (t = (await this.promiseManager.waitForFinish()) || t);
    }
  }
  clear() {
    if (!this.isCleared) {
      for (let [, e] of (this.isCleared = !0, this.isValidFunctionHandle(this.widgetFunction) && this.vm.releaseHandle(this.widgetFunction), this.renderingStateById)) {
        e.renderScheduler.clear();
        e.effectManager.clear();
        this.releaseRenderingStateHandles(e);
      }
      this.isValidFunctionHandle(this.reenableUnsafeGlobalsHandle) && this.vm.releaseHandle(this.reenableUnsafeGlobalsHandle);
      this.renderingStateById = new Map();
      this.currentWidgetId = null;
      this.widgetFunction = void 0;
      x.$$delete(this);
      this.runShutdownActions();
    }
  }
  runShutdownActions() {
    let e = null;
    for (let t of this.shutdownActions) try {
      t();
    } catch (t) {
      e || (e = t);
      console.error(`runShutdownActions error: ${t}`);
    }
    if (this.shutdownActions = [], e) throw e;
  }
  setOldVRoot(e, t) {
    this.getRenderingState(e).oldVRoot = t;
  }
  getLifecycleCommand() {
    return this.lifecycleCommand;
  }
  setLifecycleCommand(e) {
    this.lifecycleCommand = e;
  }
  addShutdownAction(e) {
    if (this.isCleared) throw Error("Cannot add shutdown action after widget manager has been cleared");
    this.shutdownActions.push(e);
  }
  isValidFunctionHandle(e) {
    return !!(e && !this.vm.isDestroyed() && this.vm.isFunction(e));
  }
  releaseRenderingStateHandles(e) {
    let t = e.propertyMenuCallbackHandle;
    this.isValidFunctionHandle(t) && this.vm.releaseHandle(t);
    let {
      attachedStickablesChangedHandle,
      stuckStatusChangedHandle
    } = e.stickableState;
    this.isValidFunctionHandle(attachedStickablesChangedHandle) && this.vm.releaseHandle(attachedStickablesChangedHandle);
    this.isValidFunctionHandle(stuckStatusChangedHandle) && this.vm.releaseHandle(stuckStatusChangedHandle);
  }
}
export const SS = $$T0;
export const Dc = $$C1;