export function $$i0(e, r, n, i) {
  var s;
  var o = !1;
  var a = 0;
  function h() {
    s && clearTimeout(s);
  }
  function d() {
    h();
    o = !0;
  }
  function p() {
    for (d = $$arguments.length, p = Array(d), g = 0, void 0; g < d; g++) {
      var d;
      var p;
      var g;
      p[g] = $$arguments[g];
    }
    var m = this;
    var v = Date.now() - a;
    function y() {
      a = Date.now();
      n.apply(m, p);
    }
    function b() {
      s = void 0;
    }
    o || (i && !s && y(), h(), void 0 === i && v > e ? y() : !0 !== r && (s = setTimeout(i ? b : y, void 0 === i ? e - v : e)));
  }
  "boolean" != typeof r && (i = n, n = r, r = void 0);
  p.cancel = d;
  return p;
}
export const n = $$i0;