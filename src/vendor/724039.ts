/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var e = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty;
var n = Object.prototype.propertyIsEnumerable;
module.exports = !function () {
  try {
    if (!Object.assign) return !1;
    var t = new String("abc");
    if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
    for (e = {}, r = 0, void 0; r < 10; r++) {
      var e;
      var r;
      e["_" + String.fromCharCode(r)] = r;
    }
    var n = Object.getOwnPropertyNames(e).map(function (t) {
      return e[t];
    });
    if ("0123456789" !== n.join("")) return !1;
    var i = {};
    if ("abcdefghijklmnopqrst".split("").forEach(function (t) {
      i[t] = t;
    }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, i)).join("")) return !1;
    return !0;
  } catch (t) {
    return !1;
  }
}() ? function (t, i) {
  for (s = function (t) {
    if (null == t) throw TypeError("Object.assign cannot be called with null or undefined");
    return Object(t);
  }(t), u = 1, void 0; u < $$arguments.length; u++) {
    var o;
    var a;
    var s;
    var u;
    for (var c in o = Object($$arguments[u])) r.call(o, c) && (s[c] = o[c]);
    if (e) {
      a = e(o);
      for (var l = 0; l < a.length; l++) n.call(o, a[l]) && (s[a[l]] = o[a[l]]);
    }
  }
  return s;
} : Object.assign;