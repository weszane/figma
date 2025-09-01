import { addUnique, removeElement } from "../figma_app/656233";
function r(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
export class $$a0 {
  on(e, t) {
    this._listenersByEvent[e] || (this._listenersByEvent[e] = []);
    addUnique(this._listenersByEvent[e], t);
  }
  removeListener(e, t) {
    let i = this._listenersByEvent[e];
    i && removeElement(i, t);
  }
  trigger(e, ...t) {
    if (this._listenersByEvent[e]) for (let i of this._listenersByEvent[e]) i.apply(this, t);
  }
  removeAllListeners() {
    this._listenersByEvent = Object.create(null);
  }
  constructor(e) {
    r(this, "_name", void 0);
    r(this, "_listenersByEvent", void 0);
    this._name = e;
    this._listenersByEvent = Object.create(null);
  }
}
export const b = $$a0;