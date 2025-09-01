var i;
!function (e, s, o) {
  function a(e) {
    var r = this;
    var n = "";
    r.next = function () {
      var e = r.x ^ r.x >>> 2;
      r.x = r.y;
      r.y = r.z;
      r.z = r.w;
      r.w = r.v;
      return (r.d = r.d + 362437 | 0) + (r.v = r.v ^ r.v << 4 ^ (e ^ e << 1)) | 0;
    };
    r.x = 0;
    r.y = 0;
    r.z = 0;
    r.w = 0;
    r.v = 0;
    e === (0 | e) ? r.x = e : n += e;
    for (var i = 0; i < n.length + 64; i++) {
      r.x ^= 0 | n.charCodeAt(i);
      i == n.length && (r.d = r.x << 10 ^ r.x >>> 4);
      r.next();
    }
  }
  function h(e, r) {
    r.x = e.x;
    r.y = e.y;
    r.z = e.z;
    r.w = e.w;
    r.v = e.v;
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
  }.call(exports, require, exports, s)) && (s.exports = i) : this.xorwow = d;
}(0, module = require.nmd(module), require.amdD);