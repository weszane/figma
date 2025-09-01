var e = Object.prototype.hasOwnProperty;
var r = "~";
function i() {}
function n(t, e, r) {
  this.fn = t;
  this.context = e;
  this.once = r || !1;
}
function s(t, e, i, s, l) {
  if ("function" != typeof i) throw TypeError("The listener must be a function");
  var o = new n(i, s || t, l);
  var a = r ? r + e : e;
  t._events[a] ? t._events[a].fn ? t._events[a] = [t._events[a], o] : t._events[a].push(o) : (t._events[a] = o, t._eventsCount++);
  return t;
}
function l(t, e) {
  0 == --t._eventsCount ? t._events = new i() : delete t._events[e];
}
function o() {
  this._events = new i();
  this._eventsCount = 0;
}
Object.create && (i.prototype = Object.create(null), new i().__proto__ || (r = !1));
o.prototype.eventNames = function () {
  var t;
  var i;
  var n = [];
  if (0 === this._eventsCount) return n;
  for (i in t = this._events) e.call(t, i) && n.push(r ? i.slice(1) : i);
  return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n;
};
o.prototype.listeners = function (t) {
  var e = r ? r + t : t;
  var i = this._events[e];
  if (!i) return [];
  if (i.fn) return [i.fn];
  for (n = 0, s = i.length, l = Array(s), void 0; n < s; n++) {
    var n;
    var s;
    var l;
    l[n] = i[n].fn;
  }
  return l;
};
o.prototype.listenerCount = function (t) {
  var e = r ? r + t : t;
  var i = this._events[e];
  return i ? i.fn ? 1 : i.length : 0;
};
o.prototype.emit = function (t, e, i, n, s, l) {
  var o = r ? r + t : t;
  if (!this._events[o]) return !1;
  var a;
  var c;
  var u = this._events[o];
  var h = $$arguments.length;
  if (u.fn) {
    switch (u.once && this.removeListener(t, u.fn, void 0, !0), h) {
      case 1:
        u.fn.call(u.context);
        return !0;
      case 2:
        u.fn.call(u.context, e);
        return !0;
      case 3:
        u.fn.call(u.context, e, i);
        return !0;
      case 4:
        u.fn.call(u.context, e, i, n);
        return !0;
      case 5:
        u.fn.call(u.context, e, i, n, s);
        return !0;
      case 6:
        u.fn.call(u.context, e, i, n, s, l);
        return !0;
    }
    for (c = 1, a = Array(h - 1); c < h; c++) a[c - 1] = $$arguments[c];
    u.fn.apply(u.context, a);
  } else {
    var d;
    var f = u.length;
    for (c = 0; c < f; c++) switch (u[c].once && this.removeListener(t, u[c].fn, void 0, !0), h) {
      case 1:
        u[c].fn.call(u[c].context);
        break;
      case 2:
        u[c].fn.call(u[c].context, e);
        break;
      case 3:
        u[c].fn.call(u[c].context, e, i);
        break;
      case 4:
        u[c].fn.call(u[c].context, e, i, n);
        break;
      default:
        if (!a) for (d = 1, a = Array(h - 1); d < h; d++) a[d - 1] = $$arguments[d];
        u[c].fn.apply(u[c].context, a);
    }
  }
  return !0;
};
o.prototype.on = function (t, e, r) {
  return s(this, t, e, r, !1);
};
o.prototype.once = function (t, e, r) {
  return s(this, t, e, r, !0);
};
o.prototype.removeListener = function (t, e, i, n) {
  var s = r ? r + t : t;
  if (!this._events[s]) return this;
  if (!e) {
    l(this, s);
    return this;
  }
  var o = this._events[s];
  if (o.fn) o.fn !== e || n && !o.once || i && o.context !== i || l(this, s);else {
    for (a = 0, c = [], u = o.length, void 0; a < u; a++) {
      var a;
      var c;
      var u;
      (o[a].fn !== e || n && !o[a].once || i && o[a].context !== i) && c.push(o[a]);
    }
    c.length ? this._events[s] = 1 === c.length ? c[0] : c : l(this, s);
  }
  return this;
};
o.prototype.removeAllListeners = function (t) {
  var e;
  t ? (e = r ? r + t : t, this._events[e] && l(this, e)) : (this._events = new i(), this._eventsCount = 0);
  return this;
};
o.prototype.off = o.prototype.removeListener;
o.prototype.addListener = o.prototype.on;
o.prefixed = r;
o.EventEmitter = o;
module.exports = o;