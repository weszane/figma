var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
function i(e, r) {
  return Object.prototype.hasOwnProperty.call(e, r);
}
exports.assign = function (e) {
  for (var r = Array.prototype.slice.call(arguments, 1); r.length;) {
    var n = r.shift();
    if (n) {
      if ("object" != typeof n) throw TypeError(n + "must be non-object");
      for (var s in n) i(n, s) && (e[s] = n[s]);
    }
  }
  return e;
};
exports.shrinkBuf = function (e, r) {
  return e.length === r ? e : e.subarray ? e.subarray(0, r) : (e.length = r, e);
};
var s = {
  arraySet: function (e, r, n, i, s) {
    if (r.subarray && e.subarray) {
      e.set(r.subarray(n, n + i), s);
      return;
    }
    for (var o = 0; o < i; o++) e[s + o] = r[n + o];
  },
  flattenChunks: function (e) {
    var r;
    var n;
    var i;
    var s;
    var o;
    var a;
    for (r = 0, i = 0, n = e.length; r < n; r++) i += e[r].length;
    for (r = 0, a = new Uint8Array(i), s = 0, n = e.length; r < n; r++) {
      o = e[r];
      a.set(o, s);
      s += o.length;
    }
    return a;
  }
};
var o = {
  arraySet: function (e, r, n, i, s) {
    for (var o = 0; o < i; o++) e[s + o] = r[n + o];
  },
  flattenChunks: function (e) {
    return [].concat.apply([], e);
  }
};
exports.setTyped = function (e) {
  e ? (exports.Buf8 = Uint8Array, exports.Buf16 = Uint16Array, exports.Buf32 = Int32Array, exports.assign(exports, s)) : (exports.Buf8 = Array, exports.Buf16 = Array, exports.Buf32 = Array, exports.assign(exports, o));
};
exports.setTyped(n);