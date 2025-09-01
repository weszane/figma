import { eU, zl } from "../figma_app/27355";
class r {
  constructor() {
    this.listenerMap = new Map();
  }
  addEventListener(e, t) {
    this.listenerMap.get(e) || this.listenerMap.set(e, new Set());
    this.getListenersSet(e).add(t);
  }
  removeEventListener(e, t) {
    this.getListenersSet(e)?.delete(t);
  }
  getListenersSet(e) {
    return this.listenerMap.get(e);
  }
  handleEvent(e) {
    let t = this.listenerMap.get(e.id);
    t?.forEach(t => {
      t(e);
    });
  }
}
export let $$a1 = eU(() => new r());
export function $$s0(e) {
  zl.get($$a1).handleEvent(e);
}
export const YQ = $$s0;
export const az = $$a1;