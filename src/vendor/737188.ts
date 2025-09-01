import { createElement, Children, isValidElement, cloneElement, Fragment } from "react";
import { qw, JY } from "../vendor/336448";
function o(e) {
  return a(e) || h(e) || d(e) || g();
}
function a(e) {
  if (Array.isArray(e)) return p(e);
}
function h(e) {
  if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
}
function d(e, r) {
  if (e) {
    if ("string" == typeof e) return p(e, r);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, r);
  }
}
function p(e, r) {
  (null == r || r > e.length) && (r = e.length);
  for (n = 0, i = Array(r), void 0; n < r; n++) {
    var n;
    var i;
    i[n] = e[n];
  }
  return i;
}
function g() {
  throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function m(e, r) {
  for (n = qw(e), o = [], a = 0, h = 0, void 0; h < n.length; h++) {
    var n;
    var o;
    var a;
    var h;
    var d = n[h];
    if ("nl" === d.t && r.nl2br) {
      o.push(createElement("br", {
        key: "linkified-".concat(++a)
      }));
      continue;
    }
    if (!d.isLink || !r.check(d)) {
      o.push(d.toString());
      continue;
    }
    var p = r.resolve(d);
    var g = p.formatted;
    var m = p.formattedHref;
    var v = p.tagName;
    var y = p.className;
    var b = p.target;
    var O = p.rel;
    var x = p.attributes;
    var w = {
      key: "linkified-".concat(++a),
      href: m
    };
    if (y && (w.className = y), b && (w.target = b), O && (w.rel = O), x) for (var k in x) w[k] = x[k];
    o.push(createElement(v, w, g));
  }
  return o;
}
function v(e, r) {
  var n = $$arguments.length > 2 && void 0 !== $$arguments[2] ? $$arguments[2] : 0;
  if (0 === Children.count(e.props.children)) return e;
  var s = [];
  Children.forEach(e.props.children, function (e) {
    "string" == typeof e ? (n += 1, s.push.apply(s, o(m(e, r)))) : isValidElement(e) ? "string" == typeof e.type && r.ignoreTags.indexOf(e.type.toUpperCase()) >= 0 ? s.push(e) : s.push(v(e, r, ++n)) : s.push(e);
  });
  var a = {
    key: "linkified-element-".concat(n)
  };
  for (var h in e.props) a[h] = e.props[h];
  return cloneElement(e, a, s);
}
export var $$y0 = function (e) {
  var r = {
    key: "linkified-element-wrapper"
  };
  for (var n in e) "options" !== n && "tagName" !== n && "children" !== n && (r[n] = e[n]);
  var o = new JY(e.options);
  var a = e.tagName || Fragment || "span";
  var h = e.children;
  return v(createElement(a, r, h), o, 0);
};
export const A = $$y0;