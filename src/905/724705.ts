import { x4 } from "../905/657224";
let r = "ipc:";
export class $$a0 {
  constructor() {
    this.storage = x4;
    this._onStorageEvent = e => {
      let t = e.key;
      if (e.storageArea === this.storage && null !== e.newValue && t?.startsWith(r)) {
        let i = null;
        try {
          i = JSON.parse(e.newValue)[0];
        } catch (e) {
          return;
        }
        let n = null;
        for (let e of this.callbacks[t] || []) try {
          e(i);
        } catch (e) {
          n = e;
        }
        if (n) throw n;
      }
    };
    let e = this.storage;
    if (e) for (let t of Object.keys(e)) t.startsWith(r) && delete e[t];
    this.callbacks = {};
    window.addEventListener("storage", this._onStorageEvent, !1);
  }
  _callbacksForMessage(e) {
    let t = r + e;
    this.callbacks[t] || (this.callbacks[t] = []);
    return this.callbacks[t];
  }
  sendToOtherTabs(e, t) {
    if (this.storage) try {
      this.storage[r + e] = JSON.stringify([t, Math.random()]);
    } catch (e) {
      console.error((e && e.stack || e) + "");
    }
  }
  sendToAllTabs(e, t) {
    let i = this._callbacksForMessage(e);
    let n = null;
    for (let e of i) try {
      e(t);
    } catch (e) {
      n = e;
    }
    if (this.sendToOtherTabs(e, t), n) throw n;
  }
  register(e, t) {
    let i = this._callbacksForMessage(e);
    0 > i.indexOf(t) && i.push(t);
  }
  unregister(e, t) {
    let i = this._callbacksForMessage(e);
    let n = i.indexOf(t);
    n >= 0 && i.splice(n, 1);
  }
}
export const P = $$a0;