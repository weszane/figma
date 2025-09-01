import { createElement, Fragment } from "react";
import l from "../vendor/503698";
import { A as _$$A } from "../vendor/355231";
import { A as _$$A2 } from "../vendor/413406";
import { A as _$$A3 } from "../vendor/49372";
var a = l;
var s = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
function c() {
  return (c = Object.assign ? Object.assign.bind() : function (e) {
    for (var n = 1; n < $$arguments.length; n++) {
      var t = $$arguments[n];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }).apply(this, arguments);
}
export function $$f0(e) {
  var n = e.data;
  var t = e.className;
  var l = e.top;
  var f = e.left;
  var d = e.x0;
  var h = e.x0Scale;
  var p = e.x1Scale;
  var g = e.yScale;
  var m = e.color;
  var v = e.keys;
  var y = e.height;
  var b = e.children;
  var x = function (e, n) {
    if (null == e) return {};
    var t;
    var r;
    var l = {};
    var a = Object.keys(e);
    for (r = 0; r < a.length; r++) {
      t = a[r];
      n.indexOf(t) >= 0 || (l[t] = e[t]);
    }
    return l;
  }(e, s);
  var k = _$$A3(p);
  var S = n.map(function (e, n) {
    return {
      index: n,
      x0: h(d(e)),
      bars: v.map(function (n, t) {
        var r = e[n];
        return {
          index: t,
          key: n,
          value: r,
          width: k,
          x: p(n) || 0,
          y: g(r) || 0,
          color: m(n, t),
          height: y - (g(r) || 0)
        };
      })
    };
  });
  return b ? createElement(Fragment, null, b(S)) : createElement(_$$A, {
    className: a()("visx-bar-group", t),
    top: l,
    left: f
  }, S.map(function (e) {
    return createElement(_$$A, {
      key: "bar-group-" + e.index + "-" + e.x0,
      left: e.x0
    }, e.bars.map(function (n) {
      return createElement(_$$A2, c({
        key: "bar-group-bar-" + e.index + "-" + n.index + "-" + n.value + "-" + n.key,
        x: n.x,
        y: n.y,
        width: n.width,
        height: n.height,
        fill: n.color
      }, x));
    }));
  }));
}
export const A = $$f0;