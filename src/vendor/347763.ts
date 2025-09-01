import { Kq, Ai } from "../vendor/224885";
export class $$s0 {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    Kq(this.subscriptions, e);
    return () => Ai(this.subscriptions, e);
  }
  notify(e, r, n) {
    let i = this.subscriptions.length;
    if (i) {
      if (1 === i) this.subscriptions[0](e, r, n);else for (let s = 0; s < i; s++) {
        let i = this.subscriptions[s];
        i && i(e, r, n);
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
export const v = $$s0;