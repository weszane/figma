import { promisify } from "620008";
import _require2 from "289702";
import { global } from "../vendor/200448";
let r;
let i = global;
try {
  r = _require2;
} catch (e) {}
let A = function e(t) {
  let A;
  let o = function () {};
  let s = function () {
    return [];
  };
  let a = t.setTimeout(o, 0);
  let l = "object" == typeof a;
  let u = t.process && "function" == typeof t.process.hrtime;
  let g = u && "function" == typeof t.process.hrtime.bigint;
  let c = t.process && "function" == typeof t.process.nextTick;
  let f = t.process && promisify;
  let d = t.performance && "function" == typeof t.performance.now;
  let h = t.Performance && (typeof t.Performance).match(/^(function|object)$/);
  let p = t.performance && t.performance.constructor && t.performance.constructor.prototype;
  let C = t.hasOwnProperty("queueMicrotask");
  let I = t.requestAnimationFrame && "function" == typeof t.requestAnimationFrame;
  let E = t.cancelAnimationFrame && "function" == typeof t.cancelAnimationFrame;
  let B = t.requestIdleCallback && "function" == typeof t.requestIdleCallback;
  let m = t.cancelIdleCallback && "function" == typeof t.cancelIdleCallback;
  let y = t.setImmediate && "function" == typeof t.setImmediate;
  let _ = t.Intl && "object" == typeof t.Intl;
  t.clearTimeout(a);
  let Q = t.Date;
  let D = t.Intl;
  let w = 1e12;
  let b = !1;
  function v(e, t) {
    e.loopLimit && t === e.loopLimit - 1 && (b = !0);
  }
  function k(e) {
    let t;
    if (!e) return 0;
    let n = e.split(":");
    let r = n.length;
    let i = r;
    let A = 0;
    if (r > 3 || !/^(\d\d:){0,2}\d\d?$/.test(e)) throw Error("tick only understands numbers, 'm:s' and 'h:m:s'. Each part must be two digits");
    for (; i--;) {
      if ((t = parseInt(n[i], 10)) >= 60) throw Error(`Invalid time ${e}`);
      A += t * Math.pow(60, r - i - 1);
    }
    return 1e3 * A;
  }
  function x(e) {
    if (!e) return 0;
    if ("function" == typeof e.getTime) return e.getTime();
    if ("number" == typeof e) return e;
    throw TypeError("now should be milliseconds since UNIX epoch");
  }
  function S(e, t) {
    let n = Error(`Aborting after running ${e.loopLimit} timers, assuming an infinite loop!`);
    if (!t.error) return n;
    let r = /target\.*[<|(|[].*?[>|\]|)]\s*/;
    let i = new RegExp(String(Object.keys(e).join("|")));
    l && (i = RegExp(`\\s+at (Object\\.)?(?:${Object.keys(e).join("|")})\\s+`));
    let A = -1;
    t.error.stack.split("\n").some(function (e, t) {
      return e.match(r) ? (A = t, !0) : e.match(i) ? (A = t, !1) : A >= 0;
    });
    let o = `${n}
${t.type || "Microtask"} - ${t.func.name || "anonymous"}
${t.error.stack.split("\n").slice(A + 1).join("\n")}`;
    try {
      Object.defineProperty(n, "stack", {
        value: o
      });
    } catch (e) {}
    return n;
  }
  function F(e, t) {
    let n;
    for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    t.now ? e.now = function () {
      return e.clock.now;
    } : delete e.now;
    t.toSource ? e.toSource = function () {
      return t.toSource();
    } : delete e.toSource;
    e.toString = function () {
      return t.toString();
    };
    e.prototype = t.prototype;
    e.parse = t.parse;
    e.UTC = t.UTC;
    e.prototype.toUTCString = t.prototype.toUTCString;
    e.isFake = !0;
    return e;
  }
  function N(e) {
    if (e.jobs) {
      for (let t = 0; t < e.jobs.length; t++) {
        let n = e.jobs[t];
        if (n.func.apply(null, n.args), v(e, t), e.loopLimit && t > e.loopLimit) throw S(e, n);
      }
      b = !1;
      e.jobs = [];
    }
  }
  function T(e, t) {
    if (void 0 === t.func) throw Error("Callback must be provided to timer calls");
    if (l && "function" != typeof t.func) throw TypeError(`[ERR_INVALID_CALLBACK]: Callback must be a function. Received ${t.func} of type ${typeof t.func}`);
    if (b && (t.error = Error()), t.type = t.immediate ? "Immediate" : "Timeout", t.hasOwnProperty("delay")) {
      var n;
      "number" != typeof t.delay && (t.delay = parseInt(t.delay, 10));
      n = t.delay;
      (Number.isFinite ? Number.isFinite(n) : isFinite(n)) || (t.delay = 0);
      t.delay = t.delay > 0x7fffffff ? 1 : t.delay;
      t.delay = Math.max(0, t.delay);
    }
    if (t.hasOwnProperty("interval") && (t.type = "Interval", t.interval = t.interval > 0x7fffffff ? 1 : t.interval), t.hasOwnProperty("animation") && (t.type = "AnimationFrame", t.animation = !0), t.hasOwnProperty("idleCallback") && (t.type = "IdleCallback", t.idleCallback = !0), e.timers || (e.timers = {}), t.id = w++, t.createdAt = e.now, t.callAt = e.now + (parseInt(t.delay) || (e.duringTick ? 1 : 0)), e.timers[t.id] = t, l) {
      let n = {
        refed: !0,
        ref: function () {
          this.refed = !0;
          return n;
        },
        unref: function () {
          this.refed = !1;
          return n;
        },
        hasRef: function () {
          return this.refed;
        },
        refresh: function () {
          t.callAt = e.now + (parseInt(t.delay) || (e.duringTick ? 1 : 0));
          e.timers[t.id] = t;
          return n;
        },
        [Symbol.toPrimitive]: function () {
          return t.id;
        }
      };
      return n;
    }
    return t.id;
  }
  function L(e, t) {
    return e.callAt < t.callAt ? -1 : e.callAt > t.callAt ? 1 : e.immediate && !t.immediate ? -1 : !e.immediate && t.immediate ? 1 : e.createdAt < t.createdAt ? -1 : e.createdAt > t.createdAt ? 1 : e.id < t.id ? -1 : e.id > t.id ? 1 : void 0;
  }
  function R(e, t, n) {
    let r;
    let i = e.timers;
    let A = null;
    for (r in i) if (i.hasOwnProperty(r)) {
      var o;
      (o = i[r]) && o.callAt >= t && o.callAt <= n && (!A || 1 === L(A, i[r])) && (A = i[r]);
    }
    return A;
  }
  function M(e) {
    let t;
    let n = e.timers;
    let r = null;
    for (t in n) n.hasOwnProperty(t) && (!r || 1 === L(r, n[t])) && (r = n[t]);
    return r;
  }
  function O(e) {
    let t;
    let n = e.timers;
    let r = null;
    for (t in n) n.hasOwnProperty(t) && (!r || -1 === L(r, n[t])) && (r = n[t]);
    return r;
  }
  function G(e, t) {
    ("number" == typeof t.interval ? e.timers[t.id].callAt += t.interval : delete e.timers[t.id], "function" == typeof t.func) ? t.func.apply(null, t.args) : (0, eval)(t.func);
  }
  function P(e) {
    return "IdleCallback" === e || "AnimationFrame" === e ? `cancel${e}` : `clear${e}`;
  }
  A = 0;
  let U = function (e) {
    A++ || console.warn(e);
  };
  function q(e, t, n) {
    if (!t) return;
    e.timers || (e.timers = {});
    let r = Number(t);
    if (Number.isNaN(r) || r < 1e12) {
      let r = P(n);
      if (!0 === e.shouldClearNativeTimers) {
        let n = e[`_${r}`];
        return "function" == typeof n ? n(t) : void 0;
      }
      U(`FakeTimers: ${r} was invoked to clear a native timer instead of one created by this library.
To automatically clean-up native timers, use \`shouldClearNativeTimers\`.`);
    }
    if (e.timers.hasOwnProperty(r)) {
      let t = e.timers[r];
      if (t.type === n || "Timeout" === t.type && "Interval" === n || "Interval" === t.type && "Timeout" === n) delete e.timers[r];else {
        var i;
        let e = P(n);
        let r = "IdleCallback" === (i = t.type) || "AnimationFrame" === i ? `request${i}` : `set${i}`;
        throw Error(`Cannot clear timer: timer created with ${r}() but cleared with ${e}()`);
      }
    }
  }
  function J(e, t, n) {
    if (n[t].hadOwnProperty = Object.prototype.hasOwnProperty.call(e, t), n[`_${t}`] = e[t], "Date" === t) {
      let r = F(n[t], e[t]);
      e[t] = r;
    } else if ("Intl" === t) e[t] = n[t];else if ("performance" === t) {
      let r = Object.getOwnPropertyDescriptor(e, t);
      if (r && r.get && !r.set) {
        Object.defineProperty(n, `_${t}`, r);
        let i = Object.getOwnPropertyDescriptor(n, t);
        Object.defineProperty(e, t, i);
      } else e[t] = n[t];
    } else {
      e[t] = function () {
        return n[t].apply(n, arguments);
      };
      Object.defineProperties(e[t], Object.getOwnPropertyDescriptors(n[t]));
    }
    e[t].clock = n;
  }
  function z(e, t) {
    e.tick(t);
  }
  let H = {
    setTimeout: t.setTimeout,
    clearTimeout: t.clearTimeout,
    setInterval: t.setInterval,
    clearInterval: t.clearInterval,
    Date: t.Date
  };
  y && (H.setImmediate = t.setImmediate, H.clearImmediate = t.clearImmediate);
  u && (H.hrtime = t.process.hrtime);
  c && (H.nextTick = t.process.nextTick);
  d && (H.performance = t.performance);
  I && (H.requestAnimationFrame = t.requestAnimationFrame);
  C && (H.queueMicrotask = !0);
  E && (H.cancelAnimationFrame = t.cancelAnimationFrame);
  B && (H.requestIdleCallback = t.requestIdleCallback);
  m && (H.cancelIdleCallback = t.cancelIdleCallback);
  _ && (H.Intl = t.Intl);
  let K = t.setImmediate || t.setTimeout;
  function j(e, n) {
    e = Math.floor(x(e));
    n = n || 1e3;
    let r = 0;
    let i = [0, 0];
    if (void 0 === Q) throw Error("The global scope doesn't have a `Date` object (see https://github.com/sinonjs/sinon/issues/1852#issuecomment-419622780)");
    let A = {
      now: e,
      Date: F(function e(t, n, r, i, A, o, s) {
        if (!(this instanceof e)) return new Q(e.clock.now).toString();
        switch ($$arguments.length) {
          case 0:
            return new Q(e.clock.now);
          case 1:
            return new Q(t);
          case 2:
            return new Q(t, n);
          case 3:
            return new Q(t, n, r);
          case 4:
            return new Q(t, n, r, i);
          case 5:
            return new Q(t, n, r, i, A);
          case 6:
            return new Q(t, n, r, i, A, o);
          default:
            return new Q(t, n, r, i, A, o, s);
        }
      }, Q),
      loopLimit: n
    };
    function o() {
      return 16 - (A.now - e) % 16;
    }
    function s(t) {
      let n = A.now - i[0] - e;
      let o = Math.floor(n / 1e3);
      let s = (n - 1e3 * o) * 1e6 + r - i[1];
      if (Array.isArray(t)) {
        if (t[1] > 1e9) throw TypeError("Number of nanoseconds can't exceed a billion");
        let e = t[0];
        let n = s - t[1];
        let r = o - e;
        n < 0 && (n += 1e9, r -= 1);
        return [r, n];
      }
      return [o, s];
    }
    function a() {
      let e = s();
      return 1e3 * e[0] + e[1] / 1e6;
    }
    function l(e, t, n, i) {
      let o;
      let s;
      let a;
      let l;
      let u;
      let g;
      let c = "number" == typeof e ? e : k(e);
      let f = Math.floor(c);
      let d = function (e) {
        let t = 1e6 * e % 1e6;
        return Math.floor(t < 0 ? t + 1e6 : t);
      }(c);
      let h = r + d;
      let p = A.now + f;
      if (c < 0) throw TypeError("Negative ticks are not supported");
      h >= 1e6 && (p += 1, h -= 1e6);
      r = h;
      let C = A.now;
      let I = A.now;
      function E() {
        for (o = R(A, C, p); o && C <= p;) {
          if (A.timers[o.id]) {
            C = o.callAt;
            A.now = o.callAt;
            a = A.now;
            try {
              N(A);
              G(A, o);
            } catch (e) {
              s = s || e;
            }
            if (t) {
              K(l);
              return;
            }
            u();
          }
          g();
        }
        if (a = A.now, N(A), a !== A.now && (C += A.now - a, p += A.now - a), A.duringTick = !1, o = R(A, C, p)) try {
          A.tick(p - A.now);
        } catch (e) {
          s = s || e;
        } else {
          A.now = p;
          r = h;
        }
        if (s) throw s;
        if (!t) return A.now;
        n(A.now);
      }
      A.duringTick = !0;
      a = A.now;
      N(A);
      a !== A.now && (C += A.now - a, p += A.now - a);
      l = t && function () {
        try {
          u();
          g();
          E();
        } catch (e) {
          i(e);
        }
      };
      u = function () {
        a !== A.now && (C += A.now - a, p += A.now - a, I += A.now - a);
      };
      g = function () {
        o = R(A, I, p);
        I = C;
      };
      return E();
    }
    A.Date.clock = A;
    g && (s.bigint = function () {
      let e = s();
      return BigInt(e[0]) * BigInt(1e9) + BigInt(e[1]);
    });
    _ && (A.Intl = function () {
      let e = {};
      Object.getOwnPropertyNames(D).forEach(t => e[t] = D[t]);
      e.DateTimeFormat = function (...t) {
        let n = new D.DateTimeFormat(...t);
        let r = {};
        ["formatRange", "formatRangeToParts", "resolvedOptions"].forEach(e => {
          r[e] = n[e].bind(n);
        });
        ["format", "formatToParts"].forEach(t => {
          r[t] = function (r) {
            return n[t](r || e.clock.now);
          };
        });
        return r;
      };
      e.DateTimeFormat.prototype = Object.create(D.DateTimeFormat.prototype);
      e.DateTimeFormat.supportedLocalesOf = D.DateTimeFormat.supportedLocalesOf;
      return e;
    }(), A.Intl.clock = A);
    A.requestIdleCallback = function (e, t) {
      let n = 0;
      A.countTimers() > 0 && (n = 50);
      let r = T(A, {
        func: e,
        args: Array.prototype.slice.call(arguments, 2),
        delay: void 0 === t ? n : Math.min(t, n),
        idleCallback: !0
      });
      return Number(r);
    };
    A.cancelIdleCallback = function (e) {
      return q(A, e, "IdleCallback");
    };
    A.setTimeout = function (e, t) {
      return T(A, {
        func: e,
        args: Array.prototype.slice.call(arguments, 2),
        delay: t
      });
    };
    void 0 !== t.Promise && f && (A.setTimeout[f.custom] = function (e, n) {
      return new t.Promise(function (t) {
        T(A, {
          func: t,
          args: [n],
          delay: e
        });
      });
    });
    A.clearTimeout = function (e) {
      return q(A, e, "Timeout");
    };
    A.nextTick = function (e) {
      var t;
      t = {
        func: e,
        args: Array.prototype.slice.call(arguments, 1),
        error: b ? Error() : null
      };
      return void (A.jobs || (A.jobs = []), A.jobs.push(t));
    };
    A.queueMicrotask = function (e) {
      return A.nextTick(e);
    };
    A.setInterval = function (e, t) {
      t = parseInt(t, 10);
      return T(A, {
        func: e,
        args: Array.prototype.slice.call(arguments, 2),
        delay: t,
        interval: t
      });
    };
    A.clearInterval = function (e) {
      return q(A, e, "Interval");
    };
    y && (A.setImmediate = function (e) {
      return T(A, {
        func: e,
        args: Array.prototype.slice.call(arguments, 1),
        immediate: !0
      });
    }, void 0 !== t.Promise && f && (A.setImmediate[f.custom] = function (e) {
      return new t.Promise(function (t) {
        T(A, {
          func: t,
          args: [e],
          immediate: !0
        });
      });
    }), A.clearImmediate = function (e) {
      return q(A, e, "Immediate");
    });
    A.countTimers = function () {
      return Object.keys(A.timers || {}).length + (A.jobs || []).length;
    };
    A.requestAnimationFrame = function (e) {
      return Number(T(A, {
        func: e,
        delay: o(),
        get args() {
          return [a()];
        },
        animation: !0
      }));
    };
    A.cancelAnimationFrame = function (e) {
      return q(A, e, "AnimationFrame");
    };
    A.runMicrotasks = function () {
      N(A);
    };
    A.tick = function (e) {
      return l(e, !1);
    };
    void 0 !== t.Promise && (A.tickAsync = function (e) {
      return new t.Promise(function (t, n) {
        K(function () {
          try {
            l(e, !0, t, n);
          } catch (e) {
            n(e);
          }
        });
      });
    });
    A.next = function () {
      N(A);
      let e = M(A);
      if (!e) return A.now;
      A.duringTick = !0;
      try {
        A.now = e.callAt;
        G(A, e);
        N(A);
        return A.now;
      } finally {
        A.duringTick = !1;
      }
    };
    void 0 !== t.Promise && (A.nextAsync = function () {
      return new t.Promise(function (e, t) {
        K(function () {
          try {
            let n;
            let r = M(A);
            if (!r) {
              e(A.now);
              return;
            }
            A.duringTick = !0;
            A.now = r.callAt;
            try {
              G(A, r);
            } catch (e) {
              n = e;
            }
            A.duringTick = !1;
            K(function () {
              n ? t(n) : e(A.now);
            });
          } catch (e) {
            t(e);
          }
        });
      });
    });
    A.runAll = function () {
      let e;
      for (N(A), e = 0; e < A.loopLimit; e++) {
        if (!A.timers || 0 === Object.keys(A.timers).length) {
          b = !1;
          return A.now;
        }
        A.next();
        v(A, e);
      }
      let t = M(A);
      throw S(A, t);
    };
    A.runToFrame = function () {
      return A.tick(o());
    };
    void 0 !== t.Promise && (A.runAllAsync = function () {
      return new t.Promise(function (e, t) {
        let n = 0;
        !function r() {
          K(function () {
            try {
              let i;
              if (N(A), n < A.loopLimit) {
                if (!A.timers || (i = Object.keys(A.timers).length, 0 === i)) {
                  b = !1;
                  e(A.now);
                  return;
                }
                A.next();
                n++;
                r();
                v(A, n);
                return;
              }
              let o = M(A);
              t(S(A, o));
            } catch (e) {
              t(e);
            }
          });
        }();
      });
    });
    A.runToLast = function () {
      let e = O(A);
      return e ? A.tick(e.callAt - A.now) : (N(A), A.now);
    };
    void 0 !== t.Promise && (A.runToLastAsync = function () {
      return new t.Promise(function (e, t) {
        K(function () {
          try {
            let t = O(A);
            t || (N(A), e(A.now));
            e(A.tickAsync(t.callAt - A.now));
          } catch (e) {
            t(e);
          }
        });
      });
    });
    A.reset = function () {
      r = 0;
      A.timers = {};
      A.jobs = [];
      A.now = e;
    };
    A.setSystemTime = function (e) {
      let t;
      let n;
      let o = x(e);
      let s = o - A.now;
      for (t in i[0] = i[0] + s, i[1] = i[1] + r, A.now = o, r = 0, A.timers) A.timers.hasOwnProperty(t) && (n = A.timers[t], n.createdAt += s, n.callAt += s);
    };
    A.jump = function (e) {
      let t = Math.floor("number" == typeof e ? e : k(e));
      for (let e of Object.values(A.timers)) A.now + t > e.callAt && (e.callAt = A.now + t);
      A.tick(t);
    };
    d && (A.performance = Object.create(null), A.performance.now = a);
    u && (A.hrtime = s);
    return A;
  }
  return {
    timers: H,
    createClock: j,
    install: function (e) {
      let n;
      let A;
      if ($$arguments.length > 1 || e instanceof Date || Array.isArray(e) || "number" == typeof e) throw TypeError(`FakeTimers.install called with ${String(e)} install requires an object parameter`);
      if (!0 === t.Date.isFake) throw TypeError("Can't install fake timers twice on the same global object.");
      if ((e = void 0 !== e ? e : {}).shouldAdvanceTime = e.shouldAdvanceTime || !1, e.advanceTimeDelta = e.advanceTimeDelta || 20, e.shouldClearNativeTimers = e.shouldClearNativeTimers || !1, e.target) throw TypeError("config.target is no longer supported. Use `withGlobal(target)` instead.");
      let a = j(e.now, e.loopLimit);
      if (a.shouldClearNativeTimers = e.shouldClearNativeTimers, a.uninstall = function () {
        return function (e, n) {
          let i;
          let A;
          let o;
          for (A = 0, o = e.methods.length; A < o; A++) {
            if ("hrtime" === (i = e.methods[A]) && t.process) t.process.hrtime = e._hrtime;else if ("nextTick" === i && t.process) t.process.nextTick = e._nextTick;else if ("performance" === i) {
              let n = Object.getOwnPropertyDescriptor(e, `_${i}`);
              n && n.get && !n.set ? Object.defineProperty(t, i, n) : n.configurable && (t[i] = e[`_${i}`]);
            } else if (t[i] && t[i].hadOwnProperty) t[i] = e[`_${i}`];else try {
              delete t[i];
            } catch (e) {}
            if (void 0 !== e.timersModuleMethods) for (let t = 0; t < e.timersModuleMethods.length; t++) {
              let n = e.timersModuleMethods[t];
              r[n.methodName] = n.original;
            }
          }
          return (!0 === n.shouldAdvanceTime && t.clearInterval(e.attachedInterval), e.methods = [], e.timers) ? Object.keys(e.timers).map(function (t) {
            return e.timers[t];
          }) : [];
        }(a, e);
      }, a.methods = e.toFake || [], 0 === a.methods.length && (a.methods = Object.keys(H).filter(function (e) {
        return "nextTick" !== e && "queueMicrotask" !== e;
      })), !0 === e.shouldAdvanceTime) {
        let n = z.bind(null, a, e.advanceTimeDelta);
        let r = t.setInterval(n, e.advanceTimeDelta);
        a.attachedInterval = r;
      }
      if (a.methods.includes("performance")) {
        let n = p ? t.performance.constructor.prototype : h ? t.Performance.prototype : void 0;
        if (n) Object.getOwnPropertyNames(n).forEach(function (e) {
          "now" !== e && (a.performance[e] = 0 === e.indexOf("getEntries") ? s : o);
        });else if ((e.toFake || []).includes("performance")) throw ReferenceError("non-existent performance object cannot be faked");
      }
      for (t === i && r && (a.timersModuleMethods = []), n = 0, A = a.methods.length; n < A; n++) {
        let e = a.methods[n];
        if ("hrtime" === e ? t.process && "function" == typeof t.process.hrtime && J(t.process, e, a) : "nextTick" === e ? t.process && "function" == typeof t.process.nextTick && J(t.process, e, a) : J(t, e, a), void 0 !== a.timersModuleMethods && r[e]) {
          let n = r[e];
          a.timersModuleMethods.push({
            methodName: e,
            original: n
          });
          r[e] = t[e];
        }
      }
      return a;
    },
    withGlobal: e
  };
}(i);
A.timers;
A.createClock;
A.install;