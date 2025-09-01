module.exports = function e(r, n) {
  if (r === n) return !0;
  if (r && n && "object" == typeof r && "object" == typeof n) {
    if (r.constructor !== n.constructor) return !1;
    if (Array.isArray(r)) {
      if ((i = r.length) != n.length) return !1;
      for (s = i; 0 != s--;) if (!e(r[s], n[s])) return !1;
      return !0;
    }
    if (r instanceof Map && n instanceof Map) {
      if (r.size !== n.size) return !1;
      for (s of r.entries()) if (!n.has(s[0])) return !1;
      for (s of r.entries()) if (!e(s[1], n.get(s[0]))) return !1;
      return !0;
    }
    if (r instanceof Set && n instanceof Set) {
      if (r.size !== n.size) return !1;
      for (s of r.entries()) if (!n.has(s[0])) return !1;
      return !0;
    }
    if (ArrayBuffer.isView(r) && ArrayBuffer.isView(n)) {
      if ((i = r.length) != n.length) return !1;
      for (s = i; 0 != s--;) if (r[s] !== n[s]) return !1;
      return !0;
    }
    if (r.constructor === RegExp) return r.source === n.source && r.flags === n.flags;
    if (r.valueOf !== Object.prototype.valueOf) return r.valueOf() === n.valueOf();
    if (r.toString !== Object.prototype.toString) return r.toString() === n.toString();
    if ((i = (o = Object.keys(r)).length) !== Object.keys(n).length) return !1;
    for (s = i; 0 != s--;) if (!Object.prototype.hasOwnProperty.call(n, o[s])) return !1;
    for (s = i; 0 != s--;) {
      var i;
      var s;
      var o;
      var a = o[s];
      if (!e(r[a], n[a])) return !1;
    }
    return !0;
  }
  return r != r && n != n;
};