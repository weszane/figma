export function $$t0(e, n) {
  var i = n && n.cache ? n.cache : u;
  var t = n && n.serializer ? n.serializer : a;
  return (n && n.strategy ? n.strategy : function (e, n) {
    var i;
    var t;
    var a = 1 === e.length ? f : r;
    i = n.cache.create();
    t = n.serializer;
    return a.bind(this, e, i, t);
  })(e, {
    cache: i,
    serializer: t
  });
}
function f(e, n, i, t) {
  var f = null == t || "number" == typeof t || "boolean" == typeof t ? t : i(t);
  var r = n.get(f);
  void 0 === r && (r = e.call(this, t), n.set(f, r));
  return r;
}
function r(e, n, i) {
  var t = Array.prototype.slice.call(arguments, 3);
  var f = i(t);
  var r = n.get(f);
  void 0 === r && (r = e.apply(this, t), n.set(f, r));
  return r;
}
var a = function () {
  return JSON.stringify(arguments);
};
function o() {
  this.cache = Object.create(null);
}
o.prototype.get = function (e) {
  return this.cache[e];
};
o.prototype.set = function (e, n) {
  this.cache[e] = n;
};
var u = {
  create: function () {
    return new o();
  }
};
var $$l1 = {
  variadic: function (e, n) {
    var i;
    var t;
    i = n.cache.create();
    t = n.serializer;
    return r.bind(this, e, i, t);
  },
  monadic: function (e, n) {
    var i;
    var t;
    i = n.cache.create();
    t = n.serializer;
    return f.bind(this, e, i, t);
  }
};
export const _$$default = $$t0;
export const strategies = $$l1;