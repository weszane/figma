import { s } from "../905/409042";
export class $$r0 {
  constructor(e) {
    for (let t in this.frecencyByQuery = new Map(), e) {
      let i = new Map();
      for (let r in e[t]) {
        let a = e[t][r] ?? {
          timestamps: [],
          count: 0
        };
        i.set(r, new s(a));
      }
      this.frecencyByQuery.set(t, i);
    }
  }
  addUsage(e, t) {
    let i = this.frecencyByQuery.get(e) ?? new Map();
    let r = i.get(t) ?? null;
    let a = r ?? new s({
      timestamps: [],
      count: 0
    });
    a.addUsage();
    i.set(t, a);
    this.frecencyByQuery.set(e, i);
    return !r;
  }
  data(e, t) {
    return this.frecencyByQuery.get(e)?.get(t) ?? null;
  }
  serialize() {
    let e = {};
    this.frecencyByQuery.forEach((t, i) => {
      e[i] = {};
      t.forEach((t, n) => {
        e[i][n] = t.serialize();
      });
    });
    return e;
  }
}
export const B = $$r0;