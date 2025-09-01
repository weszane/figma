/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (e, r, n, i, s) {
  var o;
  var a;
  var h = 8 * s - i - 1;
  var d = (1 << h) - 1;
  var p = d >> 1;
  var g = -7;
  var m = n ? s - 1 : 0;
  var v = n ? -1 : 1;
  var y = e[r + m];
  for (m += v, o = y & (1 << -g) - 1, y >>= -g, g += h; g > 0; o = 256 * o + e[r + m], m += v, g -= 8);
  for (a = o & (1 << -g) - 1, o >>= -g, g += i; g > 0; a = 256 * a + e[r + m], m += v, g -= 8);
  if (0 === o) o = 1 - p;else {
    if (o === d) return a ? NaN : 1 / 0 * (y ? -1 : 1);
    a += Math.pow(2, i);
    o -= p;
  }
  return (y ? -1 : 1) * a * Math.pow(2, o - i);
};
exports.write = function (e, r, n, i, s, o) {
  var a;
  var h;
  var d;
  var p = 8 * o - s - 1;
  var g = (1 << p) - 1;
  var m = g >> 1;
  var v = 23 === s ? 5960464477539062e-23 : 0;
  var y = i ? 0 : o - 1;
  var b = i ? 1 : -1;
  var O = r < 0 || 0 === r && 1 / r < 0 ? 1 : 0;
  for (isNaN(r = Math.abs(r)) || r === 1 / 0 ? (h = isNaN(r) ? 1 : 0, a = g) : (a = Math.floor(Math.log(r) / Math.LN2), r * (d = Math.pow(2, -a)) < 1 && (a--, d *= 2), a + m >= 1 ? r += v / d : r += v * Math.pow(2, 1 - m), r * d >= 2 && (a++, d /= 2), a + m >= g ? (h = 0, a = g) : a + m >= 1 ? (h = (r * d - 1) * Math.pow(2, s), a += m) : (h = r * Math.pow(2, m - 1) * Math.pow(2, s), a = 0)); s >= 8; e[n + y] = 255 & h, y += b, h /= 256, s -= 8);
  for (a = a << s | h, p += s; p > 0; e[n + y] = 255 & a, y += b, a /= 256, p -= 8);
  e[n + y - b] |= 128 * O;
};