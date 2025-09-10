import { useState, useEffect } from "react";
import { flushSync } from "../vendor/944059";
class a {
  constructor() {
    this._frameListeners = new Set();
    this._rafHandle = -1;
    this.schedulePublishToUI = () => {
      this._rafHandle >= 0 || (this._rafHandle = requestAnimationFrame(() => {
        for (let e of this._frameListeners) e();
        this._rafHandle = -1;
      }));
    };
  }
  addFrameListener(e) {
    if (this._frameListeners.has(e)) throw Error("Listener already present");
    this._frameListeners.add(e);
  }
  removeFrameListener(e) {
    this._frameListeners.$$delete(e);
  }
}
export class $$s0 {
  constructor(e) {
    this._frameBatcher = new a();
    this._value = e;
  }
  set(e) {
    this._value !== e && (this._value = e, this._frameBatcher.schedulePublishToUI());
  }
  get() {
    return this._value;
  }
  use(e) {
    let [t, i] = useState(this._value);
    this.useSubscription(i, e);
    return t;
  }
  useSubscription(e, {
    updateSynchronously: t = !1
  } = {}) {
    useEffect(() => {
      let i = () => {
        let i = () => e(this._value);
        t ? flushSync(i) : i();
      };
      this._frameBatcher.addFrameListener(i);
      return () => {
        this._frameBatcher.removeFrameListener(i);
      };
    }, [e, t]);
  }
}
export class $$o1 extends $$s0 {
  constructor(e, t) {
    super(e);
    this.comparisonFunction = t;
  }
  set(e) {
    let t = super.get();
    this.comparisonFunction(t, e) || super.set(e);
  }
}
export const N = $$s0;
export const B = $$o1;
