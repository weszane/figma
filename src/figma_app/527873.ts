import { DocumentMode, CorePerfInfo, performanceEventCounters } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { customHistory } from "../905/612521";
import { isDevEnvironment } from "../figma_app/169182";
import { logInfo } from "../905/714362";
import { fullscreenValue } from "../figma_app/455680";
let $$d7 = 1048576;
let $$c4 = 0x40000000;
let u = getFeatureFlags().wasm_4gb && customHistory.location && "1" === new URLSearchParams(customHistory.location.search).get("wasm-4gb");
let p = customHistory.location && "true" === new URLSearchParams(customHistory.location.search).get("recovery");
let $$_5 = u ? DocumentMode.MAXIMUM : p ? DocumentMode.RECOVERY : DocumentMode.DEFAULT;
export function $$h0(e) {
  let t = CorePerfInfo.setHeapMemoryMode(e);
  logInfo("memory", `setHeapMemoryMode(${e}) ${t ? "success" : "failed"}`);
  return t;
}
let m = null;
let g = null;
export function $$f3(e, t) {
  "fullscreen-app" === e ? m = t : g = t;
}
export function $$E6(e) {
  return "fullscreen-app" === e ? m?.() ?? 0 : "prototype-lib" === e ? g?.() ?? 0 : m?.() || g?.() || 0;
}
export function $$y2() {
  if (window.performance) {
    let e = window.performance.memory;
    if (e) return e.usedJSHeapSize;
  }
  return 0;
}
export function $$b1() {
  return (CorePerfInfo?.getTotalUsedHeapMemory() || 0) + fullscreenValue.memorySpikeOnFileLoadBytes();
}
getFeatureFlags().memory_profiling_local && isDevEnvironment() && (window.startMemoryProfile = async () => {
  let e = await window.showSaveFilePicker();
  let t = await e.createWritable({
    keepExistingData: !0
  });
  window.memoryProfileOperationsWritable = t;
});
isDevEnvironment() && (window.getTopMemoryFunctions = () => {
  let e = performanceEventCounters.getAll();
  let t = new Map();
  let r = new Map();
  let i = new Map();
  for (let a of e) a.includes("allocCallCount") ? t.set(a, performanceEventCounters.getCount(a)) : a.includes("allocMaxDelta") ? r.set(a, performanceEventCounters.getCount(a)) : a.includes("allocTotalDelta") && i.set(a, performanceEventCounters.getCount(a));
  console.log("call count events", Array.from(t).sort((e, t) => t[1] - e[1]).slice(0, 10));
  console.log("max delta events", Array.from(r).sort((e, t) => t[1] - e[1]).slice(0, 10));
  console.log("total delta events", Array.from(i).sort((e, t) => t[1] - e[1]).slice(0, 10));
}, window.resetPerformanceEventCounters = () => {
  performanceEventCounters.resetAll();
});
export const F4 = $$h0;
export const Yc = $$b1;
export const aW = $$y2;
export const bM = $$f3;
export const cF = $$c4;
export const dn = $$_5;
export const le = $$E6;
export const o_ = $$d7;
