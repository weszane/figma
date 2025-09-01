export class $$n0 {
  scheduleOnce(e, t) {
    if (this.isScheduled()) throw Error("Task already scheduled");
    let i = setTimeout(() => {
      this.reset();
      e();
    }, t);
    this.unschedule = () => clearTimeout(i);
  }
  scheduleRepeating(e, t) {
    if (this.isScheduled()) throw Error("Task already scheduled");
    let i = setInterval(() => {
      !1 === e() && this.reset();
    }, t);
    this.unschedule = () => clearInterval(i);
  }
  isScheduled() {
    return null !== this.unschedule;
  }
  reset() {
    this.unschedule && (this.unschedule(), this.unschedule = null);
  }
  constructor() {
    !function (e, t, i) {
      t in e ? Object.defineProperty(e, t, {
        value: null,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = null;
    }(this, "unschedule", 0);
  }
}
export const W = $$n0;