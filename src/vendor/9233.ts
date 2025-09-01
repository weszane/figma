var i;
!function (e, s, o) {
  function a(e) {
    var r = this;
    var n = "";
    r.next = function () {
      var e = r.b;
      var n = r.c;
      var i = r.d;
      var s = r.a;
      e = e << 25 ^ e >>> 7 ^ n;
      n = n - i | 0;
      i = i << 24 ^ i >>> 8 ^ s;
      s = s - e | 0;
      r.b = e = e << 20 ^ e >>> 12 ^ n;
      r.c = n = n - i | 0;
      r.d = i << 16 ^ n >>> 16 ^ s;
      return r.a = s - e | 0;
    };
    r.a = 0;
    r.b = 0;
    r.c = -0x61c88647;
    r.d = 0x517cc1b7;
    e === Math.floor(e) ? (r.a = e / 0x100000000 | 0, r.b = 0 | e) : n += e;
    for (var i = 0; i < n.length + 20; i++) {
      r.b ^= 0 | n.charCodeAt(i);
      r.next();
    }
  }
  function h(e, r) {
    r.a = e.a;
    r.b = e.b;
    r.c = e.c;
    r.d = e.d;
    return r;
  }
  function d(e, r) {
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
    i && ("object" == typeof i && h(i, n), s.state = function () {
      return h(n, {});
    });
    return s;
  }
  s && s.exports ? s.exports = d : require.amdD && require.amdO ? void 0 !== (i = function () {
    return d;
  }.call(exports, require, exports, s)) && (s.exports = i) : this.tychei = d;
}(0, module = require.nmd(module), require.amdD);