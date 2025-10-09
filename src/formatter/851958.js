var r;
var i = Object.create;
var a = Object.defineProperty;
var o = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var _ = Object.getPrototypeOf;
var l = Object.prototype.hasOwnProperty;
var u = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);
var c = (e, t) => {
  for (var n in t) a(e, n, {
    get: t[n],
    enumerable: !0
  });
};
var p = (e, t, n, r) => {
  if (t && "object" == typeof t || "function" == typeof t) for (let i of s(t)) l.call(e, i) || i === n || a(e, i, {
    get: () => t[i],
    enumerable: !(r = o(t, i)) || r.enumerable
  });
  return e;
};
var d = (e, t, n) => (n = null != e ? i(_(e)) : {}, p(!t && e && e.__esModule ? n : a(n, "default", {
  value: e,
  enumerable: !0
}), e));
var m = e => p(a({}, "__esModule", {
  value: !0
}), e);
var f = (e, t, n) => {
  if (!t.has(e)) throw TypeError("Cannot " + n);
};
var h = (e, t, n) => {
  if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
};
var y = (e, t, n) => (f(e, t, "access private method"), n);
var g = u(e => {
  function t() {}
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  e.$$default = t;
  t.prototype = {
    diff: function (e, t) {
      var n = $$arguments.length > 2 && void 0 !== $$arguments[2] ? $$arguments[2] : {};
      var r = n.callback;
      "function" == typeof n && (r = n, n = {});
      this.options = n;
      var i = this;
      function a(e) {
        return r ? (setTimeout(function () {
          r(void 0, e);
        }, 0), !0) : e;
      }
      e = this.castInput(e);
      t = this.castInput(t);
      e = this.removeEmpty(this.tokenize(e));
      var o = (t = this.removeEmpty(this.tokenize(t))).length;
      var s = e.length;
      var _ = 1;
      var l = o + s;
      n.maxEditLength && (l = Math.min(l, n.maxEditLength));
      var u = [{
        newPos: -1,
        components: []
      }];
      var c = this.extractCommon(u[0], t, e, 0);
      if (u[0].newPos + 1 >= o && c + 1 >= s) return a([{
        value: this.join(t),
        count: t.length
      }]);
      function p() {
        for (var n = -1 * _; n <= _; n += 2) {
          var r = void 0;
          var l = u[n - 1];
          var c = u[n + 1];
          var p = (c ? c.newPos : 0) - n;
          l && (u[n - 1] = void 0);
          var d = l && l.newPos + 1 < o;
          var m = c && 0 <= p && p < s;
          if (!d && !m) {
            u[n] = void 0;
            continue;
          }
          if (!d || m && l.newPos < c.newPos ? (r = {
            newPos: c.newPos,
            components: c.components.slice(0)
          }, i.pushComponent(r.components, void 0, !0)) : (r = l, r.newPos++, i.pushComponent(r.components, !0, void 0)), p = i.extractCommon(r, t, e, n), r.newPos + 1 >= o && p + 1 >= s) return a(function (e, t, n, r, i) {
            for (a = 0, o = t.length, s = 0, _ = 0, void 0; a < o; a++) {
              var a;
              var o;
              var s;
              var _;
              var l = t[a];
              if (l.removed) {
                if (l.value = e.join(r.slice(_, _ + l.count)), _ += l.count, a && t[a - 1].added) {
                  var u = t[a - 1];
                  t[a - 1] = t[a];
                  t[a] = u;
                }
              } else {
                if (!l.added && i) {
                  var c = n.slice(s, s + l.count);
                  c = c.map(function (e, t) {
                    var n = r[_ + t];
                    return n.length > e.length ? n : e;
                  });
                  l.value = e.join(c);
                } else l.value = e.join(n.slice(s, s + l.count));
                s += l.count;
                l.added || (_ += l.count);
              }
            }
            var p = t[o - 1];
            o > 1 && "string" == typeof p.value && (p.added || p.removed) && e.equals("", p.value) && (t[o - 2].value += p.value, t.pop());
            return t;
          }(i, r.components, t, e, i.useLongestToken));
          u[n] = r;
        }
        _++;
      }
      if (r) !function e() {
        setTimeout(function () {
          if (_ > l) return r();
          p() || e();
        }, 0);
      }();else for (; _ <= l;) {
        var d = p();
        if (d) return d;
      }
    },
    pushComponent: function (e, t, n) {
      var r = e[e.length - 1];
      r && r.added === t && r.removed === n ? e[e.length - 1] = {
        count: r.count + 1,
        added: t,
        removed: n
      } : e.push({
        count: 1,
        added: t,
        removed: n
      });
    },
    extractCommon: function (e, t, n, r) {
      for (i = t.length, a = n.length, o = e.newPos, s = o - r, _ = 0, void 0; o + 1 < i && s + 1 < a && this.equals(t[o + 1], n[s + 1]);) {
        var i;
        var a;
        var o;
        var s;
        var _;
        o++;
        s++;
        _++;
      }
      _ && e.components.push({
        count: _
      });
      e.newPos = o;
      return s;
    },
    equals: function (e, t) {
      return this.options.comparator ? this.options.comparator(e, t) : e === t || this.options.ignoreCase && e.toLowerCase() === t.toLowerCase();
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
      return e.split("");
    },
    join: function (e) {
      return e.join("");
    }
  };
});
var b = u(e => {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  e.diffArrays = function (e, n, r) {
    return t.diff(e, n, r);
  };
  e.arrayDiff = void 0;
  var t = new (function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }(g()).$$default)();
  e.arrayDiff = t;
  t.tokenize = function (e) {
    return e.slice();
  };
  t.join = t.removeEmpty = function (e) {
    return e;
  };
});
var D = u((e, t) => {
  var n = new Proxy(String, {
    get: () => n
  });
  t.exports = n;
});
var x = {};
c(x, {
  default: () => T,
  shouldHighlight: () => v
});
var v;
var T;
var S = ((e, t) => () => (e && (t = e(e = 0)), t))(() => {
  v = () => !1;
  T = String;
});
var C = u(e => {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  e.codeFrameColumns = s;
  e.$$default = function (e, t, n, r = {}) {
    if (!a) {
      a = !0;
      let e = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
      Error(e).name = "DeprecationWarning";
      console.warn(Error(e));
    }
    return s(e, {
      start: {
        column: n = Math.max(n, 0),
        line: t
      }
    }, r);
  };
  var t;
  S();
  var n = m(x);
  var r = function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return {
      default: e
    };
    var n = i(t);
    if (n && n.has(e)) return n.get(e);
    var r = {
      __proto__: null
    };
    var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o in e) if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
      var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, o, s) : r[o] = e[o];
    }
    r.$$default = e;
    n && n.set(e, r);
    return r;
  }(D(), !0);
  function i(e) {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap();
    var n = new WeakMap();
    return (i = function (e) {
      return e ? n : t;
    })(e);
  }
  var a = !1;
  var o = /\r\n|[\n\r\u2028\u2029]/;
  function s(e, i, a = {}) {
    let _ = (a.highlightCode || a.forceColor) && n.shouldHighlight(a);
    let l = a.forceColor ? (null != t || (t = new r.$$default.constructor({
      enabled: !0,
      level: 1
    })), t) : r.$$default;
    let u = {
      gutter: l.grey,
      marker: l.red.bold,
      message: l.red.bold
    };
    let c = (e, t) => _ ? e(t) : t;
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
    }(i, e.split(o), a);
    let f = i.start && "number" == typeof i.start.column;
    let h = String(end).length;
    let y = (_ ? n.$$default(e, a) : e).split(o, end).slice(start, end).map((e, t) => {
      let n = start + 1 + t;
      let r = ` ${` ${n}`.slice(-h)} |`;
      let i = markerLines[n];
      let o = !markerLines[n + 1];
      if (!i) return ` ${c(u.gutter, r)}${e.length > 0 ? ` ${e}` : ""}`;
      {
        let t = "";
        if (Array.isArray(i)) {
          let n = e.slice(0, Math.max(i[0] - 1, 0)).replace(/[^\t]/g, " ");
          let s = i[1] || 1;
          t = [`
 `, c(u.gutter, r.replace(/\d/g, " ")), " ", n, c(u.marker, "^").repeat(s)].join("");
          o && a.message && (t += " " + c(u.message, a.message));
        }
        return [c(u.marker, ">"), c(u.gutter, r), e.length > 0 ? ` ${e}` : "", t].join("");
      }
    }).join(`
`);
    a.message && !f && (y = `${" ".repeat(h + 1)}${a.message}
${y}`);
    return _ ? l.reset(y) : y;
  }
});
var E = {};
c(E, {
  __debug: () => $$nR0,
  check: () => $$nM1,
  doc: () => $$nf3,
  format: () => $$nj4,
  formatWithCursor: () => $$nB5,
  getSupportInfo: () => $$nL6,
  util: () => $$nD7,
  version: () => $$nb8
});
var w = (e, t, n, r) => {
  if (!(e && null == t)) return t.replaceAll ? t.replaceAll(n, r) : n.global ? t.replace(n, r) : t.split(n).join(r);
};
var A = d(b(), 1);
function k(e) {
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
function F(e, t) {
  let n;
  switch (t) {
    case `
`:
      n = /\n/g;
      break;
    case "\r":
      n = /\r/g;
      break;
    case `\r
`:
      n = /\r\n/g;
      break;
    default:
      throw Error(`Unexpected "eol" ${JSON.stringify(t)}.`);
  }
  let r = e.match(n);
  return r ? r.length : 0;
}
var P = "string";
var N = "array";
var I = "cursor";
var O = "indent";
var B = "align";
var j = "trim";
var M = "group";
var L = "fill";
var R = "if-break";
var J = "indent-if-break";
var q = "line-suffix";
var U = "line-suffix-boundary";
var z = "line";
var K = "label";
var W = "break-parent";
var V = new Set([I, O, B, j, M, L, R, J, q, U, z, K, W]);
var $ = function (e) {
  if ("string" == typeof e) return P;
  if (Array.isArray(e)) return N;
  if (!e) return;
  let {
    type
  } = e;
  if (V.has(type)) return type;
};
var H = e => new Intl.ListFormat("en-US", {
  type: "disjunction"
}).format(e);
var G = class extends Error {
  name = "InvalidDocError";
  constructor(e) {
    super(function (e) {
      let t = null === e ? "null" : typeof e;
      if ("string" !== t && "object" !== t) return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
      if ($(e)) throw Error("doc is valid.");
      let n = Object.prototype.toString.call(e);
      if ("[object Object]" !== n) return `Unexpected doc '${n}'.`;
      let r = H([...V].map(e => `'${e}'`));
      return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`;
    }(e));
    this.doc = e;
  }
};
var X = {};
var Y = function (e, t, n, r) {
  let i = [e];
  for (; i.length > 0;) {
    let e = i.pop();
    if (e === X) {
      n(i.pop());
      continue;
    }
    n && i.push(e, X);
    let a = $(e);
    if (!a) throw new G(e);
    if (t?.(e) !== !1) switch (a) {
      case N:
      case L:
        {
          let t = a === N ? e : e.parts;
          for (function () {
            let e = t.length;
            let n = e - 1;
          }(); n >= 0; --n) i.push(t[n]);
          break;
        }
      case R:
        i.push(e.flatContents, e.breakContents);
        break;
      case M:
        if (r && e.expandedStates) for (function () {
          let t = e.expandedStates.length;
          let n = t - 1;
        }(); n >= 0; --n) i.push(e.expandedStates[n]);else i.push(e.contents);
        break;
      case B:
      case O:
      case J:
      case K:
      case q:
        i.push(e.contents);
        break;
      case P:
      case I:
      case j:
      case U:
      case z:
      case W:
        break;
      default:
        throw new G(e);
    }
  }
};
var Q = () => {};
function Z(e) {
  Q(e);
  return {
    type: O,
    contents: e
  };
}
function ee(e, t) {
  Q(t);
  return {
    type: B,
    contents: t,
    n: e
  };
}
function et(e, t = {}) {
  Q(e);
  Q(t.expandedStates, !0);
  return {
    type: M,
    id: t.id,
    contents: e,
    break: !!t.shouldBreak,
    expandedStates: t.expandedStates
  };
}
function en(e) {
  Q(e);
  return {
    type: L,
    parts: e
  };
}
function er(e) {
  Q(e);
  return {
    type: q,
    contents: e
  };
}
var ei = {
  type: W
};
var ea = {
  type: z,
  hard: !0
};
var eo = {
  type: z,
  hard: !0,
  literal: !0
};
var es = {
  type: z
};
var e_ = [ea, ei];
var el = [eo, ei];
var eu = {
  type: I
};
function ec(e, t) {
  Q(e);
  Q(t);
  let n = [];
  for (let r = 0; r < t.length; r++) {
    0 !== r && n.push(e);
    n.push(t[r]);
  }
  return n;
}
function ep(e, t, n) {
  Q(e);
  let r = e;
  if (t > 0) {
    for (let e = 0; e < Math.floor(t / n); ++e) r = Z(r);
    r = ee(t % n, r);
    r = ee(Number.NEGATIVE_INFINITY, r);
  }
  return r;
}
var ed = (e, t, n) => {
  if (!(e && null == t)) return Array.isArray(t) || "string" == typeof t ? t[n < 0 ? t.length + n : n] : t.at(n);
};
var em = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
var ef = e => !(function (e) {
  return 12288 === e || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}(e) || function (e) {
  return e >= 4352 && e <= 4447 || 8986 === e || 8987 === e || 9001 === e || 9002 === e || e >= 9193 && e <= 9196 || 9200 === e || 9203 === e || 9725 === e || 9726 === e || 9748 === e || 9749 === e || e >= 9800 && e <= 9811 || 9855 === e || 9875 === e || 9889 === e || 9898 === e || 9899 === e || 9917 === e || 9918 === e || 9924 === e || 9925 === e || 9934 === e || 9940 === e || 9962 === e || 9970 === e || 9971 === e || 9973 === e || 9978 === e || 9981 === e || 9989 === e || 9994 === e || 9995 === e || 10024 === e || 10060 === e || 10062 === e || e >= 10067 && e <= 10069 || 10071 === e || e >= 10133 && e <= 10135 || 10160 === e || 10175 === e || 11035 === e || 11036 === e || 11088 === e || 11093 === e || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12771 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || 94192 === e || 94193 === e || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101632 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || 110589 === e || 110590 === e || e >= 110592 && e <= 110882 || 110898 === e || e >= 110928 && e <= 110930 || 110933 === e || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || 126980 === e || 127183 === e || 127374 === e || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || 127568 === e || 127569 === e || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || 127988 === e || e >= 127992 && e <= 128062 || 128064 === e || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || 128378 === e || 128405 === e || 128406 === e || 128420 === e || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || 128716 === e || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || 128747 === e || 128748 === e || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || 129008 === e || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129672 || e >= 129680 && e <= 129725 || e >= 129727 && e <= 129733 || e >= 129742 && e <= 129755 || e >= 129760 && e <= 129768 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}(e));
var eh = /[^\x20-\x7F]/;
var ey = function (e) {
  if (!e) return 0;
  if (!eh.test(e)) return e.length;
  e = e.replace(em(), "  ");
  let t = 0;
  for (let n of e) {
    let e = n.codePointAt(0);
    e <= 31 || e >= 127 && e <= 159 || e >= 768 && e <= 879 || (t += ef(e) ? 1 : 2);
  }
  return t;
};
var eg = e => {
  if (Array.isArray(e)) return e;
  if (e.type !== L) throw Error(`Expect doc to be 'array' or '${L}'.`);
  return e.parts;
};
function eb(e, t) {
  if ("string" == typeof e) return t(e);
  let n = new Map();
  return function e(r) {
    if (n.has(r)) return n.get(r);
    let i = function (n) {
      switch ($(n)) {
        case N:
          return t(n.map(e));
        case L:
          return t({
            ...n,
            parts: n.parts.map(e)
          });
        case R:
          return t({
            ...n,
            breakContents: e(n.breakContents),
            flatContents: e(n.flatContents)
          });
        case M:
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
        case B:
        case O:
        case J:
        case K:
        case q:
          return t({
            ...n,
            contents: e(n.contents)
          });
        case P:
        case I:
        case j:
        case U:
        case z:
        case W:
          return t(n);
        default:
          throw new G(n);
      }
    }(r);
    n.set(r, i);
    return i;
  }(e);
}
function eD(e, t, n) {
  let r = n;
  let i = !1;
  Y(e, function (e) {
    if (i) return !1;
    let n = t(e);
    void 0 !== n && (i = !0, r = n);
  });
  return r;
}
function ex(e) {
  if (e.type === M && e.$$break || e.type === z && e.hard || e.type === W) return !0;
}
function ev(e) {
  if (e.length > 0) {
    let t = ed(!1, e, -1);
    t.expandedStates || t.$$break || (t.$$break = "propagated");
  }
  return null;
}
function eT(e) {
  return e.type !== z || e.hard ? e.type === R ? e.flatContents : e : e.soft ? "" : " ";
}
function eS(e) {
  for (e = [...e]; e.length >= 2 && ed(!1, e, -2).type === z && ed(!1, e, -1).type === W;) e.length -= 2;
  if (e.length > 0) {
    let t = eC(ed(!1, e, -1));
    e[e.length - 1] = t;
  }
  return e;
}
function eC(e) {
  switch ($(e)) {
    case B:
    case O:
    case J:
    case M:
    case q:
    case K:
      {
        let t = eC(e.contents);
        return {
          ...e,
          contents: t
        };
      }
    case R:
      return {
        ...e,
        breakContents: eC(e.breakContents),
        flatContents: eC(e.flatContents)
      };
    case L:
      return {
        ...e,
        parts: eS(e.parts)
      };
    case N:
      return eS(e);
    case P:
      return e.replace(/[\n\r]*$/, "");
    case I:
    case j:
    case U:
    case z:
    case W:
      break;
    default:
      throw new G(e);
  }
  return e;
}
function eE(e) {
  return eC(eb(e, e => function (e) {
    switch ($(e)) {
      case L:
        if (e.parts.every(e => "" === e)) return "";
        break;
      case M:
        if (!e.contents && !e.id && !e.$$break && !e.expandedStates) return "";
        if (e.contents.type === M && e.contents.id === e.id && e.contents.$$break === e.$$break && e.contents.expandedStates === e.expandedStates) return e.contents;
        break;
      case B:
      case O:
      case J:
      case q:
        if (!e.contents) return "";
        break;
      case R:
        if (!e.flatContents && !e.breakContents) return "";
        break;
      case N:
        {
          let t = [];
          for (let n of e) {
            if (!n) continue;
            let [e, ...r] = Array.isArray(n) ? n : [n];
            "string" == typeof e && "string" == typeof ed(!1, t, -1) ? t[t.length - 1] += e : t.push(e);
            t.push(...r);
          }
          return 0 === t.length ? "" : 1 === t.length ? t[0] : t;
        }
      case P:
      case I:
      case j:
      case U:
      case z:
      case K:
      case W:
        break;
      default:
        throw new G(e);
    }
    return e;
  }(e)));
}
function ew(e) {
  if (e.type === z) return !0;
}
function eA(e, t) {
  return e.type === K ? {
    ...e,
    contents: t(e.contents)
  } : t(e);
}
var ek = Symbol("MODE_BREAK");
var eF = Symbol("MODE_FLAT");
var eP = Symbol("cursor");
function eN() {
  return {
    value: "",
    length: 0,
    queue: []
  };
}
function eI(e, t, n) {
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
function eO(e) {
  let t = 0;
  let n = 0;
  let r = e.length;
  e: for (; r--;) {
    let i = e[r];
    if (i === eP) {
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
  if (t > 0 || n > 0) for (e.length = r + 1; n-- > 0;) e.push(eP);
  return t;
}
function eB(e, t, n, r, i, a) {
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
    switch ($(doc)) {
      case P:
        _.push(doc);
        n -= ey(doc);
        break;
      case N:
      case L:
        {
          let t = eg(doc);
          for (let n = t.length - 1; n >= 0; n--) s.push({
            mode,
            doc: t[n]
          });
          break;
        }
      case O:
      case B:
      case J:
      case K:
        s.push({
          mode,
          doc: doc.contents
        });
        break;
      case j:
        n += eO(_);
        break;
      case M:
        {
          if (a && doc.$$break) return !1;
          let t = doc.$$break ? ek : mode;
          let n = doc.expandedStates && t === ek ? ed(!1, doc.expandedStates, -1) : doc.contents;
          s.push({
            mode: t,
            doc: n
          });
          break;
        }
      case R:
        {
          let t = (doc.groupId ? i[doc.groupId] || eF : mode) === ek ? doc.breakContents : doc.flatContents;
          t && s.push({
            mode,
            doc: t
          });
          break;
        }
      case z:
        if (mode === ek || doc.hard) return !0;
        doc.soft || (_.push(" "), n--);
        break;
      case q:
        r = !0;
        break;
      case U:
        if (r) return !1;
    }
  }
  return !1;
}
function ej(e, t) {
  var n;
  let r;
  let i;
  let a = {};
  let o = t.printWidth;
  let s = k(t.endOfLine);
  let _ = 0;
  let l = [{
    ind: eN(),
    mode: ek,
    doc: e
  }];
  let u = [];
  let c = !1;
  let p = [];
  let d = 0;
  for (r = new Set(), i = [], Y(e, function (e) {
    if (e.type === W && ev(i), e.type === M) {
      if (i.push(e), r.has(e)) return !1;
      r.add(e);
    }
  }, function (e) {
    e.type === M && i.pop().$$break && ev(i);
  }, !0); l.length > 0;) {
    let {
      ind,
      mode,
      doc
    } = l.pop();
    switch ($(doc)) {
      case P:
        {
          let e = s !== `
` ? w(!1, doc, `
`, s) : doc;
          u.push(e);
          l.length > 0 && (_ += ey(e));
          break;
        }
      case N:
        for (let t = doc.length - 1; t >= 0; t--) l.push({
          ind,
          mode,
          doc: doc[t]
        });
        break;
      case I:
        if (d >= 2) throw Error("There are too many 'cursor' in doc.");
        u.push(eP);
        d++;
        break;
      case O:
        l.push({
          ind: eI(ind, {
            type: "indent"
          }, t),
          mode,
          doc: doc.contents
        });
        break;
      case B:
        l.push({
          ind: (n = doc.n) === Number.NEGATIVE_INFINITY ? ind.root || eN() : n < 0 ? eI(ind, {
            type: "dedent"
          }, t) : n ? "root" === n.type ? {
            ...ind,
            root: ind
          } : eI(ind, {
            type: "string" == typeof n ? "stringAlign" : "numberAlign",
            n: n
          }, t) : ind,
          mode,
          doc: doc.contents
        });
        break;
      case j:
        _ -= eO(u);
        break;
      case M:
        switch (mode) {
          case eF:
            if (!c) {
              l.push({
                ind,
                mode: doc.$$break ? ek : eF,
                doc: doc.contents
              });
              break;
            }
          case ek:
            {
              c = !1;
              let t = {
                ind,
                mode: eF,
                doc: doc.contents
              };
              let n = o - _;
              let r = p.length > 0;
              if (!doc.$$break && eB(t, l, n, r, a)) l.push(t);else if (doc.expandedStates) {
                let t = ed(!1, doc.expandedStates, -1);
                if (doc.$$break) l.push({
                  ind,
                  mode: ek,
                  doc: t
                });else for (let o = 1; o < doc.expandedStates.length + 1; o++) if (o >= doc.expandedStates.length) {
                  l.push({
                    ind,
                    mode: ek,
                    doc: t
                  });
                  break;
                } else {
                  let t = {
                    ind,
                    mode: eF,
                    doc: doc.expandedStates[o]
                  };
                  if (eB(t, l, n, r, a)) {
                    l.push(t);
                    break;
                  }
                }
              } else l.push({
                ind,
                mode: ek,
                doc: doc.contents
              });
            }
        }
        doc.id && (a[doc.id] = ed(!1, l, -1).mode);
        break;
      case L:
        {
          let t = o - _;
          let {
            parts
          } = doc;
          if (0 === parts.length) break;
          let [s, u] = n;
          let c = {
            ind,
            mode: eF,
            doc: s
          };
          let d = {
            ind,
            mode: ek,
            doc: s
          };
          let m = eB(c, [], t, p.length > 0, a, !0);
          if (1 === parts.length) {
            m ? l.push(c) : l.push(d);
            break;
          }
          let f = {
            ind,
            mode: eF,
            doc: u
          };
          let h = {
            ind,
            mode: ek,
            doc: u
          };
          if (2 === parts.length) {
            m ? l.push(f, c) : l.push(h, d);
            break;
          }
          parts.splice(0, 2);
          let y = {
            ind,
            mode,
            doc: en(parts)
          };
          eB({
            ind,
            mode: eF,
            doc: [s, u, parts[0]]
          }, [], t, p.length > 0, a, !0) ? l.push(y, f, c) : m ? l.push(y, h, c) : l.push(y, h, d);
          break;
        }
      case R:
      case J:
        {
          let t = doc.groupId ? a[doc.groupId] : mode;
          if (t === ek) {
            let t = doc.type === R ? doc.breakContents : doc.negate ? doc.contents : Z(doc.contents);
            t && l.push({
              ind,
              mode,
              doc: t
            });
          }
          if (t === eF) {
            let t = doc.type === R ? doc.flatContents : doc.negate ? Z(doc.contents) : doc.contents;
            t && l.push({
              ind,
              mode,
              doc: t
            });
          }
          break;
        }
      case q:
        p.push({
          ind,
          mode,
          doc: doc.contents
        });
        break;
      case U:
        p.length > 0 && l.push({
          ind,
          mode,
          doc: ea
        });
        break;
      case z:
        switch (mode) {
          case eF:
            if (doc.hard) c = !0;else {
              doc.soft || (u.push(" "), _ += 1);
              break;
            }
          case ek:
            if (p.length > 0) {
              l.push({
                ind,
                mode,
                doc
              }, ...p.reverse());
              p.length = 0;
              break;
            }
            doc.literal ? ind.root ? (u.push(s, ind.root.value), _ = ind.root.length) : (u.push(s), _ = 0) : (_ -= eO(u), u.push(s + ind.value), _ = ind.length);
        }
        break;
      case K:
        l.push({
          ind,
          mode,
          doc: doc.contents
        });
        break;
      case W:
        break;
      default:
        throw new G(doc);
    }
    0 === l.length && p.length > 0 && (l.push(...p.reverse()), p.length = 0);
  }
  let m = u.indexOf(eP);
  if (-1 !== m) {
    let e = u.indexOf(eP, m + 1);
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
var eM;
var eL;
var eR;
var eJ;
var eq = function (e, t, n = 0) {
  let r = 0;
  for (let i = n; i < e.length; ++i) "	" === e[i] ? r = r + t - r % t : r++;
  return r;
};
var eU = class {
  constructor(e) {
    h(this, eM);
    h(this, eR);
    this.stack = [e];
  }
  get key() {
    let {
      stack,
      siblings
    } = this;
    return ed(!1, stack, null === siblings ? -2 : -4) ?? null;
  }
  get index() {
    return null === this.siblings ? null : ed(!1, this.stack, -2);
  }
  get node() {
    return ed(!1, this.stack, -1);
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
    let t = ed(!1, stack, -3);
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
    return [...y(this, eR, eJ).call(this)];
  }
  getName() {
    let {
      stack
    } = this;
    let {
      length
    } = e;
    return length > 1 ? ed(!1, stack, -2) : null;
  }
  getValue() {
    return ed(!1, this.stack, -1);
  }
  getNode(e = 0) {
    let t = y(this, eM, eL).call(this, e);
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
    let i = ed(!1, stack, -1);
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
    let n = y(this, eM, eL).call(this, t + 1);
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
    let i = ed(!1, stack, -1);
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
    for (let t of y(this, eR, eJ).call(this)) if (e(t)) return t;
  }
  hasAncestor(e) {
    for (let t of y(this, eR, eJ).call(this)) if (e(t)) return !0;
    return !1;
  }
};
eM = new WeakSet();
eL = function (e) {
  let {
    stack
  } = this;
  for (let n = stack.length - 1; n >= 0; n -= 2) if (!Array.isArray(stack[n]) && --e < 0) return n;
  return -1;
};
eR = new WeakSet();
eJ = function* () {
  let {
    stack
  } = this;
  for (let t = stack.length - 3; t >= 0; t -= 2) {
    let n = stack[t];
    Array.isArray(n) || (yield n);
  }
};
var ez = new Proxy(() => {}, {
  get: () => ez
});
function* eK(e, t) {
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
function eW(e) {
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
var eV = eW(/\s/);
var e$ = eW(" 	");
var eH = eW(",; 	");
var eG = eW(/[^\n\r]/);
var eX = function (e, t, n) {
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
var eY = function (e, t, n = {}) {
  let r = e$(e, n.backwards ? t - 1 : t, n);
  let i = eX(e, r, n);
  return r !== i;
};
var eQ = new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]);
var eZ = e => Object.keys(e).filter(e => !eQ.has(e));
var e0 = function (e) {
  return e ? t => e(t, eQ) : eZ;
};
function e1(e, t) {
  let n;
  let r;
  (e.comments ?? (e.comments = [])).push(t);
  t.printed = !1;
  t.nodeDescription = (n = e.type || e.kind || "(unknown type)", (r = String(e.name || e.id && ("object" == typeof e.id ? e.id.name : e.id) || e.key && ("object" == typeof e.key ? e.key.name : e.key) || e.value && ("object" == typeof e.value ? "" : String(e.value)) || e.operator || "")).length > 20 && (r = r.slice(0, 19) + "\u2026"), n + (r ? " " + r : ""));
}
function e2(e, t) {
  t.leading = !0;
  t.trailing = !1;
  e1(e, t);
}
function e3(e, t, n) {
  t.leading = !1;
  t.trailing = !1;
  n && (t.marker = n);
  e1(e, t);
}
function e6(e, t) {
  t.leading = !1;
  t.trailing = !0;
  e1(e, t);
}
var e4 = new WeakMap();
function e8(e, t) {
  if (e4.has(e)) return e4.get(e);
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
  let s = (getCommentChildNodes?.(e, t) ?? [...eK(e, {
    getVisitorKeys: e0(getVisitorKeys)
  })]).flatMap(e => canAttachComment(e) ? [e] : e8(e, t));
  s.sort((e, t) => locStart(e) - locStart(t) || locEnd(e) - locEnd(t));
  e4.set(e, s);
  return s;
}
var e5 = () => !1;
var e7 = e => !/[\S\n\u2028\u2029]/.test(e);
function e9(e, t) {
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
    ez.strictEqual(precedingNode, precedingNode);
    ez.strictEqual(followingNode, followingNode);
    let c = t.originalText.slice(t.locEnd(comment), s);
    if ((null == (r = (n = t.printer).isGap) ? void 0 : r.call(n, c, t)) ?? /^[\s(]*$/.test(c)) s = t.locStart(comment);else break;
  }
  for (let [t, {
    comment: n
  }] of e.entries()) t < _ ? e6(precedingNode, n) : e2(followingNode, n);
  for (let e of [precedingNode, followingNode]) e.comments && e.comments.length > 1 && e.comments.sort((e, n) => t.locStart(e) - t.locStart(n));
  e.length = 0;
}
function te(e, t, n) {
  let r = n.locStart(t) - 1;
  for (let t = 1; t < e.length; ++t) if (r < n.locStart(e[t])) return t - 1;
  return 0;
}
var tt = function (e, t) {
  let n = t - 1;
  n = e$(e, n, {
    backwards: !0
  });
  n = eX(e, n, {
    backwards: !0
  });
  n = e$(e, n, {
    backwards: !0
  });
  let r = eX(e, n, {
    backwards: !0
  });
  return n !== r;
};
function tn(e, t) {
  e.node.printed = !0;
  return t.printer.printComment(e, t);
}
var tr = class extends Error {
  name = "ConfigError";
};
var ti = class extends Error {
  name = "UndefinedParserError";
};
var ta = {
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
function to({
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
      Array.isArray(e.$$default) && (e.$$default = ed(!1, e.$$default, -1).value);
      t.push(e);
    }
    return t;
  }(Object.assign({}, ...e.map(({
    options: e
  }) => e), ta))) !t && i.deprecated || (Array.isArray(i.choices) && (t || (i.choices = i.choices.filter(e => !e.deprecated)), "parser" === i.name && (i.choices = [...i.choices, ...function* (e, t, n) {
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
var ts = e => String(e).split(/[/\\]/).pop();
function t_(e, t) {
  if (!t) return;
  let n = ts(t).toLowerCase();
  return e.find(({
    filenames: e
  }) => e?.some(e => e.toLowerCase() === n)) ?? e.find(({
    extensions: e
  }) => e?.some(e => n.endsWith(e)));
}
var tl = function (e, t) {
  let n = e.plugins.flatMap(e => e.languages ?? []);
  let r = function (e, t) {
    if (t) return e.find(({
      name: e
    }) => e.toLowerCase() === t) ?? e.find(({
      aliases: e
    }) => e?.includes(t)) ?? e.find(({
      extensions: e
    }) => e?.includes(`.${t}`));
  }(n, t.language) ?? t_(n, t.physicalFile) ?? t_(n, t.file) ?? void t.physicalFile;
  return r?.parsers[0];
};
var tu = {
  key: e => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e),
  value(e) {
    if (null === e || "object" != typeof e) return JSON.stringify(e);
    if (Array.isArray(e)) return `[${e.map(e => tu.value(e)).join(", ")}]`;
    let t = Object.keys(e);
    return 0 === t.length ? "{}" : `{ ${t.map(t => `${tu.key(t)}: ${tu.value(e[t])}`).join(", ")} }`;
  },
  pair: ({
    key: e,
    value: t
  }) => tu.value({
    [e]: t
  })
};
var tc = d(D(), 1);
var tp = d(D(), 1);
var td = Symbol.$$for("vnopts.VALUE_NOT_EXIST");
var tm = Symbol.$$for("vnopts.VALUE_UNCHANGED");
var tf = " ".repeat(2);
function th(e, t, n, r) {
  return `Invalid ${tp.$$default.red(r.key(e))} value. Expected ${tp.$$default.blue(n)}, but received ${t === td ? tp.$$default.gray("nothing") : tp.$$default.red(r.value(t))}.`;
}
function ty(e, t) {
  if (1 === e.length) return e[0];
  let [n, r] = e;
  let [i, a] = e.map(e => e.split(`
`, 1)[0].length);
  return i > t && i > a ? r : n;
}
var tg = d(D(), 1);
var tb = [];
var tD = [];
var tx = (e, t, {
  descriptor: n,
  logger: r,
  schemas: i
}) => {
  let a = [`Ignored unknown option ${tg.$$default.yellow(n.pair({
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
      tD[u] = e.charCodeAt(a + u);
      tb[u] = ++u;
    }
    for (; c < i;) for (o = t.charCodeAt(a + c), _ = c++, s = c, u = 0; u < r; u++) {
      l = o === tD[u] ? _ : _ + 1;
      _ = tb[u];
      s = tb[u] = _ > s ? l > s ? s + 1 : l : l > _ ? _ + 1 : l;
    }
    return s;
  }(e, t));
  o && a.push(`Did you mean ${tg.$$default.blue(n.key(o))}?`);
  r.warn(a.join(" "));
};
var tv = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
var tT = class {
  static create(e) {
    return function (e, t) {
      let n = new e(t);
      let r = Object.create(n);
      for (let e of tv) e in t && (r[e] = function (e, t, n) {
        return "function" == typeof e ? (...r) => e(...r.slice(0, n - 1), t, ...r.slice(n - 1)) : () => e;
      }(t[e], n, tT.prototype[e].length));
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
    return tm;
  }
};
var tS = class extends tT {
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
var tC = class extends tT {
  expected() {
    return "anything";
  }
  validate() {
    return !0;
  }
};
var tE = class extends tT {
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
      n.push(...e.map(tw));
    }
    return n;
  }
  redirect(e, t) {
    let n = [];
    let r = [];
    for (let i of e) {
      let e = t.normalizeRedirectResult(this._valueSchema.redirect(i, t), i);
      "remain" in e && n.push(e.remain);
      r.push(...e.redirect.map(tw));
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
function tw({
  from: e,
  to: t
}) {
  return {
    from: [e],
    to: t
  };
}
var tA = class extends tT {
  expected() {
    return "true or false";
  }
  validate(e) {
    return "boolean" == typeof e;
  }
};
function tk(e, t) {
  if (e === t) return 0;
  let n = typeof e;
  let r = typeof t;
  let i = ["undefined", "object", "boolean", "number", "string"];
  return n !== r ? i.indexOf(n) - i.indexOf(r) : "string" !== n ? Number(e) - Number(t) : e.localeCompare(t);
}
function tF(e) {
  return void 0 === e ? {} : e;
}
function tP(e) {
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
      values: list.values.map(tP)
    }
  } : {
    text
  };
}
function tN(e, t) {
  return !0 === e || (!1 === e ? {
    value: t
  } : e);
}
function tI(e, t, n = !1) {
  return !1 !== e && (!0 === e ? !!n || [{
    value: t
  }] : "value" in e ? [e] : 0 !== e.length && e);
}
function tO(e, t) {
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
function tB(e, t) {
  return void 0 === e ? [] : Array.isArray(e) ? e.map(e => tO(e, t)) : [tO(e, t)];
}
function tj(e, t) {
  let n = tB("object" == typeof e && "redirect" in e ? e.redirect : e, t);
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
var tM = class extends tT {
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
    }) => !e).map(e => e.value).sort(tk).map(e.value);
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
var tL = class extends tT {
  expected() {
    return "a number";
  }
  validate(e, t) {
    return "number" == typeof e;
  }
};
var tR = class extends tL {
  expected() {
    return "an integer";
  }
  validate(e, t) {
    return !0 === t.normalizeValidateResult(super.validate(e, t), e) && e === Math.floor(e);
  }
};
var tJ = class extends tT {
  expected() {
    return "a string";
  }
  validate(e) {
    return "string" == typeof e;
  }
};
var tq = (e, t, n) => {
  let {
    text,
    list
  } = n.normalizeExpectedResult(n.schemas[e].expected(n));
  let a = [];
  text && a.push(th(e, t, text, n.descriptor));
  list && a.push([th(e, t, list.title, n.descriptor)].concat(list.values.map(e => function e({
    text: t,
    list: n
  }, r) {
    let i = [];
    t && i.push(`- ${tp.$$default.blue(t)}`);
    n && i.push([`- ${tp.$$default.blue(n.title)}:`].concat(n.values.map(t => e(t, r - tf.length).replace(/^|\n/g, `$&${tf}`))).join(`
`));
    return ty(i, r);
  }(e, n.loggerPrintWidth))).join(`
`));
  return ty(a, n.loggerPrintWidth);
};
var tU = (e, t, {
  descriptor: n
}) => {
  let r = [`${tc.$$default.yellow("string" == typeof e ? n.key(e) : n.pair(e))} is deprecated`];
  t && r.push(`we now treat it as ${tc.$$default.blue("string" == typeof t ? n.key(t) : n.pair(t))}`);
  return r.join("; ") + ".";
};
var tz = class {
  constructor(e, t) {
    let {
      logger = console,
      loggerPrintWidth = 80,
      descriptor = tu,
      unknown = tx,
      invalid = tq,
      deprecated = tU,
      missing = () => !1,
      required = () => !1,
      preprocess = e => e,
      postprocess = () => tm
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
      normalizeDefaultResult: tF,
      normalizeExpectedResult: tP,
      normalizeDeprecatedResult: tI,
      normalizeForwardResult: tB,
      normalizeRedirectResult: tj,
      normalizeValidateResult: tN
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
        let t = tF(r.$$default(this._utils));
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
      i !== tm && (this._applyValidation(i, e, n), t[e] = i);
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
        let n = tI(r.deprecated(e, this._utils), a, !0);
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
      tB(r.forward(a, this._utils), a).forEach(o);
      let _ = tj(r.redirect(a, this._utils), a);
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
    for (let t of Object.keys(this._utils.schemas)) if (this._identifyMissing(t, e) && this._identifyRequired(t)) throw this._invalidHandler(t, td, this._utils);
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
    let r = tN(n.validate(e, this._utils), e);
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
    if (t !== tm) {
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
var tK = function (e, t, {
  logger: n = !1,
  isCLI: i = !1,
  passThrough: a = !1,
  FlagSchema: o,
  descriptor: s
} = {}) {
  if (i) {
    if (!o) throw Error("'FlagSchema' option is required.");
    if (!s) throw Error("'descriptor' option is required.");
  } else s = tu;
  let _ = a ? Array.isArray(a) ? (e, t) => a.includes(e) ? {
    [e]: t
  } : void 0 : (e, t) => ({
    [e]: t
  }) : (e, t, n) => {
    let {
      _,
      ...i
    } = n.schemas;
    return tx(e, t, {
      ...n,
      schemas: i
    });
  };
  let l = new tz(function (e, {
    isCLI: t,
    FlagSchema: n
  }) {
    let r = [];
    for (let i of (t && r.push(tC.create({
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
            o = tR;
            t && (a.preprocess = Number);
            break;
          case "string":
          case "path":
            o = tJ;
            break;
          case "choice":
            o = tM;
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
            o = tA;
            break;
          case "flag":
            o = r;
            a.flags = n.flatMap(e => [e.alias, e.description && e.name, e.oppositeDescription && `no-${e.name}`].filter(Boolean));
            break;
          default:
            throw Error(`Unexpected type ${e.type}`);
        }
        if (e.exception ? a.validate = (t, n, r) => e.exception(t) || n.validate(t, r) : a.validate = (e, t, n) => void 0 === e || t.validate(e, n), e.redirect && (s.redirect = t => t ? {
          to: {
            key: e.redirect.option,
            value: e.redirect.value
          }
        } : void 0), e.deprecated && (s.deprecated = !0), t && !e.array) {
          let e = a.preprocess || (e => e);
          a.preprocess = (t, n, r) => n.preprocess(e(Array.isArray(t) ? ed(!1, t, -1) : t), r);
        }
        return e.array ? tE.create({
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
      i.alias && t && r.push(tS.create({
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
var tW = (e, t, n) => {
  if (!(e && null == t)) {
    if (t.findLast) return t.findLast(n);
    for (let e = t.length - 1; e >= 0; e--) {
      let r = t[e];
      if (n(r, e, t)) return r;
    }
  }
};
function tV(e, t) {
  if (!t) throw Error("parserName is required.");
  let n = tW(!1, e, e => e.parsers && Object.prototype.hasOwnProperty.call(e.parsers, t));
  if (n) return n;
  let r = `Couldn't resolve parser "${t}".`;
  throw new tr(r += " Plugins must be explicitly added to the standalone bundle.");
}
function t$(e, t) {
  let n = e.parsers[t];
  return "function" == typeof n ? n() : n;
}
var tH = {
  astFormat: "estree",
  printer: {},
  originalText: void 0,
  locStart: null,
  locEnd: null
};
async function tG(e, t = {}) {
  var n;
  var r;
  let i;
  let a = {
    ...e
  };
  if (!a.parser) {
    if (a.filepath) {
      if (a.parser = tl(a, {
        physicalFile: a.filepath
      }), !a.parser) throw new ti(`No parser could be inferred for file "${a.filepath}".`);
    } else throw new ti("No parser and no file path given, couldn't infer a parser.");
  }
  let o = to({
    plugins: e.plugins,
    showDeprecated: !0
  }).options;
  let s = {
    ...tH,
    ...Object.fromEntries(o.filter(e => void 0 !== e.$$default).map(e => [e.name, e.$$default]))
  };
  let _ = tV(a.plugins, a.parser);
  let l = await t$(_, a.parser);
  a.astFormat = l.astFormat;
  a.locEnd = l.locEnd;
  a.locStart = l.locStart;
  let u = null != (n = _.printers) && n[l.astFormat] ? _ : function (e, t) {
    if (!t) throw Error("astFormat is required.");
    let n = tW(!1, e, e => e.printers && Object.prototype.hasOwnProperty.call(e.printers, t));
    if (n) return n;
    let r = `Couldn't find plugin for AST format "${t}".`;
    throw new tr(r += " Plugins must be explicitly added to the standalone bundle.");
  }(a.plugins, l.astFormat);
  let c = await (r = l.astFormat, "function" == typeof (i = u.printers[r]) ? i() : i);
  a.printer = c;
  let p = u.defaultOptions ? Object.fromEntries(Object.entries(u.defaultOptions).filter(([, e]) => void 0 !== e)) : {};
  for (let [e, t] of Object.entries({
    ...s,
    ...p
  })) (null === a[e] || void 0 === a[e]) && (a[e] = t);
  "json" === a.parser && (a.trailingComma = "none");
  return tK(a, o, {
    passThrough: Object.keys(tH),
    ...t
  });
}
var tX = d(C(), 1);
async function tY(e, t) {
  let n;
  let r = await function ({
    plugins: e,
    parser: t
  }) {
    return t$(tV(e, t), t);
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
        let r = tX.codeFrameColumns(t, loc, {
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
async function tQ(e, t, n, r, i) {
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
  let l = e0(embed.getVisitorKeys ?? getVisitorKeys);
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
    return tZ(e, t, n, r);
  }
  e.stack = c;
}
async function tZ(e, t, n, r) {
  let i = await tG({
    ...n,
    ...t,
    parentParser: n.parser,
    originalText: e
  }, {
    passThrough: !0
  });
  let {
    ast
  } = await tY(e, i);
  return eE(await r(ast, i));
}
var t0 = function (e, t) {
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
async function t1(e, t) {
  ({
    ast: e
  } = await t3(e, t));
  let n = new Map();
  let r = new eU(e);
  let i = () => {};
  let a = new Map();
  await tQ(r, s, t, t1, a);
  let o = await t2(r, t, s, void 0, a);
  (function (e) {
    let {
      [Symbol.$$for("comments")]: t,
      [Symbol.$$for("printedComments")]: n
    } = e;
    for (let e of t) {
      if (!e.printed && !n.has(e)) throw Error('Comment "' + e.value.trim() + '" was not printed. Please report this error!');
      delete e.printed;
    }
  })(t);
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
    let l = t2(r, t, s, e, a);
    _ && n.set(o, l);
    return l;
  }
}
function t2(e, t, n, r, i) {
  var a;
  let {
    node
  } = e;
  let {
    printer
  } = t;
  let _;
  _ = null != (a = printer.hasPrettierIgnore) && a.call(printer, e) ? t0(e, t) : i.has(node) ? i.get(node) : printer.print(e, t, n, r);
  node === t.cursorNode && (_ = eA(_, e => [eu, e, eu]));
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
          let i = [tn(e, t)];
          let {
            printer,
            originalText,
            locStart,
            locEnd
          } = t;
          if (null == (n = printer.isBlockComment) ? void 0 : n.call(printer, r)) {
            let e = eY(originalText, locEnd(r)) ? eY(originalText, locStart(r), {
              backwards: !0
            }) ? e_ : es : " ";
            i.push(e);
          } else i.push(e_);
          let l = eX(originalText, e$(originalText, locEnd(r)));
          !1 !== l && eY(originalText, l) && i.push(e_);
          return i;
        }(e, t)) : _trailing && (o = function (e, t, n) {
          var r;
          let i = e.node;
          let a = tn(e, t);
          let {
            printer,
            originalText,
            locStart
          } = t;
          let l = null == (r = printer.isBlockComment) ? void 0 : r.call(printer, i);
          return null != n && n.hasLineSuffix && !(null != n && n.isBlock) || eY(originalText, locStart(i), {
            backwards: !0
          }) ? {
            doc: er([e_, tt(originalText, locStart(i)) ? e_ : "", a]),
            isBlock: l,
            hasLineSuffix: !0
          } : !l || null != n && n.hasLineSuffix ? {
            doc: [er([" ", a]), ei],
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
    return leading || trailing ? eA(t, e => [leading, e, trailing]) : t;
  }(e, _, t));
  return _;
}
async function t3(e, t) {
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
      ownLine = e5,
      endOfLine = e5,
      remaining = e5
    } = s;
    let p = comments.map((r, i) => ({
      ...function e(t, n, r, i) {
        let {
          locStart: _locStart,
          locEnd: _locEnd
        } = r;
        let s = _locStart(n);
        let _ = _locEnd(n);
        let l = e8(t, r);
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
          let t = te(quasis, n, r);
          u && te(quasis, u, r) !== t && (u = null);
          c && te(quasis, c, r) !== t && (c = null);
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
          e2(ast, comment);
          continue;
        }
        if (locEnd(comment) - locEnd(ast) >= 0) {
          e6(ast, comment);
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
          if (precedingNode !== precedingNode || !e7(e.slice(locEnd(comment), _))) break;
          _ = locStart(comment);
        }
        return eY(e, _, {
          backwards: !0
        });
      }(text, options, p, e)) {
        comment.placement = "ownLine";
        ownLine(...n) || (followingNode ? e2(followingNode, comment) : precedingNode ? e6(precedingNode, comment) : enclosingNode ? e3(enclosingNode, comment) : e3(ast, comment));
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
          if (followingNode !== followingNode || !e7(e.slice(_, locStart(comment)))) break;
          _ = locEnd(comment);
        }
        return eY(e, _);
      }(text, options, p, e)) {
        comment.placement = "endOfLine";
        endOfLine(...n) || (precedingNode ? e6(precedingNode, comment) : followingNode ? e2(followingNode, comment) : enclosingNode ? e3(enclosingNode, comment) : e3(ast, comment));
      } else if (comment.placement = "remaining", !remaining(...n)) {
        if (precedingNode && followingNode) {
          let e = r.length;
          e > 0 && r[e - 1].followingNode !== followingNode && e9(r, options);
          r.push(t);
        } else precedingNode ? e6(precedingNode, comment) : followingNode ? e2(followingNode, comment) : enclosingNode ? e3(enclosingNode, comment) : e3(ast, comment);
      }
    }
    if (e9(r, t), !o) for (let e of comments) {
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
var t6 = function (e, t) {
  let {
    cursorOffset,
    locStart,
    locEnd
  } = t;
  let a = e0(t.printer.getVisitorKeys);
  let o = e;
  for (let t of function* (e, t) {
    let n = [e];
    for (let e = 0; e < n.length; e++) for (let r of eK(n[e], t)) {
      yield r;
      n.push(r);
    }
  }(e, {
    getVisitorKeys: a,
    filter: e => locStart(e) <= cursorOffset && locEnd(e) >= cursorOffset
  })) o = t;
  return o;
};
var t4 = function (e, t) {
  let {
    printer: {
      massageAstNode,
      getVisitorKeys
    }
  } = t;
  if (!massageAstNode) return e;
  let i = e0(getVisitorKeys);
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
var t8 = ({
  parser: e
}) => "json" === e || "json5" === e || "jsonc" === e || "json-stringify" === e;
function t5(e) {
  let t = e.length - 1;
  for (;;) {
    let n = e[t];
    if (n?.type === "Program" || n?.type === "File") t--;else break;
  }
  return e.slice(0, t + 1);
}
function t7(e, t, n, r, i = [], a) {
  let {
    locStart,
    locEnd
  } = n;
  let _ = locStart(e);
  let l = locEnd(e);
  if (!(t > l || t < _ || "rangeEnd" === a && t === _ || "rangeStart" === a && t === l)) {
    for (let o of e8(e, n)) {
      let s = t7(o, t, n, r, [e, ...i], a);
      if (s) return s;
    }
    if (!r || r(e, i[0])) return {
      node: e,
      parentNodes: i
    };
  }
}
var t9 = new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]);
var ne = new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
function nt(e, t, n) {
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
      return t9.has(t.type);
    case "graphql":
      return ne.has(t.kind);
    case "vue":
      return "root" !== t.tag;
  }
  return !1;
}
var nn = Symbol("cursor");
async function nr(e, t, n = 0) {
  if (!e || 0 === e.trim().length) return {
    formatted: "",
    cursorOffset: -1,
    comments: []
  };
  let {
    ast,
    text
  } = await tY(e, t);
  t.cursorOffset >= 0 && (t.cursorNode = t6(ast, t));
  let a = await t1(ast, t, n);
  n > 0 && (a = ep([e_, a], n, t.tabWidth));
  let o = ej(a, t);
  if (n > 0) {
    let e = o.formatted.trim();
    void 0 !== o.cursorNodeStart && (o.cursorNodeStart -= o.formatted.indexOf(e));
    o.formatted = e + k(t.endOfLine);
  }
  let s = t[Symbol.$$for("comments")];
  if (t.cursorOffset >= 0) {
    let e;
    let n;
    let r;
    let a;
    let _;
    if (t.cursorNode && o.cursorNodeText ? (e = t.locStart(t.cursorNode), n = text.slice(e, t.locEnd(t.cursorNode)), r = t.cursorOffset - e, a = o.cursorNodeStart, _ = o.cursorNodeText) : (e = 0, n = text, r = t.cursorOffset, a = 0, _ = o.formatted), n === _) return {
      formatted: o.formatted,
      cursorOffset: a + r,
      comments: s
    };
    let l = n.split("");
    l.splice(r, 0, nn);
    let u = _.split("");
    let c = A.diffArrays(l, u);
    let p = a;
    for (let e of c) if (e.removed) {
      if (e.value.includes(nn)) break;
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
async function ni(e, t) {
  let {
    ast,
    text
  } = await tY(e, t);
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
    ez.ok(_rangeEnd > _rangeStart);
    let l = e.slice(_rangeStart, _rangeEnd).search(/\S/);
    let u = -1 === l;
    if (!u) for (a += l; _rangeEnd > _rangeStart && !/\S/.test(e[_rangeEnd - 1]); --_rangeEnd);
    let c = t7(n, _rangeStart, t, (e, n) => nt(t, e, n), [], "rangeStart");
    let p = u ? c : t7(n, _rangeEnd, t, e => nt(t, e), [], "rangeEnd");
    if (!c || !p) return {
      rangeStart: 0,
      rangeEnd: 0
    };
    if (t8(t)) {
      let e;
      let t;
      e = [c.node, ...c.parentNodes];
      t = new Set([p.node, ...p.parentNodes]);
      let n = e.find(e => t9.has(e.type) && t.has(e));
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
      for (let e of t5(t.parentNodes)) if (n(e) >= o) a = e;else break;
      let s = r(t.node);
      for (let t of t5(e.parentNodes)) {
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
  let _ = eq(text.slice(s, rangeStart).match(/^\s*/)[0], t.tabWidth);
  let l = await nr(o, {
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
    let e = k(t.endOfLine);
    cursorOffset >= 0 && e === `\r
` && (c += F(p.slice(0, cursorOffset), `
`));
    p = w(!1, p, `
`, e);
  }
  return {
    formatted: p,
    cursorOffset,
    comments: l.comments
  };
}
function na(e, t, n) {
  return "number" != typeof t || Number.isNaN(t) || t < 0 || t > e.length ? n : t;
}
function no(e, t) {
  let {
    cursorOffset,
    rangeStart,
    rangeEnd
  } = t;
  n = na(e, cursorOffset, -1);
  r = na(e, rangeStart, 0);
  i = na(e, rangeEnd, e.length);
  return {
    ...t,
    cursorOffset,
    rangeStart,
    rangeEnd
  };
}
function ns(e, t) {
  var n;
  let r;
  let {
    cursorOffset,
    rangeStart,
    rangeEnd,
    endOfLine
  } = no(e, t);
  let _ = "\uFEFF" === e.charAt(0);
  if (_ && (e = e.slice(1), cursorOffset--, rangeStart--, rangeEnd--), "auto" === endOfLine && (s = (r = (n = e).indexOf("\r")) >= 0 ? n.charAt(r + 1) === `
` ? "crlf" : "cr" : "lf"), e.includes("\r")) {
    let t = t => F(e.slice(0, Math.max(t, 0)), `\r
`);
    i -= t(cursorOffset);
    a -= t(rangeStart);
    o -= t(rangeEnd);
    e = w(!1, e, /\r\n?/g, `
`);
  }
  return {
    hasBOM: _,
    text: e,
    options: no(e, {
      ...t,
      cursorOffset,
      rangeStart,
      rangeEnd,
      endOfLine
    })
  };
}
async function n_(e, t) {
  let n = await function ({
    plugins: e,
    parser: t
  }) {
    return t$(tV(e, t), t);
  }(t);
  return !n.hasPragma || n.hasPragma(e);
}
async function nl(e, t) {
  let n;
  let {
    hasBOM,
    text,
    options
  } = ns(e, await tG(t));
  return options.rangeStart >= options.rangeEnd && "" !== text || options.requirePragma && !(await n_(text, options)) ? {
    formatted: e,
    cursorOffset: t.cursorOffset,
    comments: []
  } : (options.rangeStart > 0 || options.rangeEnd < text.length ? n = await ni(text, options) : (!options.requirePragma && options.insertPragma && options.printer.insertPragma && !(await n_(text, options)) && (i = options.printer.insertPragma(text)), n = await nr(text, options)), hasBOM && (n.formatted = "\uFEFF" + n.formatted, n.cursorOffset >= 0 && n.cursorOffset++), n);
}
async function nu(e, t, n) {
  let {
    text,
    options
  } = ns(e, await tG(t));
  let a = await tY(text, options);
  n && (n.preprocessForPrint && (a.ast = await t3(a.ast, options)), n.massage && (a.ast = t4(a.ast, options)));
  return a;
}
async function nc(e, t) {
  t = await tG(t);
  return ej(await t1(e, t), t);
}
async function np(e, t) {
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
      if (t.type === z) {
        let e = (null == (a = i?.[n + 1]) ? void 0 : a.type) === W;
        return t.literal ? e ? "literalline" : "literallineWithoutBreakParent" : t.hard ? e ? "hardline" : "hardlineWithoutBreakParent" : t.soft ? "softline" : "line";
      }
      if (t.type === W) return (null == (o = i?.[n - 1]) ? void 0 : o.type) === z && i[n - 1].hard ? void 0 : "breakParent";
      if (t.type === j) return "trim";
      if (t.type === O) return "indent(" + e(t.contents) + ")";
      if (t.type === B) return t.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + e(t.contents) + ")" : t.n < 0 ? "dedent(" + e(t.contents) + ")" : "root" === t.n.type ? "markAsRoot(" + e(t.contents) + ")" : "align(" + JSON.stringify(t.n) + ", " + e(t.contents) + ")";
      if (t.type === R) return "ifBreak(" + e(t.breakContents) + (t.flatContents ? ", " + e(t.flatContents) : "") + (t.groupId ? (t.flatContents ? "" : ', ""') + `, { groupId: ${r(t.groupId)} }` : "") + ")";
      if (t.type === J) {
        let n = [];
        t.negate && n.push("negate: true");
        t.groupId && n.push(`groupId: ${r(t.groupId)}`);
        let i = n.length > 0 ? `, { ${n.join(", ")} }` : "";
        return `indentIfBreak(${e(t.contents)}${i})`;
      }
      if (t.type === M) {
        let n = [];
        t.$$break && "propagated" !== t.$$break && n.push("shouldBreak: true");
        t.id && n.push(`id: ${r(t.id)}`);
        let i = n.length > 0 ? `, { ${n.join(", ")} }` : "";
        return t.expandedStates ? `conditionalGroup([${t.expandedStates.map(t => e(t)).join(",")}]${i})` : `group(${e(t.contents)}${i})`;
      }
      if (t.type === L) return `fill([${t.parts.map(t => e(t)).join(", ")}])`;
      if (t.type === q) return "lineSuffix(" + e(t.contents) + ")";
      if (t.type === U) return "lineSuffixBoundary";
      if (t.type === K) return `label(${JSON.stringify(t.label)}, ${e(t.contents)})`;
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
      return t.type === R ? {
        ...t,
        breakContents: e(t.breakContents),
        flatContents: e(t.flatContents)
      } : t.type === M ? {
        ...t,
        contents: e(t.contents),
        expandedStates: null == (n = t.expandedStates) ? void 0 : n.map(e)
      } : t.type === L ? {
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
  } = await nl(n, {
    ...t,
    parser: "__js_expression"
  });
  return formatted;
}
async function nd(e, t) {
  t = await tG(t);
  let {
    ast
  } = await tY(e, t);
  return t1(ast, t);
}
async function nm(e, t) {
  return ej(e, await tG(t));
}
export var $$nf3 = {};
c($$nf3, {
  builders: () => nh,
  printer: () => ny,
  utils: () => ng
});
var nh = {
  join: ec,
  line: es,
  softline: {
    type: z,
    soft: !0
  },
  hardline: e_,
  literalline: el,
  group: et,
  conditionalGroup: function (e, t) {
    return et(e[0], {
      ...t,
      expandedStates: e
    });
  },
  fill: en,
  lineSuffix: er,
  lineSuffixBoundary: {
    type: U
  },
  cursor: eu,
  breakParent: ei,
  ifBreak: function (e, t = "", n = {}) {
    Q(e);
    "" !== t && Q(t);
    return {
      type: R,
      breakContents: e,
      flatContents: t,
      groupId: n.groupId
    };
  },
  trim: {
    type: j
  },
  indent: Z,
  indentIfBreak: function (e, t) {
    Q(e);
    return {
      type: J,
      contents: e,
      groupId: t.groupId,
      negate: t.negate
    };
  },
  align: ee,
  addAlignmentToDoc: ep,
  markAsRoot: function (e) {
    return ee({
      type: "root"
    }, e);
  },
  dedentToRoot: function (e) {
    return ee(Number.NEGATIVE_INFINITY, e);
  },
  dedent: function (e) {
    return ee(-1, e);
  },
  hardlineWithoutBreakParent: ea,
  literallineWithoutBreakParent: eo,
  label: function (e, t) {
    Q(t);
    return e ? {
      type: K,
      label: e,
      contents: t
    } : t;
  },
  concat: e => e
};
var ny = {
  printDocToString: ej
};
var ng = {
  willBreak: function (e) {
    return eD(e, ex, !1);
  },
  traverseDoc: Y,
  findInDoc: eD,
  mapDoc: eb,
  removeLines: function (e) {
    return eb(e, eT);
  },
  stripTrailingHardline: eE,
  replaceEndOfLine: function (e, t = el) {
    return eb(e, e => "string" == typeof e ? ec(t, e.split(`
`)) : e);
  },
  canBreak: function (e) {
    return eD(e, ew, !1);
  }
};
var $$nb8 = "3.2.5";
var $$nD7 = {};
c($$nD7, {
  addDanglingComment: () => e3,
  addLeadingComment: () => e2,
  addTrailingComment: () => e6,
  getAlignmentSize: () => eq,
  getIndentSize: () => nC,
  getMaxContinuousCount: () => nE,
  getNextNonSpaceNonCommentCharacter: () => nw,
  getNextNonSpaceNonCommentCharacterIndex: () => nP,
  getStringWidth: () => ey,
  hasNewline: () => eY,
  hasNewlineInRange: () => nA,
  hasSpaces: () => nk,
  isNextLineEmpty: () => nI,
  isNextLineEmptyAfterIndex: () => nS,
  isPreviousLineEmpty: () => nN,
  makeString: () => nF,
  skip: () => eW,
  skipEverythingButNewLine: () => eG,
  skipInlineComment: () => nx,
  skipNewline: () => eX,
  skipSpaces: () => e$,
  skipToLineEnd: () => eH,
  skipTrailingComment: () => nv,
  skipWhitespace: () => eV
});
var nx = function (e, t) {
  if (!1 === t) return !1;
  if ("/" === e.charAt(t) && "*" === e.charAt(t + 1)) {
    for (let n = t + 2; n < e.length; ++n) if ("*" === e.charAt(n) && "/" === e.charAt(n + 1)) return n + 2;
  }
  return t;
};
var nv = function (e, t) {
  return !1 !== t && ("/" === e.charAt(t) && "/" === e.charAt(t + 1) ? eG(e, t) : t);
};
var nT = function (e, t) {
  let n = null;
  let r = t;
  for (; r !== n;) {
    n = r;
    r = e$(e, r);
    r = nx(e, r);
    r = nv(e, r);
    r = eX(e, r);
  }
  return r;
};
var nS = function (e, t) {
  let n = null;
  let r = t;
  for (; r !== n;) {
    n = r;
    r = eH(e, r);
    r = nx(e, r);
    r = e$(e, r);
  }
  r = nv(e, r);
  return !1 !== (r = eX(e, r)) && eY(e, r);
};
var nC = function (e, t) {
  let n = e.lastIndexOf(`
`);
  return -1 === n ? 0 : eq(e.slice(n + 1).match(/^[\t ]*/)[0], t);
};
var nE = function (e, t) {
  let n = e.match(RegExp(`(${function (e) {
    if ("string" != typeof e) throw TypeError("Expected a string");
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }(t)})+`, "g"));
  return n?.reduce((e, n) => Math.max(e, n.length / t.length), 0);
};
var nw = function (e, t) {
  let n = nT(e, t);
  return !1 === n ? "" : e.charAt(n);
};
var nA = function (e, t, n) {
  for (let r = t; r < n; ++r) if (e.charAt(r) === `
`) return !0;
  return !1;
};
var nk = function (e, t, n = {}) {
  return e$(e, n.backwards ? t - 1 : t, n) !== t;
};
var nF = function (e, t, n) {
  let r = '"' === t ? "'" : '"';
  let i = w(!1, e, /\\(.)|(["'])/gs, (e, i, a) => i === r ? i : a === t ? "\\" + a : a || (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(i) ? i : "\\" + i));
  return t + i + t;
};
function nP(e, t) {
  return 2 == $$arguments.length || "number" == typeof t ? nT(e, t) : function (e, t, n) {
    return nT(e, n(t));
  }(...arguments);
}
function nN(e, t) {
  return 2 == $$arguments.length || "number" == typeof t ? tt(e, t) : function (e, t, n) {
    return tt(e, n(t));
  }(...arguments);
}
function nI(e, t) {
  return 2 == $$arguments.length || "number" == typeof t ? nS(e, t) : function (e, t, n) {
    return nS(e, n(t));
  }(...arguments);
}
function nO(e, t = 1) {
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
export var $$nB5 = nO(nl);
export async function $$nj4(e, t) {
  let {
    formatted
  } = await $$nB5(e, {
    ...t,
    cursorOffset: -1
  });
  return formatted;
}
export async function $$nM1(e, t) {
  return (await $$nj4(e, t)) === e;
}
var $$nL6 = nO(to, 0);
var $$nR0 = {
  parse: nO(nu),
  formatAST: nO(nc),
  formatDoc: nO(np),
  printToDoc: nO(nd),
  printDocToString: nO(nm)
};
var $$nJ2 = E;
export const __debug = $$nR0;
export const check = $$nM1;
export const _$$default = $$nJ2;
export const doc = $$nf3;
export const format = $$nj4;
export const formatWithCursor = $$nB5;
export const getSupportInfo = $$nL6;
export const util = $$nD7;
export const version = $$nb8;