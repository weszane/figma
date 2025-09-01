import { g } from "../vendor/661871";
import { C } from "../vendor/656320";
import { parseSourceMapInput, getArg, normalize, isAbsolute, relative, computeSourceURL, compareByOriginalPositions, compareByGeneratedPositionsDeflated, urlParse } from "../vendor/671438";
import { LEAST_UPPER_BOUND, search } from "../vendor/24988";
import { decode } from "../vendor/113929";
var o = C;
var s = g;
function l(e, t) {
  var n = e;
  "string" == typeof e && (n = parseSourceMapInput(e));
  return null != n.sections ? new d(n, t) : new u(n, t);
}
function u(e, t) {
  var n = e;
  "string" == typeof e && (n = parseSourceMapInput(e));
  var i = getArg(n, "version");
  var a = getArg(n, "sources");
  var s = getArg(n, "names", []);
  var l = getArg(n, "sourceRoot", null);
  var u = getArg(n, "sourcesContent", null);
  var c = getArg(n, "mappings");
  var d = getArg(n, "file", null);
  if (i != this._version) throw Error("Unsupported version: " + i);
  l && (l = normalize(l));
  a = a.map(String).map(normalize).map(function (e) {
    return l && isAbsolute(l) && isAbsolute(e) ? relative(l, e) : e;
  });
  this._names = o.fromArray(s.map(String), !0);
  this._sources = o.fromArray(a, !0);
  this._absoluteSources = this._sources.toArray().map(function (e) {
    return computeSourceURL(l, e, t);
  });
  this.sourceRoot = l;
  this.sourcesContent = u;
  this._mappings = c;
  this._sourceMapURL = t;
  this.file = d;
}
function c() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}
function d(e, t) {
  var n = e;
  "string" == typeof e && (n = parseSourceMapInput(e));
  var i = getArg(n, "version");
  var a = getArg(n, "sections");
  if (i != this._version) throw Error("Unsupported version: " + i);
  this._sources = new o();
  this._names = new o();
  var s = {
    line: -1,
    column: 0
  };
  this._sections = a.map(function (e) {
    if (e.url) throw Error("Support for url field in sections not implemented.");
    var n = getArg(e, "offset");
    var i = getArg(n, "line");
    var o = getArg(n, "column");
    if (i < s.line || i === s.line && o < s.column) throw Error("Section offsets must be ordered and non-overlapping.");
    s = n;
    return {
      generatedOffset: {
        generatedLine: i + 1,
        generatedColumn: o + 1
      },
      consumer: new l(getArg(e, "map"), t)
    };
  });
}
l.fromSourceMap = function (e, t) {
  return u.fromSourceMap(e, t);
};
l.prototype._version = 3;
l.prototype.__generatedMappings = null;
Object.defineProperty(l.prototype, "_generatedMappings", {
  configurable: !0,
  enumerable: !0,
  get: function () {
    this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot);
    return this.__generatedMappings;
  }
});
l.prototype.__originalMappings = null;
Object.defineProperty(l.prototype, "_originalMappings", {
  configurable: !0,
  enumerable: !0,
  get: function () {
    this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot);
    return this.__originalMappings;
  }
});
l.prototype._charIsMappingSeparator = function (e, t) {
  var n = e.charAt(t);
  return ";" === n || "," === n;
};
l.prototype._parseMappings = function (e, t) {
  throw Error("Subclasses must implement _parseMappings");
};
l.GENERATED_ORDER = 1;
l.ORIGINAL_ORDER = 2;
l.GREATEST_LOWER_BOUND = 1;
l.LEAST_UPPER_BOUND = 2;
l.prototype.eachMapping = function (e, t, n) {
  switch (n || l.GENERATED_ORDER) {
    case l.GENERATED_ORDER:
      i = this._generatedMappings;
      break;
    case l.ORIGINAL_ORDER:
      i = this._originalMappings;
      break;
    default:
      throw Error("Unknown order of iteration.");
  }
  var i;
  var o = this.sourceRoot;
  i.map(function (e) {
    var t = null === e.source ? null : this._sources.at(e.source);
    return {
      source: t = computeSourceURL(o, t, this._sourceMapURL),
      generatedLine: e.generatedLine,
      generatedColumn: e.generatedColumn,
      originalLine: e.originalLine,
      originalColumn: e.originalColumn,
      name: null === e.name ? null : this._names.at(e.name)
    };
  }, this).forEach(e, t || null);
};
l.prototype.allGeneratedPositionsFor = function (e) {
  var t = getArg(e, "line");
  var n = {
    source: getArg(e, "source"),
    originalLine: t,
    originalColumn: getArg(e, "column", 0)
  };
  if (n.source = this._findSourceIndex(n.source), n.source < 0) return [];
  var o = [];
  var a = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", compareByOriginalPositions, LEAST_UPPER_BOUND);
  if (a >= 0) {
    var s = this._originalMappings[a];
    if (void 0 === e.column) for (var l = s.originalLine; s && s.originalLine === l;) {
      o.push({
        line: getArg(s, "generatedLine", null),
        column: getArg(s, "generatedColumn", null),
        lastColumn: getArg(s, "lastGeneratedColumn", null)
      });
      s = this._originalMappings[++a];
    } else for (var u = s.originalColumn; s && s.originalLine === t && s.originalColumn == u;) {
      o.push({
        line: getArg(s, "generatedLine", null),
        column: getArg(s, "generatedColumn", null),
        lastColumn: getArg(s, "lastGeneratedColumn", null)
      });
      s = this._originalMappings[++a];
    }
  }
  return o;
};
exports.SourceMapConsumer = l;
u.prototype = Object.create(l.prototype);
u.prototype.consumer = l;
u.prototype._findSourceIndex = function (e) {
  var t;
  var n = e;
  if (null != this.sourceRoot && (n = relative(this.sourceRoot, n)), this._sources.has(n)) return this._sources.indexOf(n);
  for (t = 0; t < this._absoluteSources.length; ++t) if (this._absoluteSources[t] == e) return t;
  return -1;
};
u.fromSourceMap = function (e, t) {
  var n = Object.create(u.prototype);
  var i = n._names = o.fromArray(e._names.toArray(), !0);
  var a = n._sources = o.fromArray(e._sources.toArray(), !0);
  n.sourceRoot = e._sourceRoot;
  n.sourcesContent = e._generateSourcesContent(n._sources.toArray(), n.sourceRoot);
  n.file = e._file;
  n._sourceMapURL = t;
  n._absoluteSources = n._sources.toArray().map(function (e) {
    return computeSourceURL(n.sourceRoot, e, t);
  });
  for (l = e._mappings.toArray().slice(), d = n.__generatedMappings = [], h = n.__originalMappings = [], f = 0, p = l.length, void 0; f < p; f++) {
    var l;
    var d;
    var h;
    var f;
    var p;
    var g = l[f];
    var m = new c();
    m.generatedLine = g.generatedLine;
    m.generatedColumn = g.generatedColumn;
    g.source && (m.source = a.indexOf(g.source), m.originalLine = g.originalLine, m.originalColumn = g.originalColumn, g.name && (m.name = i.indexOf(g.name)), h.push(m));
    d.push(m);
  }
  s(n.__originalMappings, compareByOriginalPositions);
  return n;
};
u.prototype._version = 3;
Object.defineProperty(u.prototype, "sources", {
  get: function () {
    return this._absoluteSources.slice();
  }
});
u.prototype._parseMappings = function (e, t) {
  for (d = 1, h = 0, f = 0, p = 0, g = 0, m = 0, _ = e.length, v = 0, y = {}, C = {}, b = [], w = [], void 0; v < _;) {
    var n;
    var i;
    var o;
    var l;
    var u;
    var d;
    var h;
    var f;
    var p;
    var g;
    var m;
    var _;
    var v;
    var y;
    var C;
    var b;
    var w;
    if (";" === e.charAt(v)) {
      d++;
      v++;
      h = 0;
    } else if ("," === e.charAt(v)) v++;else {
      for ((n = new c()).generatedLine = d, l = v; l < _ && !this._charIsMappingSeparator(e, l); l++);
      if (o = y[i = e.slice(v, l)]) v += i.length;else {
        for (o = []; v < l;) {
          decode(e, v, C);
          u = C.value;
          v = C.rest;
          o.push(u);
        }
        if (2 === o.length) throw Error("Found a source, but no line and column");
        if (3 === o.length) throw Error("Found a source and line, but no column");
        y[i] = o;
      }
      n.generatedColumn = h + o[0];
      h = n.generatedColumn;
      o.length > 1 && (n.source = g + o[1], g += o[1], n.originalLine = f + o[2], f = n.originalLine, n.originalLine += 1, n.originalColumn = p + o[3], p = n.originalColumn, o.length > 4 && (n.name = m + o[4], m += o[4]));
      w.push(n);
      "number" == typeof n.originalLine && b.push(n);
    }
  }
  s(w, compareByGeneratedPositionsDeflated);
  this.__generatedMappings = w;
  s(b, compareByOriginalPositions);
  this.__originalMappings = b;
};
u.prototype._findMapping = function (e, t, n, r, o, a) {
  if (e[n] <= 0) throw TypeError("Line must be greater than or equal to 1, got " + e[n]);
  if (e[r] < 0) throw TypeError("Column must be greater than or equal to 0, got " + e[r]);
  return search(e, t, o, a);
};
u.prototype.computeColumnSpans = function () {
  for (var e = 0; e < this._generatedMappings.length; ++e) {
    var t = this._generatedMappings[e];
    if (e + 1 < this._generatedMappings.length) {
      var n = this._generatedMappings[e + 1];
      if (t.generatedLine === n.generatedLine) {
        t.lastGeneratedColumn = n.generatedColumn - 1;
        continue;
      }
    }
    t.lastGeneratedColumn = 1 / 0;
  }
};
u.prototype.originalPositionFor = function (e) {
  var t = {
    generatedLine: getArg(e, "line"),
    generatedColumn: getArg(e, "column")
  };
  var n = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", compareByGeneratedPositionsDeflated, getArg(e, "bias", l.GREATEST_LOWER_BOUND));
  if (n >= 0) {
    var i = this._generatedMappings[n];
    if (i.generatedLine === t.generatedLine) {
      var o = getArg(i, "source", null);
      null !== o && (o = this._sources.at(o), o = computeSourceURL(this.sourceRoot, o, this._sourceMapURL));
      var a = getArg(i, "name", null);
      null !== a && (a = this._names.at(a));
      return {
        source: o,
        line: getArg(i, "originalLine", null),
        column: getArg(i, "originalColumn", null),
        name: a
      };
    }
  }
  return {
    source: null,
    line: null,
    column: null,
    name: null
  };
};
u.prototype.hasContentsOfAllSources = function () {
  return !!this.sourcesContent && this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function (e) {
    return null == e;
  });
};
u.prototype.sourceContentFor = function (e, t) {
  if (!this.sourcesContent) return null;
  var n;
  var i = this._findSourceIndex(e);
  if (i >= 0) return this.sourcesContent[i];
  var o = e;
  if (null != this.sourceRoot && (o = relative(this.sourceRoot, o)), null != this.sourceRoot && (n = urlParse(this.sourceRoot))) {
    var a = o.replace(/^file:\/\//, "");
    if ("file" == n.scheme && this._sources.has(a)) return this.sourcesContent[this._sources.indexOf(a)];
    if ((!n.path || "/" == n.path) && this._sources.has("/" + o)) return this.sourcesContent[this._sources.indexOf("/" + o)];
  }
  if (t) return null;
  throw Error('"' + o + '" is not in the SourceMap.');
};
u.prototype.generatedPositionFor = function (e) {
  var t = getArg(e, "source");
  if ((t = this._findSourceIndex(t)) < 0) return {
    line: null,
    column: null,
    lastColumn: null
  };
  var n = {
    source: t,
    originalLine: getArg(e, "line"),
    originalColumn: getArg(e, "column")
  };
  var i = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", compareByOriginalPositions, getArg(e, "bias", l.GREATEST_LOWER_BOUND));
  if (i >= 0) {
    var o = this._originalMappings[i];
    if (o.source === n.source) return {
      line: getArg(o, "generatedLine", null),
      column: getArg(o, "generatedColumn", null),
      lastColumn: getArg(o, "lastGeneratedColumn", null)
    };
  }
  return {
    line: null,
    column: null,
    lastColumn: null
  };
};
d.prototype = Object.create(l.prototype);
d.prototype.constructor = l;
d.prototype._version = 3;
Object.defineProperty(d.prototype, "sources", {
  get: function () {
    for (e = [], t = 0, void 0; t < this._sections.length; t++) {
      var e;
      var t;
      for (var n = 0; n < this._sections[t].consumer.sources.length; n++) e.push(this._sections[t].consumer.sources[n]);
    }
    return e;
  }
});
d.prototype.originalPositionFor = function (e) {
  var t = {
    generatedLine: getArg(e, "line"),
    generatedColumn: getArg(e, "column")
  };
  var n = search(t, this._sections, function (e, t) {
    return e.generatedLine - t.generatedOffset.generatedLine || e.generatedColumn - t.generatedOffset.generatedColumn;
  });
  var o = this._sections[n];
  return o ? o.consumer.originalPositionFor({
    line: t.generatedLine - (o.generatedOffset.generatedLine - 1),
    column: t.generatedColumn - (o.generatedOffset.generatedLine === t.generatedLine ? o.generatedOffset.generatedColumn - 1 : 0),
    bias: e.bias
  }) : {
    source: null,
    line: null,
    column: null,
    name: null
  };
};
d.prototype.hasContentsOfAllSources = function () {
  return this._sections.every(function (e) {
    return e.consumer.hasContentsOfAllSources();
  });
};
d.prototype.sourceContentFor = function (e, t) {
  for (var n = 0; n < this._sections.length; n++) {
    var r = this._sections[n].consumer.sourceContentFor(e, !0);
    if (r) return r;
  }
  if (t) return null;
  throw Error('"' + e + '" is not in the SourceMap.');
};
d.prototype.generatedPositionFor = function (e) {
  for (var t = 0; t < this._sections.length; t++) {
    var n = this._sections[t];
    if (-1 !== n.consumer._findSourceIndex(getArg(e, "source"))) {
      var i = n.consumer.generatedPositionFor(e);
      if (i) return {
        line: i.line + (n.generatedOffset.generatedLine - 1),
        column: i.column + (n.generatedOffset.generatedLine === i.line ? n.generatedOffset.generatedColumn - 1 : 0)
      };
    }
  }
  return {
    line: null,
    column: null
  };
};
d.prototype._parseMappings = function (e, t) {
  this.__generatedMappings = [];
  this.__originalMappings = [];
  for (var n = 0; n < this._sections.length; n++) for (i = this._sections[n], o = i.consumer._generatedMappings, a = 0, void 0; a < o.length; a++) {
    var i;
    var o;
    var a;
    var l = o[a];
    var u = i.consumer._sources.at(l.source);
    u = computeSourceURL(i.consumer.sourceRoot, u, this._sourceMapURL);
    this._sources.add(u);
    u = this._sources.indexOf(u);
    var c = null;
    l.name && (c = i.consumer._names.at(l.name), this._names.add(c), c = this._names.indexOf(c));
    var d = {
      source: u,
      generatedLine: l.generatedLine + (i.generatedOffset.generatedLine - 1),
      generatedColumn: l.generatedColumn + (i.generatedOffset.generatedLine === l.generatedLine ? i.generatedOffset.generatedColumn - 1 : 0),
      originalLine: l.originalLine,
      originalColumn: l.originalColumn,
      name: c
    };
    this.__generatedMappings.push(d);
    "number" == typeof d.originalLine && this.__originalMappings.push(d);
  }
  s(this.__generatedMappings, compareByGeneratedPositionsDeflated);
  s(this.__originalMappings, compareByOriginalPositions);
};