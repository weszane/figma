import { x } from "../vendor/215356";
import { join, toSetString, fromSetString } from "../vendor/671438";
var r = x;
var o = /(\r?\n)/;
var a = "$$$isSourceNode$$$";
function s(e, t, n, r, i) {
  this.children = [];
  this.sourceContents = {};
  this.line = e;
  this.column = t;
  this.source = n;
  this.name = i;
  this[a] = !0;
  null != r && this.add(r);
}
s.fromStringWithSourceMap = function (e, t, n) {
  var r = new s();
  var a = e.split(o);
  var l = 0;
  var u = function () {
    return e() + (e() || "");
    function e() {
      return l < a.length ? a[l++] : void 0;
    }
  };
  var c = 1;
  var d = 0;
  var h = null;
  t.eachMapping(function (e) {
    if (null !== h) {
      if (c < e.generatedLine) {
        f(h, u());
        c++;
        d = 0;
      } else {
        var t = a[l] || "";
        var n = t.substr(0, e.generatedColumn - d);
        a[l] = t.substr(e.generatedColumn - d);
        d = e.generatedColumn;
        f(h, n);
        h = e;
        return;
      }
    }
    for (; c < e.generatedLine;) {
      r.add(u());
      c++;
    }
    if (d < e.generatedColumn) {
      var t = a[l] || "";
      r.add(t.substr(0, e.generatedColumn));
      a[l] = t.substr(e.generatedColumn);
      d = e.generatedColumn;
    }
    h = e;
  }, this);
  l < a.length && (h && f(h, u()), r.add(a.splice(l).join("")));
  t.sources.forEach(function (e) {
    var o = t.sourceContentFor(e);
    null != o && (null != n && (e = join(n, e)), r.setSourceContent(e, o));
  });
  return r;
  function f(e, t) {
    if (null === e || void 0 === e.source) r.add(t);else {
      var o = n ? join(n, e.source) : e.source;
      r.add(new s(e.originalLine, e.originalColumn, o, t, e.name));
    }
  }
};
s.prototype.add = function (e) {
  if (Array.isArray(e)) e.forEach(function (e) {
    this.add(e);
  }, this);else if (e[a] || "string" == typeof e) e && this.children.push(e);else throw TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
  return this;
};
s.prototype.prepend = function (e) {
  if (Array.isArray(e)) for (var t = e.length - 1; t >= 0; t--) this.prepend(e[t]);else if (e[a] || "string" == typeof e) this.children.unshift(e);else throw TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
  return this;
};
s.prototype.walk = function (e) {
  for (n = 0, r = this.children.length, void 0; n < r; n++) {
    var t;
    var n;
    var r;
    (t = this.children[n])[a] ? t.walk(e) : "" !== t && e(t, {
      source: this.source,
      line: this.line,
      column: this.column,
      name: this.name
    });
  }
};
s.prototype.join = function (e) {
  var t;
  var n;
  var r = this.children.length;
  if (r > 0) {
    for (n = 0, t = []; n < r - 1; n++) {
      t.push(this.children[n]);
      t.push(e);
    }
    t.push(this.children[n]);
    this.children = t;
  }
  return this;
};
s.prototype.replaceRight = function (e, t) {
  var n = this.children[this.children.length - 1];
  n[a] ? n.replaceRight(e, t) : "string" == typeof n ? this.children[this.children.length - 1] = n.replace(e, t) : this.children.push("".replace(e, t));
  return this;
};
s.prototype.setSourceContent = function (e, t) {
  this.sourceContents[toSetString(e)] = t;
};
s.prototype.walkSourceContents = function (e) {
  for (t = 0, n = this.children.length, void 0; t < n; t++) {
    var t;
    var n;
    this.children[t][a] && this.children[t].walkSourceContents(e);
  }
  for (r = Object.keys(this.sourceContents), t = 0, n = r.length, void 0; t < n; t++) {
    var r;
    var t;
    var n;
    e(fromSetString(r[t]), this.sourceContents[r[t]]);
  }
};
s.prototype.toString = function () {
  var e = "";
  this.walk(function (t) {
    e += t;
  });
  return e;
};
s.prototype.toStringWithSourceMap = function (e) {
  var t = {
    code: "",
    line: 1,
    column: 0
  };
  var n = new r(e);
  var i = !1;
  var o = null;
  var a = null;
  var s = null;
  var l = null;
  this.walk(function (e, r) {
    t.code += e;
    null !== r.source && null !== r.line && null !== r.column ? ((o !== r.source || a !== r.line || s !== r.column || l !== r.name) && n.addMapping({
      source: r.source,
      original: {
        line: r.line,
        column: r.column
      },
      generated: {
        line: t.line,
        column: t.column
      },
      name: r.name
    }), o = r.source, a = r.line, s = r.column, l = r.name, i = !0) : i && (n.addMapping({
      generated: {
        line: t.line,
        column: t.column
      }
    }), o = null, i = !1);
    for (u = 0, c = e.length, void 0; u < c; u++) {
      var u;
      var c;
      10 === e.charCodeAt(u) ? (t.line++, t.column = 0, u + 1 === c ? (o = null, i = !1) : i && n.addMapping({
        source: r.source,
        original: {
          line: r.line,
          column: r.column
        },
        generated: {
          line: t.line,
          column: t.column
        },
        name: r.name
      })) : t.column++;
    }
  });
  this.walkSourceContents(function (e, t) {
    n.setSourceContent(e, t);
  });
  return {
    code: t.code,
    map: n
  };
};