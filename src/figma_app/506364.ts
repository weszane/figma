import { LRUCache } from "../905/196201";
import { trackEventAnalytics } from "../905/449184";
import { desktopAPIInstance } from "../figma_app/876459";
import { debugState } from "../905/407919";
import { mapEditorTypeToProductType } from "../figma_app/314264";
import { fullscreenValue } from "../figma_app/455680";
import { UV } from "../905/283918";
import { f } from "../905/666831";
import { LJ, N_, oz, LE, x5, Ev } from "../905/543054";
import { mz } from "../905/715541";
import { up as _$$up } from "../905/145989";
import { X } from "../905/326527";
import { QC } from "../905/461516";
let g = new class {
  constructor() {
    this._suggestionsCache = new LRUCache(100);
    this._textReviewPluginRunner = new X();
    this._currentPromise = null;
  }
  async setCurrentImplementation(e, t) {
    let r = await LJ();
    let n = await N_();
    let a = oz();
    await e.initialize(t, [...r, ...n, ...a]);
    this._current = e;
    let l = await LE();
    console.log(`[spell-check] using implementation: ${this._current?.name}. Current language: ${t}. Supported languages: ${l}`);
    let d = debugState.getState().selectedView;
    let c = mapEditorTypeToProductType(d.editorType);
    trackEventAnalytics("Spell Check Ready", {
      productType: c,
      language: t,
      implementationName: this._current?.name,
      userIgnoreWordsCount: (r || []).length
    });
  }
  get current() {
    this._currentPromise || (this._currentPromise = (async () => (await this.ensureImplementationLoaded(), this._current))());
    return this._currentPromise;
  }
  async ensureImplementationLoaded() {
    if (this._current) return;
    let e = await x5();
    let t = _$$up(e);
    let r = Ev(t);
    switch (e) {
      case QC.DESKTOP:
        await this.setCurrentImplementation(new f(), r);
        break;
      case QC.AGENT:
        await this.setCurrentImplementation(new UV(), r);
        break;
      case QC.HUNSPELL:
        await this.setCurrentImplementation(new mz(), r);
    }
  }
  async getSuggestionsForWord(e) {
    return this._suggestionsCache.has(e) ? Promise.resolve(this._suggestionsCache.get(e) || []) : (await this.current).getSuggestionsForWord(e).then(t => (this._suggestionsCache.set(e, t), t));
  }
  async spellCheckText(e) {
    return (await this.current).spellCheckText(e);
  }
  async runTextReviewPlugin(e) {
    return X.shouldUsePluginForSpellChecking() ? await this._textReviewPluginRunner.reviewText(e) : [];
  }
  getAPIName() {
    return this._current?.name || "N/A";
  }
  shouldEnableWhenFirstActivated() {
    let e = navigator.languages || [navigator.language];
    return function (e, t) {
      if (e) return !0;
      try {
        let e = t.map(e => (e || "").toLowerCase()).map(e => e.split("-")[0]);
        if (!(e.includes("en") || e.includes("ru"))) return !1;
      } catch (e) {}
      return !0;
    }(!!desktopAPIInstance, e);
  }
  reset() {
    this._current = void 0;
    this._currentPromise = null;
    this._suggestionsCache.reset();
  }
}();
export async function $$f1() {
  await g.ensureImplementationLoaded();
  return g._current;
}
export async function $$E2(e) {
  await g.ensureImplementationLoaded();
  g._suggestionsCache.reset();
  return g._current.setLanguage(e);
}
export async function $$y3(e) {
  await $$E2(Ev(e));
  fullscreenValue && fullscreenValue.isReady() && fullscreenValue.triggerAction("redo-spell-checking");
}
export let $$b0 = g;
export const $4 = $$b0;
export const Xw = $$f1;
export const jI = $$E2;
export const up = $$y3;