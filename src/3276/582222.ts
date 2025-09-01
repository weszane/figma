export class $$o0 {
  constructor(e, t, n, o) {
    this._cached_all = null;
    this.applyInstant = !1;
    this.minimizeUnpinned = !1;
    this.clusters = e.reduce((e, t) => (e[t.id] = t, e), {});
    this.order = e.map(e => e.id);
    this.leafNodes = t;
    let a = {};
    o && (this.minimizeUnpinned = !0);
    e.forEach(e => {
      e.pins.forEach(t => {
        a[t.id] = e.id;
      });
    });
    this.hierarchy = a;
    this.zoomScale = n;
  }
  get length() {
    return this.order.length;
  }
  all() {
    this._cached_all || (this._cached_all = this.order.map(e => this.clusters[e]));
    return this._cached_all;
  }
  getParentOf(e) {
    let t = this.hierarchy[e];
    return t && this.clusters[t] || null;
  }
  getById(e) {
    return this.clusters[e] || null;
  }
}
export const n = $$o0;