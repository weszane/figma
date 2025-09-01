var i;
!function (e, s, o) {
  function a(e) {
    var r = this;
    var n = "";
    r.x = 0;
    r.y = 0;
    r.z = 0;
    r.w = 0;
    r.next = function () {
      var e = r.x ^ r.x << 11;
      r.x = r.y;
      r.y = r.z;
      r.z = r.w;
      return r.w ^= r.w >>> 19 ^ e ^ e >>> 8;
    };
    e === (0 | e) ? r.x = e : n += e;
    for (var i = 0; i < n.length + 64; i++) {
      r.x ^= 0 | n.charCodeAt(i);
      r.next();
    }
  }
  function h(e, r) {
    r.x = e.x;
    r.y = e.y;
    r.z = e.z;
    r.w = e.w;
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
  }.call(exports, require, exports, s)) && (s.exports = i) : this.xor128 = d;
}(0, module = require.nmd(module), require.amdD);