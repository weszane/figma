var i;
!function (e, s, o) {
  function a(e) {
    var r = this;
    r.next = function () {
      var e;
      var n;
      var i = r.x;
      var s = r.i;
      e = i[s];
      e ^= e >>> 7;
      n = e ^ e << 24 ^ ((e = i[s + 1 & 7]) ^ e >>> 10) ^ ((e = i[s + 3 & 7]) ^ e >>> 3) ^ ((e = i[s + 4 & 7]) ^ e << 7);
      e = i[s + 7 & 7];
      e ^= e << 13;
      n ^= e ^ e << 9;
      i[s] = n;
      r.i = s + 1 & 7;
      return n;
    };
    (function (e, r) {
      var n;
      var i;
      var s = [];
      if (r === (0 | r)) i = s[0] = r;else for (n = 0, r = "" + r; n < r.length; ++n) s[7 & n] = s[7 & n] << 15 ^ r.charCodeAt(n) + s[n + 1 & 7] << 13;
      for (; s.length < 8;) s.push(0);
      for (n = 0; n < 8 && 0 === s[n]; ++n);
      for (i = 8 == n ? s[7] = -1 : s[n], e.x = s, e.i = 0, n = 256; n > 0; --n) e.next();
    })(r, e);
  }
  function h(e, r) {
    r.x = e.x.slice();
    r.i = e.i;
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
    i && (i.x && h(i, n), s.state = function () {
      return h(n, {});
    });
    return s;
  }
  s && s.exports ? s.exports = d : require.amdD && require.amdO ? void 0 !== (i = function () {
    return d;
  }.call(exports, require, exports, s)) && (s.exports = i) : this.xorshift7 = d;
}(0, module = require.nmd(module), require.amdD);