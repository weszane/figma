import { Qg } from "../vendor/314131";
var t;
export function $$r1(e) {
  return new $$o0(n => {
    n(e);
  });
}
export function $$a2(e) {
  return new $$o0((n, i) => {
    i(e);
  });
}
!function (e) {
  e[e.PENDING = 0] = "PENDING";
  e[e.RESOLVED = 1] = "RESOLVED";
  e[e.REJECTED = 2] = "REJECTED";
}(t || (t = {}));
export class $$o0 {
  constructor(e) {
    $$o0.prototype.__init.call(this);
    $$o0.prototype.__init2.call(this);
    $$o0.prototype.__init3.call(this);
    $$o0.prototype.__init4.call(this);
    this._state = t.PENDING;
    this._handlers = [];
    try {
      e(this._resolve, this._reject);
    } catch (e) {
      this._reject(e);
    }
  }
  then(e, n) {
    return new $$o0((i, t) => {
      this._handlers.push([!1, n => {
        if (e) try {
          i(e(n));
        } catch (e) {
          t(e);
        } else i(n);
      }, e => {
        if (n) try {
          i(n(e));
        } catch (e) {
          t(e);
        } else t(e);
      }]);
      this._executeHandlers();
    });
  }
  catch(e) {
    return this.then(e => e, e);
  }
  finally(e) {
    return new $$o0((n, i) => {
      let t;
      let f;
      return this.then(n => {
        f = !1;
        t = n;
        e && e();
      }, n => {
        f = !0;
        t = n;
        e && e();
      }).then(() => {
        if (f) {
          i(t);
          return;
        }
        n(t);
      });
    });
  }
  __init() {
    this._resolve = e => {
      this._setResult(t.RESOLVED, e);
    };
  }
  __init2() {
    this._reject = e => {
      this._setResult(t.REJECTED, e);
    };
  }
  __init3() {
    this._setResult = (e, n) => {
      if (this._state === t.PENDING) {
        if (Qg(n)) {
          n.then(this._resolve, this._reject);
          return;
        }
        this._state = e;
        this._value = n;
        this._executeHandlers();
      }
    };
  }
  __init4() {
    this._executeHandlers = () => {
      if (this._state === t.PENDING) return;
      let e = this._handlers.slice();
      this._handlers = [];
      e.forEach(e => {
        e[0] || (this._state === t.RESOLVED && e[1](this._value), this._state === t.REJECTED && e[2](this._value), e[0] = !0);
      });
    };
  }
}
export const T2 = $$o0;
export const XW = $$r1;
export const xg = $$a2;