var e;
e = function () {
  "use strict";

  var t;
  var e;
  var r;
  var n;
  var i;
  var o;
  var a;
  var s;
  var u;
  var c;
  var l = Array.prototype.slice;
  function f(t, e) {
    e && (t.prototype = Object.create(e.prototype));
    t.prototype.constructor = t;
  }
  function p(t) {
    return y(t) ? t : G(t);
  }
  function h(t) {
    return v(t) ? t : X(t);
  }
  function d(t) {
    return m(t) ? t : $(t);
  }
  function g(t) {
    return y(t) && !_(t) ? t : Y(t);
  }
  function y(t) {
    return !!(t && t[S]);
  }
  function v(t) {
    return !!(t && t[w]);
  }
  function m(t) {
    return !!(t && t[x]);
  }
  function _(t) {
    return v(t) || m(t);
  }
  function b(t) {
    return !!(t && t[k]);
  }
  f(h, p);
  f(d, p);
  f(g, p);
  p.isIterable = y;
  p.isKeyed = v;
  p.isIndexed = m;
  p.isAssociative = _;
  p.isOrdered = b;
  p.Keyed = h;
  p.Indexed = d;
  p.Set = g;
  var S = "@@__IMMUTABLE_ITERABLE__@@";
  var w = "@@__IMMUTABLE_KEYED__@@";
  var x = "@@__IMMUTABLE_INDEXED__@@";
  var k = "@@__IMMUTABLE_ORDERED__@@";
  var C = "delete";
  var E = {};
  var O = {
    value: !1
  };
  var D = {
    value: !1
  };
  function K(t) {
    t.value = !1;
    return t;
  }
  function T(t) {
    t && (t.value = !0);
  }
  function M() {}
  function A(t, e) {
    e = e || 0;
    for (r = Math.max(0, t.length - e), n = Array(r), i = 0, void 0; i < r; i++) {
      var r;
      var n;
      var i;
      n[i] = t[i + e];
    }
    return n;
  }
  function I(t) {
    void 0 === t.size && (t.size = t.__iterate(L));
    return t.size;
  }
  function B(t, e) {
    if ("number" != typeof e) {
      var r = e >>> 0;
      if ("" + r !== e || 0xffffffff === r) return NaN;
      e = r;
    }
    return e < 0 ? I(t) + e : e;
  }
  function L() {
    return !0;
  }
  function R(t, e, r) {
    return (0 === t || void 0 !== r && t <= -r) && (void 0 === e || void 0 !== r && e >= r);
  }
  function F(t, e, r) {
    return void 0 === t ? r : t < 0 ? Math.max(0, e + t) : void 0 === e ? t : Math.min(e, t);
  }
  var N = "function" == typeof Symbol && Symbol.iterator;
  var P = "@@iterator";
  var z = N || P;
  function j(t) {
    this.next = t;
  }
  function U(t, e, r, n) {
    var i = 0 === t ? e : 1 === t ? r : [e, r];
    n ? n.value = i : n = {
      value: i,
      done: !1
    };
    return n;
  }
  function q() {
    return {
      value: void 0,
      done: !0
    };
  }
  function H(t) {
    return t && "function" == typeof t.next;
  }
  function W(t) {
    var e = V(t);
    return e && e.call(t);
  }
  function V(t) {
    var e = t && (N && t[N] || t[P]);
    if ("function" == typeof e) return e;
  }
  function J(t) {
    return t && "number" == typeof t.length;
  }
  function G(t) {
    return null == t ? ti() : y(t) ? t.toSeq() : function (t) {
      var e = ts(t) || "object" == typeof t && new tt(t);
      if (!e) throw TypeError("Expected Array or iterable object of values, or keyed object: " + t);
      return e;
    }(t);
  }
  function X(t) {
    return null == t ? ti().toKeyedSeq() : y(t) ? v(t) ? t.toSeq() : t.fromEntrySeq() : to(t);
  }
  function $(t) {
    return null == t ? ti() : y(t) ? v(t) ? t.entrySeq() : t.toIndexedSeq() : ta(t);
  }
  function Y(t) {
    return (null == t ? ti() : y(t) ? v(t) ? t.entrySeq() : t : ta(t)).toSetSeq();
  }
  j.prototype.toString = function () {
    return "[Iterator]";
  };
  j.KEYS = 0;
  j.VALUES = 1;
  j.ENTRIES = 2;
  j.prototype.inspect = j.prototype.toSource = function () {
    return this.toString();
  };
  j.prototype[z] = function () {
    return this;
  };
  f(G, p);
  G.of = function () {
    return G(arguments);
  };
  G.prototype.toSeq = function () {
    return this;
  };
  G.prototype.toString = function () {
    return this.__toString("Seq {", "}");
  };
  G.prototype.cacheResult = function () {
    !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), this.size = this._cache.length);
    return this;
  };
  G.prototype.__iterate = function (t, e) {
    return tu(this, t, e, !0);
  };
  G.prototype.__iterator = function (t, e) {
    return tc(this, t, e, !0);
  };
  f(X, G);
  X.prototype.toKeyedSeq = function () {
    return this;
  };
  f($, G);
  $.of = function () {
    return $(arguments);
  };
  $.prototype.toIndexedSeq = function () {
    return this;
  };
  $.prototype.toString = function () {
    return this.__toString("Seq [", "]");
  };
  $.prototype.__iterate = function (t, e) {
    return tu(this, t, e, !1);
  };
  $.prototype.__iterator = function (t, e) {
    return tc(this, t, e, !1);
  };
  f(Y, G);
  Y.of = function () {
    return Y(arguments);
  };
  Y.prototype.toSetSeq = function () {
    return this;
  };
  G.isSeq = tn;
  G.Keyed = X;
  G.Set = Y;
  G.Indexed = $;
  var Z = "@@__IMMUTABLE_SEQ__@@";
  function Q(t) {
    this._array = t;
    this.size = t.length;
  }
  function tt(t) {
    var e = Object.keys(t);
    this._object = t;
    this._keys = e;
    this.size = e.length;
  }
  function te(t) {
    this._iterable = t;
    this.size = t.length || t.size;
  }
  function tr(t) {
    this._iterator = t;
    this._iteratorCache = [];
  }
  function tn(t) {
    return !!(t && t[Z]);
  }
  function ti() {
    return t || (t = new Q([]));
  }
  function to(t) {
    var e = Array.isArray(t) ? new Q(t).fromEntrySeq() : H(t) ? new tr(t).fromEntrySeq() : V(t) ? new te(t).fromEntrySeq() : "object" == typeof t ? new tt(t) : void 0;
    if (!e) throw TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + t);
    return e;
  }
  function ta(t) {
    var e = ts(t);
    if (!e) throw TypeError("Expected Array or iterable object of values: " + t);
    return e;
  }
  function ts(t) {
    return J(t) ? new Q(t) : H(t) ? new tr(t) : V(t) ? new te(t) : void 0;
  }
  function tu(t, e, r, n) {
    var i = t._cache;
    if (i) {
      for (o = i.length - 1, a = 0, void 0; a <= o; a++) {
        var o;
        var a;
        var s = i[r ? o - a : a];
        if (!1 === e(s[1], n ? s[0] : a, t)) return a + 1;
      }
      return a;
    }
    return t.__iterateUncached(e, r);
  }
  function tc(t, e, r, n) {
    var i = t._cache;
    if (i) {
      var o = i.length - 1;
      var a = 0;
      return new j(function () {
        var t = i[r ? o - a : a];
        return a++ > o ? q() : U(e, n ? t[0] : a - 1, t[1]);
      });
    }
    return t.__iteratorUncached(e, r);
  }
  function tl(t, e) {
    return e ? function t(e, r, n, i) {
      return Array.isArray(r) ? e.call(i, n, $(r).map(function (n, i) {
        return t(e, n, i, r);
      })) : tf(r) ? e.call(i, n, X(r).map(function (n, i) {
        return t(e, n, i, r);
      })) : r;
    }(e, t, "", {
      "": t
    }) : function t(e) {
      return Array.isArray(e) ? $(e).map(t).toList() : tf(e) ? X(e).map(t).toMap() : e;
    }(t);
  }
  function tf(t) {
    return t && (t.constructor === Object || void 0 === t.constructor);
  }
  function tp(t, e) {
    if (t === e || t != t && e != e) return !0;
    if (!t || !e) return !1;
    if ("function" == typeof t.valueOf && "function" == typeof e.valueOf) {
      if ((t = t.valueOf()) === (e = e.valueOf()) || t != t && e != e) return !0;
      if (!t || !e) return !1;
    }
    return !!("function" == typeof t.equals && "function" == typeof e.equals && t.equals(e));
  }
  function th(t, e) {
    if (t === e) return !0;
    if (!y(e) || void 0 !== t.size && void 0 !== e.size && t.size !== e.size || void 0 !== t.__hash && void 0 !== e.__hash && t.__hash !== e.__hash || v(t) !== v(e) || m(t) !== m(e) || b(t) !== b(e)) return !1;
    if (0 === t.size && 0 === e.size) return !0;
    var r = !_(t);
    if (b(t)) {
      var n = t.entries();
      return e.every(function (t, e) {
        var i = n.next().value;
        return i && tp(i[1], t) && (r || tp(i[0], e));
      }) && n.next().done;
    }
    var i = !1;
    if (void 0 === t.size) {
      if (void 0 === e.size) "function" == typeof t.cacheResult && t.cacheResult();else {
        i = !0;
        var o = t;
        t = e;
        e = o;
      }
    }
    var a = !0;
    var s = e.__iterate(function (e, n) {
      if (r ? !t.has(e) : i ? !tp(e, t.get(n, E)) : !tp(t.get(n, E), e)) {
        a = !1;
        return !1;
      }
    });
    return a && t.size === s;
  }
  function td(t, r) {
    if (!(this instanceof td)) return new td(t, r);
    if (this._value = t, this.size = void 0 === r ? 1 / 0 : Math.max(0, r), 0 === this.size) {
      if (e) return e;
      e = this;
    }
  }
  function tg(t, e) {
    if (!t) throw Error(e);
  }
  function ty(t, e, n) {
    if (!(this instanceof ty)) return new ty(t, e, n);
    if (tg(0 !== n, "Cannot step a Range by 0"), t = t || 0, void 0 === e && (e = 1 / 0), n = void 0 === n ? 1 : Math.abs(n), e < t && (n = -n), this._start = t, this._end = e, this._step = n, this.size = Math.max(0, Math.ceil((e - t) / n - 1) + 1), 0 === this.size) {
      if (r) return r;
      r = this;
    }
  }
  function tv() {
    throw TypeError("Abstract");
  }
  function tm() {}
  function t_() {}
  function tb() {}
  G.prototype[Z] = !0;
  f(Q, $);
  Q.prototype.get = function (t, e) {
    return this.has(t) ? this._array[B(this, t)] : e;
  };
  Q.prototype.__iterate = function (t, e) {
    for (r = this._array, n = r.length - 1, i = 0, void 0; i <= n; i++) {
      var r;
      var n;
      var i;
      if (!1 === t(r[e ? n - i : i], i, this)) return i + 1;
    }
    return i;
  };
  Q.prototype.__iterator = function (t, e) {
    var r = this._array;
    var n = r.length - 1;
    var i = 0;
    return new j(function () {
      return i > n ? q() : U(t, i, r[e ? n - i++ : i++]);
    });
  };
  f(tt, X);
  tt.prototype.get = function (t, e) {
    return void 0 === e || this.has(t) ? this._object[t] : e;
  };
  tt.prototype.has = function (t) {
    return this._object.hasOwnProperty(t);
  };
  tt.prototype.__iterate = function (t, e) {
    for (r = this._object, n = this._keys, i = n.length - 1, o = 0, void 0; o <= i; o++) {
      var r;
      var n;
      var i;
      var o;
      var a = n[e ? i - o : o];
      if (!1 === t(r[a], a, this)) return o + 1;
    }
    return o;
  };
  tt.prototype.__iterator = function (t, e) {
    var r = this._object;
    var n = this._keys;
    var i = n.length - 1;
    var o = 0;
    return new j(function () {
      var a = n[e ? i - o : o];
      return o++ > i ? q() : U(t, a, r[a]);
    });
  };
  tt.prototype[k] = !0;
  f(te, $);
  te.prototype.__iterateUncached = function (t, e) {
    if (e) return this.cacheResult().__iterate(t, e);
    var r;
    var n = W(this._iterable);
    var i = 0;
    if (H(n)) for (; !(r = n.next()).done && !1 !== t(r.value, i++, this););
    return i;
  };
  te.prototype.__iteratorUncached = function (t, e) {
    if (e) return this.cacheResult().__iterator(t, e);
    var r = W(this._iterable);
    if (!H(r)) return new j(q);
    var n = 0;
    return new j(function () {
      var e = r.next();
      return e.done ? e : U(t, n++, e.value);
    });
  };
  f(tr, $);
  tr.prototype.__iterateUncached = function (t, e) {
    if (e) return this.cacheResult().__iterate(t, e);
    for (n = this._iterator, i = this._iteratorCache, o = 0, void 0; o < i.length;) {
      var r;
      var n;
      var i;
      var o;
      if (!1 === t(i[o], o++, this)) return o;
    }
    for (; !(r = n.next()).done;) {
      var a = r.value;
      if (i[o] = a, !1 === t(a, o++, this)) break;
    }
    return o;
  };
  tr.prototype.__iteratorUncached = function (t, e) {
    if (e) return this.cacheResult().__iterator(t, e);
    var r = this._iterator;
    var n = this._iteratorCache;
    var i = 0;
    return new j(function () {
      if (i >= n.length) {
        var e = r.next();
        if (e.done) return e;
        n[i] = e.value;
      }
      return U(t, i, n[i++]);
    });
  };
  f(td, $);
  td.prototype.toString = function () {
    return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]";
  };
  td.prototype.get = function (t, e) {
    return this.has(t) ? this._value : e;
  };
  td.prototype.includes = function (t) {
    return tp(this._value, t);
  };
  td.prototype.slice = function (t, e) {
    var r = this.size;
    return R(t, e, r) ? this : new td(this._value, F(e, r, r) - F(t, r, 0));
  };
  td.prototype.reverse = function () {
    return this;
  };
  td.prototype.indexOf = function (t) {
    return tp(this._value, t) ? 0 : -1;
  };
  td.prototype.lastIndexOf = function (t) {
    return tp(this._value, t) ? this.size : -1;
  };
  td.prototype.__iterate = function (t, e) {
    for (var r = 0; r < this.size; r++) if (!1 === t(this._value, r, this)) return r + 1;
    return r;
  };
  td.prototype.__iterator = function (t, e) {
    var r = this;
    var n = 0;
    return new j(function () {
      return n < r.size ? U(t, n++, r._value) : q();
    });
  };
  td.prototype.equals = function (t) {
    return t instanceof td ? tp(this._value, t._value) : th(t);
  };
  f(ty, $);
  ty.prototype.toString = function () {
    return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (this._step > 1 ? " by " + this._step : "") + " ]";
  };
  ty.prototype.get = function (t, e) {
    return this.has(t) ? this._start + B(this, t) * this._step : e;
  };
  ty.prototype.includes = function (t) {
    var e = (t - this._start) / this._step;
    return e >= 0 && e < this.size && e === Math.floor(e);
  };
  ty.prototype.slice = function (t, e) {
    var r;
    return R(t, e, this.size) ? this : (t = F(t, this.size, 0), (e = F(e, r = this.size, r)) <= t) ? new ty(0, 0) : new ty(this.get(t, this._end), this.get(e, this._end), this._step);
  };
  ty.prototype.indexOf = function (t) {
    var e = t - this._start;
    if (e % this._step == 0) {
      var r = e / this._step;
      if (r >= 0 && r < this.size) return r;
    }
    return -1;
  };
  ty.prototype.lastIndexOf = function (t) {
    return this.indexOf(t);
  };
  ty.prototype.__iterate = function (t, e) {
    for (r = this.size - 1, n = this._step, i = e ? this._start + r * n : this._start, o = 0, void 0; o <= r; o++) {
      var r;
      var n;
      var i;
      var o;
      if (!1 === t(i, o, this)) return o + 1;
      i += e ? -n : n;
    }
    return o;
  };
  ty.prototype.__iterator = function (t, e) {
    var r = this.size - 1;
    var n = this._step;
    var i = e ? this._start + r * n : this._start;
    var o = 0;
    return new j(function () {
      var a = i;
      i += e ? -n : n;
      return o > r ? q() : U(t, o++, a);
    });
  };
  ty.prototype.equals = function (t) {
    return t instanceof ty ? this._start === t._start && this._end === t._end && this._step === t._step : th(this, t);
  };
  f(tv, p);
  f(tm, tv);
  f(t_, tv);
  f(tb, tv);
  tv.Keyed = tm;
  tv.Indexed = t_;
  tv.Set = tb;
  var tS = "function" == typeof Math.imul && -2 === Math.imul(0xffffffff, 2) ? Math.imul : function (t, e) {
    var r = 65535 & (t |= 0);
    var n = 65535 & (e |= 0);
    return r * n + ((t >>> 16) * n + r * (e >>> 16) << 16 >>> 0) | 0;
  };
  function tw(t) {
    return t >>> 1 & 0x40000000 | 0xbfffffff & t;
  }
  function tx(t) {
    if (!1 === t || null == t || "function" == typeof t.valueOf && (!1 === (t = t.valueOf()) || null == t)) return 0;
    if (!0 === t) return 1;
    var e;
    var r;
    var i = typeof t;
    if ("number" === i) {
      var o = 0 | t;
      for (o !== t && (o ^= 0xffffffff * t); t > 0xffffffff;) {
        t /= 0xffffffff;
        o ^= t;
      }
      return tw(o);
    }
    if ("string" === i) return t.length > tT ? (void 0 === (r = tI[e = t]) && (r = tk(e), tA === tM && (tA = 0, tI = {}), tA++, tI[e] = r), r) : tk(t);
    if ("function" == typeof t.hashCode) return t.hashCode();
    if ("object" === i) return function (t) {
      var e;
      if (tO && void 0 !== (e = n.get(t)) || void 0 !== (e = t[tK]) || !tE && (void 0 !== (e = t.propertyIsEnumerable && t.propertyIsEnumerable[tK]) || void 0 !== (e = function (t) {
        if (t && t.nodeType > 0) switch (t.nodeType) {
          case 1:
            return t.uniqueID;
          case 9:
            return t.documentElement && t.documentElement.uniqueID;
        }
      }(t)))) return e;
      if (e = ++tD, 0x40000000 & tD && (tD = 0), tO) n.set(t, e);else if (void 0 !== tC && !1 === tC(t)) throw Error("Non-extensible objects are not allowed as keys.");else if (tE) Object.defineProperty(t, tK, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: e
      });else if (void 0 !== t.propertyIsEnumerable && t.propertyIsEnumerable === t.constructor.prototype.propertyIsEnumerable) {
        t.propertyIsEnumerable = function () {
          return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
        };
        t.propertyIsEnumerable[tK] = e;
      } else if (void 0 !== t.nodeType) t[tK] = e;else throw Error("Unable to set a non-enumerable property on object.");
      return e;
    }(t);
    if ("function" == typeof t.toString) return tk(t.toString());
    throw Error("Value type " + i + " cannot be hashed.");
  }
  function tk(t) {
    for (e = 0, r = 0, void 0; r < t.length; r++) {
      var e;
      var r;
      e = 31 * e + t.charCodeAt(r) | 0;
    }
    return tw(e);
  }
  var tC = Object.isExtensible;
  var tE = function () {
    try {
      Object.defineProperty({}, "@", {});
      return !0;
    } catch (t) {
      return !1;
    }
  }();
  var tO = "function" == typeof WeakMap;
  tO && (n = new WeakMap());
  var tD = 0;
  var tK = "__immutablehash__";
  "function" == typeof Symbol && (tK = Symbol(tK));
  var tT = 16;
  var tM = 255;
  var tA = 0;
  var tI = {};
  function tB(t) {
    tg(t !== 1 / 0, "Cannot perform this action with an infinite size.");
  }
  function tL(t) {
    return null == t ? tG() : tR(t) && !b(t) ? t : tG().withMutations(function (e) {
      var r = h(t);
      tB(r.size);
      r.forEach(function (t, r) {
        return e.set(r, t);
      });
    });
  }
  function tR(t) {
    return !!(t && t[tF]);
  }
  f(tL, tm);
  tL.prototype.toString = function () {
    return this.__toString("Map {", "}");
  };
  tL.prototype.get = function (t, e) {
    return this._root ? this._root.get(0, void 0, t, e) : e;
  };
  tL.prototype.set = function (t, e) {
    return tX(this, t, e);
  };
  tL.prototype.setIn = function (t, e) {
    return this.updateIn(t, E, function () {
      return e;
    });
  };
  tL.prototype.remove = function (t) {
    return tX(this, t, E);
  };
  tL.prototype.deleteIn = function (t) {
    return this.updateIn(t, function () {
      return E;
    });
  };
  tL.prototype.update = function (t, e, r) {
    return 1 == $$arguments.length ? t(this) : this.updateIn([t], e, r);
  };
  tL.prototype.updateIn = function (t, e, r) {
    r || (r = e, e = void 0);
    var n = function t(e, r, n, i) {
      var o = e === E;
      var a = r.next();
      if (a.done) {
        var s = o ? n : e;
        var u = i(s);
        return u === s ? e : u;
      }
      tg(o || e && e.set, "invalid keyPath");
      var c = a.value;
      var l = o ? E : e.get(c, E);
      var f = t(l, r, n, i);
      return f === l ? e : f === E ? e.remove(c) : (o ? tG() : e).set(c, f);
    }(this, ez(t), e, r);
    return n === E ? void 0 : n;
  };
  tL.prototype.clear = function () {
    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = void 0, this.__altered = !0, this) : tG();
  };
  tL.prototype.merge = function () {
    return tQ(this, void 0, arguments);
  };
  tL.prototype.mergeWith = function (t) {
    var e = l.call(arguments, 1);
    return tQ(this, t, e);
  };
  tL.prototype.mergeIn = function (t) {
    var e = l.call(arguments, 1);
    return this.updateIn(t, tG(), function (t) {
      return "function" == typeof t.merge ? t.merge.apply(t, e) : e[e.length - 1];
    });
  };
  tL.prototype.mergeDeep = function () {
    return tQ(this, t0, arguments);
  };
  tL.prototype.mergeDeepWith = function (t) {
    var e = l.call(arguments, 1);
    return tQ(this, t1(t), e);
  };
  tL.prototype.mergeDeepIn = function (t) {
    var e = l.call(arguments, 1);
    return this.updateIn(t, tG(), function (t) {
      return "function" == typeof t.mergeDeep ? t.mergeDeep.apply(t, e) : e[e.length - 1];
    });
  };
  tL.prototype.sort = function (t) {
    return eh(eK(this, t));
  };
  tL.prototype.sortBy = function (t, e) {
    return eh(eK(this, e, t));
  };
  tL.prototype.withMutations = function (t) {
    var e = this.asMutable();
    t(e);
    return e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this;
  };
  tL.prototype.asMutable = function () {
    return this.__ownerID ? this : this.__ensureOwner(new M());
  };
  tL.prototype.asImmutable = function () {
    return this.__ensureOwner();
  };
  tL.prototype.wasAltered = function () {
    return this.__altered;
  };
  tL.prototype.__iterator = function (t, e) {
    return new tH(this, t, e);
  };
  tL.prototype.__iterate = function (t, e) {
    var r = this;
    var n = 0;
    this._root && this._root.iterate(function (e) {
      n++;
      return t(e[1], e[0], r);
    }, e);
    return n;
  };
  tL.prototype.__ensureOwner = function (t) {
    return t === this.__ownerID ? this : t ? tJ(this.size, this._root, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this);
  };
  tL.isMap = tR;
  var tF = "@@__IMMUTABLE_MAP__@@";
  var tN = tL.prototype;
  function tP(t, e) {
    this.ownerID = t;
    this.entries = e;
  }
  function tz(t, e, r) {
    this.ownerID = t;
    this.bitmap = e;
    this.nodes = r;
  }
  function tj(t, e, r) {
    this.ownerID = t;
    this.count = e;
    this.nodes = r;
  }
  function tU(t, e, r) {
    this.ownerID = t;
    this.keyHash = e;
    this.entries = r;
  }
  function tq(t, e, r) {
    this.ownerID = t;
    this.keyHash = e;
    this.entry = r;
  }
  function tH(t, e, r) {
    this._type = e;
    this._reverse = r;
    this._stack = t._root && tV(t._root);
  }
  function tW(t, e) {
    return U(t, e[0], e[1]);
  }
  function tV(t, e) {
    return {
      node: t,
      index: 0,
      __prev: e
    };
  }
  function tJ(t, e, r, n) {
    var i = Object.create(tN);
    i.size = t;
    i._root = e;
    i.__ownerID = r;
    i.__hash = n;
    i.__altered = !1;
    return i;
  }
  function tG() {
    return i || (i = tJ(0));
  }
  function tX(t, e, r) {
    if (t._root) {
      var n;
      var i;
      var o = K(O);
      var a = K(D);
      if (n = t$(t._root, t.__ownerID, 0, void 0, e, r, o, a), !a.value) return t;
      i = t.size + (o.value ? r === E ? -1 : 1 : 0);
    } else {
      if (r === E) return t;
      i = 1;
      n = new tP(t.__ownerID, [[e, r]]);
    }
    return t.__ownerID ? (t.size = i, t._root = n, t.__hash = void 0, t.__altered = !0, t) : n ? tJ(i, n) : tG();
  }
  function t$(t, e, r, n, i, o, a, s) {
    return t ? t.update(e, r, n, i, o, a, s) : o === E ? t : (T(s), T(a), new tq(e, n, [i, o]));
  }
  function tY(t) {
    return t.constructor === tq || t.constructor === tU;
  }
  function tZ(t, e, r, n, i) {
    if (t.keyHash === n) return new tU(e, n, [t.entry, i]);
    var o;
    var a = (0 === r ? t.keyHash : t.keyHash >>> r) & 31;
    var s = (0 === r ? n : n >>> r) & 31;
    var u = a === s ? [tZ(t, e, r + 5, n, i)] : (o = new tq(e, n, i), a < s ? [t, o] : [o, t]);
    return new tz(e, 1 << a | 1 << s, u);
  }
  function tQ(t, e, r) {
    for (n = [], i = 0, void 0; i < r.length; i++) {
      var n;
      var i;
      var o = r[i];
      var a = h(o);
      y(o) || (a = a.map(function (t) {
        return tl(t);
      }));
      n.push(a);
    }
    return t2(t, e, n);
  }
  function t0(t, e, r) {
    return t && t.mergeDeep && y(e) ? t.mergeDeep(e) : tp(t, e) ? t : e;
  }
  function t1(t) {
    return function (e, r, n) {
      if (e && e.mergeDeepWith && y(r)) return e.mergeDeepWith(t, r);
      var i = t(e, r, n);
      return tp(e, i) ? e : i;
    };
  }
  function t2(t, e, r) {
    return 0 === (r = r.filter(function (t) {
      return 0 !== t.size;
    })).length ? t : 0 !== t.size || t.__ownerID || 1 !== r.length ? t.withMutations(function (t) {
      for (n = e ? function (r, n) {
        t.update(n, E, function (t) {
          return t === E ? r : e(t, r, n);
        });
      } : function (e, r) {
        t.set(r, e);
      }, i = 0, void 0; i < r.length; i++) {
        var n;
        var i;
        r[i].forEach(n);
      }
    }) : t.constructor(r[0]);
  }
  function t5(t) {
    t -= t >> 1 & 0x55555555;
    t = (t = (0x33333333 & t) + (t >> 2 & 0x33333333)) + (t >> 4) & 0xf0f0f0f;
    t += t >> 8;
    return 127 & (t += t >> 16);
  }
  function t6(t, e, r, n) {
    var i = n ? t : A(t);
    i[e] = r;
    return i;
  }
  tN[tF] = !0;
  tN[C] = tN.remove;
  tN.removeIn = tN.deleteIn;
  tP.prototype.get = function (t, e, r, n) {
    for (i = this.entries, o = 0, a = i.length, void 0; o < a; o++) {
      var i;
      var o;
      var a;
      if (tp(r, i[o][0])) return i[o][1];
    }
    return n;
  };
  tP.prototype.update = function (t, e, r, n, i, o, a) {
    for (s = i === E, u = this.entries, c = 0, l = u.length, void 0; c < l && !tp(n, u[c][0]); c++) {
      var s;
      var u;
      var c;
      var l;
      ;
    }
    var f = c < l;
    if (f ? u[c][1] === i : s) return this;
    if (T(a), (s || !f) && T(o), !s || 1 !== u.length) {
      if (!f && !s && u.length >= t3) return function (t, e, r, n) {
        t || (t = new M());
        for (i = new tq(t, tx(r), [r, n]), o = 0, void 0; o < e.length; o++) {
          var i;
          var o;
          var a = e[o];
          i = i.update(t, 0, void 0, a[0], a[1]);
        }
        return i;
      }(t, u, n, i);
      var p = t && t === this.ownerID;
      var h = p ? u : A(u);
      return (f ? s ? c === l - 1 ? h.pop() : h[c] = h.pop() : h[c] = [n, i] : h.push([n, i]), p) ? (this.entries = h, this) : new tP(t, h);
    }
  };
  tz.prototype.get = function (t, e, r, n) {
    void 0 === e && (e = tx(r));
    var i = 1 << ((0 === t ? e : e >>> t) & 31);
    var o = this.bitmap;
    return (o & i) == 0 ? n : this.nodes[t5(o & i - 1)].get(t + 5, e, r, n);
  };
  tz.prototype.update = function (t, e, r, n, i, o, a) {
    void 0 === r && (r = tx(n));
    var s = (0 === e ? r : r >>> e) & 31;
    var u = 1 << s;
    var c = this.bitmap;
    var l = (c & u) != 0;
    if (!l && i === E) return this;
    var f = t5(c & u - 1);
    var p = this.nodes;
    var h = l ? p[f] : void 0;
    var d = t$(h, t, e + 5, r, n, i, o, a);
    if (d === h) return this;
    if (!l && d && p.length >= t4) return function (t, e, r, n, i) {
      for (o = 0, a = Array(32), s = 0, void 0; 0 !== r; s++, r >>>= 1) {
        var o;
        var a;
        var s;
        a[s] = 1 & r ? e[o++] : void 0;
      }
      a[n] = i;
      return new tj(t, o + 1, a);
    }(t, p, c, s, d);
    if (l && !d && 2 === p.length && tY(p[1 ^ f])) return p[1 ^ f];
    if (l && d && 1 === p.length && tY(d)) return d;
    var g = t && t === this.ownerID;
    var y = l ? d ? c : c ^ u : c | u;
    var v = l ? d ? t6(p, f, d, g) : function (t, e, r) {
      var n = t.length - 1;
      if (r && e === n) {
        t.pop();
        return t;
      }
      for (i = Array(n), o = 0, a = 0, void 0; a < n; a++) {
        var i;
        var o;
        var a;
        a === e && (o = 1);
        i[a] = t[a + o];
      }
      return i;
    }(p, f, g) : function (t, e, r, n) {
      var i = t.length + 1;
      if (n && e + 1 === i) {
        t[e] = r;
        return t;
      }
      for (o = Array(i), a = 0, s = 0, void 0; s < i; s++) {
        var o;
        var a;
        var s;
        s === e ? (o[s] = r, a = -1) : o[s] = t[s + a];
      }
      return o;
    }(p, f, d, g);
    return g ? (this.bitmap = y, this.nodes = v, this) : new tz(t, y, v);
  };
  tj.prototype.get = function (t, e, r, n) {
    void 0 === e && (e = tx(r));
    var i = (0 === t ? e : e >>> t) & 31;
    var o = this.nodes[i];
    return o ? o.get(t + 5, e, r, n) : n;
  };
  tj.prototype.update = function (t, e, r, n, i, o, a) {
    void 0 === r && (r = tx(n));
    var s = (0 === e ? r : r >>> e) & 31;
    var u = i === E;
    var c = this.nodes;
    var l = c[s];
    if (u && !l) return this;
    var f = t$(l, t, e + 5, r, n, i, o, a);
    if (f === l) return this;
    var p = this.count;
    if (l) {
      if (!f && --p < t7) return function (t, e, r, n) {
        for (i = 0, o = 0, a = Array(r), s = 0, u = 1, c = e.length, void 0; s < c; s++, u <<= 1) {
          var i;
          var o;
          var a;
          var s;
          var u;
          var c;
          var l = e[s];
          void 0 !== l && s !== n && (i |= u, a[o++] = l);
        }
        return new tz(t, i, a);
      }(t, c, p, s);
    } else p++;
    var h = t && t === this.ownerID;
    var d = t6(c, s, f, h);
    return h ? (this.count = p, this.nodes = d, this) : new tj(t, p, d);
  };
  tU.prototype.get = function (t, e, r, n) {
    for (i = this.entries, o = 0, a = i.length, void 0; o < a; o++) {
      var i;
      var o;
      var a;
      if (tp(r, i[o][0])) return i[o][1];
    }
    return n;
  };
  tU.prototype.update = function (t, e, r, n, i, o, a) {
    void 0 === r && (r = tx(n));
    var s = i === E;
    if (r !== this.keyHash) return s ? this : (T(a), T(o), tZ(this, t, e, r, [n, i]));
    for (u = this.entries, c = 0, l = u.length, void 0; c < l && !tp(n, u[c][0]); c++) {
      var u;
      var c;
      var l;
      ;
    }
    var f = c < l;
    if (f ? u[c][1] === i : s) return this;
    if (T(a), (s || !f) && T(o), s && 2 === l) return new tq(t, this.keyHash, u[1 ^ c]);
    var p = t && t === this.ownerID;
    var h = p ? u : A(u);
    return (f ? s ? c === l - 1 ? h.pop() : h[c] = h.pop() : h[c] = [n, i] : h.push([n, i]), p) ? (this.entries = h, this) : new tU(t, this.keyHash, h);
  };
  tq.prototype.get = function (t, e, r, n) {
    return tp(r, this.entry[0]) ? this.entry[1] : n;
  };
  tq.prototype.update = function (t, e, r, n, i, o, a) {
    var s = i === E;
    var u = tp(n, this.entry[0]);
    if (u ? i === this.entry[1] : s) return this;
    if (T(a), s) {
      T(o);
      return;
    }
    return u ? t && t === this.ownerID ? (this.entry[1] = i, this) : new tq(t, this.keyHash, [n, i]) : (T(o), tZ(this, t, e, tx(n), [n, i]));
  };
  tP.prototype.iterate = tU.prototype.iterate = function (t, e) {
    for (r = this.entries, n = 0, i = r.length - 1, void 0; n <= i; n++) {
      var r;
      var n;
      var i;
      if (!1 === t(r[e ? i - n : n])) return !1;
    }
  };
  tz.prototype.iterate = tj.prototype.iterate = function (t, e) {
    for (r = this.nodes, n = 0, i = r.length - 1, void 0; n <= i; n++) {
      var r;
      var n;
      var i;
      var o = r[e ? i - n : n];
      if (o && !1 === o.iterate(t, e)) return !1;
    }
  };
  tq.prototype.iterate = function (t, e) {
    return t(this.entry);
  };
  f(tH, j);
  tH.prototype.next = function () {
    for (t = this._type, e = this._stack, void 0; e;) {
      var t;
      var e;
      var r;
      var n = e.node;
      var i = e.index++;
      if (n.entry) {
        if (0 === i) return tW(t, n.entry);
      } else if (n.entries) {
        if (i <= (r = n.entries.length - 1)) return tW(t, n.entries[this._reverse ? r - i : i]);
      } else if (i <= (r = n.nodes.length - 1)) {
        var o = n.nodes[this._reverse ? r - i : i];
        if (o) {
          if (o.entry) return tW(t, o.entry);
          e = this._stack = tV(o, e);
        }
        continue;
      }
      e = this._stack = this._stack.__prev;
    }
    return q();
  };
  var t3 = 8;
  var t4 = 16;
  var t7 = 8;
  function t8(t) {
    var e = ea();
    if (null == t) return e;
    if (t9(t)) return t;
    var r = d(t);
    var n = r.size;
    return 0 === n ? e : (tB(n), n > 0 && n < 32) ? eo(0, n, 5, null, new er(r.toArray())) : e.withMutations(function (t) {
      t.setSize(n);
      r.forEach(function (e, r) {
        return t.set(r, e);
      });
    });
  }
  function t9(t) {
    return !!(t && t[et]);
  }
  f(t8, t_);
  t8.of = function () {
    return this(arguments);
  };
  t8.prototype.toString = function () {
    return this.__toString("List [", "]");
  };
  t8.prototype.get = function (t, e) {
    if ((t = B(this, t)) >= 0 && t < this.size) {
      var r = ec(this, t += this._origin);
      return r && r.array[31 & t];
    }
    return e;
  };
  t8.prototype.set = function (t, e) {
    return function (t, e, r) {
      if ((e = B(t, e)) != e) return t;
      if (e >= t.size || e < 0) return t.withMutations(function (t) {
        e < 0 ? el(t, e).set(0, r) : el(t, 0, e + 1).set(e, r);
      });
      e += t._origin;
      var n = t._tail;
      var i = t._root;
      var o = K(D);
      return (e >= ep(t._capacity) ? n = es(n, t.__ownerID, 0, e, r, o) : i = es(i, t.__ownerID, t._level, e, r, o), o.value) ? t.__ownerID ? (t._root = i, t._tail = n, t.__hash = void 0, t.__altered = !0, t) : eo(t._origin, t._capacity, t._level, i, n) : t;
    }(this, t, e);
  };
  t8.prototype.remove = function (t) {
    return this.has(t) ? 0 === t ? this.shift() : t === this.size - 1 ? this.pop() : this.splice(t, 1) : this;
  };
  t8.prototype.insert = function (t, e) {
    return this.splice(t, 0, e);
  };
  t8.prototype.clear = function () {
    return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, this._level = 5, this._root = this._tail = null, this.__hash = void 0, this.__altered = !0, this) : ea();
  };
  t8.prototype.push = function () {
    var t = arguments;
    var e = this.size;
    return this.withMutations(function (r) {
      el(r, 0, e + t.length);
      for (var n = 0; n < t.length; n++) r.set(e + n, t[n]);
    });
  };
  t8.prototype.pop = function () {
    return el(this, 0, -1);
  };
  t8.prototype.unshift = function () {
    var t = arguments;
    return this.withMutations(function (e) {
      el(e, -t.length);
      for (var r = 0; r < t.length; r++) e.set(r, t[r]);
    });
  };
  t8.prototype.shift = function () {
    return el(this, 1);
  };
  t8.prototype.merge = function () {
    return ef(this, void 0, arguments);
  };
  t8.prototype.mergeWith = function (t) {
    var e = l.call(arguments, 1);
    return ef(this, t, e);
  };
  t8.prototype.mergeDeep = function () {
    return ef(this, t0, arguments);
  };
  t8.prototype.mergeDeepWith = function (t) {
    var e = l.call(arguments, 1);
    return ef(this, t1(t), e);
  };
  t8.prototype.setSize = function (t) {
    return el(this, 0, t);
  };
  t8.prototype.slice = function (t, e) {
    var r = this.size;
    return R(t, e, r) ? this : el(this, F(t, r, 0), F(e, r, r));
  };
  t8.prototype.__iterator = function (t, e) {
    var r = 0;
    var n = ei(this, e);
    return new j(function () {
      var e = n();
      return e === en ? q() : U(t, r++, e);
    });
  };
  t8.prototype.__iterate = function (t, e) {
    for (n = 0, i = ei(this, e), void 0; (r = i()) !== en && !1 !== t(r, n++, this);) {
      var r;
      var n;
      var i;
      ;
    }
    return n;
  };
  t8.prototype.__ensureOwner = function (t) {
    return t === this.__ownerID ? this : t ? eo(this._origin, this._capacity, this._level, this._root, this._tail, t, this.__hash) : (this.__ownerID = t, this);
  };
  t8.isList = t9;
  var et = "@@__IMMUTABLE_LIST__@@";
  var ee = t8.prototype;
  function er(t, e) {
    this.array = t;
    this.ownerID = e;
  }
  ee[et] = !0;
  ee[C] = ee.remove;
  ee.setIn = tN.setIn;
  ee.deleteIn = ee.removeIn = tN.removeIn;
  ee.update = tN.update;
  ee.updateIn = tN.updateIn;
  ee.mergeIn = tN.mergeIn;
  ee.mergeDeepIn = tN.mergeDeepIn;
  ee.withMutations = tN.withMutations;
  ee.asMutable = tN.asMutable;
  ee.asImmutable = tN.asImmutable;
  ee.wasAltered = tN.wasAltered;
  er.prototype.removeBefore = function (t, e, r) {
    if (r === e ? 1 << e : 0 === this.array.length) return this;
    var n;
    var i = r >>> e & 31;
    if (i >= this.array.length) return new er([], t);
    var o = 0 === i;
    if (e > 0) {
      var a = this.array[i];
      if ((n = a && a.removeBefore(t, e - 5, r)) === a && o) return this;
    }
    if (o && !n) return this;
    var s = eu(this, t);
    if (!o) for (var u = 0; u < i; u++) s.array[u] = void 0;
    n && (s.array[i] = n);
    return s;
  };
  er.prototype.removeAfter = function (t, e, r) {
    if (r === (e ? 1 << e : 0) || 0 === this.array.length) return this;
    var n;
    var i = r - 1 >>> e & 31;
    if (i >= this.array.length) return this;
    if (e > 0) {
      var o = this.array[i];
      if ((n = o && o.removeAfter(t, e - 5, r)) === o && i === this.array.length - 1) return this;
    }
    var a = eu(this, t);
    a.array.splice(i + 1);
    n && (a.array[i] = n);
    return a;
  };
  var en = {};
  function ei(t, e) {
    var r = t._origin;
    var n = t._capacity;
    var i = ep(n);
    var o = t._tail;
    return function t(a, s, u) {
      var c;
      var l;
      var f;
      var p;
      var h;
      var d;
      var g;
      return 0 === s ? (c = u === i ? o && o.array : a && a.array, l = u > r ? 0 : r - u, (f = n - u) > 32 && (f = 32), function () {
        if (l === f) return en;
        var t = e ? --f : l++;
        return c && c[t];
      }) : (h = a && a.array, d = u > r ? 0 : r - u >> s, (g = (n - u >> s) + 1) > 32 && (g = 32), function () {
        for (;;) {
          if (p) {
            var r = p();
            if (r !== en) return r;
            p = null;
          }
          if (d === g) return en;
          var n = e ? --g : d++;
          p = t(h && h[n], s - 5, u + (n << s));
        }
      });
    }(t._root, t._level, 0);
  }
  function eo(t, e, r, n, i, o, a) {
    var s = Object.create(ee);
    s.size = e - t;
    s._origin = t;
    s._capacity = e;
    s._level = r;
    s._root = n;
    s._tail = i;
    s.__ownerID = o;
    s.__hash = a;
    s.__altered = !1;
    return s;
  }
  function ea() {
    return o || (o = eo(0, 0, 5));
  }
  function es(t, e, r, n, i, o) {
    var a;
    var s = n >>> r & 31;
    var u = t && s < t.array.length;
    if (!u && void 0 === i) return t;
    if (r > 0) {
      var c = t && t.array[s];
      var l = es(c, e, r - 5, n, i, o);
      return l === c ? t : ((a = eu(t, e)).array[s] = l, a);
    }
    return u && t.array[s] === i ? t : (T(o), a = eu(t, e), void 0 === i && s === a.array.length - 1 ? a.array.pop() : a.array[s] = i, a);
  }
  function eu(t, e) {
    return e && t && e === t.ownerID ? t : new er(t ? t.array.slice() : [], e);
  }
  function ec(t, e) {
    if (e >= ep(t._capacity)) return t._tail;
    if (e < 1 << t._level + 5) {
      for (r = t._root, n = t._level, void 0; r && n > 0;) {
        var r;
        var n;
        r = r.array[e >>> n & 31];
        n -= 5;
      }
      return r;
    }
  }
  function el(t, e, r) {
    void 0 !== e && (e |= 0);
    void 0 !== r && (r |= 0);
    var n = t.__ownerID || new M();
    var i = t._origin;
    var o = t._capacity;
    var a = i + e;
    var s = void 0 === r ? o : r < 0 ? o + r : i + r;
    if (a === i && s === o) return t;
    if (a >= s) return t.clear();
    for (u = t._level, c = t._root, l = 0, void 0; a + l < 0;) {
      var u;
      var c;
      var l;
      c = new er(c && c.array.length ? [void 0, c] : [], n);
      u += 5;
      l += 1 << u;
    }
    l && (a += l, i += l, s += l, o += l);
    for (f = ep(o), p = ep(s), void 0; p >= 1 << u + 5;) {
      var f;
      var p;
      c = new er(c && c.array.length ? [c] : [], n);
      u += 5;
    }
    var h = t._tail;
    var d = p < f ? ec(t, s - 1) : p > f ? new er([], n) : h;
    if (h && p > f && a < o && h.array.length) {
      for (g = c = eu(c, n), y = u, void 0; y > 5; y -= 5) {
        var g;
        var y;
        var v = f >>> y & 31;
        g = g.array[v] = eu(g.array[v], n);
      }
      g.array[f >>> 5 & 31] = h;
    }
    if (s < o && (d = d && d.removeAfter(n, 0, s)), a >= p) {
      a -= p;
      s -= p;
      u = 5;
      c = null;
      d = d && d.removeBefore(n, 0, a);
    } else if (a > i || p < f) {
      for (l = 0; c;) {
        var m = a >>> u & 31;
        if (m !== p >>> u & 31) break;
        m && (l += (1 << u) * m);
        u -= 5;
        c = c.array[m];
      }
      c && a > i && (c = c.removeBefore(n, u, a - l));
      c && p < f && (c = c.removeAfter(n, u, p - l));
      l && (a -= l, s -= l);
    }
    return t.__ownerID ? (t.size = s - a, t._origin = a, t._capacity = s, t._level = u, t._root = c, t._tail = d, t.__hash = void 0, t.__altered = !0, t) : eo(a, s, u, c, d);
  }
  function ef(t, e, r) {
    for (n = [], i = 0, o = 0, void 0; o < r.length; o++) {
      var n;
      var i;
      var o;
      var a = r[o];
      var s = d(a);
      s.size > i && (i = s.size);
      y(a) || (s = s.map(function (t) {
        return tl(t);
      }));
      n.push(s);
    }
    i > t.size && (t = t.setSize(i));
    return t2(t, e, n);
  }
  function ep(t) {
    return t < 32 ? 0 : t - 1 >>> 5 << 5;
  }
  function eh(t) {
    return null == t ? ey() : ed(t) ? t : ey().withMutations(function (e) {
      var r = h(t);
      tB(r.size);
      r.forEach(function (t, r) {
        return e.set(r, t);
      });
    });
  }
  function ed(t) {
    return tR(t) && b(t);
  }
  function eg(t, e, r, n) {
    var i = Object.create(eh.prototype);
    i.size = t ? t.size : 0;
    i._map = t;
    i._list = e;
    i.__ownerID = r;
    i.__hash = n;
    return i;
  }
  function ey() {
    return a || (a = eg(tG(), ea()));
  }
  function ev(t, e, r) {
    var n;
    var i;
    var o = t._map;
    var a = t._list;
    var s = o.get(e);
    var u = void 0 !== s;
    if (r === E) {
      if (!u) return t;
      a.size >= 32 && a.size >= 2 * o.size ? (n = (i = a.filter(function (t, e) {
        return void 0 !== t && s !== e;
      })).toKeyedSeq().map(function (t) {
        return t[0];
      }).flip().toMap(), t.__ownerID && (n.__ownerID = i.__ownerID = t.__ownerID)) : (n = o.remove(e), i = s === a.size - 1 ? a.pop() : a.set(s, void 0));
    } else if (u) {
      if (r === a.get(s)[1]) return t;
      n = o;
      i = a.set(s, [e, r]);
    } else {
      n = o.set(e, a.size);
      i = a.set(a.size, [e, r]);
    }
    return t.__ownerID ? (t.size = n.size, t._map = n, t._list = i, t.__hash = void 0, t) : eg(n, i);
  }
  function em(t, e) {
    this._iter = t;
    this._useKeys = e;
    this.size = t.size;
  }
  function e_(t) {
    this._iter = t;
    this.size = t.size;
  }
  function eb(t) {
    this._iter = t;
    this.size = t.size;
  }
  function eS(t) {
    this._iter = t;
    this.size = t.size;
  }
  function ew(t) {
    var e = eF(t);
    e._iter = t;
    e.size = t.size;
    e.flip = function () {
      return t;
    };
    e.reverse = function () {
      var e = t.reverse.apply(this);
      e.flip = function () {
        return t.reverse();
      };
      return e;
    };
    e.has = function (e) {
      return t.includes(e);
    };
    e.includes = function (e) {
      return t.has(e);
    };
    e.cacheResult = eN;
    e.__iterateUncached = function (e, r) {
      var n = this;
      return t.__iterate(function (t, r) {
        return !1 !== e(r, t, n);
      }, r);
    };
    e.__iteratorUncached = function (e, r) {
      if (2 === e) {
        var n = t.__iterator(e, r);
        return new j(function () {
          var t = n.next();
          if (!t.done) {
            var e = t.value[0];
            t.value[0] = t.value[1];
            t.value[1] = e;
          }
          return t;
        });
      }
      return t.__iterator(1 === e ? 0 : 1, r);
    };
    return e;
  }
  function ex(t, e, r) {
    var n = eF(t);
    n.size = t.size;
    n.has = function (e) {
      return t.has(e);
    };
    n.get = function (n, i) {
      var o = t.get(n, E);
      return o === E ? i : e.call(r, o, n, t);
    };
    n.__iterateUncached = function (n, i) {
      var o = this;
      return t.__iterate(function (t, i, a) {
        return !1 !== n(e.call(r, t, i, a), i, o);
      }, i);
    };
    n.__iteratorUncached = function (n, i) {
      var o = t.__iterator(2, i);
      return new j(function () {
        var i = o.next();
        if (i.done) return i;
        var a = i.value;
        var s = a[0];
        return U(n, s, e.call(r, a[1], s, t), i);
      });
    };
    return n;
  }
  function ek(t, e) {
    var r = eF(t);
    r._iter = t;
    r.size = t.size;
    r.reverse = function () {
      return t;
    };
    t.flip && (r.flip = function () {
      var e = ew(t);
      e.reverse = function () {
        return t.flip();
      };
      return e;
    });
    r.get = function (r, n) {
      return t.get(e ? r : -1 - r, n);
    };
    r.has = function (r) {
      return t.has(e ? r : -1 - r);
    };
    r.includes = function (e) {
      return t.includes(e);
    };
    r.cacheResult = eN;
    r.__iterate = function (e, r) {
      var n = this;
      return t.__iterate(function (t, r) {
        return e(t, r, n);
      }, !r);
    };
    r.__iterator = function (e, r) {
      return t.__iterator(e, !r);
    };
    return r;
  }
  function eC(t, e, r, n) {
    var i = eF(t);
    n && (i.has = function (n) {
      var i = t.get(n, E);
      return i !== E && !!e.call(r, i, n, t);
    }, i.get = function (n, i) {
      var o = t.get(n, E);
      return o !== E && e.call(r, o, n, t) ? o : i;
    });
    i.__iterateUncached = function (i, o) {
      var a = this;
      var s = 0;
      t.__iterate(function (t, o, u) {
        if (e.call(r, t, o, u)) {
          s++;
          return i(t, n ? o : s - 1, a);
        }
      }, o);
      return s;
    };
    i.__iteratorUncached = function (i, o) {
      var a = t.__iterator(2, o);
      var s = 0;
      return new j(function () {
        for (;;) {
          var o = a.next();
          if (o.done) return o;
          var u = o.value;
          var c = u[0];
          var l = u[1];
          if (e.call(r, l, c, t)) return U(i, n ? c : s++, l, o);
        }
      });
    };
    return i;
  }
  function eE(t, e, r, n) {
    var i;
    var o = t.size;
    if (void 0 !== e && (e |= 0), void 0 !== r && (r |= 0), R(e, r, o)) return t;
    var a = F(e, o, 0);
    var s = F(r, o, o);
    if (a != a || s != s) return eE(t.toSeq().cacheResult(), e, r, n);
    var u = s - a;
    u == u && (i = u < 0 ? 0 : u);
    var c = eF(t);
    c.size = 0 === i ? i : t.size && i || void 0;
    !n && tn(t) && i >= 0 && (c.get = function (e, r) {
      return (e = B(this, e)) >= 0 && e < i ? t.get(e + a, r) : r;
    });
    c.__iterateUncached = function (e, r) {
      var o = this;
      if (0 === i) return 0;
      if (r) return this.cacheResult().__iterate(e, r);
      var s = 0;
      var u = !0;
      var c = 0;
      t.__iterate(function (t, r) {
        if (!(u && (u = s++ < a))) {
          c++;
          return !1 !== e(t, n ? r : c - 1, o) && c !== i;
        }
      });
      return c;
    };
    c.__iteratorUncached = function (e, r) {
      if (0 !== i && r) return this.cacheResult().__iterator(e, r);
      var o = 0 !== i && t.__iterator(e, r);
      var s = 0;
      var u = 0;
      return new j(function () {
        for (; s++ < a;) o.next();
        if (++u > i) return q();
        var t = o.next();
        return n || 1 === e ? t : 0 === e ? U(e, u - 1, void 0, t) : U(e, u - 1, t.value[1], t);
      });
    };
    return c;
  }
  function eO(t, e, r, n) {
    var i = eF(t);
    i.__iterateUncached = function (i, o) {
      var a = this;
      if (o) return this.cacheResult().__iterate(i, o);
      var s = !0;
      var u = 0;
      t.__iterate(function (t, o, c) {
        if (!(s && (s = e.call(r, t, o, c)))) {
          u++;
          return i(t, n ? o : u - 1, a);
        }
      });
      return u;
    };
    i.__iteratorUncached = function (i, o) {
      var a = this;
      if (o) return this.cacheResult().__iterator(i, o);
      var s = t.__iterator(2, o);
      var u = !0;
      var c = 0;
      return new j(function () {
        var t;
        var o;
        var l;
        do {
          if ((t = s.next()).done) {
            if (n || 1 === i) return t;
            if (0 === i) return U(i, c++, void 0, t);
            return U(i, c++, t.value[1], t);
          }
          var f = t.value;
          o = f[0];
          l = f[1];
          u && (u = e.call(r, l, o, a));
        } while (u);
        return 2 === i ? t : U(i, o, l, t);
      });
    };
    return i;
  }
  function eD(t, e, r) {
    var n = eF(t);
    n.__iterateUncached = function (n, i) {
      var o = 0;
      var a = !1;
      (function t(s, u) {
        var c = this;
        s.__iterate(function (i, s) {
          (!e || u < e) && y(i) ? t(i, u + 1) : !1 === n(i, r ? s : o++, c) && (a = !0);
          return !a;
        }, i);
      })(t, 0);
      return o;
    };
    n.__iteratorUncached = function (n, i) {
      var o = t.__iterator(n, i);
      var a = [];
      var s = 0;
      return new j(function () {
        for (; o;) {
          var t = o.next();
          if (!1 !== t.done) {
            o = a.pop();
            continue;
          }
          var u = t.value;
          if (2 === n && (u = u[1]), !((!e || a.length < e) && y(u))) return r ? t : U(n, s++, u, t);
          a.push(o);
          o = u.__iterator(n, i);
        }
        return q();
      });
    };
    return n;
  }
  function eK(t, e, r) {
    e || (e = eP);
    var n = v(t);
    var i = 0;
    var o = t.toSeq().map(function (e, n) {
      return [n, e, i++, r ? r(e, n, t) : e];
    }).toArray();
    o.sort(function (t, r) {
      return e(t[3], r[3]) || t[2] - r[2];
    }).forEach(n ? function (t, e) {
      o[e].length = 2;
    } : function (t, e) {
      o[e] = t[1];
    });
    return n ? X(o) : m(t) ? $(o) : Y(o);
  }
  function eT(t, e, r) {
    if (e || (e = eP), !r) return t.reduce(function (t, r) {
      return eM(e, t, r) ? r : t;
    });
    var n = t.toSeq().map(function (e, n) {
      return [e, r(e, n, t)];
    }).reduce(function (t, r) {
      return eM(e, t[1], r[1]) ? r : t;
    });
    return n && n[0];
  }
  function eM(t, e, r) {
    var n = t(r, e);
    return 0 === n && r !== e && (null == r || r != r) || n > 0;
  }
  function eA(t, e, r) {
    var n = eF(t);
    n.size = new Q(r).map(function (t) {
      return t.size;
    }).min();
    n.__iterate = function (t, e) {
      for (n = this.__iterator(1, e), i = 0, void 0; !(r = n.next()).done && !1 !== t(r.value, i++, this);) {
        var r;
        var n;
        var i;
        ;
      }
      return i;
    };
    n.__iteratorUncached = function (t, n) {
      var i = r.map(function (t) {
        t = p(t);
        return W(n ? t.reverse() : t);
      });
      var o = 0;
      var a = !1;
      return new j(function () {
        var r;
        return (a || (a = (r = i.map(function (t) {
          return t.next();
        })).some(function (t) {
          return t.done;
        })), a) ? q() : U(t, o++, e.apply(null, r.map(function (t) {
          return t.value;
        })));
      });
    };
    return n;
  }
  function eI(t, e) {
    return tn(t) ? e : t.constructor(e);
  }
  function eB(t) {
    if (t !== Object(t)) throw TypeError("Expected [K, V] tuple: " + t);
  }
  function eL(t) {
    tB(t.size);
    return I(t);
  }
  function eR(t) {
    return v(t) ? h : m(t) ? d : g;
  }
  function eF(t) {
    return Object.create((v(t) ? X : m(t) ? $ : Y).prototype);
  }
  function eN() {
    return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : G.prototype.cacheResult.call(this);
  }
  function eP(t, e) {
    return t > e ? 1 : t < e ? -1 : 0;
  }
  function ez(t) {
    var e = W(t);
    if (!e) {
      if (!J(t)) throw TypeError("Expected iterable or array-like: " + t);
      e = W(p(t));
    }
    return e;
  }
  function ej(t, e) {
    var r;
    var n = function (o) {
      if (o instanceof n) return o;
      if (!(this instanceof n)) return new n(o);
      if (!r) {
        r = !0;
        var a = Object.keys(t);
        (function (t, e) {
          try {
            e.forEach(eW.bind(void 0, t));
          } catch (t) {}
        })(i, a);
        i.size = a.length;
        i._name = e;
        i._keys = a;
        i._defaultValues = t;
      }
      this._map = tL(o);
    };
    var i = n.prototype = Object.create(eU);
    i.constructor = n;
    return n;
  }
  f(eh, tL);
  eh.of = function () {
    return this(arguments);
  };
  eh.prototype.toString = function () {
    return this.__toString("OrderedMap {", "}");
  };
  eh.prototype.get = function (t, e) {
    var r = this._map.get(t);
    return void 0 !== r ? this._list.get(r)[1] : e;
  };
  eh.prototype.clear = function () {
    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this) : ey();
  };
  eh.prototype.set = function (t, e) {
    return ev(this, t, e);
  };
  eh.prototype.remove = function (t) {
    return ev(this, t, E);
  };
  eh.prototype.wasAltered = function () {
    return this._map.wasAltered() || this._list.wasAltered();
  };
  eh.prototype.__iterate = function (t, e) {
    var r = this;
    return this._list.__iterate(function (e) {
      return e && t(e[1], e[0], r);
    }, e);
  };
  eh.prototype.__iterator = function (t, e) {
    return this._list.fromEntrySeq().__iterator(t, e);
  };
  eh.prototype.__ensureOwner = function (t) {
    if (t === this.__ownerID) return this;
    var e = this._map.__ensureOwner(t);
    var r = this._list.__ensureOwner(t);
    return t ? eg(e, r, t, this.__hash) : (this.__ownerID = t, this._map = e, this._list = r, this);
  };
  eh.isOrderedMap = ed;
  eh.prototype[k] = !0;
  eh.prototype[C] = eh.prototype.remove;
  f(em, X);
  em.prototype.get = function (t, e) {
    return this._iter.get(t, e);
  };
  em.prototype.has = function (t) {
    return this._iter.has(t);
  };
  em.prototype.valueSeq = function () {
    return this._iter.valueSeq();
  };
  em.prototype.reverse = function () {
    var t = this;
    var e = ek(this, !0);
    this._useKeys || (e.valueSeq = function () {
      return t._iter.toSeq().reverse();
    });
    return e;
  };
  em.prototype.map = function (t, e) {
    var r = this;
    var n = ex(this, t, e);
    this._useKeys || (n.valueSeq = function () {
      return r._iter.toSeq().map(t, e);
    });
    return n;
  };
  em.prototype.__iterate = function (t, e) {
    var r;
    var n = this;
    return this._iter.__iterate(this._useKeys ? function (e, r) {
      return t(e, r, n);
    } : (r = e ? eL(this) : 0, function (i) {
      return t(i, e ? --r : r++, n);
    }), e);
  };
  em.prototype.__iterator = function (t, e) {
    if (this._useKeys) return this._iter.__iterator(t, e);
    var r = this._iter.__iterator(1, e);
    var n = e ? eL(this) : 0;
    return new j(function () {
      var i = r.next();
      return i.done ? i : U(t, e ? --n : n++, i.value, i);
    });
  };
  em.prototype[k] = !0;
  f(e_, $);
  e_.prototype.includes = function (t) {
    return this._iter.includes(t);
  };
  e_.prototype.__iterate = function (t, e) {
    var r = this;
    var n = 0;
    return this._iter.__iterate(function (e) {
      return t(e, n++, r);
    }, e);
  };
  e_.prototype.__iterator = function (t, e) {
    var r = this._iter.__iterator(1, e);
    var n = 0;
    return new j(function () {
      var e = r.next();
      return e.done ? e : U(t, n++, e.value, e);
    });
  };
  f(eb, Y);
  eb.prototype.has = function (t) {
    return this._iter.includes(t);
  };
  eb.prototype.__iterate = function (t, e) {
    var r = this;
    return this._iter.__iterate(function (e) {
      return t(e, e, r);
    }, e);
  };
  eb.prototype.__iterator = function (t, e) {
    var r = this._iter.__iterator(1, e);
    return new j(function () {
      var e = r.next();
      return e.done ? e : U(t, e.value, e.value, e);
    });
  };
  f(eS, X);
  eS.prototype.entrySeq = function () {
    return this._iter.toSeq();
  };
  eS.prototype.__iterate = function (t, e) {
    var r = this;
    return this._iter.__iterate(function (e) {
      if (e) {
        eB(e);
        var n = y(e);
        return t(n ? e.get(1) : e[1], n ? e.get(0) : e[0], r);
      }
    }, e);
  };
  eS.prototype.__iterator = function (t, e) {
    var r = this._iter.__iterator(1, e);
    return new j(function () {
      for (;;) {
        var e = r.next();
        if (e.done) return e;
        var n = e.value;
        if (n) {
          eB(n);
          var i = y(n);
          return U(t, i ? n.get(0) : n[0], i ? n.get(1) : n[1], e);
        }
      }
    });
  };
  e_.prototype.cacheResult = em.prototype.cacheResult = eb.prototype.cacheResult = eS.prototype.cacheResult = eN;
  f(ej, tm);
  ej.prototype.toString = function () {
    return this.__toString(eH(this) + " {", "}");
  };
  ej.prototype.has = function (t) {
    return this._defaultValues.hasOwnProperty(t);
  };
  ej.prototype.get = function (t, e) {
    if (!this.has(t)) return e;
    var r = this._defaultValues[t];
    return this._map ? this._map.get(t, r) : r;
  };
  ej.prototype.clear = function () {
    if (this.__ownerID) {
      this._map && this._map.clear();
      return this;
    }
    var t = this.constructor;
    return t._empty || (t._empty = eq(this, tG()));
  };
  ej.prototype.set = function (t, e) {
    if (!this.has(t)) throw Error('Cannot set unknown key "' + t + '" on ' + eH(this));
    var r = this._map && this._map.set(t, e);
    return this.__ownerID || r === this._map ? this : eq(this, r);
  };
  ej.prototype.remove = function (t) {
    if (!this.has(t)) return this;
    var e = this._map && this._map.remove(t);
    return this.__ownerID || e === this._map ? this : eq(this, e);
  };
  ej.prototype.wasAltered = function () {
    return this._map.wasAltered();
  };
  ej.prototype.__iterator = function (t, e) {
    var r = this;
    return h(this._defaultValues).map(function (t, e) {
      return r.get(e);
    }).__iterator(t, e);
  };
  ej.prototype.__iterate = function (t, e) {
    var r = this;
    return h(this._defaultValues).map(function (t, e) {
      return r.get(e);
    }).__iterate(t, e);
  };
  ej.prototype.__ensureOwner = function (t) {
    if (t === this.__ownerID) return this;
    var e = this._map && this._map.__ensureOwner(t);
    return t ? eq(this, e, t) : (this.__ownerID = t, this._map = e, this);
  };
  var eU = ej.prototype;
  function eq(t, e, r) {
    var n = Object.create(Object.getPrototypeOf(t));
    n._map = e;
    n.__ownerID = r;
    return n;
  }
  function eH(t) {
    return t._name || t.constructor.name || "Record";
  }
  function eW(t, e) {
    Object.defineProperty(t, e, {
      get: function () {
        return this.get(e);
      },
      set: function (t) {
        tg(this.__ownerID, "Cannot set on an immutable record.");
        this.set(e, t);
      }
    });
  }
  function eV(t) {
    return null == t ? eZ() : eJ(t) && !b(t) ? t : eZ().withMutations(function (e) {
      var r = g(t);
      tB(r.size);
      r.forEach(function (t) {
        return e.add(t);
      });
    });
  }
  function eJ(t) {
    return !!(t && t[eG]);
  }
  eU[C] = eU.remove;
  eU.deleteIn = eU.removeIn = tN.removeIn;
  eU.merge = tN.merge;
  eU.mergeWith = tN.mergeWith;
  eU.mergeIn = tN.mergeIn;
  eU.mergeDeep = tN.mergeDeep;
  eU.mergeDeepWith = tN.mergeDeepWith;
  eU.mergeDeepIn = tN.mergeDeepIn;
  eU.setIn = tN.setIn;
  eU.update = tN.update;
  eU.updateIn = tN.updateIn;
  eU.withMutations = tN.withMutations;
  eU.asMutable = tN.asMutable;
  eU.asImmutable = tN.asImmutable;
  f(eV, tb);
  eV.of = function () {
    return this(arguments);
  };
  eV.fromKeys = function (t) {
    return this(h(t).keySeq());
  };
  eV.prototype.toString = function () {
    return this.__toString("Set {", "}");
  };
  eV.prototype.has = function (t) {
    return this._map.has(t);
  };
  eV.prototype.add = function (t) {
    return e$(this, this._map.set(t, !0));
  };
  eV.prototype.remove = function (t) {
    return e$(this, this._map.remove(t));
  };
  eV.prototype.clear = function () {
    return e$(this, this._map.clear());
  };
  eV.prototype.union = function () {
    var t = l.call(arguments, 0);
    return 0 === (t = t.filter(function (t) {
      return 0 !== t.size;
    })).length ? this : 0 !== this.size || this.__ownerID || 1 !== t.length ? this.withMutations(function (e) {
      for (var r = 0; r < t.length; r++) g(t[r]).forEach(function (t) {
        return e.add(t);
      });
    }) : this.constructor(t[0]);
  };
  eV.prototype.intersect = function () {
    var t = l.call(arguments, 0);
    if (0 === t.length) return this;
    t = t.map(function (t) {
      return g(t);
    });
    var e = this;
    return this.withMutations(function (r) {
      e.forEach(function (e) {
        t.every(function (t) {
          return t.includes(e);
        }) || r.remove(e);
      });
    });
  };
  eV.prototype.subtract = function () {
    var t = l.call(arguments, 0);
    if (0 === t.length) return this;
    t = t.map(function (t) {
      return g(t);
    });
    var e = this;
    return this.withMutations(function (r) {
      e.forEach(function (e) {
        t.some(function (t) {
          return t.includes(e);
        }) && r.remove(e);
      });
    });
  };
  eV.prototype.merge = function () {
    return this.union.apply(this, arguments);
  };
  eV.prototype.mergeWith = function (t) {
    var e = l.call(arguments, 1);
    return this.union.apply(this, e);
  };
  eV.prototype.sort = function (t) {
    return eQ(eK(this, t));
  };
  eV.prototype.sortBy = function (t, e) {
    return eQ(eK(this, e, t));
  };
  eV.prototype.wasAltered = function () {
    return this._map.wasAltered();
  };
  eV.prototype.__iterate = function (t, e) {
    var r = this;
    return this._map.__iterate(function (e, n) {
      return t(n, n, r);
    }, e);
  };
  eV.prototype.__iterator = function (t, e) {
    return this._map.map(function (t, e) {
      return e;
    }).__iterator(t, e);
  };
  eV.prototype.__ensureOwner = function (t) {
    if (t === this.__ownerID) return this;
    var e = this._map.__ensureOwner(t);
    return t ? this.__make(e, t) : (this.__ownerID = t, this._map = e, this);
  };
  eV.isSet = eJ;
  var eG = "@@__IMMUTABLE_SET__@@";
  var eX = eV.prototype;
  function e$(t, e) {
    return t.__ownerID ? (t.size = e.size, t._map = e, t) : e === t._map ? t : 0 === e.size ? t.__empty() : t.__make(e);
  }
  function eY(t, e) {
    var r = Object.create(eX);
    r.size = t ? t.size : 0;
    r._map = t;
    r.__ownerID = e;
    return r;
  }
  function eZ() {
    return s || (s = eY(tG()));
  }
  function eQ(t) {
    return null == t ? e5() : e0(t) ? t : e5().withMutations(function (e) {
      var r = g(t);
      tB(r.size);
      r.forEach(function (t) {
        return e.add(t);
      });
    });
  }
  function e0(t) {
    return eJ(t) && b(t);
  }
  eX[eG] = !0;
  eX[C] = eX.remove;
  eX.mergeDeep = eX.merge;
  eX.mergeDeepWith = eX.mergeWith;
  eX.withMutations = tN.withMutations;
  eX.asMutable = tN.asMutable;
  eX.asImmutable = tN.asImmutable;
  eX.__empty = eZ;
  eX.__make = eY;
  f(eQ, eV);
  eQ.of = function () {
    return this(arguments);
  };
  eQ.fromKeys = function (t) {
    return this(h(t).keySeq());
  };
  eQ.prototype.toString = function () {
    return this.__toString("OrderedSet {", "}");
  };
  eQ.isOrderedSet = e0;
  var e1 = eQ.prototype;
  function e2(t, e) {
    var r = Object.create(e1);
    r.size = t ? t.size : 0;
    r._map = t;
    r.__ownerID = e;
    return r;
  }
  function e5() {
    return u || (u = e2(ey()));
  }
  function e6(t) {
    return null == t ? e9() : e3(t) ? t : e9().unshiftAll(t);
  }
  function e3(t) {
    return !!(t && t[e4]);
  }
  e1[k] = !0;
  e1.__empty = e5;
  e1.__make = e2;
  f(e6, t_);
  e6.of = function () {
    return this(arguments);
  };
  e6.prototype.toString = function () {
    return this.__toString("Stack [", "]");
  };
  e6.prototype.get = function (t, e) {
    var r = this._head;
    for (t = B(this, t); r && t--;) r = r.next;
    return r ? r.value : e;
  };
  e6.prototype.peek = function () {
    return this._head && this._head.value;
  };
  e6.prototype.push = function () {
    if (0 == $$arguments.length) return this;
    for (t = this.size + $$arguments.length, e = this._head, r = $$arguments.length - 1, void 0; r >= 0; r--) {
      var t;
      var e;
      var r;
      e = {
        value: $$arguments[r],
        next: e
      };
    }
    return this.__ownerID ? (this.size = t, this._head = e, this.__hash = void 0, this.__altered = !0, this) : e8(t, e);
  };
  e6.prototype.pushAll = function (t) {
    if (0 === (t = d(t)).size) return this;
    tB(t.size);
    var e = this.size;
    var r = this._head;
    return (t.reverse().forEach(function (t) {
      e++;
      r = {
        value: t,
        next: r
      };
    }), this.__ownerID) ? (this.size = e, this._head = r, this.__hash = void 0, this.__altered = !0, this) : e8(e, r);
  };
  e6.prototype.pop = function () {
    return this.slice(1);
  };
  e6.prototype.unshift = function () {
    return this.push.apply(this, arguments);
  };
  e6.prototype.unshiftAll = function (t) {
    return this.pushAll(t);
  };
  e6.prototype.shift = function () {
    return this.pop.apply(this, arguments);
  };
  e6.prototype.clear = function () {
    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, this.__hash = void 0, this.__altered = !0, this) : e9();
  };
  e6.prototype.slice = function (t, e) {
    if (R(t, e, this.size)) return this;
    var r;
    var n = F(t, this.size, 0);
    if (F(e, r = this.size, r) !== this.size) return t_.prototype.slice.call(this, t, e);
    for (i = this.size - n, o = this._head, void 0; n--;) {
      var i;
      var o;
      o = o.next;
    }
    return this.__ownerID ? (this.size = i, this._head = o, this.__hash = void 0, this.__altered = !0, this) : e8(i, o);
  };
  e6.prototype.__ensureOwner = function (t) {
    return t === this.__ownerID ? this : t ? e8(this.size, this._head, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this);
  };
  e6.prototype.__iterate = function (t, e) {
    if (e) return this.reverse().__iterate(t);
    for (r = 0, n = this._head, void 0; n && !1 !== t(n.value, r++, this);) {
      var r;
      var n;
      n = n.next;
    }
    return r;
  };
  e6.prototype.__iterator = function (t, e) {
    if (e) return this.reverse().__iterator(t);
    var r = 0;
    var n = this._head;
    return new j(function () {
      if (n) {
        var e = n.value;
        n = n.next;
        return U(t, r++, e);
      }
      return q();
    });
  };
  e6.isStack = e3;
  var e4 = "@@__IMMUTABLE_STACK__@@";
  var e7 = e6.prototype;
  function e8(t, e, r, n) {
    var i = Object.create(e7);
    i.size = t;
    i._head = e;
    i.__ownerID = r;
    i.__hash = n;
    i.__altered = !1;
    return i;
  }
  function e9() {
    return c || (c = e8(0));
  }
  function rt(t, e) {
    var r = function (r) {
      t.prototype[r] = e[r];
    };
    Object.keys(e).forEach(r);
    Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach(r);
    return t;
  }
  e7[e4] = !0;
  e7.withMutations = tN.withMutations;
  e7.asMutable = tN.asMutable;
  e7.asImmutable = tN.asImmutable;
  e7.wasAltered = tN.wasAltered;
  p.Iterator = j;
  rt(p, {
    toArray: function () {
      tB(this.size);
      var t = Array(this.size || 0);
      this.valueSeq().__iterate(function (e, r) {
        t[r] = e;
      });
      return t;
    },
    toIndexedSeq: function () {
      return new e_(this);
    },
    toJS: function () {
      return this.toSeq().map(function (t) {
        return t && "function" == typeof t.toJS ? t.toJS() : t;
      }).__toJS();
    },
    toJSON: function () {
      return this.toSeq().map(function (t) {
        return t && "function" == typeof t.toJSON ? t.toJSON() : t;
      }).__toJS();
    },
    toKeyedSeq: function () {
      return new em(this, !0);
    },
    toMap: function () {
      return tL(this.toKeyedSeq());
    },
    toObject: function () {
      tB(this.size);
      var t = {};
      this.__iterate(function (e, r) {
        t[r] = e;
      });
      return t;
    },
    toOrderedMap: function () {
      return eh(this.toKeyedSeq());
    },
    toOrderedSet: function () {
      return eQ(v(this) ? this.valueSeq() : this);
    },
    toSet: function () {
      return eV(v(this) ? this.valueSeq() : this);
    },
    toSetSeq: function () {
      return new eb(this);
    },
    toSeq: function () {
      return m(this) ? this.toIndexedSeq() : v(this) ? this.toKeyedSeq() : this.toSetSeq();
    },
    toStack: function () {
      return e6(v(this) ? this.valueSeq() : this);
    },
    toList: function () {
      return t8(v(this) ? this.valueSeq() : this);
    },
    toString: function () {
      return "[Iterable]";
    },
    __toString: function (t, e) {
      return 0 === this.size ? t + e : t + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + e;
    },
    concat: function () {
      var t = l.call(arguments, 0);
      return eI(this, function (t, e) {
        var r = v(t);
        var n = [t].concat(e).map(function (t) {
          y(t) ? r && (t = h(t)) : t = r ? to(t) : ta(Array.isArray(t) ? t : [t]);
          return t;
        }).filter(function (t) {
          return 0 !== t.size;
        });
        if (0 === n.length) return t;
        if (1 === n.length) {
          var i = n[0];
          if (i === t || r && v(i) || m(t) && m(i)) return i;
        }
        var o = new Q(n);
        r ? o = o.toKeyedSeq() : m(t) || (o = o.toSetSeq());
        (o = o.flatten(!0)).size = n.reduce(function (t, e) {
          if (void 0 !== t) {
            var r = e.size;
            if (void 0 !== r) return t + r;
          }
        }, 0);
        return o;
      }(this, t));
    },
    includes: function (t) {
      return this.some(function (e) {
        return tp(e, t);
      });
    },
    entries: function () {
      return this.__iterator(2);
    },
    every: function (t, e) {
      tB(this.size);
      var r = !0;
      this.__iterate(function (n, i, o) {
        if (!t.call(e, n, i, o)) {
          r = !1;
          return !1;
        }
      });
      return r;
    },
    filter: function (t, e) {
      return eI(this, eC(this, t, e, !0));
    },
    find: function (t, e, r) {
      var n = this.findEntry(t, e);
      return n ? n[1] : r;
    },
    findEntry: function (t, e) {
      var r;
      this.__iterate(function (n, i, o) {
        if (t.call(e, n, i, o)) {
          r = [i, n];
          return !1;
        }
      });
      return r;
    },
    findLastEntry: function (t, e) {
      return this.toSeq().reverse().findEntry(t, e);
    },
    forEach: function (t, e) {
      tB(this.size);
      return this.__iterate(e ? t.bind(e) : t);
    },
    join: function (t) {
      tB(this.size);
      t = void 0 !== t ? "" + t : ",";
      var e = "";
      var r = !0;
      this.__iterate(function (n) {
        r ? r = !1 : e += t;
        e += null != n ? n.toString() : "";
      });
      return e;
    },
    keys: function () {
      return this.__iterator(0);
    },
    map: function (t, e) {
      return eI(this, ex(this, t, e));
    },
    reduce: function (t, e, r) {
      var n;
      var i;
      tB(this.size);
      $$arguments.length < 2 ? i = !0 : n = e;
      this.__iterate(function (e, o, a) {
        i ? (i = !1, n = e) : n = t.call(r, n, e, o, a);
      });
      return n;
    },
    reduceRight: function (t, e, r) {
      var n = this.toKeyedSeq().reverse();
      return n.reduce.apply(n, arguments);
    },
    reverse: function () {
      return eI(this, ek(this, !0));
    },
    slice: function (t, e) {
      return eI(this, eE(this, t, e, !0));
    },
    some: function (t, e) {
      return !this.every(ro(t), e);
    },
    sort: function (t) {
      return eI(this, eK(this, t));
    },
    values: function () {
      return this.__iterator(1);
    },
    butLast: function () {
      return this.slice(0, -1);
    },
    isEmpty: function () {
      return void 0 !== this.size ? 0 === this.size : !this.some(function () {
        return !0;
      });
    },
    count: function (t, e) {
      return I(t ? this.toSeq().filter(t, e) : this);
    },
    countBy: function (t, e) {
      var r;
      var n;
      r = this;
      n = tL().asMutable();
      r.__iterate(function (i, o) {
        n.update(t.call(e, i, o, r), 0, function (t) {
          return t + 1;
        });
      });
      return n.asImmutable();
    },
    equals: function (t) {
      return th(this, t);
    },
    entrySeq: function () {
      var t = this;
      if (t._cache) return new Q(t._cache);
      var e = t.toSeq().map(ri).toIndexedSeq();
      e.fromEntrySeq = function () {
        return t.toSeq();
      };
      return e;
    },
    filterNot: function (t, e) {
      return this.filter(ro(t), e);
    },
    findLast: function (t, e, r) {
      return this.toKeyedSeq().reverse().find(t, e, r);
    },
    first: function () {
      return this.find(L);
    },
    flatMap: function (t, e) {
      var r;
      var n;
      return eI(this, (r = this, n = eR(r), r.toSeq().map(function (i, o) {
        return n(t.call(e, i, o, r));
      }).flatten(!0)));
    },
    flatten: function (t) {
      return eI(this, eD(this, t, !0));
    },
    fromEntrySeq: function () {
      return new eS(this);
    },
    get: function (t, e) {
      return this.find(function (e, r) {
        return tp(r, t);
      }, void 0, e);
    },
    getIn: function (t, e) {
      for (n = this, i = ez(t), void 0; !(r = i.next()).done;) {
        var r;
        var n;
        var i;
        var o = r.value;
        if ((n = n && n.get ? n.get(o, E) : E) === E) return e;
      }
      return n;
    },
    groupBy: function (t, e) {
      return function (t, e, r) {
        var n = v(t);
        var i = (b(t) ? eh() : tL()).asMutable();
        t.__iterate(function (o, a) {
          i.update(e.call(r, o, a, t), function (t) {
            (t = t || []).push(n ? [a, o] : o);
            return t;
          });
        });
        var o = eR(t);
        return i.map(function (e) {
          return eI(t, o(e));
        });
      }(this, t, e);
    },
    has: function (t) {
      return this.get(t, E) !== E;
    },
    hasIn: function (t) {
      return this.getIn(t, E) !== E;
    },
    isSubset: function (t) {
      t = "function" == typeof t.includes ? t : p(t);
      return this.every(function (e) {
        return t.includes(e);
      });
    },
    isSuperset: function (t) {
      return (t = "function" == typeof t.isSubset ? t : p(t)).isSubset(this);
    },
    keySeq: function () {
      return this.toSeq().map(rn).toIndexedSeq();
    },
    last: function () {
      return this.toSeq().reverse().first();
    },
    max: function (t) {
      return eT(this, t);
    },
    maxBy: function (t, e) {
      return eT(this, e, t);
    },
    min: function (t) {
      return eT(this, t ? ra(t) : rc);
    },
    minBy: function (t, e) {
      return eT(this, e ? ra(e) : rc, t);
    },
    rest: function () {
      return this.slice(1);
    },
    skip: function (t) {
      return this.slice(Math.max(0, t));
    },
    skipLast: function (t) {
      return eI(this, this.toSeq().reverse().skip(t).reverse());
    },
    skipWhile: function (t, e) {
      return eI(this, eO(this, t, e, !0));
    },
    skipUntil: function (t, e) {
      return this.skipWhile(ro(t), e);
    },
    sortBy: function (t, e) {
      return eI(this, eK(this, e, t));
    },
    take: function (t) {
      return this.slice(0, Math.max(0, t));
    },
    takeLast: function (t) {
      return eI(this, this.toSeq().reverse().take(t).reverse());
    },
    takeWhile: function (t, e) {
      var r;
      var n;
      return eI(this, (r = this, (n = eF(r)).__iterateUncached = function (n, i) {
        var o = this;
        if (i) return this.cacheResult().__iterate(n, i);
        var a = 0;
        r.__iterate(function (r, i, s) {
          return t.call(e, r, i, s) && ++a && n(r, i, o);
        });
        return a;
      }, n.__iteratorUncached = function (n, i) {
        var o = this;
        if (i) return this.cacheResult().__iterator(n, i);
        var a = r.__iterator(2, i);
        var s = !0;
        return new j(function () {
          if (!s) return q();
          var r = a.next();
          if (r.done) return r;
          var i = r.value;
          var u = i[0];
          var c = i[1];
          return t.call(e, c, u, o) ? 2 === n ? r : U(n, u, c, r) : (s = !1, q());
        });
      }, n));
    },
    takeUntil: function (t, e) {
      return this.takeWhile(ro(t), e);
    },
    valueSeq: function () {
      return this.toIndexedSeq();
    },
    hashCode: function () {
      return this.__hash || (this.__hash = function (t) {
        if (t.size === 1 / 0) return 0;
        var e;
        var r;
        var n = b(t);
        var i = v(t);
        var o = n ? 1 : 0;
        e = t.__iterate(i ? n ? function (t, e) {
          o = 31 * o + rl(tx(t), tx(e)) | 0;
        } : function (t, e) {
          o = o + rl(tx(t), tx(e)) | 0;
        } : n ? function (t) {
          o = 31 * o + tx(t) | 0;
        } : function (t) {
          o = o + tx(t) | 0;
        });
        r = tS(r = o, 0xcc9e2d51);
        r = tS(r << 15 | r >>> -15, 0x1b873593);
        r = ((r = tS(r << 13 | r >>> -13, 5)) + 0xe6546b64 | 0) ^ e;
        r = tS(r ^ r >>> 16, 0x85ebca6b);
        return r = tw((r = tS(r ^ r >>> 13, 0xc2b2ae35)) ^ r >>> 16);
      }(this));
    }
  });
  var re = p.prototype;
  re[S] = !0;
  re[z] = re.values;
  re.__toJS = re.toArray;
  re.__toStringMapper = rs;
  re.inspect = re.toSource = function () {
    return this.toString();
  };
  re.chain = re.flatMap;
  re.contains = re.includes;
  (function () {
    try {
      Object.defineProperty(re, "length", {
        get: function () {
          if (!p.noLengthWarning) {
            var t;
            try {
              throw Error();
            } catch (e) {
              t = e.stack;
            }
            if (-1 === t.indexOf("_wrapObject")) {
              console && console.warn && console.warn("iterable.length has been deprecated, use iterable.size or iterable.count(). This warning will become a silent error in a future version. " + t);
              return this.size;
            }
          }
        }
      });
    } catch (t) {}
  })();
  rt(h, {
    flip: function () {
      return eI(this, ew(this));
    },
    findKey: function (t, e) {
      var r = this.findEntry(t, e);
      return r && r[0];
    },
    findLastKey: function (t, e) {
      return this.toSeq().reverse().findKey(t, e);
    },
    keyOf: function (t) {
      return this.findKey(function (e) {
        return tp(e, t);
      });
    },
    lastKeyOf: function (t) {
      return this.findLastKey(function (e) {
        return tp(e, t);
      });
    },
    mapEntries: function (t, e) {
      var r = this;
      var n = 0;
      return eI(this, this.toSeq().map(function (i, o) {
        return t.call(e, [o, i], n++, r);
      }).fromEntrySeq());
    },
    mapKeys: function (t, e) {
      var r = this;
      return eI(this, this.toSeq().flip().map(function (n, i) {
        return t.call(e, n, i, r);
      }).flip());
    }
  });
  var rr = h.prototype;
  function rn(t, e) {
    return e;
  }
  function ri(t, e) {
    return [e, t];
  }
  function ro(t) {
    return function () {
      return !t.apply(this, arguments);
    };
  }
  function ra(t) {
    return function () {
      return -t.apply(this, arguments);
    };
  }
  function rs(t) {
    return "string" == typeof t ? JSON.stringify(t) : t;
  }
  function ru() {
    return A(arguments);
  }
  function rc(t, e) {
    return t < e ? 1 : t > e ? -1 : 0;
  }
  function rl(t, e) {
    return t ^ e + 0x9e3779b9 + (t << 6) + (t >> 2) | 0;
  }
  rr[w] = !0;
  rr[z] = re.entries;
  rr.__toJS = re.toObject;
  rr.__toStringMapper = function (t, e) {
    return JSON.stringify(e) + ": " + rs(t);
  };
  rt(d, {
    toKeyedSeq: function () {
      return new em(this, !1);
    },
    filter: function (t, e) {
      return eI(this, eC(this, t, e, !1));
    },
    findIndex: function (t, e) {
      var r = this.findEntry(t, e);
      return r ? r[0] : -1;
    },
    indexOf: function (t) {
      var e = this.toKeyedSeq().keyOf(t);
      return void 0 === e ? -1 : e;
    },
    lastIndexOf: function (t) {
      var e = this.toKeyedSeq().reverse().keyOf(t);
      return void 0 === e ? -1 : e;
    },
    reverse: function () {
      return eI(this, ek(this, !1));
    },
    slice: function (t, e) {
      return eI(this, eE(this, t, e, !1));
    },
    splice: function (t, e) {
      var r = $$arguments.length;
      if (e = Math.max(0 | e, 0), 0 === r || 2 === r && !e) return this;
      t = F(t, t < 0 ? this.count() : this.size, 0);
      var n = this.slice(0, t);
      return eI(this, 1 === r ? n : n.concat(A(arguments, 2), this.slice(t + e)));
    },
    findLastIndex: function (t, e) {
      var r = this.toKeyedSeq().findLastKey(t, e);
      return void 0 === r ? -1 : r;
    },
    first: function () {
      return this.get(0);
    },
    flatten: function (t) {
      return eI(this, eD(this, t, !1));
    },
    get: function (t, e) {
      return (t = B(this, t)) < 0 || this.size === 1 / 0 || void 0 !== this.size && t > this.size ? e : this.find(function (e, r) {
        return r === t;
      }, void 0, e);
    },
    has: function (t) {
      return (t = B(this, t)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || t < this.size : -1 !== this.indexOf(t));
    },
    interpose: function (t) {
      var e;
      var r;
      return eI(this, (e = this, (r = eF(e)).size = e.size && 2 * e.size - 1, r.__iterateUncached = function (r, n) {
        var i = this;
        var o = 0;
        e.__iterate(function (e, n) {
          return (!o || !1 !== r(t, o++, i)) && !1 !== r(e, o++, i);
        }, n);
        return o;
      }, r.__iteratorUncached = function (r, n) {
        var i;
        var o = e.__iterator(1, n);
        var a = 0;
        return new j(function () {
          return (!i || a % 2) && (i = o.next()).done ? i : a % 2 ? U(r, a++, t) : U(r, a++, i.value, i);
        });
      }, r));
    },
    interleave: function () {
      var t = [this].concat(A(arguments));
      var e = eA(this.toSeq(), $.of, t);
      var r = e.flatten(!0);
      e.size && (r.size = e.size * t.length);
      return eI(this, r);
    },
    last: function () {
      return this.get(-1);
    },
    skipWhile: function (t, e) {
      return eI(this, eO(this, t, e, !1));
    },
    zip: function () {
      var t = [this].concat(A(arguments));
      return eI(this, eA(this, ru, t));
    },
    zipWith: function (t) {
      var e = A(arguments);
      e[0] = this;
      return eI(this, eA(this, t, e));
    }
  });
  d.prototype[x] = !0;
  d.prototype[k] = !0;
  rt(g, {
    get: function (t, e) {
      return this.has(t) ? t : e;
    },
    includes: function (t) {
      return this.has(t);
    },
    keySeq: function () {
      return this.valueSeq();
    }
  });
  g.prototype.has = re.includes;
  rt(X, h.prototype);
  rt($, d.prototype);
  rt(Y, g.prototype);
  rt(tm, h.prototype);
  rt(t_, d.prototype);
  rt(tb, g.prototype);
  return {
    Iterable: p,
    Seq: G,
    Collection: tv,
    Map: tL,
    OrderedMap: eh,
    List: t8,
    Stack: e6,
    Set: eV,
    OrderedSet: eQ,
    Record: ej,
    Range: ty,
    Repeat: td,
    is: tp,
    fromJS: tl
  };
};
module.exports = e();