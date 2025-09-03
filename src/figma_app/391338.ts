import { useState, useRef, useEffect } from "react";
import { bN } from "../vendor/514228";
import { noop } from "../figma_app/465776";
import { D2E } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { DD, k9 } from "../905/19536";
import d from "../vendor/529640";
import { az } from "../905/449184";
import { Tf } from "../905/280919";
import { R as _$$R } from "../905/103090";
import { rw, I as _$$I } from "../905/485103";
import { Z } from "../905/515860";
import { R as _$$R2, A } from "../905/654645";
var c = d;
export function $$f2({
  oldValue: e,
  oldLatencyMs: t,
  newValue: r,
  newLatencyMs: n,
  contextArgs: i,
  label: a,
  debug: s = !1,
  enableFullRead: o = !1,
  enableShadowRead: l = !0,
  comparator: d = $$P8(),
  maxReports: c
}) {
  l && U() && !T(a, c) && I({
    label: a,
    discrepancies: d(e, r),
    oldLatencyMs: t,
    newLatencyMs: n,
    contextArgs: i,
    debug: s
  });
  return o ? r : e;
}
export function $$E5({
  comparisonConfig: e,
  ...t
}) {
  let r = $$k1({
    ...L,
    ...e
  });
  return $$f2({
    ...t,
    comparator: r
  });
}
function y(e) {
  return JSON.stringify(e, (e, t) => void 0 === t ? "undefined" : t);
}
let b = new Map();
function T(e, t) {
  if (void 0 === t) return !1;
  let r = b.get(e) ?? 0;
  return r >= t || (b.set(e, r + 1), !1);
}
function I({
  label: e,
  discrepancies: t,
  oldLatencyMs: r,
  newLatencyMs: n,
  contextArgs: i,
  debug: a
}) {
  a && (t.length > 0 ? console.log(`[Shadow read] '${e}' has discrepancies \u26A0\uFE0F`, t) : console.log(`[Shadow read] '${e}' has no discrepancies \u2705`));
  let s = {
    label: e,
    contextArgs: y(i ?? {}),
    datadogRUMSessionId: Tf.sessionId ? `https://go/dd/rum/sid/${Tf.sessionId}` : ""
  };
  if (t.length > 0) {
    let e = t.reduce((e, t) => "high" === t.severity ? "high" : e, "low");
    az.trackDefinedEvent("data_migrations.shadow_read_discrepancy", {
      ...s,
      discrepancy_maxSeverity: e
    });
  } else az.trackDefinedEvent("data_migrations.shadow_read_match", s);
  t.length > 0 && (t.sort((e, t) => e.severity === t.severity ? 0 : "high" === e.severity ? -1 : 1), t.slice(0, 10).forEach(e => {
    az.trackDefinedEvent("data_migrations.shadow_read_discrepancy_details", {
      ...s,
      discrepancy_path: e.path.join("."),
      discrepancy_oldValue: y(e.oldValue),
      discrepancy_newValue: y(e.newValue),
      discrepancy_severity: e.severity
    });
  }));
  void 0 !== r && az.trackDefinedEvent("data_migrations.shadow_read_latency_old_value", {
    ...s,
    latency_ms: r
  });
  void 0 !== n && az.trackDefinedEvent("data_migrations.shadow_read_latency_new_value", {
    ...s,
    latency_ms: n
  });
}
export function $$S9({
  oldValue: e,
  oldValueReady: t = !0,
  newValue: r,
  newValueReady: i = !0,
  label: a,
  contextArgs: s,
  withDefaultContextArgs: o = !0,
  enableFullRead: l = !1,
  enableShadowRead: d = !0,
  debug: c = !1,
  trackLatency: u = !0,
  timeoutMs: p,
  sampleRate__UNSTABLE: _ = 1,
  comparator: h = $$P8(),
  maxReports: m
}) {
  let g = O(o, s);
  let [E] = useState(() => h);
  let y = useRef(!1);
  let [b] = useState(() => Math.random() < _);
  let T = d && b;
  let I = u && T;
  $$w4({
    isReady: t,
    label: a,
    variant: "old",
    contextArgs: s,
    withDefaultContextArgs: o,
    timeoutMs: p,
    debug: c,
    enabled: I
  });
  $$w4({
    isReady: i,
    label: a,
    variant: "new",
    contextArgs: s,
    withDefaultContextArgs: o,
    timeoutMs: p,
    debug: c,
    enabled: I
  });
  useEffect(() => {
    !y.current && T && i && t && ($$f2({
      oldValue: e,
      newValue: r,
      label: a,
      contextArgs: g,
      comparator: E,
      debug: c,
      maxReports: m
    }), y.current = !0);
  }, [T, e, r, a, g, E, c, m, i, t]);
  return l ? r : e;
}
function v(e, t) {
  let {
    errors,
    ...n
  } = e;
  let {
    errors: _errors,
    ...s
  } = t;
  return bN(errors, _errors) && bN(n, s);
}
export function $$A3({
  oldValue: e,
  newValue: t,
  comparisonConfig: r,
  ...n
}) {
  let i = DD(() => e, [e], v);
  let a = DD(() => t, [t], v);
  let s = "loaded" === i.status;
  let o = "loaded" === a.status;
  let d = $$k1(r);
  $$S9({
    oldValue: i.data,
    oldValueReady: s,
    newValue: a.data,
    newValueReady: o,
    comparator: d,
    ...n
  });
  return n.enableFullRead ? a : i;
}
function x({
  label: e,
  variant: t,
  contextArgs: r,
  debug: n,
  duration: i
}, {
  backgrounded: a,
  offlined: s
}) {
  if (!U()) return;
  let o = a || s;
  n && console.log(`[Shadow read] [variant: ${t.toUpperCase()}] '${e}' took ${i}ms to be ready \u23F1 (was idle? ${o})`);
  az.trackDefinedEvent("old" === t ? "data_migrations.shadow_read_latency_old_value" : "data_migrations.shadow_read_latency_new_value", {
    label: e,
    latency_ms: i,
    idled: o,
    contextArgs: y(r ?? {}),
    datadogRUMSessionId: Tf.sessionId || ""
  });
}
function N({
  label: e,
  variant: t,
  contextArgs: r,
  debug: n,
  duration: i
}, {
  backgrounded: a,
  offlined: s
}) {
  if (!U()) return;
  let o = a || s;
  n && console.log(`[Shadow read] '${e}' has timed out after ${i}ms \u23F1 (was idle? ${o})`);
  az.trackDefinedEvent("old" === t ? "data_migrations.shadow_read_latency_old_value_timeout" : "data_migrations.shadow_read_latency_new_value_timeout", {
    label: e,
    idled: o,
    contextArgs: y(r ?? {}),
    datadogRUMSessionId: Tf.sessionId || ""
  });
}
export function $$C7({
  label: e,
  variant: t,
  contextArgs: r,
  timeoutMs: n = 1e4,
  debug: i = !1
}) {
  let a = new rw({
    onTimeout: (a, s) => {
      N({
        label: e,
        variant: t,
        contextArgs: r,
        debug: i,
        duration: n
      }, {
        backgrounded: a,
        offlined: s
      });
    },
    timeoutMs: n
  });
  return () => {
    a.stop((n, a, s) => {
      x({
        label: e,
        variant: t,
        contextArgs: r,
        debug: i,
        duration: n
      }, {
        backgrounded: a,
        offlined: s
      });
    }, {
      skipIfIdle: !1
    });
  };
}
export function $$w4({
  isReady: e,
  enabled: t = !0,
  label: r,
  variant: n,
  contextArgs: i,
  withDefaultContextArgs: a = !0,
  timeoutMs: s = 1e4,
  debug: o = !1
}) {
  let l = O(a, i);
  _$$I(e, (e, t, i) => {
    x({
      label: r,
      variant: n,
      contextArgs: l,
      debug: o,
      duration: e
    }, {
      backgrounded: t,
      offlined: i
    });
  }, {
    enabled: t,
    onTimeout: (e, t) => {
      N({
        label: r,
        variant: n,
        contextArgs: l,
        debug: o,
        duration: s
      }, {
        backgrounded: e,
        offlined: t
      });
    },
    timeoutMs: s
  });
}
function O(e, t) {
  if (useRef(e).current !== e) throw Error("useMemoizedContextArgs: withDefaultContextArgs cannot change during the lifetime of the hook!");
  let r = e ? _$$R(e => ({
    currentTeamId: e.currentTeamId,
    getTeamIdReturnValue: Z(e),
    currentOrgId: e.currentUserOrgId,
    currentUserId: e.user?.id ?? null,
    openFileKey: e.openFile?.key ?? null,
    selectedView: e.selectedView?.view ?? null
  })) : null;
  return k9(() => ({
    ...r,
    ...t
  }), [r, t]);
}
function R(e, t) {
  return "function" == typeof e ? e(t) : e;
}
let L = {
  ignore: !1,
  strictRecords: !0,
  strictLists: !0
};
export function $$P8(e) {
  let t = {
    ignore: !1
  };
  return (r, n) => D(r, n, [], {
    ...t,
    ...e
  });
}
function D(e, t, r, n) {
  if (R(n.ignore, r)) return [];
  if (Array.isArray(e) !== Array.isArray(t) || F(e) !== F(t)) return [{
    path: r,
    oldValue: e,
    newValue: t,
    severity: "high"
  }];
  let i = [];
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) {
      i.push({
        path: r,
        severity: "high",
        oldValue: e,
        newValue: t
      });
      return i;
    }
    for (let a = 0; a < e.length; a++) i.push(...D(e[a], t[a], [...r, String(a)], n));
  } else if (F(e) && F(t)) for (let a of function (e, t) {
    let r = {};
    for (let t in e) r[t] = !0;
    for (let e in t) r[e] = !0;
    return Object.keys(r);
  }(e, t)) {
    let s = r.concat(a);
    i.push(...D(e[a], t[a], s, n));
  } else i.push(...M(e, t, r));
  return i;
}
export function $$k1(e) {
  return (t, r) => function e(t, r, n, i) {
    if (R(i.ignore, n)) return [];
    let a = R(i.strictLists, n);
    if (Array.isArray(t) !== Array.isArray(r) || F(t) !== F(r)) return [{
      path: n,
      oldValue: t,
      newValue: r,
      severity: "high"
    }];
    let s = [];
    if (Array.isArray(t) && Array.isArray(r)) {
      if (t.every(j) && r.every(j)) s.push(...D(t, r, n, i));else {
        let o = (e, t = 0) => {
          if (!F(e)) return null;
          if ("id" in e) return ["id"];
          if ("key" in e) return ["key"];
          if (0 === t) for (let r in e) {
            let n = o(e[r], t + 1);
            if (n) return [r, ...n];
          }
          return null;
        };
        let l = e => {
          let t = new Map();
          for (let r of e) {
            let e = o(r);
            e && t.set(c()(r, e), r);
          }
          return t;
        };
        let d = l(t);
        let u = l(r);
        let p = !1;
        for (let [o, l] of (a && d.size !== u.size && (p = !0), 0 !== d.size || 0 !== u.size || 0 === t.length && 0 === r.length || s.push({
          path: n,
          oldValue: t,
          newValue: r,
          severity: "high"
        }), d)) {
          if (!u.has(o)) {
            a && (p = !0);
            continue;
          }
          s.push(...e(l, u.get(o), [...n, o], i));
        }
        p && s.push({
          path: n,
          severity: "high",
          oldValue: Array.from(d.keys()),
          newValue: Array.from(u.keys())
        });
      }
    } else if (F(t) && F(r)) for (let a in t) {
      let o = [...n, a];
      let l = R(i.strictRecords, o);
      (a in r || l) && s.push(...e(t[a], r[a], o, i));
    } else s.push(...M(t, r, n));
    return s;
  }(t, r, [], {
    ...L,
    ...e
  });
}
function M(e, t, r) {
  if (e === t || "function" == typeof e || "function" == typeof t) return [];
  let n = [null, void 0, !1];
  return n.includes(e) && n.includes(t) && e !== t ? [{
    path: r,
    oldValue: e,
    newValue: t,
    severity: "low"
  }] : typeof e != typeof t ? [{
    path: r,
    oldValue: e,
    newValue: t,
    severity: "high"
  }] : e instanceof Date && t instanceof Date ? Math.abs(e.getTime() - t.getTime()) >= 1e3 ? [{
    path: r,
    oldValue: e.toISOString(),
    newValue: t.toISOString(),
    severity: "high"
  }] : [] : e !== t ? [{
    path: r,
    oldValue: e,
    newValue: t,
    severity: "high"
  }] : [];
}
function F(e) {
  return "object" == typeof e && !Array.isArray(e) && null !== e && !(e instanceof Date);
}
function j(e) {
  return "object" != typeof e && "function" != typeof e;
}
function U() {
  return getFeatureFlags().use_shadow_read_reporting;
}
class B {
  reportDiscrepancies(e, t, r) {
    U() && (T(e, r.maxReports ?? void 0) || I({
      label: _$$R2(e),
      discrepancies: t.map(({
        severity: e,
        ...t
      }) => ({
        ...t,
        severity: function (e) {
          switch (e) {
            case D2E.HIGH:
              return "high";
            case D2E.LOW:
              return "low";
            default:
              noop(e);
              return "low";
          }
        }(e)
      })),
      oldLatencyMs: r.oldLatencyMs ?? void 0,
      newLatencyMs: r.newLatencyMs ?? void 0,
      contextArgs: r.contextArgs ?? void 0,
      debug: r.debug
    }));
  }
  compareAndReportDiscrepancies(e, t, r, n) {
    if (!U() || T(e, n.maxReports ?? void 0)) return;
    let i = $$P8()(t, r);
    I({
      label: _$$R2(e),
      discrepancies: i,
      oldLatencyMs: n.oldLatencyMs ?? void 0,
      newLatencyMs: n.newLatencyMs ?? void 0,
      contextArgs: n.contextArgs ?? void 0,
      debug: n.debug
    });
  }
}
export function $$G6() {
  new B();
}
export const A5 = A;
export const BG = $$k1;
export const HZ = $$f2;
export const MF = $$A3;
export const Vy = $$w4;
export const X7 = $$E5;
export const jV = $$G6;
export const kW = $$C7;
export const st = $$P8;
export const u8 = $$S9;