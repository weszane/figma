import { createStore } from "jotai";
class r {
  jotaiAtomStore = createStore();
  unsubscribeCallbacks = new Set();
  rerenderAtomsProviders = new Set();
  get(e) {
    return this.jotaiAtomStore.get(e);
  }
  set(e, ...t) {
    return this.jotaiAtomStore.set(e, ...t);
  }
  sub(e, t, i = {}) {
    let n = !1;
    let r = () => {
      n || (n = !0, Promise.resolve().then(() => {
        n = !1;
        t();
      }));
    };
    let a = this.jotaiAtomStore.sub(e, () => {
      try {
        i.batchMicrotask ? r() : t();
      } catch (e) {
        console.error(e);
        return e;
      }
    });
    this.unsubscribeCallbacks.add(a);
    return () => {
      a();
      this.unsubscribeCallbacks.$$delete(a);
    };
  }
  resetForTests() {
    for (let e of this.unsubscribeCallbacks) e();
    for (let e of (this.jotaiAtomStore = createStore(), this.unsubscribeCallbacks = new Set(), this.rerenderAtomsProviders)) e();
    this.rerenderAtomsProviders = new Set();
  }
}
export let $$a0 = new r();
export const z = $$a0;
