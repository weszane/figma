import { isMemo, ForwardRef, Memo } from "../vendor/53635";
var s = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
};
var o = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
};
var a = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
};
var h = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
};
var d = {};
function p(e) {
  return isMemo(e) ? h : d[e.$$typeof] || s;
}
d[ForwardRef] = a;
d[Memo] = h;
var g = Object.defineProperty;
var m = Object.getOwnPropertyNames;
var v = Object.getOwnPropertySymbols;
var y = Object.getOwnPropertyDescriptor;
var b = Object.getPrototypeOf;
var O = Object.prototype;
function x(e, r, n) {
  if ("string" != typeof r) {
    if (O) {
      var i = b(r);
      i && i !== O && x(e, i, n);
    }
    var s = m(r);
    v && (s = s.concat(v(r)));
    for (a = p(e), h = p(r), d = 0, void 0; d < s.length; ++d) {
      var a;
      var h;
      var d;
      var w = s[d];
      if (!o[w] && !(n && n[w]) && !(h && h[w]) && !(a && a[w])) {
        var k = y(r, w);
        try {
          g(e, w, k);
        } catch (e) {}
      }
    }
  }
  return e;
}
module.exports = x;