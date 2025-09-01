import { useRef, useEffect, useMemo } from "react";
export function $$s0(e, r, n) {
  var s = this;
  var o = useRef(null);
  var a = useRef(0);
  var h = useRef(null);
  var d = useRef([]);
  var p = useRef();
  var g = useRef();
  var m = useRef(e);
  var v = useRef(!0);
  m.current = e;
  var y = !r && 0 !== r && "undefined" != typeof window;
  if ("function" != typeof e) throw TypeError("Expected a function");
  r = +r || 0;
  var b = !!(n = n || {}).leading;
  var O = !("trailing" in n) || !!n.trailing;
  var x = "maxWait" in n;
  var w = x ? Math.max(+n.maxWait || 0, r) : null;
  useEffect(function () {
    v.current = !0;
    return function () {
      v.current = !1;
    };
  }, []);
  return useMemo(function () {
    var e = function (e) {
      var r = d.current;
      var n = p.current;
      d.current = p.current = null;
      a.current = e;
      return g.current = m.current.apply(n, r);
    };
    var n = function (e, r) {
      y && cancelAnimationFrame(h.current);
      h.current = y ? requestAnimationFrame(e) : setTimeout(e, r);
    };
    var i = function (e) {
      if (!v.current) return !1;
      var n = e - o.current;
      var i = e - a.current;
      return !o.current || n >= r || n < 0 || x && i >= w;
    };
    var k = function (r) {
      return (h.current = null, O && d.current) ? e(r) : (d.current = p.current = null, g.current);
    };
    var _ = function () {
      var e = Date.now();
      if (i(e)) return k(e);
      if (v.current) {
        var s = e - o.current;
        var h = e - a.current;
        var d = r - s;
        n(_, x ? Math.min(d, w - h) : d);
      }
    };
    var S = function () {
      for (m = [], y = 0, void 0; y < $$arguments.length; y++) {
        var m;
        var y;
        m[y] = $$arguments[y];
      }
      var O = Date.now();
      var w = i(O);
      if (d.current = m, p.current = s, o.current = O, w) {
        if (!h.current && v.current) {
          a.current = o.current;
          n(_, r);
          return b ? e(o.current) : g.current;
        }
        if (x) {
          n(_, r);
          return e(o.current);
        }
      }
      h.current || n(_, r);
      return g.current;
    };
    S.cancel = function () {
      h.current && (y ? cancelAnimationFrame(h.current) : clearTimeout(h.current));
      a.current = 0;
      d.current = o.current = p.current = h.current = null;
    };
    S.isPending = function () {
      return !!h.current;
    };
    S.flush = function () {
      return h.current ? k(Date.now()) : g.current;
    };
    return S;
  }, [b, x, r, w, O, y]);
}
export const A = $$s0;