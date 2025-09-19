/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
function i(e, n) {
  var i = e.length;
  for (e.push(n); 0 < i;) {
    var t = i - 1 >>> 1;
    var f = e[t];
    if (0 < r(f, n)) {
      e[t] = n;
      e[i] = f;
      i = t;
    } else break;
  }
}
function t(e) {
  return 0 === e.length ? null : e[0];
}
function f(e) {
  if (0 === e.length) return null;
  var n = e[0];
  var i = e.pop();
  if (i !== n) {
    e[0] = i;
    for (t = 0, f = e.length, a = f >>> 1, void 0; t < a;) {
      var t;
      var f;
      var a;
      var o = 2 * (t + 1) - 1;
      var u = e[o];
      var l = o + 1;
      var d = e[l];
      if (0 > r(u, i)) l < f && 0 > r(d, u) ? (e[t] = d, e[l] = i, t = l) : (e[t] = u, e[o] = i, t = o); else if (l < f && 0 > r(d, i)) {
        e[t] = d;
        e[l] = i;
        t = l;
      } else break;
    }
  }
  return n;
}
function r(e, n) {
  var i = e.sortIndex - n.sortIndex;
  return 0 !== i ? i : e.id - n.id;
}
if ("object" == typeof performance && "function" == typeof performance.now) {
  var a;
  var o = performance;
  exports.unstable_now = function () {
    return o.now();
  };
} else {
  var u = Date;
  var l = ExpiringCache.now();
  exports.unstable_now = function () {
    return ExpiringCache.now() - l;
  };
}
var d = [];
var s = [];
var c = 1;
var h = null;
var p = 3;
var g = !1;
var m = !1;
var _ = !1;
var b = "function" == typeof setTimeout ? setTimeout : null;
var y = "function" == typeof clearTimeout ? clearTimeout : null;
var v = "undefined" != typeof setImmediate ? setImmediate : null;
function w(e) {
  for (var n = t(s); null !== n;) {
    if (null === n.callback) f(s); else if (n.startTime <= e) {
      f(s);
      n.sortIndex = n.expirationTime;
      i(d, n);
    } else break;
    n = t(s);
  }
}
function k(e) {
  if (_ = !1, w(e), !m) {
    if (null !== t(d)) {
      m = !0;
      M(S);
    } else {
      var n = t(s);
      null !== n && R(k, n.startTime - e);
    }
  }
}
function S(e, i) {
  m = !1;
  _ && (_ = !1, y(C), C = -1);
  g = !0;
  var r = p;
  try {
    for (w(i), h = t(d); null !== h && (!(h.expirationTime > i) || e && !L());) {
      var a = h.callback;
      if ("function" == typeof a) {
        h.callback = null;
        p = h.priorityLevel;
        var o = a(h.expirationTime <= i);
        i = exports.unstable_now();
        "function" == typeof o ? h.callback = o : h === t(d) && f(d);
        w(i);
      } else f(d);
      h = t(d);
    }
    if (null !== h) var u = !0; else {
      var l = t(s);
      null !== l && R(k, l.startTime - i);
      u = !1;
    }
    return u;
  } finally {
    h = null;
    p = r;
    g = !1;
  }
}
"undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
var E = !1;
var x = null;
var C = -1;
var T = 5;
var P = -1;
function L() {
  return !(exports.unstable_now() - P < T);
}
function N() {
  if (null !== x) {
    var e = exports.unstable_now();
    P = e;
    var i = !0;
    try {
      i = x(!0, e);
    } finally {
      i ? a() : (E = !1, x = null);
    }
  } else E = !1;
}
if ("function" == typeof v) a = function () {
  v(N);
}; else if ("undefined" != typeof MessageChannel) {
  var O = new MessageChannel();
  var ImageDownloadQueue = O.port2;
  O.port1.onmessage = N;
  a = function () {
    ImageDownloadQueue.postMessage(null);
  };
} else a = function () {
  b(N, 0);
};
function M(e) {
  x = e;
  E || (E = !0, a());
}
function R(e, i) {
  C = b(function () {
    e(exports.unstable_now());
  }, i);
}
exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_cancelCallback = function (e) {
  e.callback = null;
};
exports.unstable_continueExecution = function () {
  m || g || (m = !0, M(S));
};
exports.unstable_forceFrameRate = function (e) {
  0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < e ? Math.floor(1e3 / e) : 5;
};
exports.unstable_getCurrentPriorityLevel = function () {
  return p;
};
exports.unstable_getFirstCallbackNode = function () {
  return t(d);
};
exports.unstable_next = function (e) {
  switch (p) {
    case 1:
    case 2:
    case 3:
      var n = 3;
      break;
    default:
      n = p;
  }
  var i = p;
  p = n;
  try {
    return e();
  } finally {
    p = i;
  }
};
exports.unstable_pauseExecution = function () { };
exports.unstable_requestPaint = function () { };
exports.unstable_runWithPriority = function (e, n) {
  switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      e = 3;
  }
  var i = p;
  p = e;
  try {
    return n();
  } finally {
    p = i;
  }
};
exports.unstable_scheduleCallback = function (e, f, r) {
  var a = exports.unstable_now();
  switch (r = "object" == typeof r && null !== r && "number" == typeof (r = r.delay) && 0 < r ? a + r : a, e) {
    case 1:
      var o = -1;
      break;
    case 2:
      o = 250;
      break;
    case 5:
      o = 0x3fffffff;
      break;
    case 4:
      o = 1e4;
      break;
    default:
      o = 5e3;
  }
  o = r + o;
  e = {
    id: c++,
    callback: f,
    priorityLevel: e,
    startTime: r,
    expirationTime: o,
    sortIndex: -1
  };
  r > a ? (e.sortIndex = r, i(s, e), null === t(d) && e === t(s) && (_ ? (y(C), C = -1) : _ = !0, R(k, r - a))) : (e.sortIndex = o, i(d, e), m || g || (m = !0, M(S)));
  return e;
};
exports.unstable_shouldYield = L;
exports.unstable_wrapCallback = function (e) {
  var n = p;
  return function () {
    var i = p;
    p = n;
    try {
      return e.apply(this, arguments);
    } finally {
      p = i;
    }
  };
};
