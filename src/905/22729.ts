export class $$n0 {
  constructor() {
    this.nextID = 0;
    this.callbacks = new Map();
    let e = new Blob([`try {
          importScripts("${new URL(Fig.imageIOWorkerURL, document.baseURI).href}");
         } catch (e) {
          console.warn("Could not load image worker blob", e)
         }`], {
      type: "application/javascript"
    });
    this.worker = new Worker(URL.createObjectURL(e));
    this.worker.onmessage = e => {
      let t = e.data;
      let i = this.callbacks.get(t.id);
      this.callbacks.$$delete(t.id);
      void 0 !== i && i(t);
    };
  }
  forgetCallbacks() {
    this.callbacks.clear();
  }
  sendMessage(e) {
    return new Promise(t => {
      let i = this.nextID++;
      this.callbacks.set(i, t);
      this.worker.postMessage({
        ...e,
        id: i
      });
    });
  }
  terminate() {
    this.worker.terminate();
  }
}
export const o = $$n0;