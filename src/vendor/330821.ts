function i() {}
function s(e, r, n, i, s) {
  for (o = 0, a = r.length, h = 0, d = 0, void 0; o < a; o++) {
    var o;
    var a;
    var h;
    var d;
    var p = r[o];
    if (p.removed) {
      if (p.value = e.join(i.slice(d, d + p.count)), d += p.count, o && r[o - 1].added) {
        var g = r[o - 1];
        r[o - 1] = r[o];
        r[o] = g;
      }
    } else {
      if (!p.added && s) {
        var m = n.slice(h, h + p.count);
        m = m.map(function (e, r) {
          var n = i[d + r];
          return n.length > e.length ? n : e;
        });
        p.value = e.join(m);
      } else p.value = e.join(n.slice(h, h + p.count));
      h += p.count;
      p.added || (d += p.count);
    }
  }
  var v = r[a - 1];
  a > 1 && "string" == typeof v.value && (v.added || v.removed) && e.equals("", v.value) && (r[a - 2].value += v.value, r.pop());
  return r;
}
function o(e) {
  return {
    newPos: e.newPos,
    components: e.components.slice(0)
  };
}
i.prototype = {
  diff: function (e, r) {
    var n = $$arguments.length > 2 && void 0 !== $$arguments[2] ? $$arguments[2] : {};
    var i = n.callback;
    "function" == typeof n && (i = n, n = {});
    this.options = n;
    var a = this;
    function h(e) {
      return i ? (setTimeout(function () {
        i(void 0, e);
      }, 0), !0) : e;
    }
    e = this.castInput(e);
    r = this.castInput(r);
    e = this.removeEmpty(this.tokenize(e));
    var d = (r = this.removeEmpty(this.tokenize(r))).length;
    var p = e.length;
    var g = 1;
    var m = d + p;
    n.maxEditLength && (m = Math.min(m, n.maxEditLength));
    var v = [{
      newPos: -1,
      components: []
    }];
    var y = this.extractCommon(v[0], r, e, 0);
    if (v[0].newPos + 1 >= d && y + 1 >= p) return h([{
      value: this.join(r),
      count: r.length
    }]);
    function b() {
      for (var n = -1 * g; n <= g; n += 2) {
        var i = void 0;
        var m = v[n - 1];
        var y = v[n + 1];
        var b = (y ? y.newPos : 0) - n;
        m && (v[n - 1] = void 0);
        var O = m && m.newPos + 1 < d;
        var x = y && 0 <= b && b < p;
        if (!O && !x) {
          v[n] = void 0;
          continue;
        }
        if (!O || x && m.newPos < y.newPos ? (i = o(y), a.pushComponent(i.components, void 0, !0)) : (i = m, i.newPos++, a.pushComponent(i.components, !0, void 0)), b = a.extractCommon(i, r, e, n), i.newPos + 1 >= d && b + 1 >= p) return h(s(a, i.components, r, e, a.useLongestToken));
        v[n] = i;
      }
      g++;
    }
    if (i) !function e() {
      setTimeout(function () {
        if (g > m) return i();
        b() || e();
      }, 0);
    }();else for (; g <= m;) {
      var O = b();
      if (O) return O;
    }
  },
  pushComponent: function (e, r, n) {
    var i = e[e.length - 1];
    i && i.added === r && i.removed === n ? e[e.length - 1] = {
      count: i.count + 1,
      added: r,
      removed: n
    } : e.push({
      count: 1,
      added: r,
      removed: n
    });
  },
  extractCommon: function (e, r, n, i) {
    for (s = r.length, o = n.length, a = e.newPos, h = a - i, d = 0, void 0; a + 1 < s && h + 1 < o && this.equals(r[a + 1], n[h + 1]);) {
      var s;
      var o;
      var a;
      var h;
      var d;
      a++;
      h++;
      d++;
    }
    d && e.components.push({
      count: d
    });
    e.newPos = a;
    return h;
  },
  equals: function (e, r) {
    return this.options.comparator ? this.options.comparator(e, r) : e === r || this.options.ignoreCase && e.toLowerCase() === r.toLowerCase();
  },
  removeEmpty: function (e) {
    for (r = [], n = 0, void 0; n < e.length; n++) {
      var r;
      var n;
      e[n] && r.push(e[n]);
    }
    return r;
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
new i();
var a = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
var h = /\S/;
var d = new i();
export function $$p1(e, r, n) {
  return d.diff(e, r, n);
}
d.equals = function (e, r) {
  this.options.ignoreCase && (e = e.toLowerCase(), r = r.toLowerCase());
  return e === r || this.options.ignoreWhitespace && !h.test(e) && !h.test(r);
};
d.tokenize = function (e) {
  for (r = e.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), n = 0, void 0; n < r.length - 1; n++) {
    var r;
    var n;
    !r[n + 1] && r[n + 2] && a.test(r[n]) && a.test(r[n + 2]) && (r[n] += r[n + 2], r.splice(n + 1, 2), n--);
  }
  return r;
};
var g = new i();
export function $$m0(e, r, n) {
  return g.diff(e, r, n);
}
function v(e) {
  return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
function y(e) {
  return b(e) || O(e) || x(e) || k();
}
function b(e) {
  if (Array.isArray(e)) return w(e);
}
function O(e) {
  if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
}
function x(e, r) {
  if (e) {
    if ("string" == typeof e) return w(e, r);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(e, r);
  }
}
function w(e, r) {
  (null == r || r > e.length) && (r = e.length);
  for (n = 0, i = Array(r), void 0; n < r; n++) {
    var n;
    var i;
    i[n] = e[n];
  }
  return i;
}
function k() {
  throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
g.tokenize = function (e) {
  var r = [];
  var n = e.split(/(\n|\r\n)/);
  n[n.length - 1] || n.pop();
  for (var i = 0; i < n.length; i++) {
    var s = n[i];
    i % 2 && !this.options.newlineIsToken ? r[r.length - 1] += s : (this.options.ignoreWhitespace && (s = s.trim()), r.push(s));
  }
  return r;
};
new i().tokenize = function (e) {
  return e.split(/(\S.+?[.!?])(?=\s+|$)/);
};
new i().tokenize = function (e) {
  return e.split(/([{}:;,]|\s+)/);
};
var _ = Object.prototype.toString;
var S = new i();
function E(e, r, n, i, s) {
  for (r = r || [], n = n || [], i && (e = i(s, e)), o = 0; o < r.length; o += 1) if (r[o] === e) return n[o];
  if ("[object Array]" === _.call(e)) {
    for (r.push(e), a = Array(e.length), n.push(a), o = 0; o < e.length; o += 1) a[o] = E(e[o], r, n, i, s);
    r.pop();
    n.pop();
    return a;
  }
  if (e && e.toJSON && (e = e.toJSON()), "object" === v(e) && null !== e) {
    r.push(e);
    a = {};
    n.push(a);
    var o;
    var a;
    var h;
    var d = [];
    for (h in e) e.hasOwnProperty(h) && d.push(h);
    for (d.sort(), o = 0; o < d.length; o += 1) a[h = d[o]] = E(e[h], r, n, i, h);
    r.pop();
    n.pop();
  } else a = e;
  return a;
}
S.useLongestToken = !0;
S.tokenize = g.tokenize;
S.castInput = function (e) {
  var r = this.options;
  var n = r.undefinedReplacement;
  var i = r.stringifyReplacer;
  var s = void 0 === i ? function (e, r) {
    return void 0 === r ? n : r;
  } : i;
  return "string" == typeof e ? e : JSON.stringify(E(e, null, null, s), s, "  ");
};
S.equals = function (e, r) {
  return i.prototype.equals.call(S, e.replace(/,([\r\n])/g, "$1"), r.replace(/,([\r\n])/g, "$1"));
};
var A = new i();
A.tokenize = function (e) {
  return e.slice();
};
A.join = A.removeEmpty = function (e) {
  return e;
};
function C(e, r) {
  return e.length === r.length && T(e, r);
}
function T(e, r) {
  if (r.length > e.length) return !1;
  for (var n = 0; n < r.length; n++) if (r[n] !== e[n]) return !1;
  return !0;
}
function I(e, r, n) {
  e.conflict = !0;
  e.lines.push({
    conflict: !0,
    mine: r,
    theirs: n
  });
}
function P(e) {
  for (r = [], n = e.lines[e.index][0], void 0; e.index < e.lines.length;) {
    var r;
    var n;
    var i = e.lines[e.index];
    if ("-" === n && "+" === i[0] && (n = "+"), n === i[0]) {
      r.push(i);
      e.index++;
    } else break;
  }
  return r;
}
function R(e, r) {
  for (n = [], i = [], s = 0, o = !1, a = !1, void 0; s < r.length && e.index < e.lines.length;) {
    var n;
    var i;
    var s;
    var o;
    var a;
    var h = e.lines[e.index];
    var d = r[s];
    if ("+" === d[0]) break;
    if (o = o || " " !== h[0], i.push(d), s++, "+" === h[0]) for (a = !0; "+" === h[0];) {
      n.push(h);
      h = e.lines[++e.index];
    }
    d.substr(1) === h.substr(1) ? (n.push(h), e.index++) : a = !0;
  }
  if ("+" === (r[s] || "")[0] && o && (a = !0), a) return n;
  for (; s < r.length;) i.push(r[s++]);
  return {
    merged: i,
    changes: n
  };
}
function M(e) {
  return e.reduce(function (e, r) {
    return e && "-" === r[0];
  }, !0);
}
function D(e, r, n) {
  for (var i = 0; i < n; i++) {
    var s = r[r.length - n + i].substr(1);
    if (e.lines[e.index + i] !== " " + s) return !1;
  }
  e.index += n;
  return !0;
}
function N(e) {
  var r = 0;
  var n = 0;
  e.forEach(function (e) {
    if ("string" != typeof e) {
      var i = N(e.mine);
      var s = N(e.theirs);
      void 0 !== r && (i.oldLines === s.oldLines ? r += i.oldLines : r = void 0);
      void 0 !== n && (i.newLines === s.newLines ? n += i.newLines : n = void 0);
    } else {
      void 0 !== n && ("+" === e[0] || " " === e[0]) && n++;
      void 0 !== r && ("-" === e[0] || " " === e[0]) && r++;
    }
  });
  return {
    oldLines: r,
    newLines: n
  };
}
export const Pp = $$m0;
export const pR = $$p1;