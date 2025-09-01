import { c, F as _$$F } from "../vendor/902536";
import { WW, _m } from "../vendor/853364";
import { dm, um } from "../vendor/186187";
import { Q6, A2, Rr, a5 } from "../vendor/815544";
import { m as _$$m } from "../vendor/516122";
import { kg, Go } from "../vendor/103291";
import { uC, NR, Yn } from "../vendor/316592";
import { a as _$$a } from "../vendor/833496";
import { M8, vk, Zj, iW as _$$iW, OY, MA, $H, x3, nx as _$$nx, jR as _$$jR, $S, Gw, gs, FR, Oc, pu, TP } from "../vendor/929565";
import { Vy, xG, fH, JZ, bP } from "../vendor/780783";
import { O as _$$O } from "../vendor/380458";
import { q as _$$q, l } from "../vendor/476421";
import { RI, Rj, yG, LG } from "../vendor/839991";
import { P as _$$P } from "../vendor/748902";
import { $O, ug, XP } from "../vendor/459851";
import { d0, Y9, Ww } from "../vendor/345274";
import { wg, yb, vG, DJ } from "../vendor/73976";
import { n as _$$n, l as _$$l } from "../vendor/616758";
import { H as _$$H } from "../vendor/411725";
import { l2, AY, L2 } from "../vendor/922997";
import { Aq, sr as _$$sr, R9 } from "../vendor/20148";
import { y as _$$y } from "../vendor/314742";
import { fp, ic as _$$ic, Et, LI } from "../vendor/300749";
import { F2 } from "../vendor/704264";
import { WP, Uk } from "../vendor/82111";
import { NW, $A, TC, Ih, dV, Bb } from "../vendor/452342";
import { b } from "../vendor/712065";
import { y5, _T } from "../vendor/64215";
import { W as _$$W } from "../vendor/696534";
import { A as _$$A } from "../vendor/298009";
import { i as _$$i } from "../vendor/499591";
import { h as _$$h, T as _$$T } from "../vendor/324039";
import { As, bJ } from "../vendor/534521";
import { g as _$$g } from "../vendor/776770";
import { s as _$$s } from "../vendor/878996";
import { BB } from "../vendor/436633";
import { H as _$$H2 } from "../vendor/515350";
import { Z } from "../vendor/237237";
import { q as _$$q2 } from "../vendor/990937";
let i;
let s;
let $$o;
let a;
let h;
let d;
let p;
let g;
let m;
let v;
let y;
var $$b7;
let x = {
  GRANTED: "granted",
  NOT_GRANTED: "not-granted"
};
function w(e) {
  let r = new c();
  return {
    tryToInit(r) {
      e || (e = r);
    },
    update(n) {
      e = n;
      r.notify();
    },
    isGranted: () => e === x.GRANTED,
    observable: r
  };
}
function _() {
  let e = "";
  let r = 0;
  return {
    isAsync: !1,
    get isEmpty() {
      return !e;
    },
    write(n, i) {
      let s = WW(n);
      r += s;
      e += n;
      i && i(s);
    },
    finish(e) {
      e(this.finishSync());
    },
    finishSync() {
      let n = {
        output: e,
        outputBytesCount: r,
        rawBytesCount: r,
        pendingData: ""
      };
      e = "";
      r = 0;
      return n;
    },
    estimateEncodedBytesCount: e => e.length
  };
}
function R(e, r, n, i) {
  return dm((...s) => (i && Q6({
    feature: i
  }), e()[r][n](...s)));
}
let M = {
  userContext: "userContext",
  globalContext: "globalContext",
  accountContext: "accountContext"
};
let D = {
  getContext: "getContext",
  setContext: "setContext",
  setContextProperty: "setContextProperty",
  removeContextProperty: "removeContextProperty",
  clearContext: "clearContext"
};
function $(e, r) {
  r.silentMultipleInit || Vy.error(`${e} is already initialized.`);
}
let $$L6 = {
  ACTION: "action",
  ERROR: "error",
  LONG_TASK: "long_task",
  VIEW: "view",
  RESOURCE: "resource",
  VITAL: "vital"
};
let j = {
  LONG_TASK: "long-task",
  LONG_ANIMATION_FRAME: "long-animation-frame"
};
let z = {
  INITIAL_LOAD: "initial_load",
  ROUTE_CHANGE: "route_change",
  BF_CACHE: "bf_cache"
};
let $$Z0 = {
  CLICK: "click",
  CUSTOM: "custom"
};
let F = {
  RAGE_CLICK: "rage_click",
  ERROR_CLICK: "error_click",
  DEAD_CLICK: "dead_click"
};
let U = {
  DURATION: "duration"
};
function Q(e) {
  return e ? (parseInt(e, 10) ^ 16 * Math.random() >> parseInt(e, 10) / 4).toString(16) : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, Q);
}
let V = /([\w-]+)\s*=\s*([^;]+)/g;
function B(e, r) {
  for (V.lastIndex = 0; ;) {
    let n = V.exec(e);
    if (n) {
      if (n[1] === r) return n[2];
    } else break;
  }
}
function q(e) {
  let r = new Map();
  for (V.lastIndex = 0; ;) {
    let n = V.exec(e);
    if (n) r.set(n[1], n[2]); else break;
  }
  return r;
}
function W(e, r, n = "") {
  let i = e.charCodeAt(r - 1);
  let s = i >= 55296 && i <= 56319 ? r + 1 : r;
  return e.length <= s ? e : `${e.slice(0, s)}${n}`;
}
function Y() {
  return {
    vitalsByName: new Map(),
    vitalsByReference: new WeakMap()
  };
}
function G(e, r, n) {
  function i(e) {
    return !r.wasInPageStateDuringPeriod("frozen", e.startClocks.relative, e.duration);
  }
  function s(r) {
    i(r) && e.notify(12, J(r, !0));
  }
  return {
    addDurationVital: s,
    startDurationVital: (e, r = {}) => X(n, e, r),
    stopDurationVital: (e, r = {}) => {
      H(s, n, e, r);
    }
  };
}
function X({
  vitalsByName: e,
  vitalsByReference: r
}, n, i = {}) {
  let s = {
    name: n,
    startClocks: M8(),
    context: i.context,
    description: i.description
  };
  let o = {
    __dd_vital_reference: !0
  };
  e.set(n, s);
  r.set(o, s);
  return o;
}
function H(e, {
  vitalsByName: r,
  vitalsByReference: n
}, i, s = {}) {
  let o = "string" == typeof i ? r.get(i) : n.get(i);
  o && (e(K(o, o.startClocks, s, M8())), "string" == typeof i ? r.$$delete(i) : n.$$delete(i));
}
function K(e, r, n, i) {
  var s;
  return {
    name: e.name,
    type: U.DURATION,
    startClocks: r,
    duration: vk(r.timeStamp, i.timeStamp),
    context: kg(e.context, n.context),
    description: null !== (s = n.description) && void 0 !== s ? s : e.description
  };
}
function J(e, r) {
  let n = {
    date: e.startClocks.timeStamp,
    vital: {
      id: Q(),
      type: e.type,
      name: e.name,
      duration: Zj(e.duration),
      description: e.description
    },
    type: $$L6.VITAL
  };
  r && (n._dd = {
    vital: {
      computed_value: !0
    }
  });
  return {
    rawRumEvent: n,
    startTime: e.startClocks.relative,
    duration: e.duration,
    customerContext: e.context,
    domainContext: {}
  };
}
function ee(e, r, n) {
  if (e) for (let i of e) {
    let e = i[r];
    e && e(n);
  }
}
let $$ei = "_dd_c";
let es = [];
function eo(e, r, n, i) {
  let s = ea(n, i);
  es.push(_$$q(e, window, "storage", ({
    key: e
  }) => {
    s === e && a();
  }));
  r.changeObservable.subscribe(h);
  let o = kg(d(), r.getContext());
  function a() {
    r.setContext(d());
  }
  function h() {
    localStorage.setItem(s, JSON.stringify(r.getContext()));
  }
  function d() {
    let e = localStorage.getItem(s);
    return e ? JSON.parse(e) : {};
  }
  RI(o) || r.setContext(o);
}
function ea(e, r) {
  return `${$$ei}_${e}_${r}`;
}
function eu(e) {
  let r = "object" === _$$P(e);
  r || Vy.error("Unsupported context:", e);
  return r;
}
function ec(e, r, n) {
  let i = {
    ...e
  };
  for (let [e, {
    required: s,
    type: o
  }] of Object.entries(r)) {
    "string" !== o || eh(i[e]) || (i[e] = String(i[e]));
    s && eh(i[e]) && Vy.warn(`The property ${e} of ${n} is required; context will not be sent to the intake.`);
  }
  return i;
}
function eh(e) {
  return null == e || "" === e;
}
function ed(e = "", {
  propertiesConfig: r = {}
} = {}) {
  let n = {};
  let i = new c();
  let s = {
    getContext: () => Go(n),
    setContext: o => {
      eu(o) ? n = _$$a(ec(o, r, e)) : s.clearContext();
      i.notify();
    },
    setContextProperty: (s, o) => {
      n = _$$a(ec({
        ...n,
        [s]: o
      }, r, e));
      i.notify();
    },
    removeContextProperty: s => {
      delete n[s];
      ec(n, r, e);
      i.notify();
    },
    clearContext: () => {
      n = {};
      i.notify();
    },
    changeObservable: i
  };
  return s;
}
function ef(e, r, n, i) {
  let s = ep();
  r.storeContextsAcrossPages && eo(r, s, n, 2);
  e.register(0, () => {
    let e = s.getContext();
    return i ? {
      context: e
    } : e;
  });
  return s;
}
function ep() {
  return ed("global context");
}
function em(e, r, n, i) {
  let s = ev();
  r.storeContextsAcrossPages && eo(r, s, i, 1);
  e.register(0, ({
    eventType: e,
    startTime: i
  }) => {
    let o = s.getContext();
    let a = n.findTrackedSession(i);
    return (a && a.anonymousId && !o.anonymous_id && r.trackAnonymousUser && (o.anonymous_id = a.anonymousId), RI(o)) ? $O : {
      type: e,
      usr: o
    };
  });
  return s;
}
function ev() {
  return ed("user", {
    propertiesConfig: {
      id: {
        type: "string"
      },
      name: {
        type: "string"
      },
      email: {
        type: "string"
      }
    }
  });
}
function ey(e, r, n) {
  let i = eb();
  r.storeContextsAcrossPages && eo(r, i, n, 4);
  e.register(0, () => {
    let e = i.getContext();
    return RI(e) || !e.id ? $O : {
      account: e
    };
  });
  return i;
}
function eb() {
  return ed("account", {
    propertiesConfig: {
      id: {
        type: "string",
        required: !0
      },
      name: {
        type: "string"
      }
    }
  });
}
function eS() {
  i || (i = eE());
  return i;
}
function eE() {
  return new c(e => {
    if (!window.fetch) return;
    let {
      stop
    } = _$$H(window, "fetch", r => eA(r, e), {
      computeHandlingStack: !0
    });
    return stop;
  });
}
function eA({
  parameters: e,
  onPostCall: r,
  handlingStack: n
}, i) {
  let [s, o] = e;
  let a = o && o.method;
  void 0 === a && s instanceof Request && (a = s.method);
  let h = void 0 !== a ? String(a).toUpperCase() : "GET";
  let d = s instanceof Request ? s.url : l2(String(s));
  let p = {
    state: "start",
    init: o,
    input: s,
    method: h,
    startClocks: M8(),
    url: d,
    handlingStack: n
  };
  i.notify(p);
  e[0] = p.input;
  e[1] = p.init;
  r(e => eC(i, e, p));
}
function eC(e, r, n) {
  let i = n;
  function s(r) {
    i.state = "resolve";
    Object.assign(i, r);
    e.notify(i);
  }
  r.then(dm(e => {
    s({
      response: e,
      responseType: e.type,
      status: e.status,
      isAborted: !1
    });
  }), dm(e => {
    var r;
    var n;
    s({
      status: 0,
      isAborted: i.init?.signal?.aborted || e instanceof DOMException && e.code === DOMException.ABORT_ERR,
      error: e
    });
  }));
}
function eI(e, r, n = 0, i) {
  let s = new Date();
  s.setTime(s.getTime() + n);
  let o = `expires=${s.toUTCString()}`;
  let a = i && i.crossSite ? "none" : "strict";
  let h = i && i.domain ? `;domain=${i.domain}` : "";
  let d = i && i.secure ? ";secure" : "";
  let p = i && i.partitioned ? ";partitioned" : "";
  document.cookie = `${e}=${r};${o};path=/;samesite=${a}${h}${d}${p}`;
}
function eP(e) {
  return B(document.cookie, e);
}
function eR(e) {
  s || (s = q(document.cookie));
  return s.get(e);
}
function eM(e, r) {
  eI(e, "", 0, r);
}
function eD(e) {
  if (void 0 === document.cookie || null === document.cookie) return !1;
  try {
    let r = `dd_cookie_test_${Q()}`;
    let n = "test";
    eI(r, n, _$$iW, e);
    let i = eP(r) === n;
    eM(r, e);
    return i;
  } catch (e) {
    Vy.error(e);
    return !1;
  }
}
function eN() {
  if (void 0 === $$o) {
    let e = `dd_site_test_${Q()}`;
    let r = "test";
    let n = window.location.hostname.split(".");
    let i = n.pop();
    for (; n.length && !eP(e);) {
      i = `${n.pop()}.${i}`;
      eI(e, r, OY, {
        domain: i
      });
    }
    eM(e, {
      domain: i
    });
    $$o = i;
  }
  return $$o;
}
let e$ = "datadog-synthetics-public-id";
let eL = "datadog-synthetics-result-id";
let ej = "datadog-synthetics-injects-rum";
function ez() {
  return !!(window._DATADOG_SYNTHETICS_INJECTS_RUM || eR(ej));
}
function eZ() {
  let e = window._DATADOG_SYNTHETICS_PUBLIC_ID || eR(e$);
  return "string" == typeof e ? e : void 0;
}
function eF() {
  let e = window._DATADOG_SYNTHETICS_RESULT_ID || eR(eL);
  return "string" == typeof e ? e : void 0;
}
function eU() {
  return !!(eZ() && eF());
}
let eq = "_dd_s";
let eY = 4 * MA;
let eG = 15 * _$$iW;
let eX = $H;
let eH = "0";
let eK = {
  COOKIE: "cookie",
  LOCAL_STORAGE: "local-storage"
};
let eJ = /^([a-zA-Z]+)=([a-z0-9-]+)$/;
let e0 = "&";
function e1(e) {
  return !!e && (-1 !== e.indexOf(e0) || eJ.test(e));
}
let e2 = "1";
function e5(e, r) {
  let n = {
    isExpired: e2
  };
  r.trackAnonymousUser && (e?.anonymousId ? n.anonymousId = e?.anonymousId : n.anonymousId = Q());
  return n;
}
function e3(e) {
  return RI(e);
}
function e6(e) {
  return !e3(e);
}
function e4(e) {
  return void 0 !== e.isExpired || !e8(e);
}
function e8(e) {
  return (void 0 === e.created || x3() - Number(e.created) < eY) && (void 0 === e.expire || x3() < Number(e.expire));
}
function e7(e) {
  e.expire = String(x3() + eG);
}
function e9(e) {
  return WP(e).map(([e, r]) => "anonymousId" === e ? `aid=${r}` : `${e}=${r}`).join(e0);
}
function te(e) {
  let r = {};
  e1(e) && e.split(e0).forEach(e => {
    let n = eJ.exec(e);
    if (null !== n) {
      let [, e, i] = n;
      "aid" === e ? r.anonymousId = i : r[e] = i;
    }
  });
  return r;
}
let tt = "_dd";
let tr = "_dd_r";
let tn = "_dd_l";
let ti = "rum";
let ts = "logs";
function to(e) {
  if (!eR(eq)) {
    let r = eR(tt);
    let n = eR(tr);
    let i = eR(tn);
    let s = {};
    r && (s.id = r);
    i && /^[01]$/.test(i) && (s[ts] = i);
    n && /^[012]$/.test(n) && (s[ti] = n);
    e6(s) && (e7(s), e.persistSession(s));
  }
}
function ta(e) {
  let r = th(e);
  return eD(r) ? {
    type: eK.COOKIE,
    cookieOptions: r
  } : void 0;
}
function tl(e, r) {
  let n = {
    isLockEnabled: F2(),
    persistSession: n => tu(r, e, n, eG),
    retrieveSession: tc,
    expireSession: n => tu(r, e, e5(n, e), eY)
  };
  to(n);
  return n;
}
function tu(e, r, n, i) {
  eI(eq, e9(n), r.trackAnonymousUser ? eX : i, e);
}
function tc() {
  return te(eP(eq));
}
function th(e) {
  let r = {};
  r.secure = !!e.useSecureSessionCookie || !!e.usePartitionedCrossSiteSessionCookie;
  r.crossSite = !!e.usePartitionedCrossSiteSessionCookie;
  r.partitioned = !!e.usePartitionedCrossSiteSessionCookie;
  e.trackSessionAcrossSubdomains && (r.domain = eN());
  return r;
}
let td = "_dd_test_";
function tf() {
  try {
    let e = Q();
    let r = `${td}${e}`;
    localStorage.setItem(r, e);
    let n = localStorage.getItem(r);
    localStorage.removeItem(r);
    return e === n ? {
      type: eK.LOCAL_STORAGE
    } : void 0;
  } catch (e) {
    return;
  }
}
function tp(e) {
  return {
    isLockEnabled: !1,
    persistSession: tg,
    retrieveSession: tm,
    expireSession: r => tv(r, e)
  };
}
function tg(e) {
  localStorage.setItem(eq, e9(e));
}
function tm() {
  return te(localStorage.getItem(eq));
}
function tv(e, r) {
  tg(e5(e, r));
}
let ty = 10;
let tb = 100;
let tO = OY;
let tx = "--";
let tw = [];
function tk(e, r, n = 0) {
  var i;
  let s;
  let {
    isLockEnabled,
    persistSession,
    expireSession
  } = r;
  let p = e => persistSession({
    ...e,
    lock: s
  });
  let g = () => {
    let {
      lock,
      ...n
    } = r.retrieveSession();
    return {
      session: n,
      lock: lock && !tA(lock) ? lock : void 0
    };
  };
  if (a || (a = e), e !== a) {
    tw.push(e);
    return;
  }
  if (isLockEnabled && n >= tb) {
    A2("Aborted session operation after max lock retries", {
      currentStore: g()
    });
    tS(r);
    return;
  }
  let m = g();
  if (isLockEnabled && (m.lock || (s = tE(), p(m.session), (m = g()).lock !== s))) {
    t_(e, r, n);
    return;
  }
  let v = e.process(m.session);
  if (isLockEnabled && (m = g()).lock !== s) {
    t_(e, r, n);
    return;
  }
  if (v && (e4(v) ? expireSession(v) : (e7(v), isLockEnabled ? p(v) : persistSession(v))), isLockEnabled && !(v && e4(v))) {
    if ((m = g()).lock !== s) {
      t_(e, r, n);
      return;
    }
    persistSession(m.session);
    v = m.session;
  }
  e.after?.call(e, v || m.session);
  tS(r);
}
function t_(e, r, n) {
  wg(() => {
    tk(e, r, n + 1);
  }, ty);
}
function tS(e) {
  a = void 0;
  let r = tw.shift();
  r && tk(r, e);
}
function tE() {
  return Q() + tx + _$$nx();
}
function tA(e) {
  let [, r] = e.split(tx);
  return !r || vk(Number(r), _$$nx()) > tO;
}
let tC = OY;
function tT(e) {
  switch (e.sessionPersistence) {
    case eK.COOKIE:
      return ta(e);
    case eK.LOCAL_STORAGE:
      return tf();
    case void 0:
      {
        let r = ta(e);
        !r && e.allowFallbackToLocalStorage && (r = tf());
        return r;
      }
    default:
      Vy.error(`Invalid session persistence '${String(e.sessionPersistence)}'`);
  }
}
function tI(e, r, n, i) {
  let s;
  let o = new c();
  let a = new c();
  let h = new c();
  let d = e.type === eK.COOKIE ? tl(r, e.cookieOptions) : tp(r);
  let {
    expireSession
  } = d;
  let g = yb(y, tC);
  x();
  let {
    throttled,
    cancel
  } = _$$n(() => {
    tk({
      process: e => {
        if (e3(e)) return;
        let r = b(e);
        w(r);
        return r;
      },
      after: e => {
        e6(e) && !k() && E(e);
        s = e;
      }
    }, d);
  }, tC);
  function y() {
    tk({
      process: e => e4(e) ? e5(e, r) : void 0,
      after: b
    }, d);
  }
  function b(e) {
    e4(e) && (e = e5(e, r));
    k() && (_(e) ? S() : (h.notify({
      previousState: s,
      newState: e
    }), s = e));
    return e;
  }
  function x() {
    tk({
      process: e => {
        if (e3(e)) return e5(e, r);
      },
      after: e => {
        s = e;
      }
    }, d);
  }
  function w(e) {
    if (e3(e)) return !1;
    let r = i(e[n]);
    e[n] = r;
    delete e.isExpired;
    r === eH || e.id || (e.id = Q(), e.created = String(x3()));
  }
  function k() {
    return s?.[n] !== void 0;
  }
  function _(e) {
    return s.id !== e.id || s[n] !== e[n];
  }
  function S() {
    s = e5(s, r);
    a.notify();
  }
  function E(e) {
    s = e;
    o.notify();
  }
  return {
    expandOrRenewSession: throttled,
    expandSession: function() {
      tk({
        process: e => k() ? b(e) : void 0
      }, d);
    },
    getSession: () => s,
    renewObservable: o,
    expireObservable: a,
    sessionStateUpdateObservable: h,
    restartSession: x,
    expire: () => {
      cancel();
      expireSession(s);
      b(e5(s, r));
    },
    stop: () => {
      vG(g);
    },
    updateSessionState: function(e) {
      tk({
        process: r => ({
          ...r,
          ...e
        }),
        after: b
      }, d);
    }
  };
}
function tP(e) {
  let r = _$$P(e);
  return "string" === r || "function" === r || e instanceof RegExp;
}
function tR(e, r, n = !1) {
  return e.some(e => {
    try {
      if ("function" == typeof e) return e(r);
      if (e instanceof RegExp) return e.test(r);
      if ("string" == typeof e) return n ? r.startsWith(e) : e === r;
    } catch (e) {
      Vy.error(e);
    }
    return !1;
  });
}
let tM = ["chrome-extension://", "moz-extension://"];
function tD(e) {
  return tM.some(r => e.includes(r));
}
function tN(e, r = Error().stack) {
  return !tD(e) && tD(r || "");
}
let t$ = "Running the Browser SDK in a Web extension content script is discouraged and will be forbidden in a future major release unless the `allowedTrackingOrigins` option is provided.";
let tL = "SDK initialized on a non-allowed domain.";
function tj(e, r = "undefined" != typeof location ? location.origin : "", n) {
  let i = e.allowedTrackingOrigins;
  if (!i) {
    tN(r, n) && Vy.warn(t$);
    return !0;
  }
  let s = tR(i, r);
  s || Vy.error(tL);
  return s;
}
function tZ(e, r, n) {
  let i = tF(e, r);
  return {
    build: (s, o) => i(tQ(e, r, n, s, o)),
    tags: n,
    urlPrefix: i(""),
    trackType: r
  };
}
function tF(e, r) {
  let n = `/api/v2/${r}`;
  let i = e.proxy;
  if ("string" == typeof i) {
    let e = l2(i);
    return r => `${e}?ddforward=${encodeURIComponent(`${n}?${r}`)}`;
  }
  if ("function" == typeof i) return e => i({
    path: n,
    parameters: e
  });
  let s = tU(r, e);
  return e => `https://${s}${n}?${e}`;
}
function tU(e, r) {
  let {
    site = NW,
    internalAnalyticsSubdomain
  } = r;
  if ("logs" === e && r.usePciIntake && site === NW) return $A;
  if (internalAnalyticsSubdomain && site === NW) return `${internalAnalyticsSubdomain}.${NW}`;
  if (site === TC) return `http-intake.logs.${site}`;
  let s = site.split(".");
  let o = s.pop();
  return `browser-intake-${s.join("-")}.${o}`;
}
function tQ({
  clientToken: e,
  internalAnalyticsSubdomain: r
}, n, i, s, {
  retry: o,
  encoding: a
}) {
  let h = ["sdk_version:6.13.0", `api:${s}`].concat(i);
  o && h.push(`retry_count:${o.count}`, `retry_after:${o.lastFailureStatus}`);
  let d = ["ddsource=browser", `ddtags=${encodeURIComponent(h.join(","))}`, `dd-api-key=${e}`, `dd-evp-origin-version=${encodeURIComponent("6.13.0")}`, "dd-evp-origin=browser", `dd-request-id=${Q()}`];
  a && d.push(`dd-evp-encoding=${a}`);
  "rum" === n && d.push(`batch_time=${_$$nx()}`);
  r && d.reverse();
  return d.join("&");
}
let tV = 200;
function tB(e) {
  let {
    env,
    service,
    version,
    datacenter
  } = e;
  let o = [];
  env && o.push(tq("env", env));
  service && o.push(tq("service", service));
  version && o.push(tq("version", version));
  datacenter && o.push(tq("datacenter", datacenter));
  return o;
}
function tq(e, r) {
  let n = tV - e.length - 1;
  (r.length > n || tW(r)) && Vy.warn(`${e} value doesn't meet tag requirements and will be sanitized. ${xG} ${fH}/getting_started/tagging/#defining-tags`);
  let i = r.replace(/,/g, "_");
  return `${e}:${i}`;
}
function tW(e) {
  return !!tY() && RegExp("[^\\p{Ll}\\p{Lo}0-9_:./-]", "u").test(e);
}
function tY() {
  try {
    RegExp("[\\p{Ll}]", "u");
    return !0;
  } catch (e) {
    return !1;
  }
}
function tG(e) {
  let r = e.site || NW;
  let n = tB(e);
  let i = tX(e, n);
  return {
    replica: tH(e, n),
    site: r,
    ...i
  };
}
function tX(e, r) {
  return {
    logsEndpointBuilder: tZ(e, "logs", r),
    rumEndpointBuilder: tZ(e, "rum", r),
    profilingEndpointBuilder: tZ(e, "profile", r),
    sessionReplayEndpointBuilder: tZ(e, "replay", r)
  };
}
function tH(e, r) {
  if (!e.replica) return;
  let n = {
    ...e,
    site: NW,
    clientToken: e.replica.clientToken
  };
  let i = {
    logsEndpointBuilder: tZ(n, "logs", r),
    rumEndpointBuilder: tZ(n, "rum", r)
  };
  return {
    applicationId: e.replica.applicationId,
    ...i
  };
}
function tK(e) {
  return Ih.every(r => e.includes(r));
}
let tJ = {
  ALLOW: "allow",
  MASK: "mask",
  MASK_USER_INPUT: "mask-user-input"
};
let t0 = {
  ALL: "all",
  SAMPLED: "sampled"
};
function t1(e, r) {
  return null == e || "string" == typeof e || (Vy.error(`${r} must be defined as a string`), !1);
}
function t2(e) {
  return !e || "string" != typeof e || !!/(datadog|ddog|datad0g|dd0g)/.test(e) || (Vy.error(`Site should be a valid Datadog site. ${xG} ${fH}/getting_started/site/.`), !1);
}
function t5(e, r) {
  return !!(void 0 === e || fp(e)) || (Vy.error(`${r} Sample Rate should be a number between 0 and 100`), !1);
}
function t3(e) {
  var r;
  var n;
  var i;
  var s;
  var o;
  var a;
  if (!e || !e.clientToken) {
    Vy.error("Client Token is not configured, we will not send any data.");
    return;
  }
  if (void 0 !== e.allowedTrackingOrigins && !Array.isArray(e.allowedTrackingOrigins)) {
    Vy.error("Allowed Tracking Origins must be an array");
    return;
  }
  if (t2(e.site) && t5(e.sessionSampleRate, "Session") && t5(e.telemetrySampleRate, "Telemetry") && t5(e.telemetryConfigurationSampleRate, "Telemetry Configuration") && t5(e.telemetryUsageSampleRate, "Telemetry Usage") && t1(e.version, "Version") && t1(e.env, "Env") && t1(e.service, "Service") && tj(e)) {
    if (void 0 !== e.trackingConsent && !Rj(x, e.trackingConsent)) {
      Vy.error('Tracking Consent should be either "granted" or "not-granted"');
      return;
    }
    return {
      beforeSend: e.beforeSend && _$$y(e.beforeSend, "beforeSend threw an error:"),
      sessionStoreStrategyType: tT(e),
      sessionSampleRate: null !== (r = e.sessionSampleRate) && void 0 !== r ? r : 100,
      telemetrySampleRate: null !== (n = e.telemetrySampleRate) && void 0 !== n ? n : 20,
      telemetryConfigurationSampleRate: null !== (i = e.telemetryConfigurationSampleRate) && void 0 !== i ? i : 5,
      telemetryUsageSampleRate: null !== (s = e.telemetryUsageSampleRate) && void 0 !== s ? s : 5,
      service: e.service || void 0,
      silentMultipleInit: !!e.silentMultipleInit,
      allowUntrustedEvents: !!e.allowUntrustedEvents,
      trackingConsent: null !== (o = e.trackingConsent) && void 0 !== o ? o : x.GRANTED,
      trackAnonymousUser: e.trackAnonymousUser || a,
      storeContextsAcrossPages: !!e.storeContextsAcrossPages,
      batchBytesLimit: 16 * _m,
      eventRateLimiterThreshold: 3e3,
      maxTelemetryEventsPerPage: 15,
      flushTimeout: 30 * OY,
      batchMessagesLimit: 50,
      messageBytesLimit: 256 * _m,
      ...tG(e)
    };
  }
}
function t6(e) {
  return {
    session_sample_rate: e.sessionSampleRate,
    telemetry_sample_rate: e.telemetrySampleRate,
    telemetry_configuration_sample_rate: e.telemetryConfigurationSampleRate,
    telemetry_usage_sample_rate: e.telemetryUsageSampleRate,
    use_before_send: !!e.beforeSend,
    use_partitioned_cross_site_session_cookie: e.usePartitionedCrossSiteSessionCookie,
    use_secure_session_cookie: e.useSecureSessionCookie,
    use_proxy: !!e.proxy,
    silent_multiple_init: e.silentMultipleInit,
    track_session_across_subdomains: e.trackSessionAcrossSubdomains,
    track_anonymous_user: e.trackAnonymousUser,
    session_persistence: e.sessionPersistence,
    allow_fallback_to_local_storage: !!e.allowFallbackToLocalStorage,
    store_contexts_across_pages: !!e.storeContextsAcrossPages,
    allow_untrusted_events: !!e.allowUntrustedEvents,
    tracking_consent: e.trackingConsent,
    use_allowed_tracking_origins: Array.isArray(e.allowedTrackingOrigins)
  };
}
let t4 = new Map();
export function $$t823(e, r) {
  let n;
  if (100 === r) return !0;
  if (0 === r) return !1;
  let i = t4.get(r);
  return i && e === i.sessionId ? i.decision : (n = window.BigInt ? t7(BigInt(`0x${e.split("-")[4]}`), r) : _$$ic(r), t4.set(r, {
    sessionId: e,
    decision: n
  }), n);
}
function t7(e, r) {
  let n = BigInt("1111111111111111111");
  let i = BigInt("0x10000000000000000");
  return Number(e * n % i) <= r / 100 * Number(i);
}
function t9() {
  return rt(64);
}
function re() {
  return rt(63);
}
function rt(e) {
  let r = crypto.getRandomValues(new Uint32Array(2));
  63 === e && (r[r.length - 1] >>>= 1);
  return {
    toString(e = 10) {
      let n = r[1];
      let i = r[0];
      let s = "";
      do {
        let r = n % e * 0x100000000 + i;
        n = Math.floor(n / e);
        i = Math.floor(r / e);
        s = (r % e).toString(e) + s;
      } while (n || i);
      return s;
    }
  };
}
function rr(e) {
  return e.toString(16).padStart(16, "0");
}
function rn(e) {
  let r = e;
  return "object" === _$$P(r) && tP(r.match) && Array.isArray(r.propagatorTypes);
}
function ri(e) {
  0 !== e.status || e.isAborted || (e.traceId = void 0, e.spanId = void 0, e.traceSampled = void 0);
}
function rs(e, r, n, i) {
  return {
    clearTracingIfNeeded: ri,
    traceFetch: s => ro(e, s, r, n, i, e => {
      var r;
      if (s.input instanceof Request && !s.init?.headers) {
        s.input = new Request(s.input);
        Object.keys(e).forEach(r => {
          s.input.headers.append(r, e[r]);
        });
      } else {
        s.init = yG(s.init);
        let r = [];
        s.init.headers instanceof Headers ? s.init.headers.forEach((e, n) => {
          r.push([n, e]);
        }) : Array.isArray(s.init.headers) ? s.init.headers.forEach(e => {
          r.push(e);
        }) : s.init.headers && Object.keys(s.init.headers).forEach(e => {
          r.push([e, s.init.headers[e]]);
        });
        s.init.headers = r.concat(WP(e));
      }
    }),
    traceXhr: (s, o) => ro(e, s, r, n, i, e => {
      Object.keys(e).forEach(r => {
        o.setRequestHeader(r, e[r]);
      });
    })
  };
}
function ro(e, r, n, i, s, o) {
  let a = n.findTrackedSession();
  if (!a) return;
  let h = e.allowedTracingUrls.find(e => tR([e.match], r.url, !0));
  if (!h) return;
  let d = $$t823(a.id, e.traceSampleRate);
  (d || e.traceContextInjection === t0.ALL) && (r.traceSampled = d, r.traceId = t9(), r.spanId = re(), o(ra(r.traceId, r.spanId, r.traceSampled, a.id, h.propagatorTypes, i, s, e)));
}
function ra(e, r, n, i, s, o, a, h) {
  let d = {};
  if (s.forEach(i => {
    switch (i) {
      case "datadog":
        Object.assign(d, {
          "x-datadog-origin": "rum",
          "x-datadog-parent-id": r.toString(),
          "x-datadog-sampling-priority": n ? "1" : "0",
          "x-datadog-trace-id": e.toString()
        });
        break;
      case "tracecontext":
        Object.assign(d, {
          traceparent: `00-0000000000000000${rr(e)}-${rr(r)}-0${n ? "1" : "0"}`,
          tracestate: `dd=s:${n ? "1" : "0"};o:rum`
        });
        break;
      case "b3":
        Object.assign(d, {
          b3: `${rr(e)}-${rr(r)}-${n ? "1" : "0"}`
        });
        break;
      case "b3multi":
        Object.assign(d, {
          "X-B3-TraceId": rr(e),
          "X-B3-SpanId": rr(r),
          "X-B3-Sampled": n ? "1" : "0"
        });
    }
  }), h.propagateTraceBaggage) {
    let e = {
      "session.id": i
    };
    let r = o.getContext().id;
    "string" == typeof r && (e["user.id"] = r);
    let n = a.getContext().id;
    "string" == typeof n && (e["account.id"] = n);
    let s = Object.entries(e).map(([e, r]) => `${e}=${encodeURIComponent(r)}`).join(",");
    s && (d.baggage = s);
  }
  return d;
}
let rl = ["tracecontext", "datadog"];
function ru(e) {
  var r;
  var n;
  var i;
  var s;
  var o;
  var a;
  var h;
  if (void 0 === e.trackFeatureFlagsForEvents || Array.isArray(e.trackFeatureFlagsForEvents) || Vy.warn("trackFeatureFlagsForEvents should be an array"), !e.applicationId) {
    Vy.error("Application ID is not configured, no RUM data will be collected.");
    return;
  }
  if (!t5(e.sessionReplaySampleRate, "Session Replay") || !t5(e.traceSampleRate, "Trace")) return;
  if (void 0 !== e.excludedActivityUrls && !Array.isArray(e.excludedActivityUrls)) {
    Vy.error("Excluded Activity Urls should be an array");
    return;
  }
  let d = rc(e);
  if (!d) return;
  let p = t3(e);
  if (!p) return;
  let g = null !== (r = e.sessionReplaySampleRate) && void 0 !== r ? r : 0;
  return {
    applicationId: e.applicationId,
    version: e.version || void 0,
    actionNameAttribute: e.actionNameAttribute,
    sessionReplaySampleRate: g,
    startSessionReplayRecordingManually: void 0 !== e.startSessionReplayRecordingManually ? !!e.startSessionReplayRecordingManually : 0 === g,
    traceSampleRate: null !== (n = e.traceSampleRate) && void 0 !== n ? n : 100,
    rulePsr: Et(e.traceSampleRate) ? e.traceSampleRate / 100 : void 0,
    allowedTracingUrls: d,
    excludedActivityUrls: null !== (i = e.excludedActivityUrls) && void 0 !== i ? i : [],
    workerUrl: e.workerUrl,
    compressIntakeRequests: !!e.compressIntakeRequests,
    trackUserInteractions: !!(e.trackUserInteractions || s),
    trackViewsManually: !!e.trackViewsManually,
    trackResources: !!(e.trackResources || o),
    trackLongTasks: !!(e.trackLongTasks || a),
    trackBfcacheViews: !!e.trackBfcacheViews,
    subdomain: e.subdomain,
    defaultPrivacyLevel: Rj(tJ, e.defaultPrivacyLevel) ? e.defaultPrivacyLevel : tJ.MASK,
    enablePrivacyForActionName: !!e.enablePrivacyForActionName,
    customerDataTelemetrySampleRate: 1,
    traceContextInjection: Rj(t0, e.traceContextInjection) ? e.traceContextInjection : t0.SAMPLED,
    plugins: e.plugins || [],
    trackFeatureFlagsForEvents: e.trackFeatureFlagsForEvents || [],
    profilingSampleRate: null !== (h = e.profilingSampleRate) && void 0 !== h ? h : 0,
    propagateTraceBaggage: !!e.propagateTraceBaggage,
    ...p
  };
}
function rc(e) {
  if (void 0 === e.allowedTracingUrls) return [];
  if (!Array.isArray(e.allowedTracingUrls)) {
    Vy.error("Allowed Tracing URLs should be an array");
    return;
  }
  if (0 !== e.allowedTracingUrls.length && void 0 === e.service) {
    Vy.error("Service needs to be configured when tracing is enabled");
    return;
  }
  let r = [];
  e.allowedTracingUrls.forEach(e => {
    tP(e) ? r.push({
      match: e,
      propagatorTypes: rl
    }) : rn(e) ? r.push(e) : Vy.warn("Allowed Tracing Urls parameters should be a string, RegExp, function, or an object. Ignoring parameter", e);
  });
  return r;
}
function rh(e) {
  let r = new Set();
  Array.isArray(e.allowedTracingUrls) && e.allowedTracingUrls.length > 0 && e.allowedTracingUrls.forEach(e => {
    tP(e) ? rl.forEach(e => r.add(e)) : "object" === _$$P(e) && Array.isArray(e.propagatorTypes) && e.propagatorTypes.forEach(e => r.add(e));
  });
  return Array.from(r);
}
function rd(e) {
  var r;
  let n = t6(e);
  return {
    session_replay_sample_rate: e.sessionReplaySampleRate,
    start_session_replay_recording_manually: e.startSessionReplayRecordingManually,
    trace_sample_rate: e.traceSampleRate,
    trace_context_injection: e.traceContextInjection,
    action_name_attribute: e.actionNameAttribute,
    use_allowed_tracing_urls: Array.isArray(e.allowedTracingUrls) && e.allowedTracingUrls.length > 0,
    selected_tracing_propagators: rh(e),
    default_privacy_level: e.defaultPrivacyLevel,
    enable_privacy_for_action_name: e.enablePrivacyForActionName,
    use_excluded_activity_urls: Array.isArray(e.excludedActivityUrls) && e.excludedActivityUrls.length > 0,
    use_worker_url: !!e.workerUrl,
    compress_intake_requests: e.compressIntakeRequests,
    track_views_manually: e.trackViewsManually,
    track_user_interactions: e.trackUserInteractions,
    track_resources: e.trackResources,
    track_long_task: e.trackLongTasks,
    track_bfcache_views: e.trackBfcacheViews,
    plugins: e.plugins?.map(e => {
      var r;
      return {
        name: e.name,
        ...e.getConfigurationTelemetry?.call(e)
      };
    }),
    track_feature_flags_for_events: e.trackFeatureFlagsForEvents,
    ...n
  };
}
let $$rf = "v1";
function rp(e, r) {
  rm(e, n => {
    r(rg(e, n));
  });
}
function rg(e, r) {
  return {
    ...e,
    ...r
  };
}
function rm(e, r) {
  let n = new XMLHttpRequest();
  _$$q(e, n, "load", function() {
    200 === n.status ? r(JSON.parse(n.responseText).rum) : ry();
  });
  _$$q(e, n, "error", function() {
    ry();
  });
  n.open("GET", rv(e));
  n.send();
}
function rv(e) {
  return `https://sdk-configuration.${tU("rum", e)}/${$$rf}/${encodeURIComponent(e.remoteConfigurationId)}.json`;
}
function ry() {
  Vy.error("Error fetching the remote configuration.");
}
function rb({
  ignoreInitIfSyntheticsWillInjectRum: e = !0,
  startDeflateWorker: r
}, n, i, s) {
  let o;
  let a;
  let h;
  let d;
  let p = _$$O();
  let g = ep();
  rx(g, M.globalContext, p);
  let m = ev();
  rx(m, M.userContext, p);
  let v = eb();
  rx(v, M.accountContext, p);
  let y = n.observable.subscribe(O);
  let b = {};
  function O() {
    let e;
    if (!h || !d || !n.isGranted()) return;
    if (y.unsubscribe(), d.trackViewsManually) {
      if (!o) return;
      p.remove(o.callback);
      e = o.options;
    }
    let r = s(d, a, e);
    p.drain(r);
  }
  function x(e) {
    let i = d0();
    if (i && (e = rO(e)), h = e, wg(() => {
      Rr(rd(e));
    }), d) {
      $("DD_RUM", e);
      return;
    }
    let s = ru(e);
    if (s) {
      if (!i && !s.sessionStoreStrategyType) {
        Vy.warn("No storage available for session. We will not send any data.");
        return;
      }
      (!s.compressIntakeRequests || i || !r || (a = r(s, "Datadog RUM", _$$l))) && (d = s, eS().subscribe(_$$l), n.tryToInit(s.trackingConsent), O());
    }
  }
  let w = e => {
    p.add(r => r.addDurationVital(e));
  };
  return {
    init(r, n) {
      if (!r) {
        Vy.error("Missing configuration");
        return;
      }
      Aq(r.enableExperimentalFeatures);
      h = r;
      e && ez() || (ee(r.plugins, "onInit", {
        initConfiguration: r,
        publicApi: n
      }), r.remoteConfigurationId ? rp(r, x) : x(r));
    },
    get initConfiguration() {
      return h;
    },
    getInternalContext: _$$l,
    stopSession: _$$l,
    addTiming(e, r = _$$nx()) {
      p.add(n => n.addTiming(e, r));
    },
    startView(e, r = M8()) {
      let n = n => {
        n.startView(e, r);
      };
      p.add(n);
      o || (o = {
        options: e,
        callback: n
      }, O());
    },
    setViewName(e) {
      p.add(r => r.setViewName(e));
    },
    setViewContext(e) {
      p.add(r => r.setViewContext(e));
    },
    setViewContextProperty(e, r) {
      p.add(n => n.setViewContextProperty(e, r));
    },
    getViewContext: () => b,
    globalContext: g,
    userContext: m,
    accountContext: v,
    addAction(e) {
      p.add(r => r.addAction(e));
    },
    addError(e) {
      p.add(r => r.addError(e));
    },
    addFeatureFlagEvaluation(e, r) {
      p.add(n => n.addFeatureFlagEvaluation(e, r));
    },
    startDurationVital: (e, r) => X(i, e, r),
    stopDurationVital(e, r) {
      H(w, i, e, r);
    },
    addDurationVital: w
  };
}
function rO(e) {
  var r;
  var n;
  return {
    ...e,
    applicationId: "00000000-aaaa-0000-aaaa-000000000000",
    clientToken: "empty",
    sessionSampleRate: 100,
    defaultPrivacyLevel: null !== (r = e.defaultPrivacyLevel) && void 0 !== r ? r : Y9()?.getPrivacyLevel()
  };
}
function rx(e, r, n) {
  e.changeObservable.subscribe(() => {
    let i = e.getContext();
    n.add(e => e[r].setContext(i));
  });
}
export function $$rw24(e, r, n, i = {}) {
  let s = w();
  let o = Y();
  let a = rb(i, s, o, (h, d, p) => {
    let g = e(h, r, n, p, d && i.createDeflateEncoder ? e => i.createDeflateEncoder(h, d, e) : _, s, o, i.sdkName);
    r.onRumStart(g.lifeCycle, h, g.session, g.viewHistory, d);
    n.onRumStart(g.lifeCycle, g.hooks, h, g.session, g.viewHistory);
    a = rk(a, g);
    ee(h.plugins, "onRumStart", {
      strategy: a,
      addEvent: g.addEvent
    });
    return g;
  });
  let h = () => a;
  let d = dm(e => {
    let r = "object" == typeof e ? e : {
      name: e
    };
    a.startView(r);
    Q6({
      feature: "start-view"
    });
  });
  let p = _$$m({
    init: dm(e => {
      a.init(e, p);
    }),
    setTrackingConsent: dm(e => {
      s.update(e);
      Q6({
        feature: "set-tracking-consent",
        tracking_consent: e
      });
    }),
    setViewName: dm(e => {
      a.setViewName(e);
      Q6({
        feature: "set-view-name"
      });
    }),
    setViewContext: dm(e => {
      a.setViewContext(e);
      Q6({
        feature: "set-view-context"
      });
    }),
    setViewContextProperty: dm((e, r) => {
      a.setViewContextProperty(e, r);
      Q6({
        feature: "set-view-context-property"
      });
    }),
    getViewContext: dm(() => (Q6({
      feature: "set-view-context-property"
    }), a.getViewContext())),
    getInternalContext: dm(e => a.getInternalContext(e)),
    getInitConfiguration: dm(() => Go(a.initConfiguration)),
    addAction: (e, r) => {
      let n = uC("action");
      um(() => {
        a.addAction({
          name: _$$a(e),
          context: _$$a(r),
          startClocks: M8(),
          type: $$Z0.CUSTOM,
          handlingStack: n
        });
        Q6({
          feature: "add-action"
        });
      });
    },
    addError: (e, r) => {
      let n = uC("error");
      um(() => {
        a.addError({
          error: e,
          handlingStack: n,
          context: _$$a(r),
          startClocks: M8()
        });
        Q6({
          feature: "add-error"
        });
      });
    },
    addTiming: dm((e, r) => {
      a.addTiming(_$$a(e), r);
    }),
    setGlobalContext: R(h, M.globalContext, D.setContext, "set-global-context"),
    getGlobalContext: R(h, M.globalContext, D.getContext, "get-global-context"),
    setGlobalContextProperty: R(h, M.globalContext, D.setContextProperty, "set-global-context-property"),
    removeGlobalContextProperty: R(h, M.globalContext, D.removeContextProperty, "remove-global-context-property"),
    clearGlobalContext: R(h, M.globalContext, D.clearContext, "clear-global-context"),
    setUser: R(h, M.userContext, D.setContext, "set-user"),
    getUser: R(h, M.userContext, D.getContext, "get-user"),
    setUserProperty: R(h, M.userContext, D.setContextProperty, "set-user-property"),
    removeUserProperty: R(h, M.userContext, D.removeContextProperty, "remove-user-property"),
    clearUser: R(h, M.userContext, D.clearContext, "clear-user"),
    setAccount: R(h, M.accountContext, D.setContext, "set-account"),
    getAccount: R(h, M.accountContext, D.getContext, "get-account"),
    setAccountProperty: R(h, M.accountContext, D.setContextProperty, "set-account-property"),
    removeAccountProperty: R(h, M.accountContext, D.removeContextProperty, "remove-account-property"),
    clearAccount: R(h, M.accountContext, D.clearContext, "clear-account"),
    startView: d,
    stopSession: dm(() => {
      a.stopSession();
      Q6({
        feature: "stop-session"
      });
    }),
    addFeatureFlagEvaluation: dm((e, r) => {
      a.addFeatureFlagEvaluation(_$$a(e), _$$a(r));
      Q6({
        feature: "add-feature-flag-evaluation"
      });
    }),
    getSessionReplayLink: dm(() => r.getSessionReplayLink()),
    startSessionReplayRecording: dm(e => {
      r.start(e);
      Q6({
        feature: "start-session-replay-recording",
        force: e && e.force
      });
    }),
    stopSessionReplayRecording: dm(() => r.stop()),
    addDurationVital: dm((e, r) => {
      Q6({
        feature: "add-duration-vital"
      });
      a.addDurationVital({
        name: _$$a(e),
        type: U.DURATION,
        startClocks: _$$jR(r.startTime),
        duration: r.duration,
        context: _$$a(r && r.context),
        description: _$$a(r && r.description)
      });
    }),
    startDurationVital: dm((e, r) => (Q6({
      feature: "start-duration-vital"
    }), a.startDurationVital(_$$a(e), {
      context: _$$a(r && r.context),
      description: _$$a(r && r.description)
    }))),
    stopDurationVital: dm((e, r) => {
      Q6({
        feature: "stop-duration-vital"
      });
      a.stopDurationVital("string" == typeof e ? _$$a(e) : e, {
        context: _$$a(r && r.context),
        description: _$$a(r && r.description)
      });
    })
  });
  return p;
}
function rk(e, r) {
  return {
    init: e => {
      $("DD_RUM", e);
    },
    initConfiguration: e.initConfiguration,
    ...r
  };
}
function rA() {
  let e = $$rC10();
  return new c(r => {
    if (!e) return;
    let n = new e(dm(e => r.notify(e)));
    n.observe(document, {
      attributes: !0,
      characterData: !0,
      childList: !0,
      subtree: !0
    });
    return () => n.disconnect();
  });
}
export function $$rC10() {
  let e;
  let r = window;
  if (r.Zone && (e = _$$W(r, "MutationObserver"), r.MutationObserver && e === r.MutationObserver)) {
    let n = new r.MutationObserver(_$$l);
    let i = _$$W(n, "originalInstance");
    e = i && i.constructor;
  }
  e || (e = r.MutationObserver);
  return e;
}
function rT() {
  let e = new c();
  let {
    stop
  } = _$$H(window, "open", () => e.notify());
  return {
    observable: e,
    stop
  };
}
function rI(e, r, n, i, s) {
  return {
    get: o => {
      let a = n.findView(o);
      let h = s.findUrl(o);
      let d = r.findTrackedSession(o);
      if (d && a && h) {
        let r = i.findActionId(o);
        return {
          application_id: e,
          session_id: d.id,
          user_action: r ? {
            id: r
          } : void 0,
          view: {
            id: a.id,
            name: a.name,
            referrer: h.referrer,
            url: h.url
          }
        };
      }
    }
  };
}
class rP {
  constructor() {
    this.callbacks = {};
  }
  notify(e, r) {
    let n = this.callbacks[e];
    n && n.forEach(e => e(r));
  }
  subscribe(e, r) {
    this.callbacks[e] || (this.callbacks[e] = []);
    this.callbacks[e].push(r);
    return {
      unsubscribe: () => {
        this.callbacks[e] = this.callbacks[e].filter(e => r !== e);
      }
    };
  }
}
let rR = rP;
let rD = 1 / 0;
let rN = _$$iW;
let r$ = null;
let rL = new Set();
function rj() {
  rL.forEach(e => e());
}
function rz({
  expireDelay: e,
  maxEntries: r
}) {
  let n = [];
  r$ || (r$ = yb(() => rj(), rN));
  let i = () => {
    let r = $S() - e;
    for (; n.length > 0 && n[n.length - 1].endTime < r;) n.pop();
  };
  rL.add(i);
  return {
    add: function(e, i) {
      let s = {
        value: e,
        startTime: i,
        endTime: rD,
        remove: () => {
          _$$A(n, s);
        },
        close: e => {
          s.endTime = e;
        }
      };
      r && n.length >= r && n.pop();
      n.unshift(s);
      return s;
    },
    find: function(e = rD, r = {
      returnInactive: !1
    }) {
      for (let i of n) if (i.startTime <= e) {
        if (r.returnInactive || e <= i.endTime) return i.value;
        break;
      }
    },
    closeActive: function(e) {
      let r = n[0];
      r && r.endTime === rD && r.close(e);
    },
    findAll: function(e = rD, r = 0) {
      let i = Gw(e, r);
      return n.filter(r => r.startTime <= i && e <= r.endTime).map(e => e.value);
    },
    reset: function() {
      n = [];
    },
    stop: function() {
      rL.$$delete(i);
      0 === rL.size && r$ && (vG(r$), r$ = null);
    }
  };
}
let rZ = eY;
function rF(e) {
  let r = rz({
    expireDelay: rZ
  });
  function n(e) {
    return {
      service: e.service,
      version: e.version,
      context: e.context,
      id: e.id,
      name: e.name,
      startClocks: e.startClocks
    };
  }
  e.subscribe(1, e => {
    r.add(n(e), e.startClocks.relative);
  });
  e.subscribe(6, ({
    endClocks: e
  }) => {
    r.closeActive(e.relative);
  });
  e.subscribe(3, e => {
    let n = r.find(e.startClocks.relative);
    n && (e.name && (n.name = e.name), e.context && (n.context = e.context), n.sessionIsActive = e.sessionIsActive);
  });
  e.subscribe(10, () => {
    r.reset();
  });
  return {
    findView: e => r.find(e),
    stop: () => {
      r.stop();
    }
  };
}
let rU = new WeakMap();
function rQ(e) {
  h || (h = rV(e));
  return h;
}
function rV(e) {
  return new c(r => {
    let {
      stop
    } = _$$H(XMLHttpRequest.prototype, "open", rB);
    let {
      stop: _stop
    } = _$$H(XMLHttpRequest.prototype, "send", n => {
      rq(n, e, r);
    }, {
      computeHandlingStack: !0
    });
    let {
      stop: _stop2
    } = _$$H(XMLHttpRequest.prototype, "abort", rW);
    return () => {
      stop();
      _stop();
      _stop2();
    };
  });
}
function rB({
  target: e,
  parameters: [r, n]
}) {
  rU.set(e, {
    state: "open",
    method: String(r).toUpperCase(),
    url: l2(String(n))
  });
}
function rq({
  target: e,
  handlingStack: r
}, n, i) {
  let s = rU.get(e);
  if (!s) return;
  let o = s;
  o.state = "start";
  o.startClocks = M8();
  o.isAborted = !1;
  o.xhr = e;
  o.handlingStack = r;
  let a = !1;
  let {
    stop
  } = _$$H(e, "onreadystatechange", () => {
    e.readyState === XMLHttpRequest.DONE && d();
  });
  let d = () => {
    if (_stop3(), stop(), a) return;
    a = !0;
    let r = s;
    r.state = "complete";
    r.duration = vk(o.startClocks.timeStamp, _$$nx());
    r.status = e.status;
    i.notify(yG(r));
  };
  let {
    stop: _stop3
  } = _$$q(n, e, "loadend", d);
  i.notify(o);
}
function rW({
  target: e
}) {
  let r = rU.get(e);
  r && (r.isAborted = !0);
}
let rY = {
  DOCUMENT: "document",
  XHR: "xhr",
  BEACON: "beacon",
  FETCH: "fetch",
  CSS: "css",
  JS: "js",
  IMAGE: "image",
  FONT: "font",
  MEDIA: "media",
  OTHER: "other"
};
let rG = {
  FETCH: rY.FETCH,
  XHR: rY.XHR
};
function rH(e, r, n) {
  let i = e.getReader();
  let s = [];
  let o = 0;
  function a() {
    i.read().then(dm(e => {
      if (e.done) {
        h();
        return;
      }
      n.collectStreamBody && s.push(e.value);
      (o += e.value.length) > n.bytesLimit ? h() : a();
    }), dm(e => r(e)));
  }
  function h() {
    let e;
    let a;
    if (i.cancel().catch(_$$l), n.collectStreamBody) {
      let r;
      if (1 === s.length) r = s[0]; else {
        r = new Uint8Array(o);
        let e = 0;
        s.forEach(n => {
          r.set(n, e);
          e += n.length;
        });
      }
      e = r.slice(0, n.bytesLimit);
      a = r.length > n.bytesLimit;
    }
    r(void 0, e, a);
  }
  a();
}
let rK = "initial_document";
let $$rJ = [[rY.DOCUMENT, e => rK === e], [rY.XHR, e => "xmlhttprequest" === e], [rY.FETCH, e => "fetch" === e], [rY.BEACON, e => "beacon" === e], [rY.CSS, (e, r) => /\.css$/i.test(r)], [rY.JS, (e, r) => /\.js$/i.test(r)], [rY.IMAGE, (e, r) => ["image", "img", "icon"].includes(e) || null !== /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(r)], [rY.FONT, (e, r) => null !== /\.(woff|eot|woff2|ttf)$/i.exec(r)], [rY.MEDIA, (e, r) => ["audio", "video"].includes(e) || null !== /\.(mp3|mp4)$/i.exec(r)]];
function r0(e) {
  let r = e.name;
  if (!AY(r)) {
    A2(`Failed to construct URL for "${e.name}"`);
    return rY.OTHER;
  }
  let n = L2(r);
  for (let [r, i] of $$rJ) if (i(e.initiatorType, n)) return r;
  return rY.OTHER;
}
function r1(...e) {
  for (let r = 1; r < e.length; r += 1) if (e[r - 1] > e[r]) return !1;
  return !0;
}
function r2(e) {
  return "xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType;
}
function r5(e) {
  let {
    duration,
    startTime,
    responseEnd
  } = e;
  return 0 === duration && startTime < responseEnd ? vk(startTime, responseEnd) : duration;
}
function r3(e) {
  if (!r4(e)) return;
  let {
    startTime,
    fetchStart,
    workerStart,
    redirectStart,
    redirectEnd,
    domainLookupStart,
    domainLookupEnd,
    connectStart,
    secureConnectionStart,
    connectEnd,
    requestStart,
    responseStart,
    responseEnd
  } = e;
  let b = {
    download: r7(startTime, responseStart, responseEnd),
    first_byte: r7(startTime, requestStart, responseStart)
  };
  0 < workerStart && workerStart < fetchStart && (b.worker = r7(startTime, workerStart, fetchStart));
  fetchStart < connectEnd && (b.connect = r7(startTime, connectStart, connectEnd), connectStart <= secureConnectionStart && secureConnectionStart <= connectEnd && (b.ssl = r7(startTime, secureConnectionStart, connectEnd)));
  fetchStart < domainLookupEnd && (b.dns = r7(startTime, domainLookupStart, domainLookupEnd));
  startTime < redirectEnd && (b.redirect = r7(startTime, redirectStart, redirectEnd));
  return b;
}
function r6(e) {
  return e.duration >= 0;
}
function r4(e) {
  let r = r1(e.startTime, e.fetchStart, e.domainLookupStart, e.domainLookupEnd, e.connectStart, e.connectEnd, e.requestStart, e.responseStart, e.responseEnd);
  let n = !r8(e) || r1(e.startTime, e.redirectStart, e.redirectEnd, e.fetchStart);
  return r && n;
}
function r8(e) {
  return e.redirectEnd > e.startTime;
}
function r7(e, r, n) {
  if (e <= r && r <= n) return {
    duration: Zj(vk(r, n)),
    start: Zj(vk(e, r))
  };
}
function r9(e) {
  return "" === e.nextHopProtocol ? void 0 : e.nextHopProtocol;
}
function ne(e) {
  return "" === e.deliveryType ? "other" : e.deliveryType;
}
function nt(e) {
  if (e.startTime < e.responseStart) {
    let {
      encodedBodySize,
      decodedBodySize,
      transferSize
    } = e;
    return {
      size: decodedBodySize,
      encoded_body_size: encodedBodySize,
      decoded_body_size: decodedBodySize,
      transfer_size: transferSize
    };
  }
  return {
    size: void 0,
    encoded_body_size: void 0,
    decoded_body_size: void 0,
    transfer_size: void 0
  };
}
function nr(e) {
  return e && (!tK(e) || _$$sr(R9.TRACK_INTAKE_REQUESTS));
}
let nn = /data:(.+)?(;base64)?,/g;
let ni = 24e3;
export function $$ns26(e, r = ni) {
  if (e.length <= r || !e.startsWith("data:")) return e;
  let n = e.substring(0, 100).match(nn);
  return n ? `${n[0]}[...]` : e;
}
let no = 1;
function na(e, r, n, i, s) {
  let o = rs(r, n, i, s);
  nl(e, r, o);
  nu(e, o);
}
function nl(e, r, n) {
  let i = rQ(r).subscribe(r => {
    let i = r;
    if (nr(i.url)) switch (i.state) {
      case "start":
        n.traceXhr(i, i.xhr);
        i.requestIndex = nc();
        e.notify(7, {
          requestIndex: i.requestIndex,
          url: i.url
        });
        break;
      case "complete":
        n.clearTracingIfNeeded(i);
        e.notify(8, {
          duration: i.duration,
          method: i.method,
          requestIndex: i.requestIndex,
          spanId: i.spanId,
          startClocks: i.startClocks,
          status: i.status,
          traceId: i.traceId,
          traceSampled: i.traceSampled,
          type: rG.XHR,
          url: i.url,
          xhr: i.xhr,
          isAborted: i.isAborted,
          handlingStack: i.handlingStack
        });
    }
  });
  return {
    stop: () => i.unsubscribe()
  };
}
function nu(e, r) {
  let n = eS().subscribe(n => {
    let i = n;
    if (nr(i.url)) switch (i.state) {
      case "start":
        r.traceFetch(i);
        i.requestIndex = nc();
        e.notify(7, {
          requestIndex: i.requestIndex,
          url: i.url
        });
        break;
      case "resolve":
        nh(i, n => {
          r.clearTracingIfNeeded(i);
          e.notify(8, {
            duration: n,
            method: i.method,
            requestIndex: i.requestIndex,
            responseType: i.responseType,
            spanId: i.spanId,
            startClocks: i.startClocks,
            status: i.status,
            traceId: i.traceId,
            traceSampled: i.traceSampled,
            type: rG.FETCH,
            url: i.url,
            response: i.response,
            init: i.init,
            input: i.input,
            isAborted: i.isAborted,
            handlingStack: i.handlingStack
          });
        });
    }
  });
  return {
    stop: () => n.unsubscribe()
  };
}
function nc() {
  let e = no;
  no += 1;
  return e;
}
function nh(e, r) {
  let n = e.response && _$$i(e.response);
  n && n.body ? rH(n.body, () => {
    r(vk(e.startClocks.timeStamp, _$$nx()));
  }, {
    bytesLimit: Number.POSITIVE_INFINITY,
    collectStreamBody: !1
  }) : r(vk(e.startClocks.timeStamp, _$$nx()));
}
function nd(e) {
  return Et(e) && e < 0 ? void 0 : e;
}
function nf({
  lifeCycle: e,
  isChildEvent: r,
  onChange: n = _$$l
}) {
  let i = {
    errorCount: 0,
    longTaskCount: 0,
    resourceCount: 0,
    actionCount: 0,
    frustrationCount: 0
  };
  let s = e.subscribe(13, e => {
    var s;
    if ("view" !== e.type && "vital" !== e.type && r(e)) switch (e.type) {
      case $$L6.ERROR:
        i.errorCount += 1;
        n();
        break;
      case $$L6.ACTION:
        i.actionCount += 1;
        e.action.frustration && (i.frustrationCount += e.action.frustration.type.length);
        n();
        break;
      case $$L6.LONG_TASK:
        i.longTaskCount += 1;
        n();
        break;
      case $$L6.RESOURCE:
        e._dd?.discarded || (i.resourceCount += 1, n());
    }
  });
  return {
    stop: () => {
      s.unsubscribe();
    },
    eventCounts: i
  };
}
function np(e, r) {
  let n = x3();
  let i = !1;
  let {
    stop
  } = l(e, window, ["click", "mousedown", "keydown", "touchstart", "pointerdown"], r => {
    if (!r.cancelable) return;
    let n = {
      entryType: "first-input",
      processingStart: $S(),
      processingEnd: $S(),
      startTime: r.timeStamp,
      duration: 0,
      name: "",
      cancelable: !1,
      target: null,
      toJSON: () => ({})
    };
    "pointerdown" === r.type ? o(e, n) : a(n);
  }, {
    passive: !0,
    capture: !0
  });
  return {
    stop
  };
  function o(e, r) {
    l(e, window, ["pointerup", "pointercancel"], e => {
      "pointerup" === e.type && a(r);
    }, {
      once: !0
    });
  }
  function a(e) {
    if (!i) {
      i = !0;
      stop();
      let o = e.processingStart - e.startTime;
      o >= 0 && o < x3() - n && r(e);
    }
  }
}
function ng(e, r) {
  return new c(n => {
    let i;
    let s;
    if (!window.PerformanceObserver) return;
    let o = e => {
      let r = nb(e);
      r.length > 0 && n.notify(r);
    };
    let a = !0;
    let h = new PerformanceObserver(dm(e => {
      a ? i = wg(() => o(e.getEntries())) : o(e.getEntries());
    }));
    try {
      h.observe(r);
    } catch (e) {
      if ([$$b7.RESOURCE, $$b7.NAVIGATION, $$b7.LONG_TASK, $$b7.PAINT].includes(r.type)) {
        r.buffered && (i = wg(() => o(performance.getEntriesByType(r.type))));
        try {
          h.observe({
            entryTypes: [r.type]
          });
        } catch (e) {
          return;
        }
      }
    }
    a = !1;
    nm(e);
    $$ny29($$b7.FIRST_INPUT) || r.type !== $$b7.FIRST_INPUT || ({
      stop: s
    } = np(e, e => {
      o([e]);
    }));
    return () => {
      h.disconnect();
      s && s();
      DJ(i);
    };
  });
}
function nm(e) {
  !d && nv() && "addEventListener" in performance && (d = _$$q(e, performance, "resourcetimingbufferfull", () => {
    performance.clearResourceTimings();
  }));
  return () => {
    d?.stop();
  };
}
function nv() {
  return void 0 !== window.performance && "getEntries" in performance;
}
export function $$ny29(e) {
  return window.PerformanceObserver && void 0 !== PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes(e);
}
function nb(e) {
  return e.filter(e => !nO(e));
}
function nO(e) {
  return e.entryType === $$b7.RESOURCE && (!nr(e.name) || !r6(e));
}
function nx(e) {
  return e.nodeType === Node.TEXT_NODE;
}
function nw(e) {
  return e.nodeType === Node.COMMENT_NODE;
}
function nk(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
export function $$n_21(e) {
  return nk(e) && !!e.shadowRoot;
}
export function $$nS22(e) {
  let r = e;
  return !!r.host && r.nodeType === Node.DOCUMENT_FRAGMENT_NODE && nk(r.host);
}
export function $$nE19(e) {
  return e.childNodes.length > 0 || $$n_21(e);
}
export function $$nA9(e, r) {
  let n = e.firstChild;
  for (; n;) {
    r(n);
    n = n.nextSibling;
  }
  $$n_21(e) && r(e.shadowRoot);
}
export function $$nC13(e) {
  return $$nS22(e) ? e.host : e.parentNode;
}
!function(e) {
  e.EVENT = "event";
  e.FIRST_INPUT = "first-input";
  e.LARGEST_CONTENTFUL_PAINT = "largest-contentful-paint";
  e.LAYOUT_SHIFT = "layout-shift";
  e.LONG_TASK = "longtask";
  e.LONG_ANIMATION_FRAME = "long-animation-frame";
  e.NAVIGATION = "navigation";
  e.PAINT = "paint";
  e.RESOURCE = "resource";
  e.VISIBILITY_STATE = "visibility-state";
}($$b7 || ($$b7 = {}));
let nT = 100;
let nI = 100;
let nP = "data-dd-excluded-activity-mutations";
function nR(e, r, n, i, s, o) {
  return nM(nD(e, r, n, i), s, o);
}
function nM(e, r, n) {
  let i;
  let s = !1;
  let o = wg(dm(() => p({
    hadActivity: !1
  })), nT);
  let a = void 0 !== n ? wg(dm(() => p({
    hadActivity: !0,
    end: _$$nx()
  })), n) : void 0;
  let h = e.subscribe(({
    isBusy: e
  }) => {
    DJ(o);
    DJ(i);
    let r = _$$nx();
    e || (i = wg(dm(() => p({
      hadActivity: !0,
      end: r
    })), nI));
  });
  let d = () => {
    s = !0;
    DJ(o);
    DJ(i);
    DJ(a);
    h.unsubscribe();
  };
  function p(e) {
    s || (d(), r(e));
  }
  return {
    stop: d
  };
}
function nD(e, r, n, i) {
  return new c(s => {
    let o;
    let a = [];
    let h = 0;
    a.push(r.subscribe(e => {
      e.every(n$) || d();
    }), n.subscribe(d), ng(i, {
      type: $$b7.RESOURCE
    }).subscribe(e => {
      e.some(e => !nN(i, e.name)) && d();
    }), e.subscribe(7, e => {
      nN(i, e.url) || (void 0 === o && (o = e.requestIndex), h += 1, d());
    }), e.subscribe(8, e => {
      nN(i, e.url) || void 0 === o || e.requestIndex < o || (h -= 1, d());
    }));
    return () => {
      a.forEach(e => e.unsubscribe());
    };
    function d() {
      s.notify({
        isBusy: h > 0
      });
    }
  });
}
function nN(e, r) {
  return tR(e.excludedActivityUrls, r);
}
function n$(e) {
  let r = "characterData" === e.type ? e.target.parentElement : e.target;
  return !!(r && nk(r) && r.matches(`[${nP}], [${nP}] *`));
}
let $$nL3 = {
  IGNORE: "ignore",
  HIDDEN: "hidden",
  ALLOW: tJ.ALLOW,
  MASK: tJ.MASK,
  MASK_USER_INPUT: tJ.MASK_USER_INPUT
};
let $$nj4 = "data-dd-privacy";
let $$nz5 = "hidden";
let nZ = "dd-privacy-";
let $$nF2 = "***";
let $$nU1 = "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
let nQ = {
  INPUT: !0,
  OUTPUT: !0,
  TEXTAREA: !0,
  SELECT: !0,
  OPTION: !0,
  DATALIST: !0,
  OPTGROUP: !0
};
let nV = "x";
export function $$nB11(e, r, n) {
  if (n && n.has(e)) return n.get(e);
  let i = $$nC13(e);
  let s = i ? $$nB11(i, r, n) : r;
  let o = $$nq25($$nW12(e), s);
  n && n.set(e, o);
  return o;
}
export function $$nq25(e, r) {
  switch (r) {
    case $$nL3.HIDDEN:
    case $$nL3.IGNORE:
      return r;
  }
  switch (e) {
    case $$nL3.ALLOW:
    case $$nL3.MASK:
    case $$nL3.MASK_USER_INPUT:
    case $$nL3.HIDDEN:
    case $$nL3.IGNORE:
      return e;
    default:
      return r;
  }
}
export function $$nW12(e) {
  if (nk(e)) {
    if ("BASE" === e.tagName) return $$nL3.ALLOW;
    if ("INPUT" === e.tagName) {
      let r = e;
      if ("password" === r.type || "email" === r.type || "tel" === r.type || "hidden" === r.type) return $$nL3.MASK;
      let n = r.getAttribute("autocomplete");
      if (n && (n.startsWith("cc-") || n.endsWith("-password"))) return $$nL3.MASK;
    }
    return e.matches(nJ($$nL3.HIDDEN)) ? $$nL3.HIDDEN : e.matches(nJ($$nL3.MASK)) ? $$nL3.MASK : e.matches(nJ($$nL3.MASK_USER_INPUT)) ? $$nL3.MASK_USER_INPUT : e.matches(nJ($$nL3.ALLOW)) ? $$nL3.ALLOW : nK(e) ? $$nL3.IGNORE : void 0;
  }
}
export function $$nY27(e, r) {
  switch (r) {
    case $$nL3.MASK:
    case $$nL3.HIDDEN:
    case $$nL3.IGNORE:
      return !0;
    case $$nL3.MASK_USER_INPUT:
      return nx(e) ? nG(e.parentNode) : nG(e);
    default:
      return !1;
  }
}
function nG(e) {
  if (!e || e.nodeType !== e.ELEMENT_NODE) return !1;
  let r = e;
  if ("INPUT" === r.tagName) switch (r.type) {
    case "button":
    case "color":
    case "reset":
    case "submit":
      return !1;
  }
  return !!nQ[r.tagName];
}
let nX = e => e.replace(/\S/g, nV);
export function $$nH17(e, r, n) {
  var i;
  let s = e.parentElement?.tagName;
  let o = e.textContent || "";
  if (r && !o.trim()) return;
  let a = n;
  if ("SCRIPT" === s) o = $$nF2; else if (a === $$nL3.HIDDEN) o = $$nF2; else if ($$nY27(e, a)) {
    if ("DATALIST" === s || "SELECT" === s || "OPTGROUP" === s) {
      if (!o.trim()) return;
    } else o = "OPTION" === s ? $$nF2 : nX(o);
  }
  return o;
}
function nK(e) {
  if ("SCRIPT" === e.nodeName) return !0;
  if ("LINK" === e.nodeName) {
    let e = r("rel");
    return /preload|prefetch/i.test(e) && "script" === r("as") || "shortcut icon" === e || "icon" === e;
  }
  if ("META" === e.nodeName) {
    let n = r("name");
    let i = r("rel");
    let s = r("property");
    return /^msapplication-tile(image|color)$/.test(n) || "application-name" === n || "icon" === i || "apple-touch-icon" === i || "shortcut icon" === i || "keywords" === n || "description" === n || /^(og|twitter|fb):/.test(s) || /^(og|twitter):/.test(n) || "pinterest" === n || "robots" === n || "googlebot" === n || "bingbot" === n || e.hasAttribute("http-equiv") || "author" === n || "generator" === n || "framework" === n || "publisher" === n || "progid" === n || /^article:/.test(s) || /^product:/.test(s) || "google-site-verification" === n || "yandex-verification" === n || "csrf-token" === n || "p:domain_verify" === n || "verify-v1" === n || "verification" === n || "shopify-checkout-api-token" === n;
  }
  function r(r) {
    return (e.getAttribute(r) || "").toLowerCase();
  }
  return !1;
}
function nJ(e) {
  return `[${$$nj4}="${e}"], .${nZ}${e}`;
}
let n0 = "data-dd-action-name";
let n1 = "Masked Element";
function n2(e, {
  enablePrivacyForActionName: r,
  actionNameAttribute: n
}, i) {
  let s = n5(e, n0) || n && n5(e, n);
  return s ? {
    name: s,
    nameSource: "custom_attribute"
  } : i === $$nL3.MASK ? {
    name: n1,
    nameSource: "mask_placeholder"
  } : n8(e, n, n3, r) || n8(e, n, n6, r) || {
    name: "",
    nameSource: "blank"
  };
}
function n5(e, r) {
  let n = e.closest(`[${r}]`);
  if (n) return n9(n7(n.getAttribute(r).trim()));
}
let n3 = [(e, r) => {
  if ("labels" in e && e.labels && e.labels.length > 0) return ir(e.labels[0], r);
}, e => {
  if ("INPUT" === e.nodeName) {
    let r = e;
    let n = r.getAttribute("type");
    if ("button" === n || "submit" === n || "reset" === n) return {
      name: r.value,
      nameSource: "text_content"
    };
  }
}, (e, r, n) => {
  if ("BUTTON" === e.nodeName || "LABEL" === e.nodeName || "button" === e.getAttribute("role")) return ir(e, r, n);
}, e => it(e, "aria-label"), (e, r, n) => {
  let i = e.getAttribute("aria-labelledby");
  if (i) return {
    name: i.split(/\s+/).map(r => ie(e, r)).filter(e => !!e).map(e => ii(e, r, n)).join(" "),
    nameSource: "text_content"
  };
}, e => it(e, "alt"), e => it(e, "name"), e => it(e, "title"), e => it(e, "placeholder"), (e, r) => {
  if ("options" in e && e.options.length > 0) return ir(e.options[0], r);
}];
let n6 = [(e, r, n) => ir(e, r, n)];
let n4 = 10;
function n8(e, r, n, i) {
  let s = e;
  let o = 0;
  for (; o <= n4 && s && "BODY" !== s.nodeName && "HTML" !== s.nodeName && "HEAD" !== s.nodeName;) {
    for (let e of n) {
      let n = e(s, r, i);
      if (n) {
        let {
          name,
          nameSource
        } = n;
        let i = name && name.trim();
        if (i) return {
          name: n9(n7(i)),
          nameSource
        };
      }
    }
    if ("FORM" === s.nodeName) break;
    s = s.parentElement;
    o += 1;
  }
}
function n7(e) {
  return e.replace(/\s+/g, " ");
}
function n9(e) {
  return e.length > 100 ? `${W(e, 100)} [...]` : e;
}
function ie(e, r) {
  return e.ownerDocument ? e.ownerDocument.getElementById(r) : null;
}
function it(e, r) {
  return {
    name: e.getAttribute(r) || "",
    nameSource: "standard_attribute"
  };
}
function ir(e, r, n) {
  return {
    name: ii(e, r, n) || "",
    nameSource: "text_content"
  };
}
function ii(e, r, n) {
  if (!e.isContentEditable) {
    if ("innerText" in e) {
      let i = e.innerText;
      let s = r => {
        let n = e.querySelectorAll(r);
        for (let e = 0; e < n.length; e += 1) {
          let r = n[e];
          if ("innerText" in r) {
            let e = r.innerText;
            e && e.trim().length > 0 && (i = i.replace(e, ""));
          }
        }
      };
      s(`[${n0}]`);
      r && s(`[${r}]`);
      n && s(`${nJ($$nL3.HIDDEN)}, ${nJ($$nL3.MASK)}`);
      return i;
    }
    return e.textContent;
  }
}
let $$is8 = [n0, "data-testid", "data-test", "data-qa", "data-cy", "data-test-id", "data-qa-id", "data-testing", "data-component", "data-element", "data-source-file"];
let io = [ip, ic];
let ia = [ip, ih, id];
function il(e, r) {
  let n;
  if (!e.isConnected) return;
  let i = e;
  for (; i && "HTML" !== i.nodeName;) {
    let e = im(i, io, iv, r, n);
    if (e) return e;
    n = im(i, ia, iy, r, n) || ib(ig(i), n);
    i = i.parentElement;
  }
  return n;
}
function iu(e) {
  return /[0-9]/.test(e);
}
function ic(e) {
  if (e.id && !iu(e.id)) return `#${CSS.escape(e.id)}`;
}
function ih(e) {
  if ("BODY" === e.tagName) return;
  let r = e.classList;
  for (let n = 0; n < r.length; n += 1) {
    let i = r[n];
    if (!iu(i)) return `${CSS.escape(e.tagName)}.${CSS.escape(i)}`;
  }
}
function id(e) {
  return CSS.escape(e.tagName);
}
function ip(e, r) {
  if (r) {
    let e = n(r);
    if (e) return e;
  }
  for (let e of $$is8) {
    let r = n(e);
    if (r) return r;
  }
  function n(r) {
    if (e.hasAttribute(r)) return `${CSS.escape(e.tagName)}[${r}="${CSS.escape(e.getAttribute(r))}"]`;
  }
}
function ig(e) {
  let r = e.parentElement.firstElementChild;
  let n = 1;
  for (; r && r !== e;) {
    r.tagName === e.tagName && (n += 1);
    r = r.nextElementSibling;
  }
  return `${CSS.escape(e.tagName)}:nth-of-type(${n})`;
}
function im(e, r, n, i, s) {
  for (let o of r) {
    let r = o(e, i);
    if (r && n(e, r, s)) return ib(r, s);
  }
}
function iv(e, r, n) {
  return 1 === e.ownerDocument.querySelectorAll(ib(r, n)).length;
}
function iy(e, r, n) {
  let i;
  if (void 0 === n) i = e => e.matches(r); else {
    let e = ib(`${r}:scope`, n);
    i = r => null !== r.querySelector(e);
  }
  let s = e.parentElement.firstElementChild;
  for (; s;) {
    if (s !== e && i(s)) return !1;
    s = s.nextElementSibling;
  }
  return !0;
}
function ib(e, r) {
  return r ? `${e}>${r}` : e;
}
let iO = OY;
let ix = 100;
function iw(e, r) {
  let n;
  let i = [];
  let s = 0;
  function o(e) {
    e.stopObservable.subscribe(a);
    i.push(e);
    DJ(n);
    n = wg(h, iO);
  }
  function a() {
    1 === s && i.every(e => e.isStopped()) && (s = 2, r(i));
  }
  function h() {
    DJ(n);
    0 === s && (s = 1, a());
  }
  o(e);
  return {
    tryAppend: e => 0 === s && (i.length > 0 && !ik(i[i.length - 1].event, e.event) ? (h(), !1) : (o(e), !0)),
    stop: () => {
      h();
    }
  };
}
function ik(e, r) {
  return e.target === r.target && i_(e, r) <= ix && e.timeStamp - r.timeStamp <= iO;
}
function i_(e, r) {
  return Math.sqrt(Math.pow(e.clientX - r.clientX, 2) + Math.pow(e.clientY - r.clientY, 2));
}
function iS(e, {
  onPointerDown: r,
  onPointerUp: n
}) {
  let i;
  let s;
  let o = {
    selection: !1,
    input: !1,
    scroll: !1
  };
  let a = [_$$q(e, window, "pointerdown", e => {
    iA(e) && (i = iE(), o = {
      selection: !1,
      input: !1,
      scroll: !1
    }, s = r(e));
  }, {
    capture: !0
  }), _$$q(e, window, "selectionchange", () => {
    i && iE() || (o.selection = !0);
  }, {
    capture: !0
  }), _$$q(e, window, "scroll", () => {
    o.scroll = !0;
  }, {
    capture: !0,
    passive: !0
  }), _$$q(e, window, "pointerup", e => {
    if (iA(e) && s) {
      let r = o;
      n(s, e, () => r);
      s = void 0;
    }
  }, {
    capture: !0
  }), _$$q(e, window, "input", () => {
    o.input = !0;
  }, {
    capture: !0
  })];
  return {
    stop: () => {
      a.forEach(e => e.stop());
    }
  };
}
function iE() {
  let e = window.getSelection();
  return !e || e.isCollapsed;
}
function iA(e) {
  return e.target instanceof Element && !1 !== e.isPrimary;
}
let iC = 3;
function iT(e, r) {
  if (iI(e)) {
    r.addFrustration(F.RAGE_CLICK);
    e.some(iR) && r.addFrustration(F.DEAD_CLICK);
    r.hasError && r.addFrustration(F.ERROR_CLICK);
    return {
      isRage: !0
    };
  }
  let n = e.some(e => e.getUserActivity().selection);
  e.forEach(e => {
    e.hasError && e.addFrustration(F.ERROR_CLICK);
    iR(e) && !n && e.addFrustration(F.DEAD_CLICK);
  });
  return {
    isRage: !1
  };
}
function iI(e) {
  if (e.some(e => e.getUserActivity().selection || e.getUserActivity().scroll)) return !1;
  for (let r = 0; r < e.length - (iC - 1); r += 1) if (e[r + iC - 1].event.timeStamp - e[r].event.timeStamp <= OY) return !0;
  return !1;
}
let iP = 'input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="range"]),textarea,select,[contenteditable],[contenteditable] *,canvas,a[href],a[href] *';
function iR(e) {
  if (e.hasPageActivity || e.getUserActivity().input || e.getUserActivity().scroll) return !1;
  let r = e.event.target;
  "LABEL" === r.tagName && r.hasAttribute("for") && (r = document.getElementById(r.getAttribute("for")));
  return !r || !r.matches(iP);
}
let iM = 10 * OY;
let iD = new Map();
function iN(e) {
  let r = iD.get(e);
  iD.$$delete(e);
  return r;
}
function i$(e, r) {
  iD.set(e, r);
  iD.forEach((e, r) => {
    vk(r, $S()) > iM && iD.$$delete(r);
  });
}
let iL = 5 * _$$iW;
function ij(e, r, n, i) {
  let s;
  let o = rz({
    expireDelay: iL
  });
  let a = new c();
  e.subscribe(10, () => {
    o.reset();
  });
  e.subscribe(5, p);
  e.subscribe(11, e => {
    e.reason === y5.UNLOADING && p();
  });
  let {
    stop
  } = iS(i, {
    onPointerDown: s => iz(i, e, r, s, n),
    onPointerUp: ({
      clickActionBase: s,
      hadActivityOnPointerDown: h
    }, p, g) => {
      iZ(i, e, r, n, o, a, d, s, p, g, h);
    }
  });
  return {
    stop: () => {
      p();
      a.notify();
      stop();
    },
    actionContexts: {
      findActionId: e => o.findAll(e)
    }
  };
  function d(e) {
    if (!s || !s.tryAppend(e)) {
      let r = e.clone();
      s = iw(e, e => {
        iQ(e, r);
      });
    }
  }
  function p() {
    s && s.stop();
  }
}
function iz(e, r, n, i, s) {
  let o = e.enablePrivacyForActionName ? $$nB11(i.target, e.defaultPrivacyLevel) : $$nL3.ALLOW;
  if (o === $$nL3.HIDDEN) return;
  let a = iF(i, o, e);
  let h = !1;
  nR(r, n, s, e, e => {
    h = e.hadActivity;
  }, nT);
  return {
    clickActionBase: a,
    hadActivityOnPointerDown: () => h
  };
}
function iZ(e, r, n, i, s, o, a, h, d, p, g) {
  var m;
  let v = iU(r, s, p, h, d);
  a(v);
  let y = h?.target?.selector;
  y && i$(d.timeStamp, y);
  let {
    stop
  } = nR(r, n, i, e, e => {
    e.hadActivity && e.end < v.startClocks.timeStamp ? v.discard() : e.hadActivity ? v.stop(e.end) : g() ? v.stop(v.startClocks.timeStamp) : v.stop();
  }, iM);
  let O = r.subscribe(5, ({
    endClocks: e
  }) => {
    v.stop(e.timeStamp);
  });
  let x = o.subscribe(() => {
    v.stop();
  });
  v.stopObservable.subscribe(() => {
    O.unsubscribe();
    stop();
    x.unsubscribe();
  });
}
function iF(e, r, n) {
  let i = e.target.getBoundingClientRect();
  let s = il(e.target, n.actionNameAttribute);
  s && i$(e.timeStamp, s);
  let o = n2(e.target, n, r);
  return {
    type: $$Z0.CLICK,
    target: {
      width: Math.round(i.width),
      height: Math.round(i.height),
      selector: s
    },
    position: {
      x: Math.round(e.clientX - i.left),
      y: Math.round(e.clientY - i.top)
    },
    name: o.name,
    nameSource: o.nameSource
  };
}
function iU(e, r, n, i, s) {
  let o;
  let a = Q();
  let h = M8();
  let d = r.add(a, h.relative);
  let p = nf({
    lifeCycle: e,
    isChildEvent: e => void 0 !== e.action && (Array.isArray(e.action.id) ? e.action.id.includes(a) : e.action.id === a)
  });
  let g = 0;
  let m = [];
  let v = new c();
  function y(e) {
    0 === g && (g = 1, (o = e) ? d.close(gs(o)) : d.remove(), p.stop(), v.notify());
  }
  return {
    event: s,
    stop: y,
    stopObservable: v,
    get hasError() {
      return p.eventCounts.errorCount > 0;
    },
    get hasPageActivity() {
      return void 0 !== o;
    },
    getUserActivity: n,
    addFrustration: e => {
      m.push(e);
    },
    startClocks: h,
    isStopped: () => 1 === g || 2 === g,
    clone: () => iU(e, r, n, i, s),
    validate: r => {
      if (y(), 1 !== g) return;
      let {
        resourceCount,
        errorCount,
        longTaskCount
      } = p.eventCounts;
      let b = {
        duration: o && vk(h.timeStamp, o),
        startClocks: h,
        id: a,
        frustrationTypes: m,
        counts: {
          resourceCount,
          errorCount,
          longTaskCount
        },
        events: null != r ? r : [s],
        event: s,
        ...i
      };
      e.notify(0, b);
      g = 2;
    },
    discard: () => {
      y();
      g = 2;
    }
  };
}
function iQ(e, r) {
  let {
    isRage
  } = iT(e, r);
  isRage ? (e.forEach(e => e.discard()), r.stop(_$$nx()), r.validate(e.map(e => e.event))) : (r.discard(), e.forEach(e => e.validate()));
}
function iV(e, r, n, i, s) {
  e.subscribe(0, r => e.notify(12, iB(r)));
  r.register(0, ({
    startTime: e,
    eventType: r
  }) => {
    if (r !== $$L6.ERROR && r !== $$L6.RESOURCE && r !== $$L6.LONG_TASK) return $O;
    let n = o.findActionId(e);
    return n ? {
      type: r,
      action: {
        id: n
      }
    } : $O;
  });
  let o = {
    findActionId: _$$l
  };
  let a = _$$l;
  s.trackUserInteractions && ({
    actionContexts: o,
    stop: a
  } = ij(e, n, i, s));
  return {
    addAction: r => {
      e.notify(12, iB(r));
    },
    actionContexts: o,
    stop: a
  };
}
function iB(e) {
  let r = iq(e) ? {
    action: {
      id: e.id,
      loading_time: nd(Zj(e.duration)),
      frustration: {
        type: e.frustrationTypes
      },
      error: {
        count: e.counts.errorCount
      },
      long_task: {
        count: e.counts.longTaskCount
      },
      resource: {
        count: e.counts.resourceCount
      }
    },
    _dd: {
      action: {
        target: e.target,
        position: e.position,
        name_source: e.nameSource
      }
    }
  } : void 0;
  let n = kg({
    action: {
      id: Q(),
      target: {
        name: e.name
      },
      type: e.type
    },
    date: e.startClocks.timeStamp,
    type: $$L6.ACTION
  }, r);
  let i = iq(e) ? e.duration : void 0;
  let s = iq(e) ? void 0 : e.context;
  let o = iq(e) ? {
    events: e.events
  } : {
    handlingStack: e.handlingStack
  };
  return {
    customerContext: s,
    rawRumEvent: n,
    duration: i,
    startTime: e.startClocks.relative,
    domainContext: o
  };
}
function iq(e) {
  return e.type !== $$Z0.CUSTOM;
}
function iX(e) {
  let r = (r, n) => {
    let i = As({
      stackTrace: n,
      originalError: r,
      startClocks: M8(),
      nonErrorPrefix: "Uncaught",
      source: _$$g.SOURCE,
      handling: "unhandled"
    });
    e.notify(i);
  };
  let {
    stop
  } = iH(r);
  let {
    stop: _stop4
  } = iK(r);
  return {
    stop: () => {
      stop();
      _stop4();
    }
  };
}
function iH(e) {
  return _$$H(window, "onerror", ({
    parameters: [r, n, i, s, o]
  }) => {
    let a;
    bJ(o) || (a = _$$h(r, n, i, s));
    e(null != o ? o : r, a);
  });
}
function iK(e) {
  return _$$H(window, "onunhandledrejection", ({
    parameters: [r]
  }) => {
    e(r.reason || "Empty reason");
  });
}
let i0 = {};
function i1(e) {
  let r = e.map(e => (i0[e] || (i0[e] = i2(e)), i0[e]));
  return _$$F(...r);
}
function i2(e) {
  return new c(r => {
    let n = JZ[e];
    JZ[e] = (...i) => {
      n.apply(console, i);
      let s = uC("console error");
      um(() => {
        r.notify(i5(i, e, s));
      });
    };
    return () => {
      JZ[e] = n;
    };
  });
}
function i5(e, r, n) {
  let i = e.map(e => i3(e)).join(" ");
  if (r === bP.error) {
    let s = e.find(bJ);
    let o = As({
      originalError: s,
      handlingStack: n,
      startClocks: M8(),
      source: _$$g.CONSOLE,
      handling: "handled",
      nonErrorPrefix: "Provided",
      useFallbackStack: !1
    });
    o.message = i;
    return {
      api: r,
      message: i,
      handlingStack: n,
      error: o
    };
  }
  return {
    api: r,
    message: i,
    error: void 0,
    handlingStack: n
  };
}
function i3(e) {
  return "string" == typeof e ? _$$a(e) : bJ(e) ? NR(_$$T(e)) : _$$s(_$$a(e), void 0, 2);
}
function i6(e) {
  let r = i1([bP.error]).subscribe(r => e.notify(r.error));
  return {
    stop: () => {
      r.unsubscribe();
    }
  };
}
let i4 = {
  intervention: "intervention",
  cspViolation: "csp_violation"
};
function i8(e, r) {
  let n = [];
  r.includes(i4.cspViolation) && n.push(i9(e));
  let i = r.filter(e => e !== i4.cspViolation);
  i.length && n.push(i7(i));
  return _$$F(...n);
}
function i7(e) {
  return new c(r => {
    if (!window.ReportingObserver) return;
    let n = dm((e, n) => e.forEach(e => r.notify(se(e))));
    let i = new window.ReportingObserver(n, {
      types: e,
      buffered: !0
    });
    i.observe();
    return () => {
      i.disconnect();
    };
  });
}
function i9(e) {
  return new c(r => {
    let {
      stop
    } = _$$q(e, document, "securitypolicyviolation", e => {
      r.notify(st(e));
    });
    return stop;
  });
}
function se(e) {
  let {
    type,
    body
  } = e;
  return sr({
    type: body.id,
    message: `${type}: ${body.message}`,
    originalError: e,
    stack: sn(body.id, body.message, body.sourceFile, body.lineNumber, body.columnNumber)
  });
}
function st(e) {
  let r = `'${e.blockedURI}' blocked by '${e.effectiveDirective}' directive`;
  return sr({
    type: e.effectiveDirective,
    message: `${i4.cspViolation}: ${r}`,
    originalError: e,
    csp: {
      disposition: e.disposition
    },
    stack: sn(e.effectiveDirective, e.originalPolicy ? `${r} of the policy "${W(e.originalPolicy, 100, "...")}"` : "no policy", e.sourceFile, e.lineNumber, e.columnNumber)
  });
}
function sr(e) {
  return {
    startClocks: M8(),
    source: _$$g.REPORT,
    handling: "unhandled",
    ...e
  };
}
function sn(e, r, n, i, s) {
  return n ? Yn({
    name: e,
    message: r,
    stack: [{
      func: "?",
      url: n,
      line: null != i ? i : void 0,
      column: null != s ? s : void 0
    }]
  }) : void 0;
}
function si(e, r) {
  let n = i8(e, [i4.cspViolation, i4.intervention]).subscribe(e => r.notify(e));
  return {
    stop: () => {
      n.unsubscribe();
    }
  };
}
function ss(e, r) {
  let n = new c();
  i6(n);
  iX(n);
  si(r, n);
  n.subscribe(r => e.notify(14, {
    error: r
  }));
  return so(e);
}
function so(e) {
  e.subscribe(14, ({
    error: r,
    customerContext: n
  }) => {
    n = kg(r.context, n);
    e.notify(12, {
      customerContext: n,
      ...sa(r)
    });
  });
  return {
    addError: ({
      error: r,
      handlingStack: n,
      componentStack: i,
      startClocks: s,
      context: o
    }) => {
      let a = As({
        originalError: r,
        handlingStack: n,
        componentStack: i,
        startClocks: s,
        nonErrorPrefix: "Provided",
        source: _$$g.CUSTOM,
        handling: "handled"
      });
      e.notify(14, {
        customerContext: o,
        error: a
      });
    }
  };
}
function sa(e) {
  let r = {
    date: e.startClocks.timeStamp,
    error: {
      id: Q(),
      message: e.message,
      source: e.source,
      stack: e.stack,
      handling_stack: e.handlingStack,
      component_stack: e.componentStack,
      type: e.type,
      handling: e.handling,
      causes: e.causes,
      source_type: "browser",
      fingerprint: e.fingerprint,
      csp: e.csp
    },
    type: $$L6.ERROR
  };
  let n = {
    error: e.originalError,
    handlingStack: e.handlingStack
  };
  return {
    rawRumEvent: r,
    startTime: e.startClocks.relative,
    domainContext: n
  };
}
let su = OY;
let sc = 30;
function sh() {
  let e = [];
  function r(r) {
    let i;
    if (r.didTimeout) {
      let e = performance.now();
      i = () => sc - (performance.now() - e);
    } else i = r.timeRemaining.bind(r);
    for (; i() > 0 && e.length;) e.shift()();
    e.length && n();
  }
  function n() {
    BB(r, {
      timeout: su
    });
  }
  return {
    push(r) {
      1 === e.push(r) && n();
    }
  };
}
let sd = new WeakSet();
function sf(e) {
  if (!performance || !("getEntriesByName" in performance)) return;
  let r = performance.getEntriesByName(e.url, "resource");
  if (!r.length || !("toJSON" in r[0])) return;
  let n = r.filter(e => !sd.has(e)).filter(e => r6(e) && r4(e)).filter(r => sg(r, e.startClocks.relative, sp({
    startTime: e.startClocks.relative,
    duration: e.duration
  })));
  if (1 === n.length) {
    sd.add(n[0]);
    return n[0].toJSON();
  }
}
function sp(e) {
  return Gw(e.startTime, e.duration);
}
function sg(e, r, n) {
  let i = 1;
  return e.startTime >= r - i && sp(e) <= Gw(n, i);
}
let sv = 2 * _$$iW;
function sy(e) {
  let r = sb(e) || sO(e);
  if (!(!r || r.traceTime <= x3() - sv)) return r.traceId;
}
function sb(e) {
  let r = e.querySelector("meta[name=dd-trace-id]");
  let n = e.querySelector("meta[name=dd-trace-time]");
  return sx(r && r.content, n && n.content);
}
function sO(e) {
  let r = sw(e);
  if (r) return sx(B(r, "trace-id"), B(r, "trace-time"));
}
function sx(e, r) {
  let n = r && Number(r);
  if (e && n) return {
    traceId: e,
    traceTime: n
  };
}
function sw(e) {
  for (let r = 0; r < e.childNodes.length; r += 1) {
    let n = sk(e.childNodes[r]);
    if (n) return n;
  }
  if (e.body) for (let r = e.body.childNodes.length - 1; r >= 0; r -= 1) {
    let n = e.body.childNodes[r];
    let i = sk(n);
    if (i) return i;
    if (!nx(n)) break;
  }
}
function sk(e) {
  if (e && nw(e)) {
    let r = /^\s*DATADOG;(.*?)\s*$/.exec(e.data);
    if (r) return r[1];
  }
}
function s_() {
  if ($$ny29($$b7.NAVIGATION)) {
    let e = performance.getEntriesByType($$b7.NAVIGATION)[0];
    if (e) return e;
  }
  let e = sS();
  let r = {
    entryType: $$b7.NAVIGATION,
    initiatorType: "navigation",
    name: window.location.href,
    startTime: 0,
    duration: e.loadEventEnd,
    decodedBodySize: 0,
    encodedBodySize: 0,
    transferSize: 0,
    workerStart: 0,
    toJSON: () => ({
      ...r,
      toJSON: void 0
    }),
    ...e
  };
  return r;
}
function sS() {
  let e = {};
  let r = performance.timing;
  for (let n in r) if (Et(r[n])) {
    let i = n;
    let s = r[i];
    e[i] = 0 === s ? 0 : gs(s);
  }
  return e;
}
function sE(e, r, n = s_) {
  _$$H2(e, "interactive", () => {
    let e = n();
    let i = Object.assign(e.toJSON(), {
      entryType: $$b7.RESOURCE,
      initiatorType: rK,
      duration: e.responseEnd,
      traceId: sy(document),
      toJSON: () => ({
        ...i,
        toJSON: void 0
      })
    });
    r(i);
  });
}
function sA(e, r, n, i = sh(), s = sE) {
  e.subscribe(8, e => {
    a(() => sC(e, r, n));
  });
  let o = ng(r, {
    type: $$b7.RESOURCE,
    buffered: !0
  }).subscribe(e => {
    for (let n of e) r2(n) || a(() => sT(n, r));
  });
  function a(r) {
    i.push(() => {
      let n = r();
      n && e.notify(12, n);
    });
  }
  s(r, e => {
    a(() => sT(e, r));
  });
  return {
    stop: () => {
      o.unsubscribe();
    }
  };
}
function sC(e, r, n) {
  let i = sf(e);
  let s = i ? FR(i.startTime) : e.startClocks;
  let o = sP(e, r);
  if (!r.trackResources && !o) return;
  let a = e.type === rG.XHR ? rY.XHR : rY.FETCH;
  let h = i ? sI(i) : void 0;
  let d = i ? r5(i) : sM(n, s, e.duration);
  let p = kg({
    date: s.timeStamp,
    resource: {
      id: Q(),
      type: a,
      duration: Zj(d),
      method: e.method,
      status_code: e.status,
      protocol: i && r9(i),
      url: $$ns26(e.url),
      delivery_type: i && ne(i)
    },
    type: $$L6.RESOURCE,
    _dd: {
      discarded: !r.trackResources
    }
  }, o, h);
  return {
    startTime: s.relative,
    duration: d,
    rawRumEvent: p,
    domainContext: {
      performanceEntry: i,
      xhr: e.xhr,
      response: e.response,
      requestInput: e.input,
      requestInit: e.init,
      error: e.error,
      isAborted: e.isAborted,
      handlingStack: e.handlingStack
    }
  };
}
function sT(e, r) {
  let n = FR(e.startTime);
  let i = sR(e, r);
  if (!r.trackResources && !i) return;
  let s = r0(e);
  let o = sI(e);
  let a = r5(e);
  let h = kg({
    date: n.timeStamp,
    resource: {
      id: Q(),
      type: s,
      duration: Zj(a),
      url: e.name,
      status_code: sD(e.responseStatus),
      protocol: r9(e),
      delivery_type: ne(e)
    },
    type: $$L6.RESOURCE,
    _dd: {
      discarded: !r.trackResources
    }
  }, i, o);
  return {
    startTime: n.relative,
    duration: a,
    rawRumEvent: h,
    domainContext: {
      performanceEntry: e
    }
  };
}
function sI(e) {
  let {
    renderBlockingStatus
  } = e;
  return {
    resource: {
      render_blocking_status: renderBlockingStatus,
      ...nt(e),
      ...r3(e)
    }
  };
}
function sP(e, r) {
  if (e.traceSampled && e.traceId && e.spanId) return {
    _dd: {
      span_id: e.spanId.toString(),
      trace_id: e.traceId.toString(),
      rule_psr: r.rulePsr
    }
  };
}
function sR(e, r) {
  if (e.traceId) return {
    _dd: {
      trace_id: e.traceId,
      span_id: re().toString(),
      rule_psr: r.rulePsr
    }
  };
}
function sM(e, r, n) {
  return e.wasInPageStateDuringPeriod("frozen", r.relative, n) ? void 0 : n;
}
function sD(e) {
  return 0 === e ? void 0 : e;
}
function sN(e, r, n) {
  let {
    stop,
    eventCounts
  } = nf({
    lifeCycle: e,
    isChildEvent: e => e.view.id === r,
    onChange: n
  });
  return {
    stop,
    eventCounts
  };
}
let s$ = 10 * _$$iW;
function sL(e, r, n) {
  return {
    stop: ng(e, {
      type: $$b7.PAINT,
      buffered: !0
    }).subscribe(e => {
      let i = e.find(e => "first-contentful-paint" === e.name && e.startTime < r.timeStamp && e.startTime < s$);
      i && n(i.startTime);
    }).unsubscribe
  };
}
function sj(e, r) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      r(vk(e, $S()));
    });
  });
}
function sz(e, r, n) {
  let i = ng(e, {
    type: $$b7.FIRST_INPUT,
    buffered: !0
  }).subscribe(i => {
    let s = i.find(e => e.startTime < r.timeStamp);
    if (s) {
      let r;
      let i = vk(s.startTime, s.processingStart);
      s.target && nk(s.target) && (r = il(s.target, e.actionNameAttribute));
      n({
        delay: i >= 0 ? i : 0,
        time: s.startTime,
        targetSelector: r
      });
    }
  });
  return {
    stop: () => {
      i.unsubscribe();
    }
  };
}
function sZ(e, r, n = s_) {
  return sQ(e, () => {
    let e = n();
    sU(e) || r(sF(e));
  });
}
function sF(e) {
  return {
    domComplete: e.domComplete,
    domContentLoaded: e.domContentLoadedEventEnd,
    domInteractive: e.domInteractive,
    loadEvent: e.loadEventEnd,
    firstByte: e.responseStart >= 0 && e.responseStart <= $S() ? e.responseStart : void 0
  };
}
function sU(e) {
  return e.loadEventEnd <= 0;
}
function sQ(e, r) {
  let n;
  let {
    stop
  } = _$$H2(e, "complete", () => {
    n = wg(() => r());
  });
  return {
    stop: () => {
      stop();
      DJ(n);
    }
  };
}
let sV = 10 * _$$iW;
function sB(e, r, n, i) {
  let s = 1 / 0;
  let {
    stop
  } = l(e, n, ["pointerdown", "keydown"], e => {
    s = e.timeStamp;
  }, {
    capture: !0,
    once: !0
  });
  let a = 0;
  let h = ng(e, {
    type: $$b7.LARGEST_CONTENTFUL_PAINT,
    buffered: !0
  }).subscribe(n => {
    let o = Uk(n, e => e.entryType === $$b7.LARGEST_CONTENTFUL_PAINT && e.startTime < s && e.startTime < r.timeStamp && e.startTime < sV && e.size > a);
    if (o) {
      let r;
      o.element && (r = il(o.element, e.actionNameAttribute));
      i({
        value: o.startTime,
        targetSelector: r,
        resourceUrl: sq(o)
      });
      a = o.size;
    }
  });
  return {
    stop: () => {
      stop();
      h.unsubscribe();
    }
  };
}
function sq(e) {
  return "" === e.url ? void 0 : e.url;
}
function sW(e, r, n = window) {
  if ("hidden" === document.visibilityState) return {
    timeStamp: 0,
    stop: _$$l
  };
  if ($$ny29($$b7.VISIBILITY_STATE)) {
    let e = performance.getEntriesByType($$b7.VISIBILITY_STATE).filter(e => "hidden" === e.name).find(e => e.startTime >= r.relative);
    if (e) return {
      timeStamp: e.startTime,
      stop: _$$l
    };
  }
  let i = 1 / 0;
  let {
    stop
  } = l(e, n, ["pagehide", "visibilitychange"], e => {
    ("pagehide" === e.type || "hidden" === document.visibilityState) && (i = e.timeStamp, stop());
  }, {
    capture: !0
  });
  return {
    get timeStamp() {
      return i;
    },
    stop
  };
}
function sY(e, r, n, i) {
  let s = {};
  let {
    stop
  } = sZ(e, e => {
    n(e.loadEvent);
    s.navigationTimings = e;
    i();
  });
  let a = sW(e, r);
  let {
    stop: _stop5
  } = sL(e, a, e => {
    s.firstContentfulPaint = e;
    i();
  });
  let {
    stop: _stop6
  } = sB(e, a, window, e => {
    s.largestContentfulPaint = e;
    i();
  });
  let {
    stop: _stop7
  } = sz(e, a, e => {
    s.firstInput = e;
    i();
  });
  return {
    stop: function() {
      stop();
      _stop5();
      _stop6();
      _stop7();
      a.stop();
    },
    initialViewMetrics: s
  };
}
let sG = (e, r) => e * r;
let sX = (e, r) => {
  let n = Math.max(e.left, r.left);
  let i = Math.max(e.top, r.top);
  let s = Math.min(e.right, r.right);
  let o = Math.min(e.bottom, r.bottom);
  return n >= s || i >= o ? 0 : sG(s - n, o - i);
};
let sH = e => sG(e.previousRect.width, e.previousRect.height) + sG(e.currentRect.width, e.currentRect.height) - sX(e.previousRect, e.currentRect);
function sK(e, r, n) {
  let i;
  if (!s3()) return {
    stop: _$$l
  };
  let s = 0;
  n({
    value: 0
  });
  let o = $$s5();
  let a = ng(e, {
    type: $$b7.LAYOUT_SHIFT,
    buffered: !0
  }).subscribe(a => {
    var h;
    for (let d of a) {
      if (d.hadRecentInput || d.startTime < r) continue;
      let {
        cumulatedValue,
        isMaxValue
      } = o.update(d);
      if (isMaxValue) {
        let e = sJ(d.sources);
        i = {
          target: e?.node ? new WeakRef(e.node) : void 0,
          time: vk(r, d.startTime),
          previousRect: e?.previousRect,
          currentRect: e?.currentRect,
          devicePixelRatio: window.devicePixelRatio
        };
      }
      if (cumulatedValue > s) {
        s = cumulatedValue;
        let r = i?.target?.deref();
        n({
          value: LI(s, 4),
          targetSelector: r && il(r, e.actionNameAttribute),
          time: i?.time,
          previousRect: i?.previousRect ? s0(i.previousRect) : void 0,
          currentRect: i?.currentRect ? s0(i.currentRect) : void 0,
          devicePixelRatio: i?.devicePixelRatio
        });
      }
    }
  });
  return {
    stop: () => {
      a.unsubscribe();
    }
  };
}
function sJ(e) {
  let r;
  for (let n of e) if (n.node && nk(n.node)) {
    let e = sH(n);
    (!r || sH(r) < e) && (r = n);
  }
  return r;
}
function s0({
  x: e,
  y: r,
  width: n,
  height: i
}) {
  return {
    x: e,
    y: r,
    width: n,
    height: i
  };
}
let s1 = 5 * OY;
let s2 = OY;
function $$s5() {
  let e;
  let r;
  let n = 0;
  let i = 0;
  return {
    update: s => {
      let o;
      void 0 === e || s.startTime - r >= s2 || s.startTime - e >= s1 ? (e = r = s.startTime, i = n = s.value, o = !0) : (n += s.value, r = s.startTime, (o = s.value > i) && (i = s.value));
      return {
        cumulatedValue: n,
        isMaxValue: o
      };
    }
  };
}
function s3() {
  return $$ny29($$b7.LAYOUT_SHIFT) && "WeakRef" in window;
}
let s6 = 0;
let s4 = 1 / 0;
let s8 = 0;
function s7() {
  "interactionCount" in performance || p || (p = new window.PerformanceObserver(dm(e => {
    e.getEntries().forEach(e => {
      let r = e;
      r.interactionId && (s4 = Math.min(s4, r.interactionId), s6 = ((s8 = Math.max(s8, r.interactionId)) - s4) / 7 + 1);
    });
  }))).observe({
    type: "event",
    buffered: !0,
    durationThreshold: 0
  });
}
let s9 = () => p ? s6 : window.performance.interactionCount || 0;
let oe = 10;
let ot = 1 * _$$iW;
function or(e, r, n) {
  let i;
  let s;
  if (!os()) return {
    getInteractionToNextPaint: () => void 0,
    setViewEnd: _$$l,
    stop: _$$l
  };
  let {
    getViewInteractionCount,
    stopViewInteractionCount
  } = oi(n);
  let h = 1 / 0;
  let d = on(getViewInteractionCount);
  let p = -1;
  function g(n) {
    for (let e of n) e.interactionId && e.startTime >= r && e.startTime <= h && d.process(e);
    let o = d.estimateP98Interaction();
    o && o.duration !== p && (p = o.duration, s = vk(r, o.startTime), !(i = iN(o.startTime)) && o.target && nk(o.target) && (i = il(o.target, e.actionNameAttribute)));
  }
  let m = ng(e, {
    type: $$b7.FIRST_INPUT,
    buffered: !0
  }).subscribe(g);
  let v = ng(e, {
    type: $$b7.EVENT,
    durationThreshold: 40,
    buffered: !0
  }).subscribe(g);
  return {
    getInteractionToNextPaint: () => p >= 0 ? {
      value: Math.min(p, ot),
      targetSelector: i,
      time: s
    } : getViewInteractionCount() ? {
      value: 0
    } : void 0,
    setViewEnd: e => {
      h = e;
      stopViewInteractionCount();
    },
    stop: () => {
      v.unsubscribe();
      m.unsubscribe();
    }
  };
}
function on(e) {
  let r = [];
  function n() {
    r.sort((e, r) => r.duration - e.duration).splice(oe);
  }
  return {
    process(e) {
      let i = r.findIndex(r => e.interactionId === r.interactionId);
      let s = r[r.length - 1];
      -1 !== i ? e.duration > r[i].duration && (r[i] = e, n()) : (r.length < oe || e.duration > s.duration) && (r.push(e), n());
    },
    estimateP98Interaction() {
      let n = Math.min(r.length - 1, Math.floor(e() / 50));
      return r[n];
    }
  };
}
function oi(e) {
  s7();
  let r = e === z.INITIAL_LOAD ? 0 : s9();
  let n = {
    stopped: !1
  };
  function i() {
    return s9() - r;
  }
  return {
    getViewInteractionCount: () => n.stopped ? n.interactionCount : i(),
    stopViewInteractionCount: () => {
      n = {
        stopped: !0,
        interactionCount: i()
      };
    }
  };
}
function os() {
  return $$ny29($$b7.EVENT) && window.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype;
}
function oo(e, r, n, i, s, o, a) {
  let h = s === z.INITIAL_LOAD;
  let d = !0;
  let p = [];
  let g = sW(i, o);
  function m() {
    if (!d && !h && p.length > 0) {
      let e = Math.max(...p);
      e < g.timeStamp - o.relative && a(e);
    }
  }
  let {
    stop
  } = nR(e, r, n, i, e => {
    d && (d = !1, e.hadActivity && p.push(vk(o.timeStamp, e.end)), m());
  });
  return {
    stop: () => {
      stop();
      g.stop();
    },
    setLoadEvent: e => {
      h && (h = !1, p.push(e), m());
    }
  };
}
export function $$oa14() {
  let e;
  let r = window.visualViewport;
  return Math.round(e = r ? r.pageLeft - r.offsetLeft : void 0 !== window.scrollX ? window.scrollX : window.pageXOffset || 0);
}
export function $$ol15() {
  let e;
  let r = window.visualViewport;
  return Math.round(e = r ? r.pageTop - r.offsetTop : void 0 !== window.scrollY ? window.scrollY : window.pageYOffset || 0);
}
export function $$ou20(e) {
  g || (g = oc(e));
  return g;
}
function oc(e) {
  return new c(r => {
    let {
      throttled
    } = _$$n(() => {
      r.notify($$oh18());
    }, 200);
    return _$$q(e, window, "resize", throttled, {
      capture: !0,
      passive: !0
    }).stop;
  });
}
export function $$oh18() {
  let e = window.visualViewport;
  return e ? {
    width: Number(e.width * e.scale),
    height: Number(e.height * e.scale)
  } : {
    width: Number(window.innerWidth || 0),
    height: Number(window.innerHeight || 0)
  };
}
let od = OY;
function of(e, r, n, i = og(e)) {
  let s = 0;
  let o = 0;
  let a = 0;
  let h = i.subscribe(({
    scrollDepth: e,
    scrollTop: i,
    scrollHeight: h
  }) => {
    let d = !1;
    if (e > s && (s = e, d = !0), h > o) {
      o = h;
      let e = $S();
      a = vk(r.relative, e);
      d = !0;
    }
    d && n({
      maxDepth: Math.min(s, o),
      maxDepthScrollTop: i,
      maxScrollHeight: o,
      maxScrollHeightTime: a
    });
  });
  return {
    stop: () => h.unsubscribe()
  };
}
function op() {
  let e = $$ol15();
  let {
    height
  } = $$oh18();
  return {
    scrollHeight: Math.round((document.scrollingElement || document.documentElement).scrollHeight),
    scrollDepth: Math.round(height + e),
    scrollTop: e
  };
}
function og(e, r = od) {
  return new c(n => {
    function i() {
      n.notify(op());
    }
    if (window.ResizeObserver) {
      let n = _$$n(i, r, {
        leading: !1,
        trailing: !0
      });
      let s = document.scrollingElement || document.documentElement;
      let o = new ResizeObserver(dm(n.throttled));
      s && o.observe(s);
      let a = _$$q(e, window, "scroll", n.throttled, {
        passive: !0
      });
      return () => {
        n.cancel();
        o.disconnect();
        a.stop();
      };
    }
  });
}
function om(e, r, n, i, s, o, a) {
  let h = {};
  let {
    stop,
    setLoadEvent
  } = oo(e, r, n, i, o, a, e => {
    h.loadingTime = e;
    s();
  });
  let {
    stop: _stop8
  } = of(i, a, e => {
    h.scroll = e;
  });
  let {
    stop: _stop9
  } = sK(i, a.relative, e => {
    h.cumulativeLayoutShift = e;
    s();
  });
  let {
    stop: _stop0,
    getInteractionToNextPaint,
    setViewEnd
  } = or(i, a.relative, o);
  return {
    stop: () => {
      stop();
      _stop9();
      _stop8();
    },
    stopINPTracking: _stop0,
    setLoadEvent,
    setViewEnd,
    getCommonViewMetrics: () => (h.interactionToNextPaint = getInteractionToNextPaint(), h)
  };
}
function ov(e, r) {
  let {
    stop
  } = _$$q(e, window, "pageshow", e => {
    e.persisted && r(e);
  }, {
    capture: !0
  });
  return stop;
}
function oy(e, r, n) {
  sj(e.relative, e => {
    r.firstContentfulPaint = e;
    r.largestContentfulPaint = {
      value: e
    };
    n();
  });
}
let ob = 3e3;
let oO = 5 * _$$iW;
let ox = 5 * _$$iW;
function ow(e, r, n, i, s, o, a, h) {
  let d;
  let p;
  let g = new Set();
  let m = v(z.INITIAL_LOAD, Oc(), h);
  function v(o, a, h) {
    let d = ok(r, n, i, s, e, o, a, h);
    g.add(d);
    d.stopObservable.subscribe(() => {
      g.$$delete(d);
    });
    return d;
  }
  function y(e) {
    return e.subscribe(({
      oldLocation: e,
      newLocation: r
    }) => {
      oS(e, r) && (m.end(), m = v(z.ROUTE_CHANGE));
    });
  }
  (function() {
    r.subscribe(10, () => {
      m = v(z.ROUTE_CHANGE, void 0, {
        name: m.name,
        service: m.service,
        version: m.version,
        context: m.contextManager.getContext()
      });
    });
    r.subscribe(9, () => {
      m.end({
        sessionIsActive: !1
      });
    });
  })();
  a && (p = y(o), s.trackBfcacheViews && (d = ov(s, e => {
    m.end();
    let r = FR(e.timeStamp);
    m = v(z.BF_CACHE, r, void 0);
  })));
  return {
    addTiming: (e, r = _$$nx()) => {
      m.addTiming(e, r);
    },
    startView: (e, r) => {
      m.end({
        endClocks: r
      });
      m = v(z.ROUTE_CHANGE, r, e);
    },
    setViewContext: e => {
      m.contextManager.setContext(e);
    },
    setViewContextProperty: (e, r) => {
      m.contextManager.setContextProperty(e, r);
    },
    setViewName: e => {
      m.setViewName(e);
    },
    getViewContext: () => m.contextManager.getContext(),
    stop: () => {
      p && p.unsubscribe();
      d && d();
      m.end();
      g.forEach(e => e.stop());
    }
  };
}
function ok(e, r, n, i, s, o, a = M8(), h) {
  let d;
  let p = Q();
  let g = new c();
  let m = {};
  let v = 0;
  let y = yG(s);
  let b = ed();
  let x = !0;
  let w = h?.name;
  let k = h?.service || i.service;
  let _ = h?.version || i.version;
  let S = h?.context;
  S && b.setContext(S);
  let E = {
    id: p,
    name: w,
    startClocks: a,
    service: k,
    version: _,
    context: S
  };
  e.notify(1, E);
  e.notify(2, E);
  let {
    throttled,
    cancel
  } = _$$n(B, ob, {
    leading: !1
  });
  let {
    setLoadEvent,
    setViewEnd,
    stop,
    stopINPTracking,
    getCommonViewMetrics
  } = om(e, r, n, i, V, o, a);
  let {
    stop: _stop1,
    initialViewMetrics
  } = o === z.INITIAL_LOAD ? sY(i, a, setLoadEvent, V) : {
    stop: _$$l,
    initialViewMetrics: {}
  };
  o === z.BF_CACHE && oy(a, initialViewMetrics, V);
  let {
    stop: _stop10,
    eventCounts
  } = sN(e, p, V);
  let Z = yb(B, oO);
  let F = e.subscribe(11, e => {
    e.reason === y5.UNLOADING && B();
  });
  function U() {
    e.notify(3, {
      id: p,
      name: w,
      context: b.getContext(),
      startClocks: a,
      sessionIsActive: x
    });
  }
  function V() {
    U();
    throttled();
  }
  function B() {
    cancel();
    U();
    v += 1;
    let r = void 0 === d ? _$$nx() : d.timeStamp;
    e.notify(4, {
      customTimings: m,
      documentVersion: v,
      id: p,
      name: w,
      service: k,
      version: _,
      context: b.getContext(),
      loadingType: o,
      location: y,
      startClocks: a,
      commonViewMetrics: getCommonViewMetrics(),
      initialViewMetrics,
      duration: vk(a.timeStamp, r),
      isActive: void 0 === d,
      sessionIsActive: x,
      eventCounts
    });
  }
  B();
  b.changeObservable.subscribe(V);
  return {
    get name() {
      return w;
    },
    service: k,
    version: _,
    contextManager: b,
    stopObservable: g,
    end(r = {}) {
      var n;
      var i;
      d || (d = null !== (n = r.endClocks) && void 0 !== n ? n : M8(), x = r.sessionIsActive || i, e.notify(5, {
        endClocks: d
      }), e.notify(6, {
        endClocks: d
      }), vG(Z), setViewEnd(d.relative), stop(), F.unsubscribe(), B(), wg(() => {
        this.stop();
      }, ox));
    },
    stop() {
      _stop1();
      _stop10();
      stopINPTracking();
      g.notify();
    },
    addTiming(e, r) {
      if (d) return;
      let n = pu(r) ? r : vk(a.timeStamp, r);
      m[o_(e)] = n;
      V();
    },
    setViewName(e) {
      w = e;
      B();
    }
  };
}
function o_(e) {
  let r = e.replace(/[^a-zA-Z0-9-_.@$]/g, "_");
  r !== e && Vy.warn(`Invalid timing name: ${e}, sanitized to: ${r}`);
  return r;
}
function oS(e, r) {
  return e.pathname !== r.pathname || !oE(r.hash) && oA(r.hash) !== oA(e.hash);
}
function oE(e) {
  let r = e.substring(1);
  return "" !== r && !!document.getElementById(r);
}
function oA(e) {
  let r = e.indexOf("?");
  return r < 0 ? e : e.slice(0, r);
}
function oC(e, r, n, i, s, o, a, h, d, p) {
  e.subscribe(4, r => e.notify(12, oT(r, n, h)));
  r.register(0, ({
    startTime: e,
    eventType: r
  }) => {
    let n = d.findView(e);
    return n ? {
      type: r,
      service: n.service,
      version: n.version,
      context: n.context,
      view: {
        id: n.id,
        name: n.name
      }
    } : ug;
  });
  return ow(i, e, s, o, n, a, !n.trackViewsManually, p);
}
function oT(e, r, n) {
  var i;
  var s;
  var o;
  var a;
  var h;
  var d;
  var p;
  var g;
  var m;
  var v;
  var y;
  var b;
  var O;
  var x;
  var w;
  var k;
  var _;
  var S;
  let E = n.getReplayStats(e.id);
  let A = e.commonViewMetrics?.cumulativeLayoutShift?.devicePixelRatio;
  let C = {
    _dd: {
      document_version: e.documentVersion,
      replay_stats: E,
      cls: A ? {
        device_pixel_ratio: A
      } : void 0,
      configuration: {
        start_session_replay_recording_manually: r.startSessionReplayRecordingManually
      }
    },
    date: e.startClocks.timeStamp,
    type: $$L6.VIEW,
    view: {
      action: {
        count: e.eventCounts.actionCount
      },
      frustration: {
        count: e.eventCounts.frustrationCount
      },
      cumulative_layout_shift: e.commonViewMetrics.cumulativeLayoutShift?.value,
      cumulative_layout_shift_time: Zj(e.commonViewMetrics.cumulativeLayoutShift?.time),
      cumulative_layout_shift_target_selector: e.commonViewMetrics.cumulativeLayoutShift?.targetSelector,
      first_byte: Zj(e.initialViewMetrics.navigationTimings?.firstByte),
      dom_complete: Zj(e.initialViewMetrics.navigationTimings?.domComplete),
      dom_content_loaded: Zj(e.initialViewMetrics.navigationTimings?.domContentLoaded),
      dom_interactive: Zj(e.initialViewMetrics.navigationTimings?.domInteractive),
      error: {
        count: e.eventCounts.errorCount
      },
      first_contentful_paint: Zj(e.initialViewMetrics.firstContentfulPaint),
      first_input_delay: Zj(e.initialViewMetrics.firstInput?.delay),
      first_input_time: Zj(e.initialViewMetrics.firstInput?.time),
      first_input_target_selector: e.initialViewMetrics.firstInput?.targetSelector,
      interaction_to_next_paint: Zj(e.commonViewMetrics.interactionToNextPaint?.value),
      interaction_to_next_paint_time: Zj(e.commonViewMetrics.interactionToNextPaint?.time),
      interaction_to_next_paint_target_selector: e.commonViewMetrics.interactionToNextPaint?.targetSelector,
      is_active: e.isActive,
      name: e.name,
      largest_contentful_paint: Zj(e.initialViewMetrics.largestContentfulPaint?.value),
      largest_contentful_paint_target_selector: e.initialViewMetrics.largestContentfulPaint?.targetSelector,
      load_event: Zj(e.initialViewMetrics.navigationTimings?.loadEvent),
      loading_time: nd(Zj(e.commonViewMetrics.loadingTime)),
      loading_type: e.loadingType,
      long_task: {
        count: e.eventCounts.longTaskCount
      },
      performance: oI(e.commonViewMetrics, e.initialViewMetrics),
      resource: {
        count: e.eventCounts.resourceCount
      },
      time_spent: Zj(e.duration)
    },
    display: e.commonViewMetrics.scroll ? {
      scroll: {
        max_depth: e.commonViewMetrics.scroll.maxDepth,
        max_depth_scroll_top: e.commonViewMetrics.scroll.maxDepthScrollTop,
        max_scroll_height: e.commonViewMetrics.scroll.maxScrollHeight,
        max_scroll_height_time: Zj(e.commonViewMetrics.scroll.maxScrollHeightTime)
      }
    } : void 0,
    privacy: {
      replay_level: r.defaultPrivacyLevel
    }
  };
  RI(e.customTimings) || (C.view.custom_timings = LG(e.customTimings, Zj));
  return {
    rawRumEvent: C,
    startTime: e.startClocks.relative,
    duration: e.duration,
    domainContext: {
      location: e.location
    }
  };
}
function oI({
  cumulativeLayoutShift: e,
  interactionToNextPaint: r
}, {
  firstContentfulPaint: n,
  firstInput: i,
  largestContentfulPaint: s
}) {
  return {
    cls: e && {
      score: e.value,
      timestamp: Zj(e.time),
      target_selector: e.targetSelector,
      previous_rect: e.previousRect,
      current_rect: e.currentRect
    },
    fcp: n && {
      timestamp: Zj(n)
    },
    fid: i && {
      duration: Zj(i.delay),
      timestamp: Zj(i.time),
      target_selector: i.targetSelector
    },
    inp: r && {
      duration: Zj(r.value),
      timestamp: Zj(r.time),
      target_selector: r.targetSelector
    },
    lcp: s && {
      timestamp: Zj(s.value),
      target_selector: s.targetSelector,
      resource_url: s.resourceUrl
    }
  };
}
let oP = _$$iW;
let oR = eY;
let oM = [];
function oD(e, r, n, i) {
  let s = new c();
  let o = new c();
  let a = tI(e.sessionStoreStrategyType, e, r, n);
  oM.push(() => a.stop());
  let h = rz({
    expireDelay: oR
  });
  function d() {
    let e = a.getSession();
    if (!e) {
      let e = tc();
      let r = document.cookie.split(/\s*;\s*/).filter(e => e.startsWith("_dd_s"));
      A2("Unexpected session state", {
        session: e,
        isSyntheticsTest: eU(),
        createdTimestamp: e?.created,
        expireTimestamp: e?.expire,
        cookie: {
          count: r.length,
          ...r
        }
      });
      return {
        id: "invalid",
        trackingType: eH,
        isReplayForced: !1,
        anonymousId: void 0
      };
    }
    return {
      id: e.id,
      trackingType: e[r],
      isReplayForced: !!e.forcedReplay,
      anonymousId: e.anonymousId
    };
  }
  oM.push(() => h.stop());
  a.renewObservable.subscribe(() => {
    h.add(d(), $S());
    s.notify();
  });
  a.expireObservable.subscribe(() => {
    o.notify();
    h.closeActive($S());
  });
  a.expandOrRenewSession();
  h.add(d(), Oc().relative);
  i.observable.subscribe(() => {
    i.isGranted() ? a.expandOrRenewSession() : a.expire();
  });
  oN(e, () => {
    i.isGranted() && a.expandOrRenewSession();
  });
  o$(e, () => a.expandSession());
  oL(e, () => a.restartSession());
  return {
    findSession: (e, r) => h.find(e, r),
    renewObservable: s,
    expireObservable: o,
    sessionStateUpdateObservable: a.sessionStateUpdateObservable,
    expire: a.expire,
    updateSessionState: a.updateSessionState
  };
}
function oN(e, r) {
  let {
    stop
  } = l(e, window, ["click", "touchstart", "keydown", "scroll"], r, {
    capture: !0,
    passive: !0
  });
  oM.push(stop);
}
function o$(e, r) {
  let n = () => {
    "visible" === document.visibilityState && r();
  };
  let {
    stop
  } = _$$q(e, document, "visibilitychange", n);
  oM.push(stop);
  let s = yb(n, oP);
  oM.push(() => {
    vG(s);
  });
}
function oL(e, r) {
  let {
    stop
  } = _$$q(e, window, "resume", r, {
    capture: !0
  });
  oM.push(stop);
}
let oj = "rum";
function oz(e, r, n) {
  let i = oD(e, oj, r => oF(e, r), n);
  i.expireObservable.subscribe(() => {
    r.notify(9);
  });
  i.renewObservable.subscribe(() => {
    r.notify(10);
  });
  i.sessionStateUpdateObservable.subscribe(({
    previousState: e,
    newState: r
  }) => {
    if (!e.forcedReplay && r.forcedReplay) {
      let e = i.findSession();
      e && (e.isReplayForced = !0);
    }
  });
  return {
    findTrackedSession: e => {
      let r = i.findSession(e);
      if (r && "0" !== r.trackingType) return {
        id: r.id,
        sessionReplay: "1" === r.trackingType ? 1 : r.isReplayForced ? 2 : 0,
        anonymousId: r.anonymousId
      };
    },
    expire: i.expire,
    expireObservable: i.expireObservable,
    setForcedReplay: () => i.updateSessionState({
      forcedReplay: "1"
    })
  };
}
function oZ() {
  let e = {
    id: "00000000-aaaa-0000-aaaa-000000000000",
    sessionReplay: Ww("records") ? 1 : 0
  };
  return {
    findTrackedSession: () => e,
    expire: _$$l,
    expireObservable: new c(),
    setForcedReplay: _$$l
  };
}
function oF(e, r) {
  return oU(r) ? r : _$$ic(e.sessionSampleRate) ? _$$ic(e.sessionReplaySampleRate) ? "1" : "2" : "0";
}
function oU(e) {
  return "0" === e || "1" === e || "2" === e;
}
function oV(e, r, n, i, s, o) {
  let a = e.replica;
  let h = Z(e, {
    endpoint: e.rumEndpointBuilder,
    encoder: o(2)
  }, a && {
    endpoint: a.rumEndpointBuilder,
    transformMessage: e => kg(e, {
      application: {
        id: a.applicationId
      }
    }),
    encoder: o(3)
  }, n, i, s);
  r.subscribe(13, e => {
    e.type === $$L6.VIEW ? h.upsert(e, e.view.id) : h.add(e);
  });
  return h;
}
function oB(e) {
  let r = Y9();
  e.subscribe(13, e => {
    r.send("rum", e);
  });
}
let oq = eY;
function oW(e, r, n, i) {
  let s;
  let o = rz({
    expireDelay: oq
  });
  e.subscribe(1, ({
    startClocks: e
  }) => {
    let r = i.href;
    o.add(h({
      url: r,
      referrer: s || document.referrer
    }), e.relative);
    s = r;
  });
  e.subscribe(6, ({
    endClocks: e
  }) => {
    o.closeActive(e.relative);
  });
  let a = n.subscribe(({
    newLocation: e
  }) => {
    let r = o.find();
    if (r) {
      let n = $S();
      o.closeActive(n);
      o.add(h({
        url: e.href,
        referrer: r.referrer
      }), n);
    }
  });
  function h({
    url: e,
    referrer: r
  }) {
    return {
      url: e,
      referrer: r
    };
  }
  r.register(0, ({
    startTime: e,
    eventType: r
  }) => {
    let n = o.find(e);
    return n ? {
      type: r,
      view: {
        url: n.url,
        referrer: n.referrer
      }
    } : ug;
  });
  return {
    findUrl: e => o.find(e),
    stop: () => {
      a.unsubscribe();
      o.stop();
    }
  };
}
function oY(e, r) {
  let n = yG(r);
  return new c(i => {
    let {
      stop
    } = oG(e, a);
    let {
      stop: _stop11
    } = oX(e, a);
    function a() {
      if (n.href === r.href) return;
      let e = yG(r);
      i.notify({
        newLocation: e,
        oldLocation: n
      });
      n = e;
    }
    return () => {
      stop();
      _stop11();
    };
  });
}
function oG(e, r) {
  let {
    stop
  } = _$$H(oH("pushState"), "pushState", ({
    onPostCall: e
  }) => {
    e(r);
  });
  let {
    stop: _stop12
  } = _$$H(oH("replaceState"), "replaceState", ({
    onPostCall: e
  }) => {
    e(r);
  });
  let {
    stop: _stop13
  } = _$$q(e, window, "popstate", r);
  return {
    stop: () => {
      stop();
      _stop12();
      _stop13();
    }
  };
}
function oX(e, r) {
  return _$$q(e, window, "hashchange", r);
}
function oH(e) {
  return Object.prototype.hasOwnProperty.call(history, e) ? history : History.prototype;
}
let oK = eY;
function oJ(e, r, n) {
  let i = rz({
    expireDelay: oK
  });
  e.subscribe(1, ({
    startClocks: e
  }) => {
    i.add({}, e.relative);
  });
  e.subscribe(6, ({
    endClocks: e
  }) => {
    i.closeActive(e.relative);
  });
  r.register(0, ({
    startTime: e,
    eventType: r
  }) => {
    if (!n.trackFeatureFlagsForEvents.concat([$$L6.VIEW, $$L6.ERROR]).includes(r)) return $O;
    let s = i.find(e);
    return !s || RI(s) ? $O : {
      type: r,
      feature_flags: s
    };
  });
  return {
    addFeatureFlagEvaluation: (e, r) => {
      let n = i.find();
      n && (n[e] = r);
    }
  };
}
let o0 = 10 * OY;
function o1(e, r, n, i) {
  r.enabled && _$$ic(e.customerDataTelemetrySampleRate) && (o6(), v = !1, n.subscribe(13, () => {
    v = !0;
  }), i.subscribe(({
    bytesCount: e,
    messagesCount: r
  }) => {
    v && (m.batchCount += 1, o3(m.batchBytesCount, e), o3(m.batchMessagesCount, r));
  }), yb(o2, o0));
}
function o2() {
  0 !== m.batchCount && (A2("Customer data measures", m), o6());
}
function o5() {
  return {
    min: 1 / 0,
    max: 0,
    sum: 0
  };
}
function o3(e, r) {
  e.sum += r;
  e.min = Math.min(e.min, r);
  e.max = Math.max(e.max, r);
}
function o6() {
  m = {
    batchCount: 0,
    batchBytesCount: o5(),
    batchMessagesCount: o5()
  };
}
let o4 = 4e3;
let o8 = 500;
let o7 = eY;
function o9(e, r, n = o8) {
  let i;
  let s = rz({
    expireDelay: o7,
    maxEntries: o4
  });
  $$ny29($$b7.VISIBILITY_STATE) && performance.getEntriesByType($$b7.VISIBILITY_STATE).forEach(e => {
    a("hidden" === e.name ? "hidden" : "active", e.startTime);
  });
  a(ar(), $S());
  let {
    stop
  } = l(r, window, ["pageshow", "focus", "blur", "visibilitychange", "resume", "freeze", "pagehide"], e => {
    a(at(e), e.timeStamp);
  }, {
    capture: !0
  });
  function a(e, r = $S()) {
    e !== i && (i = e, s.closeActive(r), s.add({
      state: i,
      startTime: r
    }, r));
  }
  function h(e, r, n) {
    return s.findAll(r, n).some(r => r.state === e);
  }
  e.register(0, ({
    startTime: e,
    duration: r = 0,
    eventType: i
  }) => i === $$L6.VIEW ? {
    type: i,
    _dd: {
      page_states: ae(s.findAll(e, r), e, n)
    }
  } : i === $$L6.ACTION || i === $$L6.ERROR ? {
    type: i,
    view: {
      in_foreground: h("active", e, 0)
    }
  } : $O);
  return {
    wasInPageStateDuringPeriod: h,
    addPageState: a,
    stop: () => {
      stop();
      s.stop();
    }
  };
}
function ae(e, r, n) {
  if (0 !== e.length) return e.slice(-n).reverse().map(({
    state: e,
    startTime: n
  }) => ({
    state: e,
    start: Zj(vk(r, n))
  }));
}
function at(e) {
  return "freeze" === e.type ? "frozen" : "pagehide" === e.type ? e.persisted ? "frozen" : "terminated" : ar();
}
function ar() {
  return "hidden" === document.visibilityState ? "hidden" : document.hasFocus() ? "active" : "passive";
}
function an(e, r) {
  let n;
  let i = requestAnimationFrame(dm(() => {
    n = $$oh18();
  }));
  let s = $$ou20(r).subscribe(e => {
    n = e;
  }).unsubscribe;
  e.register(0, ({
    eventType: e
  }) => ({
    type: e,
    display: n ? {
      viewport: n
    } : void 0
  }));
  return {
    stop: () => {
      s();
      i && cancelAnimationFrame(i);
    }
  };
}
function ai(e, r) {
  let n = window.cookieStore ? as(e) : aa;
  return new c(e => n(r, r => e.notify(r)));
}
function as(e) {
  return (r, n) => _$$q(e, window.cookieStore, "change", e => {
    let i = e.changed.find(e => e.name === r) || e.deleted.find(e => e.name === r);
    i && n(i.value);
  }).stop;
}
let ao = OY;
function aa(e, r) {
  let n = B(document.cookie, e);
  let i = yb(() => {
    let i = B(document.cookie, e);
    i !== n && r(i);
  }, ao);
  return () => {
    vG(i);
  };
}
let al = "datadog-ci-visibility-test-execution-id";
function au(e, r, n = ai(e, al)) {
  var i;
  let s = eR(al) || window.Cypress?.env("traceId");
  let o = n.subscribe(e => {
    s = e;
  });
  r.register(0, ({
    eventType: e
  }) => "string" != typeof s ? $O : {
    type: e,
    session: {
      type: "ci_test"
    },
    ci_test: {
      test_execution_id: s
    }
  });
  return {
    stop: () => {
      o.unsubscribe();
    }
  };
}
function ac(e, r) {
  let n = ng(r, {
    type: $$b7.LONG_ANIMATION_FRAME,
    buffered: !0
  }).subscribe(r => {
    for (let n of r) {
      let r = FR(n.startTime);
      let i = {
        date: r.timeStamp,
        long_task: {
          id: Q(),
          entry_type: j.LONG_ANIMATION_FRAME,
          duration: Zj(n.duration),
          blocking_duration: Zj(n.blockingDuration),
          first_ui_event_timestamp: Zj(n.firstUIEventTimestamp),
          render_start: Zj(n.renderStart),
          style_and_layout_start: Zj(n.styleAndLayoutStart),
          start_time: Zj(n.startTime),
          scripts: n.scripts.map(e => ({
            duration: Zj(e.duration),
            pause_duration: Zj(e.pauseDuration),
            forced_style_and_layout_duration: Zj(e.forcedStyleAndLayoutDuration),
            start_time: Zj(e.startTime),
            execution_start: Zj(e.executionStart),
            source_url: e.sourceURL,
            source_function_name: e.sourceFunctionName,
            source_char_position: e.sourceCharPosition,
            invoker: e.invoker,
            invoker_type: e.invokerType,
            window_attribution: e.windowAttribution
          }))
        },
        type: $$L6.LONG_TASK,
        _dd: {
          discarded: !1
        }
      };
      e.notify(12, {
        rawRumEvent: i,
        startTime: r.relative,
        duration: n.duration,
        domainContext: {
          performanceEntry: n
        }
      });
    }
  });
  return {
    stop: () => n.unsubscribe()
  };
}
function ah(e, r) {
  let n = ng(r, {
    type: $$b7.LONG_TASK,
    buffered: !0
  }).subscribe(n => {
    for (let i of n) {
      if (i.entryType !== $$b7.LONG_TASK || !r.trackLongTasks) break;
      let n = FR(i.startTime);
      let s = {
        date: n.timeStamp,
        long_task: {
          id: Q(),
          entry_type: j.LONG_TASK,
          duration: Zj(i.duration)
        },
        type: $$L6.LONG_TASK,
        _dd: {
          discarded: !1
        }
      };
      e.notify(12, {
        rawRumEvent: s,
        startTime: n.relative,
        duration: i.duration,
        domainContext: {
          performanceEntry: i
        }
      });
    }
  });
  return {
    stop() {
      n.unsubscribe();
    }
  };
}
function ad(e) {
  e.register(0, ({
    eventType: e
  }) => eU() ? {
    type: e,
    session: {
      type: "synthetics"
    },
    synthetics: {
      test_id: eZ(),
      result_id: eF(),
      injected: ez()
    }
  } : $O);
}
function af(e, r, n) {
  let i = 0;
  let s = !1;
  return {
    isLimitReached() {
      if (0 === i && wg(() => {
        i = 0;
      }, _$$iW), (i += 1) <= r || s) {
        s = !1;
        return !1;
      }
      if (i === r + 1) {
        s = !0;
        try {
          n({
            message: `Reached max number of ${e}s by minute: ${r}`,
            source: _$$g.AGENT,
            startClocks: M8()
          });
        } finally {
          s = !1;
        }
      }
      return !0;
    }
  };
}
function ap(e, r, n) {
  let i = Go(e);
  let s = n(i);
  WP(r).forEach(([r, n]) => ag(e, i, r.split(/\.|(?=\[\])/), n));
  return s;
}
function ag(e, r, n, i) {
  let [s, ...o] = n;
  if ("[]" === s) {
    Array.isArray(e) && Array.isArray(r) && e.forEach((e, n) => ag(e, r[n], o, i));
    return;
  }
  if (av(e) && av(r)) {
    if (o.length > 0) return ag(e[s], r[s], o, i);
    am(e, s, r[s], i);
  }
}
function am(e, r, n, i) {
  let s = _$$P(n);
  s === i ? e[r] = _$$a(n) : "object" === i && ("undefined" === s || "null" === s) && (e[r] = {});
}
function av(e) {
  return "object" === _$$P(e);
}
let ay = {
  "view.name": "string",
  "view.url": "string",
  "view.referrer": "string"
};
let ab = {
  context: "object"
};
let aO = {
  service: "string",
  version: "string"
};
function ax(e, r, n, i) {
  y = {
    [$$L6.VIEW]: {
      "view.performance.lcp.resource_url": "string",
      ...ab,
      ...ay,
      ...aO
    },
    [$$L6.ERROR]: {
      "error.message": "string",
      "error.stack": "string",
      "error.resource.url": "string",
      "error.fingerprint": "string",
      ...ab,
      ...ay,
      ...aO
    },
    [$$L6.RESOURCE]: {
      "resource.url": "string",
      ...(_$$sr(R9.WRITABLE_RESOURCE_GRAPHQL) ? {
        "resource.graphql": "object"
      } : {}),
      ...ab,
      ...ay,
      ...aO
    },
    [$$L6.ACTION]: {
      "action.target.name": "string",
      ...ab,
      ...ay,
      ...aO
    },
    [$$L6.LONG_TASK]: {
      "long_task.scripts[].source_url": "string",
      "long_task.scripts[].invoker": "string",
      ...ab,
      ...ay
    },
    [$$L6.VITAL]: {
      ...ab,
      ...ay
    }
  };
  let s = {
    [$$L6.ERROR]: af($$L6.ERROR, e.eventRateLimiterThreshold, i),
    [$$L6.ACTION]: af($$L6.ACTION, e.eventRateLimiterThreshold, i),
    [$$L6.VITAL]: af($$L6.VITAL, e.eventRateLimiterThreshold, i)
  };
  r.subscribe(12, ({
    startTime: i,
    duration: o,
    rawRumEvent: a,
    domainContext: h,
    customerContext: d
  }) => {
    let p = n.triggerHook(0, {
      eventType: a.type,
      startTime: i,
      duration: o
    });
    if (p === ug) return;
    let g = kg(p, {
      context: d
    }, a);
    aw(g, e.beforeSend, h, s) && (RI(g.context) && delete g.context, r.notify(13, g));
  });
}
function aw(e, r, n, i) {
  var s;
  if (r) {
    let i = ap(e, y[e.type], e => r(e, n));
    if (!1 === i && e.type !== $$L6.VIEW) return !1;
    !1 === i && Vy.warn("Can't dismiss view events using beforeSend!");
  }
  return !i[e.type]?.isLimitReached();
}
function ak(e, r, n, i) {
  e.register(0, ({
    eventType: e,
    startTime: s
  }) => {
    let o;
    let a;
    let h;
    let d = r.findTrackedSession(s);
    let p = i.findView(s);
    return d && p ? (e === $$L6.VIEW ? (o = !!n.getReplayStats(p.id) || void 0, a = 1 === d.sessionReplay, h = !!p.sessionIsActive && void 0) : o = !!n.isRecording() || void 0, {
      type: e,
      session: {
        id: d.id,
        type: "user",
        has_replay: o,
        sampled_for_replay: a,
        is_active: h
      }
    }) : ug;
  });
}
function aS(e) {
  e.register(0, ({
    eventType: e
  }) => ({
    type: e,
    connectivity: _$$q2()
  }));
}
function aE(e, r, n) {
  e.register(0, ({
    eventType: e
  }) => ({
    type: e,
    _dd: {
      format_version: 2,
      drift: TP(),
      configuration: {
        session_sample_rate: LI(r.sessionSampleRate, 3),
        session_replay_sample_rate: LI(r.sessionReplaySampleRate, 3),
        profiling_sample_rate: LI(r.profilingSampleRate, 3)
      },
      browser_sdk_version: d0() ? "6.13.0" : void 0,
      sdk_name: n
    },
    application: {
      id: r.applicationId
    },
    date: _$$nx(),
    source: "browser"
  }));
}
let aA = XP;
let aC = [$$L6.ACTION, $$L6.ERROR, $$L6.LONG_TASK, $$L6.RESOURCE, $$L6.VITAL];
function aT(e) {
  return {
    addEvent: (r, n, i, s) => {
      aC.includes(n.type) && e.notify(12, {
        startTime: r,
        rawRumEvent: n,
        domainContext: i,
        duration: s
      });
    }
  };
}
export function $$aI28(e, r, n, i, s, o, a, h) {
  let d = [];
  let p = new rR();
  let g = aA();
  p.subscribe(13, e => b("rum", e));
  let m = e => {
    p.notify(14, {
      error: e
    });
    A2("Error reported to customer", {
      "error.message": e.message
    });
  };
  let v = _T(e);
  let y = v.subscribe(e => {
    p.notify(11, e);
  });
  d.push(() => y.unsubscribe());
  let O = a5("browser-rum-sdk", e, m, v, s);
  d.push(O.stop);
  O.setContextProvider("application.id", () => e.applicationId);
  let x = d0() ? oZ() : oz(e, p, o);
  if (O.setContextProvider("session.id", () => {
    var e;
    return x.findTrackedSession()?.id;
  }), O.setContextProvider("usr.anonymous_id", () => {
    var e;
    return x.findTrackedSession()?.anonymousId;
  }), d0()) oB(p); else {
    let r = oV(e, p, m, v, x.expireObservable, s);
    d.push(() => r.stop());
    o1(e, O, p, r.flushObservable);
  }
  let w = rA();
  let k = oY(e, location);
  let {
    observable,
    stop: _stop16
  } = rT();
  d.push(_stop16);
  aE(g, e, h);
  let A = o9(g, e);
  let C = rF(p);
  d.push(() => C.stop());
  O.setContextProvider("view.id", () => {
    var e;
    return C.findView()?.id;
  });
  let T = oW(p, g, k, location);
  d.push(() => T.stop());
  let I = oJ(p, g, e);
  ak(g, x, r, C);
  aS(g);
  let P = ef(g, e, "rum", !0);
  let R = em(g, e, x, "rum");
  let M = ey(g, e, "rum");
  let {
    actionContexts,
    addAction,
    addEvent,
    stop: _stop17
  } = aP(p, g, e, A, w, observable, m);
  d.push(_stop17);
  O.setContextProvider("action.id", () => actionContexts.findActionId());
  let {
    addTiming,
    startView,
    setViewName,
    setViewContext,
    setViewContextProperty,
    getViewContext,
    stop
  } = oC(p, g, e, location, w, observable, k, r, C, i);
  d.push(stop);
  let {
    stop: _stop14
  } = sA(p, e, A);
  if (d.push(_stop14), e.trackLongTasks) {
    if ($$ny29($$b7.LONG_ANIMATION_FRAME)) {
      let {
        stop: _stop15
      } = ac(p, e);
      d.push(_stop15);
    } else ah(p, e);
  }
  let {
    addError
  } = ss(p, e);
  na(p, e, x, R, M);
  let W = G(p, A, a);
  let Y = rI(e.applicationId, x, C, actionContexts, T);
  d.push(() => n.stop());
  return {
    addAction,
    addEvent,
    addError,
    addTiming,
    addFeatureFlagEvaluation: I.addFeatureFlagEvaluation,
    startView,
    setViewContext,
    setViewContextProperty,
    getViewContext,
    setViewName,
    lifeCycle: p,
    viewHistory: C,
    session: x,
    stopSession: () => x.expire(),
    getInternalContext: Y.get,
    startDurationVital: W.startDurationVital,
    stopDurationVital: W.stopDurationVital,
    addDurationVital: W.addDurationVital,
    globalContext: P,
    userContext: R,
    accountContext: M,
    stop: () => {
      d.forEach(e => e());
    },
    hooks: g
  };
}
function aP(e, r, n, i, s, o, a) {
  let h = iV(e, r, s, o, n);
  let d = aT(e);
  let p = an(r, n);
  let g = au(n, r);
  ad(r);
  ax(n, e, r, a);
  return {
    pageStateHistory: i,
    addAction: h.addAction,
    addEvent: d.addEvent,
    actionContexts: h.actionContexts,
    stop: () => {
      h.stop();
      g.stop();
      p.stop();
      i.stop();
    }
  };
}
export function $$aR16(e, {
  session: r,
  viewContext: n,
  errorType: i
}) {
  let s = r ? r.id : "no-session-id";
  let o = [];
  void 0 !== i && o.push(`error-type=${i}`);
  n && (o.push(`seed=${n.id}`), o.push(`from=${n.startClocks.timeStamp}`));
  let a = aM(e);
  let h = `/rum/replay/sessions/${s}`;
  return `${a}${h}?${o.join("&")}`;
}
function aM(e) {
  let r = e.site;
  let n = e.subdomain || aD(e);
  return `https://${n ? `${n}.` : ""}${r}`;
}
function aD(e) {
  switch (e.site) {
    case NW:
    case dV:
      return "app";
    case Bb:
      return "dd";
    default:
      return;
  }
}
export const X2 = $$Z0;
export const eT = $$nU1;
export const o = $$nF2;
export const $m = $$nL3;
export const NT = $$nj4;
export const Wd = $$nz5;
export const bb = $$L6;
export const _$$do = $$b7;
export const yF = $$is8;
export const wI = $$nA9;
export const W3 = $$rC10;
export const PJ = $$nB11;
export const dT = $$nW12;
export const $4 = $$nC13;
export const Gn = $$oa14;
export const zL = $$ol15;
export const dx = $$aR16;
export const rf = $$nH17;
export const pB = $$oh18;
export const wR = $$nE19;
export const g1 = $$ou20;
export const XS = $$n_21;
export const p_ = $$nS22;
export const $5 = $$t823;
export const AB = $$rw24;
export const jR = $$nq25;
export const ei = $$ns26;
export const Ie = $$nY27;
export const rJ = $$aI28;
export const s5 = $$ny29; 
