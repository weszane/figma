import { Buf8, shrinkBuf } from "../vendor/997643";
var s = !0;
var o = !0;
try {
  String.fromCharCode.apply(null, [0]);
} catch (e) {
  s = !1;
}
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch (e) {
  o = !1;
}
for (a = new Buf8(256), h = 0, void 0; h < 256; h++) {
  var a;
  var h;
  a[h] = h >= 252 ? 6 : h >= 248 ? 5 : h >= 240 ? 4 : h >= 224 ? 3 : h >= 192 ? 2 : 1;
}
function d(e, r) {
  if (r < 65534 && (e.subarray && o || !e.subarray && s)) return String.fromCharCode.apply(null, shrinkBuf(e, r));
  for (n = "", a = 0, void 0; a < r; a++) {
    var n;
    var a;
    n += String.fromCharCode(e[a]);
  }
  return n;
}
a[254] = a[254] = 1;
exports.string2buf = function (e) {
  var r;
  var n;
  var s;
  var o;
  var a;
  var h = e.length;
  var d = 0;
  for (o = 0; o < h; o++) {
    (64512 & (n = e.charCodeAt(o))) == 55296 && o + 1 < h && (64512 & (s = e.charCodeAt(o + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (s - 56320), o++);
    d += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
  }
  for (a = 0, r = new Buf8(d), o = 0; a < d; o++) {
    (64512 & (n = e.charCodeAt(o))) == 55296 && o + 1 < h && (64512 & (s = e.charCodeAt(o + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (s - 56320), o++);
    n < 128 ? r[a++] = n : (n < 2048 ? r[a++] = 192 | n >>> 6 : (n < 65536 ? r[a++] = 224 | n >>> 12 : (r[a++] = 240 | n >>> 18, r[a++] = 128 | n >>> 12 & 63), r[a++] = 128 | n >>> 6 & 63), r[a++] = 128 | 63 & n);
  }
  return r;
};
exports.buf2binstring = function (e) {
  return d(e, e.length);
};
exports.binstring2buf = function (e) {
  for (r = new Buf8(e.length), n = 0, s = r.length, void 0; n < s; n++) {
    var r;
    var n;
    var s;
    r[n] = e.charCodeAt(n);
  }
  return r;
};
exports.buf2string = function (e, r) {
  var n;
  var i;
  var s;
  var o;
  var h = r || e.length;
  var p = Array(2 * h);
  for (i = 0, n = 0; n < h;) {
    if ((s = e[n++]) < 128) {
      p[i++] = s;
      continue;
    }
    if ((o = a[s]) > 4) {
      p[i++] = 65533;
      n += o - 1;
      continue;
    }
    for (s &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && n < h;) {
      s = s << 6 | 63 & e[n++];
      o--;
    }
    if (o > 1) {
      p[i++] = 65533;
      continue;
    }
    s < 65536 ? p[i++] = s : (s -= 65536, p[i++] = 55296 | s >> 10 & 1023, p[i++] = 56320 | 1023 & s);
  }
  return d(p, i);
};
exports.utf8border = function (e, r) {
  var n;
  for ((r = r || e.length) > e.length && (r = e.length), n = r - 1; n >= 0 && (192 & e[n]) == 128;) n--;
  return n < 0 || 0 === n ? r : n + a[e[n]] > r ? n : r;
};