import { useState, useCallback, useRef } from "react";
import { A as _$$A } from "../vendor/90566";
function o(e, r) {
  return e === r;
}
function a(e) {
  return "function" == typeof e ? function () {
    return e;
  } : e;
}
function h(e) {
  var r = useState(a(e));
  var n = r[0];
  var s = r[1];
  return [n, useCallback(function (e) {
    return s(a(e));
  }, [])];
}
export function $$d0(e, r, n) {
  var a = n && n.equalityFn || o;
  var d = h(e);
  var p = d[0];
  var g = d[1];
  var m = _$$A(useCallback(function (e) {
    return g(e);
  }, [g]), r, n);
  var v = useRef(e);
  a(v.current, e) || (m(e), v.current = e);
  return [p, {
    cancel: m.cancel,
    isPending: m.isPending,
    flush: m.flush
  }];
}
export const A = $$d0;