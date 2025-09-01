import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react";
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

var f = Symbol.$$for("react.element");
var r = Symbol.$$for("react.fragment");
var a = Object.prototype.hasOwnProperty;
var o = __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
var u = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function l(e, n, i) {
  var t;
  var r = {};
  var l = null;
  var d = null;
  for (t in void 0 !== i && (l = "" + i), void 0 !== n.key && (l = "" + n.key), void 0 !== n.ref && (d = n.ref), n) a.call(n, t) && !u.hasOwnProperty(t) && (r[t] = n[t]);
  if (e && e.defaultProps) for (t in n = e.defaultProps) void 0 === r[t] && (r[t] = n[t]);
  return {
    $$typeof: f,
    type: e,
    key: l,
    ref: d,
    props: r,
    _owner: o.current
  };
}
exports.Fragment = r;
exports.jsx = l;
exports.jsxs = l;