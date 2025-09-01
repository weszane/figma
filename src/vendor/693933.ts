import n from "../vendor/153658";
var i = /\./;
var o = /\|\|/;
var a = /\s+\-\s+/;
var s = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/;
var u = /^(\d*)(.*)/;
function c(t, e) {
  if ("" === (t = t.trim())) return !0;
  var r;
  var n;
  var o;
  var a;
  var s;
  var u = e.split(i);
  var c = f(t);
  var h = c.modifier;
  var d = c.rangeComponents;
  switch (h) {
    case "<":
      return -1 === y(u, d);
    case "<=":
      return -1 === (r = y(u, d)) || 0 === r;
    case ">=":
      return l(u, d);
    case ">":
      return 1 === y(u, d);
    case "~":
    case "~>":
      n = d.slice();
      (o = d.slice()).length > 1 && o.pop();
      a = o.length - 1;
      p(s = parseInt(o[a], 10)) && (o[a] = s + 1 + "");
      return l(u, n) && -1 === y(u, o);
    default:
      return 0 === y(u, d);
  }
}
function l(t, e) {
  var r = y(t, e);
  return 1 === r || 0 === r;
}
function f(t) {
  var e = t.split(i);
  var r = e[0].match(s);
  r || n(!1);
  return {
    modifier: r[1],
    rangeComponents: [r[2]].concat(e.slice(1))
  };
}
function p(t) {
  return !isNaN(t) && isFinite(t);
}
function h(t) {
  return !f(t).modifier;
}
function d(t, e) {
  for (var r = t.length; r < e; r++) t[r] = "0";
}
function g(t, e) {
  return (typeof t != typeof e && n(!1), t > e) ? 1 : t < e ? -1 : 0;
}
function y(t, e) {
  for (r = function (t, e) {
    d(t = t.slice(), (e = e.slice()).length);
    for (var r = 0; r < e.length; r++) {
      var n = e[r].match(/^[x*]$/i);
      if (n && (e[r] = t[r] = "0", "*" === n[0] && r === e.length - 1)) for (var i = r; i < t.length; i++) t[i] = "0";
    }
    d(e, t.length);
    return [t, e];
  }(t, e), n = r[0], i = r[1], o = 0, void 0; o < i.length; o++) {
    var r;
    var n;
    var i;
    var o;
    var a = function (t, e) {
      var r = t.match(u)[1];
      var n = e.match(u)[1];
      var i = parseInt(r, 10);
      var o = parseInt(n, 10);
      return p(i) && p(o) && i !== o ? g(i, o) : g(t, e);
    }(n[o], i[o]);
    if (a) return a;
  }
  return 0;
}
var v = {
  contains: function (t, e) {
    var r;
    var i;
    var s;
    r = t.trim();
    i = e.trim();
    return (s = r.split(o)).length > 1 ? s.some(function (t) {
      return v.contains(t, i);
    }) : function (t, e) {
      var r = t.split(a);
      if (r.length > 0 && r.length <= 2 || n(!1), 1 === r.length) return c(r[0], e);
      var i = r[0];
      var o = r[1];
      h(i) && h(o) || n(!1);
      return c(">=" + i, e) && c("<=" + o, e);
    }(r = s[0].trim(), i);
  }
};
module.exports = v;