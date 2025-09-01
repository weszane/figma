import r from "../vendor/223108";
import { createElement } from "react";
import i from "../vendor/503698";
var l = r;
var u = i;
var o = ["top", "left", "transform", "className", "children", "innerRef"];
function s() {
  return (s = Object.assign ? Object.assign.bind() : function (e) {
    for (var n = 1; n < $$arguments.length; n++) {
      var t = $$arguments[n];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }).apply(this, arguments);
}
export function $$c0(e) {
  var n = e.top;
  var t = e.left;
  var r = e.transform;
  var l = e.className;
  var i = e.children;
  var c = e.innerRef;
  var f = function (e, n) {
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
  }(e, o);
  return createElement("g", s({
    ref: c,
    className: u()("visx-group", l),
    transform: r || "translate(" + (void 0 === t ? 0 : t) + ", " + (void 0 === n ? 0 : n) + ")"
  }, f), i);
}
$$c0.propTypes = {
  top: l().number,
  left: l().number,
  transform: l().string,
  className: l().string,
  children: l().node,
  innerRef: l().oneOfType([l().string, l().func, l().object])
};
export const A = $$c0;