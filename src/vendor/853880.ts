var i;
!function (e, s, o) {
  function a(e) {
    var r = this;
    var n = p();
    r.next = function () {
      var e = 2091639 * r.s0 + 23283064365386963e-26 * r.c;
      r.s0 = r.s1;
      r.s1 = r.s2;
      return r.s2 = e - (r.c = 0 | e);
    };
    r.c = 1;
    r.s0 = n(" ");
    r.s1 = n(" ");
    r.s2 = n(" ");
    r.s0 -= n(e);
    r.s0 < 0 && (r.s0 += 1);
    r.s1 -= n(e);
    r.s1 < 0 && (r.s1 += 1);
    r.s2 -= n(e);
    r.s2 < 0 && (r.s2 += 1);
  }
  function h(e, r) {
    r.c = e.c;
    r.s0 = e.s0;
    r.s1 = e.s1;
    r.s2 = e.s2;
    return r;
  }
  function d(e, r) {
    var n = new a(e);
    var i = r && r.state;
    var s = n.next;
    s.int32 = function () {
      return 0x100000000 * n.next() | 0;
    };
    s.$$double = function () {
      return s() + (2097152 * s() | 0) * 11102230246251565e-32;
    };
    s.quick = s;
    i && ("object" == typeof i && h(i, n), s.state = function () {
      return h(n, {});
    });
    return s;
  }
  function p() {
    var e = 0xefc8249d;
    return function (r) {
      r = String(r);
      for (var n = 0; n < r.length; n++) {
        var i = .02519603282416938 * (e += r.charCodeAt(n));
        e = i >>> 0;
        i -= e;
        i *= e;
        e = i >>> 0;
        i -= e;
        e += 0x100000000 * i;
      }
      return (e >>> 0) * 23283064365386963e-26;
    };
  }
  s && s.exports ? s.exports = d : require.amdD && require.amdO ? void 0 !== (i = function () {
    return d;
  }.call(exports, require, exports, s)) && (s.exports = i) : this.alea = d;
}(0, module = require.nmd(module), require.amdD);