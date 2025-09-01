var i;
!function (e, s, o) {
  function a(e) {
    var r = this;
    r.next = function () {
      var e;
      var n;
      var i = r.w;
      var s = r.X;
      var o = r.i;
      r.w = i = i + 0x61c88647 | 0;
      n = s[o + 34 & 127];
      e = s[o = o + 1 & 127];
      n ^= n << 13;
      e ^= e << 17;
      n ^= n >>> 15;
      e ^= e >>> 12;
      n = s[o] = n ^ e;
      r.i = o;
      return n + (i ^ i >>> 16) | 0;
    };
    (function (e, r) {
      var n;
      var i;
      var s;
      var o;
      var a;
      var h = [];
      var d = 128;
      for (r === (0 | r) ? (i = r, r = null) : (r += "\0", i = 0, d = Math.max(d, r.length)), s = 0, o = -32; o < d; ++o) {
        r && (i ^= r.charCodeAt((o + 32) % r.length));
        0 === o && (a = i);
        i ^= i << 10;
        i ^= i >>> 15;
        i ^= i << 4;
        i ^= i >>> 13;
        o >= 0 && (a = a + 0x61c88647 | 0, s = 0 == (n = h[127 & o] ^= i + a) ? s + 1 : 0);
      }
      for (s >= 128 && (h[127 & (r && r.length || 0)] = -1), s = 127, o = 512; o > 0; --o) {
        i = h[s + 34 & 127];
        n = h[s = s + 1 & 127];
        i ^= i << 13;
        n ^= n << 17;
        i ^= i >>> 15;
        n ^= n >>> 12;
        h[s] = i ^ n;
      }
      e.w = a;
      e.X = h;
      e.i = s;
    })(r, e);
  }
  function h(e, r) {
    r.i = e.i;
    r.w = e.w;
    r.X = e.X.slice();
    return r;
  }
  function d(e, r) {
    null == e && (e = +new Date());
    var n = new a(e);
    var i = r && r.state;
    var s = function () {
      return (n.next() >>> 0) / 0x100000000;
    };
    s.$$double = function () {
      do var e = ((n.next() >>> 11) + (n.next() >>> 0) / 0x100000000) / 2097152; while (0 === e);
      return e;
    };
    s.int32 = n.next;
    s.quick = s;
    i && (i.X && h(i, n), s.state = function () {
      return h(n, {});
    });
    return s;
  }
  s && s.exports ? s.exports = d : require.amdD && require.amdO ? void 0 !== (i = function () {
    return d;
  }.call(exports, require, exports, s)) && (s.exports = i) : this.xor4096 = d;
}(0, module = require.nmd(module), require.amdD);