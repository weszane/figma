function e(t, d, f, p, g) {
  if (t === d) return t ? [[0, t]] : [];
  if (null != f) {
    var b = function (t, e, r) {
      var i = "number" == typeof r ? {
        index: r,
        length: 0
      } : r.oldRange;
      var n = "number" == typeof r ? null : r.newRange;
      var s = t.length;
      var l = e.length;
      if (0 === i.length && (null === n || 0 === n.length)) {
        var o = i.index;
        var a = t.slice(0, o);
        var c = t.slice(o);
        var u = n ? n.index : null;
        t: {
          var h = o + l - s;
          if (null !== u && u !== h || h < 0 || h > l) break t;
          var d = e.slice(0, h);
          var f = e.slice(h);
          if (f !== c) break t;
          var p = Math.min(o, h);
          var g = a.slice(0, p);
          var b = d.slice(0, p);
          if (g !== b) break t;
          var y = a.slice(p);
          var v = d.slice(p);
          return getDefaultFrameProps(g, y, v, c);
        }
        e: if (null === u || u === o) {
          var d = e.slice(0, o);
          var f = e.slice(o);
          if (d !== a) break e;
          var A = Math.min(s - o, l - o);
          var x = c.slice(c.length - A);
          var N = f.slice(f.length - A);
          if (x !== N) break e;
          var y = c.slice(0, c.length - A);
          var v = f.slice(0, f.length - A);
          return getDefaultFrameProps(a, y, v, x);
        }
      }
      if (i.length > 0 && n && 0 === n.length) r: {
        var g = t.slice(0, i.index);
        var x = t.slice(i.index + i.length);
        var p = g.length;
        var A = x.length;
        if (l < p + A) break r;
        var b = e.slice(0, p);
        var N = e.slice(l - A);
        if (g !== b || x !== N) break r;
        var y = t.slice(p, s - A);
        var v = e.slice(p, l - A);
        return getDefaultFrameProps(g, y, v, x);
      }
      return null;
    }(t, d, f);
    if (b) return b;
  }
  var y = i(t, d);
  var v = t.substring(0, y);
  y = s(t = t.substring(y), d = d.substring(y));
  var A = t.substring(t.length - y);
  var x = function (t, n) {
    if (!t) return [[1, n]];
    if (!n) return [[-1, t]];
    var l;
    var o = t.length > n.length ? t : n;
    var a = t.length > n.length ? n : t;
    var c = o.indexOf(a);
    if (-1 !== c) {
      l = [[1, o.substring(0, c)], [0, a], [1, o.substring(c + a.length)]];
      t.length > n.length && (l[0][0] = l[2][0] = -1);
      return l;
    }
    if (1 === a.length) return [[-1, t], [1, n]];
    var u = function (t, e) {
      var r;
      var n;
      var l;
      var o;
      var a;
      var c = t.length > e.length ? t : e;
      var u = t.length > e.length ? e : t;
      if (c.length < 4 || 2 * u.length < c.length) return null;
      function h(t, e, r) {
        for (c = t.substring(r, r + Math.floor(t.length / 4)), u = -1, h = "", void 0; -1 !== (u = e.indexOf(c, u + 1));) {
          var n;
          var l;
          var o;
          var a;
          var c;
          var u;
          var h;
          var d = i(t.substring(r), e.substring(u));
          var f = s(t.substring(0, r), e.substring(0, u));
          h.length < f + d && (h = e.substring(u - f, u) + e.substring(u, u + d), n = t.substring(0, r - f), l = t.substring(r + d), o = e.substring(0, u - f), a = e.substring(u + d));
        }
        return 2 * h.length >= t.length ? [n, l, o, a, h] : null;
      }
      var d = h(c, u, Math.ceil(c.length / 4));
      var f = h(c, u, Math.ceil(c.length / 2));
      return d || f ? (r = f ? d && d[4].length > f[4].length ? d : f : d, t.length > e.length ? (n = r[0], l = r[1], o = r[2], a = r[3]) : (o = r[0], a = r[1], n = r[2], l = r[3]), [n, l, o, a, r[4]]) : null;
    }(t, n);
    if (u) {
      var h = u[0];
      var d = u[1];
      var f = u[2];
      var p = u[3];
      var g = u[4];
      var m = e(h, f);
      var b = e(d, p);
      return m.concat([[0, g]], b);
    }
    return function (t, e) {
      for (i = t.length, n = e.length, s = Math.ceil((i + n) / 2), l = 2 * s, o = Array(l), a = Array(l), c = 0, void 0; c < l; c++) {
        var i;
        var n;
        var s;
        var l;
        var o;
        var a;
        var c;
        o[c] = -1;
        a[c] = -1;
      }
      o[s + 1] = 0;
      a[s + 1] = 0;
      for (u = i - n, h = u % 2 != 0, d = 0, f = 0, p = 0, g = 0, m = 0, void 0; m < s; m++) {
        var u;
        var h;
        var d;
        var f;
        var p;
        var g;
        var m;
        for (var b = -m + d; b <= m - f; b += 2) {
          for (v = s + b, A = (y = b === -m || b !== m && o[v - 1] < o[v + 1] ? o[v + 1] : o[v - 1] + 1) - b, void 0; y < i && A < n && t.charAt(y) === e.charAt(A);) {
            var y;
            var v;
            var A;
            y++;
            A++;
          }
          if (o[v] = y, y > i) f += 2; else if (A > n) d += 2; else if (h) {
            var x = s + u - b;
            if (x >= 0 && x < l && -1 !== a[x]) {
              var N = i - a[x];
              if (y >= N) return r(t, e, y, A);
            }
          }
        }
        for (var E = -m + p; E <= m - g; E += 2) {
          for (x = s + E, w = (N = E === -m || E !== m && a[x - 1] < a[x + 1] ? a[x + 1] : a[x - 1] + 1) - E, void 0; N < i && w < n && t.charAt(i - N - 1) === e.charAt(n - w - 1);) {
            var N;
            var x;
            var w;
            N++;
            w++;
          }
          if (a[x] = N, N > i) g += 2; else if (w > n) p += 2; else if (!h) {
            var v = s + u - E;
            if (v >= 0 && v < l && -1 !== o[v]) {
              var y = o[v];
              var A = s + y - v;
              if (y >= (N = i - N)) return r(t, e, y, A);
            }
          }
        }
      }
      return [[-1, t], [1, e]];
    }(t, n);
  }(t = t.substring(0, t.length - y), d = d.substring(0, d.length - y));
  v && x.unshift([0, v]);
  A && x.push([0, A]);
  h(x, g);
  p && function (t) {
    for (e = !1, r = [], i = 0, d = null, f = 0, p = 0, g = 0, m = 0, b = 0, void 0; f < t.length;) {
      var e;
      var r;
      var i;
      var d;
      var f;
      var p;
      var g;
      var m;
      var b;
      0 == t[f][0] ? (r[i++] = f, p = m, g = b, m = 0, b = 0, d = t[f][1]) : (1 == t[f][0] ? m += t[f][1].length : b += t[f][1].length, d && d.length <= Math.max(p, g) && d.length <= Math.max(m, b) && (t.splice(r[i - 1], 0, [-1, d]), t[r[i - 1] + 1][0] = 1, i--, f = --i > 0 ? r[i - 1] : -1, p = 0, g = 0, m = 0, b = 0, d = null, e = !0));
      f++;
    }
    for (e && h(t), function (t) {
      function e(t, e) {
        if (!t || !e) return 6;
        var r = t.charAt(t.length - 1);
        var i = e.charAt(0);
        var n = r.match(l);
        var s = i.match(l);
        var h = n && r.match(o);
        var d = s && i.match(o);
        var f = h && r.match(a);
        var p = d && i.match(a);
        var g = f && t.match(c);
        var m = p && e.match(ExpiringCache);
        return g || m ? 5 : f || p ? 4 : n && !h && d ? 3 : h || d ? 2 : n || s ? 1 : 0;
      }
      for (var r = 1; r < t.length - 1;) {
        if (0 == t[r - 1][0] && 0 == t[r + 1][0]) {
          var i = t[r - 1][1];
          var n = t[r][1];
          var h = t[r + 1][1];
          var d = s(i, n);
          if (d) {
            var f = n.substring(n.length - d);
            i = i.substring(0, i.length - d);
            n = f + n.substring(0, n.length - d);
            h = f + h;
          }
          for (p = i, g = n, m = h, b = e(i, n) + e(n, h), void 0; n.charAt(0) === h.charAt(0);) {
            var p;
            var g;
            var m;
            var b;
            i += n.charAt(0);
            n = n.substring(1) + h.charAt(0);
            h = h.substring(1);
            var y = e(i, n) + e(n, h);
            y >= b && (b = y, p = i, g = n, m = h);
          }
          t[r - 1][1] != p && (p ? t[r - 1][1] = p : (t.splice(r - 1, 1), r--), t[r][1] = g, m ? t[r + 1][1] = m : (t.splice(r + 1, 1), r--));
        }
        r++;
      }
    }(t), f = 1; f < t.length;) {
      if (-1 == t[f - 1][0] && 1 == t[f][0]) {
        var y = t[f - 1][1];
        var v = t[f][1];
        var A = n(y, v);
        var x = n(v, y);
        A >= x ? (A >= y.length / 2 || A >= v.length / 2) && (t.splice(f, 0, [0, v.substring(0, A)]), t[f - 1][1] = y.substring(0, y.length - A), t[f + 1][1] = v.substring(A), f++) : (x >= y.length / 2 || x >= v.length / 2) && (t.splice(f, 0, [0, y.substring(0, x)]), t[f - 1][0] = 1, t[f - 1][1] = v.substring(0, v.length - x), t[f + 1][0] = -1, t[f + 1][1] = y.substring(x), f++);
        f++;
      }
      f++;
    }
  }(x);
  return x;
}
function r(t, r, i, n) {
  var s = t.substring(0, i);
  var l = r.substring(0, n);
  var o = t.substring(i);
  var a = r.substring(n);
  var c = e(s, l);
  var u = e(o, a);
  return c.concat(u);
}
function i(t, e) {
  if (!t || !e || t.charAt(0) !== e.charAt(0)) return 0;
  for (r = 0, i = Math.min(t.length, e.length), n = i, s = 0, void 0; r < n;) {
    var r;
    var i;
    var n;
    var s;
    t.substring(s, n) == e.substring(s, n) ? s = r = n : i = n;
    n = Math.floor((i - r) / 2 + r);
  }
  d(t.charCodeAt(n - 1)) && n--;
  return n;
}
function n(t, e) {
  var r = t.length;
  var i = e.length;
  if (0 == r || 0 == i) return 0;
  r > i ? t = t.substring(r - i) : r < i && (e = e.substring(0, r));
  var n = Math.min(r, i);
  if (t == e) return n;
  for (s = 0, l = 1, void 0; ;) {
    var s;
    var l;
    var o = t.substring(n - l);
    var a = e.indexOf(o);
    if (-1 == a) return s;
    l += a;
    (0 == a || t.substring(n - l) == e.substring(0, l)) && (s = l, l++);
  }
}
function s(t, e) {
  if (!t || !e || t.slice(-1) !== e.slice(-1)) return 0;
  for (r = 0, i = Math.min(t.length, e.length), n = i, s = 0, void 0; r < n;) {
    var r;
    var i;
    var n;
    var s;
    t.substring(t.length - n, t.length - s) == e.substring(e.length - n, e.length - s) ? s = r = n : i = n;
    n = Math.floor((i - r) / 2 + r);
  }
  f(t.charCodeAt(t.length - n)) && n--;
  return n;
}
var l = /[^a-zA-Z0-9]/;
var o = /\s/;
var a = /[\r\n]/;
var c = /\n\r?\n$/;
var u = /^\r?\n\r?\n/;
function h(t, e) {
  t.push([0, ""]);
  for (n = 0, l = 0, o = 0, a = "", c = "", void 0; n < t.length;) {
    var r;
    var n;
    var l;
    var o;
    var a;
    var c;
    if (n < t.length - 1 && !t[n][1]) {
      t.splice(n, 1);
      continue;
    }
    switch (t[n][0]) {
      case 1:
        o++;
        c += t[n][1];
        n++;
        break;
      case -1:
        l++;
        a += t[n][1];
        n++;
        break;
      case 0:
        var u = n - o - l - 1;
        if (e) {
          if (u >= 0 && g(t[u][1])) {
            var d = t[u][1].slice(-1);
            if (t[u][1] = t[u][1].slice(0, -1), a = d + a, c = d + c, !t[u][1]) {
              t.splice(u, 1);
              n--;
              var f = u - 1;
              t[f] && 1 === t[f][0] && (o++, c = t[f][1] + c, f--);
              t[f] && -1 === t[f][0] && (l++, a = t[f][1] + a, f--);
              u = f;
            }
          }
          if (p(t[n][1])) {
            var d = t[n][1].charAt(0);
            t[n][1] = t[n][1].slice(1);
            a += d;
            c += d;
          }
        }
        if (n < t.length - 1 && !t[n][1]) {
          t.splice(n, 1);
          break;
        }
        if (a.length > 0 || c.length > 0) {
          a.length > 0 && c.length > 0 && (0 !== (r = i(c, a)) && (u >= 0 ? t[u][1] += c.substring(0, r) : (t.splice(0, 0, [0, c.substring(0, r)]), n++), c = c.substring(r), a = a.substring(r)), 0 !== (r = s(c, a)) && (t[n][1] = c.substring(c.length - r) + t[n][1], c = c.substring(0, c.length - r), a = a.substring(0, a.length - r)));
          var m = o + l;
          0 === a.length && 0 === c.length ? (t.splice(n - m, m), n -= m) : 0 === a.length ? (t.splice(n - m, m, [1, c]), n = n - m + 1) : 0 === c.length ? (t.splice(n - m, m, [-1, a]), n = n - m + 1) : (t.splice(n - m, m, [-1, a], [1, c]), n = n - m + 2);
        }
        0 !== n && 0 === t[n - 1][0] ? (t[n - 1][1] += t[n][1], t.splice(n, 1)) : n++;
        o = 0;
        l = 0;
        a = "";
        c = "";
    }
  }
  "" === t[t.length - 1][1] && t.pop();
  var b = !1;
  for (n = 1; n < t.length - 1;) {
    0 === t[n - 1][0] && 0 === t[n + 1][0] && (t[n][1].substring(t[n][1].length - t[n - 1][1].length) === t[n - 1][1] ? (t[n][1] = t[n - 1][1] + t[n][1].substring(0, t[n][1].length - t[n - 1][1].length), t[n + 1][1] = t[n - 1][1] + t[n + 1][1], t.splice(n - 1, 1), b = !0) : t[n][1].substring(0, t[n + 1][1].length) == t[n + 1][1] && (t[n - 1][1] += t[n + 1][1], t[n][1] = t[n][1].substring(t[n + 1][1].length) + t[n + 1][1], t.splice(n + 1, 1), b = !0));
    n++;
  }
  b && h(t, e);
}
function d(t) {
  return t >= 55296 && t <= 56319;
}
function f(t) {
  return t >= 56320 && t <= 57343;
}
function p(t) {
  return f(t.charCodeAt(0));
}
function g(t) {
  return d(t.charCodeAt(t.length - 1));
}
function m(t, e, r, i) {
  return g(t) || p(i) ? null : function (t) {
    for (e = [], r = 0, void 0; r < t.length; r++) {
      var e;
      var r;
      t[r][1].length > 0 && e.push(t[r]);
    }
    return e;
  }([[0, t], [-1, e], [1, r], [0, i]]);
}
function b(t, r, i, n) {
  return e(t, r, i, n, !0);
}
b.INSERT = 1;
b.DELETE = -1;
b.EQUAL = 0;
module.exports = b;
