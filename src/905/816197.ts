import { ServiceCategories as _$$e } from "../905/165054";
import { dPJ, DPQ, h3O, kul, xal } from "../figma_app/763686";
import { getSceneGraphInstance } from "../905/830071";
import { getSingletonSceneGraph } from "../905/700578";
import { debugState } from "../905/407919";
import { $D } from "../905/11";
import { IL } from "../figma_app/582924";
import { oJ } from "../905/346794";
import { n as _$$n } from "../905/347702";
let p = getSceneGraphInstance();
let m = _$$n(() => 10);
let h = {
  invalidIncremental: e => `Cannot call with documentAccess: dynamic-page. Use ${e} instead.`,
  incrementalUnsafeMemberWarning: (e, t) => `\`${e}\` is deprecated. Please use \`${t}\` to ensure consistent results.`,
  invalidPageIncremental: e => `Cannot access ${e} on a page that has not been explicitly loaded. Remember to call \`await page.loadAsync()\` or \`await figma.loadAllPagesAsync()' first.`,
  invalidPageRelaxedWarning: e => `You are accessing ${e} on a page that has not been explicitly loaded. This is not recommended and may lead to unexpected behavior. Remember to call \`await page.loadAsync()\` or \`await figma.loadAllPagesAsync()' first.`
};
export class $$g4 {
  constructor(e) {
    this.loadedPages = new Set();
    this.incrementalMode = e.incrementalMode;
    this.stats = e.stats;
    this.allowIncrementalUnsafeApiCalls = e.allowIncrementalUnsafeApiCalls;
  }
  getIsIncrementalMode() {
    return this.incrementalMode;
  }
  loadedAllPages() {
    this.incrementalMode = !1;
  }
  getLoadedPages() {
    return Array.from(this.loadedPages);
  }
  addLoadedPageIds(e) {
    e.forEach(e => {
      this.loadedPages.has(e) || this.stats.incrementNumPagesLoaded();
      this.loadedPages.add(e);
    });
  }
  hasLoadedPageId(e) {
    return this.loadedPages.has(e) || !this.incrementalMode;
  }
  checkAllowedPage(e, t) {
    if ("CANVAS" !== e.type || this.hasLoadedPageId(e.guid)) return;
    let i = "method" in t ? `method \`${t.method}()\`` : `property \`${t.property}\``;
    if (this.allowIncrementalUnsafeApiCalls) {
      console.warn(h.invalidPageRelaxedWarning(i));
      return;
    }
    throw Error(h.invalidPageIncremental(i));
  }
  checkAllowedMethodIncremental(e) {
    if ("DOCUMENT" === e.type && this.getIsIncrementalMode()) {
      if (this.allowIncrementalUnsafeApiCalls) console.warn("To ensure consistent behavior, call `await figma.loadAllPagesAsync()` first.");else throw Error("Cannot call with documentAccess: dynamic-page without calling figma.loadAllPagesAsync() first.");
    }
  }
  checkAllowedMethodDocumentOrPage(e, t) {
    "DOCUMENT" === e.type ? this.checkAllowedMethodIncremental(e) : "CANVAS" === e.type && this.checkAllowedPage(e, t);
  }
}
export function $$f6(e, t, i) {
  if (e) console.warn(h.incrementalUnsafeMemberWarning(t, i));else throw Error(h.invalidIncremental(i));
}
function _(e) {
  let t = IL(e, dPJ.PLUGIN, DPQ.PLUGIN);
  S() && $$v0() && h3O.resolveSceneGraphQueryForTest(e, DPQ.PLUGIN);
  return t;
}
async function A(e, t) {
  if ((!S() || !$$v0()) && (await Promise.race([(async () => (await oJ(kul.JOINED), !1))(), (async () => (await new Promise(e => setTimeout(e, 1e3 * m())), !0))()]))) throw Error(`Unable to establish connection to Figma after ${m()} seconds. Please check your internet connection.`);
  await t.stats.markAndAggregateDuration("totalLoadPagesDuration", async () => {
    await _(e);
  });
}
export function $$y2(e, t, i = {}) {
  let a = p.get(e);
  let s = a?.containingCanvas;
  if (s) {
    if (t.hasLoadedPageId(s)) return;
    if (i.ignoreReduxState) t.addLoadedPageIds([s]);else {
      let e = debugState.getState().mirror.appModel.pagesList.find(e => e.nodeId === s);
      e && e.status === xal.LOADED ? t.addLoadedPageIds([s]) : $D(_$$e.EXTENSIBILITY, Error("Cannot call markPageLoaded without having loaded the page first."));
    }
  }
  _(s ?? e);
}
export async function $$b5(e, t) {
  let i = p.get(e);
  let n = i?.containingCanvas;
  if (n) {
    if (t.hasLoadedPageId(n)) return;
    let e = debugState.getState().mirror.appModel.pagesList.find(e => e.nodeId === n);
    if (e && e.loadedForPlugins) {
      t.addLoadedPageIds([n]);
      return;
    }
  }
  await A(n ?? e, t);
  let r = p.get(e)?.containingCanvas;
  r && t.addLoadedPageIds([r]);
}
export let $$v0 = _$$n(() => !1);
export async function $$I3(e, t) {
  await Promise.all(e.map(e => $$b5(e, t)));
}
async function E(e) {
  let t = getSingletonSceneGraph().getInternalCanvas();
  if (!t) {
    $D(_$$e.EXTENSIBILITY, Error("loadInternalCanvas: internalCanvas does not exist"));
    return;
  }
  await $$b5(t.guid, e);
}
let $$x1 = _$$n(async e => await E(e));
let S = _$$n(() => h3O.getSessionState() === kul.JOINED);
export const Jp = $$v0;
export const Ux = $$x1;
export const av = $$y2;
export const fs = $$I3;
export const u1 = $$g4;
export const vf = $$b5;
export const xc = $$f6;