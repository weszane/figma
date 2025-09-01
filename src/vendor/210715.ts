import { useRef, useEffect, useMemo, useDebugValue } from "react";
import { useSyncExternalStore } from "../vendor/694049";
/**
* @license React
* use-sync-external-store-shim/with-selector.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

function o(e, r) {
  return e === r && (0 !== e || 1 / e == 1 / r) || e != e && r != r;
}
var a = "function" == typeof Object.is ? Object.is : o;
var h = useSyncExternalStore;
var d = useRef;
var p = useEffect;
var g = useMemo;
var m = useDebugValue;
exports.useSyncExternalStoreWithSelector = function (e, r, n, i, s) {
  var o = d(null);
  if (null === o.current) {
    var v = {
      hasValue: !1,
      value: null
    };
    o.current = v;
  } else v = o.current;
  var y = h(e, (o = g(function () {
    function e(e) {
      if (!d) {
        if (d = !0, o = e, e = i(e), void 0 !== s && v.hasValue) {
          var r = v.value;
          if (s(r, e)) return h = r;
        }
        return h = e;
      }
      if (r = h, a(o, e)) return r;
      var n = i(e);
      return void 0 !== s && s(r, n) ? r : (o = e, h = n);
    }
    var o;
    var h;
    var d = !1;
    var p = void 0 === n ? null : n;
    return [function () {
      return e(r());
    }, null === p ? void 0 : function () {
      return e(p());
    }];
  }, [r, n, i, s]))[0], o[1]);
  p(function () {
    v.hasValue = !0;
    v.value = y;
  }, [y]);
  m(y);
  return y;
};