exports.Base64 = void 0;
exports.Base64 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  _encodeBinary: function (e) {
    for (d = "", p = 0, void 0; p < e.length;) {
      var r;
      var n;
      var i;
      var s;
      var o;
      var a;
      var h;
      var d;
      var p;
      r = e.charCodeAt(p++);
      n = e.charCodeAt(p++);
      i = e.charCodeAt(p++);
      s = r >> 2;
      o = (3 & r) << 4 | n >> 4;
      a = (15 & n) << 2 | i >> 6;
      h = 63 & i;
      isNaN(n) ? a = h = 64 : isNaN(i) && (h = 64);
      d = d + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(a) + this._keyStr.charAt(h);
    }
    return d;
  },
  encodeArrayBuffer: function (e) {
    for (n = "", i = new Uint8Array(e), s = i.byteLength, o = 0, void 0; o < s; o++) {
      var n;
      var i;
      var s;
      var o;
      n += String.fromCharCode(i[o]);
    }
    return exports.Base64._encodeBinary(n);
  }
};