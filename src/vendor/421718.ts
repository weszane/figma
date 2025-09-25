let E_TIMEOUT = Error("timeout while waiting for mutex to become available");
Error("mutex already locked");
let s = Error("request for lock canceled");
var o = function (e, r, n, i) {
  function s(e) {
    return e instanceof n ? e : new n(function (r) {
      r(e);
    });
  }
  return new (n || (n = Promise))(function (n, o) {
    function a(e) {
      try {
        d(i.next(e));
      } catch (e) {
        o(e);
      }
    }
    function h(e) {
      try {
        d(i.$$throw(e));
      } catch (e) {
        o(e);
      }
    }
    function d(e) {
      e.done ? n(e.value) : s(e.value).then(a, h);
    }
    d((i = i.apply(e, r || [])).next());
  });
};
class Semaphore {
  constructor(e, r = s) {
    this._value = e;
    this._cancelError = r;
    this._queue = [];
    this._weightedWaiters = [];
  }
  acquire(e = 1, r = 0) {
    if (e <= 0) throw Error(`invalid weight ${e}: must be positive`);
    return new Promise((n, i) => {
      let s = {
        resolve: n,
        reject: i,
        weight: e,
        priority: r
      };
      let o = d(this._queue, e => r <= e.priority);
      -1 === o && e <= this._value ? this._dispatchItem(s) : this._queue.splice(o + 1, 0, s);
    });
  }
  runExclusive(e) {
    return o(this, arguments, void 0, function* (e, r = 1, n = 0) {
      let [i, s] = yield this.acquire(r, n);
      try {
        return yield e(i);
      } finally {
        s();
      }
    });
  }
  waitForUnlock(e = 1, r = 0) {
    if (e <= 0) throw Error(`invalid weight ${e}: must be positive`);
    return this._couldLockImmediately(e, r) ? Promise.resolve() : new Promise(n => {
      this._weightedWaiters[e - 1] || (this._weightedWaiters[e - 1] = []);
      h(this._weightedWaiters[e - 1], {
        resolve: n,
        priority: r
      });
    });
  }
  isLocked() {
    return this._value <= 0;
  }
  getValue() {
    return this._value;
  }
  setValue(e) {
    this._value = e;
    this._dispatchQueue();
  }
  release(e = 1) {
    if (e <= 0) throw Error(`invalid weight ${e}: must be positive`);
    this._value += e;
    this._dispatchQueue();
  }
  cancel() {
    this._queue.forEach(e => e.reject(this._cancelError));
    this._queue = [];
  }
  _dispatchQueue() {
    for (this._drainUnlockWaiters(); this._queue.length > 0 && this._queue[0].weight <= this._value;) {
      this._dispatchItem(this._queue.shift());
      this._drainUnlockWaiters();
    }
  }
  _dispatchItem(e) {
    let r = this._value;
    this._value -= e.weight;
    e.resolve([r, this._newReleaser(e.weight)]);
  }
  _newReleaser(e) {
    let r = !1;
    return () => {
      r || (r = !0, this.release(e));
    };
  }
  _drainUnlockWaiters() {
    if (0 === this._queue.length) for (let e = this._value; e > 0; e--) {
      let r = this._weightedWaiters[e - 1];
      r && (r.forEach(e => e.resolve()), this._weightedWaiters[e - 1] = []);
    } else {
      let e = this._queue[0].priority;
      for (let r = this._value; r > 0; r--) {
        let n = this._weightedWaiters[r - 1];
        if (!n) continue;
        let i = n.findIndex(r => r.priority <= e);
        (-1 === i ? n : n.splice(0, i)).forEach(e => e.resolve());
      }
    }
  }
  _couldLockImmediately(e, r) {
    return (0 === this._queue.length || this._queue[0].priority < r) && e <= this._value;
  }
}
function h(e, r) {
  let n = d(e, e => r.priority <= e.priority);
  e.splice(n + 1, 0, r);
}
function d(e, r) {
  for (let n = e.length - 1; n >= 0; n--) if (r(e[n])) return n;
  return -1;
}
var p = function (e, r, n, i) {
  function s(e) {
    return e instanceof n ? e : new n(function (r) {
      r(e);
    });
  }
  return new (n || (n = Promise))(function (n, o) {
    function a(e) {
      try {
        d(i.next(e));
      } catch (e) {
        o(e);
      }
    }
    function h(e) {
      try {
        d(i.$$throw(e));
      } catch (e) {
        o(e);
      }
    }
    function d(e) {
      e.done ? n(e.value) : s(e.value).then(a, h);
    }
    d((i = i.apply(e, r || [])).next());
  });
};
export class Mutex {
  constructor(e) {
    this._semaphore = new Semaphore(1, e);
  }
  acquire() {
    return p(this, arguments, void 0, function* (e = 0) {
      let [, r] = yield this._semaphore.acquire(1, e);
      return r;
    });
  }
  runExclusive(e, r = 0) {
    return this._semaphore.runExclusive(() => e(), 1, r);
  }
  isLocked() {
    return this._semaphore.isLocked();
  }
  waitForUnlock(e = 0) {
    return this._semaphore.waitForUnlock(1, e);
  }
  release() {
    this._semaphore.isLocked() && this._semaphore.release();
  }
  cancel() {
    return this._semaphore.cancel();
  }
}
var m = function (e, r, n, i) {
  function s(e) {
    return e instanceof n ? e : new n(function (r) {
      r(e);
    });
  }
  return new (n || (n = Promise))(function (n, o) {
    function a(e) {
      try {
        d(i.next(e));
      } catch (e) {
        o(e);
      }
    }
    function h(e) {
      try {
        d(i.$$throw(e));
      } catch (e) {
        o(e);
      }
    }
    function d(e) {
      e.done ? n(e.value) : s(e.value).then(a, h);
    }
    d((i = i.apply(e, r || [])).next());
  });
};
export function withTimeout(e, r, n = E_TIMEOUT) {
  return {
    acquire: (i, s) => {
      let o;
      if (y(e) ? o = i : (o = void 0, s = i), void 0 !== o && o <= 0) throw Error(`invalid weight ${o}: must be positive`);
      return new Promise((i, a) => m(this, void 0, void 0, function* () {
        let h = !1;
        let d = setTimeout(() => {
          h = !0;
          a(n);
        }, r);
        try {
          let r = yield y(e) ? e.acquire(o, s) : e.acquire(s);
          h ? (Array.isArray(r) ? r[1] : r)() : (clearTimeout(d), i(r));
        } catch (e) {
          h || (clearTimeout(d), a(e));
        }
      }));
    },
    runExclusive(e, r, n) {
      return m(this, void 0, void 0, function* () {
        let i = () => void 0;
        try {
          let s = yield this.acquire(r, n);
          if (Array.isArray(s)) {
            i = s[1];
            return yield e(s[0]);
          }
          i = s;
          return yield e();
        } finally {
          i();
        }
      });
    },
    release(r) {
      e.release(r);
    },
    cancel: () => e.cancel(),
    waitForUnlock: (i, s) => {
      let o;
      if (y(e) ? o = i : (o = void 0, s = i), void 0 !== o && o <= 0) throw Error(`invalid weight ${o}: must be positive`);
      return new Promise((i, a) => {
        let h = setTimeout(() => a(n), r);
        (y(e) ? e.waitForUnlock(o, s) : e.waitForUnlock(s)).then(() => {
          clearTimeout(h);
          i();
        });
      });
    },
    isLocked: () => e.isLocked(),
    getValue: () => e.getValue(),
    setValue: r => e.setValue(r)
  };
}
function y(e) {
  return void 0 !== e.getValue;
}
export const eu = Mutex;
export const iu = E_TIMEOUT;
export const wj = withTimeout;
