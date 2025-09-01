exports.byteLength = p;
exports.toByteArray = m;
exports.fromByteArray = b;
for (n = [], i = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, h = o.length, void 0; a < h; ++a) {
  var n;
  var i;
  var s;
  var o;
  var a;
  var h;
  n[a] = o[a];
  i[o.charCodeAt(a)] = a;
}
function d(e) {
  var r = e.length;
  if (r % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  -1 === n && (n = r);
  var i = n === r ? 0 : 4 - n % 4;
  return [n, i];
}
function p(e) {
  var r = d(e);
  var n = r[0];
  var i = r[1];
  return (n + i) * 3 / 4 - i;
}
function g(e, r, n) {
  return (r + n) * 3 / 4 - n;
}
function m(e) {
  var r;
  var n;
  var o = d(e);
  var a = o[0];
  var h = o[1];
  var p = new s(g(e, a, h));
  var m = 0;
  var v = h > 0 ? a - 4 : a;
  for (n = 0; n < v; n += 4) {
    r = i[e.charCodeAt(n)] << 18 | i[e.charCodeAt(n + 1)] << 12 | i[e.charCodeAt(n + 2)] << 6 | i[e.charCodeAt(n + 3)];
    p[m++] = r >> 16 & 255;
    p[m++] = r >> 8 & 255;
    p[m++] = 255 & r;
  }
  2 === h && (r = i[e.charCodeAt(n)] << 2 | i[e.charCodeAt(n + 1)] >> 4, p[m++] = 255 & r);
  1 === h && (r = i[e.charCodeAt(n)] << 10 | i[e.charCodeAt(n + 1)] << 4 | i[e.charCodeAt(n + 2)] >> 2, p[m++] = r >> 8 & 255, p[m++] = 255 & r);
  return p;
}
function v(e) {
  return n[e >> 18 & 63] + n[e >> 12 & 63] + n[e >> 6 & 63] + n[63 & e];
}
function y(e, r, n) {
  for (i = [], s = r, void 0; s < n; s += 3) {
    var i;
    var s;
    i.push(v((e[s] << 16 & 0xff0000) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2])));
  }
  return i.join("");
}
function b(e) {
  for (i = e.length, s = i % 3, o = [], a = 16383, h = 0, d = i - s, void 0; h < d; h += a) {
    var r;
    var i;
    var s;
    var o;
    var a;
    var h;
    var d;
    o.push(y(e, h, h + a > d ? d : h + a));
  }
  1 === s ? o.push(n[(r = e[i - 1]) >> 2] + n[r << 4 & 63] + "==") : 2 === s && o.push(n[(r = (e[i - 2] << 8) + e[i - 1]) >> 10] + n[r >> 4 & 63] + n[r << 2 & 63] + "=");
  return o.join("");
}
i["-".charCodeAt(0)] = 62;
i["_".charCodeAt(0)] = 63;