exports.getArg = function (e, t, n) {
  if (t in e) return e[t];
  if (3 == $$arguments.length) return n;
  throw Error('"' + t + '" is a required argument.');
};
var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var r = /^data:.+\,.+$/;
function i(e) {
  var t = e.match(n);
  return t ? {
    scheme: t[1],
    auth: t[2],
    host: t[3],
    port: t[4],
    path: t[5]
  } : null;
}
function o(e) {
  var t = "";
  e.scheme && (t += e.scheme + ":");
  t += "//";
  e.auth && (t += e.auth + "@");
  e.host && (t += e.host);
  e.port && (t += ":" + e.port);
  e.path && (t += e.path);
  return t;
}
function a(e) {
  var n = e;
  var r = i(e);
  if (r) {
    if (!r.path) return e;
    n = r.path;
  }
  for (s = exports.isAbsolute(n), l = n.split(/\/+/), u = 0, c = l.length - 1, void 0; c >= 0; c--) {
    var a;
    var s;
    var l;
    var u;
    var c;
    "." === (a = l[c]) ? l.splice(c, 1) : ".." === a ? u++ : u > 0 && ("" === a ? (l.splice(c + 1, u), u = 0) : (l.splice(c, 2), u--));
  }
  return ("" === (n = l.join("/")) && (n = s ? "/" : "."), r) ? (r.path = n, o(r)) : n;
}
function s(e, t) {
  "" === e && (e = ".");
  "" === t && (t = ".");
  var n = i(t);
  var s = i(e);
  if (s && (e = s.path || "/"), n && !n.scheme) {
    s && (n.scheme = s.scheme);
    return o(n);
  }
  if (n || t.match(r)) return t;
  if (s && !s.host && !s.path) {
    s.host = t;
    return o(s);
  }
  var l = "/" === t.charAt(0) ? t : a(e.replace(/\/+$/, "") + "/" + t);
  return s ? (s.path = l, o(s)) : l;
}
exports.urlParse = i;
exports.urlGenerate = o;
exports.normalize = a;
exports.join = s;
exports.isAbsolute = function (e) {
  return "/" === e.charAt(0) || n.test(e);
};
exports.relative = function (e, t) {
  "" === e && (e = ".");
  e = e.replace(/\/$/, "");
  for (var n = 0; 0 !== t.indexOf(e + "/");) {
    var r = e.lastIndexOf("/");
    if (r < 0 || (e = e.slice(0, r)).match(/^([^\/]+:\/)?\/*$/)) return t;
    ++n;
  }
  return Array(n + 1).join("../") + t.substr(e.length + 1);
};
var l = !("__proto__" in Object.create(null));
function u(e) {
  return e;
}
function c(e) {
  if (!e) return !1;
  var t = e.length;
  if (t < 9 || 95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9)) return !1;
  for (var n = t - 10; n >= 0; n--) if (36 !== e.charCodeAt(n)) return !1;
  return !0;
}
function d(e, t) {
  return e === t ? 0 : null === e ? 1 : null === t ? -1 : e > t ? 1 : -1;
}
exports.toSetString = l ? u : function (e) {
  return c(e) ? "$" + e : e;
};
exports.fromSetString = l ? u : function (e) {
  return c(e) ? e.slice(1) : e;
};
exports.compareByOriginalPositions = function (e, t, n) {
  var r = d(e.source, t.source);
  return 0 !== r || 0 != (r = e.originalLine - t.originalLine) || 0 != (r = e.originalColumn - t.originalColumn) || n || 0 != (r = e.generatedColumn - t.generatedColumn) || 0 != (r = e.generatedLine - t.generatedLine) ? r : d(e.name, t.name);
};
exports.compareByGeneratedPositionsDeflated = function (e, t, n) {
  var r = e.generatedLine - t.generatedLine;
  return 0 !== r || 0 != (r = e.generatedColumn - t.generatedColumn) || n || 0 !== (r = d(e.source, t.source)) || 0 != (r = e.originalLine - t.originalLine) || 0 != (r = e.originalColumn - t.originalColumn) ? r : d(e.name, t.name);
};
exports.compareByGeneratedPositionsInflated = function (e, t) {
  var n = e.generatedLine - t.generatedLine;
  return 0 !== n || 0 != (n = e.generatedColumn - t.generatedColumn) || 0 !== (n = d(e.source, t.source)) || 0 != (n = e.originalLine - t.originalLine) || 0 != (n = e.originalColumn - t.originalColumn) ? n : d(e.name, t.name);
};
exports.parseSourceMapInput = function (e) {
  return JSON.parse(e.replace(/^\)]}'[^\n]*\n/, ""));
};
exports.computeSourceURL = function (e, t, n) {
  if (t = t || "", e && ("/" !== e[e.length - 1] && "/" !== t[0] && (e += "/"), t = e + t), n) {
    var r = i(n);
    if (!r) throw Error("sourceMapURL could not be parsed");
    if (r.path) {
      var l = r.path.lastIndexOf("/");
      l >= 0 && (r.path = r.path.substring(0, l + 1));
    }
    t = s(o(r), t);
  }
  return a(t);
};