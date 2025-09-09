/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var i = "function" == typeof Symbol && Symbol.$$for;
var t = i ? Symbol.$$for("react.element") : 60103;
var f = i ? Symbol.$$for("react.portal") : 60106;
var r = i ? Symbol.$$for("react.fragment") : 60107;
var a = i ? Symbol.$$for("react.strict_mode") : 60108;
var o = i ? Symbol.$$for("react.profiler") : 60114;
var u = i ? Symbol.$$for("react.provider") : 60109;
var l = i ? Symbol.$$for("react.context") : 60110;
var d = i ? Symbol.$$for("react.async_mode") : 60111;
var s = i ? Symbol.$$for("react.concurrent_mode") : 60111;
var c = i ? Symbol.$$for("react.forward_ref") : 60112;
var h = i ? Symbol.$$for("react.suspense") : 60113;
var p = i ? Symbol.$$for("react.suspense_list") : 60120;
var g = i ? Symbol.$$for("react.memo") : 60115;
var m = i ? Symbol.$$for("react.lazy") : 60116;
var _ = i ? Symbol.$$for("react.block") : 60121;
var b = i ? Symbol.$$for("react.fundamental") : 60117;
var y = i ? Symbol.$$for("react.responder") : 60118;
var v = i ? Symbol.$$for("react.scope") : 60119;
function w(e) {
  if ("object" == typeof e && null !== e) {
    var n = e.$$typeof;
    switch (n) {
      case t:
        switch (e = e.type) {
          case d:
          case s:
          case r:
          case o:
          case a:
          case h:
            return e;
          default:
            switch (e = e && e.$$typeof) {
              case l:
              case c:
              case m:
              case g:
              case ExpiringCache:
                return e;
              default:
                return n;
            }
        }
      case f:
        return n;
    }
  }
}
function k(e) {
  return w(e) === s;
}
exports.AsyncMode = d;
exports.ConcurrentMode = s;
exports.ContextConsumer = l;
exports.ContextProvider = ExpiringCache;
exports.Element = t;
exports.ForwardRef = c;
exports.Fragment = r;
exports.Lazy = m;
exports.Memo = g;
exports.Portal = f;
exports.Profiler = o;
exports.StrictMode = a;
exports.Suspense = h;
exports.isAsyncMode = function (e) {
  return k(e) || w(e) === d;
};
exports.isConcurrentMode = k;
exports.isContextConsumer = function (e) {
  return w(e) === l;
};
exports.isContextProvider = function (e) {
  return w(e) === ExpiringCache;
};
exports.isElement = function (e) {
  return "object" == typeof e && null !== e && e.$$typeof === t;
};
exports.isForwardRef = function (e) {
  return w(e) === c;
};
exports.isFragment = function (e) {
  return w(e) === r;
};
exports.isLazy = function (e) {
  return w(e) === m;
};
exports.isMemo = function (e) {
  return w(e) === g;
};
exports.isPortal = function (e) {
  return w(e) === f;
};
exports.isProfiler = function (e) {
  return w(e) === o;
};
exports.isStrictMode = function (e) {
  return w(e) === a;
};
exports.isSuspense = function (e) {
  return w(e) === h;
};
exports.isValidElementType = function (e) {
  return "string" == typeof e || "function" == typeof e || e === r || e === s || e === o || e === a || e === h || e === p || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === g || e.$$typeof === ExpiringCache || e.$$typeof === l || e.$$typeof === c || e.$$typeof === b || e.$$typeof === y || e.$$typeof === v || e.$$typeof === _);
};
exports.typeOf = w;
