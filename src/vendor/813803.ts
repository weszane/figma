import { useLayoutEffect, useEffect, useReducer, useState } from "react";
import { YV, T6, AO, Ox } from "../vendor/279343";
/**
* react-virtual
*
* Copyright (c) TanStack
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function i() {
  return (i = Object.assign ? Object.assign.bind() : function (e) {
    for (var r = 1; r < $$arguments.length; r++) {
      var n = $$arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }).apply(this, arguments);
}
var a = "undefined" != typeof document ? useLayoutEffect : useEffect;
function h(e) {
  var r = useReducer(function () {
    return {};
  }, {})[1];
  var n = i({}, e, {
    onChange: function (n) {
      r();
      null == e.onChange || e.onChange(n);
    }
  });
  var h = useState(function () {
    return new YV(n);
  })[0];
  h.setOptions(n);
  useEffect(function () {
    return h._didMount();
  }, []);
  a(function () {
    return h._willUpdate();
  });
  return h;
}
export function $$d0(e) {
  return h(i({
    observeElementRect: T6,
    observeElementOffset: AO,
    scrollToFn: Ox
  }, e));
}
export const Te = $$d0;