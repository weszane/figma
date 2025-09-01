export class $$n0 {
  constructor() {
    this._cache = Object.create(null);
  }
  get(e, t, i, n) {
    let r = this.getCacheKey(e, t, i);
    if (!r) return;
    let a = this._cache[r];
    if (a) return n ? a.noCircle : a.withCircle;
  }
  getCacheKey(e, t, i) {
    return e || (t && i ? `${t}-${i}` : "");
  }
  set(e, t, i, n, r) {
    if (!e) return;
    let a = this.getCacheKey(t, i, n);
    this._cache[a] || (this._cache[a] = {
      noCircle: void 0,
      withCircle: void 0
    });
    this._cache[this.getCacheKey(t, i, n)][r ? "noCircle" : "withCircle"] = e;
  }
}
export const A = $$n0;