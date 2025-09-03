import { juq, glU } from "../figma_app/763686";
import { ReduxSceneGraph } from "../905/700578";
import { g } from "../905/566160";
let s = class e extends Error {
  constructor() {
    super(e.message);
    this.name = e.label;
  }
};
s.label = "InvalidSessionError";
s.message = "Auto-suggest session is not available";
export let $$o1 = s;
class l extends (ReduxSceneGraph ?? class {}) {
  constructor(e, t) {
    super(juq.AUTO_SUGGEST);
    this.sceneGUID = e;
    this.sessionType = t;
  }
  get scene() {
    let e = glU?.getAutoSuggestSceneByGUID(this.sceneGUID, this.sessionType);
    if (!e) throw Error("Scene does not exist");
    return e;
  }
}
export class $$d0 {
  constructor(e, t) {
    this.validateFullScreenAvailable();
    let i = glU?.startNewAutoSuggestSession(e);
    if (!i) throw Error("Failed to reset auto suggest scene");
    this.sessionID = i;
    this.sceneMap = new Map();
    this.sessionType = e;
    this.abortController = t;
  }
  destroy() {
    this.validation();
    glU?.endAutoSuggestSession(this.sessionID, this.sessionType);
  }
  async loadBuffertoScene(e, t) {
    let i = new TaskController({
      priority: "background"
    });
    let r = new Promise((e, r) => {
      scheduler.postTask(() => {
        let i = glU?.loadBufferToAutoSuggestScene(this.sessionID, t, this.sessionType);
        i || r(Error("Failed to load buffer to auto suggest scene"));
        e(i);
      }, {
        signal: i.signal
      });
    });
    let a = new l(await r, this.sessionType);
    if (!a) throw Error("Failed to locate buffer scene");
    this.sceneMap.set(e, a);
    return a;
  }
  getSceneByKey(e) {
    return this.sceneMap.get(e);
  }
  async getFragmentScene(e) {
    this.validation();
    let t = this.getSceneByKey(e);
    if (t) return t;
    let i = new Uint8Array(await g(e, e.file_key));
    if (!i || 0 === i.length) throw Error("Failed to get copy buffer for fragment");
    return this.loadBuffertoScene(e, i);
  }
  unloadScene(e) {
    let t = this.sceneMap.get(e);
    if (!t) throw Error("Scene does not exist");
    glU?.unloadAutoSuggestSceneByGUID(this.sessionID, t.sceneGUID, this.sessionType);
    this.sceneMap.$$delete(e);
  }
  unloadFragment(e) {
    this.validation();
    this.unloadScene(e);
  }
  validation() {
    if (this.abortController.signal.aborted) throw new $$o1();
    this.validateFullScreenAvailable();
    this.validateSceneAvailable();
  }
  validateFullScreenAvailable() {
    if (!glU) throw Error("Fullscreen is not initialized");
  }
  validateSceneAvailable() {
    let e = glU?.getAutoSuggestSessionID(this.sessionType);
    if (!e || e !== this.sessionID) {
      this.abortController.abort();
      return new $$o1();
    }
  }
}
export const I = $$d0;
export const u = $$o1;