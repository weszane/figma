import { s } from "../905/409042";
export class $$r0 {
  constructor(e) {
    for (let t in this.frecencyByAction = new Map(), e) this.frecencyByAction.set(t, new s(e[t]));
  }
  data(e) {
    return this.frecencyByAction.get(e) ?? null;
  }
  addUsage(e) {
    let t = this.data(e);
    let i = t ?? new s({
      timestamps: [],
      count: 0
    });
    i.addUsage();
    this.frecencyByAction.set(e, i);
    return !t;
  }
  serialize() {
    let e = {};
    this.frecencyByAction.forEach((t, i) => {
      e[i] = t.serialize();
    });
    return e;
  }
}
export const l = $$r0;