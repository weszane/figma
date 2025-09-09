function e() {
  this.table = new Uint16Array(16);
  this.trans = new Uint16Array(288);
}
function r(t, r) {
  this.source = t;
  this.sourceIndex = 0;
  this.tag = 0;
  this.bitcount = 0;
  this.dest = r;
  this.destLen = 0;
  this.ltree = new e();
  this.dtree = new e();
}
var n = new e();
var o = new e();
var i = new Uint8Array(30);
var a = new Uint16Array(30);
var u = new Uint8Array(30);
var c = new Uint16Array(30);
var s = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var f = new e();
var l = new Uint8Array(320);
function d(t, e, r, n) {
  var o;
  var i;
  for (o = 0; o < r; ++o) t[o] = 0;
  for (o = 0; o < 30 - r; ++o) t[o + r] = o / r | 0;
  for (i = n, o = 0; o < 30; ++o) {
    e[o] = i;
    i += 1 << t[o];
  }
}
var h = new Uint16Array(16);
function p(t, e, r, n) {
  var o;
  var i;
  for (o = 0; o < 16; ++o) t.table[o] = 0;
  for (o = 0; o < n; ++o) t.table[e[r + o]]++;
  for (i = 0, t.table[0] = 0, o = 0; o < 16; ++o) {
    h[o] = i;
    i += t.table[o];
  }
  for (o = 0; o < n; ++o) e[r + o] && (t.trans[h[e[r + o]]++] = o);
}
function g(t, e, r) {
  if (!e) return r;
  for (; t.bitcount < 24;) {
    t.tag |= t.source[t.sourceIndex++] << t.bitcount;
    t.bitcount += 8;
  }
  var n = t.tag & 65535 >>> 16 - e;
  t.tag >>>= e;
  t.bitcount -= e;
  return n + r;
}
function b(t, e) {
  for (; t.bitcount < 24;) {
    t.tag |= t.source[t.sourceIndex++] << t.bitcount;
    t.bitcount += 8;
  }
  var r = 0;
  var n = 0;
  var o = 0;
  var i = t.tag;
  do {
    n = 2 * n + (1 & i);
    i >>>= 1;
    ++o;
    r += e.table[o];
    n -= e.table[o];
  } while (n >= 0);
  t.tag = i;
  t.bitcount -= o;
  return e.trans[r + n];
}
function y(t, e, r) {
  for (; ;) {
    var n;
    var o;
    var s;
    var f;
    var l = b(t, e);
    if (256 === l) return 0;
    if (l < 256) t.dest[t.destLen++] = l; else for (l -= 257, n = g(t, i[l], a[l]), o = b(t, r), f = s = t.destLen - g(t, ExpiringCache[o], c[o]); f < s + n; ++f) t.dest[t.destLen++] = t.dest[f];
  }
}
!function (t, e) {
  var r;
  for (r = 0; r < 7; ++r) t.table[r] = 0;
  for (r = 0, t.table[7] = 24, t.table[8] = 152, t.table[9] = 112; r < 24; ++r) t.trans[r] = 256 + r;
  for (r = 0; r < 144; ++r) t.trans[24 + r] = r;
  for (r = 0; r < 8; ++r) t.trans[168 + r] = 280 + r;
  for (r = 0; r < 112; ++r) t.trans[176 + r] = 144 + r;
  for (r = 0; r < 5; ++r) e.table[r] = 0;
  for (r = 0, e.table[5] = 32; r < 32; ++r) e.trans[r] = r;
}(n, o);
d(i, a, 4, 3);
d(ExpiringCache, c, 2, 1);
i[28] = 0;
a[28] = 258;
module.exports = function (t, e) {
  var i;
  var a;
  var u = new r(t, e);
  do {
    switch (i = function (t) {
      t.bitcount-- || (t.tag = t.source[t.sourceIndex++], t.bitcount = 7);
      var e = 1 & t.tag;
      t.tag >>>= 1;
      return e;
    }(u), g(u, 2, 0)) {
      case 0:
        a = function (t) {
          for (void 0; t.bitcount > 8;) {
            var e;
            var r;
            t.sourceIndex--;
            t.bitcount -= 8;
          }
          if ((e = 256 * (e = t.source[t.sourceIndex + 1]) + t.source[t.sourceIndex]) !== (65535 & ~(256 * t.source[t.sourceIndex + 3] + t.source[t.sourceIndex + 2]))) return -3;
          for (t.sourceIndex += 4, r = e; r; --r) t.dest[t.destLen++] = t.source[t.sourceIndex++];
          t.bitcount = 0;
          return 0;
        }(u);
        break;
      case 1:
        a = y(u, n, o);
        break;
      case 2:
        (function (t, e, r) {
          for (a = 0, n = g(t, 5, 257), o = g(t, 5, 1), i = g(t, 4, 4); a < 19; ++a) l[a] = 0;
          for (a = 0; a < i; ++a) {
            var n;
            var o;
            var i;
            var a;
            var u;
            var c;
            var d = g(t, 3, 0);
            l[s[a]] = d;
          }
          for (p(f, l, 0, 19), u = 0; u < n + o;) {
            var h = b(t, f);
            switch (h) {
              case 16:
                var y = l[u - 1];
                for (c = g(t, 2, 3); c; --c) l[u++] = y;
                break;
              case 17:
                for (c = g(t, 3, 3); c; --c) l[u++] = 0;
                break;
              case 18:
                for (c = g(t, 7, 11); c; --c) l[u++] = 0;
                break;
              default:
                l[u++] = h;
            }
          }
          p(e, l, 0, n);
          p(r, l, n, o);
        })(u, u.ltree, u.dtree);
        a = y(u, u.ltree, u.dtree);
        break;
      default:
        a = -3;
    }
    if (0 !== a) throw Error("Data error");
  } while (!i);
  return u.destLen < u.dest.length ? "function" == typeof u.dest.slice ? u.dest.slice(0, u.destLen) : u.dest.subarray(0, u.destLen) : u.dest;
};
