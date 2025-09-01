import { P } from "../vendor/959131";
import { C } from "../vendor/656320";
import { encode } from "../vendor/113929";
import { getArg, relative, toSetString, join, compareByGeneratedPositionsInflated } from "../vendor/671438";
var o = C;
var a = P;
function s(e) {
  e || (e = {});
  this._file = getArg(e, "file", null);
  this._sourceRoot = getArg(e, "sourceRoot", null);
  this._skipValidation = getArg(e, "skipValidation", !1);
  this._sources = new o();
  this._names = new o();
  this._mappings = new a();
  this._sourcesContents = null;
}
s.prototype._version = 3;
s.fromSourceMap = function (e) {
  var t = e.sourceRoot;
  var n = new s({
    file: e.file,
    sourceRoot: t
  });
  e.eachMapping(function (e) {
    var r = {
      generated: {
        line: e.generatedLine,
        column: e.generatedColumn
      }
    };
    null != e.source && (r.source = e.source, null != t && (r.source = relative(t, r.source)), r.original = {
      line: e.originalLine,
      column: e.originalColumn
    }, null != e.name && (r.name = e.name));
    n.addMapping(r);
  });
  e.sources.forEach(function (r) {
    var o = r;
    null !== t && (o = relative(t, r));
    n._sources.has(o) || n._sources.add(o);
    var a = e.sourceContentFor(r);
    null != a && n.setSourceContent(r, a);
  });
  return n;
};
s.prototype.addMapping = function (e) {
  var t = getArg(e, "generated");
  var n = getArg(e, "original", null);
  var r = getArg(e, "source", null);
  var o = getArg(e, "name", null);
  this._skipValidation || this._validateMapping(t, n, r, o);
  null == r || (r = String(r), this._sources.has(r) || this._sources.add(r));
  null == o || (o = String(o), this._names.has(o) || this._names.add(o));
  this._mappings.add({
    generatedLine: t.line,
    generatedColumn: t.column,
    originalLine: null != n && n.line,
    originalColumn: null != n && n.column,
    source: r,
    name: o
  });
};
s.prototype.setSourceContent = function (e, t) {
  var n = e;
  null != this._sourceRoot && (n = relative(this._sourceRoot, n));
  null != t ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[toSetString(n)] = t) : this._sourcesContents && (delete this._sourcesContents[toSetString(n)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null));
};
s.prototype.applySourceMap = function (e, t, n) {
  var r = t;
  if (null == t) {
    if (null == e.file) throw Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
    r = e.file;
  }
  var a = this._sourceRoot;
  null != a && (r = relative(a, r));
  var s = new o();
  var l = new o();
  this._mappings.unsortedForEach(function (t) {
    if (t.source === r && null != t.originalLine) {
      var o = e.originalPositionFor({
        line: t.originalLine,
        column: t.originalColumn
      });
      null != o.source && (t.source = o.source, null != n && (t.source = join(n, t.source)), null != a && (t.source = relative(a, t.source)), t.originalLine = o.line, t.originalColumn = o.column, null != o.name && (t.name = o.name));
    }
    var u = t.source;
    null == u || s.has(u) || s.add(u);
    var c = t.name;
    null == c || l.has(c) || l.add(c);
  }, this);
  this._sources = s;
  this._names = l;
  e.sources.forEach(function (t) {
    var r = e.sourceContentFor(t);
    null != r && (null != n && (t = join(n, t)), null != a && (t = relative(a, t)), this.setSourceContent(t, r));
  }, this);
};
s.prototype._validateMapping = function (e, t, n, r) {
  if (t && "number" != typeof t.line && "number" != typeof t.column) throw Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
  if ((!e || !("line" in e) || !("column" in e) || !(e.line > 0) || !(e.column >= 0) || t || n || r) && (!e || !("line" in e) || !("column" in e) || !t || !("line" in t) || !("column" in t) || !(e.line > 0) || !(e.column >= 0) || !(t.line > 0) || !(t.column >= 0) || !n)) throw Error("Invalid mapping: " + JSON.stringify({
    generated: e,
    source: n,
    original: t,
    name: r
  }));
};
s.prototype._serializeMappings = function () {
  for (a = 0, s = 1, l = 0, u = 0, c = 0, d = 0, h = "", f = this._mappings.toArray(), p = 0, g = f.length, void 0; p < g; p++) {
    var e;
    var t;
    var n;
    var o;
    var a;
    var s;
    var l;
    var u;
    var c;
    var d;
    var h;
    var f;
    var p;
    var g;
    if (t = f[p], e = "", t.generatedLine !== s) for (a = 0; t.generatedLine !== s;) {
      e += ";";
      s++;
    } else if (p > 0) {
      if (!compareByGeneratedPositionsInflated(t, f[p - 1])) continue;
      e += ",";
    }
    e += encode(t.generatedColumn - a);
    a = t.generatedColumn;
    null != t.source && (o = this._sources.indexOf(t.source), e += encode(o - d), d = o, e += encode(t.originalLine - 1 - u), u = t.originalLine - 1, e += encode(t.originalColumn - l), l = t.originalColumn, null != t.name && (n = this._names.indexOf(t.name), e += encode(n - c), c = n));
    h += e;
  }
  return h;
};
s.prototype._generateSourcesContent = function (e, t) {
  return e.map(function (e) {
    if (!this._sourcesContents) return null;
    null != t && (e = relative(t, e));
    var n = toSetString(e);
    return Object.prototype.hasOwnProperty.call(this._sourcesContents, n) ? this._sourcesContents[n] : null;
  }, this);
};
s.prototype.toJSON = function () {
  var e = {
    version: this._version,
    sources: this._sources.toArray(),
    names: this._names.toArray(),
    mappings: this._serializeMappings()
  };
  null != this._file && (e.file = this._file);
  null != this._sourceRoot && (e.sourceRoot = this._sourceRoot);
  this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot));
  return e;
};
s.prototype.toString = function () {
  return JSON.stringify(this.toJSON());
};
exports.x = s;