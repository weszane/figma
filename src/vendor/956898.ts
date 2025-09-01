import { XZ, B6 } from "../vendor/130505";
import { Component, forwardRef, createElement } from "react";
import { yJ, AO } from "../vendor/488412";
import { A as _$$A } from "../vendor/710480";
import { A as _$$A2 } from "../vendor/20707";
import { A as _$$A3 } from "../vendor/258635";
Component;
Component;
var p = function (e, r) {
  return "function" == typeof e ? e(r) : e;
};
var g = function (e, r) {
  return "string" == typeof e ? yJ(e, null, null, r) : e;
};
var m = function (e) {
  return e;
};
var v = forwardRef;
function y(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
void 0 === v && (v = m);
var b = v(function (e, r) {
  var n = e.innerRef;
  var i = e.navigate;
  var o = e.onClick;
  var d = _$$A2(e, ["innerRef", "navigate", "onClick"]);
  var p = d.target;
  var g = _$$A({}, d, {
    onClick: function (e) {
      try {
        o && o(e);
      } catch (r) {
        e.preventDefault();
        return r;
      }
      e.defaultPrevented || 0 !== e.button || p && "_self" !== p || y(e) || (e.preventDefault(), i());
    }
  });
  m !== v ? g.ref = r || n : g.ref = n;
  return createElement("a", g);
});
var $$O0 = v(function (e, r) {
  var n = e.component;
  var y = void 0 === n ? b : n;
  var O = e.replace;
  var x = e.to;
  var w = e.innerRef;
  var k = _$$A2(e, ["component", "replace", "to", "innerRef"]);
  return createElement(XZ.Consumer, null, function (e) {
    e || _$$A3(!1);
    var n = e.history;
    var i = g(p(x, e.location), e.location);
    var h = i ? n.createHref(i) : "";
    var b = _$$A({}, k, {
      href: h,
      navigate: function () {
        var r = p(x, e.location);
        var i = AO(e.location) === AO(g(r));
        (O || i ? n.replace : n.push)(r);
      }
    });
    m !== v ? b.ref = r || w : b.innerRef = w;
    return createElement(y, b);
  });
});
var x = function (e) {
  return e;
};
var w = forwardRef;
function k() {
  for (e = $$arguments.length, r = Array(e), n = 0, void 0; n < e; n++) {
    var e;
    var r;
    var n;
    r[n] = $$arguments[n];
  }
  return r.filter(function (e) {
    return e;
  }).join(" ");
}
void 0 === w && (w = x);
w(function (e, r) {
  var n = e["aria-current"];
  var o = void 0 === n ? "page" : n;
  var m = e.activeClassName;
  var v = void 0 === m ? "active" : m;
  var y = e.activeStyle;
  var b = e.className;
  var _ = e.exact;
  var S = e.isActive;
  var E = e.location;
  var A = e.sensitive;
  var C = e.strict;
  var T = e.style;
  var I = e.to;
  var P = e.innerRef;
  var R = _$$A2(e, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
  return createElement(XZ.Consumer, null, function (e) {
    e || _$$A3(!1);
    var n = E || e.location;
    var h = g(p(I, n), n);
    var m = h.pathname;
    var M = m && m.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var D = M ? B6(n.pathname, {
      path: M,
      exact: _,
      sensitive: A,
      strict: C
    }) : null;
    var N = !!(S ? S(D, n) : D);
    var $ = "function" == typeof b ? b(N) : b;
    var L = "function" == typeof T ? T(N) : T;
    N && ($ = k($, v), L = _$$A({}, L, y));
    var j = _$$A({
      "aria-current": N && o || null,
      className: $,
      style: L,
      to: h
    }, R);
    x !== w ? j.ref = r || P : j.innerRef = P;
    return createElement($$O0, j);
  });
});
export const N_ = $$O0;