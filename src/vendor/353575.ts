!function () {
  var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var n = {
    rotl: function (e, r) {
      return e << r | e >>> 32 - r;
    },
    rotr: function (e, r) {
      return e << 32 - r | e >>> r;
    },
    endian: function (e) {
      if (e.constructor == Number) return 0xff00ff & n.rotl(e, 8) | 0xff00ff00 & n.rotl(e, 24);
      for (var r = 0; r < e.length; r++) e[r] = n.endian(e[r]);
      return e;
    },
    randomBytes: function (e) {
      for (var r = []; e > 0; e--) r.push(Math.floor(256 * Math.random()));
      return r;
    },
    bytesToWords: function (e) {
      for (r = [], n = 0, i = 0, void 0; n < e.length; n++, i += 8) {
        var r;
        var n;
        var i;
        r[i >>> 5] |= e[n] << 24 - i % 32;
      }
      return r;
    },
    wordsToBytes: function (e) {
      for (r = [], n = 0, void 0; n < 32 * e.length; n += 8) {
        var r;
        var n;
        r.push(e[n >>> 5] >>> 24 - n % 32 & 255);
      }
      return r;
    },
    bytesToHex: function (e) {
      for (r = [], n = 0, void 0; n < e.length; n++) {
        var r;
        var n;
        r.push((e[n] >>> 4).toString(16));
        r.push((15 & e[n]).toString(16));
      }
      return r.join("");
    },
    hexToBytes: function (e) {
      for (r = [], n = 0, void 0; n < e.length; n += 2) {
        var r;
        var n;
        r.push(parseInt(e.substr(n, 2), 16));
      }
      return r;
    },
    bytesToBase64: function (e) {
      for (n = [], i = 0, void 0; i < e.length; i += 3) {
        var n;
        var i;
        for (s = e[i] << 16 | e[i + 1] << 8 | e[i + 2], o = 0, void 0; o < 4; o++) {
          var s;
          var o;
          8 * i + 6 * o <= 8 * e.length ? n.push(r.charAt(s >>> 6 * (3 - o) & 63)) : n.push("=");
        }
      }
      return n.join("");
    },
    base64ToBytes: function (e) {
      e = e.replace(/[^A-Z0-9+\/]/ig, "");
      for (n = [], i = 0, s = 0, void 0; i < e.length; s = ++i % 4) {
        var n;
        var i;
        var s;
        0 != s && n.push((r.indexOf(e.charAt(i - 1)) & Math.pow(2, -2 * s + 8) - 1) << 2 * s | r.indexOf(e.charAt(i)) >>> 6 - 2 * s);
      }
      return n;
    }
  };
  module.exports = n;
}();