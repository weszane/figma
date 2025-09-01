let i;
let s = -1;
let o = e => {
  addEventListener("pageshow", r => {
    r.persisted && (s = r.timeStamp, e(r));
  }, !0);
};
let a = (e, r, n, i) => {
  let s;
  let o;
  return a => {
    r.value >= 0 && (a || i) && ((o = r.value - (s ?? 0)) || void 0 === s) && (s = r.value, r.delta = o, r.rating = ((e, r) => e > r[1] ? "poor" : e > r[0] ? "needs-improvement" : "good")(r.value, n), e(r));
  };
};
let h = e => {
  requestAnimationFrame(() => requestAnimationFrame(() => e()));
};
let d = () => {
  let e = performance.getEntriesByType("navigation")[0];
  if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e;
};
let p = () => {
  let e = d();
  return e?.activationStart ?? 0;
};
let g = (e, r = -1) => {
  let n = d();
  let i = "navigate";
  s >= 0 ? i = "back-forward-cache" : n && (document.prerendering || p() > 0 ? i = "prerender" : document.wasDiscarded ? i = "restore" : n.type && (i = n.type.replace(/_/g, "-")));
  return {
    name: e,
    value: r,
    rating: "good",
    delta: 0,
    entries: [],
    id: `v5-${Date.now()}-${Math.floor(0x82f79cd8fff * Math.random()) + 1e12}`,
    navigationType: i
  };
};
let m = new WeakMap();
function v(e, r) {
  m.get(e) || m.set(e, new r());
  return m.get(e);
}
class y {
  t;
  i = 0;
  o = [];
  h(e) {
    if (e.hadRecentInput) return;
    let r = this.o[0];
    let n = this.o.at(-1);
    this.i && r && n && e.startTime - n.startTime < 1e3 && e.startTime - r.startTime < 5e3 ? (this.i += e.value, this.o.push(e)) : (this.i = e.value, this.o = [e]);
    this.t?.(e);
  }
}
let b = (e, r, n = {}) => {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(e)) {
      let i = new PerformanceObserver(e => {
        Promise.resolve().then(() => {
          r(e.getEntries());
        });
      });
      i.observe({
        type: e,
        buffered: !0,
        ...n
      });
      return i;
    }
  } catch {}
};
let O = e => {
  let r = !1;
  return () => {
    r || (e(), r = !0);
  };
};
let x = -1;
let w = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0;
let k = e => {
  "hidden" === document.visibilityState && x > -1 && (x = "visibilitychange" === e.type ? e.timeStamp : 0, S());
};
let _ = () => {
  addEventListener("visibilitychange", k, !0);
  addEventListener("prerenderingchange", k, !0);
};
let S = () => {
  removeEventListener("visibilitychange", k, !0);
  removeEventListener("prerenderingchange", k, !0);
};
let E = () => {
  if (x < 0) {
    let e = p();
    x = (document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter(r => "hidden" === r.name && r.startTime > e)[0]?.startTime) ?? w();
    _();
    o(() => {
      setTimeout(() => {
        x = w();
        _();
      });
    });
  }
  return {
    get firstHiddenTime() {
      return x;
    }
  };
};
let A = e => {
  document.prerendering ? addEventListener("prerenderingchange", () => e(), !0) : e();
};
let C = [1800, 3e3];
let $$T4 = (e, r = {}) => {
  A(() => {
    let n = E();
    let i;
    let s = g("FCP");
    let d = b("paint", e => {
      for (let r of e) "first-contentful-paint" === r.name && (d.disconnect(), r.startTime < n.firstHiddenTime && (s.value = Math.max(r.startTime - p(), 0), s.entries.push(r), i(!0)));
    });
    d && (i = a(e, s, C, r.reportAllChanges), o(n => {
      i = a(e, s = g("FCP"), C, r.reportAllChanges);
      h(() => {
        s.value = performance.now() - n.timeStamp;
        i(!0);
      });
    }));
  });
};
let I = [.1, .25];
let $$P1 = (e, r = {}) => {
  $$T4(O(() => {
    let n;
    let i = g("CLS", 0);
    let s = v(r, y);
    let d = e => {
      for (let r of e) s.h(r);
      s.i > i.value && (i.value = s.i, i.entries = s.o, n());
    };
    let p = b("layout-shift", d);
    p && (n = a(e, i, I, r.reportAllChanges), document.addEventListener("visibilitychange", () => {
      "hidden" === document.visibilityState && (d(p.takeRecords()), n(!0));
    }), o(() => {
      s.i = 0;
      n = a(e, i = g("CLS", 0), I, r.reportAllChanges);
      h(() => n());
    }), setTimeout(n));
  }));
};
let R = 0;
let M = 1 / 0;
let D = 0;
let N = e => {
  for (let r of e) r.interactionId && (M = Math.min(M, r.interactionId), R = (D = Math.max(D, r.interactionId)) ? (D - M) / 7 + 1 : 0);
};
let $ = () => i ? R : performance.interactionCount ?? 0;
let L = () => {
  "interactionCount" in performance || i || (i = b("event", N, {
    type: "event",
    buffered: !0,
    durationThreshold: 0
  }));
};
let j = 0;
class z {
  u = [];
  l = new Map();
  m;
  v;
  p() {
    j = $();
    this.u.length = 0;
    this.l.clear();
  }
  P() {
    let e = Math.min(this.u.length - 1, Math.floor(($() - j) / 50));
    return this.u[e];
  }
  h(e) {
    if (this.m?.(e), !e.interactionId && "first-input" !== e.entryType) return;
    let r = this.u.at(-1);
    let n = this.l.get(e.interactionId);
    if (n || this.u.length < 10 || e.duration > r.T) {
      if (n ? e.duration > n.T ? (n.entries = [e], n.T = e.duration) : e.duration === n.T && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = {
        id: e.interactionId,
        entries: [e],
        T: e.duration
      }, this.l.set(n.id, n), this.u.push(n)), this.u.sort((e, r) => r.T - e.T), this.u.length > 10) for (let e of this.u.splice(10)) this.l.$$delete(e.id);
      this.v?.(n);
    }
  }
}
let Z = e => {
  let r = globalThis.requestIdleCallback || setTimeout;
  "hidden" === document.visibilityState ? e() : (e = O(e), document.addEventListener("visibilitychange", e, {
    once: !0
  }), r(() => {
    e();
    document.removeEventListener("visibilitychange", e);
  }));
};
let F = [200, 500];
let $$U3 = (e, r = {}) => {
  globalThis.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype && A(() => {
    L();
    let n;
    let i = g("INP");
    let s = v(r, z);
    let h = e => {
      Z(() => {
        for (let r of e) s.h(r);
        let r = s.P();
        r && r.T !== i.value && (i.value = r.T, i.entries = r.entries, n());
      });
    };
    let d = b("event", h, {
      durationThreshold: r.durationThreshold ?? 40
    });
    n = a(e, i, F, r.reportAllChanges);
    d && (d.observe({
      type: "first-input",
      buffered: !0
    }), document.addEventListener("visibilitychange", () => {
      "hidden" === document.visibilityState && (h(d.takeRecords()), n(!0));
    }), o(() => {
      s.p();
      n = a(e, i = g("INP"), F, r.reportAllChanges);
    }));
  });
};
class Q {
  m;
  h(e) {
    this.m?.(e);
  }
}
let V = [2500, 4e3];
let $$B2 = (e, r = {}) => {
  A(() => {
    let n = E();
    let i;
    let s = g("LCP");
    let d = v(r, Q);
    let m = e => {
      for (let o of (r.reportAllChanges || (e = e.slice(-1)), e)) {
        d.h(o);
        o.startTime < n.firstHiddenTime && (s.value = Math.max(o.startTime - p(), 0), s.entries = [o], i());
      }
    };
    let y = b("largest-contentful-paint", m);
    if (y) {
      i = a(e, s, V, r.reportAllChanges);
      let n = O(() => {
        m(y.takeRecords());
        y.disconnect();
        i(!0);
      });
      for (let e of ["keydown", "click", "visibilitychange"]) addEventListener(e, () => Z(n), {
        capture: !0,
        once: !0
      });
      o(n => {
        i = a(e, s = g("LCP"), V, r.reportAllChanges);
        h(() => {
          s.value = performance.now() - n.timeStamp;
          i(!0);
        });
      });
    }
  });
};
let q = [800, 1800];
let W = e => {
  document.prerendering ? A(() => W(e)) : "complete" !== document.readyState ? addEventListener("load", () => W(e), !0) : setTimeout(e);
};
let $$Y0 = (e, r = {}) => {
  let n = g("TTFB");
  let i = a(e, n, q, r.reportAllChanges);
  W(() => {
    let s = d();
    s && (n.value = Math.max(s.responseStart - p(), 0), n.entries = [s], i(!0), o(() => {
      (i = a(e, n = g("TTFB", 0), q, r.reportAllChanges))(!0);
    }));
  });
};
export const Ck = $$Y0;
export const IN = $$P1;
export const fK = $$B2;
export const rH = $$U3;
export const zB = $$T4;