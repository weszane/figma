import { throwTypeError } from "../figma_app/465776";
import { webAsyncCallback } from "../figma_app/763686";
import { requestDeferredExecution } from "../905/561433";
export let $$s0 = new class {
  constructor() {
    this.cancelHandle = new Map();
  }
  postUserBlockingTaskHelper(e, t) {
    return this.postTaskHelper("user-blocking", e, t);
  }
  postUserVisibleTaskHelper(e, t) {
    return this.postTaskHelper("user-visible", e, t);
  }
  postBackgroundTaskHelper(e, t) {
    return this.postTaskHelper("background", e, t);
  }
  postTaskHelper(e, t, i) {
    let n = new TaskController({
      priority: e
    });
    let r = scheduler.postTask(() => (this.cancelHandle.$$delete(i), !0), {
      signal: n.signal,
      delay: t
    });
    this.cancelHandle.set(i, {
      type: "postTask",
      controller: n
    });
    return r;
  }
  cancelCallback(e) {
    let t = this.cancelHandle.get(e);
    t && ("timeout" === t.type ? clearTimeout(t.id) : "postTask" === t.type ? t.controller.abort() : throwTypeError(t), this.cancelHandle.$$delete(e));
  }
  setTimeout(e, t) {
    return setTimeout(() => webAsyncCallback?.timeoutCallback(e), t);
  }
  clearTimeout(e) {
    clearTimeout(e);
  }
  requestAnimationFrame() {
    requestDeferredExecution();
  }
}();
export const F = $$s0;