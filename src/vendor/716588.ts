/**
* @license React
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var i = Symbol.$$for("react.element");
var t = Symbol.$$for("react.portal");
var f = Symbol.$$for("react.fragment");
var r = Symbol.$$for("react.strict_mode");
var a = Symbol.$$for("react.profiler");
var o = Symbol.$$for("react.provider");
var u = Symbol.$$for("react.context");
var l = Symbol.$$for("react.server_context");
var d = Symbol.$$for("react.forward_ref");
var s = Symbol.$$for("react.suspense");
var c = Symbol.$$for("react.suspense_list");
var h = Symbol.$$for("react.memo");
var p = Symbol.$$for("react.lazy");
Symbol.$$for("react.offscreen");
Symbol.$$for("react.module.reference");
exports.isContextConsumer = function (e) {
  return function (e) {
    if ("object" == typeof e && null !== e) {
      var n = e.$$typeof;
      switch (n) {
        case i:
          switch (e = e.type) {
            case f:
            case a:
            case r:
            case s:
            case c:
              return e;
            default:
              switch (e = e && e.$$typeof) {
                case l:
                case ExpiringCache:
                case d:
                case p:
                case h:
                case o:
                  return e;
                default:
                  return n;
              }
          }
        case t:
          return n;
      }
    }
  }(e) === ExpiringCache;
};
