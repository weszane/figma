import { useState, useEffect, useLayoutEffect, useDebugValue, useSyncExternalStore } from "react";
/**
* @license React
* use-sync-external-store-shim.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

function s(e, r) {
  return e === r && (0 !== e || 1 / e == 1 / r) || e != e && r != r;
}
var o = "function" == typeof Object.is ? Object.is : s;
var a = useState;
var h = useEffect;
var d = useLayoutEffect;
var p = useDebugValue;
function g(e, r) {
  var n = r();
  var i = a({
    inst: {
      value: n,
      getSnapshot: r
    }
  });
  var s = i[0].inst;
  var o = i[1];
  d(function () {
    s.value = n;
    s.getSnapshot = r;
    m(s) && o({
      inst: s
    });
  }, [e, n, r]);
  h(function () {
    m(s) && o({
      inst: s
    });
    return e(function () {
      m(s) && o({
        inst: s
      });
    });
  }, [e]);
  p(n);
  return n;
}
function m(e) {
  var r = e.getSnapshot;
  e = e.value;
  try {
    var n = r();
    return !o(e, n);
  } catch (e) {
    return !0;
  }
}
function v(e, r) {
  return r();
}
var y = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? v : g;
exports.useSyncExternalStore = void 0 !== useSyncExternalStore ? useSyncExternalStore : y;