export let $$n0 = new class {
  constructor() {
    this.timeout = 0;
    this.bellShown = !1;
  }
  start(e, t = 6e4) {
    0 === this.timeout && (this.timeout = setTimeout(() => {
      e();
      this.bellShown = !0;
    }, t));
  }
  clear() {
    let e = this.bellShown;
    clearTimeout(this.timeout);
    this.timeout = 0;
    this.bellShown = !1;
    return e;
  }
}();
export const G = $$n0;