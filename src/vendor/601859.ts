import { M } from "../vendor/644572";
class s {
  constructor() {
    this.componentControls = new Set();
  }
  subscribe(e) {
    this.componentControls.add(e);
    return () => this.componentControls.$$delete(e);
  }
  start(e, r) {
    this.componentControls.forEach(n => {
      n.start(e.nativeEvent || e, r);
    });
  }
}
let o = () => new s();
export function $$a0() {
  return M(o);
}
export const m = $$a0;