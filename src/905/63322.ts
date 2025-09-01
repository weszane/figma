export class $$n0 {
  constructor(e, t, i, n, r) {
    this.immediateRatio = t;
    this.delayedRatio = i;
    this.delayMsec = n;
    this.callback = r;
    this._current = 0;
    this._timer = 0;
    this._notifyImmediate = e;
    this._notifyDelayed = e;
  }
  setCurrent(e) {
    e > this._notifyDelayed && (this._notifyDelayed = e, e > this._notifyImmediate ? this.notifyNow() : this.notifySoon());
    this._current = e;
  }
  notifyNow() {
    this._notifyDelayed = this._current * this.delayedRatio;
    this._notifyImmediate = this._current * this.immediateRatio;
    this._timer && (clearTimeout(this._timer), this._timer = 0);
    this.callback();
  }
  notifySoon() {
    this._timer || (this._timer = setTimeout(() => {
      this.notifyNow();
    }, this.delayMsec));
  }
}
export const K = $$n0;