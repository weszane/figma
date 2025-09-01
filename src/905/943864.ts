export let $$n0 = new class {
  constructor() {
    this.scaleToolActivatedListeners = new Set();
  }
  scaleToolActivated() {
    for (let e of this.scaleToolActivatedListeners) e();
  }
  subscribeScaleToolActivated(e) {
    this.scaleToolActivatedListeners.add(e);
  }
  unsubscribeScaleToolActivated(e) {
    this.scaleToolActivatedListeners.$$delete(e);
  }
}();
export const h = $$n0;