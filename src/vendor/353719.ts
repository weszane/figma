import i from "../vendor/271434";
module.exports = k;
module.exports.parse = o;
module.exports.compile = a;
module.exports.tokensToFunction = p;
module.exports.tokensToRegExp = w;
var s = RegExp("(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))", "g");
function o(e, r) {
  for (i = [], o = 0, a = 0, h = "", d = r && r.delimiter || "/", void 0; null != (n = s.exec(e));) {
    var n;
    var i;
    var o;
    var a;
    var h;
    var d;
    var p = n[0];
    var v = n[1];
    var y = n.index;
    if (h += e.slice(a, y), a = y + p.length, v) {
      h += v[1];
      continue;
    }
    var b = e[a];
    var O = n[2];
    var x = n[3];
    var w = n[4];
    var k = n[5];
    var _ = n[6];
    var S = n[7];
    h && (i.push(h), h = "");
    var E = null != O && null != b && b !== O;
    var A = "+" === _ || "*" === _;
    var C = "?" === _ || "*" === _;
    var T = n[2] || d;
    var I = w || k;
    i.push({
      name: x || o++,
      prefix: O || "",
      delimiter: T,
      optional: C,
      repeat: A,
      partial: E,
      asterisk: !!S,
      pattern: I ? m(I) : S ? ".*" : "[^" + g(T) + "]+?"
    });
  }
  a < e.length && (h += e.substr(a));
  h && i.push(h);
  return i;
}
function a(e, r) {
  return p(o(e, r));
}
function h(e) {
  return encodeURI(e).replace(/[\/?#]/g, function (e) {
    return "%" + e.charCodeAt(0).toString(16).toUpperCase();
  });
}
function d(e) {
  return encodeURI(e).replace(/[?#]/g, function (e) {
    return "%" + e.charCodeAt(0).toString(16).toUpperCase();
  });
}
function p(e) {
  for (r = Array(e.length), n = 0, void 0; n < e.length; n++) {
    var r;
    var n;
    "object" == typeof e[n] && (r[n] = RegExp("^(?:" + e[n].pattern + ")$"));
  }
  return function (n, s) {
    for (o = "", a = n || {}, p = (s || {}).pretty ? h : encodeURIComponent, g = 0, void 0; g < e.length; g++) {
      var o;
      var a;
      var p;
      var g;
      var m;
      var v = e[g];
      if ("string" == typeof v) {
        o += v;
        continue;
      }
      var y = a[v.name];
      if (null == y) {
        if (v.optional) {
          v.partial && (o += v.prefix);
          continue;
        }
        throw TypeError('Expected "' + v.name + '" to be defined');
      }
      if (i(y)) {
        if (!v.repeat) throw TypeError('Expected "' + v.name + '" to not repeat, but received `' + JSON.stringify(y) + "`");
        if (0 === y.length) {
          if (v.optional) continue;
          throw TypeError('Expected "' + v.name + '" to not be empty');
        }
        for (var b = 0; b < y.length; b++) {
          if (m = p(y[b]), !r[g].test(m)) throw TypeError('Expected all "' + v.name + '" to match "' + v.pattern + '", but received `' + JSON.stringify(m) + "`");
          o += (0 === b ? v.prefix : v.delimiter) + m;
        }
        continue;
      }
      if (m = v.asterisk ? d(y) : p(y), !r[g].test(m)) throw TypeError('Expected "' + v.name + '" to match "' + v.pattern + '", but received "' + m + '"');
      o += v.prefix + m;
    }
    return o;
  };
}
function g(e) {
  return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function m(e) {
  return e.replace(/([=!:$\/()])/g, "\\$1");
}
function v(e, r) {
  e.keys = r;
  return e;
}
function y(e) {
  return e.sensitive ? "" : "i";
}
function b(e, r) {
  var n = e.source.match(/\((?!\?)/g);
  if (n) for (var i = 0; i < n.length; i++) r.push({
    name: i,
    prefix: null,
    delimiter: null,
    optional: !1,
    repeat: !1,
    partial: !1,
    asterisk: !1,
    pattern: null
  });
  return v(e, r);
}
function O(e, r, n) {
  for (i = [], s = 0, void 0; s < e.length; s++) {
    var i;
    var s;
    i.push(k(e[s], r, n).source);
  }
  return v(RegExp("(?:" + i.join("|") + ")", y(n)), r);
}
function x(e, r, n) {
  return w(o(e, n), r, n);
}
function w(e, r, n) {
  i(r) || (n = r || n, r = []);
  for (s = (n = n || {}).strict, o = !1 !== n.end, a = "", h = 0, void 0; h < e.length; h++) {
    var s;
    var o;
    var a;
    var h;
    var d = e[h];
    if ("string" == typeof d) a += g(d);else {
      var p = g(d.prefix);
      var m = "(?:" + d.pattern + ")";
      r.push(d);
      d.repeat && (m += "(?:" + p + m + ")*");
      a += m = d.optional ? d.partial ? p + "(" + m + ")?" : "(?:" + p + "(" + m + "))?" : p + "(" + m + ")";
    }
  }
  var b = g(n.delimiter || "/");
  var O = a.slice(-b.length) === b;
  s || (a = (O ? a.slice(0, -b.length) : a) + "(?:" + b + "(?=$))?");
  o ? a += "$" : a += s && O ? "" : "(?=" + b + "|$)";
  return v(RegExp("^" + a, y(n)), r);
}
function k(e, r, n) {
  return (i(r) || (n = r || n, r = []), n = n || {}, e instanceof RegExp) ? b(e, r) : i(e) ? O(e, r, n) : x(e, r, n);
}