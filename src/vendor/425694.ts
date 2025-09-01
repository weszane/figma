import { Map as _$$Map, OrderedSet, Record } from "../vendor/116740";
var i = _$$Map;
var o = OrderedSet;
var a = Record;
var s = o();
var u = {
  style: s,
  entity: null
};
var c = function (t) {
  function e() {
    return t.apply(this, arguments) || this;
  }
  e.prototype = Object.create(t.prototype);
  e.prototype.constructor = e;
  e.__proto__ = t;
  var r = e.prototype;
  r.getStyle = function () {
    return this.get("style");
  };
  r.getEntity = function () {
    return this.get("entity");
  };
  r.hasStyle = function (t) {
    return this.getStyle().includes(t);
  };
  e.applyStyle = function (t, r) {
    var n = t.set("style", t.getStyle().add(r));
    return e.create(n);
  };
  e.removeStyle = function (t, r) {
    var n = t.set("style", t.getStyle().remove(r));
    return e.create(n);
  };
  e.applyEntity = function (t, r) {
    var n = t.getEntity() === r ? t : t.set("entity", r);
    return e.create(n);
  };
  e.create = function (t) {
    if (!t) return l;
    var r = i({
      style: s,
      entity: null
    }).merge(t);
    var n = f.get(r);
    if (n) return n;
    var o = new e(r);
    f = f.set(r, o);
    return o;
  };
  e.fromJS = function (t) {
    var r = t.style;
    var n = t.entity;
    return new e({
      style: Array.isArray(r) ? o(r) : r,
      entity: Array.isArray(n) ? o(n) : n
    });
  };
  return e;
}(a(u));
var l = new c();
var f = i([[i(u), l]]);
c.EMPTY = l;
module.exports = c;