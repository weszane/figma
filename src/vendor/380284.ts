import n from "../vendor/153658";
module.exports = function (t) {
  return t && ("object" == typeof t || "function" == typeof t) && "length" in t && !("setInterval" in t) && "number" != typeof t.nodeType && (Array.isArray(t) || "callee" in t || "item" in t) ? Array.isArray(t) ? t.slice() : function (t) {
    var e = t.length;
    if ((Array.isArray(t) || "object" != typeof t && "function" != typeof t) && n(!1), "number" != typeof e && n(!1), 0 === e || e - 1 in t || n(!1), "function" != typeof t.callee || n(!1), t.hasOwnProperty) try {
      return Array.prototype.slice.call(t);
    } catch (t) {}
    for (r = Array(e), i = 0, void 0; i < e; i++) {
      var r;
      var i;
      r[i] = t[i];
    }
    return r;
  }(t) : [t];
};