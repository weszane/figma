var r = function () {
  for (r = [], n = 0, void 0; n < 256; n++) {
    var e;
    var r;
    var n;
    e = n;
    for (var i = 0; i < 8; i++) e = 1 & e ? 0xedb88320 ^ e >>> 1 : e >>> 1;
    r[n] = e;
  }
  return r;
}();
function n(e, n, i, s) {
  var o = r;
  var a = s + i;
  e ^= -1;
  for (var h = s; h < a; h++) e = e >>> 8 ^ o[(e ^ n[h]) & 255];
  return -1 ^ e;
}
module.exports = n;