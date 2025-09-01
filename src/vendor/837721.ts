import _require3 from "../vendor/913772";
import _require2 from "../vendor/82955";
import _require from "../vendor/185149";
for (i = _require, s = _require2, o = _require3, a = Array(256), h = 0, void 0; h < 256; h++) {
  var i;
  var s;
  var o;
  var a;
  var h;
  a[h] = h >= 252 ? 6 : h >= 248 ? 5 : h >= 240 ? 4 : h >= 224 ? 3 : h >= 192 ? 2 : 1;
}
a[254] = a[254] = 1;
var d = function (e) {
  var r;
  var n;
  var i;
  var o;
  var a;
  var h = e.length;
  var d = 0;
  for (o = 0; o < h; o++) {
    (64512 & (n = e.charCodeAt(o))) == 55296 && o + 1 < h && (64512 & (i = e.charCodeAt(o + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (i - 56320), o++);
    d += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
  }
  for (a = 0, r = s.uint8array ? new Uint8Array(d) : Array(d), o = 0; a < d; o++) {
    (64512 & (n = e.charCodeAt(o))) == 55296 && o + 1 < h && (64512 & (i = e.charCodeAt(o + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (i - 56320), o++);
    n < 128 ? r[a++] = n : (n < 2048 ? r[a++] = 192 | n >>> 6 : (n < 65536 ? r[a++] = 224 | n >>> 12 : (r[a++] = 240 | n >>> 18, r[a++] = 128 | n >>> 12 & 63), r[a++] = 128 | n >>> 6 & 63), r[a++] = 128 | 63 & n);
  }
  return r;
};
var p = function (e, r) {
  var n;
  for ((r = r || e.length) > e.length && (r = e.length), n = r - 1; n >= 0 && (192 & e[n]) == 128;) n--;
  return n < 0 || 0 === n ? r : n + a[e[n]] > r ? n : r;
};
var g = function (e) {
  var r;
  var n;
  var s;
  var o;
  var h = e.length;
  var d = Array(2 * h);
  for (n = 0, r = 0; r < h;) {
    if ((s = e[r++]) < 128) {
      d[n++] = s;
      continue;
    }
    if ((o = a[s]) > 4) {
      d[n++] = 65533;
      r += o - 1;
      continue;
    }
    for (s &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && r < h;) {
      s = s << 6 | 63 & e[r++];
      o--;
    }
    if (o > 1) {
      d[n++] = 65533;
      continue;
    }
    s < 65536 ? d[n++] = s : (s -= 65536, d[n++] = 55296 | s >> 10 & 1023, d[n++] = 56320 | 1023 & s);
  }
  d.length !== n && (d.subarray ? d = d.subarray(0, n) : d.length = n);
  return i.applyFromCharCode(d);
};
exports.utf8encode = function (e) {
  return s.nodebuffer ? o(e, "utf-8") : d(e);
};
exports.utf8decode = function (e) {
  if (s.nodebuffer) return i.transformTo("nodebuffer", e).toString("utf-8");
  e = i.transformTo(s.uint8array ? "uint8array" : "array", e);
  for (r = [], n = 0, o = e.length, a = 65536, void 0; n < o;) {
    var r;
    var n;
    var o;
    var a;
    var h = p(e, Math.min(n + a, o));
    s.uint8array ? r.push(g(e.subarray(n, h))) : r.push(g(e.slice(n, h)));
    n = h;
  }
  return r.join("");
};