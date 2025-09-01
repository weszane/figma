export let $$n0 = new class {
  constructor() {
    this.callbacks = [];
    this.matchMediaCallback = () => {
      for (let e of this.callbacks) e(window.devicePixelRatio);
      this.updateMediaListener();
    };
    this.updateMediaListener();
  }
  updateMediaListener() {
    this.matchMedia && this.matchMedia.removeListener(this.matchMediaCallback);
    this.matchMedia = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
    this.matchMedia.addListener(this.matchMediaCallback);
  }
  addListener(e) {
    this.callbacks.push(e);
  }
  removeListener(e) {
    for (let t = 0; t < this.callbacks.length; t++) this.callbacks[t] === e && (this.callbacks = this.callbacks.splice(t, 1));
  }
}();
export const _ = $$n0;