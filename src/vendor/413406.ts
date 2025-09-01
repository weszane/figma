import { createElement } from "react";
import l from "../vendor/503698";
var a = l;
var i = ["className", "innerRef"];
function u() {
  return (u = Object.assign ? Object.assign.bind() : function (e) {
    for (var n = 1; n < $$arguments.length; n++) {
      var t = $$arguments[n];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }).apply(this, arguments);
}
export function $$o0(e) {
  var n = e.className;
  var t = e.innerRef;
  var l = function (e, n) {
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
  }(e, i);
  return createElement("rect", u({
    ref: t,
    className: a()("visx-bar", n)
  }, l));
}
export const A = $$o0;