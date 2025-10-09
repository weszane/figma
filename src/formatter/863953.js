var r;
var i = Object.create;
var a = Object.defineProperty;
var o = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var _ = Object.getPrototypeOf;
var l = Object.prototype.hasOwnProperty;
var u = e => {
  throw TypeError(e);
};
var c = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);
var p = (e, t) => {
  for (var n in t) a(e, n, {
    get: t[n],
    enumerable: !0
  });
};
var d = (e, t, n, r) => {
  if (t && "object" == typeof t || "function" == typeof t) for (let i of s(t)) l.call(e, i) || i === n || a(e, i, {
    get: () => t[i],
    enumerable: !(r = o(t, i)) || r.enumerable
  });
  return e;
};
var m = (e, t, n) => (n = null != e ? i(_(e)) : {}, d(!t && e && e.__esModule ? n : a(n, "default", {
  value: e,
  enumerable: !0
}), e));
var f = (e, t, n) => t.has(e) || u("Cannot " + n);
var h = (e, t, n) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
var y = (e, t, n) => (f(e, t, "access private method"), n);
var g = c((e, t) => {
  var n = new Proxy(String, {
    get: () => n
  });
  t.exports = n;
});
var b = c(e => {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var t = /\r\n|[\n\r\u2028\u2029]/;
  e.codeFrameColumns = function (e, n, r = {}) {
    let i = new Proxy({}, {
      get: () => e => e
    });
    let {
      start,
      end,
      markerLines
    } = function (e, t, n) {
      let r = Object.assign({
        column: 0,
        line: -1
      }, e.start);
      let i = Object.assign({}, r, e.end);
      let {
        linesAbove = 2,
        linesBelow = 3
      } = n || {};
      let s = r.line;
      let _ = r.column;
      let l = i.line;
      let u = i.column;
      let c = Math.max(s - (linesAbove + 1), 0);
      let p = Math.min(t.length, l + linesBelow);
      -1 === s && (c = 0);
      -1 === l && (p = t.length);
      let d = l - s;
      let m = {};
      if (d) for (let e = 0; e <= d; e++) {
        let n = e + s;
        if (_) {
          if (0 === e) {
            let e = t[n - 1].length;
            m[n] = [_, e - _ + 1];
          } else if (e === d) m[n] = [0, u];else {
            let r = t[n - e].length;
            m[n] = [0, r];
          }
        } else m[n] = !0;
      } else _ === u ? _ ? m[s] = [_, 0] : m[s] = !0 : m[s] = [_, u - _];
      return {
        start: c,
        end: p,
        markerLines: m
      };
    }(n, e.split(t), r);
    let _ = n.start && "number" == typeof n.start.column;
    let l = String(end).length;
    let u = e.split(t, end).slice(start, end).map((e, t) => {
      let n = start + 1 + t;
      let o = ` ${` ${n}`.slice(-l)} |`;
      let _ = markerLines[n];
      let u = !markerLines[n + 1];
      if (!_) return ` ${i.gutter(o)}${e.length > 0 ? ` ${e}` : ""}`;
      {
        let t = "";
        if (Array.isArray(_)) {
          let n = e.slice(0, Math.max(_[0] - 1, 0)).replace(/[^\t]/g, " ");
          let a = _[1] || 1;
          t = [`
 `, i.gutter(o.replace(/\d/g, " ")), " ", n, i.marker("^").repeat(a)].join("");
          u && r.message && (t += " " + i.message(r.message));
        }
        return [i.marker(">"), i.gutter(o), e.length > 0 ? ` ${e}` : "", t].join("");
      }
    }).join(`
`);
    r.message && !_ && (u = `${" ".repeat(l + 1)}${r.message}
${u}`);
    return u;
  };
});
p({}, {
  __debug: () => n$,
  check: () => nW,
  doc: () => nv,
  format: () => $$nK0,
  formatWithCursor: () => nz,
  getSupportInfo: () => nV,
  util: () => nw,
  version: () => nE
});
var D = (e, t, n, r) => {
  if (!(e && null == t)) return t.replaceAll ? t.replaceAll(n, r) : n.global ? t.replace(n, r) : t.split(n).join(r);
};
function x() {}
function v(e, t, n, r, i) {
  for (o = [], void 0; t;) {
    var a;
    var o;
    o.push(t);
    a = t.previousComponent;
    delete t.previousComponent;
    t = a;
  }
  o.reverse();
  for (s = 0, _ = o.length, l = 0, u = 0, void 0; s < _; s++) {
    var s;
    var _;
    var l;
    var u;
    var c = o[s];
    if (c.removed) {
      c.value = e.join(r.slice(u, u + c.count));
      u += c.count;
    } else {
      if (!c.added && i) {
        var p = n.slice(l, l + c.count);
        p = p.map(function (e, t) {
          var n = r[u + t];
          return n.length > e.length ? n : e;
        });
        c.value = e.join(p);
      } else c.value = e.join(n.slice(l, l + c.count));
      l += c.count;
      c.added || (u += c.count);
    }
  }
  return o;
}
function T(e, t) {
  var n;
  for (n = 0; n < e.length && n < t.length && e[n] == t[n]; n++);
  return e.slice(0, n);
}
function S(e, t) {
  var n;
  if (!e || !t || e[e.length - 1] != t[t.length - 1]) return "";
  for (n = 0; n < e.length && n < t.length && e[e.length - (n + 1)] == t[t.length - (n + 1)]; n++);
  return e.slice(-n);
}
function C(e, t, n) {
  if (e.slice(0, t.length) != t) throw Error("string ".concat(JSON.stringify(e), " doesn't start with prefix ").concat(JSON.stringify(t), "; this is a bug"));
  return n + e.slice(t.length);
}
function E(e, t, n) {
  if (!t) return e + n;
  if (e.slice(-t.length) != t) throw Error("string ".concat(JSON.stringify(e), " doesn't end with suffix ").concat(JSON.stringify(t), "; this is a bug"));
  return e.slice(0, -t.length) + n;
}
function w(e, t) {
  return C(e, t, "");
}
function A(e, t) {
  return t.slice(0, function (e, t) {
    var n = 0;
    e.length > t.length && (n = e.length - t.length);
    var r = t.length;
    e.length < t.length && (r = e.length);
    var i = Array(r);
    var a = 0;
    i[0] = 0;
    for (var o = 1; o < r; o++) {
      for (t[o] == t[a] ? i[o] = i[a] : i[o] = a; a > 0 && t[o] != t[a];) a = i[a];
      t[o] == t[a] && a++;
    }
    a = 0;
    for (var s = n; s < e.length; s++) {
      for (; a > 0 && e[s] != t[a];) a = i[a];
      e[s] == t[a] && a++;
    }
    return a;
  }(e, t));
}
x.prototype = {
  diff: function (e, t) {
    var n;
    var r = $$arguments.length > 2 && void 0 !== $$arguments[2] ? $$arguments[2] : {};
    var i = r.callback;
    "function" == typeof r && (i = r, r = {});
    var a = this;
    function o(e) {
      e = a.postProcess(e, r);
      return i ? (setTimeout(function () {
        i(e);
      }, 0), !0) : e;
    }
    e = this.castInput(e, r);
    t = this.castInput(t, r);
    e = this.removeEmpty(this.tokenize(e, r));
    var s = (t = this.removeEmpty(this.tokenize(t, r))).length;
    var _ = e.length;
    var l = 1;
    var u = s + _;
    null != r.maxEditLength && (u = Math.min(u, r.maxEditLength));
    var c = null !== (n = r.timeout) && void 0 !== n ? n : 1 / 0;
    var p = Date.now() + c;
    var d = [{
      oldPos: -1,
      lastComponent: void 0
    }];
    var m = this.extractCommon(d[0], t, e, 0, r);
    if (d[0].oldPos + 1 >= _ && m + 1 >= s) return o(v(a, d[0].lastComponent, t, e, a.useLongestToken));
    var f = -1 / 0;
    var h = 1 / 0;
    function y() {
      for (var n = Math.max(f, -l); n <= Math.min(h, l); n += 2) {
        var i = void 0;
        var u = d[n - 1];
        var c = d[n + 1];
        u && (d[n - 1] = void 0);
        var p = !1;
        if (c) {
          var y = c.oldPos - n;
          p = c && 0 <= y && y < s;
        }
        var g = u && u.oldPos + 1 < _;
        if (!p && !g) {
          d[n] = void 0;
          continue;
        }
        if (i = !g || p && u.oldPos < c.oldPos ? a.addToPath(c, !0, !1, 0, r) : a.addToPath(u, !1, !0, 1, r), m = a.extractCommon(i, t, e, n, r), i.oldPos + 1 >= _ && m + 1 >= s) return o(v(a, i.lastComponent, t, e, a.useLongestToken));
        d[n] = i;
        i.oldPos + 1 >= _ && (h = Math.min(h, n - 1));
        m + 1 >= s && (f = Math.max(f, n + 1));
      }
      l++;
    }
    if (i) !function e() {
      setTimeout(function () {
        if (l > u || Date.now() > p) return i();
        y() || e();
      }, 0);
    }();else for (; l <= u && Date.now() <= p;) {
      var g = y();
      if (g) return g;
    }
  },
  addToPath: function (e, t, n, r, i) {
    var a = e.lastComponent;
    return a && !i.oneChangePerToken && a.added === t && a.removed === n ? {
      oldPos: e.oldPos + r,
      lastComponent: {
        count: a.count + 1,
        added: t,
        removed: n,
        previousComponent: a.previousComponent
      }
    } : {
      oldPos: e.oldPos + r,
      lastComponent: {
        count: 1,
        added: t,
        removed: n,
        previousComponent: a
      }
    };
  },
  extractCommon: function (e, t, n, r, i) {
    for (a = t.length, o = n.length, s = e.oldPos, _ = s - r, l = 0, void 0; _ + 1 < a && s + 1 < o && this.equals(n[s + 1], t[_ + 1], i);) {
      var a;
      var o;
      var s;
      var _;
      var l;
      _++;
      s++;
      l++;
      i.oneChangePerToken && (e.lastComponent = {
        count: 1,
        previousComponent: e.lastComponent,
        added: !1,
        removed: !1
      });
    }
    l && !i.oneChangePerToken && (e.lastComponent = {
      count: l,
      previousComponent: e.lastComponent,
      added: !1,
      removed: !1
    });
    e.oldPos = s;
    return _;
  },
  equals: function (e, t, n) {
    return n.comparator ? n.comparator(e, t) : e === t || n.ignoreCase && e.toLowerCase() === t.toLowerCase();
  },
  removeEmpty: function (e) {
    for (t = [], n = 0, void 0; n < e.length; n++) {
      var t;
      var n;
      e[n] && t.push(e[n]);
    }
    return t;
  },
  castInput: function (e) {
    return e;
  },
  tokenize: function (e) {
    return Array.from(e);
  },
  join: function (e) {
    return e.join("");
  },
  postProcess: function (e) {
    return e;
  }
};
new x();
var k = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}";
var F = RegExp("[".concat(k, "]+|\\s+|[^").concat(k, "]"), "ug");
var P = new x();
function N(e, t, n, r) {
  if (t && n) {
    var i = t.value.match(/^\s*/)[0];
    var a = t.value.match(/\s*$/)[0];
    var o = n.value.match(/^\s*/)[0];
    var s = n.value.match(/\s*$/)[0];
    if (e) {
      var _ = T(i, o);
      e.value = E(e.value, o, _);
      t.value = w(t.value, _);
      n.value = w(n.value, _);
    }
    if (r) {
      var l = S(a, s);
      r.value = C(r.value, s, l);
      t.value = E(t.value, l, "");
      n.value = E(n.value, l, "");
    }
  } else if (n) {
    e && (n.value = n.value.replace(/^\s*/, ""));
    r && (r.value = r.value.replace(/^\s*/, ""));
  } else if (e && r) {
    var u = r.value.match(/^\s*/)[0];
    var c = t.value.match(/^\s*/)[0];
    var p = t.value.match(/\s*$/)[0];
    var d = T(u, c);
    t.value = w(t.value, d);
    var m = S(w(u, d), p);
    t.value = E(t.value, m, "");
    r.value = C(r.value, u, m);
    e.value = E(e.value, u, u.slice(0, u.length - m.length));
  } else if (r) {
    var f = r.value.match(/^\s*/)[0];
    var h = A(t.value.match(/\s*$/)[0], f);
    t.value = E(t.value, h, "");
  } else if (e) {
    var y = A(e.value.match(/\s*$/)[0], t.value.match(/^\s*/)[0]);
    t.value = w(t.value, y);
  }
}
P.equals = function (e, t, n) {
  n.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase());
  return e.trim() === t.trim();
};
P.tokenize = function (e) {
  var t;
  var n = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : {};
  if (n.intlSegmenter) {
    if ("word" != n.intlSegmenter.resolvedOptions().granularity) throw Error('The segmenter passed must have a granularity of "word"');
    t = Array.from(n.intlSegmenter.segment(e), function (e) {
      return e.segment;
    });
  } else t = e.match(F) || [];
  var r = [];
  var i = null;
  t.forEach(function (e) {
    /\s/.test(e) ? null == i ? r.push(e) : r.push(r.pop() + e) : /\s/.test(i) ? r[r.length - 1] == i ? r.push(r.pop() + e) : r.push(i + e) : r.push(e);
    i = e;
  });
  return r;
};
P.join = function (e) {
  return e.map(function (e, t) {
    return 0 == t ? e : e.replace(/^\s+/, "");
  }).join("");
};
P.postProcess = function (e, t) {
  if (!e || t.oneChangePerToken) return e;
  var n = null;
  var r = null;
  var i = null;
  e.forEach(function (e) {
    e.added ? r = e : e.removed ? i = e : ((r || i) && N(n, i, r, e), n = e, r = null, i = null);
  });
  (r || i) && N(n, i, r, null);
  return e;
};
new x().tokenize = function (e) {
  var t = RegExp("(\\r?\\n)|[".concat(k, "]+|[^\\S\\n\\r]+|[^").concat(k, "]"), "ug");
  return e.match(t) || [];
};
var I = new x();
function O(e) {
  return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
I.tokenize = function (e, t) {
  t.stripTrailingCr && (e = e.replace(/\r\n/g, `
`));
  var n = [];
  var r = e.split(/(\n|\r\n)/);
  r[r.length - 1] || r.pop();
  for (var i = 0; i < r.length; i++) {
    var a = r[i];
    i % 2 && !t.newlineIsToken ? n[n.length - 1] += a : n.push(a);
  }
  return n;
};
I.equals = function (e, t, n) {
  n.ignoreWhitespace ? (n.newlineIsToken && e.includes(`
`) || (e = e.trim()), n.newlineIsToken && t.includes(`
`) || (t = t.trim())) : n.ignoreNewlineAtEof && !n.newlineIsToken && (e.endsWith(`
`) && (e = e.slice(0, -1)), t.endsWith(`
`) && (t = t.slice(0, -1)));
  return x.prototype.equals.call(this, e, t, n);
};
new x().tokenize = function (e) {
  return e.split(/(\S.+?[.!?])(?=\s+|$)/);
};
new x().tokenize = function (e) {
  return e.split(/([{}:;,]|\s+)/);
};
var B = new x();
B.useLongestToken = !0;
B.tokenize = I.tokenize;
B.castInput = function (e, t) {
  var n = t.undefinedReplacement;
  var r = t.stringifyReplacer;
  var i = void 0 === r ? function (e, t) {
    return typeof t > "u" ? n : t;
  } : r;
  return "string" == typeof e ? e : JSON.stringify(function e(t, n, r, i, a) {
    for (n = n || [], r = r || [], i && (t = i(a, t)), o = 0; o < n.length; o += 1) if (n[o] === t) return r[o];
    if ("[object Array]" === Object.prototype.toString.call(t)) {
      for (n.push(t), s = Array(t.length), r.push(s), o = 0; o < t.length; o += 1) s[o] = e(t[o], n, r, i, a);
      n.pop();
      r.pop();
      return s;
    }
    if (t && t.toJSON && (t = t.toJSON()), "object" === O(t) && null !== t) {
      n.push(t);
      s = {};
      r.push(s);
      var o;
      var s;
      var _;
      var l = [];
      for (_ in t) Object.prototype.hasOwnProperty.call(t, _) && l.push(_);
      for (l.sort(), o = 0; o < l.length; o += 1) s[_ = l[o]] = e(t[_], n, r, i, _);
      n.pop();
      r.pop();
    } else s = t;
    return s;
  }(e, null, null, i), i, "  ");
};
B.equals = function (e, t, n) {
  return x.prototype.equals.call(B, e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"), n);
};
var j = new x();
function M(e) {
  switch (e) {
    case "cr":
      return "\r";
    case "crlf":
      return `\r
`;
    default:
      return `
`;
  }
}
function L(e, t) {
  let n;
  switch (t) {
    case `
`:
      n = /\n/gu;
      break;
    case "\r":
      n = /\r/gu;
      break;
    case `\r
`:
      n = /\r\n/gu;
      break;
    default:
      throw Error(`Unexpected "eol" ${JSON.stringify(t)}.`);
  }
  let r = e.match(n);
  return r ? r.length : 0;
}
j.tokenize = function (e) {
  return e.slice();
};
j.join = j.removeEmpty = function (e) {
  return e;
};
var R = "string";
var J = "array";
var q = "cursor";
var U = "indent";
var z = "align";
var K = "trim";
var W = "group";
var V = "fill";
var $ = "if-break";
var H = "indent-if-break";
var G = "line-suffix";
var X = "line-suffix-boundary";
var Y = "line";
var Q = "label";
var Z = "break-parent";
var ee = new Set([q, U, z, K, W, V, $, H, G, X, Y, Q, Z]);
var et = function (e) {
  if ("string" == typeof e) return R;
  if (Array.isArray(e)) return J;
  if (!e) return;
  let {
    type
  } = e;
  if (ee.has(type)) return type;
};
var en = e => new Intl.ListFormat("en-US", {
  type: "disjunction"
}).format(e);
var er = class extends Error {
  name = "InvalidDocError";
  constructor(e) {
    super(function (e) {
      let t = null === e ? "null" : typeof e;
      if ("string" !== t && "object" !== t) return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
      if (et(e)) throw Error("doc is valid.");
      let n = Object.prototype.toString.call(e);
      if ("[object Object]" !== n) return `Unexpected doc '${n}'.`;
      let r = en([...ee].map(e => `'${e}'`));
      return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`;
    }(e));
    this.doc = e;
  }
};
var ei = {};
var ea = function (e, t, n, r) {
  let i = [e];
  for (; i.length > 0;) {
    let e = i.pop();
    if (e === ei) {
      n(i.pop());
      continue;
    }
    n && i.push(e, ei);
    let a = et(e);
    if (!a) throw new er(e);
    if (t?.(e) !== !1) switch (a) {
      case J:
      case V:
        {
          let t = a === J ? e : e.parts;
          for (function () {
            let e = t.length;
            let n = e - 1;
          }(); n >= 0; --n) i.push(t[n]);
          break;
        }
      case $:
        i.push(e.flatContents, e.breakContents);
        break;
      case W:
        if (r && e.expandedStates) for (function () {
          let t = e.expandedStates.length;
          let n = t - 1;
        }(); n >= 0; --n) i.push(e.expandedStates[n]);else i.push(e.contents);
        break;
      case z:
      case U:
      case H:
      case Q:
      case G:
        i.push(e.contents);
        break;
      case R:
      case q:
      case K:
      case X:
      case Y:
      case Z:
        break;
      default:
        throw new er(e);
    }
  }
};
var eo = () => {};
function es(e) {
  eo(e);
  return {
    type: U,
    contents: e
  };
}
function e_(e, t) {
  eo(t);
  return {
    type: z,
    contents: t,
    n: e
  };
}
function el(e, t = {}) {
  eo(e);
  eo(t.expandedStates, !0);
  return {
    type: W,
    id: t.id,
    contents: e,
    break: !!t.shouldBreak,
    expandedStates: t.expandedStates
  };
}
function eu(e) {
  eo(e);
  return {
    type: G,
    contents: e
  };
}
var ec = {
  type: Z
};
var ep = {
  type: Y,
  hard: !0
};
var ed = {
  type: Y,
  hard: !0,
  literal: !0
};
var em = {
  type: Y
};
var ef = [ep, ec];
var eh = [ed, ec];
var ey = {
  type: q
};
function eg(e, t) {
  eo(e);
  eo(t);
  let n = [];
  for (let r = 0; r < t.length; r++) {
    0 !== r && n.push(e);
    n.push(t[r]);
  }
  return n;
}
function eb(e, t, n) {
  eo(e);
  let r = e;
  if (t > 0) {
    for (let e = 0; e < Math.floor(t / n); ++e) r = es(r);
    r = e_(t % n, r);
    r = e_(Number.NEGATIVE_INFINITY, r);
  }
  return r;
}
var eD = (e, t, n) => {
  if (!(e && null == t)) return Array.isArray(t) || "string" == typeof t ? t[n < 0 ? t.length + n : n] : t.at(n);
};
var ex = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
var ev = e => !(function (e) {
  return 12288 === e || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}(e) || function (e) {
  return e >= 4352 && e <= 4447 || 8986 === e || 8987 === e || 9001 === e || 9002 === e || e >= 9193 && e <= 9196 || 9200 === e || 9203 === e || 9725 === e || 9726 === e || 9748 === e || 9749 === e || e >= 9776 && e <= 9783 || e >= 9800 && e <= 9811 || 9855 === e || e >= 9866 && e <= 9871 || 9875 === e || 9889 === e || 9898 === e || 9899 === e || 9917 === e || 9918 === e || 9924 === e || 9925 === e || 9934 === e || 9940 === e || 9962 === e || 9970 === e || 9971 === e || 9973 === e || 9978 === e || 9981 === e || 9989 === e || 9994 === e || 9995 === e || 10024 === e || 10060 === e || 10062 === e || e >= 10067 && e <= 10069 || 10071 === e || e >= 10133 && e <= 10135 || 10160 === e || 10175 === e || 11035 === e || 11036 === e || 11088 === e || 11093 === e || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12773 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || 94192 === e || 94193 === e || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101631 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || 110589 === e || 110590 === e || e >= 110592 && e <= 110882 || 110898 === e || e >= 110928 && e <= 110930 || 110933 === e || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e >= 119552 && e <= 119638 || e >= 119648 && e <= 119670 || 126980 === e || 127183 === e || 127374 === e || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || 127568 === e || 127569 === e || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || 127988 === e || e >= 127992 && e <= 128062 || 128064 === e || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || 128378 === e || 128405 === e || 128406 === e || 128420 === e || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || 128716 === e || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || 128747 === e || 128748 === e || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || 129008 === e || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129673 || e >= 129679 && e <= 129734 || e >= 129742 && e <= 129756 || e >= 129759 && e <= 129769 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}(e));
var eT = /[^\x20-\x7F]/u;
var eS = function (e) {
  if (!e) return 0;
  if (!eT.test(e)) return e.length;
  e = e.replace(ex(), "  ");
  let t = 0;
  for (let n of e) {
    let e = n.codePointAt(0);
    e <= 31 || e >= 127 && e <= 159 || e >= 768 && e <= 879 || (t += ev(e) ? 1 : 2);
  }
  return t;
};
function eC(e, t) {
  if ("string" == typeof e) return t(e);
  let n = new Map();
  return function e(r) {
    if (n.has(r)) return n.get(r);
    let i = function (n) {
      switch (et(n)) {
        case J:
          return t(n.map(e));
        case V:
          return t({
            ...n,
            parts: n.parts.map(e)
          });
        case $:
          return t({
            ...n,
            breakContents: e(n.breakContents),
            flatContents: e(n.flatContents)
          });
        case W:
          {
            let {
              expandedStates,
              contents
            } = n;
            i = expandedStates ? (r = expandedStates.map(e))[0] : e(contents);
            return t({
              ...n,
              contents,
              expandedStates
            });
          }
        case z:
        case U:
        case H:
        case Q:
        case G:
          return t({
            ...n,
            contents: e(n.contents)
          });
        case R:
        case q:
        case K:
        case X:
        case Y:
        case Z:
          return t(n);
        default:
          throw new er(n);
      }
    }(r);
    n.set(r, i);
    return i;
  }(e);
}
function eE(e, t, n) {
  let r = n;
  let i = !1;
  ea(e, function (e) {
    if (i) return !1;
    let n = t(e);
    void 0 !== n && (i = !0, r = n);
  });
  return r;
}
function ew(e) {
  if (e.type === W && e.$$break || e.type === Y && e.hard || e.type === Z) return !0;
}
function eA(e) {
  if (e.length > 0) {
    let t = eD(!1, e, -1);
    t.expandedStates || t.$$break || (t.$$break = "propagated");
  }
  return null;
}
function ek(e) {
  return e.type !== Y || e.hard ? e.type === $ ? e.flatContents : e : e.soft ? "" : " ";
}
function eF(e) {
  for (e = [...e]; e.length >= 2 && eD(!1, e, -2).type === Y && eD(!1, e, -1).type === Z;) e.length -= 2;
  if (e.length > 0) {
    let t = eP(eD(!1, e, -1));
    e[e.length - 1] = t;
  }
  return e;
}
function eP(e) {
  switch (et(e)) {
    case U:
    case H:
    case W:
    case G:
    case Q:
      {
        let t = eP(e.contents);
        return {
          ...e,
          contents: t
        };
      }
    case $:
      return {
        ...e,
        breakContents: eP(e.breakContents),
        flatContents: eP(e.flatContents)
      };
    case V:
      return {
        ...e,
        parts: eF(e.parts)
      };
    case J:
      return eF(e);
    case R:
      return e.replace(/[\n\r]*$/u, "");
    case z:
    case q:
    case K:
    case X:
    case Y:
    case Z:
      break;
    default:
      throw new er(e);
  }
  return e;
}
function eN(e) {
  return eP(eC(e, e => function (e) {
    switch (et(e)) {
      case V:
        if (e.parts.every(e => "" === e)) return "";
        break;
      case W:
        if (!e.contents && !e.id && !e.$$break && !e.expandedStates) return "";
        if (e.contents.type === W && e.contents.id === e.id && e.contents.$$break === e.$$break && e.contents.expandedStates === e.expandedStates) return e.contents;
        break;
      case z:
      case U:
      case H:
      case G:
        if (!e.contents) return "";
        break;
      case $:
        if (!e.flatContents && !e.breakContents) return "";
        break;
      case J:
        {
          let t = [];
          for (let n of e) {
            if (!n) continue;
            let [e, ...r] = Array.isArray(n) ? n : [n];
            "string" == typeof e && "string" == typeof eD(!1, t, -1) ? t[t.length - 1] += e : t.push(e);
            t.push(...r);
          }
          return 0 === t.length ? "" : 1 === t.length ? t[0] : t;
        }
      case R:
      case q:
      case K:
      case X:
      case Y:
      case Q:
      case Z:
        break;
      default:
        throw new er(e);
    }
    return e;
  }(e)));
}
function eI(e) {
  if (e.type === Y) return !0;
}
function eO(e, t) {
  return e.type === Q ? {
    ...e,
    contents: t(e.contents)
  } : t(e);
}
var eB = Symbol("MODE_BREAK");
var ej = Symbol("MODE_FLAT");
var eM = Symbol("cursor");
var eL = Symbol("DOC_FILL_PRINTED_LENGTH");
function eR() {
  return {
    value: "",
    length: 0,
    queue: []
  };
}
function eJ(e, t, n) {
  let r = "dedent" === t.type ? e.queue.slice(0, -1) : [...e.queue, t];
  let i = "";
  let a = 0;
  let o = 0;
  let s = 0;
  for (let e of r) switch (e.type) {
    case "indent":
      u();
      n.useTabs ? _(1) : l(n.tabWidth);
      break;
    case "stringAlign":
      u();
      i += e.n;
      a += e.n.length;
      break;
    case "numberAlign":
      o += 1;
      s += e.n;
      break;
    default:
      throw Error(`Unexpected type '${e.type}'`);
  }
  c();
  return {
    ...e,
    value: i,
    length: a,
    queue: r
  };
  function _(e) {
    i += "	".repeat(e);
    a += n.tabWidth * e;
  }
  function l(e) {
    i += " ".repeat(e);
    a += e;
  }
  function u() {
    n.useTabs ? (o > 0 && _(o), o = 0, s = 0) : c();
  }
  function c() {
    s > 0 && l(s);
    o = 0;
    s = 0;
  }
}
function eq(e) {
  let t = 0;
  let n = 0;
  let r = e.length;
  e: for (; r--;) {
    let i = e[r];
    if (i === eM) {
      n++;
      continue;
    }
    for (let n = i.length - 1; n >= 0; n--) {
      let a = i[n];
      if (" " === a || "	" === a) t++;else {
        e[r] = i.slice(0, n + 1);
        break e;
      }
    }
  }
  if (t > 0 || n > 0) for (e.length = r + 1; n-- > 0;) e.push(eM);
  return t;
}
function eU(e, t, n, r, i, a) {
  if (n === Number.POSITIVE_INFINITY) return !0;
  let o = t.length;
  let s = [e];
  let _ = [];
  for (; n >= 0;) {
    if (0 === s.length) {
      if (0 === o) return !0;
      s.push(t[--o]);
      continue;
    }
    let {
      mode,
      doc
    } = s.pop();
    let u = et(doc);
    switch (u) {
      case R:
        _.push(doc);
        n -= eS(doc);
        break;
      case J:
      case V:
        {
          let t = u === J ? doc : doc.parts;
          let n = doc[eL] ?? 0;
          for (let r = t.length - 1; r >= n; r--) s.push({
            mode,
            doc: t[r]
          });
          break;
        }
      case U:
      case z:
      case H:
      case Q:
        s.push({
          mode,
          doc: doc.contents
        });
        break;
      case K:
        n += eq(_);
        break;
      case W:
        {
          if (a && doc.$$break) return !1;
          let t = doc.$$break ? eB : mode;
          let n = doc.expandedStates && t === eB ? eD(!1, doc.expandedStates, -1) : doc.contents;
          s.push({
            mode: t,
            doc: n
          });
          break;
        }
      case $:
        {
          let t = (doc.groupId ? i[doc.groupId] || ej : mode) === eB ? doc.breakContents : doc.flatContents;
          t && s.push({
            mode,
            doc: t
          });
          break;
        }
      case Y:
        if (mode === eB || doc.hard) return !0;
        doc.soft || (_.push(" "), n--);
        break;
      case G:
        r = !0;
        break;
      case X:
        if (r) return !1;
    }
  }
  return !1;
}
function ez(e, t) {
  var n;
  let r;
  let i;
  let a = {};
  let o = t.printWidth;
  let s = M(t.endOfLine);
  let _ = 0;
  let l = [{
    ind: eR(),
    mode: eB,
    doc: e
  }];
  let u = [];
  let c = !1;
  let p = [];
  let d = 0;
  for (r = new Set(), i = [], ea(e, function (e) {
    if (e.type === Z && eA(i), e.type === W) {
      if (i.push(e), r.has(e)) return !1;
      r.add(e);
    }
  }, function (e) {
    e.type === W && i.pop().$$break && eA(i);
  }, !0); l.length > 0;) {
    let {
      ind,
      mode,
      doc
    } = l.pop();
    switch (et(doc)) {
      case R:
        {
          let e = s !== `
` ? D(!1, doc, `
`, s) : doc;
          u.push(e);
          l.length > 0 && (_ += eS(e));
          break;
        }
      case J:
        for (let t = doc.length - 1; t >= 0; t--) l.push({
          ind,
          mode,
          doc: doc[t]
        });
        break;
      case q:
        if (d >= 2) throw Error("There are too many 'cursor' in doc.");
        u.push(eM);
        d++;
        break;
      case U:
        l.push({
          ind: eJ(ind, {
            type: "indent"
          }, t),
          mode,
          doc: doc.contents
        });
        break;
      case z:
        l.push({
          ind: (n = doc.n) === Number.NEGATIVE_INFINITY ? ind.root || eR() : n < 0 ? eJ(ind, {
            type: "dedent"
          }, t) : n ? "root" === n.type ? {
            ...ind,
            root: ind
          } : eJ(ind, {
            type: "string" == typeof n ? "stringAlign" : "numberAlign",
            n: n
          }, t) : ind,
          mode,
          doc: doc.contents
        });
        break;
      case K:
        _ -= eq(u);
        break;
      case W:
        switch (mode) {
          case ej:
            if (!c) {
              l.push({
                ind,
                mode: doc.$$break ? eB : ej,
                doc: doc.contents
              });
              break;
            }
          case eB:
            {
              c = !1;
              let t = {
                ind,
                mode: ej,
                doc: doc.contents
              };
              let n = o - _;
              let r = p.length > 0;
              if (!doc.$$break && eU(t, l, n, r, a)) l.push(t);else if (doc.expandedStates) {
                let t = eD(!1, doc.expandedStates, -1);
                if (doc.$$break) l.push({
                  ind,
                  mode: eB,
                  doc: t
                });else for (let o = 1; o < doc.expandedStates.length + 1; o++) if (o >= doc.expandedStates.length) {
                  l.push({
                    ind,
                    mode: eB,
                    doc: t
                  });
                  break;
                } else {
                  let t = {
                    ind,
                    mode: ej,
                    doc: doc.expandedStates[o]
                  };
                  if (eU(t, l, n, r, a)) {
                    l.push(t);
                    break;
                  }
                }
              } else l.push({
                ind,
                mode: eB,
                doc: doc.contents
              });
            }
        }
        doc.id && (a[doc.id] = eD(!1, l, -1).mode);
        break;
      case V:
        {
          let t = o - _;
          let n = doc[eL] ?? 0;
          let {
            parts
          } = doc;
          let u = parts.length - n;
          if (0 === u) break;
          let c = parts[n + 0];
          let d = parts[n + 1];
          let m = {
            ind,
            mode: ej,
            doc: c
          };
          let f = {
            ind,
            mode: eB,
            doc: c
          };
          let h = eU(m, [], t, p.length > 0, a, !0);
          if (1 === u) {
            h ? l.push(m) : l.push(f);
            break;
          }
          let y = {
            ind,
            mode: ej,
            doc: d
          };
          let g = {
            ind,
            mode: eB,
            doc: d
          };
          if (2 === u) {
            h ? l.push(y, m) : l.push(g, f);
            break;
          }
          let b = parts[n + 2];
          let D = {
            ind,
            mode,
            doc: {
              ...doc,
              [eL]: n + 2
            }
          };
          eU({
            ind,
            mode: ej,
            doc: [c, d, b]
          }, [], t, p.length > 0, a, !0) ? l.push(D, y, m) : h ? l.push(D, g, m) : l.push(D, g, f);
          break;
        }
      case $:
      case H:
        {
          let t = doc.groupId ? a[doc.groupId] : mode;
          if (t === eB) {
            let t = doc.type === $ ? doc.breakContents : doc.negate ? doc.contents : es(doc.contents);
            t && l.push({
              ind,
              mode,
              doc: t
            });
          }
          if (t === ej) {
            let t = doc.type === $ ? doc.flatContents : doc.negate ? es(doc.contents) : doc.contents;
            t && l.push({
              ind,
              mode,
              doc: t
            });
          }
          break;
        }
      case G:
        p.push({
          ind,
          mode,
          doc: doc.contents
        });
        break;
      case X:
        p.length > 0 && l.push({
          ind,
          mode,
          doc: ep
        });
        break;
      case Y:
        switch (mode) {
          case ej:
            if (doc.hard) c = !0;else {
              doc.soft || (u.push(" "), _ += 1);
              break;
            }
          case eB:
            if (p.length > 0) {
              l.push({
                ind,
                mode,
                doc
              }, ...p.reverse());
              p.length = 0;
              break;
            }
            doc.literal ? ind.root ? (u.push(s, ind.root.value), _ = ind.root.length) : (u.push(s), _ = 0) : (_ -= eq(u), u.push(s + ind.value), _ = ind.length);
        }
        break;
      case Q:
        l.push({
          ind,
          mode,
          doc: doc.contents
        });
        break;
      case Z:
        break;
      default:
        throw new er(doc);
    }
    0 === l.length && p.length > 0 && (l.push(...p.reverse()), p.length = 0);
  }
  let m = u.indexOf(eM);
  if (-1 !== m) {
    let e = u.indexOf(eM, m + 1);
    if (-1 === e) return {
      formatted: u.filter(e => e !== eM).join("")
    };
    let t = u.slice(0, m).join("");
    let n = u.slice(m + 1, e).join("");
    return {
      formatted: t + n + u.slice(e + 1).join(""),
      cursorNodeStart: t.length,
      cursorNodeText: n
    };
  }
  return {
    formatted: u.join("")
  };
}
var eK;
var eW;
var eV;
var e$ = function (e, t, n = 0) {
  let r = 0;
  for (let i = n; i < e.length; ++i) "	" === e[i] ? r = r + t - r % t : r++;
  return r;
};
var eH = class {
  constructor(e) {
    h(this, eK);
    this.stack = [e];
  }
  get key() {
    let {
      stack,
      siblings
    } = this;
    return eD(!1, stack, null === siblings ? -2 : -4) ?? null;
  }
  get index() {
    return null === this.siblings ? null : eD(!1, this.stack, -2);
  }
  get node() {
    return eD(!1, this.stack, -1);
  }
  get parent() {
    return this.getNode(1);
  }
  get grandparent() {
    return this.getNode(2);
  }
  get isInArray() {
    return null !== this.siblings;
  }
  get siblings() {
    let {
      stack
    } = this;
    let t = eD(!1, stack, -3);
    return Array.isArray(t) ? t : null;
  }
  get next() {
    let {
      siblings
    } = this;
    return siblings?.[this.index + 1];
  }
  get previous() {
    let {
      siblings
    } = this;
    return siblings?.[this.index - 1];
  }
  get isFirst() {
    return 0 === this.index;
  }
  get isLast() {
    let {
      siblings,
      index
    } = this;
    return null !== siblings && index === siblings.length - 1;
  }
  get isRoot() {
    return 1 === this.stack.length;
  }
  get root() {
    return this.stack[0];
  }
  get ancestors() {
    return [...y(this, eK, eV).call(this)];
  }
  getName() {
    let {
      stack
    } = this;
    let {
      length
    } = e;
    return length > 1 ? eD(!1, stack, -2) : null;
  }
  getValue() {
    return eD(!1, this.stack, -1);
  }
  getNode(e = 0) {
    let t = y(this, eK, eW).call(this, e);
    return -1 === t ? null : this.stack[t];
  }
  getParentNode(e = 0) {
    return this.getNode(e + 1);
  }
  call(e, ...t) {
    let {
      stack
    } = this;
    let {
      length
    } = n;
    let i = eD(!1, stack, -1);
    for (let e of t) {
      i = i[e];
      stack.push(e, i);
    }
    try {
      return e(this);
    } finally {
      stack.length = length;
    }
  }
  callParent(e, t = 0) {
    let n = y(this, eK, eW).call(this, t + 1);
    let r = this.stack.splice(n + 1);
    try {
      return e(this);
    } finally {
      this.stack.push(...r);
    }
  }
  each(e, ...t) {
    let {
      stack
    } = this;
    let {
      length
    } = n;
    let i = eD(!1, stack, -1);
    for (let e of t) {
      i = i[e];
      stack.push(e, i);
    }
    try {
      for (let t = 0; t < i.length; ++t) {
        stack.push(t, i[t]);
        e(this, t, i);
        stack.length -= 2;
      }
    } finally {
      stack.length = length;
    }
  }
  map(e, ...t) {
    let n = [];
    this.each((t, r, i) => {
      n[r] = e(t, r, i);
    }, ...t);
    return n;
  }
  match(...e) {
    let t = this.stack.length - 1;
    let n = null;
    let r = this.stack[t--];
    for (let i of e) {
      if (void 0 === r) return !1;
      let e = null;
      if ("number" == typeof n && (e = n, n = this.stack[t--], r = this.stack[t--]), i && !i(r, n, e)) return !1;
      n = this.stack[t--];
      r = this.stack[t--];
    }
    return !0;
  }
  findAncestor(e) {
    for (let t of y(this, eK, eV).call(this)) if (e(t)) return t;
  }
  hasAncestor(e) {
    for (let t of y(this, eK, eV).call(this)) if (e(t)) return !0;
    return !1;
  }
};
eK = new WeakSet();
eW = function (e) {
  let {
    stack
  } = this;
  for (let n = stack.length - 1; n >= 0; n -= 2) if (!Array.isArray(stack[n]) && --e < 0) return n;
  return -1;
};
eV = function* () {
  let {
    stack
  } = this;
  for (let t = stack.length - 3; t >= 0; t -= 2) {
    let n = stack[t];
    Array.isArray(n) || (yield n);
  }
};
var eG = new Proxy(() => {}, {
  get: () => eG
});
function* eX(e, t) {
  let {
    getVisitorKeys,
    filter = () => !0
  } = t;
  let i = e => null !== e && "object" == typeof e && filter(e);
  for (let t of getVisitorKeys(e)) {
    let n = e[t];
    if (Array.isArray(n)) for (let e of n) i(e) && (yield e);else i(n) && (yield n);
  }
}
function eY(e) {
  return (t, n, r) => {
    let i = !!(null != r && r.backwards);
    if (!1 === n) return !1;
    let {
      length
    } = t;
    let o = n;
    for (; o >= 0 && o < length;) {
      let n = t.charAt(o);
      if (e instanceof RegExp) {
        if (!e.test(n)) return o;
      } else if (!e.includes(n)) return o;
      i ? o-- : o++;
    }
    return (-1 === o || o === length) && o;
  };
}
var eQ = eY(/\s/u);
var eZ = eY(" 	");
var e0 = eY(",; 	");
var e1 = eY(/[^\n\r]/u);
var e2 = function (e, t, n) {
  let r = !!(null != n && n.backwards);
  if (!1 === t) return !1;
  let i = e.charAt(t);
  if (r) {
    if ("\r" === e.charAt(t - 1) && i === `
`) return t - 2;
    if (i === `
` || "\r" === i || "\u2028" === i || "\u2029" === i) return t - 1;
  } else {
    if ("\r" === i && e.charAt(t + 1) === `
`) return t + 2;
    if (i === `
` || "\r" === i || "\u2028" === i || "\u2029" === i) return t + 1;
  }
  return t;
};
var e3 = function (e, t, n = {}) {
  let r = eZ(e, n.backwards ? t - 1 : t, n);
  let i = e2(e, r, n);
  return r !== i;
};
var e6 = new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]);
var e4 = e => Object.keys(e).filter(e => !e6.has(e));
var e8 = function (e) {
  return e ? t => e(t, e6) : e4;
};
function e5(e, t) {
  let n;
  let r;
  (e.comments ?? (e.comments = [])).push(t);
  t.printed = !1;
  t.nodeDescription = (n = e.type || e.kind || "(unknown type)", (r = String(e.name || e.id && ("object" == typeof e.id ? e.id.name : e.id) || e.key && ("object" == typeof e.key ? e.key.name : e.key) || e.value && ("object" == typeof e.value ? "" : String(e.value)) || e.operator || "")).length > 20 && (r = r.slice(0, 19) + "\u2026"), n + (r ? " " + r : ""));
}
function e7(e, t) {
  t.leading = !0;
  t.trailing = !1;
  e5(e, t);
}
function e9(e, t, n) {
  t.leading = !1;
  t.trailing = !1;
  n && (t.marker = n);
  e5(e, t);
}
function te(e, t) {
  t.leading = !1;
  t.trailing = !0;
  e5(e, t);
}
var tt = new WeakMap();
function tn(e, t) {
  if (tt.has(e)) return tt.get(e);
  let {
    printer: {
      getCommentChildNodes,
      canAttachComment,
      getVisitorKeys
    },
    locStart,
    locEnd
  } = t;
  if (!canAttachComment) return [];
  let s = (getCommentChildNodes?.(e, t) ?? [...eX(e, {
    getVisitorKeys: e8(getVisitorKeys)
  })]).flatMap(e => canAttachComment(e) ? [e] : tn(e, t));
  s.sort((e, t) => locStart(e) - locStart(t) || locEnd(e) - locEnd(t));
  tt.set(e, s);
  return s;
}
var tr = () => !1;
var ti = e => !/[\S\n\u2028\u2029]/u.test(e);
function ta(e, t) {
  var n;
  var r;
  let i = e.length;
  if (0 === i) return;
  let {
    precedingNode,
    followingNode
  } = e[0];
  let s = t.locStart(followingNode);
  let _;
  for (_ = i; _ > 0; --_) {
    let {
      comment,
      precedingNode,
      followingNode
    } = e[_ - 1];
    eG.strictEqual(precedingNode, precedingNode);
    eG.strictEqual(followingNode, followingNode);
    let c = t.originalText.slice(t.locEnd(comment), s);
    if ((null == (r = (n = t.printer).isGap) ? void 0 : r.call(n, c, t)) ?? /^[\s(]*$/u.test(c)) s = t.locStart(comment);else break;
  }
  for (let [t, {
    comment: n
  }] of e.entries()) t < _ ? te(precedingNode, n) : e7(followingNode, n);
  for (let e of [precedingNode, followingNode]) e.comments && e.comments.length > 1 && e.comments.sort((e, n) => t.locStart(e) - t.locStart(n));
  e.length = 0;
}
function to(e, t, n) {
  let r = n.locStart(t) - 1;
  for (let t = 1; t < e.length; ++t) if (r < n.locStart(e[t])) return t - 1;
  return 0;
}
var ts = function (e, t) {
  let n = t - 1;
  n = eZ(e, n, {
    backwards: !0
  });
  n = e2(e, n, {
    backwards: !0
  });
  n = eZ(e, n, {
    backwards: !0
  });
  let r = e2(e, n, {
    backwards: !0
  });
  return n !== r;
};
function t_(e, t) {
  e.node.printed = !0;
  return t.printer.printComment(e, t);
}
var tl = class extends Error {
  name = "ConfigError";
};
var tu = class extends Error {
  name = "UndefinedParserError";
};
var tc = {
  cursorOffset: {
    category: "Special",
    type: "int",
    default: -1,
    range: {
      start: -1,
      end: 1 / 0,
      step: 1
    },
    description: "Print (to stderr) where a cursor at the given position would move to after formatting.",
    cliCategory: "Editor"
  },
  endOfLine: {
    category: "Global",
    type: "choice",
    default: "lf",
    description: "Which end of line characters to apply.",
    choices: [{
      value: "lf",
      description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos"
    }, {
      value: "crlf",
      description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows"
    }, {
      value: "cr",
      description: "Carriage Return character only (\\r), used very rarely"
    }, {
      value: "auto",
      description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)`
    }]
  },
  filepath: {
    category: "Special",
    type: "path",
    description: "Specify the input filepath. This will be used to do parser inference.",
    cliName: "stdin-filepath",
    cliCategory: "Other",
    cliDescription: "Path to the file to pretend that stdin comes from."
  },
  insertPragma: {
    category: "Special",
    type: "boolean",
    default: !1,
    description: "Insert @format pragma into file's first docblock comment.",
    cliCategory: "Other"
  },
  parser: {
    category: "Global",
    type: "choice",
    default: void 0,
    description: "Which parser to use.",
    exception: e => "string" == typeof e || "function" == typeof e,
    choices: [{
      value: "flow",
      description: "Flow"
    }, {
      value: "babel",
      description: "JavaScript"
    }, {
      value: "babel-flow",
      description: "Flow"
    }, {
      value: "babel-ts",
      description: "TypeScript"
    }, {
      value: "typescript",
      description: "TypeScript"
    }, {
      value: "acorn",
      description: "JavaScript"
    }, {
      value: "espree",
      description: "JavaScript"
    }, {
      value: "meriyah",
      description: "JavaScript"
    }, {
      value: "css",
      description: "CSS"
    }, {
      value: "less",
      description: "Less"
    }, {
      value: "scss",
      description: "SCSS"
    }, {
      value: "json",
      description: "JSON"
    }, {
      value: "json5",
      description: "JSON5"
    }, {
      value: "jsonc",
      description: "JSON with Comments"
    }, {
      value: "json-stringify",
      description: "JSON.stringify"
    }, {
      value: "graphql",
      description: "GraphQL"
    }, {
      value: "markdown",
      description: "Markdown"
    }, {
      value: "mdx",
      description: "MDX"
    }, {
      value: "vue",
      description: "Vue"
    }, {
      value: "yaml",
      description: "YAML"
    }, {
      value: "glimmer",
      description: "Ember / Handlebars"
    }, {
      value: "html",
      description: "HTML"
    }, {
      value: "angular",
      description: "Angular"
    }, {
      value: "lwc",
      description: "Lightning Web Components"
    }]
  },
  plugins: {
    type: "path",
    array: !0,
    default: [{
      value: []
    }],
    category: "Global",
    description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",
    exception: e => "string" == typeof e || "object" == typeof e,
    cliName: "plugin",
    cliCategory: "Config"
  },
  printWidth: {
    category: "Global",
    type: "int",
    default: 80,
    description: "The line length where Prettier will try wrap.",
    range: {
      start: 0,
      end: 1 / 0,
      step: 1
    }
  },
  rangeEnd: {
    category: "Special",
    type: "int",
    default: 1 / 0,
    range: {
      start: 0,
      end: 1 / 0,
      step: 1
    },
    description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`,
    cliCategory: "Editor"
  },
  rangeStart: {
    category: "Special",
    type: "int",
    default: 0,
    range: {
      start: 0,
      end: 1 / 0,
      step: 1
    },
    description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`,
    cliCategory: "Editor"
  },
  requirePragma: {
    category: "Special",
    type: "boolean",
    default: !1,
    description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`,
    cliCategory: "Other"
  },
  tabWidth: {
    type: "int",
    category: "Global",
    default: 2,
    description: "Number of spaces per indentation level.",
    range: {
      start: 0,
      end: 1 / 0,
      step: 1
    }
  },
  useTabs: {
    category: "Global",
    type: "boolean",
    default: !1,
    description: "Indent with tabs instead of spaces."
  },
  embeddedLanguageFormatting: {
    category: "Global",
    type: "choice",
    default: "auto",
    description: "Control how Prettier formats quoted code embedded in the file.",
    choices: [{
      value: "auto",
      description: "Format embedded code if Prettier can automatically identify it."
    }, {
      value: "off",
      description: "Never automatically format embedded code."
    }]
  }
};
function tp({
  plugins: e = [],
  showDeprecated: t = !1
} = {}) {
  let n = e.flatMap(e => e.languages ?? []);
  let r = [];
  for (let i of function (e) {
    let t = [];
    for (let [n, r] of Object.entries(e)) {
      let e = {
        name: n,
        ...r
      };
      Array.isArray(e.$$default) && (e.$$default = eD(!1, e.$$default, -1).value);
      t.push(e);
    }
    return t;
  }(Object.assign({}, ...e.map(({
    options: e
  }) => e), tc))) !t && i.deprecated || (Array.isArray(i.choices) && (t || (i.choices = i.choices.filter(e => !e.deprecated)), "parser" === i.name && (i.choices = [...i.choices, ...function* (e, t, n) {
    let r = new Set(e.map(e => e.value));
    for (let e of t) if (e.parsers) {
      for (let t of e.parsers) if (!r.has(t)) {
        r.add(t);
        let i = n.find(e => e.parsers && Object.prototype.hasOwnProperty.call(e.parsers, t));
        let a = e.name;
        null != i && i.name && (a += ` (plugin: ${i.name})`);
        yield {
          value: t,
          description: a
        };
      }
    }
  }(i.choices, n, e)])), i.pluginDefaults = Object.fromEntries(e.filter(e => {
    var t;
    return (null == (t = e.defaultOptions) ? void 0 : t[i.name]) !== void 0;
  }).map(e => [e.name, e.defaultOptions[i.name]])), r.push(i));
  return {
    languages: n,
    options: r
  };
}
var td = e => String(e).split(/[/\\]/u).pop();
function tm(e, t) {
  if (!t) return;
  let n = td(t).toLowerCase();
  return e.find(({
    filenames: e
  }) => e?.some(e => e.toLowerCase() === n)) ?? e.find(({
    extensions: e
  }) => e?.some(e => n.endsWith(e)));
}
var tf = function (e, t) {
  let n = e.plugins.flatMap(e => e.languages ?? []);
  let r = function (e, t) {
    if (t) return e.find(({
      name: e
    }) => e.toLowerCase() === t) ?? e.find(({
      aliases: e
    }) => e?.includes(t)) ?? e.find(({
      extensions: e
    }) => e?.includes(`.${t}`));
  }(n, t.language) ?? tm(n, t.physicalFile) ?? tm(n, t.file) ?? void t.physicalFile;
  return r?.parsers[0];
};
var th = {
  key: e => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e),
  value(e) {
    if (null === e || "object" != typeof e) return JSON.stringify(e);
    if (Array.isArray(e)) return `[${e.map(e => th.value(e)).join(", ")}]`;
    let t = Object.keys(e);
    return 0 === t.length ? "{}" : `{ ${t.map(t => `${th.key(t)}: ${th.value(e[t])}`).join(", ")} }`;
  },
  pair: ({
    key: e,
    value: t
  }) => th.value({
    [e]: t
  })
};
var ty = m(g(), 1);
var tg = m(g(), 1);
var tb = Symbol.$$for("vnopts.VALUE_NOT_EXIST");
var tD = Symbol.$$for("vnopts.VALUE_UNCHANGED");
var tx = " ".repeat(2);
function tv(e, t, n, r) {
  return `Invalid ${tg.$$default.red(r.key(e))} value. Expected ${tg.$$default.blue(n)}, but received ${t === tb ? tg.$$default.gray("nothing") : tg.$$default.red(r.value(t))}.`;
}
function tT(e, t) {
  if (1 === e.length) return e[0];
  let [n, r] = e;
  let [i, a] = e.map(e => e.split(`
`, 1)[0].length);
  return i > t && i > a ? r : n;
}
var tS = m(g(), 1);
var tC = [];
var tE = [];
var tw = (e, t, {
  descriptor: n,
  logger: r,
  schemas: i
}) => {
  let a = [`Ignored unknown option ${tS.$$default.yellow(n.pair({
    key: e,
    value: t
  }))}.`];
  let o = Object.keys(i).sort().find(t => 3 > function (e, t) {
    if (e === t) return 0;
    let n = e;
    e.length > t.length && (e = t, t = n);
    let r = e.length;
    let i = t.length;
    for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-i);) {
      r--;
      i--;
    }
    let a = 0;
    for (; a < r && e.charCodeAt(a) === t.charCodeAt(a);) a++;
    if (r -= a, i -= a, 0 === r) return i;
    let o;
    let s;
    let _;
    let l;
    let u = 0;
    let c = 0;
    for (; u < r;) {
      tE[u] = e.charCodeAt(a + u);
      tC[u] = ++u;
    }
    for (; c < i;) for (o = t.charCodeAt(a + c), _ = c++, s = c, u = 0; u < r; u++) {
      l = o === tE[u] ? _ : _ + 1;
      _ = tC[u];
      s = tC[u] = _ > s ? l > s ? s + 1 : l : l > _ ? _ + 1 : l;
    }
    return s;
  }(e, t));
  o && a.push(`Did you mean ${tS.$$default.blue(n.key(o))}?`);
  r.warn(a.join(" "));
};
var tA = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
var tk = class {
  static create(e) {
    return function (e, t) {
      let n = new e(t);
      let r = Object.create(n);
      for (let e of tA) e in t && (r[e] = function (e, t, n) {
        return "function" == typeof e ? (...r) => e(...r.slice(0, n - 1), t, ...r.slice(n - 1)) : () => e;
      }(t[e], n, tk.prototype[e].length));
      return r;
    }(this, e);
  }
  constructor(e) {
    this.name = e.name;
  }
  default(e) {}
  expected(e) {
    return "nothing";
  }
  validate(e, t) {
    return !1;
  }
  deprecated(e, t) {
    return !1;
  }
  forward(e, t) {}
  redirect(e, t) {}
  overlap(e, t, n) {
    return e;
  }
  preprocess(e, t) {
    return e;
  }
  postprocess(e, t) {
    return tD;
  }
};
var tF = class extends tk {
  constructor(e) {
    super(e);
    this._sourceName = e.sourceName;
  }
  expected(e) {
    return e.schemas[this._sourceName].expected(e);
  }
  validate(e, t) {
    return t.schemas[this._sourceName].validate(e, t);
  }
  redirect(e, t) {
    return this._sourceName;
  }
};
var tP = class extends tk {
  expected() {
    return "anything";
  }
  validate() {
    return !0;
  }
};
var tN = class extends tk {
  constructor({
    valueSchema: e,
    name: t = e.name,
    ...n
  }) {
    super({
      ...n,
      name: t
    });
    this._valueSchema = e;
  }
  expected(e) {
    let {
      text,
      list
    } = e.normalizeExpectedResult(this._valueSchema.expected(e));
    return {
      text: text && `an array of ${text}`,
      list: list && {
        title: "an array of the following values",
        values: [{
          list
        }]
      }
    };
  }
  validate(e, t) {
    if (!Array.isArray(e)) return !1;
    let n = [];
    for (let r of e) {
      let e = t.normalizeValidateResult(this._valueSchema.validate(r, t), r);
      !0 !== e && n.push(e.value);
    }
    return 0 === n.length || {
      value: n
    };
  }
  deprecated(e, t) {
    let n = [];
    for (let r of e) {
      let e = t.normalizeDeprecatedResult(this._valueSchema.deprecated(r, t), r);
      !1 !== e && n.push(...e.map(({
        value: e
      }) => ({
        value: [e]
      })));
    }
    return n;
  }
  forward(e, t) {
    let n = [];
    for (let r of e) {
      let e = t.normalizeForwardResult(this._valueSchema.forward(r, t), r);
      n.push(...e.map(tI));
    }
    return n;
  }
  redirect(e, t) {
    let n = [];
    let r = [];
    for (let i of e) {
      let e = t.normalizeRedirectResult(this._valueSchema.redirect(i, t), i);
      "remain" in e && n.push(e.remain);
      r.push(...e.redirect.map(tI));
    }
    return 0 === n.length ? {
      redirect: r
    } : {
      redirect: r,
      remain: n
    };
  }
  overlap(e, t) {
    return e.concat(t);
  }
};
function tI({
  from: e,
  to: t
}) {
  return {
    from: [e],
    to: t
  };
}
var tO = class extends tk {
  expected() {
    return "true or false";
  }
  validate(e) {
    return "boolean" == typeof e;
  }
};
function tB(e, t) {
  if (e === t) return 0;
  let n = typeof e;
  let r = typeof t;
  let i = ["undefined", "object", "boolean", "number", "string"];
  return n !== r ? i.indexOf(n) - i.indexOf(r) : "string" !== n ? Number(e) - Number(t) : e.localeCompare(t);
}
function tj(e) {
  return void 0 === e ? {} : e;
}
function tM(e) {
  if ("string" == typeof e) return {
    text: e
  };
  let {
    text,
    list
  } = e;
  (function (e, t) {
    if (!e) throw Error(t);
  })((text || list) !== void 0, "Unexpected `expected` result, there should be at least one field.");
  return list ? {
    text,
    list: {
      title: list.title,
      values: list.values.map(tM)
    }
  } : {
    text
  };
}
function tL(e, t) {
  return !0 === e || (!1 === e ? {
    value: t
  } : e);
}
function tR(e, t, n = !1) {
  return !1 !== e && (!0 === e ? !!n || [{
    value: t
  }] : "value" in e ? [e] : 0 !== e.length && e);
}
function tJ(e, t) {
  return "string" == typeof e || "key" in e ? {
    from: t,
    to: e
  } : "from" in e ? {
    from: e.from,
    to: e.to
  } : {
    from: t,
    to: e.to
  };
}
function tq(e, t) {
  return void 0 === e ? [] : Array.isArray(e) ? e.map(e => tJ(e, t)) : [tJ(e, t)];
}
function tU(e, t) {
  let n = tq("object" == typeof e && "redirect" in e ? e.redirect : e, t);
  return 0 === n.length ? {
    remain: t,
    redirect: n
  } : "object" == typeof e && "remain" in e ? {
    remain: e.remain,
    redirect: n
  } : {
    redirect: n
  };
}
var tz = class extends tk {
  constructor(e) {
    super(e);
    this._choices = function (e, t) {
      let n = new Map();
      for (let r of e) {
        let e = r[t];
        if (n.has(e)) throw Error(`Duplicate ${t} ${JSON.stringify(e)}`);
        n.set(e, r);
      }
      return n;
    }(e.choices.map(e => e && "object" == typeof e ? e : {
      value: e
    }), "value");
  }
  expected({
    descriptor: e
  }) {
    let t = Array.from(this._choices.keys()).map(e => this._choices.get(e)).filter(({
      hidden: e
    }) => !e).map(e => e.value).sort(tB).map(e.value);
    let n = t.slice(0, -2);
    let r = t.slice(-2);
    return {
      text: n.concat(r.join(" or ")).join(", "),
      list: {
        title: "one of the following values",
        values: t
      }
    };
  }
  validate(e) {
    return this._choices.has(e);
  }
  deprecated(e) {
    let t = this._choices.get(e);
    return !!t && !!t.deprecated && {
      value: e
    };
  }
  forward(e) {
    let t = this._choices.get(e);
    return t ? t.forward : void 0;
  }
  redirect(e) {
    let t = this._choices.get(e);
    return t ? t.redirect : void 0;
  }
};
var tK = class extends tk {
  expected() {
    return "a number";
  }
  validate(e, t) {
    return "number" == typeof e;
  }
};
var tW = class extends tK {
  expected() {
    return "an integer";
  }
  validate(e, t) {
    return !0 === t.normalizeValidateResult(super.validate(e, t), e) && e === Math.floor(e);
  }
};
var tV = class extends tk {
  expected() {
    return "a string";
  }
  validate(e) {
    return "string" == typeof e;
  }
};
var t$ = (e, t, n) => {
  let {
    text,
    list
  } = n.normalizeExpectedResult(n.schemas[e].expected(n));
  let a = [];
  text && a.push(tv(e, t, text, n.descriptor));
  list && a.push([tv(e, t, list.title, n.descriptor)].concat(list.values.map(e => function e({
    text: t,
    list: n
  }, r) {
    let i = [];
    t && i.push(`- ${tg.$$default.blue(t)}`);
    n && i.push([`- ${tg.$$default.blue(n.title)}:`].concat(n.values.map(t => e(t, r - tx.length).replace(/^|\n/g, `$&${tx}`))).join(`
`));
    return tT(i, r);
  }(e, n.loggerPrintWidth))).join(`
`));
  return tT(a, n.loggerPrintWidth);
};
var tH = (e, t, {
  descriptor: n
}) => {
  let r = [`${ty.$$default.yellow("string" == typeof e ? n.key(e) : n.pair(e))} is deprecated`];
  t && r.push(`we now treat it as ${ty.$$default.blue("string" == typeof t ? n.key(t) : n.pair(t))}`);
  return r.join("; ") + ".";
};
var tG = class {
  constructor(e, t) {
    let {
      logger = console,
      loggerPrintWidth = 80,
      descriptor = th,
      unknown = tw,
      invalid = t$,
      deprecated = tH,
      missing = () => !1,
      required = () => !1,
      preprocess = e => e,
      postprocess = () => tD
    } = t || {};
    this._utils = {
      descriptor,
      logger: logger || {
        warn: () => {}
      },
      loggerPrintWidth,
      schemas: function (e, t) {
        let n = Object.create(null);
        for (let r of e) {
          let e = r[t];
          if (n[e]) throw Error(`Duplicate ${t} ${JSON.stringify(e)}`);
          n[e] = r;
        }
        return n;
      }(e, "name"),
      normalizeDefaultResult: tj,
      normalizeExpectedResult: tM,
      normalizeDeprecatedResult: tR,
      normalizeForwardResult: tq,
      normalizeRedirectResult: tU,
      normalizeValidateResult: tL
    };
    this._unknownHandler = unknown;
    this._invalidHandler = (...e) => {
      let t = invalid(...e);
      return "string" == typeof t ? Error(t) : t;
    };
    this._deprecatedHandler = deprecated;
    this._identifyMissing = (e, t) => !(e in t) || missing(e, t);
    this._identifyRequired = required;
    this._preprocess = preprocess;
    this._postprocess = postprocess;
    this.cleanHistory();
  }
  cleanHistory() {
    let e;
    this._hasDeprecationWarned = (e = Object.create(null), t => {
      let n = JSON.stringify(t);
      return !!e[n] || (e[n] = !0, !1);
    });
  }
  normalize(e) {
    let t = {};
    let n = [this._preprocess(e, this._utils)];
    let r = () => {
      for (; 0 !== n.length;) {
        let e = n.shift();
        let r = this._applyNormalization(e, t);
        n.push(...r);
      }
    };
    for (let e of (r(), Object.keys(this._utils.schemas))) {
      let r = this._utils.schemas[e];
      if (!(e in t)) {
        let t = tj(r.$$default(this._utils));
        "value" in t && n.push({
          [e]: t.value
        });
      }
    }
    for (let e of (r(), Object.keys(this._utils.schemas))) {
      if (!(e in t)) continue;
      let n = this._utils.schemas[e];
      let r = t[e];
      let i = n.postprocess(r, this._utils);
      i !== tD && (this._applyValidation(i, e, n), t[e] = i);
    }
    this._applyPostprocess(t);
    this._applyRequiredCheck(t);
    return t;
  }
  _applyNormalization(e, t) {
    let n = [];
    let {
      knownKeys,
      unknownKeys
    } = this._partitionOptionKeys(e);
    for (let i of knownKeys) {
      let r = this._utils.schemas[i];
      let a = r.preprocess(e[i], this._utils);
      this._applyValidation(a, i, r);
      let o = ({
        from: e,
        to: t
      }) => {
        n.push("string" == typeof t ? {
          [t]: e
        } : {
          [t.key]: t.value
        });
      };
      let s = ({
        value: e,
        redirectTo: t
      }) => {
        let n = tR(r.deprecated(e, this._utils), a, !0);
        if (!1 !== n) {
          if (!0 === n) this._hasDeprecationWarned(i) || this._utils.logger.warn(this._deprecatedHandler(i, t, this._utils));else for (let {
            value
          } of n) {
            let n = {
              key: i,
              value
            };
            if (!this._hasDeprecationWarned(n)) {
              let r = "string" == typeof t ? {
                key: t,
                value
              } : t;
              this._utils.logger.warn(this._deprecatedHandler(n, r, this._utils));
            }
          }
        }
      };
      tq(r.forward(a, this._utils), a).forEach(o);
      let _ = tU(r.redirect(a, this._utils), a);
      if (_.redirect.forEach(o), "remain" in _) {
        let e = _.remain;
        t[i] = i in t ? r.overlap(t[i], e, this._utils) : e;
        s({
          value: e
        });
      }
      for (let {
        from,
        to
      } of _.redirect) s({
        value: from,
        redirectTo: to
      });
    }
    for (let r of unknownKeys) {
      let i = e[r];
      this._applyUnknownHandler(r, i, t, (e, t) => {
        n.push({
          [e]: t
        });
      });
    }
    return n;
  }
  _applyRequiredCheck(e) {
    for (let t of Object.keys(this._utils.schemas)) if (this._identifyMissing(t, e) && this._identifyRequired(t)) throw this._invalidHandler(t, tb, this._utils);
  }
  _partitionOptionKeys(e) {
    let [t, n] = function (e, t) {
      let n = [];
      let r = [];
      for (let i of e) t(i) ? n.push(i) : r.push(i);
      return [n, r];
    }(Object.keys(e).filter(t => !this._identifyMissing(t, e)), e => e in this._utils.schemas);
    return {
      knownKeys: t,
      unknownKeys: n
    };
  }
  _applyValidation(e, t, n) {
    let r = tL(n.validate(e, this._utils), e);
    if (!0 !== r) throw this._invalidHandler(t, r.value, this._utils);
  }
  _applyUnknownHandler(e, t, n, r) {
    let i = this._unknownHandler(e, t, this._utils);
    if (i) for (let e of Object.keys(i)) {
      if (this._identifyMissing(e, i)) continue;
      let t = i[e];
      e in this._utils.schemas ? r(e, t) : n[e] = t;
    }
  }
  _applyPostprocess(e) {
    let t = this._postprocess(e, this._utils);
    if (t !== tD) {
      if (t.$$delete) for (let n of t.$$delete) delete e[n];
      if (t.override) {
        let {
          knownKeys,
          unknownKeys
        } = this._partitionOptionKeys(t.override);
        for (let r of knownKeys) {
          let n = t.override[r];
          this._applyValidation(n, r, this._utils.schemas[r]);
          e[r] = n;
        }
        for (let n of unknownKeys) {
          let r = t.override[n];
          this._applyUnknownHandler(n, r, e, (t, n) => {
            let r = this._utils.schemas[t];
            this._applyValidation(n, t, r);
            e[t] = n;
          });
        }
      }
    }
  }
};
var tX = function (e, t, {
  logger: n = !1,
  isCLI: i = !1,
  passThrough: a = !1,
  FlagSchema: o,
  descriptor: s
} = {}) {
  if (i) {
    if (!o) throw Error("'FlagSchema' option is required.");
    if (!s) throw Error("'descriptor' option is required.");
  } else s = th;
  let _ = a ? Array.isArray(a) ? (e, t) => a.includes(e) ? {
    [e]: t
  } : void 0 : (e, t) => ({
    [e]: t
  }) : (e, t, n) => {
    let {
      _,
      ...i
    } = n.schemas;
    return tw(e, t, {
      ...n,
      schemas: i
    });
  };
  let l = new tG(function (e, {
    isCLI: t,
    FlagSchema: n
  }) {
    let r = [];
    for (let i of (t && r.push(tP.create({
      name: "_"
    })), e)) {
      r.push(function (e, {
        isCLI: t,
        optionInfos: n,
        FlagSchema: r
      }) {
        let {
          name
        } = e;
        let a = {
          name
        };
        let o;
        let s = {};
        switch (e.type) {
          case "int":
            o = tW;
            t && (a.preprocess = Number);
            break;
          case "string":
          case "path":
            o = tV;
            break;
          case "choice":
            o = tz;
            a.choices = e.choices.map(t => null != t && t.redirect ? {
              ...t,
              redirect: {
                to: {
                  key: e.name,
                  value: t.redirect
                }
              }
            } : t);
            break;
          case "boolean":
            o = tO;
            break;
          case "flag":
            o = r;
            a.flags = n.flatMap(e => [e.alias, e.description && e.name, e.oppositeDescription && `no-${e.name}`].filter(Boolean));
            break;
          default:
            throw Error(`Unexpected type ${e.type}`);
        }
        if (e.exception ? a.validate = (t, n, r) => e.exception(t) || n.validate(t, r) : a.validate = (e, t, n) => void 0 === e || t.validate(e, n), e.redirect && (s.redirect = t => t ? {
          to: "string" == typeof e.redirect ? e.redirect : {
            key: e.redirect.option,
            value: e.redirect.value
          }
        } : void 0), e.deprecated && (s.deprecated = !0), t && !e.array) {
          let e = a.preprocess || (e => e);
          a.preprocess = (t, n, r) => n.preprocess(e(Array.isArray(t) ? eD(!1, t, -1) : t), r);
        }
        return e.array ? tN.create({
          ...(t ? {
            preprocess: e => Array.isArray(e) ? e : [e]
          } : {}),
          ...s,
          valueSchema: o.create(a)
        }) : o.create({
          ...a,
          ...s
        });
      }(i, {
        isCLI: t,
        optionInfos: e,
        FlagSchema: n
      }));
      i.alias && t && r.push(tF.create({
        name: i.alias,
        sourceName: i.name
      }));
    }
    return r;
  }(t, {
    isCLI: i,
    FlagSchema: o
  }), {
    logger: n,
    unknown: _,
    descriptor: s
  });
  let u = !1 !== n;
  u && r && (l._hasDeprecationWarned = r);
  let c = l.normalize(e);
  u && (r = l._hasDeprecationWarned);
  return c;
};
var tY = (e, t, n) => {
  if (!(e && null == t)) {
    if (t.findLast) return t.findLast(n);
    for (let e = t.length - 1; e >= 0; e--) {
      let r = t[e];
      if (n(r, e, t)) return r;
    }
  }
};
function tQ(e, t) {
  if (!t) throw Error("parserName is required.");
  let n = tY(!1, e, e => e.parsers && Object.prototype.hasOwnProperty.call(e.parsers, t));
  if (n) return n;
  let r = `Couldn't resolve parser "${t}".`;
  throw new tl(r += " Plugins must be explicitly added to the standalone bundle.");
}
function tZ(e, t) {
  let n = e.parsers[t];
  return "function" == typeof n ? n() : n;
}
var t0 = {
  astFormat: "estree",
  printer: {},
  originalText: void 0,
  locStart: null,
  locEnd: null
};
async function t1(e, t = {}) {
  var n;
  var r;
  let i;
  let a = {
    ...e
  };
  if (!a.parser) {
    if (a.filepath) {
      if (a.parser = tf(a, {
        physicalFile: a.filepath
      }), !a.parser) throw new tu(`No parser could be inferred for file "${a.filepath}".`);
    } else throw new tu("No parser and no file path given, couldn't infer a parser.");
  }
  let o = tp({
    plugins: e.plugins,
    showDeprecated: !0
  }).options;
  let s = {
    ...t0,
    ...Object.fromEntries(o.filter(e => void 0 !== e.$$default).map(e => [e.name, e.$$default]))
  };
  let _ = tQ(a.plugins, a.parser);
  let l = await tZ(_, a.parser);
  a.astFormat = l.astFormat;
  a.locEnd = l.locEnd;
  a.locStart = l.locStart;
  let u = null != (n = _.printers) && n[l.astFormat] ? _ : function (e, t) {
    if (!t) throw Error("astFormat is required.");
    let n = tY(!1, e, e => e.printers && Object.prototype.hasOwnProperty.call(e.printers, t));
    if (n) return n;
    let r = `Couldn't find plugin for AST format "${t}".`;
    throw new tl(r += " Plugins must be explicitly added to the standalone bundle.");
  }(a.plugins, l.astFormat);
  let c = await (r = l.astFormat, "function" == typeof (i = u.printers[r]) ? i() : i);
  a.printer = c;
  let p = u.defaultOptions ? Object.fromEntries(Object.entries(u.defaultOptions).filter(([, e]) => void 0 !== e)) : {};
  for (let [e, t] of Object.entries({
    ...s,
    ...p
  })) (null === a[e] || void 0 === a[e]) && (a[e] = t);
  "json" === a.parser && (a.trailingComma = "none");
  return tX(a, o, {
    passThrough: Object.keys(t0),
    ...t
  });
}
var t2 = m(b(), 1);
async function t3(e, t) {
  let n;
  let r = await function ({
    plugins: e,
    parser: t
  }) {
    return tZ(tQ(e, t), t);
  }(t);
  let i = r.preprocess ? r.preprocess(e, t) : e;
  t.originalText = i;
  try {
    n = await r.parse(i, t, t);
  } catch (t) {
    !function (e, t) {
      let {
        loc
      } = e;
      if (loc) {
        let r = t2.codeFrameColumns(t, loc, {
          highlightCode: !0
        });
        e.message += `
` + r;
        e.codeFrame = r;
        return e;
      }
      throw e;
    }(t, e);
  }
  return {
    text: i,
    ast: n
  };
}
async function t6(e, t, n, r, i) {
  let {
    embeddedLanguageFormatting,
    printer: {
      embed,
      hasPrettierIgnore = () => !1,
      getVisitorKeys
    }
  } = n;
  if (!embed || "auto" !== embeddedLanguageFormatting) return;
  if (embed.length > 2) throw Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed");
  let l = e8(embed.getVisitorKeys ?? getVisitorKeys);
  let u = [];
  !function t() {
    let {
      node
    } = e;
    if (null === node || "object" != typeof node || hasPrettierIgnore(e)) return;
    for (let n of l(node)) Array.isArray(node[n]) ? e.each(t, n) : e.call(t, n);
    let a = embed(e, n);
    if (a) {
      if ("function" == typeof a) {
        u.push({
          print: a,
          node,
          pathStack: [...e.stack]
        });
        return;
      }
      i.set(node, a);
    }
  }();
  let c = e.stack;
  for (let {
    print,
    node,
    pathStack
  } of u) try {
    e.stack = pathStack;
    let s = await print(p, t, e, n);
    s && i.set(node, s);
  } catch (e) {
    if (globalThis.PRETTIER_DEBUG) throw e;
  }
  function p(e, t) {
    return t4(e, t, n, r);
  }
  e.stack = c;
}
async function t4(e, t, n, r) {
  let i = await t1({
    ...n,
    ...t,
    parentParser: n.parser,
    originalText: e
  }, {
    passThrough: !0
  });
  let {
    ast
  } = await t3(e, i);
  return eN(await r(ast, i));
}
var t8 = function (e, t) {
  let {
    originalText,
    [Symbol.$$for("comments")]: r,
    locStart,
    locEnd,
    [Symbol.$$for("printedComments")]: o
  } = t;
  let {
    node
  } = e;
  let _ = locStart(node);
  let l = locEnd(node);
  for (let e of r) locStart(e) >= _ && locEnd(e) <= l && o.add(e);
  return originalText.slice(_, l);
};
async function t5(e, t) {
  ({
    ast: e
  } = await t9(e, t));
  let n = new Map();
  let r = new eH(e);
  let i = () => {};
  let a = new Map();
  await t6(r, s, t, t5, a);
  let o = await t7(r, t, s, void 0, a);
  if (function (e) {
    let {
      [Symbol.$$for("comments")]: t,
      [Symbol.$$for("printedComments")]: n
    } = e;
    for (let e of t) {
      if (!e.printed && !n.has(e)) throw Error('Comment "' + e.value.trim() + '" was not printed. Please report this error!');
      delete e.printed;
    }
  }(t), t.nodeAfterCursor && !t.nodeBeforeCursor) return [ey, o];
  if (t.nodeBeforeCursor && !t.nodeAfterCursor) return [o, ey];
  return o;
  function s(e, t) {
    return void 0 === e || e === r ? _(t) : Array.isArray(e) ? r.call(() => _(t), ...e) : r.call(() => _(t), e);
  }
  function _(e) {
    i(r);
    let o = r.node;
    if (null == o) return "";
    let _ = o && "object" == typeof o && void 0 === e;
    if (_ && n.has(o)) return n.get(o);
    let l = t7(r, t, s, e, a);
    _ && n.set(o, l);
    return l;
  }
}
function t7(e, t, n, r, i) {
  var a;
  let {
    node
  } = e;
  let {
    printer
  } = t;
  let _;
  switch (_ = null != (a = printer.hasPrettierIgnore) && a.call(printer, e) ? t8(e, t) : i.has(node) ? i.get(node) : printer.print(e, t, n, r), node) {
    case t.cursorNode:
      _ = eO(_, e => [ey, e, ey]);
      break;
    case t.nodeBeforeCursor:
      _ = eO(_, e => [e, ey]);
      break;
    case t.nodeAfterCursor:
      _ = eO(_, e => [ey, e]);
  }
  !printer.printComment || printer.willPrintOwnComments && printer.willPrintOwnComments(e, t) || (_ = function (e, t, n) {
    let {
      leading,
      trailing
    } = function (e, t) {
      let n = e.node;
      if (!n) return {};
      let r = t[Symbol.$$for("printedComments")];
      if (0 === (n.comments || []).filter(e => !r.has(e)).length) return {
        leading: "",
        trailing: ""
      };
      let i = [];
      let a = [];
      let o;
      e.each(() => {
        let n = e.node;
        if (null != r && r.has(n)) return;
        let {
          leading: _leading,
          trailing: _trailing
        } = n;
        _leading ? i.push(function (e, t) {
          var n;
          let r = e.node;
          let i = [t_(e, t)];
          let {
            printer,
            originalText,
            locStart,
            locEnd
          } = t;
          if (null == (n = printer.isBlockComment) ? void 0 : n.call(printer, r)) {
            let e = e3(originalText, locEnd(r)) ? e3(originalText, locStart(r), {
              backwards: !0
            }) ? ef : em : " ";
            i.push(e);
          } else i.push(ef);
          let l = e2(originalText, eZ(originalText, locEnd(r)));
          !1 !== l && e3(originalText, l) && i.push(ef);
          return i;
        }(e, t)) : _trailing && (o = function (e, t, n) {
          var r;
          let i = e.node;
          let a = t_(e, t);
          let {
            printer,
            originalText,
            locStart
          } = t;
          let l = null == (r = printer.isBlockComment) ? void 0 : r.call(printer, i);
          return null != n && n.hasLineSuffix && !(null != n && n.isBlock) || e3(originalText, locStart(i), {
            backwards: !0
          }) ? {
            doc: eu([ef, ts(originalText, locStart(i)) ? ef : "", a]),
            isBlock: l,
            hasLineSuffix: !0
          } : !l || null != n && n.hasLineSuffix ? {
            doc: [eu([" ", a]), ec],
            isBlock: l,
            hasLineSuffix: !0
          } : {
            doc: [" ", a],
            isBlock: l,
            hasLineSuffix: !1
          };
        }(e, t, o), a.push(o.doc));
      }, "comments");
      return {
        leading: i,
        trailing: a
      };
    }(e, n);
    return leading || trailing ? eO(t, e => [leading, e, trailing]) : t;
  }(e, _, t));
  return _;
}
async function t9(e, t) {
  let n = e.comments ?? [];
  t[Symbol.$$for("comments")] = n;
  t[Symbol.$$for("tokens")] = e.tokens ?? [];
  t[Symbol.$$for("printedComments")] = new Set();
  (function (e, t) {
    let {
      comments
    } = e;
    if (delete e.comments, !(Array.isArray(comments) && comments.length > 0) || !t.printer.canAttachComment) return;
    let r = [];
    let {
      locStart,
      locEnd,
      printer: {
        experimentalFeatures: {
          avoidAstMutation: o = !1
        } = {},
        handleComments = {}
      },
      originalText
    } = t;
    let {
      ownLine = tr,
      endOfLine = tr,
      remaining = tr
    } = s;
    let p = comments.map((r, i) => ({
      ...function e(t, n, r, i) {
        let {
          locStart: _locStart,
          locEnd: _locEnd
        } = r;
        let s = _locStart(n);
        let _ = _locEnd(n);
        let l = tn(t, r);
        let u;
        let c;
        let p = 0;
        let d = l.length;
        for (; p < d;) {
          let t = p + d >> 1;
          let i = l[t];
          let m = _locStart(i);
          let f = _locEnd(i);
          if (m <= s && _ <= f) return e(i, n, r, i);
          if (f <= s) {
            u = i;
            p = t + 1;
            continue;
          }
          if (_ <= m) {
            c = i;
            d = t;
            continue;
          }
          throw Error("Comment location overlaps with node location");
        }
        if (i?.type === "TemplateLiteral") {
          let {
            quasis
          } = i;
          let t = to(quasis, n, r);
          u && to(quasis, u, r) !== t && (u = null);
          c && to(quasis, c, r) !== t && (c = null);
        }
        return {
          enclosingNode: i,
          precedingNode: u,
          followingNode: c
        };
      }(e, r, t),
      comment: r,
      text: originalText,
      options: t,
      ast: e,
      isLastComment: comments.length - 1 === i
    }));
    for (let [e, t] of p.entries()) {
      let n;
      let {
        comment,
        precedingNode,
        enclosingNode,
        followingNode,
        text,
        options,
        ast,
        isLastComment
      } = t;
      if ("json" === options.parser || "json5" === options.parser || "jsonc" === options.parser || "__js_expression" === options.parser || "__ts_expression" === options.parser || "__vue_expression" === options.parser || "__vue_ts_expression" === options.parser) {
        if (locStart(comment) - locStart(ast) <= 0) {
          e7(ast, comment);
          continue;
        }
        if (locEnd(comment) - locEnd(ast) >= 0) {
          te(ast, comment);
          continue;
        }
      }
      if (o ? n = [t] : (comment.enclosingNode = enclosingNode, comment.precedingNode = precedingNode, comment.followingNode = followingNode, n = [comment, text, options, ast, isLastComment]), function (e, t, n, r) {
        let {
          comment,
          precedingNode
        } = n[r];
        let {
          locStart,
          locEnd
        } = t;
        let _ = locStart(comment);
        if (precedingNode) for (let t = r - 1; t >= 0; t--) {
          let {
            comment,
            precedingNode
          } = n[t];
          if (precedingNode !== precedingNode || !ti(e.slice(locEnd(comment), _))) break;
          _ = locStart(comment);
        }
        return e3(e, _, {
          backwards: !0
        });
      }(text, options, p, e)) {
        comment.placement = "ownLine";
        ownLine(...n) || (followingNode ? e7(followingNode, comment) : precedingNode ? te(precedingNode, comment) : enclosingNode ? e9(enclosingNode, comment) : e9(ast, comment));
      } else if (function (e, t, n, r) {
        let {
          comment,
          followingNode
        } = n[r];
        let {
          locStart,
          locEnd
        } = t;
        let _ = locEnd(comment);
        if (followingNode) for (let t = r + 1; t < n.length; t++) {
          let {
            comment,
            followingNode
          } = n[t];
          if (followingNode !== followingNode || !ti(e.slice(_, locStart(comment)))) break;
          _ = locEnd(comment);
        }
        return e3(e, _);
      }(text, options, p, e)) {
        comment.placement = "endOfLine";
        endOfLine(...n) || (precedingNode ? te(precedingNode, comment) : followingNode ? e7(followingNode, comment) : enclosingNode ? e9(enclosingNode, comment) : e9(ast, comment));
      } else if (comment.placement = "remaining", !remaining(...n)) {
        if (precedingNode && followingNode) {
          let e = r.length;
          e > 0 && r[e - 1].followingNode !== followingNode && ta(r, options);
          r.push(t);
        } else precedingNode ? te(precedingNode, comment) : followingNode ? e7(followingNode, comment) : enclosingNode ? e9(enclosingNode, comment) : e9(ast, comment);
      }
    }
    if (ta(r, t), !o) for (let e of comments) {
      delete e.precedingNode;
      delete e.enclosingNode;
      delete e.followingNode;
    }
  })(e, t);
  let {
    printer: {
      preprocess
    }
  } = t;
  return {
    ast: e = preprocess ? await preprocess(e, t) : e,
    comments: n
  };
}
var ne = function (e, t) {
  let {
    cursorOffset,
    locStart,
    locEnd
  } = t;
  let a = e8(t.printer.getVisitorKeys);
  let o = e;
  let s = [e];
  for (let t of function* (e, t) {
    let n = [e];
    for (let e = 0; e < n.length; e++) for (let r of eX(n[e], t)) {
      yield r;
      n.push(r);
    }
  }(e, {
    getVisitorKeys: a,
    filter: e => locStart(e) <= cursorOffset && locEnd(e) >= cursorOffset
  })) {
    s.push(t);
    o = t;
  }
  if (eX(o, {
    getVisitorKeys: a
  }).next().done) return {
    cursorNode: o
  };
  let _;
  let l;
  let u = -1;
  let c = Number.POSITIVE_INFINITY;
  for (; s.length > 0 && (void 0 === _ || void 0 === l);) {
    o = s.pop();
    let e = void 0 !== _;
    let t = void 0 !== l;
    for (let s of eX(o, {
      getVisitorKeys: a
    })) {
      if (!e) {
        let e = locEnd(s);
        e <= cursorOffset && e > u && (_ = s, u = e);
      }
      if (!t) {
        let e = locStart(s);
        e >= cursorOffset && e < c && (l = s, c = e);
      }
    }
  }
  return {
    nodeBeforeCursor: _,
    nodeAfterCursor: l
  };
};
var nt = function (e, t) {
  let {
    printer: {
      massageAstNode,
      getVisitorKeys
    }
  } = t;
  if (!massageAstNode) return e;
  let i = e8(getVisitorKeys);
  let a = massageAstNode.ignoredProperties ?? new Set();
  return function e(t, r) {
    if (!(null !== t && "object" == typeof t)) return t;
    if (Array.isArray(t)) return t.map(t => e(t, r)).filter(Boolean);
    let o = {};
    let s = new Set(i(t));
    for (let n in t) !Object.prototype.hasOwnProperty.call(t, n) || a.has(n) || (s.has(n) ? o[n] = e(t[n], t) : o[n] = t[n]);
    let _ = massageAstNode(t, o, r);
    if (null !== _) return _ ?? o;
  }(e);
};
var nn = (e, t, n) => {
  if (!(e && null == t)) {
    if (t.findLastIndex) return t.findLastIndex(n);
    for (let e = t.length - 1; e >= 0; e--) if (n(t[e], e, t)) return e;
    return -1;
  }
};
var nr = ({
  parser: e
}) => "json" === e || "json5" === e || "jsonc" === e || "json-stringify" === e;
function ni(e) {
  let t = nn(!1, e, e => "Program" !== e.type && "File" !== e.type);
  return -1 === t ? e : e.slice(0, t + 1);
}
function na(e, t, n, r, i = [], a) {
  let {
    locStart,
    locEnd
  } = n;
  let _ = locStart(e);
  let l = locEnd(e);
  if (!(t > l || t < _ || "rangeEnd" === a && t === _ || "rangeStart" === a && t === l)) {
    for (let o of tn(e, n)) {
      let s = na(o, t, n, r, [e, ...i], a);
      if (s) return s;
    }
    if (!r || r(e, i[0])) return {
      node: e,
      parentNodes: i
    };
  }
}
var no = new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]);
var ns = new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
function n_(e, t, n) {
  if (!t) return !1;
  switch (e.parser) {
    case "flow":
    case "babel":
    case "babel-flow":
    case "babel-ts":
    case "typescript":
    case "acorn":
    case "espree":
    case "meriyah":
    case "__babel_estree":
      var r;
      r = t.type;
      return "DeclareExportDeclaration" !== n?.type && "TypeParameterDeclaration" !== r && ("Directive" === r || "TypeAlias" === r || "TSExportAssignment" === r || r.startsWith("Declare") || r.startsWith("TSDeclare") || r.endsWith("Statement") || r.endsWith("Declaration"));
    case "json":
    case "json5":
    case "jsonc":
    case "json-stringify":
      return no.has(t.type);
    case "graphql":
      return ns.has(t.kind);
    case "vue":
      return "root" !== t.tag;
  }
  return !1;
}
var nl = Symbol("cursor");
async function nu(e, t, n = 0) {
  if (!e || 0 === e.trim().length) return {
    formatted: "",
    cursorOffset: -1,
    comments: []
  };
  let {
    ast,
    text
  } = await t3(e, t);
  t.cursorOffset >= 0 && (t = {
    ...t,
    ...ne(ast, t)
  });
  let a = await t5(ast, t, n);
  n > 0 && (a = eb([ef, a], n, t.tabWidth));
  let o = ez(a, t);
  if (n > 0) {
    let e = o.formatted.trim();
    void 0 !== o.cursorNodeStart && (o.cursorNodeStart -= o.formatted.indexOf(e), o.cursorNodeStart < 0 && (o.cursorNodeStart = 0, o.cursorNodeText = o.cursorNodeText.trimStart()), o.cursorNodeStart + o.cursorNodeText.length > e.length && (o.cursorNodeText = o.cursorNodeText.trimEnd()));
    o.formatted = e + M(t.endOfLine);
  }
  let s = t[Symbol.$$for("comments")];
  if (t.cursorOffset >= 0) {
    let e;
    let n;
    let r;
    let a;
    if ((t.cursorNode || t.nodeBeforeCursor || t.nodeAfterCursor) && o.cursorNodeText) {
      if (r = o.cursorNodeStart, a = o.cursorNodeText, t.cursorNode) {
        e = t.locStart(t.cursorNode);
        n = text.slice(e, t.locEnd(t.cursorNode));
      } else {
        if (!t.nodeBeforeCursor && !t.nodeAfterCursor) throw Error("Cursor location must contain at least one of cursorNode, nodeBeforeCursor, nodeAfterCursor");
        e = t.nodeBeforeCursor ? t.locEnd(t.nodeBeforeCursor) : 0;
        let r = t.nodeAfterCursor ? t.locStart(t.nodeAfterCursor) : text.length;
        n = text.slice(e, r);
      }
    } else {
      e = 0;
      n = text;
      r = 0;
      a = o.formatted;
    }
    let _ = t.cursorOffset - e;
    if (n === a) return {
      formatted: o.formatted,
      cursorOffset: r + _,
      comments: s
    };
    let l = n.split("");
    l.splice(_, 0, nl);
    let u = a.split("");
    let c = j.diff(l, u, void 0);
    let p = r;
    for (let e of c) if (e.removed) {
      if (e.value.includes(nl)) break;
    } else p += e.count;
    return {
      formatted: o.formatted,
      cursorOffset: p,
      comments: s
    };
  }
  return {
    formatted: o.formatted,
    cursorOffset: -1,
    comments: s
  };
}
async function nc(e, t) {
  let {
    ast,
    text
  } = await t3(e, t);
  let {
    rangeStart,
    rangeEnd
  } = function (e, t, n) {
    let r;
    let i;
    let {
      rangeStart: _rangeStart,
      rangeEnd: _rangeEnd,
      locStart,
      locEnd
    } = t;
    eG.ok(_rangeEnd > _rangeStart);
    let l = e.slice(_rangeStart, _rangeEnd).search(/\S/u);
    let u = -1 === l;
    if (!u) for (a += l; _rangeEnd > _rangeStart && !/\S/u.test(e[_rangeEnd - 1]); --_rangeEnd);
    let c = na(n, _rangeStart, t, (e, n) => n_(t, e, n), [], "rangeStart");
    let p = u ? c : na(n, _rangeEnd, t, e => n_(t, e), [], "rangeEnd");
    if (!c || !p) return {
      rangeStart: 0,
      rangeEnd: 0
    };
    if (nr(t)) {
      let e;
      let t;
      e = [c.node, ...c.parentNodes];
      t = new Set([p.node, ...p.parentNodes]);
      let n = e.find(e => no.has(e.type) && t.has(e));
      r = n;
      i = n;
    } else ({
      startNode: r,
      endNode: i
    } = function (e, t, {
      locStart: n,
      locEnd: r
    }) {
      let i = e.node;
      let a = t.node;
      if (i === a) return {
        startNode: i,
        endNode: a
      };
      let o = n(e.node);
      for (let e of ni(t.parentNodes)) if (n(e) >= o) a = e;else break;
      let s = r(t.node);
      for (let t of ni(e.parentNodes)) {
        if (r(t) <= s) i = t;else break;
        if (i === a) break;
      }
      return {
        startNode: i,
        endNode: a
      };
    }(c, p, t));
    return {
      rangeStart: Math.min(locStart(r), locStart(i)),
      rangeEnd: Math.max(locEnd(r), locEnd(i))
    };
  }(text, t, ast);
  let o = text.slice(rangeStart, rangeEnd);
  let s = Math.min(rangeStart, text.lastIndexOf(`
`, rangeStart) + 1);
  let _ = e$(text.slice(s, rangeStart).match(/^\s*/u)[0], t.tabWidth);
  let l = await nu(o, {
    ...t,
    rangeStart: 0,
    rangeEnd: Number.POSITIVE_INFINITY,
    cursorOffset: t.cursorOffset > rangeStart && t.cursorOffset <= rangeEnd ? t.cursorOffset - rangeStart : -1,
    endOfLine: "lf"
  }, _);
  let u = l.formatted.trimEnd();
  let {
    cursorOffset
  } = t;
  cursorOffset > rangeEnd ? c += u.length - o.length : l.cursorOffset >= 0 && (c = l.cursorOffset + rangeStart);
  let p = text.slice(0, rangeStart) + u + text.slice(rangeEnd);
  if ("lf" !== t.endOfLine) {
    let e = M(t.endOfLine);
    cursorOffset >= 0 && e === `\r
` && (c += L(p.slice(0, cursorOffset), `
`));
    p = D(!1, p, `
`, e);
  }
  return {
    formatted: p,
    cursorOffset,
    comments: l.comments
  };
}
function np(e, t, n) {
  return "number" != typeof t || Number.isNaN(t) || t < 0 || t > e.length ? n : t;
}
function nd(e, t) {
  let {
    cursorOffset,
    rangeStart,
    rangeEnd
  } = t;
  n = np(e, cursorOffset, -1);
  r = np(e, rangeStart, 0);
  i = np(e, rangeEnd, e.length);
  return {
    ...t,
    cursorOffset,
    rangeStart,
    rangeEnd
  };
}
function nm(e, t) {
  var n;
  let r;
  let {
    cursorOffset,
    rangeStart,
    rangeEnd,
    endOfLine
  } = nd(e, t);
  let _ = "\uFEFF" === e.charAt(0);
  if (_ && (e = e.slice(1), cursorOffset--, rangeStart--, rangeEnd--), "auto" === endOfLine && (s = -1 !== (r = (n = e).indexOf("\r")) ? n.charAt(r + 1) === `
` ? "crlf" : "cr" : "lf"), e.includes("\r")) {
    let t = t => L(e.slice(0, Math.max(t, 0)), `\r
`);
    i -= t(cursorOffset);
    a -= t(rangeStart);
    o -= t(rangeEnd);
    e = D(!1, e, /\r\n?/gu, `
`);
  }
  return {
    hasBOM: _,
    text: e,
    options: nd(e, {
      ...t,
      cursorOffset,
      rangeStart,
      rangeEnd,
      endOfLine
    })
  };
}
async function nf(e, t) {
  let n = await function ({
    plugins: e,
    parser: t
  }) {
    return tZ(tQ(e, t), t);
  }(t);
  return !n.hasPragma || n.hasPragma(e);
}
async function nh(e, t) {
  let n;
  let {
    hasBOM,
    text,
    options
  } = nm(e, await t1(t));
  return options.rangeStart >= options.rangeEnd && "" !== text || options.requirePragma && !(await nf(text, options)) ? {
    formatted: e,
    cursorOffset: t.cursorOffset,
    comments: []
  } : (options.rangeStart > 0 || options.rangeEnd < text.length ? n = await nc(text, options) : (!options.requirePragma && options.insertPragma && options.printer.insertPragma && !(await nf(text, options)) && (i = options.printer.insertPragma(text)), n = await nu(text, options)), hasBOM && (n.formatted = "\uFEFF" + n.formatted, n.cursorOffset >= 0 && n.cursorOffset++), n);
}
async function ny(e, t, n) {
  let {
    text,
    options
  } = nm(e, await t1(t));
  let a = await t3(text, options);
  n && (n.preprocessForPrint && (a.ast = await t9(a.ast, options)), n.massage && (a.ast = nt(a.ast, options)));
  return a;
}
async function ng(e, t) {
  t = await t1(t);
  return ez(await t5(e, t), t);
}
async function nb(e, t) {
  let n = function (e) {
    let t = Object.create(null);
    let n = new Set();
    return function e(t, n, i) {
      var a;
      var o;
      if ("string" == typeof t) return JSON.stringify(t);
      if (Array.isArray(t)) {
        let n = t.map(e).filter(Boolean);
        return 1 === n.length ? n[0] : `[${n.join(", ")}]`;
      }
      if (t.type === Y) {
        let e = (null == (a = i?.[n + 1]) ? void 0 : a.type) === Z;
        return t.literal ? e ? "literalline" : "literallineWithoutBreakParent" : t.hard ? e ? "hardline" : "hardlineWithoutBreakParent" : t.soft ? "softline" : "line";
      }
      if (t.type === Z) return (null == (o = i?.[n - 1]) ? void 0 : o.type) === Y && i[n - 1].hard ? void 0 : "breakParent";
      if (t.type === K) return "trim";
      if (t.type === U) return "indent(" + e(t.contents) + ")";
      if (t.type === z) return t.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + e(t.contents) + ")" : t.n < 0 ? "dedent(" + e(t.contents) + ")" : "root" === t.n.type ? "markAsRoot(" + e(t.contents) + ")" : "align(" + JSON.stringify(t.n) + ", " + e(t.contents) + ")";
      if (t.type === $) return "ifBreak(" + e(t.breakContents) + (t.flatContents ? ", " + e(t.flatContents) : "") + (t.groupId ? (t.flatContents ? "" : ', ""') + `, { groupId: ${r(t.groupId)} }` : "") + ")";
      if (t.type === H) {
        let n = [];
        t.negate && n.push("negate: true");
        t.groupId && n.push(`groupId: ${r(t.groupId)}`);
        let i = n.length > 0 ? `, { ${n.join(", ")} }` : "";
        return `indentIfBreak(${e(t.contents)}${i})`;
      }
      if (t.type === W) {
        let n = [];
        t.$$break && "propagated" !== t.$$break && n.push("shouldBreak: true");
        t.id && n.push(`id: ${r(t.id)}`);
        let i = n.length > 0 ? `, { ${n.join(", ")} }` : "";
        return t.expandedStates ? `conditionalGroup([${t.expandedStates.map(t => e(t)).join(",")}]${i})` : `group(${e(t.contents)}${i})`;
      }
      if (t.type === V) return `fill([${t.parts.map(t => e(t)).join(", ")}])`;
      if (t.type === G) return "lineSuffix(" + e(t.contents) + ")";
      if (t.type === X) return "lineSuffixBoundary";
      if (t.type === Q) return `label(${JSON.stringify(t.label)}, ${e(t.contents)})`;
      throw Error("Unknown doc type " + t.type);
    }(function e(t) {
      var n;
      if (!t) return "";
      if (Array.isArray(t)) {
        let n = [];
        for (let r of t) if (Array.isArray(r)) n.push(...e(r));else {
          let t = e(r);
          "" !== t && n.push(t);
        }
        return n;
      }
      return t.type === $ ? {
        ...t,
        breakContents: e(t.breakContents),
        flatContents: e(t.flatContents)
      } : t.type === W ? {
        ...t,
        contents: e(t.contents),
        expandedStates: null == (n = t.expandedStates) ? void 0 : n.map(e)
      } : t.type === V ? {
        type: "fill",
        parts: t.parts.map(e)
      } : t.contents ? {
        ...t,
        contents: e(t.contents)
      } : t;
    }(e));
    function r(e) {
      if ("symbol" != typeof e) return JSON.stringify(String(e));
      if (e in t) return t[e];
      let r = e.description || "symbol";
      for (let i = 0;; i++) {
        let a = r + (i > 0 ? ` #${i}` : "");
        if (!n.has(a)) {
          n.add(a);
          return t[e] = `Symbol.for(${JSON.stringify(a)})`;
        }
      }
    }
  }(e);
  let {
    formatted
  } = await nh(n, {
    ...t,
    parser: "__js_expression"
  });
  return formatted;
}
async function nD(e, t) {
  t = await t1(t);
  let {
    ast
  } = await t3(e, t);
  return t5(ast, t);
}
async function nx(e, t) {
  return ez(e, await t1(t));
}
var nv = {};
p(nv, {
  builders: () => nT,
  printer: () => nS,
  utils: () => nC
});
var nT = {
  join: eg,
  line: em,
  softline: {
    type: Y,
    soft: !0
  },
  hardline: ef,
  literalline: eh,
  group: el,
  conditionalGroup: function (e, t) {
    return el(e[0], {
      ...t,
      expandedStates: e
    });
  },
  fill: function (e) {
    eo(e);
    return {
      type: V,
      parts: e
    };
  },
  lineSuffix: eu,
  lineSuffixBoundary: {
    type: X
  },
  cursor: ey,
  breakParent: ec,
  ifBreak: function (e, t = "", n = {}) {
    eo(e);
    "" !== t && eo(t);
    return {
      type: $,
      breakContents: e,
      flatContents: t,
      groupId: n.groupId
    };
  },
  trim: {
    type: K
  },
  indent: es,
  indentIfBreak: function (e, t) {
    eo(e);
    return {
      type: H,
      contents: e,
      groupId: t.groupId,
      negate: t.negate
    };
  },
  align: e_,
  addAlignmentToDoc: eb,
  markAsRoot: function (e) {
    return e_({
      type: "root"
    }, e);
  },
  dedentToRoot: function (e) {
    return e_(Number.NEGATIVE_INFINITY, e);
  },
  dedent: function (e) {
    return e_(-1, e);
  },
  hardlineWithoutBreakParent: ep,
  literallineWithoutBreakParent: ed,
  label: function (e, t) {
    eo(t);
    return e ? {
      type: Q,
      label: e,
      contents: t
    } : t;
  },
  concat: e => e
};
var nS = {
  printDocToString: ez
};
var nC = {
  willBreak: function (e) {
    return eE(e, ew, !1);
  },
  traverseDoc: ea,
  findInDoc: eE,
  mapDoc: eC,
  removeLines: function (e) {
    return eC(e, ek);
  },
  stripTrailingHardline: eN,
  replaceEndOfLine: function (e, t = eh) {
    return eC(e, e => "string" == typeof e ? eg(t, e.split(`
`)) : e);
  },
  canBreak: function (e) {
    return eE(e, eI, !1);
  }
};
var nE = "3.4.2";
var nw = {};
p(nw, {
  addDanglingComment: () => e9,
  addLeadingComment: () => e7,
  addTrailingComment: () => te,
  getAlignmentSize: () => e$,
  getIndentSize: () => nN,
  getMaxContinuousCount: () => nI,
  getNextNonSpaceNonCommentCharacter: () => nO,
  getNextNonSpaceNonCommentCharacterIndex: () => nR,
  getPreferredQuote: () => nB,
  getStringWidth: () => eS,
  hasNewline: () => e3,
  hasNewlineInRange: () => nj,
  hasSpaces: () => nM,
  isNextLineEmpty: () => nq,
  isNextLineEmptyAfterIndex: () => nP,
  isPreviousLineEmpty: () => nJ,
  makeString: () => nL,
  skip: () => eY,
  skipEverythingButNewLine: () => e1,
  skipInlineComment: () => nA,
  skipNewline: () => e2,
  skipSpaces: () => eZ,
  skipToLineEnd: () => e0,
  skipTrailingComment: () => nk,
  skipWhitespace: () => eQ
});
var nA = function (e, t) {
  if (!1 === t) return !1;
  if ("/" === e.charAt(t) && "*" === e.charAt(t + 1)) {
    for (let n = t + 2; n < e.length; ++n) if ("*" === e.charAt(n) && "/" === e.charAt(n + 1)) return n + 2;
  }
  return t;
};
var nk = function (e, t) {
  return !1 !== t && ("/" === e.charAt(t) && "/" === e.charAt(t + 1) ? e1(e, t) : t);
};
var nF = function (e, t) {
  let n = null;
  let r = t;
  for (; r !== n;) {
    n = r;
    r = eZ(e, r);
    r = nA(e, r);
    r = nk(e, r);
    r = e2(e, r);
  }
  return r;
};
var nP = function (e, t) {
  let n = null;
  let r = t;
  for (; r !== n;) {
    n = r;
    r = e0(e, r);
    r = nA(e, r);
    r = eZ(e, r);
  }
  r = nk(e, r);
  return !1 !== (r = e2(e, r)) && e3(e, r);
};
var nN = function (e, t) {
  let n = e.lastIndexOf(`
`);
  return -1 === n ? 0 : e$(e.slice(n + 1).match(/^[\t ]*/u)[0], t);
};
var nI = function (e, t) {
  let n = e.match(RegExp(`(${function (e) {
    if ("string" != typeof e) throw TypeError("Expected a string");
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }(t)})+`, "gu"));
  return n?.reduce((e, n) => Math.max(e, n.length / t.length), 0);
};
var nO = function (e, t) {
  let n = nF(e, t);
  return !1 === n ? "" : e.charAt(n);
};
var nB = function (e, t) {
  let n = !0 === t || "'" === t ? "'" : '"';
  let r = "'" === n ? '"' : "'";
  let i = 0;
  let a = 0;
  for (let t of e) t === n ? i++ : t === r && a++;
  return i > a ? r : n;
};
var nj = function (e, t, n) {
  for (let r = t; r < n; ++r) if (e.charAt(r) === `
`) return !0;
  return !1;
};
var nM = function (e, t, n = {}) {
  return eZ(e, n.backwards ? t - 1 : t, n) !== t;
};
var nL = function (e, t, n) {
  let r = '"' === t ? "'" : '"';
  let i = D(!1, e, /\\(.)|(["'])/gsu, (e, i, a) => i === r ? i : a === t ? "\\" + a : a || (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(i) ? i : "\\" + i));
  return t + i + t;
};
function nR(e, t) {
  return 2 == $$arguments.length || "number" == typeof t ? nF(e, t) : function (e, t, n) {
    return nF(e, n(t));
  }(...arguments);
}
function nJ(e, t) {
  return 2 == $$arguments.length || "number" == typeof t ? ts(e, t) : function (e, t, n) {
    return ts(e, n(t));
  }(...arguments);
}
function nq(e, t) {
  return 2 == $$arguments.length || "number" == typeof t ? nP(e, t) : function (e, t, n) {
    return nP(e, n(t));
  }(...arguments);
}
function nU(e, t = 1) {
  return async (...n) => {
    let r = n[t] ?? {};
    let i = r.plugins ?? [];
    n[t] = {
      ...r,
      plugins: Array.isArray(i) ? i : Object.values(i)
    };
    return e(...n);
  };
}
var nz = nU(nh);
export async function $$nK0(e, t) {
  let {
    formatted
  } = await nz(e, {
    ...t,
    cursorOffset: -1
  });
  return formatted;
}
async function nW(e, t) {
  return (await $$nK0(e, t)) === e;
}
var nV = nU(tp, 0);
var n$ = {
  parse: nU(ny),
  formatAST: nU(ng),
  formatDoc: nU(nb),
  printToDoc: nU(nD),
  printDocToString: nU(nx)
};
export const GP = $$nK0;